import { instanceGenerate as axios } from '@/api/index';
export declare interface ResponseData<T> {
	content: T;
	message: string | void;
	status: number;
}
type ItemInTu<T, K> = T extends [infer F, ...infer R] ? (F extends K ? true : ItemInTu<R, K>) : false;
export declare type U_I_NoNull<T, U extends Array<keyof T>> = { [K in keyof T as ItemInTu<U, K> extends true ? never : K]: T[K] } & {
	[K in keyof T as ItemInTu<U, K> extends true ? K : never]-?: T[K];
};
export const postAccountRouteDispatchRoute = <NUDATA extends (keyof AT_DispatchRouteModel)[] = []>(
	data: U_I_NoNull<AT_DispatchRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/AccountRoute/DispatchRoute`, data);
};
export const getAccountRouteGetAccountRouteByAccountCode = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(accountCode: string) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(
		`/AccountRoute/GetAccountRouteByAccountCode?${accountCode ? 'accountCode=' + accountCode : ''}`
	);
};
export const getAccountRouteGetAllAccountRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(`/AccountRoute/GetAllAccountRoute`);
};
export const postCommonSearchAccountType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchAccountType`);
};
export const postCommonSearchMachineAuditStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMachineAuditStatus`);
};
export const postCommonSearchSubSystemType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSubSystemType`);
};
export const postCommonSearchSubSystemCategory = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSubSystemCategory`);
};
export const postCommonSearchSoftwareCategory = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSoftwareCategory`);
};
export const postCommonSearchSoftwareClientType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSoftwareClientType`);
};
export const postCommonSearchReleaseLimit = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchReleaseLimit`);
};
export const postMachineGetAccountMachinePage = <
	RNU extends (keyof AT_AccountMachinePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccountMachineQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccountMachineQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccountMachinePageModelIEnumerableInt32Tuple, RNU>>>(`/Machine/GetAccountMachinePage`, data);
};
export const postMachineRemoveAccountMachineCode = (machineCode: string) => {
	return axios.post<ResponseData<boolean>>(`/Machine/RemoveAccountMachineCode?${machineCode ? 'machineCode=' + machineCode : ''}`);
};
export const postMachineUpdateAccountMachine = <NUDATA extends (keyof AT_AccountMachineModel)[] = []>(
	machineCode: string,
	data: U_I_NoNull<AT_AccountMachineModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/Machine/UpdateAccountMachine?${machineCode ? 'machineCode=' + machineCode : ''}`, data);
};
export const postMachineRegisterGetMachineRegisterPage = <
	RNU extends (keyof AT_MachineRegisterPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MachineRegisterQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MachineRegisterQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MachineRegisterPageModelIEnumerableInt32Tuple, RNU>>>(`/MachineRegister/GetMachineRegisterPage`, data);
};
export const postMachineRegisterAuditMachine = <NUDATA extends (keyof AT_AuditMachineModel)[] = []>(
	machineCode: string,
	data: U_I_NoNull<AT_AuditMachineModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/MachineRegister/AuditMachine?${machineCode ? 'machineCode=' + machineCode : ''}`, data);
};
export const postMachineRegisterRemoveRegisterMachineCode = (machineCode: string) => {
	return axios.post<ResponseData<boolean>>(`/MachineRegister/RemoveRegisterMachineCode?${machineCode ? 'machineCode=' + machineCode : ''}`);
};
export const postMachineRegisterRejectMachine = <NUDATA extends (keyof AT_AuditMachineModel)[] = []>(
	machineCode: string,
	data: U_I_NoNull<AT_AuditMachineModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/MachineRegister/RejectMachine?${machineCode ? 'machineCode=' + machineCode : ''}`, data);
};
export const postNoticeGetNoticePage = <
	RNU extends (keyof AT_NoticePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_NoticeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_NoticeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_NoticePageModelIEnumerableInt32Tuple, RNU>>>(`/Notice/GetNoticePage`, data);
};
export const postNoticeAddNotice = <NUDATA extends (keyof AT_NoticeModel)[] = []>(data: U_I_NoNull<AT_NoticeModel, NUDATA>) => {
	return axios.post<ResponseData<boolean>>(`/Notice/AddNotice`, data);
};
export const postNoticeUpdateNotice = <NUDATA extends (keyof AT_NoticeModel)[] = []>(id: string, data: U_I_NoNull<AT_NoticeModel, NUDATA>) => {
	return axios.post<ResponseData<boolean>>(`/Notice/UpdateNotice?${id ? 'id=' + id : ''}`, data);
};
export const postNoticeDeleteNotice = (data: string[]) => {
	return axios.post<ResponseData<boolean>>(`/Notice/DeleteNotice`, data);
};
export const postNoticeReleaseNotice = (id: string) => {
	return axios.post<ResponseData<boolean>>(`/Notice/ReleaseNotice?${id ? 'id=' + id : ''}`);
};
export const postSubSystemPostSubSystem = <NUDATA extends (keyof AT_SubSystemPostModel)[] = []>(data: U_I_NoNull<AT_SubSystemPostModel, NUDATA>) => {
	return axios.post<ResponseData<boolean>>(`/SubSystem/PostSubSystem`, data);
};
export const postSubSystemRemoveSubSystem = (systemCode: string) => {
	return axios.post<ResponseData<boolean>>(`/SubSystem/RemoveSubSystem?${systemCode ? 'systemCode=' + systemCode : ''}`);
};
export const postSubSystemActiveSubSystem = (systemCode: string) => {
	return axios.post<ResponseData<boolean>>(`/SubSystem/ActiveSubSystem?${systemCode ? 'systemCode=' + systemCode : ''}`);
};
export const getSubSystemGetSubSystemBySystemCode = <RNU extends (keyof AT_SubSystemViewModel)[] = []>(systemCode: string) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SubSystemViewModel, RNU>>>(
		`/SubSystem/GetSubSystemBySystemCode?${systemCode ? 'systemCode=' + systemCode : ''}`
	);
};
export const postSubSystemGetSubSystemPage = <
	RNU extends (keyof AT_SubSystemPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SubSystemQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SubSystemQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SubSystemPageModelIEnumerableInt32Tuple, RNU>>>(`/SubSystem/GetSubSystemPage`, data);
};
export const postSysRouteAddPageRoute = <NUDATA extends (keyof AT_SysPageRouteModel)[] = []>(data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>) => {
	return axios.post<ResponseData<boolean>>(`/SysRoute/AddPageRoute`, data);
};
export const postSysRouteUpdatePageRoute = <NUDATA extends (keyof AT_SysPageRouteModel)[] = []>(
	pageRouteId: string,
	data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/SysRoute/UpdatePageRoute?${pageRouteId ? 'pageRouteId=' + pageRouteId : ''}`, data);
};
export const postSysRouteRemovePageRoute = (pageRouteId: string) => {
	return axios.post<ResponseData<boolean>>(`/SysRoute/RemovePageRoute?${pageRouteId ? 'pageRouteId=' + pageRouteId : ''}`);
};
export const getSysRouteGetSysPageRouteById = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(pageRouteId: string) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(
		`/SysRoute/GetSysPageRouteById?${pageRouteId ? 'pageRouteId=' + pageRouteId : ''}`
	);
};
export const getSysRouteGetAllSysPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(`/SysRoute/GetAllSysPageRoute`);
};
export const postUserPostAccount = <NUDATA extends (keyof AT_OrgAccountPostModel)[] = []>(data: U_I_NoNull<AT_OrgAccountPostModel, NUDATA>) => {
	return axios.post<ResponseData<boolean>>(`/User/PostAccount`, data);
};
export const getUserGetAccountInfo = <RNU extends (keyof AT_AccountUserViewModel)[] = []>(accountCode: string) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccountUserViewModel, RNU>>>(`/User/GetAccountInfo?${accountCode ? 'accountCode=' + accountCode : ''}`);
};
export const postUserGetAccountPage = <
	RNU extends (keyof AT_AccountPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccountQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccountQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccountPageModelIEnumerableInt32Tuple, RNU>>>(`/User/GetAccountPage`, data);
};
export const postUserDistributionSubSystem = <NUDATA extends (keyof AT_AccountSubSystemsModel)[] = []>(
	data: U_I_NoNull<AT_AccountSubSystemsModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/User/DistributionSubSystem`, data);
};
export const postUserGetOnlineAccountPage = <
	RNU extends (keyof AT_OnlineAccountPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_OnlineAccountQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_OnlineAccountQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_OnlineAccountPageModelIEnumerableInt32Tuple, RNU>>>(`/User/GetOnlineAccountPage`, data);
};
export const postUserCrashUser = (accountCode: string) => {
	return axios.post<ResponseData<boolean>>(`/User/CrashUser?${accountCode ? 'accountCode=' + accountCode : ''}`);
};
export const getUserRefreshAccountExtensions = (accountCode: string) => {
	return axios.get<ResponseData<boolean>>(`/User/RefreshAccountExtensions?${accountCode ? 'accountCode=' + accountCode : ''}`);
};
export const postWorkSoftwareAddWorkSoftware = <NUDATA extends (keyof AT_SoftwarePostModel)[] = []>(
	data: U_I_NoNull<AT_SoftwarePostModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/WorkSoftware/AddWorkSoftware`, data);
};
export const postWorkSoftwareUpdateWorkSoftware = <NUDATA extends (keyof AT_SoftwarePostModel)[] = []>(
	softwareId: string,
	data: U_I_NoNull<AT_SoftwarePostModel, NUDATA>
) => {
	return axios.post<ResponseData<boolean>>(`/WorkSoftware/UpdateWorkSoftware?${softwareId ? 'softwareId=' + softwareId : ''}`, data);
};
export const postWorkSoftwareGetWorkSoftwarePage = <
	RNU extends (keyof AT_WorkSoftwarePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_WorkSoftwareQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_WorkSoftwareQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_WorkSoftwarePageModelIEnumerableInt32Tuple, RNU>>>(`/WorkSoftware/GetWorkSoftwarePage`, data);
};
export const postWorkSoftwareGetWorkSoftware = <RNU extends (keyof AT_WorkSoftwareViewModel)[] = []>(softwareId: string) => {
	return axios.post<ResponseData<U_I_NoNull<AT_WorkSoftwareViewModel, RNU>>>(
		`/WorkSoftware/GetWorkSoftware?${softwareId ? 'softwareId=' + softwareId : ''}`
	);
};
export const postWorkSoftwareDeleteSoftware = (softwareId: string) => {
	return axios.post<ResponseData<boolean>>(`/WorkSoftware/DeleteSoftware?${softwareId ? 'softwareId=' + softwareId : ''}`);
};
export declare interface AT_AccountExtensionModel {
	/*系统姓名*/
	userName: string;
	/*昵称*/
	nickname?: string;
	/*头像*/
	avatar?: string;
	/*手机号码*/
	phoneNumber?: string;
	/*微信号*/
	weChatNumber?: string;
	/*QQ号*/
	qqNumber?: string;
	/*邮箱号*/
	email?: string;
	/*其他联系方式*/
	otherTel?: string;
	/*出生年月*/
	dateOfBirth?: string;
	/*身份证号码*/
	idNumber?: string;
	/*个人说明*/
	personalNote?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccountMachineModel {
	/*有效期截止日期*/
	expiryDate?: string;
}

export declare interface AT_AccountMachinePageModel {
	/*账户*/
	account?: string;
	/*系统姓名*/
	userName?: string;
	/*真实姓名*/
	realName?: string;
	/*昵称*/
	nickname?: string;
	/*账户绑定手机号*/
	mobile?: string;
	/*邮箱地址*/
	email?: string;
	/*手机号码*/
	phoneNumber?: string;
	/*是否锁定*/
	isLocking: number;
	/*是否启用*/
	isActive: number;
	/*账户编码*/
	accountCode?: string;
	/*头像*/
	avatar?: string;
	/*性别

0 = 女

1 = 男*/
	gender?: AT_Gender;
	/*微信号*/
	weChatNumber?: string;
	/*QQ号*/
	qqNumber?: string;
	/*审核状态（待审核、已审核、已驳回）

0 = 待审核

1 = 已审核

2 = 已驳回*/
	auditStatus: AT_MachineAuditStatus;
	/*审核时间*/
	auditTime?: string;
	/*审核人*/
	auditor?: string;
	/*有效期截止日期*/
	expiryDate?: string;
	/*绑定说明*/
	bindingDescription?: string;
	/*备注*/
	remarks?: string;
	/*注册时间*/
	registerTime: string;
	/*机器码*/
	machineCode?: string;
}

export declare interface AT_AccountMachinePageModelIEnumerableInt32Tuple {
	item1?: AT_AccountMachinePageModel[];
	item2: number;
}

export declare interface AT_AccountMachineQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*账户*/
	account?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*机器码*/
	machineCode?: AT_QueryString;
	/*账户编码*/
	accountCode?: AT_QueryString;
}

