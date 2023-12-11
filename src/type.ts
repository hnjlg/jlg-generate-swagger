export declare interface I_Config {
	swaggerUrl: string;
	swaggerFileName: string;
	resultFileName: string;
	interfaceNamePrepend: string;
	axiosUrl: string;
	resultFileContentHeader?: string[];
	axiosFuncContent?: (parameterStr: string, handleAxiosUrl: string) => string;
	isNeedResponse?: boolean;
}
