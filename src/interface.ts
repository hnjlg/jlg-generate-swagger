import fs from 'fs';
import path from 'path';
import constant from './constant';
import { log, duplicateRemovalInArr, schemaObject } from './utils';
import { I_Config } from './type';

const schemaInteger = (schema: any, propertiesEnumKeyKey: string[]) => {
	Object.keys(schema).forEach((i) => {
		propertiesEnumKeyKey.push(i);
	});
	let enumContentStr = '';
	schema['x-enumNames']?.forEach((item2: any, key2: string | number) => {
		// enum对应项
		const enumContentItemStr = `\t${item2} = ${schema.enum[key2]},\n`;
		enumContentStr += enumContentItemStr;
	});
	const enumContentStrDone = '{\n' + enumContentStr + '}';
	return enumContentStrDone;
};

const getInterFileRecordStr = (config: I_Config, obj: { components: { schemas: { [x: string]: any } } }, interfaceNamePrepend: string) => {
	let swaInterFileStr = '';
	const propertiesEnumKeyKey: Array<string> = [];
	const proTypeArr: Array<undefined | string> = [];
	const propertiesKeyKey: Array<string> = [];

	Object.keys(obj.components.schemas).forEach((item) => {
		const schema = obj.components.schemas[item];
		if (schema.properties && schema.type !== 'object') {
			log('error', '出现properties但是type不是object的情况,请立刻处理');
		}
		if (schema.type === 'object') {
			// interface头
			const interHeadStr = `export declare interface ${interfaceNamePrepend}${item}`;
			const interContentStrDone = schemaObject(config, schema, proTypeArr, propertiesKeyKey);
			const interStr = interHeadStr + '\t' + interContentStrDone;
			swaInterFileStr = swaInterFileStr + interStr + ';\n\n';
		} else if (schema.type === 'integer') {
			const enumHeadStr = `export enum ${interfaceNamePrepend}${item}`;
			const enumContentStrDone = schemaInteger(schema, propertiesEnumKeyKey);
			const enumStr = enumHeadStr + '\t' + enumContentStrDone;
			swaInterFileStr = swaInterFileStr + enumStr + ';\n\n';
		} else {
			log('error', '出现schema的类型不只是object和integer的情况,请立刻处理');
		}
	});

	duplicateRemovalInArr(propertiesEnumKeyKey, ['enum', 'type', 'description', 'format', 'x-enumNames'], (item: string) => {
		log('error', '出现components.schemas[key].type===integer存在不是enum,type,description,format,x-enumNames的之一的', item, '情况,请立刻处理');
	});

	duplicateRemovalInArr(proTypeArr, [undefined, 'string', 'integer', 'array', 'number', 'boolean', 'object'], (item: undefined | string) => {
		log(
			'error',
			'出现(components.schemas[key].type===object).properties[key].type存在不是string, integer, array, number, boolean, object的之一的',
			item,
			'情况,请立刻处理'
		);
	});

	duplicateRemovalInArr(
		propertiesKeyKey,
		[
			'type',
			'description',
			'nullable',
			'format',
			'allOf',
			'x-enumNames',
			'items',
			'readOnly',
			'minLength',
			'maximum',
			'minimum',
			'maxLength',
			'additionalProperties',
			'pattern',
		],
		(item: string) => {
			log(
				'error',
				'出现(components.schemas.type===object)[key]存在不是type, description, nullable, format, allOf, x-enumNames, items, readOnly, minLength, maximum, minimum, maxLength,additionalProperties,pattern的之一的',
				item,
				'情况,请立刻处理'
			);
		}
	);

	return swaInterFileStr;
};

const init = (config: I_Config) => {
	const swaggerFileName = config.swaggerFileName ?? constant.swaggerFileName;

	const interfaceNamePrepend = config.interfaceNamePrepend ?? constant.interfaceNamePrepend;

	const swaggerFile = path.join(__dirname, swaggerFileName); // JSON文件名
	return new Promise((resolve, reject) => {
		fs.readFile(swaggerFile, (err, data) => {
			log('info', '开始生成ts类型文件');
			if (err) {
				log('error', `读取文件${swaggerFile}时发生错误：${err.message}`);
				return;
			}

			try {
				const obj = JSON.parse(data.toString('utf-8')); // 将JSON字符串转换为JavaScript对象
				const swaInterFileStr = getInterFileRecordStr(config, obj, interfaceNamePrepend);
				resolve(swaInterFileStr);
				log('info', 'ts类型文件生成成功');
			} catch (err) {
				reject(`解析JSON文件${swaggerFile}时发生错误：${err}`);
			}
		});
	});
};

export default init;