export declare interface AT_AccountPageModel {
	account?: string;
	userName?: string;
	realName?: string;
	nickname?: string;
	mobile?: string;
	email?: string;
	isLocking: number;
	isActive: number;
	accountCode?: string;
	machineCode?: string;
	/*

0 = 女

1 = 男*/
	gender?: AT_Gender;
	checkMachineCode: number;
	allowBrowserLogin: number;
	/*

0 = 无效账户

1 = 内部账户

2 = 外部账户*/
	accountType: AT_AccountType;
	allowClientLogin: number;
	isDebug: number;
	accountSource?: string;
	/*是否检查mac验证*/
	checkMacAddress: number;
	/*头像*/
	avatar?: string;
	/*手机号码*/
	phoneNumber?: string;
	/*微信号*/
	weChatNumber?: string;
	/*QQ号*/
	qqNumber?: string;
	/*其他联系方式*/
	otherTel?: string;
	/*出生年月*/
	dateOfBirth?: string;
	/*身份证号码*/
	idNumber?: string;
	/*个人说明*/
	personalNote?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccountPageModelIEnumerableInt32Tuple {
	item1?: AT_AccountPageModel[];
	item2: number;
}

export declare interface AT_AccountQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*账户*/
	account?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*账户编码*/
	accountCode?: AT_QueryString;
}

