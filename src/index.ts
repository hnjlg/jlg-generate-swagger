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
		const resultFileName = config.resultFileName ?? constant.resultFileName;
		const fileWriteFile = path.join(__dirname, resultFileName); // 本地保存的文件名
		swaggerInit(config).then(() => {
			Promise.all([requestInit(config), interfaceInit(config)])
				.then((res) => {
					if (!fs.existsSync(fileWriteFile) || fs.statSync(fileWriteFile).isDirectory()) {
						// 路径不存在或者是一个目录，进行创建
						fs.mkdirSync(path.dirname(fileWriteFile), { recursive: true });
					}
					fs.writeFileSync(fileWriteFile, res.join(''));
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
