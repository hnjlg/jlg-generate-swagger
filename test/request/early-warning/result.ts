import axios from '@/request/index';

type ItemInTu<T, K> = T extends [infer F, ...infer R] ? (F extends K ? true : ItemInTu<R, K>) : false;
export declare type U_I_NoNull<T, U extends Array<keyof T>> = {[K in keyof T as ItemInTu<U, K> extends true ? never : K]: T[K];} & {[K in keyof T as ItemInTu<U, K> extends true ? K : never]-?: T[K];};export const getSentryadderrormessagegif = <RNU extends (keyof AT_KafkaResult)[] = []>(data: string,
) => {
	 
 return axios.get<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/add-error-message-gif?${data?'data='+data:''}`);
};
export const getSentryadderrormessagerrwebgif = <RNU extends (keyof AT_KafkaResult)[] = []>(data: string,
) => {
	 
 return axios.get<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/add-error-message-rrweb-gif?${data?'data='+data:''}`);
};
export const postSentryadderrormessagerrweb = <RNU extends (keyof AT_KafkaResult)[] = []>(data: string,
) => {
	 
 return axios.post<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/add-error-message-rrweb?${data?'data='+data:''}`);
};
export const postSentryadderrormessage = <RNU extends (keyof AT_KafkaResult)[] = [],NUDATA extends (keyof AT_KafkaRequest)[] = []>(data:U_I_NoNull<AT_KafkaRequest,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/add-error-message`,data);
};
export const postPagerouteraddpagerouter = <NUDATA extends (keyof AT_PageRouterModel)[] = []>(data:U_I_NoNull<AT_PageRouterModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/page-router/add-page-router`,data);
};
export const postSystemaddsystem = <NUDATA extends (keyof AT_SystemModel)[] = []>(data:U_I_NoNull<AT_SystemModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/system/add-system`,data);
};
export const postSystemdistributesystem = <NUDATA extends (keyof AT_DistributeSystemUserModel)[] = []>(data:U_I_NoNull<AT_DistributeSystemUserModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/system/distribute-system`,data);
};
export const postPageroutergetallpagerouterauths = <RNU extends (keyof AT_PageRouterAuthModel)[] = []>() => {
	 
 return axios.post<U_I_NoNull<AT_PageRouterAuthModel,RNU>[]
>(`/page-router/get-all-page-router-auths`);
};
export const postErrormessagegeterrormessagetopage = <RNU extends (keyof AT_ErrorMessagePageModelIEnumerableInt32Tuple)[] = [],NUDATA extends (keyof AT_ErrorMessageQueryModel)[] = []>(data:U_I_NoNull<AT_ErrorMessageQueryModel,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_ErrorMessagePageModelIEnumerableInt32Tuple,RNU>
>(`/error-message/get-error-message-to-page`,data);
};
export const postErrormessagegetplaybackbyuuid = <RNU extends (keyof AT_ErrorrMessagePalybackModel)[] = []>(uuid: string,
) => {
	 
 return axios.post<U_I_NoNull<AT_ErrorrMessagePalybackModel,RNU>
>(`/error-message/get-playback-by-uuid?${uuid?'uuid='+uuid:''}`);
};
export const postSystemgetsystemtopage = <RNU extends (keyof AT_SystemPageModelIEnumerableInt32Tuple)[] = [],NUDATA extends (keyof AT_SystemQueryModel)[] = []>(data:U_I_NoNull<AT_SystemQueryModel,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_SystemPageModelIEnumerableInt32Tuple,RNU>
>(`/system/get-system-to-page`,data);
};
export const postSystemgetsystemusers = <RNU extends (keyof AT_SystemUserModel)[] = []>(uid: string,
) => {
	 
 return axios.post<U_I_NoNull<AT_SystemUserModel,RNU>
>(`/system/get-system-users?${uid?'uid='+uid:''}`);
};
export const postUsergetusertopage = <RNU extends (keyof AT_UserPageModelIEnumerableInt32Tuple)[] = [],NUDATA extends (keyof AT_UserPageQueryModel)[] = []>(data:U_I_NoNull<AT_UserPageQueryModel,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_UserPageModelIEnumerableInt32Tuple,RNU>
>(`/user/get-user-to-page`,data);
};
export const postErrormessagehandleerrormessage = (uuid: string,
) => {
	 
 return axios.post<boolean
>(`/error-message/handle-error-message?${uuid?'uuid='+uuid:''}`);
};
export const getSentrykafka.gif = <RNU extends (keyof AT_KafkaResult)[] = []>(data: string,
) => {
	 
 return axios.get<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/kafka.gif?${data?'data='+data:''}`);
};
export const postSentrykafka = <RNU extends (keyof AT_KafkaResult)[] = [],NUDATA extends (keyof AT_KafkaRequest)[] = []>(data:U_I_NoNull<AT_KafkaRequest,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_KafkaResult,RNU>
>(`/sentry/kafka`,data);
};
export const postPagerouterremovepagerouter = (uid: string,
) => {
	 
 return axios.post<boolean
>(`/page-router/remove-page-router?${uid?'uid='+uid:''}`);
};
export const postSystemremovesystem = (uid: string,
) => {
	 
 return axios.post<boolean
>(`/system/remove-system?${uid?'uid='+uid:''}`);
};
export const postSentrysourcemap = <RNU extends (keyof AT_SourceMapResult)[] = [],NUDATA extends (keyof AT_SourceMapRequest)[] = []>(data:U_I_NoNull<AT_SourceMapRequest,NUDATA>
) => {
	 
 return axios.post<U_I_NoNull<AT_SourceMapResult,RNU>
>(`/sentry/source-map`,data);
};
export const postUsersyncaccountuser = <NUDATA extends (keyof AT_UserModel)[] = []>(data:U_I_NoNull<AT_UserModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/user/sync-account-user`,data);
};
export const postErrormessageupdateerrormessageprivacy = (uuid: string,
) => {
	 
 return axios.post<boolean
>(`/error-message/update-error-message-privacy?${uuid?'uuid='+uuid:''}`);
};
export const postPagerouterupdatepagerouter = <NUDATA extends (keyof AT_PageRouterEditModel)[] = []>(data:U_I_NoNull<AT_PageRouterEditModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/page-router/update-page-router`,data);
};
export const postSystemupdatesystem = <NUDATA extends (keyof AT_SystemEditModel)[] = []>(data:U_I_NoNull<AT_SystemEditModel,NUDATA>
) => {
	 
 return axios.post<boolean
>(`/system/update-system`,data);
};
export declare interface AT_SourceMap	{
	/*错误源文件*/
	source:string;
	/*错误行号*/
	line:number;
	/*错误列号*/
	column:number;
	/*错误函数名*/
	name:string;
};