export declare interface AT_AccountSubSystemsModel {
	/*用户id*/
	accountCode?: string;
	/*子系统*/
	subSystemCodes?: string[];
}

export enum AT_AccountType {
	无效账户 = 0,
	内部账户 = 1,
	外部账户 = 2,
}

export declare interface AT_AccountUserViewModel {
	account?: string;
	userName?: string;
	realName?: string;
	nickname?: string;
	mobile?: string;
	email?: string;
	phoneNumber?: string;
	isLocking: number;
	isActive: number;
	accountCode?: string;
	machineCode?: string;
	avatar?: string;
	/*

0 = 女

1 = 男*/
	gender?: AT_Gender;
	weChatNumber?: string;
	qqNumber?: string;
	checkMachineCode: number;
	allowBrowserLogin: number;
	/*

0 = 无效账户

1 = 内部账户

2 = 外部账户*/
	accountType: AT_AccountType;
	allowClientLogin: number;
	isDebug: number;
	accountSource?: string;
	/*账户基本信息*/
	accountExtension?: AT_AccountExtensionModel;
	/*机器码管理*/
	accountMachineCodes?: AT_AccountMachinePageModel[];
	/*应用系统管理*/
	accountSubSystems?: AT_SubSystemViewModel[];
}

export declare interface AT_AuditMachineModel {
	/*账户*/
	account?: string;
	/*机器码*/
	machineCode?: string;
	/*注册来源*/
	registerSource?: string;
	/*备注*/
	remarks?: string;
	/*有效期截止日期*/
	expiryDate?: string;
	/*绑定说明*/
	bindingDescription?: string;
}

