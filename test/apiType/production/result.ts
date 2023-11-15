import { useUserInfoStoreHook } from '@/store/modules/user-info';
const COMPANY_CODE = useUserInfoStoreHook().companyCode;
import axios from '@/axios/index';
export declare interface ResponseData<T> {
	content: T;
	message: string | void;
	status: number;
}
type ItemInTu<T, K> = T extends [infer F, ...infer R] ? (F extends K ? true : ItemInTu<R, K>) : false;
export declare type U_I_NoNull<T, U extends Array<keyof T>> = { [K in keyof T as ItemInTu<U, K> extends true ? never : K]: T[K] } & {
	[K in keyof T as ItemInTu<U, K> extends true ? K : never]-?: T[K];
};
export const getAccessAssayGetAccessAssayById = <RNU extends (keyof AT_AccessAssayViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccessAssayViewModel, RNU>>>(`/AccessAssay/GetAccessAssayById?${id ? 'id=' + id : ''}`);
};
export const postAccessAssayAddAccessAssay = <NUDATA extends (keyof AT_AccessAssayModel)[] = []>(data: U_I_NoNull<AT_AccessAssayModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/AccessAssay/AddAccessAssay`, data);
};
export const postAccessAssayUpdateAccessAssay = <NUDATA extends (keyof AT_AccessAssayModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_AccessAssayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessAssay/UpdateAccessAssay?${id ? 'id=' + id : ''}`, data);
};
export const postAccessAssayDeleteAccessAssay = (data: any) => {
	return axios.post<ResponseData<any>>(`/AccessAssay/DeleteAccessAssay`, data);
};
export const postAccessAssayGetAccessAssayToPage = <
	RNU extends (keyof AT_AccessAssayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccessAssayQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccessAssayQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccessAssayPageModelIEnumerableInt32Tuple, RNU>>>(`/AccessAssay/GetAccessAssayToPage`, data);
};
export const getAccessContactGetAccessContactById = <RNU extends (keyof AT_AccessContactViewMdoel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccessContactViewMdoel, RNU>>>(`/AccessContact/GetAccessContactById?${id ? 'id=' + id : ''}`);
};
export const postAccessContactImportAccessContact = (data: any) => {
	return axios.post<ResponseData<any>>(`/AccessContact/ImportAccessContact`, data);
};
export const postAccessContactAddAccessContact = <NUDATA extends (keyof AT_AccessContactModel)[] = []>(
	data: U_I_NoNull<AT_AccessContactModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessContact/AddAccessContact`, data);
};
export const postAccessContactUpdateAccessContact = <NUDATA extends (keyof AT_AccessContactModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_AccessContactModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessContact/UpdateAccessContact?${id ? 'id=' + id : ''}`, data);
};
export const postAccessContactDeleteAccessContact = (data: any) => {
	return axios.post<ResponseData<any>>(`/AccessContact/DeleteAccessContact`, data);
};
export const postAccessContactGetAccessContactToPage = <
	RNU extends (keyof AT_AccessContactPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccessContactQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccessContactQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccessContactPageModelIEnumerableInt32Tuple, RNU>>>(`/AccessContact/GetAccessContactToPage`, data);
};
export const postAccessFilesAddAccessFileClass = <NUDATA extends (keyof AT_AccessFileClassModel)[] = []>(
	data: U_I_NoNull<AT_AccessFileClassModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessFiles/AddAccessFileClass`, data);
};
export const getAccessFilesGetAllAccessFileClassList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/AccessFiles/GetAllAccessFileClassList`);
};
export const getAccessFilesGetAccessFilesById = <RNU extends (keyof AT_AccessFilesViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccessFilesViewModel, RNU>>>(`/AccessFiles/GetAccessFilesById?${id ? 'id=' + id : ''}`);
};
export const postAccessFilesAddAccessFiles = <NUDATA extends (keyof AT_AccessFilesModel)[] = []>(data: U_I_NoNull<AT_AccessFilesModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/AccessFiles/AddAccessFiles`, data);
};
export const postAccessFilesUpdateAccessFiles = <NUDATA extends (keyof AT_AccessFilesModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_AccessFilesModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessFiles/UpdateAccessFiles?${id ? 'id=' + id : ''}`, data);
};
export const postAccessFilesDeleteAccessFiles = (data: any) => {
	return axios.post<ResponseData<any>>(`/AccessFiles/DeleteAccessFiles`, data);
};
export const postAccessFilesGetAccessFilesToPage = <
	RNU extends (keyof AT_AccessFilesPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccessFilesQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccessFilesQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccessFilesPageModelIEnumerableInt32Tuple, RNU>>>(`/AccessFiles/GetAccessFilesToPage`, data);
};
export const getAccessWebsiteGetAccessWebsiteById = <RNU extends (keyof AT_AccessWebsiteViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccessWebsiteViewModel, RNU>>>(`/AccessWebsite/GetAccessWebsiteById?${id ? 'id=' + id : ''}`);
};
export const getAccessWebsiteGetAccessWebsiteAccountByWebsiteId = <RNU extends (keyof AT_AccessWebsiteAccountModel)[] = []>(accessWebsiteId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccessWebsiteAccountModel, RNU>[]>>(
		`/AccessWebsite/GetAccessWebsiteAccountByWebsiteId?${accessWebsiteId ? 'accessWebsiteId=' + accessWebsiteId : ''}`
	);
};
export const postAccessWebsiteAddAccessWebsite = <NUDATA extends (keyof AT_AccessWebsiteModel)[] = []>(
	data: U_I_NoNull<AT_AccessWebsiteModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessWebsite/AddAccessWebsite`, data);
};
export const postAccessWebsiteUpdateAccessWebsite = <NUDATA extends (keyof AT_AccessWebsiteModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_AccessWebsiteModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AccessWebsite/UpdateAccessWebsite?${id ? 'id=' + id : ''}`, data);
};
export const postAccessWebsiteDeleteAccessWebsite = (data: any) => {
	return axios.post<ResponseData<any>>(`/AccessWebsite/DeleteAccessWebsite`, data);
};
export const postAccessWebsiteGetAccessWebsiteToPage = <
	RNU extends (keyof AT_AccessWebsitePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccessWebsiteQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccessWebsiteQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccessWebsitePageModelIEnumerableInt32Tuple, RNU>>>(`/AccessWebsite/GetAccessWebsiteToPage`, data);
};
export const getFlowAccurateDeliveryGetAccurateDeliveryByFlowId = <RNU extends (keyof AT_FlowModelAccurateDeliveryRequestViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelAccurateDeliveryRequestViewModelTuple, RNU>>>(
		`/flow/AccurateDelivery/GetAccurateDeliveryByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowAccurateDeliveryGetAccurateDeliveryDetailsById = <RNU extends (keyof AT_FlowModelAccurateDeliveryDetailsViewModelTuple)[] = []>(
	id: any,
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelAccurateDeliveryDetailsViewModelTuple, RNU>>>(
		`/flow/AccurateDelivery/GetAccurateDeliveryDetailsById?${id ? 'id=' + id : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowAccurateDeliveryGetTransferAccurateDeliveryById = <RNU extends (keyof AT_AccurateDeliveryRequestViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccurateDeliveryRequestViewModel, RNU>>>(
		`/flow/AccurateDelivery/GetTransferAccurateDeliveryById?${id ? 'id=' + id : ''}`
	);
};
export const postFlowAccurateDeliveryDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/DynamicSubmitAudit`, data);
};
export const postFlowAccurateDeliveryPendingAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/PendingAudit`, data);
};
export const postFlowAccurateDeliveryRejectAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/RejectAudit`, data);
};
export const postFlowAccurateDeliveryDynamicRejectAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/DynamicRejectAudit`, data);
};
export const postFlowAccurateDeliveryResetAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/ResetAudit`, data);
};
export const postFlowAccurateDeliverySaveDraft = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/SaveDraft`, data);
};
export const postFlowAccurateDeliverySubmitAudit = <NUDATA extends (keyof AT_FlowAccurateDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowAccurateDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/SubmitAudit`, data);
};
export const postFlowAccurateDeliveryAccurateDeliveryPass = <NUDATA extends (keyof AT_AttachmentModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_AttachmentModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/AccurateDeliveryPass?${id ? 'id=' + id : ''}`, data);
};
export const postFlowAccurateDeliveryAccurateDeliveryNoPass = <NUDATA extends (keyof AT_NoPassModel)[] = []>(
	data: U_I_NoNull<AT_NoPassModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/AccurateDeliveryNoPass`, data);
};
export const postFlowAccurateDeliveryUpateValidState = <NUDATA extends (keyof AT_UpateValidStateModel)[] = []>(
	data: U_I_NoNull<AT_UpateValidStateModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/UpateValidState`, data);
};
export const postFlowAccurateDeliveryGetAccurateDeliveryToPage = <
	RNU extends (keyof AT_AccurateDeliveryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccurateDeliveryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_AccurateDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AccurateDeliveryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/AccurateDelivery/GetAccurateDeliveryToPage`,
		data
	);
};
export const postFlowAccurateDeliveryExportAccurateDeliverys = <NUDATA extends (keyof AT_AccurateDeliveryQueryModel)[] = []>(
	data: U_I_NoNull<AT_AccurateDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/ExportAccurateDeliverys`, data);
};
export const postFlowAccurateDeliveryGetTransferAccurateDeliveryToPage = <
	RNU extends (keyof AT_TransferAccurateDeliveryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferAccurateDeliveryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TransferAccurateDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferAccurateDeliveryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/AccurateDelivery/GetTransferAccurateDeliveryToPage`,
		data
	);
};
export const getFlowAccurateDeliveryGetAccurateDeliveryAttachmentList = <RNU extends (keyof AT_AccurateDeliveryAttachmentModel)[] = []>(
	accurateDeliveryDetailsId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AccurateDeliveryAttachmentModel, RNU>[]>>(
		`/flow/AccurateDelivery/GetAccurateDeliveryAttachmentList?${
			accurateDeliveryDetailsId ? 'accurateDeliveryDetailsId=' + accurateDeliveryDetailsId : ''
		}`
	);
};
export const postFlowAccurateDeliveryDeleteAccurateDelivery = (data: any) => {
	return axios.post<ResponseData<any>>(`/flow/AccurateDelivery/DeleteAccurateDelivery`, data);
};
export const getFlowAccurateDeliveryGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/AccurateDelivery/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowAccurateDeliveryGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/AccurateDelivery/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postAgencyIntentionGetSyncAgencyIntentionToPage = <
	RNU extends (keyof AT_TransferIntentionPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SyncAgencyIntentionQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SyncAgencyIntentionQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferIntentionPageModelIEnumerableInt32Tuple, RNU>>>(
		`/AgencyIntention/GetSyncAgencyIntentionToPage`,
		data
	);
};
export const getAgencyIntentionGetAgencyIntentionById = <RNU extends (keyof AT_TransferIntentionViewModel)[] = []>(agencyIntentionId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TransferIntentionViewModel, RNU>>>(
		`/AgencyIntention/GetAgencyIntentionById?${agencyIntentionId ? 'agencyIntentionId=' + agencyIntentionId : ''}`
	);
};
export const postAgencyIntentionSaveIntention = <NUDATA extends (keyof AT_RequestIntentionModel)[] = []>(
	data: U_I_NoNull<AT_RequestIntentionModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/AgencyIntention/SaveIntention`, data);
};
export const getAgencyIntentionGetCompletionUnitTypeList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/AgencyIntention/GetCompletionUnitTypeList`);
};
export const getAuthorizationGetAllPageAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(`/Authorization/GetAllPageAuthorization`);
};
export const postAuthorizationExportAllPageAuthorization = () => {
	return axios.post<ResponseData<any>>(`/Authorization/ExportAllPageAuthorization`);
};
export const getAuthorizationGetAllPopupAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(`/Authorization/GetAllPopupAuthorization`);
};
export const getAuthorizationGetCurrentUserPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(`/Authorization/GetCurrentUserPageRoute`);
};
export const getAuthorizationGetUserPageAuthorization = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(employeeCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>[]>>(
		`/Authorization/GetUserPageAuthorization?${employeeCode ? 'employeeCode=' + employeeCode : ''}`
	);
};
export const getAuthorizationGetUserPopupAuthorization = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(employeeCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>[]>>(
		`/Authorization/GetUserPopupAuthorization?${employeeCode ? 'employeeCode=' + employeeCode : ''}`
	);
};
export const getAuthorizationGetRolePageAuthorization = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(roleId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>[]>>(
		`/Authorization/GetRolePageAuthorization?${roleId ? 'roleId=' + roleId : ''}`
	);
};
export const getAuthorizationGetRolePopupAuthorization = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(roleId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>[]>>(
		`/Authorization/GetRolePopupAuthorization?${roleId ? 'roleId=' + roleId : ''}`
	);
};
export const getAuthorizationGetCurrentUserPageAuthorizationByRouteKey = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(
	routeKey: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>>>(
		`/Authorization/GetCurrentUserPageAuthorizationByRouteKey?${routeKey ? 'routeKey=' + routeKey : ''}`
	);
};
export const getAuthorizationGetCurrentUserPopupAuthorizationByPopupkey = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(
	popupkey: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>>>(
		`/Authorization/GetCurrentUserPopupAuthorizationByPopupkey?${popupkey ? 'popupkey=' + popupkey : ''}`
	);
};
export const getBankBookGetBankBookById = <RNU extends (keyof AT_BankBookViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankBookViewModel, RNU>>>(`/BankBook/GetBankBookById?${id ? 'id=' + id : ''}`);
};
export const postBankBookAddBankBook = <NUDATA extends (keyof AT_BankBookModel)[] = []>(data: U_I_NoNull<AT_BankBookModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/BankBook/AddBankBook`, data);
};
export const postBankBookUpdateBankBook = <NUDATA extends (keyof AT_BankBookModel)[] = []>(id: any, data: U_I_NoNull<AT_BankBookModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/BankBook/UpdateBankBook?${id ? 'id=' + id : ''}`, data);
};
export const postBankBookRemoveBankBook = (id: any) => {
	return axios.post<ResponseData<any>>(`/BankBook/RemoveBankBook?${id ? 'id=' + id : ''}`);
};
export const postBankBookGetBankBookToPage = <
	RNU extends (keyof AT_BankBookPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BankBookQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BankBookQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BankBookPageModelIEnumerableInt32Tuple, RNU>>>(`/BankBook/GetBankBookToPage`, data);
};
export const getBankCardGetBankCardById = <RNU extends (keyof AT_BankCardViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankCardViewModel, RNU>>>(`/BankCard/GetBankCardById?${id ? 'id=' + id : ''}`);
};
export const postBankCardAddBankCard = <NUDATA extends (keyof AT_BankCardModel)[] = []>(data: U_I_NoNull<AT_BankCardModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/BankCard/AddBankCard`, data);
};
export const postBankCardUpdateBankCard = <NUDATA extends (keyof AT_BankCardModel)[] = []>(id: any, data: U_I_NoNull<AT_BankCardModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/BankCard/UpdateBankCard?${id ? 'id=' + id : ''}`, data);
};
export const postBankCardFreeze = (id: any) => {
	return axios.post<ResponseData<any>>(`/BankCard/Freeze?${id ? 'id=' + id : ''}`);
};
export const postBankCardThawing = (id: any) => {
	return axios.post<ResponseData<any>>(`/BankCard/Thawing?${id ? 'id=' + id : ''}`);
};
export const postBankCardIsAsyncBankCard = (id: any) => {
	return axios.post<ResponseData<any>>(`/BankCard/IsAsyncBankCard?${id ? 'id=' + id : ''}`);
};
export const postBankCardGetBankCardToPage = <
	RNU extends (keyof AT_BankCardPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BankCardQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BankCardQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BankCardPageModelIEnumerableInt32Tuple, RNU>>>(`/BankCard/GetBankCardToPage`, data);
};
export const postBankDaybookGetBankDaybookList = <
	RNU extends (keyof AT_BankDaybookListModel)[] = [],
	NUDATA extends (keyof AT_BankDaybookQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BankDaybookQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BankDaybookListModel, RNU>[]>>(`/BankDaybook/GetBankDaybookList`, data);
};
export const postBankDaybookExportBankDaybookList = <NUDATA extends (keyof AT_BankDaybookQueryModel)[] = []>(
	data: U_I_NoNull<AT_BankDaybookQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/BankDaybook/ExportBankDaybookList`, data);
};
export const postBasicAccountGetBasicAccountToPage = <
	RNU extends (keyof AT_BasicAccountPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BasicAccountQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BasicAccountQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BasicAccountPageModelIEnumerableInt32Tuple, RNU>>>(`/BasicAccount/GetBasicAccountToPage`, data);
};
export const postBasicAccountUpdateBasicAccount = <NUDATA extends (keyof AT_BasicAccountModel)[] = []>(
	data: U_I_NoNull<AT_BasicAccountModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/BasicAccount/UpdateBasicAccount`, data);
};
export const getBasicAccountSearchBasicAccountByPayee = <RNU extends (keyof AT_SearchBasicAccountModel)[] = []>(payee: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchBasicAccountModel, RNU>[]>>(
		`/BasicAccount/SearchBasicAccountByPayee?${payee ? 'payee=' + payee : ''}`
	);
};
export const getBasicAccountGetBasicAccountByBasicAccountCode = <RNU extends (keyof AT_BasicAccountSimpleModel)[] = []>(basicAccountCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BasicAccountSimpleModel, RNU>[]>>(
		`/BasicAccount/GetBasicAccountByBasicAccountCode?${basicAccountCode ? 'basicAccountCode=' + basicAccountCode : ''}`
	);
};
export const getBreedEnrollGeBreedEnrollById = <RNU extends (keyof AT_BreedEnrollViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BreedEnrollViewModel, RNU>>>(`/BreedEnroll/GeBreedEnrollById?${id ? 'id=' + id : ''}`);
};
export const postBreedEnrollAddBreedEnroll = <NUDATA extends (keyof AT_BreedEnrollModel)[] = []>(data: U_I_NoNull<AT_BreedEnrollModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/BreedEnroll/AddBreedEnroll`, data);
};
export const postBreedEnrollUpdateBreedEnroll = <NUDATA extends (keyof AT_BreedEnrollModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_BreedEnrollModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/BreedEnroll/UpdateBreedEnroll?${id ? 'id=' + id : ''}`, data);
};
export const postBreedEnrollDeleteBreedEnroll = (id: any) => {
	return axios.post<ResponseData<any>>(`/BreedEnroll/DeleteBreedEnroll?${id ? 'id=' + id : ''}`);
};
export const postBreedEnrollGetBreedEnrollToPage = <
	RNU extends (keyof AT_BreedEnrollPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BreedEnrollQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BreedEnrollQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BreedEnrollPageModelIEnumerableInt32Tuple, RNU>>>(`/BreedEnroll/GetBreedEnrollToPage`, data);
};
export const getFlowBulletinGetBulletinByFlowId = <RNU extends (keyof AT_FlowModelBulletinViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelBulletinViewModelTuple, RNU>>>(
		`/flow/Bulletin/GetBulletinByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowBulletinBulletinPublish = <NUDATA extends (keyof AT_BulletinPublishModel)[] = []>(
	data: U_I_NoNull<AT_BulletinPublishModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/BulletinPublish`, data);
};
export const postFlowBulletinBulletinRemove = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/BulletinRemove?${id ? 'id=' + id : ''}`);
};
export const postFlowBulletinDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(
	data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/DynamicSubmitAudit`, data);
};
export const postFlowBulletinPendingAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/PendingAudit`, data);
};
export const postFlowBulletinRejectAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/RejectAudit`, data);
};
export const postFlowBulletinDynamicRejectAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(
	data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/DynamicRejectAudit`, data);
};
export const postFlowBulletinResetAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/ResetAudit`, data);
};
export const postFlowBulletinSaveDraft = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/SaveDraft`, data);
};
export const postFlowBulletinSubmitAudit = <NUDATA extends (keyof AT_FlowBulletinModel)[] = []>(data: U_I_NoNull<AT_FlowBulletinModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Bulletin/SubmitAudit`, data);
};
export const postFlowBulletinGetBulletinToPage = <
	RNU extends (keyof AT_BulletinPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BulletinQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BulletinQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BulletinPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Bulletin/GetBulletinToPage`, data);
};
export const getFlowBulletinGetBulletinLocation = (bulletinId: any) => {
	return axios.get<ResponseData<any>>(`/flow/Bulletin/GetBulletinLocation?${bulletinId ? 'bulletinId=' + bulletinId : ''}`);
};
export const postFlowAddBulletinRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/AddBulletin/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowBulletinGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/Bulletin/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowBulletinGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/Bulletin/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postClientAddClient = <NUDATA extends (keyof AT_ClientModel)[] = []>(data: U_I_NoNull<AT_ClientModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Client/AddClient`, data);
};
export const postClientUpdateClient = <NUDATA extends (keyof AT_ClientModel)[] = []>(clientCode: any, data: U_I_NoNull<AT_ClientModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Client/UpdateClient?${clientCode ? 'clientCode=' + clientCode : ''}`, data);
};
export const postClientRemoveClient = (clientCode: any) => {
	return axios.post<ResponseData<any>>(`/Client/RemoveClient?${clientCode ? 'clientCode=' + clientCode : ''}`);
};
export const getClientGetClientIsController = (clientCode: any) => {
	return axios.get<ResponseData<any>>(`/Client/GetClientIsController?${clientCode ? 'clientCode=' + clientCode : ''}`);
};
export const getClientGetClientInfoByClientCode = <RNU extends (keyof AT_ClientViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientViewModel, RNU>>>(
		`/Client/GetClientInfoByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetTeamInfoByClientCode = <RNU extends (keyof AT_TeamInfoModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TeamInfoModel, RNU>>>(
		`/Client/GetTeamInfoByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const postClientGetClientToPage = <
	RNU extends (keyof AT_ClientPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientPageModelIEnumerableInt32Tuple, RNU>>>(`/Client/GetClientToPage`, data);
};
export const getClientSearchClientContactsByClientCode = <RNU extends (keyof AT_ClientContactModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientContactModel, RNU>[]>>(
		`/Client/SearchClientContactsByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientSearchClientContactByClientCode = <RNU extends (keyof AT_ClientContactModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientContactModel, RNU>>>(
		`/Client/SearchClientContactByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const postClientGetClientBankAuditToPage = <
	RNU extends (keyof AT_ClientBankAuditPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientBankAuditQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientBankAuditQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientBankAuditPageModelIEnumerableInt32Tuple, RNU>>>(`/Client/GetClientBankAuditToPage`, data);
};
export const postClientGetClientBankSummaryToPage = <
	RNU extends (keyof AT_ClientBankSummaryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientBankSummaryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientBankSummaryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientBankSummaryPageModelIEnumerableInt32Tuple, RNU>>>(`/Client/GetClientBankSummaryToPage`, data);
};
export const getClientGetMoneyPayDetailsByBankCode = <RNU extends (keyof AT_MoneyPaySimpleModel)[] = []>(bankCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyPaySimpleModel, RNU>[]>>(
		`/Client/GetMoneyPayDetailsByBankCode?${bankCode ? 'bankCode=' + bankCode : ''}`
	);
};
export const postClientSaveClientBankSummary = <NUDATA extends (keyof AT_ClientBankSummaryRequestModel)[] = []>(
	data: U_I_NoNull<AT_ClientBankSummaryRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/SaveClientBankSummary`, data);
};
export const postClientAuditNewClientBank = <NUDATA extends (keyof AT_TransferClientBankModel)[] = []>(
	transferId: any,
	data: U_I_NoNull<AT_TransferClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/AuditNewClientBank?${transferId ? 'transferId=' + transferId : ''}`, data);
};
export const getClientGetTransferClientBankById = <RNU extends (keyof AT_TransferClientBankViewModel)[] = []>(transferId: any, bankCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TransferClientBankViewModel, RNU>>>(
		`/Client/GetTransferClientBankById?${transferId ? 'transferId=' + transferId : ''}&${bankCode ? 'bankCode=' + bankCode : ''}`
	);
};
export const postClientAuditFreezeClientBank = <NUDATA extends (keyof AT_TransferClientBankModel)[] = []>(
	transferId: any,
	data: U_I_NoNull<AT_TransferClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/AuditFreezeClientBank?${transferId ? 'transferId=' + transferId : ''}`, data);
};
export const postClientAuditUnfreezeClientBank = <NUDATA extends (keyof AT_TransferClientBankModel)[] = []>(
	transferId: any,
	data: U_I_NoNull<AT_TransferClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/AuditUnfreezeClientBank?${transferId ? 'transferId=' + transferId : ''}`, data);
};
export const getClientGetClientStateList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Client/GetClientStateList`);
};
export const getClientGetClientTeamByClientCode = <RNU extends (keyof AT_ClientTeamViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamViewModel, RNU>>>(
		`/Client/GetClientTeamByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetClientTeamDeliveriesByClientCode = <RNU extends (keyof AT_ClientTeamDeliveryViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamDeliveryViewModel, RNU>[]>>(
		`/Client/GetClientTeamDeliveriesByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetClientController = <RNU extends (keyof AT_ClientControllerViewModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientControllerViewModel, RNU>[]>>(
		`/Client/GetClientController?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const postClientGetClientLiaisonToPage = <
	RNU extends (keyof AT_ClientLiaisonPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientLiaisonQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientLiaisonQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientLiaisonPageModelIEnumerableInt32Tuple, RNU>>>(`/Client/GetClientLiaisonToPage`, data);
};
export const getClientGetClientLiaisonById = <RNU extends (keyof AT_ClientLiaisonViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientLiaisonViewModel, RNU>>>(`/Client/GetClientLiaisonById?${id ? 'id=' + id : ''}`);
};
export const getClientGetClientTeamGovernmentsByClientCode = <RNU extends (keyof AT_ClientTeamGovernmentViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamGovernmentViewModel, RNU>[]>>(
		`/Client/GetClientTeamGovernmentsByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetClientTeamOrganizesByClientCode = <RNU extends (keyof AT_ClientTeamOrganizeViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamOrganizeViewModel, RNU>[]>>(
		`/Client/GetClientTeamOrganizesByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetClientTeamServicesByClientCode = <RNU extends (keyof AT_ClientTeamServiceViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamServiceViewModel, RNU>[]>>(
		`/Client/GetClientTeamServicesByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getClientGetClientTeamSpreadByClientCode = <RNU extends (keyof AT_ClientTeamSpreadViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientTeamSpreadViewModel, RNU>[]>>(
		`/Client/GetClientTeamSpreadByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const postClientCheckUserReceive = <NUDATA extends (keyof AT_ClientContactModel)[] = []>(
	clientCode: any,
	data: U_I_NoNull<AT_ClientContactModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/CheckUserReceive?${clientCode ? 'clientCode=' + clientCode : ''}`, data);
};
export const postClientSaveClientLiaison = <NUDATA extends (keyof AT_ClientLiaisonRequestModel)[] = []>(
	data: U_I_NoNull<AT_ClientLiaisonRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Client/SaveClientLiaison`, data);
};
export const getClientGetSupplierByClientCode = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Client/GetSupplierByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getFlowClientBankGetClientBankByFlowId = <RNU extends (keyof AT_FlowModelTransferClientBankViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelTransferClientBankViewModelTuple, RNU>>>(
		`/flow/ClientBank/GetClientBankByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowClientBankGetClientBankByBankCode = <RNU extends (keyof AT_ClientBankViewModel)[] = []>(bankCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientBankViewModel, RNU>>>(
		`/flow/ClientBank/GetClientBankByBankCode?${bankCode ? 'bankCode=' + bankCode : ''}`
	);
};
export const postFlowClientBankDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/DynamicSubmitAudit`, data);
};
export const postFlowClientBankPendingAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/PendingAudit`, data);
};
export const postFlowClientBankRejectAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/RejectAudit`, data);
};
export const postFlowClientBankDynamicRejectAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/DynamicRejectAudit`, data);
};
export const postFlowClientBankResetAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/ResetAudit`, data);
};
export const postFlowClientBankSaveDraft = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/SaveDraft`, data);
};
export const postFlowClientBankSubmitAudit = <NUDATA extends (keyof AT_FlowClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/SubmitAudit`, data);
};
export const postFlowRecordAccountAddAuditRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/RecordAccountAddAudit/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowClientBankRemoveClientBankByBankCode = (bankCode: any) => {
	return axios.get<ResponseData<any>>(`/flow/ClientBank/RemoveClientBankByBankCode?${bankCode ? 'bankCode=' + bankCode : ''}`);
};
export const postFlowClientBankFreezeClientBank = <NUDATA extends (keyof AT_FreezeClientBankModel)[] = []>(
	data: U_I_NoNull<AT_FreezeClientBankModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/FreezeClientBank`, data);
};
export const getFlowClientBankGetClientBankAttachmentByClientCode = <RNU extends (keyof AT_AttachmentModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AttachmentModel, RNU>[]>>(
		`/flow/ClientBank/GetClientBankAttachmentByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const postFlowClientBankGetClientBankToPage = <
	RNU extends (keyof AT_ClientBankPactStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientBankPactStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientBankPactStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientBankPactStockPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ClientBank/GetClientBankToPage`,
		data
	);
};
export const postFlowClientBankSaveClientBankPactStock = <NUDATA extends (keyof AT_ClientBankPactStockRequestModel)[] = []>(
	data: U_I_NoNull<AT_ClientBankPactStockRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientBank/SaveClientBankPactStock`, data);
};
export const postFlowClientBankGetRegisterClientToPage = <
	RNU extends (keyof AT_RegisterClientPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RegisterClientQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_RegisterClientQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_RegisterClientPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/ClientBank/GetRegisterClientToPage`, data);
};
export const getFlowClientBankGetClientBankRecordListByBankCode = <RNU extends (keyof AT_ClientBankRecordViewModel)[] = []>(bankCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientBankRecordViewModel, RNU>[]>>(
		`/flow/ClientBank/GetClientBankRecordListByBankCode?${bankCode ? 'bankCode=' + bankCode : ''}`
	);
};
export const getFlowClientBankGetClientBankRecordJsonDataById = (id: any) => {
	return axios.get<ResponseData<any>>(`/flow/ClientBank/GetClientBankRecordJsonDataById?${id ? 'id=' + id : ''}`);
};
export const getFlowClientBankGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/ClientBank/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowClientBankGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/ClientBank/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowClientDeliveryGetClientDeliveryByFlowId = <RNU extends (keyof AT_FlowModelClientDeliveryAccountViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelClientDeliveryAccountViewModelTuple, RNU>>>(
		`/flow/ClientDelivery/GetClientDeliveryByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowClientDeliveryGetTransClientDeliveryById = <RNU extends (keyof AT_ClientDeliveryAccountViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientDeliveryAccountViewModel, RNU>>>(
		`/flow/ClientDelivery/GetTransClientDeliveryById?${id ? 'id=' + id : ''}`
	);
};
export const postFlowClientDeliveryDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/DynamicSubmitAudit`, data);
};
export const postFlowClientDeliveryPendingAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/PendingAudit`, data);
};
export const postFlowClientDeliveryRejectAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/RejectAudit`, data);
};
export const postFlowClientDeliveryDynamicRejectAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/DynamicRejectAudit`, data);
};
export const postFlowClientDeliveryResetAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/ResetAudit`, data);
};
export const postFlowClientDeliverySaveDraft = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/SaveDraft`, data);
};
export const postFlowClientDeliverySubmitAudit = <NUDATA extends (keyof AT_FlowClientDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowClientDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ClientDelivery/SubmitAudit`, data);
};
export const postFlowClientDeliveryGetClientDeliveryToPage = <
	RNU extends (keyof AT_ClientDeliveryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientDeliveryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientDeliveryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ClientDelivery/GetClientDeliveryToPage`,
		data
	);
};
export const postFlowClientDeliveryGetTransferClientDeliveryToPage = <
	RNU extends (keyof AT_TransferClientDeliveryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientDeliveryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferClientDeliveryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ClientDelivery/GetTransferClientDeliveryToPage`,
		data
	);
};
export const getFlowClientDeliveryGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/ClientDelivery/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowClientDeliveryGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/ClientDelivery/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postClientProductFlowtoGetClientProductFlowtoToPage = <
	RNU extends (keyof AT_ClientProductFlowtoPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientProductFlowtoQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientProductFlowtoQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientProductFlowtoPageModelIEnumerableInt32Tuple, RNU>>>(
		`/ClientProductFlowto/GetClientProductFlowtoToPage`,
		data
	);
};
export const postClientProductFlowtoExportClientProductFlowto = <NUDATA extends (keyof AT_ClientProductFlowtoQueryModel)[] = []>(
	data: U_I_NoNull<AT_ClientProductFlowtoQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/ClientProductFlowto/ExportClientProductFlowto`, data);
};
export const postClientProductFlowtoConfirmFlowto = <NU0 extends (keyof AT_IsAffirmState)[] = []>(
	state: U_I_NoNull<AT_IsAffirmState, NU0>,
	data: any
) => {
	return axios.post<ResponseData<any>>(`/ClientProductFlowto/ConfirmFlowto?${state ? 'state=' + state : ''}`, data);
};
export const postClientProductFlowtoImportClientProductFlowto = (data: any) => {
	return axios.post<ResponseData<any>>(`/ClientProductFlowto/ImportClientProductFlowto`, data);
};
export const getClientProductFlowtoGetAffirmState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/ClientProductFlowto/GetAffirmState`);
};
export const postClientProductFlowtoGetClientProductFlowtoSumToPage = <
	RNU extends (keyof AT_ClientProductFlowtoSumPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ClientProductFlowtoSumQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ClientProductFlowtoSumQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ClientProductFlowtoSumPageModelIEnumerableInt32Tuple, RNU>>>(
		`/ClientProductFlowto/GetClientProductFlowtoSumToPage`,
		data
	);
};
export const postClientProductFlowtoGetTerminalProductFlowtoSumToPage = <
	RNU extends (keyof AT_TerminalProductFlowtoSumPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TerminalProductFlowtoSumQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TerminalProductFlowtoSumQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TerminalProductFlowtoSumPageModelIEnumerableInt32Tuple, RNU>>>(
		`/ClientProductFlowto/GetTerminalProductFlowtoSumToPage`,
		data
	);
};
export const getClientProductFlowtoGetClientProductFlowtoYears = () => {
	return axios.get<ResponseData<any>>(`/ClientProductFlowto/GetClientProductFlowtoYears`);
};
export const getCommonSearchStaffBankCardByCode = <RNU extends (keyof AT_StaffInfoOpenCardModel)[] = []>(employeeCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfoOpenCardModel, RNU>[]>>(
		`/Common/SearchStaffBankCardByCode?${employeeCode ? 'employeeCode=' + employeeCode : ''}`
	);
};
export const getCommonSearchBankCardUseState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchBankCardUseState`);
};
export const getCommonGetDepartmentStruct = <RNU extends (keyof AT_DepartmentStruct)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentStruct, RNU>>>(`/Common/GetDepartmentStruct`);
};
export const getCommonGetDepartmentListByDepCode = <RNU extends (keyof AT_BaseDepartment)[] = []>(depCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BaseDepartment, RNU>[]>>(`/Common/GetDepartmentListByDepCode?${depCode ? 'depCode=' + depCode : ''}`);
};
export const getCommonGetDepartmentUesrListByDepCode = <RNU extends (keyof AT_DepartmentUesr)[] = []>(depCode: any, dailylogId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(
		`/Common/GetDepartmentUesrListByDepCode?${depCode ? 'depCode=' + depCode : ''}&${dailylogId ? 'dailylogId=' + dailylogId : ''}`
	);
};
export const getCommonGetAllDepartmentUesrListByDepCode = <RNU extends (keyof AT_DepartmentUesr)[] = []>(depCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(
		`/Common/GetAllDepartmentUesrListByDepCode?${depCode ? 'depCode=' + depCode : ''}`
	);
};
export const getCommonGetPurchaseAndCustomerServiceUesrList = <RNU extends (keyof AT_DepartmentUesr)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(`/Common/GetPurchaseAndCustomerServiceUesrList`);
};
export const getCommonGetFinanceUesrList = <RNU extends (keyof AT_DepartmentUesr)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(`/Common/GetFinanceUesrList`);
};
export const getCommonGetDepartmentUesrList = <RNU extends (keyof AT_DepartmentUesr)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(`/Common/GetDepartmentUesrList`);
};
export const getCommonDailyLogTabPageType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/DailyLogTabPageType`);
};
export const getCommonGetAllClient = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(`/Common/GetAllClient`);
};
export const getCommonGetControllerClient = <RNU extends (keyof AT_ClientSimpleModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientSimpleModel, RNU>[]>>(
		`/Common/GetControllerClient?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonSearchSaleDeliveryState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSaleDeliveryState`);
};
export const getCommonSearchPurchaseOrderPaymentMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchPurchaseOrderPaymentMode`);
};
export const getCommonSearchDepartmentUesrList = <RNU extends (keyof AT_DepartmentUesr)[] = []>(searchText: any, dailylogId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(
		`/Common/SearchDepartmentUesrList?${searchText ? 'searchText=' + searchText : ''}&${dailylogId ? 'dailylogId=' + dailylogId : ''}`
	);
};
export const getCommonSearchAllDepartmentUesrList = <RNU extends (keyof AT_DepartmentUesr)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DepartmentUesr, RNU>[]>>(
		`/Common/SearchAllDepartmentUesrList?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchMaterialState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMaterialState`);
};
export const getCommonSearchPreparationsState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchPreparationsState`);
};
export const getCommonComputingProducePlanAmount = (Output: any, Amount: any) => {
	return axios.get<ResponseData<any>>(`/Common/ComputingProducePlanAmount?${Output ? 'Output=' + Output : ''}&${Amount ? 'Amount=' + Amount : ''}`);
};
export const getCommonSearchSaleInvoiceState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSaleInvoiceState`);
};
export const getCommonSearchSaleOrderType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSaleOrderType`);
};
export const getCommonSearchAgent = <RNU extends (keyof AT_TeamInfoSearchModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TeamInfoSearchModel, RNU>[]>>(`/Common/SearchAgent?${searchText ? 'searchText=' + searchText : ''}`);
};
export const getCommonClientPostType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/ClientPostType`);
};
export const getCommonMainBusinessType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/MainBusinessType`);
};
export const getCommonSearchClientDeliveries = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchClientDeliveries?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchClientSuppliers = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(clientCode: any, searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchClientSuppliers?${clientCode ? 'clientCode=' + clientCode : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonGetBankBookByCompanyCode = <RNU extends (keyof AT_SearchBankBookSimpleModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchBankBookSimpleModel, RNU>[]>>(
		`/Common/GetBankBookByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonGetBankCardByBankBookCode = <RNU extends (keyof AT_SearchBankCardSimpleModel)[] = []>(bankBookCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchBankCardSimpleModel, RNU>[]>>(
		`/Common/GetBankCardByBankBookCode?${bankBookCode ? 'bankBookCode=' + bankBookCode : ''}`
	);
};
export const getCommonSearchProjectManage = <RNU extends (keyof AT_ProjectManageSimpleModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProjectManageSimpleModel, RNU>[]>>(
		`/Common/SearchProjectManage?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonGetCompanyByCode = <RNU extends (keyof AT_CompanyEntity)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyEntity, RNU>>>(`/Common/GetCompanyByCode?${companyCode ? 'companyCode=' + companyCode : ''}`);
};
export const getCommonCostPaymentMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CostPaymentMethod`);
};
export const getCommonSpecialCostPaymentMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SpecialCostPaymentMethod`);
};
export const getCommonClientProductFlowtoDataType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/ClientProductFlowtoDataType`);
};
export const getCommonPurchaseBackSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/PurchaseBackSubject`);
};
export const getCommonSaleContractCustomerType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SaleContractCustomerType`);
};
export const getCommonSearchRejectRecordState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchRejectRecordState`);
};
export const getCommonCooperationBusinessCooperationMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessCooperationMode`);
};
export const getCommonCooperationBusinessCooperationModeAll = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessCooperationModeAll`);
};
export const getCommonCooperationBusinessIsGroup = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessIsGroup`);
};
export const getCommonCooperationBusinessActualController = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessActualController`);
};
export const getCommonCooperationBusinessSettleProgram = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessSettleProgram`);
};
export const getCommonCooperationBusinessCashWay = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessCashWay`);
};
export const getCommonCooperationBusinessPayMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessPayMethod`);
};
export const getCommonCooperationBusinessPayPeriod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationBusinessPayPeriod`);
};
export const getCommonCooperationMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationMode`);
};
export const getCommonBusinessOrderType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/BusinessOrderType`);
};
export const getCommonRefreshData = (table: any, whereSql: any, updateField: any) => {
	return axios.get<ResponseData<any>>(
		`/Common/RefreshData?${table ? 'table=' + table : ''}&${whereSql ? 'whereSql=' + whereSql : ''}&${
			updateField ? 'updateField=' + updateField : ''
		}`
	);
};
export const getCommonEarnestDeliveryState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/EarnestDeliveryState`);
};
export const getCommonSearchTerminalEnrollVolleyMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchTerminalEnrollVolleyMethod`);
};
export const getCommonSearchBreedEnrollVolleyMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchBreedEnrollVolleyMethod`);
};
export const getCommonCooperationAmountSettlementBasis = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationAmountSettlementBasis`);
};
export const getCommonCooperationAmountBillingCycle = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/CooperationAmountBillingCycle`);
};
export const getCommonGetCooperationCode = (provinceId: any, productCode: any, clientCode: any) => {
	return axios.get<ResponseData<any>>(
		`/Common/GetCooperationCode?${provinceId ? 'provinceId=' + provinceId : ''}&${productCode ? 'productCode=' + productCode : ''}&${
			clientCode ? 'clientCode=' + clientCode : ''
		}`
	);
};
export const getCommonGoodsApprovalAttribute = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/GoodsApprovalAttribute`);
};
export const getCommonGoodsApprovalDutySubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/GoodsApprovalDutySubject`);
};
export const getCommonGetCooperationBusinessDeliveryGoods = <RNU extends (keyof AT_GoodsSimpleModel)[] = []>(
	supplierCode: any,
	deliveryCode: any,
	clientCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSimpleModel, RNU>[]>>(
		`/Common/GetCooperationBusinessDeliveryGoods?${supplierCode ? 'supplierCode=' + supplierCode : ''}&${
			deliveryCode ? 'deliveryCode=' + deliveryCode : ''
		}&${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetCooperationGoods = <RNU extends (keyof AT_GoodsSimpleModel)[] = []>(
	supplierCode: any,
	deliveryCode: any,
	clientCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSimpleModel, RNU>[]>>(
		`/Common/GetCooperationGoods?${supplierCode ? 'supplierCode=' + supplierCode : ''}&${deliveryCode ? 'deliveryCode=' + deliveryCode : ''}&${
			clientCode ? 'clientCode=' + clientCode : ''
		}`
	);
};
export const getCommonSettleState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SettleState`);
};
export const getCommonSaleConfirmState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SaleConfirmState`);
};
export const getCommonFlowtoStockDoJob = () => {
	return axios.get<ResponseData<any>>(`/Common/FlowtoStockDoJob`);
};
export const getCommonSearchCompanyFilter = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(`/Common/SearchCompanyFilter`);
};
export const getCommonNoticeType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/NoticeType`);
};
export const getCommonInternalTransferPayType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/InternalTransferPayType`);
};
export const getCommonInternalTransferBackType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/InternalTransferBackType`);
};
export const getCommonFlowtoSaleConfirmDataSource = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/FlowtoSaleConfirmDataSource`);
};
export const getCommonSearchComboBoxType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchComboBoxType`);
};
export const getCommonSearchAllProvince = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchAllProvince`);
};
export const getCommonSearchAllCountyByCity = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(cityId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchAllCountyByCity?${cityId ? 'cityId=' + cityId : ''}`);
};
export const getCommonSearchAllCityByProvince = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(provinceid: any, isDistinguishCity: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/Common/SearchAllCityByProvince?${provinceid ? 'provinceid=' + provinceid : ''}&${
			isDistinguishCity ? 'isDistinguishCity=' + isDistinguishCity : ''
		}`
	);
};
export const getCommonSearchAllCityBusinessByProvince = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(provinceid: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/Common/SearchAllCityBusinessByProvince?${provinceid ? 'provinceid=' + provinceid : ''}`
	);
};
export const getCommonGetTeamInfoByProvinceId = <RNU extends (keyof AT_TeamInfoViewModel)[] = []>(provinceId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TeamInfoViewModel, RNU>[]>>(
		`/Common/GetTeamInfoByProvinceId?${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getCommonGetGoodListByProvinceId = <RNU extends (keyof AT_GoodsViewModel)[] = []>(provinceId: any, clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsViewModel, RNU>[]>>(
		`/Common/GetGoodListByProvinceId?${provinceId ? 'provinceId=' + provinceId : ''}&${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetCompanyWarehouses = <RNU extends (keyof AT_KeyValueStringModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringModel, RNU>[]>>(`/Common/GetCompanyWarehouses`);
};
export const getCommonGetCompanyWarehousesByCompanyCode = <RNU extends (keyof AT_KeyValueStringModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringModel, RNU>[]>>(
		`/Common/GetCompanyWarehousesByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonSearchAllStaff = <RNU extends (keyof AT_StaffBasicInfo)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_StaffBasicInfo, RNU>[]>>(`/Common/SearchAllStaff`);
};
export const getCommonSearchAllOpenSystemUser = <RNU extends (keyof AT_StaffBasicInfo)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_StaffBasicInfo, RNU>[]>>(`/Common/SearchAllOpenSystemUser`);
};
export const getCommonSearchPopupRoute = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/Common/SearchPopupRoute?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchAllRoles = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/Common/SearchAllRoles?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchFlowListState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchFlowListState`);
};
export const getCommonSearchAllFlowType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchAllFlowType`);
};
export const getCommonSearchAllComboBoxTypeData = <
	RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = [],
	NU0 extends (keyof AT_ComboBoxType)[] = [],
>(
	comboBoxType: U_I_NoNull<AT_ComboBoxType, NU0>
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/Common/SearchAllComboBoxTypeData?${comboBoxType ? 'comboBoxType=' + comboBoxType : ''}`
	);
};
export const getCommonSearchGoodsInfo = <RNU extends (keyof AT_SearchGoodsInfoModel)[] = []>(
	searchText: any,
	isFilterGoodsCatalog: any,
	isApis: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchGoodsInfoModel, RNU>[]>>(
		`/Common/SearchGoodsInfo?${searchText ? 'searchText=' + searchText : ''}&${
			isFilterGoodsCatalog ? 'isFilterGoodsCatalog=' + isFilterGoodsCatalog : ''
		}&${isApis ? 'isApis=' + isApis : ''}`
	);
};
export const getCommonSearchAllGoodsInfo = <RNU extends (keyof AT_SearchGoodsInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchGoodsInfoModel, RNU>[]>>(
		`/Common/SearchAllGoodsInfo?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchGoodsInfoByClientCode = <RNU extends (keyof AT_SearchGoodsInfoModel)[] = []>(clientCode: any, searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchGoodsInfoModel, RNU>[]>>(
		`/Common/SearchGoodsInfoByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchCalculateMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchCalculateMode`);
};
export const getCommonSearchSettleMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSettleMode`);
};
export const getCommonSearchBulletinLocation = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchBulletinLocation`);
};
export const getCommonSearchCompanyInfo = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchCompanyInfo?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonGetFKSCompanyInfo = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(`/Common/GetFKSCompanyInfo`);
};
export const getCommonSearchCompanyInfoForResetPrice = <RNU extends (keyof AT_SearchCompanyInfoModelForResetPrice)[] = []>(
	searchText: any,
	companyCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModelForResetPrice, RNU>[]>>(
		`/Common/SearchCompanyInfoForResetPrice?${searchText ? 'searchText=' + searchText : ''}&${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonSearchCompanyInfoByRoleType = <
	RNU extends (keyof AT_SearchCompanyInfoModel)[] = [],
	NU0 extends (keyof AT_CompanyRoleType)[] = [],
>(
	roleType: U_I_NoNull<AT_CompanyRoleType, NU0>,
	searchText: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchCompanyInfoByRoleType?${roleType ? 'roleType=' + roleType : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchCompanyInfoByCompanyType = <
	RNU extends (keyof AT_SearchCompanyInfoModel)[] = [],
	NU0 extends (keyof AT_CompanyType)[] = [],
>(
	companyType: U_I_NoNull<AT_CompanyType, NU0>,
	searchText: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchCompanyInfoByCompanyType?${companyType ? 'companyType=' + companyType : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchSupplierCompanyInfo = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchSupplierCompanyInfo?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchGoodsSupplier = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchGoodsSupplier?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchPreparationSupplier = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchPreparationSupplier?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchDeliveryCompanyInfo = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Common/SearchDeliveryCompanyInfo?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getCommonSearchGoodsByDrugName = <RNU extends (keyof AT_GoodsSimpleModel)[] = []>(drugName: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSimpleModel, RNU>[]>>(`/Common/SearchGoodsByDrugName?${drugName ? 'drugName=' + drugName : ''}`);
};
export const getCommonSearchInvestmentGoodsByDrugName = <RNU extends (keyof AT_GoodsSimpleModel)[] = []>(drugName: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSimpleModel, RNU>[]>>(
		`/Common/SearchInvestmentGoodsByDrugName?${drugName ? 'drugName=' + drugName : ''}`
	);
};
export const getCommonSearchGoodsByCode = <RNU extends (keyof AT_GoodsSimpleModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSimpleModel, RNU>>>(
		`/Common/SearchGoodsByCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getCommonSearchCooperationDeliveryByMultiple = <RNU extends (keyof AT_CooperationDeliverySimpleModel)[] = []>(
	clientCode: any,
	cooperationMode: any,
	supplierCode: any,
	deliveryCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CooperationDeliverySimpleModel, RNU>[]>>(
		`/Common/SearchCooperationDeliveryByMultiple?${clientCode ? 'clientCode=' + clientCode : ''}&${
			cooperationMode ? 'cooperationMode=' + cooperationMode : ''
		}&${supplierCode ? 'supplierCode=' + supplierCode : ''}&${deliveryCode ? 'deliveryCode=' + deliveryCode : ''}`
	);
};
export const getCommonSearchClientByName = <RNU extends (keyof AT_ClientSimpleModel)[] = []>(name: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientSimpleModel, RNU>[]>>(`/Common/SearchClientByName?${name ? 'name=' + name : ''}`);
};
export const getCommonSearchClientByCode = <RNU extends (keyof AT_ClientSimpleModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientSimpleModel, RNU>>>(`/Common/SearchClientByCode?${clientCode ? 'clientCode=' + clientCode : ''}`);
};
export const getCommonSearchFreezeStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchFreezeStatus`);
};
export const getCommonSearchBankCardUseType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchBankCardUseType`);
};
export const getCommonSearchPairCodeState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchPairCodeState`);
};
export const getCommonSearchHaiDianTransferStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchHaiDianTransferStatus`);
};
export const getCommonSearchBankBookByBankName = <RNU extends (keyof AT_BankBookSimpleModel)[] = []>(bankName: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankBookSimpleModel, RNU>[]>>(
		`/Common/SearchBankBookByBankName?${bankName ? 'bankName=' + bankName : ''}`
	);
};
export const getCommonSearchGoodsSupplierGoods = <RNU extends (keyof AT_GoodsSupplierGoodsModel)[] = []>(supplierCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSupplierGoodsModel, RNU>[]>>(
		`/Common/SearchGoodsSupplierGoods?${supplierCode ? 'supplierCode=' + supplierCode : ''}`
	);
};
export const getCommonSearchGoodsPurchaseByDrugName = <RNU extends (keyof AT_SearchGoodsPurchaseModel)[] = []>(drugName: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchGoodsPurchaseModel, RNU>[]>>(
		`/Common/SearchGoodsPurchaseByDrugName?${drugName ? 'drugName=' + drugName : ''}`
	);
};
export const getCommonSearchSupplierGoodsByText = <RNU extends (keyof AT_GoodsSupplierGoodsModel)[] = []>(
	supplierCode: any,
	searchText: any,
	isNeedPolicy: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsSupplierGoodsModel, RNU>[]>>(
		`/Common/SearchSupplierGoodsByText?${supplierCode ? 'supplierCode=' + supplierCode : ''}&${searchText ? 'searchText=' + searchText : ''}&${
			isNeedPolicy ? 'isNeedPolicy=' + isNeedPolicy : ''
		}`
	);
};
export const getCommonComputingAmount = (count: any, price: any) => {
	return axios.get<ResponseData<any>>(`/Common/ComputingAmount?${count ? 'count=' + count : ''}&${price ? 'price=' + price : ''}`);
};
export const getCommonSearchOrderType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchOrderType`);
};
export const getCommonSearchMoneyPayOrderType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMoneyPayOrderType`);
};
export const getCommonSearchMoneyBackOrderType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMoneyBackOrderType`);
};
export const getCommonSearchBackUnitType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchBackUnitType`);
};
export const getCommonSearchPayUnitType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchPayUnitType`);
};
export const getCommonSearchMoneyBackAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMoneyBackAttachmentType`);
};
export const getCommonSearchBankBookByComCode = <RNU extends (keyof AT_BankBookSimpleModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankBookSimpleModel, RNU>[]>>(
		`/Common/SearchBankBookByComCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonGetBankCardByCode = <RNU extends (keyof AT_BankCardSimpleModel)[] = []>(bankBookCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankCardSimpleModel, RNU>[]>>(
		`/Common/GetBankCardByCode?${bankBookCode ? 'bankBookCode=' + bankBookCode : ''}`
	);
};
export const getCommonGetBankCardByComCode = <RNU extends (keyof AT_BankCardSimpleModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankCardSimpleModel, RNU>[]>>(
		`/Common/GetBankCardByComCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonGetBankCardByClientCode = <RNU extends (keyof AT_ClientBankSimpleModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientBankSimpleModel, RNU>[]>>(
		`/Common/GetBankCardByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetBankCardByCompanyCode = <RNU extends (keyof AT_CompanyBankSimpleModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyBankSimpleModel, RNU>[]>>(
		`/Common/GetBankCardByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonComputingPieceNumber = (count: any, wholePackage: any) => {
	return axios.get<ResponseData<any>>(
		`/Common/ComputingPieceNumber?${count ? 'count=' + count : ''}&${wholePackage ? 'wholePackage=' + wholePackage : ''}`
	);
};
export const getCommonComputingMoneyBackFee = (money: any, feeRate: any) => {
	return axios.get<ResponseData<any>>(`/Common/ComputingMoneyBackFee?${money ? 'money=' + money : ''}&${feeRate ? 'feeRate=' + feeRate : ''}`);
};
export const getCommonComputingMoneyBackRate = (fee: any, money: any) => {
	return axios.get<ResponseData<any>>(`/Common/ComputingMoneyBackRate?${fee ? 'fee=' + fee : ''}&${money ? 'money=' + money : ''}`);
};
export const getCommonComputingCooperationDeliveryCommissionPrice = (invoicePrice: any, settlePrice: any, taxRate: any) => {
	return axios.get<ResponseData<any>>(
		`/Common/ComputingCooperationDeliveryCommissionPrice?${invoicePrice ? 'invoicePrice=' + invoicePrice : ''}&${
			settlePrice ? 'settlePrice=' + settlePrice : ''
		}&${taxRate ? 'taxRate=' + taxRate : ''}`
	);
};
export const getCommonComputingInStorageNumber = (inStorageAmount: any, wholePackage: any) => {
	return axios.get<ResponseData<any>>(
		`/Common/ComputingInStorageNumber?${inStorageAmount ? 'inStorageAmount=' + inStorageAmount : ''}&${
			wholePackage ? 'wholePackage=' + wholePackage : ''
		}`
	);
};
export const getCommonSearchOrderStateType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchOrderStateType`);
};
export const getCommonSearchInvoiceStateType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchInvoiceStateType`);
};
export const getCommonSearchMarketEarnestType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchMarketEarnestType`);
};
export const getCommonSearchLoanEarnestType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchLoanEarnestType`);
};
export const getCommonSearchEarnestUse = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchEarnestUse`);
};
export const getCommonSearchEarnestDataType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchEarnestDataType`);
};
export const getCommonSearchBankByBankCard = <RNU extends (keyof AT_BankBookSimpleModel)[] = []>(bankCardCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankBookSimpleModel, RNU>[]>>(
		`/Common/SearchBankByBankCard?${bankCardCode ? 'bankCardCode=' + bankCardCode : ''}`
	);
};
export const getCommonSearchInvestmentByCode = <RNU extends (keyof AT_InvestmentPageModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_InvestmentPageModel, RNU>[]>>(
		`/Common/SearchInvestmentByCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonSearchDeliveryByClientCode = <RNU extends (keyof AT_DeliveryViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DeliveryViewModel, RNU>[]>>(
		`/Common/SearchDeliveryByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetGoodsDeliverySimpleUnit = <RNU extends (keyof AT_GoodsDeliverySimpleUnitModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsDeliverySimpleUnitModel, RNU>[]>>(
		`/Common/GetGoodsDeliverySimpleUnit?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getCommonGetTransferClientDelivery = <RNU extends (keyof AT_TransferClientDeliverySimpleModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TransferClientDeliverySimpleModel, RNU>[]>>(
		`/Common/GetTransferClientDelivery?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetLogisticByName = <RNU extends (keyof AT_LogisticSimpleModel)[] = []>(name: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_LogisticSimpleModel, RNU>[]>>(`/Common/GetLogisticByName?${name ? 'name=' + name : ''}`);
};
export const getCommonSearchHandleMode = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(`/Common/SearchHandleMode`);
};
export const getCommonSearchLogisticStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchLogisticStatus`);
};
export const getCommonSearchSaleInStockState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchSaleInStockState`);
};
export const getCommonSearchAccurateDeliveryState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchAccurateDeliveryState`);
};
export const getCommonSearchHospitalType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Common/SearchHospitalType`);
};
export const getCommonSearchCooperationByCode = <RNU extends (keyof AT_ClientProViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientProViewModel, RNU>[]>>(
		`/Common/SearchCooperationByCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonSearchAuditCooperationByCode = <RNU extends (keyof AT_ClientProViewModel)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ClientProViewModel, RNU>[]>>(
		`/Common/SearchAuditCooperationByCode?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getCommonGetReceiptByCompanyCode = <RNU extends (keyof AT_CompanyReceiptViewModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyReceiptViewModel, RNU>[]>>(
		`/Common/GetReceiptByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCommonSearchStaffInfo = <RNU extends (keyof AT_StaffInfo)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(`/Common/SearchStaffInfo?${searchText ? 'searchText=' + searchText : ''}`);
};
export const getCommonGetProvinceByClientCode = (clientCode: any) => {
	return axios.get<ResponseData<any>>(`/Common/GetProvinceByClientCode?${clientCode ? 'clientCode=' + clientCode : ''}`);
};
export const postCompanyAddCompany = <NUDATA extends (keyof AT_CompanyEditModel)[] = []>(data: U_I_NoNull<AT_CompanyEditModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Company/AddCompany`, data);
};
export const postCompanyAuditDelivery = <NUDATA extends (keyof AT_DeliveryCompanyAuditModel)[] = []>(
	companyCode: any,
	data: U_I_NoNull<AT_DeliveryCompanyAuditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Company/AuditDelivery?${companyCode ? 'companyCode=' + companyCode : ''}`, data);
};
export const getCompanyDeleteCompany = (companyId: any) => {
	return axios.get<ResponseData<any>>(`/Company/DeleteCompany?${companyId ? 'companyId=' + companyId : ''}`);
};
export const postCompanyExportCompanyQualification = <NUDATA extends (keyof AT_CompanyQualificationQueryModel)[] = []>(
	data: U_I_NoNull<AT_CompanyQualificationQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Company/ExportCompanyQualification`, data);
};
export const getCompanyGetCompanyByCompanyCode = <RNU extends (keyof AT_CompanyViewModel)[] = []>(companyCode: any, isFilterCompanyBank: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyViewModel, RNU>>>(
		`/Company/GetCompanyByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}&${
			isFilterCompanyBank ? 'isFilterCompanyBank=' + isFilterCompanyBank : ''
		}`
	);
};
export const getCompanyGetCompanyById = <RNU extends (keyof AT_CompanyViewModel)[] = []>(companyId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyViewModel, RNU>>>(`/Company/GetCompanyById?${companyId ? 'companyId=' + companyId : ''}`);
};
export const postCompanyGetCompanyToPage = <
	RNU extends (keyof AT_CompanyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CompanyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CompanyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CompanyPageModelIEnumerableInt32Tuple, RNU>>>(`/Company/GetCompanyToPage`, data);
};
export const postCompanyGetDeliveryAuditToPage = <
	RNU extends (keyof AT_DeliveryAuditPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DeliveryAuditQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_DeliveryAuditQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DeliveryAuditPageModelIEnumerableInt32Tuple, RNU>>>(`/Company/GetDeliveryAuditToPage`, data);
};
export const getCompanyGetTransferCompanyByCompanyCode = <RNU extends (keyof AT_TransferCompanyViewModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TransferCompanyViewModel, RNU>>>(
		`/Company/GetTransferCompanyByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const postCompanyRejectDelivery = <NUDATA extends (keyof AT_DeliveryAuditModel)[] = []>(data: U_I_NoNull<AT_DeliveryAuditModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Company/RejectDelivery`, data);
};
export const getCompanySearchCompanyRoleType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Company/SearchCompanyRoleType`);
};
export const getCompanySearchCompanyType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Company/SearchCompanyType`);
};
export const getCompanyGetCompanyArchivesState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Company/GetCompanyArchivesState`);
};
export const postCompanySearchCompanyTypeByRoleType = <
	RNU extends (keyof AT_KeyValueIntViewModel)[] = [],
	NUDATA extends (keyof AT_CompanyRoleType)[] = [],
>(
	data: U_I_NoNull<AT_CompanyRoleType, NUDATA>[]
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Company/SearchCompanyTypeByRoleType`, data);
};
export const postCompanyUpdateCompany = <NUDATA extends (keyof AT_CompanyEditModel)[] = []>(
	companyId: any,
	data: U_I_NoNull<AT_CompanyEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Company/UpdateCompany?${companyId ? 'companyId=' + companyId : ''}`, data);
};
export const getCompanySearchCompanyReceivesByCompanyCode = <RNU extends (keyof AT_CompanyReceiveSimpleViewModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyReceiveSimpleViewModel, RNU>[]>>(
		`/Company/SearchCompanyReceivesByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getCompanyCreateArchives = (companyCode: any) => {
	return axios.get<ResponseData<any>>(`/Company/CreateArchives?${companyCode ? 'companyCode=' + companyCode : ''}`);
};
export const getCompanyUnCreateArchives = (companyCode: any) => {
	return axios.get<ResponseData<any>>(`/Company/UnCreateArchives?${companyCode ? 'companyCode=' + companyCode : ''}`);
};
export const postFlowCompanyBorrowGetCompanyBorrowToPage = <
	RNU extends (keyof AT_CompanyBorrowPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CompanyBorrowQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CompanyBorrowQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CompanyBorrowPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/CompanyBorrow/GetCompanyBorrowToPage`,
		data
	);
};
export const getFlowCompanyBorrowGetCompanyBorrowByFlowId = <RNU extends (keyof AT_FlowModelCompanyBorrowViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCompanyBorrowViewModelTuple, RNU>>>(
		`/flow/CompanyBorrow/GetCompanyBorrowByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCompanyBorrowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/DynamicSubmitAudit`, data);
};
export const postFlowCompanyBorrowPendingAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/PendingAudit`, data);
};
export const postFlowCompanyBorrowRejectAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/RejectAudit`, data);
};
export const postFlowCompanyBorrowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/DynamicRejectAudit`, data);
};
export const postFlowCompanyBorrowResetAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/ResetAudit`, data);
};
export const postFlowCompanyBorrowSaveDraft = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/SaveDraft`, data);
};
export const postFlowCompanyBorrowSubmitAudit = <NUDATA extends (keyof AT_FlowCompanyBorrowModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyBorrowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyBorrow/SubmitAudit`, data);
};
export const getFlowCompanyBorrowGetSettleDetailsByBorrowCode = <RNU extends (keyof AT_BorrowSettleRecordModel)[] = []>(borrowCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowSettleRecordModel, RNU>[]>>(
		`/flow/CompanyBorrow/GetSettleDetailsByBorrowCode?${borrowCode ? 'borrowCode=' + borrowCode : ''}`
	);
};
export const getFlowCompanyBorrowGetPayRecordsByBorrowCode = <RNU extends (keyof AT_BorrowPayRecordModel)[] = []>(borrowCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowPayRecordModel, RNU>[]>>(
		`/flow/CompanyBorrow/GetPayRecordsByBorrowCode?${borrowCode ? 'borrowCode=' + borrowCode : ''}`
	);
};
export const getFlowCompanyBorrowGetBackRecordsByBorrowCode = <RNU extends (keyof AT_BorrowBackRecordModel)[] = []>(borrowCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowBackRecordModel, RNU>[]>>(
		`/flow/CompanyBorrow/GetBackRecordsByBorrowCode?${borrowCode ? 'borrowCode=' + borrowCode : ''}`
	);
};
export const getFlowCompanyBorrowSearchCompanyBorrowType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/CompanyBorrow/SearchCompanyBorrowType`);
};
export const getFlowCompanyBorrowSearchCompanyRepaymentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/CompanyBorrow/SearchCompanyRepaymentType`);
};
export const getFlowCompanyBorrowSearchSettleStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/CompanyBorrow/SearchSettleStateEnum`);
};
export const getFlowCompanyBorrowSearchBorrowStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/CompanyBorrow/SearchBorrowStateEnum`);
};
export const getFlowCompanyBorrowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CompanyBorrow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCompanyBorrowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CompanyBorrow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCompanyRepaymentGetCompanyRepaymentToPage = <
	RNU extends (keyof AT_CompanyRepaymentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CompanyRepaymentQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CompanyRepaymentQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CompanyRepaymentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/CompanyRepayment/GetCompanyRepaymentToPage`,
		data
	);
};
export const getFlowCompanyRepaymentGetCompanyRepaymentByFlowId = <RNU extends (keyof AT_FlowModelCompanyRepaymentViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCompanyRepaymentViewModelTuple, RNU>>>(
		`/flow/CompanyRepayment/GetCompanyRepaymentByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCompanyRepaymentDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/DynamicSubmitAudit`, data);
};
export const postFlowCompanyRepaymentPendingAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/PendingAudit`, data);
};
export const postFlowCompanyRepaymentRejectAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/RejectAudit`, data);
};
export const postFlowCompanyRepaymentDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/DynamicRejectAudit`, data);
};
export const postFlowCompanyRepaymentResetAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/ResetAudit`, data);
};
export const postFlowCompanyRepaymentSaveDraft = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/SaveDraft`, data);
};
export const postFlowCompanyRepaymentSubmitAudit = <NUDATA extends (keyof AT_FlowCompanyRepaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowCompanyRepaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CompanyRepayment/SubmitAudit`, data);
};
export const getFlowCompanyRepaymentGetPayRecordsByRepaymentCode = <RNU extends (keyof AT_BorrowPayRecordModel)[] = []>(repaymentCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowPayRecordModel, RNU>[]>>(
		`/flow/CompanyRepayment/GetPayRecordsByRepaymentCode?${repaymentCode ? 'repaymentCode=' + repaymentCode : ''}`
	);
};
export const getFlowCompanyRepaymentGetBackRecordsByRepaymentCode = <RNU extends (keyof AT_BorrowBackRecordModel)[] = []>(repaymentCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowBackRecordModel, RNU>[]>>(
		`/flow/CompanyRepayment/GetBackRecordsByRepaymentCode?${repaymentCode ? 'repaymentCode=' + repaymentCode : ''}`
	);
};
export const getFlowCompanyRepaymentGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CompanyRepayment/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCompanyRepaymentGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CompanyRepayment/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationGetCooperationByFlowId = <RNU extends (keyof AT_FlowModelCooperationViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationViewModelTuple, RNU>>>(
		`/flow/Cooperation/GetCooperationByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationGetCooperationDeliveriesByCooperationCode = <
	RNU extends (keyof AT_CooperationDeliveryViewModel)[] = [],
	NUDATA extends (keyof AT_CooperationDeliverySearchModel)[] = [],
>(
	data: U_I_NoNull<AT_CooperationDeliverySearchModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationDeliveryViewModel, RNU>[]>>(
		`/flow/Cooperation/GetCooperationDeliveriesByCooperationCode`,
		data
	);
};
export const postFlowCooperationGetClientIsCooperation = <NUDATA extends (keyof AT_CooperationClientCode)[] = []>(
	data: U_I_NoNull<AT_CooperationClientCode, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/GetClientIsCooperation`, data);
};
export const postFlowCooperationDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/DynamicSubmitAudit`, data);
};
export const postFlowCooperationPendingAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/PendingAudit`, data);
};
export const postFlowCooperationRejectAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/RejectAudit`, data);
};
export const postFlowCooperationDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/DynamicRejectAudit`, data);
};
export const postFlowCooperationResetAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/ResetAudit`, data);
};
export const postFlowCooperationSaveDraft = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/SaveDraft`, data);
};
export const postFlowCooperationSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Cooperation/SubmitAudit`, data);
};
export const postFlowCooperationUpdateCooperationMemo = <NUDATA extends (keyof AT_CooperationEditModel)[] = []>(
	cooperationCode: any,
	data: U_I_NoNull<AT_CooperationEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(
		`/flow/Cooperation/UpdateCooperationMemo?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`,
		data
	);
};
export const postFlowCooperationUpdateCooperationTerminal = (cooperationCode: any, data: any) => {
	return axios.post<ResponseData<any>>(
		`/flow/Cooperation/UpdateCooperationTerminal?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`,
		data
	);
};
export const getFlowCooperationGetNewCooperationNoAmount = <RNU extends (keyof AT_CooperationNoAmountModel)[] = []>(cooperationCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CooperationNoAmountModel, RNU>>>(
		`/flow/Cooperation/GetNewCooperationNoAmount?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`
	);
};
export const postFlowCooperationGetCooperationToPage = <
	RNU extends (keyof AT_CooperationPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CooperationQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CooperationQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Cooperation/GetCooperationToPage`, data);
};
export const getFlowCooperationGetClientCooperationProvince = <RNU extends (keyof AT_CooperationProvince)[] = []>(clientCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CooperationProvince, RNU>>>(
		`/flow/Cooperation/GetClientCooperationProvince?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const getFlowCooperationGetCooperationByCooperationCode = <RNU extends (keyof AT_CooperationViewModel)[] = []>(cooperationCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CooperationViewModel, RNU>>>(
		`/flow/Cooperation/GetCooperationByCooperationCode?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`
	);
};
export const getFlowCooperationGetCooperationAmountSettlementBasis = (cooperationCode: any, startDate: any, endDate: any) => {
	return axios.get<ResponseData<any>>(
		`/flow/Cooperation/GetCooperationAmountSettlementBasis?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}&${
			startDate ? 'startDate=' + startDate : ''
		}&${endDate ? 'endDate=' + endDate : ''}`
	);
};
export const getFlowCooperationCalculateCommissionMeasurement = (invoicePrice: any, settlePrice: any, taxRate: any) => {
	return axios.get<ResponseData<any>>(
		`/flow/Cooperation/CalculateCommissionMeasurement?${invoicePrice ? 'invoicePrice=' + invoicePrice : ''}&${
			settlePrice ? 'settlePrice=' + settlePrice : ''
		}&${taxRate ? 'taxRate=' + taxRate : ''}`
	);
};
export const getFlowCooperationGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/Cooperation/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/Cooperation/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationBusinessGetCooperationBusinessToPage = <
	RNU extends (keyof AT_CooperationBusinessPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CooperationBusinessQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CooperationBusinessQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationBusinessPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/CooperationBusiness/GetCooperationBusinessToPage`,
		data
	);
};
export const getFlowCooperationBusinessGetCooperationBusinessByFlowId = <RNU extends (keyof AT_FlowModelCooperationBusinessViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationBusinessViewModelTuple, RNU>>>(
		`/flow/CooperationBusiness/GetCooperationBusinessByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationBusinessDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/DynamicSubmitAudit`, data);
};
export const postFlowCooperationBusinessPendingAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/PendingAudit`, data);
};
export const postFlowCooperationBusinessRejectAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/RejectAudit`, data);
};
export const postFlowCooperationBusinessDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/DynamicRejectAudit`, data);
};
export const postFlowCooperationBusinessResetAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/ResetAudit`, data);
};
export const postFlowCooperationBusinessSaveDraft = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/SaveDraft`, data);
};
export const postFlowCooperationBusinessSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/SubmitAudit`, data);
};
export const postFlowCooperationBusinessEditCooperationBusiness = <NUDATA extends (keyof AT_FlowCooperationBusinessModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusiness/EditCooperationBusiness`, data);
};
export const getFlowCooperationBusinessGetCooperationBusinessDeliveriesByCode = <RNU extends (keyof AT_CooperationBusinessDeliveryViewModel)[] = []>(
	cooperationCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CooperationBusinessDeliveryViewModel, RNU>[]>>(
		`/flow/CooperationBusiness/GetCooperationBusinessDeliveriesByCode?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`
	);
};
export const getFlowCooperationBusinessGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CooperationBusiness/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationBusinessGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CooperationBusiness/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationBusinessDeliveryGetCooperationBusinessDeliveryByFlowId = <
	RNU extends (keyof AT_FlowModelCooperationBusinessDeliveryViewModelTuple)[] = [],
>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationBusinessDeliveryViewModelTuple, RNU>>>(
		`/flow/CooperationBusinessDelivery/GetCooperationBusinessDeliveryByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationBusinessDeliveryDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/DynamicSubmitAudit`, data);
};
export const postFlowCooperationBusinessDeliveryPendingAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/PendingAudit`, data);
};
export const postFlowCooperationBusinessDeliveryRejectAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/RejectAudit`, data);
};
export const postFlowCooperationBusinessDeliveryDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/DynamicRejectAudit`, data);
};
export const postFlowCooperationBusinessDeliveryResetAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/ResetAudit`, data);
};
export const postFlowCooperationBusinessDeliverySaveDraft = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/SaveDraft`, data);
};
export const postFlowCooperationBusinessDeliverySubmitAudit = <NUDATA extends (keyof AT_FlowCooperationBusinessDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationBusinessDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationBusinessDelivery/SubmitAudit`, data);
};
export const postFlowCooperationBusinessDeliveryGetDeliveryRate = <
	RNU extends (keyof AT_DecimalStringTuple)[] = [],
	NUDATA extends (keyof AT_DeliveryRateRequestModel)[] = [],
>(
	data: U_I_NoNull<AT_DeliveryRateRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DecimalStringTuple, RNU>>>(`/flow/CooperationBusinessDelivery/GetDeliveryRate`, data);
};
export const getFlowCooperationBusinessDeliveryGetPolicyCashWayList = (cooperationCode: any) => {
	return axios.get<ResponseData<any>>(
		`/flow/CooperationBusinessDelivery/GetPolicyCashWayList?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`
	);
};
export const getFlowCooperationBusinessDeliveryCalculateInvoicePrice = (netPrice: any, deliveryRate: any, cashWay: any) => {
	return axios.get<ResponseData<any>>(
		`/flow/CooperationBusinessDelivery/CalculateInvoicePrice?${netPrice ? 'netPrice=' + netPrice : ''}&${
			deliveryRate ? 'deliveryRate=' + deliveryRate : ''
		}&${cashWay ? 'cashWay=' + cashWay : ''}`
	);
};
export const postFlowCooperationBusinessDeliveryGetNetPriceAndIsBring = <
	RNU extends (keyof AT_NetSimpleModel)[] = [],
	NUDATA extends (keyof AT_SearchNetModel)[] = [],
>(
	data: U_I_NoNull<AT_SearchNetModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_NetSimpleModel, RNU>>>(`/flow/CooperationBusinessDelivery/GetNetPriceAndIsBring`, data);
};
export const getFlowCooperationBusinessDeliveryGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CooperationBusinessDelivery/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationBusinessDeliveryGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CooperationBusinessDelivery/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationDeliveryGetCooperationDeliveryByFlowId = <RNU extends (keyof AT_FlowModelCooperationDeliveryViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationDeliveryViewModelTuple, RNU>>>(
		`/flow/CooperationDelivery/GetCooperationDeliveryByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationDeliveryUpdateCooperationDeliveryByFlowId = <NUDATA extends (keyof AT_CooperationDeliveryUpdateModel)[] = []>(
	data: U_I_NoNull<AT_CooperationDeliveryUpdateModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/UpdateCooperationDeliveryByFlowId`, data);
};
export const postFlowCooperationDeliveryDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/DynamicSubmitAudit`, data);
};
export const postFlowCooperationDeliveryPendingAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/PendingAudit`, data);
};
export const postFlowCooperationDeliveryRejectAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/RejectAudit`, data);
};
export const postFlowCooperationDeliveryDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/DynamicRejectAudit`, data);
};
export const postFlowCooperationDeliveryResetAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/ResetAudit`, data);
};
export const postFlowCooperationDeliverySaveDraft = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/SaveDraft`, data);
};
export const postFlowCooperationDeliverySubmitAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationDelivery/SubmitAudit`, data);
};
export const postFlowAddDistributionBusinessRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/AddDistributionBusiness/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const postFlowReviewPriceStartRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/ReviewPriceStart/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowCooperationDeliveryGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CooperationDelivery/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationDeliveryGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CooperationDelivery/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationTerminalGetCooperationTerminalByFlowId = <RNU extends (keyof AT_FlowModelCooperationTerminalViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationTerminalViewModelTuple, RNU>>>(
		`/flow/CooperationTerminal/GetCooperationTerminalByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowCooperationTerminalGetCooperationTerminalToPage = <
	RNU extends (keyof AT_CooperationTerminalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CooperationTerminalQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CooperationTerminalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationTerminalPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/CooperationTerminal/GetCooperationTerminalToPage`,
		data
	);
};
export const postFlowCooperationTerminalDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/DynamicSubmitAudit`, data);
};
export const postFlowCooperationTerminalPendingAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/PendingAudit`, data);
};
export const postFlowCooperationTerminalRejectAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/RejectAudit`, data);
};
export const postFlowCooperationTerminalDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/DynamicRejectAudit`, data);
};
export const postFlowCooperationTerminalResetAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/ResetAudit`, data);
};
export const postFlowCooperationTerminalSaveDraft = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/SaveDraft`, data);
};
export const postFlowCooperationTerminalSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/SubmitAudit`, data);
};
export const postFlowCooperationTerminalCooperationTerminalGetOver = <NUDATA extends (keyof AT_CooperationTerminalGetOverRequestModel)[] = []>(
	data: U_I_NoNull<AT_CooperationTerminalGetOverRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/CooperationTerminalGetOver`, data);
};
export const postFlowCooperationTerminalDeleteCooperationTerminal = (data: any) => {
	return axios.post<ResponseData<any>>(`/flow/CooperationTerminal/DeleteCooperationTerminal`, data);
};
export const getFlowCooperationTerminalGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/CooperationTerminal/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCooperationTerminalGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/CooperationTerminal/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCostGetCostByFlowId = <RNU extends (keyof AT_FlowModelCostViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCostViewModelTuple, RNU>>>(`/flow/Cost/GetCostByFlowId?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowCostCostModel = <RNU extends (keyof AT_CostModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_CostModel, RNU>>>(`/flow/Cost/CostModel`);
};
export const postFlowCostDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/DynamicSubmitAudit`, data);
};
export const postFlowCostPendingAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/PendingAudit`, data);
};
export const postFlowCostRejectAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/RejectAudit`, data);
};
export const postFlowCostDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/DynamicRejectAudit`, data);
};
export const postFlowCostResetAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/ResetAudit`, data);
};
export const postFlowCostSaveDraft = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/SaveDraft`, data);
};
export const postFlowCostSubmitAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(data: U_I_NoNull<AT_FlowCostModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Cost/SubmitAudit`, data);
};
export const postFlowCostGetCostToPage = <
	RNU extends (keyof AT_CostPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CostQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CostPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Cost/GetCostToPage`, data);
};
export const getFlowCostGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/Cost/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowCostGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/Cost/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postDailylogSaveDailyLog = <NUDATA extends (keyof AT_DailyLogRequestModel)[] = []>(
	data: U_I_NoNull<AT_DailyLogRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Dailylog/SaveDailyLog`, data);
};
export const getDailylogDeleteDailyLog = (dailyLogId: any) => {
	return axios.get<ResponseData<any>>(`/Dailylog/DeleteDailyLog?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}`);
};
export const postDailylogSaveDailyLogComment = <NUDATA extends (keyof AT_DailyLogRequsetComment)[] = []>(
	data: U_I_NoNull<AT_DailyLogRequsetComment, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Dailylog/SaveDailyLogComment`, data);
};
export const getDailylogDeleteDailyLogComment = (dailyLogCommentId: any) => {
	return axios.get<ResponseData<any>>(`/Dailylog/DeleteDailyLogComment?${dailyLogCommentId ? 'dailyLogCommentId=' + dailyLogCommentId : ''}`);
};
export const postDailylogDailyLogShare = (dailylogId: any, data: any) => {
	return axios.post<ResponseData<any>>(`/Dailylog/DailyLogShare?${dailylogId ? 'dailylogId=' + dailylogId : ''}`, data);
};
export const getDailylogDailyLogPraise = (dailyLogId: any, isPraise: any) => {
	return axios.get<ResponseData<any>>(
		`/Dailylog/DailyLogPraise?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${isPraise ? 'isPraise=' + isPraise : ''}`
	);
};
export const getDailylogDailyLogKeep = (dailyLogId: any, isKeep: any) => {
	return axios.get<ResponseData<any>>(`/Dailylog/DailyLogKeep?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${isKeep ? 'isKeep=' + isKeep : ''}`);
};
export const getDailylogDailyLogRead = (dailyLogId: any) => {
	return axios.get<ResponseData<any>>(`/Dailylog/DailyLogRead?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}`);
};
export const postDailylogGetDailylogList = <
	RNU extends (keyof AT_DailylogPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DailylogQueryModel)[] = [],
>(
	pageType: any,
	data: U_I_NoNull<AT_DailylogQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DailylogPageModelIEnumerableInt32Tuple, RNU>>>(
		`/Dailylog/GetDailylogList?${pageType ? 'pageType=' + pageType : ''}`,
		data
	);
};
export const getDailylogGetDailyLogPageCount = <RNU extends (keyof AT_DailyLogPageCountModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DailyLogPageCountModel, RNU>>>(`/Dailylog/GetDailyLogPageCount`);
};
export const getDailylogGetDailyLogInfoById = <RNU extends (keyof AT_DailyLogViewModel)[] = []>(dailyLogId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DailyLogViewModel, RNU>>>(
		`/Dailylog/GetDailyLogInfoById?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}`
	);
};
export const getDailylogGetDailyLogBulletinList = <RNU extends (keyof AT_DailyLogBulletinViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_DailyLogBulletinViewModel, RNU>[]>>(`/Dailylog/GetDailyLogBulletinList`);
};
export const getDailylogGetDailylogCommentViewModelById = <RNU extends (keyof AT_DailylogCommentBaseViewModel)[] = []>(dailyLogId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DailylogCommentBaseViewModel, RNU>[]>>(
		`/Dailylog/GetDailylogCommentViewModelById?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}`
	);
};
export const postDevelopAddDevelop = <NUDATA extends (keyof AT_DevelopModel)[] = []>(data: U_I_NoNull<AT_DevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Develop/AddDevelop`, data);
};
export const postDevelopUpdateDevelop = <NUDATA extends (keyof AT_DevelopModel)[] = []>(id: any, data: U_I_NoNull<AT_DevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Develop/UpdateDevelop?${id ? 'id=' + id : ''}`, data);
};
export const getDevelopDeleteDevelop = (developId: any) => {
	return axios.get<ResponseData<any>>(`/Develop/DeleteDevelop?${developId ? 'developId=' + developId : ''}`);
};
export const postDevelopGetDevelopToPage = <
	RNU extends (keyof AT_DevelopPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DevelopQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_DevelopQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DevelopPageModelIEnumerableInt32Tuple, RNU>>>(`/Develop/GetDevelopToPage`, data);
};
export const postDevelopExportDevelop = <NUDATA extends (keyof AT_DevelopQueryModel)[] = []>(data: U_I_NoNull<AT_DevelopQueryModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Develop/ExportDevelop`, data);
};
export const getDevelopGetDevelopViewModelById = <RNU extends (keyof AT_DevelopViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DevelopViewModel, RNU>>>(`/Develop/GetDevelopViewModelById?${id ? 'id=' + id : ''}`);
};
export const getDevelopGetDevelopSchedules = <RNU extends (keyof AT_DevelopScheduleViewModel)[] = []>(developId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DevelopScheduleViewModel, RNU>[]>>(
		`/Develop/GetDevelopSchedules?${developId ? 'developId=' + developId : ''}`
	);
};
export const getDevelopConvertGoods = (developId: any) => {
	return axios.get<ResponseData<any>>(`/Develop/ConvertGoods?${developId ? 'developId=' + developId : ''}`);
};
export const getDevelopSearchCompanyInfoByCompanyType = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/Develop/SearchCompanyInfoByCompanyType?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getFlowDevelopFlowGetDevelopByFlowId = <RNU extends (keyof AT_FlowModelDevelopViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelDevelopViewModelTuple, RNU>>>(
		`/flow/DevelopFlow/GetDevelopByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowDevelopFlowGetDevelopById = <RNU extends (keyof AT_FlowModelDevelopViewModelTuple)[] = []>(developId: any, popupKey: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelDevelopViewModelTuple, RNU>>>(
		`/flow/DevelopFlow/GetDevelopById?${developId ? 'developId=' + developId : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowDevelopFlowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(
	data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/DynamicSubmitAudit`, data);
};
export const postFlowDevelopFlowPendingAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/PendingAudit`, data);
};
export const postFlowDevelopFlowRejectAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/RejectAudit`, data);
};
export const postFlowDevelopFlowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(
	data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/DynamicRejectAudit`, data);
};
export const postFlowDevelopFlowResetAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(
	developId: any,
	data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/ResetAudit?${developId ? 'developId=' + developId : ''}`, data);
};
export const postFlowDevelopFlowSaveDraft = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/SaveDraft`, data);
};
export const postFlowDevelopFlowSubmitAudit = <NUDATA extends (keyof AT_FlowDevelopModel)[] = []>(data: U_I_NoNull<AT_FlowDevelopModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/SubmitAudit`, data);
};
export const postFlowDevelopFlowGetDevelopToPage = <
	RNU extends (keyof AT_DevelopPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DevelopQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_DevelopQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DevelopPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/DevelopFlow/GetDevelopToPage`, data);
};
export const postFlowDevelopFlowExportDevelop = <NUDATA extends (keyof AT_DevelopQueryModel)[] = []>(
	data: U_I_NoNull<AT_DevelopQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/DevelopFlow/ExportDevelop`, data);
};
export const getFlowDevelopFlowSearchCompanyInfoByCompanyType = <RNU extends (keyof AT_SearchCompanyInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchCompanyInfoModel, RNU>[]>>(
		`/flow/DevelopFlow/SearchCompanyInfoByCompanyType?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getFlowDevelopFlowGetDevelopSchedules = <RNU extends (keyof AT_DevelopScheduleViewModel)[] = []>(developId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DevelopScheduleViewModel, RNU>[]>>(
		`/flow/DevelopFlow/GetDevelopSchedules?${developId ? 'developId=' + developId : ''}`
	);
};
export const getFlowDevelopFlowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/DevelopFlow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowDevelopFlowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/DevelopFlow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postDispatchAuthorizationDispatchPageAuthorizationToUser = <NUDATA extends (keyof AT_DispatchAuthorizationToUserModel)[] = []>(
	data: U_I_NoNull<AT_DispatchAuthorizationToUserModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/DispatchAuthorization/DispatchPageAuthorizationToUser`, data);
};
export const postDispatchAuthorizationDispatchPopupAuthorizationToUser = <NUDATA extends (keyof AT_DispatchAuthorizationToUserModel)[] = []>(
	data: U_I_NoNull<AT_DispatchAuthorizationToUserModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/DispatchAuthorization/DispatchPopupAuthorizationToUser`, data);
};
export const postDispatchAuthorizationDispatchPopupAuthorizationToRole = <NUDATA extends (keyof AT_DispatchAuthorizationToRoleModel)[] = []>(
	data: U_I_NoNull<AT_DispatchAuthorizationToRoleModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/DispatchAuthorization/DispatchPopupAuthorizationToRole`, data);
};
export const postDispatchAuthorizationDispatchPageAuthorizationToRole = <NUDATA extends (keyof AT_DispatchAuthorizationToRoleModel)[] = []>(
	data: U_I_NoNull<AT_DispatchAuthorizationToRoleModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/DispatchAuthorization/DispatchPageAuthorizationToRole`, data);
};
export const getDispatchAuthorizationGetUserPageAuthorization = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(employeeCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>[]>>(
		`/DispatchAuthorization/GetUserPageAuthorization?${employeeCode ? 'employeeCode=' + employeeCode : ''}`
	);
};
export const getDispatchAuthorizationGetUserAllPopupAuthorization = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(
	employeeCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>[]>>(
		`/DispatchAuthorization/GetUserAllPopupAuthorization?${employeeCode ? 'employeeCode=' + employeeCode : ''}`
	);
};
export const getDrugTerminalTest = () => {
	return axios.get<ResponseData<any>>(`/DrugTerminal/Test`);
};
export const postDrugTerminalGetDrugTerminalToPage = <
	RNU extends (keyof AT_DrugTerminalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DrugTerminalQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_DrugTerminalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DrugTerminalPageModelIEnumerableInt32Tuple, RNU>>>(`/DrugTerminal/GetDrugTerminalToPage`, data);
};
export const postDrugTerminalGetDrugTerminalByCooperationCodeNotExistsToPage = <
	RNU extends (keyof AT_DrugTerminalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DrugTerminalQueryModel)[] = [],
>(
	cooperationCode: any,
	data: U_I_NoNull<AT_DrugTerminalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DrugTerminalPageModelIEnumerableInt32Tuple, RNU>>>(
		`/DrugTerminal/GetDrugTerminalByCooperationCodeNotExistsToPage?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`,
		data
	);
};
export const postDrugTerminalGetDrugTerminalByCooperationCodeExistsToPage = <
	RNU extends (keyof AT_DrugTerminalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DrugTerminalQueryModel)[] = [],
>(
	cooperationCode: any,
	data: U_I_NoNull<AT_DrugTerminalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_DrugTerminalPageModelIEnumerableInt32Tuple, RNU>>>(
		`/DrugTerminal/GetDrugTerminalByCooperationCodeExistsToPage?${cooperationCode ? 'cooperationCode=' + cooperationCode : ''}`,
		data
	);
};
export const getDrugTerminalGetDrugTerminalById = <RNU extends (keyof AT_DrugTerminalModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DrugTerminalModel, RNU>>>(`/DrugTerminal/GetDrugTerminalById?${id ? 'id=' + id : ''}`);
};
export const postDrugTerminalImportDrugTerminalInfo = (data: any) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/ImportDrugTerminalInfo`, data);
};
export const postDrugTerminalAddDrugTerminalInfo = <NUDATA extends (keyof AT_DrugTerminalModel)[] = []>(
	data: U_I_NoNull<AT_DrugTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/AddDrugTerminalInfo`, data);
};
export const postDrugTerminalInvalidDrugTerminal = (data: any) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/InvalidDrugTerminal`, data);
};
export const postDrugTerminalAvailDrugTerminal = (data: any) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/AvailDrugTerminal`, data);
};
export const postDrugTerminalSaveDrugTerminalInfo = <NUDATA extends (keyof AT_DrugTerminalModel)[] = []>(
	drugTerminalId: any,
	data: U_I_NoNull<AT_DrugTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/SaveDrugTerminalInfo?${drugTerminalId ? 'drugTerminalId=' + drugTerminalId : ''}`, data);
};
export const postDrugTerminalDelDrugTerminalInfo = (data: any) => {
	return axios.post<ResponseData<any>>(`/DrugTerminal/DelDrugTerminalInfo`, data);
};
export const getDrugTerminalSearchDrugTerminal = <RNU extends (keyof AT_DrugTerminalSimpleModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DrugTerminalSimpleModel, RNU>[]>>(
		`/DrugTerminal/SearchDrugTerminal?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getDrugTerminalSearchDrugTerminalState = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(`/DrugTerminal/SearchDrugTerminalState`);
};
export const getFlowEarnestGetEarnestByFlowId = <RNU extends (keyof AT_FlowModelSaleEarnestViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleEarnestViewModelTuple, RNU>>>(
		`/flow/Earnest/GetEarnestByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowEarnestGetMarketEarnestToPage = <
	RNU extends (keyof AT_EarnestPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Earnest/GetMarketEarnestToPage`, data);
};
export const postFlowEarnestGetPaymentEarnestToPage = <
	RNU extends (keyof AT_EarnestPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Earnest/GetPaymentEarnestToPage`, data);
};
export const postFlowEarnestGetTransEarnestAttachmentByDetailCode = <RNU extends (keyof AT_AttachmentModel)[] = []>(earnestDetailsCode: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AttachmentModel, RNU>[]>>(
		`/flow/Earnest/GetTransEarnestAttachmentByDetailCode?${earnestDetailsCode ? 'earnestDetailsCode=' + earnestDetailsCode : ''}`
	);
};
export const getFlowEarnestGetTransferEarnestDetailsByCode = <RNU extends (keyof AT_EarnestDetailsViewModel)[] = []>(earnestCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestDetailsViewModel, RNU>[]>>(
		`/flow/Earnest/GetTransferEarnestDetailsByCode?${earnestCode ? 'earnestCode=' + earnestCode : ''}`
	);
};
export const getFlowEarnestGetTransferEarnestDeliveryByCode = <RNU extends (keyof AT_DeliveryViewModel)[] = []>(earnestCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DeliveryViewModel, RNU>[]>>(
		`/flow/Earnest/GetTransferEarnestDeliveryByCode?${earnestCode ? 'earnestCode=' + earnestCode : ''}`
	);
};
export const postFlowEarnestDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/DynamicSubmitAudit`, data);
};
export const postFlowEarnestPendingAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/PendingAudit`, data);
};
export const postFlowEarnestRejectAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/RejectAudit`, data);
};
export const postFlowEarnestDynamicRejectAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/DynamicRejectAudit`, data);
};
export const postFlowEarnestResetAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/ResetAudit`, data);
};
export const postFlowEarnestSaveDraft = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/SaveDraft`, data);
};
export const postFlowEarnestSubmitAudit = <NUDATA extends (keyof AT_FlowEarnestModel)[] = []>(data: U_I_NoNull<AT_FlowEarnestModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Earnest/SubmitAudit`, data);
};
export const postFlowEarnestGetSaleEarnestToPage = <
	RNU extends (keyof AT_EarnestPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Earnest/GetSaleEarnestToPage`, data);
};
export const postFlowEarnestGetGoodEarnestToPage = <
	RNU extends (keyof AT_EarnestPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Earnest/GetGoodEarnestToPage`, data);
};
export const getFlowEarnestGetMoneyBackAttachmentByCode = <RNU extends (keyof AT_MoneyBackAttachmentViewModel)[] = []>(earnestCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyBackAttachmentViewModel, RNU>[]>>(
		`/flow/Earnest/GetMoneyBackAttachmentByCode?${earnestCode ? 'earnestCode=' + earnestCode : ''}`
	);
};
export const getFlowEarnestGetEarnestRefundApplyByEarnestId = <RNU extends (keyof AT_EarnestRefundApplyViewModel)[] = []>(earnestId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestRefundApplyViewModel, RNU>>>(
		`/flow/Earnest/GetEarnestRefundApplyByEarnestId?${earnestId ? 'earnestId=' + earnestId : ''}`
	);
};
export const postFlowEarnestSaveSaleEarnestDeliveryState = <NUDATA extends (keyof AT_SaleEarnestDeliveryRequestModel)[] = []>(
	earnestDetailsCode: any,
	data: U_I_NoNull<AT_SaleEarnestDeliveryRequestModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(
		`/flow/Earnest/SaveSaleEarnestDeliveryState?${earnestDetailsCode ? 'earnestDetailsCode=' + earnestDetailsCode : ''}`,
		data
	);
};
export const postFlowEarnestGetSaleEarnestProcessReceiptListByCode = <RNU extends (keyof AT_SaleEarnestDeliveryViewModel)[] = []>(
	earnestDetailsCode: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleEarnestDeliveryViewModel, RNU>[]>>(
		`/flow/Earnest/GetSaleEarnestProcessReceiptListByCode?${earnestDetailsCode ? 'earnestDetailsCode=' + earnestDetailsCode : ''}`
	);
};
export const getFlowEarnestGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/Earnest/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowEarnestGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/Earnest/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowEarnestRefundApplyGetEarnestRefundApplyToPage = <
	RNU extends (keyof AT_EarnestRefundApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestRefundApplyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestRefundApplyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestRefundApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/EarnestRefundApply/GetEarnestRefundApplyToPage`,
		data
	);
};
export const postFlowEarnestRefundApplyGetMarketEarnestRefundApplyToPage = <
	RNU extends (keyof AT_EarnestRefundApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EarnestRefundApplyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_EarnestRefundApplyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_EarnestRefundApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/EarnestRefundApply/GetMarketEarnestRefundApplyToPage`,
		data
	);
};
export const getFlowEarnestRefundApplyGetEarnestRefundApplyByFlowId = <RNU extends (keyof AT_FlowModelEarnestRefundApplyViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelEarnestRefundApplyViewModelTuple, RNU>>>(
		`/flow/EarnestRefundApply/GetEarnestRefundApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowEarnestRefundApplyGetEarnestRefundApplyById = <RNU extends (keyof AT_EarnestRefundApplyViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestRefundApplyViewModel, RNU>>>(
		`/flow/EarnestRefundApply/GetEarnestRefundApplyById?${id ? 'id=' + id : ''}`
	);
};
export const postFlowEarnestRefundApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/DynamicSubmitAudit`, data);
};
export const postFlowEarnestRefundApplyPendingAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/PendingAudit`, data);
};
export const postFlowEarnestRefundApplyRejectAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/RejectAudit`, data);
};
export const postFlowEarnestRefundApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/DynamicRejectAudit`, data);
};
export const postFlowEarnestRefundApplyResetAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/ResetAudit`, data);
};
export const postFlowEarnestRefundApplySaveDraft = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/SaveDraft`, data);
};
export const postFlowEarnestRefundApplySubmitAudit = <NUDATA extends (keyof AT_FlowEarnestRefundApplyModel)[] = []>(
	data: U_I_NoNull<AT_FlowEarnestRefundApplyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/EarnestRefundApply/SubmitAudit`, data);
};
export const getFlowEarnestRefundApplyGetEarnestRefundApplyRecordsByEarnestCode = <RNU extends (keyof AT_EarnestRefundApplyRecordModel)[] = []>(
	earnestCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestRefundApplyRecordModel, RNU>[]>>(
		`/flow/EarnestRefundApply/GetEarnestRefundApplyRecordsByEarnestCode?${earnestCode ? 'earnestCode=' + earnestCode : ''}`
	);
};
export const getFlowEarnestRefundApplyGetEarnestRefundPayRecords = <RNU extends (keyof AT_EarnestRefundPayRecordModel)[] = []>(refundId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestRefundPayRecordModel, RNU>[]>>(
		`/flow/EarnestRefundApply/GetEarnestRefundPayRecords?${refundId ? 'refundId=' + refundId : ''}`
	);
};
export const postFlowEarnestRefundApplyGetTransferEarnestRefundToPage = <
	RNU extends (keyof AT_TransferEarnestRefundPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferEarnestRefundQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TransferEarnestRefundQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferEarnestRefundPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/EarnestRefundApply/GetTransferEarnestRefundToPage`,
		data
	);
};
export const postFlowEarnestRefundApplyGetTransferMarketEarnestRefundToPage = <
	RNU extends (keyof AT_TransferEarnestRefundPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferEarnestRefundQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TransferEarnestRefundQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferEarnestRefundPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/EarnestRefundApply/GetTransferMarketEarnestRefundToPage`,
		data
	);
};
export const getFlowEarnestRefundApplyGetTransferEarnestRefundApplyByTransferId = <RNU extends (keyof AT_EarnestRefundApplyViewModel)[] = []>(
	transferId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_EarnestRefundApplyViewModel, RNU>>>(
		`/flow/EarnestRefundApply/GetTransferEarnestRefundApplyByTransferId?${transferId ? 'transferId=' + transferId : ''}`
	);
};
export const getFlowEarnestRefundApplyGetSaleEarnestRefundPrintInfo = <RNU extends (keyof AT_SaleEarnestRefundPrintModel)[] = []>(refundId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleEarnestRefundPrintModel, RNU>>>(
		`/flow/EarnestRefundApply/GetSaleEarnestRefundPrintInfo?${refundId ? 'refundId=' + refundId : ''}`
	);
};
export const getFlowEarnestRefundApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/EarnestRefundApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowEarnestRefundApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/EarnestRefundApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowFinancePayGetFinancePayToPage = <
	RNU extends (keyof AT_FinancePayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FinancePayQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FinancePayQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FinancePayPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/FinancePay/GetFinancePayToPage`, data);
};
export const getFlowFinancePayGetFinancePayByFlowId = <RNU extends (keyof AT_FlowModelFinancePayViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelFinancePayViewModelTuple, RNU>>>(
		`/flow/FinancePay/GetFinancePayByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowFinancePayDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/DynamicSubmitAudit`, data);
};
export const postFlowFinancePayPendingAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/PendingAudit`, data);
};
export const postFlowFinancePayRejectAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/RejectAudit`, data);
};
export const postFlowFinancePayDynamicRejectAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/DynamicRejectAudit`, data);
};
export const postFlowFinancePayResetAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/ResetAudit`, data);
};
export const postFlowFinancePaySaveDraft = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/SaveDraft`, data);
};
export const postFlowFinancePaySubmitAudit = <NUDATA extends (keyof AT_FlowFinancePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowFinancePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FinancePay/SubmitAudit`, data);
};
export const getFlowFinancePayGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/FinancePay/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowFinancePayGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/FinancePay/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFirstCampGetFirstCampToPage = <
	RNU extends (keyof AT_FirstCampPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FirstCampQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FirstCampQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FirstCampPageModelIEnumerableInt32Tuple, RNU>>>(`/FirstCamp/GetFirstCampToPage`, data);
};
export const postFirstCampExportFirstCampList = <NUDATA extends (keyof AT_FirstCampQueryModel)[] = []>(
	data: U_I_NoNull<AT_FirstCampQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FirstCamp/ExportFirstCampList`, data);
};
export const getFirstCampGetFirstCampById = <RNU extends (keyof AT_FirstCampViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FirstCampViewModel, RNU>>>(`/FirstCamp/GetFirstCampById?${id ? 'id=' + id : ''}`);
};
export const postFirstCampSendFirstCamps = <NUDATA extends (keyof AT_FirstCampSendModel)[] = []>(data: U_I_NoNull<AT_FirstCampSendModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/FirstCamp/SendFirstCamps`, data);
};
export const getFirstCampSearchApplicationStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/FirstCamp/SearchApplicationStatus`);
};
export const postFirstCampSaveFirstCamps = <NUDATA extends (keyof AT_FirstCampRequestModel)[] = []>(
	data: U_I_NoNull<AT_FirstCampRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FirstCamp/SaveFirstCamps`, data);
};
export const getFlowFlowBaseApiGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/FlowBaseApi/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowFlowBaseApiGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/FlowBaseApi/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowListGetFlowListToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowListQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowListQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(`/FlowList/GetFlowListToPage`, data);
};
export const postFlowListGetFlowAuditingToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowAuditingQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowAuditingQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(`/FlowList/GetFlowAuditingToPage`, data);
};
export const postFlowListGetProxyFlowAuditingToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowAuditingQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowAuditingQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(`/FlowList/GetProxyFlowAuditingToPage`, data);
};
export const postFlowManagerMergeFlowType = <NUDATA extends (keyof AT_FlowTypeModel)[] = []>(data: U_I_NoNull<AT_FlowTypeModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/FlowManager/MergeFlowType`, data);
};
export const postFlowManagerRemoveFlowType = (id: any) => {
	return axios.post<ResponseData<any>>(`/FlowManager/RemoveFlowType?${id ? 'id=' + id : ''}`);
};
export const postFlowManagerGetFlowTypeToPage = <
	RNU extends (keyof AT_FlowTypeViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowTypeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowTypeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowTypeViewModelIEnumerableInt32Tuple, RNU>>>(`/FlowManager/GetFlowTypeToPage`, data);
};
export const getFlowManagerGetFlowTypeInfo = <RNU extends (keyof AT_FlowTypeInfoModel)[] = []>(flowTypeId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowTypeInfoModel, RNU>>>(
		`/FlowManager/GetFlowTypeInfo?${flowTypeId ? 'flowTypeId=' + flowTypeId : ''}`
	);
};
export const getFlowManagerGetFlowAuditObj = <RNU extends (keyof AT_KeyValueIntModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntModel, RNU>[]>>(`/FlowManager/GetFlowAuditObj`);
};
export const getFlowManagerGetAllFlowAuditObj = <RNU extends (keyof AT_FlowAuditObjModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowAuditObjModel, RNU>[]>>(`/FlowManager/GetAllFlowAuditObj`);
};
export const postFlowtoPurchaseBatchDelete = (data: any) => {
	return axios.post<ResponseData<any>>(`/FlowtoPurchase/BatchDelete`, data);
};
export const postFlowtoPurchaseImportFlowtoPurchase = (data: any) => {
	return axios.post<ResponseData<any>>(`/FlowtoPurchase/ImportFlowtoPurchase`, data);
};
export const postFlowtoPurchaseGetFlowtoPurchaseToPage = <
	RNU extends (keyof AT_FlowtoPurchasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowtoPurchaseQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowtoPurchaseQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoPurchasePageModelIEnumerableInt32Tuple, RNU>>>(`/FlowtoPurchase/GetFlowtoPurchaseToPage`, data);
};
export const postFlowtoSaleLBatchDelete = (data: any) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleL/BatchDelete`, data);
};
export const postFlowtoSaleLImportFlowtoSale = (data: any) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleL/ImportFlowtoSale`, data);
};
export const postFlowtoSaleLSyncClientCode = () => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleL/SyncClientCode`);
};
export const postFlowtoSaleLGetFlowtoSaleToPage = <
	RNU extends (keyof AT_FlowtoSalePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowtoSaleQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowtoSaleQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoSalePageModelIEnumerableInt32Tuple, RNU>>>(`/FlowtoSaleL/GetFlowtoSaleToPage`, data);
};
export const postFlowtoSaleLExportGetFlowtoSale = <NUDATA extends (keyof AT_FlowtoSaleQueryModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoSaleQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleL/ExportGetFlowtoSale`, data);
};
export const postFlowFlowtoSaleSettleGetFlowtoSaleSettleToPage = <
	RNU extends (keyof AT_FlowtoSaleSettlePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowtoSaleSettleQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowtoSaleSettleQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoSaleSettlePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/FlowtoSaleSettle/GetFlowtoSaleSettleToPage`,
		data
	);
};
export const postFlowFlowtoSaleSettleSaveDraft = <NUDATA extends (keyof AT_FlowFlowtoSaleSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowFlowtoSaleSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FlowtoSaleSettle/SaveDraft`, data);
};
export const postFlowFlowtoSaleSettleSubmitAudit = <NUDATA extends (keyof AT_FlowFlowtoSaleSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowFlowtoSaleSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/FlowtoSaleSettle/SubmitAudit`, data);
};
export const getFlowFlowtoSaleSettleGetFlowtoSaleSettleInfoList = <RNU extends (keyof AT_FlowtoSaleSettleInfoViewModel)[] = []>(
	flowtoSaleValidId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowtoSaleSettleInfoViewModel, RNU>[]>>(
		`/flow/FlowtoSaleSettle/GetFlowtoSaleSettleInfoList?${flowtoSaleValidId ? 'flowtoSaleValidId=' + flowtoSaleValidId : ''}`
	);
};
export const getFlowFlowtoSaleSettleGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/FlowtoSaleSettle/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowFlowtoSaleSettleGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/FlowtoSaleSettle/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowtoSaleValidBatchBusinessConfirm = (data: any) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/BatchBusinessConfirm`, data);
};
export const postFlowtoSaleValidAddSummary = <NUDATA extends (keyof AT_FlowtoSaleSummaryModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoSaleSummaryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/AddSummary`, data);
};
export const getFlowtoSaleValidGetFlowtoSaleSummaryByValidId = <RNU extends (keyof AT_FlowtoSaleSummaryViewModel)[] = []>(flowtoSaleValidId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowtoSaleSummaryViewModel, RNU>[]>>(
		`/FlowtoSaleValid/GetFlowtoSaleSummaryByValidId?${flowtoSaleValidId ? 'flowtoSaleValidId=' + flowtoSaleValidId : ''}`
	);
};
export const postFlowtoSaleValidFlowtoMatchGoods = <NUDATA extends (keyof AT_FlowtoMatchGoodsModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoMatchGoodsModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/FlowtoMatchGoods`, data);
};
export const postFlowtoSaleValidFlowtoMatchTerminal = <NUDATA extends (keyof AT_FlowtoMatchTerminalModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoMatchTerminalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/FlowtoMatchTerminal`, data);
};
export const postFlowtoSaleValidFlowtoSaleConfirm = <NUDATA extends (keyof AT_FlowtoSaleConfirmModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoSaleConfirmModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/FlowtoSaleConfirm`, data);
};
export const postFlowtoSaleValidGetCommissionsByQuery = <
	RNU extends (keyof AT_FlowtoSaleConfirmCommissionModel)[] = [],
	NUDATA extends (keyof AT_ConfirmCommissionQueryModel)[] = [],
>(
	isUp: any,
	data: U_I_NoNull<AT_ConfirmCommissionQueryModel, NUDATA>[]
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoSaleConfirmCommissionModel, RNU>[]>>(
		`/FlowtoSaleValid/GetCommissionsByQuery?${isUp ? 'isUp=' + isUp : ''}`,
		data
	);
};
export const postFlowtoSaleValidGetFlowtoSaleValidToPage = <
	RNU extends (keyof AT_FlowtoSaleValidPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowtoSaleValidQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowtoSaleValidQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoSaleValidPageModelIEnumerableInt32Tuple, RNU>>>(
		`/FlowtoSaleValid/GetFlowtoSaleValidToPage`,
		data
	);
};
export const postFlowtoSaleValidExportFlowtoSaleValid = <NUDATA extends (keyof AT_FlowtoSaleValidQueryModel)[] = []>(
	data: U_I_NoNull<AT_FlowtoSaleValidQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/FlowtoSaleValid/ExportFlowtoSaleValid`, data);
};
export const postFlowtoStockGetFlowtoStockToPage = <
	RNU extends (keyof AT_FlowtoStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowtoStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowtoStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowtoStockPageModelIEnumerableInt32Tuple, RNU>>>(`/FlowtoStock/GetFlowtoStockToPage`, data);
};
export const postGoodsAddGoods = <NUDATA extends (keyof AT_GoodsEditModel)[] = []>(data: U_I_NoNull<AT_GoodsEditModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/AddGoods`, data);
};
export const postGoodsComputingCommissionPrice = <NUDATA extends (keyof AT_GoodsPolicyBringCommissionPriceModel)[] = []>(
	data: U_I_NoNull<AT_GoodsPolicyBringCommissionPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/ComputingCommissionPrice`, data);
};
export const postGoodsUpdateGoods = <NUDATA extends (keyof AT_GoodsEditModel)[] = []>(goodsId: any, data: U_I_NoNull<AT_GoodsEditModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoods?${goodsId ? 'goodsId=' + goodsId : ''}`, data);
};
export const getGoodsDeleteGoods = (goodsId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoods?${goodsId ? 'goodsId=' + goodsId : ''}`);
};
export const postGoodsUpdateGoodsNet = <NUDATA extends (keyof AT_GoodsNetModel)[] = []>(data: U_I_NoNull<AT_GoodsNetModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsNet`, data);
};
export const postGoodsBatchAddGoodsNet = <
	RNU extends (keyof AT_GoodsNetReturnViewModel)[] = [],
	NUDATA extends (keyof AT_BatchAddGoodsNetModel)[] = [],
>(
	data: U_I_NoNull<AT_BatchAddGoodsNetModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsNetReturnViewModel, RNU>[]>>(`/Goods/BatchAddGoodsNet`, data);
};
export const postGoodsAddGoodsAttachment = <NUDATA extends (keyof AT_GoodsAttachmentModel)[] = []>(
	data: U_I_NoNull<AT_GoodsAttachmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/AddGoodsAttachment`, data);
};
export const getGoodsDeleteGoodsAttachment = (attachmentId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsAttachment?${attachmentId ? 'attachmentId=' + attachmentId : ''}`);
};
export const postGoodsUpdateGoodsDeliveryUnit = <NUDATA extends (keyof AT_GoodsDeliveryUnitModel)[] = []>(
	data: U_I_NoNull<AT_GoodsDeliveryUnitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsDeliveryUnit`, data);
};
export const postGoodsUpdateGoodsPolicy = <NUDATA extends (keyof AT_GoodsPolicyModel)[] = []>(data: U_I_NoNull<AT_GoodsPolicyModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsPolicy`, data);
};
export const postGoodsUpdateGoodsSupplier = <NUDATA extends (keyof AT_GoodsSupplierModel)[] = []>(
	data: U_I_NoNull<AT_GoodsSupplierModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsSupplier`, data);
};
export const postGoodsUpdatePolicyPublic = <NUDATA extends (keyof AT_GoodsPolicyPublicModel)[] = []>(
	data: U_I_NoNull<AT_GoodsPolicyPublicModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdatePolicyPublic`, data);
};
export const postGoodsGetGoodsNetByDate = <RNU extends (keyof AT_GoodsNetModel)[] = [], NUDATA extends (keyof AT_SearchNetByPolicyBringModel)[] = []>(
	data: U_I_NoNull<AT_SearchNetByPolicyBringModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>>>(`/Goods/GetGoodsNetByDate`, data);
};
export const postGoodsAddGoodsPolicyBring = <RNU extends (keyof AT_PolicyBringDetail)[] = [], NUDATA extends (keyof AT_GoodsPolicyBringModel)[] = []>(
	data: U_I_NoNull<AT_GoodsPolicyBringModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PolicyBringDetail, RNU>[]>>(`/Goods/AddGoodsPolicyBring`, data);
};
export const postGoodsUpdateGoodsPolicyBring = <
	RNU extends (keyof AT_PolicyBringDetail)[] = [],
	NUDATA extends (keyof AT_GoodsPolicyBringModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPolicyBringModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PolicyBringDetail, RNU>[]>>(`/Goods/UpdateGoodsPolicyBring`, data);
};
export const postGoodsUpdateGoodsPolicyDifference = <NUDATA extends (keyof AT_GoodsPolicyDifferenceModel)[] = []>(
	data: U_I_NoNull<AT_GoodsPolicyDifferenceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsPolicyDifference`, data);
};
export const postGoodsGetGoodsToPage = <
	RNU extends (keyof AT_GoodsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsPageModelIEnumerableInt32Tuple, RNU>>>(`/Goods/GetGoodsToPage`, data);
};
export const postGoodsExportGoods = <NUDATA extends (keyof AT_GoodsQueryModel)[] = []>(data: U_I_NoNull<AT_GoodsQueryModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/ExportGoods`, data);
};
export const postGoodsAddGoodsApproval = <NUDATA extends (keyof AT_GoodsApprovalModel)[] = []>(data: U_I_NoNull<AT_GoodsApprovalModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/AddGoodsApproval`, data);
};
export const postGoodsUpdateGoodsApproval = <NUDATA extends (keyof AT_GoodsApprovalModel)[] = []>(
	goodsApprovalId: any,
	data: U_I_NoNull<AT_GoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateGoodsApproval?${goodsApprovalId ? 'goodsApprovalId=' + goodsApprovalId : ''}`, data);
};
export const postGoodsGetGoodsApprovalToPage = <
	RNU extends (keyof AT_GoodsApprovalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsApprovalQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsApprovalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsApprovalPageModelIEnumerableInt32Tuple, RNU>>>(`/Goods/GetGoodsApprovalToPage`, data);
};
export const getGoodsGetGoodsById = <RNU extends (keyof AT_GoodsViewModel)[] = []>(goodsId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsViewModel, RNU>>>(`/Goods/GetGoodsById?${goodsId ? 'goodsId=' + goodsId : ''}`);
};
export const getGoodsGetGoodsByProductCode = <RNU extends (keyof AT_GoodsViewModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsViewModel, RNU>>>(
		`/Goods/GetGoodsByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getGoodsGetGoodsPolicyPublicByProductCodeAndNow = <RNU extends (keyof AT_GoodsPolicyPublicViewModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsPolicyPublicViewModel, RNU>[]>>(
		`/Goods/GetGoodsPolicyPublicByProductCodeAndNow?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getGoodsGetGoodsPolicyDifferenceByProductCodeAndNow = <RNU extends (keyof AT_GoodsPolicyDifferenceViewModel)[] = []>(
	productCode: any,
	provinceId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsPolicyDifferenceViewModel, RNU>[]>>(
		`/Goods/GetGoodsPolicyDifferenceByProductCodeAndNow?${productCode ? 'productCode=' + productCode : ''}&${
			provinceId ? 'provinceId=' + provinceId : ''
		}`
	);
};
export const getGoodsGetGoodsPolicyBringByProductCodeAndNow = <RNU extends (keyof AT_GoodsPolicyBringViewModel)[] = []>(
	productCode: any,
	provinceId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsPolicyBringViewModel, RNU>[]>>(
		`/Goods/GetGoodsPolicyBringByProductCodeAndNow?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getGoodsGetGoodsNetByCodeAndProvinceId = <RNU extends (keyof AT_GoodsNetModel)[] = []>(productCode: any, provinceId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>>>(
		`/Goods/GetGoodsNetByCodeAndProvinceId?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getGoodsGetNowGoodsNetByCodeAndProvinceId = <RNU extends (keyof AT_GoodsNetModel)[] = []>(productCode: any, provinceId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>>>(
		`/Goods/GetNowGoodsNetByCodeAndProvinceId?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getGoodsGetGoodsNetsByCodeAndProvinceId = <RNU extends (keyof AT_GoodsNetModel)[] = []>(productCode: any, provinceId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>[]>>(
		`/Goods/GetGoodsNetsByCodeAndProvinceId?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getGoodsGetPastGoodsNetsByCodeAndProvinceId = <RNU extends (keyof AT_GoodsNetViewModel)[] = []>(productCode: any, provinceId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetViewModel, RNU>[]>>(
		`/Goods/GetPastGoodsNetsByCodeAndProvinceId?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}`
	);
};
export const getGoodsGetAllGoodsNetsByCode = <RNU extends (keyof AT_GoodsNetModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>[]>>(
		`/Goods/GetAllGoodsNetsByCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getGoodsGetAllHasNetGoodsNetsByCode = <RNU extends (keyof AT_GoodsNetModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetModel, RNU>[]>>(
		`/Goods/GetAllHasNetGoodsNetsByCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getGoodsSearchGoodsApprovalBySerial = <RNU extends (keyof AT_GoodsApprovalViewModel)[] = []>(serial: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsApprovalViewModel, RNU>[]>>(
		`/Goods/SearchGoodsApprovalBySerial?${serial ? 'serial=' + serial : ''}`
	);
};
export const getGoodsSearchGoodsAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/Goods/SearchGoodsAttachmentType`);
};
export const postGoodsGetGoodsNetByProductCodeAndProvinceName = <
	RNU extends (keyof AT_GoodsNetViewModel)[] = [],
	NUDATA extends (keyof AT_GoodsNetFastQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsNetFastQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsNetViewModel, RNU>[]>>(`/Goods/GetGoodsNetByProductCodeAndProvinceName`, data);
};
export const postGoodsGetGoodsNetByProductCode = <
	RNU extends (keyof AT_GoodsNetViewModel)[] = [],
	NUDATA extends (keyof AT_GoodsNetFastQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsNetFastQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsNetViewModel, RNU>[]>>(`/Goods/GetGoodsNetByProductCode`, data);
};
export const getGoodsDeleteGoodsNet = (goodsNetId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsNet?${goodsNetId ? 'goodsNetId=' + goodsNetId : ''}`);
};
export const getGoodsDeleteGoodsPolicy = (goodsPolicyId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsPolicy?${goodsPolicyId ? 'goodsPolicyId=' + goodsPolicyId : ''}`);
};
export const getGoodsDeleteGoodsDeliveryUnit = (goodsDeliveryUnitId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsDeliveryUnit?${goodsDeliveryUnitId ? 'goodsDeliveryUnitId=' + goodsDeliveryUnitId : ''}`);
};
export const getGoodsDeleteGoodsSupplier = (goodsSupplierId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsSupplier?${goodsSupplierId ? 'goodsSupplierId=' + goodsSupplierId : ''}`);
};
export const getGoodsDeleteGoodsPolicyPublic = (goodsPolicyPublicId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsPolicyPublic?${goodsPolicyPublicId ? 'goodsPolicyPublicId=' + goodsPolicyPublicId : ''}`);
};
export const getGoodsDeleteGoodsPolicyBring = (productCode: any, provinceId: any, startDate: any) => {
	return axios.get<ResponseData<any>>(
		`/Goods/DeleteGoodsPolicyBring?${productCode ? 'productCode=' + productCode : ''}&${provinceId ? 'provinceId=' + provinceId : ''}&${
			startDate ? 'startDate=' + startDate : ''
		}`
	);
};
export const getGoodsDeleteGoodsPolicyDifference = (goodsPolicyDifferenceId: any) => {
	return axios.get<ResponseData<any>>(
		`/Goods/DeleteGoodsPolicyDifference?${goodsPolicyDifferenceId ? 'goodsPolicyDifferenceId=' + goodsPolicyDifferenceId : ''}`
	);
};
export const getGoodsTurnPurchase = (goodsId: any) => {
	return axios.get<ResponseData<any>>(`/Goods/TurnPurchase?${goodsId ? 'goodsId=' + goodsId : ''}`);
};
export const postGoodsAddApisGoods = <NUDATA extends (keyof AT_GoodsEditModel)[] = []>(data: U_I_NoNull<AT_GoodsEditModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Goods/AddApisGoods`, data);
};
export const postGoodsUpdateApisGoods = <NUDATA extends (keyof AT_GoodsEditModel)[] = []>(
	goodsId: any,
	data: U_I_NoNull<AT_GoodsEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Goods/UpdateApisGoods?${goodsId ? 'goodsId=' + goodsId : ''}`, data);
};
export const postGoodsGetApisGoodsToPage = <
	RNU extends (keyof AT_ApisGoodsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ApisGoodsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ApisGoodsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ApisGoodsPageModelIEnumerableInt32Tuple, RNU>>>(`/Goods/GetApisGoodsToPage`, data);
};
export const postGoodsGetGoodsCostPrice = (productCode: any) => {
	return axios.post<ResponseData<any>>(`/Goods/GetGoodsCostPrice?${productCode ? 'productCode=' + productCode : ''}`);
};
export const postGoodsGetGoodsNetToPage = <
	RNU extends (keyof AT_GoodsNetPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsNetQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsNetQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsNetPageModelIEnumerableInt32Tuple, RNU>>>(`/Goods/GetGoodsNetToPage`, data);
};
export const getGoodsGetProductGoodsNetByProductCode = <RNU extends (keyof AT_ProductGoodsNetModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProductGoodsNetModel, RNU>>>(
		`/Goods/GetProductGoodsNetByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getGoodsGetGoodsNetById = <RNU extends (keyof AT_GoodsNetViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsNetViewModel, RNU>>>(`/Goods/GetGoodsNetById?${id ? 'id=' + id : ''}`);
};
export const getGoodsDeleteGoodsNetById = (id: any) => {
	return axios.get<ResponseData<any>>(`/Goods/DeleteGoodsNetById?${id ? 'id=' + id : ''}`);
};
export const postGoodsGetGoodsPolicyToPage = <
	RNU extends (keyof AT_GoodsPolicyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsPolicyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPolicyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsPolicyPageModelIEnumerableInt32Tuple, RNU>>>(`/Goods/GetGoodsPolicyToPage`, data);
};
export const getGoodsGetProductPolicyByProductCode = <RNU extends (keyof AT_ProductPolicyViewModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProductPolicyViewModel, RNU>>>(
		`/Goods/GetProductPolicyByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postGoodsComputingCommissionPrices = <
	RNU extends (keyof AT_Int32DecimalTuple)[] = [],
	NUDATA extends (keyof AT_GoodsPolicyBringCommissionPriceModels)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPolicyBringCommissionPriceModels, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_Int32DecimalTuple, RNU>[]>>(`/Goods/ComputingCommissionPrices`, data);
};
export const postGoodsComputingSettlePrices = <
	RNU extends (keyof AT_Int32DecimalTuple)[] = [],
	NUDATA extends (keyof AT_GoodsPolicyBringSettlePriceModels)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPolicyBringSettlePriceModels, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_Int32DecimalTuple, RNU>[]>>(`/Goods/ComputingSettlePrices`, data);
};
export const getGoodsTurnInvestment = (id: any) => {
	return axios.get<ResponseData<any>>(`/Goods/TurnInvestment?${id ? 'id=' + id : ''}`);
};
export const getFlowGoodsApprovalGetGoodsApprovalByFlowId = <RNU extends (keyof AT_FlowModelGoodsApprovalViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsApprovalViewModelTuple, RNU>>>(
		`/flow/GoodsApproval/GetGoodsApprovalByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsApprovalGetGoodsApprovalById = <RNU extends (keyof AT_FlowModelGoodsApprovalViewModelTuple)[] = []>(
	goodsApprovalId: any,
	popupKey: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsApprovalViewModelTuple, RNU>>>(
		`/flow/GoodsApproval/GetGoodsApprovalById?${goodsApprovalId ? 'goodsApprovalId=' + goodsApprovalId : ''}&${
			popupKey ? 'popupKey=' + popupKey : ''
		}`
	);
};
export const postFlowGoodsApprovalDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/DynamicSubmitAudit`, data);
};
export const postFlowGoodsApprovalPendingAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/PendingAudit`, data);
};
export const postFlowGoodsApprovalRejectAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/RejectAudit`, data);
};
export const postFlowGoodsApprovalDynamicRejectAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/DynamicRejectAudit`, data);
};
export const postFlowGoodsApprovalResetAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/ResetAudit?${id ? 'id=' + id : ''}`, data);
};
export const postFlowGoodsApprovalSaveDraft = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/SaveDraft`, data);
};
export const postFlowGoodsApprovalSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsApproval/SubmitAudit`, data);
};
export const postFlowGoodsApprovalGetGoodsApprovalToPage = <
	RNU extends (keyof AT_GoodsApprovalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsApprovalQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsApprovalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsApprovalPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/GoodsApproval/GetGoodsApprovalToPage`,
		data
	);
};
export const getFlowGoodsApprovalGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/GoodsApproval/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsApprovalGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/GoodsApproval/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsFlowGetGoodsByFlowId = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/GoodsFlow/GetGoodsByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsFlowGetGoodsById = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(goodsId: any, popupKey: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/GoodsFlow/GetGoodsById?${goodsId ? 'goodsId=' + goodsId : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowGoodsFlowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/DynamicSubmitAudit`, data);
};
export const postFlowGoodsFlowPendingAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/PendingAudit`, data);
};
export const postFlowGoodsFlowRejectAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/RejectAudit`, data);
};
export const postFlowGoodsFlowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/DynamicRejectAudit`, data);
};
export const postFlowGoodsFlowResetAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/ResetAudit?${id ? 'id=' + id : ''}`, data);
};
export const postFlowGoodsFlowSaveDraft = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/SaveDraft`, data);
};
export const postFlowGoodsFlowSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsModel)[] = []>(data: U_I_NoNull<AT_FlowGoodsModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsFlow/SubmitAudit`, data);
};
export const getFlowGoodsFlowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/GoodsFlow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsFlowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/GoodsFlow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postGoodsProvinceDivideGetGoodsProvinceDivideToPage = <
	RNU extends (keyof AT_GoodsProvinceDividePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsProvinceDivideQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsProvinceDivideQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsProvinceDividePageModelIEnumerableInt32Tuple, RNU>>>(
		`/GoodsProvinceDivide/GetGoodsProvinceDivideToPage`,
		data
	);
};
export const getGoodsProvinceDivideGetGoodsProvinceDivideById = <RNU extends (keyof AT_GoodsProvinceDivideModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsProvinceDivideModel, RNU>>>(
		`/GoodsProvinceDivide/GetGoodsProvinceDivideById?${id ? 'id=' + id : ''}`
	);
};
export const postGoodsProvinceDivideAddGoodsProvinceDivide = <NUDATA extends (keyof AT_GoodsProvinceDivideModel)[] = []>(
	data: U_I_NoNull<AT_GoodsProvinceDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/GoodsProvinceDivide/AddGoodsProvinceDivide`, data);
};
export const postGoodsProvinceDivideSaveGoodsProvinceDivide = <NUDATA extends (keyof AT_GoodsProvinceDivideModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_GoodsProvinceDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/GoodsProvinceDivide/SaveGoodsProvinceDivide?${id ? 'id=' + id : ''}`, data);
};
export const postFlowGoodsSafeStockGetGoodsSafeStockToPage = <
	RNU extends (keyof AT_GoodsSafeStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsSafeStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsSafeStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsSafeStockPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/GoodsSafeStock/GetGoodsSafeStockToPage`,
		data
	);
};
export const getFlowGoodsSafeStockGetGoodsSafeStockByFlowId = <RNU extends (keyof AT_FlowModelGoodsSafeStockViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsSafeStockViewModelTuple, RNU>>>(
		`/flow/GoodsSafeStock/GetGoodsSafeStockByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowGoodsSafeStockDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/DynamicSubmitAudit`, data);
};
export const postFlowGoodsSafeStockPendingAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/PendingAudit`, data);
};
export const postFlowGoodsSafeStockRejectAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/RejectAudit`, data);
};
export const postFlowGoodsSafeStockDynamicRejectAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/DynamicRejectAudit`, data);
};
export const postFlowGoodsSafeStockResetAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/ResetAudit`, data);
};
export const postFlowGoodsSafeStockSaveDraft = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/SaveDraft`, data);
};
export const postFlowGoodsSafeStockSubmitAudit = <NUDATA extends (keyof AT_FlowGoodsSafeStockModel)[] = []>(
	data: U_I_NoNull<AT_FlowGoodsSafeStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/GoodsSafeStock/SubmitAudit`, data);
};
export const getFlowGoodsSafeStockGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/GoodsSafeStock/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowGoodsSafeStockGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/GoodsSafeStock/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getHaiDianPairCodeGetHaiDianGoods = <RNU extends (keyof AT_HaiDianGoods)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_HaiDianGoods, RNU>[]>>(`/HaiDianPairCode/GetHaiDianGoods`);
};
export const getHaiDianPairCodeGetHaiDianVencus = <RNU extends (keyof AT_HaiDianCompany)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_HaiDianCompany, RNU>[]>>(`/HaiDianPairCode/GetHaiDianVencus`);
};
export const postHaiDianPairCodeGetGoodsPairCodeToPage = <
	RNU extends (keyof AT_GoodsPairCodePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsPairCodeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPairCodeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsPairCodePageModelIEnumerableInt32Tuple, RNU>>>(`/HaiDianPairCode/GetGoodsPairCodeToPage`, data);
};
export const getHaiDianPairCodeGetGoodsPairCodeByProductCode = <RNU extends (keyof AT_GoodsPairCodeModel)[] = []>(productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_GoodsPairCodeModel, RNU>>>(
		`/HaiDianPairCode/GetGoodsPairCodeByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postHaiDianPairCodeGoodsPairCode = <NUDATA extends (keyof AT_GoodsPairCodeModel)[] = []>(
	data: U_I_NoNull<AT_GoodsPairCodeModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/HaiDianPairCode/GoodsPairCode`, data);
};
export const postHaiDianPairCodeGoodsDecode = (data: any) => {
	return axios.post<ResponseData<any>>(`/HaiDianPairCode/GoodsDecode`, data);
};
export const postHaiDianPairCodeGetApisGoodsPairCodeToPage = <
	RNU extends (keyof AT_GoodsPairCodePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_GoodsPairCodeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_GoodsPairCodeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_GoodsPairCodePageModelIEnumerableInt32Tuple, RNU>>>(
		`/HaiDianPairCode/GetApisGoodsPairCodeToPage`,
		data
	);
};
export const postHaiDianPairCodeGetCompanyPairCodeToPage = <
	RNU extends (keyof AT_CompanyPairCodePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CompanyPairCodeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CompanyPairCodeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CompanyPairCodePageModelIEnumerableInt32Tuple, RNU>>>(
		`/HaiDianPairCode/GetCompanyPairCodeToPage`,
		data
	);
};
export const getHaiDianPairCodeGetCompanyPairCodeByCompanyCode = <RNU extends (keyof AT_CompanyPairCodeModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_CompanyPairCodeModel, RNU>>>(
		`/HaiDianPairCode/GetCompanyPairCodeByCompanyCode?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const postHaiDianPairCodeCompanyPairCode = <NUDATA extends (keyof AT_CompanyPairCodeModel)[] = []>(
	data: U_I_NoNull<AT_CompanyPairCodeModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/HaiDianPairCode/CompanyPairCode`, data);
};
export const postHaiDianPairCodeCompanyDecode = (data: any) => {
	return axios.post<ResponseData<any>>(`/HaiDianPairCode/CompanyDecode`, data);
};
export const postFlowInternalTransferGetInternalTransferToPage = <
	RNU extends (keyof AT_InternalTransferPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InternalTransferQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InternalTransferQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InternalTransferPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/InternalTransfer/GetInternalTransferToPage`,
		data
	);
};
export const getFlowInternalTransferGetInternalTransferByFlowId = <RNU extends (keyof AT_FlowModelInternalTransferViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelInternalTransferViewModelTuple, RNU>>>(
		`/flow/InternalTransfer/GetInternalTransferByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowInternalTransferDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/DynamicSubmitAudit`, data);
};
export const postFlowInternalTransferPendingAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/PendingAudit`, data);
};
export const postFlowInternalTransferRejectAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/RejectAudit`, data);
};
export const postFlowInternalTransferDynamicRejectAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/DynamicRejectAudit`, data);
};
export const postFlowInternalTransferResetAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/ResetAudit`, data);
};
export const postFlowInternalTransferSaveDraft = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/SaveDraft`, data);
};
export const postFlowInternalTransferSubmitAudit = <NUDATA extends (keyof AT_FlowInternalTransferModel)[] = []>(
	data: U_I_NoNull<AT_FlowInternalTransferModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InternalTransfer/SubmitAudit`, data);
};
export const getFlowInternalTransferGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/InternalTransfer/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowInternalTransferGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/InternalTransfer/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postInvestmentGetInvestmentToPage = <
	RNU extends (keyof AT_InvestmentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InvestmentQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InvestmentQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InvestmentPageModelIEnumerableInt32Tuple, RNU>>>(`/Investment/GetInvestmentToPage`, data);
};
export const getFlowInvestmentFlowGetInvestmentByFlowId = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/InvestmentFlow/GetInvestmentByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowInvestmentFlowGetDevelopById = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(id: any, popupKey: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/InvestmentFlow/GetDevelopById?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowInvestmentFlowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/DynamicSubmitAudit`, data);
};
export const postFlowInvestmentFlowPendingAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/PendingAudit`, data);
};
export const postFlowInvestmentFlowRejectAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/RejectAudit`, data);
};
export const postFlowInvestmentFlowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/DynamicRejectAudit`, data);
};
export const postFlowInvestmentFlowResetAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/ResetAudit?${id ? 'id=' + id : ''}`, data);
};
export const postFlowInvestmentFlowSaveDraft = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/SaveDraft`, data);
};
export const postFlowInvestmentFlowSubmitAudit = <NUDATA extends (keyof AT_FlowInvestmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestmentFlow/SubmitAudit`, data);
};
export const postFlowInvestmentFlowGetInvestmentToPage = <
	RNU extends (keyof AT_InvestmentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InvestmentQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InvestmentQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InvestmentPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/InvestmentFlow/GetInvestmentToPage`, data);
};
export const getFlowInvestmentFlowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/InvestmentFlow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowInvestmentFlowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/InvestmentFlow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowInvestPaymentGetInvestPaymentToPage = <
	RNU extends (keyof AT_InvestPaymentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InvestPaymentQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InvestPaymentQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InvestPaymentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/InvestPayment/GetInvestPaymentToPage`,
		data
	);
};
export const getFlowInvestPaymentGetInvestPaymentByFlowId = <RNU extends (keyof AT_FlowModelInvestPaymentViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelInvestPaymentViewModelTuple, RNU>>>(
		`/flow/InvestPayment/GetInvestPaymentByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowInvestPaymentDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/DynamicSubmitAudit`, data);
};
export const postFlowInvestPaymentPendingAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/PendingAudit`, data);
};
export const postFlowInvestPaymentRejectAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/RejectAudit`, data);
};
export const postFlowInvestPaymentDynamicRejectAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/DynamicRejectAudit`, data);
};
export const postFlowInvestPaymentResetAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/ResetAudit`, data);
};
export const postFlowInvestPaymentSaveDraft = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/SaveDraft`, data);
};
export const postFlowInvestPaymentSubmitAudit = <NUDATA extends (keyof AT_FlowInvestPaymentModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestPaymentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestPayment/SubmitAudit`, data);
};
export const getFlowInvestPaymentGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/InvestPayment/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowInvestPaymentGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/InvestPayment/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowInvestRecoverGetInvestRecoverToPage = <
	RNU extends (keyof AT_InvestRecoverPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InvestRecoverQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InvestRecoverQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InvestRecoverPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/InvestRecover/GetInvestRecoverToPage`,
		data
	);
};
export const getFlowInvestRecoverGetInvestRecoverByFlowId = <RNU extends (keyof AT_FlowModelInvestRecoverViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelInvestRecoverViewModelTuple, RNU>>>(
		`/flow/InvestRecover/GetInvestRecoverByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowInvestRecoverDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/DynamicSubmitAudit`, data);
};
export const postFlowInvestRecoverPendingAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/PendingAudit`, data);
};
export const postFlowInvestRecoverRejectAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/RejectAudit`, data);
};
export const postFlowInvestRecoverDynamicRejectAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/DynamicRejectAudit`, data);
};
export const postFlowInvestRecoverResetAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/ResetAudit`, data);
};
export const postFlowInvestRecoverSaveDraft = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/SaveDraft`, data);
};
export const postFlowInvestRecoverSubmitAudit = <NUDATA extends (keyof AT_FlowInvestRecoverModel)[] = []>(
	data: U_I_NoNull<AT_FlowInvestRecoverModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/InvestRecover/SubmitAudit`, data);
};
export const getFlowInvestRecoverGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/InvestRecover/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowInvestRecoverGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/InvestRecover/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowLogisticGetLogisticByFlowId = <RNU extends (keyof AT_FlowModelLogisticViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLogisticViewModelTuple, RNU>>>(
		`/flow/Logistic/GetLogisticByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowLogisticRemoveLogisticById = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/RemoveLogisticById?${id ? 'id=' + id : ''}`);
};
export const postFlowLogisticDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/DynamicSubmitAudit`, data);
};
export const postFlowLogisticPendingAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/PendingAudit`, data);
};
export const postFlowLogisticRejectAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/RejectAudit`, data);
};
export const postFlowLogisticDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/DynamicRejectAudit`, data);
};
export const postFlowLogisticResetAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/ResetAudit`, data);
};
export const postFlowLogisticSaveDraft = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/SaveDraft`, data);
};
export const postFlowLogisticSubmitAudit = <NUDATA extends (keyof AT_FlowLogisticModel)[] = []>(data: U_I_NoNull<AT_FlowLogisticModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/Logistic/SubmitAudit`, data);
};
export const postFlowLogisticGetLogisticToPage = <
	RNU extends (keyof AT_LogisticPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LogisticQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_LogisticQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/Logistic/GetLogisticToPage`, data);
};
export const getFlowLogisticGetLogisticCooperations = <RNU extends (keyof AT_LogisticCooperationListModel)[] = []>(logisticId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_LogisticCooperationListModel, RNU>[]>>(
		`/flow/Logistic/GetLogisticCooperations?${logisticId ? 'logisticId=' + logisticId : ''}`
	);
};
export const getFlowLogisticGetAvailableLogistic = <RNU extends (keyof AT_AvailableLogisticModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_AvailableLogisticModel, RNU>[]>>(`/flow/Logistic/GetAvailableLogistic`);
};
export const getFlowLogisticGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/Logistic/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowLogisticGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/Logistic/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowLogisticCooperationGetLogisticCooperationByFlowId = <RNU extends (keyof AT_FlowModelLogisticCooperationViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLogisticCooperationViewModelTuple, RNU>>>(
		`/flow/LogisticCooperation/GetLogisticCooperationByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowLogisticCooperationRemoveLogisticCooperationById = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/RemoveLogisticCooperationById?${id ? 'id=' + id : ''}`);
};
export const postFlowLogisticCooperationDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/DynamicSubmitAudit`, data);
};
export const postFlowLogisticCooperationPendingAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/PendingAudit`, data);
};
export const postFlowLogisticCooperationRejectAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/RejectAudit`, data);
};
export const postFlowLogisticCooperationDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/DynamicRejectAudit`, data);
};
export const postFlowLogisticCooperationResetAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/ResetAudit`, data);
};
export const postFlowLogisticCooperationSaveDraft = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/SaveDraft`, data);
};
export const postFlowLogisticCooperationSubmitAudit = <NUDATA extends (keyof AT_FlowLogisticCooperationModel)[] = []>(
	data: U_I_NoNull<AT_FlowLogisticCooperationModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/LogisticCooperation/SubmitAudit`, data);
};
export const getFlowLogisticCooperationGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/LogisticCooperation/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowLogisticCooperationGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/LogisticCooperation/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postLogisticDetailsGetLogisticDetailsToPage = <
	RNU extends (keyof AT_LogisticDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LogisticDetailsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_LogisticDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticDetailsPageModelIEnumerableInt32Tuple, RNU>>>(
		`/LogisticDetails/GetLogisticDetailsToPage`,
		data
	);
};
export const postLogisticDetailsAddLogisticDetails = <NUDATA extends (keyof AT_LogisticDetailsEditModel)[] = []>(
	data: U_I_NoNull<AT_LogisticDetailsEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticDetails/AddLogisticDetails`, data);
};
export const getLogisticDetailsRemoveLogisticDetails = (id: any) => {
	return axios.get<ResponseData<any>>(`/LogisticDetails/RemoveLogisticDetails?${id ? 'id=' + id : ''}`);
};
export const getLogisticDetailsGetLogisticDetailById = <RNU extends (keyof AT_LogisticDetailsEditViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_LogisticDetailsEditViewModel, RNU>>>(`/LogisticDetails/GetLogisticDetailById?${id ? 'id=' + id : ''}`);
};
export const getLogisticDetailsGetLogisticDetailListById = <RNU extends (keyof AT_LogisticDetailsViewModel)[] = []>(logisticId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_LogisticDetailsViewModel, RNU>>>(
		`/LogisticDetails/GetLogisticDetailListById?${logisticId ? 'logisticId=' + logisticId : ''}`
	);
};
export const postLogisticDetailsEditLogisticDetail = <NUDATA extends (keyof AT_LogisticDetailsRequestModel)[] = []>(
	data: U_I_NoNull<AT_LogisticDetailsRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticDetails/EditLogisticDetail`, data);
};
export const postLogisticsTollGetLogisticsTollToPage = <
	RNU extends (keyof AT_LogisticsTollPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LogisticsTollQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_LogisticsTollQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticsTollPageModelIEnumerableInt32Tuple, RNU>>>(`/LogisticsToll/GetLogisticsTollToPage`, data);
};
export const getLogisticsTollGetDestCityIds = (logisticsId: any, destProvinceId: any) => {
	return axios.get<ResponseData<any>>(
		`/LogisticsToll/GetDestCityIds?${logisticsId ? 'logisticsId=' + logisticsId : ''}&${destProvinceId ? 'destProvinceId=' + destProvinceId : ''}`
	);
};
export const postLogisticsTollSaveLogisticsToll = <NUDATA extends (keyof AT_LogisticsTollRequestModel)[] = []>(
	data: U_I_NoNull<AT_LogisticsTollRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticsToll/SaveLogisticsToll`, data);
};
export const postLogisticsTollGetLogisticsTollById = <
	RNU extends (keyof AT_LogisticsTollViewModel)[] = [],
	NUDATA extends (keyof AT_LogisticsTollViewQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_LogisticsTollViewQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticsTollViewModel, RNU>>>(`/LogisticsToll/GetLogisticsTollById`, data);
};
export const postLogisticsTollEditLogisticsToll = <
	NU0 extends (keyof AT_BillingMethod)[] = [],
	NUDATA extends (keyof AT_EditLogisticsTollRequestModel)[] = [],
>(
	method: U_I_NoNull<AT_BillingMethod, NU0>,
	data: U_I_NoNull<AT_EditLogisticsTollRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticsToll/EditLogisticsToll?${method ? 'method=' + method : ''}`, data);
};
export const postLogisticsTollSaveLogisticInfo = <NUDATA extends (keyof AT_LogisticInfoRequestModel)[] = []>(
	data: U_I_NoNull<AT_LogisticInfoRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticsToll/SaveLogisticInfo`, data);
};
export const postLogisticsTollGetLogisticsInfoDetailsToPage = <
	RNU extends (keyof AT_LogisticsInfoDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LogisticsInfoDetailsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_LogisticsInfoDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticsInfoDetailsPageModelIEnumerableInt32Tuple, RNU>>>(
		`/LogisticsToll/GetLogisticsInfoDetailsToPage`,
		data
	);
};
export const getLogisticsTollGetBillingMethodList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/LogisticsToll/GetBillingMethodList`);
};
export const getLogisticsTollGetLogisticsFeeTypeList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/LogisticsToll/GetLogisticsFeeTypeList`);
};
export const getLogisticsTollGetLogisticsPiecesFormulaList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/LogisticsToll/GetLogisticsPiecesFormulaList`);
};
export const postLogisticsTollSaveLogisticFeeInfo = <NUDATA extends (keyof AT_LogisticFeeInfoRequestModel)[] = []>(
	data: U_I_NoNull<AT_LogisticFeeInfoRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/LogisticsToll/SaveLogisticFeeInfo`, data);
};
export const postLogisticsTollCalculateTheoryFee = <
	RNU extends (keyof AT_CalculateTheoryFeeMode)[] = [],
	NUDATA extends (keyof AT_CalculateTheoryFeeQueryMode)[] = [],
>(
	data: U_I_NoNull<AT_CalculateTheoryFeeQueryMode, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CalculateTheoryFeeMode, RNU>[]>>(`/LogisticsToll/CalculateTheoryFee`, data);
};
export const postLogisticsTollCalculateRealityFee = <
	RNU extends (keyof AT_CalculateRealityFeeMode)[] = [],
	NUDATA extends (keyof AT_CalculateRealityFeeQueryMode)[] = [],
>(
	data: U_I_NoNull<AT_CalculateRealityFeeQueryMode, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CalculateRealityFeeMode, RNU>[]>>(`/LogisticsToll/CalculateRealityFee`, data);
};
export const postMarketAddMarketExplain = <NUDATA extends (keyof AT_MarketExplainModel)[] = []>(data: U_I_NoNull<AT_MarketExplainModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Market/AddMarketExplain`, data);
};
export const postMarketGetMarketExplainByProductCode = <RNU extends (keyof AT_MarketExplainViewModel)[] = []>(productCode: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketExplainViewModel, RNU>>>(
		`/Market/GetMarketExplainByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postMarketAddMarketToolkit = <NUDATA extends (keyof AT_MarketToolkitModel)[] = []>(data: U_I_NoNull<AT_MarketToolkitModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Market/AddMarketToolkit`, data);
};
export const postMarketGetMarketToolkitByProductCode = <RNU extends (keyof AT_MarketToolkitViewModel)[] = []>(productCode: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketToolkitViewModel, RNU>>>(
		`/Market/GetMarketToolkitByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postMarketAddMarketSpread = <NUDATA extends (keyof AT_MarketSpreadModel)[] = []>(data: U_I_NoNull<AT_MarketSpreadModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Market/AddMarketSpread`, data);
};
export const postMarketGetMarketSpreadByProductCode = <RNU extends (keyof AT_MarketSpreadViewModel)[] = []>(productCode: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketSpreadViewModel, RNU>>>(
		`/Market/GetMarketSpreadByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postMarketAddMarketRecruit = <NUDATA extends (keyof AT_MarketRecruitModel)[] = []>(data: U_I_NoNull<AT_MarketRecruitModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Market/AddMarketRecruit`, data);
};
export const postMarketGetMarketRecruitByProductCode = <RNU extends (keyof AT_MarketRecruitViewModel)[] = []>(productCode: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketRecruitViewModel, RNU>>>(
		`/Market/GetMarketRecruitByProductCode?${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const postMarketGetMarketRecruitToPage = <
	RNU extends (keyof AT_MarketRecruitPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MarketRecruitQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MarketRecruitQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketRecruitPageModelIEnumerableInt32Tuple, RNU>>>(`/Market/GetMarketRecruitToPage`, data);
};
export const postMarketGetMarketSpreadToPage = <
	RNU extends (keyof AT_MarketSpreadPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MarketSpreadQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MarketSpreadQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketSpreadPageModelIEnumerableInt32Tuple, RNU>>>(`/Market/GetMarketSpreadToPage`, data);
};
export const postMarketGetMarketToolkitToPage = <
	RNU extends (keyof AT_MarketToolkitPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MarketToolkitQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MarketToolkitQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketToolkitPageModelIEnumerableInt32Tuple, RNU>>>(`/Market/GetMarketToolkitToPage`, data);
};
export const postMarketGetMarketExplainToPage = <
	RNU extends (keyof AT_MarketExplainPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MarketExplainQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MarketExplainQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketExplainPageModelIEnumerableInt32Tuple, RNU>>>(`/Market/GetMarketExplainToPage`, data);
};
export const getMarketSearchGoodsMarketInfo = <RNU extends (keyof AT_SearchGoodsMarketInfoModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SearchGoodsMarketInfoModel, RNU>[]>>(
		`/Market/SearchGoodsMarketInfo?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const postFlowMarketPlanGetMarketPlanToPage = <
	RNU extends (keyof AT_MarketPlanPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MarketPlanQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MarketPlanQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MarketPlanPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/MarketPlan/GetMarketPlanToPage`, data);
};
export const getFlowMarketPlanGetMarketPlanByFlowId = <RNU extends (keyof AT_FlowModelMarketPlanViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMarketPlanViewModelTuple, RNU>>>(
		`/flow/MarketPlan/GetMarketPlanByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowMarketPlanDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/DynamicSubmitAudit`, data);
};
export const postFlowMarketPlanPendingAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/PendingAudit`, data);
};
export const postFlowMarketPlanRejectAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/RejectAudit`, data);
};
export const postFlowMarketPlanDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/DynamicRejectAudit`, data);
};
export const postFlowMarketPlanResetAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/ResetAudit`, data);
};
export const postFlowMarketPlanSaveDraft = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/SaveDraft`, data);
};
export const postFlowMarketPlanSubmitAudit = <NUDATA extends (keyof AT_FlowMarketPlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowMarketPlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/SubmitAudit`, data);
};
export const postFlowMarketPlanModifySharingList = <NUDATA extends (keyof AT_ModifySharingListModel)[] = []>(
	data: U_I_NoNull<AT_ModifySharingListModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/MarketPlan/ModifySharingList`, data);
};
export const getFlowMarketPlanGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/MarketPlan/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowMarketPlanGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/MarketPlan/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getMoneyBackGetMoneyBackByCode = <RNU extends (keyof AT_MoneyBackViewModel)[] = []>(backDetailsCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyBackViewModel, RNU>>>(
		`/MoneyBack/GetMoneyBackByCode?${backDetailsCode ? 'backDetailsCode=' + backDetailsCode : ''}`
	);
};
export const getMoneyBackGetMoneyBackByMoneyBackId = <RNU extends (keyof AT_MoneyBackViewModel)[] = []>(moneyBackId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyBackViewModel, RNU>>>(
		`/MoneyBack/GetMoneyBackByMoneyBackId?${moneyBackId ? 'moneyBackId=' + moneyBackId : ''}`
	);
};
export const postMoneyBackAddMoneyBackRecord = <NUDATA extends (keyof AT_MoneyBackRecordModel)[] = []>(
	data: U_I_NoNull<AT_MoneyBackRecordModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/MoneyBack/AddMoneyBackRecord`, data);
};
export const postMoneyBackRemoveMoneyBack = (backCode: any) => {
	return axios.post<ResponseData<any>>(`/MoneyBack/RemoveMoneyBack?${backCode ? 'backCode=' + backCode : ''}`);
};
export const postMoneyBackGetMoneyBackToPage = <
	RNU extends (keyof AT_MoneyBackPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MoneyBackQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MoneyBackQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MoneyBackPageModelIEnumerableInt32Tuple, RNU>>>(`/MoneyBack/GetMoneyBackToPage`, data);
};
export const getMoneyPayGetMoneyPayByCode = <RNU extends (keyof AT_MoneyPayViewModel)[] = []>(payDetailsCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyPayViewModel, RNU>>>(
		`/MoneyPay/GetMoneyPayByCode?${payDetailsCode ? 'payDetailsCode=' + payDetailsCode : ''}`
	);
};
export const postMoneyPayAddMoneyPayRecord = <NUDATA extends (keyof AT_MoneyPayRecordModel)[] = []>(
	data: U_I_NoNull<AT_MoneyPayRecordModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/MoneyPay/AddMoneyPayRecord`, data);
};
export const postMoneyPayRelieve = (data: any) => {
	return axios.post<ResponseData<any>>(`/MoneyPay/Relieve`, data);
};
export const postMoneyPayControl = (data: any) => {
	return axios.post<ResponseData<any>>(`/MoneyPay/Control`, data);
};
export const postMoneyPayPrint = (payDetailsCode: any) => {
	return axios.post<ResponseData<any>>(`/MoneyPay/Print?${payDetailsCode ? 'payDetailsCode=' + payDetailsCode : ''}`);
};
export const postMoneyPayRemoveMoneyPay = (payDetailsCode: any) => {
	return axios.post<ResponseData<any>>(`/MoneyPay/RemoveMoneyPay?${payDetailsCode ? 'payDetailsCode=' + payDetailsCode : ''}`);
};
export const postMoneyPayGetMoneyPayToPage = <
	RNU extends (keyof AT_MoneyPayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MoneyPayQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_MoneyPayQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_MoneyPayPageModelIEnumerableInt32Tuple, RNU>>>(`/MoneyPay/GetMoneyPayToPage`, data);
};
export const getMoneyPayGetMoneyPayRecordById = <RNU extends (keyof AT_MoneyPayRecordViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_MoneyPayRecordViewModel, RNU>>>(`/MoneyPay/GetMoneyPayRecordById?${id ? 'id=' + id : ''}`);
};
export const getMoneyPaySearchMoneyPayState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/MoneyPay/SearchMoneyPayState`);
};
export const getNoticeGetNotice = <RNU extends (keyof AT_NoticeViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_NoticeViewModel, RNU>[]>>(`/Notice/GetNotice`);
};
export const postNoticeNoticeRead = <NUDATA extends (keyof AT_NoticeReadModel)[] = []>(data: U_I_NoNull<AT_NoticeReadModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Notice/NoticeRead`, data);
};
export const getFlowProducePlanGetProducePlanByFlowId = <RNU extends (keyof AT_FlowModelProducePlanViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelProducePlanViewModelTuple, RNU>>>(
		`/flow/ProducePlan/GetProducePlanByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowProducePlanLine = <NUDATA extends (keyof AT_ProducePlanLineModel)[] = []>(data: U_I_NoNull<AT_ProducePlanLineModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/Line`, data);
};
export const postFlowProducePlanMaterialPurchase = (producePlanCode: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/MaterialPurchase?${producePlanCode ? 'producePlanCode=' + producePlanCode : ''}`);
};
export const postFlowProducePlanMaterialArrive = (producePlanCode: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/MaterialArrive?${producePlanCode ? 'producePlanCode=' + producePlanCode : ''}`);
};
export const postFlowProducePlanMaterialCheckout = (producePlanCode: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/MaterialCheckout?${producePlanCode ? 'producePlanCode=' + producePlanCode : ''}`);
};
export const postFlowProducePlanMaterialCheckoutResult = <NUDATA extends (keyof AT_MaterialCheckoutResultModel)[] = []>(
	data: U_I_NoNull<AT_MaterialCheckoutResultModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/MaterialCheckoutResult`, data);
};
export const postFlowProducePlanProducePlanYield = <NUDATA extends (keyof AT_ProducePlanYieldModel)[] = []>(
	data: U_I_NoNull<AT_ProducePlanYieldModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/ProducePlanYield`, data);
};
export const postFlowProducePlanPreparationsCheckout = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/PreparationsCheckout?${id ? 'id=' + id : ''}`);
};
export const postFlowProducePlanPreparationsDisqualification = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/PreparationsDisqualification?${id ? 'id=' + id : ''}`);
};
export const postFlowProducePlanPreparationsPass = <NUDATA extends (keyof AT_PreparationsPassModel)[] = []>(
	data: U_I_NoNull<AT_PreparationsPassModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/PreparationsPass`, data);
};
export const postFlowProducePlanPreparationsArrive = (id: any) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/PreparationsArrive?${id ? 'id=' + id : ''}`);
};
export const postFlowProducePlanDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/DynamicSubmitAudit`, data);
};
export const postFlowProducePlanPendingAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/PendingAudit`, data);
};
export const postFlowProducePlanRejectAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/RejectAudit`, data);
};
export const postFlowProducePlanDynamicRejectAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/DynamicRejectAudit`, data);
};
export const postFlowProducePlanResetAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/ResetAudit`, data);
};
export const postFlowProducePlanSaveDraft = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/SaveDraft`, data);
};
export const postFlowProducePlanSubmitAudit = <NUDATA extends (keyof AT_FlowProducePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowProducePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ProducePlan/SubmitAudit`, data);
};
export const postFlowProducePlanGetProducePlanToPage = <
	RNU extends (keyof AT_ProducePlanPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ProducePlanQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ProducePlanQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ProducePlanPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/ProducePlan/GetProducePlanToPage`, data);
};
export const postFlowProducePlanGetProducePlanRecordToPage = <
	RNU extends (keyof AT_ProducePlanPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ProducePlanRecordQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ProducePlanRecordQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ProducePlanPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ProducePlan/GetProducePlanRecordToPage`,
		data
	);
};
export const postFlowProducePlanGetProducePlanYieldToPage = <
	RNU extends (keyof AT_ProducePlanYieldPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ProducePlanYieldQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ProducePlanYieldQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ProducePlanYieldPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ProducePlan/GetProducePlanYieldToPage`,
		data
	);
};
export const getFlowProducePlanGetProducePlanYieldListByCode = <RNU extends (keyof AT_ProducePlanYieldListModel)[] = []>(producePlanCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProducePlanYieldListModel, RNU>[]>>(
		`/flow/ProducePlan/GetProducePlanYieldListByCode?${producePlanCode ? 'producePlanCode=' + producePlanCode : ''}`
	);
};
export const getFlowProducePlanGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/ProducePlan/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowProducePlanGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/ProducePlan/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postProjectManageAddProjectManage = <NUDATA extends (keyof AT_ProjectManageRequestModel)[] = []>(
	data: U_I_NoNull<AT_ProjectManageRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/ProjectManage/AddProjectManage`, data);
};
export const postProjectManageGetProjectManageToPage = <
	RNU extends (keyof AT_ProjectManagePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ProjectManageQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ProjectManageQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ProjectManagePageModelIEnumerableInt32Tuple, RNU>>>(`/ProjectManage/GetProjectManageToPage`, data);
};
export const getProjectManageGetProjectManageComboBox = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/ProjectManage/GetProjectManageComboBox`);
};
export const getProjectManageGetProjectManageById = <RNU extends (keyof AT_ProjectManagePageModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProjectManagePageModel, RNU>>>(`/ProjectManage/GetProjectManageById?${id ? 'id=' + id : ''}`);
};
export const postPurchaseGetPurchaseToPage = <
	RNU extends (keyof AT_PurchasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchasePageModelIEnumerableInt32Tuple, RNU>>>(`/Purchase/GetPurchaseToPage`, data);
};
export const postPurchaseExportPurchase = <NUDATA extends (keyof AT_PurchaseQueryModel)[] = []>(data: U_I_NoNull<AT_PurchaseQueryModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Purchase/ExportPurchase`, data);
};
export const getPurchaseGetPurchaseById = <RNU extends (keyof AT_PurchaseViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseViewModel, RNU>>>(`/Purchase/GetPurchaseById?${id ? 'id=' + id : ''}`);
};
export const postPurchaseUpdatePurchase = <NUDATA extends (keyof AT_PurchaseModel)[] = []>(
	purchaseId: any,
	data: U_I_NoNull<AT_PurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Purchase/UpdatePurchase?${purchaseId ? 'purchaseId=' + purchaseId : ''}`, data);
};
export const getPurchaseUpdateMinDeliveryQuantity = (goodsNetId: any, minDeliveryQuantity: any) => {
	return axios.get<ResponseData<any>>(
		`/Purchase/UpdateMinDeliveryQuantity?${goodsNetId ? 'goodsNetId=' + goodsNetId : ''}&${
			minDeliveryQuantity ? 'minDeliveryQuantity=' + minDeliveryQuantity : ''
		}`
	);
};
export const getFlowPurchaseBackGetPurchaseBackByFlowId = <RNU extends (keyof AT_FlowModelPurchaseBackViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchaseBackViewModelTuple, RNU>>>(
		`/flow/PurchaseBack/GetPurchaseBackByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseBackGetPurchaseBackById = <RNU extends (keyof AT_FlowModelPurchaseBackViewModelTuple)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchaseBackViewModelTuple, RNU>>>(
		`/flow/PurchaseBack/GetPurchaseBackById?${id ? 'id=' + id : ''}`
	);
};
export const postFlowPurchaseBackGetPurchaseBackToPage = <
	RNU extends (keyof AT_PurchaseBackPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseBackQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseBackQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseBackPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/PurchaseBack/GetPurchaseBackToPage`, data);
};
export const postFlowPurchaseBackDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/DynamicSubmitAudit`, data);
};
export const postFlowPurchaseBackPendingAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/PendingAudit`, data);
};
export const postFlowPurchaseBackRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/RejectAudit`, data);
};
export const postFlowPurchaseBackDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/DynamicRejectAudit`, data);
};
export const postFlowPurchaseBackResetAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/ResetAudit`, data);
};
export const postFlowPurchaseBackSaveDraft = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/SaveDraft`, data);
};
export const postFlowPurchaseBackSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseBack/SubmitAudit`, data);
};
export const getFlowPurchaseBackGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchaseBack/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseBackGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchaseBack/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getPurchaseContractGetPurchaseContractById = <RNU extends (keyof AT_PurchaseContractViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseContractViewModel, RNU>>>(`/PurchaseContract/GetPurchaseContractById?${id ? 'id=' + id : ''}`);
};
export const postPurchaseContractAddPurchaseContract = <NUDATA extends (keyof AT_PurchaseContractModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseContract/AddPurchaseContract`, data);
};
export const postPurchaseContractUpdatePurchaseContract = <NUDATA extends (keyof AT_PurchaseContractModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_PurchaseContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseContract/UpdatePurchaseContract?${id ? 'id=' + id : ''}`, data);
};
export const postPurchaseContractRemovePurchaseContractById = (id: any) => {
	return axios.post<ResponseData<any>>(`/PurchaseContract/RemovePurchaseContractById?${id ? 'id=' + id : ''}`);
};
export const postPurchaseContractGetPurchaseContractToPage = <
	RNU extends (keyof AT_PurchaseContractPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseContractQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseContractQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseContractPageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseContract/GetPurchaseContractToPage`,
		data
	);
};
export const getPurchaseContractGetProductContractAmount = <RNU extends (keyof AT_ProductContractModel)[] = []>(
	purchaseCode: any,
	supplierCode: any,
	purchaseOrderDetailId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ProductContractModel, RNU>[]>>(
		`/PurchaseContract/GetProductContractAmount?${purchaseCode ? 'purchaseCode=' + purchaseCode : ''}&${
			supplierCode ? 'supplierCode=' + supplierCode : ''
		}&${purchaseOrderDetailId ? 'purchaseOrderDetailId=' + purchaseOrderDetailId : ''}`
	);
};
export const getFlowPurchaseFlowGetPurchaseByFlowId = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/PurchaseFlow/GetPurchaseByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseFlowGetInvestmentById = <RNU extends (keyof AT_FlowModelGoodsFlowViewModelTuple)[] = []>(id: any, popupKey: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelGoodsFlowViewModelTuple, RNU>>>(
		`/flow/PurchaseFlow/GetInvestmentById?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowPurchaseFlowUpdatePurchase = <NUDATA extends (keyof AT_PurchaseModel)[] = []>(
	purchaseId: any,
	data: U_I_NoNull<AT_PurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/UpdatePurchase?${purchaseId ? 'purchaseId=' + purchaseId : ''}`, data);
};
export const getFlowPurchaseFlowUpdateMinDeliveryQuantity = (goodsNetId: any, minDeliveryQuantity: any) => {
	return axios.get<ResponseData<any>>(
		`/flow/PurchaseFlow/UpdateMinDeliveryQuantity?${goodsNetId ? 'goodsNetId=' + goodsNetId : ''}&${
			minDeliveryQuantity ? 'minDeliveryQuantity=' + minDeliveryQuantity : ''
		}`
	);
};
export const postFlowPurchaseFlowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/DynamicSubmitAudit`, data);
};
export const postFlowPurchaseFlowPendingAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/PendingAudit`, data);
};
export const postFlowPurchaseFlowRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/RejectAudit`, data);
};
export const postFlowPurchaseFlowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/DynamicRejectAudit`, data);
};
export const postFlowPurchaseFlowResetAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/ResetAudit?${id ? 'id=' + id : ''}`, data);
};
export const postFlowPurchaseFlowSaveDraft = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/SaveDraft`, data);
};
export const postFlowPurchaseFlowSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/SubmitAudit`, data);
};
export const postFlowPurchaseFlowGetPurchaseToPage = <
	RNU extends (keyof AT_PurchasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchasePageModelIEnumerableInt32Tuple, RNU>>>(`/flow/PurchaseFlow/GetPurchaseToPage`, data);
};
export const postFlowPurchaseFlowExportPurchase = <NUDATA extends (keyof AT_PurchaseQueryModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseFlow/ExportPurchase`, data);
};
export const getFlowPurchaseFlowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchaseFlow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseFlowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchaseFlow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postPurchaseHDRejectGetPurchaseHDRejectToPage = <
	RNU extends (keyof AT_HDRejectionRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RejectionRecordQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_RejectionRecordQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_HDRejectionRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseHDReject/GetPurchaseHDRejectToPage`,
		data
	);
};
export const postPurchaseHDRejectAddPurchaseInStock = <NUDATA extends (keyof AT_PurchaseHDRejectInStockModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseHDRejectInStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseHDReject/AddPurchaseInStock`, data);
};
export const getPurchaseHDRejectGetHDRejectById = <RNU extends (keyof AT_HDRejectionRecordViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_HDRejectionRecordViewModel, RNU>>>(`/PurchaseHDReject/GetHDRejectById?${id ? 'id=' + id : ''}`);
};
export const getPurchaseInStockGetGetPurchaseInStockById = <RNU extends (keyof AT_PurchaseInStockViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseInStockViewModel, RNU>>>(`/PurchaseInStock/GetGetPurchaseInStockById?${id ? 'id=' + id : ''}`);
};
export const postPurchaseInStockAddPurchaseInStock = <NUDATA extends (keyof AT_PurchaseInStockModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseInStockModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseInStock/AddPurchaseInStock`, data);
};
export const postPurchaseInStockGetPurchaseInStockToPage = <
	RNU extends (keyof AT_PurchaseInStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseInStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseInStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseInStockPageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseInStock/GetPurchaseInStockToPage`,
		data
	);
};
export const getPurchaseInStockGetPurchaseRejectInStockById = <RNU extends (keyof AT_PurchaseRejectInStockViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseRejectInStockViewModel, RNU>>>(
		`/PurchaseInStock/GetPurchaseRejectInStockById?${id ? 'id=' + id : ''}`
	);
};
export const postPurchaseInvoiceGetPurchaseInvoiceToPage = <
	RNU extends (keyof AT_PurchaseInvoicePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseInvoiceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseInvoiceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseInvoicePageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseInvoice/GetPurchaseInvoiceToPage`,
		data
	);
};
export const postPurchaseInvoiceExportPurchaseInvoice = <NUDATA extends (keyof AT_PurchaseInvoiceQueryModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseInvoiceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseInvoice/ExportPurchaseInvoice`, data);
};
export const getPurchaseInvoiceSignPurchaseInvoice = (id: any) => {
	return axios.get<ResponseData<any>>(`/PurchaseInvoice/SignPurchaseInvoice?${id ? 'id=' + id : ''}`);
};
export const postPurchaseInvoiceUpdatePurchaseInvoice = <NUDATA extends (keyof AT_PurchaseInvoiceModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_PurchaseInvoiceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseInvoice/UpdatePurchaseInvoice?${id ? 'id=' + id : ''}`, data);
};
export const getPurchaseInvoiceSearchPurchaseInvoiceState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/PurchaseInvoice/SearchPurchaseInvoiceState`);
};
export const getFlowPurchaseOrderGetPurchaseOrderByFlowId = <RNU extends (keyof AT_FlowModelPurchaseOrderViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchaseOrderViewModelTuple, RNU>>>(
		`/flow/PurchaseOrder/GetPurchaseOrderByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchaseOrderDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/DynamicSubmitAudit`, data);
};
export const postFlowPurchaseOrderPendingAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/PendingAudit`, data);
};
export const postFlowPurchaseOrderRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/RejectAudit`, data);
};
export const postFlowPurchaseOrderDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/DynamicRejectAudit`, data);
};
export const postFlowPurchaseOrderResetAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/ResetAudit`, data);
};
export const postFlowPurchaseOrderSaveDraft = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/SaveDraft`, data);
};
export const postFlowPurchaseOrderSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/SubmitAudit`, data);
};
export const postFlowPurchaseOrderGetPurchaseOrderToPage = <
	RNU extends (keyof AT_PurchaseOrderPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseOrderQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseOrderQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseOrderPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/PurchaseOrder/GetPurchaseOrderToPage`,
		data
	);
};
export const postFlowPurchaseOrderExportPurchaseOrder = <NUDATA extends (keyof AT_PurchaseOrderQueryModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseOrderQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/ExportPurchaseOrder`, data);
};
export const getFlowPurchaseOrderSearchPurchaseModeType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/PurchaseOrder/SearchPurchaseModeType`);
};
export const getFlowPurchaseOrderSearchPayModeType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/PurchaseOrder/SearchPayModeType`);
};
export const getFlowPurchaseOrderGetDeliveryPrintModelById = <RNU extends (keyof AT_DeliveryPrintModel)[] = []>(detailId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_DeliveryPrintModel, RNU>>>(
		`/flow/PurchaseOrder/GetDeliveryPrintModelById?${detailId ? 'detailId=' + detailId : ''}`
	);
};
export const getFlowPurchaseOrderPrintDeliveryNotice = (detailId: any) => {
	return axios.get<ResponseData<any>>(`/flow/PurchaseOrder/PrintDeliveryNotice?${detailId ? 'detailId=' + detailId : ''}`);
};
export const getFlowPurchaseOrderGetConfirmDeliveryById = <RNU extends (keyof AT_ConfirmDeliveryModel)[] = []>(detailId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ConfirmDeliveryModel, RNU>>>(
		`/flow/PurchaseOrder/GetConfirmDeliveryById?${detailId ? 'detailId=' + detailId : ''}`
	);
};
export const postFlowPurchaseOrderConfirmDelivery = <NUDATA extends (keyof AT_PurchaseOrderDeliveryModel)[] = []>(
	detailId: any,
	data: U_I_NoNull<AT_PurchaseOrderDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/ConfirmDelivery?${detailId ? 'detailId=' + detailId : ''}`, data);
};
export const postFlowPurchaseOrderNoticeDelivery = (data: any) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/NoticeDelivery`, data);
};
export const getFlowPurchaseOrderGetInvoiceDetailView = <RNU extends (keyof AT_PurchaseInvoiceDetailsViewModel)[] = []>(detailId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseInvoiceDetailsViewModel, RNU>>>(
		`/flow/PurchaseOrder/GetInvoiceDetailView?${detailId ? 'detailId=' + detailId : ''}`
	);
};
export const postFlowPurchaseOrderConfirmOrderInvoice = <NUDATA extends (keyof AT_PurchaseInvoiceModel)[] = []>(
	detailId: any,
	data: U_I_NoNull<AT_PurchaseInvoiceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/ConfirmOrderInvoice?${detailId ? 'detailId=' + detailId : ''}`, data);
};
export const getFlowPurchaseOrderSearchOrderState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/PurchaseOrder/SearchOrderState`);
};
export const postFlowPurchaseOrderGetPurchasePayPreRecordByOrder = <RNU extends (keyof AT_PurchasePayPreRecordViewModel)[] = []>(
	companyCode: any,
	supplierCode: any,
	productCode: any,
	deductionMoney: any,
	orderCode: any,
	data: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchasePayPreRecordViewModel, RNU>[]>>(
		`/flow/PurchaseOrder/GetPurchasePayPreRecordByOrder?${companyCode ? 'companyCode=' + companyCode : ''}&${
			supplierCode ? 'supplierCode=' + supplierCode : ''
		}&${productCode ? 'productCode=' + productCode : ''}&${deductionMoney ? 'deductionMoney=' + deductionMoney : ''}&${
			orderCode ? 'orderCode=' + orderCode : ''
		}`,
		data
	);
};
export const postFlowPurchaseOrderConverToHaiDian = (data: any) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseOrder/ConverToHaiDian`, data);
};
export const getFlowPurchaseOrderGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchaseOrder/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseOrderGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchaseOrder/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchasePayGetPurchasePayByFlowId = <RNU extends (keyof AT_FlowModelPurchasePayViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchasePayViewModelTuple, RNU>>>(
		`/flow/PurchasePay/GetPurchasePayByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchasePayGetPurchasePayView = <RNU extends (keyof AT_FlowModelPurchasePayViewModelTuple)[] = []>(id: any, popupKey: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchasePayViewModelTuple, RNU>>>(
		`/flow/PurchasePay/GetPurchasePayView?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowPurchasePayDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/DynamicSubmitAudit`, data);
};
export const postFlowPurchasePayPendingAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/PendingAudit`, data);
};
export const postFlowPurchasePayRejectAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/RejectAudit`, data);
};
export const postFlowPurchasePayDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/DynamicRejectAudit`, data);
};
export const postFlowPurchasePayResetAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/ResetAudit`, data);
};
export const postFlowPurchasePaySaveDraft = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/SaveDraft`, data);
};
export const postFlowPurchasePaySubmitAudit = <NUDATA extends (keyof AT_FlowPurchasePayModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePay/SubmitAudit`, data);
};
export const postFlowPurchasePayGetPurchasePayToPage = <
	RNU extends (keyof AT_PurchasePayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchasePayQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchasePayQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchasePayPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/PurchasePay/GetPurchasePayToPage`, data);
};
export const getFlowPurchasePayGetPurchasePayApplyPrintModel = <RNU extends (keyof AT_PurchasePayApplyPrintModel)[] = []>(purchasePayCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchasePayApplyPrintModel, RNU>>>(
		`/flow/PurchasePay/GetPurchasePayApplyPrintModel?${purchasePayCode ? 'purchasePayCode=' + purchasePayCode : ''}`
	);
};
export const getFlowPurchasePayPrintPurchasePayApply = (purchasePayCode: any) => {
	return axios.get<ResponseData<any>>(`/flow/PurchasePay/PrintPurchasePayApply?${purchasePayCode ? 'purchasePayCode=' + purchasePayCode : ''}`);
};
export const getFlowPurchasePayGetPurchasePayRecords = <RNU extends (keyof AT_PurchasePayRecordModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchasePayRecordModel, RNU>[]>>(`/flow/PurchasePay/GetPurchasePayRecords?${id ? 'id=' + id : ''}`);
};
export const getFlowPurchasePayGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchasePay/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchasePayGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchasePay/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchasePayWaitDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/DynamicRejectAudit`, data);
};
export const postFlowPurchasePayWaitDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/DynamicSubmitAudit`, data);
};
export const getFlowPurchasePayWaitGetPurchasePayByFlowId = <RNU extends (keyof AT_FlowModelPurchasePayWaitTransferViewTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchasePayWaitTransferViewTuple, RNU>>>(
		`/flow/PurchasePayWait/GetPurchasePayByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchasePayWaitGetPurchasePayWaitToPage = <
	RNU extends (keyof AT_PurchasePayWaitPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchasePayWaitQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchasePayWaitQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchasePayWaitPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/PurchasePayWait/GetPurchasePayWaitToPage`,
		data
	);
};
export const getFlowPurchasePayWaitGetPurchasePayWaitTransferView = <RNU extends (keyof AT_FlowModelPurchasePayWaitTransferViewTuple)[] = []>(
	id: any,
	popupKey: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchasePayWaitTransferViewTuple, RNU>>>(
		`/flow/PurchasePayWait/GetPurchasePayWaitTransferView?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}`
	);
};
export const postFlowPurchasePayWaitPendingAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/PendingAudit`, data);
};
export const postFlowPurchasePayWaitRejectAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/RejectAudit`, data);
};
export const postFlowPurchasePayWaitResetAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/ResetAudit`, data);
};
export const getFlowPurchasePayWaitSearchPayWaitStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/PurchasePayWait/SearchPayWaitStatus`);
};
export const postFlowPurchasePayWaitSubmitAudit = <NUDATA extends (keyof AT_FlowPurchasePayWaitModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchasePayWaitModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchasePayWait/SubmitAudit`, data);
};
export const getFlowPurchasePayWaitGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchasePayWait/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchasePayWaitGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchasePayWait/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseResetPriceSearchPurchaseCode = <RNU extends (keyof AT_PurchaseCodeViewModel)[] = []>(purchaseCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseCodeViewModel, RNU>[]>>(
		`/flow/PurchaseResetPrice/SearchPurchaseCode?${purchaseCode ? 'purchaseCode=' + purchaseCode : ''}`
	);
};
export const getFlowPurchaseResetPriceGetSaleResetPriceByFlowId = <RNU extends (keyof AT_FlowModelPurchaseCodeViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchaseCodeViewModelTuple, RNU>>>(
		`/flow/PurchaseResetPrice/GetSaleResetPriceByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchaseResetPriceGetPurchaseResetPriceToPage = <
	RNU extends (keyof AT_PurchaseResetPricePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseResetPriceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseResetPriceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseResetPricePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/PurchaseResetPrice/GetPurchaseResetPriceToPage`,
		data
	);
};
export const postFlowPurchaseResetPriceDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/DynamicSubmitAudit`, data);
};
export const postFlowPurchaseResetPricePendingAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/PendingAudit`, data);
};
export const postFlowPurchaseResetPriceRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/RejectAudit`, data);
};
export const postFlowPurchaseResetPriceDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/DynamicRejectAudit`, data);
};
export const postFlowPurchaseResetPriceResetAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/ResetAudit`, data);
};
export const postFlowPurchaseResetPriceSaveDraft = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/SaveDraft`, data);
};
export const postFlowPurchaseResetPriceSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseResetPrice/SubmitAudit`, data);
};
export const getFlowPurchaseResetPriceGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchaseResetPrice/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseResetPriceGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchaseResetPrice/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchaseReturnSearchPurchaseReturnDetailsToPage = <
	RNU extends (keyof AT_PurchaseReturnDetailsSearchModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseReturnDetailsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseReturnDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseReturnDetailsSearchModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/PurchaseReturn/SearchPurchaseReturnDetailsToPage`,
		data
	);
};
export const postFlowPurchaseReturnGetPurchaseReturnToPage = <
	RNU extends (keyof AT_PurchaseReturnPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseReturnQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseReturnQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseReturnPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/PurchaseReturn/GetPurchaseReturnToPage`,
		data
	);
};
export const getFlowPurchaseReturnGetPurchaseReturnByFlowId = <RNU extends (keyof AT_FlowModelPurchaseReturnViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPurchaseReturnViewModelTuple, RNU>>>(
		`/flow/PurchaseReturn/GetPurchaseReturnByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowPurchaseReturnDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/DynamicSubmitAudit`, data);
};
export const postFlowPurchaseReturnPendingAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/PendingAudit`, data);
};
export const postFlowPurchaseReturnRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/RejectAudit`, data);
};
export const postFlowPurchaseReturnDynamicRejectAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/DynamicRejectAudit`, data);
};
export const postFlowPurchaseReturnResetAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/ResetAudit`, data);
};
export const postFlowPurchaseReturnSaveDraft = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/SaveDraft`, data);
};
export const postFlowPurchaseReturnSubmitAudit = <NUDATA extends (keyof AT_FlowPurchaseReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowPurchaseReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturn/SubmitAudit`, data);
};
export const postFlowPurchaseReturnModalRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/PurchaseReturnModal/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowPurchaseReturnGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/PurchaseReturn/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowPurchaseReturnGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/PurchaseReturn/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postPurchaseReturnOutGetPurchaseReturnOutToPage = <
	RNU extends (keyof AT_PurchaseReturnOutPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseReturnOutQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseReturnOutQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseReturnOutPageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseReturnOut/GetPurchaseReturnOutToPage`,
		data
	);
};
export const postPurchaseReturnOutSavePurchaseReturnOut = <NUDATA extends (keyof AT_PurchaseReturnOutRequestModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseReturnOutRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseReturnOut/SavePurchaseReturnOut`, data);
};
export const postPurchaseReturnOutGetPurchaseReturnOutRecordToPage = <
	RNU extends (keyof AT_PurchaseReturnOutRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PurchaseReturnOutRecordQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PurchaseReturnOutRecordQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PurchaseReturnOutRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/PurchaseReturnOut/GetPurchaseReturnOutRecordToPage`,
		data
	);
};
export const getPurchaseTaxRateGetAllPurchaseTaxRate = <RNU extends (keyof AT_PurchaseTaxRateModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_PurchaseTaxRateModel, RNU>[]>>(`/PurchaseTaxRate/GetAllPurchaseTaxRate`);
};
export const getPurchaseTaxRateGetPurchaseTaxRateByPreparationType = (preparationType: any) => {
	return axios.get<ResponseData<any>>(
		`/PurchaseTaxRate/GetPurchaseTaxRateByPreparationType?${preparationType ? 'preparationType=' + preparationType : ''}`
	);
};
export const postPurchaseTaxRateUpdatePurchaseTaxRate = <NUDATA extends (keyof AT_PurchaseTaxRateModel)[] = []>(
	data: U_I_NoNull<AT_PurchaseTaxRateModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/PurchaseTaxRate/UpdatePurchaseTaxRate`, data);
};
export const postFlowReturnGoodsSubmitAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/SubmitAudit`, data);
};
export const postFlowReturnGoodsSaveDraft = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/SaveDraft`, data);
};
export const postFlowReturnGoodsDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/DynamicSubmitAudit`, data);
};
export const postFlowReturnGoodsRejectAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/RejectAudit`, data);
};
export const postFlowReturnGoodsDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/DynamicRejectAudit`, data);
};
export const postFlowReturnGoodsPendingAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/PendingAudit`, data);
};
export const postFlowReturnGoodsResetAudit = <NUDATA extends (keyof AT_FlowSaleReturnModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleReturnModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/ResetAudit`, data);
};
export const getFlowReturnGoodsSearchSaleOrderNo = <RNU extends (keyof AT_SaleOrderNoViewModel)[] = []>(saleCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleOrderNoViewModel, RNU>[]>>(
		`/flow/ReturnGoods/SearchSaleOrderNo?${saleCode ? 'saleCode=' + saleCode : ''}`
	);
};
export const getFlowReturnGoodsSearchSaleOrderDetails = <RNU extends (keyof AT_SaleReturnOrderDetailsViewModel)[] = []>(saleCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleReturnOrderDetailsViewModel, RNU>[]>>(
		`/flow/ReturnGoods/SearchSaleOrderDetails?${saleCode ? 'saleCode=' + saleCode : ''}`
	);
};
export const getFlowReturnGoodsGetReturnGoodsReasons = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/ReturnGoods/GetReturnGoodsReasons`);
};
export const getFlowReturnGoodsGetSaleReturnByFlowId = <RNU extends (keyof AT_FlowModelSaleReturnViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleReturnViewModelTuple, RNU>>>(
		`/flow/ReturnGoods/GetSaleReturnByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowReturnGoodsGetSaleReturnById = <RNU extends (keyof AT_SaleReturnViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleReturnViewModel, RNU>>>(`/flow/ReturnGoods/GetSaleReturnById?${id ? 'id=' + id : ''}`);
};
export const postFlowReturnGoodsGetSaleReturnToPage = <
	RNU extends (keyof AT_SaleReturnPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleReturnQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleReturnQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleReturnPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/ReturnGoods/GetSaleReturnToPage`, data);
};
export const postFlowReturnGoodsGetSaleReturnIntoStockToPage = <
	RNU extends (keyof AT_SaleReturnIntoStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleReturnIntoStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleReturnIntoStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleReturnIntoStockPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/ReturnGoods/GetSaleReturnIntoStockToPage`,
		data
	);
};
export const postFlowReturnGoodsSaveSaleReturnIntoStock = <NUDATA extends (keyof AT_SaleReturnIntoStockRequestModel)[] = []>(
	data: U_I_NoNull<AT_SaleReturnIntoStockRequestModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/flow/ReturnGoods/SaveSaleReturnIntoStock`, data);
};
export const getFlowReturnGoodsGetSaleReturnPayRecords = <RNU extends (keyof AT_PayRecordModel)[] = []>(refundId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PayRecordModel, RNU>[]>>(
		`/flow/ReturnGoods/GetSaleReturnPayRecords?${refundId ? 'refundId=' + refundId : ''}`
	);
};
export const getFlowReturnGoodsGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/ReturnGoods/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowReturnGoodsGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/ReturnGoods/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postRoleAddRole = <NUDATA extends (keyof AT_RoleModel)[] = []>(data: U_I_NoNull<AT_RoleModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Role/AddRole`, data);
};
export const postRoleRemoveRole = (roleId: any) => {
	return axios.post<ResponseData<any>>(`/Role/RemoveRole?${roleId ? 'roleId=' + roleId : ''}`);
};
export const postRoleUpdateRole = <NUDATA extends (keyof AT_RoleModel)[] = []>(roleId: any, data: U_I_NoNull<AT_RoleModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Role/UpdateRole?${roleId ? 'roleId=' + roleId : ''}`, data);
};
export const getRoleGetRoleById = <RNU extends (keyof AT_RoleViewModel)[] = []>(roleId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_RoleViewModel, RNU>>>(`/Role/GetRoleById?${roleId ? 'roleId=' + roleId : ''}`);
};
export const getRoleGetRoleList = <RNU extends (keyof AT_RoleViewModel)[] = []>(roleName: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_RoleViewModel, RNU>[]>>(`/Role/GetRoleList?${roleName ? 'roleName=' + roleName : ''}`);
};
export const postRoleGetRoleToPage = <
	RNU extends (keyof AT_RolePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RoleQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_RoleQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_RolePageModelIEnumerableInt32Tuple, RNU>>>(`/Role/GetRoleToPage`, data);
};
export const postRoleDispatchRole = <NUDATA extends (keyof AT_DispatchRoleModel)[] = []>(data: U_I_NoNull<AT_DispatchRoleModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Role/DispatchRole`, data);
};
export const getRoleGetRoleStaff = <RNU extends (keyof AT_RoleUserViewModel)[] = []>(roleId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_RoleUserViewModel, RNU>>>(`/Role/GetRoleStaff?${roleId ? 'roleId=' + roleId : ''}`);
};
export const getFlowSaleBackGetSaleBackByFlowId = <RNU extends (keyof AT_FlowModelSaleBackViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleBackViewModelTuple, RNU>>>(
		`/flow/SaleBack/GetSaleBackByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleBackGetSaleBackById = <RNU extends (keyof AT_SaleBackViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleBackViewModel, RNU>>>(`/flow/SaleBack/GetSaleBackById?${id ? 'id=' + id : ''}`);
};
export const postFlowSaleBackDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/DynamicSubmitAudit`, data);
};
export const postFlowSaleBackPendingAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/PendingAudit`, data);
};
export const postFlowSaleBackRejectAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/RejectAudit`, data);
};
export const postFlowSaleBackDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/DynamicRejectAudit`, data);
};
export const postFlowSaleBackResetAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/ResetAudit`, data);
};
export const postFlowSaleBackSaveDraft = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/SaveDraft`, data);
};
export const postFlowSaleBackSubmitAudit = <NUDATA extends (keyof AT_FlowSaleBackModel)[] = []>(data: U_I_NoNull<AT_FlowSaleBackModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/SubmitAudit`, data);
};
export const postFlowSaleBackGetSaleBackToPage = <
	RNU extends (keyof AT_SaleBackPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleBackQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleBackQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleBackPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/SaleBack/GetSaleBackToPage`, data);
};
export const postFlowSaleBackGetSaleBackPendingToPage = <
	RNU extends (keyof AT_SaleBackPendingPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleBackPendingQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleBackPendingQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleBackPendingPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/SaleBack/GetSaleBackPendingToPage`, data);
};
export const postFlowSaleBackSaleBackPendingTurnOrder = <NUDATA extends (keyof AT_SaleBackPendingTurnOrderRequestModel)[] = []>(
	data: U_I_NoNull<AT_SaleBackPendingTurnOrderRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBack/SaleBackPendingTurnOrder`, data);
};
export const getFlowSaleBackGetSaleBackAttachmentsByCode = <RNU extends (keyof AT_AttachmentModel)[] = []>(saleCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AttachmentModel, RNU>[]>>(
		`/flow/SaleBack/GetSaleBackAttachmentsByCode?${saleCode ? 'saleCode=' + saleCode : ''}`
	);
};
export const getFlowSaleBackGetUsedAmountList = <RNU extends (keyof AT_SaleBackUsedAmountViewModel)[] = []>(saleBackCode: any, productCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleBackUsedAmountViewModel, RNU>[]>>(
		`/flow/SaleBack/GetUsedAmountList?${saleBackCode ? 'saleBackCode=' + saleBackCode : ''}&${productCode ? 'productCode=' + productCode : ''}`
	);
};
export const getFlowSaleBackGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleBack/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleBackGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleBack/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleBackAdjustmentGetSaleBackAdjustmentByFlowId = <RNU extends (keyof AT_FlowModelSaleBackAdjustmentViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleBackAdjustmentViewModelTuple, RNU>>>(
		`/flow/SaleBackAdjustment/GetSaleBackAdjustmentByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleBackAdjustmentDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/DynamicSubmitAudit`, data);
};
export const postFlowSaleBackAdjustmentPendingAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/PendingAudit`, data);
};
export const postFlowSaleBackAdjustmentRejectAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/RejectAudit`, data);
};
export const postFlowSaleBackAdjustmentDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/DynamicRejectAudit`, data);
};
export const postFlowSaleBackAdjustmentResetAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/ResetAudit`, data);
};
export const postFlowSaleBackAdjustmentSaveDraft = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/SaveDraft`, data);
};
export const postFlowSaleBackAdjustmentSubmitAudit = <NUDATA extends (keyof AT_FlowSaleBackAdjustmentModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleBackAdjustmentModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleBackAdjustment/SubmitAudit`, data);
};
export const getFlowSaleBackAdjustmentGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleBackAdjustment/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleBackAdjustmentGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleBackAdjustment/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleCommissionGetSaleCommissionSettleByFlowId = <RNU extends (keyof AT_FlowModelSaleCommissionSettleViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleCommissionSettleViewModelTuple, RNU>>>(
		`/flow/SaleCommission/GetSaleCommissionSettleByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleCommissionCanCreateCommissionSettle = <NUDATA extends (keyof AT_SaleCommissionCheckModel)[] = []>(
	data: U_I_NoNull<AT_SaleCommissionCheckModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/CanCreateCommissionSettle`, data);
};
export const postFlowSaleCommissionDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/DynamicSubmitAudit`, data);
};
export const postFlowSaleCommissionPendingAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/PendingAudit`, data);
};
export const postFlowSaleCommissionRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/RejectAudit`, data);
};
export const postFlowSaleCommissionDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/DynamicRejectAudit`, data);
};
export const postFlowSaleCommissionResetAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/ResetAudit`, data);
};
export const postFlowSaleCommissionSaveDraft = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/SaveDraft`, data);
};
export const postFlowSaleCommissionSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommission/SubmitAudit`, data);
};
export const postFlowAddSaleCommissionRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/AddSaleCommission/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const postFlowSaleCommissionGetSaleCommissionToPage = <
	RNU extends (keyof AT_SaleCommissionPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommission/GetSaleCommissionToPage`,
		data
	);
};
export const getFlowSaleCommissionGetTotalSurplusByClient = (clientCode: any) => {
	return axios.get<ResponseData<any>>(`/flow/SaleCommission/GetTotalSurplusByClient?${clientCode ? 'clientCode=' + clientCode : ''}`);
};
export const getFlowSaleCommissionGetCommissionSettleAccountList = <RNU extends (keyof AT_SaleCommissionSettleAccountViewModel)[] = []>(
	clientCode: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleCommissionSettleAccountViewModel, RNU>[]>>(
		`/flow/SaleCommission/GetCommissionSettleAccountList?${clientCode ? 'clientCode=' + clientCode : ''}`
	);
};
export const postFlowSaleCommissionGetSaleCommissionSettleDetails = <
	RNU extends (keyof AT_SaleCommissionSettleDetailsViewModel)[] = [],
	NUDATA extends (keyof AT_CommissionSettleDetailQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_CommissionSettleDetailQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleDetailsViewModel, RNU>[]>>(
		`/flow/SaleCommission/GetSaleCommissionSettleDetails`,
		data
	);
};
export const getFlowSaleCommissionGetCommissionPayBank = <RNU extends (keyof AT_BankBookSimpleModel)[] = []>(payCompany: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BankBookSimpleModel, RNU>[]>>(
		`/flow/SaleCommission/GetCommissionPayBank?${payCompany ? 'payCompany=' + payCompany : ''}`
	);
};
export const getFlowSaleCommissionSearchCommissionBillType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SaleCommission/SearchCommissionBillType`);
};
export const getFlowSaleCommissionSearchSaleCommissionBillTypeDisPlay = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SaleCommission/SearchSaleCommissionBillTypeDisPlay`);
};
export const getFlowSaleCommissionSearchCommissionBillState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SaleCommission/SearchCommissionBillState`);
};
export const getFlowSaleCommissionGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleCommission/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleCommissionGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleCommission/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleCommissionSettleDivideGetSaleCommissionSettleDivideToPage = <
	RNU extends (keyof AT_SaleCommissionSettleDividePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleDivideQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleDivideQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleDividePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleDivideToPage`,
		data
	);
};
export const postFlowSaleCommissionSettleDivideGetDistributeSaleCommissionToPage = <
	RNU extends (keyof AT_SaleCommissionSettleDividePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleDivideQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleDivideQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleDividePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetDistributeSaleCommissionToPage`,
		data
	);
};
export const postFlowSaleCommissionSettleDivideGetSaleCommissionSettleDivideSummaryToPage = <
	RNU extends (keyof AT_SaleCommissionSettleDivideSummaryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleDivideSummaryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleDivideSummaryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleDivideSummaryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleDivideSummaryToPage`,
		data
	);
};
export const postFlowSaleCommissionSettleDivideGetSaleCommissionSettleDivideSummaryDetails = <
	RNU extends (keyof AT_FlowModelSaleCommissionSettleDivideSummaryViewModelTuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleDivideSearchModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleDivideSearchModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FlowModelSaleCommissionSettleDivideSummaryViewModelTuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleDivideSummaryDetails`,
		data
	);
};
export const getFlowSaleCommissionSettleDivideGetSaleCommissionSettleDivideByFlowId = <
	RNU extends (keyof AT_FlowModelSaleCommissionSettleDivideViewModelTuple)[] = [],
>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleCommissionSettleDivideViewModelTuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleDivideByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleCommissionSettleDivideDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/DynamicSubmitAudit`, data);
};
export const postFlowSaleCommissionSettleDividePendingAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/PendingAudit`, data);
};
export const postFlowSaleCommissionSettleDivideRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/RejectAudit`, data);
};
export const postFlowSaleCommissionSettleDivideDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/DynamicRejectAudit`, data);
};
export const postFlowSaleCommissionSettleDivideResetAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/ResetAudit`, data);
};
export const postFlowSaleCommissionSettleDivideSaveDraft = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/SaveDraft`, data);
};
export const postFlowSaleCommissionSettleDivideSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleDivideModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleDivideModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/SubmitAudit`, data);
};
export const postFlowSaleCommissionSettleDivideGetSaleCommissionSettleAccountToPage = <
	RNU extends (keyof AT_SaleCommissionSettleAccountPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleAccountQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleAccountQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleAccountPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleAccountToPage`,
		data
	);
};
export const getFlowSaleCommissionSettleDivideGetSaleCommissionSettleDivideById = <RNU extends (keyof AT_SaleCommissionSettleDivideViewModel)[] = []>(
	divideId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleCommissionSettleDivideViewModel, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettleDivideById?${divideId ? 'divideId=' + divideId : ''}`
	);
};
export const postFlowSaleCommissionSettleDivideGetSaleCommissionSettlePayPrintInfo = <
	RNU extends (keyof AT_SaleCommissionSettlePayPrintModel)[] = [],
>(
	data: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettlePayPrintModel, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleCommissionSettlePayPrintInfo`,
		data
	);
};
export const postFlowSaleCommissionSettleDivideMergeSaleCommissionSettlePayPrintInfo = <
	RNU extends (keyof AT_SaleCommissionSettlePayPrintModel)[] = [],
>(
	data: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettlePayPrintModel, RNU>>>(
		`/flow/SaleCommissionSettleDivide/MergeSaleCommissionSettlePayPrintInfo`,
		data
	);
};
export const postFlowSaleCommissionSettleDivideGetSaleResetPricePayPrintInfo = <RNU extends (keyof AT_SaleResetPricePayPrintModel)[] = []>(
	id: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleResetPricePayPrintModel, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetSaleResetPricePayPrintInfo?${id ? 'id=' + id : ''}`
	);
};
export const getFlowSaleCommissionSettleDivideGetAccountPayRecords = <RNU extends (keyof AT_SaleCommissionSettleAccountPayRecordModel)[] = []>(
	id: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleCommissionSettleAccountPayRecordModel, RNU>[]>>(
		`/flow/SaleCommissionSettleDivide/GetAccountPayRecords?${id ? 'id=' + id : ''}`
	);
};
export const postFlowDistributeSaleCommissionModalRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/DistributeSaleCommissionModal/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowSaleCommissionSettleDivideSearchDivideStatus = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(`/flow/SaleCommissionSettleDivide/SearchDivideStatus`);
};
export const getFlowSaleCommissionSettleDivideNoNeedAllocate = (flowId: any) => {
	return axios.get<ResponseData<any>>(`/flow/SaleCommissionSettleDivide/NoNeedAllocate?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowSaleCommissionSettleDivideGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleCommissionSettleDivide/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleCommissionSettleDivideGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleCommissionSettleDivide/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleCommissionSettleInvalidGetSaleCommissionSettleInvalidByFlowId = <
	RNU extends (keyof AT_FlowModelSaleCommissionSettleInvalidViewModelTuple)[] = [],
>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleCommissionSettleInvalidViewModelTuple, RNU>>>(
		`/flow/SaleCommissionSettleInvalid/GetSaleCommissionSettleInvalidByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleCommissionSettleInvalidGetSaleCommissionSettleInvalidToPage = <
	RNU extends (keyof AT_SaleCommissionSettleInvalidPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleCommissionSettleInvalidQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleCommissionSettleInvalidQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleCommissionSettleInvalidPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleCommissionSettleInvalid/GetSaleCommissionSettleInvalidToPage`,
		data
	);
};
export const postFlowSaleCommissionSettleInvalidDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/DynamicSubmitAudit`, data);
};
export const postFlowSaleCommissionSettleInvalidPendingAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/PendingAudit`, data);
};
export const postFlowSaleCommissionSettleInvalidRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/RejectAudit`, data);
};
export const postFlowSaleCommissionSettleInvalidDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/DynamicRejectAudit`, data);
};
export const postFlowSaleCommissionSettleInvalidResetAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/ResetAudit`, data);
};
export const postFlowSaleCommissionSettleInvalidSaveDraft = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/SaveDraft`, data);
};
export const postFlowSaleCommissionSettleInvalidSubmitAudit = <NUDATA extends (keyof AT_FlowSaleCommissionSettleInvalidModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleCommissionSettleInvalidModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleCommissionSettleInvalid/SubmitAudit`, data);
};
export const getFlowSaleCommissionSettleInvalidGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleCommissionSettleInvalid/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleCommissionSettleInvalidGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleCommissionSettleInvalid/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postSaleContractAddSaleContract = <NUDATA extends (keyof AT_SaleContractEditModel)[] = []>(
	data: U_I_NoNull<AT_SaleContractEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/AddSaleContract`, data);
};
export const postSaleContractSignSaleContract = <NUDATA extends (keyof AT_SaleContractEditModel)[] = []>(
	saleContractId: any,
	data: U_I_NoNull<AT_SaleContractEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/SignSaleContract?${saleContractId ? 'saleContractId=' + saleContractId : ''}`, data);
};
export const postSaleContractSendSaleContract = <NUDATA extends (keyof AT_SendSaleContractModel)[] = []>(
	data: U_I_NoNull<AT_SendSaleContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/SendSaleContract`, data);
};
export const postSaleContractArchivevSaleContract = <NUDATA extends (keyof AT_ArchivevSaleContractModel)[] = []>(
	data: U_I_NoNull<AT_ArchivevSaleContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/ArchivevSaleContract`, data);
};
export const postSaleContractRejectSaleContract = <NUDATA extends (keyof AT_RejectSaleContractModel)[] = []>(
	data: U_I_NoNull<AT_RejectSaleContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/RejectSaleContract`, data);
};
export const postSaleContractInvalidSaleContract = <NUDATA extends (keyof AT_InvalidSaleContractModel)[] = []>(
	data: U_I_NoNull<AT_InvalidSaleContractModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleContract/InvalidSaleContract`, data);
};
export const getSaleContractSearchSaleContractStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/SaleContract/SearchSaleContractStatus`);
};
export const postSaleContractGetSaleContractToPage = <
	RNU extends (keyof AT_SaleContractPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleContractQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleContractQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleContractPageModelIEnumerableInt32Tuple, RNU>>>(`/SaleContract/GetSaleContractToPage`, data);
};
export const getSaleContractGetSaleContractById = <RNU extends (keyof AT_SaleContractViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleContractViewModel, RNU>>>(`/SaleContract/GetSaleContractById?${id ? 'id=' + id : ''}`);
};
export const getSaleContractSearchContractType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/SaleContract/SearchContractType`);
};
export const postSaleInvoiceGetSaleInvoiceToPage = <
	RNU extends (keyof AT_SaleInvoicePageViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleInvoiceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleInvoiceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleInvoicePageViewModelIEnumerableInt32Tuple, RNU>>>(`/SaleInvoice/GetSaleInvoiceToPage`, data);
};
export const postSaleInvoiceGetApplySaleInvoiceToPage = <
	RNU extends (keyof AT_SaleInvoicePageViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleInvoiceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleInvoiceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleInvoicePageViewModelIEnumerableInt32Tuple, RNU>>>(`/SaleInvoice/GetApplySaleInvoiceToPage`, data);
};
export const postSaleInvoiceSaleInvoiceApply = <NUDATA extends (keyof AT_ApplyRequestModel)[] = []>(
	data: U_I_NoNull<AT_ApplyRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleInvoice/SaleInvoiceApply`, data);
};
export const postSaleInvoiceSaleInvoiceSign = <NUDATA extends (keyof AT_SaleInvoiceSignRequestModel)[] = []>(
	data: U_I_NoNull<AT_SaleInvoiceSignRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleInvoice/SaleInvoiceSign`, data);
};
export const postSaleInvoiceSaleInvoiceDeal = <NUDATA extends (keyof AT_SaleInvoiceDealRequestModel)[] = []>(
	data: U_I_NoNull<AT_SaleInvoiceDealRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleInvoice/SaleInvoiceDeal`, data);
};
export const postSaleInvoiceSaleInvoiceMake = <NUDATA extends (keyof AT_ApplyRequestMakeModel)[] = []>(
	data: U_I_NoNull<AT_ApplyRequestMakeModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SaleInvoice/SaleInvoiceMake`, data);
};
export const postSaleInvoicePrintInvoiceApply = (data: any) => {
	return axios.post<ResponseData<any>>(`/SaleInvoice/PrintInvoiceApply`, data);
};
export const getSaleInvoiceSearchDataSource = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/SaleInvoice/SearchDataSource`);
};
export const postFlowSaleOrderGetSaleOrderToPage = <
	RNU extends (keyof AT_SaleOrderPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleOrderQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleOrderQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOrderPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/SaleOrder/GetSaleOrderToPage`, data);
};
export const postFlowSaleOrderGetOrderDetailsProductViews = <
	RNU extends (keyof AT_SaleOrderDetailsProductView)[] = [],
	NUDATA extends (keyof AT_SalePlanChangeModel)[] = [],
>(
	data: U_I_NoNull<AT_SalePlanChangeModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOrderDetailsProductView, RNU>[]>>(`/flow/SaleOrder/GetOrderDetailsProductViews`, data);
};
export const postFlowSaleOrderGetOrderDetailsProductViewsManual = <
	RNU extends (keyof AT_SaleOrderDetailsProductView)[] = [],
	NUDATA extends (keyof AT_SalePlanChangeModel)[] = [],
>(
	data: U_I_NoNull<AT_SalePlanChangeModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOrderDetailsProductView, RNU>[]>>(`/flow/SaleOrder/GetOrderDetailsProductViewsManual`, data);
};
export const getFlowSaleOrderGetSaleOrderByFlowId = <RNU extends (keyof AT_FlowModelSaleOrderViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleOrderViewModelTuple, RNU>>>(
		`/flow/SaleOrder/GetSaleOrderByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSaleOrderCheckCooperationPolicy = <
	RNU extends (keyof AT_CooperationPolicyResultModel)[] = [],
	NUDATA extends (keyof AT_FlowSaleOrderModel)[] = [],
>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationPolicyResultModel, RNU>[]>>(`/flow/SaleOrder/CheckCooperationPolicy`, data);
};
export const postFlowSaleOrderGetStockBatchNos = <
	RNU extends (keyof AT_StockViewModel)[] = [],
	NUDATA extends (keyof AT_StockBatchParamModel)[] = [],
>(
	data: U_I_NoNull<AT_StockBatchParamModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_StockViewModel, RNU>[]>>(`/flow/SaleOrder/GetStockBatchNos`, data);
};
export const getFlowSaleOrderGetStockBatchs = <RNU extends (keyof AT_StockViewModel)[] = []>(
	companyCode: any,
	productCode: any,
	warehouseCode: any,
	batchNo: any,
	saleOrderDetailsId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_StockViewModel, RNU>[]>>(
		`/flow/SaleOrder/GetStockBatchs?${companyCode ? 'companyCode=' + companyCode : ''}&${productCode ? 'productCode=' + productCode : ''}&${
			warehouseCode ? 'warehouseCode=' + warehouseCode : ''
		}&${batchNo ? 'batchNo=' + batchNo : ''}&${saleOrderDetailsId ? 'saleOrderDetailsId=' + saleOrderDetailsId : ''}`
	);
};
export const postFlowSaleOrderGetProductPrices = <
	RNU extends (keyof AT_CooperationPolicyPriceModel)[] = [],
	NUDATA extends (keyof AT_SalePlanChangeParamModel)[] = [],
>(
	data: U_I_NoNull<AT_SalePlanChangeParamModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_CooperationPolicyPriceModel, RNU>>>(`/flow/SaleOrder/GetProductPrices`, data);
};
export const postFlowSaleOrderDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/DynamicSubmitAudit`, data);
};
export const postFlowSaleOrderPendingAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/PendingAudit`, data);
};
export const postFlowSaleOrderRejectAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/RejectAudit`, data);
};
export const postFlowSaleOrderDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/DynamicRejectAudit`, data);
};
export const postFlowSaleOrderResetAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/ResetAudit`, data);
};
export const postFlowSaleOrderSaveDraft = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/SaveDraft`, data);
};
export const postFlowSaleOrderSubmitAudit = <NUDATA extends (keyof AT_FlowSaleOrderModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleOrderModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/SubmitAudit`, data);
};
export const getFlowSaleOrderSearchSaleOrderBackMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SaleOrder/SearchSaleOrderBackMode`);
};
export const getFlowSaleOrderSearchMoneyBackState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SaleOrder/SearchMoneyBackState`);
};
export const getFlowSaleOrderSearchInvoiceType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(`/flow/SaleOrder/SearchInvoiceType`);
};
export const postFlowSaleOrderGetSaleBackPreRecords = <
	RNU extends (keyof AT_SaleBackPreRecordViewModel)[] = [],
	NUDATA extends (keyof AT_SaleBackOrderQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleBackOrderQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleBackPreRecordViewModel, RNU>[]>>(`/flow/SaleOrder/GetSaleBackPreRecords`, data);
};
export const postFlowSaleOrderGetSaleBackPreRecordsByCode = <
	RNU extends (keyof AT_SaleBackPreRecordViewModel)[] = [],
	NUDATA extends (keyof AT_SaleBackOrderQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleBackOrderQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleBackPreRecordViewModel, RNU>[]>>(`/flow/SaleOrder/GetSaleBackPreRecordsByCode`, data);
};
export const getFlowSaleOrderCanTransferSaleOrder = (salePlanCode: any) => {
	return axios.get<ResponseData<any>>(`/flow/SaleOrder/CanTransferSaleOrder?${salePlanCode ? 'salePlanCode=' + salePlanCode : ''}`);
};
export const postFlowSaleOrderConverToHaiDian = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/SaleOrder/ConverToHaiDian?${flowId ? 'flowId=' + flowId : ''}`);
};
export const postFlowSalesPlanTransferOrderModalRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/SalesPlanTransferOrderModal/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const postFlowSalesPlanSingleBusinessRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/SalesPlanSingleBusiness/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const postFlowSaleOrderSaveAscriptionDate = (saleOrderDetailId: any, dateTime: any) => {
	return axios.post<ResponseData<any>>(
		`/flow/SaleOrder/SaveAscriptionDate?${saleOrderDetailId ? 'saleOrderDetailId=' + saleOrderDetailId : ''}&${
			dateTime ? 'dateTime=' + dateTime : ''
		}`
	);
};
export const postFlowSaleOrderGetAvailableContractList = <
	RNU extends (keyof AT_BatchAssignAvailableContractViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AvailableContractRequestModel)[] = [],
>(
	data: U_I_NoNull<AT_AvailableContractRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BatchAssignAvailableContractViewModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleOrder/GetAvailableContractList`,
		data
	);
};
export const postFlowSaleOrderGetOrderDetailsProductViewsBusiness = <
	RNU extends (keyof AT_SaleOrderDetailsProductView)[] = [],
	NUDATA extends (keyof AT_SalePlanChangeModel)[] = [],
>(
	data: U_I_NoNull<AT_SalePlanChangeModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOrderDetailsProductView, RNU>[]>>(`/flow/SaleOrder/GetOrderDetailsProductViewsBusiness`, data);
};
export const getFlowSaleOrderGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleOrder/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleOrderGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleOrder/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getSaleOutStockGetSaleOutStockById = <RNU extends (keyof AT_SaleOutStockViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleOutStockViewModel, RNU>>>(`/SaleOutStock/GetSaleOutStockById?${id ? 'id=' + id : ''}`);
};
export const getSaleOutStockGetSaleOutStockRecordById = <RNU extends (keyof AT_SaleOutStockRecordViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleOutStockRecordViewModel, RNU>>>(`/SaleOutStock/GetSaleOutStockRecordById?${id ? 'id=' + id : ''}`);
};
export const postSaleOutStockSaleOutStock = <NUDATA extends (keyof AT_SaleOutStockModel)[] = []>(data: U_I_NoNull<AT_SaleOutStockModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SaleOutStock/SaleOutStock`, data);
};
export const postSaleOutStockGetSaleOutStockToPage = <
	RNU extends (keyof AT_SaleOutStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleOutStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleOutStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOutStockPageModelIEnumerableInt32Tuple, RNU>>>(`/SaleOutStock/GetSaleOutStockToPage`, data);
};
export const getFlowSalePlanGetBusinessClientList = <RNU extends (keyof AT_BusinessClientSimpleModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BusinessClientSimpleModel, RNU>[]>>(
		`/flow/SalePlan/GetBusinessClientList?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getFlowSalePlanGetReceiveUnitList = <RNU extends (keyof AT_BusinessReceiveUnitSimpleModel)[] = []>(
	companyCode: any,
	searchText: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BusinessReceiveUnitSimpleModel, RNU>[]>>(
		`/flow/SalePlan/GetReceiveUnitList?${companyCode ? 'companyCode=' + companyCode : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getFlowSalePlanGetCooperationProvinceList = <RNU extends (keyof AT_BusinessCooperationProvinceSimpleModel)[] = []>(companyCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BusinessCooperationProvinceSimpleModel, RNU>[]>>(
		`/flow/SalePlan/GetCooperationProvinceList?${companyCode ? 'companyCode=' + companyCode : ''}`
	);
};
export const getFlowSalePlanGetOutStockUnitList = <RNU extends (keyof AT_BusinessOutStockUnitSimpleModel)[] = []>(
	companyCode: any,
	searchText: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BusinessOutStockUnitSimpleModel, RNU>[]>>(
		`/flow/SalePlan/GetOutStockUnitList?${companyCode ? 'companyCode=' + companyCode : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const postFlowSalePlanGetProductList = <
	RNU extends (keyof AT_BusinessProductSimpleModel)[] = [],
	NUDATA extends (keyof AT_BusinessProductQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_BusinessProductQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_BusinessProductSimpleModel, RNU>[]>>(`/flow/SalePlan/GetProductList`, data);
};
export const getFlowSalePlanGetSalePlanByFlowId = <RNU extends (keyof AT_FlowModelSalePlanViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSalePlanViewModelTuple, RNU>>>(
		`/flow/SalePlan/GetSalePlanByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSalePlanDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/DynamicSubmitAudit`, data);
};
export const postFlowSalePlanPendingAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/PendingAudit`, data);
};
export const postFlowSalePlanRejectAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/RejectAudit`, data);
};
export const postFlowSalePlanDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(
	data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/DynamicRejectAudit`, data);
};
export const postFlowSalePlanResetAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/ResetAudit`, data);
};
export const postFlowSalePlanSaveDraft = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/SaveDraft`, data);
};
export const postFlowSalePlanSubmitAudit = <NUDATA extends (keyof AT_FlowSalePlanModel)[] = []>(data: U_I_NoNull<AT_FlowSalePlanModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/flow/SalePlan/SubmitAudit`, data);
};
export const getFlowSalePlanGetBusinessSalePlanTurnOrder = <RNU extends (keyof AT_BusinessSalePlanTurnOrderModel)[] = []>(salePlanCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_BusinessSalePlanTurnOrderModel, RNU>>>(
		`/flow/SalePlan/GetBusinessSalePlanTurnOrder?${salePlanCode ? 'salePlanCode=' + salePlanCode : ''}`
	);
};
export const getFlowSalePlanGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SalePlan/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSalePlanGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SalePlan/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getSalePlanGetSalePlanAttachments = <RNU extends (keyof AT_AttachmentModel)[] = []>(salePlanCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_AttachmentModel, RNU>[]>>(
		`/SalePlan/GetSalePlanAttachments?${salePlanCode ? 'salePlanCode=' + salePlanCode : ''}`
	);
};
export const postSalePlanGetSalePlanDetailsToPage = <
	RNU extends (keyof AT_SalePlanDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalePlanQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SalePlanQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SalePlanDetailsPageModelIEnumerableInt32Tuple, RNU>>>(`/SalePlan/GetSalePlanDetailsToPage`, data);
};
export const getSalePlanInvalidSalePlan = (salePlanCode: any) => {
	return axios.get<ResponseData<any>>(`/SalePlan/InvalidSalePlan?${salePlanCode ? 'salePlanCode=' + salePlanCode : ''}`);
};
export const getSalePlanSearchSalePlanState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/SalePlan/SearchSalePlanState`);
};
export const getSalePlanGetSalePlanTotalMoneyByCode = (salePlanCode: any) => {
	return axios.get<ResponseData<any>>(`/SalePlan/GetSalePlanTotalMoneyByCode?${salePlanCode ? 'salePlanCode=' + salePlanCode : ''}`);
};
export const postSalePlanUploadSalePlanAttachment = <NUDATA extends (keyof AT_SalePlanAttachmentRequestModel)[] = []>(
	data: U_I_NoNull<AT_SalePlanAttachmentRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SalePlan/UploadSalePlanAttachment`, data);
};
export const getSalePlanGetSalePlanDetails = <RNU extends (keyof AT_SalePlanDetailsViewModel)[] = []>(detailsId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SalePlanDetailsViewModel, RNU>>>(
		`/SalePlan/GetSalePlanDetails?${detailsId ? 'detailsId=' + detailsId : ''}`
	);
};
export const postSaleReportGetSaleReportToPage = <
	RNU extends (keyof AT_SaleReportPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleReportQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleReportQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleReportPageModelIEnumerableInt32Tuple, RNU>>>(`/SaleReport/GetSaleReportToPage`, data);
};
export const postSaleReportGetBusinessSaleReportToPage = <
	RNU extends (keyof AT_SaleReportDeliveryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleReportDeliveryQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleReportDeliveryQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleReportDeliveryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/SaleReport/GetBusinessSaleReportToPage`,
		data
	);
};
export const getSaleReportGetSaleReportYears = () => {
	return axios.get<ResponseData<any>>(`/SaleReport/GetSaleReportYears`);
};
export const getFlowSaleResetPriceGetSaleResetPriceByFlowId = <RNU extends (keyof AT_FlowModelSaleOrderCodeViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSaleOrderCodeViewModelTuple, RNU>>>(
		`/flow/SaleResetPrice/GetSaleResetPriceByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleResetPriceGetSaleResetPricePayRecords = <RNU extends (keyof AT_PayRecordModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_PayRecordModel, RNU>[]>>(`/flow/SaleResetPrice/GetSaleResetPricePayRecords?${id ? 'id=' + id : ''}`);
};
export const getFlowSaleResetPriceGetSaleResetPriceById = <RNU extends (keyof AT_SaleOrderCodeViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleOrderCodeViewModel, RNU>>>(`/flow/SaleResetPrice/GetSaleResetPriceById?${id ? 'id=' + id : ''}`);
};
export const postFlowSaleResetPriceGetSaleResetPriceToPage = <
	RNU extends (keyof AT_SaleResetPricePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleResetPriceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleResetPriceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleResetPricePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SaleResetPrice/GetSaleResetPriceToPage`,
		data
	);
};
export const getFlowSaleResetPriceSearchSaleOrderCode = <RNU extends (keyof AT_SaleOrderCodeViewModel)[] = []>(saleCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SaleOrderCodeViewModel, RNU>[]>>(
		`/flow/SaleResetPrice/SearchSaleOrderCode?${saleCode ? 'saleCode=' + saleCode : ''}`
	);
};
export const postFlowSaleResetPriceDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/DynamicSubmitAudit`, data);
};
export const postFlowSaleResetPricePendingAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/PendingAudit`, data);
};
export const postFlowSaleResetPriceRejectAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/RejectAudit`, data);
};
export const postFlowSaleResetPriceDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/DynamicRejectAudit`, data);
};
export const postFlowSaleResetPriceResetAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/ResetAudit`, data);
};
export const postFlowSaleResetPriceSaveDraft = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/SaveDraft`, data);
};
export const postFlowSaleResetPriceSubmitAudit = <NUDATA extends (keyof AT_FlowSaleResetPriceModel)[] = []>(
	data: U_I_NoNull<AT_FlowSaleResetPriceModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SaleResetPrice/SubmitAudit`, data);
};
export const postFlowSaleResetPriceGetProductCommissionPrices = (saleOrderDetailsId: any, invoicePrice: any) => {
	return axios.post<ResponseData<any>>(
		`/flow/SaleResetPrice/GetProductCommissionPrices?${saleOrderDetailsId ? 'saleOrderDetailsId=' + saleOrderDetailsId : ''}&${
			invoicePrice ? 'invoicePrice=' + invoicePrice : ''
		}`
	);
};
export const postFlowMakeSalesAdjustmentInvoiceRemoveAudit = (flowId: any) => {
	return axios.post<ResponseData<any>>(`/flow/MakeSalesAdjustmentInvoice/RemoveAudit?${flowId ? 'flowId=' + flowId : ''}`);
};
export const getFlowSaleResetPriceGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SaleResetPrice/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSaleResetPriceGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SaleResetPrice/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSpecialApprovalGetSpecialApprovalToPage = <
	RNU extends (keyof AT_SpecialApprovalPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SpecialApprovalQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SpecialApprovalQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SpecialApprovalPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/SpecialApproval/GetSpecialApprovalToPage`,
		data
	);
};
export const getFlowSpecialApprovalGetSpecialApprovalByFlowId = <RNU extends (keyof AT_FlowModelSpecialApprovalViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSpecialApprovalViewModelTuple, RNU>>>(
		`/flow/SpecialApproval/GetSpecialApprovalByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowSpecialApprovalSubmitAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/SubmitAudit`, data);
};
export const postFlowSpecialApprovalDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/DynamicSubmitAudit`, data);
};
export const postFlowSpecialApprovalRejectAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/RejectAudit`, data);
};
export const postFlowSpecialApprovalDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/DynamicRejectAudit`, data);
};
export const postFlowSpecialApprovalPendingAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/PendingAudit`, data);
};
export const postFlowSpecialApprovalResetAudit = <NUDATA extends (keyof AT_FlowSpecialApprovalModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialApprovalModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialApproval/ResetAudit`, data);
};
export const getFlowSpecialApprovalGetSpecialApprovalType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SpecialApproval/GetSpecialApprovalType`);
};
export const getFlowSpecialApprovalGetAuditOpinion = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/flow/SpecialApproval/GetAuditOpinion`);
};
export const postFlowSpecialApprovalSpecialApprovalCopyToUsers = <NUDATA extends (keyof AT_SpecialApprovalShareModel)[] = []>(
	specialApprovalId: any,
	data: U_I_NoNull<AT_SpecialApprovalShareModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(
		`/flow/SpecialApproval/SpecialApprovalCopyToUsers?${specialApprovalId ? 'specialApprovalId=' + specialApprovalId : ''}`,
		data
	);
};
export const getFlowSpecialApprovalGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SpecialApproval/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSpecialApprovalGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SpecialApproval/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSpecialCostGetSpecialCostByFlowId = <RNU extends (keyof AT_FlowModelSpecialCostViewModelTuple)[] = []>(flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSpecialCostViewModelTuple, RNU>>>(
		`/flow/SpecialCost/GetSpecialCostByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSpecialCostSpecialCostModel = <RNU extends (keyof AT_SpecialCostModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SpecialCostModel, RNU>>>(`/flow/SpecialCost/SpecialCostModel`);
};
export const postFlowSpecialCostDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/DynamicSubmitAudit`, data);
};
export const postFlowSpecialCostPendingAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/PendingAudit`, data);
};
export const postFlowSpecialCostRejectAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/RejectAudit`, data);
};
export const postFlowSpecialCostDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/DynamicRejectAudit`, data);
};
export const postFlowSpecialCostResetAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/ResetAudit`, data);
};
export const postFlowSpecialCostSaveDraft = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/SaveDraft`, data);
};
export const postFlowSpecialCostSubmitAudit = <NUDATA extends (keyof AT_FlowSpecialCostModel)[] = []>(
	data: U_I_NoNull<AT_FlowSpecialCostModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/SpecialCost/SubmitAudit`, data);
};
export const postFlowSpecialCostGetSpecialCostToPage = <
	RNU extends (keyof AT_SpecialCostPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SpecialCostQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SpecialCostQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SpecialCostPageModelIEnumerableInt32Tuple, RNU>>>(`/flow/SpecialCost/GetSpecialCostToPage`, data);
};
export const getFlowSpecialCostGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/SpecialCost/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowSpecialCostGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/SpecialCost/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postStockGetStockDetailsToPage = <
	RNU extends (keyof AT_StockDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StockDetailsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_StockDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_StockDetailsPageModelIEnumerableInt32Tuple, RNU>>>(`/Stock/GetStockDetailsToPage`, data);
};
export const postStockSaveStockNotes = <NUDATA extends (keyof AT_StockNoteRequestModel)[] = []>(
	data: U_I_NoNull<AT_StockNoteRequestModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/Stock/SaveStockNotes`, data);
};
export const postStockExportStockDetailsList = <NUDATA extends (keyof AT_StockDetailsQueryModel)[] = []>(
	data: U_I_NoNull<AT_StockDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Stock/ExportStockDetailsList`, data);
};
export const postStockGetStockCollectToPage = <
	RNU extends (keyof AT_StockCollectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StockCollectQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_StockCollectQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_StockCollectPageModelIEnumerableInt32Tuple, RNU>>>(`/Stock/GetStockCollectToPage`, data);
};
export const getStockGetStockNumberByProductCode = (productCode: any) => {
	return axios.get<ResponseData<any>>(`/Stock/GetStockNumberByProductCode?${productCode ? 'productCode=' + productCode : ''}`);
};
export const postStockGetInStockToPage = <
	RNU extends (keyof AT_InStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_InStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_InStockPageModelIEnumerableInt32Tuple, RNU>>>(`/Stock/GetInStockToPage`, data);
};
export const postStockGetOutStockToPage = <
	RNU extends (keyof AT_OutStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_OutStockQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_OutStockQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_OutStockPageModelIEnumerableInt32Tuple, RNU>>>(`/Stock/GetOutStockToPage`, data);
};
export const postStockGetSaleOrderPrintToPage = <
	RNU extends (keyof AT_SaleOrderPrintPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SaleOrderPrintQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SaleOrderPrintQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SaleOrderPrintPageModelIEnumerableInt32Tuple, RNU>>>(`/Stock/GetSaleOrderPrintToPage`, data);
};
export const postStockGetLogisticPrintModels = <RNU extends (keyof AT_LogisticPrintModel)[] = []>(data: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_LogisticPrintModel, RNU>>>(`/Stock/GetLogisticPrintModels`, data);
};
export const postStockPrintLogisticsInfo = (data: any) => {
	return axios.post<ResponseData<any>>(`/Stock/PrintLogisticsInfo`, data);
};
export const postStockAddStockReserve = <NUDATA extends (keyof AT_StockReserveModel)[] = []>(data: U_I_NoNull<AT_StockReserveModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Stock/AddStockReserve`, data);
};
export const postStockBatchAddStockReserve = <NUDATA extends (keyof AT_StockReserveModel)[] = []>(
	data: U_I_NoNull<AT_StockReserveModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/Stock/BatchAddStockReserve`, data);
};
export const getStockGetStockReservesByStockId = <RNU extends (keyof AT_StockReserveFreeRecordViewModel)[] = []>(stockId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_StockReserveFreeRecordViewModel, RNU>[]>>(
		`/Stock/GetStockReservesByStockId?${stockId ? 'stockId=' + stockId : ''}`
	);
};
export const postStockGetStockReservesByStockIds = <RNU extends (keyof AT_StockReserveFreeRecordViewModel)[] = []>(data: any) => {
	return axios.post<ResponseData<U_I_NoNull<AT_StockReserveFreeRecordViewModel, RNU>[]>>(`/Stock/GetStockReservesByStockIds`, data);
};
export const postStockAddStockReserveFreeRecords = <NUDATA extends (keyof AT_StockReserveFreeRecordModel)[] = []>(
	data: U_I_NoNull<AT_StockReserveFreeRecordModel, NUDATA>[]
) => {
	return axios.post<ResponseData<any>>(`/Stock/AddStockReserveFreeRecords`, data);
};
export const postStockExportOutStockList = <NUDATA extends (keyof AT_OutStockQueryModel)[] = []>(data: U_I_NoNull<AT_OutStockQueryModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Stock/ExportOutStockList`, data);
};
export const postSysComboBoxAddComboBox = <NUDATA extends (keyof AT_ComboBoxModel)[] = []>(data: U_I_NoNull<AT_ComboBoxModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SysComboBox/AddComboBox`, data);
};
export const postSysComboBoxRemoveComboBox = (comboBoxId: any) => {
	return axios.post<ResponseData<any>>(`/SysComboBox/RemoveComboBox?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`);
};
export const postSysComboBoxUpdateComboBox = <NUDATA extends (keyof AT_ComboBoxModel)[] = []>(
	comboBoxId: any,
	data: U_I_NoNull<AT_ComboBoxModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SysComboBox/UpdateComboBox?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`, data);
};
export const getSysComboBoxGetComboBoxById = <RNU extends (keyof AT_ComboBoxViewModel)[] = []>(comboBoxId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ComboBoxViewModel, RNU>>>(
		`/SysComboBox/GetComboBoxById?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`
	);
};
export const postSysComboBoxGetComboBoxToPage = <
	RNU extends (keyof AT_ComboBoxPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ComboBoxQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ComboBoxQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ComboBoxPageModelIEnumerableInt32Tuple, RNU>>>(`/SysComboBox/GetComboBoxToPage`, data);
};
export const postSysConfigMergeSysConfig = <NUDATA extends (keyof AT_SysConfigModel)[] = []>(data: U_I_NoNull<AT_SysConfigModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SysConfig/MergeSysConfig`, data);
};
export const getSysConfigGeSysConfig = <RNU extends (keyof AT_SysConfigViewModel)[] = [], NU0 extends (keyof AT_PageType)[] = []>(
	pageType: U_I_NoNull<AT_PageType, NU0>,
	pageKey: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysConfigViewModel, RNU>>>(
		`/SysConfig/GeSysConfig?${pageType ? 'pageType=' + pageType : ''}&${pageKey ? 'pageKey=' + pageKey : ''}`
	);
};
export const postSysRouteAddPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = [], NUDATA extends (keyof AT_SysPageRouteModel)[] = []>(
	data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(`/SysRoute/AddPageRoute`, data);
};
export const postSysRouteUpdatePageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = [], NUDATA extends (keyof AT_SysPageRouteModel)[] = []>(
	pageRouteId: any,
	data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(
		`/SysRoute/UpdatePageRoute?${pageRouteId ? 'pageRouteId=' + pageRouteId : ''}`,
		data
	);
};
export const postSysRouteRemovePageRoute = (pageRoutId: any) => {
	return axios.post<ResponseData<any>>(`/SysRoute/RemovePageRoute?${pageRoutId ? 'pageRoutId=' + pageRoutId : ''}`);
};
export const getSysRouteGetSysPageRouteById = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(pageRoutId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(
		`/SysRoute/GetSysPageRouteById?${pageRoutId ? 'pageRoutId=' + pageRoutId : ''}`
	);
};
export const postSysRouteAddPopupRoute = <RNU extends (keyof AT_SysPopupRouteViewModel)[] = [], NUDATA extends (keyof AT_SysPopupRouteModel)[] = []>(
	data: U_I_NoNull<AT_SysPopupRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(`/SysRoute/AddPopupRoute`, data);
};
export const postSysRouteUpdatePopupRoute = <
	RNU extends (keyof AT_SysPopupRouteViewModel)[] = [],
	NUDATA extends (keyof AT_SysPopupRouteModel)[] = [],
>(
	popupRoutId: any,
	data: U_I_NoNull<AT_SysPopupRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(
		`/SysRoute/UpdatePopupRoute?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}`,
		data
	);
};
export const getSysRouteGetSysPageRouteExcludeList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(routId: any, searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/SysRoute/GetSysPageRouteExcludeList?${routId ? 'routId=' + routId : ''}&${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const postSysRouteRemovePopupRoute = (popupRoutId: any) => {
	return axios.post<ResponseData<any>>(`/SysRoute/RemovePopupRoute?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}`);
};
export const getSysRouteGetSysPopupRouteById = <RNU extends (keyof AT_SysPopupRouteViewModel)[] = []>(popupRoutId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(
		`/SysRoute/GetSysPopupRouteById?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}`
	);
};
export const postSysRouteGetAllSysPopup = <
	RNU extends (keyof AT_SysPopupRouteViewModel)[] = [],
	NUDATA extends (keyof AT_SysPopupRouteQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_SysPopupRouteQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>[]>>(`/SysRoute/GetAllSysPopup`, data);
};
export const getSysRouteGetAllSysPage = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(
		`/SysRoute/GetAllSysPage?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const getTerminalEnrollGeterminalEnrollById = <RNU extends (keyof AT_TerminalEnrollViewModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TerminalEnrollViewModel, RNU>>>(`/TerminalEnroll/GeterminalEnrollById?${id ? 'id=' + id : ''}`);
};
export const postTerminalEnrollAddTerminalEnroll = <NUDATA extends (keyof AT_TerminalEnrollModel)[] = []>(
	data: U_I_NoNull<AT_TerminalEnrollModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/TerminalEnroll/AddTerminalEnroll`, data);
};
export const postTerminalEnrollUpdateTerminalEnroll = <NUDATA extends (keyof AT_TerminalEnrollModel)[] = []>(
	id: any,
	data: U_I_NoNull<AT_TerminalEnrollModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/TerminalEnroll/UpdateTerminalEnroll?${id ? 'id=' + id : ''}`, data);
};
export const postTerminalEnrollDeleteTerminalEnroll = (id: any) => {
	return axios.post<ResponseData<any>>(`/TerminalEnroll/DeleteTerminalEnroll?${id ? 'id=' + id : ''}`);
};
export const postTerminalEnrollGetTerminalEnrollToPage = <
	RNU extends (keyof AT_TerminalEnrollPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TerminalEnrollQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TerminalEnrollQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TerminalEnrollPageModelIEnumerableInt32Tuple, RNU>>>(`/TerminalEnroll/GetTerminalEnrollToPage`, data);
};
export const postTradeImportTradeInfo = (data: any) => {
	return axios.post<ResponseData<any>>(`/Trade/ImportTradeInfo`, data);
};
export const postTradeGetTradeFocusToPage = <
	RNU extends (keyof AT_TradeFocusPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeFocusQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeFocusQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeFocusPageModelIEnumerableInt32Tuple, RNU>>>(`/Trade/GetTradeFocusToPage`, data);
};
export const postTradeGetTradeFocusDetailsToPage = <
	RNU extends (keyof AT_TradeFocusDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeFocusDetailsQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeFocusDetailsQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeFocusDetailsPageModelIEnumerableInt32Tuple, RNU>>>(`/Trade/GetTradeFocusDetailsToPage`, data);
};
export const postTradeGetTradeCityToPage = <
	RNU extends (keyof AT_TradeCityPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeCityQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeCityQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeCityPageModelIEnumerableInt32Tuple, RNU>>>(`/Trade/GetTradeCityToPage`, data);
};
export const postTradeGetTradeBookHRHNToPage = <
	RNU extends (keyof AT_TradeBookHRHNPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeBookHRHNQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeBookHRHNQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeBookHRHNPageModelIEnumerableInt32Tuple, RNU>>>(`/Trade/GetTradeBookHRHNToPage`, data);
};
export const postTradeGetTradeBookGKToPage = <
	RNU extends (keyof AT_TradeBookGKPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeBookGKQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeBookGKQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeBookGKPageModelIEnumerableInt32Tuple, RNU>>>(`/Trade/GetTradeBookGKToPage`, data);
};
export const postTradeSaveTradeBookGK = <NUDATA extends (keyof AT_TradeBookGKModel)[] = []>(data: U_I_NoNull<AT_TradeBookGKModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Trade/SaveTradeBookGK`, data);
};
export const postTradeSaveTradeBookHRHN = <NUDATA extends (keyof AT_TradeBookHRHNModel)[] = []>(data: U_I_NoNull<AT_TradeBookHRHNModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Trade/SaveTradeBookHRHN`, data);
};
export const postTradeSaveTradeCity = <NUDATA extends (keyof AT_TradeCityModel)[] = []>(data: U_I_NoNull<AT_TradeCityModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Trade/SaveTradeCity`, data);
};
export const postTradeSaveTradeFocus = <NUDATA extends (keyof AT_TradeFocusModel)[] = []>(data: U_I_NoNull<AT_TradeFocusModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/Trade/SaveTradeFocus`, data);
};
export const postTradeSaveTradeFocusDetails = <NUDATA extends (keyof AT_TradeFocusDetailsModel)[] = []>(
	data: U_I_NoNull<AT_TradeFocusDetailsModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/SaveTradeFocusDetails`, data);
};
export const postTradeDeleteTradeFocus = <NUDATA extends (keyof AT_DelTradeRequestModel)[] = []>(
	data: U_I_NoNull<AT_DelTradeRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/DeleteTradeFocus`, data);
};
export const postTradeDeleteTradeFocusDetails = <NUDATA extends (keyof AT_DelTradeRequestModel)[] = []>(
	data: U_I_NoNull<AT_DelTradeRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/DeleteTradeFocusDetails`, data);
};
export const postTradeDeleteTradeCity = <NUDATA extends (keyof AT_DelTradeRequestModel)[] = []>(
	data: U_I_NoNull<AT_DelTradeRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/DeleteTradeCity`, data);
};
export const postTradeDeleteTradeBookHRHN = <NUDATA extends (keyof AT_DelTradeRequestModel)[] = []>(
	data: U_I_NoNull<AT_DelTradeRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/DeleteTradeBookHRHN`, data);
};
export const postTradeDeleteTradeBookGK = <NUDATA extends (keyof AT_DelTradeRequestModel)[] = []>(
	data: U_I_NoNull<AT_DelTradeRequestModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/Trade/DeleteTradeBookGK`, data);
};
export const postTradeWholeGetTradeWholeToPage = <
	RNU extends (keyof AT_TradeWholePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TradeWholeQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TradeWholeQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TradeWholePageModelIEnumerableInt32Tuple, RNU>>>(`/TradeWhole/GetTradeWholeToPage`, data);
};
export const getTradeWholeGetTradeWholeById = <RNU extends (keyof AT_TradeWholeViewModel)[] = []>(tradeWholeId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TradeWholeViewModel, RNU>>>(
		`/TradeWhole/GetTradeWholeById?${tradeWholeId ? 'tradeWholeId=' + tradeWholeId : ''}`
	);
};
export const postTradeWholeAddTradeWhole = <NUDATA extends (keyof AT_TradeWholeEditModel)[] = []>(
	data: U_I_NoNull<AT_TradeWholeEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/TradeWhole/AddTradeWhole`, data);
};
export const postTradeWholeSaveTradeWhole = <NUDATA extends (keyof AT_TradeWholeEditModel)[] = []>(
	tradeWholeId: any,
	data: U_I_NoNull<AT_TradeWholeEditModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/TradeWhole/SaveTradeWhole?${tradeWholeId ? 'tradeWholeId=' + tradeWholeId : ''}`, data);
};
export const postTradeWholeDelTradeWhole = (data: any) => {
	return axios.post<ResponseData<any>>(`/TradeWhole/DelTradeWhole`, data);
};
export const postTradeWholeImportTradeWholeInfo = (data: any) => {
	return axios.post<ResponseData<any>>(`/TradeWhole/ImportTradeWholeInfo`, data);
};
export const getFlowTransferDeliveryPriceGetCooperationDeliveryByFlowId = <RNU extends (keyof AT_FlowModelCooperationDeliveryViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCooperationDeliveryViewModelTuple, RNU>>>(
		`/flow/TransferDeliveryPrice/GetCooperationDeliveryByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowTransferDeliveryPriceGetTransferDeliveryPriceById = <RNU extends (keyof AT_TransferDeliveryPriceModel)[] = []>(id: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_TransferDeliveryPriceModel, RNU>>>(
		`/flow/TransferDeliveryPrice/GetTransferDeliveryPriceById?${id ? 'id=' + id : ''}`
	);
};
export const postFlowTransferDeliveryPriceDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/DynamicSubmitAudit`, data);
};
export const postFlowTransferDeliveryPricePendingAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/PendingAudit`, data);
};
export const postFlowTransferDeliveryPriceRejectAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/RejectAudit`, data);
};
export const postFlowTransferDeliveryPriceDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/DynamicRejectAudit`, data);
};
export const postFlowTransferDeliveryPriceResetAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/ResetAudit`, data);
};
export const postFlowTransferDeliveryPriceSaveDraft = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/SaveDraft`, data);
};
export const postFlowTransferDeliveryPriceSubmitAudit = <NUDATA extends (keyof AT_FlowCooperationDeliveryModel)[] = []>(
	data: U_I_NoNull<AT_FlowCooperationDeliveryModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferDeliveryPrice/SubmitAudit`, data);
};
export const postFlowTransferDeliveryPriceGetTransferDeliveryPriceToPage = <
	RNU extends (keyof AT_TransferDeliveryPricePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferDeliveryPriceQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_TransferDeliveryPriceQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_TransferDeliveryPricePageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/TransferDeliveryPrice/GetTransferDeliveryPriceToPage`,
		data
	);
};
export const getFlowTransferDeliveryPriceGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/TransferDeliveryPrice/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowTransferDeliveryPriceGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/TransferDeliveryPrice/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowTransferPowerAttorneyGetPowerAttorneyByFlowId = <RNU extends (keyof AT_FlowModelPowerAttorneyViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPowerAttorneyViewModelTuple, RNU>>>(
		`/flow/TransferPowerAttorney/GetPowerAttorneyByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowTransferPowerAttorneyGetPowerAttorneyToPage = <
	RNU extends (keyof AT_PowerAttorneyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PowerAttorneyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PowerAttorneyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PowerAttorneyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/TransferPowerAttorney/GetPowerAttorneyToPage`,
		data
	);
};
export const postFlowTransferPowerAttorneyGetTransferPowerAttorneyToPage = <
	RNU extends (keyof AT_PowerAttorneyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PowerAttorneyQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_PowerAttorneyQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_PowerAttorneyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/flow/TransferPowerAttorney/GetTransferPowerAttorneyToPage`,
		data
	);
};
export const postFlowTransferPowerAttorneyGetTransferPowerAttorneyAttachmentById = <RNU extends (keyof AT_AttachmentModel)[] = []>(
	TransferPowerAttorneyId: any
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_AttachmentModel, RNU>[]>>(
		`/flow/TransferPowerAttorney/GetTransferPowerAttorneyAttachmentById?${
			TransferPowerAttorneyId ? 'TransferPowerAttorneyId=' + TransferPowerAttorneyId : ''
		}`
	);
};
export const postFlowTransferPowerAttorneyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/DynamicSubmitAudit`, data);
};
export const postFlowTransferPowerAttorneyPendingAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/PendingAudit`, data);
};
export const postFlowTransferPowerAttorneyRejectAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/RejectAudit`, data);
};
export const postFlowTransferPowerAttorneyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/DynamicRejectAudit`, data);
};
export const postFlowTransferPowerAttorneyResetAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/ResetAudit`, data);
};
export const postFlowTransferPowerAttorneySaveDraft = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/SaveDraft`, data);
};
export const postFlowTransferPowerAttorneySubmitAudit = <NUDATA extends (keyof AT_FlowTransferPowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_FlowTransferPowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/SubmitAudit`, data);
};
export const postFlowTransferPowerAttorneyUpdatePowerAttorney = <NUDATA extends (keyof AT_UpdatePowerAttorneyModel)[] = []>(
	data: U_I_NoNull<AT_UpdatePowerAttorneyModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/TransferPowerAttorney/UpdatePowerAttorney`, data);
};
export const getFlowTransferPowerAttorneyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/TransferPowerAttorney/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowTransferPowerAttorneyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/TransferPowerAttorney/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowUnfreezeClientBankGetUnfreezeClientBankByFlowId = <RNU extends (keyof AT_FlowModelUnfreezeClientBankViewModelTuple)[] = []>(
	flowId: any
) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelUnfreezeClientBankViewModelTuple, RNU>>>(
		`/flow/UnfreezeClientBank/GetUnfreezeClientBankByFlowId?${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFlowUnfreezeClientBankDynamicSubmitAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/DynamicSubmitAudit`, data);
};
export const postFlowUnfreezeClientBankPendingAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/PendingAudit`, data);
};
export const postFlowUnfreezeClientBankRejectAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/RejectAudit`, data);
};
export const postFlowUnfreezeClientBankDynamicRejectAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/DynamicRejectAudit`, data);
};
export const postFlowUnfreezeClientBankResetAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/ResetAudit`, data);
};
export const postFlowUnfreezeClientBankSaveDraft = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/SaveDraft`, data);
};
export const postFlowUnfreezeClientBankSubmitAudit = <NUDATA extends (keyof AT_UnfreezeFlowModel)[] = []>(
	data: U_I_NoNull<AT_UnfreezeFlowModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/flow/UnfreezeClientBank/SubmitAudit`, data);
};
export const getFlowUnfreezeClientBankGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/flow/UnfreezeClientBank/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const getFlowUnfreezeClientBankGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/flow/UnfreezeClientBank/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}`
	);
};
export const postFKSMarketingOpenSystem = <NUDATA extends (keyof AT_OpenSystemModel)[] = []>(data: U_I_NoNull<AT_OpenSystemModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/FKS/Marketing/OpenSystem`, data);
};
export declare interface AT_AccessAssayModel {
	/*标题*/
	title: string;
	/*地区：省份*/
	provinceId: number;
	/*备注*/
	notes?: string;
	/*政策原文*/
	originalPoint?: string;
	/*文件类别Ids*/
	accessFileClassIds?: number[];
	/*附件*/
	attachments?: AT_AttachmentModel[];
	/*政策文件库Ids*/
	accessFileIds?: number[];
}

export declare interface AT_AccessAssayPageModel {
	/*Id*/
	id: number;
	/*文件类别*/
	fileClass?: string;
	/*地区：省份*/
	province?: string;
	/*标题*/
	title?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccessAssayPageModelIEnumerableInt32Tuple {
	item1?: AT_AccessAssayPageModel[];
	item2: number;
}

export declare interface AT_AccessAssayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*文件类别*/
	fileClass?: AT_QueryString;
	/*地区：省份*/
	provinceId?: AT_QueryInt;
	/*标题*/
	title?: AT_QueryString;
}

export declare interface AT_AccessAssayViewModel {
	/*标题*/
	title: string;
	/*地区：省份*/
	provinceId: number;
	/*备注*/
	notes?: string;
	/*政策原文*/
	originalPoint?: string;
	/*文件类别Ids*/
	accessFileClassIds?: number[];
	/*附件*/
	attachments?: AT_AttachmentModel[];
	/*政策文件库Ids*/
	accessFileIds?: number[];
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
	/*文件类别集合*/
	accessFileClassList?: AT_AccessFileClassViewModel[];
	/*政策文件库集合*/
	accessFilesListList?: AT_AccessFilesListModel[];
}

export declare interface AT_AccessContactModel {
	/*单位名称*/
	unitName: string;
	/*联系人*/
	contacts?: string;
	/*联系方式*/
	contactWay?: string;
	/*部门/职务*/
	position?: string;
	/*地区：省份*/
	provinceId?: number;
	/*类型*/
	type?: string;
	/*电子邮箱*/
	email?: string;
	/*QQ*/
	qq?: string;
	/*办公地址*/
	officeAddress?: string;
}

export declare interface AT_AccessContactPageModel {
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
	/*类型*/
	type?: string;
	/*单位名称*/
	unitName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*联系人*/
	contacts?: string;
	/*部门/职务*/
	position?: string;
	/*联系方式*/
	contactWay?: string;
	/*电子邮箱*/
	email?: string;
	/*QQ*/
	qq?: string;
}

export declare interface AT_AccessContactPageModelIEnumerableInt32Tuple {
	item1?: AT_AccessContactPageModel[];
	item2: number;
}

export declare interface AT_AccessContactQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*地区：省份*/
	provinceId?: AT_QueryInt;
	/*联系人*/
	contacts?: AT_QueryString;
	/*单位名称*/
	unitName?: AT_QueryString;
	/*类型*/
	type?: AT_QueryString;
	/*办公地址*/
	officeAddress?: AT_QueryString;
}

export declare interface AT_AccessContactViewMdoel {
	/*单位名称*/
	unitName: string;
	/*联系人*/
	contacts?: string;
	/*联系方式*/
	contactWay?: string;
	/*部门/职务*/
	position?: string;
	/*地区：省份*/
	provinceId?: number;
	/*类型*/
	type?: string;
	/*电子邮箱*/
	email?: string;
	/*QQ*/
	qq?: string;
	/*办公地址*/
	officeAddress?: string;
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
}

export declare interface AT_AccessFileClassModel {
	/*文件类别*/
	fileClass: string;
}

export declare interface AT_AccessFileClassViewModel {
	/*文件类别*/
	fileClass: string;
	/*Id*/
	id: number;
}

export declare interface AT_AccessFilesListModel {
	/*Id*/
	id: number;
	/*文件类别*/
	fileClass?: string;
	/*文件名称*/
	fileName?: string;
	/*地区：省份*/
	province?: string;
	/*文号*/
	fileNumber?: string;
	/*网址链接*/
	website?: string;
	/*发文部门*/
	issuingDep?: string;
	/*发文时间*/
	issuingDate?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccessFilesModel {
	/*文件名称*/
	fileName: string;
	/*地区：省份*/
	provinceId: number;
	/*文号*/
	fileNumber?: string;
	/*网址链接*/
	website?: string;
	/*发文部门*/
	issuingDep?: string;
	/*发文时间*/
	issuingDate?: string;
	/*备注*/
	notes?: string;
	/*政策原文*/
	originalText?: string;
	/*文件类别Ids*/
	accessFileClassIds?: number[];
	/*附件*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_AccessFilesPageModel {
	/*Id*/
	id: number;
	/*文件类别*/
	fileClass?: string;
	/*文件名称*/
	fileName?: string;
	/*地区：省份*/
	province?: string;
	/*文号*/
	fileNumber?: string;
	/*网址链接*/
	website?: string;
	/*发文部门*/
	issuingDep?: string;
	/*发文时间*/
	issuingDate?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccessFilesPageModelIEnumerableInt32Tuple {
	item1?: AT_AccessFilesPageModel[];
	item2: number;
}

export declare interface AT_AccessFilesQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*文件类别*/
	fileClass?: AT_QueryString;
	/*文件名称*/
	fileName?: AT_QueryString;
	/*地区：省份*/
	provinceId?: AT_QueryInt;
	/*文号*/
	fileNumber?: AT_QueryString;
	/*发文时间*/
	issuingDate?: AT_QueryDateTime;
}

export declare interface AT_AccessFilesViewModel {
	/*文件名称*/
	fileName: string;
	/*地区：省份*/
	provinceId: number;
	/*文号*/
	fileNumber?: string;
	/*网址链接*/
	website?: string;
	/*发文部门*/
	issuingDep?: string;
	/*发文时间*/
	issuingDate?: string;
	/*备注*/
	notes?: string;
	/*政策原文*/
	originalText?: string;
	/*文件类别Ids*/
	accessFileClassIds?: number[];
	/*附件*/
	attachments?: AT_AttachmentModel[];
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
	/*文件类别集合*/
	accessFileClassList?: AT_AccessFileClassViewModel[];
}

export declare interface AT_AccessWebsiteAccountModel {
	/*Id（还原编辑用，新增不用管）*/
	id: number;
	/*公司名称*/
	companyName: string;
	/*账户名*/
	accountName: string;
	/*密码*/
	password: string;
	/*CA口令*/
	caCommand: string;
}

export declare interface AT_AccessWebsiteModel {
	/*网站名称*/
	webName: string;
	/*网址链接*/
	webUrl: string;
	/*地区：省份*/
	provinceId: number;
	/*网站类型*/
	webType?: string;
	/*主要功能*/
	mainFunc?: string;
	/*备注*/
	notes?: string;
	/*网站链接账号密码*/
	accessWebsiteAccountList?: AT_AccessWebsiteAccountModel[];
}

export declare interface AT_AccessWebsitePageModel {
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
	/*网站类型*/
	webType?: string;
	/*网站名称*/
	webName?: string;
	/*主要功能*/
	mainFunc?: string;
	/*网址链接*/
	webUrl?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_AccessWebsitePageModelIEnumerableInt32Tuple {
	item1?: AT_AccessWebsitePageModel[];
	item2: number;
}

export declare interface AT_AccessWebsiteQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*地区：省份*/
	provinceId?: AT_QueryInt;
	/*网站名称*/
	webName?: AT_QueryString;
}

export declare interface AT_AccessWebsiteViewModel {
	/*网站名称*/
	webName: string;
	/*网址链接*/
	webUrl: string;
	/*地区：省份*/
	provinceId: number;
	/*网站类型*/
	webType?: string;
	/*主要功能*/
	mainFunc?: string;
	/*备注*/
	notes?: string;
	/*网站链接账号密码*/
	accessWebsiteAccountList?: AT_AccessWebsiteAccountModel[];
	/*Id*/
	id: number;
	/*地区：省份*/
	province?: string;
}

export enum AT_AccountInvalidState {
	无效 = 0,
	无效中 = 1,
	有效 = 2,
}

export declare interface AT_AccurateDeliveryAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*点配明细唯一编码*/
	keyCode?: string;
}

export declare interface AT_AccurateDeliveryDetailsViewModel {
	/*点配申请编号*/
	accurateDeliveryDetailsId: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业*/
	manufacturer?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*包装数*/
	packageNumber?: number;
	/*详细包装规格*/
	packageStandard?: string;
	/*省份编号*/
	provinceId?: number;
	/*省份*/
	province?: string;
	/*医院类型：基层；县级以上；不区分*/
	hospitalType?: number;
	/*医院类型：基层；县级以上；不区分

1 = 基层

2 = 县级以上

3 = 不区分*/
	hospitalTypeText: AT_HospitalType;
	/*地区*/
	cityId?: number;
	/*配送企业*/
	deliveryName?: string;
	/*备注*/
	remark?: string;
	/*地区名称*/
	city?: string;
	/*唯一编码*/
	keyCode?: string;
	/*主账号：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*终端编号*/
	drugTerminalIds?: number[];
	/*终端名称*/
	terminalName?: string;
}

export declare interface AT_AccurateDeliveryPageModel {
	/*Id*/
	id: number;
	/*点配备注*/
	accurateNote?: string;
	/*点配时间：点配确认/未确认时间*/
	accurateTime?: string;
	/*制单时间*/
	addTime: string;
	/*制单人*/
	addUser?: string;
	/*采购员*/
	buyer?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*收货单位*/
	delivery?: string;
	/*省份*/
	province?: string;
	/*地区*/
	city?: string;
	/*客户名称*/
	clientName?: string;
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*无效原因*/
	invalidReason?: string;
	/*状态：已申请，已收到，已点配，未通过

1 = 已申请

3 = 已点配

4 = 未通过*/
	accurateState: AT_AccurateDeliveryState;
	/*状态：已申请，已收到，已点配，未通过

1 = 已申请

3 = 已点配

4 = 未通过*/
	readonly accurateStateText: AT_AccurateDeliveryState;
	/*有效状态：有效，无效*/
	validState?: number;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_AccurateDeliveryPageModelIEnumerableInt32Tuple {
	item1?: AT_AccurateDeliveryPageModel[];
	item2: number;
}

export declare interface AT_AccurateDeliveryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*Id集合*/
	ids?: AT_QueryList;
	/*状态：已申请，已收到，已点配，未通过*/
	accurateState?: AT_QueryInt;
	/*有效状态：有效，无效*/
	validState?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*收货单位*/
	delivery?: AT_QueryString;
	/*省份*/
	province?: AT_QueryString;
	/*省份Id*/
	provinceId?: AT_QueryInt;
	/*地区*/
	city?: AT_QueryString;
	/*地区Id*/
	cityId?: AT_QueryInt;
	/*采购员*/
	buyer?: AT_QueryString;
	/*制单人*/
	addUser?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_AccurateDeliveryRequestDetailsViewModel {
	/*点配详细Id*/
	id?: number;
	/*城市*/
	cityId?: number;
	/*城市*/
	city?: string;
	/*终端名称*/
	terminalName?: string;
	/*配送企业名称*/
	deliveryName?: string;
	/*备注*/
	remark?: string;
	/*唯一编码*/
	keyCode?: string;
	/*终端*/
	drugTerminalIds?: number[];
}

export declare interface AT_AccurateDeliveryRequestViewModel {
	/*点配申请编号*/
	transferAccurateDeliveryId?: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业*/
	manufacturer?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*包装数*/
	packageNumber?: number;
	/*详细包装规格*/
	packageStandard?: string;
	/*省份编号*/
	provinceId?: number;
	/*省份*/
	province?: string;
	/*医院类型：基层；县级以上；不区分*/
	hospitalType?: number;
	/*医院类型：基层；县级以上；不区分

1 = 基层

2 = 县级以上

3 = 不区分*/
	hospitalTypeText: AT_HospitalType;
	/*唯一编码*/
	keyCode?: string;
	/*主账号：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*点配申请详情*/
	details?: AT_AccurateDeliveryRequestDetailsViewModel[];
}

export enum AT_AccurateDeliveryState {
	已申请 = 1,
	已点配 = 3,
	未通过 = 4,
}

export enum AT_ActionType {
	草稿 = 0,
	提交 = 1,
	审核 = 2,
}

export declare interface AT_ApisGoodsPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*制剂特点*/
	features?: string;
	/*件装*/
	wholePackage?: number;
	/*中包装*/
	mediumPackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*是否原料药：否，是*/
	isApis?: number;
	/*质量层次*/
	qualityLevel?: number;
	/*质量层次*/
	qualityLevelText?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*批准文号*/
	serial?: string;
	/*国家医保代码*/
	medicareCode?: string;
	/*采购员*/
	buyerName?: string;
	/*转采购状态*/
	isPurchase?: number;
	readonly isPurchaseDisPlay?: string;
}

export declare interface AT_ApisGoodsPageModelIEnumerableInt32Tuple {
	item1?: AT_ApisGoodsPageModel[];
	item2: number;
}

export declare interface AT_ApisGoodsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	drugName?: AT_QueryString;
	/*注册剂型*/
	dosageForm?: AT_QueryString;
	/*注册规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*质量层次*/
	qualityLevel?: AT_QueryInt;
	/*执行标准*/
	executiveStandard?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*药品类型*/
	drugType?: AT_QueryInt;
	/*药品类型*/
	applyType?: AT_QueryInt;
	/*采购员*/
	buyerName?: AT_QueryString;
	/*流程状态*/
	flowState?: AT_QueryList;
}

export enum AT_ApplicationStatusType {
	未邮寄 = 0,
	部分邮寄 = 1,
	已邮寄 = 2,
}

export declare interface AT_ApplyRequestMakeModel {
	/*所选Id*/
	ids?: number[];
}

export declare interface AT_ApplyRequestModel {
	/*发票打印模型*/
	printList?: AT_ApplyRequestPrintModel[];
}

export declare interface AT_ApplyRequestPrintModel {
	/*发票Id*/
	id: number;
	/*备注*/
	note?: string;
}

export declare interface AT_ArchivevSaleContractModel {
	/*合同编码*/
	contractCodes?: string[];
	/*存档位置*/
	savePlace?: string;
}

export declare interface AT_AttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
}

export enum AT_AuditObjRela {
	One = 0,
	Or = 1,
	And = 2,
}

export declare interface AT_AuthorizationInfoModel {
	/*权限项值(指定的值，可为空)*/
	authorizationItemValues?: string[];
	/*权限类型（1，数据，2按钮）

1 = 数据

2 = 按钮

3 = 导出*/
	authorizationType: AT_AuthorizationType;
	/*权限key*/
	authoriztionKey: number;
	/*权限名*/
	authoriztionName: string;
	/*是否是数据通用权限（0否，1是）*/
	isCommonAuthorization: number;
	/*权限关联弹窗*/
	popupKey?: string;
	/*页面路由id*/
	sysRouteId: number;
}

export declare interface AT_AuthorizationItemModel {
	authoriztionKey: number;
	authoriztionName?: string;
	authorizationItemValues?: AT_KeyValue[];
}

export enum AT_AuthorizationType {
	数据 = 1,
	按钮 = 2,
	导出 = 3,
}

export declare interface AT_AuthorizationViewModel {
	/*特殊权限项（前后端自定义权限项）*/
	authorizationItems?: AT_RouteAuthorizationItemModel[];
	/*通用数据权限*/
	commonAuthorizationItems?: AT_AuthorizationItemModel[];
	/*页面路由id*/
	routeId: number;
	/*路由唯一key*/
	routeKey?: string;
	/*路由Title*/
	title?: string;
}

export declare interface AT_AvailableContractRequestModel {
	/*供应商编码*/
	supplierCode?: string;
	/*配送公司编码*/
	deliveryCode?: string;
	/*合同价格*/
	contractPrice?: number;
	/*产品编码*/
	productCode?: string;
	/*客户编码*/
	clientCode?: string;
	/*销售计划单明细ID*/
	salePlanDetailsId: number;
	/*当前页面分配的合同明细*/
	currentAvailableContracts?: AT_CurrentAvailableContractRequestModel[];
}

export declare interface AT_AvailableContractViewModel {
	/*合同编号*/
	contractNumber?: string;
	/*合同编码*/
	contractCode?: string;
	/*合同明细ID*/
	saleContractDetailsId?: number;
	/*合同明细编码*/
	saleContractDetailsCode?: string;
	/*合同开始时间*/
	startDate?: string;
	readonly startDateText?: string;
	/*合同结束时间*/
	endDate?: string;
	readonly endDateText?: string;
	/*合同价格*/
	contractPrice?: number;
	/*合同总数量*/
	contractAmount?: number;
	/*可用合同数量*/
	availableContractAmount?: number;
	/*本次合同数量*/
	currentContractAmount?: number;
	/*签订时间*/
	signDate?: string;
	/*合同状态

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	contractStatus: AT_SaleContractStatus;
	/*合同状态

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	readonly contractStatusText: AT_SaleContractStatus;
}

export declare interface AT_AvailableLogisticModel {
	/*自增ID*/
	id: number;
	/*物流公司名称*/
	name?: string;
	/*法人*/
	legalPerson?: string;
	/*注册地*/
	address?: string;
	/*注册资金*/
	capital?: string;
}

export enum AT_BackMode {
	现款现货 = 1,
	现款现货批次发货 = 2,
	预付款发货 = 3,
	授信发货 = 6,
}

export enum AT_BackUnitType {
	公司 = 1,
	客户 = 2,
	内部 = 3,
	员工 = 4,
	外部 = 5,
	账户信息 = 6,
}

export declare interface AT_BankBookModel {
	/*银行名称*/
	bankName: string;
	/*银行类型：现金，银行*/
	bankType: number;
	/*隶属部门：财务、综合、采购、客服、商务*/
	belongDep?: number;
	/*企业编码*/
	companyCode: string;
	/*是否属于业务：否，是*/
	isBusiness?: number;
	/*是否入银行账：否，是*/
	isIncome?: number;
	/*是否是服务公司：否，是*/
	isService?: number;
	/*备注*/
	note?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_BankBookPageModel {
	/*账套编码：2053*/
	bankBookCode?: string;
	/*银行名称*/
	bankName?: string;
	/*银行类型*/
	bankTypeName?: string;
	/*隶属部门*/
	belongDep?: string;
	/*企业名称*/
	companyName?: string;
	/*Id*/
	id: number;
	/*是否属于业务：否，是*/
	isBusiness?: number;
	/*是否入银行账：否，是*/
	isIncome?: number;
	/*是否是服务公司：否，是*/
	isService?: number;
	/*备注*/
	note?: string;
	/*排序*/
	sort?: number;
	/*更新人*/
	updUser?: string;
}

export declare interface AT_BankBookPageModelIEnumerableInt32Tuple {
	item1?: AT_BankBookPageModel[];
	item2: number;
}

export declare interface AT_BankBookQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业名称*/
	companyName?: AT_QueryString;
	/*银行类型*/
	bankType?: AT_QueryInt;
	/*银行名称*/
	bankName?: AT_QueryString;
	/*隶属部门*/
	belongDep?: AT_QueryInt;
	/*是否属于业务：否，是*/
	isBusiness?: AT_QueryInt;
	/*是否是服务公司：否，是*/
	isService?: AT_QueryInt;
}

export declare interface AT_BankBookSimpleModel {
	/*账套编码：2053*/
	bankBookCode?: string;
	/*银行名称*/
	bankName?: string;
}

export declare interface AT_BankBookViewModel {
	/*银行名称*/
	bankName: string;
	/*银行类型：现金，银行*/
	bankType: number;
	/*隶属部门：财务、综合、采购、客服、商务*/
	belongDep?: number;
	/*企业编码*/
	companyCode: string;
	/*是否属于业务：否，是*/
	isBusiness?: number;
	/*是否入银行账：否，是*/
	isIncome?: number;
	/*是否是服务公司：否，是*/
	isService?: number;
	/*备注*/
	note?: string;
	/*排序*/
	sort?: number;
	/*账套编码：2053*/
	bankBookCode?: string;
	/*银行类型*/
	bankTypeName?: string;
	/*隶属部门名称*/
	belongDepName?: string;
	/*企业名称*/
	companyName?: string;
}

export declare interface AT_BankCardModel {
	/*开户名*/
	accountName: string;
	/*账套编码*/
	bankBookCode: string;
	/*账户*/
	bankCard: string;
	/*开户行*/
	bankName: string;
	/*银行类型：电汇、银行、承兑*/
	bankType?: number;
	/*会计*/
	bookkeeper?: string;
	/*出纳人*/
	cashier?: string;
	/*是否接受保证金：否，是*/
	isEarnest?: number;
	/*管理人*/
	manage: string;
	/*备注*/
	note?: string;
	/*操作人*/
	operate: string;
	/*关联人*/
	relation: string;
	/*排序*/
	sort?: number;
	/*余额上限控制：单位【万】*/
	toplimit?: number;
	/*使用状态：常用、待使用、注册

86 = 常用

87 = 待使用

88 = 注册*/
	useState: AT_BankCardUseState;
	/*使用用途*/
	useTypes?: number[];
}

export declare interface AT_BankCardPageModel {
	/*开户名*/
	accountName?: string;
	/*账户*/
	bankCard?: string;
	/*银行卡编码*/
	bankCardCode?: string;
	/*所属银行(账套)*/
	bankName?: string;
	/*银行类型：电汇、银行、承兑*/
	bankType?: string;
	/*会计*/
	bookkeeper?: string;
	/*出纳人*/
	cashier?: string;
	id: number;
	/*是否接受保证金：否，是*/
	isEarnest?: number;
	/*是否已同步到订单系统：否，是*/
	isSync?: number;
	/*管理人*/
	manage?: string;
	/*备注*/
	note?: string;
	/*开户行*/
	openingBankName?: string;
	/*操作人*/
	operate?: string;
	/*关联人*/
	relation?: string;
	/*排序*/
	sort?: number;
	/*状态：冻结，未冻结

0 = 正常

1 = 冻结*/
	state?: AT_FreezeStatus;
	/*状态：冻结，未冻结

0 = 正常

1 = 冻结*/
	readonly stateText?: AT_FreezeStatus;
	/*使用状态：常用、待使用、注册

86 = 常用

87 = 待使用

88 = 注册*/
	useState: AT_BankCardUseState;
	/*使用状态：常用、待使用、注册

86 = 常用

87 = 待使用

88 = 注册*/
	readonly useStateText: AT_BankCardUseState;
	/*使用用途：内部结算、综合、收上游、付下游、商务结算、过渡、理财、收下游、内包结算、付上游*/
	useType?: string;
}

export declare interface AT_BankCardPageModelIEnumerableInt32Tuple {
	item1?: AT_BankCardPageModel[];
	item2: number;
}

export declare interface AT_BankCardQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*所属银行(账套)*/
	bankName?: AT_QueryString;
	/*银行类型：电汇、银行、承兑*/
	bankType?: AT_QueryInt;
	/*开户行*/
	openingBankName?: AT_QueryString;
	/*开户名*/
	accountName?: AT_QueryString;
	/*账户*/
	bankCard?: AT_QueryString;
	/*使用状态：常用、待使用、注册*/
	useState?: AT_QueryInt;
	/*关联人*/
	relation?: AT_QueryString;
	/*管理人*/
	manage?: AT_QueryString;
	/*操作人*/
	operate?: AT_QueryString;
	/*会计*/
	bookkeeper?: AT_QueryString;
	/*出纳人*/
	cashier?: AT_QueryString;
	/*状态：冻结，未冻结*/
	state?: AT_QueryInt;
	/*是否接受保证金：否，是*/
	isEarnest?: AT_QueryInt;
	/*备注*/
	note?: AT_QueryString;
	/*是否已同步到订单系统：否，是*/
	isSync?: AT_QueryInt;
}

export declare interface AT_BankCardSimpleModel {
	/*银行卡编码：2054*/
	bankCardCode?: string;
	/*开户行/开户名/账户*/
	name?: string;
}

export enum AT_BankCardUseState {
	常用 = 86,
	待使用 = 87,
	注册 = 88,
}

export declare interface AT_BankCardViewModel {
	/*开户名*/
	accountName: string;
	/*账套编码*/
	bankBookCode: string;
	/*账户*/
	bankCard: string;
	/*开户行*/
	bankName: string;
	/*银行类型：电汇、银行、承兑*/
	bankType?: number;
	/*会计*/
	bookkeeper?: string;
	/*出纳人*/
	cashier?: string;
	/*是否接受保证金：否，是*/
	isEarnest?: number;
	/*管理人*/
	manage: string;
	/*备注*/
	note?: string;
	/*操作人*/
	operate: string;
	/*关联人*/
	relation: string;
	/*排序*/
	sort?: number;
	/*余额上限控制：单位【万】*/
	toplimit?: number;
	/*使用状态：常用、待使用、注册

86 = 常用

87 = 待使用

88 = 注册*/
	useState: AT_BankCardUseState;
	/*使用用途*/
	useTypes?: number[];
	/*账套银行名称*/
	bankBookName?: string;
	/*银行卡编码：2054*/
	bankCardCode?: string;
	/*银行类型名称*/
	bankTypeName?: string;
	/*会计名称*/
	bookkeeperName?: string;
	/*出纳人名称*/
	cashierName?: string;
	/*管理人名称*/
	manageName?: string;
	/*操作人名称*/
	operateName?: string;
	/*关联人名称*/
	relationName?: string;
	/*使用状态名称

86 = 常用

87 = 待使用

88 = 注册*/
	readonly useStateName: AT_BankCardUseState;
}

export declare interface AT_BankDaybookListModel {
	/*回款Id或者付款Id*/
	id?: number;
	/*类型：回款，付款*/
	type?: number;
	/*时间*/
	time: string;
	/*点单时间*/
	readonly timeDisplay?: string;
	/*单位名称*/
	supplierName?: string;
	/*客户名称*/
	clientName?: string;
	/*收款账户*/
	backCard?: string;
	/*余额*/
	balance: number;
	/*银行明细*/
	bankDetail?: string;
	/*所属银行*/
	bankName?: string;
	/*核算部门*/
	countDep?: string;
	/*贷方*/
	credit: number;
	/*借方*/
	debtor: number;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType?: AT_OrderType;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	readonly fromTypeText?: AT_OrderType;
	/*制单类型*/
	fromsourceText?: string;
	/*单据编号*/
	fromCode?: string;
	/*制单人*/
	name?: string;
	/*科目*/
	subjectText?: string;
	/*概要*/
	summary?: string;
}

export declare interface AT_BankDaybookQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*开始时间*/
	startTime?: string;
	/*结束时间*/
	endTime?: string;
	/*出库单位*/
	supplierName?: string;
	/*收货单位*/
	deliveryName?: string;
	/*所属银行*/
	bankName?: string;
	/*收款账户*/
	backCard?: string;
	/*制单类型*/
	fromType?: number;
	/*科目*/
	subjectText?: string;
	/*概要*/
	summary?: string;
	/*制单人*/
	name?: string;
	/*单据编号*/
	fromCode?: string;
	/*银行类型*/
	bankType?: number;
}

export declare interface AT_BaseDepartment {
	/*部门编号*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*上一级*/
	parent?: string;
}

export declare interface AT_BasicAccountModel {
	/*自增ID*/
	id?: number;
	/*收款单位*/
	payee?: string;
	/*开户名*/
	openName?: string;
	/*开户行*/
	openBank?: string;
	/*账号*/
	openCard?: string;
	/*联系人*/
	contact?: string;
	/*联系方式*/
	contactWay?: string;
}

export declare interface AT_BasicAccountPageModel {
	/*自增ID*/
	id: number;
	/*基础账户编码：3135*/
	basicAccountCode?: string;
	/*收款单位*/
	payee?: string;
	/*开户名*/
	openName?: string;
	/*开户行*/
	openBank?: string;
	/*账号*/
	openCard?: string;
	/*联系人*/
	contact?: string;
	/*联系方式*/
	contactWay?: string;
}

export declare interface AT_BasicAccountPageModelIEnumerableInt32Tuple {
	item1?: AT_BasicAccountPageModel[];
	item2: number;
}

export declare interface AT_BasicAccountQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*收款单位*/
	payee?: AT_QueryString;
}

export declare interface AT_BasicAccountSimpleModel {
	/*基础账户编码：3135*/
	basicAccountCode?: string;
	/*开户名*/
	openName?: string;
	/*开户行*/
	openBank?: string;
	/*账号*/
	openCard?: string;
	/*开户行/开户名/账户*/
	name?: string;
}

export declare interface AT_BatchAddGoodsNetModel {
	/*产品挂网模型*/
	provinceId?: number[];
	/*产品编码*/
	productCode?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*挂网进度*/
	netSpeed?: number;
	/*最低发货数量*/
	minDeliveryQuantity?: number;
	/*备注*/
	note?: string;
	/*产品挂网ID*/
	networkID?: string;
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
}

export declare interface AT_BatchAssignAvailableContractViewModel {
	/*前端列表唯一标识*/
	uniquelyId?: string;
	/*可用合同分配列表*/
	availableContracts?: AT_AvailableContractViewModel[];
}

export declare interface AT_BatchAssignAvailableContractViewModelIEnumerableInt32Tuple {
	item1?: AT_BatchAssignAvailableContractViewModel[];
	item2: number;
}

export enum AT_BillingMethod {
	计件 = 1,
	计方 = 2,
	计重 = 3,
}

export declare interface AT_BorrowBackRecordModel {
	/*回款明细Id*/
	id: number;
	/*回款时间*/
	backDate?: string;
	/*回款金额*/
	backMoney?: number;
}

export declare interface AT_BorrowPayRecordModel {
	/*付款明细Id*/
	id: number;
	/*付款时间*/
	payDate?: string;
	/*付款金额*/
	payMoney?: number;
}

export declare interface AT_BorrowSettleRecordModel {
	/*还款类型

1 = 还入

-1 = 还出*/
	repaymentType?: AT_CompanyRepaymentType;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*还款人*/
	companyNameOne?: string;
	/*付款银行*/
	bankNameOne?: string;
	/*付款账户*/
	bankCardInfoOne?: string;
	/*收款人*/
	companyNameTwo?: string;
	/*收款银行*/
	bankNameTwo?: string;
	/*收款账户*/
	bankCardInfoTwo?: string;
	/*还款金额*/
	repaymentMoney?: number;
	/*还款日期*/
	repaymentDate?: string;
	/*借款日期*/
	borrowDate?: string;
	/*关联项目*/
	projectName?: string;
	/*公司还款单号*/
	companyRepaymentCode?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_BreedEnrollModel {
	/*企业编码*/
	companyCode: string;
	/*直连产品编码*/
	linkCode: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*拦截方式：拦截、无效、正常

1 = 拦截

2 = 正常

3 = 无效*/
	volleyMethod: AT_BreedEnrollVolleyMethod;
	/*开始时间*/
	startTime: string;
	/*备注*/
	note?: string;
}

export declare interface AT_BreedEnrollPageModel {
	/*Id*/
	id: number;
	/*配送公司*/
	companyName?: string;
	/*直连产品编码*/
	linkCode?: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*拦截方式：拦截、无效、正常

1 = 拦截

2 = 正常

3 = 无效*/
	volleyMethod?: AT_BreedEnrollVolleyMethod;
	/*拦截方式：拦截、无效、正常

1 = 拦截

2 = 正常

3 = 无效*/
	readonly volleyMethodText?: AT_BreedEnrollVolleyMethod;
	/*开始时间*/
	startTime?: string;
	/*备注*/
	note?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_BreedEnrollPageModelIEnumerableInt32Tuple {
	item1?: AT_BreedEnrollPageModel[];
	item2: number;
}

export declare interface AT_BreedEnrollQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*配送公司*/
	companyName?: AT_QueryString;
	/*直连产品编码*/
	linkCode?: AT_QueryString;
	/*商品名称*/
	goodsName?: AT_QueryString;
	/*规格*/
	goodsSpec?: AT_QueryString;
	/*生产厂家*/
	manufacturer?: AT_QueryString;
	/*拦截方式：拦截、无效、正常*/
	volleyMethod?: AT_QueryInt;
	/*开始时间*/
	startTime?: AT_QueryDateTime;
	/*备注*/
	note?: AT_QueryString;
	/*更新人*/
	updUser?: AT_QueryString;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_BreedEnrollViewModel {
	/*企业编码*/
	companyCode: string;
	/*直连产品编码*/
	linkCode: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*拦截方式：拦截、无效、正常

1 = 拦截

2 = 正常

3 = 无效*/
	volleyMethod: AT_BreedEnrollVolleyMethod;
	/*开始时间*/
	startTime: string;
	/*备注*/
	note?: string;
	/*配送公司*/
	companyName?: string;
	/*拦截方式：拦截、无效、正常

1 = 拦截

2 = 正常

3 = 无效*/
	readonly volleyMethodText: AT_BreedEnrollVolleyMethod;
}

export enum AT_BreedEnrollVolleyMethod {
	拦截 = 1,
	正常 = 2,
	无效 = 3,
}

export declare interface AT_BulletinCCModel {
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_BulletinCCViewModel {
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_BulletinEditModel {
	/*公告内容*/
	content: string;
	/*公告内容简视：去掉HTML标签保存前100字符以内*/
	contentAbb: string;
	/*标题*/
	title: string;
	/*公告类型*/
	type: number;
	/*是否全部抄送：否，是*/
	isAllCC: number;
	/*发布位置*/
	bulletinPositions?: AT_BulletinPositionModel[];
	/*抄送产品*/
	bulletinCCs?: AT_BulletinCCModel[];
}

export enum AT_BulletinLocationEnum {
	营销系统 = 1,
	订单系统 = 2,
}

export declare interface AT_BulletinPageModel {
	/*公告内容*/
	contentAbb?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*自增ID*/
	id: number;
	/*流程状态文本*/
	isRelease?: number;
	/*发布位置：订单系统，营销系统*/
	location?: string;
	/*标题*/
	title?: string;
	/*公告类型：通知，货源信息*/
	type?: string;
	/*更新日期*/
	updTime?: string;
	/*制单日期*/
	addTime?: string;
	/*制单日期*/
	readonly addTimeText?: string;
	/*制单人*/
	addUser?: string;
	/*制单人*/
	addUserName?: string;
	/*更新人*/
	updUser?: string;
	/*更新人*/
	updUserName?: string;
}

export declare interface AT_BulletinPageModelIEnumerableInt32Tuple {
	item1?: AT_BulletinPageModel[];
	item2: number;
}

export declare interface AT_BulletinPositionModel {
	/*发布位置

1 = 营销系统

2 = 订单系统*/
	location: AT_BulletinLocationEnum;
}

export declare interface AT_BulletinPublishModel {
	/*公告Id*/
	bulletinId: number;
	/*发布位置*/
	locationIds?: number[];
}

export declare interface AT_BulletinQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*公告类型*/
	type?: AT_QueryInt;
	/*标题*/
	title?: AT_QueryString;
	/*日期*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_BulletinViewModel {
	/*公告内容*/
	content: string;
	/*公告内容简视：去掉HTML标签保存前100字符以内*/
	contentAbb: string;
	/*标题*/
	title: string;
	/*公告类型*/
	type: number;
	/*是否全部抄送：否，是*/
	isAllCC: number;
	/*发布位置*/
	bulletinPositions?: AT_BulletinPositionModel[];
	/*自增ID*/
	id: number;
	/*更新日期*/
	updTime: string;
	/*抄送产品*/
	bulletinCCs?: AT_BulletinCCViewModel[];
}

export declare interface AT_BusinessClientSimpleModel {
	/*客户编码（企业编码）*/
	clientCode?: string;
	/*客户名称（企业名称）*/
	clientName?: string;
}

export enum AT_BusinessCooperationMode {
	区域代理 = 1,
	精细化分销招商 = 2,
	精细化流向招商 = 3,
	商务 = 4,
}

export declare interface AT_BusinessCooperationProvinceSimpleModel {
	/*合作省份Id*/
	provinceId?: number;
	/*合作省份名称*/
	provinceName?: string;
}

export enum AT_BusinessOrderType {
	非商务 = 0,
	商务 = 1,
}

export declare interface AT_BusinessOutStockUnitSimpleModel {
	/*出库单位编码*/
	outStockUnitCode?: string;
	/*出库单位名称*/
	outStockUnitName?: string;
}

export declare interface AT_BusinessProductQueryModel {
	/*客户名称*/
	companyCode?: string;
	/*合作省份Id*/
	provinceId?: number;
	/*出库单位*/
	outStockUnit?: string;
	/*收货单位*/
	receiveUnit?: string;
	/*合作模式*/
	cooperationMode?: number;
}

export declare interface AT_BusinessProductSimpleModel {
	/*主键Id*/
	cooperationDeliveryId?: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*开票价格*/
	invoicePrice?: number;
	/*合作编码*/
	cooperationCode?: string;
}

export declare interface AT_BusinessReceiveUnitSimpleModel {
	/*收货单位编码*/
	receiveUnitCode?: string;
	/*收货单位名称*/
	receiveUnitName?: string;
}

export declare interface AT_BusinessSalePlanDetailsRequestModel {
	/*销售计划明细ID*/
	id?: number;
	/*销售计划单单号*/
	salePlanCode?: string;
	/*产品编码*/
	productCode?: string;
	/*合作编码*/
	cooperationCode?: string;
	/*政策ID*/
	cooperationDeliveryId?: number;
	/*件装*/
	wholePackage?: number;
	/*订单数量*/
	orderAmount?: number;
	/*开票价*/
	openFare?: number;
	/*订单金额*/
	orderMoney?: number;
	/*合同明细列表*/
	contractRecords?: AT_SaleContractRecordRequestModel[];
}

export declare interface AT_BusinessSalePlanRequestModel {
	/*销售计划单编码：2065*/
	salePlanCode?: string;
	/*合作模式*/
	cooperationMode?: number;
	/*主账号：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*合作省份*/
	provinceId?: number;
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*企业收货信息通用编码*/
	comCode?: string;
	/*企业收货信息*/
	receiptInfo?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*回款方式*/
	backMode?: number;
	/*回款银行*/
	backBook?: string;
	/*回款账户*/
	backCard?: string;
	/*回款日期*/
	backDate?: string;
	/*制单金额*/
	totalMoney?: number;
	/*备注*/
	note?: string;
	/*产品明细*/
	businessSalePlanDetails?: AT_BusinessSalePlanDetailsRequestModel[];
	/*附件*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_BusinessSalePlanTurnOrderModel {
	/*id*/
	id?: number;
	/*销售计划编码*/
	salePlanCode?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*收货信息*/
	comCode?: string;
	/*收货信息文本*/
	receiptInfo?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位名称*/
	supplierName?: string;
	/*回款方式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode: AT_BackMode;
	/*回款银行*/
	backBook?: string;
	/*回款账户*/
	backCard?: string;
	/*回款日期*/
	backDate?: string;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*附件*/
	saleOrderAttachments?: AT_AttachmentModel[];
}

export enum AT_CalculateModeEnum {
	无 = 0,
	销售费用占比 = 1,
	结算价 = 2,
	销售费用占比_不含配送费 = 3,
}

export declare interface AT_CalculateRealityFeeMode {
	/*费用标准Id*/
	tollId: number;
	/*销售出库Id*/
	saleOutStockId: number;
	/*理论物流费用*/
	theoryFee: number;
	/*实际物流费用*/
	realityFee: number;
}

export declare interface AT_CalculateRealityFeeQueryMode {
	/*实际物流总费用*/
	realityFeeTotal: number;
	/*计费方式

1 = 计件

2 = 计方

3 = 计重*/
	feeWay: AT_BillingMethod;
	/*理论物流费用列表*/
	theoryFees?: AT_CalculateTheoryFeeMode[];
}

export declare interface AT_CalculateTheoryFeeMode {
	/*费用标准Id*/
	tollId: number;
	/*销售出库Id*/
	saleOutStockId: number;
	/*理论物流费用*/
	theoryFee: number;
	/*件数*/
	packageNumber?: number;
	/*体积或者重量*/
	volumeOrWeight?: number;
}

export declare interface AT_CalculateTheoryFeeQueryMode {
	/*计费方式

1 = 计件

2 = 计方

3 = 计重*/
	feeWay: AT_BillingMethod;
	/*目的地城市*/
	destCityId: number;
	/*销售出库Id列表*/
	saleOutStockIds?: number[];
}

export declare interface AT_ClientAccountModel {
	/*是否启用：否，是*/
	isEnable: number;
	/*登录账号*/
	logName?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_ClientBankAuditPageModel {
	/*流程ID*/
	flowId?: number;
	/*开户名*/
	accountName?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*备案账户编码：2045*/
	bankCode?: string;
	/*开户行：来源订单系统；备案账户主表 拼接 开户银行+开户支行*/
	bankName?: string;
	/*开户行：开户支行*/
	bankBranch?: string;
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户编码名称*/
	clientName?: string;
	/*自增ID*/
	id: number;
	/*是否冻结：否，是*/
	isFreeze?: number;
	/*是否冻结申请*/
	isFreezeApply?: number;
	/*更新时间*/
	updTime?: string;
	/*更新时间*/
	readonly updTimeDisPlay?: string;
	/*更新时间*/
	readonly addTimeDisPlay?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_ClientBankAuditPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientBankAuditPageModel[];
	item2: number;
}

export declare interface AT_ClientBankAuditQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*账户编码*/
	bankCode?: AT_QueryString;
	/*开户银行*/
	bankName?: AT_QueryString;
	/*开户名*/
	accountName?: AT_QueryString;
	/*账户状态*/
	isFreeze?: AT_QueryInt;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_ClientBankModel {
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*开户名*/
	accountName?: string;
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_AttachmentModel[];
	/*备案账户编码：2045*/
	bankCode?: string;
	/*开户银行*/
	bankName?: string;
	/*开户行*/
	bankBranch?: string;
	/*委托书附件列表*/
	commissionAttachments?: AT_AttachmentModel[];
	/*冻结原因*/
	freezeReason?: string;
	/*身份证附件列表*/
	idCardAttachments?: AT_AttachmentModel[];
	/*是否冻结：否，是

0 = 正常

1 = 冻结*/
	isFreeze?: AT_FreezeStatus;
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_AttachmentModel[];
}

export declare interface AT_ClientBankPactStockPageModel {
	/*Id*/
	id?: number;
	/*备案账户编码*/
	bankCode?: string;
	/*客户姓名*/
	clientName?: string;
	/*合作省份Id*/
	provinceId?: number;
	/*合作省份名称*/
	provinceName?: string;
	/*状态

0 = 正常

1 = 冻结*/
	isFreeze: AT_FreezeStatus;
	/*状态

0 = 正常

1 = 冻结*/
	readonly isFreezeText: AT_FreezeStatus;
	/*开户名*/
	accountName?: string;
	/*开户行*/
	bankName?: string;
	/*账号*/
	bankCard?: string;
	/*实际控制人*/
	controllerName?: string;
	/*协议库存*/
	pactStock?: number;
}

export declare interface AT_ClientBankPactStockPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientBankPactStockPageModel[];
	item2: number;
}

export declare interface AT_ClientBankPactStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*客户姓名*/
	clientName?: AT_QueryString;
	/*合作省份Id*/
	provinceId?: AT_QueryList;
	/*状态*/
	isFreeze?: AT_QueryList;
	/*开户名*/
	accountName?: AT_QueryString;
}

export declare interface AT_ClientBankPactStockRequestModel {
	/*备案账户编码*/
	bankCode?: string;
	/*协议库存*/
	pactStock?: number;
}

export enum AT_ClientBankRecordType {
	解冻 = 0,
	冻结 = 1,
	新增 = 2,
	编辑 = 3,
}

export declare interface AT_ClientBankRecordViewModel {
	/*记录表Id*/
	id?: number;
	/*类型

0 = 解冻

1 = 冻结

2 = 新增

3 = 编辑*/
	type?: AT_ClientBankRecordType;
	/*类型

0 = 解冻

1 = 冻结

2 = 新增

3 = 编辑*/
	readonly typeText?: AT_ClientBankRecordType;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*制单时间*/
	addTime?: string;
	/*制单时间*/
	readonly addTimeText?: string;
	/*审核时间（审核完成的时间）*/
	finishTime?: string;
	/*审核时间（审核完成的时间）*/
	readonly finishTimeText?: string;
}

export declare interface AT_ClientBankSimpleModel {
	/*账户：银行卡号*/
	bankCard?: string;
	/*备案账户编码：2045*/
	bankCode?: string;
	/*开户行：来源订单系统；备案账户主表 拼接 开户银行+开户支行*/
	bankName?: string;
	/*开户行/开户名/账户*/
	name?: string;
}

export enum AT_ClientBankState {
	正常 = 0,
	冻结 = 1,
	解冻中 = 2,
}

export declare interface AT_ClientBankSummaryPageModel {
	/*ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*执行控制人*/
	teamPerson?: string;
	/*客户编号*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controller?: string;
	/*实际控制人*/
	controllerName?: string;
	/*意向代理省份*/
	provinceId?: number;
	/*意向代理省份*/
	provinceName?: string;
	/*状态

0 = 正常

1 = 冻结*/
	isFreeze: AT_FreezeStatus;
	/*状态

0 = 正常

1 = 冻结*/
	readonly isFreezeText: AT_FreezeStatus;
	/*开户名*/
	accountName?: string;
	/*开户行*/
	bankName?: string;
	/*账户*/
	bankCard?: string;
	/*备案账户编码*/
	bankCode?: string;
	/*月度限额*/
	monthNorm?: number;
	/*年度限额*/
	yearNorm?: number;
	/*总限额*/
	allNorm?: number;
	/*已付金额*/
	amountPaid?: number;
}

export declare interface AT_ClientBankSummaryPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientBankSummaryPageModel[];
	item2: number;
}

export declare interface AT_ClientBankSummaryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*执行控制人*/
	teamPerson?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controller?: AT_QueryString;
	/*意向代理省份*/
	provinceId?: AT_QueryInt;
	/*状态*/
	isFreeze?: AT_QueryInt;
	/*开户名*/
	accountName?: AT_QueryString;
	searchText?: AT_QueryGiven;
}

export declare interface AT_ClientBankSummaryRequestModel {
	/*备案账户编码*/
	bankCode?: string;
	/*流程Id*/
	flowId?: number;
	/*月度限额*/
	monthNorm?: number;
	/*年度限额*/
	yearNorm?: number;
	/*总限额*/
	allNorm?: number;
}

export declare interface AT_ClientBankViewModel {
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*开户名*/
	accountName?: string;
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_AttachmentModel[];
	/*备案账户编码：2045*/
	bankCode?: string;
	/*开户银行*/
	bankName?: string;
	/*开户行*/
	bankBranch?: string;
	/*委托书附件列表*/
	commissionAttachments?: AT_AttachmentModel[];
	/*冻结原因*/
	freezeReason?: string;
	/*身份证附件列表*/
	idCardAttachments?: AT_AttachmentModel[];
	/*是否冻结：否，是

0 = 正常

1 = 冻结*/
	isFreeze?: AT_FreezeStatus;
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_AttachmentModel[];
	/*自增ID*/
	id?: number;
	/*客户编码*/
	clientCode?: string;
	/*主账户：客户名称*/
	clientName?: string;
	/*备案账户状态 正常；冻结；解冻中

0 = 正常

1 = 冻结

2 = 解冻中*/
	clientBankState: AT_ClientBankState;
	/*备案账户状态 正常；冻结；解冻中

0 = 正常

1 = 冻结

2 = 解冻中*/
	readonly clientBankStateText: AT_ClientBankState;
}

export declare interface AT_ClientContactList {
	/*收件地址*/
	address?: string;
	/*收件人*/
	addressee?: string;
	/*客户联系人编码*/
	comCode?: string;
	/*手机*/
	mobile?: string;
}

export declare interface AT_ClientContactModel {
	/*收件地址*/
	address?: string;
	/*收件人*/
	addressee?: string;
	/*客户联系人编码*/
	comCode?: string;
	/*手机*/
	mobile?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_ClientControllerViewModel {
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*代理商*/
	teamPerson?: string;
	/*代理省份Id*/
	provinceId?: number;
	/*代理省份名称*/
	provinceName?: string;
	/*合作模式*/
	category?: number;
	/*合作模式名称*/
	categoryName?: string;
	/*医药公司名称*/
	companyName?: string;
	/*实际控制人*/
	controller?: string;
}

export declare interface AT_ClientCooperationViewModel {
	/*流程ID*/
	flowId: number;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeName: AT_BusinessCooperationMode;
	/*合作省份*/
	provinceName?: string;
	/*是否带量*/
	isBring: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
}

export declare interface AT_ClientDeliveryAccountViewModel {
	/*主账户：客户编码*/
	clientCode?: string;
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*配送公司：企业名称*/
	deliveryName?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*供应商：企业名称*/
	suppName?: string;
	/*合作省份*/
	proxyProvinceId?: string;
	/*合作省份名称*/
	proxyProvinceName?: string;
	/*所属省份*/
	provinceId?: string;
	/*所属省份名称*/
	provinceName?: string;
	/*所属区域*/
	cityId?: string;
	/*所属区域名称*/
	cityName?: string;
	/*注册地址*/
	registerAddress?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*是否从订单系统同步来的数据（1：是，0：否）*/
	isTransfer: number;
	/*收货信息*/
	companyReceipts?: AT_TransferCompanyReceiptModel[];
	/*开票信息*/
	companyInvoices?: AT_TransferCompanyInvoiceModel[];
	/*基本账户信息*/
	companyBanks?: AT_TransferCompanyBankModel[];
}

export declare interface AT_ClientDeliveryModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*申请时间*/
	applyTime?: string;
	/*是否转单申请（区别营销系统新增和订单系统转单）*/
	isTransfer: number;
	/*备注*/
	note?: string;
}

export declare interface AT_ClientDeliveryPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*主账户：客户编码*/
	clientCode?: string;
	/*主账户：客户名称*/
	clientName?: string;
	/*收货单位编码*/
	deliveryCode?: string;
	/*收货单位名称*/
	deliveryName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位名称*/
	suppName?: string;
	/*出库单位（标化）*/
	readonly supplierName?: string;
	/*合作省份编号*/
	coopProvinceId?: string;
	/*合作省份*/
	coopProvinceName?: string;
	/*所属省份编号*/
	provinceId?: string;
	/*所属区域编号*/
	cityId?: string;
	/*所属省份*/
	provinceName?: string;
	/*所属区域*/
	cityName?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*注册地址*/
	registerAddress?: string;
	/*申请时间*/
	applyTime?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_ClientDeliveryPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientDeliveryPageModel[];
	item2: number;
}

export declare interface AT_ClientDeliveryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请时间*/
	applyTime?: AT_QueryDateTime;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*客户编码*/
	clientCode?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*出库单位*/
	suppName?: AT_QueryString;
	/*出库单位（标化）*/
	supplierName?: AT_QueryString;
	/*所属省份Id*/
	provinceId?: AT_QueryInt;
	/*所属区域Id*/
	cityId?: AT_QueryInt;
	/*合作省份Id*/
	coopProvinceId?: AT_QueryInt;
	/*注册地址*/
	registerAddress?: AT_QueryString;
	/*统一社会信用代码*/
	creditCode?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_ClientDeliveryViewModel {
	/*流程id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*收货单位*/
	deliveryName?: string;
	/*出库单位*/
	supplierName?: string;
	/*申请时间*/
	applyTime: string;
}

export declare interface AT_ClientIntentionViewModel {
	/*主键Id*/
	id: number;
	/*产品编码：招商产品ID*/
	productCode?: string;
	/*省份*/
	provinceId: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*代理区域*/
	provinceName?: string;
	/*公司名称*/
	companyName?: string;
	/*愿意缴纳保证金额*/
	margin?: number;
	/*预计年度完成量*/
	completion?: number;
	/*完成量单位：支，盒，袋*/
	completionUnit?: string;
	/*首批提货数量*/
	pickupVolume?: number;
	/*首批提货数量单位*/
	pickupVolumeUnit?: string;
	/*其他描述*/
	otherDescription?: string;
	/*备注*/
	note?: string;
	/*代理意向书附件*/
	intentionAttachments?: AT_AttachmentModel[];
}

export declare interface AT_ClientLabelRequestModel {
	/*自增ID*/
	id?: number;
	/*客户联系人信息通用编码*/
	comCode?: string;
	/*标签*/
	label?: string;
}

export declare interface AT_ClientLabelViewModel {
	/*自增ID*/
	id?: number;
	/*客户联系人信息通用编码*/
	comCode?: string;
	/*标签*/
	label?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
	/*添加时间*/
	readonly addTimeDisPlay?: string;
}

export declare interface AT_ClientLiaisonModel {
	/*通用编码*/
	comCode?: string;
	/*主账户：客户编码*/
	clientCode?: string;
	/*职务：下拉框维护*/
	position?: number;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*微信*/
	webchat?: string;
	/*QQ*/
	qq?: string;
	/*联系地址*/
	contactAdd?: string;
}

export declare interface AT_ClientLiaisonPageModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*职务*/
	position?: number;
	/*职务名称*/
	positionText?: string;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*性别：男，女*/
	readonly sexText?: string;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*QQ*/
	qq?: string;
	/*客户标签*/
	clientLabel?: string;
	/*电子邮箱*/
	email?: string;
	/*联系地址*/
	contactAdd?: string;
	/*分管品种*/
	inCharge?: string;
	/*备注*/
	note?: string;
	/*实际控制人*/
	controller?: string;
	/*代理商*/
	teamPerson?: string;
	/*通用编码*/
	comCode?: string;
	/*添加人*/
	addUser?: string;
	/*添加时间*/
	addTime?: string;
	/*添加时间*/
	readonly addTimeDisPlay?: string;
}

export declare interface AT_ClientLiaisonPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientLiaisonPageModel[];
	item2: number;
}

export declare interface AT_ClientLiaisonQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	name?: AT_QueryString;
	/*性别：男，女*/
	sex?: AT_QueryInt;
	/*手机*/
	mobile?: AT_QueryString;
	/*分管品种*/
	inCharge?: AT_QueryString;
	/*实际控制人*/
	controller?: AT_QueryString;
	/*代理商*/
	teamPerson?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*客户标签*/
	clientLabel?: AT_QueryString;
}

export declare interface AT_ClientLiaisonRequestModel {
	/*主账户：客户编码*/
	clientCode?: string;
	/*通用编码：2061*/
	comCode?: string;
	/*职务：下拉框维护*/
	position?: number;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*电子邮箱*/
	email?: string;
	/*联系地址*/
	contactAdd?: string;
	/*分管品种*/
	inCharge?: string;
	/*备注*/
	note?: string;
	/*实际控制人*/
	controller?: string;
	/*QQ*/
	qq?: string;
	/*客户标签列表*/
	clientLabels?: AT_ClientLabelRequestModel[];
}

export declare interface AT_ClientLiaisonViewModel {
	/*通用编码*/
	comCode?: string;
	/*主账户：客户编码*/
	clientCode?: string;
	/*职务：下拉框维护*/
	position?: number;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*微信*/
	webchat?: string;
	/*QQ*/
	qq?: string;
	/*联系地址*/
	contactAdd?: string;
	/*自增ID*/
	id: number;
	/*职务*/
	positionText?: string;
	/*分管品种*/
	inCharge?: string;
	/*备注*/
	note?: string;
	/*实际控制人*/
	controller?: string;
	/*代理商*/
	teamPerson?: string;
	/*合作类别*/
	category?: number;
	/*合作类别*/
	categoryText?: string;
	/*代理省份*/
	provinceId?: number;
	/*代理省份*/
	provinceName?: string;
	/*医药公司*/
	companyName?: string;
	/*电子邮箱*/
	email?: string;
	/*客户标签列表*/
	clientLabels?: AT_ClientLabelViewModel[];
}

export declare interface AT_ClientModel {
	/*合作类别：16*/
	category?: number;
	/*城市*/
	cityId?: number;
	/*订单账户*/
	clientAccounts?: AT_ClientAccountModel[];
	/*客户备案账户*/
	clientBanks?: AT_ClientBankModel[];
	/*客户收件信息*/
	clientContacts?: AT_ClientContactModel[];
	/*客户联系人*/
	clientLiaisons?: AT_ClientLiaisonModel[];
	/*意向代理省份*/
	clientProxyProvince?: number;
	/*医药公司名称*/
	companyName?: string;
	/*实际控制人：客户编码*/
	controller?: string;
	/*核算部门*/
	department?: string;
	/*代理意向书*/
	intention?: AT_IntentionModel;
	/*意向代理*/
	intentions?: AT_IntentionModel[];
	/*是否实际控制人：否，是*/
	isController?: number;
	/*主营业务*/
	mainBusiness?: number[];
	/*手机号码*/
	mobile?: string;
	/*客户姓名*/
	name?: string;
	/*实际控制人*/
	controllerName?: string;
	/*所属职务*/
	post?: number;
	/*属性类别：18*/
	property?: number;
	/*省份*/
	provinceId?: number;
	/*注册时间*/
	regTime?: string;
	/*客户合作规模:17*/
	scale?: number;
	/*是否转单*/
	isTurnOrder: boolean;
	/*转单Id*/
	transferId?: number;
	/*团队信息*/
	teamInfo?: AT_TeamInfoModel;
	/*客户团队信息*/
	clientTeam?: AT_ClientTeamRequestModel;
	/*客户团队建议配送*/
	clientTeamDeliveries?: AT_ClientTeamDeliveryRequestModel[];
	/*客户团队政府事务*/
	clientTeamGovernments?: AT_ClientTeamGovernmentRequestModel[];
	/*客户团队组织架构*/
	clientTeamOrganizes?: AT_ClientTeamOrganizeRequestModel[];
	/*客户团队客户服务*/
	clientTeamServices?: AT_ClientTeamServiceRequestModel[];
	/*客户团队历史推广*/
	clientTeamSpreads?: AT_ClientTeamSpreadRequestModel[];
}

export declare interface AT_ClientPageModel {
	/*合作类别：注册、合作*/
	categoryName?: string;
	/*城市文本*/
	cityName?: string;
	/*账户名*/
	clientAccount?: string;
	/*客户编码*/
	clientCode?: string;
	/*医药公司名称*/
	companyName?: string;
	/*实际控制人*/
	controller?: string;
	/*实际控制人*/
	controllerName?: string;
	/*主营业务*/
	mainBusinessName?: string;
	/*是否实际控制人：否，是*/
	isController?: number;
	/*手机号码*/
	mobile?: string;
	/*客户姓名*/
	name?: string;
	/*所属职务文本*/
	postName?: string;
	/*属性类别*/
	propertyName?: string;
	/*省份文本*/
	provinceName?: string;
	/*意向代理省份*/
	proxyProvinceId?: number;
	/*意向代理省份文本*/
	proxyProvinceName?: string;
	/*注册时间*/
	regTime?: string;
	/*合作规模*/
	scaleName?: string;
	/*客户注册状态

0 = 未注册

1 = 已注册*/
	state: AT_ClientStateEnum;
	/*订单系统实际控制人*/
	orderSystemController?: string;
	/*修改时间*/
	modifyTime?: string;
	/*修改时间*/
	readonly modifyTimeDisPaly?: string;
	/*修改人*/
	modifyUserName?: string;
	/*合作省份编号*/
	cooperateProvinceId?: string;
	/*合作省份名称*/
	cooperateProvinceName?: string;
}

export declare interface AT_ClientPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientPageModel[];
	item2: number;
}

export declare interface AT_ClientProViewModel {
	/*合作省份*/
	provinceName?: string;
	/*合作Id*/
	provinceId?: string;
	/*注册通用名*/
	drugName?: string;
	/*注册规格*/
	regStandard?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*中标价*/
	minPreparationPrice?: number;
	/*产品编码*/
	productCode?: string;
	/*是否原料药*/
	isApis: number;
}

export enum AT_ClientProductFlowtoDataType {
	订单系统 = 1,
	直连数据 = 2,
	营销系统 = 3,
}

export declare interface AT_ClientProductFlowtoPageModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*主账户：客户名称*/
	clientName?: string;
	/*产品编码：来自可采清单*/
	productCode?: string;
	/*通用名：Excel*/
	excelProductName?: string;
	/*详细包装规格：Excel*/
	excelPackageStandard?: string;
	/*生产企业：Excel*/
	excelManufacturer?: string;
	/*合作省份*/
	provinceName?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*配送公司*/
	deliveryName?: string;
	/*终端名称*/
	terminalName?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount?: number;
	/*销售时间*/
	saleTime?: string;
	/*销售时间*/
	readonly saleTimeDisPlay?: string;
	/*流向确认状态

0 = 未确认

1 = 确认有效

2 = 确认无效*/
	isAffirm?: AT_IsAffirmState;
	/*流向确认状态

0 = 未确认

1 = 确认有效

2 = 确认无效*/
	readonly isAffirmText?: AT_IsAffirmState;
	/*上传时间*/
	addTime?: string;
	/*上传时间*/
	readonly addTimeDisPlay?: string;
	/*数据来源

1 = 订单系统

2 = 直连数据

3 = 营销系统*/
	dataType: AT_ClientProductFlowtoDataType;
	/*数据来源

1 = 订单系统

2 = 直连数据

3 = 营销系统*/
	readonly dataTypeText: AT_ClientProductFlowtoDataType;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_ClientProductFlowtoPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientProductFlowtoPageModel[];
	item2: number;
}

export declare interface AT_ClientProductFlowtoQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*客户名称*/
	clientName?: AT_QueryString;
	/*系统注册通用名*/
	excelProductName?: AT_QueryString;
	/*系统详细包装规格*/
	excelPackageStandard?: AT_QueryString;
	/*系统生产企业*/
	excelManufacturer?: AT_QueryString;
	/*合作省份*/
	provinceId?: AT_QueryList;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*配送公司*/
	deliveryName?: AT_QueryString;
	/*终端名称*/
	terminalName?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*销售时间*/
	saleTime?: AT_QueryDateTime;
	/*Id集合*/
	ids?: AT_QueryList;
	/*确认状态*/
	isAffirm?: AT_QueryList;
	/*上传时间*/
	addTime?: AT_QueryDateTime;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*数据来源*/
	dataType?: AT_QueryList;
}

export declare interface AT_ClientProductFlowtoSumPageModel {
	/*年份*/
	saleYear: number;
	/*合作省份*/
	provinceId: number;
	/*合作省份名称*/
	provinceName?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*12月*/
	dec?: number;
	/*11月*/
	nov?: number;
	/*10月*/
	oct?: number;
	/*9月*/
	sept?: number;
	/*8月*/
	aug?: number;
	/*7月*/
	jul?: number;
	/*6月*/
	jun?: number;
	/*5月*/
	may?: number;
	/*4月*/
	apr?: number;
	/*3月*/
	mar?: number;
	/*2月*/
	feb?: number;
	/*1月*/
	jan?: number;
	/*合计*/
	readonly totalSales?: number;
}

export declare interface AT_ClientProductFlowtoSumPageModelIEnumerableInt32Tuple {
	item1?: AT_ClientProductFlowtoSumPageModel[];
	item2: number;
}

export declare interface AT_ClientProductFlowtoSumQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*年份*/
	saleYear?: AT_QueryList;
	/*合作省份*/
	provinceId?: AT_QueryList;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
}

export declare interface AT_ClientQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*账户名*/
	clientAccount?: AT_QueryString;
	/*客户姓名*/
	name?: AT_QueryString;
	/*合作省份编号*/
	cooperateProvinceId?: AT_QueryList;
	/*手机号码*/
	mobile?: AT_QueryString;
	/*城市*/
	cityId?: AT_QueryInt;
	/*意向代理省份*/
	proxyProvinceId?: AT_QueryList;
	/*省份*/
	provinceId?: AT_QueryInt;
	/*医药公司名称*/
	companyName?: AT_QueryString;
	/*注册时间*/
	regTime?: AT_QueryDateTime;
	/*合作规模*/
	scaleName?: AT_QueryString;
	/*客户注册状态*/
	state?: AT_QueryInt;
	/*是否实际控制人：否，是*/
	isController?: AT_QueryInt;
	/*实际控制人*/
	controller?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*主营业务*/
	mainBusiness?: AT_QueryList;
	/*所属职务*/
	post?: AT_QueryInt;
	/*订单系统实际控制人*/
	orderSystemController?: AT_QueryString;
	/*合作类别*/
	category?: AT_QueryList;
	/*是否合作客户*/
	isCooperateClient?: AT_QueryInt;
	/*属性类别*/
	property?: AT_QueryList;
	/*修改人*/
	modifyUserName?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_ClientSimpleModel {
	/*城市*/
	cityName?: string;
	/*客户编码*/
	clientCode?: string;
	/*实际控制人*/
	controller?: string;
	/*实际控制人名称*/
	controllerName?: string;
	/*手机号码*/
	mobile?: string;
	/*客户姓名*/
	name?: string;
	/*省份*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*是否有代理商：1有0没有*/
	isHaveAgent?: number;
	/*合作省份*/
	cooperationProvinceId?: number;
	/*合作省份名称*/
	cooperationProvinceName?: string;
	/*意向代理省份*/
	proxyProvinceId?: number;
	/*意向代理省份名称*/
	proxyProvinceName?: string;
}

export enum AT_ClientStateEnum {
	未注册 = 0,
	已注册 = 1,
}

export declare interface AT_ClientTeamDeliveryRequestModel {
	/*主键Id*/
	id?: number;
	/*建议合作配送商业*/
	interactDelivery?: string;
}

export declare interface AT_ClientTeamDeliveryViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*建议合作配送商业*/
	interactDelivery?: string;
	/*添加人*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_ClientTeamGovernmentRequestModel {
	/*主键Id*/
	id?: number;
	/*政府事务能力*/
	affair?: string;
}

export declare interface AT_ClientTeamGovernmentViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*政府事务能力*/
	affair?: string;
	/*添加人*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_ClientTeamOrganizeRequestModel {
	/*主键Id*/
	id?: number;
	/*招商团队组织架构*/
	organization?: string;
}

export declare interface AT_ClientTeamOrganizeViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*招商团队组织架构*/
	organization?: string;
	/*添加人*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_ClientTeamRequestModel {
	/*招商团队实际控制人*/
	controller?: string;
	/*联系方式*/
	contact?: string;
	/*招商团队规模*/
	scale?: number;
}

export declare interface AT_ClientTeamServiceRequestModel {
	/*主键Id*/
	id?: number;
	/*客户服务*/
	serviceNote?: string;
}

export declare interface AT_ClientTeamServiceViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户服务*/
	serviceNote?: string;
	/*添加人*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_ClientTeamSpreadRequestModel {
	/*主键Id*/
	id?: number;
	/*历史推广品种*/
	historySpread?: string;
}

export declare interface AT_ClientTeamSpreadViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*历史推广品种*/
	historySpread?: string;
	/*添加人*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_ClientTeamViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*招商团队实际控制人*/
	controller?: string;
	/*联系方式*/
	contact?: string;
	/*招商团队规模*/
	scale?: number;
}

export declare interface AT_ClientViewModel {
	/*合作类别：16*/
	category?: number;
	/*合作类别：注册、合作*/
	categoryName?: string;
	/*城市*/
	cityId?: number;
	/*城市文本*/
	cityName?: string;
	/*订单账户*/
	clientAccounts?: AT_ClientAccountModel[];
	/*客户备案账户*/
	clientBanks?: AT_ClientBankViewModel[];
	/*客户联系人*/
	clientContacts?: AT_ClientContactModel[];
	/*我的开户*/
	clientDeliveries?: AT_ClientDeliveryViewModel[];
	/*客户联系人*/
	clientLiaisons?: AT_ClientLiaisonViewModel[];
	/*意向代理省份*/
	clientProxyProvince?: number;
	/*意向代理省份*/
	clientProxyProvinces?: AT_KeyValueIntModel[];
	/*医药公司名称*/
	companyName?: string;
	/*实际控制人：客户编码*/
	controller?: string;
	/*实际控制人*/
	controllerName?: string;
	/*实际控制人电话*/
	controllerPhone?: string;
	/*主营业务*/
	mainBusiness?: number[];
	/*合作品种*/
	cooperations?: AT_ClientCooperationViewModel[];
	/*核算部门*/
	department?: string;
	/*是否允许修改意向代理省份*/
	disableEditProxyProvince: number;
	/*是否允许修改执行控制人*/
	disableEditTeamPerson: number;
	/*订单系统客户信息*/
	drmClientAccount?: AT_DrmClientAccountViewModel;
	/*意向代理*/
	intentions?: AT_ClientIntentionViewModel[];
	/*是否实际控制人：否，是*/
	isController?: number;
	/*手机号码*/
	mobile?: string;
	/*客户姓名*/
	name?: string;
	/*所属职务*/
	post?: number;
	/*所属职务文本*/
	postName?: string;
	/*属性类别：18*/
	property?: number;
	/*属性类别：18*/
	propertyName?: string;
	/*省份*/
	provinceId?: number;
	/*省份文本*/
	provinceName?: string;
	/*客户合作规模*/
	scale?: number;
	/*合作规模*/
	scaleName?: number;
	/*团队信息*/
	teamInfo?: AT_TeamInfoModel;
}

export declare interface AT_ComboBoxModel {
	/*下拉类型

1 = 药品类型

2 = 申请类型

3 = 注册分类

4 = 进度类型

5 = 质量层次

6 = 挂网进度

9 = 政策类型

10 = 销售模式

11 = 制剂类型

12 = 销货类型

13 = 公告类型

14 = 合作模式

15 = 结算周期

16 = 客户合作类别

17 = 客户合作规模

18 = 客户属性类别

19 = 账套银行类型

20 = 隶属部门

21 = 付款银行归属

22 = 企业账户类型

24 = 企业资质资料类型

26 = 银行信息使用用途

27 = 资料邮寄快递公司

28 = 银行信息银行类型

30 = 采购合同类型

31 = 发货方式

32 = 付款科目

33 = 部门管理

34 = 销售回款科目

35 = 医保属性

36 = 基药属性

37 = 完成量单位

38 = 送达方式

39 = 费用报销类型

40 = 费用报销科目

41 = 客户联系人职务

42 = 首页报告类型

43 = 客户所属职位

44 = 销售发票快递公司

45 = 佣金付款方式

46 = 营销方案通知类型

47 = 企业首营资料明细

48 = 品种首营资料明细

49 = 全国商业业务

50 = 产品所属部门

51 = 物流费用类型

52 = 客户主营业务

53 = 销售调价冲票单调价类型

54 = 采购调价冲票单调价类型

55 = 带量名称

56 = 付款单科目

57 = 专项费用类型*/
	type: AT_ComboBoxType;
	/*数值名称*/
	valueName: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefaultValue: number;
}

export declare interface AT_ComboBoxPageModel {
	id: number;
	/*下拉类型

1 = 药品类型

2 = 申请类型

3 = 注册分类

4 = 进度类型

5 = 质量层次

6 = 挂网进度

9 = 政策类型

10 = 销售模式

11 = 制剂类型

12 = 销货类型

13 = 公告类型

14 = 合作模式

15 = 结算周期

16 = 客户合作类别

17 = 客户合作规模

18 = 客户属性类别

19 = 账套银行类型

20 = 隶属部门

21 = 付款银行归属

22 = 企业账户类型

24 = 企业资质资料类型

26 = 银行信息使用用途

27 = 资料邮寄快递公司

28 = 银行信息银行类型

30 = 采购合同类型

31 = 发货方式

32 = 付款科目

33 = 部门管理

34 = 销售回款科目

35 = 医保属性

36 = 基药属性

37 = 完成量单位

38 = 送达方式

39 = 费用报销类型

40 = 费用报销科目

41 = 客户联系人职务

42 = 首页报告类型

43 = 客户所属职位

44 = 销售发票快递公司

45 = 佣金付款方式

46 = 营销方案通知类型

47 = 企业首营资料明细

48 = 品种首营资料明细

49 = 全国商业业务

50 = 产品所属部门

51 = 物流费用类型

52 = 客户主营业务

53 = 销售调价冲票单调价类型

54 = 采购调价冲票单调价类型

55 = 带量名称

56 = 付款单科目

57 = 专项费用类型*/
	type: AT_ComboBoxType;
	/*名称*/
	valueName?: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefaultValue: number;
}

export declare interface AT_ComboBoxPageModelIEnumerableInt32Tuple {
	item1?: AT_ComboBoxPageModel[];
	item2: number;
}

export declare interface AT_ComboBoxQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*下拉类型编码*/
	type?: AT_QueryInt;
	/*下拉框名称*/
	valueName?: AT_QueryString;
}

export enum AT_ComboBoxType {
	药品类型 = 1,
	申请类型 = 2,
	注册分类 = 3,
	进度类型 = 4,
	质量层次 = 5,
	挂网进度 = 6,
	政策类型 = 9,
	销售模式 = 10,
	制剂类型 = 11,
	销货类型 = 12,
	公告类型 = 13,
	合作模式 = 14,
	结算周期 = 15,
	客户合作类别 = 16,
	客户合作规模 = 17,
	客户属性类别 = 18,
	账套银行类型 = 19,
	隶属部门 = 20,
	付款银行归属 = 21,
	企业账户类型 = 22,
	企业资质资料类型 = 24,
	银行信息使用用途 = 26,
	资料邮寄快递公司 = 27,
	银行信息银行类型 = 28,
	采购合同类型 = 30,
	发货方式 = 31,
	付款科目 = 32,
	部门管理 = 33,
	销售回款科目 = 34,
	医保属性 = 35,
	基药属性 = 36,
	完成量单位 = 37,
	送达方式 = 38,
	费用报销类型 = 39,
	费用报销科目 = 40,
	客户联系人职务 = 41,
	首页报告类型 = 42,
	客户所属职位 = 43,
	销售发票快递公司 = 44,
	佣金付款方式 = 45,
	营销方案通知类型 = 46,
	企业首营资料明细 = 47,
	品种首营资料明细 = 48,
	全国商业业务 = 49,
	产品所属部门 = 50,
	物流费用类型 = 51,
	客户主营业务 = 52,
	销售调价冲票单调价类型 = 53,
	采购调价冲票单调价类型 = 54,
	带量名称 = 55,
	付款单科目 = 56,
	专项费用类型 = 57,
}

export declare interface AT_ComboBoxViewModel {
	/*下拉类型

1 = 药品类型

2 = 申请类型

3 = 注册分类

4 = 进度类型

5 = 质量层次

6 = 挂网进度

9 = 政策类型

10 = 销售模式

11 = 制剂类型

12 = 销货类型

13 = 公告类型

14 = 合作模式

15 = 结算周期

16 = 客户合作类别

17 = 客户合作规模

18 = 客户属性类别

19 = 账套银行类型

20 = 隶属部门

21 = 付款银行归属

22 = 企业账户类型

24 = 企业资质资料类型

26 = 银行信息使用用途

27 = 资料邮寄快递公司

28 = 银行信息银行类型

30 = 采购合同类型

31 = 发货方式

32 = 付款科目

33 = 部门管理

34 = 销售回款科目

35 = 医保属性

36 = 基药属性

37 = 完成量单位

38 = 送达方式

39 = 费用报销类型

40 = 费用报销科目

41 = 客户联系人职务

42 = 首页报告类型

43 = 客户所属职位

44 = 销售发票快递公司

45 = 佣金付款方式

46 = 营销方案通知类型

47 = 企业首营资料明细

48 = 品种首营资料明细

49 = 全国商业业务

50 = 产品所属部门

51 = 物流费用类型

52 = 客户主营业务

53 = 销售调价冲票单调价类型

54 = 采购调价冲票单调价类型

55 = 带量名称

56 = 付款单科目

57 = 专项费用类型*/
	type: AT_ComboBoxType;
	/*数值名称*/
	valueName: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefaultValue: number;
	/*id*/
	id: number;
}

export enum AT_CommissionBillState {
	未提单 = 0,
	部分提单 = 1,
	已提单 = 2,
}

export enum AT_CommissionBillType {
	销售通知单 = 1,
	销售退货单 = 2,
	销售调价冲票单 = 3,
}

export declare interface AT_CommissionSettleDetailQueryModel {
	/*单据编号*/
	saleCommissionIds?: number[];
}

export enum AT_CompanyArchivesState {
	未建档 = 0,
	已建档 = 1,
}

export declare interface AT_CompanyAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*附件类型：营业执照，法人信息，许可证

1 = 营业执照

2 = 法人信息

3 = 经营许可证

4 = 生产许可证*/
	type: AT_CompanyAttachmentType;
}

export enum AT_CompanyAttachmentType {
	营业执照 = 1,
	法人信息 = 2,
	经营许可证 = 3,
	生产许可证 = 4,
}

export declare interface AT_CompanyBankModel {
	/*通用编码：2061*/
	comCode?: string;
	/*账户类型：下拉框维护*/
	type?: number;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*状态：冻结，未冻结*/
	state?: number;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
}

export declare interface AT_CompanyBankSimpleModel {
	/*通用编码：2061*/
	comCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*开户行/开户名/账户*/
	name?: string;
}

export declare interface AT_CompanyBankViewModel {
	/*通用编码：2061*/
	comCode?: string;
	/*账户类型：下拉框维护*/
	type?: number;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*状态：冻结，未冻结*/
	state?: number;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
	/*自增ID*/
	id: number;
	/*企业编码：2046*/
	companyCode?: string;
	/*账户类型名称*/
	typeName?: string;
}

export declare interface AT_CompanyBorrowModel {
	/*借款类型：借入、借出

1 = 借入

-1 = 借出*/
	borrowType: AT_CompanyBorrowType;
	/*借款人：企业编码*/
	companyCodeOne: string;
	/*收款银行：银行卡编码*/
	bankCardCodeOne?: string;
	/*收款账号*/
	bankCardInfoOne: string;
	/*出借人：企业编码*/
	companyCodeTwo: string;
	/*付款银行：银行卡编码*/
	bankCardCodeTwo?: string;
	/*付款账号*/
	bankCardInfoTwo: string;
	/*借款金额*/
	borrowMoney: number;
	/*借款日期*/
	borrowDate: string;
	/*还款日期*/
	repaymentDate: string;
	/*关联项目：项目管理表ID*/
	projectManageId?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_CompanyBorrowPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*结清状态

0 = 未结清

1 = 部分结清

2 = 已结清*/
	settleState?: AT_SettleStateEnum;
	/*结清状态文本

0 = 未结清

1 = 部分结清

2 = 已结清*/
	readonly settleStateText?: AT_SettleStateEnum;
	/*借支状态（借入）

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState?: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly backStateText?: AT_MoneyBackState;
	/*借支状态（借出）

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_MoneyPayState;
	/*公司借支单号*/
	companyBorrowCode?: string;
	/*借款类型：借入、借出

1 = 借入

-1 = 借出*/
	borrowType: AT_CompanyBorrowType;
	/*借款类型文本

1 = 借入

-1 = 借出*/
	readonly borrowTypeText: AT_CompanyBorrowType;
	/*借款人：企业编码*/
	companyCodeOne?: string;
	/*借款人名称*/
	companyNameOne?: string;
	/*收款银行：银行卡编码*/
	bankCardCodeOne?: string;
	/*收款银行名称*/
	bankNameOne?: string;
	/*收款账号*/
	bankCardInfoOne?: string;
	/*出借人：企业编码*/
	companyCodeTwo?: string;
	/*出借人*/
	companyNameTwo?: string;
	/*付款银行：银行卡编码*/
	bankCardCodeTwo?: string;
	/*付款银行名称*/
	bankNameTwo?: string;
	/*付款账号*/
	bankCardInfoTwo?: string;
	/*借款金额*/
	borrowMoney?: number;
	/*还款金额*/
	repaymentMoney?: number;
	/*点单金额（已经付款的还款金额）*/
	payedMoney?: number;
	/*未还款金额*/
	readonly leftRepaymentMoney?: number;
	/*借款日期*/
	borrowDate?: string;
	/*还款日期*/
	repaymentDate?: string;
	/*关联项目：项目管理表ID*/
	projectManageId?: number;
	/*关联项目*/
	projectName?: string;
	/*公司还款单号*/
	companyRepaymentCodes?: string;
	/*备注*/
	note?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_CompanyBorrowPageModelIEnumerableInt32Tuple {
	item1?: AT_CompanyBorrowPageModel[];
	item2: number;
}

export declare interface AT_CompanyBorrowQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*结清状态*/
	settleState?: AT_QueryList;
	/*借支状态*/
	borrowState?: AT_QueryInt;
	/*回款状态*/
	backState?: AT_QueryInt;
	/*付款状态*/
	payState?: AT_QueryInt;
	/*借款类型*/
	borrowType?: AT_QueryInt;
	/*借款人*/
	companyNameOne?: AT_QueryString;
	/*付款银行*/
	bankNameOne?: AT_QueryString;
	/*出借人*/
	companyNameTwo?: AT_QueryString;
	/*收款银行*/
	bankNameTwo?: AT_QueryString;
	/*借款日期*/
	borrowDate?: AT_QueryDateTime;
	/*关联项目*/
	projectName?: AT_QueryString;
	/*借款单号*/
	companyBorrowCode?: AT_QueryString;
	/*还款单号*/
	companyRepaymentCodes?: AT_QueryString;
}

export enum AT_CompanyBorrowType {
	借入 = 1,
	借出 = -1,
}

export declare interface AT_CompanyBorrowViewModel {
	/*借款类型：借入、借出

1 = 借入

-1 = 借出*/
	borrowType: AT_CompanyBorrowType;
	/*借款人：企业编码*/
	companyCodeOne: string;
	/*收款银行：银行卡编码*/
	bankCardCodeOne?: string;
	/*收款账号*/
	bankCardInfoOne: string;
	/*出借人：企业编码*/
	companyCodeTwo: string;
	/*付款银行：银行卡编码*/
	bankCardCodeTwo?: string;
	/*付款账号*/
	bankCardInfoTwo: string;
	/*借款金额*/
	borrowMoney: number;
	/*借款日期*/
	borrowDate: string;
	/*还款日期*/
	repaymentDate: string;
	/*关联项目：项目管理表ID*/
	projectManageId?: number;
	/*备注*/
	note?: string;
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*公司借支编码*/
	companyBorrowCode?: string;
	/*借款类型文本

1 = 借入

-1 = 借出*/
	readonly borrowTypeText?: AT_CompanyBorrowType;
	/*借款人名称*/
	companyNameOne?: string;
	/*收款银行名称*/
	bankNameOne?: string;
	/*收款银行编码*/
	bankBookCodeOne?: string;
	/*出借人*/
	companyNameTwo?: string;
	/*付款银行名称*/
	bankNameTwo?: string;
	/*付款银行编码*/
	bankBookCodeTwo?: string;
	/*关联项目*/
	projectName?: string;
	/*已还款金额*/
	repayedMoney?: number;
	/*未还款金额*/
	readonly leftRepayMoney?: number;
}

export declare interface AT_CompanyCertificateModel {
	/*注册资本*/
	capital?: string;
	/*成立日期*/
	establish?: string;
	/*登记机关*/
	enrollment?: string;
	/*有效期至：长期（2099/21/31）*/
	expiryDate?: string;
	/*经营范围*/
	businessScope?: string;
	/*注册地址*/
	registerAddress?: string;
	/*法人姓名*/
	name?: string;
	/*联系电话*/
	mobile?: string;
	/*身份证号*/
	idCard?: string;
}

export declare interface AT_CompanyContactModel {
	/*职务：下拉框维护*/
	position?: string;
	/*分管产品/部门*/
	inCharge?: string;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*微信*/
	webchat?: string;
	/*QQ*/
	qq?: string;
	/*电子邮箱*/
	email?: string;
	/*工作职责*/
	workDuty?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_CompanyContactViewModel {
	/*职务：下拉框维护*/
	position?: string;
	/*分管产品/部门*/
	inCharge?: string;
	/*姓名*/
	name?: string;
	/*性别：男，女*/
	sex?: number;
	/*手机*/
	mobile?: string;
	/*座机*/
	landline?: string;
	/*微信*/
	webchat?: string;
	/*QQ*/
	qq?: string;
	/*电子邮箱*/
	email?: string;
	/*工作职责*/
	workDuty?: string;
	/*备注*/
	note?: string;
	/*自增ID*/
	id: number;
	/*企业编码：2046*/
	companyCode?: string;
}

export declare interface AT_CompanyEditModel {
	/*企业名称*/
	companyName: string;
	/*合作状态：未合作，已合作*/
	state?: number;
	/*角色类型*/
	companyRoleType?: AT_CompanyRoleType[];
	/*企业类型*/
	companyType?: AT_CompanyType[];
	/*所属省份*/
	provinceId?: number;
	/*所属区域*/
	cityId?: number;
	/*海典编码*/
	haidianCode?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*主营业务*/
	mainBusiness?: string;
	/*公司简介*/
	introduction?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*销售委托人*/
	saleEntrust?: string;
	/*销售委托开始时间*/
	saleEntrustStartDate?: string;
	/*销售委托结束时间*/
	saleEntrustEndDate?: string;
	/*备注*/
	note?: string;
	/*营业执照信息*/
	companyCertificate?: AT_CompanyCertificateModel;
	/*企业经营许可证*/
	businessLicense?: AT_CompanyLicenseModel;
	/*企业生产许可证*/
	productionLicense?: AT_CompanyLicenseModel;
	/*营业执照附件*/
	companyCertificateAttachments?: AT_CompanyAttachmentModel[];
	/*法人附件*/
	companyLegalAttachments?: AT_CompanyAttachmentModel[];
	/*企业经营许可证附件*/
	businessLicenseAttachments?: AT_CompanyAttachmentModel[];
	/*企业生产许可证附件*/
	productionLicenseAttachments?: AT_CompanyAttachmentModel[];
	/*企业联系信息*/
	companyContacts?: AT_CompanyContactModel[];
	/*基本账户信息*/
	companyBanks?: AT_CompanyBankModel[];
	/*开票信息*/
	companyInvoices?: AT_CompanyInvoiceModel[];
	/*公司资质*/
	companyQualifications?: AT_CompanyQualificationModel[];
	/*收货信息*/
	companyReceipts?: AT_CompanyReceiptModel[];
	/*收件信息*/
	companyReceives?: AT_CompanyReceiveModel[];
	/*仓储信息*/
	companyWarehouses?: AT_CompanyWarehouseModel[];
}

export declare interface AT_CompanyEntity {
	updTime: string;
	id: number;
	companyCode?: string;
	companyName?: string;
	state?: number;
	companyRoleType?: number;
	companyRoleTypeText?: string;
	companyType?: number;
	companyTypeText?: string;
	provinceId?: number;
	cityId?: number;
	haidianCode?: string;
	creditCode?: string;
	mainBusiness?: string;
	introduction?: string;
	entrust?: string;
	entrustStartDate?: string;
	entrustEndDate?: string;
	saleEntrust?: string;
	saleEntrustStartDate?: string;
	saleEntrustEndDate?: string;
	note?: string;
	archivesState?: number;
	valid: number;
	sysCode?: string;
	fromUuid?: string;
	colver?: string;
}

export declare interface AT_CompanyInvoiceModel {
	/*自增ID*/
	id: number;
	/*通用编码：2061*/
	comCode?: string;
	/*企业编码*/
	companyCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*地址*/
	address?: string;
	/*纳税识别号*/
	taxNumber?: string;
	/*联系电话*/
	mobile?: string;
	/*状态：冻结，未冻结*/
	state?: number;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
}

export declare interface AT_CompanyInvoiceSimpleModel {
	/*通用编码*/
	comCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*纳税识别号*/
	taxNumber?: string;
}

export declare interface AT_CompanyLicenseModel {
	/*编号*/
	number?: string;
	/*有效期至*/
	expiryDate?: string;
	/*监管机构*/
	supervise?: string;
	/*质量负责人*/
	qualityPerson?: string;
	/*企业负责人*/
	companyPerson?: string;
	/*生产地址和范围*/
	productionRange?: string;
	/*仓库地址*/
	warehouse?: string;
	/*许可证类型

1 = 经营许可证

2 = 生产许可证*/
	type?: AT_CompanyLicenseType;
}

export enum AT_CompanyLicenseType {
	经营许可证 = 1,
	生产许可证 = 2,
}

export declare interface AT_CompanyPageModel {
	/*自增ID*/
	id: number;
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*合作状态：未合作，已合作*/
	state?: number;
	/*角色类型*/
	companyRoleType?: number;
	/*角色类型，JSON格式（RoleType，RoleTypeText）*/
	companyRoleTypeText?: string;
	/*企业类型

0 = 未合作

1 = 已合作*/
	companyType?: AT_CompanyState;
	/*企业类型，JSON格式（ComType，ComTypeText）*/
	companyTypeText?: string;
	/*所属省份*/
	provinceId?: number;
	/*所属省份名称*/
	provinceName?: string;
	/*所属区域*/
	cityId?: number;
	/*所属区域名称*/
	cityName?: string;
	/*海典编码*/
	haidianCode?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*主营业务*/
	mainBusiness?: string;
	/*公司简介*/
	introduction?: string;
	/*注册地址*/
	registerAddress?: string;
	/*建档状态

0 = 未建档

1 = 已建档*/
	archivesState: AT_CompanyArchivesState;
	/*建档状态

0 = 未建档

1 = 已建档*/
	readonly archivesStateText: AT_CompanyArchivesState;
	/*是否为质量管理部人员*/
	isQualityManagementDep: boolean;
}

export declare interface AT_CompanyPageModelIEnumerableInt32Tuple {
	item1?: AT_CompanyPageModel[];
	item2: number;
}

export declare interface AT_CompanyPairCodeModel {
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*合作状态：未合作，已合作

0 = 未合作

1 = 已合作*/
	state?: AT_CompanyState;
	/*角色类型*/
	companyRoleType?: number;
	/*角色类型，JSON格式（RoleType，RoleTypeText）*/
	companyRoleTypeText?: string;
	/*企业类型*/
	companyType?: number;
	/*企业类型，JSON格式（ComType，ComTypeText）*/
	companyTypeText?: string;
	/*海典单位编码*/
	hdUnitCode?: string;
	/*海典单位名称*/
	hdUnitName?: string;
	/*海典单位类型*/
	hdUnitType?: string;
}

export declare interface AT_CompanyPairCodePageModel {
	/*对码状态

0 = 未对码

1 = 已对码*/
	pairCodeState: AT_PairCodeState;
	/*对码状态 文本

0 = 未对码

1 = 已对码*/
	readonly pairCodeStateText: AT_PairCodeState;
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*合作状态：未合作，已合作

0 = 未合作

1 = 已合作*/
	state?: AT_CompanyState;
	/*角色类型*/
	companyRoleType?: number;
	/*角色类型，JSON格式（RoleType，RoleTypeText）*/
	companyRoleTypeText?: string;
	/*企业类型*/
	companyType?: number;
	/*企业类型，JSON格式（ComType，ComTypeText）*/
	companyTypeText?: string;
	/*海典单位编码*/
	hdUnitCode?: string;
	/*海典单位名称*/
	hdUnitName?: string;
	/*海典单位类型*/
	hdUnitType?: string;
}

export declare interface AT_CompanyPairCodePageModelIEnumerableInt32Tuple {
	item1?: AT_CompanyPairCodePageModel[];
	item2: number;
}

export declare interface AT_CompanyPairCodeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业编码*/
	companyCode?: AT_QueryString;
	/*企业名称*/
	companyName?: AT_QueryString;
	/*合作状态：未合作，已合作*/
	state?: AT_QueryInt;
	/*企业类型*/
	companyType?: AT_QueryGiven;
	/*海典单位编码*/
	hdUnitCode?: AT_QueryString;
	/*海典单位名称*/
	hdUnitName?: AT_QueryString;
	/*海典单位类型*/
	hdUnitType?: AT_QueryString;
	/*对码状态*/
	pairCodeState?: AT_QueryInt;
}

export declare interface AT_CompanyQualificationModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*企业公司资质Id*/
	id?: number;
	/*企业编码*/
	companyCode?: string;
	/*资料明细*/
	type?: number;
	/*更新人：员工编码*/
	updUser?: string;
}

export declare interface AT_CompanyQualificationQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业编码*/
	companyCode?: AT_QueryString;
	/*Id集合*/
	ids?: AT_QueryList;
}

export declare interface AT_CompanyQualificationViewModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*企业公司资质Id*/
	id?: number;
	/*企业编码*/
	companyCode?: string;
	/*资料明细*/
	type?: number;
	/*更新人：员工编码*/
	updUser?: string;
	/*资料明细名称*/
	typeName?: string;
	/*更新人名称*/
	updUserName?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_CompanyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业编码*/
	companyCode?: AT_QueryString;
	/*企业名称*/
	companyName?: AT_QueryString;
	/*合作状态：未合作，已合作*/
	state?: AT_QueryInt;
	/*角色类型*/
	companyRoleType?: AT_QueryList;
	/*后端处理*/
	companyRoleTypeIn?: AT_QueryGiven;
	/*后端处理*/
	companyRoleTypeNotIn?: AT_QueryGiven;
	/*企业类型*/
	companyType?: AT_QueryInt;
	/*后端处理*/
	companyTypeEqual?: AT_QueryGiven;
	/*所属省份*/
	provinceId?: AT_QueryInt;
	/*所属区域*/
	cityId?: AT_QueryInt;
	/*建档状态*/
	archivesState?: AT_QueryList;
}

export declare interface AT_CompanyReceiptModel {
	/*自增ID*/
	id: number;
	/*通用编码*/
	comCode?: string;
	/*企业编码*/
	companyCode?: string;
	/*收货人*/
	receiver?: string;
	/*收货电话*/
	mobile?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*城市Id*/
	cityId?: number;
	/*城市名称*/
	cityName?: string;
	/*收货地址*/
	address?: string;
	/*收货委托书开始时间*/
	receiptStartDate?: string;
	/*收货委托书结束时间*/
	receiptEndDate?: string;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
}

export declare interface AT_CompanyReceiptSimpleModel {
	/*通用编码*/
	comCode?: string;
	/*收货人*/
	receiver?: string;
	/*收货电话*/
	mobile?: string;
	/*收货地址*/
	address?: string;
}

export declare interface AT_CompanyReceiptViewModel {
	/*自增ID*/
	id: number;
	/*通用编码*/
	comCode?: string;
	/*企业编码*/
	companyCode?: string;
	/*收货人*/
	receiver?: string;
	/*收货电话*/
	mobile?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*城市Id*/
	cityId?: number;
	/*城市名称*/
	cityName?: string;
	/*收货地址*/
	address?: string;
	/*收货委托书开始时间*/
	receiptStartDate?: string;
	/*收货委托书结束时间*/
	receiptEndDate?: string;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
}

export declare interface AT_CompanyReceiveModel {
	/*自增ID*/
	id: number;
	/*通用编码*/
	comCode?: string;
	/*企业编码*/
	companyCode?: string;
	/*收件人*/
	recipient?: string;
	/*收件电话*/
	mobile?: string;
	/*收件地址*/
	address?: string;
}

export declare interface AT_CompanyReceiveSimpleViewModel {
	/*通用编码*/
	comCode?: string;
	/*收件人*/
	addressee?: string;
	/*收件电话*/
	mobile?: string;
	/*收件地址*/
	address?: string;
}

export declare interface AT_CompanyRepaymentModel {
	/*公司借支编码*/
	companyBorrowCode: string;
	/*还款类型：还出、还入

1 = 还入

-1 = 还出*/
	repaymentType: AT_CompanyRepaymentType;
	/*还款人：企业编码*/
	companyCodeOne: string;
	/*付款银行：银行卡编码*/
	bankCardCodeOne?: string;
	/*付款账户*/
	bankCardInfoOne: string;
	/*收款人：企业编码*/
	companyCodeTwo: string;
	/*收款银行：银行卡编码*/
	bankCardCodeTwo?: string;
	/*收款账户*/
	bankCardInfoTwo: string;
	/*还款金额*/
	repaymentMoney: number;
	/*还款日期*/
	repaymentDate: string;
	/*备注*/
	note?: string;
}

export declare interface AT_CompanyRepaymentPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*还款状态（还入）

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState?: AT_MoneyBackState;
	/*还款状态（还出）

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*还款类型

1 = 还入

-1 = 还出*/
	repaymentType?: AT_CompanyRepaymentType;
	/*还款类型文本

1 = 还入

-1 = 还出*/
	readonly repaymentTypeText?: AT_CompanyRepaymentType;
	/*还款人*/
	companyNameOne?: string;
	/*付款银行*/
	bankNameOne?: string;
	/*付款账户*/
	bankCardInfoOne?: string;
	/*收款人*/
	companyNameTwo?: string;
	/*收款银行*/
	bankNameTwo?: string;
	/*收款账户*/
	bankCardInfoTwo?: string;
	/*还款金额*/
	repaymentMoney?: number;
	/*借款日期*/
	borrowDate?: string;
	/*还款日期*/
	repaymentDate?: string;
	/*关联项目*/
	projectName?: string;
	/*公司借支单号*/
	companyBorrowCode?: string;
	/*公司还款单号*/
	companyRepaymentCode?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_CompanyRepaymentPageModelIEnumerableInt32Tuple {
	item1?: AT_CompanyRepaymentPageModel[];
	item2: number;
}

export declare interface AT_CompanyRepaymentQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*还款类型*/
	repaymentType?: AT_QueryInt;
	/*还款人*/
	companyNameOne?: AT_QueryString;
	/*付款银行*/
	bankNameOne?: AT_QueryString;
	/*收款人*/
	companyNameTwo?: AT_QueryString;
	/*收款银行*/
	bankNameTwo?: AT_QueryString;
	/*借款日期*/
	borrowDate?: AT_QueryDateTime;
	/*还款日期*/
	repaymentDate?: AT_QueryDateTime;
	/*关联项目*/
	projectName?: AT_QueryString;
	/*借款单号*/
	companyBorrowCode?: AT_QueryString;
	/*还款单号*/
	companyRepaymentCode?: AT_QueryString;
}

export enum AT_CompanyRepaymentType {
	还入 = 1,
	还出 = -1,
}

export declare interface AT_CompanyRepaymentViewModel {
	/*公司借支编码*/
	companyBorrowCode: string;
	/*还款类型：还出、还入

1 = 还入

-1 = 还出*/
	repaymentType: AT_CompanyRepaymentType;
	/*还款人：企业编码*/
	companyCodeOne: string;
	/*付款银行：银行卡编码*/
	bankCardCodeOne?: string;
	/*付款账户*/
	bankCardInfoOne: string;
	/*收款人：企业编码*/
	companyCodeTwo: string;
	/*收款银行：银行卡编码*/
	bankCardCodeTwo?: string;
	/*收款账户*/
	bankCardInfoTwo: string;
	/*还款金额*/
	repaymentMoney: number;
	/*还款日期*/
	repaymentDate: string;
	/*备注*/
	note?: string;
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*还款类型：还出、还入

1 = 还入

-1 = 还出*/
	readonly repaymentTypeText?: AT_CompanyRepaymentType;
	/*还款人名称*/
	companyNameOne?: string;
	/*付款银行*/
	bankBookCodeOne?: string;
	/*付款银行名称*/
	bankNameOne?: string;
	/*公司还款编码：3128*/
	companyRepaymentCode?: string;
	/*收款人*/
	companyNameTwo?: string;
	/*收款银行名称*/
	bankNameTwo?: string;
	/*收款银行*/
	bankBookCodeTwo?: string;
	/*关联项目*/
	projectName?: string;
	/*借款金额*/
	borrowMoney?: number;
	/*借款日期*/
	borrowDate?: string;
	/*已还款金额*/
	repayedMoney?: number;
	/*未还款金额*/
	readonly leftRepayMoney?: number;
}

export enum AT_CompanyRoleType {
	内部企业 = 1,
	上游企业 = 2,
	下游企业 = 4,
}

export enum AT_CompanyState {
	未合作 = 0,
	已合作 = 1,
}

export enum AT_CompanyType {
	内部企业 = 1,
	药物研发机构 = 2,
	内部上市许可持有人 = 4,
	全国总营销企业 = 8,
	受托生产企业 = 16,
	上游上市许可持有人 = 32,
	全总营销企业 = 64,
	内部受托生产企业 = 128,
	上游销售区域 = 256,
	其他上游企业 = 512,
	中间商 = 1024,
	配送企业 = 2048,
	其他下游企业 = 4096,
	集团总部 = 8192,
}

export declare interface AT_CompanyViewModel {
	/*企业名称*/
	companyName: string;
	/*合作状态：未合作，已合作*/
	state?: number;
	/*角色类型*/
	companyRoleType?: AT_CompanyRoleType[];
	/*企业类型*/
	companyType?: AT_CompanyType[];
	/*所属省份*/
	provinceId?: number;
	/*所属区域*/
	cityId?: number;
	/*海典编码*/
	haidianCode?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*主营业务*/
	mainBusiness?: string;
	/*公司简介*/
	introduction?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*销售委托人*/
	saleEntrust?: string;
	/*销售委托开始时间*/
	saleEntrustStartDate?: string;
	/*销售委托结束时间*/
	saleEntrustEndDate?: string;
	/*备注*/
	note?: string;
	/*营业执照信息*/
	companyCertificate?: AT_CompanyCertificateModel;
	/*企业经营许可证*/
	businessLicense?: AT_CompanyLicenseModel;
	/*企业生产许可证*/
	productionLicense?: AT_CompanyLicenseModel;
	/*营业执照附件*/
	companyCertificateAttachments?: AT_CompanyAttachmentModel[];
	/*法人附件*/
	companyLegalAttachments?: AT_CompanyAttachmentModel[];
	/*企业经营许可证附件*/
	businessLicenseAttachments?: AT_CompanyAttachmentModel[];
	/*企业生产许可证附件*/
	productionLicenseAttachments?: AT_CompanyAttachmentModel[];
	/*自增ID*/
	id: number;
	/*企业编码：2046*/
	companyCode?: string;
	/*海典单位编码*/
	hdUnitCode?: string;
	/*企业角色类型（合并值）*/
	comRoleType: number;
	/*企业类型（合并值）*/
	comType: number;
	/*企业联系信息*/
	companyContacts?: AT_CompanyContactViewModel[];
	/*基本账户信息*/
	companyBanks?: AT_CompanyBankViewModel[];
	/*开票信息*/
	companyInvoices?: AT_CompanyInvoiceModel[];
	/*公司资质*/
	companyQualifications?: AT_CompanyQualificationViewModel[];
	/*收货信息*/
	companyReceipts?: AT_CompanyReceiptViewModel[];
	/*收件信息*/
	companyReceives?: AT_CompanyReceiveModel[];
	/*仓储信息*/
	companyWarehouses?: AT_CompanyWarehouseModel[];
}

export declare interface AT_CompanyWarehouseModel {
	/*企业编码*/
	companyCode?: string;
	/*仓库编码：2047*/
	warehouseCode?: string;
	/*仓库名称*/
	warehouseName?: string;
	/*仓库地址*/
	address?: string;
	/*发货地点*/
	sendPlace: string;
}

export declare interface AT_ConfirmCommissionQueryModel {
	/*销售流向有效数据表ID*/
	flowtoSaleValidId: number;
	/*预结算客户编码*/
	dueSettleClientCode?: string;
	/*企业编码：配送公司*/
	companyCode?: string;
	/*系统终端Id*/
	drugTerminalId: number;
	/*产品编码*/
	productCode?: string;
	/*开单日期*/
	billTime: string;
	/*确认数量*/
	confirmAmount: number;
}

export declare interface AT_ConfirmDeliveryModel {
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*规格*/
	regStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*存储条件*/
	storage?: string;
	/*件装*/
	wholePackage?: number;
	/*订单数量*/
	orderAmount?: string;
	/*已发货数量*/
	sendedAmount?: string;
}

export enum AT_ContractType {
	年度合同 = 1,
	批次合同 = 2,
}

export declare interface AT_CooperationAmountDetail {
	/*价格信息Id*/
	id: number;
	/*最低销量要求*/
	minSale: number;
	/*最高销量要求*/
	maxSale: number;
	/*差额税率：单位%*/
	taxRate: number;
	/*销售佣金占比率：单位%*/
	saleRatio: number;
	/*结算价格*/
	settlePrice: number;
	/*佣金价格*/
	commissionPrice: number;
	/*是否锁定：否，是；锁定后不允许修改*/
	isLock?: number;
}

export declare interface AT_CooperationAmountModel {
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode: AT_SettleModeEnum;
	/*佣金结算方式文本

0 = 包干

1 = 开票*/
	readonly settleModeText: AT_SettleModeEnum;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode: AT_CalculateModeEnum;
	/*佣金计算方式文本

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	readonly calculateModeText: AT_CalculateModeEnum;
	/*固定开票价格*/
	invoicePrice: number;
	/*挂网价格*/
	minPreparationPrice?: number;
	/*结算凭证*/
	settlementBasis?: number;
	/*结算周期*/
	billingCycle?: number;
	/*备注*/
	note?: string;
	/*挂网编号*/
	netId?: number;
	/*合作状态：正常，过期

0 = 过期

1 = 正常*/
	cooperationAmountState?: AT_CooperationAmountState;
	/*合作状态：正常，过期

0 = 过期

1 = 正常*/
	readonly cooperationAmountStateText?: AT_CooperationAmountState;
	/*合作带量信息明细*/
	cooperationAmountDetails?: AT_CooperationAmountDetail[];
}

export enum AT_CooperationAmountSettlementBasis {
	凭流向 = 1,
	凭付款 = 2,
}

export enum AT_CooperationAmountState {
	过期 = 0,
	正常 = 1,
}

export declare interface AT_CooperationBaseInfoModel {
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeName: AT_BusinessCooperationMode;
	/*合作省份*/
	provinceName?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*客户名称*/
	clientName?: string;
	/*手机号码*/
	mobile?: string;
	/*城市*/
	cityName?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*实际控制人*/
	controller?: string;
	/*实际控制人名称*/
	controllerName?: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
}

export enum AT_CooperationBusinessCashWay {
	同期票折 = 1,
	后期票折 = 2,
	直接支付 = 3,
}

export declare interface AT_CooperationBusinessDeliveryRequestModel {
	/*唯一UKey：雪花算法*/
	uKey?: string;
	/*合作主流商业编码*/
	cooperationCode?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*产品编码*/
	productCode?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*配送费用兑付方式：同期票折，后期票折，直接支付*/
	cashWay?: number;
	/*配送费率:政策信息中的唯一键*/
	policyUKey?: string;
	/*出库单位：企业编码；*/
	outStockUnit?: string;
	/*收货单位：企业编码*/
	receiveUnit?: string;
	/*挂网价：最小制剂单位挂网价*/
	netPrice: number;
	/*开票价格*/
	invoicePrice?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_CooperationBusinessDeliveryViewModel {
	/*唯一UKey：雪花算法*/
	uKey?: string;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作主流商业编码*/
	cooperationCode?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*配送费用兑付方式：同期票折，后期票折，直接支付

1 = 同期票折

2 = 后期票折

3 = 直接支付*/
	cashWay: AT_CooperationBusinessCashWay;
	/*

1 = 同期票折

2 = 后期票折

3 = 直接支付*/
	readonly cashWayText: AT_CooperationBusinessCashWay;
	/*配送费率*/
	amountRate?: number;
	/*出库单位：企业编码；*/
	outStockUnit?: string;
	outStockUnitName?: string;
	/*收货单位：企业编码*/
	receiveUnit?: string;
	/*收货单位：企业编码*/
	receiveUnitName?: string;
	/*挂网价：最小制剂单位挂网价*/
	netPrice: number;
	/*开票价格*/
	invoicePrice?: number;
	/*合作省份*/
	provinceId?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_CooperationBusinessPageModel {
	/*Id*/
	id?: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作编码*/
	cooperationCode?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeText: AT_BusinessCooperationMode;
	/*合作省份ID*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*区域范围*/
	areaRangeName?: string;
	/*客户编码*/
	companyCode?: string;
	/*客户名称*/
	companyName?: string;
	/*收货单位*/
	receiveUnit?: string;
	/*收货单位*/
	receiveUnitName?: string;
}

export declare interface AT_CooperationBusinessPageModelIEnumerableInt32Tuple {
	item1?: AT_CooperationBusinessPageModel[];
	item2: number;
}

export declare interface AT_CooperationBusinessPolicyRequestModel {
	/*唯一ID*/
	uKey?: string;
	/*合作主流商业编码*/
	cooperationCode?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*带量品种配送费率*/
	amountRate?: number;
	/*非带量品种配送费率*/
	noAmountRate?: number;
	/*年度采购额度约定：单位：万元*/
	yearBuyQuota?: number;
	/*配送费率结算方案：终端回款价，中标价*/
	settleProgram?: number;
	/*配送费用兑付方式*/
	cashWays?: number[];
	/*其他约定*/
	otherAgree?: string;
	/*付款方式：电汇，承兑（多选）*/
	payMethods?: number[];
	/*付款周期：预付款，授信30天，授信60天，授信90天*/
	payPeriod?: number;
	/*备注*/
	note?: string;
	/*附件*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_CooperationBusinessPolicyViewModel {
	/*唯一ID*/
	uKey?: string;
	/*合作主流商业编码*/
	cooperationCode?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*带量品种配送费率*/
	amountRate?: number;
	/*非带量品种配送费率*/
	noAmountRate?: number;
	/*年度采购额度约定：单位：万元*/
	yearBuyQuota?: number;
	/*配送费率结算方案：终端回款价，中标价*/
	settleProgram?: number;
	/*配送费用兑付方式*/
	cashWays?: number[];
	/*其他约定*/
	otherAgree?: string;
	/*付款方式：电汇，承兑*/
	payMethods?: number[];
	/*付款周期：预付款，授信30天，授信60天，授信90天*/
	payPeriod?: number;
	/*备注*/
	note?: string;
	/*附件*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_CooperationBusinessQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*合作模式*/
	cooperationMode?: AT_QueryInt;
	/*合作省份ID*/
	provinceId?: AT_QueryInt;
	/*区域范围*/
	areaRangeName?: AT_QueryString;
	/*客户名称*/
	companyName?: AT_QueryString;
	/*收货单位*/
	receiveUnitName?: AT_QueryString;
	/*合作编码*/
	cooperationCode?: AT_QueryString;
}

export declare interface AT_CooperationBusinessRequestModel {
	/*合作编码*/
	cooperationCode?: string;
	/*合作模式*/
	cooperationMode?: number;
	/*合作省份*/
	provinceId?: number;
	/*区域范围*/
	areaRangeIds?: number[];
	/*客户名称*/
	companyCode?: string;
	/*是否集团公司*/
	isGroup?: number;
	/*实际控制人*/
	actualController?: number;
	/*收货单位*/
	receiveUnit?: string;
	/*折让约定*/
	discountGive?: string;
	/*拒收补货约定*/
	rejectReplenish?: string;
	/*终端破损处理原则*/
	damageHandle?: string;
	/*备注*/
	note?: string;
	/*政策信息列表*/
	cooperationBusinessPolicys?: AT_CooperationBusinessPolicyRequestModel[];
}

export declare interface AT_CooperationBusinessViewModel {
	/*合作编码*/
	cooperationCode?: string;
	/*合作模式*/
	cooperationMode?: number;
	/*合作省份*/
	provinceId?: number;
	/*区域范围*/
	areaRangeIds?: number[];
	/*客户名称*/
	companyCode?: string;
	/*是否集团公司*/
	isGroup?: number;
	/*实际控制人*/
	actualController?: number;
	/*收货单位*/
	receiveUnit?: string;
	/*折让约定*/
	discountGive?: string;
	/*拒收补货约定*/
	rejectReplenish?: string;
	/*终端破损处理原则*/
	damageHandle?: string;
	/*备注*/
	note?: string;
	/*政策列表*/
	cooperationBusinessPolicies?: AT_CooperationBusinessPolicyViewModel[];
	/*配送品种列表*/
	cooperationBusinessDeliveries?: AT_CooperationBusinessDeliveryViewModel[];
}

export declare interface AT_CooperationClientCode {
	clientCodes?: string[];
}

export declare interface AT_CooperationDeliveryModel {
	/*配送公司备案价格ID*/
	transferDeliveryPriceId: number;
	/*合作编码*/
	cooperationCode: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*配送公司编码：企业编码；收货单位*/
	deliveryCode: string;
	/*供应商：企业编码；出库单位*/
	supplierCode: string;
	/*开票价格*/
	invoicePrice: number;
	/*佣金价格*/
	commissionPrice: number;
	/*结算依据

1 = 凭流向

2 = 凭付款*/
	settlementBasis?: AT_CooperationAmountSettlementBasis;
	/*备注*/
	note?: string;
}

export declare interface AT_CooperationDeliverySearchModel {
	/*合作品种编码(前端必须要传值)*/
	cooperationCode?: string;
	/*流程状态*/
	flowState?: number;
	/*配送公司*/
	deliveryName?: string;
	/*是否启用*/
	isEnable?: number;
}

export declare interface AT_CooperationDeliverySimpleModel {
	/*配送Id*/
	id: number;
	/*合作品种编码*/
	cooperationCode?: string;
	/*产品编码：2043*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装单位*/
	packageUnit?: string;
	/*开票价格*/
	invoicePrice?: number;
}

export declare interface AT_CooperationDeliveryUpdateModel {
	/*流程ID*/
	flowId: number;
	/*结束日期*/
	endDate: string;
	/*备注*/
	note?: string;
}

export declare interface AT_CooperationDeliveryViewModel {
	/*配送公司备案价格ID*/
	transferDeliveryPriceId: number;
	/*合作编码*/
	cooperationCode: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*配送公司编码：企业编码；收货单位*/
	deliveryCode: string;
	/*供应商：企业编码；出库单位*/
	supplierCode: string;
	/*开票价格*/
	invoicePrice: number;
	/*佣金价格*/
	commissionPrice: number;
	/*结算依据

1 = 凭流向

2 = 凭付款*/
	settlementBasis?: AT_CooperationAmountSettlementBasis;
	/*备注*/
	note?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*配送公司名称：企业名称；收货单位*/
	deliveryName?: string;
	/*供应商：企业名称；出库单位*/
	supplierName?: string;
	/*基础信息*/
	baseInfoModel?: AT_CooperationGoodsModel;
	/*启用状态：是否启用：0是过期，1是正常*/
	isEnable: number;
	/*结算依据

1 = 凭流向

2 = 凭付款*/
	readonly settlementBasisText?: AT_CooperationAmountSettlementBasis;
}

export declare interface AT_CooperationEditModel {
	/*合作品种备注*/
	note?: string;
	/*合作备忘*/
	cooperationMemoModels?: AT_CooperationMemoModel[];
}

export declare interface AT_CooperationGoodsModel {
	/*产品编码*/
	productCode?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeName: AT_BusinessCooperationMode;
	/*合作省份*/
	provinceId?: string;
	/*合作省份名称*/
	provinceName?: string;
	/*客户*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*价格信息开始日期*/
	startDate?: string;
	/*价格信息结束日期*/
	endDate?: string;
}

export declare interface AT_CooperationMemoModel {
	/*Id*/
	id: number;
	/*合作内容*/
	content: string;
	/*添加人*/
	addUser?: string;
	/*添加人(还原用，传入不用管)*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_CooperationModel {
	/*主键Id*/
	id?: number;
	/*是否带量：否，是(传入用)*/
	isBring: number;
	/*合作模式：14*/
	cooperationMode: number;
	/*合作省份*/
	provinceId: number;
	/*产品编码*/
	productCode: string;
	/*客户编码*/
	clientCode: string;
	/*备注*/
	note?: string;
	/*断帐日期*/
	cutoffAccount?: string;
	/*对账日期*/
	checkAccount?: string;
	/*结算周期：15*/
	settleCycle?: number;
	/*是否重走流程（前端不需要管）*/
	isResetAudit: boolean;
	/*非带量信息数据*/
	cooperationNoAmountModels?: AT_CooperationNoAmountModel[];
	/*带量信息数据*/
	cooperationAmountModels?: AT_CooperationAmountModel[];
	/*合作备忘*/
	cooperationMemoModels?: AT_CooperationMemoModel[];
	/*配送商业*/
	cooperationDeliveryViewModels?: AT_CooperationDeliveryViewModel[];
	/*备案药品终端*/
	drugTerminalRecordModels?: AT_DrugTerminalRecordModel[];
}

export declare interface AT_CooperationNoAmountModel {
	/*Id*/
	id: number;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*政策类型*/
	policyType: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode: AT_SettleModeEnum;
	/*是否允许底价发货*/
	isFloorPrice: number;
	/*最低开票价*/
	invoicePrice: number;
	/*结算价格*/
	settlePrice: number;
	/*差额税率*/
	taxRate: number;
	/*是否锁定：否，是；锁定后不允许修改*/
	isLock?: number;
	/*合作状态：正常，过期

0 = 过期

1 = 正常*/
	cooperationNoAmountState?: AT_CooperationAmountState;
	/*合作状态：正常，过期

0 = 过期

1 = 正常*/
	readonly cooperationNoAmountStateText?: AT_CooperationAmountState;
	/*备注*/
	note?: string;
}

export declare interface AT_CooperationPageModel {
	/*自增ID*/
	id: number;
	/*合作编码：2048*/
	cooperationCode?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作省份*/
	provinceName?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*客户名称*/
	clientName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*客服专员编码*/
	commissioner?: string;
	/*客服专员名称名称*/
	commissionerName?: string;
	/*合作状态

0 = 过期

1 = 正常*/
	cooperationAmountState: AT_CooperationAmountState;
	/*合作状态

0 = 过期

1 = 正常*/
	readonly cooperationAmountStateText: AT_CooperationAmountState;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_CooperationPageModelIEnumerableInt32Tuple {
	item1?: AT_CooperationPageModel[];
	item2: number;
}

export declare interface AT_CooperationPolicyPriceModel {
	/*合作品种政策ID*/
	cooperationPolicyId?: number;
	/*配送商业ID：合作配送商业表ID*/
	cooperationDeliveryId?: number;
	/*结算价*/
	settlePrice?: number;
	/*佣金价*/
	commissionPrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*是否成功

1 = 成功

2 = 跨区间提示

3 = 多条政策提示*/
	resultStatus: AT_ResultState;
}

export declare interface AT_CooperationPolicyResultModel {
	/*产品编码：2043*/
	productCode?: string;
	/*注册规格*/
	regStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*当前开票价*/
	currentInvoicePrice?: number;
	/*原开票价*/
	beforeInvoicePrice?: number;
	/*当前配送商业id*/
	currentPolicyId?: number;
	/*原配送商业id*/
	beforePolicyId?: number;
	/*当前价格信息id*/
	currentPriceId?: number;
	/*原价格信息id*/
	beforePriceId?: number;
}

export declare interface AT_CooperationProvince {
	/*合作省份*/
	provinceId?: number;
	/*合作省份名称*/
	provinceName?: string;
}

export declare interface AT_CooperationQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*带量名称*/
	bringName?: AT_QueryList;
	/*合作模式*/
	cooperationMode?: AT_QueryInt;
	/*合作省份*/
	provinceId?: AT_QueryInt;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*是否带量：否，是*/
	isBring?: AT_QueryInt;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*客服专员名称名称*/
	commissionerName?: AT_QueryString;
	/*合作状态*/
	cooperationAmountState?: AT_QueryList;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_CooperationTerminalDetailsRequestModel {
	/*明细表主键ID*/
	id?: number;
	/*药品终端id*/
	drugTerminalId?: number;
	/*医疗机构名称*/
	organName?: string;
}

export declare interface AT_CooperationTerminalDetailsViewModel {
	/*明细ID*/
	id?: number;
	/*药品终端id*/
	drugTerminalId?: number;
	/*状态

1 = 正常

2 = 作废*/
	state: AT_DrugTerminalState;
	/*状态文本

1 = 正常

2 = 作废*/
	readonly stateText: AT_DrugTerminalState;
	/*省份*/
	provinceId?: number;
	/*省份*/
	provinceName?: string;
	/*城市*/
	cityId?: number;
	/*城市*/
	cityName?: string;
	/*区县*/
	areaId?: number;
	/*区县*/
	areaName?: string;
	/*医疗机构名称*/
	organName?: string;
	/*医疗机构类型*/
	organType?: string;
}

export declare interface AT_CooperationTerminalGetOverRequestModel {
	/*明细ID*/
	id?: number;
	/*末次结算时间*/
	lastDate?: string;
	/*结束时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_CooperationTerminalPageModel {
	/*明细表主键ID*/
	id?: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*状态

1 = 正常

2 = 作废*/
	state: AT_DrugTerminalState;
	/*状态

1 = 正常

2 = 作废*/
	readonly stateText: AT_DrugTerminalState;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份*/
	provinceName?: string;
	/*城市Id*/
	cityId?: number;
	/*城市*/
	cityName?: string;
	/*区县Id*/
	areaId?: number;
	/*区县*/
	areaName?: string;
	/*医疗机构名称*/
	organName?: string;
	/*医疗机构名称*/
	organType?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*末次结算时间*/
	lastDate?: string;
	/*申请人编码*/
	addUser?: string;
	/*申请人*/
	addUserName?: string;
	/*申请时间*/
	addTime?: string;
	/*申请时间*/
	readonly addTimeText?: string;
	/*合作编码*/
	cooperationCode?: string;
}

export declare interface AT_CooperationTerminalPageModelIEnumerableInt32Tuple {
	item1?: AT_CooperationTerminalPageModel[];
	item2: number;
}

export declare interface AT_CooperationTerminalQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryInt;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*省份Id*/
	provinceId?: AT_QueryInt;
	/*城市Id*/
	cityId?: AT_QueryInt;
	/*区县Id*/
	areaId?: AT_QueryInt;
	/*开始时间*/
	startDate?: AT_QueryDateTime;
	/*结束时间*/
	endDate?: AT_QueryDateTime;
	/*申请人*/
	addUserName?: AT_QueryString;
	/*申请时间*/
	addTime?: AT_QueryDateTime;
	/*合作品种*/
	cooperationCode?: AT_QueryString;
	/*医疗机构名称*/
	organName?: AT_QueryString;
}

export declare interface AT_CooperationTerminalRequestModel {
	/*主键ID*/
	id?: number;
	/*合作编码*/
	cooperationCode?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
	/*药品终端ID列表*/
	cooperationTerminalDetails?: AT_CooperationTerminalDetailsRequestModel[];
}

export declare interface AT_CooperationTerminalViewModel {
	/*主键ID*/
	id?: number;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*省份*/
	provinceId?: number;
	/*城市*/
	cityId?: number;
	/*产品编码*/
	productCode?: string;
	/*合作编码*/
	cooperationCode?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
	/*药品终端ID列表*/
	cooperationTerminalDetails?: AT_CooperationTerminalDetailsViewModel[];
}

export declare interface AT_CooperationViewModel {
	/*主键Id*/
	id?: number;
	/*是否带量：否，是(传入用)*/
	isBring: number;
	/*合作模式：14*/
	cooperationMode: number;
	/*合作省份*/
	provinceId: number;
	/*产品编码*/
	productCode: string;
	/*客户编码*/
	clientCode: string;
	/*备注*/
	note?: string;
	/*断帐日期*/
	cutoffAccount?: string;
	/*对账日期*/
	checkAccount?: string;
	/*结算周期：15*/
	settleCycle?: number;
	/*是否重走流程（前端不需要管）*/
	isResetAudit: boolean;
	/*非带量信息数据*/
	cooperationNoAmountModels?: AT_CooperationNoAmountModel[];
	/*带量信息数据*/
	cooperationAmountModels?: AT_CooperationAmountModel[];
	/*合作备忘*/
	cooperationMemoModels?: AT_CooperationMemoModel[];
	/*配送商业*/
	cooperationDeliveryViewModels?: AT_CooperationDeliveryViewModel[];
	/*备案药品终端*/
	drugTerminalRecordModels?: AT_DrugTerminalRecordModel[];
	/*合作编码：2048*/
	cooperationCode?: string;
	/*合作省份名称*/
	provinceName?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作品种基础信息模型*/
	cooperationBaseInfoModel?: AT_CooperationBaseInfoModel;
}

export enum AT_CostAccountType {
	系统账户 = 1,
	指定账户 = 2,
}

export declare interface AT_CostDetailModel {
	/*明细Id*/
	id?: number;
	/*科目*/
	subject?: number;
	/*科目文本*/
	subjectName?: string;
	/*费用金额*/
	costMoney?: number;
	/*项目名称：项目管理表ID*/
	projectManageId?: number;
	/*项目名称：项目管理表ID*/
	projectManageName?: string;
	/*发票金额*/
	invoiceMoney?: number;
	/*摘要*/
	summary?: string;
}

export declare interface AT_CostModel {
	/*申请人*/
	applyUser?: string;
	/*申请人*/
	applyUserName?: string;
	/*付款方式*/
	bankBookCode?: string;
	/*付款公司*/
	companyCode?: string;
	/*付款公司*/
	companyName?: string;
	/*报销时间*/
	costDate?: string;
	/*报销说明*/
	costNote?: string;
	/*类型：院领导维护、日常商务费用、资金池、其他*/
	costType?: number;
	/*账户类型：系统账户；指定账户

1 = 系统账户

2 = 指定账户*/
	accountType: AT_CostAccountType;
	/*所属部门*/
	depCode?: string;
	/*所属部门*/
	depName?: string;
	/*所属岗位*/
	postCode?: string;
	/*所属部门*/
	postName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	payWay: AT_CostPaymentMethod;
	/*收款单位*/
	receiveUnit?: string;
	/*收款银行*/
	receiveBank?: string;
	/*收款单位编码*/
	receiveUnitCode?: string;
	/*收款银行*/
	receiveBankCode?: string;
	/*收款银行卡*/
	receiveBankCard?: string;
	/*费用报销详情*/
	costDetailModels?: AT_CostDetailModel[];
	/*费用报销附件*/
	costAttachments?: AT_AttachmentModel[];
}

export declare interface AT_CostPageModel {
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_MoneyPayState;
	/*付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	payWay: AT_CostPaymentMethod;
	/*费用报销付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	readonly payWayText: AT_CostPaymentMethod;
	/*类型*/
	costTypeText?: string;
	/*报销时间*/
	costDate?: string;
	/*申请人*/
	applyUserName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*总费用金额*/
	totalCostMoney?: number;
	/*总发票金额*/
	totalInvoiceMoney?: number;
	/*项目费用金额*/
	projectCostMoney?: number;
	/*单号*/
	costCode?: string;
	/*项目Id*/
	projectManageId?: number;
	/*项目名称*/
	projectManageName?: string;
	/*报销说明*/
	costNote?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_CostPageModelIEnumerableInt32Tuple {
	item1?: AT_CostPageModel[];
	item2: number;
}

export enum AT_CostPaymentMethod {
	公对公 = 1,
	公对私 = 2,
	公对公_历史数据 = 3,
}

export declare interface AT_CostQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请人*/
	applyUserName?: AT_QueryString;
	/*类型*/
	costType?: AT_QueryInt;
	/*单号*/
	costCode?: AT_QueryString;
	/*报销时间*/
	costDate?: AT_QueryDateTime;
	/*付款方式*/
	payWay?: AT_QueryList;
	/*项目名称*/
	projectManageName?: AT_QueryString;
}

export declare interface AT_CostViewModel {
	/*申请人*/
	applyUser?: string;
	/*申请人*/
	applyUserName?: string;
	/*付款方式*/
	bankBookCode?: string;
	/*付款公司*/
	companyCode?: string;
	/*付款公司*/
	companyName?: string;
	/*报销时间*/
	costDate?: string;
	/*报销说明*/
	costNote?: string;
	/*类型：院领导维护、日常商务费用、资金池、其他*/
	costType?: number;
	/*账户类型：系统账户；指定账户

1 = 系统账户

2 = 指定账户*/
	accountType: AT_CostAccountType;
	/*所属部门*/
	depCode?: string;
	/*所属部门*/
	depName?: string;
	/*所属岗位*/
	postCode?: string;
	/*所属部门*/
	postName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	payWay: AT_CostPaymentMethod;
	/*收款单位*/
	receiveUnit?: string;
	/*收款银行*/
	receiveBank?: string;
	/*收款单位编码*/
	receiveUnitCode?: string;
	/*收款银行*/
	receiveBankCode?: string;
	/*收款银行卡*/
	receiveBankCard?: string;
	/*费用报销详情*/
	costDetailModels?: AT_CostDetailModel[];
	/*费用报销附件*/
	costAttachments?: AT_AttachmentModel[];
	/*报销编码*/
	costCode?: string;
	/*付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	readonly payWayText: AT_CostPaymentMethod;
	/*付款银行名称*/
	bankName?: string;
	/*

1 = 系统账户

2 = 指定账户*/
	readonly accountTypeText: AT_CostAccountType;
}

export declare interface AT_CurrentAvailableContractRequestModel {
	/*前端列表唯一标识*/
	uniquelyId?: string;
	/*订单数量*/
	orderAmount?: number;
}

export declare interface AT_DailyLogBulletinViewModel {
	/*自增ID*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*公告类型：通知，货源信息*/
	type?: string;
	/*标题*/
	title?: string;
	/*公告内容*/
	contentAbb?: string;
	/*更新时间*/
	updTime?: string;
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
}

export declare interface AT_DailyLogPageCountModel {
	/*总条数*/
	totalCount: number;
	/*未读的*/
	unReadCount: number;
	/*分享给我的*/
	shareCount: number;
	/*我创建的*/
	createCount: number;
	/*我评论的*/
	commentCount: number;
	/*我收藏的*/
	favoriteCount: number;
}

export declare interface AT_DailyLogRequestModel {
	/*自增ID*/
	id: number;
	/*报告标题*/
	title: string;
	/*报告类型：工作日志，事务报告，工作周报，工作月报，季深度报告，年度述职，周计划，月计划，经验分享,，通报，问题呈现，药事会通知，学术协议，滞销通知*/
	type: number;
	/*报告内容*/
	content?: string;
	/*内容简视：去掉HTML标签，取前500个字符*/
	contentAbb?: string;
	/*报告状态：草稿，正式*/
	state: number;
	/*附件列表*/
	dailylogAttachments?: AT_DailylogRequestAttachment[];
	/*分享列表*/
	dailylogRequestShares?: AT_DailylogRequestShare[];
}

export declare interface AT_DailyLogRequsetComment {
	/*报告主表ID*/
	dailylogId: number;
	/*报告评论表ID*/
	dailylogCommentId?: number;
	/*被评论人*/
	commentTarget?: string;
	/*评论内容*/
	content?: string;
}

export declare interface AT_DailyLogViewModel {
	/*自增ID*/
	id: number;
	/*报告标题*/
	title?: string;
	/*报告类型：工作日志，事务报告，工作周报，工作月报，季深度报告，年度述职，周计划，月计划，经验分享,，通报，问题呈现，药事会通知，学术协议，滞销通知*/
	type: number;
	/*类型名称*/
	typeName?: string;
	/*报告内容*/
	content?: string;
	/*内容简视：去掉HTML标签，取前500个字符*/
	contentAbb?: string;
	/*报告状态：草稿，正式*/
	state: number;
	/*点赞数*/
	praiseCount: number;
	/*是否点赞*/
	isPraise: number;
	/*分享数*/
	shareCount: number;
	/*收藏数*/
	favoriteCount: number;
	/*是否收藏*/
	isFavorite: number;
	/*添加人名称*/
	addUser?: string;
	/*添加人名称*/
	addUserName?: string;
	/*部门名称*/
	depName?: string;
	/*添加时间*/
	addTime?: string;
	/*更新时间*/
	updTime?: string;
	/*修改次数*/
	updateCount?: number;
	/*附件列表*/
	dailylogAttachments?: AT_DailylogRequestAttachment[];
	/*分享列表*/
	dailylogViewShares?: AT_DailylogViewShare[];
	/*点赞人列表*/
	dailylogViewPraises?: AT_DailylogViewPraise[];
}

export declare interface AT_DailylogCommentBaseViewModel {
	/*评论主键Id*/
	id: number;
	/*报告主表ID*/
	dailylogId: number;
	/*评论人*/
	commentUser?: string;
	/*评论人名称*/
	commentUserName?: string;
	/*评论内容*/
	content?: string;
	/*更新时间*/
	updTime?: string;
	isMySelfComment: boolean;
	/*二级评论*/
	children?: AT_DailylogCommentChildrenViewModel[];
}

export declare interface AT_DailylogCommentChildrenViewModel {
	/*评论主键Id*/
	id: number;
	/*报告主表ID*/
	dailylogId: number;
	/*评论人*/
	commentUser?: string;
	/*评论人名称*/
	commentUserName?: string;
	/*评论内容*/
	content?: string;
	/*更新时间*/
	updTime?: string;
	isMySelfComment: boolean;
	/*二级评论*/
	children?: AT_DailylogCommentChildrenViewModel[];
	/*报告评论表ID*/
	dailylogCommentId?: number;
	/*被评论人*/
	commentTarget?: string;
	/*被评论人名称*/
	commentTargetName?: string;
}

export declare interface AT_DailylogPageModel {
	/*Id主键*/
	id: number;
	/*标题*/
	title?: string;
	/*报告类型Id*/
	type: number;
	/*报告类型名称*/
	typeName?: string;
	/*制单人编码*/
	addUser?: string;
	/*制单人名称*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*查看数*/
	readCount: number;
	/*评论数*/
	commentCount: number;
	/*点赞数*/
	praiseCount: number;
	/*部门名称*/
	depName?: string;
	/*状态：存草稿，提交*/
	state: number;
	/*是否是自己创建的*/
	isCreateMySelf: boolean;
}

export declare interface AT_DailylogPageModelIEnumerableInt32Tuple {
	item1?: AT_DailylogPageModel[];
	item2: number;
}

export declare interface AT_DailylogQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*报告类型*/
	type?: AT_QueryInt;
	/*搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_DailylogRequestAttachment {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*报告主表Id*/
	dailyLogId: number;
}

export declare interface AT_DailylogRequestShare {
	/*报告主表ID*/
	dailylogId: number;
	/*被分享人*/
	shareUser?: string;
}

export declare interface AT_DailylogViewPraise {
	/*报告主表ID*/
	dailylogId: number;
	/*点赞人*/
	praiseUser?: string;
	/*点赞人名称*/
	praiseUserName?: string;
}

export declare interface AT_DailylogViewShare {
	/*报告主表ID*/
	dailylogId: number;
	/*被分享人*/
	shareUser?: string;
	/*被分享人名称*/
	shareUserName?: string;
	/*是否已读*/
	isRead: number;
}

export enum AT_DataSource {
	销售通知单 = 1,
	销售退货单 = 2,
	销售调价冲票单 = 3,
}

export declare interface AT_DealRequestModel {
	/*id*/
	id: number;
	/*处理方式：已邮寄、随货同行

1 = 已邮寄

2 = 随货同行*/
	handleMode?: AT_HandleMode;
	/*快递公司*/
	expressCompany?: string;
	/*快递单号*/
	expressNo?: string;
	/*邮寄时间*/
	postDate?: string;
	/*收件人*/
	addressee?: string;
	/*收件地址*/
	address?: string;
	/*处理备注*/
	handleNote?: string;
}

export declare interface AT_DecimalStringTuple {
	item1: number;
	item2?: string;
}

export declare interface AT_DelTradeRequestModel {
	ids?: number[];
}

export declare interface AT_DeliveryAuditModel {
	/*企业编码*/
	companyCode?: string;
	/*审核意见*/
	chechReason?: string;
}

export declare interface AT_DeliveryAuditPageModel {
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*所属省份*/
	provinceId?: number;
	/*所属省份名称*/
	provinceName?: string;
	/*所属区域*/
	cityId?: number;
	/*所属区域名称*/
	cityName?: string;
	/*注册地址*/
	registerAddress?: string;
	/*统一社会信用代码*/
	creditCode?: string;
}

export declare interface AT_DeliveryAuditPageModelIEnumerableInt32Tuple {
	item1?: AT_DeliveryAuditPageModel[];
	item2: number;
}

export declare interface AT_DeliveryAuditQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
}

export declare interface AT_DeliveryCompanyAuditModel {
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*所属省份*/
	provinceId?: number;
	/*所属区域*/
	cityId?: number;
	/*统一社会信用代码*/
	creditCode?: string;
	/*主营业务*/
	mainBusiness?: string;
	/*公司简介*/
	introduction?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*企业经营许可证*/
	businessLicense?: AT_TransferCompanyLicenseModel;
	/*企业生产许可证*/
	productionLicense?: AT_TransferCompanyLicenseModel;
	/*企业收货信息*/
	companyReceipts?: AT_TransferCompanyReceiptModel[];
	/*企业开票信息*/
	companyInvoice?: AT_TransferCompanyInvoiceModel;
	/*企业基本账户信息*/
	companyBank?: AT_TransferCompanyBankModel;
}

export declare interface AT_DeliveryListModel {
	id?: number;
	deliveryCode?: string;
	note?: string;
}

export declare interface AT_DeliveryPrintModel {
	/*订单编码*/
	orderCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*备注*/
	note?: string;
	/*采购产品*/
	purchaseOrderDetail?: AT_PurchaseOrderDetailsViewModel;
	/*收货信息*/
	companyReceipts?: AT_CompanyReceiptModel[];
	/*开票信息*/
	companyInvoices?: AT_CompanyInvoiceModel[];
	/*收件信息*/
	companyReceives?: AT_CompanyReceiveModel[];
}

export declare interface AT_DeliveryRateRequestModel {
	/*合作编码*/
	cooperationCode?: string;
	/*是否带量*/
	isBring: boolean;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
}

export declare interface AT_DeliveryViewModel {
	id?: number;
	deliveryName?: string;
	deliveryCode?: string;
	note?: string;
}

export declare interface AT_DepModel {
	depCode?: string;
	depName?: string;
}

export declare interface AT_DepartmentStruct {
	firstLevelDepartments?: AT_FirstLevelDepartment[];
}

export declare interface AT_DepartmentUesr {
	/*用户Code*/
	userCode?: string;
	/*用户名称*/
	userName?: string;
}

export declare interface AT_DevelopModel {
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType: number;
	/*注册分类*/
	category?: number;
	/*受理号*/
	accept?: string;
	/*注册药品名称*/
	drugName: string;
	/*注册剂型*/
	dosageForm: string;
	/*注册规格*/
	standard: string;
	/*生产企业：企业编码*/
	manufacturer: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*备注*/
	note?: string;
	/*研发项目进度*/
	developSchedules?: AT_DevelopScheduleViewModel[];
}

export declare interface AT_DevelopPageModel {
	/*自增ID*/
	id: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*受理号*/
	accept?: string;
	/*注册药品名称*/
	drugName?: string;
	/*注册剂型*/
	dosageForm?: string;
	/*注册规格*/
	standard?: string;
	/*是否转产品目录：未转，已转*/
	isGoods?: number;
	/*是否转注册批件：未转，已转*/
	readonly isGoodsDisPlay?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*上市许可持有人名称*/
	holderName?: string;
	/*备注*/
	note?: string;
	/*药品类型名称*/
	drugTypeName?: string;
	/*申请类型名称*/
	applyTypeName?: string;
	/*注册分类名称*/
	categoryName?: string;
	/*项目进度*/
	developScheduleTypeName?: string;
	/*进度开始时间*/
	startDate?: string;
	/*进度开始时间*/
	readonly startDateDisPaly?: string;
}

export declare interface AT_DevelopPageModelIEnumerableInt32Tuple {
	item1?: AT_DevelopPageModel[];
	item2: number;
}

export declare interface AT_DevelopQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*药品名称*/
	drugName?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*上市许可持有人*/
	holder?: AT_QueryString;
	/*受理号*/
	accept?: AT_QueryString;
	/*药品类型，*/
	drugType?: AT_QueryInt;
	/*申请类型，*/
	applyType?: AT_QueryInt;
	/*生产企业名称*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人名称*/
	holderName?: AT_QueryString;
	/*Id集合*/
	ids?: AT_QueryList;
	/*流程状态*/
	flowState?: AT_QueryList;
}

export declare interface AT_DevelopScheduleViewModel {
	/*进度类型*/
	type?: number;
	/*开始日期*/
	startDate?: string;
	/*预计结束日期*/
	endDate?: string;
	/*进度类型名称*/
	typeName?: string;
}

export declare interface AT_DevelopViewModel {
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType: number;
	/*注册分类*/
	category?: number;
	/*受理号*/
	accept?: string;
	/*注册药品名称*/
	drugName: string;
	/*注册剂型*/
	dosageForm: string;
	/*注册规格*/
	standard: string;
	/*生产企业：企业编码*/
	manufacturer: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*备注*/
	note?: string;
	/*研发项目进度*/
	developSchedules?: AT_DevelopScheduleViewModel[];
	/*自增ID*/
	id: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*生产企业名称*/
	manufacturerName?: string;
	/*上市许可持有人名称*/
	holderName?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*申请类型*/
	applyTypeName?: string;
	/*注册分类*/
	categoryName?: string;
	/*是否转产品目录：未转，已转*/
	isGoods?: number;
}

export declare interface AT_DispatchAuthorizationToRoleModel {
	/*分配权限值*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
	/*角色id*/
	roleId: number;
	/*页面路由*/
	sysRouteIds?: number[];
}

export declare interface AT_DispatchAuthorizationToUserModel {
	/*分配权限值*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
	/*账户编码*/
	employeeCode: string;
	/*页面路由*/
	sysRouteIds?: number[];
}

export declare interface AT_DispatchRoleModel {
	/*角色Id*/
	roleId: number;
	/*员工编码*/
	employeeCodes?: string[];
}

export enum AT_DivideStatus {
	未分配 = 0,
	分配中 = 1,
	已分配 = 2,
}

export declare interface AT_DrmClientAccountViewModel {
	/*医药公司名称*/
	companyName?: string;
	/*手机号码*/
	mobile?: string;
	/*姓名*/
	name?: string;
	/*意向代理省份*/
	provinceId?: number;
	/*用户团队信息*/
	teamInfo?: AT_TeamInfoViewModel;
	/*用户编码*/
	userCode?: string;
	/*用户收件信息列表*/
	userReceives?: AT_UserReceiveViewModel[];
}

export declare interface AT_DrugTerminalModel {
	/*自增ID*/
	id?: number;
	/*所在地*/
	seat?: number;
	/*地市*/
	city?: number;
	/*地级*/
	area?: number;
	/*医疗机构名称*/
	organName?: string;
	/*医疗机构类型*/
	organType?: string;
	/*医疗机构等级*/
	organLevel?: string;
	/*详细地址*/
	organAddress?: string;
	/*开通情况*/
	organOpen?: string;
	/*配送特点*/
	deliveryVirtue?: string;
	/*折让方式*/
	discountMethod?: string;
	/*打折扣率*/
	discountRate?: string;
	/*是否注销*/
	isCancel?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_DrugTerminalPageModel {
	/*自增ID*/
	id: number;
	/*状态

1 = 正常

2 = 作废*/
	state: AT_DrugTerminalState;
	/*状态文本

1 = 正常

2 = 作废*/
	readonly stateText: AT_DrugTerminalState;
	/*省份*/
	seat?: string;
	/*地市*/
	city?: string;
	/*区县*/
	area?: string;
	/*医疗机构名称*/
	organName?: string;
	/*医疗机构类型*/
	organType?: string;
	/*医疗机构等级*/
	organLevel?: string;
	/*详细地址*/
	organAddress?: string;
	/*开通情况*/
	organOpen?: string;
	/*配送特点*/
	deliveryVirtue?: string;
	/*折让方式*/
	discountMethod?: string;
	/*打折扣率*/
	discountRate?: string;
	/*备注*/
	note?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_DrugTerminalPageModelIEnumerableInt32Tuple {
	item1?: AT_DrugTerminalPageModel[];
	item2: number;
}

export declare interface AT_DrugTerminalQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	id?: AT_QueryList;
	/*所在地*/
	seat?: AT_QueryInt;
	/*状态*/
	state?: AT_QueryInt;
	/*地市*/
	city?: AT_QueryInt;
	/*地级*/
	area?: AT_QueryString;
	/*医疗机构名称*/
	organName?: AT_QueryString;
	/*医疗机构类型*/
	organType?: AT_QueryString;
	/*医疗机构等级*/
	organLevel?: AT_QueryString;
	/*详细地址*/
	organAddress?: AT_QueryString;
	/*开通情况*/
	organOpen?: AT_QueryString;
	/*配送特点*/
	deliveryVirtue?: AT_QueryString;
	/*折让方式*/
	discountMethod?: AT_QueryString;
	/*打折扣率*/
	discountRate?: AT_QueryString;
	/*是否注销*/
	isCancel?: AT_QueryString;
	/*备注*/
	note?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
	/*添加时间*/
	addTime?: AT_QueryDateTime;
}

export declare interface AT_DrugTerminalRecordModel {
	/*药品终端编号*/
	drugTerminalId?: number;
	/*添加时间(还原用，传入不用管)*/
	addTime?: string;
	/*添加人(还原用，传入不用管)*/
	addUser?: string;
	/*药品终端名称*/
	organName?: string;
}

export declare interface AT_DrugTerminalSimpleModel {
	/*自增ID*/
	id: number;
	/*医疗机构名称*/
	organName?: string;
	/*省*/
	province?: string;
	/*市*/
	city?: string;
	/*区县*/
	area?: string;
}

export enum AT_DrugTerminalState {
	正常 = 1,
	作废 = 2,
}

export enum AT_EarnestDataType {
	货款保证金 = 1,
	市场保证金 = 2,
}

export enum AT_EarnestDeliveryState {
	转交客服 = 1,
	客服已收取 = 2,
	客服已投递 = 3,
	客服已收回 = 4,
	财务已回收 = 5,
}

export declare interface AT_EarnestDetailsRequestModel {
	/*产品编码：来自招商目录，根据意向代理省份筛选*/
	productCode?: string;
	/*付款金额*/
	paymentAmount?: number;
	/*详细编码*/
	earnestDetailsCode?: string;
	/*数量*/
	amount?: number;
	/*保证金用途：开发保证金、上量保证金、招标保证金、医保保证金*/
	earnestUse?: number;
	/*退款条件*/
	backLimit?: string;
	/*备注*/
	note?: string;
	/*SysCode*/
	sysCode?: string;
	/*FromUuid*/
	fromUuid?: string;
	/*附件列表*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_EarnestDetailsViewModel {
	id?: number;
	/*产品编码：来自招商目录，根据意向代理省份筛选*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*付款金额*/
	paymentAmount?: number;
	/*数量*/
	amount?: number;
	/*保证金用途*/
	earnestUse?: number;
	/*退款条件*/
	backLimit?: string;
	/*备注*/
	note?: string;
	/*SysCode*/
	sysCode?: string;
	/*FromUuid*/
	fromUuid?: string;
	/*详细编码*/
	earnestDetailsCode?: string;
	/*附件列表*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_EarnestPageModel {
	/*自增ID*/
	id: number;
	/*付款状态(待认款；已认款；申请退款；部分退款；已退款)

0 = 待认款

1 = 已认款

2 = 申请退款

3 = 部分退款

4 = 已退款*/
	state: AT_EarnestPaymentState;
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType: AT_EarnestType;
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	readonly earnestTypeText: AT_EarnestType;
	/*货款保证金 退款状态(申请退回；部分退回；已退回)
市场保证金 退款状态：已退款、部分退款、未退款，回款金额=已退金额为已退款，已退金额=0为未退款，其余的为部分退款。支持排序，默认不排序

1 = 未退款

2 = 部分退款

3 = 已退款*/
	returnState?: AT_EarnestReturnStateType;
	/*退款状态文本

1 = 未退款

2 = 部分退款

3 = 已退款*/
	readonly returnStateText?: AT_EarnestReturnStateType;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse?: AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText?: AT_EarnestUse;
	/*投递状态

1 = 转交客服

2 = 客服已收取

3 = 客服已投递

4 = 客服已收回

5 = 财务已回收*/
	saleEarnestProcessReceiptState?: AT_EarnestDeliveryState;
	/*投递状态

1 = 转交客服

2 = 客服已收取

3 = 客服已投递

4 = 客服已收回

5 = 财务已回收*/
	readonly saleEarnestProcessReceiptStateText?: AT_EarnestDeliveryState;
	/*退款时间：取该货款保证金所有退款付款单中最新的付款时间。支持排序，默认不排序*/
	refundTime?: string;
	/*市场保证金页面 已退金额：取该市场保证金所有退款付款单中已经付款了的金额之和*/
	refundedMoney?: number;
	/*未退金额*/
	readonly leftMoney?: number;
	/*付款公司*/
	paymentCompany?: string;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: string;
	/*付款账号*/
	paymentAccount?: string;
	/*收款公司*/
	collectCompany?: string;
	/*收款账号*/
	collectAccount?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*付款时间*/
	paymentTime?: string;
	/*付款金额*/
	paymentAmount?: number;
	/*明细编码*/
	earnestDetailsCode?: string;
	/*中专表主单Id(外面列表里带过来)*/
	earnestId?: number;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*公司编码*/
	companyCode?: string;
	/*产品编码*/
	productCode?: string;
	/*保证金类型

1 = 货款保证金

2 = 市场保证金*/
	type: AT_EarnestDataType;
	/*回款银行*/
	bankName?: string;
	/*制单人人*/
	addUser?: string;
	/*制单时间*/
	addTime?: string;
	/*更新日期（显示）*/
	readonly addTimeDisplay?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*流程Id*/
	flowId: number;
	/*收据号*/
	billNo?: string;
	/*实际已回金额*/
	hasBackMoney: number;
	/*待回款金额*/
	waitBackMoney: number;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	moneyBackState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly moneyBackStateText: AT_MoneyBackState;
	/*回款金额*/
	backMoney: number;
	/*回款账户(编码)*/
	backCardCode?: string;
	/*回款账户(名称 列表回写)*/
	bankCardName?: string;
	/*制单单号*/
	earnestCode?: string;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_EarnestPageModelIEnumerableInt32Tuple {
	item1?: AT_EarnestPageModel[];
	item2: number;
}

export enum AT_EarnestPaymentState {
	待认款 = 0,
	已认款 = 1,
	申请退款 = 2,
	部分退款 = 3,
	已退款 = 4,
}

export declare interface AT_EarnestQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产企业：企业名称*/
	manufacturer?: AT_QueryString;
	/*付款公司*/
	paymentCompany?: AT_QueryString;
	/*付款状态(待认款；已认款；申请退款；部分退款；已退款)*/
	state?: AT_QueryInt;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*付款金额*/
	paymentAmount?: AT_QueryInt;
	/*收款公司*/
	saleEarnestCollectCompany?: AT_QueryString;
	/*收款公司*/
	collectCompany?: AT_QueryString;
	/*保证金科目*/
	earnestType?: AT_QueryInt;
	/*详细包装*/
	packageStandard?: AT_QueryString;
	/*制单单号*/
	earnestCode?: AT_QueryString;
	/*收据号*/
	billNo?: AT_QueryString;
	/*回款状态*/
	moneyBackState?: AT_QueryInt;
	type?: AT_QueryInt;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*退款状态*/
	returnState?: AT_QueryList;
	/*退款时间*/
	refundTime?: AT_QueryDateTime;
	/*投递状态*/
	saleEarnestProcessReceiptState?: AT_QueryList;
	/*省份(下拉多选)*/
	provinceId?: AT_QueryList;
}

export declare interface AT_EarnestRefundApplyModel {
	/*销售保证金退回编码(转单使用)*/
	saleEarnestRefundCode?: string;
	/*保证金产品明细表编码*/
	earnestDetailsCode: string;
	/*产品编码：来自招商目录，根据意向代理省份筛选*/
	productCode?: string;
	/*退款金额*/
	refundMoney: number;
	/*收款公司*/
	recoverCompany?: string;
	/*收款账号*/
	recoverAccount?: string;
	/*付款公司编码*/
	companyCode?: string;
	/*付款公司*/
	collectCompany?: string;
	/*付款账号：银行卡编码*/
	bankCardCode?: string;
	/*付款账号*/
	collectAccount?: string;
	/*退回原因*/
	refundNote: string;
	/*备注*/
	note?: string;
}

export declare interface AT_EarnestRefundApplyPageModel {
	/*主键Id*/
	id: number;
	/*FlowId*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*退款状态(申请退回；部分退回；已退回)

1 = 未退款

2 = 部分退款

3 = 已退款*/
	returnState?: AT_EarnestReturnStateType;
	/*退款状态文本

1 = 未退款

2 = 部分退款

3 = 已退款*/
	readonly returnStateText?: AT_EarnestReturnStateType;
	/*退款时间*/
	refundTime?: string;
	/*付款公司*/
	collectCompany?: string;
	/*收款公司*/
	recoverCompany?: string;
	/*保证金类型（保证金科目）：单次货款保证金；长期货款保证金；市场保证金；招标保证金

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType?: AT_EarnestType;
	/*保证金类型文本

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	readonly earnestTypeText?: AT_EarnestType;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controller?: string;
	/*本次申请退款金额*/
	refundMoney?: number;
	/*已付金额*/
	payedMoney?: number;
	/*未付金额*/
	readonly leftMoney?: number;
	/*保证金退回编码*/
	saleEarnestRefundCode?: string;
	/*回款单号*/
	backCode?: string;
	/*制单人*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*保证金用途：开发保证金、上量保证金、招标保证金、医保保证金

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse?: AT_EarnestUse;
	/*退款状态文本

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText?: AT_EarnestUse;
}

export declare interface AT_EarnestRefundApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_EarnestRefundApplyPageModel[];
	item2: number;
}

export declare interface AT_EarnestRefundApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*退款状态*/
	returnState?: AT_QueryList;
	/*退款时间*/
	refundTime?: AT_QueryDateTime;
	/*保证金科目*/
	earnestType?: AT_QueryList;
	/*付款公司*/
	collectCompany?: AT_QueryString;
	/*收款公司*/
	recoverCompany?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controller?: AT_QueryString;
	/*保证金用途：开发保证金、上量保证金、招标保证金、医保保证金*/
	earnestUse?: AT_QueryList;
}

export declare interface AT_EarnestRefundApplyRecordModel {
	/*销售保证金退回编码*/
	saleEarnestRefundCode?: string;
	/*保证金类型（保证金科目）：单次货款保证金；长期货款保证金；市场保证金；招标保证金

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType?: AT_EarnestType;
	/*保证金类型文本

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	readonly earnestTypeText?: AT_EarnestType;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*付款公司*/
	collectCompany?: string;
	/*付款账号*/
	collectAccount?: string;
	/*收款公司*/
	recoverCompany?: string;
	/*收款账号*/
	recoverAccount?: string;
	/*回款金额*/
	backMoney: number;
	/*退款金额*/
	refundMoney?: number;
	/*退回原因*/
	refundNote?: string;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse: AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText: AT_EarnestUse;
}

export declare interface AT_EarnestRefundApplyViewModel {
	/*销售保证金退回编码(转单使用)*/
	saleEarnestRefundCode?: string;
	/*保证金产品明细表编码*/
	earnestDetailsCode: string;
	/*产品编码：来自招商目录，根据意向代理省份筛选*/
	productCode?: string;
	/*退款金额*/
	refundMoney: number;
	/*收款公司*/
	recoverCompany?: string;
	/*收款账号*/
	recoverAccount?: string;
	/*付款公司编码*/
	companyCode?: string;
	/*付款公司*/
	collectCompany?: string;
	/*付款账号：银行卡编码*/
	bankCardCode?: string;
	/*付款账号*/
	collectAccount?: string;
	/*退回原因*/
	refundNote: string;
	/*备注*/
	note?: string;
	/*自增ID*/
	id?: number;
	/*流程ID*/
	flowId?: number;
	/*保证金编码*/
	earnestCode?: string;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*保证金科目

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType?: AT_EarnestType;
	/*保证金科目文本*/
	readonly earnestTypeText?: string;
	/*客户名称*/
	clientName?: string;
	/*通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*已退款金额*/
	refundedMoney?: number;
	/*回款金额*/
	backMoney: number;
	/*回款时间*/
	backTime?: string;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse: AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText: AT_EarnestUse;
	/*退款条件*/
	backLimit?: string;
	/*金额*/
	money?: number;
}

export declare interface AT_EarnestRefundPayRecordModel {
	/*付款记录Id*/
	id: number;
	/*付款时间*/
	payDate?: string;
	/*本次申请退款金额*/
	refundMoney?: number;
	/*本次付款金额*/
	money?: number;
}

export declare interface AT_EarnestRequestModel {
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)*/
	earnestType: number;
	/*付款公司*/
	paymentCompany: string;
	/*付款账号*/
	paymentAccount?: string;
	/*付款时间*/
	paymentTime?: string;
	/*回款公司*/
	companyCode: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*保证金用途：开发保证金、上量保证金、招标保证金、医保保证金*/
	earnestUse?: number;
	/*数据类型：货款保证金，市场保证金*/
	type: number;
	/*回款银行：账套编码；根据回款账户带出*/
	backBookCode?: string;
	/*回款账号：银行卡编码*/
	backCardCode?: string;
	/*回款金额*/
	backMoney?: number;
	/*实际回款时间*/
	backDate?: string;
	/*回款摘要*/
	summary?: string;
	/*退款条件*/
	backLimit?: string;
	/*备注*/
	note?: string;
	/*中转表明细编码(外面列表里带过来)*/
	earnestDetailsCode?: string;
	/*中转表主单编码(外面列表里带过来)*/
	earnestCode?: string;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
	/*客户编码*/
	clientCode: string;
	/*省份*/
	provinceId: number;
	/*保证金详情列表*/
	earnestDetails?: AT_EarnestDetailsRequestModel[];
	/*配送企业*/
	deliverys?: AT_DeliveryListModel[];
}

export enum AT_EarnestReturnStateType {
	未退款 = 1,
	部分退款 = 2,
	已退款 = 3,
}

export enum AT_EarnestType {
	单次货款保证金 = 1,
	长期货款保证金 = 2,
	市场保证金 = 3,
	招标保证金 = 4,
}

export enum AT_EarnestUse {
	开发保证金 = 1,
	上量保证金 = 2,
	招标保证金 = 3,
	医保保证金 = 4,
}

export declare interface AT_EditLogisticsTollRequestModel {
	/*主键ID*/
	id: number;
	/*最小件数(件)*/
	minValue?: number;
	/*最大件数(件)*/
	maxValue?: number;
	/*价格(元)*/
	price?: number;
	/*费用计算公式：价格*件数*/
	formula?: number;
	/*目的地城市*/
	destCityId: number;
}

export declare interface AT_FinancePayPageModel {
	/*主键Id*/
	id: number;
	/*单号*/
	financeCode?: string;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText: AT_MoneyPayState;
	/*付款时间*/
	payTime?: string;
	/*付款时间*/
	readonly payTimeText?: string;
	/*制单时间*/
	addTime?: string;
	/*制单时间*/
	readonly addTimeText?: string;
	/*单据类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	billType: AT_OrderType;
	/*单据类型*/
	billTypeText?: string;
	/*科目Id*/
	subjectId?: number;
	/*科目*/
	subjectName?: string;
	/*付款公司*/
	payUnit?: string;
	/*付款公司*/
	payUnitText?: string;
	/*收款公司*/
	backUnit?: string;
	/*收款公司*/
	backUnitText?: string;
	/*付款金额*/
	payMoney?: number;
	/*已付金额*/
	amountPaid?: number;
	/*未付金额*/
	pendMoney?: number;
	/*摘要*/
	summary?: string;
	/*制单人*/
	addUser?: string;
	/*制单人*/
	addUserName?: string;
	/*项目名称*/
	projectName?: string;
}

export declare interface AT_FinancePayPageModelIEnumerableInt32Tuple {
	item1?: AT_FinancePayPageModel[];
	item2: number;
}

export declare interface AT_FinancePayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*付款状态*/
	payState?: AT_QueryList;
	/*科目Id*/
	subjectId?: AT_QueryInt;
	/*付款公司*/
	payUnitText?: AT_QueryString;
	/*收款公司*/
	backUnitText?: AT_QueryString;
	/*单号*/
	financeCode?: AT_QueryString;
	/*项目Ids*/
	projectManageIds?: AT_QueryList;
}

export declare interface AT_FinancePayRequestViewModel {
	/*申请人*/
	applyUser?: string;
	/*付款单位编码*/
	payUnit?: string;
	/*付款单位名称*/
	payUnitText?: string;
	/*付款银行编码*/
	payBook?: string;
	/*客户名称编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*收款单位编码
下拉搜索单选，必填，下拉值来源于账户信息页面的收款单位*/
	basicAccountCode?: string;
	/*收款单位名称*/
	backUnit?: string;
	/*收款信息*/
	backInfo?: string;
	/*科目Id*/
	subject: number;
	/*付款金额*/
	payMoney?: number;
	/*摘要*/
	summary?: string;
	/*项目Id*/
	projectManageId: number;
}

export declare interface AT_FinancePayViewModel {
	/*申请人*/
	applyUser?: string;
	/*付款单位编码*/
	payUnit?: string;
	/*付款单位名称*/
	payUnitText?: string;
	/*付款银行编码*/
	payBook?: string;
	/*客户名称编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*收款单位编码
下拉搜索单选，必填，下拉值来源于账户信息页面的收款单位*/
	basicAccountCode?: string;
	/*收款单位名称*/
	backUnit?: string;
	/*收款信息*/
	backInfo?: string;
	/*科目Id*/
	subject: number;
	/*付款金额*/
	payMoney?: number;
	/*摘要*/
	summary?: string;
	/*项目Id*/
	projectManageId: number;
	/*单号*/
	financeCode?: string;
	/*id*/
	id?: number;
	/*申请人名称*/
	applyUserName?: string;
	/*项目名称*/
	projectName?: string;
}

export declare interface AT_FirstCampDeliveryModel {
	/*自增ID，新增时为空*/
	id?: number;
	/*配送商业*/
	deliveryName?: string;
}

export declare interface AT_FirstCampPageModel {
	/*序号*/
	indexNo: number;
	materialCode?: string;
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*申请状态：未邮寄，部分邮寄，已邮寄

0 = 未邮寄

1 = 部分邮寄

2 = 已邮寄*/
	applicationStatus: AT_ApplicationStatusType;
	/*申请状态：未邮寄，部分邮寄，已邮寄

0 = 未邮寄

1 = 部分邮寄

2 = 已邮寄*/
	readonly applicationStatusText: AT_ApplicationStatusType;
	/*申请日期*/
	dateApplication?: string;
	/*品种信息：产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*1.资料明细=品种资料时，品种信息等于注册通用名+详细包装规格+件装+生产企业拼接而成
2.资料明细=企业首营时，品种信息暂无值*/
	productDetail?: string;
	/*出库单位：供应商；企业编码*/
	supplierCode?: string;
	/*出库单位：供应商；企业名称*/
	supplierName?: string;
	/*资料明细：企业首营，品种资料*/
	details?: string;
	/*申请数量*/
	numApplications?: number;
	/*收件信息*/
	receivingInfo?: string;
	/*客户备注*/
	clientNote?: string;
	/*待邮寄数量*/
	leftSendAmount?: number;
	/*邮寄信息(快递公司+单号的拼接)*/
	sendInfo?: string;
	/*邮寄日期*/
	sendDate?: string;
	/*邮寄数量*/
	sendAmount?: number;
	/*库存剩余数量（导出用的）*/
	inventoryRemainingQuantity?: number;
	/*成本（导出用的）*/
	cost?: number;
	/*备注*/
	note?: string;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: string;
	/*归属部门（导出用的）*/
	belongingDepartment?: string;
	/*省份*/
	provinceId?: number;
	/*省份*/
	provinceName?: string;
	/*代理商归主（导出用的）*/
	readonly agent?: string;
	/*导出备注（导出用的）*/
	excelRemake?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_FirstCampPageModelIEnumerableInt32Tuple {
	item1?: AT_FirstCampPageModel[];
	item2: number;
}

export declare interface AT_FirstCampQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请状态：未邮寄，部分邮寄，已邮寄*/
	applicationStatus?: AT_QueryInt;
	/*申请状态：未邮寄，部分邮寄，已邮寄*/
	applicationStatusEqual?: AT_QueryGiven;
	/*申请日期*/
	dateApplication?: AT_QueryDateTime;
	/*出库单位：供应商；企业名称*/
	supplierName?: AT_QueryString;
	/*资料明细：企业首营，品种资料*/
	details?: AT_QueryString;
	/*邮寄信息(快递公司+单号的拼接)*/
	sendInfo?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*省份*/
	provinceId?: AT_QueryList;
}

export declare interface AT_FirstCampRequestModel {
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*申请日期*/
	dateApplication?: string;
	/*品种信息：产品编码*/
	productCode?: string;
	/*出库单位：供应商；企业编码*/
	supplierCode?: string;
	/*资料明细：汉字；逗号分隔*/
	details?: string;
	/*申请数量*/
	numApplications?: number;
	/*收件信息*/
	receivingInfo?: string;
	/*首营资料类型

1 = 首营企业

2 = 首营资料*/
	firstCampType: AT_FirstCampType;
	/*备注*/
	note?: string;
	/*首营配送商业*/
	firstCampDeliveries?: AT_FirstCampDeliveryModel[];
}

export declare interface AT_FirstCampSendModel {
	/*快递公司*/
	expressCompany: number;
	/*单号*/
	expressNo?: string;
	/*邮寄日期*/
	sendDate: string;
	/*邮寄资料明细*/
	sendDetails?: AT_SendDetailModel[];
}

export enum AT_FirstCampType {
	首营企业 = 1,
	首营资料 = 2,
}

export declare interface AT_FirstCampViewModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*申请日期*/
	dateApplication?: string;
	/*品种信息：产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*出库单位：供应商；企业编码*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*资料明细：汉字；逗号分隔*/
	details?: string;
	/*申请数量*/
	numApplications?: number;
	/*收件信息*/
	receivingInfo?: string;
	/*首营资料类型

1 = 首营企业

2 = 首营资料*/
	firstCampType: AT_FirstCampType;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPersonName?: string;
	/*备注*/
	note?: string;
	/*首营配送商业*/
	firstCampDeliveries?: AT_FirstCampDeliveryModel[];
}

export declare interface AT_FirstLevelDepartment {
	/*部门编号*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*上一级*/
	parent?: string;
	children?: AT_SecondLevelDepartment[];
}

export declare interface AT_FlowAccurateDeliveryModel {
	/*点配申请数据模型*/
	accurateDeliveryRequestModel?: AT_AccurateDeliveryRequestViewModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export enum AT_FlowAuditObjEnum {
	制单人审核 = 1,
	指定员工 = 2,
	指定角色 = 3,
	指定部门经理 = 4,
	指定部门总监 = 5,
	指定分管副总 = 6,
	动态指定人 = 7,
	动态sql = 8,
}

export declare interface AT_FlowAuditObjModel {
	/*审核对象值*/
	flowAuditObjId: number;
	/*审核对象*/
	flowAuditObj?: string;
	/*html 类型

0 = None

1 = Input

2 = Select*/
	htmlType: AT_HtmlType;
	/*下拉框数据*/
	data?: AT_KeyValueStringModel[];
}

export enum AT_FlowAuditStatusEnum {
	待审 = 0,
	已审 = 1,
	驳回 = 2,
	未决 = 3,
}

export declare interface AT_FlowAuditingQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程id*/
	flowId?: AT_QueryInt;
	/*后端处理数据（忽略）*/
	flowIds?: AT_QueryList;
	/*流程名称*/
	flowName?: AT_QueryString;
	/*-1废弃，删除；0 草稿，本人未提交；1已提交，未审批（流转中）；2 审批驳回；3审批未决； 4审批完成*/
	flowState?: AT_QueryList;
	/*流程类型名称*/
	flowTypeName?: AT_QueryString;
	/*创建者*/
	name?: AT_QueryString;
	/*首页搜索*/
	searchText?: AT_QueryGiven;
	/*后端处理数据（忽略）*/
	userCode?: AT_QueryString;
	/*更新时间*/
	days?: AT_QueryInt;
}

export declare interface AT_FlowBulletinModel {
	/*公示公告模型*/
	bulletinModel?: AT_BulletinEditModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowChatModel {
	/*流程审核状态

0 = 待审

1 = 已审

2 = 驳回

3 = 未决*/
	flowAuditStatus?: AT_FlowAuditStatusEnum;
	/*流程步骤名称*/
	stepName?: string;
	/*流程备注*/
	flowRemarks?: string;
	/*审核人*/
	auditor?: string;
	/*审核时间*/
	auditTime?: string;
	/*是否自动(0否1是)*/
	isAuto?: number;
}

export declare interface AT_FlowClientBankModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*备案账户信息*/
	clientBank?: AT_TransferClientBankModel;
}

export declare interface AT_FlowClientDeliveryModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*开户申请*/
	clientDelivery?: AT_ClientDeliveryModel;
}

export declare interface AT_FlowCompanyBorrowModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*公司借支数据模型*/
	borrowModel?: AT_CompanyBorrowModel;
}

export declare interface AT_FlowCompanyRepaymentModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*公司还款数据模型*/
	repaymentModel?: AT_CompanyRepaymentModel;
}

export declare interface AT_FlowCooperationBusinessDeliveryModel {
	/*主流配送商业数据模型*/
	cooperationBusinessDeliveryRequestModel?: AT_CooperationBusinessDeliveryRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowCooperationBusinessModel {
	/*主流配送商业数据模型*/
	cooperationBusinessRequestModel?: AT_CooperationBusinessRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowCooperationDeliveryModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*合作配送数据模型*/
	cooperationDeliveryModel?: AT_CooperationDeliveryModel;
}

export declare interface AT_FlowCooperationModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*合作品种数据模型*/
	cooperationModel?: AT_CooperationModel;
}

export declare interface AT_FlowCooperationTerminalModel {
	/*合作药品终端数据模型*/
	cooperationTerminalRequestModel?: AT_CooperationTerminalRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowCostModel {
	/*费用报销模型*/
	costModel?: AT_CostModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowDevelopModel {
	/*研发目录模型*/
	developModel?: AT_DevelopModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowEarnestModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*保证金模型*/
	earnestModel?: AT_EarnestRequestModel;
}

export declare interface AT_FlowEarnestRefundApplyModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*保证金退回模型*/
	refundApplyModel?: AT_EarnestRefundApplyModel;
}

export declare interface AT_FlowFinancePayModel {
	/*付款单数据模型*/
	financePayRequestViewModel?: AT_FinancePayRequestViewModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowFlowtoSaleSettleModel {
	/*点配申请数据模型*/
	saleCommissionSettleModel?: AT_FlowtoSaleSettleRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowGoodsApprovalModel {
	/*注册批件模型*/
	goodsApprovalModel?: AT_GoodsApprovalModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowGoodsModel {
	/*产品流程基础模块提交模型*/
	goodsFoundationModel?: AT_GoodsFoundationModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowGoodsSafeStockModel {
	/*点配申请数据模型*/
	goodsSafeStockModel?: AT_GoodsSafeStockModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowInternalTransferModel {
	/*点配申请数据模型*/
	internalTransferRequestModel?: AT_InternalTransferRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowInvestPaymentModel {
	/*投资付款管理数据模型*/
	investPaymentModel?: AT_InvestPaymentRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowInvestRecoverModel {
	/*投资回款管理数据模型*/
	investRecoverModel?: AT_InvestRecoverRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowInvestmentModel {
	/*招商目录模型*/
	investmentModel?: AT_InvestmentModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowListQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程id*/
	flowId?: AT_QueryInt;
	/*后端处理数据（忽略）*/
	flowIds?: AT_QueryList;
	/*流程名称*/
	flowName?: AT_QueryString;
	/*-1废弃，删除；0 草稿，本人未提交；1已提交，未审批（流转中）；2 审批驳回；3审批未决； 4审批完成*/
	flowState?: AT_QueryList;
	/*流程类型名称*/
	flowTypeName?: AT_QueryString;
	/*创建者*/
	name?: AT_QueryString;
	/*用户id*/
	userCode?: AT_QueryString;
}

export enum AT_FlowListStateEnum {
	草稿 = 0,
	审核中 = 1,
	驳回 = 2,
	未决 = 3,
	已完成 = 4,
	删除 = -1,
}

export declare interface AT_FlowListViewModel {
	/*流程id*/
	flowId: number;
	/*流程状态id -1废弃，删除；0 草稿，本人未提交；1已提交，未审批（流转中）；2 驳回；3审批未决； 4审批完成

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态*/
	readonly flowStateText?: string;
	/*流程名*/
	flowName?: string;
	/*流程类型*/
	flowTypeName?: string;
	/*创建者*/
	name?: string;
	/*流程备注*/
	remarks?: string;
	/*弹窗id*/
	routeId?: string;
	/*弹窗地址*/
	popupRoutePath?: string;
	/*弹窗Key*/
	popupRouteKey?: string;
	/*更新时间*/
	updTime?: string;
	/*制单时间*/
	addTime: string;
	/*距离当前时间过去多久*/
	readonly pastCurrentTime?: string;
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_FlowListViewModelIEnumerableInt32Tuple {
	item1?: AT_FlowListViewModel[];
	item2: number;
}

export declare interface AT_FlowLogisticCooperationModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*合作物流*/
	logisticCooperation?: AT_LogisticCooperationModel;
}

export declare interface AT_FlowLogisticModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*合作物流*/
	logisticModel?: AT_LogisticEditModel;
}

export declare interface AT_FlowMarketPlanModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*合作物流*/
	marketPlan?: AT_MarketPlanEditModel;
}

export declare interface AT_FlowModel {
	/*流程id*/
	flowId?: number;
	/*流程名称*/
	flowName?: string;
	/*流程层次*/
	flowLevel: number;
	/*流程备注*/
	remarks?: string;
	/*时间戳*/
	colver?: string;
	/*审核备注*/
	auditRemarks?: string;
	/*动态指定审核人*/
	dynaAuditor?: string[];
	/*弹窗路由地址*/
	popupKey?: string;
	/*流程步骤*/
	stepId: number;
	/*步骤是否可编辑*/
	stepIsEdit: number;
	/*步骤是否允许驳回*/
	stepIsBack: number;
	/*是否是代理审核*/
	stepIsProxy: number;
}

export declare interface AT_FlowModelAccurateDeliveryDetailsViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_AccurateDeliveryDetailsViewModel;
}

export declare interface AT_FlowModelAccurateDeliveryRequestViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*申请点配视图模型*/
	item2?: AT_AccurateDeliveryRequestViewModel;
}

export declare interface AT_FlowModelBulletinViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*公示公告详情模型*/
	item2?: AT_BulletinViewModel;
}

export declare interface AT_FlowModelClientDeliveryAccountViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ClientDeliveryAccountViewModel;
}

export declare interface AT_FlowModelCompanyBorrowViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*公司借支视图*/
	item2?: AT_CompanyBorrowViewModel;
}

export declare interface AT_FlowModelCompanyRepaymentViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*公司还款视图*/
	item2?: AT_CompanyRepaymentViewModel;
}

export declare interface AT_FlowModelCooperationBusinessDeliveryViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_CooperationBusinessDeliveryViewModel;
}

export declare interface AT_FlowModelCooperationBusinessViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_CooperationBusinessViewModel;
}

export declare interface AT_FlowModelCooperationDeliveryViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*合作配送列表模型*/
	item2?: AT_CooperationDeliveryViewModel;
}

export declare interface AT_FlowModelCooperationTerminalViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_CooperationTerminalViewModel;
}

export declare interface AT_FlowModelCooperationViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*合作品种详情模型*/
	item2?: AT_CooperationViewModel;
}

export declare interface AT_FlowModelCostViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*费用报销视图*/
	item2?: AT_CostViewModel;
}

export declare interface AT_FlowModelDevelopViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*研发目录视图*/
	item2?: AT_DevelopViewModel;
}

export declare interface AT_FlowModelEarnestRefundApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*销售保证金退回单视图*/
	item2?: AT_EarnestRefundApplyViewModel;
}

export declare interface AT_FlowModelFinancePayViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_FinancePayViewModel;
}

export declare interface AT_FlowModelGoodsApprovalViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*产品批件视图*/
	item2?: AT_GoodsApprovalViewModel;
}

export declare interface AT_FlowModelGoodsFlowViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*产品流程显示模型*/
	item2?: AT_GoodsFlowViewModel;
}

export declare interface AT_FlowModelGoodsSafeStockViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_GoodsSafeStockViewModel;
}

export declare interface AT_FlowModelInternalTransferViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_InternalTransferViewModel;
}

export declare interface AT_FlowModelInvestPaymentViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_InvestPaymentViewModel;
}

export declare interface AT_FlowModelInvestRecoverViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_InvestRecoverViewModel;
}

export declare interface AT_FlowModelLogisticCooperationViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*合作明细视图*/
	item2?: AT_LogisticCooperationViewModel;
}

export declare interface AT_FlowModelLogisticViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*合作物流详情*/
	item2?: AT_LogisticViewModel;
}

export declare interface AT_FlowModelMarketPlanViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_MarketPlanViewModel;
}

export declare interface AT_FlowModelPowerAttorneyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*唯一配送委托书回写实体*/
	item2?: AT_PowerAttorneyViewModel;
}

export declare interface AT_FlowModelProducePlanViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ProducePlanViewModel;
}

export declare interface AT_FlowModelPurchaseBackViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_PurchaseBackViewModel;
}

export declare interface AT_FlowModelPurchaseCodeViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_PurchaseCodeViewModel;
}

export declare interface AT_FlowModelPurchaseOrderViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*采购订单视图*/
	item2?: AT_PurchaseOrderViewModel;
}

export declare interface AT_FlowModelPurchasePayViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*采购付款单视图*/
	item2?: AT_PurchasePayViewModel;
}

export declare interface AT_FlowModelPurchasePayWaitTransferViewTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*转采购付款单数据*/
	item2?: AT_PurchasePayWaitTransferView;
}

export declare interface AT_FlowModelPurchaseReturnViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_PurchaseReturnViewModel;
}

export declare interface AT_FlowModelSaleBackAdjustmentViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleBackAdjustmentViewModel;
}

export declare interface AT_FlowModelSaleBackViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*销售回款详情模型*/
	item2?: AT_SaleBackViewModel;
}

export declare interface AT_FlowModelSaleCommissionSettleDivideSummaryViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleCommissionSettleDivideSummaryViewModel;
}

export declare interface AT_FlowModelSaleCommissionSettleDivideViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleCommissionSettleDivideViewModel;
}

export declare interface AT_FlowModelSaleCommissionSettleInvalidViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleCommissionSettleInvalidViewModel;
}

export declare interface AT_FlowModelSaleCommissionSettleViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleCommissionSettleViewModel;
}

export declare interface AT_FlowModelSaleEarnestViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*保证金回写model*/
	item2?: AT_SaleEarnestViewModel;
}

export declare interface AT_FlowModelSaleOrderCodeViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleOrderCodeViewModel;
}

export declare interface AT_FlowModelSaleOrderViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*销售通知单视图*/
	item2?: AT_SaleOrderViewModel;
}

export declare interface AT_FlowModelSalePlanViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SalePlanViewModel;
}

export declare interface AT_FlowModelSaleReturnViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SaleReturnViewModel;
}

export declare interface AT_FlowModelSpecialApprovalViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SpecialApprovalViewModel;
}

export declare interface AT_FlowModelSpecialCostViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*专项费用报销视图*/
	item2?: AT_SpecialCostViewModel;
}

export declare interface AT_FlowModelTransferClientBankViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*客户备案账户信息中间表视图*/
	item2?: AT_TransferClientBankViewModel;
}

export declare interface AT_FlowModelUnfreezeClientBankViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*解冻备案账户模型*/
	item2?: AT_UnfreezeClientBankViewModel;
}

export declare interface AT_FlowObjectModel {
	/*审核对象类型Id

1 = 制单人审核

2 = 指定员工

3 = 指定角色

4 = 指定部门经理

5 = 指定部门总监

6 = 指定分管副总

7 = 动态指定人

8 = 动态sql*/
	auditType: AT_FlowAuditObjEnum;
	/*审核对象类型Id*/
	readonly auditTypeText?: string;
	/*审核对象(一般为：EmployeeCode)*/
	auditor?: string[];
	/*审核对象文本(一般为：名称)*/
	auditorName?: string[];
}

export declare interface AT_FlowPopupModel {
	/*流程类型id*/
	flowTypeId: number;
}

export declare interface AT_FlowPostModel {
	/*流程id*/
	flowId?: number;
	/*流程备注*/
	remarks?: string;
	/*时间戳*/
	colver?: string;
	/*审核备注*/
	auditRemarks?: string;
	/*弹窗路由地址*/
	popupKey?: string;
	/*动态审核*/
	dynaAuditor?: number[];
}

export declare interface AT_FlowProducePlanModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*生产计划模型*/
	producePlanModel?: AT_ProducePlanModel;
}

export declare interface AT_FlowPurchaseBackModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*采购付款单编辑模型*/
	purchaseBackRequestModel?: AT_PurchaseBackRequestModel;
}

export declare interface AT_FlowPurchaseModel {
	/*转采购目录模型*/
	turnPurchaseModel?: AT_TurnPurchaseModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowPurchaseOrderModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*采购订单编辑模型*/
	orderEditModel?: AT_PurchaseOrderEditModel;
}

export declare interface AT_FlowPurchasePayModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*采购付款单编辑模型*/
	payEditModel?: AT_PurchasePayEditModel;
}

export declare interface AT_FlowPurchasePayWaitModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*采购待付款单转单模型*/
	payWaitTransferModel?: AT_PurchasePayWaitTransferModel;
}

export declare interface AT_FlowPurchaseResetPriceModel {
	/*点配申请数据模型*/
	purchaseResetPriceRequestModel?: AT_PurchaseResetPriceRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowPurchaseReturnModel {
	/*点配申请数据模型*/
	purchaseReturnRequestModel?: AT_PurchaseReturnRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSaleBackAdjustmentModel {
	/*点配申请数据模型*/
	saleBackAdjustmentRequestModel?: AT_SaleBackAdjustmentRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSaleBackModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*销售回款模型*/
	saleBackModel?: AT_SaleBackModel;
}

export declare interface AT_FlowSaleCommissionSettleDivideModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*销售佣金结算分配模型*/
	saleCommissionSettleDivide?: AT_SaleCommissionSettleDivideEditModel;
}

export declare interface AT_FlowSaleCommissionSettleInvalidModel {
	/*点配申请数据模型*/
	saleCommissionSettleInvalidRequestModel?: AT_SaleCommissionSettleInvalidRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSaleCommissionSettleModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*销售佣金结算模型*/
	saleCommissionSettleModel?: AT_SaleCommissionSettleEditModel;
}

export declare interface AT_FlowSaleOrderModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*销售通知单编辑模型*/
	orderEditModel?: AT_SaleOrderEditModel;
}

export declare interface AT_FlowSalePlanModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*销售通知单编辑模型*/
	businessSalePlanRequestModel?: AT_BusinessSalePlanRequestModel;
}

export declare interface AT_FlowSaleResetPriceModel {
	/*点配申请数据模型*/
	saleResetPriceRequestModel?: AT_SaleResetPriceRequestModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSaleReturnModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*保证金模型*/
	saleReturnRequestModel?: AT_SaleReturnRequestModel;
}

export declare interface AT_FlowSpecialApprovalModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*保证金模型*/
	specialApprovalRequestModel?: AT_SpecialApprovalRequestModel;
}

export declare interface AT_FlowSpecialCostModel {
	/*费用报销模型*/
	specialCostModel?: AT_SpecialCostModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowStepModel {
	/*步骤ID(创建为null)*/
	stepId?: number;
	/*步骤名称*/
	stepName?: string;
	/*审核关系0、单一对象；1、OR关系2、AND关系 当审核对象关系存在多个时，以wfa_obj为准，否则直接使用当前表中的审核对象。

0 = One

1 = Or

2 = And*/
	auditObjRela: AT_AuditObjRela;
	/*审核层次；从0开始 0表示最开始的创建流程*/
	auditLevel: number;
	/*判断条件存储过程(0否，1是：如满足条件则走该步骤）*/
	whereSql?: string;
	/*条件说明*/
	sqlExplain?: string;
	/*是否可修改流程数据(0否，1是)*/
	isEdit: number;
	/*是否驳回*/
	isBack: number;
	/*是否自动审核*/
	isAuto: number;
	/*是否自动连跳*/
	isJump: number;
	/*是否指定规则：（是，否），在该步审核有特殊的处理逻辑规则*/
	hasRule: number;
	/*更新时间*/
	updateTime?: string;
	/*延迟类型*/
	delayAuditType?: string;
	/*延迟条件*/
	delayAuditCond?: string;
	/*审核对象*/
	flowObjectModels?: AT_FlowObjectModel[];
}

export declare interface AT_FlowTransferPowerAttorneyModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*唯一配送委托书模型*/
	powerAttorneyModel?: AT_PowerAttorneyRequestModel;
}

export declare interface AT_FlowTypeInfoModel {
	/*流程类型ID*/
	flowTypeId: number;
	/*流程类型名称*/
	flowTypeName?: string;
	/*备注信息*/
	flowTypeNote?: string;
	/*流程类别*/
	flowCategory: number;
	/*创建者*/
	userId: number;
	/*是否走审核流程(0否，1是)*/
	hasFlow: number;
	/*显示快捷方式（0否1是）*/
	webShow: number;
	/*时间戳*/
	colver?: string;
	/*流程步骤*/
	flowStepModels?: AT_FlowStepModel[];
}

export declare interface AT_FlowTypeModel {
	/*流程类型id(创建为null)*/
	flowTypeId?: number;
	/*流程类型名称*/
	flowTypeName: string;
	/*备注信息*/
	flowTypeNote?: string;
	/*流程步骤*/
	flowStepModels?: AT_FlowStepModel[];
}

export declare interface AT_FlowTypeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程类型*/
	flowTypeName?: AT_QueryString;
}

export declare interface AT_FlowTypeViewModel {
	/*流程类型id*/
	flowTypeId?: number;
	/*流程名称*/
	flowTypeName?: string;
	/*备注信息*/
	flowTypeNote?: string;
	/*更新时间*/
	updateTime: string;
	/*创建人*/
	createUser?: string;
	/*时间戳*/
	colver?: string;
}

export declare interface AT_FlowTypeViewModelIEnumerableInt32Tuple {
	item1?: AT_FlowTypeViewModel[];
	item2: number;
}

export declare interface AT_FlowtoMatchGoodsModel {
	/*系统产品编码*/
	productCode: string;
	/*流向商品编码*/
	goodsCode: string;
	/*转换比*/
	ratio: number;
}

export declare interface AT_FlowtoMatchTerminalModel {
	/*系统终端编码*/
	drugTerminalId: number;
	/*流向终端编码*/
	flowtoClientCode?: string;
}

export enum AT_FlowtoPurchaseDataSourceType {
	手动导入 = 1,
	接口数据 = 2,
}

export declare interface AT_FlowtoPurchasePageModel {
	/*Id*/
	id: number;
	/*企业编码：配送公司*/
	companyCode?: string;
	/*企业名称：配送公司*/
	companyName?: string;
	/*入库时间*/
	intoTime?: string;
	/*库存拥有者*/
	stcokOwner?: string;
	/*单据号*/
	billNo?: string;
	/*商品编码*/
	goodsCode?: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*单位*/
	unit?: string;
	/*入库数量*/
	intoAmount?: string;
	/*入库价*/
	intoPrice?: string;
	/*入库金额*/
	intoMoney?: string;
	/*批号*/
	batchNo?: string;
	/*批次号*/
	batch?: string;
	/*批次信息*/
	batchInfo?: string;
	/*生产日期*/
	produceDate?: string;
	/*失效日期*/
	expireDate?: string;
	/*采购税率*/
	purchaseTax?: string;
	/*发票号*/
	invoiceNo?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*库别*/
	kuBie?: string;
	/*原单时间*/
	protoTime?: string;
	/*原单单据号*/
	protoBillNo?: string;
	/*原单入库价*/
	protoIntoPrice?: string;
	/*数据更新时间*/
	dataTime?: string;
	/*数据来源：手动导入【1】；接口数据【2】

1 = 手动导入

2 = 接口数据*/
	dataSource?: AT_FlowtoPurchaseDataSourceType;
}

export declare interface AT_FlowtoPurchasePageModelIEnumerableInt32Tuple {
	item1?: AT_FlowtoPurchasePageModel[];
	item2: number;
}

export declare interface AT_FlowtoPurchaseQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业名称：配送公司*/
	companyName?: AT_QueryString;
	/*入库时间*/
	intoTime?: AT_QueryDateTime;
	/*库存拥有者*/
	stcokOwner?: AT_QueryString;
	/*单据号*/
	billNo?: AT_QueryString;
	/*商品编码*/
	goodsCode?: AT_QueryString;
	/*商品名称*/
	goodsName?: AT_QueryString;
	/*规格*/
	goodsSpec?: AT_QueryString;
	/*生产厂家*/
	manufacturer?: AT_QueryString;
	/*单位*/
	unit?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*批次号*/
	batch?: AT_QueryString;
	/*批次信息*/
	batchInfo?: AT_QueryString;
	/*发票号*/
	invoiceNo?: AT_QueryString;
	/*供应商编码*/
	supplierCode?: AT_QueryString;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*库别*/
	kuBie?: AT_QueryString;
	/*原单单据号*/
	protoBillNo?: AT_QueryString;
	/*数据更新时间*/
	dataTime?: AT_QueryDateTime;
	/*数据来源：手动导入【1】；接口数据【2】*/
	dataSource?: AT_QueryInt;
}

export declare interface AT_FlowtoSaleConfirmCommissionModel {
	/*销售流向有效数据表ID*/
	flowtoSaleValidId: number;
	/*合作编码*/
	cooperationCode?: string;
	/*客户编码*/
	clientCode?: string;
	/*产品编码*/
	productCode?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*合作品种政策ID：合作带量信息表ID/合作非带量信息表ID*/
	cooperationPolicyId: number;
	/*合作配送商业ID：合作配送商业表ID*/
	cooperationDeliveryId: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*确认数量*/
	confirmAmount: number;
}

export enum AT_FlowtoSaleConfirmDataSource {
	流向数据汇总 = 1,
}

export declare interface AT_FlowtoSaleConfirmModel {
	/*销售流向有效数据表ID*/
	flowtoSaleValidId: number;
	/*合作编码*/
	cooperationCode: string;
	/*客户编码*/
	clientCode: string;
	/*产品编码*/
	productCode: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*合作品种政策ID：合作带量信息表ID/合作非带量信息表ID*/
	cooperationPolicyId: number;
	/*合作配送商业ID：合作配送商业表ID*/
	cooperationDeliveryId: number;
	/*确认数量*/
	confirmAmount: number;
	/*佣金价格*/
	commissionPrice: number;
	/*佣金金额*/
	commissionMoney: number;
	/*开单日期*/
	billTime: string;
	/*转换比*/
	ratio: number;
}

export enum AT_FlowtoSaleDataSourceType {
	手动导入 = 1,
	接口数据 = 2,
}

export declare interface AT_FlowtoSalePageModel {
	/*Id*/
	id: number;
	/*企业编码：配送公司*/
	companyCode?: string;
	/*企业名称：配送公司*/
	companyName?: string;
	/*开单时间*/
	billTime?: string;
	/*配送分子公司编码*/
	subsidiaryCode?: string;
	/*配送分子公司名称*/
	subsidiaryName?: string;
	/*单据号*/
	billNo?: string;
	/*单据类型*/
	billType?: string;
	/*商品编码*/
	goodsCode?: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*单位*/
	unit?: string;
	/*包装数量*/
	packAmount?: string;
	/*批号*/
	batchNo?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*子结算账户编码*/
	accountCode?: string;
	/*子结算账户名称*/
	accountName?: string;
	/*销售数量*/
	saleAmount?: string;
	/*销售单价*/
	salePrice?: string;
	/*销售金额*/
	saleMoney?: string;
	/*销售税率*/
	saleTax?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*生产日期*/
	produceDate?: string;
	/*失效日期*/
	expireDate?: string;
	/*送货地址*/
	sendAddr?: string;
	/*原单时间*/
	protoTime?: string;
	/*原单单据号*/
	protoBillNo?: string;
	/*原单销售价*/
	protoSalePrice?: string;
	/*退货冲差原因*/
	reason?: string;
	/*备注*/
	note?: string;
	/*数据更新时间*/
	dataTime?: string;
	/*数据来源：手动导入【1】；接口数据【2】

1 = 手动导入

2 = 接口数据*/
	dataSource?: AT_FlowtoSaleDataSourceType;
	/*所属省份*/
	province?: string;
}

export declare interface AT_FlowtoSalePageModelIEnumerableInt32Tuple {
	item1?: AT_FlowtoSalePageModel[];
	item2: number;
}

export declare interface AT_FlowtoSaleQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业名称：配送公司*/
	companyName?: AT_QueryString;
	/*开单时间*/
	billTime?: AT_QueryDateTime;
	/*原单时间*/
	protoTime?: AT_QueryDateTime;
	/*配送分子公司编码*/
	subsidiaryCode?: AT_QueryString;
	/*配送分子公司名称*/
	subsidiaryName?: AT_QueryString;
	/*单据类型*/
	billType?: AT_QueryString;
	/*商品编码*/
	goodsCode?: AT_QueryString;
	/*商品名称*/
	goodsName?: AT_QueryString;
	/*单据号*/
	billNo?: AT_QueryString;
	/*规格*/
	goodsSpec?: AT_QueryString;
	/*生产厂家*/
	manufacturer?: AT_QueryString;
	/*单位*/
	unit?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*客户编码*/
	clientCode?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*子结算账户编码*/
	accountCode?: AT_QueryString;
	/*子结算账户名称*/
	accountName?: AT_QueryString;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*送货地址*/
	sendAddr?: AT_QueryString;
	/*原单单据号*/
	protoBillNo?: AT_QueryString;
	/*退货冲差原因*/
	reason?: AT_QueryString;
	/*备注*/
	note?: AT_QueryString;
	/*数据更新时间*/
	dataTime?: AT_QueryDateTime;
	/*数据来源：手动导入【1】；接口数据【2】*/
	dataSource?: AT_QueryInt;
	/*所属省份*/
	provinceId?: AT_QueryInt;
}

export declare interface AT_FlowtoSaleSettleDetailsRequestModel {
	/*明细ID*/
	id?: number;
	/*列表ID（流向确认表ID）*/
	flowtoSaleConfirmId?: number;
	/*本次结算数量*/
	settleAmount?: number;
	/*清单价*/
	listPrice?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
}

export declare interface AT_FlowtoSaleSettleDetailsViewModel {
	/*明细Id*/
	id?: number;
	/*单据日期*/
	billTime?: string;
	/*单据日期*/
	readonly billTimeText?: string;
	/*原单日期*/
	protoTime?: string;
	/*原单日期*/
	readonly protoTimeText?: string;
	/*配送公司*/
	deliveryCode?: string;
	/*配送公司*/
	deliveryName?: string;
	/*系统通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*系统生产企业*/
	manufacturer?: string;
	/*系统生产企业名称*/
	manufacturerName?: string;
	/*系统终端Id*/
	drugTerminalId?: number;
	/*系统终端名称*/
	drugTerminalName?: string;
	/*本次结算数量*/
	settleAmount?: number;
	/*客服确认数量*/
	confirmAmount?: number;
	/*已核算数据*/
	accountingAmount?: number;
	/*可结算数量*/
	readonly settlableAmount?: number;
	/*清单价*/
	listPrice?: number;
	/*佣金单价*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
}

export declare interface AT_FlowtoSaleSettleInfoViewModel {
	/*主键ID*/
	id?: number;
	/*佣金结算编码*/
	flowtoSaleSettleCode?: string;
	/*备注*/
	notes?: string;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payStatus: AT_MoneyPayState;
	/*付款状态文本

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStatusText: AT_MoneyPayState;
}

export declare interface AT_FlowtoSaleSettlePageModel {
	/*主键ID*/
	id?: number;
	/*数据来源

1 = 流向数据汇总*/
	dataSource: AT_FlowtoSaleConfirmDataSource;
	/*销售流向确认数据来源

1 = 流向数据汇总*/
	readonly dataSourceText: AT_FlowtoSaleConfirmDataSource;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*提单状态

0 = 未提单

1 = 部分提单

2 = 已提单*/
	commissionBillState: AT_CommissionBillState;
	/*提单状态

0 = 未提单

1 = 部分提单

2 = 已提单*/
	readonly commissionBillStateText: AT_CommissionBillState;
	/*流向ID*/
	flowtoSaleValidId?: number;
	/*添加日期*/
	addTime?: string;
	/*添加日期*/
	readonly addTimeText?: string;
	/*更新日期*/
	updTime?: string;
	/*更新日期*/
	readonly updTimeText?: string;
	/*系统通用名*/
	drugName?: string;
	/*系统规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*配送公司*/
	deliveryCode?: string;
	/*配送公司*/
	deliveryName?: string;
	/*系统终端Id*/
	drugTerminalId?: number;
	/*系统终端名称*/
	drugTerminalName?: string;
	/*客服确认数量*/
	confirmAmount?: number;
	/*可结算数量*/
	readonly settlableAmount?: number;
	/*已核算数量*/
	accountingAmount?: number;
	/*佣金单价*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*清单价*/
	listPrice?: number;
	/*开单日期*/
	billTime?: string;
	/*开单日期*/
	readonly billTimeText?: string;
	/*原单日期*/
	protoTime?: string;
	/*原单日期*/
	readonly protoTimeText?: string;
	/*累计结余*/
	overMoneyTotal?: number;
}

export declare interface AT_FlowtoSaleSettlePageModelIEnumerableInt32Tuple {
	item1?: AT_FlowtoSaleSettlePageModel[];
	item2: number;
}

export declare interface AT_FlowtoSaleSettleQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*数据来源*/
	dataSource?: AT_QueryString;
	/*客户编码*/
	clientCode?: AT_QueryString;
	/*提单状态*/
	commissionBillState?: AT_QueryList;
	/*流向ID*/
	flowtoSaleValidId?: AT_QueryInt;
	/*添加日期*/
	addTime?: AT_QueryDateTime;
	/*系统通用名*/
	drugName?: AT_QueryString;
	/*系统规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*配送公司*/
	deliveryName?: AT_QueryString;
	/*系统终端名称*/
	drugTerminalName?: AT_QueryString;
}

export declare interface AT_FlowtoSaleSettleRequestModel {
	clientCode?: string;
	/*应付金额*/
	mustMoney?: number;
	/*抹零金额*/
	ignoreMoney?: number;
	/*抹零金额*/
	readonly loseMoney?: number;
	/*实付金额*/
	realMoney?: number;
	/*本次结余*/
	overMoney?: number;
	/*备注*/
	readonly notes?: string;
	/*备注*/
	note?: string;
	/*明细列表*/
	saleCommissionSettleDetails?: AT_FlowtoSaleSettleDetailsRequestModel[];
}

export declare interface AT_FlowtoSaleSummaryModel {
	/*销售流向有效ID*/
	flowtoSaleValidId: number;
	/*摘要*/
	summary: string;
}

export declare interface AT_FlowtoSaleSummaryViewModel {
	/*摘要*/
	summary?: string;
	/*新增人*/
	addUser?: string;
	/*新增时间*/
	addTime?: string;
}

export declare interface AT_FlowtoSaleValidPageModel {
	/*Id*/
	id: number;
	/*结算状态

0 = 未确认

1 = 部分确认

2 = 已确认*/
	settleState: AT_SettleState;
	/*客服确认

0 = 未确认

1 = 部分确认

2 = 已确认*/
	saleConfirmState: AT_SaleConfirmState;
	/*商务确认：未确认，已确认*/
	businessConfirm?: number;
	/*是否自然流：否，是*/
	isNatural?: number;
	/*省份*/
	province?: string;
	/*地区*/
	city?: string;
	/*区县*/
	area?: string;
	/*开单日期*/
	billTime?: string;
	/*原单时期*/
	protoTime?: string;
	/*企业编码：配送公司*/
	companyCode?: string;
	/*企业名称：配送公司*/
	companyName?: string;
	/*流向终端名*/
	clientName?: string;
	/*流向品名*/
	goodsName?: string;
	/*流向规格*/
	goodsSpec?: string;
	/*流向数量*/
	saleAmount?: string;
	/*原始计量单位单位*/
	unit?: string;
	/*批号*/
	batchNo?: string;
	/*流向清单价*/
	salePrice?: string;
	/*有效期*/
	expireDate?: string;
	/*系统终端*/
	drugTerminalName?: string;
	/*系统品名*/
	drugName?: string;
	/*系统规格*/
	packageStandard?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*原始流向生产厂家*/
	flowtoSaleManufacturer?: string;
	/*单位*/
	minPreparationUnit?: string;
	/*转换比*/
	ratio?: number;
	/*流向转换数量*/
	convertAmount?: number;
	/*客服已确认数量*/
	saleConfirmAmount?: number;
	/*清单价*/
	listPrice: number;
	/*金额*/
	amount: number;
	/*已结算客户名称*/
	settleClientName?: string;
	/*预结算客户编码*/
	dueSettleClientCode?: string;
	/*预结算客户名称*/
	dueSettleClientName?: string;
	/*终端地址（流向送货地址）*/
	sendAddr?: string;
	/*流向终端编码编码*/
	clientCode?: string;
	/*流向品名编码*/
	goodsCode?: string;
	/*销售单号*/
	billNo?: string;
	/*销售单据类型（导入类型）*/
	billType?: string;
	/*配送分子公司名称*/
	subsidiaryName?: string;
	/*系统品名编码*/
	productCode?: string;
	/*系统终端编码*/
	drugTerminalId?: number;
	/*所属类别*/
	organType?: string;
	/*导入时间*/
	addTime?: string;
	/*导入备注*/
	note?: string;
	/*销售原始流向ID*/
	flowtoSaleId: number;
	/*摘要*/
	summary?: string;
	/*可确认数量=流向转换数量-客服已确认数量*/
	readonly approveConfirmAmount: number;
}

export declare interface AT_FlowtoSaleValidPageModelIEnumerableInt32Tuple {
	item1?: AT_FlowtoSaleValidPageModel[];
	item2: number;
}

export declare interface AT_FlowtoSaleValidQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*结算状态*/
	settleState?: AT_QueryInt;
	/*客服确认*/
	saleConfirmState?: AT_QueryInt;
	/*商务确认：未确认，已确认*/
	businessConfirm?: AT_QueryInt;
	/*是否自然流：否，是*/
	isNatural?: AT_QueryInt;
	/*省份*/
	provinceId?: AT_QueryInt;
	/*地区*/
	cityId?: AT_QueryInt;
	/*区县*/
	areaId?: AT_QueryInt;
	/*开单日期*/
	billTime?: AT_QueryDateTime;
	/*原单时期*/
	protoTime?: AT_QueryDateTime;
	/*企业编码：配送公司*/
	companyCode?: AT_QueryString;
	/*企业名称：配送公司*/
	companyName?: AT_QueryString;
	/*客户名称（流向终端名）*/
	clientName?: AT_QueryString;
	/*商品名称（流向品名）*/
	goodsName?: AT_QueryString;
	/*流向规格*/
	goodsSpec?: AT_QueryString;
	/*原始计量单位单位*/
	unit?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*系统终端*/
	drugTerminalName?: AT_QueryString;
	/*系统品名*/
	drugName?: AT_QueryString;
	/*系统规格*/
	packageStandard?: AT_QueryString;
	/*生产厂家*/
	manufacturer?: AT_QueryString;
	/*单位*/
	minPreparationUnit?: AT_QueryString;
	/*已结算客户名称*/
	settleClientName?: AT_QueryString;
	/*预结算客户名称*/
	dueSettleClientName?: AT_QueryString;
	/*终端地址（流向送货地址）*/
	sendAddr?: AT_QueryString;
	/*流向终端编码编码*/
	clientCode?: AT_QueryString;
	/*流向品名编码*/
	goodsCode?: AT_QueryString;
	/*销售单号*/
	billNo?: AT_QueryString;
	/*销售单据类型（单据类型）*/
	billType?: AT_QueryString;
	/*配送分子公司名称*/
	subsidiaryName?: AT_QueryString;
	/*系统品名编码*/
	productCode?: AT_QueryString;
	/*系统终端编码*/
	drugTerminalId?: AT_QueryInt;
	/*所属类别*/
	organType?: AT_QueryString;
}

export enum AT_FlowtoStockDataSourceType {
	手动导入 = 1,
	接口数据 = 2,
}

export declare interface AT_FlowtoStockPageModel {
	/*企业名称：配送公司*/
	companyName?: string;
	/*库存日期*/
	stockDate?: string;
	/*商品编码*/
	goodsCode?: string;
	/*商品名称*/
	goodsName?: string;
	/*规格*/
	goodsSpec?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount?: string;
	/*生产厂家*/
	manufacturer?: string;
	/*供应商名称*/
	supplierName?: string;
	/*入库单价*/
	intoPrice?: string;
	/*库存金额*/
	stockMoney?: string;
	/*包装单位*/
	unit?: string;
	/*件数*/
	pieces?: string;
	/*入库时间*/
	intoTime?: string;
	/*生产日期*/
	produceDate?: string;
	/*失效日期*/
	expireDate?: string;
	/*批次号*/
	batch?: string;
	/*批次信息*/
	batchInfo?: string;
	/*库存状态*/
	stockState?: string;
	/*库存拥有者*/
	stcokOwner?: string;
	/*货位名称*/
	stillName?: string;
	/*滞销预警*/
	warning?: string;
	/*在库天数*/
	inStockDays?: number;
	/*效期预警(返回失效日期-库存日期的天数)*/
	expiryDateWarning?: number;
	/*数据更新时间*/
	dataTime?: string;
	/*数据来源：手动导入【1】；接口数据【2】

1 = 手动导入

2 = 接口数据*/
	dataSource?: AT_FlowtoStockDataSourceType;
}

export declare interface AT_FlowtoStockPageModelIEnumerableInt32Tuple {
	item1?: AT_FlowtoStockPageModel[];
	item2: number;
}

export declare interface AT_FlowtoStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业名称：配送公司*/
	companyName?: AT_QueryString;
	/*数据来源：手动导入【1】；接口数据【2】*/
	dataSource?: AT_QueryInt;
	/*库存日期*/
	stockDate?: AT_QueryDateTime;
	/*商品编码*/
	goodsCode?: AT_QueryString;
	/*商品名称*/
	goodsName?: AT_QueryString;
	/*规格*/
	goodsSpec?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*生产厂家*/
	manufacturer?: AT_QueryString;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*包装单位*/
	unit?: AT_QueryString;
	/*批次号*/
	batch?: AT_QueryString;
	/*批次信息*/
	batchInfo?: AT_QueryString;
	/*库存状态*/
	stockState?: AT_QueryString;
	/*库存拥有者*/
	stcokOwner?: AT_QueryString;
	/*货位名称*/
	stillName?: AT_QueryString;
	/*在库天数*/
	inStockDays?: AT_QueryInt;
	/*滞销预警*/
	warning?: AT_QueryString;
	/*效期预警(返回失效日期-库存日期的天数)*/
	expiryDateWarning?: AT_QueryInt;
	/*数据更新时间*/
	dataTime?: AT_QueryDateTime;
}

export declare interface AT_FreezeClientBankModel {
	/*客户银行编码*/
	bankCode?: string;
	/*客户编码*/
	clientCode?: string;
	/*理由*/
	reason?: string;
	/*冻结类型

0 = 正常

1 = 冻结*/
	type: AT_FreezeStatus;
}

export enum AT_FreezeStatus {
	正常 = 0,
	冻结 = 1,
}

export enum AT_GoodsApprovalAttribute {
	直接持有 = 1,
	国代 = 2,
	间接持有 = 3,
}

export enum AT_GoodsApprovalDutySubject {
	丰恺思 = 1,
	金六谷 = 2,
	海南仲悦 = 3,
	博康 = 4,
	佰家康 = 5,
}

export declare interface AT_GoodsApprovalModel {
	/*研发主表ID(转单需要传)*/
	developId?: number;
	/*批准文号*/
	serial: string;
	/*原批准文号*/
	oldSerial?: string;
	/*商品名*/
	tradeName?: string;
	/*注册药品名称*/
	drugName: string;
	/*注册剂型*/
	dosageForm: string;
	/*注册规格*/
	standard: string;
	/*生产企业：企业编码*/
	manufacturer: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*属性选择

1 = 直接持有

2 = 国代

3 = 间接持有*/
	attribute?: AT_GoodsApprovalAttribute;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	dutySubject?: AT_GoodsApprovalDutySubject;
}

export declare interface AT_GoodsApprovalPageModel {
	/*自增ID*/
	id: number;
	/*批准文号*/
	serial?: string;
	/*商品名*/
	tradeName?: string;
	/*注册药品名称*/
	drugName?: string;
	/*注册剂型*/
	dosageForm?: string;
	/*注册规格*/
	standard?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*属性选择

1 = 直接持有

2 = 国代

3 = 间接持有*/
	attribute?: AT_GoodsApprovalAttribute;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	dutySubject?: AT_GoodsApprovalDutySubject;
}

export declare interface AT_GoodsApprovalPageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsApprovalPageModel[];
	item2: number;
}

export declare interface AT_GoodsApprovalQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*批准文号*/
	serial?: AT_QueryString;
	/*注册药品名称*/
	drugName?: AT_QueryString;
	/*注册剂型*/
	dosageForm?: AT_QueryString;
	/*注册规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*属性选择*/
	attribute?: AT_QueryList;
	/*责任主体*/
	dutySubject?: AT_QueryList;
}

export declare interface AT_GoodsApprovalViewModel {
	/*研发主表ID(转单需要传)*/
	developId?: number;
	/*批准文号*/
	serial: string;
	/*原批准文号*/
	oldSerial?: string;
	/*商品名*/
	tradeName?: string;
	/*注册药品名称*/
	drugName: string;
	/*注册剂型*/
	dosageForm: string;
	/*注册规格*/
	standard: string;
	/*生产企业：企业编码*/
	manufacturer: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*属性选择

1 = 直接持有

2 = 国代

3 = 间接持有*/
	attribute?: AT_GoodsApprovalAttribute;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	dutySubject?: AT_GoodsApprovalDutySubject;
	/*自增Id*/
	id: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*属性选择

1 = 直接持有

2 = 国代

3 = 间接持有*/
	readonly attributeText?: AT_GoodsApprovalAttribute;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	readonly dutySubjectText?: AT_GoodsApprovalDutySubject;
}

export declare interface AT_GoodsAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*附件类型

1 = 药品注册批件

2 = 检验报告文件

3 = 外包装图片

4 = 详细包装规格图片

5 = 质量标准扫描件

6 = 产品说明书扫描件

7 = 产品说明书word版

8 = 其他文件*/
	type: AT_GoodsAttachmentType;
}

export enum AT_GoodsAttachmentType {
	药品注册批件 = 1,
	检验报告文件 = 2,
	外包装图片 = 3,
	详细包装规格图片 = 4,
	质量标准扫描件 = 5,
	产品说明书扫描件 = 6,
	产品说明书word版 = 7,
	其他文件 = 8,
}

export declare interface AT_GoodsAttachmentViewModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*附件类型

1 = 药品注册批件

2 = 检验报告文件

3 = 外包装图片

4 = 详细包装规格图片

5 = 质量标准扫描件

6 = 产品说明书扫描件

7 = 产品说明书word版

8 = 其他文件*/
	type: AT_GoodsAttachmentType;
	/*附件类型名称

1 = 药品注册批件

2 = 检验报告文件

3 = 外包装图片

4 = 详细包装规格图片

5 = 质量标准扫描件

6 = 产品说明书扫描件

7 = 产品说明书word版

8 = 其他文件*/
	readonly typeName: AT_GoodsAttachmentType;
}

export declare interface AT_GoodsCatalogViewModel {
	/*主键Id*/
	projectManageId: number;
	/*项目名称*/
	projectName?: string;
}

export declare interface AT_GoodsClassifyModel {
	/*所属部门*/
	productDep?: number;
}

export declare interface AT_GoodsDeliverySimpleUnitModel {
	/*出库单位：企业编码*/
	deliveryUnit?: string;
	/*出库单位：企业编码*/
	deliveryUnitName?: string;
}

export declare interface AT_GoodsDeliveryUnitModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode: string;
	/*出库单位：企业编码*/
	deliveryUnit: string;
	/*销货类型*/
	saleType?: number;
}

export declare interface AT_GoodsDeliveryUnitViewModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode: string;
	/*出库单位：企业编码*/
	deliveryUnit: string;
	/*销货类型*/
	saleType?: number;
	/*销货单位名称*/
	deliveryUnitName?: string;
	/*销货类型名称*/
	saleTypeName?: string;
}

export declare interface AT_GoodsEditModel {
	/*自增ID(还原用)*/
	id: number;
	/*流程id(还原用)*/
	flowId?: number;
	/*产品编码(还原用)*/
	productCode?: string;
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType?: number;
	/*注册分类*/
	category?: number;
	/*件装*/
	wholePackage: number;
	/*药品本位码*/
	selfCode?: string;
	/*包装数*/
	packageNumber: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*中包装*/
	mediumPackage?: number;
	/*制剂类型*/
	preparationType?: number;
	/*报价单位*/
	quotationUnit?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*医保属性：甲类，乙类，非医保*/
	medicare?: number;
	/*基药属性：基药，非基药*/
	essential?: number;
	/*国家医保代码*/
	medicareCode?: string;
	/*国家卫健委YPID*/
	ypid?: string;
	/*详细包装规格*/
	packageStandard: string;
	/*标化通用名*/
	genericName: string;
	/*通用名首拼*/
	pinyin?: string;
	/*标化剂型*/
	dosageForm: string;
	/*标化规格*/
	standard: string;
	/*医保归并剂型*/
	mergeDosageForm: string;
	/*批准文号*/
	serial: string;
	/*注册批件Id*/
	goodsApprovalId: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*有效期：单位【月】*/
	expiryDate: number;
	/*检验报告号*/
	reportNo?: string;
	/*检验有效期起*/
	startValidity?: string;
	/*检验有效期止*/
	endValidity?: string;
	/*包材*/
	packageMaterial?: string;
	/*长*/
	length?: number;
	/*宽*/
	width?: number;
	/*高*/
	height?: number;
	/*单位重量*/
	unitWeight?: string;
	/*用法用量*/
	usageDosage?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*制剂特点*/
	features: string;
	/*存储条件*/
	storage?: string;
	/*适应症*/
	indications?: string;
	/*备注*/
	note?: string;
	/*产品分类*/
	goodsClassify?: AT_GoodsClassifyModel;
	/*挂网信息*/
	goodsNets?: AT_GoodsNetModel[];
	/*供应商*/
	goodsSuppliers?: AT_GoodsSupplierModel[];
	/*产品政策*/
	goodsPolicies?: AT_GoodsPolicyModel[];
	/*通用政策*/
	goodsPolicyPublics?: AT_GoodsPolicyPublicModel[];
	/*带量政策*/
	goodsPolicyBrings?: AT_GoodsPolicyBringModel[];
	/*两票差异化政策*/
	goodsPolicyDifferences?: AT_GoodsPolicyDifferenceModel[];
	/*附件信息*/
	goodsAttachments?: AT_GoodsAttachmentModel[];
	/*项目名称列表*/
	goodsCatalogs?: number[];
}

export declare interface AT_GoodsFlowViewModel {
	/*产品模型*/
	goodsModel?: AT_GoodsModel;
	/*产品批文*/
	approvalViewModel?: AT_GoodsApprovalViewModel;
	/*附件信息*/
	goodsAttachments?: AT_GoodsAttachmentModel[];
}

export declare interface AT_GoodsFoundationModel {
	/*自增ID(还原用)*/
	id: number;
	/*流程id(还原用)*/
	flowId?: number;
	/*产品编码(还原用)*/
	productCode?: string;
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType?: number;
	/*注册分类*/
	category?: number;
	/*件装*/
	wholePackage: number;
	/*药品本位码*/
	selfCode?: string;
	/*包装数*/
	packageNumber: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*中包装*/
	mediumPackage?: number;
	/*制剂类型*/
	preparationType?: number;
	/*报价单位*/
	quotationUnit?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*医保属性：甲类，乙类，非医保*/
	medicare?: number;
	/*基药属性：基药，非基药*/
	essential?: number;
	/*国家医保代码*/
	medicareCode?: string;
	/*国家卫健委YPID*/
	ypid?: string;
	/*详细包装规格*/
	packageStandard: string;
	/*标化通用名*/
	genericName: string;
	/*通用名首拼*/
	pinyin?: string;
	/*标化剂型*/
	dosageForm: string;
	/*标化规格*/
	standard: string;
	/*医保归并剂型*/
	mergeDosageForm: string;
	/*批准文号*/
	serial: string;
	/*注册批件Id*/
	goodsApprovalId: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*有效期：单位【月】*/
	expiryDate: number;
	/*检验报告号*/
	reportNo?: string;
	/*检验有效期起*/
	startValidity?: string;
	/*检验有效期止*/
	endValidity?: string;
	/*包材*/
	packageMaterial?: string;
	/*长*/
	length?: number;
	/*宽*/
	width?: number;
	/*高*/
	height?: number;
	/*单位重量*/
	unitWeight?: string;
	/*用法用量*/
	usageDosage?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*制剂特点*/
	features: string;
	/*存储条件*/
	storage?: string;
	/*适应症*/
	indications?: string;
	/*备注*/
	note?: string;
	/*产品分类*/
	goodsClassify?: AT_GoodsClassifyModel;
	/*附件信息*/
	goodsAttachments?: AT_GoodsAttachmentModel[];
}

export declare interface AT_GoodsModel {
	/*自增ID(还原用)*/
	id: number;
	/*流程id(还原用)*/
	flowId?: number;
	/*产品编码(还原用)*/
	productCode?: string;
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType?: number;
	/*注册分类*/
	category?: number;
	/*件装*/
	wholePackage: number;
	/*药品本位码*/
	selfCode?: string;
	/*包装数*/
	packageNumber: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*中包装*/
	mediumPackage?: number;
	/*制剂类型*/
	preparationType?: number;
	/*报价单位*/
	quotationUnit?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*医保属性：甲类，乙类，非医保*/
	medicare?: number;
	/*基药属性：基药，非基药*/
	essential?: number;
	/*国家医保代码*/
	medicareCode?: string;
	/*国家卫健委YPID*/
	ypid?: string;
	/*详细包装规格*/
	packageStandard: string;
	/*标化通用名*/
	genericName: string;
	/*通用名首拼*/
	pinyin?: string;
	/*标化剂型*/
	dosageForm: string;
	/*标化规格*/
	standard: string;
	/*医保归并剂型*/
	mergeDosageForm: string;
	/*批准文号*/
	serial: string;
	/*注册批件Id*/
	goodsApprovalId: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*有效期：单位【月】*/
	expiryDate: number;
	/*检验报告号*/
	reportNo?: string;
	/*检验有效期起*/
	startValidity?: string;
	/*检验有效期止*/
	endValidity?: string;
	/*包材*/
	packageMaterial?: string;
	/*长*/
	length?: number;
	/*宽*/
	width?: number;
	/*高*/
	height?: number;
	/*单位重量*/
	unitWeight?: string;
	/*用法用量*/
	usageDosage?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*制剂特点*/
	features: string;
	/*存储条件*/
	storage?: string;
	/*适应症*/
	indications?: string;
	/*备注*/
	note?: string;
	/*产品分类*/
	goodsClassify?: AT_GoodsClassifyModel;
}

export declare interface AT_GoodsNetFastQueryModel {
	/*产品编码*/
	productCode?: string;
	/*省份名称*/
	provinceName?: string;
}

export declare interface AT_GoodsNetModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId: number;
	/*产品编码*/
	productCode?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位挂网价（产品目录使用）*/
	nowMinPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*挂网进度*/
	netSpeed?: number;
	/*最低发货数量*/
	minDeliveryQuantity?: number;
	/*备注*/
	note?: string;
	/*产品挂网ID*/
	networkID?: string;
	/*产品挂网时间段ID*/
	goodNetPeriodId: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
}

export declare interface AT_GoodsNetPageModel {
	/*挂网信息的ID*/
	netId?: number;
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*省份*/
	province?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*带量周期*/
	bringCycle?: number;
	/*最低发货件数*/
	minDeliveryQuantity?: number;
	/*产品挂网ID*/
	networkID?: string;
	/*挂网进度*/
	netSpeedName?: string;
	/*挂网进度更新时间*/
	netSpeedTime?: string;
	/*挂网进度更新时间*/
	readonly netSpeedTimeDisPlay?: string;
	/*备注*/
	note?: string;
	/*产品挂网时间段ID*/
	goodNetPeriodId: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
}

export declare interface AT_GoodsNetPageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsNetPageModel[];
	item2: number;
}

export declare interface AT_GoodsNetQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*药品类型*/
	drugType?: AT_QueryInt;
	/*省份Id*/
	provinceId?: AT_QueryInt;
	/*是否带量：否，是*/
	isBring?: AT_QueryInt;
	/*带量名称*/
	bringName?: AT_QueryList;
	/*挂网进度*/
	netSpeed?: AT_QueryList;
	/*标化规格*/
	standard?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_GoodsNetReturnViewModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId: number;
	/*省份名称*/
	provinceName?: string;
	/*产品编码*/
	productCode?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*挂网进度*/
	netSpeed?: number;
	/*最低发货数量*/
	minDeliveryQuantity?: number;
	/*备注*/
	note?: string;
	/*产品挂网ID*/
	networkID?: string;
	/*产品挂网时间段ID*/
	goodNetPeriodId: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
}

export declare interface AT_GoodsNetViewModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId: number;
	/*产品编码*/
	productCode?: string;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位挂网价（产品目录使用）*/
	nowMinPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*挂网进度*/
	netSpeed?: number;
	/*最低发货数量*/
	minDeliveryQuantity?: number;
	/*备注*/
	note?: string;
	/*产品挂网ID*/
	networkID?: string;
	/*产品挂网时间段ID*/
	goodNetPeriodId: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*省份名称*/
	provinceName?: string;
	/*挂网进度名称*/
	netSpeedName?: string;
	/*挂网进度更新时间*/
	netSpeedTime?: string;
	/*挂网进度更新时间*/
	readonly netSpeedTimeDisPlay?: string;
}

export declare interface AT_GoodsPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*产品编码*/
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*批准文号*/
	serial?: string;
	/*包装数*/
	packageNumber?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*备注*/
	note?: string;
	/*所属部门*/
	productDepName?: string;
	/*转招商状态*/
	isAttract?: number;
	/*转招商状态*/
	readonly isAttractDisPlay?: string;
	/*转采购状态*/
	isPurchase?: number;
	readonly isPurchaseDisPlay?: string;
}

export declare interface AT_GoodsPageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsPageModel[];
	item2: number;
}

export declare interface AT_GoodsPairCodeModel {
	/*产品编码*/
	productCode?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*海典商品编码*/
	hdGoodsCode?: string;
	/*海典通用名*/
	hdCommonName?: string;
	/*海典规格型号*/
	hdSpecs?: string;
	/*转化比*/
	ratio: number;
	/*海典生产企业*/
	hdManufacturer?: string;
}

export declare interface AT_GoodsPairCodePageModel {
	/*对码状态

0 = 未对码

1 = 已对码*/
	pairCodeState: AT_PairCodeState;
	/*对码状态 文本

0 = 未对码

1 = 已对码*/
	readonly pairCodeStateText: AT_PairCodeState;
	/*产品编码*/
	productCode?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*海典商品编码*/
	hdGoodsCode?: string;
	/*海典通用名*/
	hdCommonName?: string;
	/*海典规格型号*/
	hdSpecs?: string;
	/*转化比*/
	ratio?: number;
	/*海典生产企业*/
	hdManufacturer?: string;
}

export declare interface AT_GoodsPairCodePageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsPairCodePageModel[];
	item2: number;
}

export declare interface AT_GoodsPairCodeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*产品编码*/
	productCode?: AT_QueryString;
	/*海典商品编码*/
	hdGoodsCode?: AT_QueryString;
	/*海典通用名*/
	hdCommonName?: AT_QueryString;
	/*海典规格型号*/
	hdSpecs?: AT_QueryString;
	/*海典生产企业*/
	hdManufacturer?: AT_QueryString;
	/*对码状态*/
	pairCodeState?: AT_QueryInt;
}

export declare interface AT_GoodsPolicyBringCommissionPriceModel {
	/*行索引（多行计算时使用）*/
	rowIndex?: number;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode?: AT_CalculateModeEnum;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*销售佣金占比率：单位%*/
	saleRatio?: number;
	/*固定开票价格*/
	invoicePrice?: number;
	/*差额税率*/
	taxRate?: number;
}

export declare interface AT_GoodsPolicyBringCommissionPriceModels {
	bringCommissionPriceModels?: AT_GoodsPolicyBringCommissionPriceModel[];
}

export declare interface AT_GoodsPolicyBringModel {
	/*产品编码*/
	productCode?: string;
	/*省份：来源产品挂网省份表*/
	provinceId: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*固定开票价格*/
	invoicePrice?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode?: AT_CalculateModeEnum;
	/*挂网编号*/
	netId?: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
	/*带量政策明细*/
	policyBringDetails?: AT_PolicyBringDetail[];
}

export declare interface AT_GoodsPolicyBringSettlePriceModel {
	/*自增ID*/
	id?: number;
	/*行索引（多行计算时使用）*/
	rowIndex?: number;
	/*产品编码*/
	productCode?: string;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*销售佣金占比率：单位%*/
	saleRatio?: number;
	/*固定开票价格*/
	invoicePrice?: number;
	/*差额税率*/
	taxRate?: number;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode?: AT_CalculateModeEnum;
}

export declare interface AT_GoodsPolicyBringSettlePriceModels {
	bringSettlePriceModels?: AT_GoodsPolicyBringSettlePriceModel[];
}

export declare interface AT_GoodsPolicyBringViewModel {
	/*产品编码*/
	productCode?: string;
	/*省份：来源产品挂网省份表*/
	provinceId: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*固定开票价格*/
	invoicePrice?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode?: AT_CalculateModeEnum;
	/*挂网编号*/
	netId?: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
	/*带量政策明细*/
	policyBringDetails?: AT_PolicyBringDetail[];
	/*省份名称*/
	provinceName?: string;
	/*佣金结算方式名称

0 = 包干

1 = 开票*/
	readonly settleModeName?: AT_SettleModeEnum;
	/*佣金计算方式名称

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	readonly calculateModeName?: AT_CalculateModeEnum;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
	/*销售佣金占比率：单位%*/
	saleRatio?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低销量要求*/
	minSale?: number;
	/*最高销量要求*/
	maxSale?: number;
	/*结算价格*/
	settlePrice?: number;
	/*佣金价格*/
	commissionPrice?: number;
}

export declare interface AT_GoodsPolicyDifferenceModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*省份：来源产品挂网省份表*/
	provinceId: number;
	/*政策类型*/
	policyType: number;
	/*销售模式*/
	saleMode?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*成本价*/
	costPrice?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低开票价格*/
	invoicePrice?: number;
	/*结算价格*/
	settlePrice?: number;
	/*挂网编号*/
	netId?: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsPolicyDifferenceViewModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*省份：来源产品挂网省份表*/
	provinceId: number;
	/*政策类型*/
	policyType: number;
	/*销售模式*/
	saleMode?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*成本价*/
	costPrice?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低开票价格*/
	invoicePrice?: number;
	/*结算价格*/
	settlePrice?: number;
	/*挂网编号*/
	netId?: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
	/*政策类型名称*/
	policyTypeName?: string;
	/*销售模式名称*/
	saleModeName?: string;
	/*佣金结算方式名称

0 = 包干

1 = 开票*/
	readonly settleModeName?: AT_SettleModeEnum;
	/*省份*/
	provinceName?: string;
	/*是否带量：否，是*/
	isBring?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?: string;
	/*包装挂网价*/
	packagePrice?: number;
	/*包装计价单位*/
	packagePricingUnit?: string;
	/*带量数量*/
	bringQuantity?: number;
	/*带量数量单位*/
	bringQuantityUnit?: string;
	/*带量周期*/
	bringCycle?: number;
	/*带量名称*/
	bringName?: number;
	/*带量名称文本*/
	bringNameText?: string;
}

export declare interface AT_GoodsPolicyModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*采购成本价*/
	costPrice?: number;
	/*开票价格*/
	invoicePrice?: number;
	/*差额税率：单位%*/
	taxRate?: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsPolicyPageModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
}

export declare interface AT_GoodsPolicyPageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsPolicyPageModel[];
	item2: number;
}

export declare interface AT_GoodsPolicyPublicModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*政策类型*/
	policyType: number;
	/*政策禁止：禁止，允许*/
	isEnable?: number;
	/*销售模式*/
	saleMode?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*成本价*/
	costPrice?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低开票价格*/
	invoicePrice?: number;
	/*结算价格*/
	settlePrice?: number;
	/*是否允许底价发货：否，是*/
	isFloorPrice?: number;
	/*底价出货商业*/
	floorPriceBusiness?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsPolicyPublicViewModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*政策类型*/
	policyType: number;
	/*政策禁止：禁止，允许*/
	isEnable?: number;
	/*销售模式*/
	saleMode?: number;
	/*佣金结算方式

0 = 包干

1 = 开票*/
	settleMode?: AT_SettleModeEnum;
	/*成本价*/
	costPrice?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低开票价格*/
	invoicePrice?: number;
	/*结算价格*/
	settlePrice?: number;
	/*是否允许底价发货：否，是*/
	isFloorPrice?: number;
	/*底价出货商业*/
	floorPriceBusiness?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*备注*/
	note?: string;
	/*政策类型名称*/
	policyTypeName?: string;
	/*销售模式名称*/
	saleModeName?: string;
	/*佣金结算方式名称

0 = 包干

1 = 开票*/
	readonly settleModeName?: AT_SettleModeEnum;
	/*底价出货商业名称*/
	floorPriceBusinessName?: string;
}

export declare interface AT_GoodsPolicyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*药品类型*/
	drugType?: AT_QueryInt;
}

export declare interface AT_GoodsProvinceDivideModel {
	/*自增ID，（新增时为空）*/
	id?: number;
	/*所属部门*/
	goodsClassifyId: number;
	/*所属省份*/
	provinceId?: number;
	/*营销副总*/
	vicePresident?: string;
	/*营销总监*/
	director?: string;
	/*大区总监*/
	largeArea?: string;
	/*省区经理*/
	provincialArea?: string;
	/*客服专员*/
	commissioner?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsProvinceDividePageModel {
	/*自增ID*/
	id: number;
	/*所属部门*/
	goodsClassifyId: number;
	/*所属部门名称*/
	goodsClassifyName?: string;
	/*所属省份*/
	provinceId?: number;
	/*所属省份名称*/
	provinceName?: string;
	/*营销副总*/
	vicePresident?: string;
	/*营销副总名称*/
	vicePresidentName?: string;
	/*营销总监*/
	director?: string;
	/*营销总监名称*/
	directorName?: string;
	/*大区总监*/
	largeArea?: string;
	/*大区总监名称*/
	largeAreaName?: string;
	/*省区经理*/
	provincialArea?: string;
	/*省区经理名称*/
	provincialAreaName?: string;
	/*客服专员*/
	commissioner?: string;
	/*客服专员名称*/
	commissionerName?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsProvinceDividePageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsProvinceDividePageModel[];
	item2: number;
}

export declare interface AT_GoodsProvinceDivideQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*所属部门*/
	goodsClassifyId?: AT_QueryList;
	/*所属部门*/
	provinceId?: AT_QueryList;
	/*营销副总*/
	vicePresident?: AT_QueryList;
	/*营销总监*/
	director?: AT_QueryList;
	/*大区总监*/
	largeArea?: AT_QueryList;
	/*省区经理*/
	provincialArea?: AT_QueryList;
	/*客服专员*/
	commissioner?: AT_QueryList;
	/*备注*/
	note?: AT_QueryString;
}

export declare interface AT_GoodsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*药品类型*/
	drugType?: AT_QueryInt;
	/*申请类型*/
	applyType?: AT_QueryInt;
	/*Id集合*/
	ids?: AT_QueryList;
	/*标化规格*/
	standard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryDecimal;
	/*流程状态*/
	flowState?: AT_QueryList;
}

export declare interface AT_GoodsSafeStockModel {
	/*产品编码*/
	productCode: string;
	/*仓库编码*/
	warehouseCode: string;
	/*安全库存数量*/
	safeAmount: number;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsSafeStockPageModel {
	/*Id*/
	id?: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*仓库名称*/
	warehouseName?: string;
	/*企业名称*/
	companyName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*安全库存数量*/
	safeAmount?: number;
	/*单位*/
	minPreparationUnit?: string;
	/*备注*/
	note?: string;
	/*产品ID（产品编码）*/
	productCode?: string;
}

export declare interface AT_GoodsSafeStockPageModelIEnumerableInt32Tuple {
	item1?: AT_GoodsSafeStockPageModel[];
	item2: number;
}

export declare interface AT_GoodsSafeStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
}

export declare interface AT_GoodsSafeStockViewModel {
	/*主键Id*/
	id: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*产品Id（产品编码）*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: number;
	/*仓库*/
	warehouseCode?: string;
	/*仓库*/
	warehouseName?: string;
	/*安全库存数量*/
	safeAmount?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_GoodsSimpleModel {
	/*产品编码：2043*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*上市许可持有人名称*/
	holderName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*是否原料药*/
	isApis?: number;
	/*开票价*/
	invoicePrice?: number;
}

export declare interface AT_GoodsSupplierGoodsModel {
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*注册剂型*/
	regDosageForm?: string;
	/*注册规格*/
	regStandard?: string;
	/*包装单位*/
	packageUnit?: string;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装数*/
	packageNumber?: number;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*采购成本价*/
	costPrice?: number;
	/*开票价格*/
	invoicePrice?: number;
	/*是否原料药：0不是，1是*/
	isApis?: number;
}

export declare interface AT_GoodsSupplierModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*供应商：企业编码*/
	supplier?: string;
}

export declare interface AT_GoodsSupplierViewModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*供应商：企业编码*/
	supplier?: string;
	/*供应商：企业名称*/
	supplierName?: string;
}

export declare interface AT_GoodsViewModel {
	/*自增ID(还原用)*/
	id: number;
	/*流程id(还原用)*/
	flowId?: number;
	/*产品编码(还原用)*/
	productCode?: string;
	/*药品类型*/
	drugType: number;
	/*申请类型*/
	applyType?: number;
	/*注册分类*/
	category?: number;
	/*件装*/
	wholePackage: number;
	/*药品本位码*/
	selfCode?: string;
	/*包装数*/
	packageNumber: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*中包装*/
	mediumPackage?: number;
	/*制剂类型*/
	preparationType?: number;
	/*报价单位*/
	quotationUnit?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*医保属性：甲类，乙类，非医保*/
	medicare?: number;
	/*基药属性：基药，非基药*/
	essential?: number;
	/*国家医保代码*/
	medicareCode?: string;
	/*国家卫健委YPID*/
	ypid?: string;
	/*详细包装规格*/
	packageStandard: string;
	/*标化通用名*/
	genericName: string;
	/*通用名首拼*/
	pinyin?: string;
	/*标化剂型*/
	dosageForm: string;
	/*标化规格*/
	standard: string;
	/*医保归并剂型*/
	mergeDosageForm: string;
	/*批准文号*/
	serial: string;
	/*注册批件Id*/
	goodsApprovalId: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*有效期：单位【月】*/
	expiryDate: number;
	/*检验报告号*/
	reportNo?: string;
	/*检验有效期起*/
	startValidity?: string;
	/*检验有效期止*/
	endValidity?: string;
	/*包材*/
	packageMaterial?: string;
	/*长*/
	length?: number;
	/*宽*/
	width?: number;
	/*高*/
	height?: number;
	/*单位重量*/
	unitWeight?: string;
	/*用法用量*/
	usageDosage?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*制剂特点*/
	features: string;
	/*存储条件*/
	storage?: string;
	/*适应症*/
	indications?: string;
	/*备注*/
	note?: string;
	/*产品分类*/
	goodsClassify?: AT_GoodsClassifyModel;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*产品批文*/
	approvalViewModel?: AT_GoodsApprovalViewModel;
	/*销货单位*/
	goodsDeliveryUnits?: AT_GoodsDeliveryUnitViewModel[];
	/*挂网信息*/
	goodsNets?: AT_GoodsNetViewModel[];
	/*供应商*/
	goodsSuppliers?: AT_GoodsSupplierViewModel[];
	/*产品政策*/
	goodsPolicies?: AT_GoodsPolicyModel[];
	/*通用政策*/
	goodsPolicyPublics?: AT_GoodsPolicyPublicViewModel[];
	/*带量政策*/
	goodsPolicyBrings?: AT_GoodsPolicyBringViewModel[];
	/*两票差异化政策*/
	goodsPolicyDifferences?: AT_GoodsPolicyDifferenceViewModel[];
	/*附件信息*/
	goodsAttachments?: AT_GoodsAttachmentViewModel[];
	/*项目列表*/
	goodsCatalogs?: AT_GoodsCatalogViewModel[];
}

export declare interface AT_HDRejectionRecordPageModel {
	/*主键*/
	id?: number;
	/*状态

0 = 未入库

1 = 部分入库

2 = 已入库*/
	state: AT_RejectRecordState;
	/*状态

0 = 未入库

1 = 部分入库

2 = 已入库*/
	readonly stateText: AT_RejectRecordState;
	/*拒收原因*/
	rejectReason?: string;
	/*收货单位编码*/
	receiveCode?: string;
	/*收货单位名称*/
	receiveName?: string;
	/*供货单位编码*/
	supplierCode?: string;
	/*供货单位名称*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业编码*/
	manufacturerCode?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*制单量*/
	orderAmount?: number;
	/*拒收量*/
	rejectAmount?: number;
	/*待入库量*/
	pendAmount?: number;
	/*已入库量*/
	receivedAmount?: number;
	/*制单时间*/
	orderTime?: string;
	/*海典原始单号*/
	hdOldCode?: string;
	/*海典单号*/
	hdNewCode?: string;
	/*丰凯思订单号*/
	orderCode?: string;
	/*入库类型

0 = 手动入库

1 = 海典入库*/
	inStockType: AT_InStockType;
	/*入库类型

0 = 手动入库

1 = 海典入库*/
	readonly inStockTypeText: AT_InStockType;
	/*数据来源

1 = 丰恺思

2 = 海典*/
	dataSource: AT_RejectInStockDataSource;
	/*数据来源

1 = 丰恺思

2 = 海典*/
	readonly dataSourceText: AT_RejectInStockDataSource;
}

export declare interface AT_HDRejectionRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_HDRejectionRecordPageModel[];
	item2: number;
}

export declare interface AT_HDRejectionRecordViewModel {
	/*海典拒收主键*/
	id?: number;
	/*采购订单Id*/
	orderCode?: string;
	/*购货货单位名称*/
	receiveName?: string;
	/*购货货单位编码*/
	receiveCode?: string;
	/*所属仓库仓库编码*/
	warehouseCode?: string;
	/*所属仓库名称*/
	warehouseName?: string;
	/*产品编码*/
	productCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业名称*/
	manufacturerName?: string;
	/*生产企业编号*/
	manufacturerCode?: string;
	/*制单备注*/
	orderNote?: string;
	/*待入库量*/
	pendAmount: number;
}

export declare interface AT_HaiDianCompany {
	/*单位类型*/
	vencusNo?: string;
	/*单位名称*/
	vencusName?: string;
	/*单位类型*/
	vencusType?: string;
	/*对码状态

0 = 未对码

1 = 已对码*/
	pairCodeState: AT_PairCodeState;
}

export declare interface AT_HaiDianGoods {
	/*海典商品编码*/
	hdGoodsCode?: string;
	/*海典通用名*/
	hdCommonName?: string;
	/*海典规格型号*/
	hdSpecs?: string;
	/*海典生产企业*/
	hdManufacturer?: string;
	/*对码状态

0 = 未对码

1 = 已对码*/
	pairCodeState: AT_PairCodeState;
}

export enum AT_HaiDianTransferStatus {
	未转 = 0,
	已转 = 1,
}

export enum AT_HandleMode {
	已邮寄 = 1,
	随货同行 = 2,
}

export enum AT_HospitalType {
	基层 = 1,
	县级以上 = 2,
	不区分 = 3,
}

export enum AT_HtmlType {
	None = 0,
	Input = 1,
	Select = 2,
}

export declare interface AT_InStockPageModel {
	/*入库时间*/
	inStockTime?: string;
	/*收货单位编码*/
	companyCode?: string;
	/*收货单位名称*/
	companyName?: string;
	/*供货单位编码*/
	supplierCode?: string;
	/*供货单位名称*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*入库批号*/
	batchNo?: string;
	/*入库批次*/
	batch?: string;
	/*入库件数*/
	intoPackage?: number;
	/*入库仓库编码*/
	warehouseCode?: string;
	/*入库仓库名称*/
	warehouseName?: string;
	/*入库量*/
	inAmount?: number;
	/*有效期*/
	expiryDate: number;
	/*有效期至*/
	validDate?: string;
	/*有效期至*/
	readonly validDateDisplay?: string;
	/*采购订单单号*/
	orderCode?: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*制单类型*/
	fromTypeText?: string;
	/*制单编码*/
	fromCode?: string;
}

export declare interface AT_InStockPageModelIEnumerableInt32Tuple {
	item1?: AT_InStockPageModel[];
	item2: number;
}

export declare interface AT_InStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*入库时间*/
	inStockTime?: AT_QueryDateTime;
	/*收货单位名称*/
	companyName?: AT_QueryString;
	/*供货单位名称*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业名称*/
	manufacturerName?: AT_QueryString;
	/*入库批号*/
	batchNo?: AT_QueryString;
	/*入库批次*/
	batch?: AT_QueryString;
	/*入库仓库名称*/
	warehouseName?: AT_QueryString;
	/*采购订单单号*/
	orderCode?: AT_QueryString;
	/*制单类型*/
	fromType?: AT_QueryList;
	/*制单编码*/
	fromCode?: AT_QueryString;
	/*有效期至*/
	validDate?: AT_QueryDateTime;
}

export enum AT_InStockType {
	手动入库 = 0,
	海典入库 = 1,
}

export declare interface AT_Int32DecimalTuple {
	item1: number;
	item2: number;
}

export enum AT_IntentionFromTypeEnum {
	手动制单 = 0,
	自动生成 = 1,
}

export declare interface AT_IntentionModel {
	/*预计年度完成量*/
	completion?: number;
	/*完成量单位：支，盒，袋*/
	completionUnit?: string;
	/*自增ID*/
	id: number;
	/*代理意向书附件*/
	intentionAttachments?: AT_AttachmentModel[];
	/*愿意缴纳保证金额*/
	margin?: number;
	/*备注*/
	note?: string;
	/*其他描述*/
	otherDescription?: string;
	/*首批提货数量*/
	pickupVolume?: number;
	/*首批提货数量单位*/
	pickupVolumeUnit?: string;
	/*产品编码：招商产品ID*/
	productCode?: string;
	/*省份*/
	provinceId: number;
}

export enum AT_InternalTransferBackType {
	银行 = 1,
	理财 = 2,
}

export declare interface AT_InternalTransferPageModel {
	/*内部转账主表Id*/
	internalTransferId?: number;
	/*内部转账编码*/
	internalTransferCode?: string;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	moneyPayState: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly moneyPayStateText: AT_MoneyPayState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	moneyBackState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly moneyBackStateText: AT_MoneyBackState;
	/*转入日期*/
	transferDate?: string;
	/*转入日期*/
	readonly transferDateText?: string;
	/*付款类型

1 = 银行

2 = 理财*/
	payType: AT_InternalTransferPayType;
	/*付款类型

1 = 银行

2 = 理财*/
	readonly payTypeText: AT_InternalTransferPayType;
	/*付款配送公司*/
	payDeliveryCode?: string;
	/*付款配送公司*/
	payDeliveryName?: string;
	/*付款项目Id*/
	payProjectId?: number;
	/*付款项目名称*/
	payProjectText?: string;
	/*付款银行编码*/
	payBankBook?: string;
	/*付款银行名称*/
	payBankName?: string;
	/*付款银行明细编码*/
	payBankCard?: string;
	/*付款银行明细文本*/
	payBankCardText?: string;
	/*转入类型

1 = 银行

2 = 理财*/
	backType: AT_InternalTransferBackType;
	/*转入类型

1 = 银行

2 = 理财*/
	readonly backTypeText: AT_InternalTransferBackType;
	/*转入配送公司*/
	backDeliveryCode?: string;
	/*转入配送公司*/
	backDeliveryName?: string;
	/*转入项目Id*/
	backProjectId?: number;
	/*转入项目名称*/
	backProjectText?: string;
	/*转入银行编码*/
	backBankBook?: string;
	/*转入银行名称*/
	backBankName?: string;
	/*转入银行明细编码*/
	backBankCard?: string;
	/*转入银行明细文本*/
	backBankCardText?: string;
	/*金额*/
	transferMoney?: number;
	/*摘要*/
	summary?: string;
}

export declare interface AT_InternalTransferPageModelIEnumerableInt32Tuple {
	item1?: AT_InternalTransferPageModel[];
	item2: number;
}

export enum AT_InternalTransferPayType {
	银行 = 1,
	理财 = 2,
}

export declare interface AT_InternalTransferQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryInt;
	/*付款状态*/
	moneyPayState?: AT_QueryInt;
	/*回款状态*/
	moneyBackState?: AT_QueryInt;
	/*转入日期*/
	transferDate?: AT_QueryDateTime;
	/*付款类型*/
	payType?: AT_QueryInt;
	/*付款配送公司*/
	payDeliveryName?: AT_QueryString;
	/*付款项目名称*/
	payProjectText?: AT_QueryString;
	/*付款银行名称*/
	payBankName?: AT_QueryString;
	/*转入类型*/
	backType?: AT_QueryInt;
	/*转入配送公司*/
	backDeliveryName?: AT_QueryString;
	/*转入项目名称*/
	backProjectText?: AT_QueryString;
	/*转入银行名称*/
	backBankName?: AT_QueryString;
	/*摘要*/
	summary?: AT_QueryString;
}

export declare interface AT_InternalTransferRequestModel {
	/*付款类型*/
	payType: number;
	/*付款配送公司*/
	payDeliveryCode: string;
	/*付款项目Id*/
	payProjectId: number;
	/*付款项目名称*/
	payProjectText?: string;
	/*付款银行编码*/
	payBankBook: string;
	/*付款银行明细编码*/
	payBankCard: string;
	/*付款银行明细文本*/
	payBankCardText?: string;
	/*转入类型*/
	backType: number;
	/*转入配送公司*/
	backDeliveryCode: string;
	/*转入项目Id*/
	backProjectId: number;
	/*转入项目名称*/
	backProjectText?: string;
	/*转入银行*/
	backBankBook: string;
	/*转入银行明细编码*/
	backBankCard: string;
	/*转入银行明细文本*/
	backBankCardText?: string;
	/*转账金额*/
	transferMoney: number;
	/*摘要*/
	summary: string;
}

export declare interface AT_InternalTransferViewModel {
	/*付款类型*/
	payType: number;
	/*付款配送公司*/
	payDeliveryCode: string;
	/*付款项目Id*/
	payProjectId: number;
	/*付款项目名称*/
	payProjectText?: string;
	/*付款银行编码*/
	payBankBook: string;
	/*付款银行明细编码*/
	payBankCard: string;
	/*付款银行明细文本*/
	payBankCardText?: string;
	/*转入类型*/
	backType: number;
	/*转入配送公司*/
	backDeliveryCode: string;
	/*转入项目Id*/
	backProjectId: number;
	/*转入项目名称*/
	backProjectText?: string;
	/*转入银行*/
	backBankBook: string;
	/*转入银行明细编码*/
	backBankCard: string;
	/*转入银行明细文本*/
	backBankCardText?: string;
	/*转账金额*/
	transferMoney: number;
	/*摘要*/
	summary: string;
	internalTransferId?: number;
	internalTransferCode?: string;
	flowId?: number;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	payBankName?: string;
	backBankName?: string;
}

export declare interface AT_InvalidSaleContractModel {
	/*合同编码*/
	ids?: number[];
}

export declare interface AT_InvestPaymentPageModel {
	/*主键Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*回款公司编码*/
	companyCode?: string;
	/*回款公司*/
	companyName?: string;
	/*投资日期*/
	investDate?: string;
	/*投资日期*/
	readonly investDateDisPlay?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*关联项目名称*/
	projectManageName?: string;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText: AT_MoneyPayState;
}

export declare interface AT_InvestPaymentPageModelIEnumerableInt32Tuple {
	item1?: AT_InvestPaymentPageModel[];
	item2: number;
}

export declare interface AT_InvestPaymentQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*回款公司*/
	companyName?: AT_QueryString;
	/*实际投资人*/
	investor?: AT_QueryString;
	/*投资日期*/
	investDate?: AT_QueryDateTime;
	/*投资项目名称*/
	projectName?: AT_QueryString;
	/*关联项目名称*/
	projectManageName?: AT_QueryString;
	/*关联项目*/
	projectManageId?: AT_QueryList;
	/*付款状态*/
	payState?: AT_QueryList;
}

export declare interface AT_InvestPaymentRequestModel {
	/*主键Id*/
	id?: number;
	/*回款公司编码*/
	companyCode?: string;
	/*回款银行*/
	bankCardCode?: string;
	/*回款账号*/
	bankCardInfo?: string;
	/*投资日期*/
	investDate?: string;
	/*收款账号*/
	collection?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
}

export declare interface AT_InvestPaymentViewModel {
	/*主键Id*/
	id?: number;
	/*回款公司编码*/
	companyCode?: string;
	/*回款银行*/
	bankCardCode?: string;
	/*回款账号*/
	bankCardInfo?: string;
	/*投资日期*/
	investDate?: string;
	/*收款账号*/
	collection?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
}

export declare interface AT_InvestRecoverPageModel {
	/*主键Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*回款公司编码*/
	companyCode?: string;
	/*回款公司*/
	companyName?: string;
	/*投资日期*/
	investDate?: string;
	/*投资日期*/
	readonly investDateDisPlay?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*关联项目名称*/
	projectManageName?: string;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly backStateText: AT_MoneyBackState;
}

export declare interface AT_InvestRecoverPageModelIEnumerableInt32Tuple {
	item1?: AT_InvestRecoverPageModel[];
	item2: number;
}

export declare interface AT_InvestRecoverQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*回款公司*/
	companyName?: AT_QueryString;
	/*实际投资人*/
	investor?: AT_QueryString;
	/*投资日期*/
	investDate?: AT_QueryDateTime;
	/*投资项目名称*/
	projectName?: AT_QueryString;
	/*关联项目名称*/
	projectManageName?: AT_QueryString;
	/*关联项目*/
	projectManageId?: AT_QueryList;
	/*回款状态*/
	backState?: AT_QueryList;
}

export declare interface AT_InvestRecoverRequestModel {
	/*主键Id*/
	id?: number;
	/*回款公司编码*/
	companyCode?: string;
	/*回款银行*/
	bankCardCode?: string;
	/*回款账号*/
	bankCardInfo?: string;
	/*投资日期*/
	investDate?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
}

export declare interface AT_InvestRecoverViewModel {
	/*主键Id*/
	id?: number;
	/*回款公司编码*/
	companyCode?: string;
	/*回款公司名称*/
	companyName?: string;
	/*回款银行*/
	bankCardCode?: string;
	/*回款账号*/
	bankCardInfo?: string;
	/*投资日期*/
	investDate?: string;
	/*实际投资人*/
	investor?: string;
	/*投资项目名称*/
	projectName?: string;
	/*关联项目*/
	projectManageId?: number;
	/*关联项目名称*/
	projectManageName?: string;
	/*投资项目概况*/
	introduce?: string;
	/*回款摘要*/
	summary?: string;
	/*回款金额*/
	amount?: number;
	/*回款备注*/
	note?: string;
}

export declare interface AT_InvestmentModel {
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_InvestmentPageModel {
	/*Id*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*省份*/
	provinceId: number;
	/*省份名称*/
	provinceName?: string;
	/*产品编码*/
	productCode?: string;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	dutySubject?: AT_GoodsApprovalDutySubject;
}

export declare interface AT_InvestmentPageModelIEnumerableInt32Tuple {
	item1?: AT_InvestmentPageModel[];
	item2: number;
}

export declare interface AT_InvestmentQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	drugName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*责任主体*/
	dutySubject?: AT_QueryList;
}

export enum AT_InvoiceStateType {
	未开票 = 0,
	部分开票 = 1,
	已开票 = 2,
}

export enum AT_InvoiceType {
	专用发票 = 1,
	普通发票 = 2,
}

export enum AT_IsAffirmState {
	未确认 = 0,
	确认有效 = 1,
	确认无效 = 2,
}

export declare interface AT_KeyValue {
	value?: string;
	text?: string;
}

export declare interface AT_KeyValueIntDefaultViewModel {
	/*是否默认*/
	defaultValue: number;
	/*字符串值下拉框选项集*/
	selectOptions?: AT_KeyValueIntModel[];
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

export declare interface AT_KeyValueStringModel {
	/*值*/
	value?: string;
	/*文本*/
	text?: string;
}

export declare interface AT_KeyValueStringViewModel {
	/*字符串值下拉框选项集*/
	selectOptions?: AT_KeyValueStringModel[];
}

export declare interface AT_LogisticAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*

1 = 合作协议

2 = 收费明细附件*/
	type: AT_LogisticAttachmentType;
}

export enum AT_LogisticAttachmentType {
	合作协议 = 1,
	收费明细附件 = 2,
}

export declare interface AT_LogisticContactModel {
	/*自增ID*/
	id?: number;
	/*合作物流主表ID*/
	logisticId: number;
	/*联系人*/
	contact?: string;
	/*联系方式*/
	contactWay?: string;
	/*职位*/
	position?: string;
}

export declare interface AT_LogisticCooperationListModel {
	/*自增ID*/
	id: number;
	/*物流ID*/
	logisticId: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作开始时间*/
	startDate?: string;
	/*合作结束时间*/
	endDate?: string;
	/*合作协议上传状态*/
	cooperationStatus: number;
	/*收费明细附件上传状态*/
	feeDetailStatus: number;
	/*附件*/
	cooperationAttachments?: AT_LogisticAttachmentModel[];
}

export declare interface AT_LogisticCooperationModel {
	/*Id*/
	id: number;
	/*合作物流主表ID*/
	logisticId?: number;
	/*合作开始时间*/
	startDate?: string;
	/*合作结束时间*/
	endDate?: string;
	/*合作协议*/
	cooperationAttachments?: AT_LogisticAttachmentModel[];
	/*收费明细附件*/
	feeDetailAttachments?: AT_LogisticAttachmentModel[];
}

export declare interface AT_LogisticCooperationViewModel {
	/*合作物流主表ID*/
	logisticId?: number;
	/*合作开始时间*/
	startDate?: string;
	/*合作结束时间*/
	endDate?: string;
	/*合作协议*/
	cooperationAttachments?: AT_LogisticAttachmentModel[];
	/*收费明细附件*/
	feeDetailAttachments?: AT_LogisticAttachmentModel[];
	/*自增ID*/
	id: number;
	/*物流公司名称*/
	name?: string;
	/*法人*/
	legalPerson?: string;
}

export declare interface AT_LogisticDetailsEditModel {
	/*合作物流主表ID*/
	logisticId: number;
	/*合作物流明细*/
	logisticDetails?: AT_LogisticDetailsModel[];
}

export declare interface AT_LogisticDetailsEditViewModel {
	/*自增ID*/
	id: number;
	/*物流主表Id*/
	logisticId: number;
	/*最小体积*/
	minVolume?: number;
	/*最大体积*/
	maxVolume?: number;
	/*费用*/
	fee?: number;
	/*起点站省*/
	startProvinceId?: number;
	/*起点站省名称*/
	startProvinceName?: string;
	/*起点站市*/
	endCityId?: number;
	/*起点站市*/
	endCityName?: string;
	/*到达站省*/
	arrivalProvinceId?: number;
	/*到达站省*/
	arrivalProvinceName?: string;
	/*到达站市*/
	arrivalCityId?: number;
	/*到达站市*/
	arrivalCityName?: string;
	/*末端配送站点名*/
	siteName?: string;
	/*末端配送站点地址*/
	siteAddress?: string;
	/*货物查询电话*/
	inquiryPhone?: string;
}

export declare interface AT_LogisticDetailsModel {
	/*主键Id*/
	id: number;
	/*合作物流主表ID*/
	logisticId: number;
	/*最小体积*/
	minVolume?: number;
	/*最大体积*/
	maxVolume?: number;
	/*费用*/
	fee?: number;
	/*起点站省*/
	startProvinceId?: number;
	/*起点站市*/
	endCityId?: number;
	/*到达站省*/
	arrivalProvinceId?: number;
	/*到达站市*/
	arrivalCityId?: number;
	/*末端配送站点名*/
	siteName?: string;
	/*末端配送站点地址*/
	siteAddress?: string;
	/*货物查询电话*/
	inquiryPhone?: string;
}

export declare interface AT_LogisticDetailsPageModel {
	/*自增ID*/
	id: number;
	/*合作物流主表ID*/
	logisticId: number;
	/*合作状态

0 = 未合作

1 = 合作中*/
	logisticStatus: AT_LogisticStatus;
	/*合作状态

0 = 未合作

1 = 合作中*/
	readonly logisticStatusText: AT_LogisticStatus;
	/*物流公司名称*/
	name?: string;
	/*起点站*/
	startSite?: string;
	/*到达站*/
	arrivalSite?: string;
	/*末端配送站点名*/
	siteName?: string;
	/*末端配送站点地址*/
	siteAddress?: string;
	/*货物查询电话*/
	inquiryPhone?: string;
	/*体积范围*/
	volumeRange?: string;
	/*费用*/
	fee?: number;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_LogisticDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_LogisticDetailsPageModel[];
	item2: number;
}

export declare interface AT_LogisticDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物流公司名称*/
	name?: AT_QueryString;
	/*起点站*/
	startSite?: AT_QueryString;
	/*到达站*/
	arrivalSite?: AT_QueryString;
	/*状态*/
	logisticStatus?: AT_QueryInt;
}

export declare interface AT_LogisticDetailsRequestModel {
	/*主键Id*/
	id: number;
	/*合作物流主表ID*/
	logisticId: number;
	/*最小体积*/
	minVolume?: number;
	/*最大体积*/
	maxVolume?: number;
	/*费用*/
	fee?: number;
	/*起点站省*/
	startProvinceId?: number;
	/*起点站市*/
	endCityId?: number;
	/*到达站省*/
	arrivalProvinceId?: number;
	/*到达站市*/
	arrivalCityId?: number;
	/*末端配送站点名*/
	siteName?: string;
	/*末端配送站点地址*/
	siteAddress?: string;
	/*货物查询电话*/
	inquiryPhone?: string;
	/*合作物流明细表ID*/
	logisticDetailsId: number;
}

export declare interface AT_LogisticDetailsViewModel {
	/*合作物流主表ID*/
	logisticId?: number;
	/*合作物流名称*/
	logisticName?: string;
	/*法人*/
	legalPerson?: string;
	/*注册地址*/
	address?: string;
	/*注册资金*/
	capital?: string;
	/*合作物流明细*/
	logisticDetails?: AT_LogisticDetailsEditViewModel[];
}

export declare interface AT_LogisticEditModel {
	/*物流公司名称*/
	name?: string;
	/*法人*/
	legalPerson?: string;
	/*注册地*/
	address?: string;
	/*注册资金*/
	capital?: string;
	/*全国统一货物查询电话*/
	inquiryPhone?: string;
	/*网址*/
	url?: string;
	/*联系人*/
	logisticContacts?: AT_LogisticContactModel[];
	/*配送省份*/
	logisticNetworks?: AT_LogisticNetworkModel[];
	/*合作明细*/
	logisticDetails?: AT_LogisticCooperationModel[];
}

export declare interface AT_LogisticFeeInfoRequestModel {
	/*自增ID*/
	id?: number;
	/*计费方式：计件、计重、计方

1 = 计件

2 = 计方

3 = 计重*/
	feeWay: AT_BillingMethod;
	/*目的地城市*/
	destCityId: number;
	/*实际物流总费用*/
	totalFee?: number;
	/*费用明细列表*/
	logisticsFeeDetails?: AT_LogisticsFeeDetailsRequestModel[];
	/*物流费用登记明细列表*/
	logisticsFeeInfoDetails?: AT_LogisticsFeeInfoDetailsRequestModel[];
}

export declare interface AT_LogisticInfoRequestModel {
	/*发货物流：合作物流主表ID*/
	logisticsId: number;
	/*发货时间*/
	sendDate?: string;
	/*发货地点*/
	sendPlace?: string;
	/*物流单号*/
	logisticsNumber?: string;
	/*物流电话*/
	logisticsPhone?: string;
	/*备注*/
	note?: string;
	/*销售出库Id列表*/
	saleOutStockIds?: number[];
}

export declare interface AT_LogisticNetworkModel {
	/*省份*/
	provinceId?: number;
}

export declare interface AT_LogisticNetworkViewModel {
	/*省份*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
}

export declare interface AT_LogisticPageModel {
	/*自增ID*/
	id: number;
	/*合作状态

0 = 未合作

1 = 合作中*/
	logisticStatus: AT_LogisticStatus;
	/*合作状态

0 = 未合作

1 = 合作中*/
	readonly logisticStatusText: AT_LogisticStatus;
	/*流程id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*物流公司名称*/
	name?: string;
	/*法人*/
	legalPerson?: string;
	/*注册地*/
	address?: string;
	/*注册资金*/
	capital?: string;
	/*全国统一货物查询电话*/
	inquiryPhone?: string;
	/*添加时间*/
	addTime: string;
	/*网址*/
	url?: string;
}

export declare interface AT_LogisticPageModelIEnumerableInt32Tuple {
	item1?: AT_LogisticPageModel[];
	item2: number;
}

export declare interface AT_LogisticPrintModel {
	/*收货信息*/
	companyReceiptText?: string;
	/*打印时间*/
	printTime: string;
	/*产品明细*/
	logisticProducts?: AT_LogisticProductModel[];
}

export declare interface AT_LogisticProductModel {
	/*收货单位*/
	deliveryName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount: number;
	/*件装*/
	wholePackage: number;
	/*件数*/
	readonly pieces: number;
	/*清单价(开票价)*/
	invoicePrice: number;
	/*备注*/
	note?: string;
}

export declare interface AT_LogisticQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物流公司名称*/
	name?: AT_QueryString;
	/*合作状态*/
	logisticStatus?: AT_QueryInt;
}

export declare interface AT_LogisticSimpleModel {
	/*合作物流主表Id*/
	logisticId: number;
	/*合作物流名称*/
	name?: string;
	/*全国统一货物查询电话*/
	inquiryPhone?: string;
}

export enum AT_LogisticStatus {
	未合作 = 0,
	合作中 = 1,
}

export declare interface AT_LogisticViewModel {
	/*物流公司名称*/
	name?: string;
	/*法人*/
	legalPerson?: string;
	/*注册地*/
	address?: string;
	/*注册资金*/
	capital?: string;
	/*全国统一货物查询电话*/
	inquiryPhone?: string;
	/*网址*/
	url?: string;
	/*联系人*/
	logisticContacts?: AT_LogisticContactModel[];
	/*自增ID*/
	id: number;
	/*配送省份*/
	logisticNetworks?: AT_LogisticNetworkViewModel[];
	/*合作物流明细*/
	logisticDetails?: AT_LogisticCooperationListModel[];
	/*计重列表*/
	logisticsTollWeights?: AT_LogisticsTollBillingViewModel[];
	/*计方列表*/
	logisticsTollVolumes?: AT_LogisticsTollBillingViewModel[];
	/*计件列表*/
	logisticsTollPieces?: AT_LogisticsTollBillingViewModel[];
}

export declare interface AT_LogisticsFeeDetailsRequestModel {
	/*自增ID*/
	id?: number;
	/*物流费用登记表ID*/
	logisticsFeeInfoId: number;
	/*费用类型：保价费、送货费、进仓费、上楼费、超区费、其他费用*/
	feeType?: number;
	/*费用金额*/
	feeMoney?: number;
}

export declare interface AT_LogisticsFeeInfoDetailsRequestModel {
	/*自增ID*/
	id?: number;
	/*物流费用登记表ID*/
	logisticsFeeInfoId: number;
	/*销售出库表ID*/
	saleOutStockId: number;
	/*理论物流费用*/
	theoryFee?: number;
	/*实际物流费用*/
	realityFee?: number;
}

export declare interface AT_LogisticsInfoDetailsPageModel {
	/*销售出库主键ID*/
	saleOutStockId?: number;
	/*出库时间*/
	outTime?: string;
	/*出库时间*/
	readonly outTimeDisPlay?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*销售通知单单号*/
	saleCode?: string;
	/*清单号*/
	billNo?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*出库批次*/
	batch?: string;
	/*出库批号*/
	batchNo?: string;
	/*出库量*/
	outAmount?: number;
	/*出库件数*/
	outStockPackage?: number;
	/*出库仓库*/
	warehouseCode?: string;
	/*出库仓库*/
	warehouseName?: string;
	/*合作省份*/
	cooperationProvinceId?: number;
	/*合作省份*/
	cooperationProvinceName?: string;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*代理商*/
	controller?: string;
	/*发货物流*/
	logisticName?: string;
	/*物流电话*/
	logisticsPhone?: string;
	/*物流单号*/
	logisticsNumber?: string;
	/*备注*/
	note?: string;
	/*理论物流费用*/
	theoryFee?: number;
	/*实际物流总费用*/
	realityFee?: number;
	/*目的地城市(省)*/
	provinceId?: number;
	/*目的地城市(省)*/
	provinceName?: string;
	/*目的地城市(市)*/
	cityId?: number;
	/*目的地城市(市)*/
	cityName?: string;
}

export declare interface AT_LogisticsInfoDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_LogisticsInfoDetailsPageModel[];
	item2: number;
}

export declare interface AT_LogisticsInfoDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*出库时间*/
	outTime?: AT_QueryDateTime;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*合作省份*/
	cooperationProvinceName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*销售通知单单号*/
	saleCode?: AT_QueryString;
	/*物流单号*/
	logisticsNumber?: AT_QueryString;
	/*清单号*/
	billNo?: AT_QueryString;
	/*出库量*/
	outAmount?: AT_QueryDecimal;
	/*出库件数*/
	outStockPackage?: AT_QueryDecimal;
	/*出库批号*/
	batchNo?: AT_QueryString;
	/*代理商*/
	controller?: AT_QueryString;
	/*发货物流*/
	logisticName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*实际物流总费用*/
	realityFee?: AT_QueryDecimal;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export enum AT_LogisticsPiecesFormula {
	价格x1 = 1,
	价格x重量 = 2,
	价格x体积 = 3,
	价格x件数 = 4,
}

export declare interface AT_LogisticsTollBillingViewModel {
	/*主键ID*/
	id?: number;
	/*最小件数(件)*/
	minValue?: number;
	/*最大件数(件)*/
	maxValue?: number;
	/*价格(元)*/
	price?: number;
	/*费用计算公式：价格*件数

1 = 价格x1

2 = 价格x重量

3 = 价格x体积

4 = 价格x件数*/
	formula: AT_LogisticsPiecesFormula;
	destCityId: number;
	destCityName?: string;
	destProvinceId: number;
	destProvinceName?: string;
}

export declare interface AT_LogisticsTollDestinationRequsetModel {
	/*目的省*/
	destProvinceId?: number;
	/*目的市*/
	destCityId?: number;
}

export declare interface AT_LogisticsTollPageModel {
	/*费用标准主键Id*/
	id: number;
	/*费用主键Id*/
	logisticsTollId: number;
	/*物流公司名称*/
	logisticsId: number;
	/*物流公司名称*/
	logisticName?: string;
	/*目的地省份*/
	destProvinceId?: number;
	/*目的地省份*/
	destProvinceName?: string;
	/*目的地城市*/
	destCityId?: number;
	/*目的地城市*/
	destCityName?: string;
	/*计费方式

1 = 计件

2 = 计方

3 = 计重*/
	billingMethod: AT_BillingMethod;
	/*计费方式

1 = 计件

2 = 计方

3 = 计重*/
	readonly billingMethodText: AT_BillingMethod;
	/*最小值*/
	minValue?: number;
	/*最大值*/
	maxValue?: number;
	/*价格*/
	price?: number;
	/*费用计算公式

1 = 价格x1

2 = 价格x重量

3 = 价格x体积

4 = 价格x件数*/
	formula: AT_LogisticsPiecesFormula;
	/*费用计算公式

1 = 价格x1

2 = 价格x重量

3 = 价格x体积

4 = 价格x件数*/
	readonly formulaText: AT_LogisticsPiecesFormula;
	/*更新时间*/
	updTime?: string;
	/*更新时间*/
	readonly updTimeDisPlay?: string;
	/*添加时间*/
	addTime?: string;
	/*添加时间*/
	readonly addTimeDisPlay?: string;
	/*合作状态

0 = 未合作

1 = 合作中*/
	cooperationState: AT_LogisticStatus;
	/*合作状态

0 = 未合作

1 = 合作中*/
	readonly cooperationStateText: AT_LogisticStatus;
}

export declare interface AT_LogisticsTollPageModelIEnumerableInt32Tuple {
	item1?: AT_LogisticsTollPageModel[];
	item2: number;
}

export declare interface AT_LogisticsTollPiecesRequestModel {
	/*主键ID*/
	id?: number;
	/*最小件数(件)*/
	minPieces?: number;
	/*最大件数(件)*/
	maxPieces?: number;
	/*价格(元)*/
	piecesPrice?: number;
	/*费用计算公式：价格*件数*/
	piecesFormula?: number;
}

export declare interface AT_LogisticsTollQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*合作状态*/
	cooperationState?: AT_QueryInt;
	/*物流名称*/
	logisticName?: AT_QueryString;
	/*目的地省份*/
	destProvinceId?: AT_QueryList;
	/*目的地城市*/
	destCityId?: AT_QueryList;
	/*计费方式*/
	billingMethod?: AT_QueryList;
}

export declare interface AT_LogisticsTollRequestModel {
	/*收费标准Id*/
	id?: number;
	/*合作物流主表ID*/
	logisticsId: number;
	/*始发省*/
	startProvinceId?: number;
	/*始发市*/
	startCityId?: number;
	/*目的地城市列表*/
	logisticsTollDestinations?: AT_LogisticsTollDestinationRequsetModel[];
	/*物流计件标准收费列表*/
	logisticsTollPieces?: AT_LogisticsTollPiecesRequestModel[];
	/*物流计方标准列表*/
	logisticsTollVolumes?: AT_LogisticsTollVolumeRequestModel[];
	/*物流计重标准列表*/
	logisticsTollWeights?: AT_LogisticsTollWeightRequestModel[];
}

export declare interface AT_LogisticsTollViewModel {
	/*收费标准Id*/
	id?: number;
	/*合作物流主表ID*/
	logisticsId: number;
	/*合作物流名称*/
	logisticsName?: string;
	/*始发省*/
	startProvinceId?: number;
	/*始发市*/
	startCityId?: number;
	/*目的地城市列表*/
	logisticsTollDestination?: AT_LogisticsTollDestinationRequsetModel;
	/*物流计件标准收费列表*/
	logisticsTollPieces?: AT_LogisticsTollPiecesRequestModel[];
	/*物流计方标准列表*/
	logisticsTollVolumes?: AT_LogisticsTollVolumeRequestModel[];
	/*物流计重标准列表*/
	logisticsTollWeights?: AT_LogisticsTollWeightRequestModel[];
}

export declare interface AT_LogisticsTollViewQueryModel {
	/*收费标准Id*/
	id: number;
	/*计费方式

1 = 计件

2 = 计方

3 = 计重*/
	method: AT_BillingMethod;
	/*到达城市ID*/
	cityId: number;
}

export declare interface AT_LogisticsTollVolumeRequestModel {
	/*主键ID*/
	id?: number;
	/*最小体积(立方米)*/
	minVolume?: number;
	/*最大体积(立方米)*/
	maxVolume?: number;
	/*价格(元)*/
	volumePrice?: number;
	/*费用计算公式：价格*1、价格*体积*/
	volumeFormula?: number;
}

export declare interface AT_LogisticsTollWeightRequestModel {
	/*主键ID*/
	id?: number;
	/*最小重量(kg)*/
	minWeight?: number;
	/*最大重量(kg)*/
	maxWeight?: number;
	/*价格(元)*/
	weightPrice?: number;
	/*费用计算公式：价格*1、价格*重量*/
	weightFormula?: number;
}

export declare interface AT_MarketContrastModel {
	/*主键*/
	id?: number;
	/*产品*/
	cp?: string;
	/*医保情况*/
	ybqk?: string;
	/*定位或比较*/
	dwhbj?: string;
	/*过凭情况*/
	gpqk?: string;
	/*分级管理*/
	fjgl?: string;
}

export declare interface AT_MarketExplainModel {
	/*自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*药理分类*/
	classify: string;
	/*主推科室*/
	department: string;
	/*核心适应症*/
	indications: string;
	/*产品特点*/
	feature: string;
}

export declare interface AT_MarketExplainPageModel {
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*申请类型*/
	applyTypeName?: string;
	/*注册分类*/
	categoryName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*批准文号*/
	serial?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*药理分类*/
	classify?: string;
	/*主推科室*/
	department?: string;
	/*核心适应症*/
	indications?: string;
	/*产品特点*/
	feature?: string;
}

export declare interface AT_MarketExplainPageModelIEnumerableInt32Tuple {
	item1?: AT_MarketExplainPageModel[];
	item2: number;
}

export declare interface AT_MarketExplainQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*标化剂型*/
	dosageForm?: AT_QueryString;
	/*标化规格*/
	standard?: AT_QueryString;
}

export declare interface AT_MarketExplainViewModel {
	/*自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*药理分类*/
	classify: string;
	/*主推科室*/
	department: string;
	/*核心适应症*/
	indications: string;
	/*产品特点*/
	feature: string;
	/*通用名*/
	drugName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*注册剂型*/
	regDosageForm?: string;
	/*注册规格*/
	regStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人名称*/
	holderName?: string;
	/*适应症*/
	goodsIndications?: string;
	/*用法用量*/
	usageDosage?: string;
}

export declare interface AT_MarketHunanModel {
	/*主键*/
	id?: number;
	/*厂家*/
	cj?: string;
	/*湖南挂网价格*/
	gwjg?: string;
	/*已开发医院及数量*/
	kfyysl?: string;
	/*招商政策*/
	zszc?: string;
}

export declare interface AT_MarketNationwideModel {
	/*主键*/
	id?: number;
	/*厂家*/
	cj?: string;
	/*已挂网省份*/
	gwsf?: string;
	/*挂网价格*/
	gwjg?: string;
}

export declare interface AT_MarketPlanAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_MarketPlanAttachmentViewModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
	/*自增ID*/
	id: number;
}

export declare interface AT_MarketPlanEditModel {
	/*标题*/
	title?: string;
	/*产品编码*/
	productCode?: string;
	/*通知类型：销售方案，其他*/
	marketType?: number;
	/*公示开始日期*/
	startDate?: string;
	/*公示结束日期*/
	endDate?: string;
	/*内容简版*/
	conentAbb?: string;
	/*内容*/
	content?: string;
	/*营销方案分享*/
	marketPlanShares?: AT_MarketPlanShareModel[];
	/*营销方案附件*/
	marketPlanAttachments?: AT_MarketPlanAttachmentModel[];
}

export declare interface AT_MarketPlanPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*添加人*/
	addUserName?: string;
	/*添加人部门*/
	depName?: string;
	/*通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*包装数*/
	packageNumber?: number;
	/*标题*/
	title?: string;
	/*产品编码*/
	productCode?: string;
	/*通知类型：销售方案，其他*/
	marketType?: number;
	/*通知类型文本*/
	marketTypeText?: string;
	/*添加时间*/
	addTime?: string;
	/*公示开始日期*/
	startDate?: string;
	/*公示结束日期*/
	endDate?: string;
	/*内容简版*/
	conentAbb?: string;
	/*内容*/
	content?: string;
}

export declare interface AT_MarketPlanPageModelIEnumerableInt32Tuple {
	item1?: AT_MarketPlanPageModel[];
	item2: number;
}

export declare interface AT_MarketPlanQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*通用名*/
	drugName?: AT_QueryString;
	/*通知类型*/
	marketType?: AT_QueryInt;
	/*添加人*/
	addUserName?: AT_QueryString;
	/*标题*/
	title?: AT_QueryString;
	/*添加时间*/
	addTime?: AT_QueryDateTime;
}

export declare interface AT_MarketPlanShareModel {
	/*被分享人*/
	toUser?: string;
}

export declare interface AT_MarketPlanShareViewModel {
	/*被分享人*/
	toUser?: string;
	/*自增ID*/
	id: number;
	/*被分享人名称*/
	toUserName?: string;
}

export declare interface AT_MarketPlanViewModel {
	/*标题*/
	title?: string;
	/*产品编码*/
	productCode?: string;
	/*通知类型：销售方案，其他*/
	marketType?: number;
	/*公示开始日期*/
	startDate?: string;
	/*公示结束日期*/
	endDate?: string;
	/*内容简版*/
	conentAbb?: string;
	/*内容*/
	content?: string;
	/*自增ID*/
	id: number;
	/*添加时间*/
	addTime?: string;
	/*添加人*/
	addUserName?: string;
	/*添加人部门*/
	depName?: string;
	/*通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*包装数*/
	packageNumber?: number;
	/*营销方案分享*/
	marketPlanShares?: AT_MarketPlanShareViewModel[];
	/*营销方案附件*/
	marketPlanAttachments?: AT_MarketPlanAttachmentViewModel[];
}

export declare interface AT_MarketRecruitModel {
	/*招商要点自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*分级管理分类*/
	fjglfl?: string;
	/*药品准入身份*/
	ypzrsf?: string;
	/*医保限制*/
	ybxz?: string;
	/*日治疗费用*/
	rzlfy?: string;
	/*医院管理*/
	yygl?: string;
	/*作用机制*/
	zyjz?: string;
	/*询证证据*/
	xzzj?: string;
	/*核心科室与病症主推*/
	hxksybzzt?: string;
	/*核心科室与病症次推*/
	hxksybzct?: string;
	/*注意事项*/
	zysx?: string;
	/*竞品比较*/
	jpbj?: string;
	/*提单要点准入优势*/
	tdydzrys?: string;
	/*提单要点临床优势*/
	tdydlcys?: string;
	/*提单要点其他优势*/
	tdydqtys?: string;
	/*招商价值*/
	zsjz?: string;
	/*省中标信息：json格式，数组形式，不确定几条数据*/
	szbxx?: string;
}

export declare interface AT_MarketRecruitPageModel {
	/*产品编码*/
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*申请类型*/
	applyTypeName?: string;
	/*注册分类*/
	categoryName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*批准文号*/
	serial?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
}

export declare interface AT_MarketRecruitPageModelIEnumerableInt32Tuple {
	item1?: AT_MarketRecruitPageModel[];
	item2: number;
}

export declare interface AT_MarketRecruitQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*标化剂型*/
	dosageForm?: AT_QueryString;
	/*标化规格*/
	standard?: AT_QueryString;
}

export declare interface AT_MarketRecruitViewModel {
	/*招商要点自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*分级管理分类*/
	fjglfl?: string;
	/*药品准入身份*/
	ypzrsf?: string;
	/*医保限制*/
	ybxz?: string;
	/*日治疗费用*/
	rzlfy?: string;
	/*医院管理*/
	yygl?: string;
	/*作用机制*/
	zyjz?: string;
	/*询证证据*/
	xzzj?: string;
	/*核心科室与病症主推*/
	hxksybzzt?: string;
	/*核心科室与病症次推*/
	hxksybzct?: string;
	/*注意事项*/
	zysx?: string;
	/*竞品比较*/
	jpbj?: string;
	/*提单要点准入优势*/
	tdydzrys?: string;
	/*提单要点临床优势*/
	tdydlcys?: string;
	/*提单要点其他优势*/
	tdydqtys?: string;
	/*招商价值*/
	zsjz?: string;
	/*省中标信息：json格式，数组形式，不确定几条数据*/
	szbxx?: string;
	/*注册通用名*/
	drugName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*标化通用名*/
	genericName?: string;
	/*注册剂型*/
	regDosageForm?: string;
	/*药理分类*/
	classify?: string;
	/*用法用量*/
	usageDosage?: string;
	/*适应症*/
	goodsIndications?: string;
	/*存储条件*/
	storage?: string;
	/*生产企业名称*/
	manufacturerName?: string;
}

export declare interface AT_MarketSpreadModel {
	/*自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*分级管理分类*/
	fjglfl?: string;
	/*药品准入身份*/
	ypzrsf?: string;
	/*医保限制*/
	ybxz?: string;
	/*参考日治疗费用*/
	ckrzlfy?: string;
	/*推广策略*/
	tgzc?: string;
	/*挂网价策略*/
	gwjzc?: string;
	/*预估全国容量*/
	ygqgrl?: string;
	/*预期目标*/
	yqmb?: string;
	/*作用机制*/
	zyjz?: string;
	/*询证证据*/
	xzzj?: string;
	/*核心科室与病症主推*/
	hxksybzzt?: string;
	/*核心科室与病症次推*/
	hxksybzct?: string;
	/*注意事项*/
	zysx?: string;
	/*提单要点准入优势*/
	tdydzrys?: string;
	/*提单要点临床优势*/
	tdydlcys?: string;
	/*提单要点其他优势*/
	tdydqtys?: string;
	/*招商价值*/
	zsjz?: string;
	/*同通用名竞品全国挂网情况*/
	marketNationwides?: AT_MarketNationwideModel[];
	/*同通用名竞品湖南政策情况*/
	marketHunans?: AT_MarketHunanModel[];
	/*同类竞品对比*/
	marketContrasts?: AT_MarketContrastModel[];
}

export declare interface AT_MarketSpreadPageModel {
	/*产品编码*/
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*申请类型*/
	applyTypeName?: string;
	/*注册分类*/
	categoryName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*批准文号*/
	serial?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
}

export declare interface AT_MarketSpreadPageModelIEnumerableInt32Tuple {
	item1?: AT_MarketSpreadPageModel[];
	item2: number;
}

export declare interface AT_MarketSpreadQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*标化剂型*/
	dosageForm?: AT_QueryString;
	/*标化规格*/
	standard?: AT_QueryString;
}

export declare interface AT_MarketSpreadViewModel {
	/*自增id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*分级管理分类*/
	fjglfl?: string;
	/*药品准入身份*/
	ypzrsf?: string;
	/*医保限制*/
	ybxz?: string;
	/*参考日治疗费用*/
	ckrzlfy?: string;
	/*推广策略*/
	tgzc?: string;
	/*挂网价策略*/
	gwjzc?: string;
	/*预估全国容量*/
	ygqgrl?: string;
	/*预期目标*/
	yqmb?: string;
	/*作用机制*/
	zyjz?: string;
	/*询证证据*/
	xzzj?: string;
	/*核心科室与病症主推*/
	hxksybzzt?: string;
	/*核心科室与病症次推*/
	hxksybzct?: string;
	/*注意事项*/
	zysx?: string;
	/*提单要点准入优势*/
	tdydzrys?: string;
	/*提单要点临床优势*/
	tdydlcys?: string;
	/*提单要点其他优势*/
	tdydqtys?: string;
	/*招商价值*/
	zsjz?: string;
	/*同通用名竞品全国挂网情况*/
	marketNationwides?: AT_MarketNationwideModel[];
	/*同通用名竞品湖南政策情况*/
	marketHunans?: AT_MarketHunanModel[];
	/*同类竞品对比*/
	marketContrasts?: AT_MarketContrastModel[];
	/*注册药品名称*/
	drugName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*标化剂型*/
	regDosageForm?: string;
	/*药理分类*/
	classify?: string;
	/*产品特点*/
	feature?: string;
	/*用法用量*/
	usageDosage?: string;
	/*适应症*/
	indications?: string;
}

export declare interface AT_MarketToolkitFile {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*自增id*/
	id?: number;
	/*附件类型

0 = 推广要点

1 = 说明书

2 = 彩页

3 = PPT相关

4 = 学术政策相关

5 = 其他工具*/
	type: AT_MarketToolkitType;
}

export declare interface AT_MarketToolkitModel {
	/*产品编码*/
	productCode?: string;
	/*附件*/
	marketToolkitFiles?: AT_MarketToolkitFile[];
}

export declare interface AT_MarketToolkitPageModel {
	productCode?: string;
	/*药品类型*/
	drugTypeName?: string;
	/*申请类型*/
	applyTypeName?: string;
	/*注册分类*/
	categoryName?: string;
	/*标化通用名*/
	genericName?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*批准文号*/
	serial?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
}

export declare interface AT_MarketToolkitPageModelIEnumerableInt32Tuple {
	item1?: AT_MarketToolkitPageModel[];
	item2: number;
}

export declare interface AT_MarketToolkitQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*标化通用名*/
	genericName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*标化剂型*/
	dosageForm?: AT_QueryString;
	/*标化规格*/
	standard?: AT_QueryString;
}

export enum AT_MarketToolkitType {
	推广要点 = 0,
	说明书 = 1,
	彩页 = 2,
	PPT相关 = 3,
	学术政策相关 = 4,
	其他工具 = 5,
}

export declare interface AT_MarketToolkitViewModel {
	/*产品编码*/
	productCode?: string;
	/*附件*/
	marketToolkitFiles?: AT_MarketToolkitFile[];
	/*注册药品名称*/
	drugName?: string;
	/*标化剂型*/
	regDosageForm?: string;
	/*标化规格*/
	regStandard?: string;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*上市许可持有人：企业编码*/
	holder?: string;
}

export declare interface AT_MaterialCheckoutResultModel {
	/*生产计划编码*/
	producePlanCode?: string;
	/*检验结果：1检验合格、0检验不合格*/
	isQualified: number;
}

export enum AT_MaterialState {
	原料未采购 = 0,
	原料已采购 = 1,
	原料已达 = 2,
	检验开始 = 3,
	检验不合格 = 4,
	检验合格 = 5,
	部分投产 = 6,
	已投产 = 7,
}

export declare interface AT_ModifySharingListModel {
	/*流程id*/
	flowId: number;
	/*营销方案分享*/
	marketPlanShares?: AT_MarketPlanShareModel[];
}

export declare interface AT_MoneyBackAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*附件类型：付款回单，电子附件

1 = 付款回单

2 = 电子附件*/
	type: AT_MoneyBackAttachmentType;
}

export enum AT_MoneyBackAttachmentType {
	付款回单 = 1,
	电子附件 = 2,
}

export declare interface AT_MoneyBackAttachmentViewModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	moneyBackAttachmentId?: number;
}

export declare interface AT_MoneyBackPageModel {
	/*自增ID*/
	id: number;
	/*回款明细编码*/
	backDetailsCode?: string;
	/*制单时间：回款数据来源的制单时间*/
	fromTime?: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType?: AT_OrderType;
	/*制单类型文本：如（销售回款单...）；存中文；可以程序写死*/
	fromTypeText?: string;
	/*核算部门*/
	countDep?: string;
	/*付款公司：企业编码或客户编码*/
	payUnit?: string;
	/*回款银行：账套信息中企业（回款公司）下所有银行名称；存编码*/
	backBook?: string;
	/*回款账户：银行信息中所属银行（回款银行）下所有的账户；存编码*/
	backCard?: string;
	/*摘要*/
	summary?: string;
	/*待回金额*/
	pendMoney?: number;
	/*制单备注（回款备注）：回款数据来源的制单备注*/
	fromNote?: string;
	/*最迟回款日*/
	latestDate?: string;
	/*制单人：回款数据来源的制单人*/
	fromUser?: string;
	/*制单单号：回款数据来源的单据编码；回款单号*/
	fromCode?: string;
	/*收货单位：配送公司；企业编码*/
	receipt?: string;
	/*出库单位*/
	supplierName?: string;
	/*回款摘要*/
	saleBackSummary?: string;
}

export declare interface AT_MoneyBackPageModelIEnumerableInt32Tuple {
	item1?: AT_MoneyBackPageModel[];
	item2: number;
}

export declare interface AT_MoneyBackQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*制单类型*/
	fromType?: AT_QueryInt;
	/*付款公司*/
	payUnit?: AT_QueryString;
	/*回款银行*/
	backBook?: AT_QueryString;
	/*摘要*/
	summary?: AT_QueryString;
	/*待回金额*/
	pendMoney?: AT_QueryDecimal;
	/*制单单号：回款数据来源的单据编码；回款单号*/
	fromCode?: AT_QueryString;
	/*收货单位*/
	receipt?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
}

export declare interface AT_MoneyBackRecordModel {
	/*回款明细编码*/
	backDetailsCode: string;
	/*回款公司：企业编码*/
	backUnit: string;
	/*回款公司文本*/
	backUnitText: string;
	/*付款公司：企业编码或客户编码*/
	payUnit?: string;
	/*付款公司文本*/
	payUnitText?: string;
	/*回款银行：账套信息中企业（回款公司）下所有银行名称；存编码*/
	backBook: string;
	/*回款银行*/
	backBookText: string;
	/*回款账户：银行信息中所属银行（回款银行）下所有的账户；存编码*/
	backCard: string;
	/*回款账户文本*/
	backCardText: string;
	/*摘要*/
	summary: string;
	/*制单单号*/
	fromCode: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*回款金额*/
	money: number;
	/*手续费率*/
	feeRate: number;
	/*手续费*/
	fee: number;
	/*回款日期*/
	backDate?: string;
	/*备注*/
	note?: string;
	/*收据单号：制单类型为销售保证金时用到*/
	billNo?: string;
	/*存放位置：制单类型为销售保证金时用到*/
	savePlace?: string;
	/*时间戳*/
	colver?: string;
	/*回款附件*/
	moneyBackAttachmentModels?: AT_MoneyBackAttachmentModel[];
}

export enum AT_MoneyBackState {
	未回款 = 0,
	部分回款 = 1,
	已回款 = 2,
}

export declare interface AT_MoneyBackViewModel {
	/*回款明细编码*/
	backDetailsCode?: string;
	/*制单单号：回款数据来源的单据编码；回款单号*/
	fromCode?: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*付款公司类型：企业，客户

1 = 公司

2 = 客户

3 = 内部

4 = 账户信息*/
	payUnitType: AT_PayUnitType;
	/*回款公司：企业编码*/
	backUnit?: string;
	/*回款公司*/
	backUnitName?: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*付款公司：企业编码或客户编码*/
	payUnit?: string;
	/*付款公司*/
	payUnitName?: string;
	/*制单备注：回款数据来源的制单备注*/
	fromNote?: string;
	/*收货单位：配送公司；企业编码*/
	receipt?: string;
	/*收货单位*/
	receiptName?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*回款银行：账套信息中企业（回款公司）下所有银行名称；存编码*/
	backBook?: string;
	/*回款银行*/
	backBookName?: string;
	/*回款账户：银行信息中所属银行（回款银行）下所有的账户；存编码*/
	backCard?: string;
	/*回款账户开户行账号*/
	backCardName?: string;
	/*回款日期*/
	backDate?: string;
	/*摘要*/
	summary?: string;
	/*回款金额*/
	money: number;
	/*手续费率*/
	feeRate?: number;
	/*手续费*/
	fee?: number;
	/*备注*/
	note?: string;
	/*收据单号*/
	billNo?: string;
	/*存放位置*/
	savePlace?: string;
	/*待回金额*/
	pendMoney?: number;
	/*时间戳*/
	colver?: string;
	/*回款附件*/
	moneyBackAttachmentModels?: AT_MoneyBackAttachmentModel[];
}

export declare interface AT_MoneyPayAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*附件图标*/
	icon: string;
	/*附件后缀*/
	ext: string;
}

export declare interface AT_MoneyPayPageModel {
	/*自增ID*/
	id: number;
	/*付款明细编码*/
	payDetailsCode?: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType?: AT_OrderType;
	/*制单类型文本：如（采购付款单...）；存中文；可以程序写死*/
	fromTypeText?: string;
	/*制单时间：付款数据来源的制单时间*/
	fromTime?: string;
	/*打印状态*/
	printState?: string;
	/*是否负数控制：否，是*/
	isMonitor?: number;
	/*核算部门*/
	countDep?: string;
	/*收款公司：企业编码或客户编码*/
	backUnit?: string;
	/*付款公司*/
	payUnit?: string;
	/*付款银行：账套信息中企业（付款公司）下所有银行名称；存编码*/
	payBook?: string;
	/*收款账户：企业（银行信息中（收款公司旗下所属银行）下所有的账户）；客户（客户管理下客户备案账户）；存编码*/
	backCard?: string;
	/*摘要*/
	summary?: string;
	/*待付金额*/
	pendMoney?: number;
	/*制单备注：付款数据来源的制单备注*/
	fromNote?: string;
	/*最迟付款日*/
	latestDate?: string;
	/*制单人：付款数据来源的制单人*/
	fromUser?: string;
	/*打印人*/
	printUser?: string;
	/*打印时间*/
	printTime?: string;
}

export declare interface AT_MoneyPayPageModelIEnumerableInt32Tuple {
	item1?: AT_MoneyPayPageModel[];
	item2: number;
}

export declare interface AT_MoneyPayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*核算部门*/
	countDep?: AT_QueryString;
	/*收款公司*/
	backUnit?: AT_QueryString;
	/*付款公司*/
	payUnit?: AT_QueryString;
	/*付款银行：账套信息中企业（付款公司）下所有银行名称；存编码*/
	payBook?: AT_QueryString;
	/*摘要*/
	summary?: AT_QueryString;
	/*待付金额*/
	pendMoney?: AT_QueryDecimal;
	/*制单类型*/
	fromType?: AT_QueryInt;
	/*制单人：付款数据来源的制单人*/
	fromUser?: AT_QueryString;
	/*制单单号：付款数据来源的单据编码*/
	fromCode?: AT_QueryString;
	/*制单时间：付款数据来源的制单时间*/
	fromTime?: AT_QueryDateTime;
	/*是否负数控制：否，是*/
	isMonitor?: AT_QueryInt;
}

export declare interface AT_MoneyPayRecordModel {
	/*付款明细编码*/
	payDetailsCode: string;
	/*付款公司：企业编码*/
	payUnit: string;
	/*付款公司文本*/
	payUnitText: string;
	/*收款公司：企业编码或客户编码*/
	backUnit: string;
	/*收款公司文本*/
	backUnitText: string;
	/*付款银行：账套信息中企业（付款公司）下所有银行名称；存编码*/
	payBook: string;
	/*付款银行*/
	payBookText: string;
	/*付款账户：银行信息中所属银行（付款银行）下所有的账户；存编码*/
	payCard: string;
	/*付款账户文本*/
	payCardText: string;
	/*收款账户：企业（银行信息中（收款公司旗下所属银行）下所有的账户）；客户（客户管理下客户备案账户）；存编码*/
	backCard?: string;
	/*收款账户文本不能为空*/
	backCardText?: string;
	/*摘要*/
	summary: string;
	/*制单单号*/
	fromCode: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*付款金额*/
	money: number;
	/*手续费*/
	fee: number;
	/*付款日期*/
	payDate: string;
	/*备注*/
	note?: string;
	/*时间戳*/
	colver?: string;
	/*付款附件*/
	moneyPayAttachmentModels?: AT_MoneyPayAttachmentModel[];
}

export declare interface AT_MoneyPayRecordViewModel {
	/*付款明细编码*/
	payDetailsCode: string;
	/*付款公司：企业编码*/
	payUnit: string;
	/*付款公司文本*/
	payUnitText: string;
	/*收款公司：企业编码或客户编码*/
	backUnit: string;
	/*收款公司文本*/
	backUnitText: string;
	/*付款银行：账套信息中企业（付款公司）下所有银行名称；存编码*/
	payBook: string;
	/*付款银行*/
	payBookText: string;
	/*付款账户：银行信息中所属银行（付款银行）下所有的账户；存编码*/
	payCard: string;
	/*付款账户文本*/
	payCardText: string;
	/*收款账户：企业（银行信息中（收款公司旗下所属银行）下所有的账户）；客户（客户管理下客户备案账户）；存编码*/
	backCard?: string;
	/*收款账户文本不能为空*/
	backCardText?: string;
	/*摘要*/
	summary: string;
	/*制单单号*/
	fromCode: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*付款金额*/
	money: number;
	/*手续费*/
	fee: number;
	/*付款日期*/
	payDate: string;
	/*备注*/
	note?: string;
	/*时间戳*/
	colver?: string;
	/*付款附件*/
	moneyPayAttachmentModels?: AT_MoneyPayAttachmentModel[];
	/*付款单明细制单备注*/
	fromNote?: string;
	/*待付金额*/
	pendMoney?: number;
	/*收款公司类型：公司，客户，内部，员工，外部*/
	backUnitType?: number;
	/*收款账户开户行账号*/
	backName?: string;
}

export declare interface AT_MoneyPaySimpleModel {
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*付款金额*/
	actualMoney?: number;
	/*付款时间*/
	payTime?: string;
	/*付款时间*/
	readonly payTimeDisPlay?: string;
}

export enum AT_MoneyPayState {
	未付款 = 0,
	部分付款 = 1,
	已付款 = 2,
}

export declare interface AT_MoneyPayViewModel {
	/*付款明细编码*/
	payDetailsCode?: string;
	/*制单单号：回款数据来源的单据编码；回款单号*/
	fromCode?: string;
	/*制单类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	fromType: AT_OrderType;
	/*收款公司类型：企业，客户

1 = 公司

2 = 客户

3 = 内部

4 = 员工

5 = 外部

6 = 账户信息*/
	backUnitType: AT_BackUnitType;
	/*付款公司：企业编码*/
	payUnit?: string;
	/*付款公司*/
	payUnitName?: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*收款公司：企业编码或客户编码*/
	backUnit?: string;
	/*收款公司：企业编码或客户编码*/
	backUnitName?: string;
	/*制单备注：付款数据来源的制单备注*/
	fromNote?: string;
	/*付款银行：账套信息中企业（付款公司）下所有银行名称；存编码*/
	payBook?: string;
	/*付款银行*/
	payBookName?: string;
	/*付款账户编码*/
	payCard?: string;
	/*开户行*/
	bankBranch?: string;
	/*付款账户开户行账号*/
	payName?: string;
	/*开户名*/
	accountName?: string;
	/*摘要*/
	summary?: string;
	/*待付金额*/
	pendMoney?: number;
	/*待付金额*/
	moneyName?: string;
	/*收款账户编码*/
	backCard?: string;
	/*收款账户开户行账号*/
	backName?: string;
	/*收款开户行*/
	backBankName?: string;
	/*收款账户*/
	backBankCard?: string;
	/*时间戳*/
	colver?: string;
}

export declare interface AT_NetSimpleModel {
	/*最小制剂价格*/
	minPreparationPrice?: number;
	/*是否带量*/
	isBring?: number;
}

export declare interface AT_NoPassModel {
	/*点配备注*/
	accurateNote?: string;
	/*点配申请详细唯一编号*/
	ids?: number[];
}

export declare interface AT_NoticeReadModel {
	/*通知主表Ids*/
	noticeIds?: number[];
}

export enum AT_NoticeType {
	制剂目录 = 1,
	特殊事项 = 2,
}

export declare interface AT_NoticeViewModel {
	/*通知主表Id*/
	id: number;
	/*通知类型

1 = 制剂目录

2 = 特殊事项*/
	type: AT_NoticeType;
	/*标题：通知标题*/
	title?: string;
	/*内容：通知内容*/
	content?: string;
	/*新增时间*/
	addTime?: string;
	/*弹窗Key*/
	popupKey?: string;
	/*参数(跳转的关系Id)*/
	params?: string;
}

export declare interface AT_OpenSystemModel {
	/*账户编码*/
	accountCode?: string;
	/*开启状态*/
	openStatus: boolean;
	/*账号*/
	account?: string;
	/*中心管理系统名字*/
	name?: string;
	/*手机号码*/
	mobile?: string;
}

export enum AT_OrderStateType {
	未打印 = 0,
	已打印 = 1,
	已通知 = 2,
	部分发货 = 3,
	已发货 = 4,
	已入库 = 5,
	部分入库 = 6,
}

export enum AT_OrderType {
	采购订单 = 1,
	采购付款单 = 2,
	销售通知单 = 3,
	销售回款单 = 4,
	市场保证金回款单 = 5,
	货款保证金回款单 = 6,
	费用报销 = 7,
	销售退货付款单 = 8,
	销售佣金单 = 9,
	销售退货单 = 10,
	销售调价冲票付款单 = 11,
	销售货款保证金付款单 = 12,
	投资管理_回款 = 13,
	投资管理_付款 = 14,
	公司借支单 = 15,
	公司还款单 = 16,
	销售调价冲票回款单 = 17,
	采购调价冲票付款单 = 18,
	采购调价冲票回款单 = 19,
	采购回款单 = 20,
	采购其他付款单 = 21,
	付款单 = 22,
	销售市场保证金付款单 = 23,
	采购退货单 = 24,
	采购退货回款单 = 25,
	内部转账付款单 = 26,
	专项费用 = 27,
	内部转账回款单 = 28,
}

export declare interface AT_OutStockPageModel {
	/*出库时间*/
	outStockTime?: string;
	/*收货单位*/
	companyCode?: string;
	/*收货单位名称*/
	companyName?: string;
	/*合作省份*/
	cooperationProvinceName?: string;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*出库批号*/
	batchNo?: string;
	/*出库批次*/
	batch?: string;
	/*出库量*/
	outStockAmount?: number;
	/*出库件数*/
	intoPackage?: number;
	/*出库仓库*/
	warehouseCode?: string;
	/*出库仓库名称*/
	warehouseName?: string;
	/*销售通知单单号*/
	orderCode?: string;
	/*清单号*/
	billNo?: string;
	/*销售通知单 详细Id*/
	saleOrderDetailsId: number;
}

export declare interface AT_OutStockPageModelIEnumerableInt32Tuple {
	item1?: AT_OutStockPageModel[];
	item2: number;
}

export declare interface AT_OutStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*出库时间*/
	outStockTime?: AT_QueryDateTime;
	/*收货单位名称*/
	companyName?: AT_QueryString;
	/*合作省份*/
	provinceId?: AT_QueryInt;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*生产企业名称*/
	manufacturerName?: AT_QueryString;
	/*出库批号*/
	batchNo?: AT_QueryString;
	/*出库批次*/
	batch?: AT_QueryString;
	/*出库仓库名称*/
	warehouseName?: AT_QueryString;
	/*销售通知单单号*/
	orderCode?: AT_QueryString;
	/*清单号*/
	billNo?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_PageAuthorizationViewModel {
	/*路由名*/
	name?: string;
	/*路由地址*/
	path?: string;
	/*父级路由Id*/
	parentId: number;
	/*排序*/
	sort?: number;
	/*前端路由附加信息*/
	mate?: AT_SysPageRouteMateModel;
	/*组件名*/
	component?: string;
	/*是否是tab*/
	isTab: number;
	/*是否有通用权限*/
	isCommonAuthorization: number;
	/*父级菜单名称*/
	parentTitle?: string;
	/*路由id*/
	routeId: number;
	/*已拥有的权限详情*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
	/*权限项值之和*/
	permission?: number;
}

export enum AT_PageType {
	页面 = 1,
	弹窗 = 2,
}

export enum AT_PairCodeState {
	未对码 = 0,
	已对码 = 1,
}

export enum AT_PayModeType {
	现款 = 1,
	授信 = 2,
	预付货款 = 3,
}

export declare interface AT_PayRecordModel {
	/*付款记录Id*/
	id: number;
	/*付款时间*/
	payDate?: string;
	/*本次申请退款金额*/
	refundMoney?: number;
	/*本次付款金额*/
	money?: number;
}

export enum AT_PayUnitType {
	公司 = 1,
	客户 = 2,
	内部 = 3,
	账户信息 = 4,
}

export declare interface AT_PolicyBringDetail {
	/*自增ID*/
	id?: number;
	/*佣金计算方式

0 = 无

1 = 销售费用占比

2 = 结算价

3 = 销售费用占比_不含配送费*/
	calculateMode?: AT_CalculateModeEnum;
	/*固定开票价格*/
	invoicePrice?: number;
	/*最小制剂单位挂网价*/
	minPreparationPrice?: number;
	/*销售佣金占比率：单位%*/
	saleRatio?: number;
	/*差额税率*/
	taxRate?: number;
	/*最低销量要求*/
	minSale?: number;
	/*最高销量要求*/
	maxSale?: number;
	/*结算价格*/
	settlePrice?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*挂网编号*/
	netId?: number;
}

export declare interface AT_PopupAuthorizationViewModel {
	/*弹窗路由名*/
	name?: string;
	/*弹窗路由地址*/
	path?: string;
	/*弹窗路由标题*/
	title?: string;
	/*弹窗路由排序*/
	sort?: number;
	/*弹窗路由组件名*/
	component?: string;
	/*弹窗key*/
	popupKey?: string;
	/*是否走流程*/
	isRunFlow: number;
	/*弹窗流程类型*/
	flowPopupModel?: AT_FlowPopupModel;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
	/*弹窗路由id*/
	routeId: number;
	/*已拥有的权限详情 (为空 则控件无权限配置)*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
	/*权限项值之和 (为空 则控件无权限配置)*/
	permission?: number;
}

export declare interface AT_PostModel {
	postCode?: string;
	postName?: string;
}

export declare interface AT_PowerAttorneyPageModel {
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*中标价*/
	packagePrice?: number;
	/*区域*/
	areaName?: string;
	/*省份Id*/
	provinceId?: string;
	/*配送企业*/
	deliveryName?: string;
	/*配送企业编码*/
	deliveryCode?: string;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*终端名称*/
	terminalName?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*申请时间*/
	applyDate?: string;
	/*申请人*/
	addUserName?: string;
	/*采购员*/
	buyerName?: string;
	/*备注*/
	note?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*流程Id*/
	flowId: number;
	/*办理进度

1 = 已申请

2 = 已办理

3 = 已邮寄

4 = 已作废*/
	state: AT_PowerAttorneyStateType;
	/*办理进度

1 = 已申请

2 = 已办理

3 = 已邮寄

4 = 已作废*/
	readonly stateText: AT_PowerAttorneyStateType;
	/*邮寄时间*/
	mailDate?: string;
	/*邮寄单号*/
	mailNo?: string;
	/*邮寄备注*/
	mailNote?: string;
	/*中转Id*/
	transferPowerAttorneyId?: number;
	/*唯一配送委托书Id*/
	powerAttorneyId?: string;
	/*系统标识*/
	sysCode?: string;
	/*来源UUID*/
	fromUuid?: string;
	/*更新时间*/
	updTime?: string;
	/*附件列表*/
	attachments?: AT_AttachmentModel[];
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
	/*提交日期（显示）*/
	readonly addTimeDisplay?: string;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_PowerAttorneyPageModelIEnumerableInt32Tuple {
	item1?: AT_PowerAttorneyPageModel[];
	item2: number;
}

export declare interface AT_PowerAttorneyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*配送公司*/
	deliveryName?: AT_QueryString;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*生产企业名称*/
	manufacturerName?: AT_QueryString;
	/*医院名称*/
	terminalName?: AT_QueryString;
	/*办理进度*/
	state?: AT_QueryInt;
	/*区域(省份Id)*/
	provinceId?: AT_QueryInt;
	/*区域(省份名称)*/
	areaName?: AT_QueryString;
	/*申请人*/
	addUserName?: AT_QueryString;
	/*采购员*/
	buyerName?: AT_QueryString;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_PowerAttorneyRequestModel {
	/*产品编码：来自可采清单*/
	productCode: string;
	/*配送企业编码：来自开户申请*/
	deliveryName: string;
	/*省份*/
	provinceId?: number;
	/*城市*/
	cityId?: number;
	/*终端名称*/
	terminalName?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*申请时间（列表带）*/
	applyDate?: string;
	/*备注*/
	note?: string;
	/*客户编码*/
	clientCode?: string;
	/*转单ID(列表带)*/
	transferPowerAttorneyId?: number;
	/*中标价（根据当前时间取当前时间，该省份，已挂网的挂网价（中标价））*/
	packagePrice?: number;
	/*系统标识(列表带)*/
	sysCode?: string;
	/*来源UUID(列表带)*/
	fromUuid?: string;
	/*新增配送委托书（附件集合）*/
	attachments?: AT_AttachmentModel[];
}

export enum AT_PowerAttorneyStateType {
	已申请 = 1,
	已办理 = 2,
	已邮寄 = 3,
	已作废 = 4,
}

export declare interface AT_PowerAttorneyViewModel {
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*中标价*/
	packagePrice?: number;
	/*区域*/
	areaName?: string;
	/*省份Id*/
	provinceId?: string;
	/*配送企业*/
	deliveryName?: string;
	/*配送企业编码*/
	deliveryCode?: string;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*终端名称*/
	terminalName?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*申请时间*/
	applyDate?: string;
	/*备注*/
	note?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*流程Id*/
	flowId: number;
	/*办理进度

1 = 已申请

2 = 已办理

3 = 已邮寄

4 = 已作废*/
	state: AT_PowerAttorneyStateType;
	/*邮寄时间*/
	mailDate?: string;
	/*邮寄单号*/
	mailNo?: string;
	/*邮寄备注*/
	mailNote?: string;
	/*id*/
	powerAttorneyId?: number;
	/*申请人*/
	addUserName?: string;
	/*采购员*/
	buyerName?: string;
	/*附件列表*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_PreparationsPassModel {
	/*投产Id*/
	id: number;
	/*合格数量*/
	validAmount: number;
	/*放行数量*/
	passAmount: number;
	/*放行时间*/
	passDate: string;
}

export enum AT_PreparationsState {
	已投产 = 0,
	质量检验中 = 1,
	制剂不合格 = 2,
	许可人放行 = 3,
	制剂已到达 = 4,
}

export declare interface AT_ProducePlanLineModel {
	/*生产计划编码*/
	producePlanCode?: string;
	/*排产开始时间*/
	lineStartDate?: string;
	/*排产结束时间*/
	lineEndDate?: string;
}

export declare interface AT_ProducePlanModel {
	/*产品编码*/
	productCode: string;
	/*原料批次数量*/
	amount?: number;
	/*理论批次产量(万)*/
	theoryAmount?: number;
	/*最迟出货日期*/
	lastDate?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_ProducePlanPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*生产计划原料状态

0 = 原料未采购

1 = 原料已采购

2 = 原料已达

3 = 检验开始

4 = 检验不合格

5 = 检验合格

6 = 部分投产

7 = 已投产*/
	state?: AT_MaterialState;
	/*生产计划原料状态

0 = 原料未采购

1 = 原料已采购

2 = 原料已达

3 = 检验开始

4 = 检验不合格

5 = 检验合格

6 = 部分投产

7 = 已投产*/
	readonly stateText?: AT_MaterialState;
	/*计划申请时间*/
	applyTime?: string;
	/*排产状态：未排产，已排产*/
	lineState?: number;
	/*排产开始时间*/
	lineStartDate?: string;
	/*排产结束时间*/
	lineEndDate?: string;
	/*原料批次数量*/
	amount?: number;
	/*理论批次产量(万)*/
	theoryAmount?: number;
	/*需求数量(万)*/
	needAmount?: number;
	/*原料采购：时间*/
	buyTime?: string;
	/*原料已达：时间*/
	arriveTime?: string;
	/*原料检验：时间*/
	testTime?: string;
	/*检验结果：时间*/
	resultTime?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*生产周期*/
	cycle?: number;
	/*已投产批次数量*/
	sumYieldAmount: number;
	/*已放行批次数量*/
	sumPassAmount: number;
	/*生产计划编码*/
	producePlanCode?: string;
	/*最迟出货日期*/
	lastDate?: string;
	/*制单人*/
	addUser?: string;
	/*更新人*/
	updUser?: string;
}

export declare interface AT_ProducePlanPageModelIEnumerableInt32Tuple {
	item1?: AT_ProducePlanPageModel[];
	item2: number;
}

export declare interface AT_ProducePlanQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*排产状态：未排产，已排产*/
	lineState?: AT_QueryInt;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产计划原料状态*/
	state?: AT_QueryInt;
}

export declare interface AT_ProducePlanRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*排产状态：未排产，已排产*/
	lineState?: AT_QueryInt;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产计划原料状态*/
	state?: AT_QueryInt;
	/*生产计划编码*/
	producePlanCode?: AT_QueryString;
}

export declare interface AT_ProducePlanViewModel {
	/*产品编码*/
	productCode: string;
	/*原料批次数量*/
	amount?: number;
	/*理论批次产量(万)*/
	theoryAmount?: number;
	/*最迟出货日期*/
	lastDate?: string;
	/*备注*/
	note?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*生产周期*/
	cycle?: number;
}

export declare interface AT_ProducePlanYieldListModel {
	/*自增ID*/
	id: number;
	/*制剂状态

0 = 已投产

1 = 质量检验中

2 = 制剂不合格

3 = 许可人放行

4 = 制剂已到达*/
	state: AT_PreparationsState;
	/*制剂状态

0 = 已投产

1 = 质量检验中

2 = 制剂不合格

3 = 许可人放行

4 = 制剂已到达*/
	readonly stateText: AT_PreparationsState;
	/*本次投产批次数量*/
	yieldAmount?: number;
	/*预计放行时间*/
	gaugePassDate?: string;
	/*预计生产数量*/
	gaugeAmount?: number;
	/*放行数量*/
	passAmount?: number;
	/*放行时间*/
	passDate?: string;
	/*合格数量*/
	validAmount?: number;
	/*本次时间*/
	yieldTime?: string;
}

export declare interface AT_ProducePlanYieldModel {
	/*生产计划编码*/
	producePlanCode: string;
	/*本次投产时间*/
	yieldTime: string;
	/*理论批次产量(万)*/
	theoryAmount: number;
	/*本次投产批次数量*/
	yieldAmount: number;
	/*预计放行时间*/
	gaugePassDate: string;
}

export declare interface AT_ProducePlanYieldPageModel {
	/*自增ID*/
	id: number;
	/*制剂状态

0 = 已投产

1 = 质量检验中

2 = 制剂不合格

3 = 许可人放行

4 = 制剂已到达*/
	state: AT_PreparationsState;
	/*制剂状态

0 = 已投产

1 = 质量检验中

2 = 制剂不合格

3 = 许可人放行

4 = 制剂已到达*/
	readonly stateText: AT_PreparationsState;
	/*本次投产批次数量*/
	yieldAmount?: number;
	/*预计放行时间*/
	gaugePassDate?: string;
	/*预计生产数量*/
	gaugeAmount?: number;
	/*放行数量*/
	passAmount?: number;
	/*放行时间*/
	passDate?: string;
	/*合格数量*/
	validAmount?: number;
	/*本次投产时间*/
	yieldTime?: string;
	/*生产计划编码*/
	producePlanCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*件装*/
	wholePackage?: number;
}

export declare interface AT_ProducePlanYieldPageModelIEnumerableInt32Tuple {
	item1?: AT_ProducePlanYieldPageModel[];
	item2: number;
}

export declare interface AT_ProducePlanYieldQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*制剂状态*/
	state?: AT_QueryInt;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产计划编码*/
	producePlanCode?: AT_QueryString;
}

export declare interface AT_ProductContractModel {
	/*购货单位：企业编码*/
	purchaseCode?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*产品编号*/
	productCode?: string;
	/*合同剩余数量*/
	contractAmount: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: number;
	/*成本价*/
	costPrice: number;
	/*开票价*/
	invoicePrice: number;
	/*税票税率*/
	taxRate: number;
}

export declare interface AT_ProductDetailParamModel {
	/*产品编码*/
	productCode?: string;
	/*数量*/
	amount?: number;
	/*唯一Id（前端传值，不需要管）*/
	newUuid?: string;
}

export declare interface AT_ProductGoodsNetModel {
	/*产品编码：2043*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*标化通用名*/
	genericName?: string;
	/*医保归并剂型*/
	mergeDosageForm?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*批准文号*/
	serial?: string;
	/*挂网信息*/
	goodsNets?: AT_GoodsNetViewModel[];
}

export declare interface AT_ProductList {
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
}

export declare interface AT_ProductPolicyViewModel {
	/*产品编码：2043*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*标化通用名*/
	genericName?: string;
	/*医保归并剂型*/
	mergeDosageForm?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*标化规格*/
	standard?: string;
	/*包装数*/
	packageNumber?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*包装单位*/
	packageUnit?: string;
	/*批准文号*/
	serial?: string;
	/*带量政策*/
	goodsPolicyBrings?: AT_GoodsPolicyBringViewModel[];
	/*通用政策*/
	goodsPolicyPublics?: AT_GoodsPolicyPublicViewModel[];
	/*两票差异化政策*/
	goodsPolicyDifferences?: AT_GoodsPolicyDifferenceViewModel[];
}

export declare interface AT_ProjectManagePageModel {
	/*自增ID*/
	id: number;
	/*项目名称*/
	projectName?: string;
	/*备注*/
	projectNote?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
	/*添加时间*/
	readonly addTimeDisPlay?: string;
	/*标化通用名*/
	genericName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*所属公司编码*/
	companyCode?: string;
	/*所属公司名称*/
	companyName?: string;
	/*产品列表*/
	goods?: AT_GoodsViewModel[];
}

export declare interface AT_ProjectManagePageModelIEnumerableInt32Tuple {
	item1?: AT_ProjectManagePageModel[];
	item2: number;
}

export declare interface AT_ProjectManageQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*项目名称*/
	projectName?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
	/*企业名称*/
	companyName?: AT_QueryString;
}

export declare interface AT_ProjectManageRequestModel {
	/*id主键*/
	id?: number;
	/*所属公司编码*/
	companyCode: string;
	/*项目名称*/
	projectName?: string;
	/*备注*/
	projectNote?: string;
	/*隶属目录集合*/
	productCodes?: string[];
}

export declare interface AT_ProjectManageSimpleModel {
	/*id主键*/
	id: number;
	/*项目名称*/
	projectName?: string;
	/*所属公司名称*/
	companyName?: string;
}

export declare interface AT_PurchaseBackDetailsRequestModel {
	/*自增ID*/
	id?: number;
	/*采购回款编码*/
	purchaseBackCode?: string;
	/*制单明细ID*/
	fromDetailsId?: number;
	/*产品编码*/
	productCode?: string;
	/*件装*/
	wholePackage?: number;
	/*数量*/
	amount?: number;
	/*开票价*/
	invoicePrice?: number;
	/*金额*/
	money?: number;
	/*备注*/
	notes?: string;
}

export declare interface AT_PurchaseBackDetailsViewModel {
	/*自增ID*/
	purchaseBackDetailsId?: number;
	/*采购回款编码*/
	purchaseBackCode?: string;
	/*制单明细ID*/
	fromDetailsId?: number;
	/*产品编码*/
	productCode?: string;
	drugName?: string;
	packageStandard?: string;
	manufacturer?: string;
	/*件装*/
	wholePackage?: number;
	/*数量*/
	amount?: number;
	/*开票价*/
	invoicePrice?: number;
	/*金额*/
	money?: number;
	/*备注*/
	notes?: string;
}

export declare interface AT_PurchaseBackPageModel {
	/*采购回款单Id*/
	id?: number;
	/*采购回款明细Id*/
	purchaseBackDetailsId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly backStateText: AT_MoneyBackState;
	/*单据类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	billType: AT_OrderType;
	/*单据类型

1 = 采购订单

2 = 采购付款单

3 = 销售通知单

4 = 销售回款单

5 = 市场保证金回款单

6 = 货款保证金回款单

7 = 费用报销

8 = 销售退货付款单

9 = 销售佣金单

10 = 销售退货单

11 = 销售调价冲票付款单

12 = 销售货款保证金付款单

13 = 投资管理_回款

14 = 投资管理_付款

15 = 公司借支单

16 = 公司还款单

17 = 销售调价冲票回款单

18 = 采购调价冲票付款单

19 = 采购调价冲票回款单

20 = 采购回款单

21 = 采购其他付款单

22 = 付款单

23 = 销售市场保证金付款单

24 = 采购退货单

25 = 采购退货回款单

26 = 内部转账付款单

27 = 专项费用

28 = 内部转账回款单*/
	readonly billTypeText: AT_OrderType;
	/*供应商*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*回款公司*/
	collectUnitCode?: string;
	/*回款公司名称*/
	collectUnitName?: string;
	/*回款银行编码*/
	bankBookCode?: string;
	/*回款银行*/
	bankName?: string;
	/*回款账号编码*/
	bankCardCode?: string;
	/*回款账号*/
	bankCard?: string;
	/*制单金额*/
	applicantMoney?: number;
	/*回款金额*/
	backMoney?: number;
	/*未回款金额*/
	readonly outstandingAmount?: number;
	/*回款时间*/
	backTime?: string;
	/*回款时间*/
	readonly backTimeText?: string;
	/*点单时间（财务实际点单时间）*/
	moneyBackAddTime?: string;
	/*点单时间（财务实际点单时间）*/
	readonly moneyBackAddTimeText?: string;
	/*采购回款备注*/
	notes?: string;
	/*财务回款备注*/
	moneyBackNote?: string;
	/*制单人*/
	addUser?: string;
	/*制单人*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*制单时间*/
	readonly addTimeText?: string;
	/*科目

1 = 预付货款

2 = 货款保证金

3 = 货款

4 = 保证金*/
	backSubject: AT_PurchaseBackSubject;
	/*科目

1 = 预付货款

2 = 货款保证金

3 = 货款

4 = 保证金*/
	readonly backSubjectText: AT_PurchaseBackSubject;
	/*摘要*/
	summary?: string;
	/*最迟回款日*/
	lastDate?: string;
	/*最迟回款日*/
	readonly lastDateText?: string;
	/*单号*/
	purchaseBackCode?: string;
}

export declare interface AT_PurchaseBackPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseBackPageModel[];
	item2: number;
}

export declare interface AT_PurchaseBackQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*回款状态*/
	backState?: AT_QueryList;
	/*单据类型*/
	billType?: AT_QueryList;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*回款公司名称*/
	collectUnitName?: AT_QueryString;
	/*回款银行*/
	bankName?: AT_QueryString;
	/*回款时间*/
	backTime?: AT_QueryDateTime;
	/*点单时间（财务实际点单时间）*/
	moneyBackAddTime?: AT_QueryDateTime;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*制单时间*/
	addTime?: AT_QueryDateTime;
	/*科目*/
	backSubject?: AT_QueryString;
	/*摘要*/
	summary?: AT_QueryString;
	/*单号*/
	purchaseBackCode?: AT_QueryString;
}

export declare interface AT_PurchaseBackRequestModel {
	/*采购回款单编码*/
	purchaseBackCode?: string;
	/*回款公司：企业编码*/
	companyCode?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*科目：预付货款，货款保证金*/
	backSubject?: number;
	/*最迟回款日*/
	lastDate?: string;
	/*回款银行：账套编码*/
	bankBookCode?: string;
	/*回款账号：银行卡编码*/
	bankCardCode?: string;
	/*回款信息：账户名/开户行/卡号*/
	backInfo?: string;
	/*金额*/
	totalMoney?: number;
	/*摘要*/
	summary?: string;
	/*备注*/
	notes?: string;
	/*明细*/
	purchaseBackDetails?: AT_PurchaseBackDetailsRequestModel[];
}

export enum AT_PurchaseBackSubject {
	预付货款 = 1,
	货款保证金 = 2,
	货款 = 3,
	保证金 = 4,
}

export declare interface AT_PurchaseBackViewModel {
	/*采购回款单Id*/
	id?: number;
	/*流程Id*/
	flowId?: number;
	/*采购回款单编码*/
	purchaseBackCode?: string;
	/*回款公司：企业编码*/
	companyCode?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*科目：预付货款，货款保证金*/
	backSubject?: number;
	/*最迟回款日*/
	lastDate?: string;
	/*回款银行：账套编码*/
	bankBookCode?: string;
	/*回款账号：银行卡编码*/
	bankCardCode?: string;
	/*回款信息：账户名/开户行/卡号*/
	backInfo?: string;
	/*金额*/
	totalMoney?: number;
	/*摘要*/
	summary?: string;
	/*备注*/
	notes?: string;
	/*明细*/
	purchaseBackDetails?: AT_PurchaseBackDetailsViewModel[];
}

export declare interface AT_PurchaseCodeViewModel {
	/*采购订单编码*/
	orderCode?: string;
	/*调价冲票码*/
	purchaseResetPriceCode?: string;
	/*采购模式

1 = 底价*/
	purchaseMode: AT_PurchaseModeType;
	/*采购模式

1 = 底价*/
	readonly purchaseModeText: AT_PurchaseModeType;
	/*供应商*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*购货单位*/
	deliveryCode?: string;
	/*购货单位名称*/
	deliveryName?: string;
	/*收款账户编码*/
	collectionAccountCode?: string;
	/*收款账户信息*/
	collectionAccountInfo?: string;
	/*备注*/
	note?: string;
	/*调价类型*/
	resetType?: number;
	/*明细列表*/
	purchaseOrderCodeDetails?: AT_PurchaseOrderCodeDetailViewModel[];
}

export declare interface AT_PurchaseContractDetailsModel {
	/*合同明细Id*/
	id?: number;
	/*产品编码：来源采购目录*/
	productCode: string;
	/*合同数量*/
	contractAmount: number;
	/*合同价格*/
	contractPrice: number;
}

export declare interface AT_PurchaseContractDetailsViewModel {
	/*合同明细Id*/
	id?: number;
	/*产品编码：来源采购目录*/
	productCode: string;
	/*合同数量*/
	contractAmount: number;
	/*合同价格*/
	contractPrice: number;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*注册剂型*/
	regDosageForm?: string;
	/*注册规格*/
	regStandard?: string;
	/*包装单位*/
	packageUnit?: string;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*合同明细金额*/
	readonly contractMenoy?: number;
}

export declare interface AT_PurchaseContractModel {
	/*合同编号*/
	contractNumber?: string;
	/*购货单位：企业编码*/
	purchaseCode?: string;
	/*供应商：企业编码*/
	supplierCode: string;
	/*合同类型：年度合同，批次合同*/
	contractType: number;
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
	/*合同明细*/
	purchaseContractDetailsModels?: AT_PurchaseContractDetailsModel[];
}

export declare interface AT_PurchaseContractPageModel {
	/*采购合同Id*/
	id: number;
	/*合同编号*/
	contractNumber?: string;
	/*合同类型：年度合同，批次合同*/
	contractType?: string;
	/*购货单位*/
	purchase?: string;
	/*供应商*/
	supplier?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装单位*/
	packageUnit?: string;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*合同数量*/
	contractAmount?: number;
	/*合同价格*/
	contractPrice?: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*添加人*/
	addUser?: string;
}

export declare interface AT_PurchaseContractPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseContractPageModel[];
	item2: number;
}

export declare interface AT_PurchaseContractQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*合同类型：年度合同，批次合同*/
	contractType?: AT_QueryInt;
	/*购货单位*/
	purchase?: AT_QueryString;
	/*供应商*/
	supplier?: AT_QueryString;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*开始时间*/
	startDate?: AT_QueryDateTime;
	/*结束时间*/
	endDate?: AT_QueryDateTime;
}

export declare interface AT_PurchaseContractViewModel {
	/*合同编码*/
	contractCode?: string;
	/*合同编号*/
	contractNumber?: string;
	/*购货单位：企业编码*/
	purchaseCode?: string;
	/*供应商：企业编码*/
	supplierCode: string;
	/*合同类型：年度合同，批次合同*/
	contractType: number;
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
	/*购货单位*/
	purchaseName?: string;
	/*供应商*/
	supplierName?: string;
	/*合同类型*/
	contractTypeName?: string;
	/*合同详情*/
	purchaseContractDetailsViewModels?: AT_PurchaseContractDetailsViewModel[];
}

export declare interface AT_PurchaseHDRejectInStockModel {
	/*海典拒收入库主键*/
	id?: number;
	/*丰凯思订单号*/
	orderCode: string;
	/*收货单位企业编码*/
	companyCode: string;
	/*所属仓库仓库编码*/
	warehouseCode: string;
	/*产品编码*/
	productCode: string;
	/*件装*/
	wholePackage?: number;
	/*采购入库明细*/
	inStockDetails?: AT_RejectionInStockDetailModel[];
}

export declare interface AT_PurchaseInStockDetailModel {
	/*生产日期*/
	produceDate: string;
	/*有效日期*/
	validDate?: string;
	/*批号*/
	batchNo: string;
	/*入库量*/
	inStorageAmount: number;
	/*入库件数*/
	inStorageNumber: number;
	/*拒收量*/
	rejectAmount?: number;
	/*拒收原因*/
	rejectReason?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_PurchaseInStockModel {
	/*采购订单发货Id*/
	purchaseOrderDeliveryId: number;
	/*购货单位企业编码*/
	companyCode: string;
	/*所属仓库仓库编码*/
	warehouseCode: string;
	/*产品编码*/
	productCode: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*购货货单位*/
	receipt?: string;
	/*供应商名称*/
	supplier?: string;
	/*数据来源

1 = 丰恺思

2 = 海典*/
	dataSource?: AT_RejectInStockDataSource;
	/*拒收入库主表ID（取值列表ID）*/
	id?: number;
	/*采购入库明细*/
	purchaseInStockDetails?: AT_PurchaseInStockDetailModel[];
}

export declare interface AT_PurchaseInStockPageModel {
	/*采购订单确认发货Id*/
	id: number;
	/*采购订单明细状态

0 = 未打印

1 = 已打印

2 = 已通知

3 = 部分发货

4 = 已发货

5 = 已入库

6 = 部分入库*/
	orderState: AT_OrderStateType;
	/*采购订单明细状态

0 = 未打印

1 = 已打印

2 = 已通知

3 = 部分发货

4 = 已发货

5 = 已入库

6 = 部分入库*/
	readonly orderStateText: AT_OrderStateType;
	/*开票状态

0 = 未开票

1 = 部分开票

2 = 已开票*/
	invoiceState: AT_InvoiceStateType;
	/*开票状态

0 = 未开票

1 = 部分开票

2 = 已开票*/
	readonly invoiceStateText: AT_InvoiceStateType;
	/*收货单位*/
	receipt?: string;
	/*核算部门*/
	countDep?: string;
	/*供应商名称*/
	supplier?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*制单量*/
	orderAmount?: number;
	/*待入库量*/
	pendAmount: number;
	/*已发货量*/
	sendAmount: number;
	/*发货时间*/
	sendDate?: string;
	/*发货方式：公路，铁路*/
	sendMode?: string;
	/*发货物流*/
	logisticName?: string;
	/*物流电话*/
	logisticsTel?: string;
	/*发货备注*/
	note?: string;
	/*制单人*/
	orderUser?: string;
	/*制单备注*/
	orderNote?: string;
	/*有效期：单位【月】*/
	expiryDate?: number;
	/*存储条件*/
	storage?: string;
	/*制单时间*/
	orderTime?: string;
	/*单号编码*/
	orderCode?: string;
}

export declare interface AT_PurchaseInStockPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseInStockPageModel[];
	item2: number;
}

export declare interface AT_PurchaseInStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*采购订单明细状态*/
	orderState?: AT_QueryInt;
	/*开票状态*/
	invoiceState?: AT_QueryInt;
	/*收货单位*/
	receipt?: AT_QueryString;
	/*供应商名称*/
	supplier?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*制单备注*/
	orderNote?: AT_QueryString;
	/*单号编码*/
	orderCode?: AT_QueryString;
}

export declare interface AT_PurchaseInStockViewModel {
	/*采购订单明细确认发货Id*/
	purchaseOrderDeliveryId: number;
	/*成本价*/
	costPrice?: number;
	/*购货单位企业编码*/
	companyCode?: string;
	/*购货货单位*/
	receipt?: string;
	/*所属仓库仓库编码*/
	warehouseCode?: string;
	/*所属仓库名称*/
	warehouseName?: string;
	/*产品编码*/
	productCode?: string;
	/*核算部门*/
	countDep?: string;
	/*供应商名称*/
	supplier?: string;
	/*单号编码*/
	orderCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*发货时间*/
	sendDate?: string;
	/*发货方式：公路，铁路*/
	sendMode?: string;
	/*发货物流*/
	logisticName?: string;
	/*发货备注*/
	note?: string;
	/*制单备注*/
	orderNote?: string;
	/*有效期：单位【月】*/
	expiryDate?: number;
	/*待入库量*/
	pendAmount: number;
}

export enum AT_PurchaseInvoiceDataSource {
	采购订单 = 1,
	采购退货单 = 2,
	采购调价冲票付款单 = 3,
	采购调价冲票回款单 = 4,
}

export declare interface AT_PurchaseInvoiceDetailsViewModel {
	/*产品编码*/
	productCode?: string;
	/*开票金额*/
	invoiceMoney?: number;
	/*订单编码*/
	orderCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*金额：采购订单金额*/
	orderMoney?: number;
	/*已开票金额*/
	addedInvoiceMoney?: number;
	/*税票税率*/
	taxRate?: number;
}

export declare interface AT_PurchaseInvoiceModel {
	/*订单编码：采购订单*/
	orderCode?: string;
	/*产品编码*/
	productCode?: string;
	/*开票时间*/
	invoiceDate?: string;
	/*税票号码*/
	taxNo?: string;
	/*开票金额*/
	invoiceMoney?: number;
	/*税票摘要*/
	summary?: string;
}

export declare interface AT_PurchaseInvoicePageModel {
	/*自增ID*/
	id: number;
	/*采购单号*/
	orderCode?: string;
	/*状态

1 = 已登记

2 = 已签收*/
	state: AT_PurchaseInvoiceState;
	/*状态

1 = 已登记

2 = 已签收*/
	readonly stateText: AT_PurchaseInvoiceState;
	/*财务签收时间*/
	signTime?: string;
	/*财务签收时间*/
	readonly signTimeDisplay?: string;
	/*采服登记时间*/
	sureTime?: string;
	/*采服登记时间*/
	readonly sureTimeDisplay?: string;
	/*数据来源

1 = 采购订单

2 = 采购退货单

3 = 采购调价冲票付款单

4 = 采购调价冲票回款单*/
	dataSource: AT_PurchaseInvoiceDataSource;
	fromCode?: string;
	/*开票时间*/
	invoiceDate?: string;
	/*开票时间*/
	readonly invoiceDateDisplay?: string;
	/*税票号*/
	taxNo?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*供应商*/
	supplierName?: string;
	/*采购员*/
	buyerName?: string;
	/*订单数量*/
	orderAmount: number;
	/*订单数量*/
	readonly orderAmountDisplay?: string;
	/*开票价*/
	invoicePrice: number;
	readonly invoicePriceDisplay?: string;
	/*仓库名称*/
	warehouseName?: string;
	/*付款银行*/
	bankName?: string;
	/*不含税金额*/
	noTaxMoney: number;
	readonly noTaxMoneyDisplay?: string;
	/*税金*/
	readonly taxMoney: number;
	readonly taxMoneyDisplay?: string;
	/*开票金额*/
	invoiceMoney: number;
	readonly invoiceMoneyDisplay?: string;
	/*应到总税额*/
	orderMoney: number;
	readonly orderMoneyDisplay?: string;
	/*税票摘要*/
	summary?: string;
}

export declare interface AT_PurchaseInvoicePageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseInvoicePageModel[];
	item2: number;
}

export declare interface AT_PurchaseInvoiceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*Id集合*/
	ids?: AT_QueryList;
	/*状态*/
	state?: AT_QueryInt;
	/*采购员*/
	buyerName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*采购单号*/
	orderCode?: AT_QueryString;
	/*税票号*/
	taxNo?: AT_QueryString;
	/*开票时间*/
	invoiceDate?: AT_QueryDateTime;
	/*采服登记时间*/
	sureTime?: AT_QueryDateTime;
}

export enum AT_PurchaseInvoiceState {
	已登记 = 1,
	已签收 = 2,
}

export enum AT_PurchaseModeType {
	底价 = 1,
}

export declare interface AT_PurchaseModel {
	/*税票税率*/
	taxRate?: number;
	/*采购员*/
	buyer?: string;
	/*批次产量*/
	output: number;
	/*生产周期*/
	cycle?: number;
}

export declare interface AT_PurchaseOrderCodeDetailViewModel {
	/*明细Id*/
	id?: number;
	/*采购订单明细Id*/
	purchaseOrderDetailsId?: number;
	/*已调价次数*/
	resetPriceCount?: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*数量(订单数量)*/
	orderAmount?: number;
	/*调价数量*/
	resetAmount?: number;
	/*原开票价*/
	origInvoicePrice?: number;
	/*现开票价*/
	invoicePrice?: number;
	/*调价总额*/
	resetMoney?: number;
}

export declare interface AT_PurchaseOrderDeliveryModel {
	/*订单编码：采购订单*/
	orderCode?: string;
	/*产品编码*/
	productCode?: string;
	/*发货数量*/
	sendAmount?: number;
	/*发货时间*/
	sendDate?: string;
	/*发货方式：公路，铁路*/
	sendMode?: number;
	/*物流公司*/
	logisticName?: string;
	/*物流电话*/
	logisticsTel?: string;
	/*物流单号*/
	logisticsNo?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_PurchaseOrderDetailsEditModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode: string;
	/*数量：采购订单数量；不能大于合同剩余数量*/
	orderAmount: number;
	/*金额：采购订单金额*/
	readonly pieceAmount?: number;
	/*成本价*/
	costPrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*实际金额*/
	actualMoney?: number;
	/*税票税率*/
	taxRate?: number;
	/*件装*/
	wholePackage?: number;
	/*备注*/
	note?: string;
	/*付款明细记录*/
	payPreRecords?: AT_PurchasePayPreRecordModel[];
}

export declare interface AT_PurchaseOrderDetailsViewModel {
	/*自增ID*/
	id?: number;
	/*产品编码*/
	productCode: string;
	/*数量：采购订单数量；不能大于合同剩余数量*/
	orderAmount: number;
	/*金额：采购订单金额*/
	readonly pieceAmount?: number;
	/*成本价*/
	costPrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*实际金额*/
	actualMoney?: number;
	/*税票税率*/
	taxRate?: number;
	/*件装*/
	wholePackage?: number;
	/*备注*/
	note?: string;
	/*金额：采购订单金额*/
	readonly orderMoney?: number;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*可用合同数量*/
	contractAmount: number;
	/*明细状态：未打印，已打印，已通知，已发货，已入库

0 = 未打印

1 = 已打印

2 = 已通知

3 = 部分发货

4 = 已发货

5 = 已入库

6 = 部分入库*/
	orderState: AT_OrderStateType;
	/*付款明细记录*/
	payPreRecords?: AT_PurchasePayPreRecordViewModel[];
}

export declare interface AT_PurchaseOrderEditModel {
	/*采购模式：底价....后续会有添加

1 = 底价*/
	purchaseMode: AT_PurchaseModeType;
	/*供应商：企业编码*/
	supplierCode: string;
	/*购货单位：企业编码*/
	companyCode: string;
	/*核算部门*/
	countDep?: string;
	/*付款模式：全额付款，授信，预付货款

1 = 现款

2 = 授信

3 = 预付货款*/
	payMode: AT_PayModeType;
	/*收款账户：供应商的基本账户信息(ComCode)*/
	backCard: string;
	/*收货信息：购货单位的收货信息(ComCode)*/
	receipt: string;
	/*收货仓库：购货单位的仓库名称(ComCode)*/
	warehouse: string;
	/*收件信息：购货单位的收件信息(ComCode)*/
	receive: string;
	/*开票信息：购货单位的开票信息(ComCode)*/
	invoice: string;
	/*备注*/
	note?: string;
	/*采购订单明细*/
	purchaseOrderDetails?: AT_PurchaseOrderDetailsEditModel[];
}

export declare interface AT_PurchaseOrderPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*订单状态

0 = 未打印

1 = 已打印

2 = 已通知

3 = 部分发货

4 = 已发货

5 = 已入库

6 = 部分入库*/
	orderState: AT_OrderStateType;
	/*订单状态：未打印，已打印，已通知，已发货，已入库

0 = 未打印

1 = 已打印

2 = 已通知

3 = 部分发货

4 = 已发货

5 = 已入库

6 = 部分入库*/
	readonly orderStateText: AT_OrderStateType;
	/*开票状态：未开票、部分开票、已开票

0 = 未开票

1 = 部分开票

2 = 已开票*/
	invoiceState?: AT_InvoiceStateType;
	/*开票状态：未开票、部分开票、已开票

0 = 未开票

1 = 部分开票

2 = 已开票*/
	readonly invoiceStateText?: AT_InvoiceStateType;
	/*订单时间*/
	orderTime?: string;
	readonly orderTimeDisplay?: string;
	/*入库时间*/
	inStockTime?: string;
	readonly inStockTimeDisplay?: string;
	/*付款模式

1 = 现款

2 = 授信

3 = 预付货款*/
	payMode: AT_PayModeType;
	/*付款模式

1 = 现款

2 = 授信

3 = 预付货款*/
	readonly payModeText: AT_PayModeType;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_MoneyPayState;
	/*付款日期*/
	payDate?: string;
	readonly payDateDisplay?: string;
	/*入库时间*/
	inStock?: string;
	readonly inStockDisplay?: string;
	/*购货单位：企业编码*/
	companyCode?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*核算部门*/
	countDep?: string;
	/*核算部门名称*/
	countDepName?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*数量：采购订单数量；不能大于合同剩余数量*/
	orderAmount?: number;
	readonly orderAmountDisplay?: string;
	/*件数*/
	pieceAmount?: number;
	readonly pieceAmountDisplay?: string;
	/*开票价*/
	invoicePrice?: number;
	readonly invoicePriceDisplay?: string;
	/*付款金额*/
	paidMoney?: number;
	readonly paidMoneyDisplay?: string;
	/*金额：采购订单金额*/
	readonly orderMoney?: number;
	readonly orderMoneyDisplay?: string;
	/*订单金额*/
	orderTotalMoney?: number;
	/*待付金额*/
	leftOrderMoney?: number;
	readonly leftOrderMoneyDisplay?: string;
	/*备注*/
	note?: string;
	/*订单编码*/
	orderCode?: string;
	/*采购员*/
	buyer?: string;
	/*供应商账户信息（开户名，开户行，账号）*/
	supplierBankInfo?: string;
	/*制单人*/
	orderUser?: string;
	/*收货信息*/
	receiptInfo?: string;
	/*收货仓库：购货单位的仓库名称*/
	warehouse?: string;
	/*海典转单状态

0 = 未转

1 = 已转*/
	haiDianTransferStatus: AT_HaiDianTransferStatus;
}

export declare interface AT_PurchaseOrderPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseOrderPageModel[];
	item2: number;
}

export declare interface AT_PurchaseOrderQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*Id集合*/
	ids?: AT_QueryList;
	/*订单单号*/
	orderCode?: AT_QueryString;
	/*订单时间*/
	orderTime?: AT_QueryDateTime;
	/*订单状态*/
	orderState?: AT_QueryInt;
	/*付款模式*/
	payMode?: AT_QueryInt;
	/*付款状态*/
	payState?: AT_QueryInt;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*采购员*/
	buyerName?: AT_QueryString;
	/*海典转单状态*/
	haiDianTransferStatus?: AT_QueryInt;
	/*购货单位：企业名称*/
	companyName?: AT_QueryString;
}

export declare interface AT_PurchaseOrderViewModel {
	/*采购模式：底价....后续会有添加

1 = 底价*/
	purchaseMode: AT_PurchaseModeType;
	/*供应商：企业编码*/
	supplierCode: string;
	/*购货单位：企业编码*/
	companyCode: string;
	/*核算部门*/
	countDep?: string;
	/*付款模式：全额付款，授信，预付货款

1 = 现款

2 = 授信

3 = 预付货款*/
	payMode: AT_PayModeType;
	/*收款账户：供应商的基本账户信息(ComCode)*/
	backCard: string;
	/*收货信息：购货单位的收货信息(ComCode)*/
	receipt: string;
	/*收货仓库：购货单位的仓库名称(ComCode)*/
	warehouse: string;
	/*收件信息：购货单位的收件信息(ComCode)*/
	receive: string;
	/*开票信息：购货单位的开票信息(ComCode)*/
	invoice: string;
	/*备注*/
	note?: string;
	/*订单编码*/
	orderCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*核算部门名称*/
	countDepName?: string;
	/*付款金额*/
	totalMoney?: number;
	/*所选供应商的基本账户信息*/
	supplierBank?: AT_CompanyBankViewModel;
	/*所选购货单位的收货信息*/
	companyReceipt?: AT_CompanyReceiptViewModel;
	/*购货单位的仓库*/
	companyWarehouse?: AT_CompanyWarehouseModel;
	/*购货单位的收件信息*/
	companyReceive?: AT_CompanyReceiveModel;
	/*购货单位的开票信息*/
	companyInvoice?: AT_CompanyInvoiceModel;
	/*产品明细*/
	purchaseOrderDetails?: AT_PurchaseOrderDetailsViewModel[];
	/*银行回单*/
	moneyPayAttachments?: AT_MoneyPayAttachmentModel[];
}

export declare interface AT_PurchasePageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程集合状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*制剂特点*/
	features?: string;
	/*件装*/
	wholePackage?: number;
	/*件装*/
	readonly wholePackageDisplay?: string;
	/*中包装*/
	mediumPackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*属性

1 = 直接持有

2 = 国代

3 = 间接持有*/
	attribute: AT_GoodsApprovalAttribute;
	/*属性

1 = 直接持有

2 = 国代

3 = 间接持有*/
	readonly attributeText: AT_GoodsApprovalAttribute;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	dutySubject: AT_GoodsApprovalDutySubject;
	/*责任主体

1 = 丰恺思

2 = 金六谷

3 = 海南仲悦

4 = 博康

5 = 佰家康*/
	readonly dutySubjectText: AT_GoodsApprovalDutySubject;
	/*是否原料药：否，是*/
	isApis?: number;
	/*是否原料药：否，是*/
	readonly isApisDisplay?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*质量层次*/
	qualityLevelText?: string;
	/*执行标准*/
	executiveStandard?: string;
	/*批准文号*/
	serial?: string;
	/*国家医保代码*/
	medicareCode?: string;
	/*采购员*/
	buyer?: string;
}

export declare interface AT_PurchasePageModelIEnumerableInt32Tuple {
	item1?: AT_PurchasePageModel[];
	item2: number;
}

export declare interface AT_PurchasePayApplyPrintModel {
	/*申请部门*/
	applyDep?: string;
	/*制单时间*/
	fromTime?: string;
	/*付款项目*/
	subjectText?: string;
	/*付款金额*/
	totalMoney?: number;
	/*付款金额大写*/
	readonly totalMoneyChinese?: string;
	/*收款单位（供应商）*/
	supplierName?: string;
	/*开户行*/
	bankName?: string;
	/*账号*/
	bankCard?: string;
	/*打印时间*/
	readonly printDate: string;
}

export declare interface AT_PurchasePayDetailsModel {
	/*产品编码*/
	productCode?: string;
	/*数量：采购订单数量；不能大于合同剩余数量*/
	orderAmount?: number;
	/*成本价*/
	costPrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*备注*/
	note?: string;
	/*应付金额*/
	payMoney?: number;
}

export declare interface AT_PurchasePayDetailsViewModel {
	/*产品编码*/
	productCode?: string;
	/*数量：采购订单数量；不能大于合同剩余数量*/
	orderAmount?: number;
	/*成本价*/
	costPrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*备注*/
	note?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*件数*/
	pieceNumber?: number;
	/*金额：采购订单金额*/
	payMoney?: number;
}

export declare interface AT_PurchasePayEditModel {
	/*购货单位：企业编码*/
	companyCode?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*科目*/
	subject?: number;
	/*科目文本：货款，预付货款*/
	subjectText?: string;
	/*收款账户(ComCode)*/
	backCard?: string;
	/*备注*/
	note?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId?: number;
	/*流程状态*/
	flowState?: number;
	/*总金额*/
	totalMoney: number;
	/*产品明细*/
	purchasePayDetails?: AT_PurchasePayDetailsModel[];
}

export declare interface AT_PurchasePayPageModel {
	/*自增ID*/
	id: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*采购付款编码：2058*/
	purchasePayCode?: string;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState: AT_MoneyPayState;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText: AT_MoneyPayState;
	/*打印状态

0 = 未打印

1 = 已打印*/
	printState?: AT_PurchasePayPrintState;
	/*打印状态

0 = 未打印

1 = 已打印*/
	readonly printStateText?: AT_PurchasePayPrintState;
	/*付款日期*/
	payTime?: string;
	/*转单备注*/
	purchasePayWaitNote?: string;
	/*购货单位：企业编码*/
	companyCode?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*科目*/
	subjectText?: string;
	/*制单金额*/
	totalMoney?: number;
	/*未付金额*/
	readonly pendMoney?: number;
	/*实付金额*/
	actualMoney?: number;
	/*制单人*/
	fromUser?: string;
	/*制单时间*/
	fromTime?: string;
	/*采购订单制单备注*/
	purchaseOrderNote?: string;
	/*摘要*/
	summary?: string;
	/*采购订单单号*/
	orderCode?: string;
	/*采购冲票调价单单号*/
	purchaseResetPriceCode?: string;
}

export declare interface AT_PurchasePayPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchasePayPageModel[];
	item2: number;
}

export declare interface AT_PurchasePayPreRecordModel {
	/*采购付款编码*/
	purchasePayCode?: string;
	/*产品编码*/
	productCode?: string;
	/*金额*/
	money?: number;
}

export declare interface AT_PurchasePayPreRecordViewModel {
	/*采购付款编码*/
	purchasePayCode?: string;
	/*产品编码*/
	productCode?: string;
	/*金额*/
	money?: number;
	/*自增ID*/
	id: number;
	/*订单编码：采购订单*/
	orderCode?: string;
	/*购货单位编码*/
	companyCode?: string;
	/*购货单位*/
	companyName?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*科目*/
	subjectText?: string;
	/*注册通用名*/
	manufacturerName?: string;
	/*详细包装规格*/
	drugName?: string;
	/*包装数*/
	packageStandard?: string;
	/*生产企业*/
	packageNumber?: string;
	/*件装*/
	wholePackage?: string;
	/*可用金额*/
	avalibleMoney: number;
}

export enum AT_PurchasePayPrintState {
	未打印 = 0,
	已打印 = 1,
}

export declare interface AT_PurchasePayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*单号*/
	purchasePayCode?: AT_QueryString;
	/*打印状态*/
	printState?: AT_QueryInt;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*付款状态*/
	payState?: AT_QueryInt;
	/*制单时间*/
	fromTime?: AT_QueryDateTime;
	/*制单金额*/
	totalMoney?: AT_QueryInt;
	/*科目*/
	subjectText?: AT_QueryString;
	/*摘要*/
	summary?: AT_QueryString;
	/*采购冲票调价单单号*/
	purchaseResetPriceCode?: AT_QueryString;
}

export declare interface AT_PurchasePayRecordModel {
	/*付款记录Id*/
	id: number;
	/*付款时间*/
	payDate?: string;
	/*金额*/
	totalMoney?: number;
	/*本次付款金额*/
	money?: number;
}

export declare interface AT_PurchasePayViewModel {
	/*购货单位：企业编码*/
	companyCode?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*科目*/
	subject?: number;
	/*科目文本：货款，预付货款*/
	subjectText?: string;
	/*收款账户(ComCode)*/
	backCard?: string;
	/*备注*/
	note?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId?: number;
	/*流程状态*/
	flowState?: number;
	/*自增ID*/
	id: number;
	/*采购付款编码：2058*/
	purchasePayCode?: string;
	backName?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState: AT_MoneyPayState;
	/*制单金额：采购待付款单代表（多次转单金额累计值）；其他代表总金额*/
	totalMoney?: number;
	/*产品明细*/
	purchasePayDetails?: AT_PurchasePayDetailsViewModel[];
	/*收款账户信息*/
	backBank?: AT_CompanyBankViewModel;
}

export declare interface AT_PurchasePayWaitPageModel {
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*状态

0 = 未转

1 = 部分转单

2 = 已转*/
	waitStatus: AT_PurchasePayWaitStatus;
	/*订单时间*/
	orderTime?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*购货单位：企业编码*/
	companyCode?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*科目文本：货款；走流程与重走流程；该字段值不变*/
	subjectText?: string;
	/*总金额（订单总额）：走流程与重走流程；该字段值不变*/
	totalMoney?: number;
	/*已转金额：走流程与重走流程，完成时该字段累加*/
	payMoney?: number;
	/*未转金额：未转金额=订单总额-已转金额*/
	readonly untransferredMoney?: number;
	/*订单编码*/
	orderCode?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_PurchasePayWaitPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchasePayWaitPageModel[];
	item2: number;
}

export declare interface AT_PurchasePayWaitQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*订单单号*/
	orderCode?: AT_QueryString;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*订单时间*/
	orderTime?: AT_QueryDateTime;
	/*总金额*/
	totalMoney?: AT_QueryDecimal;
	/*科目*/
	subjectText?: AT_QueryString;
	/*状态*/
	waitStatus?: AT_QueryInt;
	/*摘要*/
	summary?: AT_QueryString;
}

export enum AT_PurchasePayWaitStatus {
	未转 = 0,
	部分转单 = 1,
	已转 = 2,
}

export declare interface AT_PurchasePayWaitTransferModel {
	/*Id*/
	id: number;
	/*订单编码*/
	orderCode?: string;
	/*本次转单金额*/
	thisMoney?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_PurchasePayWaitTransferView {
	/*Id*/
	id: number;
	/*订单编码*/
	orderCode?: string;
	/*流程Id*/
	flowId?: number;
	/*流程状态*/
	flowState?: number;
	/*供应商：企业名称*/
	supplierName?: string;
	/*购货单位：企业名称*/
	companyName?: string;
	/*制单人*/
	fromUserName?: string;
	/*总金额：走流程与重走流程；该字段值不变*/
	totalMoney?: number;
	/*已转金额：走流程与重走流程，完成时该字段累加*/
	payMoney?: number;
	/*本次转单金额*/
	thisMoney?: number;
	/*备注*/
	note?: string;
	/*摘要*/
	summary?: string;
	/*订单日期*/
	orderTime?: string;
	/*订单日期*/
	readonly orderTimeDisplay?: string;
}

export declare interface AT_PurchaseQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产企业：企业名称*/
	manufacturerName?: AT_QueryString;
	/*批准文号*/
	serial?: AT_QueryString;
	/*质量层次*/
	qualityLevel?: AT_QueryInt;
	/*执行标准*/
	executiveStandard?: AT_QueryString;
	/*采购员*/
	buyer?: AT_QueryString;
	/*Id集合*/
	ids?: AT_QueryList;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*属性*/
	attribute?: AT_QueryInt;
	/*责任主体*/
	dutySubject?: AT_QueryInt;
}

export declare interface AT_PurchaseRejectInStockViewModel {
	/*主键*/
	id?: number;
	/*采购订单明细确认发货Id*/
	purchaseOrderDeliveryId: number;
	/*购货货单位编码*/
	receiveCode?: string;
	/*购货货单位名称*/
	receiveName?: string;
	/*所属仓库仓库编码*/
	warehouseCode?: string;
	/*所属仓库名称*/
	warehouseName?: string;
	/*产品编码*/
	productCode?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*采购订单编码*/
	orderCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业名称*/
	manufacturerName?: string;
	/*生产企业编号*/
	manufacturerCode?: string;
	/*制单备注*/
	orderNote?: string;
	/*待入库量*/
	pendAmount: number;
}

export declare interface AT_PurchaseResetPriceDetailsRequestModel {
	/*自增ID*/
	id?: number;
	/*采购调价冲票码：3131*/
	purchaseResetPriceCode?: string;
	/*采购订单明细ID*/
	purchaseOrderDetailsId: number;
	/*调价数量*/
	resetAmount?: number;
	/*现开票价*/
	invoicePrice?: number;
	/*调价总金额*/
	resetMoney?: number;
}

export declare interface AT_PurchaseResetPricePageModel {
	/*明细Id*/
	purchaseResetPriceDetailsId?: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*调价单号*/
	purchaseResetPriceCode?: string;
	/*调价类型*/
	resetType?: number;
	/*调价类型*/
	resetTypeText?: string;
	/*购货单位编码*/
	deliveryCode?: string;
	/*购货单位名称*/
	deliveryName?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	orderAmount?: number;
	/*调价数量*/
	resetAmount?: number;
	/*备注*/
	note?: string;
	/*采购订单编码*/
	orderCode?: string;
	/*调价金额*/
	adjustSumPrice?: number;
}

export declare interface AT_PurchaseResetPricePageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseResetPricePageModel[];
	item2: number;
}

export declare interface AT_PurchaseResetPriceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*购货单位名称*/
	deliveryName?: AT_QueryString;
	/*调价类型*/
	resetType?: AT_QueryInt;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*调价单号*/
	purchaseResetPriceCode?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryDecimal;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*采购订单编码*/
	orderCode?: AT_QueryString;
}

export declare interface AT_PurchaseResetPriceRequestModel {
	/*自增ID*/
	id?: number;
	/*采购调价冲票码：3131*/
	purchaseResetPriceCode?: string;
	/*采购订单编码：采购订单编码*/
	orderCode?: string;
	/*调价类型：调开票价（后期会扩展其他类型）*/
	resetType?: number;
	/*备注*/
	note?: string;
	/*明细列表*/
	purchaseResetPriceDetails?: AT_PurchaseResetPriceDetailsRequestModel[];
}

export declare interface AT_PurchaseReturnDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*供应商（必填）*/
	supplierCode?: AT_QueryString;
	/*购货单位（必填）*/
	companyCode?: AT_QueryString;
	/*所属仓库（必填）*/
	warehouse?: AT_QueryString;
	/*采购模式（必填）*/
	purchaseMode?: AT_QueryInt;
	/*订单单号*/
	orderCode?: AT_QueryString;
	/*通用名*/
	drugName?: AT_QueryString;
	/*规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*批次*/
	batch?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*清单价*/
	listPrice?: AT_QueryDecimal;
}

export declare interface AT_PurchaseReturnDetailsRequestModel {
	/*退货明细ID*/
	purchaseReturnDetailsId?: number;
	/*采购订单编码*/
	orderCode?: string;
	/*产品编码*/
	productCode?: string;
	/*采购订单明细ID*/
	purchaseOrderDetailsId?: number;
	/*退货数量*/
	returnAmount?: number;
	/*退货金额*/
	returnMoney?: number;
	/*库存ID*/
	stockId?: number;
}

export declare interface AT_PurchaseReturnDetailsSearchModel {
	/*采购订单主表ID*/
	id?: number;
	/*采购订单单号*/
	orderCode?: string;
	/*采购订单明细ID*/
	purchaseOrderDetailsId?: number;
	/*库存ID*/
	stockId?: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*剂型*/
	regDosageForm?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*订单数量*/
	orderAmount?: number;
	/*库存价格(清单价)*/
	listPrice?: number;
	/*成本价*/
	costPrice?: number;
	/*库存数量*/
	stockAmount?: number;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*已退货数量*/
	returnAmountTotal?: number;
	/*有效期*/
	validDate?: string;
	/*有效期*/
	readonly validDateText?: string;
}

export declare interface AT_PurchaseReturnDetailsSearchModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseReturnDetailsSearchModel[];
	item2: number;
}

export declare interface AT_PurchaseReturnDetailsViewModel {
	/*采购退款明细ID*/
	purchaseReturnDetailsId?: number;
	/*采购订单明细ID*/
	purchaseOrderDetailsId?: number;
	/*采购订单编码*/
	orderCode?: string;
	/*通用名*/
	drugName?: string;
	/*剂型*/
	regDosageForm?: string;
	/*规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*件装*/
	wholePackage?: number;
	/*订单数量*/
	orderAmount?: number;
	/*库存数量*/
	stockAmount?: number;
	/*成本价*/
	costPrice?: number;
	/*已退货数量*/
	returnAmountTotal?: number;
	/*退货批号*/
	batchNo?: string;
	/*退货批次*/
	batch?: string;
	/*退货数量*/
	returnAmount?: number;
	/*退货件数*/
	readonly returnWholeNumber?: number;
	/*退货清单价*/
	listPrice?: number;
	/*退货总金额*/
	returnMoney?: number;
	/*产品编码*/
	productCode?: string;
	/*库存id*/
	stockId?: number;
}

export declare interface AT_PurchaseReturnOutPageModel {
	/*采购退货出库主表ID*/
	purchaseReturnOutId: number;
	/*采购退货单号*/
	purchaseReturnCode?: string;
	/*状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	outState: AT_SaleDeliveryState;
	/*状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	readonly outStateText: AT_SaleDeliveryState;
	/*供应商*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*购货单位*/
	companyCode?: string;
	/*购货单位*/
	companyName?: string;
	/*通用名*/
	drugName?: string;
	/*剂型*/
	regDosageForm?: string;
	/*规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*退货数量*/
	returnAmount?: number;
	/*出库量*/
	outAmount?: number;
	/*待出库量*/
	readonly pendOutAmount: number;
	/*出库批号*/
	batchNo?: string;
	/*出库批次*/
	batch?: string;
	/*出库仓库*/
	warehouseCode?: string;
	/*出库仓库*/
	warehouseName?: string;
	/*制单人*/
	addUser?: string;
	/*制单人*/
	addUserName?: string;
	/*制单备注*/
	purchaseReturnNotes?: string;
	/*更新时间*/
	updTime?: string;
	/*更新时间*/
	readonly updTimeText?: string;
}

export declare interface AT_PurchaseReturnOutPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseReturnOutPageModel[];
	item2: number;
}

export declare interface AT_PurchaseReturnOutQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*采购退货单号*/
	purchaseReturnCode?: AT_QueryString;
	/*状态*/
	outState?: AT_QueryList;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*购货单位*/
	companyName?: AT_QueryString;
	/*通用名*/
	drugName?: AT_QueryString;
	/*剂型*/
	regDosageForm?: AT_QueryString;
	/*规格*/
	packageStandard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryDecimal;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*出库批号*/
	batchNo?: AT_QueryString;
	/*出库仓库*/
	warehouseName?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*制单备注*/
	purchaseReturnNotes?: AT_QueryString;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_PurchaseReturnOutRecordPageModel {
	/*采购退货出库记录Id*/
	purchaseReturnOutRecordId?: number;
	/*出库时间*/
	updTime?: string;
	/*出库时间*/
	readonly updTimeText?: string;
	/*供应商*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*购货单位*/
	companyCode?: string;
	/*购货单位*/
	companyName?: string;
	/*通用名*/
	drugName?: string;
	/*剂型*/
	regDosageForm?: string;
	/*规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*出库批号*/
	batchNo?: string;
	/*出库批次*/
	batch?: string;
	/*出库量*/
	outAmount?: number;
	/*出库件数*/
	readonly outNumber?: number;
	/*出库仓库*/
	warehouseCode?: string;
	/*出库仓库*/
	warehouseName?: string;
	/*采购退货单单号*/
	purchaseReturnCode?: string;
}

export declare interface AT_PurchaseReturnOutRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseReturnOutRecordPageModel[];
	item2: number;
}

export declare interface AT_PurchaseReturnOutRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*通用名*/
	drugName?: AT_QueryString;
	/*剂型*/
	regDosageForm?: AT_QueryString;
	/*规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*出库时间*/
	updTime?: AT_QueryDateTime;
	/*出库仓库*/
	warehouseName?: AT_QueryString;
	/*出库批号*/
	batchNo?: AT_QueryString;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*购货单位*/
	companyName?: AT_QueryString;
	/*采购退货单单号*/
	purchaseReturnCode?: AT_QueryString;
}

export declare interface AT_PurchaseReturnOutRequestModel {
	/*采购退货出库主表ID*/
	purchaseReturnOutId: number;
	/*本次出库量*/
	thisAmount?: number;
}

export declare interface AT_PurchaseReturnPageModel {
	/*采购退货明细ID*/
	id?: number;
	/*采购退货单单号*/
	purchaseReturnCode?: string;
	/*流程ID*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*开票状态

0 = 未开票

1 = 部分开票

2 = 已开票*/
	invoiceState: AT_InvoiceStateType;
	/*开票状态

0 = 未开票

1 = 部分开票

2 = 已开票*/
	readonly invoiceStateText: AT_InvoiceStateType;
	/*供应商*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*购货单位*/
	companyCode?: string;
	/*购货单位*/
	companyName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holder?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*件装*/
	wholePackage?: number;
	/*退货数量*/
	returnAmount?: number;
	/*退货件数*/
	readonly returnWholeNumber?: number;
	/*清单价*/
	listPrice?: number;
	/*退货总金额*/
	returnMoney?: number;
	/*退货批号*/
	batchNo?: string;
	/*退货批次*/
	batch?: string;
	/*退货仓库*/
	warehouseCode?: string;
	/*退货仓库*/
	warehouseName?: string;
	/*备注*/
	notes?: string;
	/*采购订单单号*/
	orderCode?: string;
	/*采购员*/
	buyer?: string;
	/*采购员*/
	buyerName?: string;
	/*制单人*/
	addUser?: string;
	/*制单人*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*制单时间*/
	readonly addTimeText?: string;
}

export declare interface AT_PurchaseReturnPageModelIEnumerableInt32Tuple {
	item1?: AT_PurchaseReturnPageModel[];
	item2: number;
}

export declare interface AT_PurchaseReturnQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*上市许可持有人*/
	holderName?: AT_QueryString;
	/*供应商*/
	supplierName?: AT_QueryString;
	/*购货单位*/
	companyName?: AT_QueryString;
	/*制单时间*/
	addTime?: AT_QueryDateTime;
	/*采购退货单单号*/
	purchaseReturnCode?: AT_QueryString;
	/*退货批号*/
	batchNo?: AT_QueryString;
	/*退货仓库*/
	warehouseName?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*采购订单单号*/
	orderCode?: AT_QueryString;
	/*采购员*/
	buyerName?: AT_QueryString;
}

export declare interface AT_PurchaseReturnRequestModel {
	/*采购模式

1 = 底价*/
	purchaseMode: AT_PurchaseModeType;
	/*供应商*/
	supplierCode: string;
	/*购货单位*/
	companyCode: string;
	/*所属仓库*/
	warehouseCode: string;
	/*备      注*/
	notes?: string;
	purchaseReturnDetails?: AT_PurchaseReturnDetailsRequestModel[];
}

export declare interface AT_PurchaseReturnViewModel {
	/*采购退货单主表Id*/
	id?: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*采购模式

1 = 底价*/
	purchaseMode: AT_PurchaseModeType;
	/*采购模式

1 = 底价*/
	readonly purchaseModeText: AT_PurchaseModeType;
	/*供应商*/
	supplierCode?: string;
	/*供应商*/
	supplierName?: string;
	/*购货单位*/
	companyCode?: string;
	/*购货单位*/
	companyName?: string;
	/*所属仓库*/
	warehouseCode?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*采购退货单号*/
	purchaseReturnCode?: string;
	/*退款总金额*/
	returnMoneyTotal?: number;
	/*备      注*/
	notes?: string;
	/*制单人编码*/
	addUser?: string;
	/*制单时间*/
	addTime?: string;
	purchaseReturnDetails?: AT_PurchaseReturnDetailsViewModel[];
}

export declare interface AT_PurchaseTaxRateModel {
	/*制剂类型*/
	preparationType?: number;
	/*制剂类型文本*/
	preparationTypeName?: string;
	/*税票税率*/
	taxRate?: number;
}

export declare interface AT_PurchaseViewModel {
	/*税票税率*/
	taxRate?: number;
	/*采购员*/
	buyer?: string;
	/*批次产量*/
	output: number;
	/*生产周期*/
	cycle?: number;
	/*自增ID*/
	id: number;
	/*流程id*/
	flowId?: number;
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_QueryDateTime {
	value?: string[];
}

export declare interface AT_QueryDecimal {
	/*

0 = 大于

1 = 小于

2 = 等于

3 = 模糊*/
	searchType: AT_SearchNumberType;
	value: number;
}

export declare interface AT_QueryGiven {
	value?: any;
}

export declare interface AT_QueryInt {
	/*

0 = 大于

1 = 小于

2 = 等于

3 = 模糊*/
	searchType: AT_SearchNumberType;
	value: number;
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

export enum AT_RegType {
	订单系统 = 1,
}

export declare interface AT_RegisterClientPageModel {
	/*主键ID*/
	id: number;
	/*客户编码*/
	clientCode?: string;
	/*注册名*/
	logName?: string;
	/*注册时间*/
	regTime?: string;
	/*注册时间*/
	readonly regTimeText?: string;
	/*注册类型

1 = 订单系统*/
	regType: AT_RegType;
	/*注册类型

1 = 订单系统*/
	readonly regTypeText: AT_RegType;
	/*是否存在*/
	isExist?: number;
}

export declare interface AT_RegisterClientPageModelIEnumerableInt32Tuple {
	item1?: AT_RegisterClientPageModel[];
	item2: number;
}

export declare interface AT_RegisterClientQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册名*/
	logName?: AT_QueryString;
	/*注册时间*/
	regTime?: AT_QueryDateTime;
}

export enum AT_RejectInStockDataSource {
	丰恺思 = 1,
	海典 = 2,
}

export enum AT_RejectRecordState {
	未入库 = 0,
	部分入库 = 1,
	已入库 = 2,
}

export declare interface AT_RejectSaleContractModel {
	/*合同编码*/
	ids?: number[];
}

export declare interface AT_RejectionInStockDetailModel {
	/*生产日期*/
	produceDate: string;
	/*有效日期*/
	validDate?: string;
	/*批号*/
	batchNo: string;
	/*批次*/
	batch: string;
	/*入库量*/
	inStorageAmount: number;
	/*入库件数*/
	inStorageNumber: number;
	/*备注*/
	note?: string;
}

export declare interface AT_RejectionRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*收货单位名称*/
	receiveName?: AT_QueryString;
	/*供货单位名称*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业名称*/
	manufacturerName?: AT_QueryString;
	/*制单时间*/
	orderTime?: AT_QueryDateTime;
	/*海典原始单号*/
	hdOldCode?: AT_QueryString;
	/*海典单号*/
	hdNewCode?: AT_QueryString;
	/*丰凯思订单号*/
	orderCode?: AT_QueryString;
}

export declare interface AT_RequestIntentionModel {
	/*主账户：客户编码；代理商员工*/
	clientCode: string;
	/*产品编码：招商产品ID*/
	productCode: string;
	/*代理区域*/
	provinceId: number;
	/*愿意缴纳保证金额*/
	margin: number;
	/*预计年度完成量*/
	completion: number;
	/*完成量单位*/
	completionUnit: string;
	/*首批提货数量*/
	pickupVolume: number;
	/*提货数量单位*/
	pickupVolumeUnit: string;
	/*其他描述*/
	otherDescription?: string;
	/*团队信息*/
	teamInfo?: AT_RequestTeamInfo;
	/*附件信息*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_RequestTeamInfo {
	/*法人代表*/
	legal?: string;
	/*法人联系方式*/
	legalPhone?: string;
	/*招商团队实际控制人*/
	teamPerson: string;
	/*招商团队实际控制人联系方式*/
	conperPhone: string;
	/*招商团队人员规模*/
	staffSize: number;
	/*招商团队组织架构*/
	organization: string;
	/*政府事务*/
	govAffairs: string;
	/*推广品种*/
	hisPromotedVarieties: string;
	/*建议合作配送企业*/
	cooperativePSBusiness?: string;
	/*备注*/
	remark?: string;
}

export enum AT_ResultState {
	成功 = 1,
	跨区间提示 = 2,
	多条政策提示 = 3,
}

export enum AT_ReturnGoodsReasons {
	质量问题 = 1,
	物流破损 = 2,
	货物滞销 = 3,
	客服做错单 = 4,
	其他 = 99,
}

export declare interface AT_RoleModel {
	/*角色名*/
	roleName?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_RolePageModel {
	id: number;
	/*角色名*/
	roleName?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_RolePageModelIEnumerableInt32Tuple {
	item1?: AT_RolePageModel[];
	item2: number;
}

export declare interface AT_RoleQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*角色名*/
	roleName?: AT_QueryString;
}

export declare interface AT_RoleUserViewModel {
	/*角色名*/
	roleName?: string;
	/*排序*/
	sort?: number;
	/*角色id*/
	id: number;
	/*员工*/
	staffs?: AT_StaffBasicInfo[];
}

export declare interface AT_RoleViewModel {
	/*角色名*/
	roleName?: string;
	/*排序*/
	sort?: number;
	/*角色id*/
	id: number;
}

export declare interface AT_RouteAuthorizationItemModel {
	authoriztionKey: number;
	authoriztionName?: string;
	authorizationItemValues?: AT_KeyValue[];
	popupKey?: string;
	/*

1 = 数据

2 = 按钮

3 = 导出*/
	readonly authorizationType: AT_AuthorizationType;
}

export declare interface AT_SaleBackAdjustmentDetailsRequestModel {
	/*明细ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*本次金额*/
	thisMoney?: number;
}

export declare interface AT_SaleBackAdjustmentDetailsViewModel {
	/*明细主键ID*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*生产企业名称*/
	manufacturerName?: string;
	/*本次分配金额*/
	thisMoney?: number;
}

export declare interface AT_SaleBackAdjustmentRequestModel {
	/*销售回款单编码*/
	saleBackCode?: string;
	/*可分配金额*/
	allocMoney?: number;
	/*原产品编码*/
	sourceProductCode?: string;
	/*明细列表*/
	saleBackAdjustmentDetails?: AT_SaleBackAdjustmentDetailsRequestModel[];
}

export declare interface AT_SaleBackAdjustmentViewModel {
	/*主表主键ID*/
	id?: number;
	/*回款单编码*/
	saleBackCode?: string;
	/*原产品编码*/
	sourceProductCode?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*合作省份*/
	cooperationProvinceId?: number;
	/*合作省份*/
	cooperationProvinceName?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*客户类型

1 = 商务客户

2 = 非商务客户*/
	clientType: AT_SaleContractCustomerType;
	/*客户类型

1 = 商务客户

2 = 非商务客户*/
	clientTypeText: AT_SaleContractCustomerType;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*回款银行编码*/
	backBook?: string;
	/*回款银行名称*/
	bankName?: string;
	/*回款账户编码*/
	backCard?: string;
	/*回款账户信息*/
	backCardInfo?: string;
	/*科目*/
	subject?: number;
	/*科目文本*/
	subjectText?: string;
	/*可分配金额*/
	allocMoney?: number;
	/*备注*/
	note?: string;
	/*明细列表*/
	saleBackAdjustmentDetails?: AT_SaleBackAdjustmentDetailsViewModel[];
}

export declare interface AT_SaleBackAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*附件图标*/
	icon: string;
	/*附件后缀*/
	ext: string;
}

export declare interface AT_SaleBackDetailsModel {
	/*产品编码*/
	productCode: string;
	/*销售回款码*/
	saleBackCode?: string;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商*/
	cooperationMode: number;
	/*数量*/
	orderAmount: number;
	/*开票价*/
	invoicePrice: number;
	/*应回金额*/
	totalMoney: number;
	/*实回金额*/
	actualMoney: number;
	/*备注*/
	note?: string;
}

export declare interface AT_SaleBackDetailsViewModel {
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*件装*/
	wholePackage?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeName: AT_BusinessCooperationMode;
	/*数量*/
	orderAmount: number;
	/*件数*/
	number: number;
	/*开票价*/
	invoicePrice: number;
	/*应回金额*/
	totalMoney: number;
	/*实回金额*/
	actualMoney: number;
	/*备注*/
	note?: string;
}

export declare interface AT_SaleBackModel {
	/*供应商：企业编码；出库单位*/
	supplierCode: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*配送公司：收货单位；企业编码*/
	deliveryCode: string;
	/*客户编码*/
	clientCode: string;
	/*客户类型*/
	clientType?: number;
	/*客户名称*/
	clientName?: string;
	/*回款银行：账套信息中企业（出库单位）下所有银行名称；存编码*/
	backBook: string;
	/*回款账户：回款银行下的回款账户；存编码*/
	backCard: string;
	/*科目：走流程与重走流程；该字段值不变*/
	subject: number;
	/*科目文本：货款；走流程与重走流程；该字段值不变*/
	subjectText: string;
	/*回款金额*/
	backMoney: number;
	/*实际回款日*/
	actualDate?: string;
	/*最迟回款日*/
	latestDate?: string;
	/*备注*/
	note?: string;
	/*制单人：取最新*/
	fromUser?: string;
	/*制单时间：取最新*/
	fromTime?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*回款类型

1 = 手动制单

2 = 自动生成*/
	backType?: AT_SaleBackType;
	/*销售回款明细*/
	saleBackDetailsModels?: AT_SaleBackDetailsModel[];
	/*销售回款附件*/
	saleBackAttachmentModels?: AT_SaleBackAttachmentModel[];
}

export declare interface AT_SaleBackOrderQueryModel {
	salePlanCode?: string;
	supplierCode?: string;
	deliveryCode?: string;
	clientCode?: string;
	/*客户类型*/
	clientType?: number;
	productCode?: string;
	/*销售回款类型

1 = 手动制单

2 = 自动生成*/
	backType: AT_SaleBackType;
	/*回款方式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode: AT_BackMode;
	/*

1 = 制单

2 = 转单*/
	fromType: AT_SaleOrderFromType;
	saleCode?: string;
	saleBackCodes?: string[];
	deductionMoney?: number;
}

export declare interface AT_SaleBackPageModel {
	/*销售回款Id*/
	id: number;
	/*销售回款详情Id*/
	saleBackDetailsId: number;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	moneyBackState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly moneyBackStateText: AT_MoneyBackState;
	/*实际回款日*/
	actualDate?: string;
	/*回款银行*/
	bankName?: string;
	/*客户名称*/
	clientName?: string;
	/*收货单位*/
	delivery?: string;
	/*核算部门*/
	countDep?: string;
	/*科目*/
	subjectText?: string;
	/*出库单位*/
	supplier?: string;
	/*摘要*/
	summary?: string;
	/*应回货款*/
	totalMoney?: number;
	/*实回金额*/
	actualMoney?: number;
	/*财务已回金额*/
	backMoney: number;
	/*已用金额*/
	usedMoney: number;
	/*已调整金额*/
	adjustmentMoneyTotal: number;
	/*可分配金额*/
	readonly distributableMoney: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*制单人*/
	fromUser?: string;
	/*制单时间：取最新*/
	fromTime?: string;
	/*调整时间*/
	adjustmentTime?: string;
	/*调整时间*/
	readonly adjustmentTimeText?: string;
	/*销售回款单号*/
	saleBackCode?: string;
	/*销售计划单号*/
	salePlanCode?: string;
	/*销售通知单号*/
	saleCodes?: string;
	/*回款单类型

1 = 手动制单

2 = 自动生成*/
	backType: AT_SaleBackType;
	/*单据类型

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	billType: AT_CommissionBillType;
	/*单据类型

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	readonly billTypeText: AT_CommissionBillType;
	/*合作省份*/
	province?: string;
	/*合作省份*/
	provinceId?: string;
	/*回款备注*/
	backNote?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SaleBackPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleBackPageModel[];
	item2: number;
}

export declare interface AT_SaleBackPendingPageModel {
	id: number;
	/*销售回单单编码*/
	saleBackCode?: string;
	/*转单状态

0 = 未转

1 = 部分转单

2 = 已转*/
	transferState: AT_PurchasePayWaitStatus;
	/*转单状态

0 = 未转

1 = 部分转单

2 = 已转*/
	readonly transferStateText: AT_PurchasePayWaitStatus;
	/*是否已上传回单*/
	isHaveAttachment: number;
	/*制单日期*/
	addTime?: string;
	/*制单日期*/
	readonly addTimeDisPaly?: string;
	/*账期*/
	billPeriod?: number;
	/*代理商*/
	teamPerson?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*科目*/
	subject?: number;
	/*科目*/
	subjectText?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*摘要*/
	summary?: string;
	/*应收货款*/
	accountsReceivable?: number;
	/*回款金额*/
	backMoney?: number;
	/*已转单金额*/
	amountTransferred?: number;
	/*未转金额*/
	amountNotTransferred?: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*制单人Code*/
	addUser?: string;
	/*制单人名称*/
	addUserName?: string;
	/*销售计划单号*/
	salePlanCode?: string;
	/*销售通知单号*/
	saleCode?: string;
	/*回款类型

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode: AT_BackMode;
	/*回款类型

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	readonly backModeText: AT_BackMode;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*回款银行*/
	bankName?: string;
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_SaleBackPendingPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleBackPendingPageModel[];
	item2: number;
}

export declare interface AT_SaleBackPendingQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*转单状态*/
	transferState?: AT_QueryInt;
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*科目*/
	subjectText?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*销售计划单号*/
	salePlanCode?: AT_QueryString;
	/*销售通知单号*/
	saleCode?: AT_QueryString;
	/*合作省份*/
	provinceId?: AT_QueryList;
}

export declare interface AT_SaleBackPendingTurnOrderRequestModel {
	/*销售通知单编码*/
	saleCode?: string;
	/*本次转单金额*/
	backMoney?: number;
	/*备注*/
	note?: string;
	/*科目*/
	subject?: number;
	/*科目*/
	subjectText?: string;
	/*已转金额*/
	payMoney?: number;
	/*产品编码*/
	productCode?: string;
	/*回单附件列表*/
	attachmentModels?: AT_AttachmentModel[];
}

export declare interface AT_SaleBackPreRecordModel {
	/*产品编码*/
	productCode?: string;
	/*销售回款码*/
	saleBackCode?: string;
	/*本次扣款金额*/
	money?: number;
}

export declare interface AT_SaleBackPreRecordViewModel {
	/*产品编码*/
	productCode?: string;
	/*销售回款码*/
	saleBackCode?: string;
	/*本次扣款金额*/
	money?: number;
	/*回款类型

1 = 手动制单

2 = 自动生成*/
	backType: AT_SaleBackType;
	/*收货单位*/
	deliveryName?: string;
	/*收货单位编码*/
	deliveryCode?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*客户名称编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*科目*/
	subjectText?: string;
	/*回款金额*/
	backMoney?: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*可用金额*/
	availableMoney?: number;
	/*回款银行*/
	bankName?: string;
	/*回款时间*/
	actualDate?: string;
	/*回款摘要*/
	summary?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_SaleBackQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*核算部门*/
	countDep?: AT_QueryString;
	/*制单人*/
	fromUser?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*收货单位（配送公司）*/
	delivery?: AT_QueryString;
	/*实际回款金额*/
	backMoney?: AT_QueryDecimal;
	/*回款金额*/
	actualMoney?: AT_QueryDecimal;
	/*销售回款单号*/
	saleBackCode?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*制单时间*/
	fromTime?: AT_QueryDateTime;
	/*出库单位*/
	supplier?: AT_QueryString;
	/*回款银行*/
	bankName?: AT_QueryString;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*单据类型*/
	billType?: AT_QueryList;
	/*销售通知单号*/
	saleCodes?: AT_QueryString;
	/*合作省份*/
	provinceId?: AT_QueryList;
}

export enum AT_SaleBackType {
	手动制单 = 1,
	自动生成 = 2,
}

export declare interface AT_SaleBackUsedAmountViewModel {
	/*主键ID*/
	id?: number;
	/*单号*/
	saleCode?: string;
	/*时间*/
	updTime?: string;
	/*时间*/
	readonly updTimeText?: string;
	/*已用金额*/
	money?: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
}

export declare interface AT_SaleBackViewModel {
	/*销售回款编码*/
	saleBackCode?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*供应商：企业编码；出库单位*/
	supplierName?: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*核算部门：部门编码*/
	countDepName?: string;
	/*配送公司：收货单位；企业编码*/
	deliveryCode?: string;
	/*配送公司：收货单位；企业编码*/
	deliveryName?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户编码*/
	clientName?: string;
	/*客户类型*/
	clientType?: number;
	/*回款银行：账套信息中企业（出库单位）下所有银行名称；存编码*/
	backBook?: string;
	/*回款银行：账套信息中企业（出库单位）下所有银行名称；存编码*/
	backBookName?: string;
	/*回款账户：回款银行下的回款账户；存编码*/
	backCard?: string;
	/*回款账户：回款银行下的回款账户；存编码*/
	backCardName?: string;
	/*科目：走流程与重走流程；该字段值不变*/
	subject: number;
	/*科目文本：货款；走流程与重走流程；该字段值不变*/
	subjectText?: string;
	/*回款金额*/
	backMoney: number;
	/*实际回款日*/
	actualDate: string;
	/*最迟回款日*/
	latestDate: string;
	/*备注*/
	note?: string;
	/*合作省份*/
	provinceId: number;
	/*合作省份*/
	province?: string;
	/*销售回款明细*/
	saleBackDetailsViewModels?: AT_SaleBackDetailsViewModel[];
	/*销售回款附件*/
	saleBackAttachmentModels?: AT_SaleBackAttachmentModel[];
}

export enum AT_SaleCommissionBillTypeDisPlay {
	销售佣金付款单 = 1,
	销售退货付款单 = 2,
	销售调价冲票付款单 = 3,
	销售货款保证金退款单 = 4,
	销售市场保证金退款单 = 5,
}

export declare interface AT_SaleCommissionCheckModel {
	/*选择的销售佣金Id*/
	ids?: number[];
}

export declare interface AT_SaleCommissionPageModel {
	/*佣金原始记录Id*/
	id: number;
	/*单据类型

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	billType: AT_CommissionBillType;
	/*单据类型文本

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	readonly billTypeText: AT_CommissionBillType;
	/*单据编号*/
	fromCode?: string;
	/*原单号*/
	sourceCode?: string;
	/*客户编号*/
	clientCode?: string;
	/*单据日期*/
	fromBillTime?: string;
	/*实际控制人*/
	controller?: string;
	/*实际控制人名称*/
	controllerName?: string;
	/*客户名称*/
	clientName?: string;
	/*是否已推送*/
	isPush: number;
	/*推送日期*/
	pushTime?: string;
	/*提单状态

0 = 未提单

1 = 部分提单

2 = 已提单*/
	billState: AT_CommissionBillState;
	/*提单状态文本

0 = 未提单

1 = 部分提单

2 = 已提单*/
	readonly billStateText: AT_CommissionBillState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backStatus?: AT_MoneyBackState;
	/*回款状态文本

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly backStatusText?: AT_MoneyBackState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payStatus: AT_MoneyPayState;
	/*付款状态文本

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStatusText: AT_MoneyPayState;
	/*订单状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	deliveryState?: AT_SaleDeliveryState;
	/*订单状态文本

0 = 未出库

1 = 部分出库

2 = 已出库*/
	readonly deliveryStateText?: AT_SaleDeliveryState;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*出库单位*/
	supplierName?: string;
	/*收货单位*/
	deliveryName?: string;
	/*出库时间*/
	outTime?: string;
	/*数量*/
	readonly amount: number;
	/*已核算数量*/
	readonly checkedAmount: number;
	/*开票价*/
	readonly invoicePrice: number;
	/*佣金价格*/
	readonly commissionPrice: number;
	/*佣金金额*/
	readonly commissionMoney: number;
	/*已提单金额*/
	readonly proposeMoney: number;
	/*客服专员名称*/
	commissionerName?: string;
}

export declare interface AT_SaleCommissionPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleCommissionPageModel[];
	item2: number;
}

export declare interface AT_SaleCommissionQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*实际控制人*/
	controller?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*回款状态*/
	backStatus?: AT_QueryList;
	/*付款状态*/
	payStatus?: AT_QueryList;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*意向代理省份*/
	provinceId?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*单据日期*/
	fromBillTime?: AT_QueryDateTime;
	/*单据编号*/
	fromCode?: AT_QueryString;
	/*单据类型*/
	billType?: AT_QueryList;
	/*是否已推送*/
	isPush?: AT_QueryInt;
	/*提单状态*/
	billState?: AT_QueryList;
	/*开票价*/
	invoicePrice?: AT_QueryDecimal;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*原单单号*/
	sourceCode?: AT_QueryString;
	/*客服专员名称*/
	commissionerName?: AT_QueryString;
	/*佣金价格*/
	commissionPrice?: AT_QueryDecimal;
}

export declare interface AT_SaleCommissionSettleAccountModel {
	/*通用编码*/
	comCode?: string;
	/*客户备案账户编码*/
	bankCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*开户名*/
	accountName?: string;
	/*账户*/
	bankCard?: string;
	/*付款公司*/
	payCompany?: string;
	/*本次分配金额*/
	divideMoney?: number;
	/*备注*/
	note?: string;
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
}

export declare interface AT_SaleCommissionSettleAccountPageModel {
	/*分配账户Id*/
	id: number;
	/*佣金分配Id*/
	divideId: number;
	/*流程编号*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*省份Id*/
	provinceId?: number;
	/*省份*/
	provinceName?: string;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*付款状态文本

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_MoneyPayState;
	/*付款时间*/
	payDate?: string;
	/*申请单单号*/
	commissionCode?: string;
	/*实际控制人*/
	controllerName?: string;
	/*客户名称*/
	clientName?: string;
	/*付款公司*/
	payCompany?: string;
	/*付款银行：账套信息表银行名称*/
	payBank?: string;
	/*开户名*/
	accountName?: string;
	/*本次分配金额*/
	divideMoney: number;
	/*付款金额*/
	payMoney?: number;
	/*备注*/
	note?: string;
	/*未付款金额*/
	readonly leftMoney?: number;
	/*单据类型

1 = 销售佣金付款单

2 = 销售退货付款单

3 = 销售调价冲票付款单

4 = 销售货款保证金退款单

5 = 销售市场保证金退款单*/
	billType: AT_SaleCommissionBillTypeDisPlay;
	/*单据类型

1 = 销售佣金付款单

2 = 销售退货付款单

3 = 销售调价冲票付款单

4 = 销售货款保证金退款单

5 = 销售市场保证金退款单*/
	readonly billTypeText: AT_SaleCommissionBillTypeDisPlay;
	/*收款单位开户行*/
	collectBankName?: string;
	/*收款单位开户名*/
	collectAccountName?: string;
	/*收款单位账号*/
	collectBankCard?: string;
	/*收款单位*/
	collectUnitName?: string;
	/*制单人*/
	addUserName?: string;
	/*开户银行*/
	bankName?: string;
	/*开户账号*/
	bankCard?: string;
}

export declare interface AT_SaleCommissionSettleAccountPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleCommissionSettleAccountPageModel[];
	item2: number;
}

export declare interface AT_SaleCommissionSettleAccountPayRecordModel {
	/*付款记录Id*/
	id: number;
	/*付款时间*/
	payDate?: string;
	/*本次分配金额*/
	divideMoney?: number;
	/*本次付款金额*/
	money?: number;
}

export declare interface AT_SaleCommissionSettleAccountQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*付款状态*/
	payState?: AT_QueryList;
	/*申请单单号*/
	commissionCode?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*付款公司*/
	payCompany?: AT_QueryString;
	/*付款银行*/
	payBank?: AT_QueryString;
	/*开户名*/
	accountName?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*收款单位*/
	collectUnitName?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*单据类型*/
	billType?: AT_QueryList;
	/*付款时间*/
	payDate?: AT_QueryDateTime;
}

export declare interface AT_SaleCommissionSettleAccountViewModel {
	/*通用编码*/
	comCode?: string;
	/*客户备案账户编码*/
	bankCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*开户名*/
	accountName?: string;
	/*账户*/
	bankCard?: string;
	/*付款公司*/
	payCompany?: string;
	/*本次分配金额*/
	divideMoney?: number;
	/*备注*/
	note?: string;
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*自增ID*/
	id: number;
	/*结算分配Id*/
	saleCommissionSettleDivideId: number;
	/*付款公司编码*/
	companyCode?: string;
	/*分配时间*/
	addTime?: string;
	/*分配时间*/
	readonly addTimeDisPlay?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*协议库存*/
	pactStock?: number;
	/*无效状态

0 = 无效

1 = 无效中

2 = 有效*/
	state: AT_AccountInvalidState;
	/*无效状态

0 = 无效

1 = 无效中

2 = 有效*/
	readonly stateText: AT_AccountInvalidState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState: AT_MoneyPayState;
	/*付款状态

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText: AT_MoneyPayState;
	/*无效原因*/
	invalidReason?: string;
}

export declare interface AT_SaleCommissionSettleDetailsModel {
	/*自增ID*/
	id?: number;
	/*佣金原始表Id*/
	saleCommissionId: number;
	/*佣金原始表Id*/
	readonly fromId: number;
	/*结算数量*/
	settleAmount?: number;
	/*叠加价格*/
	overlayPrice?: number;
}

export declare interface AT_SaleCommissionSettleDetailsViewModel {
	/*自增ID*/
	id?: number;
	/*佣金原始表Id*/
	saleCommissionId: number;
	/*佣金原始表Id*/
	readonly fromId: number;
	/*结算数量*/
	settleAmount?: number;
	/*叠加价格*/
	overlayPrice?: number;
	/*单据编号*/
	fromCode?: string;
	/*单据类型

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	billType: AT_CommissionBillType;
	/*单据类型文本

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	readonly billTypeText: AT_CommissionBillType;
	/*收货单位*/
	deliveryName?: string;
	/*出库时间*/
	outTime?: string;
	/*出库单位*/
	supplierName?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*数量*/
	amount: number;
	/*可用结算数量*/
	availableSettleAmount: number;
	/*开票价(清单价)*/
	invoicePrice: number;
	/*佣金价格*/
	commissionPrice: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*叠加金额*/
	overlayMoney?: number;
	/*实际可用数量（前端判断用）*/
	enableSettleAmount?: number;
}

export declare interface AT_SaleCommissionSettleDivideAccountViewModel {
	/*主键id*/
	id?: number;
	/*ComCode*/
	comCode?: string;
	/*开户名*/
	accountName?: string;
	/*开户行*/
	bankBranch?: string;
	/*账号*/
	bankCard?: string;
	/*分配时间*/
	addTime?: string;
	/*分配时间*/
	readonly addTimeText?: string;
	/*本次分配金额*/
	divideMoney?: number;
	/*无效原因*/
	invalidReason?: string;
}

export declare interface AT_SaleCommissionSettleDivideEditModel {
	/*销售佣金结算编码*/
	commissionCode?: string;
	/*流程操作类型

0 = 草稿

1 = 提交

2 = 审核*/
	actionType: AT_ActionType;
	/*分配账户明细*/
	saleCommissionSettleAccounts?: AT_SaleCommissionSettleAccountModel[];
}

export declare interface AT_SaleCommissionSettleDividePageModel {
	/*销售佣金Id*/
	id: number;
	/*销售佣金FlowId*/
	flowId: number;
	/*申请单状态

0 = 未分配

1 = 分配中

2 = 已分配*/
	divideStatus: AT_DivideStatus;
	/*销售佣金分配FlowId*/
	divideFlowId: number;
	/*销售佣金分配FlowId

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	divideFlowState: AT_FlowListStateEnum;
	/*销售佣金分配FlowId

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly divideFlowStateText: AT_FlowListStateEnum;
	/*申请单状态文本

0 = 未分配

1 = 分配中

2 = 已分配*/
	readonly divideStatusText: AT_DivideStatus;
	/*申请单单号*/
	commissionCode?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*审核时间*/
	auditTime: string;
	/*实际控制人*/
	controllerName?: string;
	/*客户名称*/
	clientName?: string;
	/*制单人*/
	addUserName?: string;
	/*应付金额*/
	wantPayMoney?: number;
	/*实付金额*/
	actualPayMoney?: number;
	/*已分配实付金额*/
	dividedMoney?: number;
	/*已付款金额*/
	payMoney?: number;
	/*未分配金额*/
	readonly undividedMoney?: number;
	/*本次结余*/
	balanceMoney?: number;
	/*备注*/
	note?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份*/
	provinceName?: string;
	/*本次结算数量*/
	sumSettleAmount?: number;
}

export declare interface AT_SaleCommissionSettleDividePageModelIEnumerableInt32Tuple {
	item1?: AT_SaleCommissionSettleDividePageModel[];
	item2: number;
}

export declare interface AT_SaleCommissionSettleDivideQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*申请单状态*/
	divideStatus?: AT_QueryInt;
	/*申请单单号*/
	commissionCode?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*应付金额*/
	wantPayMoney?: AT_QueryDecimal;
	/*应付金额*/
	provinceId?: AT_QueryList;
	/*实付金额*/
	actualPayMoney?: AT_QueryDecimal;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*审核时间*/
	auditTime?: AT_QueryDateTime;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_SaleCommissionSettleDivideSearchModel {
	flowId: number;
	commissionCode?: string;
	divideDate?: string;
}

export declare interface AT_SaleCommissionSettleDivideSummaryPageModel {
	/*流程编号*/
	flowId?: number;
	/*申请单单号*/
	commissionCode?: string;
	/*审核时间*/
	updTime?: string;
	/*分配时间*/
	divideDate: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*省份编码*/
	provinceId?: string;
	/*省份名称*/
	provinceName?: string;
	/*实付金额*/
	actualPayMoney?: number;
	/*已分配金额*/
	dividedMoney?: number;
	/*未分配金额*/
	undividedMoney?: number;
	/*本次哦分配金额*/
	thisDividedMoney?: number;
	/*已付款金额*/
	payMoney?: number;
	/*实际控制人*/
	controllerName?: string;
	/*申请单备注*/
	note?: string;
}

export declare interface AT_SaleCommissionSettleDivideSummaryPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleCommissionSettleDivideSummaryPageModel[];
	item2: number;
}

export declare interface AT_SaleCommissionSettleDivideSummaryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请单单号*/
	commissionCode?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*分配时间*/
	divideDate?: AT_QueryDateTime;
	/*省份编码*/
	provinceId?: AT_QueryInt;
}

export declare interface AT_SaleCommissionSettleDivideSummaryViewModel {
	/*流程编号*/
	flowId?: number;
	/*申请单单号*/
	commissionCode?: string;
	/*审核时间*/
	updTime?: string;
	/*分配时间*/
	divideDate: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*省份编码*/
	provinceId?: string;
	/*省份名称*/
	provinceName?: string;
	/*实付金额*/
	actualPayMoney?: number;
	/*已分配金额*/
	dividedMoney?: number;
	/*未分配金额*/
	undividedMoney?: number;
	/*本次哦分配金额*/
	thisDividedMoney?: number;
	/*已付款金额*/
	payMoney?: number;
	/*实际控制人*/
	controllerName?: string;
	/*申请单备注*/
	note?: string;
	/*付款账户列表*/
	commissionPayAccounts?: AT_SaleCommissionSettleAccountViewModel[];
}

export declare interface AT_SaleCommissionSettleDivideViewModel {
	/*销售佣金结算编码*/
	commissionCode?: string;
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*客户编码*/
	clientCode?: string;
	/*实际控制人：客户主表实际控制人*/
	controllerName?: string;
	/*客户名称*/
	clientName?: string;
	/*审核时间*/
	auditTime?: string;
	/*应付金额*/
	wantPayMoney?: number;
	/*抹零金额*/
	ignoreMoney?: number;
	/*实付金额*/
	actualPayMoney?: number;
	/*本次结余*/
	balanceMoney?: number;
	/*历次结余*/
	historyBalanceMoney: number;
	/*已分配金额*/
	dividedMoney?: number;
	/*未分配金额*/
	readonly undivideMoney?: number;
	/*备注*/
	note?: string;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*分配账户明细*/
	saleCommissionSettleAccounts?: AT_SaleCommissionSettleAccountViewModel[];
	/*佣金明细*/
	saleCommissionSettleDetails?: AT_SaleCommissionSettleDetailsViewModel[];
}

export declare interface AT_SaleCommissionSettleEditModel {
	/*客户编码*/
	clientCode?: string;
	/*实际控制人*/
	controller?: string;
	/*代理商*/
	teamPerson?: string;
	/*客户名称*/
	clientName?: string;
	/*应付金额*/
	wantPayMoney?: number;
	/*实付金额合计*/
	actualPayMoney?: number;
	/*抹零金额*/
	ignoreMoney?: number;
	/*本次结余*/
	balanceMoney?: number;
	/*备注*/
	note?: string;
	/*来源

1 = 凭流向

2 = 凭付款*/
	fromType?: AT_CooperationAmountSettlementBasis;
	/*佣金明细*/
	saleCommissionSettleDetails?: AT_SaleCommissionSettleDetailsModel[];
}

export declare interface AT_SaleCommissionSettleInvalidDetailsRequestModel {
	/*ComCode*/
	comCode?: string;
	/*无效原因*/
	invalidReason?: string;
}

export declare interface AT_SaleCommissionSettleInvalidPageModel {
	/*主键Id*/
	id?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*流程Id*/
	flowId?: number;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*申请单号*/
	commissionCode?: string;
	/*分配时间*/
	divideTime?: string;
	/*分配时间*/
	readonly divideTimeText?: string;
	/*开户名*/
	accountName?: string;
	/*开户行*/
	bankName?: string;
	/*账号*/
	bankCard?: string;
	/*本次分配金额*/
	divideMoney?: number;
	/*无效原因*/
	invalidReason?: string;
}

export declare interface AT_SaleCommissionSettleInvalidPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleCommissionSettleInvalidPageModel[];
	item2: number;
}

export declare interface AT_SaleCommissionSettleInvalidQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*分配时间*/
	divideTime?: AT_QueryDateTime;
	/*开户名*/
	accountName?: AT_QueryString;
	/*开户行*/
	bankName?: AT_QueryString;
	/*账号*/
	bankCard?: AT_QueryString;
	/*无效原因*/
	invalidReason?: AT_QueryString;
}

export declare interface AT_SaleCommissionSettleInvalidRequestModel {
	/*申请单号*/
	commissionCode?: string;
	/*明细列表*/
	saleCommissionSettleInvalidDetails?: AT_SaleCommissionSettleInvalidDetailsRequestModel[];
}

export declare interface AT_SaleCommissionSettleInvalidViewModel {
	/*主键Id*/
	id?: number;
	/*流程Id*/
	flowId?: number;
	/*客户名称*/
	clientName?: string;
	/*申请单号*/
	commissionCode?: string;
	/*实际控制人*/
	controllerName?: string;
	/*分配账户列表*/
	saleCommissionSettleDivideAccounts?: AT_SaleCommissionSettleDivideAccountViewModel[];
}

export declare interface AT_SaleCommissionSettlePayPrintModel {
	/*开户名*/
	accountName?: string;
	/*开户行*/
	bankName?: string;
	/*账户*/
	bankCard?: string;
	/*付款金额*/
	payMoney: number;
	/*付款金额*/
	payMoneyChinese?: string;
}

export declare interface AT_SaleCommissionSettleViewModel {
	/*客户编码*/
	clientCode?: string;
	/*实际控制人*/
	controller?: string;
	/*代理商*/
	teamPerson?: string;
	/*客户名称*/
	clientName?: string;
	/*应付金额*/
	wantPayMoney?: number;
	/*实付金额合计*/
	actualPayMoney?: number;
	/*抹零金额*/
	ignoreMoney?: number;
	/*本次结余*/
	balanceMoney?: number;
	/*备注*/
	note?: string;
	/*合作省份Id*/
	provinceId?: number;
	/*合作省份名称*/
	provinceName?: string;
	/*销售佣金结算编码：3089*/
	commissionCode?: string;
	/*实际控制人名称*/
	controllerName?: string;
	/*历次结余*/
	historyBalanceMoney: number;
	/*已分配金额*/
	dividedMoney?: number;
	/*审核时间*/
	auditTime?: string;
	/*未分配金额*/
	readonly undivideMoney?: number;
	/*抹零金额(特殊)*/
	loseMoney?: number;
	/*数据来源标识*/
	fromTable?: string;
	/*付款账户列表*/
	commissionPayAccounts?: AT_SaleCommissionSettleAccountViewModel[];
	/*佣金明细*/
	saleCommissionSettleDetails?: AT_SaleCommissionSettleDetailsViewModel[];
	/*佣金明细列表(销售流向结算)*/
	flowtoSaleSettleDetails?: AT_FlowtoSaleSettleDetailsViewModel[];
}

export enum AT_SaleConfirmState {
	未确认 = 0,
	部分确认 = 1,
	已确认 = 2,
}

export enum AT_SaleContractCustomerType {
	商务客户 = 1,
	非商务客户 = 2,
}

export declare interface AT_SaleContractDetailsModel {
	/*产品编码*/
	productCode: string;
	/*合同数量*/
	contractAmount: number;
	/*合同价格*/
	contractPrice: number;
	/*合同明细编码*/
	saleContractDetailsCode?: string;
}

export declare interface AT_SaleContractDetailsViewModel {
	/*产品编码*/
	productCode: string;
	/*合同数量*/
	contractAmount: number;
	/*合同价格*/
	contractPrice: number;
	/*合同金额*/
	contractMoney?: number;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*注册规格*/
	regStandard?: string;
	/*注册剂型*/
	regDosageForm?: string;
	/*件装*/
	wholePackage?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*合同明细编码*/
	saleContractDetailsCode?: string;
}

export declare interface AT_SaleContractEditModel {
	/*主账号：客户编码*/
	clientCode: string;
	/*合同类型：年度合同，批次合同*/
	contractType: number;
	/*签订日期*/
	signDate?: string;
	/*合同编号*/
	contractNumber?: string;
	/*供应商：企业编码*/
	supplierCode: string;
	/*配送企业：企业编码*/
	deliveryCode: string;
	/*合同开始时间*/
	startDate: string;
	/*合同结束时间*/
	endDate: string;
	/*备注*/
	note?: string;
	/*客户类型

1 = 商务客户

2 = 非商务客户*/
	clientType: AT_SaleContractCustomerType;
	/*合同明细*/
	saleContractDetails?: AT_SaleContractDetailsModel[];
}

export declare interface AT_SaleContractMailDetailsViewModel {
	/*自增ID*/
	id: number;
	/*合同编码*/
	contractCode?: string;
	/*合同明细编码*/
	saleContractDetails?: string;
	/*快速公司*/
	courierCompany?: string;
	/*快递单号*/
	trackingNumber?: string;
	/*收件信息*/
	receivingInfo?: string;
	/*邮寄时间*/
	mailingTime?: string;
	/*邮寄时间*/
	readonly mailingTimeText?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_SaleContractPageModel {
	/*自增ID*/
	id: number;
	/*申请单号*/
	contractCode?: string;
	/*合同状态

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	contractStatus: AT_SaleContractStatus;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: string;
	/*合同状态

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	readonly contractStatusText: AT_SaleContractStatus;
	/*合同类型

1 = 年度合同

2 = 批次合同*/
	contractType: AT_ContractType;
	/*合同类型：年度合同，批次合同

1 = 年度合同

2 = 批次合同*/
	readonly contractTypeName: AT_ContractType;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*配送企业：企业编码*/
	deliveryCode?: string;
	/*配送企业：企业名称*/
	deliveryName?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*注册规格*/
	regStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*合同数量*/
	contractAmount?: number;
	/*合同价格*/
	contractPrice?: number;
	/*合同金额*/
	contractMoney?: number;
	/*合同开始时间*/
	startDate?: string;
	/*合同结束时间*/
	endDate?: string;
	/*合同编号*/
	contractNumber?: string;
	/*签订日期*/
	signDate?: string;
	/*主账号：客户编码*/
	clientCode?: string;
	/*主账号：客户名称*/
	clientName?: string;
	/*邮寄时间：来源订单系统*/
	mailingTime?: string;
	/*快速公司：来源订单系统*/
	courierCompany?: string;
	/*快递单号：来源订单系统*/
	trackingNumber?: string;
	/*收件信息*/
	receivingInfo?: string;
	/*通用编码*/
	comCode?: string;
	/*存档位置*/
	savePlace?: string;
	/*制单人*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*意向代理省份*/
	provinceName?: string;
	/*备注*/
	note?: string;
	/*客户类型*/
	clientType?: number;
	/*合同明细编码*/
	saleContractDetailsCode?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SaleContractPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleContractPageModel[];
	item2: number;
}

export declare interface AT_SaleContractQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*合同编号*/
	contractNumber?: AT_QueryString;
	/*配送企业：企业名称*/
	deliveryName?: AT_QueryString;
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*合同开始时间*/
	startDate?: AT_QueryDateTime;
	/*合同结束时间*/
	endDate?: AT_QueryDateTime;
	/*主账号：客户名称*/
	clientName?: AT_QueryString;
	/*意向代理省份*/
	proxyProvinceId?: AT_QueryInt;
	/*合同状态*/
	contractStatus?: AT_QueryList;
	/*签订日期*/
	signDate?: AT_QueryDateTime;
	/*邮寄时间：来源订单系统*/
	mailingTime?: AT_QueryDateTime;
	/*订单系统 团队 实际招商控制人（代理商）*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*注册规格*/
	regStandard?: AT_QueryString;
	/*供应商*/
	supplierName?: AT_QueryString;
}

export declare interface AT_SaleContractRecordRequestModel {
	/*合同明细Id*/
	saleContractDetailsId?: number;
	/*合同明细编码*/
	saleContractDetailsCode?: string;
	/*本次合同数量*/
	currentContractAmount?: number;
}

export enum AT_SaleContractStatus {
	已申请 = 0,
	已签订 = 1,
	待回寄 = 2,
	已回寄 = 3,
	已存档 = 4,
	已驳回 = 5,
	已作废 = 6,
}

export declare interface AT_SaleContractViewModel {
	/*主账号：客户编码*/
	clientCode: string;
	/*合同类型：年度合同，批次合同*/
	contractType: number;
	/*签订日期*/
	signDate?: string;
	/*合同编号*/
	contractNumber?: string;
	/*供应商：企业编码*/
	supplierCode: string;
	/*配送企业：企业编码*/
	deliveryCode: string;
	/*合同开始时间*/
	startDate: string;
	/*合同结束时间*/
	endDate: string;
	/*备注*/
	note?: string;
	/*客户类型

1 = 商务客户

2 = 非商务客户*/
	clientType: AT_SaleContractCustomerType;
	/*自增ID*/
	id: number;
	/*合同编码*/
	contractCode?: string;
	/*合同状态

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	contractStatus: AT_SaleContractStatus;
	/*邮寄时间：来源订单系统*/
	mailingTime?: string;
	/*快速公司：来源订单系统*/
	courierCompany?: string;
	/*快递单号：来源订单系统*/
	trackingNumber?: string;
	/*主账号：客户名称*/
	clientName?: string;
	/*合同类型：年度合同，批次合同*/
	contractTypeName?: string;
	/*供应商：企业名称*/
	supplierName?: string;
	/*配送企业：企业名称*/
	deliveryName?: string;
	/*收货地址*/
	receiptAddress?: string;
	/*收货省份名称*/
	provinceName?: string;
	/*收货城市名称*/
	cityName?: string;
	/*收件地址*/
	receivingInfo?: string;
	/*配送企业注册地址*/
	registerAddress?: string;
	/*配送企业电话*/
	mobile?: string;
	/*配送企业开户银行*/
	bankName?: string;
	/*开票信息地址*/
	invoiceAddress?: string;
	/*配送企业账号信息*/
	bankCard?: string;
	/*合同总金额*/
	readonly contractMonye?: number;
	/*合同总金额（大写）*/
	readonly chineseMoney?: string;
	/*合同明细*/
	saleContractDetails?: AT_SaleContractDetailsViewModel[];
	/*合同邮寄明细*/
	saleContractMailDetails?: AT_SaleContractMailDetailsViewModel[];
}

export enum AT_SaleDeliveryState {
	未出库 = 0,
	部分出库 = 1,
	已出库 = 2,
}

export declare interface AT_SaleEarnestDeliveryRequestModel {
	/*Id主键*/
	id?: number;
	/*投递状态

1 = 转交客服

2 = 客服已收取

3 = 客服已投递

4 = 客服已收回

5 = 财务已回收*/
	state: AT_EarnestDeliveryState;
	/*操作人*/
	operateUser?: string;
	/*操作时间*/
	operateTime?: string;
	/*摘要*/
	summary?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_SaleEarnestDeliveryViewModel {
	/*Id*/
	id?: number;
	/*投递状态

1 = 转交客服

2 = 客服已收取

3 = 客服已投递

4 = 客服已收回

5 = 财务已回收*/
	state?: AT_EarnestDeliveryState;
	/*投递状态

1 = 转交客服

2 = 客服已收取

3 = 客服已投递

4 = 客服已收回

5 = 财务已回收*/
	readonly stateText?: AT_EarnestDeliveryState;
	/*操作人*/
	operateUser?: string;
	/*操作人*/
	operateUserName?: string;
	/*操作时间*/
	operateTime?: string;
	/*操作时间*/
	readonly operateTimeText?: string;
	/*投递摘要*/
	summary?: string;
	/*投递备注*/
	note?: string;
}

export declare interface AT_SaleEarnestRefundPrintModel {
	/*自增ID*/
	id: number;
	/*申请部门*/
	applyDep?: string;
	/*付款公司*/
	payCompany?: string;
	/*付款银行*/
	payBank?: string;
	/*付款账户*/
	accountName?: string;
	/*收款公司*/
	collectUnitName?: string;
	/*收款账户*/
	collectAccount?: string;
	/*付款金额*/
	payMoney: number;
	/*付款金额大写*/
	readonly payMoneyChinese?: string;
	/*打印时间*/
	readonly printDate?: string;
}

export declare interface AT_SaleEarnestViewModel {
	/*保证金编码：2064；销售保证金编码*/
	earnestCode?: string;
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)*/
	earnestType?: number;
	/*付款公司*/
	paymentCompany?: string;
	/*付款账号*/
	paymentAccount?: string;
	/*付款时间*/
	paymentTime?: string;
	/*回款公司*/
	companyCode?: string;
	/*核算部门：部门编码*/
	countDep?: string;
	/*保证金用途：开发保证金、上量保证金、招标保证金、医保保证金*/
	earnestUse?: number;
	/*数据类型：货款保证金，市场保证金*/
	type: number;
	/*回款银行：账套编码；根据回款账户带出*/
	backBookCode?: string;
	/*回款账号：银行卡编码*/
	backCardCode?: string;
	/*回款金额*/
	backMoney?: number;
	/*实际回款时间*/
	backDate?: string;
	/*回款摘要*/
	summary?: string;
	/*退款条件*/
	backLimit?: string;
	/*备注*/
	note?: string;
	/*中专表Id(外面列表里带过来)*/
	earnestDetailId?: number;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*回款公司*/
	collectCompany?: string;
	/*回款银行*/
	bankName?: string;
	/*收据单号*/
	billNo?: string;
	/*省份*/
	provinceId: number;
	/*省份*/
	provinceName?: string;
	/*保证金详情列表*/
	earnestDetails?: AT_EarnestDetailsViewModel[];
	/*配送企业*/
	deliverys?: AT_DeliveryViewModel[];
}

export enum AT_SaleInStockState {
	未入库 = 0,
	已入库 = 1,
	部分入库 = 2,
}

export declare interface AT_SaleInvoiceDealRequestModel {
	/*操作请求实体*/
	dealRequestModels?: AT_DealRequestModel[];
}

export declare interface AT_SaleInvoicePageViewModel {
	/*自增ID*/
	id: number;
	/*制单编码*/
	fromCode?: string;
	/*制单明细ID*/
	fromDetailsId: number;
	/*制单明细编号*/
	fromDetailsCode?: string;
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*状态：未申请，已申请，已开票，已签领，已处理

0 = 未申请

1 = 已申请

2 = 已开票

3 = 已签领

4 = 已处理*/
	state: AT_SaleInvoiceState;
	/*状态：未申请，已申请，已开票，已签领，已处理

0 = 未申请

1 = 已申请

2 = 已开票

3 = 已签领

4 = 已处理*/
	readonly stateText: AT_SaleInvoiceState;
	/*制单日期*/
	fromDate?: string;
	/*数据来源：销售通知单，销售退货单

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	dataSource: AT_DataSource;
	/*数据来源：销售通知单，销售退货单

1 = 销售通知单

2 = 销售退货单

3 = 销售调价冲票单*/
	readonly dataSourceText: AT_DataSource;
	/*核算部门：部门编码*/
	countDep?: string;
	/*税票日期*/
	invoiceDate?: string;
	/*税票号码*/
	taxNo?: string;
	/*税票金额*/
	invoiceMoney?: number;
	/*税票税率*/
	taxRate?: number;
	/*签收备注*/
	signNote?: string;
	/*处理方式：已邮寄、随货同行

1 = 已邮寄

2 = 随货同行*/
	handleMode?: AT_HandleMode;
	/*快递公司*/
	expressCompany?: string;
	/*快递单号*/
	expressNo?: string;
	/*邮寄时间*/
	postDate?: string;
	/*收件人*/
	addressee?: string;
	/*收件地址*/
	address?: string;
	/*处理备注*/
	handleNote?: string;
	/*客户名称*/
	clientName?: string;
	/*客户编码*/
	clientCode?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*开票类型

1 = 专用发票

2 = 普通发票*/
	invoiceType: AT_InvoiceType;
	/*数量*/
	amount: number;
	/*开票价*/
	invoicePrice: number;
	/*金额*/
	backMoney: number;
	/*仓库*/
	warehouseCode?: string;
	/*仓库名称*/
	warehouseName?: string;
	/*制单人*/
	addUser?: string;
	/*制单编号*/
	saleCode?: string;
	/*退货制单编号*/
	saleReturnCode?: string;
	/*清单号*/
	billNo?: string;
	/*收货单位*/
	delivery?: string;
	/*出货单位(也是开票单位)*/
	supplierName?: string;
	/*打印人*/
	printUser?: string;
	/*打印次数*/
	printCount: number;
	/*备注*/
	note?: string;
	/*销售调价单单号*/
	saleResetPriceCode?: string;
	/*实际控制人*/
	controllerName?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeText: AT_BusinessCooperationMode;
}

export declare interface AT_SaleInvoicePageViewModelIEnumerableInt32Tuple {
	item1?: AT_SaleInvoicePageViewModel[];
	item2: number;
}

export declare interface AT_SaleInvoiceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*配送公司*/
	delivery?: AT_QueryString;
	/*核算部门*/
	countDep?: AT_QueryString;
	/*仓库*/
	warehouseCode?: AT_QueryString;
	/*仓库名称*/
	warehouseName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*销货单位*/
	supplierName?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*批次*/
	batch?: AT_QueryString;
	/*清单号*/
	billNo?: AT_QueryString;
	/*药品名称*/
	drugName?: AT_QueryString;
	/*详细规格*/
	packageStandard?: AT_QueryString;
	/*制单单号*/
	saleCode?: AT_QueryString;
	/*退货制单单号*/
	saleReturnCode?: AT_QueryString;
	/*制单人*/
	addUser?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*制单类型*/
	dataSource?: AT_QueryInt;
	/*制单日期*/
	fromDate?: AT_QueryDateTime;
	/*开票日期*/
	invoiceDate?: AT_QueryDateTime;
	/*发票状态*/
	state?: AT_QueryList;
	/*回款方式*/
	backMode?: AT_QueryInt;
	/*回款状态*/
	backState?: AT_QueryInt;
	/*申请单号*/
	applicationNo?: AT_QueryString;
	/*税票金额*/
	invoiceMoney?: AT_QueryInt;
	/*税票号码*/
	taxNo?: AT_QueryString;
	/*发票状态*/
	defaultState?: AT_QueryInt;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*销售调价单单号*/
	saleResetPriceCode?: AT_QueryString;
}

export declare interface AT_SaleInvoiceSignRequestModel {
	/*签收请求实体*/
	signRequestModels?: AT_SignRequestModel[];
}

export enum AT_SaleInvoiceState {
	未申请 = 0,
	已申请 = 1,
	已开票 = 2,
	已签领 = 3,
	已处理 = 4,
}

export declare interface AT_SaleOrderCodeDetailViewModel {
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*件数*/
	wholePackage?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*原清单数量*/
	amount?: number;
	/*调价数量*/
	resetAmount?: number;
	/*可退货数量*/
	refundableAmount?: number;
	/*原开票价*/
	origInvoicePrice?: number;
	/*现开票价*/
	invoicePrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*原佣金价格*/
	origCommissionPrice?: number;
	/*合作编码*/
	cooperationCode?: string;
	/*产品编码*/
	productCode?: string;
	/*销售通知单详细Id*/
	saleOrderDetailsId?: number;
	/*调价次数*/
	resetPriceCount?: number;
}

export declare interface AT_SaleOrderCodeViewModel {
	/*销售通知单单号*/
	saleCode?: string;
	/*冲价单编码*/
	saleResetPriceCode?: string;
	teamPerson?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*出库单位*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeText: AT_BusinessCooperationMode;
	/*客户名称*/
	clientName?: string;
	/*省份*/
	provinceName?: string;
	/*省份*/
	provinceId?: number;
	/*实际控制人*/
	controllerName?: string;
	/*收货单位账号编码*/
	companyBankCode?: string;
	/*收货单位账号*/
	companyBankInfo?: string;
	/*调价类型*/
	resetType?: number;
	/*备注*/
	note?: string;
	/*销售计划单制单类型

0 = 非商务

1 = 商务*/
	businessOrderType: AT_BusinessOrderType;
	/*明细*/
	saleOrderCodeDetails?: AT_SaleOrderCodeDetailViewModel[];
}

export declare interface AT_SaleOrderDetailsEditModel {
	/*销售通知单明细Id*/
	id: number;
	/*合作编码：来源订单系统*/
	cooperationCode?: string;
	/*产品编码*/
	productCode: string;
	/*合作品种政策ID：合作带量信息表ID/合作非带量信息表ID*/
	cooperationPolicyId?: number;
	/*配送商业ID：合作配送商业表ID*/
	cooperationDeliveryId?: number;
	/*件装*/
	wholePackage?: number;
	/*库存Id*/
	stockId?: number;
	/*批号*/
	batchNo: string;
	/*批次*/
	batch: string;
	/*数量*/
	amount: number;
	/*结算价格*/
	settlePrice?: number;
	/*开票价格*/
	invoicePrice?: number;
	/*应收金额*/
	mustMoney?: number;
	/*回款金额*/
	backMoney?: number;
	/*销售计划明细ID*/
	salePlanDetailsId?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*发票类型：专用发票、普通发票

1 = 专用发票

2 = 普通发票*/
	invoiceType: AT_InvoiceType;
	/*税率*/
	taxRate?: number;
	/*备注*/
	note?: string;
	/*销售通知单消耗记录*/
	saleBackPreRecords?: AT_SaleBackPreRecordModel[];
	/*销售合同消耗记录表*/
	saleContractRecords?: AT_SaleContractRecordRequestModel[];
}

export declare interface AT_SaleOrderDetailsProductView {
	/*自增ID*/
	id: number;
	/*产品编码*/
	productCode?: string;
	/*合作编码*/
	cooperationCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*结算价格*/
	settlePrice?: number;
	/*开票价*/
	invoicePrice?: number;
	/*应收金额*/
	mustMoney?: number;
	/*回款金额*/
	backMoney?: number;
	/*未转数量*/
	leftOrderAmount?: number;
	/*可用合同数量*/
	availableContractAmount?: number;
	/*可用品种库存*/
	availableProductStock?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*发票类型

1 = 专用发票

2 = 普通发票*/
	invoiceType?: AT_InvoiceType;
	/*税率*/
	taxRate?: number;
	/*备注*/
	note?: string;
	/*可用库存*/
	availableStock?: number;
	/*安全库存数量*/
	safeAmount?: number;
	/*配送费率*/
	amountRate?: number;
	/*配送品种ID*/
	cooperationDeliveryId?: number;
	/*政策ID*/
	cooperationPolicyId?: number;
}

export declare interface AT_SaleOrderDetailsViewModel {
	/*销售通知单明细Id*/
	id: number;
	/*合作编码：来源订单系统*/
	cooperationCode?: string;
	/*产品编码*/
	productCode: string;
	/*合作品种政策ID：合作带量信息表ID/合作非带量信息表ID*/
	cooperationPolicyId?: number;
	/*配送商业ID：合作配送商业表ID*/
	cooperationDeliveryId?: number;
	/*件装*/
	wholePackage?: number;
	/*库存Id*/
	stockId?: number;
	/*批号*/
	batchNo: string;
	/*批次*/
	batch: string;
	/*数量*/
	amount: number;
	/*结算价格*/
	settlePrice?: number;
	/*开票价格*/
	invoicePrice?: number;
	/*应收金额*/
	mustMoney?: number;
	/*回款金额*/
	backMoney?: number;
	/*销售计划明细ID*/
	salePlanDetailsId?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*发票类型：专用发票、普通发票

1 = 专用发票

2 = 普通发票*/
	invoiceType: AT_InvoiceType;
	/*税率*/
	taxRate?: number;
	/*备注*/
	note?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业：企业编码*/
	manufacturerName?: string;
	/*件数*/
	pieceNumber: number;
	/*可用合同数量*/
	availableContractAmount?: number;
	/*可用库存*/
	availableStock?: number;
	/*品种可用库存*/
	availableProductStock?: number;
	/*回款扣除金额*/
	backDeductMoney?: number;
	/*未转数量*/
	leftOrderAmount?: number;
	/*发票类型名称

1 = 专用发票

2 = 普通发票*/
	readonly invoiceTypeName?: AT_InvoiceType;
	/*销售通知单消耗记录*/
	saleBackPreRecords?: AT_SaleBackPreRecordViewModel[];
	/*安全库存*/
	safeAmount?: number;
	/*销售合同消耗记录表*/
	saleContractRecords?: AT_AvailableContractViewModel[];
	/*配送费率*/
	amountRate?: number;
}

export declare interface AT_SaleOrderEditModel {
	/*自增ID*/
	id: number;
	/*销售编码：2060；销售通知单编码*/
	saleCode?: string;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商*/
	cooperationMode: number;
	/*核算部门：部门编码*/
	countDep: number;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*账期*/
	billPeriod?: number;
	/*仓库编码*/
	warehouseCode?: string;
	/*客户编码*/
	clientCode: string;
	/*客户名称*/
	clientName?: string;
	/*回款日期*/
	backDate?: string;
	/*付款模式

1 = 预付货款

2 = 货款保证金

3 = 授信发货*/
	payMode?: AT_SalePlanPaymentMode;
	/*付款模式文本*/
	payModeText?: string;
	/*回款方式：预付货款、有款发货、有款批次发货、货款保证金、保证金批次发货

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode?: AT_BackMode;
	/*回款银行：账套信息中企业（出库单位）下所有银行名称；存编码*/
	backBook?: string;
	/*回款账户：回款银行下的回款账户；存编码*/
	backCard?: string;
	/*配送公司：收货单位； 客户+供应商 筛选 客户配送公司开户表；企业编码*/
	deliveryCode?: string;
	/*收货信息：客户的收货信息*/
	companyReceiptCode?: string;
	/*收货信息：客户的收货信息*/
	companyReceiptText?: string;
	/*回款金额*/
	backMoney?: number;
	/*备注*/
	note?: string;
	/*销售回款码*/
	saleBackCode?: string;
	/*销售计划明细ID*/
	salePlanDetailsId?: number;
	/*销售计划单编码；手动做单为NULL*/
	salePlanCode?: string;
	/*销售通知单银行回单*/
	saleOrderAttachments?: AT_AttachmentModel[];
	/*销售计划单制单类型*/
	orderType?: number;
	/*是否是提交（前端不用传值）*/
	isSubmit: boolean;
	/*是否是存草稿（前端不用传值）*/
	isSaveDraft: boolean;
	/*销售通知单明细*/
	saleOrderDetails?: AT_SaleOrderDetailsEditModel[];
}

export enum AT_SaleOrderFromType {
	制单 = 1,
	转单 = 2,
}

export declare interface AT_SaleOrderNoViewModel {
	/*销售通知单编码*/
	saleCode?: string;
	/*代理商*/
	teamPerson?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*回款银行编码*/
	backBook?: string;
	/*回款银行*/
	bankName?: string;
	/*回款账户*/
	accountName?: string;
	/*回款卡号*/
	bankCard?: string;
}

export declare interface AT_SaleOrderPageModel {
	/*自增ID*/
	id: number;
	/*制单单号*/
	saleCode?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*出库状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	deliveryState: AT_SaleDeliveryState;
	/*出库状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	readonly deliveryStateText: AT_SaleDeliveryState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly backStateText: AT_MoneyBackState;
	/*合作省份编号*/
	coopProvinceId?: string;
	/*合作省份*/
	coopProvinceName?: string;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	readonly cooperationModeText: AT_BusinessCooperationMode;
	/*制单时间*/
	addTime?: string;
	/*审核时间*/
	auditTime?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*客户名称编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*付款方式

1 = 预付货款

2 = 货款保证金*/
	payMode: AT_SalePaymentModelType;
	/*付款方式文本*/
	payModeText?: string;
	/*批号*/
	batchNo?: string;
	/*批次*/
	batch?: string;
	/*仓库编码*/
	warehouse?: string;
	/*仓库*/
	warehouseName?: string;
	/*数量*/
	amount: number;
	/*退货数量*/
	returnAmount?: number;
	/*件数*/
	pieceNumber?: number;
	/*开票价*/
	invoicePrice: number;
	/*回款金额*/
	backMoney: number;
	/*总单金额*/
	backMoneyTotal: number;
	/*应收金额(制单金额)*/
	mustMoney: number;
	/*回款方式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode?: AT_BackMode;
	/*收货单位编码*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	countDep?: string;
	/*核算部门*/
	countDepName?: string;
	/*制单人*/
	addUserName?: string;
	/*总单数量*/
	countNumber?: number;
	/*制单类型

0 = 制单

1 = 转单*/
	orderType: AT_SaleOrderType;
	/*制单类型

0 = 制单

1 = 转单*/
	readonly orderTypeText: AT_SaleOrderType;
	/*海典转单状态

0 = 未转

1 = 已转*/
	haiDianTransferStatus: AT_HaiDianTransferStatus;
	/*归属时间*/
	ascriptionDate?: string;
	/*归属时间*/
	readonly ascriptionDateDisPlay?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SaleOrderPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleOrderPageModel[];
	item2: number;
}

export declare interface AT_SaleOrderPrintPageModel {
	/*企业名称*/
	id: number;
	/*更新时间*/
	updTime?: string;
	/*订单状态

0 = 未出库

1 = 部分出库

2 = 已出库*/
	deliveryState?: AT_SaleDeliveryState;
	/*订单状态文本

0 = 未出库

1 = 部分出库

2 = 已出库*/
	readonly deliveryStateText?: AT_SaleDeliveryState;
	/*收货信息*/
	companyReceiptText?: string;
	/*收货单位编码*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*所属仓库编码*/
	warehouseCode?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*数量*/
	amount: number;
	/*件装*/
	wholePackage: number;
	/*件数*/
	readonly pieces: number;
	/*开票价*/
	invoicePrice: number;
	/*打印状态*/
	isPrinted: number;
}

export declare interface AT_SaleOrderPrintPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleOrderPrintPageModel[];
	item2: number;
}

export declare interface AT_SaleOrderPrintQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*订单状态*/
	deliveryState?: AT_QueryInt;
	/*收货信息*/
	companyReceiptText?: AT_QueryString;
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*所属仓库*/
	warehouseName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*开票价*/
	invoicePrice?: AT_QueryDecimal;
	/*打印状态*/
	isPrinted?: AT_QueryInt;
}

export declare interface AT_SaleOrderQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*订单状态*/
	deliveryState?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*批次*/
	batch?: AT_QueryString;
	/*回款方式*/
	backMode?: AT_QueryInt;
	/*配送公司*/
	deliveryName?: AT_QueryString;
	/*核算部门*/
	countDep?: AT_QueryInt;
	/*制单单号*/
	saleCode?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
	/*制单时间*/
	addTime?: AT_QueryDateTime;
	/*合作省份*/
	coopProvinceId?: AT_QueryInt;
	/*合作模式*/
	cooperationMode?: AT_QueryList;
	/*开票价*/
	invoicePrice?: AT_QueryDecimal;
	/*制单类型*/
	orderType?: AT_QueryInt;
	/*海典转单*/
	haiDianTransferStatus?: AT_QueryInt;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export enum AT_SaleOrderType {
	制单 = 0,
	转单 = 1,
}

export declare interface AT_SaleOrderViewModel {
	/*自增ID*/
	id: number;
	/*销售编码：2060；销售通知单编码*/
	saleCode?: string;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商*/
	cooperationMode: number;
	/*核算部门：部门编码*/
	countDep: number;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*账期*/
	billPeriod?: number;
	/*仓库编码*/
	warehouseCode?: string;
	/*客户编码*/
	clientCode: string;
	/*客户名称*/
	clientName?: string;
	/*回款日期*/
	backDate?: string;
	/*付款模式

1 = 预付货款

2 = 货款保证金

3 = 授信发货*/
	payMode?: AT_SalePlanPaymentMode;
	/*付款模式文本*/
	payModeText?: string;
	/*回款方式：预付货款、有款发货、有款批次发货、货款保证金、保证金批次发货

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode?: AT_BackMode;
	/*回款银行：账套信息中企业（出库单位）下所有银行名称；存编码*/
	backBook?: string;
	/*回款账户：回款银行下的回款账户；存编码*/
	backCard?: string;
	/*配送公司：收货单位； 客户+供应商 筛选 客户配送公司开户表；企业编码*/
	deliveryCode?: string;
	/*收货信息：客户的收货信息*/
	companyReceiptCode?: string;
	/*收货信息：客户的收货信息*/
	companyReceiptText?: string;
	/*回款金额*/
	backMoney?: number;
	/*备注*/
	note?: string;
	/*销售回款码*/
	saleBackCode?: string;
	/*销售计划明细ID*/
	salePlanDetailsId?: number;
	/*销售计划单编码；手动做单为NULL*/
	salePlanCode?: string;
	/*销售通知单银行回单*/
	saleOrderAttachments?: AT_AttachmentModel[];
	/*合作模式名称

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationModeName: AT_BusinessCooperationMode;
	/*核算部门名称*/
	countDepName?: string;
	/*收货单位*/
	deliveryName?: string;
	/*供应商名称*/
	supplierName?: string;
	/*仓库名称*/
	warehouseName?: string;
	/*制单金额*/
	totalMoney: number;
	/*制单类型

0 = 非商务

1 = 商务*/
	orderType: AT_BusinessOrderType;
	/*销售通知单明细*/
	saleOrderDetails?: AT_SaleOrderDetailsViewModel[];
	/*回款银行*/
	backBankBook?: AT_BankBookViewModel;
	/*回款账户*/
	backBankCard?: AT_BankCardViewModel;
	/*收货信息*/
	companyReceipt?: AT_CompanyReceiptModel;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
}

export declare interface AT_SaleOutStockModel {
	/*销售编码：销售通知单编码*/
	saleCode: string;
	/*产品编码*/
	productCode: string;
	/*销售通知单明细ID*/
	saleOrderDetailsId: number;
	/*出库数量*/
	outAmount?: number;
	/*流水码*/
	serialCode?: string;
	/*清单号*/
	billNo: string;
}

export declare interface AT_SaleOutStockPageModel {
	/*销售通知单详情Id*/
	id: number;
	/*制单单号(销售通知单编码)*/
	saleCode?: string;
	/*客户名称*/
	clientName?: string;
	/*收货信息*/
	companyReceiptText?: string;
	/*出库单位*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*制单量*/
	amount: number;
	/*待出库量*/
	pendAmount: number;
	/*待出库件数*/
	number: number;
	/*所属仓库*/
	warehouseName?: string;
	/*收货单位*/
	delivery?: string;
	/*核算部门*/
	countDep?: string;
	/*制单人*/
	addUder?: string;
	/*制单时间*/
	addTime?: string;
	/*制单备注*/
	note?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SaleOutStockPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleOutStockPageModel[];
	item2: number;
}

export declare interface AT_SaleOutStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*制单单号(销售通知单编码)*/
	saleCode?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*批次*/
	batch?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*收货单位*/
	delivery?: AT_QueryString;
	/*制单人*/
	addUder?: AT_QueryString;
	/*制单备注*/
	note?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_SaleOutStockRecordViewModel {
	/*产品编码*/
	productCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*发货地点*/
	sendPlace?: string;
	/*核算部门*/
	countDep?: string;
	/*客户名称*/
	clientName?: string;
	/*收货信息*/
	companyReceiptText?: string;
	/*制单单号(销售通知单编码)*/
	saleCode?: string;
	/*制单时间*/
	addTime?: string;
	/*制单备注*/
	note?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*收货单位*/
	delivery?: string;
	/*待出库量*/
	pendAmount: number;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*发货时间*/
	sendDate?: string;
	/*发货时间(显示)*/
	readonly sendDateDisPlay?: string;
	/*发货方式*/
	sendModeText?: string;
	/*发货方式*/
	sendMode?: number;
	/*送达方式*/
	giveModeText?: string;
	/*送达方式*/
	giveMode?: number;
	/*物流公司Id*/
	logisticId?: number;
	/*物流公司*/
	logisticName?: string;
	/*物流单号*/
	logisticsNo?: string;
	/*物流费用*/
	logisticsFee?: number;
	/*物流备注*/
	logisticsNote?: string;
	/*出库件数*/
	outStockPackage?: number;
	/*出库数量*/
	sumSaleOutStock?: number;
	/*流水码*/
	serialCode?: string;
	/*清单号*/
	billNo?: string;
}

export declare interface AT_SaleOutStockViewModel {
	/*产品编码*/
	productCode?: string;
	/*出库单位*/
	supplierName?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*发货地点*/
	sendPlace?: string;
	/*核算部门*/
	countDep?: string;
	/*客户名称*/
	clientName?: string;
	/*收货信息*/
	companyReceiptText?: string;
	/*制单单号(销售通知单编码)*/
	saleCode?: string;
	/*制单时间*/
	addTime?: string;
	/*制单备注*/
	note?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*收货单位*/
	delivery?: string;
	/*待出库量*/
	pendAmount: number;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
}

export enum AT_SalePaymentModelType {
	预付货款 = 1,
	货款保证金 = 2,
}

export declare interface AT_SalePlanAttachmentRequestModel {
	/*销售计划单单号*/
	salePlanCode?: string;
	/*补录回单附件列表*/
	salePlanAttachments?: AT_AttachmentModel[];
}

export declare interface AT_SalePlanChangeModel {
	/*销售计划单单号*/
	salePlanCode?: string;
	/*主账号：客户编码*/
	clientCode?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*已选产品明细Id*/
	seleDetailIds?: number[];
	/*已选订单明细Id*/
	saleOrderDetailId?: number;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商*/
	cooperationMode: number;
	/*仓库编码*/
	warehouse?: string;
}

export declare interface AT_SalePlanChangeParamModel {
	/*销售计划单单号*/
	salePlanCode?: string;
	/*主账号：客户编码*/
	clientCode?: string;
	/*供应商：企业编码；出库单位*/
	supplierCode?: string;
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*已选产品明细Id*/
	seleDetailIds?: number[];
	/*已选订单明细Id*/
	saleOrderDetailId?: number;
	/*合作模式：区域代理，精细化分销招商，精细化流向招商*/
	cooperationMode: number;
	/*仓库编码*/
	warehouse?: string;
	/*合作编码*/
	cooperationCode?: string;
	/*产品编码*/
	productCode?: string;
	/*数量*/
	amount?: number;
	/*销售计划单明细Id*/
	salePlanDetailId?: number;
	/*产品明细*/
	productDetails?: AT_ProductDetailParamModel[];
	/*销售通知单明细Id列表*/
	deleteSaleOrderDetailIds?: number[];
	/*唯一Id（前端传值，不需要管）*/
	newUuid?: string;
}

export declare interface AT_SalePlanDetailsPageModel {
	/*流程Id*/
	flowId?: number;
	/*自增ID*/
	id: number;
	/*转单状态

0 = 未转

1 = 部分转单

2 = 已转

3 = 无效*/
	state: AT_SalePlanState;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作编码*/
	cooperationCode?: string;
	/*合作省份编号*/
	coopProvinceId?: string;
	/*合作省份*/
	coopProvinceName?: string;
	/*转单状态文本

0 = 未转

1 = 部分转单

2 = 已转

3 = 无效*/
	readonly stateText: AT_SalePlanState;
	/*付款模式*/
	paymentMode: number;
	/*付款模式文本*/
	paymentModeText?: string;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	moneyBackState: AT_MoneyBackState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	readonly moneyBackStateText: AT_MoneyBackState;
	/*订单日期*/
	orderDate?: string;
	/*产品编号*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*付款时间*/
	payDate?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*出库单位名称*/
	supplierName?: string;
	/*收货单位编码*/
	deliveryCode?: string;
	/*收货单位名称*/
	deliveryName?: string;
	/*订单数量*/
	orderAmount?: number;
	/*开票价*/
	openFare: number;
	/*订单金额*/
	orderMoney: number;
	/*订单件数*/
	pieceNumber: number;
	/*已转数量*/
	turnAmount?: number;
	/*可转数量*/
	readonly availableAmount?: number;
	/*订单编号*/
	orderCode?: string;
	/*销售计划单单号*/
	salePlanCode?: string;
	/*转单编号*/
	turnCodes?: string;
	/*转单人*/
	turnUserName?: string;
	/*转单时间*/
	turnTime?: string;
	/*备注*/
	note?: string;
	/*收货地址*/
	receiptInfo?: string;
	/*收货地址 通用编码*/
	comCode?: string;
	/*制单类型

0 = 非商务

1 = 商务*/
	orderType: AT_BusinessOrderType;
	/*制单类型

0 = 非商务

1 = 商务*/
	readonly orderTypeText: AT_BusinessOrderType;
	/*回款模式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode?: AT_BackMode;
	/*回款模式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	readonly backModeText?: AT_BackMode;
	/*回款银行*/
	backBook?: string;
	/*回款账户*/
	backCard?: string;
	/*回款日期*/
	backDate?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SalePlanDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_SalePlanDetailsPageModel[];
	item2: number;
}

export declare interface AT_SalePlanDetailsViewModel {
	/*销售计划单单号*/
	salePlanCode?: string;
	/*客户编码*/
	clientCode?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*配送公司编码*/
	deliveryCode?: string;
	/*配送公司名称*/
	deliveryName?: string;
	/*付款模式*/
	paymentMode?: string;
	/*付款模式文本*/
	paymentModeText?: string;
	/*付款时间*/
	payDate?: string;
	/*备注*/
	note?: string;
	/*收货地址ComCode*/
	receiptComCode?: string;
	/*配送公司收货地址*/
	companyReceipts?: AT_CompanyReceiptSimpleModel[];
	/*购货单位开票信息*/
	companyInvoices?: AT_CompanyInvoiceSimpleModel[];
	/*产品明细*/
	salePlanProduct?: AT_SalePlanProductModel;
	/*附件列表*/
	salePlanAttachmentModels?: AT_AttachmentModel[];
}

export enum AT_SalePlanPaymentMode {
	预付货款 = 1,
	货款保证金 = 2,
	授信发货 = 3,
}

export declare interface AT_SalePlanProductDetailsViewModel {
	/*id*/
	id?: number;
	/*销售计划单编码*/
	salePlanCode?: string;
	/*产品编码*/
	productCode?: string;
	/*合作编码*/
	cooperationCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细保证规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业编码*/
	manufacturer?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*订单数量*/
	orderAmount?: number;
	/*件数*/
	numberPieces?: number;
	/*开票价*/
	openFare?: number;
	/*订单金额*/
	orderMoney?: number;
	/*配送品种ID*/
	cooperationDeliveryId?: number;
	/*政策ID*/
	cooperationPolicyId?: number;
	/*可用合同列表*/
	contractRecords?: AT_AvailableContractViewModel[];
}

export declare interface AT_SalePlanProductModel {
	/*采购计划单id*/
	planDetailsId: number;
	/*通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*可用合同数量*/
	contractNum?: number;
	/*最低发货件数*/
	lowestAmount?: number;
	/*订单数量(默认带计划数量)*/
	quantityOrder?: number;
	/*件装*/
	wholePackage?: number;
	/*开票价*/
	openFare?: number;
	/*产品编码*/
	productCode?: string;
	/*应付金额*/
	mustAmount: number;
	/*已付金额*/
	paidAmount: number;
}

export declare interface AT_SalePlanQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*转单状态*/
	state?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryInt;
	/*合作省份编号（多选）*/
	coopProvinceId?: AT_QueryList;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*出库单位*/
	supplierName?: AT_QueryString;
	/*收货单位*/
	deliveryName?: AT_QueryString;
	/*订单编号*/
	orderCode?: AT_QueryString;
	/*转单编号*/
	turnCodes?: AT_QueryString;
	/*付款模式*/
	paymentMode?: AT_QueryInt;
	/*回款状态*/
	moneyBackState?: AT_QueryInt;
	/*销售计划单单号*/
	salePlanCode?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*制单类型*/
	orderType?: AT_QueryList;
}

export enum AT_SalePlanState {
	未转 = 0,
	部分转单 = 1,
	已转 = 2,
	无效 = 3,
}

export declare interface AT_SalePlanViewModel {
	/*Id*/
	id?: number;
	/*流程ID*/
	flowId?: number;
	/*销售计划单*/
	salePlanCode?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*合作模式

1 = 区域代理

2 = 精细化分销招商

3 = 精细化流向招商

4 = 商务*/
	cooperationMode: AT_BusinessCooperationMode;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*合作省份*/
	provinceId?: number;
	/*收货单位*/
	deliveryCode?: string;
	/*收货信息编码*/
	comCode?: string;
	/*收货信息*/
	receiptInfo?: string;
	/*出库单位*/
	supplierCode?: string;
	/*回款方式

1 = 现款现货

2 = 现款现货批次发货

3 = 预付款发货

6 = 授信发货*/
	backMode: AT_BackMode;
	/*回款银行*/
	backBook?: string;
	/*回款账户*/
	backCard?: string;
	/*回款时间*/
	backDate?: string;
	/*制单金额*/
	totalMoney?: number;
	/*备注*/
	note?: string;
	/*产品明细列表*/
	salePlanProductDetails?: AT_SalePlanProductDetailsViewModel[];
	/*附件列表*/
	attachments?: AT_AttachmentModel[];
}

export declare interface AT_SaleReportDeliveryPageModel {
	/*所属年份*/
	orderYear: number;
	/*配送公司编码*/
	deliveryCode?: string;
	/*配送公司名称*/
	deliveryName?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*意向代理省份*/
	proxyProvinId?: string;
	/*意向代理省份名称*/
	proxyProvinceName?: string;
	/*所属大区*/
	clientArea?: string;
	/*产品编码*/
	productCode?: string;
	/*通用名*/
	drugName?: string;
	/*规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业*/
	manufacturerName?: string;
	/*协议量*/
	agreementAmount?: number;
	/*全年销量*/
	readonly orderAmount?: number;
	/*全年销售额*/
	orderMoney?: number;
	/*完成率*/
	complete?: number;
	/*1月*/
	jan?: number;
	/*2月*/
	feb?: number;
	/*3月*/
	mar?: number;
	/*4月*/
	apr?: number;
	/*5月*/
	may?: number;
	/*6月*/
	jun?: number;
	/*7月*/
	jul?: number;
	/*8月*/
	aug?: number;
	/*9月*/
	sept?: number;
	/*10月*/
	oct?: number;
	/*11月*/
	nov?: number;
	/*12月*/
	dec?: number;
}

export declare interface AT_SaleReportDeliveryPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleReportDeliveryPageModel[];
	item2: number;
}

export declare interface AT_SaleReportDeliveryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*所属年份*/
	orderYear?: AT_QueryList;
	/*配送商业名称*/
	deliveryName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*合作省份/意向代理省份*/
	proxyProvinId?: AT_QueryList;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
}

export declare interface AT_SaleReportPageModel {
	/*所属年份*/
	orderYear: number;
	/*实际控制人*/
	controllerName?: string;
	/*意向代理省份*/
	proxyProvinId?: string;
	/*意向代理省份名称*/
	proxyProvinceName?: string;
	/*所属大区*/
	clientArea?: string;
	/*产品编码*/
	productCode?: string;
	/*通用名*/
	drugName?: string;
	/*规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage: number;
	/*生产企业*/
	manufacturerName?: string;
	/*协议量*/
	agreementAmount?: number;
	/*客户编码*/
	clientCode?: string;
	/*客户名称(配送商)*/
	clientName?: string;
	/*全年销量*/
	readonly orderAmount?: number;
	/*全年销售额*/
	orderMoney?: number;
	/*完成率*/
	complete?: number;
	/*1月*/
	jan?: number;
	/*2月*/
	feb?: number;
	/*3月*/
	mar?: number;
	/*4月*/
	apr?: number;
	/*5月*/
	may?: number;
	/*6月*/
	jun?: number;
	/*7月*/
	jul?: number;
	/*8月*/
	aug?: number;
	/*9月*/
	sept?: number;
	/*10月*/
	oct?: number;
	/*11月*/
	nov?: number;
	/*12月*/
	dec?: number;
}

export declare interface AT_SaleReportPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleReportPageModel[];
	item2: number;
}

export declare interface AT_SaleReportQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*所属年份*/
	orderYear?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*意向代理省份*/
	proxyProvinId?: AT_QueryInt;
}

export declare interface AT_SaleResetPriceDetailsRequestModel {
	/*调价冲票码*/
	saleResetPriceCode?: string;
	/*销售通知单明细ID*/
	saleOrderDetailsId: number;
	/*调价数量*/
	resetAmount?: number;
	/*现开票价*/
	invoicePrice?: number;
	/*现佣金价格*/
	commissionPrice?: number;
}

export declare interface AT_SaleResetPricePageModel {
	/*明细Id*/
	saleResetPriceDetailsId: number;
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*冲价单编码*/
	saleResetPriceCode?: string;
	/*销售通知单*/
	saleCode?: string;
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
	/*调价类型*/
	resetType?: number;
	/*调价类型文本*/
	resetTypeText?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位文本*/
	deliveryName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturer?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*已转单数量*/
	amount?: number;
	/*调价数量*/
	resetAmount?: number;
	/*调整前佣金价格*/
	origCommissionPrice?: number;
	/*调整后佣金价格*/
	currentCommissionPrice?: number;
	/*备注*/
	note?: string;
	/*补差开票价*/
	diffInvoicePrice?: number;
}

export declare interface AT_SaleResetPricePageModelIEnumerableInt32Tuple {
	item1?: AT_SaleResetPricePageModel[];
	item2: number;
}

export declare interface AT_SaleResetPricePayPrintModel {
	/*申请部门（制单人隶属部门）*/
	applictionDep?: string;
	/*打印日期*/
	readonly printDate?: string;
	/*付款项目*/
	readonly payProject?: string;
	/*付款金额（小写）*/
	payMoney: number;
	/*付款金额(大写)*/
	payMoneyChinese?: string;
	/*收款单位*/
	collectUnitName?: string;
	/*收款银行*/
	collectBankName?: string;
	/*收款账号*/
	collectBankCard?: string;
}

export declare interface AT_SaleResetPriceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*冲价单编码*/
	saleResetPriceCode?: AT_QueryString;
	/*供应商名称*/
	supplierName?: AT_QueryString;
	/*调价类型*/
	resetType?: AT_QueryInt;
	/*收货单位文本*/
	deliveryName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*销售通知单*/
	saleCode?: AT_QueryString;
	/*补差开票价*/
	diffInvoicePrice?: AT_QueryDecimal;
}

export declare interface AT_SaleResetPriceRequestModel {
	/*销售冲票单编码:3124*/
	saleResetPriceCode?: string;
	/*销售编码：销售通知单编码*/
	saleCode?: string;
	/*收货单位账号编码：收货单位对应的企业信息里面的基本账户信息*/
	companyBankCode?: string;
	/*收货单位账号信息*/
	companyBankInfo?: string;
	/*调价类型：调开票价（后期会扩展其他类型）*/
	resetType?: number;
	/*备注*/
	note?: string;
	/*冲票单明细列表*/
	saleResetPriceDetails?: AT_SaleResetPriceDetailsRequestModel[];
}

export declare interface AT_SaleReturnDetailsRequestModel {
	/*主键Id*/
	id?: number;
	/*销售退货单编码*/
	saleReturnCode?: string;
	/*销售出库表ID*/
	saleOutStockId?: number;
	/*产品编码*/
	productCode?: string;
	/*销售通知单明细ID*/
	saleOrderDetailsId: number;
	/*退货数量*/
	returnAmount?: number;
	/*应付货款*/
	payMoney?: number;
	/*应退佣金金额*/
	commissionMoney?: number;
}

export declare interface AT_SaleReturnDetailsViewModel {
	/*主键ID*/
	id: number;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*包装数*/
	packageNumber?: string;
	/*包装单位*/
	packageUnit?: string;
	/*件数*/
	wholePackage?: string;
	/*发票类型

1 = 专用发票

2 = 普通发票*/
	invoiceType: AT_InvoiceType;
	/*发票类型

1 = 专用发票

2 = 普通发票*/
	readonly invoiceTypeText: AT_InvoiceType;
	/*税率*/
	taxRate?: number;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*原清单数量*/
	amount?: number;
	/*可退货数量*/
	refundableAmount?: number;
	/*本次退货数量*/
	returnAmount?: number;
	/*结算价*/
	settlePrice?: number;
	/*清单价*/
	invoicePrice?: number;
	/*差额税率*/
	differenceTaxRate?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*合作编码*/
	cooperationCode?: string;
	/*付款金额*/
	payMoney?: number;
	/*销售出库Id*/
	saleOutStockId?: number;
	/*销售通知单明细Id*/
	saleOrderDetailsId?: number;
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_SaleReturnIntoStockPageModel {
	/*退货详情Id*/
	id: number;
	/*入库状态

0 = 未入库

1 = 已入库

2 = 部分入库*/
	intoStockState: AT_SaleInStockState;
	/*入库状态

0 = 未入库

1 = 已入库

2 = 部分入库*/
	readonly intoStockStateText: AT_SaleInStockState;
	/*销售退货单号*/
	saleReturnCode?: string;
	/*代理商*/
	teamPerson?: string;
	/*原出库单位*/
	supplierName?: string;
	/*原收货单位*/
	deliveryName?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber: number;
	/*生产企业*/
	manufacturer?: string;
	/*退货数量*/
	returnAmount: number;
	/*已入库数量*/
	intoStockAmount: number;
	/*未退货数量*/
	notReturnedAmount: number;
	/*包装单位*/
	packageUnit?: string;
	/*退货批号*/
	batchNo?: string;
	/*退货批次*/
	batch?: string;
	/*退货件数*/
	returnNumber?: number;
	/*开票价*/
	invoicePrice?: number;
	/*制单人*/
	addUser?: string;
	/*销售通知单单号*/
	saleCode?: string;
	/*清单号*/
	billNo?: string;
	/*生产日期*/
	produceDate?: string;
	/*生产日期*/
	readonly produceDateDisPlay?: string;
	/*有效至*/
	validDate?: string;
	/*有效至*/
	readonly validDateDisPlay?: string;
}

export declare interface AT_SaleReturnIntoStockPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleReturnIntoStockPageModel[];
	item2: number;
}

export declare interface AT_SaleReturnIntoStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*退货批号*/
	batchNo?: AT_QueryString;
	/*退货批次*/
	batch?: AT_QueryString;
	/*原收货单位*/
	deliveryName?: AT_QueryString;
	/*销售通知单单号*/
	saleCode?: AT_QueryString;
	/*销售退货单号*/
	saleReturnCode?: AT_QueryString;
	/*清单号*/
	billNo?: AT_QueryString;
	/*退货数量*/
	returnAmount?: AT_QueryInt;
}

export declare interface AT_SaleReturnIntoStockRequestModel {
	/*销售退货单编码*/
	saleReturnCode?: string;
	/*销售退货单明细id*/
	saleReturnDetailId: number;
	/*产品编码*/
	productCode?: string;
	/*批号*/
	batchNo?: string;
	/*批次*/
	batch?: string;
	/*本次入库数量*/
	intoStockAmount: number;
}

export declare interface AT_SaleReturnOrderDetailsViewModel {
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturer?: string;
	/*包装数*/
	packageNumber?: string;
	/*包装单位*/
	packageUnit?: string;
	/*件数*/
	wholePackage?: string;
	/*发票类型

1 = 专用发票

2 = 普通发票*/
	invoiceType: AT_InvoiceType;
	/*税率*/
	taxRate?: number;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*原清单数量*/
	amount?: number;
	/*可退货数量*/
	refundableAmount?: number;
	/*结算价*/
	settlePrice?: number;
	/*清单价*/
	invoicePrice?: number;
	/*差额税率*/
	differenceTaxRate?: number;
	/*佣金金额*/
	commissionMoney?: number;
	/*佣金价格*/
	commissionPrice?: number;
	/*合作编码*/
	cooperationCode?: string;
	/*产品编码*/
	productCode?: string;
	/*销售通知单详细Id*/
	saleOrderDetailsId?: number;
	/*销售出库Id*/
	saleOutStockId?: number;
}

export declare interface AT_SaleReturnPageModel {
	/*主键Id*/
	id?: number;
	/*流程Id*/
	flowId?: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*入库状态

0 = 未入库

1 = 已入库

2 = 部分入库*/
	saleInStockState: AT_SaleInStockState;
	/*入库状态

0 = 未入库

1 = 已入库

2 = 部分入库*/
	readonly saleInStockStateText: AT_SaleInStockState;
	/*制单日期*/
	addTime?: string;
	/*制单日期*/
	readonly addTimeDisPlay?: string;
	/*审核时间*/
	auditTime?: string;
	/*退货单号*/
	saleReturnCode?: string;
	/*客户名称*/
	clientName?: string;
	/*原收货单位*/
	deliveryCode?: string;
	/*原收货单位*/
	deliveryName?: string;
	/*原出库单位*/
	supplierName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*生产企业*/
	manufacturer?: string;
	/*件装*/
	wholePackage: number;
	/*包装单位*/
	packageUnit?: string;
	/*退货批次*/
	batch?: string;
	/*退货批号*/
	batchNo?: string;
	/*本次退货数量*/
	returnAmount?: number;
	/*退货件数*/
	wholePackageNumber?: number;
	/*开票价*/
	invoicePrice?: number;
	/*应退佣金金额*/
	commissionMoney?: number;
	/*制单人*/
	addUser?: string;
	/*应付货款*/
	payMoney?: number;
	/*销售通知单编码*/
	saleCode?: string;
	/*合作省份*/
	provinceId?: number;
	/*合作省份*/
	provinceName?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_SaleReturnPageModelIEnumerableInt32Tuple {
	item1?: AT_SaleReturnPageModel[];
	item2: number;
}

export declare interface AT_SaleReturnQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*退货单号*/
	saleReturnCode?: AT_QueryString;
	/*入库状态*/
	saleInStockState?: AT_QueryInt;
	/*流程状态*/
	flowState?: AT_QueryInt;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*原收货单位*/
	deliveryName?: AT_QueryString;
	/*原出库单位*/
	supplierName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*退货批号*/
	batchNo?: AT_QueryString;
	/*制单人*/
	addUser?: AT_QueryString;
	/*销售通知单编码*/
	saleCode?: AT_QueryString;
	/*开票价*/
	invoicePrice?: AT_QueryDecimal;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
	/*合作省份*/
	provinceId?: AT_QueryList;
}

export declare interface AT_SaleReturnRequestModel {
	/*自增ID*/
	id?: number;
	/*销售退货单编码：3088*/
	saleReturnCode?: string;
	/*销售编码：销售通知单编码*/
	saleCode?: string;
	/*收款账号*/
	payee?: string;
	/*退货原因：质量问题、物流破损、货物滞销、客服做错单、其他

1 = 质量问题

2 = 物流破损

3 = 货物滞销

4 = 客服做错单

99 = 其他*/
	returnReason: AT_ReturnGoodsReasons;
	/*备注*/
	note?: string;
	/*制单人*/
	addUser?: string;
	/*制单时间*/
	addTime?: string;
	/*销售退货单明细列表*/
	saleReturnDetails?: AT_SaleReturnDetailsRequestModel[];
}

export declare interface AT_SaleReturnViewModel {
	/*Id*/
	id: number;
	/*退货单编码*/
	saleReturnCode?: string;
	/*销售通知单编码*/
	saleCode?: string;
	/*代理商*/
	teamPerson?: string;
	/*收货单位*/
	deliveryCode?: string;
	/*收货单位*/
	deliveryName?: string;
	/*回款银行编码*/
	backBook?: string;
	/*回款银行*/
	bankName?: string;
	/*回款账户*/
	accountName?: string;
	/*回款卡号*/
	bankCard?: string;
	/*收款账号*/
	payee?: string;
	/*退货原因：质量问题、物流破损、货物滞销、客服做错单、其他

1 = 质量问题

2 = 物流破损

3 = 货物滞销

4 = 客服做错单

99 = 其他*/
	returnReason: AT_ReturnGoodsReasons;
	/*退货原因：质量问题、物流破损、货物滞销、客服做错单、其他

1 = 质量问题

2 = 物流破损

3 = 货物滞销

4 = 客服做错单

99 = 其他*/
	readonly returnReasonText: AT_ReturnGoodsReasons;
	/*备注*/
	note?: string;
	/*流程Id*/
	flowId?: number;
	/*退货明细列表*/
	saleReturnDetails?: AT_SaleReturnDetailsViewModel[];
}

export declare interface AT_SearchBankBookSimpleModel {
	/*账套编码*/
	bankBookCode?: string;
	/*银行名称*/
	bankName?: string;
}

export declare interface AT_SearchBankCardSimpleModel {
	/*银行卡编码*/
	bankCardCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
}

export declare interface AT_SearchBasicAccountModel {
	/*基础账户编码：3135*/
	basicAccountCode?: string;
	/*收款单位*/
	payee?: string;
}

export declare interface AT_SearchCompanyInfoModel {
	/*企业编码：2046*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
}

export declare interface AT_SearchCompanyInfoModelForResetPrice {
	/*企业编码：2046*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*企业银行ComCode*/
	comCode?: string;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
}

export declare interface AT_SearchGoodsInfoModel {
	/*产品编码Id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*通用名*/
	drugName?: string;
	/*标化通用名*/
	genericName?: string;
	/*剂型*/
	regDosageForm?: string;
	/*规格*/
	regStandard?: string;
	/*标化规格*/
	standard?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*包装数*/
	packageNumber?: number;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*件装*/
	wholePackage?: number;
	/*是否原料药：否，是*/
	isApis?: number;
}

export declare interface AT_SearchGoodsMarketInfoModel {
	/*产品编码Id*/
	id?: number;
	/*产品编码*/
	productCode?: string;
	/*通用名*/
	drugName?: string;
	/*标化通用名*/
	genericName?: string;
	/*剂型*/
	regDosageForm?: string;
	/*规格*/
	regStandard?: string;
	/*标化规格*/
	standard?: string;
	/*标化剂型*/
	dosageForm?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业：企业编码*/
	manufacturer?: string;
	/*生产企业：企业名称*/
	manufacturerName?: string;
	/*质量层次*/
	qualityLevel?: number;
	/*包装数*/
	packageNumber?: number;
	/*上市许可持有人：企业编码*/
	holder?: string;
	/*上市许可持有人：企业名称*/
	holderName?: string;
	/*是否抗菌药：否，是*/
	isAntimicrobials?: number;
	/*件装*/
	wholePackage?: number;
	/*是否原料药：否，是*/
	isApis?: number;
	/*药理分类*/
	classify?: string;
	/*存储条件*/
	storage?: string;
	/*用法用量*/
	usageDosage?: string;
	/*适应症*/
	indications?: string;
}

export declare interface AT_SearchGoodsPurchaseModel {
	/*产品编码*/
	productCode?: string;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*包装数*/
	packageNumber?: number;
	/*包装单位*/
	packageUnit?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*批次产量*/
	output?: number;
	/*生产周期*/
	cycle?: number;
}

export enum AT_SearchListType {
	包含 = 0,
	不包含 = 1,
}

export declare interface AT_SearchNetByPolicyBringModel {
	/*省份*/
	provinceId: number;
	/*产品编码*/
	productCode?: string;
	/*带量开始时间*/
	startDate?: string;
	/*带量结束时间*/
	endDate?: string;
	/*是否带量*/
	isBring: number;
}

export declare interface AT_SearchNetModel {
	/*省份*/
	provinceId: number;
	/*产品编码*/
	productCode?: string;
	/*带量开始时间*/
	startDate?: string;
	/*带量结束时间*/
	endDate?: string;
}

export enum AT_SearchNumberType {
	大于 = 0,
	小于 = 1,
	等于 = 2,
	模糊 = 3,
}

export enum AT_SearchStringType {
	精确 = 0,
	模糊 = 1,
}

export declare interface AT_SecondLevelDepartment {
	/*部门编号*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*上一级*/
	parent?: string;
	children?: AT_ThirdLevelDepartment[];
}

export declare interface AT_SendDetailModel {
	/*自增ID*/
	id: number;
	/*邮寄数量*/
	sendAmount?: number;
	/*备注*/
	note?: string;
}

export declare interface AT_SendSaleContractModel {
	/*合同编码*/
	contractCodes?: string[];
	/*邮寄时间：来源订单系统*/
	mailingTime?: string;
	/*快速公司：来源订单系统*/
	courierCompany?: string;
	/*快递单号：来源订单系统*/
	trackingNumber?: string;
	/*收件信息*/
	receivingInfo?: string;
	/*通用编码*/
	comCode?: string;
	/*备注*/
	note?: string;
}

export enum AT_SettleModeEnum {
	包干 = 0,
	开票 = 1,
}

export enum AT_SettleState {
	未确认 = 0,
	部分确认 = 1,
	已确认 = 2,
}

export enum AT_SettleStateEnum {
	未结清 = 0,
	部分结清 = 1,
	已结清 = 2,
}

export declare interface AT_SignRequestModel {
	/*Id*/
	id: number;
	/*核算部门：部门编码*/
	countDep?: string;
	/*税票日期*/
	invoiceDate?: string;
	/*税票号码*/
	taxNo?: string;
	/*税票金额*/
	invoiceMoney?: number;
	/*税票税率*/
	taxRate?: number;
	/*签收备注*/
	signNote?: string;
}

export declare interface AT_SpecialApprovalAttachmentModel {
	/*自增ID，新增时为空*/
	id?: number;
	/*特殊事项表ID*/
	specialApprovalId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
}

export declare interface AT_SpecialApprovalPageModel {
	/*自增ID*/
	id: number;
	/*特殊事项编码(3148)*/
	specialApprovalCode?: string;
	/*类型：佣金结算申请、特殊招商政策申请

1 = 佣金结算申请

2 = 特殊招商政策申请

3 = 担保开户申请

4 = 担保发货申请

99 = 其他*/
	specialType: AT_SpecialApprovalType;
	/*类型：佣金结算申请、特殊招商政策申请

1 = 佣金结算申请

2 = 特殊招商政策申请

3 = 担保开户申请

4 = 担保发货申请

99 = 其他*/
	readonly specialTypeText: AT_SpecialApprovalType;
	/*申请事由*/
	specialNote?: string;
	/*事由标题*/
	title?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*制单人*/
	addUser?: string;
	/*制单时间*/
	addTime?: string;
	readonly addTimeDisPlay?: string;
}

export declare interface AT_SpecialApprovalPageModelIEnumerableInt32Tuple {
	item1?: AT_SpecialApprovalPageModel[];
	item2: number;
}

export declare interface AT_SpecialApprovalQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*类型：佣金结算申请、特殊招商政策申请*/
	specialType?: AT_QueryInt;
	/*制单人*/
	addUser?: AT_QueryString;
	/*特殊事项编码*/
	specialApprovalCode?: AT_QueryString;
}

export declare interface AT_SpecialApprovalRequestModel {
	/*申请类型*/
	specialType: number;
	/*申请事由*/
	specialNote?: string;
	/*事项标题*/
	title?: string;
	/*审核意见（1：同意  0：不同意）*/
	auditOpinion?: number;
	/*详细意见*/
	fullOpinion?: string;
	/*是否重走流程（前端不需要传值）*/
	isResetAudit: boolean;
	/*是否能编辑（前端不需要传值）*/
	isEdit: boolean;
	/*省份*/
	provinceId?: number;
	/*抄送人*/
	specialApprovalShares?: AT_SpecialApprovalShareModel[];
	/*附件*/
	specialApprovalAttachments?: AT_SpecialApprovalAttachmentModel[];
}

export declare interface AT_SpecialApprovalShareModel {
	/*被抄送人*/
	shareUser?: string;
}

export declare interface AT_SpecialApprovalShareViewModel {
	/*被抄送人*/
	shareUser?: string;
	/*被抄送人名称*/
	shareUserName?: string;
}

export enum AT_SpecialApprovalType {
	佣金结算申请 = 1,
	特殊招商政策申请 = 2,
	担保开户申请 = 3,
	担保发货申请 = 4,
	其他 = 99,
}

export declare interface AT_SpecialApprovalViewModel {
	/*主键Id*/
	id: number;
	/*特殊事项编码(3148)*/
	specialApprovalCode?: string;
	/*流程Id*/
	flowId: number;
	/*类型：佣金结算申请、特殊招商政策申请*/
	specialType: number;
	/*申请事由*/
	specialNote?: string;
	/*事由标题*/
	title?: string;
	/*制单人*/
	addUser?: string;
	/*制单人名称（报告人）*/
	addUserName?: string;
	/*制单人部门*/
	depName?: string;
	/*审核人列表*/
	specialAuditors?: AT_SpecialAuditorViewModel[];
	/*抄送人*/
	specialApprovalShares?: AT_SpecialApprovalShareViewModel[];
	/*附件*/
	specialApprovalAttachments?: AT_SpecialApprovalAttachmentModel[];
}

export declare interface AT_SpecialAuditorViewModel {
	/*主键Id*/
	id: number;
	/*审核人*/
	auditor?: string;
	/*审核时间*/
	auditTime?: string;
	/*审核时间*/
	readonly auditTimeDisPlay?: string;
	/*审核意见：不同意，同意*/
	auditOpinion?: number;
	/*详细意见*/
	fullOpinion?: string;
}

export enum AT_SpecialCostAccountType {
	系统账户 = 1,
	指定账户 = 2,
}

export declare interface AT_SpecialCostDetailModel {
	/*明细Id（还原用）*/
	id?: number;
	/*科目*/
	subject?: number;
	/*科目文本*/
	subjectName?: string;
	/*费用金额*/
	costMoney?: number;
	/*项目名称：项目管理表ID*/
	projectManageId?: number;
	/*项目名称：项目管理表ID*/
	projectManageName?: string;
	/*发票金额*/
	invoiceMoney?: number;
	/*摘要*/
	summary?: string;
}

export declare interface AT_SpecialCostModel {
	/*申请人*/
	applyUser?: string;
	/*申请人*/
	applyUserName?: string;
	/*付款方式*/
	bankBookCode?: string;
	/*付款公司*/
	companyCode?: string;
	/*付款公司*/
	companyName?: string;
	/*报销时间*/
	specialCostDate?: string;
	/*报销说明*/
	specialCostNote?: string;
	/*类型：院领导维护、日常商务费用、资金池、其他*/
	specialCostType?: number;
	/*账户类型：系统账户；指定账户

1 = 系统账户

2 = 指定账户*/
	accountType: AT_SpecialCostAccountType;
	/*所属部门*/
	depCode?: string;
	/*所属部门*/
	depName?: string;
	/*所属岗位*/
	postCode?: string;
	/*所属部门*/
	postName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*付款方式

1 = 公对公

2 = 公对私*/
	payWay: AT_SpecialCostPaymentMethod;
	/*收款单位*/
	receiveUnit?: string;
	/*收款银行*/
	receiveBank?: string;
	/*收款单位编码*/
	receiveUnitCode?: string;
	/*收款银行*/
	receiveBankCode?: string;
	/*收款银行卡*/
	receiveBankCard?: string;
	/*专项费用报销详情*/
	specialCostDetailModels?: AT_SpecialCostDetailModel[];
	/*专项费用报销附件*/
	specialCostAttachments?: AT_AttachmentModel[];
}

export declare interface AT_SpecialCostPageModel {
	/*流程Id*/
	flowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_MoneyPayState;
	/*付款状态：未付款，部分付款，已付款

0 = 未付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_MoneyPayState;
	/*付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	payWay: AT_CostPaymentMethod;
	/*费用报销付款方式

1 = 公对公

2 = 公对私

3 = 公对公_历史数据*/
	readonly payWayText: AT_CostPaymentMethod;
	/*类型*/
	specialCostTypeText?: string;
	/*报销时间*/
	specialCostDate?: string;
	/*申请人*/
	applyUserName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*总费用金额*/
	totalCostMoney?: number;
	/*总发票金额*/
	totalInvoiceMoney?: number;
	/*项目费用金额*/
	projectCostMoney?: number;
	/*单号*/
	specialCostCode?: string;
	/*项目Id*/
	projectManageId?: number;
	/*项目名称*/
	projectManageName?: string;
	/*报销说明*/
	specialCostNote?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_SpecialCostPageModelIEnumerableInt32Tuple {
	item1?: AT_SpecialCostPageModel[];
	item2: number;
}

export enum AT_SpecialCostPaymentMethod {
	公对公 = 1,
	公对私 = 2,
}

export declare interface AT_SpecialCostQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请人*/
	applyUserName?: AT_QueryString;
	/*类型*/
	specialCostType?: AT_QueryInt;
	/*单号*/
	specialCostCode?: AT_QueryString;
	/*报销时间*/
	specialCostDate?: AT_QueryDateTime;
	/*付款方式*/
	payWay?: AT_QueryList;
	/*项目名称*/
	projectManageName?: AT_QueryString;
}

export declare interface AT_SpecialCostViewModel {
	/*申请人*/
	applyUser?: string;
	/*申请人*/
	applyUserName?: string;
	/*付款方式*/
	bankBookCode?: string;
	/*付款公司*/
	companyCode?: string;
	/*付款公司*/
	companyName?: string;
	/*报销时间*/
	specialCostDate?: string;
	/*报销说明*/
	specialCostNote?: string;
	/*类型：院领导维护、日常商务费用、资金池、其他*/
	specialCostType?: number;
	/*账户类型：系统账户；指定账户

1 = 系统账户

2 = 指定账户*/
	accountType: AT_SpecialCostAccountType;
	/*所属部门*/
	depCode?: string;
	/*所属部门*/
	depName?: string;
	/*所属岗位*/
	postCode?: string;
	/*所属部门*/
	postName?: string;
	/*收款信息*/
	bankInfo?: string;
	/*付款方式

1 = 公对公

2 = 公对私*/
	payWay: AT_SpecialCostPaymentMethod;
	/*收款单位*/
	receiveUnit?: string;
	/*收款银行*/
	receiveBank?: string;
	/*收款单位编码*/
	receiveUnitCode?: string;
	/*收款银行*/
	receiveBankCode?: string;
	/*收款银行卡*/
	receiveBankCard?: string;
	/*专项费用报销详情*/
	specialCostDetailModels?: AT_SpecialCostDetailModel[];
	/*专项费用报销附件*/
	specialCostAttachments?: AT_AttachmentModel[];
	/*报销编码*/
	specialCostCode?: string;
	/*付款方式

1 = 公对公

2 = 公对私*/
	readonly payWayText: AT_SpecialCostPaymentMethod;
	/*付款银行名称*/
	bankName?: string;
	/*

1 = 系统账户

2 = 指定账户*/
	readonly accountTypeText: AT_SpecialCostAccountType;
}

export declare interface AT_StaffBasicInfo {
	/*姓名*/
	name?: string;
	/*员工编码*/
	employeeCode?: string;
	/*档案状态：(实习，试用，正式，挂职，离职，储备人才

0 = 未知

1 = 实习

2 = 试用

3 = 正式

4 = 挂靠

5 = 储备人才

6 = 离职*/
	workState: AT_WorkStatus;
}

export declare interface AT_StaffInfo {
	/*姓名*/
	name?: string;
	/*员工编码*/
	employeeCode?: string;
	/*档案状态：(实习，试用，正式，挂职，离职，储备人才

0 = 未知

1 = 实习

2 = 试用

3 = 正式

4 = 挂靠

5 = 储备人才

6 = 离职*/
	workState: AT_WorkStatus;
	/*岗位信息*/
	post?: AT_PostModel;
	/*部门信息*/
	dep?: AT_DepModel;
	/*体系信息*/
	ism?: AT_DepModel;
	/*银行卡信息*/
	bankInfo?: string;
}

export declare interface AT_StaffInfoOpenCardModel {
	/*员工编码*/
	employeeCode?: string;
	/*开户行/开户名/账户*/
	name?: string;
}

export declare interface AT_StockBatchParamModel {
	/*产品编码*/
	productCode?: string;
	/*配送公司：企业编码；收货单位*/
	companyCode?: string;
	/*仓库编码*/
	warehouse?: string;
	/*已选库存Id*/
	selectedStock?: number[];
}

export declare interface AT_StockCollectPageModel {
	/*企业名称*/
	companyName?: string;
	/*商品名称*/
	tradeName?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*制剂特点*/
	features?: string;
	/*生产企业*/
	manufacturer?: string;
	/*上市许可持有人*/
	holderName?: string;
	/*可用库存*/
	usableAmount: number;
	/*实际库存*/
	sumStockAmount: number;
	/*库存件数*/
	number: number;
	/*所属仓库*/
	warehouseName?: string;
	/*有效期：单位【月】*/
	expiryDate?: number;
	/*存储条件*/
	storage?: string;
	/*税票税率*/
	taxRate?: number;
	/*安全库存数量*/
	safeAmount?: number;
}

export declare interface AT_StockCollectPageModelIEnumerableInt32Tuple {
	item1?: AT_StockCollectPageModel[];
	item2: number;
}

export declare interface AT_StockCollectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业名称*/
	companyName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryInt;
	/*最小制剂单位*/
	minPreparationUnit?: AT_QueryString;
	/*所属仓库*/
	warehouseName?: AT_QueryString;
}

export declare interface AT_StockDetailsPageModel {
	/*库存Id*/
	id: number;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*最小制剂单位*/
	minPreparationUnit?: string;
	/*制剂特点*/
	features?: string;
	/*生产企业*/
	manufacturer?: string;
	/*所属仓库*/
	warehouseName?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*批号备注*/
	note?: string;
	/*可用库存*/
	usableAmount: number;
	/*实际库存*/
	stockAmount: number;
	/*在库天数*/
	inStockNumberDay: number;
	/*有效期：单位【月】*/
	expiryDate?: number;
	/*有效期至*/
	validDate?: string;
	/*有效期至*/
	readonly validDateDisPlay?: string;
	/*生产日期*/
	produceDate?: string;
	/*生产日期*/
	readonly produceDateDisPlay?: string;
	/*存储条件*/
	storage?: string;
	/*企业名称*/
	companyName?: string;
	/*入库时间*/
	addTime?: string;
	/*入库时间*/
	readonly addTimeDisPlay?: string;
	/*安全库存*/
	safeAmount?: number;
}

export declare interface AT_StockDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_StockDetailsPageModel[];
	item2: number;
}

export declare interface AT_StockDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*批次*/
	batch?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
	/*最小制剂单位*/
	minPreparationUnit?: AT_QueryString;
	/*库存Id*/
	id?: AT_QueryInt;
	/*企业名称*/
	companyName?: AT_QueryString;
	/*件装*/
	wholePackage?: AT_QueryInt;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*有效期至*/
	validDate?: AT_QueryDateTime;
	/*有效期：单位【月】*/
	expiryDate?: AT_QueryInt;
	/*入库时间*/
	addTime?: AT_QueryDateTime;
}

export enum AT_StockFromType {
	FKS = 0,
	HD = 1,
}

export declare interface AT_StockNoteRequestModel {
	/*主键Id*/
	id: number;
	/*备注*/
	note?: string;
}

export enum AT_StockOccupyType {
	库存预留 = 1,
}

export declare interface AT_StockReserveFreeRecordModel {
	/*库存预留表ID*/
	stockReserveId: number;
	/*本次解除数量*/
	freeAmount?: number;
}

export declare interface AT_StockReserveFreeRecordViewModel {
	/*库存预留表ID*/
	stockReserveId: number;
	/*本次解除数量*/
	freeAmount?: number;
	/*类型

1 = 库存预留*/
	occupyType: AT_StockOccupyType;
	/*类型文本

1 = 库存预留*/
	readonly occupyTypeText: AT_StockOccupyType;
	/*预留数量*/
	reserveAmount?: number;
	/*库存预留备注*/
	note?: string;
	/*添加人编码*/
	addUser?: string;
	/*添加人*/
	addUserName?: string;
	/*是否能编辑*/
	enableEdit: number;
	/*添加时间*/
	addTime?: string;
	/*批次*/
	batch?: string;
	/*批号*/
	batchNo?: string;
	/*批号备注*/
	batchNoNote?: string;
}

export declare interface AT_StockReserveModel {
	/*库存ID：库存信息表ID*/
	stockId: number;
	/*预留数量*/
	reserveAmount: number;
	/*备注(预留原因)*/
	note?: string;
}

export declare interface AT_StockViewModel {
	/*企业编码*/
	companyCode?: string;
	/*产品编码*/
	productCode?: string;
	/*仓库编码*/
	warehouse?: string;
	/*批号*/
	batchNo?: string;
	/*批次*/
	batch?: string;
	/*库存来源

0 = FKS

1 = HD*/
	fromType: AT_StockFromType;
	/*件装*/
	wholePackage?: number;
	/*数量*/
	stockAmount?: number;
	/*备注*/
	note?: string;
	/*自增ID*/
	id: number;
}

export declare interface AT_SupplierList {
	/*供应商编码*/
	supplierCode?: string;
	/*供应商名称*/
	supplierName?: string;
}

export declare interface AT_SyncAgencyIntentionQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*客户名称*/
	name?: AT_QueryString;
	/*意向代理品种*/
	drugName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*代理区域*/
	agencyAreaName?: AT_QueryString;
	/*代理区域Id*/
	provinceId?: AT_QueryInt;
	/*公司名称*/
	companyName?: AT_QueryString;
	/*法人代表*/
	legal?: AT_QueryString;
	/*联系方式*/
	conperPhone?: AT_QueryString;
	/*招商团队实际控制人(代理商)*/
	teamPerson?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_SysConfigModel {
	/*页面类型(1页面,2弹窗)*/
	pageType: number;
	/*页面标识key*/
	pageKey?: string;
	/*页面配置*/
	pageSetting?: string;
}

export declare interface AT_SysConfigViewModel {
	/*页面类型(1页面,2弹窗)*/
	pageType: number;
	/*页面标识key*/
	pageKey?: string;
	/*页面配置*/
	pageSetting?: string;
	/*Id*/
	id: number;
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
	parentId: number;
	/*排序*/
	sort?: number;
	/*前端路由附加信息*/
	mate?: AT_SysPageRouteMateModel;
	/*组件名*/
	component?: string;
	/*是否是tab*/
	isTab: number;
	/*是否有通用权限*/
	isCommonAuthorization: number;
	/*父级菜单名称*/
	parentTitle?: string;
}

export declare interface AT_SysPageRouteViewModel {
	/*路由名*/
	name?: string;
	/*路由地址*/
	path?: string;
	/*父级路由Id*/
	parentId: number;
	/*排序*/
	sort?: number;
	/*前端路由附加信息*/
	mate?: AT_SysPageRouteMateModel;
	/*组件名*/
	component?: string;
	/*是否是tab*/
	isTab: number;
	/*是否有通用权限*/
	isCommonAuthorization: number;
	/*父级菜单名称*/
	parentTitle?: string;
	/*路由id*/
	routeId: number;
}

export declare interface AT_SysPopupRouteModel {
	/*弹窗路由名*/
	name?: string;
	/*弹窗路由地址*/
	path?: string;
	/*弹窗路由标题*/
	title?: string;
	/*弹窗路由排序*/
	sort?: number;
	/*弹窗路由组件名*/
	component?: string;
	/*弹窗key*/
	popupKey?: string;
	/*是否走流程*/
	isRunFlow: number;
	/*弹窗流程类型*/
	flowPopupModel?: AT_FlowPopupModel;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
}

export declare interface AT_SysPopupRouteQueryModel {
	/*路由名*/
	name?: string;
	/*弹出key*/
	popupKey?: string;
	/*是否走流程*/
	isRunFlow?: number;
}

export declare interface AT_SysPopupRouteViewModel {
	/*弹窗路由名*/
	name?: string;
	/*弹窗路由地址*/
	path?: string;
	/*弹窗路由标题*/
	title?: string;
	/*弹窗路由排序*/
	sort?: number;
	/*弹窗路由组件名*/
	component?: string;
	/*弹窗key*/
	popupKey?: string;
	/*是否走流程*/
	isRunFlow: number;
	/*弹窗流程类型*/
	flowPopupModel?: AT_FlowPopupModel;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
	/*弹窗路由id*/
	routeId: number;
}

export declare interface AT_TeamInfoModel {
	/*招商团队实际控制人联系方式*/
	conperPhone?: string;
	/*建议合作配送企业*/
	cooperativePSBusiness?: string;
	/*政府事务*/
	govAffairs?: string;
	/*推广品种*/
	hisPromotedVarieties?: string;
	/*法人代表*/
	legal?: string;
	/*法人联系方式*/
	legalPhone?: string;
	/*招商团队组织架构*/
	organization?: string;
	/*备注*/
	remark?: string;
	/*招商团队人员规模*/
	staffSize?: number;
	/*招商团队实际控制人(代理商)*/
	teamPerson?: string;
}

export declare interface AT_TeamInfoSearchModel {
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*招商团队实际控制人(代理商)*/
	teamPerson?: string;
	/*供应商下拉值列表*/
	suppliers?: AT_SupplierList[];
	/*客户收件信息*/
	clientContacts?: AT_ClientContactList[];
	/*产品列表*/
	products?: AT_ProductList[];
}

export declare interface AT_TeamInfoViewModel {
	/*招商团队实际控制人联系方式*/
	conperPhone?: string;
	/*建议合作配送企业*/
	cooperativePSBusiness?: string;
	/*政府事务*/
	govAffairs?: string;
	/*推广品种*/
	hisPromotedVarieties?: string;
	/*自增ID*/
	id: number;
	/*法人代表*/
	legal?: string;
	/*法人联系方式*/
	legalPhone?: string;
	/*招商团队组织架构*/
	organization?: string;
	/*备注*/
	remark?: string;
	/*招商团队人员规模*/
	staffSize?: number;
	/*招商团队实际控制人*/
	teamPerson?: string;
	/*客户编码*/
	clientCode?: string;
}

export declare interface AT_TerminalEnrollModel {
	/*企业编码*/
	companyCode: string;
	/*终端名称*/
	terminalName: string;
	/*拦截方式

1 = 拦截

2 = 正常*/
	volleyMethod: AT_TerminalEnrollVolleyMethod;
	/*备注*/
	note?: string;
}

export declare interface AT_TerminalEnrollPageModel {
	/*Id*/
	id: number;
	/*配送公司*/
	companyName?: string;
	/*终端名称*/
	terminalName?: string;
	/*拦截方式

1 = 拦截

2 = 正常*/
	volleyMethod?: AT_TerminalEnrollVolleyMethod;
	/*拦截方式

1 = 拦截

2 = 正常*/
	readonly volleyMethodText?: AT_TerminalEnrollVolleyMethod;
	/*备注*/
	note?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_TerminalEnrollPageModelIEnumerableInt32Tuple {
	item1?: AT_TerminalEnrollPageModel[];
	item2: number;
}

export declare interface AT_TerminalEnrollQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*配送公司*/
	companyName?: AT_QueryString;
	/*终端名称*/
	terminalName?: AT_QueryString;
	/*拦截方式*/
	volleyMethod?: AT_QueryInt;
	/*备注*/
	note?: AT_QueryString;
	/*更新人*/
	updUser?: AT_QueryString;
}

export declare interface AT_TerminalEnrollViewModel {
	/*企业编码*/
	companyCode: string;
	/*终端名称*/
	terminalName: string;
	/*拦截方式

1 = 拦截

2 = 正常*/
	volleyMethod: AT_TerminalEnrollVolleyMethod;
	/*备注*/
	note?: string;
	/*配送公司*/
	companyName?: string;
	/*拦截方式

1 = 拦截

2 = 正常*/
	readonly volleyMethodText: AT_TerminalEnrollVolleyMethod;
}

export enum AT_TerminalEnrollVolleyMethod {
	拦截 = 1,
	正常 = 2,
}

export declare interface AT_TerminalProductFlowtoSumPageModel {
	/*年份*/
	saleYear: number;
	/*终端名称*/
	terminalName?: string;
	/*合作省份*/
	provinceId: number;
	/*合作省份名称*/
	provinceName?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*实际控制人*/
	controllerName?: string;
	/*产品编码*/
	productCode?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*12月*/
	dec?: number;
	/*11月*/
	nov?: number;
	/*10月*/
	oct?: number;
	/*9月*/
	sept?: number;
	/*8月*/
	aug?: number;
	/*7月*/
	jul?: number;
	/*6月*/
	jun?: number;
	/*5月*/
	may?: number;
	/*4月*/
	apr?: number;
	/*3月*/
	mar?: number;
	/*2月*/
	feb?: number;
	/*1月*/
	jan?: number;
}

export declare interface AT_TerminalProductFlowtoSumPageModelIEnumerableInt32Tuple {
	item1?: AT_TerminalProductFlowtoSumPageModel[];
	item2: number;
}

export declare interface AT_TerminalProductFlowtoSumQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*年份*/
	saleYear?: AT_QueryList;
	/*合作省份*/
	provinceId?: AT_QueryList;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*实际控制人*/
	controllerName?: AT_QueryString;
	/*终端名称*/
	terminalName?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
}

export declare interface AT_ThirdLevelDepartment {
	/*部门编号*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*上一级*/
	parent?: string;
}

export declare interface AT_TradeAssistServiceModel {
	/*辅助业务：自营配送、基层配送、商业配送、托管配送、全国代理、区域代理、其他情况、联营配送、药店配送、私医诊所*/
	assistService?: number;
}

export declare interface AT_TradeBookGKModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceName?: string;
	/*公司名称*/
	companyName?: string;
	/*姓名*/
	fullName?: string;
	/*职务*/
	postName?: string;
	/*联系方式*/
	contact?: string;
}

export declare interface AT_TradeBookGKPageModel {
	/*自增ID*/
	id: number;
	/*省份*/
	provinceName?: string;
	/*公司名称*/
	companyName?: string;
	/*姓名*/
	fullName?: string;
	/*职务*/
	postName?: string;
	/*联系方式*/
	contact?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_TradeBookGKPageModelIEnumerableInt32Tuple {
	item1?: AT_TradeBookGKPageModel[];
	item2: number;
}

export declare interface AT_TradeBookGKQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*省份*/
	provinceName?: AT_QueryString;
	/*公司名称*/
	companyName?: AT_QueryString;
	/*姓名*/
	fullName?: AT_QueryString;
	/*职务*/
	postName?: AT_QueryString;
	/*联系方式*/
	contact?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeBookHRHNModel {
	/*自增ID*/
	id?: number;
	/*区域*/
	areaName?: string;
	/*采购中心负责人*/
	principal?: string;
	/*联系方式*/
	contact?: string;
}

export declare interface AT_TradeBookHRHNPageModel {
	/*自增ID*/
	id: number;
	/*区域*/
	areaName?: string;
	/*采购中心负责人*/
	principal?: string;
	/*联系方式*/
	contact?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_TradeBookHRHNPageModelIEnumerableInt32Tuple {
	item1?: AT_TradeBookHRHNPageModel[];
	item2: number;
}

export declare interface AT_TradeBookHRHNQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*区域*/
	areaName?: AT_QueryString;
	/*采购中心负责人*/
	principal?: AT_QueryString;
	/*联系方式*/
	contact?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeCityModel {
	/*自增ID*/
	id?: number;
	/*城市*/
	cityName?: string;
	/*类别*/
	typeName?: string;
	/*商业名称*/
	fullName?: string;
}

export declare interface AT_TradeCityPageModel {
	/*自增ID*/
	id: number;
	/*城市*/
	cityName?: string;
	/*类别*/
	typeName?: string;
	/*商业名称*/
	fullName?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_TradeCityPageModelIEnumerableInt32Tuple {
	item1?: AT_TradeCityPageModel[];
	item2: number;
}

export declare interface AT_TradeCityQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*城市*/
	cityName?: AT_QueryString;
	/*类别*/
	typeName?: AT_QueryString;
	/*商业名称*/
	fullName?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeContactsModel {
	/*自增ID*/
	id?: number;
	/*联系人*/
	linkman?: string;
	/*职务*/
	postName?: string;
	/*联系电话*/
	phone?: string;
}

export declare interface AT_TradeFocusDetailsModel {
	/*自增ID*/
	id?: number;
	/*客户省份*/
	provinceName?: string;
	/*客户名称*/
	clientName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*仓库地址*/
	warehouseAddress?: string;
	/*第一信息联系人*/
	oneContacts?: string;
	/*第一信息联系人邮箱*/
	oneEmail?: string;
	/*第二信息联系人*/
	twoContacts?: string;
	/*第二信息联系人邮箱*/
	twoEmail?: string;
	/*注册地址*/
	registerAddress?: string;
	/*开户行*/
	bankName?: string;
	/*账号*/
	accountNumber?: string;
	/*税号*/
	taxNumber?: string;
	/*税票电话号码*/
	taxPhone?: string;
}

export declare interface AT_TradeFocusDetailsPageModel {
	/*自增ID*/
	id: number;
	/*客户省份*/
	provinceName?: string;
	/*客户名称*/
	clientName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*仓库地址*/
	warehouseAddress?: string;
	/*第一信息联系人*/
	oneContacts?: string;
	/*第一信息联系人邮箱*/
	oneEmail?: string;
	/*第二信息联系人*/
	twoContacts?: string;
	/*第二信息联系人邮箱*/
	twoEmail?: string;
	/*注册地址*/
	registerAddress?: string;
	/*开户行*/
	bankName?: string;
	/*账号*/
	accountNumber?: string;
	/*税号*/
	taxNumber?: string;
	/*税票电话号码*/
	taxPhone?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_TradeFocusDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_TradeFocusDetailsPageModel[];
	item2: number;
}

export declare interface AT_TradeFocusDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*省份*/
	provinceName?: AT_QueryString;
	/*商业客户全称*/
	clientName?: AT_QueryString;
	/*办公地址*/
	officeAddress?: AT_QueryString;
	/*仓库地址*/
	warehouseAddress?: AT_QueryString;
	/*第一联系人*/
	oneContacts?: AT_QueryString;
	/*第一信息联系人邮箱*/
	oneEmail?: AT_QueryString;
	/*第二信息联系人*/
	twoContacts?: AT_QueryString;
	/*第二信息联系人邮箱*/
	twoEmail?: AT_QueryString;
	/*注册地址*/
	registerAddress?: AT_QueryString;
	/*开户行*/
	bankName?: AT_QueryString;
	/*账号*/
	accountNumber?: AT_QueryString;
	/*税号*/
	taxNumber?: AT_QueryString;
	/*税票电话号码*/
	taxPhone?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeFocusModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceName?: string;
	/*商业客户全称*/
	fullName?: string;
}

export declare interface AT_TradeFocusPageModel {
	/*自增ID*/
	id: number;
	/*省份*/
	provinceName?: string;
	/*商业客户全称*/
	fullName?: string;
	/*添加人*/
	addUserName?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_TradeFocusPageModelIEnumerableInt32Tuple {
	item1?: AT_TradeFocusPageModel[];
	item2: number;
}

export declare interface AT_TradeFocusQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*省份*/
	provinceName?: AT_QueryString;
	/*商业客户全称*/
	fullName?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeMainServiceModel {
	/*主营业务：自营配送、基层配送、商业配送、托管配送、全国代理、区域代理、其他情况、联营配送、药店配送、私医诊所*/
	mainService?: number;
}

export declare interface AT_TradeServiceMeritModel {
	/*自增ID*/
	id?: number;
	/*特点说明*/
	meritNote?: string;
}

export declare interface AT_TradeServiceMeritViewModel {
	/*自增ID*/
	id?: number;
	/*特点说明*/
	meritNote?: string;
	/*分析人*/
	analysisUserName?: string;
	/*分析时间*/
	analysisTime?: string;
}

export enum AT_TradeTypeEnum {
	全国重点商业名单 = 1,
	全国重点商业具体信息 = 2,
	全国地市商业 = 3,
	华润湖南全国采购通讯录 = 4,
	国药控股全国采购通讯录 = 5,
}

export declare interface AT_TradeWholeEditModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId?: number;
	/*城市Id*/
	cityId?: number;
	/*商业名称*/
	fullName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*商业主营业务*/
	tradeMainServices?: AT_TradeMainServiceModel[];
	/*商业辅助业务*/
	tradeAssistServices?: AT_TradeAssistServiceModel[];
	/*商业联系信息*/
	tradeContacts?: AT_TradeContactsModel[];
	/*商业业务特点*/
	tradeServiceMerits?: AT_TradeServiceMeritModel[];
}

export declare interface AT_TradeWholePageModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*城市*/
	cityId?: number;
	/*城市*/
	cityName?: string;
	/*商业名称*/
	fullName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*修改人*/
	updUser?: string;
	/*修改人名称*/
	updUserName?: string;
	/*修改时间*/
	updTime?: string;
}

export declare interface AT_TradeWholePageModelIEnumerableInt32Tuple {
	item1?: AT_TradeWholePageModel[];
	item2: number;
}

export declare interface AT_TradeWholeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*省份*/
	provinceId?: AT_QueryInt;
	/*省份名称*/
	provinceName?: AT_QueryString;
	/*城市*/
	cityId?: AT_QueryInt;
	/*城市*/
	cityName?: AT_QueryString;
	/*商业名称*/
	fullName?: AT_QueryString;
	/*添加人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_TradeWholeViewModel {
	/*自增ID*/
	id?: number;
	/*省份*/
	provinceId?: number;
	/*城市Id*/
	cityId?: number;
	/*商业名称*/
	fullName?: string;
	/*办公地址*/
	officeAddress?: string;
	/*商业主营业务*/
	tradeMainServices?: AT_TradeMainServiceModel[];
	/*商业辅助业务*/
	tradeAssistServices?: AT_TradeAssistServiceModel[];
	/*商业联系信息*/
	tradeContacts?: AT_TradeContactsModel[];
	/*商业业务特点*/
	tradeServiceMerits?: AT_TradeServiceMeritViewModel[];
}

export declare interface AT_TransferAccurateDeliveryPageModel {
	/*客户名称*/
	clientName?: string;
	/*注册通用名*/
	drugName?: string;
	/*医院类型：基层；县级以上；不区分

1 = 基层

2 = 县级以上

3 = 不区分*/
	hospitalType: AT_HospitalType;
	/*点配申请中间表Id*/
	id: number;
	/*是否已转：未转，已转*/
	isTransfer?: number;
	/*生产企业*/
	manufacturer?: string;
	/*包装数*/
	packageNumber?: number;
	/*详细包装规格*/
	packageStandard?: string;
	/*省份*/
	province?: string;
	/*更新时间*/
	updTime?: string;
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_TransferAccurateDeliveryPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferAccurateDeliveryPageModel[];
	item2: number;
}

export declare interface AT_TransferAccurateDeliveryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*省份*/
	provinceId?: AT_QueryInt;
	/*医院类型：基层；县级以上；不区分*/
	hospitalType?: AT_QueryInt;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*客户名称*/
	clientName?: AT_QueryString;
	/*快捷搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_TransferClientBankAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
	/*附件类型：身份证正反面，银行卡卡号，委托书*/
	type?: number;
}

export declare interface AT_TransferClientBankModel {
	/*自增ID*/
	id?: number;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*开户名简称：开户名首拼*/
	accountAbb?: string;
	/*开户名*/
	accountName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*备案账户编码*/
	bankCode?: string;
	/*开户银行：建设银行，农业银行*/
	bankName?: string;
	/*委托书附件列表*/
	commissionAttachments?: AT_TransferClientBankAttachmentModel[];
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*身份证附件列表*/
	idCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*是否冻结：否，是*/
	isFreeze?: number;
	/*是否转单：订单系统转单：1，营销系统客户新增 ：0*/
	isTransfer: number;
}

export declare interface AT_TransferClientBankViewModel {
	/*自增ID*/
	id?: number;
	/*客户编码*/
	clientCode?: string;
	/*开户名简称：开户名首拼*/
	accountAbb?: string;
	/*开户名*/
	accountName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*备案账户编码*/
	bankCode?: string;
	/*开户银行：建设银行，农业银行*/
	bankName?: string;
	/*委托书附件列表*/
	commissionAttachments?: AT_TransferClientBankAttachmentModel[];
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*身份证附件列表*/
	idCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*是否冻结：否，是*/
	isFreeze?: number;
	/*是否转单：订单系统转单：1，营销系统客户新增 ：0*/
	isTransfer: number;
	/*主账户：客户名称*/
	clientName?: string;
}

export declare interface AT_TransferClientDeliveryPageModel {
	/*自增ID*/
	id: number;
	/*主账户：客户编码*/
	clientCode?: string;
	/*主账户：客户名称*/
	clientName?: string;
	/*收货单位编码*/
	deliveryCode?: string;
	/*收货单位名称*/
	deliveryName?: string;
	/*出库单位编码*/
	supplierCode?: string;
	/*出库单位名称*/
	suppName?: string;
	/*合作省份编号*/
	coopProvinceId?: string;
	/*合作省份*/
	coopProvinceName?: string;
	/*所属省份编号*/
	provinceId?: string;
	/*所属区域编号*/
	cityId?: string;
	/*所属省份*/
	provinceName?: string;
	/*所属区域*/
	cityName?: string;
	/*统一社会信用代码*/
	creditCode?: string;
	/*注册地址*/
	registerAddress?: string;
	/*申请时间*/
	applyTime?: string;
	/*是否已转*/
	isTransfer?: number;
	/*实际控制人*/
	controllerName?: string;
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
}

export declare interface AT_TransferClientDeliveryPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferClientDeliveryPageModel[];
	item2: number;
}

export declare interface AT_TransferClientDeliverySimpleModel {
	/*配送公司：企业编码；收货单位*/
	deliveryCode?: string;
	/*配送公司：企业编码；收货单位*/
	deliveryName?: string;
}

export declare interface AT_TransferCompanyBankModel {
	/*账户类型：下拉框维护*/
	type?: number;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*状态：冻结，未冻结*/
	state?: number;
}

export declare interface AT_TransferCompanyBankViewModel {
	/*账户类型：下拉框维护*/
	type?: number;
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*状态：冻结，未冻结*/
	state?: number;
	/*账户类型名称*/
	typeName?: string;
}

export declare interface AT_TransferCompanyInvoiceModel {
	/*开户行*/
	bankName?: string;
	/*开户名*/
	accountName?: string;
	/*账号*/
	bankCard?: string;
	/*地址*/
	address?: string;
	/*纳税识别号*/
	taxNumber?: string;
	/*联系电话*/
	mobile?: string;
	/*状态：冻结，未冻结*/
	state?: number;
}

export declare interface AT_TransferCompanyLicenseModel {
	/*编号*/
	number?: string;
	/*有效期至*/
	expiryDate?: string;
	/*监管机构*/
	supervise?: string;
	/*质量负责人*/
	qualityPerson?: string;
	/*企业负责人*/
	companyPerson?: string;
	/*生产地址和范围*/
	productionRange?: string;
	/*仓库地址*/
	warehouse?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*许可证类型*/
	type?: number;
}

export declare interface AT_TransferCompanyReceiptModel {
	/*收货人*/
	receiver?: string;
	/*收货电话*/
	mobile?: string;
	/*收货地址*/
	address?: string;
	/*收货委托书开始时间*/
	receiptStartDate?: string;
	/*收货委托书结束时间*/
	receiptEndDate?: string;
	/*省份Id*/
	provinceId?: number;
	/*省份名称*/
	provinceName?: string;
	/*城市Id*/
	cityId?: number;
	/*城市名称*/
	cityName?: string;
}

export declare interface AT_TransferCompanyViewModel {
	/*企业编码*/
	companyCode?: string;
	/*企业名称*/
	companyName?: string;
	/*所属省份*/
	provinceId?: number;
	/*所属区域*/
	cityId?: number;
	/*统一社会信用代码*/
	creditCode?: string;
	/*主营业务*/
	mainBusiness?: string;
	/*公司简介*/
	introduction?: string;
	/*采购委托人*/
	entrust?: string;
	/*采购委托开始时间*/
	entrustStartDate?: string;
	/*采购委托结束时间*/
	entrustEndDate?: string;
	/*所属省份*/
	provinceName?: string;
	/*所属区域*/
	cityName?: string;
	/*注册地址*/
	registerAddress?: string;
	/*企业经营许可证*/
	businessLicense?: AT_TransferCompanyLicenseModel;
	/*企业生产许可证*/
	productionLicense?: AT_TransferCompanyLicenseModel;
	/*企业收货信息*/
	companyReceipts?: AT_TransferCompanyReceiptModel[];
	/*企业开票信息*/
	companyInvoice?: AT_TransferCompanyInvoiceModel;
	/*企业基本账户信息*/
	companyBank?: AT_TransferCompanyBankViewModel;
}

export declare interface AT_TransferDeliveryPriceModel {
	/*配送公司备案价格ID*/
	transferDeliveryPriceId: number;
	/*配送公司编码*/
	deliveryCode?: string;
	/*配送公司（收货单位）*/
	deliveryName?: string;
	/*供应商：企业编码*/
	supplierCode?: string;
	/*供应商（出库单位）*/
	supplierName?: string;
	/*开票价格*/
	invoicePrice?: number;
	/*合作编码*/
	cooperationCode?: string;
	/*备注*/
	note?: string;
	/*合作品种产品*/
	cooperationGoodsModel?: AT_CooperationGoodsModel;
}

export declare interface AT_TransferDeliveryPricePageModel {
	/*备案价格审核Id*/
	id: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*合作编码*/
	cooperationCode?: string;
	/*是否已转：未转，已转*/
	isTransfer?: number;
	/*注册药品名称：注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*配送公司；收货单位*/
	deliveryCode?: string;
	/*配送公司名称：企业名称；收货单位*/
	deliveryName?: string;
	/*供应商；出库单位*/
	supplierCode?: string;
	/*供应商：企业名称；出库单位*/
	supplierName?: string;
	/*开票价格*/
	invoicePrice?: number;
	/*备注*/
	note?: string;
	/*客户名称*/
	clientName?: string;
	/*省份名称*/
	provinceName?: string;
	/*更新时间*/
	updTime?: string;
	/*更新日期（显示）*/
	readonly updTimeDisplay?: string;
}

export declare interface AT_TransferDeliveryPricePageModelIEnumerableInt32Tuple {
	item1?: AT_TransferDeliveryPricePageModel[];
	item2: number;
}

export declare interface AT_TransferDeliveryPriceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注册药品名称：注册通用名*/
	drugName?: AT_QueryString;
	/*生产企业*/
	manufacturerName?: AT_QueryString;
	/*配送公司名称：企业名称；收货单位*/
	deliveryName?: AT_QueryString;
	/*供应商：企业名称；出库单位*/
	supplierName?: AT_QueryString;
	/*开票价格*/
	invoicePrice?: AT_QueryInt;
	/*是否已转：未转，已转*/
	isTransfer?: AT_QueryInt;
}

export declare interface AT_TransferEarnestRefundPageModel {
	/*TransferId*/
	id: number;
	/*保证金编码*/
	earnestCode?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	clientName?: string;
	/*保证金类型（保证金科目）：单次货款保证金；长期货款保证金；市场保证金；招标保证金

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType?: AT_EarnestType;
	/*保证金类型文本

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	readonly earnestTypeText?: AT_EarnestType;
	/*收款公司*/
	recoverCompany?: string;
	/*收款账号*/
	recoverAccount?: string;
	/*付款公司*/
	collectCompany?: string;
	/*付款账号*/
	collectAccount?: string;
	/*注册通用名*/
	drugName?: string;
	/*详细包装规格*/
	packageStandard?: string;
	/*件装*/
	wholePackage?: number;
	/*生产企业*/
	manufacturerName?: string;
	/*退款申请时间*/
	returnApplyTime?: string;
	/*实际控制人*/
	controllerName?: string;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse: AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText: AT_EarnestUse;
}

export declare interface AT_TransferEarnestRefundPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferEarnestRefundPageModel[];
	item2: number;
}

export declare interface AT_TransferEarnestRefundQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*客户名称*/
	clientName?: AT_QueryString;
	/*付款公司*/
	collectCompany?: AT_QueryString;
	/*收款公司*/
	recoverCompany?: AT_QueryString;
	/*注册通用名*/
	drugName?: AT_QueryString;
	/*详细包装规格*/
	packageStandard?: AT_QueryString;
	/*保证金科目*/
	earnestType?: AT_QueryList;
	/*保证金用途*/
	earnestUse?: AT_QueryList;
	/*实际控制人*/
	controllerName?: AT_QueryString;
}

export declare interface AT_TransferIntentionPageModel {
	/*自增ID*/
	id: number;
	/*客户编码*/
	clientCode?: string;
	/*客户名称*/
	name?: string;
	/*意向代理品种*/
	productCode?: string;
	/*意向代理品种通用名*/
	drugName?: string;
	/*规格*/
	standard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*代理区域Id*/
	provinceId?: number;
	/*代理区域*/
	agencyAreaName?: string;
	/*公司名称*/
	companyName?: string;
	/*法人代表*/
	legal?: string;
	/*法人代理联系方式*/
	legalPhone?: string;
	/*招商团队实际控制人（代理商）*/
	teamPerson?: string;
	/*联系方式*/
	conperPhone?: string;
	/*招商团队人员规模*/
	staffSize?: string;
	/*愿意缴纳保证金金额*/
	margin?: number;
	/*预计年度完成量*/
	completion?: number;
	/*首批提货数量*/
	pickupVolume?: number;
	/*提交时间*/
	updTime?: string;
	/*制单类型：自动生成，手动制单

0 = 手动制单

1 = 自动生成*/
	fromType: AT_IntentionFromTypeEnum;
	/*是否已转合作品种（0：否，1：是）*/
	isCooperation: number;
	/*实际控制人*/
	controllerName?: string;
}

export declare interface AT_TransferIntentionPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferIntentionPageModel[];
	item2: number;
}

export declare interface AT_TransferIntentionViewModel {
	/*主账户：客户编码；代理商员工*/
	clientCode?: string;
	/*主账户：客户名称*/
	clientName?: string;
	/*产品编码：招商产品ID*/
	productCode?: string;
	/*愿意缴纳保证金额*/
	margin?: number;
	/*预计年度完成量*/
	completion?: number;
	/*首批提货数量*/
	pickupVolume?: number;
	/*其他描述*/
	otherDescription?: string;
	/*备注*/
	remark?: string;
	/*自增ID*/
	id: number;
	/*意向代理品种*/
	drugName?: string;
	/*规格*/
	standard?: string;
	/*规格*/
	regStandard?: string;
	/*生产企业*/
	manufacturerName?: string;
	/*生产企业*/
	manufacturer?: string;
	/*代理区域*/
	agencyAreaName?: string;
	/*公司名称*/
	companyName?: string;
	/*完成量单位*/
	completionUnit?: string;
	/*提货数量单位*/
	pickupVolumeUnit?: string;
	/*代理区域*/
	provinceId: number;
	/*团队信息*/
	teamInfoViewModel?: AT_TransferTeamInfoViewModel;
	/*附件信息*/
	attachmentModels?: AT_AttachmentModel[];
}

export declare interface AT_TransferTeamInfoViewModel {
	/*主账户：客户编码*/
	mainClientCode?: string;
	/*法人代表*/
	legal?: string;
	/*法人联系方式*/
	legalPhone?: string;
	/*招商团队实际控制人*/
	teamPerson?: string;
	/*招商团队实际控制人联系方式*/
	conperPhone?: string;
	/*招商团队人员规模*/
	staffSize?: number;
	/*招商团队组织架构*/
	organization?: string;
	/*政府事务*/
	govAffairs?: string;
	/*推广品种*/
	hisPromotedVarieties?: string;
	/*建议合作配送企业*/
	cooperativePSBusiness?: string;
	/*备注*/
	remark?: string;
	/*自增ID*/
	id: number;
}

export declare interface AT_TurnPurchaseModel {
	/*产品编码*/
	productCode?: string;
}

export declare interface AT_UnfreezeClientBankModel {
	/*解冻原因*/
	reason?: string;
	/*客户编码*/
	clientCode?: string;
	/*客户编码*/
	clientName?: string;
	/*开户名*/
	accountName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*备案账户编码*/
	bankCode?: string;
	/*开户银行：建设银行，农业银行*/
	bankName?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托书附件列表*/
	commissionAttachments?: AT_TransferClientBankAttachmentModel[];
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*身份证附件列表*/
	idCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*是否冻结：否，是*/
	isFreeze?: number;
}

export declare interface AT_UnfreezeClientBankViewModel {
	/*自增ID*/
	id?: number;
	/*主账户：客户名称*/
	clientName?: string;
	/*解冻备案账户流程编号*/
	flowId?: number;
	/*解冻备案账户流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*解冻原因*/
	reason?: string;
	/*解冻申请时间*/
	unfreezeAplicationDate?: string;
	/*客户编码*/
	clientCode?: string;
	/*开户名简称：开户名首拼*/
	accountAbb?: string;
	/*开户名*/
	accountName?: string;
	/*开户支行*/
	bankBranch?: string;
	/*账户：银行卡号*/
	bankCard?: string;
	/*备案账户编码*/
	bankCode?: string;
	/*开户银行：建设银行，农业银行*/
	bankName?: string;
	/*银行卡号附件列表*/
	bankCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托书附件列表*/
	commissionAttachments?: AT_TransferClientBankAttachmentModel[];
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*身份证附件列表*/
	idCardAttachments?: AT_TransferClientBankAttachmentModel[];
	/*委托开始时间*/
	startDueDate?: string;
	/*委托结束时间*/
	endDueDate?: string;
	/*是否冻结：否，是*/
	isFreeze?: number;
}

export declare interface AT_UnfreezeFlowModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*备案账户解冻信息*/
	clientBank?: AT_UnfreezeClientBankModel;
}

export declare interface AT_UpateValidStateModel {
	/*点配申请详细编号*/
	ids?: number[];
	/*无效原因*/
	invalidReason?: string;
	/*有效状态：有效，无效*/
	validState: number;
}

export declare interface AT_UpdatePowerAttorneyModel {
	/*唯一配送委托书Id*/
	powerAttorneyId: number;
	/*邮寄时间*/
	mailDate?: string;
	/*邮寄单号*/
	mailNo?: string;
	/*邮寄备注*/
	mailNote?: string;
	/*办理进度：作废/确认通过/确认邮寄*/
	state: number;
}

export declare interface AT_UserReceiveViewModel {
	/*收件地址*/
	address?: string;
	/*收件人*/
	addressee?: string;
	/*通用编码*/
	comCode?: string;
	/*是否默认：否，是*/
	isDefault?: number;
	/*收件电话*/
	phone?: string;
}

export enum AT_WorkStatus {
	未知 = 0,
	实习 = 1,
	试用 = 2,
	正式 = 3,
	挂靠 = 4,
	储备人才 = 5,
	离职 = 6,
}