export declare interface AT_SourceMapRequest	{
	/*sourceMap源文件地址*/
	fileUrl:string;
	/*错误行号*/
	lineno:string;
	/*错误列号*/
	colno:string;
};

export declare interface AT_SourceMapResult	{
	/*1表示成功，2表示失败*/
	status:number;
	/*success表示成功，failed表示失败*/
	message:string;
	content:any;};

export declare interface AT_KafkaRequest	{
	/*事件JSON字符串内容*/
	data:string;
};

export declare interface AT_KafkaResult	{
	status:number;
	message:string;
	content:boolean;
};

export declare interface AT_AccountUserAuthModel	{
	/*用户编码*/
	accountUid?:string;
	/*用户权限*/
	userAuths?:AT_UserAuthModel[];
};

export declare interface AT_AuthModel	{
	key?:string;
	value?:AT_AuthValueModel[];
};

export declare interface AT_AuthValueModel	{
	authName?:string;
	title?:string;
};

export declare interface AT_AuthorityModel	{
	/*键*/
	key?:string;
	/*描述*/
	title?:string;
	/*权限索引*/
	authIndex:number;
	/*是否有权限*/
	isActive:boolean;
};

export declare interface AT_ErrorMessageModel	{
	/*操作uuid*/
	uuid?:string;
	/*操作时间*/
	timeStamp:number;
	/*异常类型*/
	type:number;
	/*设备信息*/
	deviceInfo?:string;
	/*浏览器*/
	browser?:string;
	/*操作人编码*/
	userCode?:string;
	/*操作人名称*/
	userName?:string;
	/*系统编码*/
	sysCode?:string;
	/*网络类型*/
	networkType?:string;
	/*错误内容*/
	content?:string;
};