export declare interface AT_DispatchRouteModel {
	/*账户编码*/
	accountCode?: string;
	/*路由id*/
	routeIds?: string[];
}

export enum AT_Gender {
	女 = 0,
	男 = 1,
}

export declare interface AT_KeyValueIntModel {
	/*值*/
	value: number;
	/*文本*/
	text?: string;
}

export declare interface AT_KeyValueIntViewModel {
	/*字符串值下拉框选项集*/
	selectOptions?: AT_KeyValueIntModel[];
}

export enum AT_MachineAuditStatus {
	待审核 = 0,
	已审核 = 1,
	已驳回 = 2,
}

export declare interface AT_MachineRegisterPageModel {
	/*账户*/
	account?: string;
	/*系统姓名*/
	userName?: string;
	/*真实姓名*/
	realName?: string;
	/*昵称*/
	nickname?: string;
	/*账户绑定手机号*/
	mobile?: string;
	/*邮箱地址*/
	email?: string;
	/*手机号码*/
	phoneNumber?: string;
	/*是否锁定*/
	isLocking: number;
	/*是否启用*/
	isActive: number;
	/*账户编码*/
	accountCode?: string;
	/*头像*/
	avatar?: string;
	/*性别

0 = 女

1 = 男*/
	gender?: AT_Gender;
	/*微信号*/
	weChatNumber?: string;
	/*QQ号*/
	qqNumber?: string;
	/*注册来源*/
	registerSource?: string;
	/*机器码*/
	machineCode?: string;
	/*绑定说明*/
	bindDescription?: string;
	/*备注*/
	remarks?: string;
	/*审核状态

0 = 待审核

1 = 已审核

2 = 已驳回*/
	auditStatus: AT_MachineAuditStatus;
	/*注册时间*/
	registerTime?: string;
}

