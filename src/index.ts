#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import interfaceInit from './interface';
import swaggerInit from './swagger';
import requestInit from './request';
import constant from './constant';
import { log } from './utils';
import { cosmiconfig } from 'cosmiconfig';
import { I_Config } from './type';

const moduleName = 'generateSwagger';
const explorer = cosmiconfig(moduleName);
explorer.search().then((result) => {
	if (result && result.config) {
		// 使用result.config中的配置信息来实现你的功能
		const config: I_Config = result.config;
		config.resultFileName = path.join(process.cwd(), config.resultFileName ?? constant.resultFileName);
		config.swaggerFileName = path.join(process.cwd(), config.swaggerFileName ?? constant.swaggerFileName);
		config.interfaceNamePrepend = config.interfaceNamePrepend ?? constant.interfaceNamePrepend;
		config.isNeedResponse = config.isNeedResponse ?? constant.isNeedResponse;
		swaggerInit(config).then(() => {
			Promise.all([requestInit(config), interfaceInit(config)])
				.then((res) => {
					if (!fs.existsSync(config.resultFileName) || fs.statSync(config.resultFileName).isDirectory()) {
						// 路径不存在或者是一个目录，进行创建
						fs.mkdirSync(path.dirname(config.resultFileName), { recursive: true });
					}
					fs.writeFileSync(config.resultFileName, res.join(''));
				})
				.catch((err) => {
					log('error', err);
				});
		});
	} else {
		// 如果没有找到配置文件，你可以提供默认的配置信息，或者抛出错误提示用户需要配置文件
		log('error', '未找到.' + moduleName + 'rc配置文件');
	}
});
