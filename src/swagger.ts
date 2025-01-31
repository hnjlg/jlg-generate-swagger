import http from 'http';
import fs from 'fs';
import path from 'path';
import constant from './constant';
import { log } from './utils';
import { I_Config } from './type';

const swaggerInit = (config: I_Config) => {
	const swaggerUrl = config.swaggerUrl ?? constant.swaggerUrl; // 远程Swagger JSON文件的URL
	const { localSwaggerFilePath } = config;
	if (localSwaggerFilePath) {
		log('info', '开始读取本地Swagger JSON文件...');
		return new Promise((resolve, reject) => {
			fs.readFile(localSwaggerFilePath, 'utf8', (err, content) => {
				if (err) {
					log('error', `读取本地Swagger JSON文件失败, 请检查文件路径${localSwaggerFilePath}是否正确`);
					return;
				}
				if (content.length === 0) {
					reject('Swagger JSON文件内容为空');
					return;
				}
				if (!fs.existsSync(config.swaggerFileName) || fs.statSync(config.swaggerFileName).isDirectory()) {
					// 路径不存在或者是一个目录，进行创建
					fs.mkdirSync(path.dirname(config.swaggerFileName), { recursive: true });
				}
				fs.writeFileSync(config.swaggerFileName, content, 'utf8');
				log('info', 'Swagger JSON文件读取完成');
				resolve(true);
			});
		});
	} else {
		log('info', '开始读取远程Swagger JSON文件...');
		return new Promise((resolve, reject) => {
			http
				.get(swaggerUrl, (res) => {
					const data: string[] = [];
					res.setEncoding('utf8'); // 设置编码格式为UTF-8
					res.on('data', (chunk) => {
						data.push(chunk);
					});
					res.on('end', () => {
						const content = data.join('');
						if (content.length === 0) {
							reject('Swagger JSON文件下载失败，远程地址可能失效');
							return;
						}
						if (!fs.existsSync(config.swaggerFileName) || fs.statSync(config.swaggerFileName).isDirectory()) {
							// 路径不存在或者是一个目录，进行创建
							fs.mkdirSync(path.dirname(config.swaggerFileName), { recursive: true });
						}
						fs.writeFileSync(config.swaggerFileName, content, 'utf8');
						log('info', 'Swagger JSON文件下载完成');
						resolve(true);
					});
				})
				.on('error', (err) => {
					reject(`下载Swagger JSON文件时发生错误:${err.message}`);
				});
		});
	}
};

export default swaggerInit;