export declare interface AT_MachineRegisterPageModelIEnumerableInt32Tuple {
	item1?: AT_MachineRegisterPageModel[];
	item2: number;
}

export declare interface AT_MachineRegisterQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*账户*/
	account?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*机器码*/
	machineCode?: AT_QueryString;
	/*账户编码*/
	accountCode?: AT_QueryString;
}

export declare interface AT_NoticeModel {
	id?: string;
	/*发布范围*/
	releaseLimit?: number;
	/*标题*/
	title?: string;
	/*内容*/
	content?: string;
	/*内容*/
	contentAbb?: string;
}

export declare interface AT_NoticePageModel {
	/*id*/
	id?: string;
	/*发布状态*/
	state?: number;
	/*发布人*/
	releaseUserName?: string;
	/*内容*/
	content?: string;
	/*内容*/
	contentAbb?: string;
	/*范围

1 = 所有人可见

2 = 内部用户

3 = 外部用户*/
	releaseLimit?: AT_ReleaseLimit;
	/*流程状态文本值

1 = 所有人可见

2 = 内部用户

3 = 外部用户*/
	readonly releaseLimitText?: AT_ReleaseLimit;
	/*发布时间*/
	releaseDate?: string;
	/*发布时间*/
	addTime?: string;
	/*新增人*/
	addUserName?: string;
	/*标题*/
	title?: string;
}

export declare interface AT_NoticePageModelIEnumerableInt32Tuple {
	item1?: AT_NoticePageModel[];
	item2: number;
}

export declare interface AT_NoticeQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*标题*/
	title?: AT_QueryString;
}

export declare interface AT_OnlineAccountPageModel {
	account?: string;
	userName?: string;
	realName?: string;
	nickname?: string;
	mobile?: string;
	email?: string;
	phoneNumber?: string;
	isLocking: number;
	isActive: number;
	accountCode?: string;
	machineCode?: string;
	avatar?: string;
	/*

0 = 女

1 = 男*/
	gender?: AT_Gender;
	weChatNumber?: string;
	qqNumber?: string;
	checkMachineCode: number;
	allowBrowserLogin: number;
	/*

0 = 无效账户

1 = 内部账户

2 = 外部账户*/
	accountType: AT_AccountType;
	allowClientLogin: number;
	isDebug: number;
	accountSource?: string;
	/*上线时间*/
	onlineTime: string;
	/*当前mac地址*/
	onlineMachineCode?: string;
	/*登录时长*/
	loginDuration?: string;
}

export declare interface AT_OnlineAccountPageModelIEnumerableInt32Tuple {
	item1?: AT_OnlineAccountPageModel[];
	item2: number;
}

export declare interface AT_OnlineAccountQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*账户*/
	account?: AT_QueryString;
	/*姓名*/
	realName?: AT_QueryString;
	/*账户编码*/
	accountCode?: AT_QueryString;
}

export declare interface AT_OrgAccountPostModel {
	/*账户*/
	account: string;
	/*账户编码*/
	accountCode?: string;
	/*真实姓名*/
	realName: string;
	/*性别

0 = 女

1 = 男*/
	gender: AT_Gender;
	/*密码*/
	password?: string;
	/*是否锁定*/
	isLocking: number;
	/*是否启用*/
	isActive: number;
	/*是否允许调试*/
	isDebug: number;
	/*手机号*/
	mobile: string;
	/*邮箱*/
	email?: string;
	/*是否检查mac验证*/
	checkMachineCode: number;
	/*允许浏览器登录*/
	allowBrowserLogin: number;
	/*账户类型

0 = 无效账户

1 = 内部账户

2 = 外部账户*/
	accountType: AT_AccountType;
	/*允许客户端登录*/
	allowClientLogin: number;
	/*账户基本信息*/
	accountExtension?: AT_AccountExtensionModel;
	/*应用分配*/
	subSystemCodes?: string[];
	/*头像 （ 如果为空根据真实姓名生成）*/
	avatar?: string;
}

