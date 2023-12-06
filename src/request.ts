import fs from 'fs';
import { log, duplicateRemovalInArr, schemaObjectProperties, I_SchemaObjectPropertiesReturn } from './utils';
import { I_Config } from './type';

const requestInit = (config: I_Config) => {
	return new Promise((resolve, reject) => {
		fs.readFile(config.swaggerFileName, (err, data) => {
			log('info', '开始生成request接口文件');
			if (err) {
				log('error', `读取文件${config.swaggerFileName}时发生错误：${err.message}`);
				return;
			}

			try {
				const obj = JSON.parse(data.toString('utf8')); // 将JSON字符串转换为JavaScript对象
				const requestTypeArr: string[] = [];
				const requestGetkeys: string[] = [];
				const requestPostkeys: string[] = [];
				const requestParametersKeys: string[] = [];
				let requestFileContent = [
					...(config.resultFileContentHeader ?? []),
					config.axiosUrl,
					'export declare interface ResponseData<T>{content: T;message: string | void;status: number;}',
					'type ItemInTu<T, K> = T extends [infer F, ...infer R] ? (F extends K ? true : ItemInTu<R, K>) : false;',
					'export declare type U_I_NoNull<T, U extends Array<keyof T>> = {[K in keyof T as ItemInTu<U, K> extends true ? never : K]: T[K];} & {[K in keyof T as ItemInTu<U, K> extends true ? K : never]-?: T[K];};',
				].join('\n');
				Object.keys(obj.paths).forEach((axiosUrl) => {
					let requestFileItemContent = `export const `;
					Object.keys(obj.paths[axiosUrl]).forEach((requestType) => {
						const str = axiosUrl
							.split('/')
							.map((str) => {
								return str.replace(/[\\-]/g, '');
							})
							.join('');
						requestFileItemContent += `${requestType}${str.substring(0, 1).toUpperCase() + str.substring(1)}`;
						requestTypeArr.push(requestType);
						let parameterStr = '';
						let parameData = '';
						const axiosOption = obj.paths[axiosUrl][requestType];
						const parameterTypeKeyArr: string[] = [];
						const functionTypeArr: string[] = [];
						let result: I_SchemaObjectPropertiesReturn = {
							interContentItemGenericStrValue: '',
							isSchemaType: false,
							interContentItemStrValue: '',
							schameTypeName: '',
						};
						let responseResult: I_SchemaObjectPropertiesReturn = {
							interContentItemGenericStrValue: '',
							isSchemaType: false,
							interContentItemStrValue: '',
							schameTypeName: '',
						};
						if (axiosOption.responses[200].content && axiosOption.responses[200].content['application/json']) {
							responseResult = schemaObjectProperties(
								config,
								{
									properties: {
										value: axiosOption.responses[200].content['application/json'].schema,
									},
								},
								'value',
								[],
								[],
								'',
								false,
								true,
								['RNU']
							);
							if (responseResult.isSchemaType) {
								functionTypeArr.push(`RNU extends (keyof ${responseResult.schameTypeName})[] = []`);
							}
						}
						if (axiosOption.parameters) {
							parameterStr += axiosOption.parameters.reduce((acc: string, parameter: { name: string; schema?: any }) => {
								const typeKey = parameter.name;
								parameterTypeKeyArr.push(typeKey);
								result = schemaObjectProperties(
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
									true,
									true,
									[`NU${acc.length}`]
								);
								Object.keys(parameter).forEach((parameterKey) => {
									requestParametersKeys.push(parameterKey);
								});
								if (result.isSchemaType) {
									functionTypeArr.push(`NU${acc.length} extends (keyof ${result.schameTypeName})[] = []`);
								}
								return `${acc}${typeKey}: ${result.interContentItemGenericStrValue}`;
							}, '');
						}

						if (axiosOption.requestBody) {
							const typeKey = 'data';
							if (axiosOption.requestBody.content && axiosOption.requestBody.content['application/json']) {
								result = schemaObjectProperties(
									config,
									{
										properties: {
											value: axiosOption.requestBody.content['application/json'].schema,
										},
									},
									'value',
									[],
									[],
									'',
									false,
									true,
									['NUDATA']
								);
								if (result.isSchemaType) {
									functionTypeArr.push(`NUDATA extends (keyof ${result.schameTypeName})[] = []`);
								}
							} else if (axiosOption.requestBody.content && axiosOption.requestBody.content['multipart/form-data']) {
								result = schemaObjectProperties(
									config,
									{
										properties: {
											value: axiosOption.requestBody.content['multipart/form-data'].schema,
										},
									},
									'value',
									[],
									[],
									'',
									true,
									true,
									['NUDATA']
								);
								if (result.isSchemaType) {
									functionTypeArr.push(`NUDATA extends (keyof ${result.schameTypeName})[] = []`);
								}
							}
							parameData += `${typeKey}:${result.interContentItemGenericStrValue}`;
						}
						const urlParameStr = parameterTypeKeyArr
							.map((item) => {
								return '${' + item + "?'" + item + "='" + '+' + item + ':' + "''" + '}';
							})
							.join('&');
						const handleAxiosUrl = axiosUrl.replace(/\{/g, '${').replace(/\}/g, 'URL}');
						requestFileItemContent = `${requestFileItemContent} = ${functionTypeArr.length !== 0 ? '<' + functionTypeArr.join(',') + '>' : ''}(${
							parameterStr + parameData
						}) => {\n\t ${config.axiosFuncContent ? config.axiosFuncContent?.(parameterStr, handleAxiosUrl) : ''}\n return axios.${requestType}${
							responseResult.interContentItemGenericStrValue ? '<ResponseData<' + responseResult.interContentItemGenericStrValue + '>>' : ''
						}(\`${handleAxiosUrl}${urlParameStr ? '?' : ''}${urlParameStr}\`${axiosOption.requestBody ? ',data' : ''});\n};\n`;

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
				log('error', `解析JSON文件${config.swaggerFileName}时发生错误：${err}`);
			}
		});
	});
};

export default requestInit;
