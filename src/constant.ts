import { I_Config } from './type';

const config: I_Config = {
	swaggerUrl: 'http://10.1.2.9:10031/swagger/v1/swagger.json',
	swaggerFileName: '../../../src/apiType/swagger.json',
	resultFileName: '../../../src/apiType/result.ts',
	interfaceNamePrepend: 'AT_',
	axiosUrl: 'import axios from "@/request/index"',
};
export default config;