export declare interface AT_QueryList {
	/*

0 = 包含

1 = 不包含*/
	searchType: AT_SearchListType;
	value?: any;
}

export declare interface AT_QuerySorting {
	name?: string;
	order?: string;
}

export declare interface AT_QueryString {
	/*

0 = 精确

1 = 模糊*/
	searchType: AT_SearchStringType;
	value?: string;
}

export enum AT_ReleaseLimit {
	所有人可见 = 1,
	内部用户 = 2,
	外部用户 = 3,
}

export enum AT_SearchListType {
	包含 = 0,
	不包含 = 1,
}

export enum AT_SearchStringType {
	精确 = 0,
	模糊 = 1,
}

export enum AT_SoftwareCategory {
	办公软件 = 1,
	系统应用 = 2,
	通讯工具 = 3,
	娱乐媒体 = 4,
	其他 = 5,
}

export enum AT_SoftwareClientType {
	win = 0,
	mac = 1,
	安卓 = 2,
	ios = 3,
}

export declare interface AT_SoftwarePostModel {
	/*主键id*/
	id?: string;
	/*软件名称*/
	softwareName: string;
	/*软件地址*/
	softwarePath: string;
	/*软件版本*/
	softwareVersion?: string;
	/*软件大小*/
	softwareSize?: string;
	/*软件图标*/
	softwareIcon: string;
	/*软件简介*/
	softwareNote?: string;
	/*帮助文档(word或者压缩包地址)*/
	softwareDescription?: string;
	/*软件类型

1 = 办公软件

2 = 系统应用

3 = 通讯工具

4 = 娱乐媒体

5 = 其他*/
	softwareCategory: AT_SoftwareCategory;
	/*适用客户端

0 = win

1 = mac

2 = 安卓

3 = ios*/
	softwareClientType: AT_SoftwareClientType;
	/*后缀名*/
	suffix: string;
}

export enum AT_SubSystemCategory {
	内部系统 = 0,
	外部系统 = 1,
	内外部系统 = 2,
}

export declare interface AT_SubSystemPageModel {
	/*系统编码*/
	systemCode?: string;
	/*子系统名称*/
	systemName?: string;
	/*Url*/
	systemUrl?: string;
	/*回写系统用户Url*/
	openSystemUrl?: string;
	/*子系统图标(限制ico文件)*/
	icon?: string;
	/*子系统Png图标*/
	pngIcon?: string;
	/*是否启用*/
	isActive: number;
	/*排序*/
	systemOrder: number;
	/*系统说明*/
	description?: string;
	/*系统类型

0 = Uat

1 = 生产*/
	systemType: AT_SubSystemType;
	/*系统分类

0 = 内部系统

1 = 外部系统

2 = 内外部系统*/
	systemCategory: AT_SubSystemCategory;
}

export declare interface AT_SubSystemPageModelIEnumerableInt32Tuple {
	item1?: AT_SubSystemPageModel[];
	item2: number;
}

export declare interface AT_SubSystemPostModel {
	/*系统编码*/
	systemCode?: string;
	/*子系统名称*/
	systemName: string;
	/*系统Url*/
	systemUrl: string;
	/*回写系统用户Url*/
	openSystemUrl?: string;
	/*子系统图标(限制ico文件)*/
	icon: string;
	/*子系统Png图标*/
	pngIcon: string;
	/*是否启用*/
	isActive: number;
	/*系统说明*/
	description?: string;
	/*排序*/
	systemOrder: number;
	/*系统分类

0 = 内部系统

1 = 外部系统

2 = 内外部系统*/
	systemCategory: AT_SubSystemCategory;
	/*系统类型

0 = Uat

1 = 生产*/
	systemType: AT_SubSystemType;
}

