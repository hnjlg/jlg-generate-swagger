import constant from './constant';
import { I_Config } from './type';

export const duplicateRemovalInArr = (arr1: any[], arr2: any[], callback: (item: any) => void) => {
	arr1
		.filter((value, index, self) => {
			return self.indexOf(value) === index;
		})
		.forEach((item) => {
			if (!arr2.includes(item)) {
				callback(item);
			}
		});
};

export const schemaObject = (config: any, schema: any, proTypeArr: any, propertiesKeyKey: string[]): string => {
	if (!schema.properties) {
		log('error', '出现type是object但是没有properties的情况,请立刻处理');
	}
	// interface内容
	let interContentStr = '';
	Object.keys(schema.properties).forEach((item2) => {
		const schemaItem2 = schema.properties[item2];
		const interContentItemStrKey = `${item2}${schemaItem2.nullable ? '?' : ''}:`;
		let interContentItemStr = interContentItemStrKey + schemaObjectProperties(config, schema, item2, propertiesKeyKey, proTypeArr);
		// 给interface对应项添加只读
		if (schemaItem2.readOnly && interContentItemStr) {
			interContentItemStr = `readonly ${interContentItemStr}`;
		}
		interContentItemStr = `\t${interContentItemStr}`;
		// 给interface对应项添加注释
		if (schemaItem2.description) {
			interContentItemStr = `\t/*${schemaItem2.description}*/\n${interContentItemStr}`;
		}
		interContentStr += interContentItemStr;
	});
	const interContentStrDone = '{\n' + interContentStr + '}';
	return interContentStrDone;
};

export const schemaObjectProperties = (
	config: I_Config,
	schema: { properties: any },
	item2: string,
	propertiesKeyKey: string[],
	proTypeArr: any[],
	endingSymbol = ';',
	isNeedDefault = false
) => {
	const interfaceNamePrepend = config.interfaceNamePrepend ?? constant.interfaceNamePrepend;
	Object.keys(schema.properties[item2]).forEach((i) => {
		propertiesKeyKey.push(i);
	});
	const schemaItem2 = schema.properties[item2];
	const item2Type = schemaItem2.type;
	let interContentItemStrValue = '';
	proTypeArr.push(item2Type);
	if (schemaItem2.allOf) {
		const allOfInterArr: string[] = [];
		schemaItem2.allOf.forEach((item3: { type: any; $ref: string; properties: any }) => {
			if (item3.type) {
				proTypeArr.push(item3.type);
			}
			if (item3.$ref) {
				const item3Split = item3.$ref.split('/');
				allOfInterArr.push(`${interfaceNamePrepend}${item3Split[item3Split.length - 1]}`);
			} else if (item3.properties) {
				allOfInterArr.push(schemaObject(config, item3, proTypeArr, propertiesKeyKey));
			} else {
				console.log('出现allOf不只是$refs和properties的情况,请立刻处理');
			}
		});
		interContentItemStrValue = allOfInterArr.join('&') + endingSymbol + '\n';
	} else if (schemaItem2.$ref) {
		const schemaNameSplitArr = schemaItem2.$ref.split('/');
		interContentItemStrValue = `${interfaceNamePrepend}${schemaNameSplitArr[schemaNameSplitArr.length - 1]}${endingSymbol}\n`;
	} else if (['integer', 'number', 'boolean', 'string'].includes(item2Type)) {
		interContentItemStrValue = `${item2Type === 'integer' ? 'number' : item2Type}${
			isNeedDefault && 'default' in schemaItem2 ? '=' + (item2Type === 'string' ? "''" : schemaItem2.default) : ''
		}${endingSymbol}\n`;
	} else if (item2Type === 'array') {
		if (schemaItem2.items.$ref) {
			const schemaNameSplitArr = schemaItem2.items.$ref.split('/');
			interContentItemStrValue = `${interfaceNamePrepend}${schemaNameSplitArr[schemaNameSplitArr.length - 1]}[]${endingSymbol}\n`;
		} else if (schemaItem2.items.type) {
			// interface对应项
			/* 
					没做深层次递归
				*/
			interContentItemStrValue = `${schemaItem2.items.type === 'integer' ? 'number[]' : schemaItem2.items.type + '[]'}${endingSymbol}\n`;
		}
	} else if (item2Type === 'object') {
		interContentItemStrValue = `${schema.properties[item2].type}${endingSymbol}\n`;
	}
	return interContentItemStrValue.trim() ? interContentItemStrValue : `any${endingSymbol}`;
};

export const log = (type: 'error' | 'warn' | 'info', ...info: any[]) => {
	if (type === 'error') {
		console.log('\x1b[31m%s\x1b[0m', '错误:' + info);
	} else if (type === 'warn') {
		console.log('\x1b[33m%s\x1b[0m', '警告:' + info);
	} else if (type === 'info') {
		console.log('\x1b[32m%s\x1b[0m', '信息:' + info);
	}
};
