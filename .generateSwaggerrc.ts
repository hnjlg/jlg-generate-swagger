/* export default {
	// 远程swagger.json文件URL
	swaggerUrl: 'http://localhost:3000/swagger.json',
	// 生成的swagger.json文件路径，默认src/apiType/swagger.json
	swaggerFileName: 'test/apiType/production/swagger.json',
	// 生成的接口文件路径，默认src/apiType/api.ts
	resultFileName: 'test/apiType/production/result.ts',
	// 生成文件中的Typescript类型命名前缀，默认AT_
	interfaceNamePrepend: 'AT_',
	// 封装的axios实例引入路径，默认import axios from '@/request/index'
	axiosUrl: "import axios from '@/axios/index';",
	//  可选，是否需要生成ResponseInterface，默认true
	isNeedResponse: false,
	// // 可选，在生成的result文件头部插入一段内容
	// resultFileContentHeader: [
	// 	"import { useUserInfoStoreHook } from '@/store/modules/user-info';",
	// 	'const COMPANY_CODE = useUserInfoStoreHook().companyCode;',
	// ],
	// // 可选，在生成的函数中自定义一段逻辑
	// axiosFuncContent(_parameterStr: string, handleAxiosUrl: string) {
	// 	if (handleAxiosUrl.includes('${FirmCodeURL}')) {
	// 		return `const FirmCodeURL = COMPANY_CODE`;
	// 	} else {
	// 		return '';
	// 	}
	// },
};
 */

// export default {
// 	// 远程swagger.json文件URL
// 	swaggerUrl: 'http://10.1.2.9:10011/swagger/v1/swagger.json',
// 	// 生成的swagger.json文件路径，默认src/apiType/swagger.json
// 	swaggerFileName: 'test/apiType/production/swagger.json',
// 	// 生成的接口文件路径，默认src/apiType/api.ts
// 	resultFileName: 'test/apiType/production/result.ts',
// 	// 生成文件中的Typescript类型命名前缀，默认AT_
// 	interfaceNamePrepend: 'AT_',
// 	// 封装的axios实例引入路径，默认import axios from '@/request/index'
// 	axiosUrl: "import { instanceGenerate as axios } from '@/api/index';",
// 	isNeedResponse: true,
// };

// oa
// export default {
// 	// 远程swagger.json文件URL
// 	swaggerUrl: 'http://10.1.2.9:10023/swagger/v1/swagger.json',
// 	// 生成的swagger.json文件路径，默认src/apiType/swagger.json
// 	swaggerFileName: 'test/apiType/swagger.json',
// 	// 生成的接口文件路径，默认src/apiType/api.ts
// 	resultFileName: 'test/apiType/result.ts',
// 	// 生成文件中的Typescript类型命名前缀，默认AT_
// 	interfaceNamePrepend: 'AT_',
// 	// 封装的axios实例引入路径，默认import axios from '@/request/index'
// 	axiosUrl: "import axios from '@/api/index';",
// 	// 可选，在生成的result文件头部插入一段内容
// 	resultFileContentHeader: ["import { useUserInfoStoreHook } from '@/store/modules/user-info';"],
// 	// 可选，在生成的函数中自定义一段逻辑
// 	axiosFuncContent(_parameterStr: string, handleAxiosUrl: string) {
// 		let str = '';
// 		if (handleAxiosUrl.includes('${FirmCodeURL}')) {
// 			str = str + `const FirmCodeURL = useUserInfoStoreHook().companyCode;`;
// 		}
// 		if (handleAxiosUrl.includes('${flowIdURL}')) {
// 			str = str + `const flowIdURL = flowId;`;
// 		}
// 		return str;
// 	},
// 	localSwaggerFilePath: 'C:/Users/G/Desktop/project/个人/generate-swagger/test/apiType/production/swagger.json',
// };

export default {
	swaggerUrl: 'http://218.77.107.37:49034/swagger.json',
	swaggerFileName: 'test/request/early-warning/swagger.json',
	resultFileName: 'test/request/early-warning/result.ts',
	interfaceNamePrepend: 'AT_',
	axiosUrl: "import axios from '@/request/index';",
	isNeedResponse: false,
};