export declare interface AT_SubSystemQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*系统分类（内部系统、外部系统、内外部系统）*/
	systemCategory?: AT_QueryList;
	/*系统类型（1、生产；2、UAT）*/
	systemType?: AT_QueryList;
	/*子系统名字*/
	systemName?: AT_QueryString;
	/*Url*/
	systemUrl?: AT_QueryString;
	/*子系统图标(限制ico文件)*/
	icon?: AT_QueryString;
	/*是否启用*/
	isActive?: AT_QueryList;
	/*子系统Png图标*/
	pngIcon?: AT_QueryString;
}

export enum AT_SubSystemType {
	Uat = 0,
	生产 = 1,
}

export declare interface AT_SubSystemViewModel {
	id?: string;
	systemCode?: string;
	systemName?: string;
	systemUrl?: string;
	openSystemUrl?: string;
	icon?: string;
	pngIcon?: string;
	isActive: number;
	description?: string;
	systemOrder: number;
	/*

0 = 内部系统

1 = 外部系统

2 = 内外部系统*/
	systemCategory: AT_SubSystemCategory;
	/*

0 = Uat

1 = 生产*/
	systemType: AT_SubSystemType;
}

export declare interface AT_SysPageRouteMateModel {
	/*是否显示二级菜单*/
	showAlways: number;
	/*图标*/
	icon?: string;
	/*路由title*/
	title?: string;
}

export declare interface AT_SysPageRouteModel {
	/*路由名*/
	name?: string;
	/*路由地址*/
	path?: string;
	/*父级路由Id*/
	parentId?: string;
	/*排序*/
	sort?: number;
	/*前端路由附加信息*/
	mate?: AT_SysPageRouteMateModel;
	/*组件名*/
	component?: string;
	/*是否是tab*/
	isTab: number;
}

export declare interface AT_SysPageRouteViewModel {
	/*路由名*/
	name?: string;
	/*路由地址*/
	path?: string;
	/*父级路由Id*/
	parentId?: string;
	/*排序*/
	sort?: number;
	/*前端路由附加信息*/
	mate?: AT_SysPageRouteMateModel;
	/*组件名*/
	component?: string;
	/*是否是tab*/
	isTab: number;
	/*路由id*/
	routeId?: string;
}

export declare interface AT_WorkSoftwarePageModel {
	/*软件id*/
	id?: string;
	/*最后修改时间*/
	updTime: string;
	/*软件名称*/
	softwareName?: string;
	/*软件地址*/
	softwarePath?: string;
	/*软件版本*/
	softwareVersion?: string;
	/*软件大小*/
	softwareSize?: string;
	/*软件图标*/
	softwareIcon?: string;
	/*软件简介*/
	softwareNote?: string;
	/*帮助文档(word或者压缩包地址)*/
	softwareDescription?: string;
	/*软件类型

1 = 办公软件

2 = 系统应用

3 = 通讯工具

4 = 娱乐媒体

5 = 其他*/
	softwareCategory: AT_SoftwareCategory;
	/*适用客户端

0 = win

1 = mac

2 = 安卓

3 = ios*/
	softwareClientType: AT_SoftwareClientType;
}

export declare interface AT_WorkSoftwarePageModelIEnumerableInt32Tuple {
	item1?: AT_WorkSoftwarePageModel[];
	item2: number;
}

export declare interface AT_WorkSoftwareQueryModel {
	/*页码数*/
	pageIndex: number;
	/*每页的大小*/
	pageSize: number;
	/*排序数组(前台传入)*/
	sorts?: AT_QuerySorting[];
	/*软件名称*/
	softwareName?: AT_QueryString;
}

export declare interface AT_WorkSoftwareViewModel {
	/*软件名称*/
	softwareName: string;
	/*软件地址*/
	softwarePath: string;
	/*软件版本*/
	softwareVersion?: string;
	/*软件大小*/
	softwareSize?: string;
	/*软件图标*/
	softwareIcon: string;
	/*软件简介*/
	softwareNote?: string;
	/*帮助文档(word或者压缩包地址)*/
	softwareDescription?: string;
	/*软件类型

1 = 办公软件

2 = 系统应用

3 = 通讯工具

4 = 娱乐媒体

5 = 其他*/
	softwareCategory: AT_SoftwareCategory;
	/*适用客户端

0 = win

1 = mac

2 = 安卓

3 = ios*/
	softwareClientType: AT_SoftwareClientType;
	/*后缀名*/
	suffix: string;
	/*软件id*/
	id?: string;
	/*最后修改时间*/
	updTime: string;
}
