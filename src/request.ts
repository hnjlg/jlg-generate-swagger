import fs from 'fs';
import path from 'path';
import constant from './constant';
import { log, duplicateRemovalInArr, schemaObjectProperties } from './utils';
import { I_Config } from './type';

const requestInit = (config: I_Config) => {
	const swaggerFileName = config.swaggerFileName ?? constant.swaggerFileName;
	const swaggerFile = path.join(__dirname, swaggerFileName);
	return new Promise((resolve, reject) => {
		fs.readFile(swaggerFile, (err, data) => {
			log('info', '开始生成request接口文件');
			if (err) {
				log('error', `读取文件${swaggerFile}时发生错误：${err.message}`);
				return;
			}

			try {
				const obj = JSON.parse(data.toString('utf8')); // 将JSON字符串转换为JavaScript对象
				const requestTypeArr: string[] = [];
				const requestGetkeys: string[] = [];
				const requestPostkeys: string[] = [];
				const requestParametersKeys: string[] = [];
				let requestFileContent = config.axiosUrl + '\nexport declare interface ResponseData<T>{content: T;message: string | void;status: number;}\n';
				Object.keys(obj.paths).forEach((axiosUrl) => {
					let requestFileItemContent = `export const `;
					Object.keys(obj.paths[axiosUrl]).forEach((requestType) => {
						const str = axiosUrl
							.split('/')
							.map((str) => {
								return str.replace(/^\{|\}$/g, '');
							})
							.join('');
						requestFileItemContent += `${requestType}${str.substring(0, 1).toUpperCase() + str.substring(1)} = `;
						requestTypeArr.push(requestType);
						let parameterStr = '';
						let parameData = '';
						const axiosOption = obj.paths[axiosUrl][requestType];
						const parameterTypeKeyArr: string[] = [];
						let returnType = '';
						if (axiosOption.responses[200].content && axiosOption.responses[200].content['application/json']) {
							returnType = schemaObjectProperties(
								config,
								{
									properties: {
										value: axiosOption.responses[200].content['application/json'].schema,
									},
								},
								'value',
								[],
								[],
								''
							);
						}
						if (axiosOption.parameters) {
							parameterStr += axiosOption.parameters.reduce((acc: string, parameter: { name: string; schema?: any }) => {
								const typeKey = parameter.name;
								parameterTypeKeyArr.push(typeKey);
								const typeValue = schemaObjectProperties(
									config,
									{
										properties: {
											value: parameter.schema,
										},
									},
									'value',
									[],
									[],
									',',
									true
								);
								Object.keys(parameter).forEach((parameterKey) => {
									requestParametersKeys.push(parameterKey);
								});
								return `${acc}${typeKey}: ${typeValue}`;
							}, '');
						}

						if (axiosOption.requestBody) {
							const typeKey = 'data';
							let typeValue = '';
							if (axiosOption.requestBody.content && axiosOption.requestBody.content['application/json']) {
								typeValue = schemaObjectProperties(
									config,
									{
										properties: {
											value: axiosOption.requestBody.content['application/json'].schema,
										},
									},
									'value',
									[],
									[],
									','
								);
							} else if (axiosOption.requestBody.content && axiosOption.requestBody.content['multipart/form-data']) {
								typeValue = schemaObjectProperties(
									config,
									{
										properties: {
											value: axiosOption.requestBody.content['multipart/form-data'].schema,
										},
									},
									'value',
									[],
									[],
									','
								);
							}
							parameData += `${typeKey}:${typeValue}`;
						}
						const urlParameStr = parameterTypeKeyArr
							.map((item) => {
								return '${' + item + "?'" + item + "='" + '+' + item + ':' + "''" + '}';
							})
							.join('&');
						requestFileItemContent = `${requestFileItemContent}(${parameterStr + parameData}) => {\n\t return axios.${requestType}${
							returnType ? '<ResponseData<' + returnType + '>>' : ''
						}(\`${axiosUrl}${urlParameStr ? '?' : ''}${urlParameStr}\`${axiosOption.requestBody ? ',data' : ''});\n};\n`;

						Object.keys(axiosOption).forEach((item3) => {
							if (requestType === 'get') {
								requestGetkeys.push(item3);
							} else if (requestType === 'post') {
								requestPostkeys.push(item3);
							}
						});
					});
					requestFileContent += requestFileItemContent;
				});
				duplicateRemovalInArr(requestTypeArr, ['get', 'post'], (item: string) => {
					log('info', item);
				});
				duplicateRemovalInArr(requestGetkeys, ['tags', 'summary', 'parameters', 'responses'], (item: string) => {
					log('info', 'requestGetkeys', item);
				});
				duplicateRemovalInArr(requestPostkeys, ['tags', 'summary', 'parameters', 'responses', 'requestBody'], (item: string) => {
					log('info', 'requestPostkeys', item);
				});
				duplicateRemovalInArr(requestParametersKeys, ['name', 'in', 'description', 'schema', 'x-enumNames'], (item: string) => {
					log('info', 'requestParametersKeys', item);
				});
				resolve(requestFileContent);
				log('info', 'request接口文件生成成功');
			} catch (err) {
				reject(err);
				log('error', `解析JSON文件${swaggerFile}时发生错误：${err}`);
			}
		});
	});
};

export default requestInit;