export declare interface AT_ErrorMessagePageModel	{
	/*操作uuid*/
	uuid?:string;
	/*操作时间*/
	timeStamp:number;
	/*异常类型 1 = 点击 2 = 页面跳转 3 = js运行错误 4 = 资源加载错误 5 = xhr请求 6 = xhr请求错误 7 = fetch请求 8 = fetch请求错误 9 = 未处理失败promise错误 10 = vue错误 11 = 自定义行为
*/
	errorType:AT_MessageTypeEnum;
	/*系统编码*/
	sysCode?:string;
	/*处理状态*/
	handlerState:number;
	/*隐私状态 0:公开;1:隐私*/
	privacy:number;
};

export declare interface AT_ErrorMessagePageModelIEnumerableInt32Tuple	{
	item1?:AT_ErrorMessagePageModel[];
	item2:number;
};

export declare interface AT_ErrorMessageQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
};

export declare interface AT_ErrorrMessagePalybackModel	{
	/*操作uuid*/
	operationUuid?:string;
	/*回放文件*/
	playbackUrl?:string;
};

export declare interface AT_ICurrentUser	{
	readonly avatar?:string;
	readonly accountUid?:string;
	readonly auths?:AT_AuthModel[];
	readonly systems?:AT_SystemModel[];
	name?:string;
	account?:string;
	accountCode?:string;
};

export enum AT_MessageTypeEnum	{
	点击 = 1,
	页面跳转 = 2,
	js运行错误 = 3,
	资源加载错误 = 4,
	xhr请求 = 5,
	xhr请求错误 = 6,
	fetch请求 = 7,
	fetch请求错误 = 8,
	未处理失败promise错误 = 9,
	vue错误 = 10,
	自定义行为 = 11,
};

export declare interface AT_PageRouterAuthModel	{
	/*全局Id*/
	routerUid?:string;
	/*页面*/
	routerKey?:string;
	/*页面名称*/
	routerName?:string;
	/*权限*/
	auths?:AT_AuthorityModel[];
};

export declare interface AT_PageRouterEditModel	{
	/*页面*/
	routerKey?:string;
	/*页面名称*/
	routerName?:string;
	/*页面Uid*/
	uid?:string;
};

export declare interface AT_PageRouterModel	{
	/*页面*/
	routerKey?:string;
	/*页面名称*/
	routerName?:string;
};

export declare interface AT_QuerySorting	{
	name?:string;
	order?:string;
};

export declare interface AT_SystemEditModel	{
	/*系统编码*/
	sysCode?:string;
	/*系统名称*/
	sysName?:string;
	/*系统Uid*/
	uid?:string;
};

export declare interface AT_SystemModel	{
	/*系统编码*/
	sysCode?:string;
	/*系统名称*/
	sysName?:string;
};

export declare interface AT_SystemPageModel	{
	/*系统Uid*/
	uid?:string;
	/*系统编码*/
	sysCode?:string;
	/*系统名称*/
	sysName?:string;
};

export declare interface AT_SystemPageModelIEnumerableInt32Tuple	{
	item1?:AT_SystemPageModel[];
	item2:number;
};

export declare interface AT_SystemQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
};

export declare interface AT_UserAuthModel	{
	/*页面全局Id*/
	routerUid:string;
	/*页面Key*/
	routerKey?:string;
	/*页面名称*/
	routerName?:string;
	/*权限*/
	auths?:AT_AuthorityModel[];
};

export declare interface AT_UserModel	{
	/*用户Uid*/
	uid?:string;
	/*用户编码*/
	readonly accountCode?:string;
	/*用户名称*/
	readonly name?:string;
};

export declare interface AT_UserPageModel	{
	/*用户Uid*/
	uid?:string;
	/*用户编码*/
	readonly accountCode?:string;
	/*用户名称*/
	readonly name?:string;
};

export declare interface AT_UserPageModelIEnumerableInt32Tuple	{
	item1?:AT_UserPageModel[];
	item2?:number;
};

export declare interface AT_UserPageQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
};

export declare interface AT_SystemUserModel	{
	/*已分配用户*/
	belongs?:AT_UserModel[];
	/*未分配用户*/
	notBelongs?:AT_UserModel[];
};

export declare interface AT_DistributeSystemUserModel	{
	/*系统uid*/
	systemUid?:string;
	/*用户uid*/
	accountUids?:string[];
};

