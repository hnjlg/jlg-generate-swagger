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
export const postFirmCodeAssessSubmitAssess = <NUDATA extends (keyof AT_AssessModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssessModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Assess/SubmitAssess?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeAssessGetAssessById = <RNU extends (keyof AT_CheckViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CheckViewModel, RNU>>>(
		`/${FirmCode}/Assess/GetAssessById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeAssessGetAssessToPage = <
	RNU extends (keyof AT_AssessPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssessQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssessQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssessPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Assess/GetAssessToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetApplyAssentAllocation = <NUDATA extends (keyof AT_AssentAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssentAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/AssentAllocation?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowAssetApplyGetAllocationAssetLederByApplyDetailsId = <RNU extends (keyof AT_AssetLedgerPageModel)[] = []>(
	applyDetailsId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetLedgerPageModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetApply/GetAllocationAssetLederByApplyDetailsId?${applyDetailsId ? 'applyDetailsId=' + applyDetailsId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowAssetApplyGetAssetApplyByFlowId = <RNU extends (keyof AT_FlowModelAssetApplyViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelAssetApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/AssetApply/GetAssetApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplyPendingAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplyRejectAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplyResetAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplySaveDraft = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplySubmitAudit = <NUDATA extends (keyof AT_FlowAssetApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetApplyGetAssetApplyToPage = <
	RNU extends (keyof AT_AssetApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/AssetApply/GetAssetApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetApplyDeleteAssetApplyByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/AssetApply/DeleteAssetApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowAssetApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/AssetApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowAssetApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeAssetDefineAddAssetDefine = <NUDATA extends (keyof AT_AssetDefineModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetDefineModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/AssetDefine/AddAssetDefine?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeAssetDefineUpdateAssetDefine = <NUDATA extends (keyof AT_AssetDefineModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_AssetDefineModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/AssetDefine/UpdateAssetDefine?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeAssetDefineDeleteAssetDefine = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/AssetDefine/DeleteAssetDefine?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetDefineGetAssetDefineById = <RNU extends (keyof AT_AssetDefineViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetDefineViewModel, RNU>>>(
		`/${FirmCode}/AssetDefine/GetAssetDefineById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeAssetDefineGetAssetDefineToPage = <
	RNU extends (keyof AT_AssetDefinePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetDefineQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetDefineQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetDefinePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/AssetDefine/GetAssetDefineToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeAssetDefineGetAssetDefineTreeList = <RNU extends (keyof AT_AssetDefineTreeListModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetDefineTreeListModel, RNU>[]>>(
		`/${FirmCode}/AssetDefine/GetAssetDefineTreeList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetDefineSearchAssetDefineDropDownList = <RNU extends (keyof AT_AssetDefineDropDownModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetDefineDropDownModel, RNU>[]>>(
		`/${FirmCode}/AssetDefine/SearchAssetDefineDropDownList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetDefineSearchAssetDefineBigList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/AssetDefine/SearchAssetDefineBigList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetDefineSearchAssetDefineSmallList = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/AssetDefine/SearchAssetDefineSmallList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetDefineSearchAssetDefineCategoryNameList = <RNU extends (keyof AT_AssetDefineViewModel)[] = []>(
	upLevel: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetDefineViewModel, RNU>[]>>(
		`/${FirmCode}/AssetDefine/SearchAssetDefineCategoryNameList?${upLevel ? 'upLevel=' + upLevel : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetLedgerGetAssetLedgerToPage = <
	RNU extends (keyof AT_AssetLedgerPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetLedgerQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLedgerQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetLedgerPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/AssetLedger/GetAssetLedgerToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetLedgerAssetLedgerExport = <NUDATA extends (keyof AT_AssetLedgerQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLedgerQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/AssetLedgerExport?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerPendingAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerRejectAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerDynamicRejectAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerResetAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerSaveDraft = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerSubmitAudit = <NUDATA extends (keyof AT_FlowAssetLedgerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetLedgerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowAssetLedgerGetUpdateAssetManageModelById = <RNU extends (keyof AT_MergeUpdateAssetManageModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MergeUpdateAssetManageModel, RNU>>>(
		`/${FirmCode}/flow/AssetLedger/GetUpdateAssetManageModelById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetLedgerUpdateAssetManageModel = <NUDATA extends (keyof AT_MergeUpdateAssetManageModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MergeUpdateAssetManageModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/UpdateAssetManageModel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerGetAssetManageBatchUpdateByIds = <RNU extends (keyof AT_RevertBatchUpdateAssetManageModel)[] = []>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RevertBatchUpdateAssetManageModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetLedger/GetAssetManageBatchUpdateByIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetLedgerBatchUpdateAssetManage = <NUDATA extends (keyof AT_BatchUpdateAssetManageModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BatchUpdateAssetManageModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/BatchUpdateAssetManage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowAssetLedgerGetAssetLedgerByFlowId = <RNU extends (keyof AT_FlowModelAssetLedgerViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelAssetLedgerViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/AssetLedger/GetAssetLedgerByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetLedgerDeleteAssetLedgerByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/AssetLedger/DeleteAssetLedgerByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetLedgerBatchSetIsLabel = (isLabel: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/AssetLedger/BatchSetIsLabel?${isLabel ? 'isLabel=' + isLabel : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetLedgerAssetLessor = (assetLessorCode: any, savePlace: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/AssetLedger/AssetLessor?${assetLessorCode ? 'assetLessorCode=' + assetLessorCode : ''}&${
			savePlace ? 'savePlace=' + savePlace : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetLedgerBatchEnterInvoice = <NUDATA extends (keyof AT_BatchEnterInvoice)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BatchEnterInvoice, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetLedger/BatchEnterInvoice?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetLedgerGetAssetLedgerByIds = <RNU extends (keyof AT_GetEnterInvoiceDetails)[] = []>(FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_GetEnterInvoiceDetails, RNU>[]>>(
		`/${FirmCode}/flow/AssetLedger/GetAssetLedgerByIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowAssetLedgerGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/AssetLedger/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowAssetLedgerGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetLedger/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeAssetLedgerCompanyGetAssetLedgerCompanyToPage = <
	RNU extends (keyof AT_AssetLedgerCompanyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetLedgerCompanyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLedgerCompanyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetLedgerCompanyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/AssetLedgerCompany/GetAssetLedgerCompanyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeAssetLedgerCompanyAddAssetLedgerCompany = <NUDATA extends (keyof AT_AssetCompanyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetCompanyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/AssetLedgerCompany/AddAssetLedgerCompany?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeAssetLedgerCompanyUpdateAssetLedgerCompany = <NUDATA extends (keyof AT_AssetCompanyModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_AssetCompanyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/AssetLedgerCompany/UpdateAssetLedgerCompany?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeAssetLedgerCompanySearchAssetLedgerCompany = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/AssetLedgerCompany/SearchAssetLedgerCompany?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeAssetLessorAddAssetLessor = <NUDATA extends (keyof AT_AssetLessorModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLessorModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/AssetLessor/AddAssetLessor?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeAssetLessorUpdateAssetLessor = <NUDATA extends (keyof AT_AssetLessorModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLessorModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/AssetLessor/UpdateAssetLessor?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeAssetLessorGetAssetLessorById = <RNU extends (keyof AT_AssetLessorModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetLessorModel, RNU>>>(
		`/${FirmCode}/AssetLessor/GetAssetLessorById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAssetLessorGetAssetLessorsByLessor = <RNU extends (keyof AT_AssetLessorViewModel)[] = []>(lessor: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AssetLessorViewModel, RNU>[]>>(
		`/${FirmCode}/AssetLessor/GetAssetLessorsByLessor?${lessor ? 'lessor=' + lessor : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeAssetLessorGetAssetLessorToPage = <
	RNU extends (keyof AT_AssetLessorPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetLessorQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetLessorQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetLessorPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/AssetLessor/GetAssetLessorToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetPurchaseGetAssetPurchaseToPage = <
	RNU extends (keyof AT_AssetPurchasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AssetPurchaseQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AssetPurchaseQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetPurchasePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/AssetPurchase/GetAssetPurchaseToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetPurchaseDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchasePendingAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseRejectAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseDynamicRejectAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseResetAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseSaveDraft = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseSubmitAudit = <NUDATA extends (keyof AT_FlowAssetPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAssetPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowAssetPurchaseGetAssetPurchaseByFlowId = <RNU extends (keyof AT_FlowModelAssetPurchaseViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelAssetPurchaseViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/AssetPurchase/GetAssetPurchaseByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowAssetPurchaseGetWarehousing = <RNU extends (keyof AT_WarehousingDetailsModel)[] = []>(FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_WarehousingDetailsModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetPurchase/GetWarehousing?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetPurchaseWarehousing = <NUDATA extends (keyof AT_WarehousingModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_WarehousingModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/AssetPurchase/Warehousing?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowAssetPurchaseGetTransferAssetPurchaseDetailsByAssetApplyDetailsId = <
	RNU extends (keyof AT_AssetPurchaseDetailsViewModel)[] = [],
>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AssetPurchaseDetailsViewModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetPurchase/GetTransferAssetPurchaseDetailsByAssetApplyDetailsId?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowAssetPurchaseDeleteAssetPurchase = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/AssetPurchase/DeleteAssetPurchase?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowAssetPurchaseGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/AssetPurchase/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowAssetPurchaseGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/AssetPurchase/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeAuthorizationGetAllPageAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetAllPageAuthorization?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetAllPopupAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetAllPopupAuthorization?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetCurrentUserPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetCurrentUserPageRoute?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetHotPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetHotPageRoute?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetUserPageAuthorization = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetUserPageAuthorization?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetUserPopupAuthorization = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetUserPopupAuthorization?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetRolePageAuthorization = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(
	roleId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetRolePageAuthorization?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetRolePopupAuthorization = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(
	roleId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>[]>>(
		`/${FirmCode}/Authorization/GetRolePopupAuthorization?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeAuthorizationGetCurrentUserPageAuthorizationByRouteKey = <RNU extends (keyof AT_PageAuthorizationViewModel)[] = []>(
	routeKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PageAuthorizationViewModel, RNU>>>(
		`/${FirmCode}/Authorization/GetCurrentUserPageAuthorizationByRouteKey?${routeKey ? 'routeKey=' + routeKey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeAuthorizationGetCurrentUserPopupAuthorizationByPopupkey = <RNU extends (keyof AT_PopupAuthorizationViewModel)[] = []>(
	popupkey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PopupAuthorizationViewModel, RNU>>>(
		`/${FirmCode}/Authorization/GetCurrentUserPopupAuthorizationByPopupkey?${popupkey ? 'popupkey=' + popupkey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowBorrowGetBorrowById = <RNU extends (keyof AT_BorrowViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowViewModel, RNU>>>(
		`/${FirmCode}/flow/Borrow/GetBorrowById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowBorrowGetBorrowByFlowId = <RNU extends (keyof AT_FlowModelBorrowViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelBorrowViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Borrow/GetBorrowByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowBorrowDeleteBorrowFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Borrow/DeleteBorrowFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowBorrowBorrowRepayment = <NUDATA extends (keyof AT_RepaymentRecordModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_RepaymentRecordModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/BorrowRepayment?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowBorrowInterest = <NUDATA extends (keyof AT_BorrowInterestModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BorrowInterestModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/BorrowInterest?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowPendingAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowRejectAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowResetAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowSaveDraft = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowSubmitAudit = <NUDATA extends (keyof AT_FlowBorrowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBorrowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Borrow/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBorrowGetBorrowToPage = <
	RNU extends (keyof AT_BorrowPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BorrowQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_BorrowQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_BorrowPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Borrow/GetBorrowToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowBorrowGetBorrowByUser = <RNU extends (keyof AT_GetBorrowByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetBorrowByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Borrow/GetBorrowByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowBorrowGetPayBackRecordByMoneyBorrowCode = <RNU extends (keyof AT_PayBackRecordModel)[] = []>(
	borrowCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PayBackRecordModel, RNU>[]>>(
		`/${FirmCode}/flow/Borrow/GetPayBackRecordByMoneyBorrowCode?${borrowCode ? 'borrowCode=' + borrowCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowBorrowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Borrow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowBorrowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Borrow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeBorrowUserSubmitBorrowUser = <NUDATA extends (keyof AT_BorrowUserModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BorrowUserModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/BorrowUser/SubmitBorrowUser?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeBorrowUserRemoveBorrowUser = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/BorrowUser/RemoveBorrowUser?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeBorrowUserGetBorrowUserById = <RNU extends (keyof AT_BorrowUserModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_BorrowUserModel, RNU>>>(
		`/${FirmCode}/BorrowUser/GetBorrowUserById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeBorrowUserGetBorrowUserToPage = <
	RNU extends (keyof AT_BorrowUserPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BorrowUserQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_BorrowUserQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_BorrowUserPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/BorrowUser/GetBorrowUserToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowBusinessTripGetBusinessTripToPage = <
	RNU extends (keyof AT_BusinessTripPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_BusinessTripQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_BusinessTripQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_BusinessTripPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/BusinessTrip/GetBusinessTripToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowBusinessTripGetBusinessTripByUser = <RNU extends (keyof AT_GetBusinessTripByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetBusinessTripByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/BusinessTrip/GetBusinessTripByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowBusinessTripDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripPendingAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripRejectAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripDynamicRejectAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripResetAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripSaveDraft = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowBusinessTripSubmitAudit = <NUDATA extends (keyof AT_FlowBusinessTripModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowBusinessTripModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/BusinessTrip/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowBusinessTripGetBusinessTripByFlowId = <RNU extends (keyof AT_FlowModelBusinessTripViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelBusinessTripViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/BusinessTrip/GetBusinessTripByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowBusinessTripDeleteBusinessTripByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/BusinessTrip/DeleteBusinessTripByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowBusinessTripGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/BusinessTrip/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowBusinessTripGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/BusinessTrip/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelDepGetCancelDepByFlowId = <RNU extends (keyof AT_FlowModelCancelDepViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCancelDepViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/CancelDep/GetCancelDepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowCancelDepDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepPendingAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepRejectAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepSaveDraft = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepSubmitAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelDepResetAudit = <NUDATA extends (keyof AT_FlowCancelDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelDep/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowCancelDepGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/CancelDep/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelDepGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/CancelDep/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelLevelGetCancelLevelByFlowId = <RNU extends (keyof AT_FlowModelCancelLevelViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCancelLevelViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/CancelLevel/GetCancelLevelByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowCancelLevelDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelPendingAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelRejectAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelSaveDraft = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelSubmitAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelLevelResetAudit = <NUDATA extends (keyof AT_FlowCancelLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelLevel/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowCancelLevelGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/CancelLevel/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelLevelGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/CancelLevel/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelPositionGetCancelPositionByFlowId = <RNU extends (keyof AT_FlowModelCancelPositionViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCancelPositionViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/CancelPosition/GetCancelPositionByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowCancelPositionDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionPendingAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionRejectAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionSaveDraft = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionSubmitAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCancelPositionResetAudit = <NUDATA extends (keyof AT_FlowCancelPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCancelPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/CancelPosition/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowCancelPositionGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/CancelPosition/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCancelPositionGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/CancelPosition/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeCommonSearchLeaseState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchLeaseState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleLeaseCostType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleLeaseCostType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleLeaseState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleLeaseState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchStaffChangeType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchStaffChangeType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryFixedRecordDataType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryFixedRecordDataType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryFixedRecordDataSource = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryFixedRecordDataSource?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchDepReviewedBy = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDepReviewedBy?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllDepJoint = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllDepJoint?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPayMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPayMethod?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTurnState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTurnState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchStockStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchStockStateEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssetPurchasePayStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssetPurchasePayStateEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFourLevelByDepCode = <RNU extends (keyof AT_DepNameModel)[] = []>(depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepNameModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchFourLevelByDepCode?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllFourLevel = <RNU extends (keyof AT_DepNameModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepNameModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchAllFourLevel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSlaveCardBagStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSlaveCardBagStateEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryDeductStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryDeductStateEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryDeductItemEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryDeductItemEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryDeductItemTypeEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryDeductItemTypeEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchStaffInfoByBarCode = <RNU extends (keyof AT_StaffInfo)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>>>(
		`/${FirmCode}/Common/SearchStaffInfoByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResumeChannelEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResumeChannelEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAffinityEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAffinityEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterviewResultEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterviewResultEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterviewTranscriptReasonEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterviewTranscriptReasonEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFinalResultEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFinalResultEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleCarType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleCarType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRechargeType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRechargeType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCostType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(IsEnable: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCostType?${IsEnable ? 'IsEnable=' + IsEnable : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCostProject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(IsEnable: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCostProject?${IsEnable ? 'IsEnable=' + IsEnable : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCostSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCostSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentHouseType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentHouseType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentPurpose = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentPurpose?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentMethod?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentDetailsType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentDetailsType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchDepositState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDepositState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRewardSubject = <RNU extends (keyof AT_RewardSubjectModel)[] = []>(rewardType: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RewardSubjectModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchRewardSubject?${rewardType ? 'rewardType=' + rewardType : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchBorrowUser = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchBorrowUser?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSocialSecurityCso = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(searchText: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSocialSecurityCso?${searchText ? 'searchText=' + searchText : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCso = <RNU extends (keyof AT_CsoViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CsoViewModel, RNU>[]>>(`/${FirmCode}/Common/SearchCso?${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeCommonSearchDepByBarCode = <RNU extends (keyof AT_DepNameModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepNameModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchDepByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPostByBarCode = <RNU extends (keyof AT_StaffPostIsDefaultModel)[] = []>(
	barCode: any,
	depCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffPostIsDefaultModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchPostByBarCode?${barCode ? 'barCode=' + barCode : ''}&${depCode ? 'depCode=' + depCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeCommonSearchStaffInfoByDepCode = <RNU extends (keyof AT_StaffInfo)[] = []>(depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/Common/SearchStaffInfoByDepCode?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMeetRoom = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMeetRoom?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetMeetRoom = <RNU extends (keyof AT_MeetViewRoomModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MeetViewRoomModel, RNU>[]>>(
		`/${FirmCode}/Common/GetMeetRoom?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSocialInsuranceScheme = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSocialInsuranceScheme?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSocialInsuranceSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSocialInsuranceSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchExcludeHouseFundSocialInsuranceSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchExcludeHouseFundSocialInsuranceSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHouseFundSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHouseFundSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetInsuranceType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/GetInsuranceType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetPaymentMethod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/GetPaymentMethod?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTaxCreditSubject = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTaxCreditSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalarySubject = <RNU extends (keyof AT_SalarySubjectModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalarySubjectModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchSalarySubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalarySubjectType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalarySubjectType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryStaffState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(
	isNoStop: any,
	isChangeState: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryStaffState?${isNoStop ? 'isNoStop=' + isNoStop : ''}&${isChangeState ? 'isChangeState=' + isChangeState : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeCommonSearchRewardType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRewardType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllWelfareSubject = <RNU extends (keyof AT_WelfareSubjectModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_WelfareSubjectModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchAllWelfareSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialByName = <RNU extends (keyof AT_MaterialSimpleModel)[] = []>(
	fmCode: any,
	materialName: any,
	isUsableAmount: any,
	fromCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialSimpleModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchMaterialByName?${fmCode ? 'fmCode=' + fmCode : ''}&${materialName ? 'materialName=' + materialName : ''}&${
			isUsableAmount ? 'isUsableAmount=' + isUsableAmount : ''
		}&${fromCode ? 'fromCode=' + fromCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialSupplierByName = <RNU extends (keyof AT_MaterialSupplierSimpleModel)[] = []>(
	fmCode: any,
	materialSupplierName: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialSupplierSimpleModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchMaterialSupplierByName?${fmCode ? 'fmCode=' + fmCode : ''}&${
			materialSupplierName ? 'materialSupplierName=' + materialSupplierName : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialAttributeType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialAttributeType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialType = <RNU extends (keyof AT_MaterialTypeNameModel)[] = []>(isAll: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialTypeNameModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchMaterialType?${isAll ? 'isAll=' + isAll : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialPurchaseBusinessType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialPurchaseBusinessType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialStockBusinessType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialStockBusinessType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialPurpose = <RNU extends (keyof AT_MaterialPurposeNameModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialPurposeNameModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchMaterialPurpose?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchExtractMode = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchExtractMode?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPersonalReceipt = <RNU extends (keyof AT_PersonalReceiptSimpleModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PersonalReceiptSimpleModel, RNU>[]>>(
		`/${FirmCode}/Common/SearchPersonalReceipt?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFirmBankState = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFirmBankState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFirmBankPurpose = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFirmBankPurpose?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetInductionDate = (barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Common/GetInductionDate?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetMaterialMatchContrast = <RNU extends (keyof AT_MaterialMatchContrastModel)[] = []>(
	fromFirmCode: any,
	fromMaterialCode: any,
	toFirmCode: any,
	toMaterialCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialMatchContrastModel, RNU>>>(
		`/${FirmCode}/Common/GetMaterialMatchContrast?${fromFirmCode ? 'fromFirmCode=' + fromFirmCode : ''}&${
			fromMaterialCode ? 'fromMaterialCode=' + fromMaterialCode : ''
		}&${toFirmCode ? 'toFirmCode=' + toFirmCode : ''}&${toMaterialCode ? 'toMaterialCode=' + toMaterialCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeCommonSearchAllStaffNotIncludedIsAudit = <RNU extends (keyof AT_StaffInfo)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/Common/SearchAllStaffNotIncludedIsAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearcAccount = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearcAccount?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssetManageState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(isApply: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssetManageState?${isApply ? 'isApply=' + isApply : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssetApplyState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssetApplyState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssetManageInvoiceType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssetManageInvoiceType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTeachingDetailsState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTeachingDetailsState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssetDefineLevel = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssetDefineLevel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialCheckType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialCheckType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMeetRoomSetColorType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMeetRoomSetColorType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchGrantWayType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchGrantWayType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCommonRouteClick = (routeId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Common/RouteClick?${routeId ? 'routeId=' + routeId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHotelAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHotelAttachmentType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRentAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRentAttachmentType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleAttachmentFromType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleAttachmentFromType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInsuranceAttachmentFromType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInsuranceAttachmentFromType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleUpkeepType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleUpkeepType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVirtueSubjectType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVirtueSubjectType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSocialInsurancePayState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSocialInsurancePayState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSalaryStateEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSalaryStateEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSStaffGrowState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSStaffGrowState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoBankBook = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(csoCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoBankBook?${csoCode ? 'csoCode=' + csoCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetFirmCsoBankBook = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(firm: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/GetFirmCsoBankBook?${firm ? 'firm=' + firm : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoBankBookByBookName = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(bookName: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoBankBookByBookName?${bookName ? 'bookName=' + bookName : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPayState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPayState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchBackState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchBackState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchNowState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchNowState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialApplyType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialApplyType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchDepCodeMatchByDepCode = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDepCodeMatchByDepCode?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCommonSearchDepCodeMatchByDepCodes = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDepCodeMatchByDepCodes?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeCommonGetPayBackRecordByMoneyCode = <RNU extends (keyof AT_PayBackRecordModel)[] = []>(moneyCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PayBackRecordModel, RNU>[]>>(
		`/${FirmCode}/Common/GetPayBackRecordByMoneyCode?${moneyCode ? 'moneyCode=' + moneyCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetBamsDepCodeByBarCode = <RNU extends (keyof AT_KeyValueStringModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringModel, RNU>>>(
		`/${FirmCode}/Common/GetBamsDepCodeByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterestRatUnitType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterestRatUnitType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaterialApplyState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaterialApplyState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchGrantState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchGrantState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchLevelResetFlowResetType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchLevelResetFlowResetType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetLevelByBarCode = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/GetLevelByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCommonCancelFlowlistHomeShow = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Common/CancelFlowlistHomeShow?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchProvidentFundState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchProvidentFundState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPaybackPeriod = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPaybackPeriod?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchWorkStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchWorkStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchIncumbencyWorkStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchIncumbencyWorkStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllDep = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllDep?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchOneLevelDep = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchOneLevelDep?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTwoLevelDep = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTwoLevelDep?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchThreeLevelDep = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchThreeLevelDep?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFourLevelDep = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFourLevelDep?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchLevel = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchLevel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllPosition = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllPosition?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllRoles = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllRoles?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllOnJobStaff = <RNU extends (keyof AT_StaffInfo)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/Common/SearchAllOnJobStaff?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllStaff = <RNU extends (keyof AT_StaffInfo)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(`/${FirmCode}/Common/SearchAllStaff?${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeCommonSearchDepType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDepType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchDailylogType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchDailylogType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchEducationType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchEducationType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchEducationRequireType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchEducationRequireType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMaritalStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMaritalStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPopupRoute = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(searchText: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPopupRoute?${searchText ? 'searchText=' + searchText : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPositionByDepCode = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPositionByDepCode?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchProfessionalStatusType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchProfessionalStatusType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRecruitmentDemandReasonType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRecruitmentDemandReasonType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSexRequireType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSexRequireType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchSexType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchSexType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchWorkExperienceType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchWorkExperienceType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchComputerStandardType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchComputerStandardType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFilterType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFilterType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchStaff = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(searchText: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchStaff?${searchText ? 'searchText=' + searchText : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllProvince = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllProvince?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllCityByProvince = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(provinceid: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllCityByProvince?${provinceid ? 'provinceid=' + provinceid : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTrademarkTrend = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTrademarkTrend?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHotelStar = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHotelStar?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHotelState = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHotelState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterviewModality = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterviewModality?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllCountyByCity = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(cityId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllCountyByCity?${cityId ? 'cityId=' + cityId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAllFlowType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAllFlowType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchBirthdayType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchBirthdayType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRecruitmentDemandStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRecruitmentDemandStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchNewsletterStatus = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchNewsletterStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchEmployWorkStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchEmployWorkStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchPeriodType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchPeriodType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchLogRule = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchLogRule?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchIsInterviewStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchIsInterviewStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRelationType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRelationType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchFlowListState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchFlowListState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResumeStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResumeStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResumeTimelineType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResumeTimelineType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterviewResultType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterviewResultType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTeachingState = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTeachingState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTeachingType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTeachingType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTalkType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTalkType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssessType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssessType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchAssessResult = <RNU extends (keyof AT_KeyValueIntViewModel)[] = [], NU0 extends (keyof AT_AssessType)[] = []>(
	assessType: U_I_NoNull<AT_AssessType, NU0>,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchAssessResult?${assessType ? 'assessType=' + assessType : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMeetForm = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMeetForm?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchMeetType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchMeetType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTeachTemplateByDepAndPost = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(
	depCode: any,
	postCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTeachTemplateByDepAndPost?${depCode ? 'depCode=' + depCode : ''}&${postCode ? 'postCode=' + postCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeCommonGetUserDepPost = <RNU extends (keyof AT_DepPost)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepPost, RNU>[]>>(
		`/${FirmCode}/Common/GetUserDepPost?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchScheme = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchScheme?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoUseCategory = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoUseCategory?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoAttachmentType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoStatus = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoStatus?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHolidayUnit = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHolidayUnit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHolidayMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHolidayMode?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchHolidayRule = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchHolidayRule?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResignType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResignType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResignComplexCardEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResignComplexCardEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResignComplexOutEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResignComplexOutEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResignComplexOfficeSystemEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResignComplexOfficeSystemEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchResignComplexFixedAssetsEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchResignComplexFixedAssetsEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchTransferTypeEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchTransferTypeEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchContractTypeByText = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(text: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchContractTypeByText?${text ? 'text=' + text : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchVehicleEnum = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchVehicleEnum?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoSocialType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoSocialType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchholidayType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchholidayType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchStaffBankByBarCode = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchStaffBankByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetOperatorBarCode = <RNU extends (keyof AT_OperatorModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_OperatorModel, RNU>>>(
		`/${FirmCode}/Common/GetOperatorBarCode?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRepaymentType = <RNU extends (keyof AT_KeyValueIntDefaultViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntDefaultViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRepaymentType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchRepaymentMode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchRepaymentMode?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInterestType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInterestType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCsoByCosName = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(csoName: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCsoByCosName?${csoName ? 'csoName=' + csoName : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetFamilyInfoById = <RNU extends (keyof AT_FamilyInfoModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FamilyInfoModel, RNU>>>(
		`/${FirmCode}/Common/GetFamilyInfoById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetFirmAllScheme = <RNU extends (keyof AT_SchemeInfoModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SchemeInfoModel, RNU>[]>>(
		`/${FirmCode}/Common/GetFirmAllScheme?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonGetFirmBySchemeCode = <RNU extends (keyof AT_FirmSimpleModel)[] = []>(schemeCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FirmSimpleModel, RNU>[]>>(
		`/${FirmCode}/Common/GetFirmBySchemeCode?${schemeCode ? 'schemeCode=' + schemeCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchInductionAttachmentType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchInductionAttachmentType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCommonSearchCardType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/Common/SearchCardType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeContractAddContract = <NUDATA extends (keyof AT_ContractModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ContractModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Contract/AddContract?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeContractUpdateContract = <NUDATA extends (keyof AT_ContractUpdateModel)[] = []>(
	contractId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ContractUpdateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Contract/UpdateContract?${contractId ? 'contractId=' + contractId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeContractContractHandle = (contractId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Contract/ContractHandle?${contractId ? 'contractId=' + contractId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeContractRemoveContract = (contractId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Contract/RemoveContract?${contractId ? 'contractId=' + contractId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeContractGetContractById = <RNU extends (keyof AT_ContractViewModel)[] = []>(contractId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ContractViewModel, RNU>>>(
		`/${FirmCode}/Contract/GetContractById?${contractId ? 'contractId=' + contractId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeContractGetHistoryContract = <RNU extends (keyof AT_ContractPageModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ContractPageModel, RNU>[]>>(
		`/${FirmCode}/Contract/GetHistoryContract?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeContractGetContractToPage = <
	RNU extends (keyof AT_ContractPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ContractQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ContractQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ContractPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Contract/GetContractToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeContractTypeSubmitContractType = <NUDATA extends (keyof AT_ContractTypeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ContractTypeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/ContractType/SubmitContractType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeContractTypeGetContractTypeById = <RNU extends (keyof AT_ContractTypeModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ContractTypeModel, RNU>>>(
		`/${FirmCode}/ContractType/GetContractTypeById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeContractTypeGetContractTypeToPage = <
	RNU extends (keyof AT_ContractTypePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ContractTypeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ContractTypeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ContractTypePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/ContractType/GetContractTypeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeContractTypeDeleteContractType = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/ContractType/DeleteContractType?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowCostGetCostById = <RNU extends (keyof AT_CostViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostViewModel, RNU>>>(
		`/${FirmCode}/flow/Cost/GetCostById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowCostDeleteCostFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Cost/DeleteCostFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowCostGetCostByFlowId = <RNU extends (keyof AT_FlowModelCostViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelCostViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Cost/GetCostByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowCostDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostPendingAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostRejectAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostDynamicRejectAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostResetAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostSaveDraft = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostSubmitAudit = <NUDATA extends (keyof AT_FlowCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Cost/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowCostGetCostToPage = <
	RNU extends (keyof AT_CostPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Cost/GetCostToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowCostGetCostByUser = <RNU extends (keyof AT_GetCostByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetCostByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Cost/GetCostByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowCostGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Cost/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowCostGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Cost/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeCostInvoiceGetCostInvoiceToPage = <
	RNU extends (keyof AT_CostInvoicePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostInvoiceQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostInvoiceQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostInvoicePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/CostInvoice/GetCostInvoiceToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeCostInvoiceBatchCostInvoice = <NUDATA extends (keyof AT_CostInvoiceQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostInvoiceQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoice/BatchCostInvoice?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostInvoiceAddCostInvoice = <NUDATA extends (keyof AT_CostInvoiceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostInvoiceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoice/AddCostInvoice?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostInvoiceBatchConfirm = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoice/BatchConfirm?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeCostInvoiceGetCostInvoiceCompanyByBarCode = <RNU extends (keyof AT_CostInvoiceCompanyModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostInvoiceCompanyModel, RNU>>>(
		`/${FirmCode}/CostInvoice/GetCostInvoiceCompanyByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeCostInvoiceGetCostInvoiceById = <RNU extends (keyof AT_CostInvoiceViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostInvoiceViewModel, RNU>>>(
		`/${FirmCode}/CostInvoice/GetCostInvoiceById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCostInvoiceSummaryGetCostInvoiceSummaryToPage = <
	RNU extends (keyof AT_CostInvoiceSummaryPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostInvoiceSummaryQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostInvoiceSummaryQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostInvoiceSummaryPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/CostInvoiceSummary/GetCostInvoiceSummaryToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeCostInvoiceSummaryBatchZeroClean = <NUDATA extends (keyof AT_ZeroClean)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ZeroClean, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoiceSummary/BatchZeroClean?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostInvoiceSummaryBatchCostInvoiceSummary = <NUDATA extends (keyof AT_CostInvoiceSummaryQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostInvoiceSummaryQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoiceSummary/BatchCostInvoiceSummary?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostInvoiceSummaryUpdateCostInvoiceCompany = <NUDATA extends (keyof AT_UpdateCostInvoiceCompanyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_UpdateCostInvoiceCompanyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostInvoiceSummary/UpdateCostInvoiceCompany?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostProjectAddCostProject = <NUDATA extends (keyof AT_CostProjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostProjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostProject/AddCostProject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCostProjectUpdateCostProject = <NUDATA extends (keyof AT_CostProjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostProjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostProject/UpdateCostProject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeCostProjectGetCostProjectById = <RNU extends (keyof AT_CostProjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostProjectModel, RNU>>>(
		`/${FirmCode}/CostProject/GetCostProjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCostProjectGetCostProjectToPage = <
	RNU extends (keyof AT_CostProjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostProjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostProjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostProjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/CostProject/GetCostProjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeCostSubjectSubmitCostSubject = <NUDATA extends (keyof AT_CostSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostSubject/SubmitCostSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeCostSubjectGetCostSubjectById = <RNU extends (keyof AT_CostSubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostSubjectModel, RNU>>>(
		`/${FirmCode}/CostSubject/GetCostSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCostSubjectGetCostSubjectToPage = <
	RNU extends (keyof AT_CostSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/CostSubject/GetCostSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeCostTypeSubmitCostType = <NUDATA extends (keyof AT_CostTypeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostTypeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/CostType/SubmitCostType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeCostTypeGetCostTypeById = <RNU extends (keyof AT_CostTypeModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_CostTypeModel, RNU>>>(
		`/${FirmCode}/CostType/GetCostTypeById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCostTypeGetCostToTypePage = <
	RNU extends (keyof AT_CostTypePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CostTypeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CostTypeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CostTypePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/CostType/GetCostToTypePage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeCsoGetCsoToPage = <
	RNU extends (keyof AT_CsoPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CsoQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CsoQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CsoPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Cso/GetCsoToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeCsoGetStaffListByCsoCode = (csoCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Cso/GetStaffListByCsoCode?${csoCode ? 'csoCode=' + csoCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeCsoAddCso = <NUDATA extends (keyof AT_CsoModel)[] = []>(FirmCode: any, data: U_I_NoNull<AT_CsoModel, NUDATA>) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Cso/AddCso?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCsoUpdateCso = <NUDATA extends (keyof AT_CsoModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_CsoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Cso/UpdateCso?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeCsoGetCsoById = <RNU extends (keyof AT_CsoViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CsoViewModel, RNU>>>(
		`/${FirmCode}/Cso/GetCsoById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeDailylogSaveDailyLog = <NUDATA extends (keyof AT_DailyLogRequestModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DailyLogRequestModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Dailylog/SaveDailyLog?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeDailylogDeleteDailyLog = (dailyLogId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/DeleteDailyLog?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeDailylogSaveDailyLogComment = <NUDATA extends (keyof AT_DailyLogRequsetComment)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DailyLogRequsetComment, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Dailylog/SaveDailyLogComment?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeDailylogDeleteDailyLogComment = (dailyLogCommentId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/DeleteDailyLogComment?${dailyLogCommentId ? 'dailyLogCommentId=' + dailyLogCommentId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeDailylogDailyLogShare = <NUDATA extends (keyof AT_DailylogRequestShare)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DailylogRequestShare, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Dailylog/DailyLogShare?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeDailylogDailyLogPraise = (dailyLogId: any, isPraise: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/DailyLogPraise?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${isPraise ? 'isPraise=' + isPraise : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeDailylogDailyLogKeep = (dailyLogId: any, isKeep: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/DailyLogKeep?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${isKeep ? 'isKeep=' + isKeep : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeDailylogDailyLogRead = (dailyLogId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/DailyLogRead?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeDailylogGetDailyLogReadUser = (dailyLogId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/Dailylog/GetDailyLogReadUser?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeDailylogGetDailylogList = <
	RNU extends (keyof AT_DailylogPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_DailylogQueryModel)[] = [],
>(
	pageType: any,
	FirmCode: any,
	data: U_I_NoNull<AT_DailylogQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_DailylogPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Dailylog/GetDailylogList?${pageType ? 'pageType=' + pageType : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeDailylogGetDailyLogPageCount = <RNU extends (keyof AT_DailyLogPageCountModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DailyLogPageCountModel, RNU>>>(
		`/${FirmCode}/Dailylog/GetDailyLogPageCount?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeDailylogGetDailyLogInfoById = <RNU extends (keyof AT_DailyLogViewModel)[] = []>(dailyLogId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DailyLogViewModel, RNU>>>(
		`/${FirmCode}/Dailylog/GetDailyLogInfoById?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeDailylogGetDailylogCommentViewModelById = <RNU extends (keyof AT_DailylogCommentBaseViewModel)[] = []>(
	dailyLogId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DailylogCommentBaseViewModel, RNU>[]>>(
		`/${FirmCode}/Dailylog/GetDailylogCommentViewModelById?${dailyLogId ? 'dailyLogId=' + dailyLogId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowDepDynamicRejectAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowDepDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowDepGetDepByCode = <RNU extends (keyof AT_FlowModelDepViewModelTuple)[] = []>(
	depCode: any,
	popupKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelDepViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Dep/GetDepByCode?${depCode ? 'depCode=' + depCode : ''}&${popupKey ? 'popupKey=' + popupKey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowDepGetDepByFlowId = <RNU extends (keyof AT_FlowModelDepViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelDepViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Dep/GetDepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowDepGetCancelDepToPage = <
	RNU extends (keyof AT_CancelDepPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CancelDepQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CancelDepQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CancelDepPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Dep/GetCancelDepToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowDepGetUserInfoByDep = <
	RNU extends (keyof AT_UserPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_UserQueryModel)[] = [],
>(
	depCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_UserQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_UserPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Dep/GetUserInfoByDep?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowDepGetSomeUserInfoByDep = <
	RNU extends (keyof AT_UserPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_UserQueryModel)[] = [],
>(
	depCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_UserQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_UserPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Dep/GetSomeUserInfoByDep?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowDepGetStaffInfoByDep = <RNU extends (keyof AT_StaffInfoSimpleModel)[] = []>(
	depCode: any,
	yearMonth: any,
	sex: any,
	isWelefare: any,
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffInfoSimpleModel, RNU>[]>>(
		`/${FirmCode}/flow/Dep/GetStaffInfoByDep?${depCode ? 'depCode=' + depCode : ''}&${yearMonth ? 'yearMonth=' + yearMonth : ''}&${
			sex ? 'sex=' + sex : ''
		}&${isWelefare ? 'isWelefare=' + isWelefare : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowDepGetStaffInfoIncludFourthLevelByDep = <RNU extends (keyof AT_StaffInfoSimpleModel)[] = []>(
	depCode: any,
	yearMonth: any,
	sex: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfoSimpleModel, RNU>[]>>(
		`/${FirmCode}/flow/Dep/GetStaffInfoIncludFourthLevelByDep?${depCode ? 'depCode=' + depCode : ''}&${yearMonth ? 'yearMonth=' + yearMonth : ''}&${
			sex ? 'sex=' + sex : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowDepGetDepTreeList = <RNU extends (keyof AT_DepTreeListMole)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepTreeListMole, RNU>[]>>(
		`/${FirmCode}/flow/Dep/GetDepTreeList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowDepGetDepTreeListByDepCode = <RNU extends (keyof AT_DepTreeListMole)[] = []>(depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepTreeListMole, RNU>>>(
		`/${FirmCode}/flow/Dep/GetDepTreeListByDepCode?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowDepPendingAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowDepRejectAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowDepResetAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	depCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Dep/ResetAudit?${depCode ? 'depCode=' + depCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowDepSaveDraft = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowDepSubmitAudit = <NUDATA extends (keyof AT_FlowDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowDepRenewalDepFatherData = (password: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Dep/RenewalDepFatherData?${password ? 'password=' + password : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowDepDeleteDepByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Dep/DeleteDepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowDepUpdateDepSort = <NUDATA extends (keyof AT_UpdateDepSort)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_UpdateDepSort, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Dep/UpdateDepSort?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowDepGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Dep/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowDepGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Dep/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeDepSpecialAddDepSpecial = <NUDATA extends (keyof AT_DepSpecialAddModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DepSpecialAddModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/DepSpecial/AddDepSpecial?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeDepSpecialDeleteDepSpecial = (vestCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/DepSpecial/DeleteDepSpecial?${vestCode ? 'vestCode=' + vestCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeDepSpecialGetDepSpecialByUser = (vestCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/DepSpecial/GetDepSpecialByUser?${vestCode ? 'vestCode=' + vestCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeDepSpecialGetDepSpecialList = <RNU extends (keyof AT_DepSpecialListModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_DepSpecialListModel, RNU>[]>>(
		`/${FirmCode}/DepSpecial/GetDepSpecialList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeDispatchAuthorizationDispatchPageAuthorizationToUser = <NUDATA extends (keyof AT_DispatchAuthorizationToUserModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DispatchAuthorizationToUserModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/DispatchAuthorization/DispatchPageAuthorizationToUser?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeDispatchAuthorizationDispatchPopupAuthorizationToUser = <NUDATA extends (keyof AT_DispatchAuthorizationToUserModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DispatchAuthorizationToUserModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/DispatchAuthorization/DispatchPopupAuthorizationToUser?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeDispatchAuthorizationDispatchPageAuthorizationToRole = <NUDATA extends (keyof AT_DispatchAuthorizationToRoleModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DispatchAuthorizationToRoleModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/DispatchAuthorization/DispatchPageAuthorizationToRole?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeDispatchAuthorizationDispatchPopupAuthorizationToRole = <NUDATA extends (keyof AT_DispatchAuthorizationToRoleModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DispatchAuthorizationToRoleModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/DispatchAuthorization/DispatchPopupAuthorizationToRole?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowEmployGetEmployApproveById = <RNU extends (keyof AT_EmployViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_EmployViewModel, RNU>>>(
		`/${FirmCode}/flow/Employ/GetEmployApproveById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowEmployGetEmployApproveByFlowId = <RNU extends (keyof AT_FlowModelEmployViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelEmployViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Employ/GetEmployApproveByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowEmployDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmployPendingAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmployRejectAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmployDynamicRejectAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmployResetAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmploySaveDraft = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmploySubmitAudit = <NUDATA extends (keyof AT_FlowEmployApproveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowEmployApproveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Employ/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowEmployDeleteEmploy = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Employ/DeleteEmploy?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowEmployGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Employ/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowEmployGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Employ/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeEmployeeBirthdayGetEmployeeBirthdayToPage = <
	RNU extends (keyof AT_EmployeeBirthdayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EmployeeBirthdayQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_EmployeeBirthdayQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_EmployeeBirthdayPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/EmployeeBirthday/GetEmployeeBirthdayToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeEntryManageGetEntryManageById = <RNU extends (keyof AT_EntryManageViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_EntryManageViewModel, RNU>>>(
		`/${FirmCode}/EntryManage/GetEntryManageById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeEntryManageGetEntryManegeToPage = <
	RNU extends (keyof AT_EntryManagePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_EntryManegeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_EntryManegeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_EntryManagePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/EntryManage/GetEntryManegeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeEntryManageToPersonnel = (id: any, popupKey: any, salaryPopupKey: any, employPopupKey: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/EntryManage/ToPersonnel?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}&${
			salaryPopupKey ? 'salaryPopupKey=' + salaryPopupKey : ''
		}&${employPopupKey ? 'employPopupKey=' + employPopupKey : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeEntryManageUpdateEntryManage = <NUDATA extends (keyof AT_EntryManageModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_EntryManageModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/EntryManage/UpdateEntryManage?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeEntryManageUnemployed = <NUDATA extends (keyof AT_UnemployedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_UnemployedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/EntryManage/Unemployed?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeEntryManageConfirmEnrollment = <NUDATA extends (keyof AT_ConfirmEnrollmentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ConfirmEnrollmentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/EntryManage/ConfirmEnrollment?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeFaceTalkSubmitFaceTalk = <NUDATA extends (keyof AT_FaceTalkModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FaceTalkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/FaceTalk/SubmitFaceTalk?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeFaceTalkGetFaceTalkById = <RNU extends (keyof AT_FaceTalkViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FaceTalkViewModel, RNU>>>(
		`/${FirmCode}/FaceTalk/GetFaceTalkById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeFaceTalkGetFaceTalkToPage = <
	RNU extends (keyof AT_FaceTalkPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FaceTalkQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FaceTalkQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FaceTalkPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FaceTalk/GetFaceTalkToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeFirmGetFirmInfo = <RNU extends (keyof AT_FirmModel)[] = []>(fmCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FirmModel, RNU>>>(
		`/${FirmCode}/Firm/GetFirmInfo?${fmCode ? 'fmCode=' + fmCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeFirmGetFirmDepChecker = <RNU extends (keyof AT_FirmDepCheckerModel)[] = []>(fmCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FirmDepCheckerModel, RNU>[]>>(
		`/${FirmCode}/Firm/GetFirmDepChecker?${fmCode ? 'fmCode=' + fmCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeFirmUpdateFirm = <NUDATA extends (keyof AT_FirmModel)[] = []>(FirmCode: any, data: U_I_NoNull<AT_FirmModel, NUDATA>) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Firm/UpdateFirm?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeFirmGetFirmToPage = <
	RNU extends (keyof AT_FirmPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FirmQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FirmQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FirmPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Firm/GetFirmToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFirmAdminiBindAccountToStaff = <NUDATA extends (keyof AT_AccountToStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_AccountToStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/FirmAdmini/BindAccountToStaff?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeFirmAdminiUnBindAccountToStaff = (barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/FirmAdmini/UnBindAccountToStaff?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeFirmAdminiGetAccountManagerToPage = <
	RNU extends (keyof AT_AccountManagerPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_AccountManagerQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_AccountManagerQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_AccountManagerPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FirmAdmini/GetAccountManagerToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeFirmAdminiGetAccountManager = <RNU extends (keyof AT_AccountManagerModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_AccountManagerModel, RNU>>>(
		`/${FirmCode}/FirmAdmini/GetAccountManager?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowFlowBaseApiGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/FlowBaseApi/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowFlowBaseApiGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/FlowBaseApi/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeFlowListGetFlowListToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowListQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowListQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowList/GetFlowListToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFlowListGetFlowAuditingToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowAuditingQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAuditingQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowList/GetFlowAuditingToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFlowListGetProxyFlowAuditingToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowAuditingQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowAuditingQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowList/GetProxyFlowAuditingToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFlowListGetMyRejectFlowListToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowListQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowListQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowList/GetMyRejectFlowListToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFlowListGetMyDraftFlowListToPage = <
	RNU extends (keyof AT_FlowListViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowListQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowListQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowListViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowList/GetMyDraftFlowListToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeFlowManagerMergeFlowType = <NUDATA extends (keyof AT_FlowTypeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTypeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/FlowManager/MergeFlowType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeFlowManagerRemoveFlowType = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/FlowManager/RemoveFlowType?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodeFlowManagerGetFlowTypeToPage = <
	RNU extends (keyof AT_FlowTypeViewModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FlowTypeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTypeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_FlowTypeViewModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/FlowManager/GetFlowTypeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeFlowManagerGetFlowTypeInfo = <RNU extends (keyof AT_FlowTypeInfoModel)[] = []>(flowTypeId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowTypeInfoModel, RNU>>>(
		`/${FirmCode}/FlowManager/GetFlowTypeInfo?${flowTypeId ? 'flowTypeId=' + flowTypeId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeFlowManagerGetFlowAuditObj = <RNU extends (keyof AT_KeyValueIntModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntModel, RNU>[]>>(
		`/${FirmCode}/FlowManager/GetFlowAuditObj?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeFlowManagerGetAllFlowAuditObj = <RNU extends (keyof AT_FlowAuditObjModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowAuditObjModel, RNU>[]>>(
		`/${FirmCode}/FlowManager/GetAllFlowAuditObj?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeFlowManagerFlowLinkPopup = <NUDATA extends (keyof AT_FlowPopupModel)[] = []>(
	routeId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPopupModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/FlowManager/FlowLinkPopup?${routeId ? 'routeId=' + routeId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeFlowManagerGetFlowLinkPopupByRouteId = <RNU extends (keyof AT_FlowLinkPopupViewModel)[] = []>(
	routeId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowLinkPopupViewModel, RNU>>>(
		`/${FirmCode}/FlowManager/GetFlowLinkPopupByRouteId?${routeId ? 'routeId=' + routeId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeHelpNotesGetHelpNotesByComponent = <RNU extends (keyof AT_HelpNotesViewModel)[] = []>(component: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_HelpNotesViewModel, RNU>>>(
		`/${FirmCode}/HelpNotes/GetHelpNotesByComponent?${component ? 'component=' + component : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeHelpNotesAddOrUpdateHelpNotes = <NUDATA extends (keyof AT_HelpNotesModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_HelpNotesModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/HelpNotes/AddOrUpdateHelpNotes?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeHolidayGetHolidayToPage = <
	RNU extends (keyof AT_HolidayPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_HolidayQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_HolidayQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_HolidayPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Holiday/GetHolidayToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeHolidayAddUpdateHoliday = <NUDATA extends (keyof AT_HolidayModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_HolidayModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Holiday/AddUpdateHoliday?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeHolidayGetHolidayById = <RNU extends (keyof AT_HolidayViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_HolidayViewModel, RNU>>>(
		`/${FirmCode}/Holiday/GetHolidayById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeHomePageRollPicDeleteHomePageRollPic = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/HomePageRollPic/DeleteHomePageRollPic?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeHomePageRollPicGetAllHomePageRollPicById = <RNU extends (keyof AT_HomePageRollPicViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_HomePageRollPicViewModel, RNU>[]>>(
		`/${FirmCode}/HomePageRollPic/GetAllHomePageRollPicById?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeHomePageRollPicUpdateHomePageRollPic = <NUDATA extends (keyof AT_UpDateHomePageRollPicModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_UpDateHomePageRollPicModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/HomePageRollPic/UpdateHomePageRollPic?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeHotelAddHotel = <NUDATA extends (keyof AT_HotelModel)[] = []>(FirmCode: any, data: U_I_NoNull<AT_HotelModel, NUDATA>) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Hotel/AddHotel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeHotelUpdateHotel = <NUDATA extends (keyof AT_HotelModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_HotelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Hotel/UpdateHotel?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeHotelRemoveHotel = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Hotel/RemoveHotel?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeHotelGetHotelById = <RNU extends (keyof AT_HotelViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_HotelViewModel, RNU>>>(
		`/${FirmCode}/Hotel/GetHotelById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeHotelGeHotelToPage = <
	RNU extends (keyof AT_HotelPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_HotelQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_HotelQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_HotelPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Hotel/GeHotelToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeHotelBatchExportHotel = <NUDATA extends (keyof AT_HotelQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_HotelQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Hotel/BatchExportHotel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowInternshipUpGetInternshipUpByFlowId = <RNU extends (keyof AT_FlowModelInternshipUpDetailsModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelInternshipUpDetailsModelTuple, RNU>>>(
		`/${FirmCode}/flow/InternshipUp/GetInternshipUpByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowInternshipUpGetInternshipUpByBarCode = <RNU extends (keyof AT_InternshipUpDetailsModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InternshipUpDetailsModel, RNU>>>(
		`/${FirmCode}/flow/InternshipUp/GetInternshipUpByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowInternshipUpUpdateTryoutPost = <NUDATA extends (keyof AT_TryoutPostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TryoutPostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/UpdateTryoutPost?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpPendingAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpRejectAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpDynamicRejectAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpResetAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpSaveDraft = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpSubmitAudit = <NUDATA extends (keyof AT_FlowInternshipUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowInternshipUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/InternshipUp/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowInternshipUpDeleteInternshipUp = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/InternshipUp/DeleteInternshipUp?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowInternshipUpGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/InternshipUp/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowInternshipUpGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/InternshipUp/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeInterviewEvaluateMergeInterviewEvaluate = <NUDATA extends (keyof AT_InterviewEvaluateModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InterviewEvaluateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewEvaluate/MergeInterviewEvaluate?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeInterviewEvaluateGetInterviewEvaluateDemandByPostCode = <RNU extends (keyof AT_InterviewEvaluateDemandModel)[] = []>(
	postCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewEvaluateDemandModel, RNU>[]>>(
		`/${FirmCode}/InterviewEvaluate/GetInterviewEvaluateDemandByPostCode?${postCode ? 'postCode=' + postCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeInterviewEvaluateGetInterviewPlanDepCodeList = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(
	interviewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/InterviewEvaluate/GetInterviewPlanDepCodeList?${interviewId ? 'interviewId=' + interviewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeInterviewEvaluateGetInterviewPlanPostCodeList = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(
	interviewId: any,
	depCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/InterviewEvaluate/GetInterviewPlanPostCodeList?${interviewId ? 'interviewId=' + interviewId : ''}&${
			depCode ? 'depCode=' + depCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeInterviewEvaluateGetInterviewEvaluateByInterviewId = <RNU extends (keyof AT_InterviewEvaluateViewModel)[] = []>(
	interviewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewEvaluateViewModel, RNU>>>(
		`/${FirmCode}/InterviewEvaluate/GetInterviewEvaluateByInterviewId?${interviewId ? 'interviewId=' + interviewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeInterviewManegeGetInterviewById = <RNU extends (keyof AT_InterviewViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewViewModel, RNU>>>(
		`/${FirmCode}/InterviewManege/GetInterviewById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeInterviewManegeGetInterviewResultById = <RNU extends (keyof AT_InterviewResultViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewResultViewModel, RNU>>>(
		`/${FirmCode}/InterviewManege/GetInterviewResultById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeInterviewManegeInterviewResult = <NUDATA extends (keyof AT_InterviewResultModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InterviewResultModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewManege/InterviewResult?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeInterviewManegeGetBackToTheById = <RNU extends (keyof AT_BackToTheViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_BackToTheViewModel, RNU>>>(
		`/${FirmCode}/InterviewManege/GetBackToTheById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeInterviewManegeBackToThe = <NUDATA extends (keyof AT_BackToTheModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BackToTheModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewManege/BackToThe?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeInterviewManegeRefuseEmploy = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewManege/RefuseEmploy?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodeInterviewManegeGetInterviewManegeToPage = <
	RNU extends (keyof AT_InterviewManegePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_InterviewManegeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_InterviewManegeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_InterviewManegePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/InterviewManege/GetInterviewManegeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeInterviewPlanGetInterviewPlanByInterviewId = <RNU extends (keyof AT_InterviewPlanViewModel)[] = []>(
	interviewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewPlanViewModel, RNU>>>(
		`/${FirmCode}/InterviewPlan/GetInterviewPlanByInterviewId?${interviewId ? 'interviewId=' + interviewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeInterviewPlanMergeInterviewPlan = <NUDATA extends (keyof AT_MergeInterviewPlanModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MergeInterviewPlanModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewPlan/MergeInterviewPlan?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeInterviewPlanGetInterviewDetailsByInterviewId = <RNU extends (keyof AT_InterviewDetailsModel)[] = []>(
	interviewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewDetailsModel, RNU>>>(
		`/${FirmCode}/InterviewPlan/GetInterviewDetailsByInterviewId?${interviewId ? 'interviewId=' + interviewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeInterviewTranscriptGetInterviewTranscriptByInterViewId = <RNU extends (keyof AT_InterviewTranscriptViewModel)[] = []>(
	InterViewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InterviewTranscriptViewModel, RNU>>>(
		`/${FirmCode}/InterviewTranscript/GetInterviewTranscriptByInterViewId?${InterViewId ? 'InterViewId=' + InterViewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeInterviewTranscriptMergeInterviewTranscript = <NUDATA extends (keyof AT_InterviewTranscriptModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InterviewTranscriptModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/InterviewTranscript/MergeInterviewTranscript?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveGetLeaveToPage = <
	RNU extends (keyof AT_LeavePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LeaveQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_LeaveQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_LeavePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Leave/GetLeaveToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowLeaveGetLeaveByUser = <RNU extends (keyof AT_GetLeaveByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetLeaveByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Leave/GetLeaveByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowLeaveDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeavePendingAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveRejectAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveResetAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveSaveDraft = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveSubmitAudit = <NUDATA extends (keyof AT_FlowLeaveModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Leave/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowLeaveGetLeaveByFlowId = <RNU extends (keyof AT_FlowModelLeaveViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLeaveViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Leave/GetLeaveByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLeaveGetLeaveById = <RNU extends (keyof AT_LeaveViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_LeaveViewModel, RNU>>>(
		`/${FirmCode}/flow/Leave/GetLeaveById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLeaveSearchHolidayTypeByApplyUser = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(
	applyUser: any,
	year: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/flow/Leave/SearchHolidayTypeByApplyUser?${applyUser ? 'applyUser=' + applyUser : ''}&${year ? 'year=' + year : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLeaveSearchStaffInfoByDepCode = <RNU extends (keyof AT_StaffInfo)[] = []>(barCode: any, depCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/flow/Leave/SearchStaffInfoByDepCode?${barCode ? 'barCode=' + barCode : ''}&${depCode ? 'depCode=' + depCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLeaveGetCumulativeTimeout = (barCode: any, holidayId: any, duration: any, year: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/flow/Leave/GetCumulativeTimeout?${barCode ? 'barCode=' + barCode : ''}&${holidayId ? 'holidayId=' + holidayId : ''}&${
			duration ? 'duration=' + duration : ''
		}&${year ? 'year=' + year : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLeaveGetLeaveDuration = (holidayId: any, startTime: any, endTime: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/flow/Leave/GetLeaveDuration?${holidayId ? 'holidayId=' + holidayId : ''}&${startTime ? 'startTime=' + startTime : ''}&${
			endTime ? 'endTime=' + endTime : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowLeaveDeleteLeaveByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Leave/DeleteLeaveByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLeaveGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Leave/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLeaveGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Leave/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowLeaveDestroyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroyPendingAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroyRejectAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroyResetAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroySaveDraft = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLeaveDestroySubmitAudit = <NUDATA extends (keyof AT_FlowLeaveDestroyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLeaveDestroyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LeaveDestroy/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowLeaveDestroyGetLeaveDestroyByFlowId = <RNU extends (keyof AT_FlowModelLeaveViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLeaveViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/LeaveDestroy/GetLeaveDestroyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowLeaveDestroyDeleteLeaveDestroyByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/LeaveDestroy/DeleteLeaveDestroyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLeaveDestroyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/LeaveDestroy/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLeaveDestroyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/LeaveDestroy/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLevelGetLevelByCode = <RNU extends (keyof AT_FlowModelLevelViewModelTuple)[] = []>(
	levelCode: any,
	popupKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLevelViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Level/GetLevelByCode?${levelCode ? 'levelCode=' + levelCode : ''}&${popupKey ? 'popupKey=' + popupKey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLevelGetLevelByFlowId = <RNU extends (keyof AT_FlowModelLevelViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLevelViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Level/GetLevelByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLevelGetLevelById = <RNU extends (keyof AT_FlowModelLevelViewModelTuple)[] = []>(
	id: any,
	popupKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLevelViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Level/GetLevelById?${id ? 'id=' + id : ''}&${popupKey ? 'popupKey=' + popupKey : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowLevelDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelPendingAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelRejectAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelSaveDraft = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelSubmitAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetAudit = <NUDATA extends (keyof AT_FlowLevelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Level/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelGetLevelToPage = <
	RNU extends (keyof AT_LevelPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LevelQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_LevelQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_LevelPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Level/GetLevelToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowLevelGetCancelLevelToPage = <
	RNU extends (keyof AT_CancelLevelPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CancelLevelQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CancelLevelQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CancelLevelPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Level/GetCancelLevelToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowLevelGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Level/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLevelGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Level/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowLevelResetFlowGetLevelResetFlowToPage = <
	RNU extends (keyof AT_LevelResetFlowPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_LevelResetFlowQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_LevelResetFlowQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_LevelResetFlowPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/LevelResetFlow/GetLevelResetFlowToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowLevelResetFlowDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowPendingAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowRejectAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowDynamicRejectAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowResetAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowSaveDraft = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowLevelResetFlowSubmitAudit = <NUDATA extends (keyof AT_FlowLevelResetFlowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowLevelResetFlowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/LevelResetFlow/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowLevelResetFlowGetLevelResetFlowByFlowId = <RNU extends (keyof AT_FlowModelLevelResetFlowViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelLevelResetFlowViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/LevelResetFlow/GetLevelResetFlowByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowLevelResetFlowDeleteLevelResetFlow = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/LevelResetFlow/DeleteLevelResetFlow?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowLevelResetFlowGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/LevelResetFlow/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowLevelResetFlowGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/LevelResetFlow/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getLoadGetCurrentUserAllFirm = <RNU extends (keyof AT_UserFirm)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_UserFirm, RNU>[]>>(`/Load/GetCurrentUserAllFirm`);
};
export const postFirmCodeMasterCardBagGetMasterCardBagToPage = <
	RNU extends (keyof AT_MasterCardBagPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MasterCardBagQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MasterCardBagQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MasterCardBagPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MasterCardBag/GetMasterCardBagToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeMasterCardBagSaveMasterCardBag = <NUDATA extends (keyof AT_MasterCardBagModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MasterCardBagModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/MasterCardBag/SaveMasterCardBag?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeMasterCardBagGetMasterCardBagById = <RNU extends (keyof AT_MasterCardBagModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MasterCardBagModel, RNU>>>(
		`/${FirmCode}/MasterCardBag/GetMasterCardBagById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeMasterCardBagGetMasterCardBagByCardCode = <RNU extends (keyof AT_MasterCardBagModel)[] = []>(
	cardCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MasterCardBagModel, RNU>>>(
		`/${FirmCode}/MasterCardBag/GetMasterCardBagByCardCode?${cardCode ? 'cardCode=' + cardCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeMasterCardBagSearchCardNoByCardType = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(
	cardType: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/MasterCardBag/SearchCardNoByCardType?${cardType ? 'cardType=' + cardType : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMasterCardRechargeApplyGetMasterCardRechargeApplyToPage = <
	RNU extends (keyof AT_MasterCardRechargeApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MasterCardRechargeApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MasterCardRechargeApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MasterCardRechargeApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/GetMasterCardRechargeApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMasterCardRechargeApplyGetMasterCardRechargeApplyByUser = <
	RNU extends (keyof AT_GetMasterCardRechargeApplyByUserModel)[] = [],
>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetMasterCardRechargeApplyByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/GetMasterCardRechargeApplyByUser?${barCode ? 'barCode=' + barCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowMasterCardRechargeApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMasterCardRechargeApplyPendingAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MasterCardRechargeApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMasterCardRechargeApplyRejectAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MasterCardRechargeApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMasterCardRechargeApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMasterCardRechargeApplyResetAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MasterCardRechargeApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMasterCardRechargeApplySaveDraft = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MasterCardRechargeApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMasterCardRechargeApplySubmitAudit = <NUDATA extends (keyof AT_FlowMasterCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMasterCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MasterCardRechargeApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowMasterCardRechargeApplyGetMasterCardRechargeApplyByFlowId = <
	RNU extends (keyof AT_FlowModelMasterCardRechargeApplyViewModelTuple)[] = [],
>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMasterCardRechargeApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/GetMasterCardRechargeApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowMasterCardRechargeApplySaveMasterCardRechargeFinish = <NUDATA extends (keyof AT_MasterCardRechargeFinishModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MasterCardRechargeFinishModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/SaveMasterCardRechargeFinish?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMasterCardRechargeApplyDeleteMasterCardRechargeApply = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/DeleteMasterCardRechargeApply?${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMasterCardRechargeApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMasterCardRechargeApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MasterCardRechargeApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeMaterialGetMaterialById = <RNU extends (keyof AT_MaterialViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialViewModel, RNU>>>(
		`/${FirmCode}/Material/GetMaterialById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeMaterialGetMaterialAttachmentByMaterialCode = <RNU extends (keyof AT_MaterialAttachmentModel)[] = []>(
	materialCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialAttachmentModel, RNU>[]>>(
		`/${FirmCode}/Material/GetMaterialAttachmentByMaterialCode?${materialCode ? 'materialCode=' + materialCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeMaterialSubmitMaterial = <NUDATA extends (keyof AT_MaterialModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Material/SubmitMaterial?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeMaterialGetMaterialToPage = <
	RNU extends (keyof AT_MaterialPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Material/GetMaterialToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialAllocationGetMaterialAllocationByFlowId = <
	RNU extends (keyof AT_FlowModelMaterialAllocationViewModelTuple)[] = [],
>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialAllocationViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocation/GetMaterialAllocationByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialAllocationDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationPendingAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationRejectAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationResetAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationSaveDraft = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocation/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGetMaterialAllocationToPage = <
	RNU extends (keyof AT_MaterialAllocationPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialAllocationQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialAllocationQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialAllocationPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocation/GetMaterialAllocationToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialAllocationGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocation/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialAllocationGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialAllocation/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialAllocationGrantGetMaterialAllocationGrantByFlowId = <
	RNU extends (keyof AT_FlowModelMaterialAllocationGrantViewModelTuple)[] = [],
>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialAllocationGrantViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/GetMaterialAllocationGrantByFlowId?${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowMaterialAllocationGrantDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMaterialAllocationGrantPendingAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocationGrant/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGrantRejectAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocationGrant/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGrantDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMaterialAllocationGrantResetAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocationGrant/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGrantSaveDraft = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocationGrant/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGrantSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialAllocationGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialAllocationGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialAllocationGrant/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialAllocationGrantGetMaterialAllocationGrantToPage = <
	RNU extends (keyof AT_MaterialAllocationGrantPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialAllocationGrantQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialAllocationGrantQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialAllocationGrantPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/GetMaterialAllocationGrantToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialAllocationGrantGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialAllocationGrantGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialAllocationGrant/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialApplyGetMaterialApplyByFlowId = <RNU extends (keyof AT_FlowModelMaterialApplyViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialApply/GetMaterialApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowMaterialApplyGetMaterialApplyById = <RNU extends (keyof AT_MaterialApplyViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialApplyViewModel, RNU>>>(
		`/${FirmCode}/flow/MaterialApply/GetMaterialApplyById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialApplyDeleteMaterialApplyByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialApply/DeleteMaterialApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialApplyMaterialApplyCancel = <NUDATA extends (keyof AT_MaterialApplyCancelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialApplyCancelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/MaterialApplyCancel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyPendingAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyRejectAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyResetAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplySaveDraft = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplySubmitAudit = <NUDATA extends (keyof AT_FlowMaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialApplyGetMaterialApplyToPage = <
	RNU extends (keyof AT_MaterialApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialApply/GetMaterialApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialApplyGetMaterialApplyByUser = <RNU extends (keyof AT_GetMaterialApplyByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetMaterialApplyByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialApply/GetMaterialApplyByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowMaterialApplyGetReviewMaterialApplyByUser = <RNU extends (keyof AT_MaterialApplySimpleModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialApplySimpleModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialApply/GetReviewMaterialApplyByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialApplySaveMaterialApplySelfPurchase = <NUDATA extends (keyof AT_MaterialApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialApply/SaveMaterialApplySelfPurchase?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialCheckGetMaterialCheckByFlowId = <RNU extends (keyof AT_FlowModelMaterialCheckViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialCheckViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialCheck/GetMaterialCheckByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialCheckDeleteMaterialCheckByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialCheck/DeleteMaterialCheckByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialCheckDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckPendingAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckRejectAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckResetAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckSaveDraft = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialCheckModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialCheck/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialCheckGetMaterialCheckToPage = <
	RNU extends (keyof AT_MaterialCheckPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialCheckQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialCheckQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialCheckPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialCheck/GetMaterialCheckToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialCheckGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialCheck/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialCheckGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialCheck/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialGrantGetMaterialGrantByFlowId = <RNU extends (keyof AT_FlowModelMaterialGrantViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialGrantViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialGrant/GetMaterialGrantByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialGrantDeleteMaterialGrantByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialGrant/DeleteMaterialGrantByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialGrantDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantPendingAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantRejectAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantResetAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantSaveDraft = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialGrantModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialGrantModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantGetMaterialGrantToPage = <
	RNU extends (keyof AT_MaterialGrantPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialGrantQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialGrantQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialGrantPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialGrant/GetMaterialGrantToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMaterialGrantBatchMaterialGrant = <NUDATA extends (keyof AT_MaterialGrantQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialGrantQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialGrant/BatchMaterialGrant?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialGrantGetMaterialGrantSelfToPage = <
	RNU extends (keyof AT_MaterialGrantSelfPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialGrantSelfQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialGrantSelfQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialGrantSelfPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialGrant/GetMaterialGrantSelfToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialGrantGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialGrant/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialGrantGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialGrant/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialNeedGetMaterialNeedByFlowId = <RNU extends (keyof AT_FlowModelMaterialNeedViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialNeedViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialNeed/GetMaterialNeedByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialNeedDeleteMaterialNeedByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialNeed/DeleteMaterialNeedByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialNeedDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedPendingAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedRejectAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedResetAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedSaveDraft = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialNeedModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialNeedModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialNeed/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialNeedGetMaterialNeedToPage = <
	RNU extends (keyof AT_MaterialNeedPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialNeedQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialNeedQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialNeedPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialNeed/GetMaterialNeedToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialNeedGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialNeed/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialNeedGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialNeed/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialPurchaseGetMaterialPurchaseByFlowId = <RNU extends (keyof AT_FlowModelMaterialPurchaseViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialPurchaseViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialPurchase/GetMaterialPurchaseByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialPurchaseDeleteMaterialPurchaseByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialPurchase/DeleteMaterialPurchaseByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialPurchaseDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchasePendingAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseRejectAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseResetAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseSaveDraft = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialPurchaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialPurchaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialPurchase/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialPurchaseGetMaterialPurchaseToPage = <
	RNU extends (keyof AT_MaterialPurchasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialPurchaseQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialPurchaseQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialPurchasePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialPurchase/GetMaterialPurchaseToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialPurchaseGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialPurchase/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialPurchaseGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialPurchase/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeMaterialPurposeSubmitMaterialPurpose = <NUDATA extends (keyof AT_MaterialPurposeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialPurposeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/MaterialPurpose/SubmitMaterialPurpose?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeMaterialPurposeGetMaterialPurposeById = <RNU extends (keyof AT_MaterialPurposeModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialPurposeModel, RNU>>>(
		`/${FirmCode}/MaterialPurpose/GetMaterialPurposeById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeMaterialPurposeGetMaterialPurposeToPage = <
	RNU extends (keyof AT_MaterialPurposePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialPurposeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialPurposeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialPurposePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialPurpose/GetMaterialPurposeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialReturnGetMaterialReturnByFlowId = <RNU extends (keyof AT_FlowModelMaterialReturnViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMaterialReturnViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/MaterialReturn/GetMaterialReturnByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialReturnDeleteMaterialReturnByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/MaterialReturn/DeleteMaterialReturnByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMaterialReturnDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnPendingAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnRejectAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnResetAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnSaveDraft = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnSubmitAudit = <NUDATA extends (keyof AT_FlowMaterialReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMaterialReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/MaterialReturn/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMaterialReturnGetMaterialReturnToPage = <
	RNU extends (keyof AT_MaterialReturnPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialReturnQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialReturnQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialReturnPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/MaterialReturn/GetMaterialReturnToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMaterialReturnGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/MaterialReturn/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMaterialReturnGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/MaterialReturn/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeMaterialShoppingGetMaterialShoppingToPage = <
	RNU extends (keyof AT_MaterialShoppingPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialShoppingQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialShoppingQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialShoppingPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialShopping/GetMaterialShoppingToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeMaterialStockGetMaterialStockBatchNo = <RNU extends (keyof AT_MaterialStockBatchNoModel)[] = []>(
	materialCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialStockBatchNoModel, RNU>[]>>(
		`/${FirmCode}/MaterialStock/GetMaterialStockBatchNo?${materialCode ? 'materialCode=' + materialCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeMaterialStockGetMaterialStockToPage = <
	RNU extends (keyof AT_MaterialStockPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialStockQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialStockQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialStockPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialStock/GetMaterialStockToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeMaterialStockGetMaterialStockInOutToPage = <
	RNU extends (keyof AT_MaterialStockInOutPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialStockInOutQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialStockInOutQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialStockInOutPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialStock/GetMaterialStockInOutToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeMaterialSupplierGetMaterialSupplierById = <RNU extends (keyof AT_MaterialSupplierViewModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialSupplierViewModel, RNU>>>(
		`/${FirmCode}/MaterialSupplier/GetMaterialSupplierById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeMaterialSupplierSubmitMaterialSupplier = <NUDATA extends (keyof AT_MaterialSupplierModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialSupplierModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/MaterialSupplier/SubmitMaterialSupplier?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeMaterialSupplierGetMaterialSupplierToPage = <
	RNU extends (keyof AT_MaterialSupplierPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialSupplierQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialSupplierQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialSupplierPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialSupplier/GetMaterialSupplierToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeMaterialTypeSubmitMaterialType = <NUDATA extends (keyof AT_MaterialTypeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialTypeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/MaterialType/SubmitMaterialType?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeMaterialTypeGetMaterialTypeById = <RNU extends (keyof AT_MaterialTypeModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MaterialTypeModel, RNU>>>(
		`/${FirmCode}/MaterialType/GetMaterialTypeById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeMaterialTypeGetMaterialTypeToPage = <
	RNU extends (keyof AT_MaterialTypePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MaterialTypeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MaterialTypeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MaterialTypePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MaterialType/GetMaterialTypeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMeetGetMeetByFlowId = <RNU extends (keyof AT_FlowModelMeetViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelMeetViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Meet/GetMeetByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMeetDeleteMeetFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Meet/DeleteMeetFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowMeetGetHandleMeetSchedule = <
	RNU extends (keyof AT_MeetScheduleViewModel)[] = [],
	NUDATA extends (keyof AT_ScheduleQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ScheduleQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MeetScheduleViewModel, RNU>[]>>(
		`/${FirmCode}/flow/Meet/GetHandleMeetSchedule?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMeetGetMeetSchedule = <
	RNU extends (keyof AT_MeetSimpleModel)[] = [],
	NUDATA extends (keyof AT_ScheduleQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ScheduleQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MeetSimpleModel, RNU>[]>>(
		`/${FirmCode}/flow/Meet/GetMeetSchedule?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowMeetMeetFollow = <NUDATA extends (keyof AT_MeetFollowModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MeetFollowModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/MeetFollow?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetMeetCancel = <NUDATA extends (keyof AT_MeetCancelModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MeetCancelModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/MeetCancel?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetPendingAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetRejectAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetDynamicRejectAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetSaveDraft = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetSubmitAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetResetAudit = <NUDATA extends (keyof AT_FlowMeetModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowMeetModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Meet/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowMeetGetMeetToPage = <
	RNU extends (keyof AT_MeetPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MeetQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MeetQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MeetPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Meet/GetMeetToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowMeetGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Meet/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowMeetGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Meet/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeMeetRoomGetMeetRoomById = <RNU extends (keyof AT_MeetViewRoomModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_MeetViewRoomModel, RNU>>>(
		`/${FirmCode}/MeetRoom/GetMeetRoomById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeMeetRoomSubmitMeetRoom = <NUDATA extends (keyof AT_MeetRoomModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MeetRoomModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/MeetRoom/SubmitMeetRoom?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeMeetRoomGetMeetRoomToPage = <
	RNU extends (keyof AT_MeetRoomPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_MeetRoomQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_MeetRoomQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_MeetRoomPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/MeetRoom/GetMeetRoomToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeNewsletterAddNewsletter = <NUDATA extends (keyof AT_NewsletterModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_NewsletterModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Newsletter/AddNewsletter?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeNewsletterUpdateNewsletter = <NUDATA extends (keyof AT_NewsletterModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_NewsletterModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Newsletter/UpdateNewsletter?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeNewsletterRemoveNewsletter = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Newsletter/RemoveNewsletter?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeNewsletterGetNewsletterById = <RNU extends (keyof AT_NewsletterViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_NewsletterViewModel, RNU>>>(
		`/${FirmCode}/Newsletter/GetNewsletterById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeNewsletterGetNewsletterToPage = <
	RNU extends (keyof AT_NewsletterPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_NewsletterQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_NewsletterQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_NewsletterPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Newsletter/GetNewsletterToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowNoticeGetNoticeToPage = <
	RNU extends (keyof AT_NoticePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_NoticeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_NoticeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_NoticePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Notice/GetNoticeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowNoticeDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticePendingAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeRejectAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeDynamicRejectAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeResetAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeSaveDraft = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeSubmitAudit = <NUDATA extends (keyof AT_FlowNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowNoticeGetNoticeByFlowId = <RNU extends (keyof AT_FlowModelNoticesViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelNoticesViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Notice/GetNoticeByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowNoticeSaveNotice = <NUDATA extends (keyof AT_SaveNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SaveNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/SaveNotice?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticePublishNotice = <NUDATA extends (keyof AT_SaveNoticeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SaveNoticeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Notice/PublishNotice?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowNoticeDeleteNotice = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Notice/DeleteNotice?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowNoticeGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Notice/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowNoticeGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Notice/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodePersonalIncomeTaxGetPersonalIncomeTaxToPage = <
	RNU extends (keyof AT_PersonalIncomeTaxPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PersonalIncomeTaxQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_PersonalIncomeTaxQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_PersonalIncomeTaxPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/PersonalIncomeTax/GetPersonalIncomeTaxToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodePersonalIncomeTaxSavePersonalIncomeTax = <NUDATA extends (keyof AT_PersonalIncomeTaxModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_PersonalIncomeTaxModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/PersonalIncomeTax/SavePersonalIncomeTax?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodePersonalIncomeTaxDeletePersonalIncomeTax = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/PersonalIncomeTax/DeletePersonalIncomeTax?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodePersonalIncomeTaxGetPersonalIncomeTaxById = <RNU extends (keyof AT_PersonalIncomeTaxModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PersonalIncomeTaxModel, RNU>>>(
		`/${FirmCode}/PersonalIncomeTax/GetPersonalIncomeTaxById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodePersonalReceiptGetPersonalReceiptToPage = <
	RNU extends (keyof AT_PersonalReceiptPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PersonalReceiptQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_PersonalReceiptQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_PersonalReceiptPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/PersonalReceipt/GetPersonalReceiptToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodePersonalReceiptAddPersonalReceipt = <NUDATA extends (keyof AT_PersonalModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_PersonalModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/PersonalReceipt/AddPersonalReceipt?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodePersonalReceiptRemovePersonalReceipt = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/PersonalReceipt/RemovePersonalReceipt?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodePersonSalaryRecordGetPersonSalaryRecord = <
	RNU extends (keyof AT_RowToColumnPageModel)[] = [],
	NUDATA extends (keyof AT_SalaryRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/PersonSalaryRecord/GetPersonSalaryRecord?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodePersonSalaryRecordCheckSalaryCypher = (passWord: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/PersonSalaryRecord/CheckSalaryCypher?${passWord ? 'passWord=' + passWord : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodePersonSalaryRecordUpdateSalaryCypher = (idCard: any, newPassWord: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/PersonSalaryRecord/UpdateSalaryCypher?${idCard ? 'idCard=' + idCard : ''}&${newPassWord ? 'newPassWord=' + newPassWord : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodePersonSalaryRecordCheckSalaryCypherIsExist = (FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/PersonSalaryRecord/CheckSalaryCypherIsExist?${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodePersonSalaryRecordAddSalaryCypher = (passWord: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/PersonSalaryRecord/AddSalaryCypher?${passWord ? 'passWord=' + passWord : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodePopupGetPopup = <RNU extends (keyof AT_PopupViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PopupViewModel, RNU>[]>>(
		`/${FirmCode}/Popup/GetPopup?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodePopupGetBirthdayPopup = <RNU extends (keyof AT_PopupViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_PopupViewModel, RNU>>>(
		`/${FirmCode}/Popup/GetBirthdayPopup?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodePopupPopupRead = <NUDATA extends (keyof AT_PopupReadModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_PopupReadModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Popup/PopupRead?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowPositionGetPositionByFlowId = <RNU extends (keyof AT_FlowModelPositionViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPositionViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Position/GetPositionByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowPositionGetPositionByCode = <RNU extends (keyof AT_FlowModelPositionViewModelTuple)[] = []>(
	positionCode: any,
	popupKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelPositionViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Position/GetPositionByCode?${positionCode ? 'positionCode=' + positionCode : ''}&${popupKey ? 'popupKey=' + popupKey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowPositionDynamicSubmitAudit = <
	RNU extends (keyof AT_ReturnMessage)[] = [],
	NUDATA extends (keyof AT_FlowPositionModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionPendingAudit = <RNU extends (keyof AT_ReturnMessage)[] = [], NUDATA extends (keyof AT_FlowPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionRejectAudit = <RNU extends (keyof AT_ReturnMessage)[] = [], NUDATA extends (keyof AT_FlowPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionDynamicRejectAudit = <
	RNU extends (keyof AT_ReturnMessage)[] = [],
	NUDATA extends (keyof AT_FlowPositionModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionSaveDraft = <RNU extends (keyof AT_ReturnMessage)[] = [], NUDATA extends (keyof AT_FlowPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionSubmitAudit = <RNU extends (keyof AT_ReturnMessage)[] = [], NUDATA extends (keyof AT_FlowPositionModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionResetAudit = <RNU extends (keyof AT_ReturnMessage)[] = [], NUDATA extends (keyof AT_FlowPositionModel)[] = []>(
	positionCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_FlowPositionModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ReturnMessage, RNU>>>(
		`/${FirmCode}/flow/Position/ResetAudit?${positionCode ? 'positionCode=' + positionCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionGetPositionToPage = <
	RNU extends (keyof AT_PositionPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_PositionQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_PositionQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_PositionPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Position/GetPositionToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowPositionGetCancelPositionToPage = <
	RNU extends (keyof AT_CancelPositionPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_CancelPositionQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_CancelPositionQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_CancelPositionPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Position/GetCancelPositionToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowPositionGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Position/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowPositionGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Position/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeProvidentFundGetProvidentFundToPage = <
	RNU extends (keyof AT_ProvidentFundPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ProvidentFundQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ProvidentFundQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ProvidentFundPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/ProvidentFund/GetProvidentFundToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeProvidentFundAddProvidentFund = <NUDATA extends (keyof AT_ProvidentFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ProvidentFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/ProvidentFund/AddProvidentFund?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeProvidentFundUpdateProvidentFund = <NUDATA extends (keyof AT_ProvidentFundModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ProvidentFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/ProvidentFund/UpdateProvidentFund?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeProvidentFundUpdateProvidentFundState = (id: any, state: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/ProvidentFund/UpdateProvidentFundState?${id ? 'id=' + id : ''}&${state ? 'state=' + state : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeProvidentFundBatchUpdateProvidentFundState = (state: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/ProvidentFund/BatchUpdateProvidentFundState?${state ? 'state=' + state : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeProvidentFundGetProvidentFundById = <RNU extends (keyof AT_ProvidentFundViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ProvidentFundViewModel, RNU>>>(
		`/${FirmCode}/ProvidentFund/GetProvidentFundById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeProvidentFundSearchAllOnJobStaffProvidentFund = <RNU extends (keyof AT_StaffInfo)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/ProvidentFund/SearchAllOnJobStaffProvidentFund?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeRecruitCommissionerGetRecruitCommissionerToPage = <
	RNU extends (keyof AT_RecruitCommissionerPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RecruitCommissionerQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RecruitCommissionerQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RecruitCommissionerPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/RecruitCommissioner/GetRecruitCommissionerToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeRecruitCommissionerSaveRecruitCommissioner = <NUDATA extends (keyof AT_RecruitCommissionerModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_RecruitCommissionerModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/RecruitCommissioner/SaveRecruitCommissioner?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeRecruitCommissionerGetRecruitCommissionerById = <RNU extends (keyof AT_RecruitCommissionerViewModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RecruitCommissionerViewModel, RNU>>>(
		`/${FirmCode}/RecruitCommissioner/GetRecruitCommissionerById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeRecruitCommissionerDeleteRecruitCommissioner = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/RecruitCommissioner/DeleteRecruitCommissioner?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeRecruitCommissionerGetRecruitCommissioner = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/RecruitCommissioner/GetRecruitCommissioner?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRecruitmentGetRecruitmentByFlowId = <RNU extends (keyof AT_FlowModelRecruitViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRecruitViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetRecruitmentByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRecruitmentGetRecruitmentById = <RNU extends (keyof AT_RecruitViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RecruitViewModel, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetRecruitmentById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRecruitmentGetRecruitmentByDepPost = <RNU extends (keyof AT_RecruitViewModel)[] = []>(
	depCode: any,
	postCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RecruitViewModel, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetRecruitmentByDepPost?${depCode ? 'depCode=' + depCode : ''}&${postCode ? 'postCode=' + postCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowRecruitmentDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentPendingAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentRejectAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentResetAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentSaveDraft = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentSubmitAudit = <NUDATA extends (keyof AT_FlowRecruitmentDemandModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRecruitmentDemandModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentInitiateRecruitment = (flowId: any, commissioner: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/InitiateRecruitment?${flowId ? 'flowId=' + flowId : ''}&${commissioner ? 'commissioner=' + commissioner : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowRecruitmentImplementCompleted = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/ImplementCompleted?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRecruitmentGetRecruitmentToPage = <
	RNU extends (keyof AT_RecruitmentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RecruitmentQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RecruitmentQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RecruitmentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetRecruitmentToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowRecruitmentGetJobRecruitmentToPage = <
	RNU extends (keyof AT_RecruitmentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RecruitmentQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RecruitmentQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RecruitmentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetJobRecruitmentToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowRecruitmentGetRecruitmentCompletedToPage = <
	RNU extends (keyof AT_RecruitmentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RecruitmentQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RecruitmentQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RecruitmentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetRecruitmentCompletedToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowRecruitmentCheckRecruitmentDemandByDepCodePostCode = (depCode: any, postCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/CheckRecruitmentDemandByDepCodePostCode?${depCode ? 'depCode=' + depCode : ''}&${
			postCode ? 'postCode=' + postCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRecruitmentCompleteRecruitmentByDepCodePostCode = (depCode: any, postCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/CompleteRecruitmentByDepCodePostCode?${depCode ? 'depCode=' + depCode : ''}&${
			postCode ? 'postCode=' + postCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRecruitmentDeleteRecruiMent = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/DeleteRecruiMent?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRecruitmentStopRecruit = <NUDATA extends (keyof AT_StopRecruitModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StopRecruitModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Recruitment/StopRecruit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRecruitmentContinueRecruit = (recruitId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Recruitment/ContinueRecruit?${recruitId ? 'recruitId=' + recruitId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRecruitmentGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Recruitment/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRecruitmentGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Recruitment/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRegulationGetNewRegulationList = <RNU extends (keyof AT_RegulationSimpleModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RegulationSimpleModel, RNU>[]>>(
		`/${FirmCode}/flow/Regulation/GetNewRegulationList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRegulationGetRegulationToPage = <
	RNU extends (keyof AT_RegulationPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RegulationQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RegulationQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RegulationPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Regulation/GetRegulationToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowRegulationDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationPendingAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationRejectAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationResetAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationSaveDraft = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationSubmitAudit = <NUDATA extends (keyof AT_FlowRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowRegulationGetRegulationByFlowId = <RNU extends (keyof AT_FlowModelRegulationViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRegulationViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Regulation/GetRegulationByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRegulationSaveRegulation = <NUDATA extends (keyof AT_SaveRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SaveRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/SaveRegulation?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationPublishRegulation = <NUDATA extends (keyof AT_SaveRegulationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SaveRegulationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Regulation/PublishRegulation?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRegulationChangeIsPublic = (id: any, isPublic: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Regulation/ChangeIsPublic?${id ? 'id=' + id : ''}&${isPublic ? 'isPublic=' + isPublic : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowRegulationDeleteRegulation = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Regulation/DeleteRegulation?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRegulationGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Regulation/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRegulationGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Regulation/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentGetRentByFlowId = <RNU extends (keyof AT_FlowModelRentViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRentViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Rent/GetRentByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentDeleteRentFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Rent/DeleteRentFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentPendingAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentRejectAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentSaveDraft = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentSubmitAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentResetAudit = <NUDATA extends (keyof AT_FlowRentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Rent/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentGetRentToPage = <
	RNU extends (keyof AT_RentPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RentQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RentQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RentPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Rent/GetRentToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowRentGetRentApplyRecordToPage = <
	RNU extends (keyof AT_RentApplyRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RentApplyRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RentApplyRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RentApplyRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Rent/GetRentApplyRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowRentGetRentApplyRecordByUser = <RNU extends (keyof AT_RentApplyRecordByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RentApplyRecordByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Rent/GetRentApplyRecordByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRentGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Rent/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Rent/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentApplyGetRentApplyByFlowId = <RNU extends (keyof AT_FlowModelRentApplyViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRentApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/RentApply/GetRentApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentApplyDeleteRentApplyFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/RentApply/DeleteRentApplyFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplyPendingAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplyRejectAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplySaveDraft = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplySubmitAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentApplyResetAudit = <NUDATA extends (keyof AT_FlowRentApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowRentApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/RentApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/RentApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentOutGetRentOutByFlowId = <RNU extends (keyof AT_FlowModelRentOutViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRentOutViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/RentOut/GetRentOutByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentOutDeleteRentOutFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/RentOut/DeleteRentOutFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRentOutDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutPendingAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutRejectAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutSaveDraft = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutSubmitAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRentOutResetAudit = <NUDATA extends (keyof AT_FlowRentOutModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRentOutModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/RentOut/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowRentOutGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/RentOut/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRentOutGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/RentOut/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowResignGetResignToPage = <
	RNU extends (keyof AT_ResignPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ResignQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResignQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ResignPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Resign/GetResignToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowResignDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignPendingAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignRejectAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDynamicRejectAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignResetAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignSaveDraft = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignSubmitAudit = <NUDATA extends (keyof AT_FlowResignModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Resign/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowResignGetResignByFlowId = <RNU extends (keyof AT_FlowModelResignViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelResignViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Resign/GetResignByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowResignDeleteResign = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Resign/DeleteResign?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowResignGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Resign/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowResignGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Resign/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowResignComplexDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexPendingAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexRejectAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexDynamicRejectAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexResetAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexSaveDraft = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignComplexSubmitAudit = <NUDATA extends (keyof AT_FlowResignComplexModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignComplexModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignComplex/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowResignComplexGetResignComplexByFlowId = <RNU extends (keyof AT_FlowModelResignComplexViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelResignComplexViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/ResignComplex/GetResignComplexByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowResignComplexDeleteResignComplex = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/ResignComplex/DeleteResignComplex?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowResignComplexGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/ResignComplex/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowResignComplexGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/ResignComplex/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowResignDepDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepPendingAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepRejectAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepDynamicRejectAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepResetAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepSaveDraft = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignDepSubmitAudit = <NUDATA extends (keyof AT_FlowResignDepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignDepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignDep/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowResignDepGetResignDepByFlowId = <RNU extends (keyof AT_FlowModelResignDepViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelResignDepViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/ResignDep/GetResignDepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowResignDepDeleteResignDep = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/ResignDep/DeleteResignDep?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowResignDepGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/ResignDep/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowResignDepGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/ResignDep/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowResignFinanceDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinancePendingAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinanceRejectAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinanceDynamicRejectAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinanceResetAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinanceSaveDraft = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignFinanceSubmitAudit = <NUDATA extends (keyof AT_FlowResignFinanceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignFinanceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignFinance/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowResignFinanceGetResignFinanceByFlowId = <RNU extends (keyof AT_FlowModelResignFinanceViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelResignFinanceViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/ResignFinance/GetResignFinanceByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowResignFinanceDeleteResignFinance = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/ResignFinance/DeleteResignFinance?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowResignFinanceGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/ResignFinance/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowResignFinanceGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/ResignFinance/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowResignInfoDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoPendingAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoRejectAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoDynamicRejectAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoResetAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoSaveDraft = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowResignInfoSubmitAudit = <NUDATA extends (keyof AT_FlowResignInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowResignInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/ResignInfo/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowResignInfoGetResignInfoByFlowId = <RNU extends (keyof AT_FlowModelResignInfoViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelResignInfoViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/ResignInfo/GetResignInfoByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowResignInfoDeleteResignInfo = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/ResignInfo/DeleteResignInfo?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowResignInfoGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/ResignInfo/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowResignInfoGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/ResignInfo/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeResumeSubmitResumeBasicInfo = <NUDATA extends (keyof AT_ResumeBasicInfoModel)[] = []>(
	resumeHoldId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeBasicInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/SubmitResumeBasicInfo?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeSubmitResumePurpose = <NUDATA extends (keyof AT_ResumePurposeModel)[] = []>(
	resumeHoldId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumePurposeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/SubmitResumePurpose?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeUpdateResumePurpose = <NUDATA extends (keyof AT_ResumePurposeModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumePurposeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/UpdateResumePurpose?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeBatchAddResumeWork = <NUDATA extends (keyof AT_ResumeWorkModel)[] = []>(
	resumeHoldId: any,
	isHistory: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeWorkModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/BatchAddResumeWork?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${isHistory ? 'isHistory=' + isHistory : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeResumeBatchAddResumeStudy = <NUDATA extends (keyof AT_ResumeStudyModel)[] = []>(
	resumeHoldId: any,
	isHistory: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeStudyModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/BatchAddResumeStudy?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${isHistory ? 'isHistory=' + isHistory : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeResumeSubmitResumeAttachment = <NUDATA extends (keyof AT_ResumeAttachmentSubmitModel)[] = []>(
	resumeHoldId: any,
	updateType: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeAttachmentSubmitModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/SubmitResumeAttachment?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${
			updateType ? 'updateType=' + updateType : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeBatchAddResumeAttachment = <NUDATA extends (keyof AT_ResumeAttachmentModel)[] = []>(
	resumeHoldId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeAttachmentModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/BatchAddResumeAttachment?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeRemoveResumeAttachment = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/RemoveResumeAttachment?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeResumeGetResumeAttachments = <RNU extends (keyof AT_ResumeAttachmentViewModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeAttachmentViewModel, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeAttachments?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeGetResumeWorks = <RNU extends (keyof AT_ResumeWorkViewModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ResumeWorkViewModel, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeWorks?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeUpdateResumeWork = <NUDATA extends (keyof AT_ResumeWorkModel)[] = []>(
	id: any,
	resumeHoldId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeWorkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/UpdateResumeWork?${id ? 'id=' + id : ''}&${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeResumeGetResumeStudys = <RNU extends (keyof AT_ResumeStudyViewModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ResumeStudyViewModel, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeStudys?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeUpdateResumeStudy = <NUDATA extends (keyof AT_ResumeStudyModel)[] = []>(
	id: any,
	resumeHoldId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeStudyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/UpdateResumeStudy?${id ? 'id=' + id : ''}&${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeResumeRemoveResumeWork = (id: any, resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/RemoveResumeWork?${id ? 'id=' + id : ''}&${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeResumeRemoveResumeStudy = (id: any, resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/RemoveResumeStudy?${id ? 'id=' + id : ''}&${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeResumeCheckResume = <
	RNU extends (keyof AT_RetrunResumeCheckModel)[] = [],
	NUDATA extends (keyof AT_ResumeCheckModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeCheckModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RetrunResumeCheckModel, RNU>>>(
		`/${FirmCode}/Resume/CheckResume?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeResumeTalentNoteHandle = <NUDATA extends (keyof AT_ResumeTalentNoteModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeTalentNoteModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Resume/TalentNoteHandle?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeResumeGetResumeTalentNote = <RNU extends (keyof AT_ResumeTalentNoteViewModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeTalentNoteViewModel, RNU>>>(
		`/${FirmCode}/Resume/GetResumeTalentNote?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeResumeGetResumeFeedback = <RNU extends (keyof AT_ResumeFeedbackViewModel)[] = []>(
	resumeHoldId: any,
	key: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeFeedbackViewModel, RNU>>>(
		`/${FirmCode}/Resume/GetResumeFeedback?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${key ? 'key=' + key : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeResumeLinkUp = <NUDATA extends (keyof AT_ResumeInteractModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeInteractModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Resume/LinkUp?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeResumeGetResumeLinkUp = <RNU extends (keyof AT_ResumeInteractModel)[] = []>(
	resumeHoldId: any,
	tableKey: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeInteractModel, RNU>>>(
		`/${FirmCode}/Resume/GetResumeLinkUp?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${tableKey ? 'tableKey=' + tableKey : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeResumeToInterview = (resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/ToInterview?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeResumeGetResumeShareToUsers = <RNU extends (keyof AT_StaffInfo)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffInfo, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeShareToUsers?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeResumeShareRead = (resumeShareId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Resume/ResumeShareRead?${resumeShareId ? 'resumeShareId=' + resumeShareId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeResumeHold = <NUDATA extends (keyof AT_ResumeHoldModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeHoldModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Resume/ResumeHold?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeResumeGetResumeHoldFirm = <RNU extends (keyof AT_FirmSimpleModel)[] = []>(resumeId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FirmSimpleModel, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeHoldFirm?${resumeId ? 'resumeId=' + resumeId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeResumeGetResumeHoldSynthesizeInfo = <RNU extends (keyof AT_ResumeSynthesizeModel)[] = []>(
	resumeHoldId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeSynthesizeModel, RNU>>>(
		`/${FirmCode}/Resume/GetResumeHoldSynthesizeInfo?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeResumeGetResumeById = <RNU extends (keyof AT_ResumeViewModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_ResumeViewModel, RNU>>>(
		`/${FirmCode}/Resume/GetResumeById?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeGetResumeToPage = <
	RNU extends (keyof AT_ResumePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ResumeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_ResumeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ResumePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Resume/GetResumeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeResumeGetResumeTimeline = <RNU extends (keyof AT_TimelineModel)[] = []>(resumeHoldId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TimelineModel, RNU>[]>>(
		`/${FirmCode}/Resume/GetResumeTimeline?${resumeHoldId ? 'resumeHoldId=' + resumeHoldId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeResumeResumeImport = <RNU extends (keyof AT_ResumeModel)[] = []>(FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_ResumeModel, RNU>>>(
		`/${FirmCode}/Resume/ResumeImport?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeResumeGetBehindSurveyInfoByInterViewId = <RNU extends (keyof AT_BehindSurveyInfo)[] = []>(
	interViewId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_BehindSurveyInfo, RNU>>>(
		`/${FirmCode}/Resume/GetBehindSurveyInfoByInterViewId?${interViewId ? 'interViewId=' + interViewId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowRewardGetRewardToPage = <
	RNU extends (keyof AT_RewardPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RewardQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RewardQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RewardPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Reward/GetRewardToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowRewardGetRewardByUser = <RNU extends (keyof AT_GetRewardByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetRewardByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Reward/GetRewardByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRewardDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardPendingAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardRejectAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardDynamicRejectAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardResetAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardSaveDraft = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowRewardSubmitAudit = <NUDATA extends (keyof AT_FlowRewardModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowRewardModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Reward/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowRewardGetRewardByFlowId = <RNU extends (keyof AT_FlowModelRewardViewModelTuple)[] = []>(flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelRewardViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Reward/GetRewardByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowRewardDeleteReward = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Reward/DeleteReward?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowRewardGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Reward/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowRewardGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Reward/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeRewardSubjectGetRewardSubjectToPage = <
	RNU extends (keyof AT_RewardSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_RewardSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_RewardSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RewardSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/RewardSubject/GetRewardSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeRewardSubjectSaveRewardSubject = <NUDATA extends (keyof AT_RewardSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_RewardSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/RewardSubject/SaveRewardSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeRewardSubjectDeleteRewardSubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/RewardSubject/DeleteRewardSubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeRewardSubjectGetRewardSubjectById = <RNU extends (keyof AT_RewardSubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RewardSubjectModel, RNU>>>(
		`/${FirmCode}/RewardSubject/GetRewardSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeRoleAddRole = <NUDATA extends (keyof AT_RoleModel)[] = []>(FirmCode: any, data: U_I_NoNull<AT_RoleModel, NUDATA>) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Role/AddRole?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeRoleRemoveRole = (roleId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Role/RemoveRole?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodeRoleUpdateRole = <NUDATA extends (keyof AT_RoleModel)[] = []>(
	roleId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_RoleModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Role/UpdateRole?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeRoleGetRoleById = <RNU extends (keyof AT_RoleViewModel)[] = []>(roleId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RoleViewModel, RNU>>>(
		`/${FirmCode}/Role/GetRoleById?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeRoleGetRoleList = <RNU extends (keyof AT_RoleViewModel)[] = []>(roleName: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RoleViewModel, RNU>[]>>(
		`/${FirmCode}/Role/GetRoleList?${roleName ? 'roleName=' + roleName : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeRoleDispatchRole = <NUDATA extends (keyof AT_DispatchRoleModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_DispatchRoleModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Role/DispatchRole?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeRoleGetRoleStaff = <RNU extends (keyof AT_RoleUserViewModel)[] = []>(roleId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_RoleUserViewModel, RNU>>>(
		`/${FirmCode}/Role/GetRoleStaff?${roleId ? 'roleId=' + roleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSalaryConfirmGetSalaryConfirmListBySalaryCalculateIds = <RNU extends (keyof AT_SalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalaryConfirmModel, RNU>>>(
		`/${FirmCode}/flow/SalaryConfirm/GetSalaryConfirmListBySalaryCalculateIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSalaryConfirmDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmPendingAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmRejectAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmResetAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmSaveDraft = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryConfirmSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryConfirmModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryConfirmModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryConfirm/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowSalaryConfirmGetSalaryConfirmByFlowId = <RNU extends (keyof AT_FlowModelSalaryConfirmModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSalaryConfirmModelTuple, RNU>>>(
		`/${FirmCode}/flow/SalaryConfirm/GetSalaryConfirmByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSalaryConfirmDeleteSalaryCalculate = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SalaryConfirm/DeleteSalaryCalculate?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSalaryConfirmGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/SalaryConfirm/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSalaryConfirmGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/SalaryConfirm/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSalaryDeductGetSalaryDeductToPage = <
	RNU extends (keyof AT_SalaryDeductPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalaryDeductQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryDeductQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalaryDeductPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SalaryDeduct/GetSalaryDeductToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryDeductAddUpdateSalaryDeduct = <NUDATA extends (keyof AT_SalaryDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalaryDeduct/AddUpdateSalaryDeduct?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSalaryDeductGetSalaryDeductByDetailsId = <RNU extends (keyof AT_SalaryDeductViewModel)[] = []>(
	detailsId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryDeductViewModel, RNU>>>(
		`/${FirmCode}/SalaryDeduct/GetSalaryDeductByDetailsId?${detailsId ? 'detailsId=' + detailsId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSalaryDeductGetSalaryDeductById = <RNU extends (keyof AT_SalaryDeductViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryDeductViewModel, RNU>>>(
		`/${FirmCode}/SalaryDeduct/GetSalaryDeductById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSalaryDeductGetSalaryCustomGrantDropDownListByBarCode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/SalaryDeduct/GetSalaryCustomGrantDropDownListByBarCode?${barCode ? 'barCode=' + barCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSalaryDeductConfirmDetailsState = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalaryDeduct/ConfirmDetailsState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSalaryDeductGetSalaryDeductDetails = <RNU extends (keyof AT_SalaryDeductDetailsModel)[] = []>(
	barCode: any,
	Month: any,
	ItemType: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryDeductDetailsModel, RNU>[]>>(
		`/${FirmCode}/SalaryDeduct/GetSalaryDeductDetails?${barCode ? 'barCode=' + barCode : ''}&${Month ? 'Month=' + Month : ''}&${
			ItemType ? 'ItemType=' + ItemType : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSalaryFixedRecordGetSalaryFixedRecordToPage = <
	RNU extends (keyof AT_SalaryFixedRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalaryFixedRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryFixedRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalaryFixedRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SalaryFixedRecord/GetSalaryFixedRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSalaryKeepDeductDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductPendingAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductRejectAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductResetAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductSaveDraft = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryKeepDeductSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryKeepDeductModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryKeepDeductModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryKeepDeduct/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowSalaryKeepDeductGetSalaryKeepDeductByFlowId = <RNU extends (keyof AT_FlowModelSalaryKeepDeductViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSalaryKeepDeductViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/SalaryKeepDeduct/GetSalaryKeepDeductByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSalaryKeepDeductGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/SalaryKeepDeduct/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSalaryKeepDeductGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/SalaryKeepDeduct/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSalaryKeepRecordGetSalaryKeepRecordToPage = <
	RNU extends (keyof AT_SalaryKeepRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalaryKeepRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryKeepRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalaryKeepRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SalaryKeepRecord/GetSalaryKeepRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryKeepRecordDistributeReservedSalary = <NUDATA extends (keyof AT_SalaryKeepGrantRecordModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryKeepGrantRecordModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalaryKeepRecord/DistributeReservedSalary?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSalaryKeepRecordGetSalaryReserveRecordByBarCode = <RNU extends (keyof AT_SalaryReserveViewModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryReserveViewModel, RNU>>>(
		`/${FirmCode}/SalaryKeepRecord/GetSalaryReserveRecordByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSalaryRecordGetSalaryRecordToPage = <
	RNU extends (keyof AT_RowToColumnPageModel)[] = [],
	NUDATA extends (keyof AT_SalaryRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/SalaryRecord/GetSalaryRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryRecordGetPrintSalaryRecordBySalaryCalculateGrantId = <RNU extends (keyof AT_RowToColumnPageModel)[] = []>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/SalaryRecord/GetPrintSalaryRecordBySalaryCalculateGrantId?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryRecordChangePrintStateBySalaryCalculateGrantIdCode = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SalaryRecord/ChangePrintStateBySalaryCalculateGrantIdCode?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryRecordBatchExportSalaryRecord = <NUDATA extends (keyof AT_SalaryRecordQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalaryRecord/BatchExportSalaryRecord?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSalaryRecordGetSalaryRecordGrantCso = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/SalaryRecord/GetSalaryRecordGrantCso?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSalaryStaffGetSalaryStaffToPage = <
	RNU extends (keyof AT_RowToColumnPageModel)[] = [],
	NUDATA extends (keyof AT_SalaryStaffQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryStaffQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/flow/SalaryStaff/GetSalaryStaffToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSalaryStaffDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffPendingAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffRejectAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffResetAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffSaveDraft = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffSubmitAudit = <NUDATA extends (keyof AT_FlowSalaryStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSalaryStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowSalaryStaffGetSalaryStaffById = <RNU extends (keyof AT_SalaryStaffViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryStaffViewModel, RNU>>>(
		`/${FirmCode}/flow/SalaryStaff/GetSalaryStaffById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSalaryStaffGetSalaryStaffByFlowId = <RNU extends (keyof AT_FlowModelSalaryStaffViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSalaryStaffViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/SalaryStaff/GetSalaryStaffByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSalaryStaffGetUserAuditPower = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SalaryStaff/GetUserAuditPower?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSalaryStaffUpdateSalaryStaffState = <NUDATA extends (keyof AT_SalaryStaffStateModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryStaffStateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/UpdateSalaryStaffState?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffMergeSalaryCustomGrant = <NUDATA extends (keyof AT_MergeSalaryPaymentMethodModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_MergeSalaryPaymentMethodModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/MergeSalaryCustomGrant?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffStopProvideSalaryBySalaryIds = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SalaryStaff/StopProvideSalaryBySalaryIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSalaryStaffGetSalaryKeepByBarCode = (barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SalaryStaff/GetSalaryKeepByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSalaryStaffGetSalaryStaffDetailsBySalaryId = <RNU extends (keyof AT_SalaryStaffDetailsViewModel)[] = []>(
	salaryId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryStaffDetailsViewModel, RNU>[]>>(
		`/${FirmCode}/flow/SalaryStaff/GetSalaryStaffDetailsBySalaryId?${salaryId ? 'salaryId=' + salaryId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowSalaryStaffDeleteSalaryById = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SalaryStaff/DeleteSalaryById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSalaryStaffGetSocialInsuranceProvidentFundByBarCode = <RNU extends (keyof AT_SocialInsuranceProvidentFundModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SocialInsuranceProvidentFundModel, RNU>>>(
		`/${FirmCode}/flow/SalaryStaff/GetSocialInsuranceProvidentFundByBarCode?${barCode ? 'barCode=' + barCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSalaryStaffGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/SalaryStaff/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSalaryStaffGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/SalaryStaff/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSalarySubjectGetSalarySubjectToPage = <
	RNU extends (keyof AT_SalarySubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalarySubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalarySubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalarySubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SalarySubject/GetSalarySubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalarySubjectSaveSalarySubject = <NUDATA extends (keyof AT_SalarySubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalarySubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalarySubject/SaveSalarySubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSalarySubjectDeleteSalarySubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SalarySubject/DeleteSalarySubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSalarySubjectGetSalarySubjectById = <RNU extends (keyof AT_SalarySubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalarySubjectModel, RNU>>>(
		`/${FirmCode}/SalarySubject/GetSalarySubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSalaryVerifyGetSalaryVerifyToPage = <
	RNU extends (keyof AT_SalaryVerifyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SalaryVerifyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryVerifyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SalaryVerifyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SalaryVerify/GetSalaryVerifyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryVerifyGetSalaryVerifySalaryStaffToPage = <
	RNU extends (keyof AT_RowToColumnPageModel)[] = [],
	NUDATA extends (keyof AT_SalaryStaffQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SalaryStaffQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/SalaryVerify/GetSalaryVerifySalaryStaffToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSalaryVerifyBatchSalaryConfirm = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SalaryVerify/BatchSalaryConfirm?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSalaryVerifyBatchSalaryVerify = (paymentDays: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SalaryVerify/BatchSalaryVerify?${paymentDays ? 'paymentDays=' + paymentDays : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeSalaryVerifyGetSalaryAdvancePaymentById = <RNU extends (keyof AT_SalaryStaffViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SalaryStaffViewModel, RNU>>>(
		`/${FirmCode}/SalaryVerify/GetSalaryAdvancePaymentById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSalaryVerifyGetSalaryVerifyGrantCso = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/SalaryVerify/GetSalaryVerifyGrantCso?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSalaryVerifyGetSalaryCalculateGrantPersonalIncomeMoney = (id: any, barcode: any, days: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/SalaryVerify/GetSalaryCalculateGrantPersonalIncomeMoney?${id ? 'id=' + id : ''}&${barcode ? 'barcode=' + barcode : ''}&${
			days ? 'days=' + days : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSlaveCardBagGetSlaveCardBagToPage = <
	RNU extends (keyof AT_SlaveCardBagPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SlaveCardBagQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SlaveCardBagQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SlaveCardBagPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SlaveCardBag/GetSlaveCardBagToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSlaveCardBagBatchExportSlaveCardRecharge = <NUDATA extends (keyof AT_SlaveCardBagQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SlaveCardBagQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SlaveCardBag/BatchExportSlaveCardRecharge?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSlaveCardBagSaveSlaveCardBag = <NUDATA extends (keyof AT_SlaveCardBagModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SlaveCardBagModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SlaveCardBag/SaveSlaveCardBag?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSlaveCardBagGetSlaveCardBagById = <RNU extends (keyof AT_SlaveCardBagModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SlaveCardBagModel, RNU>>>(
		`/${FirmCode}/SlaveCardBag/GetSlaveCardBagById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSlaveCardBagGetSlaveCardBagByCardCode = <RNU extends (keyof AT_SlaveCardBagModel)[] = []>(cardCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SlaveCardBagModel, RNU>>>(
		`/${FirmCode}/SlaveCardBag/GetSlaveCardBagByCardCode?${cardCode ? 'cardCode=' + cardCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSlaveCardBagChangeSlaveCardBagState = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SlaveCardBag/ChangeSlaveCardBagState?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyGetSlaveCardRechargeApplyToPage = <
	RNU extends (keyof AT_SlaveCardRechargeApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SlaveCardRechargeApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SlaveCardRechargeApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SlaveCardRechargeApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetSlaveCardRechargeApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyGetSelfRechargeApplyToPage = <
	RNU extends (keyof AT_SelfRechargeApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SelfRechargeApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SelfRechargeApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SelfRechargeApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetSelfRechargeApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyBatchExportSlaveCardRechargeApply = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/BatchExportSlaveCardRechargeApply?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplyPendingAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplyRejectAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplyResetAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplySaveDraft = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowSlaveCardRechargeApplySubmitAudit = <NUDATA extends (keyof AT_FlowSlaveCardRechargeApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowSlaveCardRechargeApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SlaveCardRechargeApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowSlaveCardRechargeApplySearchAllSlaveCardBag = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(
	cardType: any,
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/SearchAllSlaveCardBag?${cardType ? 'cardType=' + cardType : ''}&${
			barCode ? 'barCode=' + barCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowSlaveCardRechargeApplyGetSlaveCardRechargeApplyByFlowId = <
	RNU extends (keyof AT_FlowModelSlaveCardRechargeApplyViewModelTuple)[] = [],
>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelSlaveCardRechargeApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetSlaveCardRechargeApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowSlaveCardRechargeApplySaveSlaveCardRechargeFinish = <NUDATA extends (keyof AT_SlaveCardRechargeFinishModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SlaveCardRechargeFinishModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/SaveSlaveCardRechargeFinish?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyGetBatchSlaveCardRechargeFinishByFlowIds = <
	RNU extends (keyof AT_SlaveCardRechargeApplyViewModel)[] = [],
>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SlaveCardRechargeApplyViewModel, RNU>[]>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetBatchSlaveCardRechargeFinishByFlowIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowSlaveCardRechargeApplyGetSlaveCardRechargeApplyByUser = <
	RNU extends (keyof AT_GetSlaveCardRechargeApplyByUserModel)[] = [],
>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetSlaveCardRechargeApplyByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetSlaveCardRechargeApplyByUser?${barCode ? 'barCode=' + barCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSlaveCardRechargeApplyGetOilCardByCardCode = (cardCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<any>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetOilCardByCardCode?${cardCode ? 'cardCode=' + cardCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowSlaveCardRechargeApplyDeleteSlaveCardRechargeApply = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/DeleteSlaveCardRechargeApply?${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSlaveCardRechargeApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSlaveCardRechargeApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/SlaveCardRechargeApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSocialInsuranceGetSocialInsuranceToPage = <
	RNU extends (keyof AT_SocialInsurancePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsurancePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeSocialInsuranceGetSocialInsuranceByUser = <RNU extends (keyof AT_GetSocialInsuranceByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetSocialInsuranceByUserModel, RNU>[]>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceGetSocialInsuranceRecordToPage = <
	RNU extends (keyof AT_SocialInsuranceRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsuranceRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceBatchExport = (FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SocialInsurance/BatchExport?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSocialInsuranceAddSocialInsurance = <NUDATA extends (keyof AT_SocialInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SocialInsurance/AddSocialInsurance?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSocialInsuranceUpdateSocialInsurance = <NUDATA extends (keyof AT_SocialInsuranceModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsurance/UpdateSocialInsurance?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceGetSocialInsuranceDetailsMoney = <
	RNU extends (keyof AT_SocialInsuranceDetailsModel)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceDetailsModel)[] = [],
>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceDetailsModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsuranceDetailsModel, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceDetailsMoney?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceGetTotalMoneyByBarCodeAndSchemeId = <RNU extends (keyof AT_TotalMoneyModel)[] = []>(
	schemeId: any,
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TotalMoneyModel, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetTotalMoneyByBarCodeAndSchemeId?${schemeId ? 'schemeId=' + schemeId : ''}&${
			barCode ? 'barCode=' + barCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSocialInsuranceGetSocialInsuranceById = <RNU extends (keyof AT_SocialInsuranceViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SocialInsuranceViewModel, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSocialInsuranceGetSocialInsuranceRecordById = <RNU extends (keyof AT_SocialInsuranceRecordViewModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SocialInsuranceRecordViewModel, RNU>>>(
		`/${FirmCode}/SocialInsurance/GetSocialInsuranceRecordById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceChangeInsuranceState = (id: any, insuranceState: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsurance/ChangeInsuranceState?${id ? 'id=' + id : ''}&${insuranceState ? 'insuranceState=' + insuranceState : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSocialInsuranceBatchChangeInsuranceState = (insuranceState: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsurance/BatchChangeInsuranceState?${insuranceState ? 'insuranceState=' + insuranceState : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeSocialInsuranceBatchAddSocialInsuranceDetails = <NUDATA extends (keyof AT_SocialInsuranceDetailsModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceDetailsModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SocialInsurance/BatchAddSocialInsuranceDetails?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSocialInsuranceBatchDeleteSocialInsuranceDetails = (SubjectId: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsurance/BatchDeleteSocialInsuranceDetails?${SubjectId ? 'SubjectId=' + SubjectId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeSocialInsuranceCalculationSocialInsuranceDetails = <
	RNU extends (keyof AT_TotalMoneyModel)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceDetailsModel)[] = [],
>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceDetailsModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TotalMoneyModel, RNU>>>(
		`/${FirmCode}/SocialInsurance/CalculationSocialInsuranceDetails?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeSocialInsuranceGetPersonSocialInsuranceByUser = <RNU extends (keyof AT_GetPersonSocialInsuranceByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetPersonSocialInsuranceByUserModel, RNU>[]>>(
		`/${FirmCode}/SocialInsurance/GetPersonSocialInsuranceByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceCheckIsExistSocialInsuranceDetails = <NUDATA extends (keyof AT_CheckIsExsistSocialInsuranceDetails)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_CheckIsExsistSocialInsuranceDetails, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsurance/CheckIsExistSocialInsuranceDetails?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSocialInsurancePayGetSocialInsurancePayToPage = <
	RNU extends (keyof AT_RowToColumnPageModel)[] = [],
	NUDATA extends (keyof AT_SocialInsurancePayQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsurancePayQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_RowToColumnPageModel, RNU>>>(
		`/${FirmCode}/flow/SocialInsurancePay/GetSocialInsurancePayToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSocialInsurancePayBatchExportSocialInsurancePay = <NUDATA extends (keyof AT_SocialInsurancePayQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsurancePayQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/SocialInsurancePay/BatchExportSocialInsurancePay?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSocialInsurancePayGetSocialInsurancePayListByIds = <RNU extends (keyof AT_SocialInsurancePayViewModel)[] = []>(
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsurancePayViewModel, RNU>>>(
		`/${FirmCode}/flow/SocialInsurancePay/GetSocialInsurancePayListByIds?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowSocialInsurancePaySocialInsurancePay = <NUDATA extends (keyof AT_SocialInsurancePayModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsurancePayModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/SocialInsurancePay/SocialInsurancePay?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowSocialInsurancePayGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/SocialInsurancePay/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowSocialInsurancePayGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/SocialInsurancePay/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeSocialInsuranceSchemeGetSocialInsuranceSchemeToPage = <
	RNU extends (keyof AT_SocialInsuranceSchemePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceSchemeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceSchemeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsuranceSchemePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SocialInsuranceScheme/GetSocialInsuranceSchemeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceSchemeAddSocialInsuranceScheme = <NUDATA extends (keyof AT_SocialInsuranceSchemeModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceSchemeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SocialInsuranceScheme/AddSocialInsuranceScheme?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeSocialInsuranceSchemeUpdateSocialInsuranceScheme = <NUDATA extends (keyof AT_SocialInsuranceSchemeModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceSchemeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsuranceScheme/UpdateSocialInsuranceScheme?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeSocialInsuranceSchemeGetSocialInsuranceSchemeById = <RNU extends (keyof AT_SocialInsuranceSchemeViewModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SocialInsuranceSchemeViewModel, RNU>>>(
		`/${FirmCode}/SocialInsuranceScheme/GetSocialInsuranceSchemeById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceSchemeDeleteSocialInsuranceScheme = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsuranceScheme/DeleteSocialInsuranceScheme?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceSchemeInitializeSocialInsuranceScheme = <
	NUDATA extends (keyof AT_InitializeSocialInsuranceSchemeModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_InitializeSocialInsuranceSchemeModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsuranceScheme/InitializeSocialInsuranceScheme?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceSubjectGetSocialInsuranceSubjectToPage = <
	RNU extends (keyof AT_SocialInsuranceSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_SocialInsuranceSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_SocialInsuranceSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/SocialInsuranceSubject/GetSocialInsuranceSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeSocialInsuranceSubjectSaveSocialInsuranceSubject = <NUDATA extends (keyof AT_SocialInsuranceSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_SocialInsuranceSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsuranceSubject/SaveSocialInsuranceSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeSocialInsuranceSubjectGetSocialInsuranceSubjectById = <RNU extends (keyof AT_SocialInsuranceSubjectModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SocialInsuranceSubjectModel, RNU>>>(
		`/${FirmCode}/SocialInsuranceSubject/GetSocialInsuranceSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeSocialInsuranceSubjectDeleteSocialInsuranceSubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/SocialInsuranceSubject/DeleteSocialInsuranceSubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeStaffDetailsGetStaffDetailsByBarCode = <RNU extends (keyof AT_StaffDetailsViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffDetailsViewModel, RNU>>>(
		`/${FirmCode}/StaffDetails/GetStaffDetailsByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsDiscriminateIdCard = <
	RNU extends (keyof AT_IdCardInfoModel)[] = [],
	NUDATA extends (keyof AT_DiscriminateIdQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_DiscriminateIdQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_IdCardInfoModel, RNU>>>(
		`/${FirmCode}/StaffDetails/DiscriminateIdCard?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateStaffBasicInfo = <NUDATA extends (keyof AT_StaffDetailsModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_StaffDetailsModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/UpdateStaffBasicInfo?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateStaffCareerInfo = <NUDATA extends (keyof AT_CareerInfoUpdateModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_CareerInfoUpdateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/UpdateStaffCareerInfo?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateStaffSelfEvaluation = <NUDATA extends (keyof AT_StaffSelfEvaluationModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffSelfEvaluationModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateStaffSelfEvaluation?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsUpdateStaffHonor = <NUDATA extends (keyof AT_StaffHonorModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffHonorModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateStaffHonor?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsBatchAddFamilyInfo = <NUDATA extends (keyof AT_EntryFamilyInfoModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_EntryFamilyInfoModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/BatchAddFamilyInfo?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateFamilyInfo = <NUDATA extends (keyof AT_EntryFamilyInfoModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_EntryFamilyInfoModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateFamilyInfo?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsRemoveFamilyInfo = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/RemoveFamilyInfo?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeStaffDetailsGetFamilyInfoList = <RNU extends (keyof AT_EntryFamilyInfoModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_EntryFamilyInfoModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetFamilyInfoList?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsBatchAddStaffBank = <NUDATA extends (keyof AT_StaffBankModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_StaffBankModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/BatchAddStaffBank?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateStaffBank = <NUDATA extends (keyof AT_StaffBankModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffBankModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateStaffBank?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsRemoveStaffBank = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/RemoveStaffBank?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeStaffDetailsGetStaffBankList = <RNU extends (keyof AT_StaffBankModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffBankModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetStaffBankList?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsBatchAddAttachment = <NUDATA extends (keyof AT_InductionAttachmentModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_InductionAttachmentModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/BatchAddAttachment?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateAttachment = <NUDATA extends (keyof AT_InductionAttachmentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InductionAttachmentModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateAttachment?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsRemoveAttachment = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/RemoveAttachment?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeStaffDetailsGetAttachmentList = <RNU extends (keyof AT_InductionAttachmentModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InductionAttachmentModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetAttachmentList?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsBatchAddStudy = <NUDATA extends (keyof AT_InductionStudyModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_InductionStudyModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/BatchAddStudy?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateStudy = <NUDATA extends (keyof AT_InductionStudyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InductionStudyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateStudy?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsRemoveStudy = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/RemoveStudy?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeStaffDetailsGetStudyList = <RNU extends (keyof AT_InductionStudyModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InductionStudyModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetStudyList?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsBatchAddWork = <NUDATA extends (keyof AT_InductionWorkModel)[] = []>(
	barCode: any,
	FirmCode: any,
	data: U_I_NoNull<AT_InductionWorkModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/BatchAddWork?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsUpdateWork = <NUDATA extends (keyof AT_InductionWorkModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_InductionWorkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/UpdateWork?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsRemoveWork = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/RemoveWork?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const getFirmCodeStaffDetailsGetWorkList = <RNU extends (keyof AT_InductionWorkModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_InductionWorkModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetWorkList?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsGetNewEmployee = <RNU extends (keyof AT_NewEmployeeModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_NewEmployeeModel, RNU>[]>>(
		`/${FirmCode}/StaffDetails/GetNewEmployee?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsUpdateProfilePicture = (barcode: any, profilePicture: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/StaffDetails/UpdateProfilePicture?${barcode ? 'barcode=' + barcode : ''}&${
			profilePicture ? 'profilePicture=' + profilePicture : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffDetailsGetNewEmployeeToPage = <
	RNU extends (keyof AT_NewEmployeePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_NewEmployeeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_NewEmployeeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_NewEmployeePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffDetails/GetNewEmployeeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsGetStaffDetailsToPage = <
	RNU extends (keyof AT_StaffDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StaffDetailsQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffDetailsQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffDetailsPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffDetails/GetStaffDetailsToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsExportStaffDetailsList = <NUDATA extends (keyof AT_StaffDetailsQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffDetailsQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/ExportStaffDetailsList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsGetDimissionStaffDetailsToPage = <
	RNU extends (keyof AT_StaffDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StaffDetailsQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffDetailsQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffDetailsPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffDetails/GetDimissionStaffDetailsToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffDetailsExportDimissionStaffDetailsList = <NUDATA extends (keyof AT_StaffDetailsQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffDetailsQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/StaffDetails/ExportDimissionStaffDetailsList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeStaffDetailsGetStaffChangeToPage = <
	RNU extends (keyof AT_StaffChangePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StaffChangeQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffChangeQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffChangePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffDetails/GetStaffChangeToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeStaffGrowGetStaffGrowDetailsByResult = <
	RNU extends (keyof AT_StaffGrowDetailsModel)[] = [],
	NU0 extends (keyof AT_StaffGrowState)[] = [],
>(
	staffGrowState: U_I_NoNull<AT_StaffGrowState, NU0>,
	barCode: any,
	depCode: any,
	postCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_StaffGrowDetailsModel, RNU>>>(
		`/${FirmCode}/StaffGrow/GetStaffGrowDetailsByResult?${staffGrowState ? 'staffGrowState=' + staffGrowState : ''}&${
			barCode ? 'barCode=' + barCode : ''
		}&${depCode ? 'depCode=' + depCode : ''}&${postCode ? 'postCode=' + postCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeStaffGrowGetStaffGrowToPage = <
	RNU extends (keyof AT_StaffGrowPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StaffGrowQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffGrowQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffGrowPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffGrow/GetStaffGrowToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeStaffModifyRecordGetStaffModifyRecordToPage = <
	RNU extends (keyof AT_StaffModifyRecordPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_StaffModifyRecordQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffModifyRecordQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_StaffModifyRecordPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/StaffModifyRecord/GetStaffModifyRecordToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postSuperAdminRegisterFirm = <NUDATA extends (keyof AT_FirmModel)[] = []>(data: U_I_NoNull<AT_FirmModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/RegisterFirm`, data);
};
export const postSuperAdminUpdateFirm = <NUDATA extends (keyof AT_FirmModel)[] = []>(data: U_I_NoNull<AT_FirmModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/UpdateFirm`, data);
};
export const getSuperAdminGetFirmInfo = <RNU extends (keyof AT_FirmModel)[] = []>(firmCode: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_FirmModel, RNU>>>(`/SuperAdmin/GetFirmInfo?${firmCode ? 'firmCode=' + firmCode : ''}`);
};
export const postSuperAdminRemoveScheme = (schemeCode: any) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/RemoveScheme?${schemeCode ? 'schemeCode=' + schemeCode : ''}`);
};
export const getSuperAdminGetSchemeList = <RNU extends (keyof AT_SchemeInfoModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_SchemeInfoModel, RNU>[]>>(`/SuperAdmin/GetSchemeList`);
};
export const postSuperAdminAddScheme = (schemeName: any) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/AddScheme?${schemeName ? 'schemeName=' + schemeName : ''}`);
};
export const postSuperAdminGetFirmToPage = <
	RNU extends (keyof AT_FirmPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_FirmQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_FirmQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_FirmPageModelIEnumerableInt32Tuple, RNU>>>(`/SuperAdmin/GetFirmToPage`, data);
};
export const getSuperAdminGetAllPageAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(`/SuperAdmin/GetAllPageAuthorization`);
};
export const getSuperAdminGetAllPopupAuthorization = <RNU extends (keyof AT_AuthorizationViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_AuthorizationViewModel, RNU>[]>>(`/SuperAdmin/GetAllPopupAuthorization`);
};
export const postOAOpenSystem = <NUDATA extends (keyof AT_OpenSystemModel)[] = []>(data: U_I_NoNull<AT_OpenSystemModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/OA/OpenSystem`, data);
};
export const getSuperAdminSearchAllOpenSystemUser = <RNU extends (keyof AT_KeyValueStringViewModel)[] = []>(searchText: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueStringViewModel, RNU>>>(
		`/SuperAdmin/SearchAllOpenSystemUser?${searchText ? 'searchText=' + searchText : ''}`
	);
};
export const postSuperAdminAddPageRoute = <RNU extends (keyof AT_SysPageRouteViewModel)[] = [], NUDATA extends (keyof AT_SysPageRouteModel)[] = []>(
	data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(`/SuperAdmin/AddPageRoute`, data);
};
export const postSuperAdminUpdatePageRoute = <
	RNU extends (keyof AT_SysPageRouteViewModel)[] = [],
	NUDATA extends (keyof AT_SysPageRouteModel)[] = [],
>(
	pageRouteId: any,
	data: U_I_NoNull<AT_SysPageRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(
		`/SuperAdmin/UpdatePageRoute?${pageRouteId ? 'pageRouteId=' + pageRouteId : ''}`,
		data
	);
};
export const postSuperAdminRemovePageRoute = (pageRoutId: any) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/RemovePageRoute?${pageRoutId ? 'pageRoutId=' + pageRoutId : ''}`);
};
export const getSuperAdminGetSysPageRouteById = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(pageRoutId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>>>(
		`/SuperAdmin/GetSysPageRouteById?${pageRoutId ? 'pageRoutId=' + pageRoutId : ''}`
	);
};
export const postSuperAdminAddPopupRoute = <
	RNU extends (keyof AT_SysPopupRouteViewModel)[] = [],
	NUDATA extends (keyof AT_SysPopupRouteModel)[] = [],
>(
	data: U_I_NoNull<AT_SysPopupRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(`/SuperAdmin/AddPopupRoute`, data);
};
export const postSuperAdminUpdatePopupRoute = <
	RNU extends (keyof AT_SysPopupRouteViewModel)[] = [],
	NUDATA extends (keyof AT_SysPopupRouteModel)[] = [],
>(
	popupRoutId: any,
	data: U_I_NoNull<AT_SysPopupRouteModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(
		`/SuperAdmin/UpdatePopupRoute?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}`,
		data
	);
};
export const postSuperAdminRemovePopupRoute = (popupRoutId: any) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/RemovePopupRoute?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}`);
};
export const postSuperAdminAddComboBox = <NUDATA extends (keyof AT_ComboBoxModel)[] = []>(data: U_I_NoNull<AT_ComboBoxModel, NUDATA>) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/AddComboBox`, data);
};
export const postSuperAdminRemoveComboBox = (comboBoxId: any) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/RemoveComboBox?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`);
};
export const postSuperAdminUpdateComboBox = <NUDATA extends (keyof AT_ComboBoxModel)[] = []>(
	comboBoxId: any,
	data: U_I_NoNull<AT_ComboBoxModel, NUDATA>
) => {
	return axios.post<ResponseData<any>>(`/SuperAdmin/UpdateComboBox?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`, data);
};
export const getSuperAdminGetComboBoxById = <RNU extends (keyof AT_ComboBoxViewModel)[] = []>(comboBoxId: any) => {
	return axios.get<ResponseData<U_I_NoNull<AT_ComboBoxViewModel, RNU>>>(
		`/SuperAdmin/GetComboBoxById?${comboBoxId ? 'comboBoxId=' + comboBoxId : ''}`
	);
};
export const postSuperAdminGetComboBoxToPage = <
	RNU extends (keyof AT_ComboBoxPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_ComboBoxQueryModel)[] = [],
>(
	data: U_I_NoNull<AT_ComboBoxQueryModel, NUDATA>
) => {
	return axios.post<ResponseData<U_I_NoNull<AT_ComboBoxPageModelIEnumerableInt32Tuple, RNU>>>(`/SuperAdmin/GetComboBoxToPage`, data);
};
export const getSuperAdminSearchComboBoxType = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>() => {
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(`/SuperAdmin/SearchComboBoxType`);
};
export const postFirmCodeSysConfigMergeSysConfig = <NUDATA extends (keyof AT_UserConfigModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_UserConfigModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/SysConfig/MergeSysConfig?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeSysConfigGeSysConfig = <RNU extends (keyof AT_UserConfigViewModel)[] = [], NU0 extends (keyof AT_PageType)[] = []>(
	pageType: U_I_NoNull<AT_PageType, NU0>,
	pageKey: any,
	optionType: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_UserConfigViewModel, RNU>>>(
		`/${FirmCode}/SysConfig/GeSysConfig?${pageType ? 'pageType=' + pageType : ''}&${pageKey ? 'pageKey=' + pageKey : ''}&${
			optionType ? 'optionType=' + optionType : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSysRouteGetSysPopupRouteById = <RNU extends (keyof AT_SysPopupRouteViewModel)[] = []>(popupRoutId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>>>(
		`/${FirmCode}/SysRoute/GetSysPopupRouteById?${popupRoutId ? 'popupRoutId=' + popupRoutId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSysRouteGetAllSysPopup = <RNU extends (keyof AT_SysPopupRouteViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>[]>>(
		`/${FirmCode}/SysRoute/GetAllSysPopup?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSysRouteGetAllFlowSysPopup = <RNU extends (keyof AT_SysPopupRouteViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPopupRouteViewModel, RNU>[]>>(
		`/${FirmCode}/SysRoute/GetAllFlowSysPopup?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSysRouteGetAllSysPage = <RNU extends (keyof AT_SysPageRouteViewModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteViewModel, RNU>[]>>(
		`/${FirmCode}/SysRoute/GetAllSysPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeSysRouteGetAllSysTreeList = <RNU extends (keyof AT_SysPageRouteTreeListModel)[] = []>(FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_SysPageRouteTreeListModel, RNU>[]>>(
		`/${FirmCode}/SysRoute/GetAllSysTreeList?${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTaxCreditApplyGetTaxCreditApplyToPage = <
	RNU extends (keyof AT_TaxCreditApplyPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TaxCreditApplyQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TaxCreditApplyQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TaxCreditApplyPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/TaxCreditApply/GetTaxCreditApplyToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowTaxCreditApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplyPendingAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplyRejectAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplyResetAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplySaveDraft = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTaxCreditApplySubmitAudit = <NUDATA extends (keyof AT_FlowTaxCreditApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTaxCreditApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TaxCreditApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowTaxCreditApplyGetTaxCreditApplyByFlowId = <RNU extends (keyof AT_FlowModelTaxCreditApplyViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelTaxCreditApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/TaxCreditApply/GetTaxCreditApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowTaxCreditApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/TaxCreditApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowTaxCreditApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/TaxCreditApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeTaxCreditSubjectGetTaxCreditSubjectToPage = <
	RNU extends (keyof AT_TaxCreditSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TaxCreditSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TaxCreditSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TaxCreditSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/TaxCreditSubject/GetTaxCreditSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTaxCreditSubjectSaveTaxCreditSubject = <NUDATA extends (keyof AT_TaxCreditSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TaxCreditSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/TaxCreditSubject/SaveTaxCreditSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeTaxCreditSubjectDeleteTaxCreditSubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/TaxCreditSubject/DeleteTaxCreditSubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeTaxCreditSubjectGetTaxCreditSubjectById = <RNU extends (keyof AT_TaxCreditSubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TaxCreditSubjectModel, RNU>>>(
		`/${FirmCode}/TaxCreditSubject/GetTaxCreditSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeTeachingGetTeachingById = <RNU extends (keyof AT_TeachingViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TeachingViewModel, RNU>>>(
		`/${FirmCode}/Teaching/GetTeachingById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeTeachingAddTeaching = <NUDATA extends (keyof AT_TeachingModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TeachingModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Teaching/AddTeaching?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeTeachingUpdateTeaching = <NUDATA extends (keyof AT_TeachingModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_TeachingModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Teaching/UpdateTeaching?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTeachingGetTeachingToPage = <
	RNU extends (keyof AT_TeachingPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TeachingQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TeachingQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TeachingPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Teaching/GetTeachingToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTeachingDetailsStartTeaching = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/TeachingDetails/StartTeaching?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeTeachingDetailsEndTeaching = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/TeachingDetails/EndTeaching?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodeTeachingDetailsFaceTalk = <NUDATA extends (keyof AT_FaceTalkModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_FaceTalkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/TeachingDetails/FaceTalk?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeTeachingDetailsGetTeachingDetailsAttachment = <RNU extends (keyof AT_TeachingDetailsAttachmentModel)[] = []>(
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TeachingDetailsAttachmentModel, RNU>[]>>(
		`/${FirmCode}/TeachingDetails/GetTeachingDetailsAttachment?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeTeachingDetailsGetTeachingDetailsToPage = <
	RNU extends (keyof AT_TeachingDetailsPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TeachingDetailsQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TeachingDetailsQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TeachingDetailsPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/TeachingDetails/GetTeachingDetailsToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeTeachingDetailsGetTeachingDetailsByUser = <RNU extends (keyof AT_GetTeachingDetailsByUserModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetTeachingDetailsByUserModel, RNU>[]>>(
		`/${FirmCode}/TeachingDetails/GetTeachingDetailsByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeTeachTemplateGetTeachById = <RNU extends (keyof AT_TeachTemplateViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TeachTemplateViewModel, RNU>>>(
		`/${FirmCode}/TeachTemplate/GetTeachById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeTeachTemplateGetTeachByDepAndPost = <RNU extends (keyof AT_TeachTemplateViewModel)[] = []>(
	depCode: any,
	postCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TeachTemplateViewModel, RNU>>>(
		`/${FirmCode}/TeachTemplate/GetTeachByDepAndPost?${depCode ? 'depCode=' + depCode : ''}&${postCode ? 'postCode=' + postCode : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeTeachTemplateAddTeachTemplate = <NUDATA extends (keyof AT_TeachTemplateModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TeachTemplateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/TeachTemplate/AddTeachTemplate?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeTeachTemplateUpdateTeachTemplate = <NUDATA extends (keyof AT_TeachTemplateModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_TeachTemplateModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/TeachTemplate/UpdateTeachTemplate?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTeachTemplateRemoveTeachByFlowId = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/TeachTemplate/RemoveTeachByFlowId?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeTeachTemplateGetTeachTemplateToPage = <
	RNU extends (keyof AT_TeachTemplatePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TeachTemplateQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TeachTemplateQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TeachTemplatePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/TeachTemplate/GetTeachTemplateToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTrademarkAddTrademark = <NUDATA extends (keyof AT_TrademarkModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TrademarkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Trademark/AddTrademark?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeTrademarkUpdateTrademark = <NUDATA extends (keyof AT_TrademarkModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_TrademarkModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Trademark/UpdateTrademark?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeTrademarkGetTrademarkById = <RNU extends (keyof AT_TrademarkViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TrademarkViewModel, RNU>>>(
		`/${FirmCode}/Trademark/GetTrademarkById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeTrademarkRemoveTrademark = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Trademark/RemoveTrademark?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`);
};
export const postFirmCodeTrademarkGetTrademarkToPage = <
	RNU extends (keyof AT_TrademarkPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TrademarkQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TrademarkQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TrademarkPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Trademark/GetTrademarkToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowTransferGetTransferToPage = <
	RNU extends (keyof AT_TransferPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TransferQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TransferPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Transfer/GetTransferToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowTransferGetTransfer = <RNU extends (keyof AT_TransferByBarCodeModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TransferByBarCodeModel, RNU>[]>>(
		`/${FirmCode}/flow/Transfer/GetTransfer?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTransferDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferPendingAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferRejectAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferDynamicRejectAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferResetAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferSaveDraft = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTransferSubmitAudit = <NUDATA extends (keyof AT_FlowTransferModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTransferModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Transfer/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowTransferGetTransferByFlowId = <RNU extends (keyof AT_FlowModelTransferViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelTransferViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Transfer/GetTransferByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTransferCheckTransferUserIsInFlow = (barCode: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Transfer/CheckTransferUserIsInFlow?${barCode ? 'barCode=' + barCode : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowTransferCheckIsExistDepPost = (barCode: any, depCode: any, postCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Transfer/CheckIsExistDepPost?${barCode ? 'barCode=' + barCode : ''}&${depCode ? 'depCode=' + depCode : ''}&${
			postCode ? 'postCode=' + postCode : ''
		}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTransferDeleteTransfer = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Transfer/DeleteTransfer?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowTransferGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Transfer/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowTransferGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Transfer/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeTransferStaffGetTransferStaffToPage = <
	RNU extends (keyof AT_TransferStaffPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_TransferStaffQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_TransferStaffQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_TransferStaffPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/TransferStaff/GetTransferStaffToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeTransferStaffAddTransferStaff = <NUDATA extends (keyof AT_TransferStaffModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_TransferStaffModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/TransferStaff/AddTransferStaff?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeTransferStaffGetTransferStaffById = <RNU extends (keyof AT_TransferStaffViewModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TransferStaffViewModel, RNU>>>(
		`/${FirmCode}/TransferStaff/GetTransferStaffById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowTryoutUpGetTryoutUpByFlowId = <RNU extends (keyof AT_FlowModelTryoutUpViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelTryoutUpViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/TryoutUp/GetTryoutUpByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowTryoutUpGetTryoutUpByBarCode = <RNU extends (keyof AT_TryoutUpViewModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_TryoutUpViewModel, RNU>>>(
		`/${FirmCode}/flow/TryoutUp/GetTryoutUpByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTryoutUpDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpPendingAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpRejectAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpDynamicRejectAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpResetAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpSaveDraft = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpSubmitAudit = <NUDATA extends (keyof AT_FlowTryoutUpModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowTryoutUpModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowTryoutUpDeleteTryoutUp = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/TryoutUp/DeleteTryoutUp?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowTryoutUpAddStaffGrowAttachment = <NUDATA extends (keyof AT_StaffGrowAttachmentModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_StaffGrowAttachmentModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/TryoutUp/AddStaffGrowAttachment?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowTryoutUpGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/TryoutUp/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowTryoutUpGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/TryoutUp/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeVehicleGetVehicleToPage = <
	RNU extends (keyof AT_VehiclePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_VehicleQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_VehiclePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/Vehicle/GetVehicleToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeVehicleAddVehicle = <NUDATA extends (keyof AT_VehicleModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Vehicle/AddVehicle?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeVehicleUpdateVehicle = <NUDATA extends (keyof AT_VehicleModel)[] = []>(
	id: any,
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Vehicle/UpdateVehicle?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeVehicleGetVehicleByVehicleHoldIdAndId = <RNU extends (keyof AT_VehicleViewModel)[] = []>(
	vehicleHoldId: any,
	id: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VehicleViewModel, RNU>>>(
		`/${FirmCode}/Vehicle/GetVehicleByVehicleHoldIdAndId?${vehicleHoldId ? 'vehicleHoldId=' + vehicleHoldId : ''}&${id ? 'id=' + id : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeVehicleBlockVehicle = <NUDATA extends (keyof AT_BlockVehicleModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_BlockVehicleModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/Vehicle/BlockVehicle?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeVehicleGetBlockVehicle = <RNU extends (keyof AT_BlockVehicleModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_BlockVehicleModel, RNU>>>(
		`/${FirmCode}/Vehicle/GetBlockVehicle?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeVehicleBatchVehicleHoldShare = (vehicleId: any, FirmCode: any, data: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/Vehicle/BatchVehicleHoldShare?${vehicleId ? 'vehicleId=' + vehicleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeVehicleGetVehicleHoldByVehicleId = <RNU extends (keyof AT_VehicleHoldModel)[] = []>(vehicleId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VehicleHoldModel, RNU>[]>>(
		`/${FirmCode}/Vehicle/GetVehicleHoldByVehicleId?${vehicleId ? 'vehicleId=' + vehicleId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleApplyDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplyPendingAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplyRejectAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplyDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplyResetAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplySaveDraft = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleApplySubmitAudit = <NUDATA extends (keyof AT_FlowVehicleApplyModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleApplyModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleApply/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVehicleApplyGetVehicleApplyByFlowId = <RNU extends (keyof AT_FlowModelVehicleApplyViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVehicleApplyViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VehicleApply/GetVehicleApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleApplyDeleteVehicleApplyByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleApply/DeleteVehicleApplyByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowVehicleApplyGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VehicleApply/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleApplyGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleApply/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowVehicleInsuranceDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsurancePendingAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsuranceRejectAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsuranceDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsuranceResetAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsuranceSaveDraft = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleInsuranceSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleInsuranceModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleInsuranceModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleInsurance/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVehicleInsuranceGetVehicleInsuranceByFlowId = <RNU extends (keyof AT_FlowModelVehicleInsuranceViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVehicleInsuranceViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VehicleInsurance/GetVehicleInsuranceByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleInsuranceDeleteVehicleInsuranceByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleInsurance/DeleteVehicleInsuranceByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleInsuranceMergeVehicleAttachments = <NUDATA extends (keyof AT_VehicleAttachmentModel)[] = []>(
	vehicleInsuranceId: any,
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleAttachmentModel, NUDATA>[]
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleInsurance/MergeVehicleAttachments?${vehicleInsuranceId ? 'vehicleInsuranceId=' + vehicleInsuranceId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const getFirmCodeflowVehicleInsuranceGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VehicleInsurance/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleInsuranceGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(
	popupKey: any,
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleInsurance/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleLeaseGetVehicleLeaseByFlowId = <RNU extends (keyof AT_FlowModelVehicleLeaseViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVehicleLeaseViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VehicleLease/GetVehicleLeaseByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleLeaseDeleteVehicleLeaseByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleLease/DeleteVehicleLeaseByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleLeaseVehicleLeaseCost = <NUDATA extends (keyof AT_VehicleLeaseCostModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleLeaseCostModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/VehicleLeaseCost?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseVehicleLeaseReturn = <NUDATA extends (keyof AT_VehicleLeaseReturnModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleLeaseReturnModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/VehicleLeaseReturn?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeasePendingAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseRejectAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseResetAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseSaveDraft = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleLeaseModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleLeaseModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleLease/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleLeaseGetVehicleLeaseToPage = <
	RNU extends (keyof AT_VehicleLeasePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_VehicleLeaseQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_VehicleLeaseQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_VehicleLeasePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/VehicleLease/GetVehicleLeaseToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowVehicleLeaseGetVehicleLeaseMoneyBack = <RNU extends (keyof AT_VehicleLeaseMoneyBackModel)[] = []>(
	vehicleLeaseId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VehicleLeaseMoneyBackModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleLease/GetVehicleLeaseMoneyBack?${vehicleLeaseId ? 'vehicleLeaseId=' + vehicleLeaseId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleLeaseGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VehicleLease/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleLeaseGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleLease/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowVehicleRepairDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairPendingAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairRejectAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairResetAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairSaveDraft = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleRepairSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleRepairModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleRepairModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleRepair/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVehicleRepairGetVehicleRepairByFlowId = <RNU extends (keyof AT_FlowModelVehicleRepairViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVehicleRepairViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VehicleRepair/GetVehicleRepairByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleRepairDeleteVehicleRepairByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleRepair/DeleteVehicleRepairByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowVehicleRepairGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VehicleRepair/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleRepairGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleRepair/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowVehicleUpkeepDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepPendingAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepRejectAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepResetAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepSaveDraft = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVehicleUpkeepSubmitAudit = <NUDATA extends (keyof AT_FlowVehicleUpkeepModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVehicleUpkeepModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VehicleUpkeep/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVehicleUpkeepGetVehicleUpkeepByFlowId = <RNU extends (keyof AT_FlowModelVehicleUpkeepViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVehicleUpkeepViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VehicleUpkeep/GetVehicleUpkeepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVehicleUpkeepDeleteVehicleUpkeepByFlowId = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VehicleUpkeep/DeleteVehicleUpkeepByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowVehicleUpkeepGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VehicleUpkeep/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVehicleUpkeepGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VehicleUpkeep/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowVirtueFundGetVirtueFundToPage = <
	RNU extends (keyof AT_VirtueFundPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_VirtueFundQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_VirtueFundQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_VirtueFundPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/VirtueFund/GetVirtueFundToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const getFirmCodeflowVirtueFundGetVirtueFundByUser = <RNU extends (keyof AT_GetVirtueFundByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetVirtueFundByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/VirtueFund/GetVirtueFundByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVirtueFundBatchExportVirtueFund = <NUDATA extends (keyof AT_VirtueFundQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_VirtueFundQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/BatchExportVirtueFund?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVirtueFundSearchAllFamilyInfoByBarCode = <RNU extends (keyof AT_KeyValueIntViewModel)[] = []>(
	barCode: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_KeyValueIntViewModel, RNU>>>(
		`/${FirmCode}/flow/VirtueFund/SearchAllFamilyInfoByBarCode?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowVirtueFundDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundPendingAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundRejectAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundDynamicRejectAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundResetAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundSaveDraft = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowVirtueFundSubmitAudit = <NUDATA extends (keyof AT_FlowVirtueFundModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowVirtueFundModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/VirtueFund/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowVirtueFundGetVirtueFundByFlowId = <RNU extends (keyof AT_FlowModelVirtueFundViewModelTuple)[] = []>(
	flowId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelVirtueFundViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/VirtueFund/GetVirtueFundByFlowId?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowVirtueFundGetSomeStaffInfoByVirtueSubject = <RNU extends (keyof AT_VirtueFundDetailsModel)[] = []>(
	subjectId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VirtueFundDetailsModel, RNU>[]>>(
		`/${FirmCode}/flow/VirtueFund/GetSomeStaffInfoByVirtueSubject?${subjectId ? 'subjectId=' + subjectId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowVirtueFundGetVirtueFundDetailsByBarCode = <RNU extends (keyof AT_VirtueFundDetailsModel)[] = []>(
	subjectId: any,
	FirmCode: any,
	data: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_VirtueFundDetailsModel, RNU>[]>>(
		`/${FirmCode}/flow/VirtueFund/GetVirtueFundDetailsByBarCode?${subjectId ? 'subjectId=' + subjectId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`,
		data
	);
};
export const postFirmCodeflowVirtueFundDeleteVirtueFund = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/VirtueFund/DeleteVirtueFund?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowVirtueFundGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/VirtueFund/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowVirtueFundGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/VirtueFund/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeVirtueSubjectGetVirtueSubjectToPage = <
	RNU extends (keyof AT_VirtueSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_VirtueSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_VirtueSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_VirtueSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/VirtueSubject/GetVirtueSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeVirtueSubjectSaveVirtueSubject = <NUDATA extends (keyof AT_VirtueSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_VirtueSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/VirtueSubject/SaveVirtueSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeVirtueSubjectGetVirtueSubjectById = <RNU extends (keyof AT_VirtueSubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VirtueSubjectModel, RNU>>>(
		`/${FirmCode}/VirtueSubject/GetVirtueSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeVirtueSubjectSearchAllVirtueSubject = <RNU extends (keyof AT_VirtueSubjectModel)[] = []>(
	isNotBirthday: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_VirtueSubjectModel, RNU>[]>>(
		`/${FirmCode}/VirtueSubject/SearchAllVirtueSubject?${isNotBirthday ? 'isNotBirthday=' + isNotBirthday : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeVirtueSubjectDeleteVirtueSubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/VirtueSubject/DeleteVirtueSubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowWelfareGetWelfareToPage = <
	RNU extends (keyof AT_WelfarePageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_WelfareQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_WelfareQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_WelfarePageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/flow/Welfare/GetWelfareToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeflowWelfareBatchExportWelfare = <NUDATA extends (keyof AT_WelfareQueryModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_WelfareQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/BatchExportWelfare?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowWelfareGetWelfareByUser = <RNU extends (keyof AT_GetWelfareByUserModel)[] = []>(barCode: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_GetWelfareByUserModel, RNU>[]>>(
		`/${FirmCode}/flow/Welfare/GetWelfareByUser?${barCode ? 'barCode=' + barCode : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const postFirmCodeflowWelfareDynamicSubmitAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/DynamicSubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfarePendingAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/PendingAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfareRejectAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/RejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfareDynamicRejectAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/DynamicRejectAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfareResetAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/ResetAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfareSaveDraft = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/SaveDraft?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeflowWelfareSubmitAudit = <NUDATA extends (keyof AT_FlowWelfareModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_FlowWelfareModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/flow/Welfare/SubmitAudit?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const getFirmCodeflowWelfareGetWelfareByFlowId = <RNU extends (keyof AT_FlowModelWelfareViewModelTuple)[] = []>(
	flowId: any,
	detailsId: any,
	FirmCode: any
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModelWelfareViewModelTuple, RNU>>>(
		`/${FirmCode}/flow/Welfare/GetWelfareByFlowId?${flowId ? 'flowId=' + flowId : ''}&${detailsId ? 'detailsId=' + detailsId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeflowWelfareDeleteWelfare = (flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/flow/Welfare/DeleteWelfare?${flowId ? 'flowId=' + flowId : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeflowWelfareGetFlowInfo = <RNU extends (keyof AT_FlowModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowModel, RNU>>>(
		`/${FirmCode}/flow/Welfare/GetFlowInfo?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const getFirmCodeflowWelfareGetFlowChat = <RNU extends (keyof AT_FlowChatModel)[] = []>(popupKey: any, flowId: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_FlowChatModel, RNU>[]>>(
		`/${FirmCode}/flow/Welfare/GetFlowChat?${popupKey ? 'popupKey=' + popupKey : ''}&${flowId ? 'flowId=' + flowId : ''}&${
			FirmCode ? 'FirmCode=' + FirmCode : ''
		}`
	);
};
export const postFirmCodeWelfareSubjectGetWelfareSubjectToPage = <
	RNU extends (keyof AT_WelfareSubjectPageModelIEnumerableInt32Tuple)[] = [],
	NUDATA extends (keyof AT_WelfareSubjectQueryModel)[] = [],
>(
	FirmCode: any,
	data: U_I_NoNull<AT_WelfareSubjectQueryModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<U_I_NoNull<AT_WelfareSubjectPageModelIEnumerableInt32Tuple, RNU>>>(
		`/${FirmCode}/WelfareSubject/GetWelfareSubjectToPage?${FirmCode ? 'FirmCode=' + FirmCode : ''}`,
		data
	);
};
export const postFirmCodeWelfareSubjectSaveWelfareSubject = <NUDATA extends (keyof AT_WelfareSubjectModel)[] = []>(
	FirmCode: any,
	data: U_I_NoNull<AT_WelfareSubjectModel, NUDATA>
) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(`/${FirmCode}/WelfareSubject/SaveWelfareSubject?${FirmCode ? 'FirmCode=' + FirmCode : ''}`, data);
};
export const postFirmCodeWelfareSubjectDeleteWelfareSubject = (id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.post<ResponseData<any>>(
		`/${FirmCode}/WelfareSubject/DeleteWelfareSubject?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export const getFirmCodeWelfareSubjectGetWelfareSubjectById = <RNU extends (keyof AT_WelfareSubjectModel)[] = []>(id: any, FirmCode: any) => {
	if (!FirmCode) {
		FirmCode = COMPANY_CODE;
	}
	return axios.get<ResponseData<U_I_NoNull<AT_WelfareSubjectModel, RNU>>>(
		`/${FirmCode}/WelfareSubject/GetWelfareSubjectById?${id ? 'id=' + id : ''}&${FirmCode ? 'FirmCode=' + FirmCode : ''}`
	);
};
export declare interface AT_AccountManagerModel {
	/*员工子编码*/
	barCode?: string;
	/*登录名*/
	loginName?: string;
	/*姓名*/
	name?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
}

export declare interface AT_AccountManagerPageModel {
	/*姓名*/
	name?: string;
	/*员工编码*/
	employeeCode?: string;
	/*员工编码*/
	barCode?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*电话号码*/
	phone?: string;
	/*微信*/
	webChat?: string;
	/*系统登录名*/
	loginName?: string;
}

export declare interface AT_AccountManagerPageModelIEnumerableInt32Tuple {
	item1?: AT_AccountManagerPageModel[];
	item2: number;
}

export declare interface AT_AccountManagerQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	name?: AT_QueryString;
	/*账号*/
	loginName?: AT_QueryString;
}

export declare interface AT_AccountModel {
	/*账号编码*/
	accountCode?: string;
	/*登录名*/
	loginName?: string;
}

export declare interface AT_AccountToStaffModel {
	/*员工子编码*/
	barCode?: string;
	/*登录名*/
	loginName?: string;
}

export enum AT_AffinityEnum {
	不契合 = 1,
	契合 = 2,
	基本契合 = 3,
	无法判断 = 4,
}

export declare interface AT_AssentAllocationDetailsModel {
	/*资产管理Id*/
	id: number;
	/*使用人*/
	applyUser?: string;
	/*使用部门*/
	applyDep?: string;
	/*存放地点*/
	savePlace?: string;
}

export declare interface AT_AssentAllocationModel {
	/*固资申请明细Id*/
	id: number;
	/*分配明细*/
	assentAllocationDetailsList?: AT_AssentAllocationDetailsModel[];
}

export declare interface AT_AssessAttachmentModel {
	/*考核主表ID*/
	assessId: number;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_AssessModel {
	/*Id (编辑传入)*/
	id: number;
	/*被考核人*/
	beCheckUser: string;
	/*被考核人部门*/
	beCheckDep: string;
	/*被考核人岗位*/
	beCheckPost: string;
	/*考核类型：日常，实习，转正

1 = 实习

2 = 试用

3 = 日常*/
	checkType: AT_AssessType;
	/*考核时间*/
	checkDate: string;
	/*考核场地*/
	meetRoomId: number;
	/*主持人*/
	hostUser: string;
	/*考核记录*/
	checkRecord: string;
	/*考核结果：通过，未通过，继续实习，继续试用

1 = 通过

2 = 淘汰

3 = 继续实习

4 = 继续试用*/
	checkResult: AT_AssessResult;
	/*考核建议*/
	checkSuggest: string;
	/*考官*/
	checkStaffs?: string[];
	/*考核附件*/
	assessAttachmentList?: AT_AssessAttachmentModel[];
}

export declare interface AT_AssessPageModel {
	/*考核ID*/
	id: number;
	/*被考核人*/
	beCheckUser?: string;
	/*被考核人部门*/
	beCheckDep?: string;
	/*被考核人岗位*/
	beCheckPost?: string;
	/*考核类型

1 = 实习

2 = 试用

3 = 日常*/
	checkType?: AT_AssessType;
	/*考核类型

1 = 实习

2 = 试用

3 = 日常*/
	readonly checkTypeText?: AT_AssessType;
	/*考核时间*/
	checkDate?: string;
	/*考核场地*/
	meetRoom?: string;
	/*主持人*/
	hostUser?: string;
	/*考官*/
	checkStaffs?: string;
	/*考核结果：通过，未通过，继续实习，继续试用

1 = 通过

2 = 淘汰

3 = 继续实习

4 = 继续试用*/
	checkResult?: AT_AssessResult;
	/*考核结果：通过，未通过，继续实习，继续试用

1 = 通过

2 = 淘汰

3 = 继续实习

4 = 继续试用*/
	readonly checkResultText?: AT_AssessResult;
}

export declare interface AT_AssessPageModelIEnumerableInt32Tuple {
	item1?: AT_AssessPageModel[];
	item2: number;
}

export declare interface AT_AssessQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*被考核人*/
	beCheckUser?: AT_QueryString;
	/*被考核人部门*/
	beCheckDep?: AT_QueryString;
	/*被考核人岗位*/
	beCheckPost?: AT_QueryString;
	/*考核时间*/
	checkDate?: AT_QueryDateTime;
	/*考核结果*/
	checkResult?: AT_QueryList;
}

export enum AT_AssessResult {
	通过 = 1,
	淘汰 = 2,
	继续实习 = 3,
	继续试用 = 4,
}

export enum AT_AssessType {
	实习 = 1,
	试用 = 2,
	日常 = 3,
}

export declare interface AT_AssetApplyDetailsModel {
	/*固资名称：固资定义表ID*/
	assetDefineId: number;
	/*申请数量*/
	applyAmount: number;
	/*备注*/
	note: string;
	/*规格型号(还原用，传入不用管)*/
	specsModel?: string;
	/*编码(还原用，传入不用管)*/
	categoryNumber?: string;
	/*大类(还原用，传入不用管)*/
	categoryNameOne?: string;
	/*小类(还原用，传入不用管)*/
	categoryNameTwo?: string;
	/*固资名称(还原用，传入不用管)*/
	categoryNameThree?: string;
	/*单位(还原用，传入不用管)*/
	unitName?: string;
}

export declare interface AT_AssetApplyModel {
	/*申请人*/
	applyUser: string;
	/*申请人*/
	applyUserName: string;
	/*部门*/
	depCode: string;
	/*申请说明*/
	applyNote: string;
	/*申请明细*/
	assetApplyDetailsList?: AT_AssetApplyDetailsModel[];
}

export declare interface AT_AssetApplyPageModel {
	/*固资申请明细Id*/
	id: number;
	/*固资申请Id*/
	applyId: number;
	/*固资申请明细状态（0待分配，1已分配,2部分分配）

0 = 待分配

1 = 已分配

2 = 部分分配*/
	assetApplyState: AT_AssetApplyState;
	/*固资申请明细状态（0待分配，1已分配,2部分分配）

0 = 待分配

1 = 已分配

2 = 部分分配*/
	readonly assetApplyStateText: AT_AssetApplyState;
	/*固资Id*/
	assetDefineId: number;
	/*固资申请流程id*/
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
	/*资产采购流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	assetPurchaseFlowState: AT_FlowListStateEnum;
	/*资产采购流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly assetPurchaseFlowStateText: AT_FlowListStateEnum;
	/*申请时间*/
	applyTime?: string;
	/*申请人*/
	applyUserName?: string;
	/*申请人部门*/
	depName?: string;
	/*大类*/
	bigName?: string;
	/*小类*/
	smallName?: string;
	/*资产名称*/
	categoryName?: string;
	/*申请数量*/
	applyAmount?: number;
	/*分配数量*/
	divideAmount?: number;
	/*物质备注*/
	note?: string;
	/*申请说明*/
	applyNote?: string;
	/*转单状态

1 = 已转

2 = 未转*/
	turnState?: AT_TurnStateEnum;
	/*转单状态

1 = 已转

2 = 未转*/
	readonly turnStateText?: AT_TurnStateEnum;
	/*采购编码*/
	assetPurchaseCode?: string;
}

export declare interface AT_AssetApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_AssetApplyPageModel[];
	item2: number;
}

export declare interface AT_AssetApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*固资申请明细状态*/
	assetApplyState?: AT_QueryList;
	/*大类*/
	bigName?: AT_QueryString;
	/*小类*/
	smallName?: AT_QueryString;
	/*固资名称*/
	categoryName?: AT_QueryString;
	/*申请人*/
	applyUser?: AT_QueryString;
}

export enum AT_AssetApplyState {
	待分配 = 0,
	已分配 = 1,
	部分分配 = 2,
}

export declare interface AT_AssetApplyViewModel {
	/*申请人*/
	applyUser: string;
	/*部门*/
	depCode: string;
	/*申请说明*/
	applyNote: string;
	/*申请明细*/
	assetApplyDetailsList?: AT_AssetApplyDetailsModel[];
	/*ID*/
	id: number;
	/*申请人*/
	applyUserName?: string;
	/*部门*/
	depName?: string;
	/*固资定义Id*/
	assetDefineId: number;
	/*申请数量*/
	applyAmount: string;
	/*备注*/
	note: string;
}

export declare interface AT_AssetAttachmentModel {
	/*固资定义表ID*/
	assetDefineId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
	/*是否主图：否，是*/
	isMain?: number;
}

export declare interface AT_AssetCompanyModel {
	/*资产所属公司*/
	companyName: string;
}

export declare interface AT_AssetDefineDropDownModel {
	/*Id*/
	id: number;
	/*状态*/
	state: number;
	/*大类名称*/
	categoryNameOne?: string;
	/*小类名称*/
	categoryNameTwo?: string;
	/*资产名称*/
	categoryNameThree?: string;
	/*规格型号*/
	specsModel?: string;
	/*资产编号*/
	categoryNumber?: string;
	/*流水号*/
	serialNumber?: string;
	/*含税单价*/
	unitPrice?: number;
	/*税率*/
	taxRate: number;
	/*单位*/
	unitName?: string;
	/*使用年限*/
	useLife?: string;
	/*保修期(年)*/
	warranty: number;
}

export enum AT_AssetDefineLevel {
	大类 = 1,
	小类 = 2,
	资产 = 3,
}

export declare interface AT_AssetDefineModel {
	/*类别级别：大类，小类，资产

1 = 大类

2 = 小类

3 = 资产*/
	level: AT_AssetDefineLevel;
	/*状态：启用，停用*/
	state: number;
	/*上级类别*/
	upLevel?: number;
	/*类别名称*/
	categoryName: string;
	/*类别编码*/
	categoryNumber?: string;
	/*使用年限*/
	useLife?: number;
	/*含税单价*/
	unitPrice?: number;
	/*税率(%)*/
	taxRate?: number;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*保修期(年)*/
	warranty?: number;
	/*流水号*/
	serialNumber?: string;
	/*附件*/
	assetAttachments?: AT_AssetAttachmentModel[];
}

export declare interface AT_AssetDefinePageModel {
	/*Id*/
	id: number;
	/*状态*/
	state: number;
	/*大类名称*/
	categoryNameOne?: string;
	/*小类名称*/
	categoryNameTwo?: string;
	/*资产名称*/
	categoryNameThree?: string;
	/*资产编号*/
	categoryNumber?: string;
	/*流水号*/
	serialNumber?: string;
	/*含税单价*/
	unitPrice?: number;
	/*规格型号*/
	specsModel?: string;
	/*税率*/
	taxRate: number;
	/*单位*/
	unitName?: string;
	/*使用年限*/
	useLife?: string;
	/*保修期(年)*/
	warranty: number;
	/*更新时间*/
	addTime?: string;
	/*更新人*/
	addUserName?: string;
}

export declare interface AT_AssetDefinePageModelIEnumerableInt32Tuple {
	item1?: AT_AssetDefinePageModel[];
	item2: number;
}

export declare interface AT_AssetDefineQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*资产三级Id*/
	assetThreeId?: AT_QueryInt;
	/*资产二级Id*/
	assetTwoId?: AT_QueryInt;
	/*资产一级Id*/
	assetOneId?: AT_QueryInt;
}

export declare interface AT_AssetDefineTreeListModel {
	id: number;
	/*类别级别：大类，小类，资产

1 = 大类

2 = 小类

3 = 资产*/
	level: AT_AssetDefineLevel;
	/*状态：启用，停用*/
	state: number;
	/*上级类别*/
	upLevel?: number;
	/*类别名称*/
	categoryName?: string;
	/*子集*/
	childList?: AT_AssetDefineTreeListModel[];
}

export declare interface AT_AssetDefineViewModel {
	/*类别级别：大类，小类，资产

1 = 大类

2 = 小类

3 = 资产*/
	level: AT_AssetDefineLevel;
	/*状态：启用，停用*/
	state: number;
	/*上级类别*/
	upLevel?: number;
	/*类别名称*/
	categoryName: string;
	/*类别编码*/
	categoryNumber?: string;
	/*使用年限*/
	useLife?: number;
	/*含税单价*/
	unitPrice?: number;
	/*税率(%)*/
	taxRate?: number;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*保修期(年)*/
	warranty?: number;
	/*流水号*/
	serialNumber?: string;
	/*附件*/
	assetAttachments?: AT_AssetAttachmentModel[];
	id: number;
}

export declare interface AT_AssetLedgerCompanyPageModel {
	/*ID*/
	id: number;
	/*公司名称*/
	companyName?: string;
}

export declare interface AT_AssetLedgerCompanyPageModelIEnumerableInt32Tuple {
	item1?: AT_AssetLedgerCompanyPageModel[];
	item2: number;
}

export declare interface AT_AssetLedgerCompanyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*公司名称*/
	companyName?: AT_QueryString;
}

export declare interface AT_AssetLedgerDetailsModel {
	/*固资定义ID*/
	assetDefineId: number;
	/*大类*/
	categoryNameOne?: string;
	/*小类*/
	categoryNameTwo?: string;
	/*资产名称*/
	categoryNameThree?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*入库数量*/
	buyAmount: number;
	/*采购价*/
	buyPrice: number;
	/*采购金额*/
	buyMoney?: number;
	/*税率(%)*/
	taxRate: number;
	/*保修期*/
	warranty: number;
	/*使用年限*/
	useLife: number;
	/*流水号（还原用，提交不用管）*/
	serialNumber?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_AssetLedgerModel {
	/*购置人*/
	buyUser: string;
	/*购置人部门*/
	depCode: string;
	/*购置日期*/
	buyDate: string;
	/*供应商*/
	supplierName: string;
	/*说明*/
	note?: string;
	/*发票抬头*/
	invoiceHeader?: string;
	/*资产所属公司*/
	assetCompanyId: number;
	/*发票类型：专票，普票*/
	invoiceType: number;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
	/*购置明细*/
	assetLedgerDetails?: AT_AssetLedgerDetailsModel[];
}

export declare interface AT_AssetLedgerPageModel {
	/*固资管理ID*/
	id: number;
	/*资产台账Id*/
	assetLedgerId: number;
	/*固资管理ID*/
	assetManageId: number;
	/*资产定义ID*/
	assetDefineId: number;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*状态：待分配，已分配，已报废，盘亏

1 = 待分配

2 = 已分配

3 = 已报废

4 = 盘亏

5 = 已出租*/
	state?: AT_AssetManageState;
	/*状态文本

1 = 待分配

2 = 已分配

3 = 已报废

4 = 盘亏

5 = 已出租*/
	readonly stateText?: AT_AssetManageState;
	/*资产编号：固资定义表类别编码+累计数*/
	assetNumber?: string;
	/*是否已贴标：否，是*/
	isLabel?: number;
	readonly isLabelText?: string;
	/*存放地点*/
	savePlace?: string;
	/*发票抬头*/
	invoiceHeader?: string;
	/*资产所属公司*/
	companyName?: string;
	/*大类*/
	bigName?: string;
	/*小类*/
	smallName?: string;
	/*资产名称*/
	assetName?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*使用部门*/
	useDepName?: string;
	/*使用人*/
	useUserName?: string;
	/*变更日期*/
	modifyDate?: string;
	/*变更日期*/
	readonly modifyDateText?: string;
	/*购置部门*/
	buyDepName?: string;
	/*购置人*/
	buyUserName?: string;
	/*购置日期*/
	buyDate?: string;
	/*购置日期*/
	readonly buyDateText?: string;
	/*发票类型：专票，普票

1 = 专票

2 = 普票*/
	invoiceType?: AT_InvoiceType;
	/*发票类型文本值

1 = 专票

2 = 普票*/
	readonly invoiceTypeText?: AT_InvoiceType;
	/*开票日期*/
	invoiceDate?: string;
	/*开票日期*/
	readonly invoiceDateTex?: string;
	/*发票号*/
	invoiceNo?: string;
	/*不含税金额*/
	notIncludTaxMoney?: number;
	/*含税金额*/
	includTaxMoney?: number;
	/*月折旧额*/
	monthDepreciaMoney?: number;
	/*累计折旧期间*/
	totalDepreciaMonth?: number;
	/*累计折旧金额*/
	totalDepreciaMoney?: number;
	/*净值*/
	netWorth?: number;
	/*使用年限*/
	useLife?: string;
	/*保修期(年)*/
	warranty?: number;
	/*备注*/
	note?: string;
	/*出租方*/
	lessor?: string;
	/*出租负责人*/
	lessorHead?: string;
}

export declare interface AT_AssetLedgerPageModelIEnumerableInt32Tuple {
	item1?: AT_AssetLedgerPageModel[];
	item2: number;
}

export declare interface AT_AssetLedgerQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*资产所属公司*/
	companyName?: AT_QueryString;
	/*大类*/
	bigName?: AT_QueryString;
	/*小类*/
	smallName?: AT_QueryString;
	/*资产名称*/
	assetName?: AT_QueryString;
	/*资产名称Id*/
	assetDefineId?: AT_QueryString;
	/*资产编号*/
	assetNumber?: AT_QueryString;
	/*购置日期*/
	buyDate?: AT_QueryDateTime;
	/*开票日期*/
	invoiceDate?: AT_QueryDateTime;
	/*发票号*/
	invoiceNo?: AT_QueryString;
	/*存在地点*/
	savePlace?: AT_QueryString;
	/*使用部门*/
	useDepName?: AT_QueryString;
	/*购置部门*/
	buyDepName?: AT_QueryString;
	/*使用人*/
	useUserName?: AT_QueryString;
	/*变更日期*/
	updTime?: AT_QueryDateTime;
	/*购置人*/
	buyUserName?: AT_QueryString;
	/*规格型号*/
	specsModel?: AT_QueryString;
	/*出租方*/
	lessor?: AT_QueryString;
	/*出租负责人*/
	lessorHead?: AT_QueryString;
}

export declare interface AT_AssetLedgerViewModel {
	/*购置人*/
	buyUser: string;
	/*购置人部门*/
	depCode: string;
	/*购置日期*/
	buyDate: string;
	/*供应商*/
	supplierName: string;
	/*说明*/
	note?: string;
	/*发票抬头*/
	invoiceHeader?: string;
	/*资产所属公司*/
	assetCompanyId: number;
	/*发票类型：专票，普票*/
	invoiceType: number;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
	/*购置明细*/
	assetLedgerDetails?: AT_AssetLedgerDetailsModel[];
	/*Id*/
	id: number;
	/*流程*/
	flowId: number;
	/*购置人*/
	buyUserName?: string;
	/*购置人部门*/
	depName?: string;
}

export declare interface AT_AssetLessorModel {
	/*Id(新增不用管)*/
	id: number;
	/*出租方*/
	lessor?: string;
	/*出租负责人*/
	lessorHead?: string;
}

export declare interface AT_AssetLessorPageModel {
	/*自增ID*/
	id: number;
	/*出租方编码：3146*/
	assetLessorCode?: string;
	/*出租方*/
	lessor?: string;
	/*出租负责人*/
	lessorHead?: string;
}

export declare interface AT_AssetLessorPageModelIEnumerableInt32Tuple {
	item1?: AT_AssetLessorPageModel[];
	item2: number;
}

export declare interface AT_AssetLessorQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*出租方*/
	lessor?: string;
	/*出租负责人*/
	lessorHead?: string;
}

export declare interface AT_AssetLessorViewModel {
	/*Id(新增不用管)*/
	id: number;
	/*出租方*/
	lessor?: string;
	/*出租负责人*/
	lessorHead?: string;
	/*出租方编码*/
	assetLessorCode?: string;
}

export enum AT_AssetManageState {
	待分配 = 1,
	已分配 = 2,
	已报废 = 3,
	盘亏 = 4,
	已出租 = 5,
}

export declare interface AT_AssetPurchaseCCModel {
	/*Id(新增不传)*/
	id?: number;
	/*抄送人*/
	copyUser?: string;
	/*抄送人*/
	copyUsersName?: string;
}

export declare interface AT_AssetPurchaseDetailsModel {
	/*Id(新增不传)*/
	id?: number;
	/*申请明细Id(转单才传)*/
	assetApplyDetailsId?: number;
	/*固资定义ID*/
	assetDefineId: number;
	/*规格型号*/
	specsModel?: string;
	/*采购单价*/
	purchasePrice: number;
	/*采购数量*/
	purchaseAmount: number;
	/*采购金额*/
	purchaseMoney: number;
}

export declare interface AT_AssetPurchaseDetailsViewModel {
	/*Id(新增不传)*/
	id?: number;
	/*申请明细Id(转单才传)*/
	assetApplyDetailsId?: number;
	/*固资定义ID*/
	assetDefineId: number;
	/*规格型号*/
	specsModel?: string;
	/*采购单价*/
	purchasePrice: number;
	/*采购数量*/
	purchaseAmount: number;
	/*采购金额*/
	purchaseMoney: number;
	/*大类*/
	bigName?: string;
	/*小类*/
	smallName?: string;
	/*资产类型Id*/
	assetTypeId?: number;
	/*资产类型*/
	assetTypeText?: string;
	/*资产名称Id*/
	categoryNameId?: number;
	/*资产名称*/
	categoryNameText?: string;
	/*单位*/
	unitName?: string;
}

export declare interface AT_AssetPurchaseModel {
	/*所属公司*/
	assetCompanyId: number;
	/*供应商*/
	supplierName: string;
	/*是否生成付款：否，是*/
	isPayment: number;
	/*付款金额*/
	money?: number;
	/*付款方式：对私付款，对公付款

1 = 对私付款

2 = 对公付款*/
	payMethod?: AT_PayMethodEnum;
	/*银行编码：对私【员工银行信息表通用编码】对公【空】*/
	bankCode?: string;
	/*银行信息*/
	bankText?: string;
	/*收款单位*/
	collectUnit?: string;
	/*收款银行*/
	collectBank?: string;
	/*收款账号*/
	collectCard?: string;
	/*通知弹窗Key*/
	popupKey?: string;
	/*抄送人*/
	copyUsers?: AT_AssetPurchaseCCModel[];
	/*说明*/
	note?: string;
	/*采购明细*/
	assetPurchaseDetails?: AT_AssetPurchaseDetailsModel[];
}

export declare interface AT_AssetPurchasePageModel {
	/*资产采购明细Id*/
	id: number;
	/*资产采购流程Id*/
	flowId: number;
	/*资产采购流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款

-1 = 无需付款*/
	payState?: AT_AssetPurchasePayStateEnum;
	/*付款编码*/
	payCode?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款

-1 = 无需付款*/
	readonly payStateText?: AT_AssetPurchasePayStateEnum;
	/*入库状态

1 = 已入库

2 = 未入库*/
	stockState?: AT_StockStateEnum;
	/*入库状态

1 = 已入库

2 = 未入库*/
	readonly stockStateText?: AT_StockStateEnum;
	/*所属公司*/
	companyName?: string;
	/*大类*/
	categoryNameOne?: string;
	/*小类*/
	categoryNameTwo?: string;
	/*资产名称*/
	categoryNameThree?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*采购数量*/
	purchaseAmount?: number;
	/*采购单价*/
	purchasePrice?: number;
	/*采购金额*/
	purchaseMoney?: number;
	/*供应商*/
	supplierName?: string;
	/*是否生成付款*/
	isPayment?: number;
	/*制单人*/
	addUserName?: string;
	/*制单时间*/
	addTime?: string;
	/*资产采购单号*/
	assetPurchaseCode?: string;
	/*说明*/
	note?: string;
}

export declare interface AT_AssetPurchasePageModelIEnumerableInt32Tuple {
	item1?: AT_AssetPurchasePageModel[];
	item2: number;
}

export enum AT_AssetPurchasePayStateEnum {
	待付款 = 0,
	部分付款 = 1,
	已付款 = 2,
	无需付款 = -1,
}

export declare interface AT_AssetPurchaseQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*付款状态*/
	payState?: AT_QueryList;
	/*资产所属公司*/
	companyName?: AT_QueryList;
	/*入库状态*/
	stockState?: AT_QueryList;
	/*大类*/
	categoryNameOne?: AT_QueryString;
	/*小类*/
	categoryNameTwo?: AT_QueryString;
	/*资产名称*/
	categoryNameThree?: AT_QueryString;
	/*是否生成付款*/
	isPayment?: AT_QueryList;
	/*资产采购单号*/
	assetPurchaseCode?: AT_QueryString;
	/*制单人*/
	addUserName?: AT_QueryString;
}

export declare interface AT_AssetPurchaseViewModel {
	/*所属公司*/
	assetCompanyId: number;
	/*供应商*/
	supplierName: string;
	/*是否生成付款：否，是*/
	isPayment: number;
	/*付款金额*/
	money?: number;
	/*付款方式：对私付款，对公付款

1 = 对私付款

2 = 对公付款*/
	payMethod?: AT_PayMethodEnum;
	/*银行编码：对私【员工银行信息表通用编码】对公【空】*/
	bankCode?: string;
	/*银行信息*/
	bankText?: string;
	/*收款单位*/
	collectUnit?: string;
	/*收款银行*/
	collectBank?: string;
	/*收款账号*/
	collectCard?: string;
	/*通知弹窗Key*/
	popupKey?: string;
	/*抄送人*/
	copyUsers?: AT_AssetPurchaseCCModel[];
	/*说明*/
	note?: string;
	/*采购明细*/
	assetPurchaseDetails?: AT_AssetPurchaseDetailsModel[];
	id: number;
	/*采购编码：固资采购表*/
	assetPurchaseCode?: string;
	/*所属公司*/
	assetCompanyName?: string;
	/*采购明细*/
	assetPurchaseDetailsViewModel?: AT_AssetPurchaseDetailsViewModel[];
}

export declare interface AT_AssetRecordModel {
	/*固资管理ID*/
	assetManageId: number;
	/*修改的字段名称*/
	fieldName?: string;
	/*修改前值*/
	oldValue?: string;
	/*修改后值*/
	newValue?: string;
	/*更新人*/
	updUser?: string;
	/*更新人*/
	updUserName?: string;
}

export enum AT_AuditObjRela {
	One = 0,
	Or = 1,
	And = 2,
}

export declare interface AT_AuthorizationInfoModel {
	/*页面路由id*/
	sysRouteId: number;
	/*权限key*/
	authoriztionKey: number;
	/*权限名*/
	authoriztionName: string;
	/*是否是数据通用权限（0否，1是）*/
	isCommonAuthorization: number;
	/*权限关联弹窗*/
	popupKey?: string;
	/*权限项值(指定的值，可为空)*/
	authorizationItemValues?: string[];
	/*权限类型（1，数据，2按钮）

1 = 数据

2 = 按钮

3 = 导出

4 = 审核*/
	authorizationType: AT_AuthorizationType;
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
	审核 = 4,
}

export declare interface AT_AuthorizationViewModel {
	/*页面路由id*/
	routeId: number;
	/*路由唯一key*/
	routeKey?: string;
	/*特殊权限项（前后端自定义权限项）*/
	authorizationItems?: AT_RouteAuthorizationItemModel[];
	/*通用数据权限*/
	commonAuthorizationItems?: AT_AuthorizationItemModel[];
}

export enum AT_BackState {
	待回款 = 0,
	部分回款 = 1,
	全部回款 = 2,
}

export declare interface AT_BackToTheModel {
	/*面试主表Id*/
	interviewId: number;
	/*调查情况*/
	surveyNote?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*附件*/
	behindSurveyAttachmentList?: AT_BehindSurveyAttachmentModel[];
}

export declare interface AT_BackToTheViewModel {
	/*面试主表Id*/
	interviewId: number;
	/*调查情况*/
	surveyNote?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*附件*/
	behindSurveyAttachmentList?: AT_BehindSurveyAttachmentModel[];
	/*自增ID*/
	id: number;
	/*姓名*/
	name?: string;
	/*应聘部门*/
	dep?: string;
	/*应聘岗位*/
	post?: string;
}

export declare interface AT_BatchEnterInvoice {
	/*固资管理Ids*/
	ids?: number[];
	/*发票抬头*/
	invoiceHeader?: string;
	/*发票类型：专票，普票*/
	invoiceType?: number;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
}

export declare interface AT_BatchUpdateAssetManageModel {
	/*固资管理Id集合*/
	ids?: number[];
	/*状态：待分配，已分配，已报废，盘亏*/
	state?: number;
	/*是否已贴标：否，是*/
	isLabel?: number;
	/*存放地点*/
	savePlace?: string;
	/*使用人*/
	useUser?: string;
	/*使用部门*/
	depCode?: string;
	/*资产所属公司*/
	companyName?: string;
	/*资产所属公司*/
	assetCompanyId?: number;
	/*发票类型：专票，普票*/
	invoiceType?: number;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
	/*修改记录集合*/
	assetRecords?: AT_AssetRecordModel[];
}

export declare interface AT_BehindSurveyAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*附件图标*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_BehindSurveyInfo {
	name?: string;
	depCode?: string;
	depName?: string;
	postName?: string;
	postCode?: string;
}

export enum AT_BirthdayType {
	公历 = 1,
	农历 = 2,
}

export declare interface AT_BlockVehicleModel {
	/*自增ID*/
	id: number;
	/*停用时间*/
	stopTime: string;
	/*停用原因*/
	stopNote?: string;
	/*附件*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export declare interface AT_BorrowAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_BorrowInterestModel {
	/*借支单编码*/
	borrowCode: string;
	/*利息金额*/
	interestMoney: number;
	/*摘要*/
	summary?: string;
}

export declare interface AT_BorrowInterestViewModel {
	/*借支单编码*/
	borrowCode: string;
	/*利息金额*/
	interestMoney: number;
	/*摘要*/
	summary?: string;
	/*数据类型：0 手动生成 1 自动生成*/
	dataType: number;
	/*数据类型*/
	readonly dataTypeText?: string;
	/*利息添加人*/
	addUser?: string;
	/*利息添加时间*/
	addTime?: string;
}

export declare interface AT_BorrowModel {
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*实际借款人*/
	actualBorrowUser: string;
	/*借款金额*/
	borrowMoney: number;
	/*收款账户编码*/
	staffBankCode: string;
	/*收款信息文本 格式 开户名,开户行,账户*/
	staffBankText: string;
	/*借款日期*/
	borrowDate: string;
	/*还款日期*/
	repaymentDate: string;
	/*还款方式

1 = 按还款日期

2 = 按月平均还款*/
	repaymentMode: AT_RepaymentMode;
	/*借支说明*/
	summary: string;
	/*利息计算方式

1 = 不计息

2 = 按日计息

3 = 按月计息

4 = 按年计息*/
	interestType: AT_InterestType;
	/*利率*/
	interestRat: number;
	/*利率单位：%，‰

1 = 百分

2 = 千分*/
	interestRatUnit?: AT_InterestRatUnitType;
	/*利息计算开始时间*/
	interestStartTime?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*借支附件*/
	borrowAttachmentList?: AT_BorrowAttachmentModel[];
}

export declare interface AT_BorrowPageModel {
	/*Id*/
	id: number;
	/*借支单状态 未还清 已还清 部分还款

0 = 未还清

1 = 已还清*/
	borrowState: AT_BorrowState;
	/*借支单状态 未还清 已还清  部分还款

0 = 未还清

1 = 已还清*/
	readonly borrowStateText: AT_BorrowState;
	/*借支单编码*/
	borrowCode?: string;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*申请人*/
	name?: string;
	/*申请人部门*/
	dep?: string;
	/*实际借款人*/
	actualBorrow?: string;
	/*还款日期*/
	repaymentDate: string;
	/*还款方式

1 = 按还款日期

2 = 按月平均还款*/
	repaymentMode: AT_RepaymentMode;
	/*利息方式

1 = 不计息

2 = 按日计息

3 = 按月计息

4 = 按年计息*/
	interestType: AT_InterestType;
	/*利率*/
	interestRat?: number;
	/*利率单位：%，‰

1 = 百分

2 = 千分*/
	interestRatUnit?: AT_InterestRatUnitType;
	/*利息计算开始时间*/
	interestStartTime?: string;
	/*借款日期*/
	borrowDate: string;
	/*借款金额*/
	borrowMoney: number;
	/*未还款金额*/
	unpaidMoney?: number;
	/*利息合计*/
	sumInterest: number;
	/*未还利息*/
	unpaidInterest?: number;
	/*收款信息文本 格式 开户名,开户行,账户*/
	staffBankText?: string;
	/*摘要*/
	summary?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_BorrowPageModelIEnumerableInt32Tuple {
	item1?: AT_BorrowPageModel[];
	item2: number;
}

export declare interface AT_BorrowQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请人*/
	barName?: AT_QueryString;
	/*申请人部门*/
	dep?: AT_QueryString;
	/*实际借款人*/
	actualBorrow?: AT_QueryString;
	/*还款日期*/
	repaymentDate?: AT_QueryDateTime;
	/*借款日期*/
	borrowDate?: AT_QueryDateTime;
	/*还款方式*/
	repaymentMode?: AT_QueryList;
	/*利息方式*/
	interestType?: AT_QueryList;
	/*BarCode*/
	barCode?: AT_QueryString;
	/*借款金额*/
	borrowMoney?: AT_QueryDecimal;
	/*摘要（借支说明）*/
	summary?: AT_QueryString;
}

export enum AT_BorrowState {
	未还清 = 0,
	已还清 = 1,
}

export declare interface AT_BorrowUserModel {
	/*Id(新增不用管)*/
	id: number;
	/*借款人名称*/
	name: string;
	/*联系方式*/
	tel: string;
	/*联系地址*/
	address: string;
	/*备注*/
	note?: string;
}

export declare interface AT_BorrowUserPageModel {
	/*自增ID*/
	id: number;
	/*借款人名称*/
	name?: string;
	/*联系方式*/
	tel?: string;
	/*联系地址*/
	address?: string;
	/*备注*/
	note?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_BorrowUserPageModelIEnumerableInt32Tuple {
	item1?: AT_BorrowUserPageModel[];
	item2: number;
}

export declare interface AT_BorrowUserQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*借款人*/
	name?: AT_QueryString;
}

export declare interface AT_BorrowViewModel {
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*实际借款人*/
	actualBorrowUser: string;
	/*借款金额*/
	borrowMoney: number;
	/*收款账户编码*/
	staffBankCode: string;
	/*收款信息文本 格式 开户名,开户行,账户*/
	staffBankText: string;
	/*借款日期*/
	borrowDate: string;
	/*还款日期*/
	repaymentDate: string;
	/*还款方式

1 = 按还款日期

2 = 按月平均还款*/
	repaymentMode: AT_RepaymentMode;
	/*借支说明*/
	summary: string;
	/*利息计算方式

1 = 不计息

2 = 按日计息

3 = 按月计息

4 = 按年计息*/
	interestType: AT_InterestType;
	/*利率*/
	interestRat: number;
	/*利率单位：%，‰

1 = 百分

2 = 千分*/
	interestRatUnit?: AT_InterestRatUnitType;
	/*利息计算开始时间*/
	interestStartTime?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*借支附件*/
	borrowAttachmentList?: AT_BorrowAttachmentModel[];
	/*流程Id*/
	flowId: number;
	/*借支单编码*/
	borrowCode?: string;
	/*申请人*/
	name?: string;
	/*申请人部门*/
	dep?: string;
	/*实际借款人*/
	actualBorrow?: string;
	/*核算部门：红阳部门编码*/
	bamsDepName?: string;
	/*利率单位：%，‰

1 = 百分

2 = 千分*/
	readonly interestRatUnitText?: AT_InterestRatUnitType;
	/*还款明细*/
	repaymentRecordList?: AT_RepaymentRecordViewModel[];
	/*利息明细*/
	borrowInterestList?: AT_BorrowInterestViewModel[];
}

export declare interface AT_BusinessTripAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
}

export declare interface AT_BusinessTripModel {
	/*申请人*/
	applyUser: string;
	/*申请人*/
	applyUserName: string;
	/*申请人部门*/
	depCode: string;
	/*申请人岗位*/
	postCode: string;
	/*申请时间*/
	applyTime: string;
	/*出差说明*/
	note: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*出差时长：天*/
	duration: number;
	/*出发地省级*/
	fromProvinceId: number;
	/*出发地市级*/
	fromCityId: number;
	/*目的地文本*/
	destination: string;
	/*交通工具：汽车，火车，高铁，飞机，其他*/
	vehicle: number;
	/*出差人*/
	tripUsers?: AT_BusinessTripStaffModel[];
	/*附件*/
	businessTripAttachments?: AT_BusinessTripAttachmentModel[];
}

export declare interface AT_BusinessTripPageModel {
	/*自增ID*/
	id: number;
	/*申请人Code*/
	applyUser?: string;
	/*申请人Name*/
	applyUserName?: string;
	/*出差人Code*/
	tripUser?: string;
	/*出差人名称*/
	tripUserName?: string;
	/*申请人部门Code*/
	depCode?: string;
	/*申请人部门名称*/
	depName?: string;
	/*申请人岗位Code*/
	postCode?: string;
	/*申请人岗位名称*/
	postName?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*出差时长：天*/
	duration?: number;
	/*申请时间*/
	applyTime?: string;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*出差说明*/
	note?: string;
	/*出发地*/
	fromText?: string;
	/*目的地文本*/
	destination?: string;
}

export declare interface AT_BusinessTripPageModelIEnumerableInt32Tuple {
	item1?: AT_BusinessTripPageModel[];
	item2: number;
}

export declare interface AT_BusinessTripQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*出差人*/
	tripUserName?: AT_QueryString;
	/*申请人部门*/
	depName?: AT_QueryString;
	/*申请人岗位*/
	postName?: AT_QueryString;
	/*开始日期*/
	startDate?: AT_QueryDateTime;
	/*结束日期*/
	endDate?: AT_QueryDateTime;
}

export declare interface AT_BusinessTripStaffModel {
	/*自增ID*/
	id: number;
	/*出差人*/
	tripUser?: string;
}

export declare interface AT_BusinessTripViewModel {
	/*申请人*/
	applyUser: string;
	/*申请人*/
	applyUserName: string;
	/*申请人部门*/
	depCode: string;
	/*申请人岗位*/
	postCode: string;
	/*申请时间*/
	applyTime: string;
	/*出差说明*/
	note: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*出差时长：天*/
	duration: number;
	/*出发地省级*/
	fromProvinceId: number;
	/*出发地市级*/
	fromCityId: number;
	/*目的地文本*/
	destination: string;
	/*交通工具：汽车，火车，高铁，飞机，其他*/
	vehicle: number;
	/*出差人*/
	tripUsers?: AT_BusinessTripStaffModel[];
	/*附件*/
	businessTripAttachments?: AT_BusinessTripAttachmentModel[];
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*申请人部门文本*/
	depName?: string;
	/*申请人岗位文本*/
	postName?: string;
	/*出差人文本*/
	tripUserNames?: string[];
}

export declare interface AT_CancelDepModel {
	/*部门编码*/
	depCode: string;
	/*注销说明*/
	note: string;
}

export declare interface AT_CancelDepPageModel {
	/*Id*/
	id: number;
	/*是否注销*/
	isCancel: number;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*上级部门名称*/
	parentDepName?: string;
	/*部门类型*/
	depTypeName?: string;
	/*流程id*/
	flowId: number;
	/*部门经理*/
	managerName?: string;
	/*部门总监*/
	directorName?: string;
	/*分管副总*/
	leaderName?: string;
	/*是否部门核算*/
	isCount: number;
	/*描述*/
	notes?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime?: string;
	/*注销人*/
	cancelUserName?: string;
	/*注销时间*/
	cancelTime?: string;
	/*注销说明*/
	cancelNote?: string;
}

export declare interface AT_CancelDepPageModelIEnumerableInt32Tuple {
	item1?: AT_CancelDepPageModel[];
	item2: number;
}

export declare interface AT_CancelDepQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*注销人*/
	cancelPersonName?: AT_QueryString;
	/*注销时间*/
	cancelTime?: AT_QueryDateTime;
	/*部门名称*/
	depName?: AT_QueryString;
	/*是否部门核算*/
	isCount?: AT_QueryList;
	/*上级部门名称*/
	parentDepName?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*部门经理*/
	managerName?: AT_QueryString;
	/*部门总监*/
	directorName?: AT_QueryString;
	/*分管副总*/
	leaderName?: AT_QueryString;
}

export declare interface AT_CancelDepViewModel {
	/*部门编码*/
	depCode: string;
	/*注销说明*/
	note: string;
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
	/*部门类型*/
	depTypeName?: string;
	/*部门名称*/
	depName?: string;
	/*上级部门*/
	parentName?: string;
	/*部门经理*/
	managerName?: string;
	/*部门总监*/
	directorName?: string;
	/*分管副总*/
	leaderName?: string;
	/*是否部门核算*/
	isCount: number;
	/*部门描述*/
	notes?: string;
	/*排序*/
	sort: number;
}

export declare interface AT_CancelLevelModel {
	/*级别编码*/
	levelCode: string;
	/*注销说明*/
	note: string;
}

export declare interface AT_CancelLevelPageModel {
	/*是否注销*/
	isCancel: number;
	/*流程id*/
	flowId: number;
	/*级别编码*/
	levelCode?: string;
	/*级别名称*/
	levelName?: string;
	/*级别描述*/
	levelNote?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime?: string;
	/*注销人*/
	cancelUser?: string;
	/*注销时间*/
	cancelTime?: string;
	/*注销说明*/
	cancelNote?: string;
}

export declare interface AT_CancelLevelPageModelIEnumerableInt32Tuple {
	item1?: AT_CancelLevelPageModel[];
	item2: number;
}

export declare interface AT_CancelLevelQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*级别名称*/
	levelName?: AT_QueryString;
	/*级别编码*/
	levelCode?: AT_QueryString;
	/*注销人：员工编码*/
	cancelUser?: AT_QueryString;
	/*注销时间*/
	cancelTime?: AT_QueryDateTime;
}

export declare interface AT_CancelLevelViewModel {
	/*级别编码*/
	levelCode: string;
	/*注销说明*/
	note: string;
	/*级别名称*/
	levelName?: string;
	/*级别描述*/
	levelNote?: string;
}

export declare interface AT_CancelPositionModel {
	/*岗位编码*/
	postCode: string;
	/*注销说明*/
	note: string;
}

export declare interface AT_CancelPositionPageModel {
	/*Id*/
	id: number;
	/*是否注销*/
	isCancel: number;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
	/*部门*/
	depName?: string;
	/*流程id*/
	flowId: number;
	/*岗位描述*/
	notes?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime?: string;
	/*注销人*/
	cancelUser?: string;
	/*注销时间*/
	cancelTime?: string;
	/*注销说明*/
	cancelNote?: string;
}

export declare interface AT_CancelPositionPageModelIEnumerableInt32Tuple {
	item1?: AT_CancelPositionPageModel[];
	item2: number;
}

export declare interface AT_CancelPositionQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*岗位编码*/
	postCode?: AT_QueryString;
	/*岗位名称*/
	postName?: AT_QueryString;
	/*部门名称*/
	depName?: AT_QueryString;
	/*注销人*/
	cancelUser?: AT_QueryString;
	/*注销时间*/
	cancelTime?: AT_QueryDateTime;
}

export declare interface AT_CancelPositionViewModel {
	/*岗位编码*/
	postCode: string;
	/*注销说明*/
	note: string;
	/*岗位名称*/
	postName?: string;
	/*岗位描述*/
	notes?: string;
	/*所属部门*/
	depName?: string;
	/*流程Id*/
	flowId?: number;
}

export enum AT_CardTypeEnum {
	油卡 = 1,
	餐卡 = 2,
	储值卡 = 3,
}

export declare interface AT_CareerInfoUpdateModel {
	/*是否享受福利*/
	isWelfare: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*默认部门编码*/
	defaultDepCode?: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_CheckIsExsistSocialInsuranceDetails {
	subjectId: number;
	ids?: number[];
}

export declare interface AT_CheckViewModel {
	/*Id (编辑传入)*/
	id: number;
	/*被考核人*/
	beCheckUser: string;
	/*被考核人部门*/
	beCheckDep: string;
	/*被考核人岗位*/
	beCheckPost: string;
	/*考核类型：日常，实习，转正

1 = 实习

2 = 试用

3 = 日常*/
	checkType: AT_AssessType;
	/*考核时间*/
	checkDate: string;
	/*考核场地*/
	meetRoomId: number;
	/*主持人*/
	hostUser: string;
	/*考核记录*/
	checkRecord: string;
	/*考核结果：通过，未通过，继续实习，继续试用

1 = 通过

2 = 淘汰

3 = 继续实习

4 = 继续试用*/
	checkResult: AT_AssessResult;
	/*考核建议*/
	checkSuggest: string;
	/*考官*/
	checkStaffs?: string[];
	/*考核附件*/
	assessAttachmentList?: AT_AssessAttachmentModel[];
	/*被考核人名称*/
	beCheckUserName?: string;
	/*被考核人部门名称*/
	beCheckDepName?: string;
	/*被考核人岗位名称*/
	beCheckPostName?: string;
	/*考核场地名称*/
	meetRoomName?: string;
	/*主持人名称*/
	hostUserName?: string;
	/*考官Names*/
	checkStaffsName?: string;
	/*考核类型

1 = 实习

2 = 试用

3 = 日常*/
	readonly checkTypeText: AT_AssessType;
	/*考核结果：通过，未通过，继续实习，继续试用

1 = 通过

2 = 淘汰

3 = 继续实习

4 = 继续试用*/
	readonly checkResultText: AT_AssessResult;
}

export declare interface AT_ComboBoxModel {
	/*下拉类型

1 = 部门类型

2 = 报告类型*/
	type: AT_ComboBoxType;
	/*数值名称*/
	text: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefault: number;
}

export declare interface AT_ComboBoxPageModel {
	id: number;
	/*下拉类型

1 = 部门类型

2 = 报告类型*/
	type: AT_ComboBoxType;
	/*文本*/
	text?: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefault: number;
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
	type?: AT_QueryList;
	/*下拉框名称*/
	text?: AT_QueryString;
}

export enum AT_ComboBoxType {
	部门类型 = 1,
	报告类型 = 2,
}

export declare interface AT_ComboBoxViewModel {
	/*下拉类型

1 = 部门类型

2 = 报告类型*/
	type: AT_ComboBoxType;
	/*数值名称*/
	text: string;
	/*序号*/
	sort: number;
	/*是否默认值*/
	isDefault: number;
	/*id*/
	id: number;
}

export declare interface AT_ConfirmEnrollmentModel {
	/*入职id*/
	id: number;
	/*预计入职时间*/
	gaugeDate: string;
	/*带教责任人*/
	dutyUser: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*简历详情PopupKey(用于通知弹窗)*/
	resumePopupKey: string;
}

export declare interface AT_ContractAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*附件图标*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_ContractModel {
	/*员工编码*/
	barCode?: string;
	/*签订主体：公司管理数据*/
	csoCode: string;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*合同类型*/
	contractTypeId: number;
	/*签订日期*/
	signDate: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*保管位置*/
	savePath: string;
	/*附件*/
	contractAttachmentList?: AT_ContractAttachmentModel[];
}

export declare interface AT_ContractPageModel {
	/*合同Id*/
	id: number;
	/*合同编码*/
	contractCode?: string;
	/*签订主体*/
	csoName?: string;
	/*所属部门*/
	dep?: string;
	/*所属岗位*/
	post?: string;
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	name?: string;
	/*合同类型*/
	contractType: number;
	/*合同类型名称*/
	contractTypeName?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*签订日期*/
	signDate?: string;
	/*保管位置*/
	savePath?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
	/*附件地址*/
	path?: string;
	/*文件后缀*/
	ext?: string;
	/*是否处理：未处理，1=已处理（操作了暂不处理）*/
	isHandle?: number;
	/*是否存在最新合同*/
	isNewContract: number;
}

export declare interface AT_ContractPageModelIEnumerableInt32Tuple {
	item1?: AT_ContractPageModel[];
	item2: number;
}

export declare interface AT_ContractQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*合同编码*/
	contractCode?: AT_QueryString;
	/*签订主体*/
	csoName?: AT_QueryString;
	/*所属部门*/
	dep?: AT_QueryString;
	/*所属岗位*/
	post?: AT_QueryString;
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	name?: AT_QueryString;
	/*合同类型*/
	contractTypeId?: AT_QueryList;
	/*开始日期*/
	startDate?: AT_QueryDateTime;
	/*结束日期*/
	endDate?: AT_QueryDateTime;
}

export declare interface AT_ContractTypeModel {
	/*Id(编辑传入)*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*合同类型名称*/
	text: string;
	/*说明*/
	note: string;
	/*排序*/
	sort: number;
	/*模板名称*/
	name?: string;
	/*模板地址*/
	path?: string;
	/*模板图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_ContractTypePageModel {
	/*Id*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*下拉框文本：下拉框Text*/
	text?: string;
	/*说明*/
	note?: string;
	/*排序*/
	sort: number;
}

export declare interface AT_ContractTypePageModelIEnumerableInt32Tuple {
	item1?: AT_ContractTypePageModel[];
	item2: number;
}

export declare interface AT_ContractTypeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态：启用，停用*/
	state?: AT_QueryList;
	/*下拉框文本：下拉框Text*/
	text?: AT_QueryString;
}

export declare interface AT_ContractUpdateModel {
	/*签订日期*/
	signDate: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*保管位置*/
	savePath: string;
	/*附件*/
	contractAttachmentList?: AT_ContractAttachmentModel[];
}

export declare interface AT_ContractViewModel {
	/*员工编码*/
	barCode?: string;
	/*签订主体：公司管理数据*/
	csoCode: string;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*合同类型*/
	contractTypeId: number;
	/*签订日期*/
	signDate: string;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*保管位置*/
	savePath: string;
	/*附件*/
	contractAttachmentList?: AT_ContractAttachmentModel[];
	/*Id*/
	id: number;
	/*合同编码*/
	contractCode?: string;
	/*姓名*/
	name?: string;
	/*签订主体*/
	csoName?: string;
	/*所属部门*/
	dep?: string;
	/*所属岗位*/
	post?: string;
	/*合同类型名称*/
	contractTypeName?: string;
}

export declare interface AT_CostAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_CostDetailsModel {
	/*Id*/
	id: number;
	/*科目ID*/
	subjectId: number;
	/*科目文本（还原用，传入不用管）*/
	subjectText?: string;
	/*科目明细文本*/
	subjectDetails?: string;
	/*费用金额*/
	costMoney: number;
	/*发票金额*/
	invoiceMoney: number;
	/*摘要*/
	summary: string;
}

export declare interface AT_CostInvoiceAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_CostInvoiceCompanyModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode?: string;
	/*开票公司*/
	invoiceCompany?: string;
	/*税号*/
	taxNumber?: string;
	/*添加人*/
	addUser?: string;
	/*添加时间*/
	addTime?: string;
}

export declare interface AT_CostInvoiceDetailsModel {
	/*发票号*/
	invoiceNo: string;
	/*开票日期*/
	invoiceDate: string;
	/*发票金额*/
	invoiceMoney: number;
}

export declare interface AT_CostInvoiceModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode: string;
	/*上传日期*/
	uploadDate: string;
	/*发票张数*/
	invoiceAmount: number;
	/*积分*/
	points?: number;
	/*附件*/
	costInvoiceAttachments?: AT_CostInvoiceAttachmentModel[];
	/*费用发票明细*/
	costInvoiceDetails?: AT_CostInvoiceDetailsModel[];
}

export declare interface AT_CostInvoicePageModel {
	/*Id*/
	id: number;
	/*状态：未确认，已确认*/
	state?: number;
	/*状态文本*/
	readonly stateText?: string;
	/*上传日期*/
	uploadDate?: string;
	/*上传人*/
	barName?: string;
	/*上传部门*/
	depName?: string;
	/*开票公司*/
	invoiceCompany?: string;
	/*发票张数*/
	invoiceAmount?: number;
	/*发票金额*/
	invoiceMoney?: number;
	/*积分*/
	points?: number;
}

export declare interface AT_CostInvoicePageModelIEnumerableInt32Tuple {
	item1?: AT_CostInvoicePageModel[];
	item2: number;
}

export declare interface AT_CostInvoiceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态：未确认，已确认*/
	state?: AT_QueryList;
	/*上传日期*/
	uploadDate?: AT_QueryDateTime;
	/*开票公司*/
	invoiceCompany?: AT_QueryString;
	/*上传人*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*发票数量*/
	invoiceMoney?: AT_QueryInt;
	/*发票金额*/
	invoiceAmount?: AT_QueryDecimal;
	/*积分*/
	points?: AT_QueryInt;
}

export declare interface AT_CostInvoiceSummaryPageModel {
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*公司*/
	invoiceCompany?: string;
	/*税号*/
	taxNumber?: string;
	/*年份*/
	year: number;
	/*一月*/
	january: number;
	/*二月*/
	february: number;
	/*三月*/
	march: number;
	/*四月*/
	april: number;
	/*五月*/
	may: number;
	/*六月*/
	june: number;
	/*七月*/
	july: number;
	/*八月*/
	august: number;
	/*九月*/
	september: number;
	/*十月*/
	october: number;
	/*十一月*/
	november: number;
	/*十二月*/
	december: number;
	/*积分汇总*/
	pointsSum: number;
}

export declare interface AT_CostInvoiceSummaryPageModelIEnumerableInt32Tuple {
	item1?: AT_CostInvoiceSummaryPageModel[];
	item2: number;
}

export declare interface AT_CostInvoiceSummaryQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*上传人*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*公司*/
	invoiceCompany?: AT_QueryString;
}

export declare interface AT_CostInvoiceViewModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode: string;
	/*上传日期*/
	uploadDate: string;
	/*发票张数*/
	invoiceAmount: number;
	/*积分*/
	points?: number;
	/*附件*/
	costInvoiceAttachments?: AT_CostInvoiceAttachmentModel[];
	/*费用发票明细*/
	costInvoiceDetails?: AT_CostInvoiceDetailsModel[];
	/*姓名*/
	barName?: string;
	/*开票公司*/
	invoiceCompany?: string;
	/*状态*/
	state?: number;
}

export declare interface AT_CostModel {
	/*申请人编码*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*部门编码*/
	depCode: string;
	/*报销类型ID*/
	costTypeId: number;
	/*报销项目ID*/
	costProjectId?: number;
	/*报销日期*/
	costDate: string;
	/*收款信息编码 来源 员工档案银行明细*/
	staffBankCode?: string;
	/*收款信息文本 格式 开户名，开户行，账户*/
	staffBankText: string;
	/*报销说明*/
	costNote?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*费用报销明细*/
	costDetailsList?: AT_CostDetailsModel[];
	/*费用报销附件*/
	costAttachmentList?: AT_CostAttachmentModel[];
}

export declare interface AT_CostPageModel {
	/*自增id*/
	id: number;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*申请人*/
	name?: string;
	/*部门*/
	dep?: string;
	/*报销类型*/
	costType?: string;
	/*项目名称*/
	projectName?: string;
	/*报销日期*/
	costDate: string;
	/*报销说明*/
	costNote?: string;
	/*总费用金额*/
	totalCostMoney?: number;
	/*总发票金额*/
	totalInvoiceMoney?: number;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*费用编码*/
	costCode?: string;
	/*业务核算部门*/
	bamsDepName?: string;
}

export declare interface AT_CostPageModelIEnumerableInt32Tuple {
	item1?: AT_CostPageModel[];
	item2: number;
}

export declare interface AT_CostProjectModel {
	/*Id(新增不用管)*/
	id: number;
	/*状态 0 否 1 是*/
	isEnable: number;
	/*项目名称*/
	projectName: string;
	/*说明*/
	note: string;
	/*排序*/
	sort: number;
}

export declare interface AT_CostProjectPageModel {
	/*报销科目Id*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*项目名称*/
	projectName?: string;
	/*说明*/
	note?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_CostProjectPageModelIEnumerableInt32Tuple {
	item1?: AT_CostProjectPageModel[];
	item2: number;
}

export declare interface AT_CostProjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*是否启用 0 否 1 是*/
	isEnable?: AT_QueryList;
	/*项目名称*/
	projectName?: AT_QueryString;
}

export declare interface AT_CostQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请人*/
	name?: AT_QueryString;
	/*部门*/
	dep?: AT_QueryString;
	/*报销类型*/
	costTypeId?: AT_QueryList;
	/*报销项目ID*/
	costProjectId?: AT_QueryList;
	/*报销日期*/
	costDate?: AT_QueryDateTime;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_CostSubjectModel {
	/*Id(新增不用管)*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目文本*/
	subjectText: string;
	/*说明*/
	note: string;
	/*排序*/
	sort: number;
}

export declare interface AT_CostSubjectPageModel {
	/*报销科目Id*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目文本*/
	subjectText?: string;
	/*备注*/
	note?: string;
	/*排序*/
	sort?: number;
	/*科目明细拼接*/
	subjectDetails?: string;
}

export declare interface AT_CostSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_CostSubjectPageModel[];
	item2: number;
}

export declare interface AT_CostSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*是否启用 0 否 1 是*/
	isEnable?: AT_QueryList;
	/*科目文本*/
	subjectText?: AT_QueryString;
}

export declare interface AT_CostTypeModel {
	/*Id(新增不用管)*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*类型文本*/
	typeText: string;
	/*说明*/
	note: string;
	/*排序*/
	sort: number;
}

export declare interface AT_CostTypePageModel {
	/*报销类型Id*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*类型文本*/
	typeText?: string;
	/*说明*/
	note?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_CostTypePageModelIEnumerableInt32Tuple {
	item1?: AT_CostTypePageModel[];
	item2: number;
}

export declare interface AT_CostTypeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*是否启用 0 否 1 是*/
	isEnable?: AT_QueryList;
	/*类型文本*/
	typeText?: AT_QueryString;
}

export declare interface AT_CostViewModel {
	/*申请人编码*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*部门编码*/
	depCode: string;
	/*报销类型ID*/
	costTypeId: number;
	/*报销项目ID*/
	costProjectId?: number;
	/*报销日期*/
	costDate: string;
	/*收款信息编码 来源 员工档案银行明细*/
	staffBankCode?: string;
	/*收款信息文本 格式 开户名，开户行，账户*/
	staffBankText: string;
	/*报销说明*/
	costNote?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*费用报销明细*/
	costDetailsList?: AT_CostDetailsModel[];
	/*费用报销附件*/
	costAttachmentList?: AT_CostAttachmentModel[];
	/*流程Id*/
	flowId: number;
	/*费用编码*/
	costCode?: string;
	/*申请人*/
	name?: string;
	/*部门*/
	dep?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*报销类型*/
	costType?: string;
	/*项目名称*/
	projectName?: string;
	/*核算部门：红阳部门编码*/
	bamsDepName?: string;
}

export declare interface AT_CsoAttachmentModel {
	/*文件类别

1 = 营业执照正本

2 = 营业执照副本

3 = 开户许可证

4 = 法人身份证

5 = 房屋租赁合同

6 = 章程

7 = 财务制度

8 = 企业管理制度

9 = 组织架构

10 = 其他*/
	type: AT_CsoAttachmentType;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
}

export enum AT_CsoAttachmentType {
	营业执照正本 = 1,
	营业执照副本 = 2,
	开户许可证 = 3,
	法人身份证 = 4,
	房屋租赁合同 = 5,
	章程 = 6,
	财务制度 = 7,
	企业管理制度 = 8,
	组织架构 = 9,
	其他 = 10,
}

export declare interface AT_CsoBaseInfo {
	/*费用科目*/
	costSubjectText?: string;
	/*开户行*/
	bank?: string;
	/*账号*/
	bankno?: string;
	/*关联人*/
	relatedText?: string;
	/*财务负责人*/
	accountanterText?: string;
	/*年度开票限额*/
	yearAmountLimit?: number;
	/*办税人*/
	taxCollector?: string;
	/*社会信用代码*/
	cantsale?: string;
	/*银行财务*/
	bankFinance?: string;
	/*所属税务机构*/
	taxationText?: string;
	/*税收管理员*/
	landNames?: string;
	/*使用分类*/
	useClassifyText?: string;
	/*留存分类*/
	retainClassifyText?: string;
	/*经营分类*/
	busClassifyText?: string;
	/*状态*/
	stateText?: string;
	/*税务注销日*/
	cancellationTime?: string;
	/*工商注销日*/
	businessTime?: string;
	/*银行注销日*/
	bankTime?: string;
	/*备注*/
	notes?: string;
}

export declare interface AT_CsoChangeModel {
	/*变更记录表ID*/
	id: number;
	/*修改批号：3080*/
	updBatch?: string;
	/*公司编码*/
	csoCode?: string;
	/*字段名称：字段中文注释*/
	columnName?: string;
	/*旧值*/
	oldValue?: string;
	/*新值*/
	newValue?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_CsoContractModel {
	/*合规需求与劳动合同版本ID*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*全日制入职下限*/
	minimumFormalNumber?: string;
	/*全日制入职上限*/
	maxmumFormalNumber?: string;
	/*兼职入职下限*/
	minimumNumber?: string;
	/*兼职入职上限*/
	maxmumNumber?: string;
	/*全日制劳动合同版本ID*/
	fulltimeLabor?: number;
	/*全日制劳动合同版本Text*/
	fulltimeLaborText?: string;
	/*非全日制劳动合同版本ID*/
	wrongFulltimeLabor?: number;
	/*非全日制劳动合同版本Text*/
	wrongFulltimeLaborText?: string;
}

export declare interface AT_CsoInvoiceModel {
	/*开票情况ID*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*开票种类*/
	voicetypeText?: string;
	/*年度已开票额度*/
	registerAmted?: string;
	/*已开票张数*/
	invoiceCounted?: string;
	/*剩余发票张数*/
	invoiceResidual?: string;
}

export declare interface AT_CsoModel {
	/*公司名称*/
	csoName: string;
	/*公司法人*/
	legalPerson?: string;
	/*公司股东*/
	shareholder?: string;
	/*公司监事*/
	supervisor?: string;
	/*注册时间*/
	registerDate?: string;
	/*注册资本*/
	registerCapital?: string;
	/*注册地址*/
	registerAddress?: string;
	/*执照效期*/
	validity?: string;
	/*公司电话*/
	telephone?: string;
	/*公司传真*/
	fax?: string;
	/*工商联络人*/
	liaison?: string;
	/*联络电话*/
	liaisonTel?: string;
	/*章程签字人*/
	signer?: string;
	/*经营范围*/
	businessScope?: string;
	/*使用类别*/
	useCategory?: number;
	/*相关附件*/
	csoAttachments?: AT_CsoAttachmentModel[];
	/*服务公司变更记录*/
	csoChanges?: AT_CsoChangeModel[];
}

export declare interface AT_CsoPageModel {
	/*Id*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*状态Id*/
	stateId?: number;
	/*状态文本值*/
	stateText?: string;
	/*公司名称*/
	csoName?: string;
	/*法人*/
	legalPerson?: string;
	/*股东*/
	shareholder?: string;
	/*注册资金*/
	registerCapital?: string;
	/*注册时间*/
	registerDate?: string;
	/*财务负责人Id*/
	accountanter?: number;
	/*财务负责人文本值*/
	accountanterText?: string;
	/*办税员*/
	taxCollector?: string;
	/*所属税务机构名称Id*/
	taxation?: number;
	/*所属税务机构名称文本值*/
	taxationText?: string;
	/*税收管理员*/
	landNames?: string;
	/*注册地址*/
	registerAddress?: string;
	/*开户行*/
	bank?: string;
	/*账号*/
	bankno?: string;
	/*银行财务*/
	bankFinance?: string;
	/*监事*/
	supervisor?: string;
	/*关联人*/
	related?: string;
	/*关联人*/
	relatedText?: string;
	/*公司电话*/
	telephone?: string;
	/*传真*/
	fax?: string;
	/*社会信用代码*/
	cantsale?: string;
	/*营业执照效期*/
	validity?: string;
	/*工商联络人*/
	liaison?: string;
	/*联络电话*/
	liaisonTel?: string;
	/*章程签字人员*/
	signer?: string;
	/*备注*/
	notes?: string;
	/*税务注销日*/
	cancellationTime?: string;
	/*工商注销日*/
	businessTime?: string;
	/*银行注销日*/
	bankTime?: string;
	/*在职人数*/
	baseStaffNumber: number;
}

export declare interface AT_CsoPageModelIEnumerableInt32Tuple {
	item1?: AT_CsoPageModel[];
	item2: number;
}

export declare interface AT_CsoQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*公司编码*/
	csoCode?: AT_QueryString;
	/*公司名称*/
	csoName?: AT_QueryString;
	/*法人*/
	legalPerson?: AT_QueryString;
	/*股东*/
	shareholder?: AT_QueryString;
	/*财务负责人*/
	accountanterText?: AT_QueryString;
	/*监事*/
	supervisor?: AT_QueryString;
	/*办税员*/
	taxCollector?: AT_QueryString;
	/*关联人*/
	relatedText?: AT_QueryString;
	/*开户行*/
	bank?: AT_QueryString;
	/*状态*/
	stateId?: AT_QueryList;
}

export declare interface AT_CsoSocialModel {
	/*社保相关资料ID*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*资料类别：资料名称；合同，发票，付款凭证，其他

1 = 合同

2 = 发票

3 = 付款凭证

4 = 其他*/
	type: AT_CsoSocialType;
	/*资料名称

1 = 合同

2 = 发票

3 = 付款凭证

4 = 其他*/
	readonly typeText: AT_CsoSocialType;
	/*新增时间*/
	addTime?: string;
	/*附件名称*/
	name?: string;
	/*备注*/
	notes?: string;
}

export enum AT_CsoSocialType {
	合同 = 1,
	发票 = 2,
	付款凭证 = 3,
	其他 = 4,
}

export declare interface AT_CsoStaffModel {
	/*员工信息ID*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*姓名*/
	names?: string;
	/*工作性质*/
	natureWork?: string;
	/*性别*/
	sex?: string;
	/*部门*/
	depName?: string;
	/*职务*/
	postName?: string;
	/*出生日期*/
	birthDate?: string;
	/*联系电话*/
	tel?: string;
	/*身份证号*/
	idCard?: string;
	/*入职时间*/
	entryTime?: string;
	/*专业*/
	specialty?: string;
	/*最高学历*/
	edu?: string;
	/*法人*/
	corporation?: string;
	/*购买社保单位*/
	socialUnit?: string;
	/*毕业院校*/
	gradSch?: string;
	/*企业编码*/
	firmCode?: string;
	/*社保缴纳情况*/
	socialPay?: string;
	/*劳动合同类型*/
	contractType?: string;
}

export declare interface AT_CsoViewModel {
	/*公司名称*/
	csoName: string;
	/*公司法人*/
	legalPerson?: string;
	/*公司股东*/
	shareholder?: string;
	/*公司监事*/
	supervisor?: string;
	/*注册时间*/
	registerDate?: string;
	/*注册资本*/
	registerCapital?: string;
	/*注册地址*/
	registerAddress?: string;
	/*执照效期*/
	validity?: string;
	/*公司电话*/
	telephone?: string;
	/*公司传真*/
	fax?: string;
	/*工商联络人*/
	liaison?: string;
	/*联络电话*/
	liaisonTel?: string;
	/*章程签字人*/
	signer?: string;
	/*经营范围*/
	businessScope?: string;
	/*使用类别*/
	useCategory?: number;
	/*相关附件*/
	csoAttachments?: AT_CsoAttachmentModel[];
	/*服务公司变更记录*/
	csoChanges?: AT_CsoChangeModel[];
	/*主键id*/
	id: number;
	/*公司编码*/
	csoCode?: string;
	/*基础信息*/
	csoBaseInfo?: AT_CsoBaseInfo;
	/*员工信息*/
	csostaffs?: AT_CsoStaffModel[];
	/*社保相关资料*/
	csoSocials?: AT_CsoSocialModel[];
	/*开票情况*/
	csoInvoices?: AT_CsoInvoiceModel[];
	/*合规需求和劳动合同版本*/
	csoContracts?: AT_CsoContractModel;
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
	updTime: string;
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
	/*是否已读*/
	isReda: number;
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
	type?: AT_QueryList;
	/*搜索*/
	searchText?: AT_QueryGiven;
}

export declare interface AT_DailylogRequestAttachment {
	/*报告主表Id*/
	dailyLogId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*附件后缀*/
	ext?: string;
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
}

export enum AT_DataSourceEnum {
	入职 = 1,
	转试用 = 2,
	转正 = 3,
	定薪 = 4,
}

export enum AT_DataTypeEnum {
	自动 = 1,
	手动 = 2,
}

export declare interface AT_DepModel {
	depCode?: string;
	/*部门名称*/
	depName: string;
	/*上级部门Code*/
	parent?: string;
	/*部门类型(下拉框id)*/
	depType: number;
	/*部门经理：员工编码*/
	manager?: string;
	/*部门总监：员工编码*/
	director?: string;
	/*分管副总：员工编码*/
	leader?: string;
	/*是否部门核算*/
	isCount: number;
	/*部门描述*/
	notes?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_DepNameModel {
	/*部门Code*/
	depCode?: string;
	/*所属部门*/
	depName?: string;
}

export declare interface AT_DepPost {
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
	/*是否默认(0：否；1：是)*/
	isDefault?: number;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
}

export enum AT_DepReviewedBy {
	部门经理 = 1,
	部门总监 = 2,
	分管副总 = 3,
}

export declare interface AT_DepSpecialAddModel {
	/*权限所属人：barcode*/
	vestCode: string;
	/*部门编码*/
	depCodes?: string[];
}

export declare interface AT_DepSpecialListModel {
	/*权限所属人*/
	vestCode?: string;
	/*权限所属人*/
	vestName?: string;
}

export declare interface AT_DepTreeListMole {
	/*ID*/
	id: number;
	/*部门编码*/
	depCode?: string;
	/*父级编码*/
	parentCode?: string;
	/*部门名称*/
	depName?: string;
	/*部门类型名称*/
	depTypeName?: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*新增时间*/
	addTime?: string;
	/*排序*/
	sort?: number;
	/*子集*/
	childList?: AT_DepTreeListMole[];
}

export declare interface AT_DepViewModel {
	depCode?: string;
	/*部门名称*/
	depName: string;
	/*上级部门Code*/
	parent?: string;
	/*部门类型(下拉框id)*/
	depType: number;
	/*部门经理：员工编码*/
	manager?: string;
	/*部门总监：员工编码*/
	director?: string;
	/*分管副总：员工编码*/
	leader?: string;
	/*是否部门核算*/
	isCount: number;
	/*部门描述*/
	notes?: string;
	/*排序*/
	sort?: number;
	/*id*/
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
	/*部门类型*/
	depTypeName?: string;
	/*上级部门*/
	parentName?: string;
	/*部门经理*/
	managerName?: string;
	/*部门总监*/
	directorName?: string;
	/*分管副总*/
	leaderName?: string;
	/*新增时间*/
	addTime?: string;
	/*职能部门名称*/
	bamsDepName?: string;
}

export enum AT_DepositState {
	未付 = 1,
	已付 = 2,
	已退 = 3,
}

export declare interface AT_DiscriminateIdQueryModel {
	/*正面图片地址*/
	frontImageRemotePath?: string;
	/*背面图片地址*/
	backImageRemotePath?: string;
}

export declare interface AT_DispatchAuthorizationToRoleModel {
	/*角色id*/
	roleId: number;
	/*页面路由*/
	sysRouteIds?: number[];
	/*分配权限值*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
}

export declare interface AT_DispatchAuthorizationToUserModel {
	/*账户编码*/
	barCode: string;
	/*页面路由*/
	sysRouteIds?: number[];
	/*分配权限值*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
}

export declare interface AT_DispatchRoleModel {
	/*角色Id*/
	roleId: number;
	/*员工子编码*/
	barCodes?: string[];
}

export enum AT_EducationRequireType {
	不限 = 0,
	大专以上 = 1,
	本科以上 = 2,
	硕士以上 = 3,
	博士以上 = 4,
}

export enum AT_EducationType {
	初中以下 = 1,
	高中或中专 = 2,
	大专 = 3,
	本科 = 4,
	硕士 = 5,
	博士及以上 = 6,
	其他 = 7,
}

export declare interface AT_EmployApproveModel {
	/*简历共享ID*/
	resumeHoldId: number;
	/*级别*/
	levelCode: string;
	/*入职状态

1 = 实习

2 = 试用

3 = 正式*/
	workStatus: AT_EmployWorkStatus;
	/*实习薪资*/
	internshipSalary?: number;
	/*实习期限：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	internshipTerm?: AT_PeriodType;
	/*试用薪资*/
	tryoutSalary?: number;
	/*正式薪资*/
	officialSalary?: number;
	/*试用期限：1个月，2个月，3个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm?: AT_PeriodType;
	/*薪资说明*/
	salaryNote?: string;
	/*工作定位*/
	jobLocate?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*录用审批附件*/
	employAttachmentModels?: AT_EmployAttachmentModel[];
}

export declare interface AT_EmployAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_EmployViewModel {
	/*简历共享ID*/
	resumeHoldId: number;
	/*级别*/
	levelCode: string;
	/*入职状态

1 = 实习

2 = 试用

3 = 正式*/
	workStatus: AT_EmployWorkStatus;
	/*实习薪资*/
	internshipSalary?: number;
	/*实习期限：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	internshipTerm?: AT_PeriodType;
	/*试用薪资*/
	tryoutSalary?: number;
	/*正式薪资*/
	officialSalary?: number;
	/*试用期限：1个月，2个月，3个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm?: AT_PeriodType;
	/*薪资说明*/
	salaryNote?: string;
	/*工作定位*/
	jobLocate?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*录用审批附件*/
	employAttachmentModels?: AT_EmployAttachmentModel[];
	/*Id*/
	id: number;
	/*面试主表Id*/
	interviewId?: number;
	/*背调Id*/
	behindSurveyId?: number;
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
	/*简历ID*/
	resumeId: number;
	/*求职人*/
	name?: string;
	/*应聘部门*/
	depName?: string;
	/*应聘部门*/
	depCode?: string;
	/*应聘岗位*/
	postName?: string;
	/*级别名称*/
	levelName?: string;
	/*最新背调情况*/
	newSurveyNote?: string;
	/*初试评价*/
	initialAppraisal?: string;
	/*复试评价*/
	repeatAppraisal?: string;
}

export enum AT_EmployWorkStatus {
	实习 = 1,
	试用 = 2,
	正式 = 3,
}

export declare interface AT_EmployeeBirthdayPageModel {
	/*一级部门*/
	depOneName?: string;
	/*二级部门*/
	depTwoName?: string;
	/*三级部门*/
	depThreeName?: string;
	/*四级部门*/
	depFourName?: string;
	/*岗位*/
	postName?: string;
	/*姓名*/
	name?: string;
	/*生日类型

1 = 公历

2 = 农历*/
	birthdayType: AT_BirthdayType;
	/*生日类型

1 = 公历

2 = 农历*/
	readonly birthdayTypeText: AT_BirthdayType;
	/*生日日期*/
	dateOfBirth: string;
	/*年龄*/
	age: number;
	/*生日提醒*/
	birthday: number;
}

export declare interface AT_EmployeeBirthdayPageModelIEnumerableInt32Tuple {
	item1?: AT_EmployeeBirthdayPageModel[];
	item2: number;
}

export declare interface AT_EmployeeBirthdayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*一级部门*/
	depOneName?: AT_QueryString;
	/*二级部门*/
	depTwoName?: AT_QueryString;
	/*三级部门*/
	depThreeName?: AT_QueryString;
	/*四级部门*/
	depFourName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*生日类型*/
	birthdayType?: AT_QueryList;
	/*生日日期*/
	dateOfBirth?: AT_QueryDateTime;
}

export declare interface AT_EntryFamilyInfoModel {
	/*Id*/
	id: number;
	/*姓名*/
	name: string;
	/*成员关系

1 = 父亲

2 = 母亲

3 = 配偶

4 = 子女

5 = 其他*/
	relation: AT_RelationType;
	/*联系方式*/
	contact: string;
	/*工作单位*/
	employer: string;
	/*出生日期*/
	birthday?: string;
	/*生日类型：农历，公历

1 = 公历

2 = 农历*/
	birthdayType?: AT_BirthdayType;
	/*身份证号*/
	idCard?: string;
	/*开户行*/
	openBank?: string;
	/*开户名*/
	openName?: string;
	/*银行卡号*/
	openCard?: string;
	/*联系地址*/
	contactAdd?: string;
	/*默认账户：是，否*/
	isDefault?: number;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_EntryManageModel {
	/*姓名*/
	name: string;
	/*照片*/
	profilePicture?: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*生日类型(农历，公历)

1 = 公历

2 = 农历*/
	birthdayType: AT_BirthdayType;
	/*出生日期*/
	dateOfBirth: string;
	/*身份证号*/
	idCard: string;
	/*身份证有效期*/
	idCardValid?: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*民族*/
	nation: string;
	/*毕业院校*/
	school: string;
	/*专业*/
	specialty?: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*电话号码*/
	phone: string;
	/*其他电话*/
	spareMobile?: string;
	/*邮箱*/
	email?: string;
	/*微信*/
	webChat?: string;
	/*QQ*/
	qq?: string;
	/*短码*/
	shortCode?: string;
	/*政治面貌*/
	politics: string;
	/*婚否

1 = 未婚

2 = 已婚*/
	marital: AT_MaritalStatus;
	/*当前居住地*/
	residence: string;
	/*其他*/
	other?: string;
	/*入职日期*/
	inductionDate: string;
	/*家庭信息*/
	inductionFamilyInfoList?: AT_EntryFamilyInfoModel[];
	/*银行卡信息*/
	staffBankList?: AT_StaffBankModel[];
	/*附件信息*/
	inductionAccessoryList?: AT_InductionAttachmentModel[];
}

export declare interface AT_EntryManagePageModel {
	/*入职id*/
	id: number;
	/*简历共享Id*/
	resumeHoldId: number;
	/*简历Id*/
	resumeId: number;
	/*简历状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	resumeStatus: AT_ResumeStatus;
	/*简历状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	readonly resumeStatusText: AT_ResumeStatus;
	/*录用入职状态：实习，试用，正式

1 = 实习

2 = 试用

3 = 正式*/
	workStatus?: AT_EmployWorkStatus;
	/*录用入职状态：实习，试用，正式

1 = 实习

2 = 试用

3 = 正式*/
	readonly workStatusText?: AT_EmployWorkStatus;
	/*简历姓名*/
	resumeName?: string;
	/*姓名*/
	name?: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*年龄*/
	age: number;
	/*应聘部门*/
	dep?: string;
	/*应聘部门Code*/
	depCode?: string;
	/*应聘岗位*/
	post?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*电话号码*/
	phone?: string;
	/*预计入职日期*/
	gaugeDate?: string;
	/*入职时间*/
	inductionDate?: string;
}

export declare interface AT_EntryManagePageModelIEnumerableInt32Tuple {
	item1?: AT_EntryManagePageModel[];
	item2: number;
}

export declare interface AT_EntryManageViewModel {
	/*姓名*/
	name: string;
	/*照片*/
	profilePicture?: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*生日类型(农历，公历)

1 = 公历

2 = 农历*/
	birthdayType: AT_BirthdayType;
	/*出生日期*/
	dateOfBirth: string;
	/*身份证号*/
	idCard: string;
	/*身份证有效期*/
	idCardValid?: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*民族*/
	nation: string;
	/*毕业院校*/
	school: string;
	/*专业*/
	specialty?: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*电话号码*/
	phone: string;
	/*其他电话*/
	spareMobile?: string;
	/*邮箱*/
	email?: string;
	/*微信*/
	webChat?: string;
	/*QQ*/
	qq?: string;
	/*短码*/
	shortCode?: string;
	/*政治面貌*/
	politics: string;
	/*婚否

1 = 未婚

2 = 已婚*/
	marital: AT_MaritalStatus;
	/*当前居住地*/
	residence: string;
	/*其他*/
	other?: string;
	/*入职日期*/
	inductionDate: string;
	/*家庭信息*/
	inductionFamilyInfoList?: AT_EntryFamilyInfoModel[];
	/*银行卡信息*/
	staffBankList?: AT_StaffBankModel[];
	/*附件信息*/
	inductionAccessoryList?: AT_InductionAttachmentModel[];
	/*员工档案Id*/
	id: number;
	/*入职部门Code*/
	depCode?: string;
	/*入职部门*/
	depName?: string;
	/*入职岗位*/
	postName?: string;
	/*入职级别*/
	levelName?: string;
	/*录用审批入职状态*/
	workStatus?: string;
	/*未入职说明*/
	noNote?: string;
	/*预计入职时间*/
	gaugeDate?: string;
	/*带教责任人*/
	dutyUser?: string;
	/*带教责任人*/
	dutyUserName?: string;
}

export declare interface AT_EntryManegeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	resumeStatus?: AT_QueryList;
	/*姓名*/
	name?: AT_QueryString;
	/*应聘部门*/
	dep?: AT_QueryString;
	/*应聘岗位*/
	post?: AT_QueryString;
}

export enum AT_ExtractMode {
	自提 = 1,
	邮寄 = 2,
}

export declare interface AT_FaceTalkModel {
	/*Id (编辑传入)*/
	id: number;
	/*被面谈人：员工编码*/
	talkUser: string;
	/*被面谈人部门*/
	depCode: string;
	/*被面谈人岗位*/
	postCode: string;
	/*面谈类型：日常，实习，试用

1 = 实习

2 = 试用

3 = 日常*/
	talkType: AT_TalkType;
	/*面谈日期*/
	talkDate: string;
	/*面谈人*/
	interviewer: string;
	/*面谈内容*/
	talkContent: string;
}

export declare interface AT_FaceTalkPageModel {
	/*面谈id*/
	id: number;
	/*被面谈人*/
	talkUser?: string;
	/*被面谈人部门*/
	dep?: string;
	/*被面谈人岗位*/
	post?: string;
	/*面谈类型

1 = 实习

2 = 试用

3 = 日常*/
	talkType: AT_TalkType;
	/*面谈日期*/
	talkDate?: string;
	/*面谈人*/
	interviewer?: string;
}

export declare interface AT_FaceTalkPageModelIEnumerableInt32Tuple {
	item1?: AT_FaceTalkPageModel[];
	item2: number;
}

export declare interface AT_FaceTalkQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*被面谈人部门*/
	dep?: AT_QueryString;
	/*被面谈人*/
	talkUser?: AT_QueryString;
	/*面谈日期*/
	talkDate?: AT_QueryDateTime;
	/*面谈人*/
	interviewer?: AT_QueryString;
}

export declare interface AT_FaceTalkViewModel {
	/*Id (编辑传入)*/
	id: number;
	/*被面谈人：员工编码*/
	talkUser: string;
	/*被面谈人部门*/
	depCode: string;
	/*被面谈人岗位*/
	postCode: string;
	/*面谈类型：日常，实习，试用

1 = 实习

2 = 试用

3 = 日常*/
	talkType: AT_TalkType;
	/*面谈日期*/
	talkDate: string;
	/*面谈人*/
	interviewer: string;
	/*面谈内容*/
	talkContent: string;
	/*被面谈人*/
	talkUserName?: string;
	/*被面谈人部门*/
	dep?: string;
	/*被面谈人岗位*/
	post?: string;
	/*面谈人*/
	interviewerName?: string;
}

export declare interface AT_FamilyInfoModel {
	/*自增ID*/
	id: number;
	/*员工编码*/
	employeeCode?: string;
	/*姓名*/
	name?: string;
	/*关系：父亲，母亲，配偶，子女，其他

1 = 父亲

2 = 母亲

3 = 配偶

4 = 子女

5 = 其他*/
	relation: AT_RelationType;
	/*联系方式*/
	contact?: string;
	/*工作单位*/
	employer?: string;
	/*生日类型：农历，公历

1 = 公历

2 = 农历*/
	birthdayType?: AT_BirthdayType;
	/*生日日期*/
	birthDayDate?: string;
	/*出生日期*/
	birthday?: string;
	/*年龄*/
	age?: number;
	/*开户行*/
	openBank?: string;
	/*开户名*/
	openName?: string;
	/*银行卡号*/
	openCard?: string;
	/*默认账户：是，否*/
	isDefault?: number;
}

export enum AT_FilterType {
	黑名单 = 1,
	高潜力人才 = 2,
}

export enum AT_FinalResultEnum {
	面试通过 = 1,
	面试不通过 = 2,
	放弃面试 = 3,
}

export enum AT_FirmBankPurpose {
	内部结算 = 0,
	综合 = 1,
	过度 = 2,
	理财 = 3,
}

export enum AT_FirmBankState {
	停用 = 0,
	启用 = 1,
}

export declare interface AT_FirmBankViewMode {
	/*Id*/
	id: number;
	/*使用状态：启用，停用

0 = 停用

1 = 启用*/
	state?: AT_FirmBankState;
	/*开户行*/
	openBank?: string;
	/*开户名*/
	openName?: string;
	/*开户账号*/
	openCard?: string;
	/*备注*/
	note?: string;
	/*使用用途*/
	purposes?: AT_FirmBankPurpose[];
	/*使用用途*/
	bankPurpose?: string;
}

export declare interface AT_FirmDepCheckerModel {
	/*自增ID*/
	id: number;
	/*审核负责人：部门经理，部门总监，分管副总

1 = 部门经理

2 = 部门总监

3 = 分管副总*/
	checker: AT_DepReviewedBy;
	/*审核负责人：部门经理，部门总监，分管副总(还原用)

1 = 部门经理

2 = 部门总监

3 = 分管副总*/
	readonly checkerText: AT_DepReviewedBy;
}

export declare interface AT_FirmModel {
	/*企业编码*/
	firmCode?: string;
	/*企业名称*/
	firmName?: string;
	/*企业简称*/
	firmNameAbb?: string;
	/*体系*/
	scheme?: AT_SchemeInfoModel[];
	/*管理员登录名*/
	adminAccounts?: AT_AccountModel[];
	/*企业银行卡信息*/
	firmBanks?: AT_FirmBankViewMode[];
	/*服务公司*/
	csoCode?: string;
	/*默认账套*/
	bookCode?: string;
	/*默认账套*/
	bookName?: string;
	/*是否对接财务：否，是*/
	isJoint?: number;
	/*企业部门审核负责人*/
	firmDepCheckers?: AT_FirmDepCheckerModel[];
}

export declare interface AT_FirmPageModel {
	/*企业编码：3070*/
	firmCode?: string;
	/*企业名称*/
	firmName?: string;
	/*企业简称*/
	firmNameAbb?: string;
	/*体系名称*/
	schemeName?: string;
	/*更新时间*/
	updTime: string;
	/*更新人*/
	updName?: string;
}

export declare interface AT_FirmPageModelIEnumerableInt32Tuple {
	item1?: AT_FirmPageModel[];
	item2: number;
}

export declare interface AT_FirmQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*企业编码*/
	firmCode?: AT_QueryString;
	/*企业名称*/
	firmName?: AT_QueryString;
	/*体系编码*/
	schemeCode?: AT_QueryList;
}

export declare interface AT_FirmSimpleModel {
	/*企业编码*/
	firmCode?: string;
	/*企业名称*/
	firmName?: string;
	/*企业简称*/
	firmNameAbb?: string;
}

export declare interface AT_FlowAssetApplyModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*固资申请模型*/
	assetApplyModel?: AT_AssetApplyModel;
}

export declare interface AT_FlowAssetLedgerModel {
	/*资产台账模型*/
	assetLedgerModel?: AT_AssetLedgerModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowAssetPurchaseModel {
	/*资产采购模型*/
	assetPurchaseModel?: AT_AssetPurchaseModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export enum AT_FlowAuditObjEnum {
	制单人审核 = 1,
	指定员工 = 2,
	指定角色 = 3,
	部门经理 = 4,
	部门总监 = 5,
	分管副总 = 6,
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
	/*是否首页显示：是，否*/
	isHomeShow?: AT_QueryInt;
}

export declare interface AT_FlowBorrowModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*借支管理模型*/
	borrowModel?: AT_BorrowModel;
}

export declare interface AT_FlowBusinessTripModel {
	/*出差管理模型*/
	businessTripModel?: AT_BusinessTripModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowCancelDepModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*注销部门数据模型*/
	cancelDepModel?: AT_CancelDepModel;
}

export declare interface AT_FlowCancelLevelModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*注销级别数据模型*/
	cancelLevelModel?: AT_CancelLevelModel;
}

export declare interface AT_FlowCancelPositionModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*注销岗位数据模型*/
	cancelPositionModel?: AT_CancelPositionModel;
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
	/*审核层次*/
	flowLevel: number;
}

export declare interface AT_FlowCostModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*费用报销数据模型*/
	costModel?: AT_CostModel;
}

export declare interface AT_FlowDepModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*部门数据模型*/
	depModel?: AT_DepModel;
}

export declare interface AT_FlowEmployApproveModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*录用审批模型*/
	employApproveModel?: AT_EmployApproveModel;
}

export declare interface AT_FlowInternshipUpModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*试用申请模型*/
	internshipUpModel?: AT_InternshipUpModel;
}

export declare interface AT_FlowLeaveDestroyModel {
	/*销假管理模型*/
	leaveDestroyModel?: AT_LeaveDestroyModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowLeaveModel {
	/*请假管理模型*/
	leaveModel?: AT_LeaveModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowLevelModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*级别数据模型*/
	levelModel?: AT_LevelModel;
}

export declare interface AT_FlowLevelResetFlowModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*级别调动数据模型*/
	levelResetFlowModel?: AT_LevelResetFlowModel;
}

export declare interface AT_FlowLinkPopupViewModel {
	/*流程类型id*/
	flowTypeId?: number;
	/*弹窗路由名*/
	routeName?: string;
	/*弹窗路由Id*/
	routeId?: number;
	/*流程名*/
	flowTypeName?: string;
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
	/*首页搜索*/
	searchText?: AT_QueryGiven;
	/*是否首页显示：是，否*/
	isHomeShow?: AT_QueryInt;
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
	/*是否首页显示：是，否*/
	isHomeShow: number;
}

export declare interface AT_FlowListViewModelIEnumerableInt32Tuple {
	item1?: AT_FlowListViewModel[];
	item2: number;
}

export declare interface AT_FlowMasterCardRechargeApplyModel {
	/*主卡充值模型*/
	masterCardRechargeApplyModel?: AT_MasterCardRechargeApplyModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowMaterialAllocationGrantModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资调拨发放数据模型*/
	materialAllocationGrantModel?: AT_MaterialAllocationGrantModel;
}

export declare interface AT_FlowMaterialAllocationModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资调拨申请数据模型*/
	materialAllocationModel?: AT_MaterialAllocationModel;
}

export declare interface AT_FlowMaterialApplyModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资申领数据模型*/
	materialApplyModel?: AT_MaterialApplyModel;
}

export declare interface AT_FlowMaterialCheckModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资盘点数据模型*/
	materialCheckModel?: AT_MaterialCheckModel;
}

export declare interface AT_FlowMaterialGrantModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资发放数据模型*/
	materialGrantModel?: AT_MaterialGrantModel;
}

export declare interface AT_FlowMaterialNeedModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*采购需求数据模型*/
	materialNeedModel?: AT_MaterialNeedModel;
}

export declare interface AT_FlowMaterialPurchaseModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资采购数据模型*/
	materialPurchaseModel?: AT_MaterialPurchaseModel;
}

export declare interface AT_FlowMaterialReturnModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*物资退回数据模型*/
	materialReturnModel?: AT_MaterialReturnModel;
}

export declare interface AT_FlowMeetModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*会议模型*/
	meetModel?: AT_MeetModel;
}

export declare interface AT_FlowModel {
	/*流程id*/
	flowId?: number;
	/*流程名称*/
	flowName?: string;
	/*流程类型名称*/
	flowTypeName?: string;
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
	/*制单部门*/
	makeOrderDepCode: number;
}

export declare interface AT_FlowModelAssetApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*固资申请详情模型*/
	item2?: AT_AssetApplyViewModel;
}

export declare interface AT_FlowModelAssetLedgerViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_AssetLedgerViewModel;
}

export declare interface AT_FlowModelAssetPurchaseViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_AssetPurchaseViewModel;
}

export declare interface AT_FlowModelBorrowViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*借支管理详情模型*/
	item2?: AT_BorrowViewModel;
}

export declare interface AT_FlowModelBusinessTripViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_BusinessTripViewModel;
}

export declare interface AT_FlowModelCancelDepViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*注销部门详情模型*/
	item2?: AT_CancelDepViewModel;
}

export declare interface AT_FlowModelCancelLevelViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*注销级别详情模型*/
	item2?: AT_CancelLevelViewModel;
}

export declare interface AT_FlowModelCancelPositionViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*注销岗位详情模型*/
	item2?: AT_CancelPositionViewModel;
}

export declare interface AT_FlowModelCostViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*费用报销详情模型*/
	item2?: AT_CostViewModel;
}

export declare interface AT_FlowModelDepViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*部门视图*/
	item2?: AT_DepViewModel;
}

export declare interface AT_FlowModelEmployViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*录用审批详情模型*/
	item2?: AT_EmployViewModel;
}

export declare interface AT_FlowModelInternshipUpDetailsModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*试用申请详情模型*/
	item2?: AT_InternshipUpDetailsModel;
}

export declare interface AT_FlowModelLeaveViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_LeaveViewModel;
}

export declare interface AT_FlowModelLevelResetFlowViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_LevelResetFlowViewModel;
}

export declare interface AT_FlowModelLevelViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_LevelViewModel;
}

export declare interface AT_FlowModelMasterCardRechargeApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_MasterCardRechargeApplyViewModel;
}

export declare interface AT_FlowModelMaterialAllocationGrantViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资调拨发放详情模型*/
	item2?: AT_MaterialAllocationGrantViewModel;
}

export declare interface AT_FlowModelMaterialAllocationViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资调拨申请详情模型*/
	item2?: AT_MaterialAllocationViewModel;
}

export declare interface AT_FlowModelMaterialApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资申领详情模型*/
	item2?: AT_MaterialApplyViewModel;
}

export declare interface AT_FlowModelMaterialCheckViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资盘点详情模型*/
	item2?: AT_MaterialCheckViewModel;
}

export declare interface AT_FlowModelMaterialGrantViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资发放详情模型*/
	item2?: AT_MaterialGrantViewModel;
}

export declare interface AT_FlowModelMaterialNeedViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资采购需求详情模型*/
	item2?: AT_MaterialNeedViewModel;
}

export declare interface AT_FlowModelMaterialPurchaseViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资采购详情模型*/
	item2?: AT_MaterialPurchaseViewModel;
}

export declare interface AT_FlowModelMaterialReturnViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*物资退回详情模型*/
	item2?: AT_MaterialReturnViewModel;
}

export declare interface AT_FlowModelMeetViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*会议详情模型*/
	item2?: AT_MeetViewModel;
}

export declare interface AT_FlowModelNoticesViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_NoticesViewModel;
}

export declare interface AT_FlowModelPositionViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_PositionViewModel;
}

export declare interface AT_FlowModelRecruitViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_RecruitViewModel;
}

export declare interface AT_FlowModelRegulationViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_RegulationViewModel;
}

export declare interface AT_FlowModelRentApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*房租申请详情模型*/
	item2?: AT_RentApplyViewModel;
}

export declare interface AT_FlowModelRentOutViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*退租申请详情模型*/
	item2?: AT_RentOutViewModel;
}

export declare interface AT_FlowModelRentViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*租房详情模型*/
	item2?: AT_RentViewModel;
}

export declare interface AT_FlowModelResignComplexViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ResignComplexViewModel;
}

export declare interface AT_FlowModelResignDepViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ResignDepViewModel;
}

export declare interface AT_FlowModelResignFinanceViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ResignFinanceViewModel;
}

export declare interface AT_FlowModelResignInfoViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ResignInfoViewModel;
}

export declare interface AT_FlowModelResignViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_ResignViewModel;
}

export declare interface AT_FlowModelRewardViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_RewardViewModel;
}

export declare interface AT_FlowModelSalaryConfirmModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SalaryConfirmModel;
}

export declare interface AT_FlowModelSalaryKeepDeductViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SalaryKeepDeductViewModel;
}

export declare interface AT_FlowModelSalaryStaffViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_SalaryStaffViewModel;
}

export declare interface AT_FlowModelSlaveCardRechargeApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*副卡充值详情模型*/
	item2?: AT_SlaveCardRechargeApplyViewModel;
}

export declare interface AT_FlowModelTaxCreditApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_TaxCreditApplyViewModel;
}

export declare interface AT_FlowModelTransferViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_TransferViewModel;
}

export declare interface AT_FlowModelTryoutUpViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*转正申请详情模型*/
	item2?: AT_TryoutUpViewModel;
}

export declare interface AT_FlowModelVehicleApplyViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_VehicleApplyViewModel;
}

export declare interface AT_FlowModelVehicleInsuranceViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_VehicleInsuranceViewModel;
}

export declare interface AT_FlowModelVehicleLeaseViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	/*车辆租赁详情模型*/
	item2?: AT_VehicleLeaseViewModel;
}

export declare interface AT_FlowModelVehicleRepairViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_VehicleRepairViewModel;
}

export declare interface AT_FlowModelVehicleUpkeepViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_VehicleUpkeepViewModel;
}

export declare interface AT_FlowModelVirtueFundViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_VirtueFundViewModel;
}

export declare interface AT_FlowModelWelfareViewModelTuple {
	/*流程模型*/
	item1?: AT_FlowModel;
	item2?: AT_WelfareViewModel;
}

export declare interface AT_FlowNoticeModel {
	/*通知管理模型*/
	noticeModel?: AT_NoticesModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowObjectModel {
	/*审核对象类型Id

1 = 制单人审核

2 = 指定员工

3 = 指定角色

4 = 部门经理

5 = 部门总监

6 = 分管副总

7 = 动态指定人

8 = 动态sql*/
	auditType: AT_FlowAuditObjEnum;
	/*审核对象类型Id*/
	readonly auditTypeText?: string;
	/*审核对象(一般为：BarCode)*/
	auditor?: string[];
	/*审核对象文本(一般为：名称)*/
	auditorName?: string[];
}

export declare interface AT_FlowPopupModel {
	/*流程类型id*/
	flowTypeId?: number;
}

export declare interface AT_FlowPositionModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*岗位数据模型*/
	positionModel?: AT_PositionModel;
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

export declare interface AT_FlowRecruitmentDemandModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*招聘需求数据模型*/
	recruitmentDemandModel?: AT_RecruitModel;
}

export declare interface AT_FlowRegulationModel {
	/*制度管理模型*/
	regulationModel?: AT_RegulationModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowRentApplyModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*房租申请数据模型*/
	rentApplyModel?: AT_RentApplyModel;
}

export declare interface AT_FlowRentModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*租房管理数据模型*/
	rentModel?: AT_RentModel;
}

export declare interface AT_FlowRentOutModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*退租申请数据模型*/
	rentOutModel?: AT_RentOutModel;
}

export declare interface AT_FlowResignComplexModel {
	/*离职管理-综合交接模型*/
	resignComplexModel?: AT_ResignComplexModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowResignDepModel {
	/*交接部门模型*/
	resignDepModel?: AT_ResignDepModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowResignFinanceModel {
	/*财务交接模型*/
	resignFinanceModel?: AT_ResignFinanceModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowResignInfoModel {
	/*信息交接模型*/
	resignInfoModel?: AT_ResignInfoModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowResignModel {
	/*离职管理模型*/
	resignModel?: AT_ResignModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowRewardModel {
	/*奖惩管理模型*/
	rewardModel?: AT_RewardModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSalaryConfirmModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*员工薪资档案数据模型*/
	salaryConfirmModel?: AT_SalaryConfirmModel;
}

export declare interface AT_FlowSalaryKeepDeductModel {
	/*薪资预留扣除*/
	salaryKeepDeductModel?: AT_SalaryKeepDeductModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowSalaryStaffModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*员工薪资档案数据模型*/
	salaryStaffModel?: AT_SalaryStaffModel;
}

export declare interface AT_FlowSlaveCardRechargeApplyModel {
	/*副卡充值模型*/
	slaveCardRechargeApplyModel?: AT_SlaveCardRechargeApplyModel;
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
	auditRela: AT_AuditObjRela;
	/*审核层次；从0开始 0表示最开始的创建流程*/
	auditLevel: number;
	/*是否可修改流程数据(0否，1是)*/
	isEdit: number;
	/*是否驳回*/
	isBack: number;
	/*是否自动审核*/
	isAuto: number;
	/*是否指定规则：（是，否），在该步审核有特殊的处理逻辑规则*/
	hasRule: number;
	/*是否自动连跳（不自动跳转；自动跳转）：当前流程前面步骤已存在当前审核人已经审核过，可以设置是否自动跳过该步审核*/
	isJump: number;
	/*审核对象*/
	flowObjectModels?: AT_FlowObjectModel[];
}

export declare interface AT_FlowTaxCreditApplyModel {
	/*个税扣除申请模型*/
	taxCreditApplyModel?: AT_TaxCreditApplyModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowTransferModel {
	/*调动管理模型*/
	transferModel?: AT_TransferModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowTryoutUpModel {
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
	/*转正申请数据模型*/
	tryoutUpModel?: AT_TryoutUpModel;
}

export declare interface AT_FlowTypeInfoModel {
	/*流程类型ID*/
	flowTypeId: number;
	/*流程类型名称*/
	flowTypeName?: string;
	/*备注信息*/
	flowTypeNote?: string;
	/*创建者*/
	userId: number;
	/*是否走审核流程(0否，1是)*/
	hasFlow: number;
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
	/*流程名称*/
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

export declare interface AT_FlowVehicleApplyModel {
	/*车辆使用申请模型*/
	vehicleApplyModel?: AT_VehicleApplyModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowVehicleInsuranceModel {
	/*车辆保险申请模型*/
	vehicleInsuranceModel?: AT_VehicleInsuranceModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowVehicleLeaseModel {
	/*车辆租赁模型*/
	vehicleLeaseModel?: AT_VehicleLeaseModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowVehicleRepairModel {
	/*车辆维修申请模型*/
	vehicleRepairModel?: AT_VehicleRepairModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowVehicleUpkeepModel {
	/*车辆保养申请模型*/
	vehicleUpkeepModel?: AT_VehicleUpkeepModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowVirtueFundModel {
	/*美德基金管理模型*/
	virtueFundModel?: AT_VirtueFundModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_FlowWelfareModel {
	/*福利管理*/
	welfareModel?: AT_WelfareModel;
	/*流程*/
	flowPostModel?: AT_FlowPostModel;
}

export declare interface AT_GetBorrowByUserModel {
	/*实际借款人*/
	actualBorrow?: string;
	/*还款日期*/
	repaymentDate: string;
	/*还款方式

1 = 按还款日期

2 = 按月平均还款*/
	repaymentMode: AT_RepaymentMode;
	/*利息方式

1 = 不计息

2 = 按日计息

3 = 按月计息

4 = 按年计息*/
	interestType: AT_InterestType;
	/*借款日期*/
	borrowDate?: string;
	/*借款金额*/
	borrowMoney: number;
	/*计息日期*/
	interestStartTime?: string;
	/*借支说明*/
	summary?: string;
}

export declare interface AT_GetBusinessTripByUserModel {
	/*自增ID*/
	id: number;
	/*申请人Code*/
	applyUser?: string;
	/*申请人Name*/
	applyUserName?: string;
	/*出差人Code*/
	tripUser?: string;
	/*出差人名称*/
	tripUserName?: string;
	/*申请人部门Code*/
	depCode?: string;
	/*申请人部门名称*/
	depName?: string;
	/*申请人岗位Code*/
	postCode?: string;
	/*申请人岗位名称*/
	postName?: string;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*出差时长：天*/
	duration?: number;
	/*申请时间*/
	applyTime?: string;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*出差说明*/
	note?: string;
	/*出发地*/
	fromText?: string;
	/*目的地*/
	toText?: string;
}

export declare interface AT_GetCostByUserModel {
	/*报销类型*/
	costType?: string;
	/*项目名称*/
	projectName?: string;
	/*报销日期*/
	costDate: string;
	/*收款信息*/
	staffBankText?: string;
	/*报销说明*/
	costNote?: string;
	/*报销科目*/
	subjectText?: string;
	/*费用金额*/
	costMoney?: number;
	/*发票金额*/
	invoiceMoney?: number;
	/*摘要*/
	summary?: string;
}

export declare interface AT_GetEnterInvoiceDetails {
	/*大类*/
	bigName?: string;
	/*小类*/
	smallName?: string;
	/*资产名称*/
	assetName?: string;
	/*资产编号*/
	assetNumber?: string;
	/*规格型号*/
	specsModel?: string;
	/*含税金额*/
	includTaxMoney?: number;
	/*购置人*/
	buyUserName?: string;
	/*购置时间*/
	buyDate?: string;
}

export declare interface AT_GetLeaveByUserModel {
	id: number;
	/*请假人Code*/
	applyUser?: string;
	/*请假人名称*/
	applyUserName?: string;
	/*假期类型ID*/
	holidayId: number;
	/*假期类型名称*/
	holidayType?: string;
	/*单据类型*/
	documentType?: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*请假时长*/
	duration: number;
	/*时长单位：天，小时；存假期设置时长单位文本*/
	durationUnit?: string;
	/*请假事由*/
	reason?: string;
	/*代替人名称*/
	replaceUserName?: string;
}

export declare interface AT_GetMasterCardRechargeApplyByUserModel {
	/*主卡卡号*/
	cardNo?: string;
	/*储值卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*储值卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*充值日期*/
	rechargeDate?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_GetMaterialApplyByUserModel {
	/*制单时间*/
	addTime?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	amount?: number;
	/*已发放数量*/
	grantAmount?: number;
	/*内部价*/
	insidePrice?: number;
	/*申领金额（数量*内部价）*/
	money?: number;
	/*实际金额（发数量*内部价）*/
	practicalMoney?: number;
	/*用途*/
	purposeName?: string;
}

export declare interface AT_GetPersonSocialInsuranceByUserModel {
	/*社保明细Id*/
	socialInsuranceDetailsId: number;
	/*社保项目Id*/
	subjectId: number;
	/*社保类型

1 = 社保

2 = 公积金

3 = 其他*/
	insuranceType: AT_InsuranceTypeEnum;
	/*社保状态*/
	insuranceState: number;
	/*员工编码*/
	barCode?: string;
	/*社保名称*/
	subjectName?: string;
	/*个人社保金额*/
	personPay?: number;
	/*企业社保金额*/
	companyPay?: number;
}

export declare interface AT_GetRewardByUserModel {
	/*奖惩科目*/
	subjectName?: string;
	/*奖惩金额*/
	rewardMoney?: number;
	/*奖惩说明*/
	note?: string;
	/*奖惩日期*/
	rewardDate: string;
}

export declare interface AT_GetSlaveCardRechargeApplyByUserModel {
	/*主卡卡号*/
	cardNo?: string;
	/*储值卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*储值卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*充值日期*/
	rechargeDate?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_GetSocialInsuranceByUserModel {
	/*社保总额*/
	totalInsuranceMoney?: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*合计*/
	countMoney?: number;
	/*参保公司*/
	csoName?: string;
	/*个人合计*/
	countPersonMoney?: number;
	/*单位合计*/
	countEnterpriseMoney?: number;
}

export declare interface AT_GetTeachingDetailsByUserModel {
	/*带教明细Id*/
	id: number;
	/*带教明细状态

1 = 未开始

2 = 已开始

3 = 已结束*/
	state?: AT_TeachingDetailsState;
	/*带教明细状态

1 = 未开始

2 = 已开始

3 = 已结束*/
	readonly stateText?: AT_TeachingDetailsState;
	/*类型

1 = 实习

2 = 试用

3 = 日常*/
	type?: AT_TeachingType;
	/*类型

1 = 实习

2 = 试用

3 = 日常*/
	readonly typeText?: AT_TeachingType;
	/*被带教人*/
	beTeachUserCode?: string;
	/*被带教人*/
	beTeachUser?: string;
	/*被带教人部门*/
	beTeachDepCode?: string;
	/*被带教人部门*/
	beTeachDep?: string;
	/*被带教人岗位*/
	beTeachPostCode?: string;
	/*被带教人岗位*/
	beTeachPost?: string;
	/*带教人*/
	toTeachUser?: string;
	/*带教部门*/
	toTeachDep?: string;
	/*带教岗位*/
	toTeachPost?: string;
	/*计划开始日期*/
	planStartDate: string;
	/*计划结束日期*/
	planEndDate: string;
	/*实际开始日期*/
	actualStartDate?: string;
	/*实际结束日期*/
	actualEndDate?: string;
	/*带教内容*/
	content?: string;
	/*考核方式*/
	method?: string;
	/*达标要求*/
	demand?: string;
}

export declare interface AT_GetVirtueFundByUserModel {
	/*收款信息*/
	collectInfo?: string;
	/*科目*/
	subjectName?: string;
	/*金额*/
	amount?: number;
	/*摘要*/
	summary?: string;
	/*联系人*/
	familyName?: string;
	/*联系方式*/
	contact?: string;
}

export declare interface AT_GetWelfareByUserModel {
	/*福利科目*/
	subjectName?: string;
	/*福利金额*/
	welfareMoney?: number;
	/*福利日期*/
	welfareDate?: string;
	/*福利说明*/
	note?: string;
}

export enum AT_GrantState {
	未发放 = 0,
	部分发放 = 1,
	已发放 = 2,
}

export enum AT_GrantWayEnum {
	现金 = 1,
	公司 = 2,
}

export declare interface AT_HandoverModel {
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*交接类型*/
	handoverTypeText?: string;
	/*交接人*/
	auditUserName?: string;
	/*交接时间*/
	lastFlowTime: string;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
}

export declare interface AT_HelpAttachmentModel {
	/*帮助说明ID*/
	helpNotesId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_HelpNotesModel {
	/*组件名(后台权限取值标识)*/
	component?: string;
	/*页面说明*/
	pageNote?: string;
	/*详细说明*/
	detailNote?: string;
	/*操作说明相关附件*/
	helpAttachments?: AT_HelpAttachmentModel[];
}

export declare interface AT_HelpNotesViewModel {
	/*组件名(后台权限取值标识)*/
	component?: string;
	/*页面说明*/
	pageNote?: string;
	/*详细说明*/
	detailNote?: string;
	/*操作说明相关附件*/
	helpAttachments?: AT_HelpAttachmentModel[];
	/*Id*/
	id: number;
}

export enum AT_HolidayModeTypeEnum {
	工作日 = 1,
	自然日 = 2,
}

export declare interface AT_HolidayModel {
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*假期名称：假期类型*/
	type?: string;
	/*时长单位：天，小时*/
	unit: number;
	/*计算方式：工作日，自然日*/
	mode: number;
	/*发放规则：固定额度，按照司龄*/
	rule: number;
	/*固定额度*/
	fixedQuota?: number;
	/*按照司龄*/
	holidayWorkYears?: AT_HolidayWorkYearModel[];
}

export declare interface AT_HolidayPageModel {
	/*自增ID*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*假期名称：假期类型*/
	type?: string;
	/*时长单位：天，小时

1 = 天

2 = 小时*/
	unit: AT_HolidayUnitTypeEnum;
	/*时长单位文本值：天，小时

1 = 天

2 = 小时*/
	readonly unitText: AT_HolidayUnitTypeEnum;
	/*计算方式：工作日，自然日

1 = 工作日

2 = 自然日*/
	mode: AT_HolidayModeTypeEnum;
	/*计算方式文本值：工作日，自然日

1 = 工作日

2 = 自然日*/
	readonly modeText: AT_HolidayModeTypeEnum;
	/*发放规则：固定额度，按照司龄

1 = 固定额度

2 = 按照司龄*/
	rule: AT_HolidayRuleTypeEnum;
	/*发放规则文本值：固定额度，按照司龄

1 = 固定额度

2 = 按照司龄*/
	readonly ruleText: AT_HolidayRuleTypeEnum;
	/*固定额度*/
	fixedQuota?: number;
}

export declare interface AT_HolidayPageModelIEnumerableInt32Tuple {
	item1?: AT_HolidayPageModel[];
	item2: number;
}

export declare interface AT_HolidayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态：启用，停用*/
	state?: AT_QueryList;
	/*假期名称：假期类型*/
	type?: AT_QueryString;
}

export enum AT_HolidayRuleTypeEnum {
	固定额度 = 1,
	按照司龄 = 2,
}

export enum AT_HolidayUnitTypeEnum {
	天 = 1,
	小时 = 2,
}

export declare interface AT_HolidayViewModel {
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*假期名称：假期类型*/
	type?: string;
	/*时长单位：天，小时*/
	unit: number;
	/*计算方式：工作日，自然日*/
	mode: number;
	/*发放规则：固定额度，按照司龄*/
	rule: number;
	/*固定额度*/
	fixedQuota?: number;
	/*按照司龄*/
	holidayWorkYears?: AT_HolidayWorkYearModel[];
}

export declare interface AT_HolidayWorkYearModel {
	/*自增ID*/
	id: number;
	/*假期类型ID*/
	holidayId: number;
	/*开始司龄*/
	startYear?: number;
	/*结束司龄*/
	endYear?: number;
	/*享有假期*/
	leave?: number;
}

export declare interface AT_HomePageRollPicViewModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
	/*排序*/
	sort?: number;
	id: number;
}

export declare interface AT_HotelAttachmentModel {
	/*附件类型：酒店协议附件，其他附件

1 = 酒店协议

2 = 其他*/
	type: AT_HotelAttachmentType;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export enum AT_HotelAttachmentType {
	酒店协议 = 1,
	其他 = 2,
}

export declare interface AT_HotelModel {
	/*状态：有效，无效

1 = 有效

2 = 无效*/
	state: AT_HotelState;
	/*酒店名称*/
	name: string;
	/*酒店星级

1 = 一星

2 = 二星

3 = 三星

4 = 四星

5 = 五星*/
	star: AT_HotelStar;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*地址*/
	address: string;
	/*订房电话*/
	booking?: string;
	/*联系人*/
	contacts: string;
	/*联系电话*/
	contactPhone: string;
	/*签订公司*/
	signCompany?: string;
	/*签订人*/
	signUser: string;
	/*签订时间*/
	signDate?: string;
	/*截止时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
	/*客房信息*/
	hotelRooms?: AT_HotelRoomModel[];
	/*附件*/
	hotelAttachmentList?: AT_HotelAttachmentModel[];
}

export declare interface AT_HotelPageModel {
	/*酒店id*/
	id: number;
	/*状态：有效，无效

1 = 有效

2 = 无效*/
	state: AT_HotelState;
	/*状态：有效，无效

1 = 有效

2 = 无效*/
	readonly stateText: AT_HotelState;
	/*酒店名称*/
	name?: string;
	/*星级：一星，二星，三星，四星，五星

1 = 一星

2 = 二星

3 = 三星

4 = 四星

5 = 五星*/
	star: AT_HotelStar;
	/*所属地区*/
	region?: string;
	/*地址*/
	address?: string;
	/*酒店地址*/
	readonly hotelAddress?: string;
	/*订房电话*/
	booking?: string;
	/*联系人*/
	contacts?: string;
	/*联系方式*/
	readonly contactInfo?: string;
	/*联系电话*/
	contactPhone?: string;
	/*签订公司*/
	signCompany?: string;
	/*签订人*/
	signUser?: string;
	/*签订时间*/
	signDate?: string;
	/*截止时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
	/*房型及协议价格*/
	roomTypeAndPrice?: string;
}

export declare interface AT_HotelPageModelIEnumerableInt32Tuple {
	item1?: AT_HotelPageModel[];
	item2: number;
}

export declare interface AT_HotelQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态：有效，无效*/
	state?: AT_QueryList;
	/*区县*/
	area?: AT_QueryGiven;
	/*酒店名称*/
	name?: AT_QueryString;
	/*酒店星级*/
	star?: AT_QueryList;
	/*地址*/
	address?: AT_QueryString;
	/*截止时间*/
	endDate?: AT_QueryDateTime;
}

export declare interface AT_HotelRoomAttachmentModel {
	/*客房信息ID（还原用）*/
	hotelRoomId: number;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_HotelRoomModel {
	/*客房id*/
	id?: number;
	/*酒店Id*/
	hotelId?: number;
	/*房型*/
	roomType: string;
	/*协议价*/
	price: number;
	/*说明*/
	notes?: string;
	/*附件*/
	hotelRoomAttachmentList?: AT_HotelRoomAttachmentModel[];
}

export enum AT_HotelStar {
	一星 = 1,
	二星 = 2,
	三星 = 3,
	四星 = 4,
	五星 = 5,
}

export enum AT_HotelState {
	有效 = 1,
	无效 = 2,
}

export declare interface AT_HotelViewModel {
	/*状态：有效，无效

1 = 有效

2 = 无效*/
	state: AT_HotelState;
	/*酒店名称*/
	name: string;
	/*酒店星级

1 = 一星

2 = 二星

3 = 三星

4 = 四星

5 = 五星*/
	star: AT_HotelStar;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*地址*/
	address: string;
	/*订房电话*/
	booking?: string;
	/*联系人*/
	contacts: string;
	/*联系电话*/
	contactPhone: string;
	/*签订公司*/
	signCompany?: string;
	/*签订人*/
	signUser: string;
	/*签订时间*/
	signDate?: string;
	/*截止时间*/
	endDate?: string;
	/*备注*/
	notes?: string;
	/*客房信息*/
	hotelRooms?: AT_HotelRoomModel[];
	/*附件*/
	hotelAttachmentList?: AT_HotelAttachmentModel[];
	/*酒店id*/
	id: number;
}

export enum AT_HtmlType {
	None = 0,
	Input = 1,
	Select = 2,
}

export declare interface AT_IdCardInfoModel {
	/*身份证号*/
	idNo?: string;
	/*有效期*/
	validityPeriod?: string;
	/*民族*/
	nation?: string;
}

export declare interface AT_InductionAttachmentModel {
	/*Id*/
	id: number;
	/*类型

1 = 身份证

2 = 健康证

3 = 学历证

4 = 离职证明

5 = 职称证明

6 = 银行信息

7 = 其他证明*/
	type: AT_InductionAttachmentType;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext?: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export enum AT_InductionAttachmentType {
	身份证 = 1,
	健康证 = 2,
	学历证 = 3,
	离职证明 = 4,
	职称证明 = 5,
	银行信息 = 6,
	其他证明 = 7,
}

export declare interface AT_InductionStudyModel {
	/*Id*/
	id: number;
	/*学校名称*/
	school?: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*专业*/
	specialty?: string;
	/*起始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_InductionWorkModel {
	/*Id*/
	id: number;
	/*工作单位*/
	workUnit?: string;
	/*担任职务*/
	duty?: string;
	/*岗位薪资*/
	salary?: string;
	/*起始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*工作时长*/
	workDuration?: string;
	/*工作描述*/
	content?: string;
	/*离职原因*/
	resign?: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_InitializeSocialInsuranceSchemeModel {
	/*社保方案Id*/
	id: number;
	/*参保时间*/
	insuredTime: string;
	/*参保公司*/
	csoCode: string;
	/*参保人员集合*/
	barCodes: string[];
}

export enum AT_InsuranceTypeEnum {
	社保 = 1,
	公积金 = 2,
	其他 = 3,
}

export enum AT_InterestRatUnitType {
	百分 = 1,
	千分 = 2,
}

export enum AT_InterestType {
	不计息 = 1,
	按日计息 = 2,
	按月计息 = 3,
	按年计息 = 4,
}

export declare interface AT_InternshipUpDetailsModel {
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*级别编码*/
	levelCode: string;
	/*试用期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm: AT_PeriodType;
	/*试用薪资*/
	tryoutSalary?: number;
	/*试用日期*/
	tryoutDate: string;
	/*正式薪资*/
	officialSalary: number;
	/*薪资说明*/
	salaryNote: string;
	/*申请描述*/
	applyNote?: string;
	/*试用申请弹窗KEY*/
	popupKey?: string;
	/*流程Id*/
	flowId: number;
	/*员工名称*/
	name?: string;
	/*实习部门*/
	fieldworkDepCode?: string;
	/*实习部门*/
	fieldworkDep?: string;
	/*实习岗位*/
	fieldworkPostCode?: string;
	/*实习岗位*/
	fieldworkPost?: string;
	/*试用部门*/
	tryoutDepCode?: string;
	/*试用部门*/
	tryoutDep?: string;
	/*试用岗位*/
	tryoutPostCode?: string;
	/*试用岗位*/
	tryoutPost?: string;
	/*级别*/
	level?: string;
}

export declare interface AT_InternshipUpModel {
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*级别编码*/
	levelCode: string;
	/*试用期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm: AT_PeriodType;
	/*试用薪资*/
	tryoutSalary?: number;
	/*试用日期*/
	tryoutDate: string;
	/*正式薪资*/
	officialSalary: number;
	/*薪资说明*/
	salaryNote: string;
	/*申请描述*/
	applyNote?: string;
	/*试用申请弹窗KEY*/
	popupKey?: string;
}

export declare interface AT_InterviewDetailsModel {
	/*简历Id*/
	resumeHoldId?: number;
	/*背调Id*/
	behindSurveyId?: number;
	/*简历状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	resumeStatus?: AT_ResumeStatus;
	/*姓名*/
	name?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*年龄*/
	age?: number;
	/*电话号码*/
	phone?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*在职公司*/
	workUnit?: string;
	/*当前岗位*/
	duty?: string;
	/*在职薪资*/
	salary?: string;
	/*部门*/
	depCode?: string;
	/*岗位*/
	postCode?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
}

export declare interface AT_InterviewEvaluateDemandModel {
	/*序号*/
	number?: number;
	/*面试评价ID*/
	interviewEvaluateId?: number;
	/*招聘岗位要求表ID*/
	recruitPostClaimId?: number;
	/*招聘岗位要求描述*/
	recruitPostClaimName?: string;
	/*要求契合度：无法判断，不契合，基本契合，完全契合

1 = 不契合

2 = 契合

3 = 基本契合

4 = 无法判断*/
	affinity?: AT_AffinityEnum;
	/*补充说明*/
	notes?: string;
}

export declare interface AT_InterviewEvaluateModel {
	/*Id(新增不传)*/
	id?: number;
	/*面试主表ID*/
	interviewId?: number;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*评价人*/
	appraiser: string;
	/*评价人*/
	appraiserName?: string;
	/*面试建议：通过，不通过

1 = 通过

2 = 不通过*/
	interviewResult?: AT_InterviewResultEnum;
	/*补充说明*/
	notes?: string;
	/*面试评价要求*/
	interviewEvaluateDemandModels?: AT_InterviewEvaluateDemandModel[];
}

export declare interface AT_InterviewEvaluateViewModel {
	/*Id(新增不传)*/
	id?: number;
	/*面试主表ID*/
	interviewId?: number;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*评价人*/
	appraiser: string;
	/*评价人*/
	appraiserName?: string;
	/*面试建议：通过，不通过

1 = 通过

2 = 不通过*/
	interviewResult?: AT_InterviewResultEnum;
	/*补充说明*/
	notes?: string;
	/*面试评价要求*/
	interviewEvaluateDemandModels?: AT_InterviewEvaluateDemandModel[];
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
}

export declare interface AT_InterviewManegePageModel {
	/*面试主表Id*/
	id: number;
	/*简历共享Id*/
	resumeHoldId: number;
	/*面试结果Id*/
	interviewResultId?: number;
	/*简历Id*/
	resumeId: number;
	/*录用审批流程ID*/
	flowId?: number;
	/*录用审批流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*录用审批流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*简历状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	resumeStatus: AT_ResumeStatus;
	/*简历状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	readonly resumeStatusText: AT_ResumeStatus;
	/*姓名*/
	name?: string;
	/*性别*/
	sex: number;
	/*年龄*/
	age?: number;
	/*当前岗位*/
	duty?: string;
	/*应聘部门code*/
	depCode?: string;
	/*应聘部门*/
	dep?: string;
	/*应聘岗位*/
	post?: string;
	/*应聘岗位*/
	postCode?: string;
	/*目前薪酬*/
	salary?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*联系方式*/
	phone?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
	/*在职公司*/
	workUnit?: string;
	/*是否高管引入*/
	isIntroduce?: number;
}

export declare interface AT_InterviewManegePageModelIEnumerableInt32Tuple {
	item1?: AT_InterviewManegePageModel[];
	item2: number;
}

export declare interface AT_InterviewManegeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*简历状态*/
	resumeStatus?: AT_QueryList;
	/*姓名*/
	name?: AT_QueryString;
	/*应聘部门*/
	dep?: AT_QueryString;
	post?: AT_QueryString;
}

export enum AT_InterviewModality {
	到面 = 1,
	电话 = 2,
	视频 = 3,
	无 = 4,
}

export declare interface AT_InterviewPlanAttachmentModel {
	/*面试安排ID*/
	interviewPlanId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_InterviewPlanModel {
	/*Id(新增不传)*/
	id?: number;
	/*面试主表Id*/
	interviewId?: number;
	/*应聘部门*/
	depCode: string;
	/*应聘岗位*/
	postCode: string;
	/*面试时间*/
	viewTime?: string;
	/*面试形式：到面、视频、电话、无*/
	viewWay?: number;
	/*能否编辑*/
	canUpdate?: boolean;
	/*面试官*/
	interviewPlanViewerModels?: string[];
}

export declare interface AT_InterviewPlanResultModel {
	/*Id(新增不传)*/
	id?: number;
	/*面试主表Id*/
	interviewId?: number;
	/*应聘部门*/
	depCode: string;
	/*应聘岗位*/
	postCode: string;
	/*面试时间*/
	viewTime?: string;
	/*面试形式：到面、视频、电话、无*/
	viewWay?: number;
	/*能否编辑*/
	canUpdate?: boolean;
	/*面试官*/
	interviewPlanViewerModels?: string[];
	/*新增时间*/
	addTime?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*面试评价*/
	interviewEvaluateResultModels?: AT_InterviewEvaluateModel[];
}

export declare interface AT_InterviewPlanViewModel {
	/*姓名*/
	name?: string;
	/*性别*/
	sex?: number;
	/*年龄*/
	age?: number;
	/*面试安排*/
	interviewPlanModels?: AT_InterviewPlanModel[];
	/*面试附件*/
	interviewPlanAttachmentModels?: AT_InterviewPlanAttachmentModel[];
}

export enum AT_InterviewResultEnum {
	通过 = 1,
	不通过 = 2,
}

export declare interface AT_InterviewResultModel {
	/*面试主表ID*/
	interviewId: number;
	/*应聘部门*/
	depCode: string;
	/*应聘岗位*/
	postCode: string;
	/*初试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	initialWay: AT_InterviewModality;
	/*初试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	initialResult: AT_InterviewResultType;
	/*初试评价*/
	initialAppraisal?: string;
	/*初试面试官们*/
	interviewResultInitialList?: string[];
	/*复试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	repeatWay?: AT_InterviewModality;
	/*复试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	repeatResult?: AT_InterviewResultType;
	/*复试评价*/
	repeatAppraisal?: string;
	/*复试面试官们*/
	interviewResultRepeatList?: string[];
	/*最终面试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	finalResult: AT_InterviewResultType;
	/*面试结果PopupKey*/
	popupKey?: string;
}

export enum AT_InterviewResultType {
	面试通过 = 1,
	面试不通过 = 2,
	无 = 3,
}

export declare interface AT_InterviewResultViewModel {
	/*面试主表ID*/
	interviewId: number;
	/*应聘部门*/
	depCode: string;
	/*应聘岗位*/
	postCode: string;
	/*初试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	initialWay: AT_InterviewModality;
	/*初试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	initialResult: AT_InterviewResultType;
	/*初试评价*/
	initialAppraisal?: string;
	/*初试面试官们*/
	interviewResultInitialList?: string[];
	/*复试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	repeatWay?: AT_InterviewModality;
	/*复试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	repeatResult?: AT_InterviewResultType;
	/*复试评价*/
	repeatAppraisal?: string;
	/*复试面试官们*/
	interviewResultRepeatList?: string[];
	/*最终面试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	finalResult: AT_InterviewResultType;
	/*面试结果PopupKey*/
	popupKey?: string;
	/*姓名*/
	name?: string;
	/*应聘部门*/
	dep?: string;
	/*应聘岗位*/
	post?: string;
	/*初试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	readonly initialWayText: AT_InterviewModality;
	/*初试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	readonly initialResultText: AT_InterviewResultType;
	/*复试形式：到面，电话，视频

1 = 到面

2 = 电话

3 = 视频

4 = 无*/
	readonly repeatWayText?: AT_InterviewModality;
	/*复试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	readonly repeatResultText?: AT_InterviewResultType;
	/*初试面试官们*/
	interviewResultInitialNames?: string;
	/*复试面试官们*/
	interviewResultRepeatNames?: string;
	/*最终面试结果：面试通过，面试不通过

1 = 面试通过

2 = 面试不通过

3 = 无*/
	readonly finalResultText: AT_InterviewResultType;
}

export declare interface AT_InterviewTranscriptAttachmentModel {
	/*面试结果ID*/
	interviewTranscriptId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_InterviewTranscriptModel {
	/*Id*/
	id: number;
	/*面试主表ID*/
	interviewId: number;
	/*年龄*/
	age?: number;
	/*籍贯*/
	birthplace?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*家庭情况*/
	family?: string;
	/*工作经历*/
	workExp?: string;
	/*实操形式*/
	practiceWay?: string;
	/*实操评估*/
	practiceAssess?: string;
	/*最终结果：面试通过，面试不通过，放弃面试

1 = 面试通过

2 = 面试不通过

3 = 放弃面试*/
	finalResult?: AT_FinalResultEnum;
	/*原因：薪资待遇不符，岗位要求不符，职业素养不符，思维理念不符，岗位需求调整，诚信度问题，其它原因

1 = 薪资待遇不符

2 = 岗位要求不符

3 = 职业素养不符

4 = 思维理念不符

5 = 岗位需求调整

6 = 诚信度问题

7 = 其它原因*/
	reason?: AT_InterviewTranscriptReasonEnum;
	/*补充说明*/
	notes?: string;
	/*附件*/
	interviewTranscriptAttachmentModels?: AT_InterviewTranscriptAttachmentModel[];
}

export enum AT_InterviewTranscriptReasonEnum {
	薪资待遇不符 = 1,
	岗位要求不符 = 2,
	职业素养不符 = 3,
	思维理念不符 = 4,
	岗位需求调整 = 5,
	诚信度问题 = 6,
	其它原因 = 7,
}

export declare interface AT_InterviewTranscriptViewModel {
	/*Id*/
	id: number;
	/*面试主表ID*/
	interviewId: number;
	/*年龄*/
	age?: number;
	/*籍贯*/
	birthplace?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*家庭情况*/
	family?: string;
	/*工作经历*/
	workExp?: string;
	/*实操形式*/
	practiceWay?: string;
	/*实操评估*/
	practiceAssess?: string;
	/*最终结果：面试通过，面试不通过，放弃面试

1 = 面试通过

2 = 面试不通过

3 = 放弃面试*/
	finalResult?: AT_FinalResultEnum;
	/*原因：薪资待遇不符，岗位要求不符，职业素养不符，思维理念不符，岗位需求调整，诚信度问题，其它原因

1 = 薪资待遇不符

2 = 岗位要求不符

3 = 职业素养不符

4 = 思维理念不符

5 = 岗位需求调整

6 = 诚信度问题

7 = 其它原因*/
	reason?: AT_InterviewTranscriptReasonEnum;
	/*补充说明*/
	notes?: string;
	/*附件*/
	interviewTranscriptAttachmentModels?: AT_InterviewTranscriptAttachmentModel[];
	/*录用审批流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	employFlowState?: AT_FlowListStateEnum;
	/*面试安排*/
	interviewPlanResultModels?: AT_InterviewPlanResultModel[];
}

export declare interface AT_InterviewViewModel {
	/*自增ID*/
	id: number;
	/*面试主表Id*/
	interviewId?: number;
	/*背调Id*/
	behindSurveyId?: number;
}

export enum AT_InvoiceType {
	专票 = 1,
	普票 = 2,
}

export enum AT_IsInterviewStatus {
	需面试 = 1,
	无需面试 = 2,
}

export enum AT_JobState {
	在职 = 1,
	离职 = 2,
	待业 = 3,
	其他 = 4,
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

export enum AT_LeaseState {
	出租中 = 1,
	已归还 = 2,
}

export enum AT_LeaveAttachmentFromType {
	请假 = 1,
	销假 = 2,
}

export declare interface AT_LeaveAttachmentModel {
	/*自增ID*/
	id: number;
	/*请假/销假：主表ID*/
	fromId: number;
	/*类型：请假，销假

1 = 请假

2 = 销假*/
	fromType: AT_LeaveAttachmentFromType;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
}

export declare interface AT_LeaveDestroyListModel {
	/*ID*/
	id: number;
	/*销假开始时间*/
	startTime?: string;
	/*销假结束时间*/
	endTime?: string;
	/*销假事由*/
	reason?: string;
	/*销假时长*/
	duration?: number;
}

export declare interface AT_LeaveDestroyModel {
	/*请假主表ID*/
	leaveId: number;
	/*销假人*/
	applyUserName?: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*销假时长*/
	duration: number;
	/*时长单位：天，小时；存假期设置时长单位文本*/
	durationUnit?: string;
	/*请假事由*/
	reason: string;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
	/*销假附件*/
	leaveDestroyAttachments?: AT_LeaveAttachmentModel[];
}

export declare interface AT_LeaveModel {
	/*请假人*/
	applyUser: string;
	/*请假人*/
	applyUserName: string;
	/*请假人部门*/
	depCode: string;
	/*请假人岗位*/
	postCode: string;
	/*假期类型ID*/
	holidayId: number;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*请假时长*/
	duration: number;
	/*时长单位：天，小时；存假期设置时长单位文本*/
	durationUnit: string;
	/*累计超时长*/
	totalDuration?: number;
	/*请假事由*/
	reason: string;
	/*代替人*/
	replaceUser: string;
	/*申请时间*/
	applyTime?: string;
	/*流程ID*/
	flowId: number;
	/*是否总经理审核*/
	isBossAudit?: number;
	/*请假附件*/
	leaveAttachments?: AT_LeaveAttachmentModel[];
}

export declare interface AT_LeavePageModel {
	id: number;
	/*请假人Code*/
	applyUser?: string;
	/*请假人名称*/
	applyUserName?: string;
	/*请假人部门Code*/
	depCode?: string;
	/*请假人部门名称*/
	depName?: string;
	/*请假人岗位Code*/
	postCode?: string;
	/*请假人岗位名称*/
	postName?: string;
	/*假期类型ID*/
	holidayId: number;
	/*假期类型名称*/
	holidayType?: string;
	/*单据类型*/
	documentType?: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*请假时长*/
	duration: number;
	/*时长单位：天，小时；存假期设置时长单位文本*/
	durationUnit?: string;
	/*请假事由*/
	reason?: string;
	/*代替人Code*/
	replaceUser?: string;
	/*代替人名称*/
	replaceUserName?: string;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*申请时间*/
	applyTime: string;
}

export declare interface AT_LeavePageModelIEnumerableInt32Tuple {
	item1?: AT_LeavePageModel[];
	item2: number;
}

export declare interface AT_LeaveQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*请假人部门*/
	depName?: AT_QueryString;
	/*请假人岗位*/
	postName?: AT_QueryString;
	/*请假人*/
	applyUserName?: AT_QueryString;
	/*单据类型*/
	documentType?: AT_QueryList;
	/*假期类型ID*/
	holidayType?: AT_QueryList;
	/*开始时间*/
	startTime?: AT_QueryDateTime;
	/*结束时间*/
	endTime?: AT_QueryDateTime;
}

export declare interface AT_LeaveViewModel {
	/*请假人*/
	applyUser: string;
	/*请假人部门*/
	depCode: string;
	/*请假人岗位*/
	postCode: string;
	/*假期类型ID*/
	holidayId: number;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*请假时长*/
	duration: number;
	/*时长单位：天，小时；存假期设置时长单位文本*/
	durationUnit: string;
	/*累计超时长*/
	totalDuration?: number;
	/*请假事由*/
	reason: string;
	/*代替人*/
	replaceUser: string;
	/*申请时间*/
	applyTime?: string;
	/*流程ID*/
	flowId: number;
	/*是否总经理审核*/
	isBossAudit?: number;
	/*请假附件*/
	leaveAttachments?: AT_LeaveAttachmentModel[];
	/*流程状态*/
	flowState: number;
	/*自增ID*/
	id: number;
	/*请假人文本*/
	applyUserName?: string;
	/*请假人部门文本*/
	depName?: string;
	/*请假人岗位文本*/
	postName?: string;
	/*代替人文本*/
	replaceUserName?: string;
	/*销假记录*/
	leaveDestroyList?: AT_LeaveDestroyListModel[];
	/*销假开始时间*/
	leaveDestroyStartTime?: string;
	/*销假结束时间*/
	leaveDestroyEndTime?: string;
	/*销假事由*/
	leaveDestroyReason?: string;
}

export declare interface AT_LevelModel {
	/*级别名称*/
	levelName: string;
	/*级别描述*/
	levelNote?: string;
}

export declare interface AT_LevelPageModel {
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*级别编码*/
	levelCode?: string;
	/*级别名称*/
	levelName?: string;
	/*级别描述*/
	levelNote?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime?: string;
}

export declare interface AT_LevelPageModelIEnumerableInt32Tuple {
	item1?: AT_LevelPageModel[];
	item2: number;
}

export declare interface AT_LevelQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*级别编码*/
	levelCode?: AT_QueryString;
	/*级别名称*/
	levelName?: AT_QueryString;
	/*创建时间*/
	addTime?: AT_QueryDateTime;
	/*创建人*/
	addUser?: AT_QueryString;
	/*更新人*/
	updUser?: AT_QueryString;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_LevelResetFlowModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode: string;
	/*员工唯一码：企业编码+员工主编码*/
	barName: string;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*调整类型：晋升，降职

1 = 晋升

2 = 降职*/
	resetType: AT_LevelResetFlowResetType;
	/*原级别*/
	oldLevel?: string;
	/*调整级别*/
	newLevel: string;
	/*说明*/
	note: string;
	/*级别调动弹窗KEY*/
	popupKey?: string;
}

export declare interface AT_LevelResetFlowPageModel {
	/*自增ID*/
	id: number;
	/*员工唯一码：企业编码+员工主编码*/
	barCode?: string;
	/*姓名*/
	barName?: string;
	/*部门*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
	/*调整类型：晋升，降职

1 = 晋升

2 = 降职*/
	resetType: AT_LevelResetFlowResetType;
	/*调整类型：晋升，降职

1 = 晋升

2 = 降职*/
	readonly resetTypeText: AT_LevelResetFlowResetType;
	/*原级别*/
	oldLevelName?: string;
	/*调整级别*/
	newLevelName?: string;
	/*说明*/
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*新增人*/
	addUser?: string;
	/*新增人名称*/
	addUserName?: string;
	/*新增时间*/
	addTime?: string;
}

export declare interface AT_LevelResetFlowPageModelIEnumerableInt32Tuple {
	item1?: AT_LevelResetFlowPageModel[];
	item2: number;
}

export declare interface AT_LevelResetFlowQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*调整类型*/
	resetType?: AT_QueryList;
	/*调整级别*/
	newLevelCode?: AT_QueryList;
}

export enum AT_LevelResetFlowResetType {
	晋升 = 1,
	降职 = 2,
}

export declare interface AT_LevelResetFlowViewModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode: string;
	/*部门*/
	depCode: string;
	/*岗位*/
	postCode: string;
	/*调整类型：晋升，降职

1 = 晋升

2 = 降职*/
	resetType: AT_LevelResetFlowResetType;
	/*原级别*/
	oldLevel?: string;
	/*调整级别*/
	newLevel: string;
	/*说明*/
	note: string;
	/*级别调动弹窗KEY*/
	popupKey?: string;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*ID*/
	id: number;
	/*姓名*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*新增人*/
	addUser?: string;
	/*新增人名称*/
	addUserName?: string;
	/*新增时间*/
	addTime?: string;
	/*原级别*/
	oldLevelName?: string;
	/*调整级别*/
	newLevelName?: string;
}

export declare interface AT_LevelViewModel {
	/*级别名称*/
	levelName: string;
	/*级别描述*/
	levelNote?: string;
	/*级别编码*/
	levelCode?: string;
	/*流程Id*/
	flowId?: number;
}

export enum AT_LogRule {
	日报 = 1,
	周报 = 2,
	月报 = 3,
}

export enum AT_MaritalStatus {
	未婚 = 1,
	已婚 = 2,
}

export declare interface AT_MasterCardBagModel {
	/*自增ID*/
	id: number;
	/*所属公司*/
	csoCode?: string;
	/*所属公司(还原用)*/
	csoName?: string;
	/*主卡编码 3081*/
	cardCode?: string;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*卡类型*/
	cardType: number;
	/*卡号*/
	cardNo: string;
	/*银行*/
	bank: string;
	/*银行开户名*/
	bankAccountName: string;
	/*余额*/
	surplusMoney?: number;
	/*银行卡号*/
	bankCard: string;
}

export declare interface AT_MasterCardBagPageModel {
	/*自增ID*/
	id: number;
	/*所属公司Code*/
	csoCode?: string;
	/*所属公司*/
	csoName?: string;
	/*主卡编码 3081*/
	cardCode?: string;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*卡号*/
	cardNo?: string;
	/*余额*/
	surplusMoney: number;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_MasterCardBagPageModelIEnumerableInt32Tuple {
	item1?: AT_MasterCardBagPageModel[];
	item2: number;
}

export declare interface AT_MasterCardBagQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*卡类型*/
	cardType?: AT_QueryList;
	/*卡号*/
	cardNo?: AT_QueryString;
	/*所属公司*/
	csoCode?: AT_QueryList;
}

export declare interface AT_MasterCardRechargeApplyModel {
	/*主卡编码*/
	cardCode: string;
	/*充值状态 未充值 已充值*/
	rechargeState: number;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*收款信息 来源 主卡管理 格式 开户名,银行,卡号*/
	cardText: string;
	/*充值金额*/
	rechargeMoney: number;
	/*最迟回款日*/
	latestDate: string;
	/*摘要*/
	summary: string;
	/*申请单编码*/
	applyCode?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
}

export declare interface AT_MasterCardRechargeApplyPageModel {
	/*自增ID*/
	id: number;
	/*主卡ID*/
	masterCardBagId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*申请单编码 3075*/
	applyCode?: string;
	/*主卡卡号*/
	cardNo?: string;
	/*所属公司*/
	csoName?: string;
	/*充值状态 未充值 已充值*/
	rechargeState: number;
	/*申请人*/
	barCode?: string;
	/*申请人名称*/
	staffName?: string;
	/*申请人部门编码*/
	depCode?: string;
	/*申请人部门名称*/
	depName?: string;
	/*收款信息 来源 主卡管理 格式 开户名,银行,卡号*/
	cardText?: string;
	/*储值卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*主卡Code*/
	cardCode?: string;
	/*储值卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*充值金额*/
	rechargeMoney: number;
	/*最迟回款日*/
	latestDate?: string;
	/*充值日期*/
	rechargeDate?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId: number;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_MasterCardRechargeApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_MasterCardRechargeApplyPageModel[];
	item2: number;
}

export declare interface AT_MasterCardRechargeApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*储值卡类型*/
	cardType?: AT_QueryList;
	/*主卡卡号*/
	cardNo?: AT_QueryString;
	/*所属公司*/
	csoCode?: AT_QueryList;
}

export declare interface AT_MasterCardRechargeApplyViewModel {
	/*主卡编码*/
	cardCode: string;
	/*充值状态 未充值 已充值*/
	rechargeState: number;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*收款信息 来源 主卡管理 格式 开户名,银行,卡号*/
	cardText: string;
	/*充值金额*/
	rechargeMoney: number;
	/*最迟回款日*/
	latestDate: string;
	/*摘要*/
	summary: string;
	/*申请单编码*/
	applyCode?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*id*/
	id: number;
	/*流程id*/
	flowId: number;
	/*申请人部门文本*/
	depName?: string;
	/*卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*卡类型文本

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*卡号*/
	cardNo?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
	/*所属公司*/
	csoCode?: string;
	/*所属公司*/
	csoName?: string;
}

export declare interface AT_MasterCardRechargeFinishModel {
	/*自增ID*/
	id: number;
	/*主卡充值申请单编码*/
	applyCode?: string;
	/*充值人部门编码*/
	depCode?: string;
	/*充值人*/
	barCode?: string;
	/*充值日期*/
	rechargeDate: string;
}

export declare interface AT_MaterialAllocationDetailsModel {
	/*物资编码：调拨的物资编码，用于对码表查找出申请公司物资编码*/
	grantMaterialCode: string;
	/*数量*/
	amount: number;
}

export declare interface AT_MaterialAllocationDetailsViewModel {
	/*物资编码：调拨的物资编码，用于对码表查找出申请公司物资编码*/
	grantMaterialCode: string;
	/*数量*/
	amount: number;
	/*申请物资编码*/
	applyMaterialCode?: string;
	/*类型名称*/
	typeName?: string;
	/*调拨公司物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*已调拨数量*/
	grantAmount?: number;
	/*结算价*/
	settlementPrice?: number;
	/*结算金额*/
	settlementMoney?: number;
}

export declare interface AT_MaterialAllocationGrantDetailsModel {
	/*申请物资编码：申请公司的物资编码，根据对码表查找出结果*/
	applyMaterialCode: string;
	/*调拨物资编码：调拨公司的物资编码*/
	grantMaterialCode: string;
	/*调拨公司物资库存ID*/
	grantStockId: number;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*数量*/
	amount: number;
}

export declare interface AT_MaterialAllocationGrantDetailsViewModel {
	/*申请物资编码：申请公司的物资编码，根据对码表查找出结果*/
	applyMaterialCode: string;
	/*调拨物资编码：调拨公司的物资编码*/
	grantMaterialCode: string;
	/*调拨公司物资库存ID*/
	grantStockId: number;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*数量*/
	amount: number;
	/*类型名称*/
	typeName?: string;
	/*调拨公司物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*结算价*/
	settlementPrice?: number;
	/*结算金额*/
	settlementMoney?: number;
}

export declare interface AT_MaterialAllocationGrantModel {
	/*调拨申请单号*/
	materialAllocationCode: string;
	/*调拨公司：企业编码*/
	grantFirmCode: string;
	/*调拨公司账户：企业银行卡表，账户编码*/
	firmBankCode: string;
	/*调拨公司账户文本*/
	firmBankCodeText: string;
	/*说明*/
	note: string;
	/*调拨发放明细*/
	materialAllocationGrantDetailsList?: AT_MaterialAllocationGrantDetailsModel[];
}

export declare interface AT_MaterialAllocationGrantPageModel {
	/*调拨发放明细Id*/
	materialAllocationGrantDetailsId: number;
	/*调拨放发单号：3093*/
	materialAllocationGrantCode?: string;
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
	/*申请公司*/
	applyFirmCode?: string;
	/*申请公司*/
	applyFirmName?: string;
	/*调拨公司*/
	grantFirmCode?: string;
	/*调拨公司*/
	grantFirmName?: string;
	/*制单时间*/
	addTime?: string;
	/*类型名称*/
	typeName?: string;
	/*调拨公司物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount?: number;
	/*已退数量*/
	returnAmount?: number;
	/*结算价*/
	settlementPrice?: number;
	/*结算金额*/
	settlementMoney?: number;
}

export declare interface AT_MaterialAllocationGrantPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialAllocationGrantPageModel[];
	item2: number;
}

export declare interface AT_MaterialAllocationGrantQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
}

export declare interface AT_MaterialAllocationGrantViewModel {
	/*调拨申请单号*/
	materialAllocationCode: string;
	/*调拨公司：企业编码*/
	grantFirmCode: string;
	/*调拨公司账户：企业银行卡表，账户编码*/
	firmBankCode: string;
	/*调拨公司账户文本*/
	firmBankCodeText: string;
	/*说明*/
	note: string;
	/*调拨发放明细*/
	materialAllocationGrantDetailsList?: AT_MaterialAllocationGrantDetailsModel[];
	/*调拨发放编码*/
	materialAllocationGrantCode?: string;
	/*申请公司：企业编码*/
	applyFirmCode?: string;
	/*申请公司*/
	applyFirmName?: string;
	/*调拨公司*/
	grantFirmName?: string;
	/*物资调拨申请明细*/
	materialAllocationDetailsViewList?: AT_MaterialAllocationDetailsViewModel[];
	/*调拨发放明细*/
	materialAllocationGrantDetailsViewList?: AT_MaterialAllocationGrantDetailsViewModel[];
}

export declare interface AT_MaterialAllocationModel {
	/*调拨公司：企业编码*/
	grantFirmCode: string;
	/*说明*/
	note: string;
	/*物资调拨申请明细*/
	materialAllocationDetailsList?: AT_MaterialAllocationDetailsModel[];
}

export declare interface AT_MaterialAllocationPageModel {
	/*调拨申请单号*/
	materialAllocationCode?: string;
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
	/*申请公司*/
	applyFirmName?: string;
	/*调拨公司*/
	grantFirmName?: string;
	/*制单时间*/
	addTime?: string;
	/*类型名称*/
	typeName?: string;
	/*调拨公司物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	amount?: number;
	/*已调拨数量*/
	grantAmount?: number;
	/*结算价*/
	settlementPrice?: number;
	/*结算金额*/
	settlementMoney?: number;
}

export declare interface AT_MaterialAllocationPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialAllocationPageModel[];
	item2: number;
}

export declare interface AT_MaterialAllocationQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*调拨申请单号*/
	materialAllocationCode?: AT_QueryString;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*申请公司*/
	fromFirmName?: AT_QueryString;
	/*调拨公司*/
	toFirmName?: AT_QueryString;
}

export declare interface AT_MaterialAllocationViewModel {
	/*调拨公司：企业编码*/
	grantFirmCode: string;
	/*说明*/
	note: string;
	/*物资调拨申请明细*/
	materialAllocationDetailsList?: AT_MaterialAllocationDetailsModel[];
	/*调拨申请单号*/
	materialAllocationCode?: string;
	/*申请公司：企业编码*/
	fromFirmCode?: string;
	/*申请公司*/
	fromFirmName?: string;
	/*调拨公司*/
	toFirmName?: string;
	/*物资调拨申请明细*/
	materialAllocationDetailsViewList?: AT_MaterialAllocationDetailsViewModel[];
}

export declare interface AT_MaterialApplyCancelModel {
	/*流程id*/
	flowId: number;
	/*作废原因*/
	cancelNote?: string;
}

export declare interface AT_MaterialApplyDetailsModel {
	/*物资编码*/
	materialCode: string;
	/*数量*/
	amount: number;
}

export declare interface AT_MaterialApplyDetailsSimpleModel {
	/*申领单号*/
	materialApplyCode?: string;
	/*物资编码*/
	materialCode?: string;
	/*数量*/
	amount: number;
	/*内部价*/
	insidePrice?: number;
	/*申领金额（数量*内部价）*/
	money: number;
	/*物资主图地址*/
	path?: string;
}

export declare interface AT_MaterialApplyDetailsViewModel {
	/*物资编码*/
	materialCode: string;
	/*数量*/
	amount: number;
	/*物资类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*内部价*/
	insidePrice?: number;
	/*申领金额（数量*内部价）*/
	money: number;
	/*可用数量*/
	usableAmount?: number;
	/*已发放数量*/
	grantAmount?: number;
}

export declare interface AT_MaterialApplyModel {
	/*申领人：企业编码+员工主编码*/
	barCode: string;
	/*申领人：企业编码+员工主编码*/
	barName?: string;
	/*申领人部门*/
	depCode: string;
	/*物资用途*/
	materialPurposeId: number;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	applyType: AT_MaterialApplyType;
	/*提货方式：自提，邮寄

1 = 自提

2 = 邮寄*/
	extractMode: AT_ExtractMode;
	/*收获地址Id*/
	personalReceiptId?: number;
	/*物资申领编码*/
	materialApplyCode?: string;
	/*说明*/
	note?: string;
	/*员工银行卡编码：通用编码*/
	bankComCode?: string;
	/*员工银行卡信息：开户名/开户行/卡号*/
	bankInfo?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*预扣金额*/
	withholdMoney?: number;
	/*申领明细*/
	materialApplyDetailsList?: AT_MaterialApplyDetailsModel[];
}

export declare interface AT_MaterialApplyPageModel {
	/*Id*/
	id: number;
	/*物资申领单号*/
	materialApplyCode?: string;
	/*申领人*/
	name?: string;
	/*流程id*/
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
	/*发放状态：未发放，部分发放，已发放

0 = 未发放

1 = 部分发放

2 = 已发放*/
	state?: AT_GrantState;
	/*发放状态：未发放，部分发放，已发放

0 = 未发放

1 = 部分发放

2 = 已发放*/
	readonly stateText?: AT_GrantState;
	/*制单时间*/
	addTime?: string;
	/*类型名称*/
	typeName?: string;
	/*物资编码*/
	materialCode?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	amount?: number;
	/*已发放数量*/
	grantAmount?: number;
	/*已退数量*/
	returnAmount?: number;
	/*市场参考价*/
	marketPrice?: number;
	/*内部价*/
	insidePrice?: number;
	/*申领金额（数量*内部价）*/
	money?: number;
	/*实际金额（发数量*内部价）*/
	practicalMoney?: number;
	/*用途*/
	purposeName?: string;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	applyType?: AT_MaterialApplyType;
	/*申领单状态：正常状态为：空；已作废单据显示：已作废

1 = 停止发放*/
	materialApplyState?: AT_MaterialApplyState;
	/*申领单状态：正常状态为：空；已作废单据显示：已作废

1 = 停止发放*/
	readonly materialApplyStateText?: AT_MaterialApplyState;
	/*作废原因*/
	cancelNote?: string;
	/*说明*/
	note?: string;
	/*业务核算部门*/
	bamsDepName?: string;
}

export declare interface AT_MaterialApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialApplyPageModel[];
	item2: number;
}

export declare interface AT_MaterialApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*物资申领单号*/
	materialApplyCode?: AT_QueryString;
	/*申领人*/
	name?: AT_QueryString;
	/*BarCode*/
	barCode?: AT_QueryString;
	/*申领类型：自购，公用*/
	applyType?: AT_QueryList;
	/*作废状态：正常状态为：空；已作废单据显示：已作废*/
	materialApplyState?: AT_QueryList;
	/*用途*/
	purposeId?: AT_QueryList;
	/*发放状态：未发放，部分发放，已发放*/
	state?: AT_QueryList;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_MaterialApplySimpleModel {
	/*申领单号*/
	materialApplyCode?: string;
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
	/*申领明细*/
	materialApplyDetailsSimpleList?: AT_MaterialApplyDetailsSimpleModel[];
}

export enum AT_MaterialApplyState {
	停止发放 = 1,
}

export enum AT_MaterialApplyType {
	自购_需付费 = 1,
	公用 = 2,
	集团 = 3,
	餐厅 = 4,
	有序 = 5,
	平台 = 6,
	丰恺思 = 7,
	柏齐鹤 = 8,
}

export declare interface AT_MaterialApplyViewModel {
	/*申领人：企业编码+员工主编码*/
	barCode: string;
	/*申领人：企业编码+员工主编码*/
	barName?: string;
	/*申领人部门*/
	depCode: string;
	/*物资用途*/
	materialPurposeId: number;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	applyType: AT_MaterialApplyType;
	/*提货方式：自提，邮寄

1 = 自提

2 = 邮寄*/
	extractMode: AT_ExtractMode;
	/*收获地址Id*/
	personalReceiptId?: number;
	/*说明*/
	note?: string;
	/*员工银行卡编码：通用编码*/
	bankComCode?: string;
	/*员工银行卡信息：开户名/开户行/卡号*/
	bankInfo?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*预扣金额*/
	withholdMoney?: number;
	/*申领明细*/
	materialApplyDetailsList?: AT_MaterialApplyDetailsModel[];
	/*物资申领备注*/
	applyNote?: string;
	/*申领单号*/
	materialApplyCode?: string;
	/*申领人*/
	name?: string;
	/*申领人部门*/
	dep?: string;
	/*物资用途*/
	materialPurposeName?: string;
	/*收货人*/
	consignee?: string;
	/*手机号码*/
	mobile?: string;
	/*所在地区*/
	locationText?: string;
	/*详细地址*/
	address?: string;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	readonly applyTypeText: AT_MaterialApplyType;
	/*核算部门：红阳部门编码*/
	bamsDepName?: string;
	/*申领明细*/
	materialApplyDetailsViewList?: AT_MaterialApplyDetailsViewModel[];
}

export declare interface AT_MaterialAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
	/*是否主图：否，是*/
	isMain: number;
}

export enum AT_MaterialAttributeType {
	特供 = 1,
	自有品牌 = 2,
	定制 = 3,
}

export declare interface AT_MaterialCheckDetailsModel {
	/*物资库存ID*/
	materialStockId: number;
	/*物资编码*/
	materialCode: string;
	/*盘点数量*/
	amount: number;
}

export declare interface AT_MaterialCheckDetailsViewModel {
	/*物资库存ID*/
	materialStockId: number;
	/*物资编码*/
	materialCode: string;
	/*盘点数量*/
	amount: number;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*原库存数量*/
	stockAmount?: number;
	/*单价：采购价*/
	stockPrice?: number;
	/*盘点金额*/
	money?: number;
}

export declare interface AT_MaterialCheckModel {
	/*盘点类型

1 = 实物盘点

2 = 损溢盘点*/
	checkType: AT_MaterialCheckType;
	/*盘点人：企业编码+员工主编码*/
	barCode: string;
	/*盘点人：企业编码+员工主编码*/
	barName: string;
	/*盘点人部门*/
	depCode: string;
	/*说明*/
	note: string;
	/*明细*/
	materialCheckDetailsList?: AT_MaterialCheckDetailsModel[];
}

export declare interface AT_MaterialCheckPageModel {
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
	/*制单人*/
	addUser?: string;
	/*盘点人*/
	name?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	amount?: number;
	/*批号*/
	batchNo?: string;
	/*原库存数量*/
	stockAmount?: number;
	/*单价：采购价*/
	stockPrice?: number;
	/*盘点金额*/
	money: number;
}

export declare interface AT_MaterialCheckPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialCheckPageModel[];
	item2: number;
}

export declare interface AT_MaterialCheckQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*制单人*/
	addUser?: AT_QueryString;
}

export enum AT_MaterialCheckType {
	实物盘点 = 1,
	损溢盘点 = 2,
}

export declare interface AT_MaterialCheckViewModel {
	/*盘点类型

1 = 实物盘点

2 = 损溢盘点*/
	checkType: AT_MaterialCheckType;
	/*盘点人：企业编码+员工主编码*/
	barCode: string;
	/*盘点人：企业编码+员工主编码*/
	barName: string;
	/*盘点人部门*/
	depCode: string;
	/*说明*/
	note: string;
	/*明细*/
	materialCheckDetailsList?: AT_MaterialCheckDetailsModel[];
	/*盘点编码*/
	materialCheckCode?: string;
	/*盘点人*/
	name?: string;
	/*盘点人部门*/
	dep?: string;
	/*明细*/
	materialCheckDetailsViewList?: AT_MaterialCheckDetailsViewModel[];
}

export declare interface AT_MaterialGrantDetailsModel {
	/*物资编码*/
	materialCode: string;
	/*数量*/
	amount: number;
}

export declare interface AT_MaterialGrantDetailsViewModel {
	/*物资编码*/
	materialCode: string;
	/*数量*/
	amount: number;
	/*物资类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*内部价*/
	insidePrice?: number;
	/*金额（数量*内部价）*/
	money?: number;
}

export declare interface AT_MaterialGrantModel {
	/*物资申领单号*/
	materialApplyCode: string;
	/*邮费*/
	postage: number;
	/*说明*/
	note?: string;
	/*发放明细*/
	materialGrantDetailsList?: AT_MaterialGrantDetailsModel[];
}

export declare interface AT_MaterialGrantPageModel {
	/*发放明细Id*/
	materialGrantDetailsId: number;
	/*发放单号*/
	materialGrantCode?: string;
	/*物资申领单号*/
	materialApplyCode?: string;
	/*申领人*/
	name?: string;
	/*部门*/
	dep?: string;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*退回状态：未退回，部分退回，已退回

0 = 未退回

1 = 部分退回

2 = 已退回*/
	state?: AT_ReturnState;
	/*退回状态：未退回，部分退回，已退回

0 = 未退回

1 = 部分退回

2 = 已退回*/
	readonly stateText?: AT_ReturnState;
	/*制单时间*/
	addTime?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount?: number;
	/*已退数量*/
	returnAmount?: number;
	/*可退数量*/
	returnableAmount: number;
	/*内部价*/
	insidePrice?: number;
	/*发放金额（数量*内部价）*/
	money?: number;
	/*已退金额（（数量-已退数量）*内部价）*/
	returnMoney?: number;
	/*付款状态

0 = 待回款

1 = 部分回款

2 = 全部回款*/
	backState?: AT_BackState;
	/*付款状态

0 = 待回款

1 = 部分回款

2 = 全部回款*/
	readonly backStateText?: AT_BackState;
	/*付款编码*/
	backCode?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*业务核算部门*/
	bamsDepName?: string;
}

export declare interface AT_MaterialGrantPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialGrantPageModel[];
	item2: number;
}

export declare interface AT_MaterialGrantQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*物资申领单号*/
	materialApplyCode?: AT_QueryString;
	/*发放单号*/
	materialGrantCode?: AT_QueryString;
	/*申领人*/
	name?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_MaterialGrantSelfPageModel {
	/*用途*/
	purposeName?: string;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	applyType?: AT_MaterialApplyType;
	/*发放单号*/
	materialGrantCode?: string;
	/*物资申领单号*/
	materialApplyCode?: string;
	/*申领人*/
	name?: string;
	/*部门*/
	dep?: string;
	/*数量*/
	amount?: number;
	/*已退数量*/
	returnAmount?: number;
	/*内部价*/
	insidePrice?: number;
	/*市场参考价*/
	marketPrice: number;
	/*发放金额（数量*内部价）*/
	money?: number;
	/*回款状态

0 = 待回款

1 = 部分回款

2 = 全部回款*/
	backState: AT_BackState;
	/*回款编码：3096*/
	backCode?: string;
	/*回款状态

0 = 待回款

1 = 部分回款

2 = 全部回款*/
	readonly backStateText: AT_BackState;
	/*物资类型*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
}

export declare interface AT_MaterialGrantSelfPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialGrantSelfPageModel[];
	item2: number;
}

export declare interface AT_MaterialGrantSelfQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申领人*/
	name?: AT_QueryString;
	/*部门*/
	dep?: AT_QueryString;
	/*用途*/
	materialPurposeId?: AT_QueryList;
	/*发放单号*/
	materialGrantCode?: AT_QueryString;
	/*付款编码：3096*/
	backCode?: AT_QueryString;
	backState?: AT_QueryList;
	materialTypeId?: AT_QueryList;
	/*单价*/
	insidePrice?: AT_QueryDecimal;
	/*物资申领单号*/
	materialApplyCode?: AT_QueryString;
	/*物资名称*/
	materialName?: AT_QueryString;
}

export declare interface AT_MaterialGrantViewModel {
	/*物资申领单号*/
	materialApplyCode: string;
	/*邮费*/
	postage: number;
	/*说明*/
	note?: string;
	/*发放明细*/
	materialGrantDetailsList?: AT_MaterialGrantDetailsModel[];
	/*发放单号*/
	materialGrantCode?: string;
	/*申领人*/
	name?: string;
	/*申领人部门*/
	dep?: string;
	/*提货方式：自提，邮寄

1 = 自提

2 = 邮寄*/
	extractMode: AT_ExtractMode;
	/*物资用途*/
	materialPurposeName?: string;
	/*收货人*/
	consignee?: string;
	/*手机号码*/
	mobile?: string;
	/*所在地区*/
	locationText?: string;
	/*详细地址*/
	address?: string;
	/*申领说明*/
	applyNote?: string;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	applyType?: AT_MaterialApplyType;
	/*申领类型：自购，公用

1 = 自购_需付费

2 = 公用

3 = 集团

4 = 餐厅

5 = 有序

6 = 平台

7 = 丰恺思

8 = 柏齐鹤*/
	readonly applyTypeText?: AT_MaterialApplyType;
	/*申领明细*/
	materialApplyDetailsViewList?: AT_MaterialApplyDetailsViewModel[];
	/*发放明细*/
	materialGrantDetailsViewList?: AT_MaterialGrantDetailsViewModel[];
}

export declare interface AT_MaterialMatchContrastModel {
	/*From企业编码：匹配企业编码*/
	fromFirmCode?: string;
	/*From企业：匹配企业*/
	fromFirmName?: string;
	/*From物资编码：匹配物资编码*/
	fromMaterialCode?: string;
	/*匹配物资名称*/
	fromMaterialName?: string;
	/*匹配物资规格*/
	fromStandard?: string;
	/*匹配物资包装*/
	fromPackage?: string;
	/*匹配物资单位*/
	fromUnit?: string;
	/*匹配物资生产企业*/
	fromManufacturer?: string;
	/*To企业编码：被匹配企业编码*/
	toFirmCode?: string;
	/*To企业：被匹配企业*/
	toFirmName?: string;
	/*To物资编码：被匹配物资编码*/
	toMaterialCode?: string;
	/*被匹配物资物资名称*/
	toMaterialName?: string;
	/*被匹配物资规格*/
	toStandard?: string;
	/*被匹配物资包装*/
	toPackage?: string;
	/*被匹配物资单位*/
	toUnit?: string;
	/*被匹配物资生产企业*/
	toManufacturer?: string;
}

export declare interface AT_MaterialMatchModel {
	/*被匹配物资编码*/
	toMaterialCode: string;
	/*被匹配企业编码*/
	toFirmCode: string;
}

export declare interface AT_MaterialMatchViewModel {
	/*被匹配企业编码*/
	toFirmCode?: string;
	/*被匹配企业名称*/
	toFirmName?: string;
	/*被匹配物资编码*/
	toMaterialCode?: string;
	/*被匹配物资物资名称*/
	toMaterialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*末次调拨价格*/
	lastPrice?: number;
	/*末次调拨日期*/
	lastDate?: string;
}

export declare interface AT_MaterialModel {
	/*Id(新增不用管)*/
	id: number;
	/*物资类型Id*/
	materialTypeId: number;
	/*物资名称*/
	materialName: string;
	/*规格*/
	standard: string;
	/*包装*/
	package: string;
	/*单位*/
	unit: string;
	/*生产企业*/
	manufacturer: string;
	/*物资属性 特供 自有品牌 定制

1 = 特供

2 = 自有品牌

3 = 定制*/
	materialAttribute: AT_MaterialAttributeType;
	/*物资条形码*/
	materialBarCode?: string;
	/*市场参考价*/
	marketPrice: number;
	/*采购价*/
	purchasePrice: number;
	/*内部价*/
	insidePrice: number;
	/*结算价*/
	settlementPrice: number;
	/*是否共享  共享 不共享*/
	isShare: number;
	/*是否控制批号 是 否*/
	isBatch: number;
	/*供应商编码*/
	suppCodes?: string[];
	/*物资图样*/
	materialAttachmentList?: AT_MaterialAttachmentModel[];
	/*共享物资对码*/
	materialMatchList?: AT_MaterialMatchModel[];
}

export declare interface AT_MaterialNeedDetailsModel {
	/*指定品种：否，是*/
	isSpecific: number;
	/*物资编码*/
	materialCode?: string;
	/*需求数量*/
	amount: number;
	/*物资说明*/
	needNote?: string;
}

export declare interface AT_MaterialNeedDetailsViewModel {
	/*指定品种：否，是*/
	isSpecific: number;
	/*物资编码*/
	materialCode?: string;
	/*需求数量*/
	amount: number;
	/*物资说明*/
	needNote?: string;
	/*物资类型*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*采购价*/
	purchasePrice?: number;
	/*市场参考价*/
	marketPrice?: number;
}

export declare interface AT_MaterialNeedModel {
	/*申请人：企业编码+员工主编码*/
	barCode: string;
	/*申请人：企业编码+员工主编码*/
	barName: string;
	/*申请人部门*/
	depCode: string;
	/*最迟入库日期*/
	arrivalDate: string;
	/*说明*/
	note: string;
	/*申请明细*/
	materialNeedDetailsList?: AT_MaterialNeedDetailsModel[];
}

export declare interface AT_MaterialNeedPageModel {
	/*采购需求Id*/
	id: number;
	/*物资编码*/
	materialCode?: string;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*转单状态

0 = 未转

1 = 部分转单

2 = 已转*/
	state?: AT_MaterialNeedState;
	/*转单状态

0 = 未转

1 = 部分转单

2 = 已转*/
	readonly stateText?: AT_MaterialNeedState;
	/*申请人*/
	name?: string;
	/*申请人部门*/
	dep?: string;
	/*最迟入库日期*/
	arrivalDate?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*需求数量*/
	amount?: number;
	/*待转单数量*/
	treatAmount?: number;
	/*物资说明*/
	needNote?: string;
}

export declare interface AT_MaterialNeedPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialNeedPageModel[];
	item2: number;
}

export declare interface AT_MaterialNeedQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*申请人*/
	name?: AT_QueryString;
	/*申请人部门*/
	dep?: AT_QueryString;
	/*最迟入库日期*/
	arrivalDate?: AT_QueryDateTime;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*物资说明*/
	needNote?: AT_QueryString;
}

export enum AT_MaterialNeedState {
	未转 = 0,
	部分转单 = 1,
	已转 = 2,
}

export declare interface AT_MaterialNeedViewModel {
	/*申请人：企业编码+员工主编码*/
	barCode: string;
	/*申请人：企业编码+员工主编码*/
	barName: string;
	/*申请人部门*/
	depCode: string;
	/*最迟入库日期*/
	arrivalDate: string;
	/*说明*/
	note: string;
	/*申请明细*/
	materialNeedDetailsList?: AT_MaterialNeedDetailsModel[];
	/*采购需求Id*/
	id: number;
	/*申请人*/
	name?: string;
	/*申请人部门*/
	dep?: string;
	/*申请明细*/
	materialNeedDetailsViewList?: AT_MaterialNeedDetailsViewModel[];
}

export declare interface AT_MaterialPageModel {
	/*Id*/
	id: number;
	/*物资编码*/
	materialCode?: string;
	/*物资属性 特供 自有品牌 定制

1 = 特供

2 = 自有品牌

3 = 定制*/
	materialAttribute?: AT_MaterialAttributeType;
	/*物资类型*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*市场参考价*/
	marketPrice?: number;
}

export declare interface AT_MaterialPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialPageModel[];
	item2: number;
}

export enum AT_MaterialPurchaseBusinessType {
	采购入库 = 1,
	礼品赠送 = 2,
}

export declare interface AT_MaterialPurchaseDetailsModel {
	/*物资编码*/
	materialCode: string;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*采购数量*/
	purchaseNumber: number;
	/*采购价*/
	purchasePrice: number;
	/*采购金额*/
	purchaseMoney: number;
	/*开票金额*/
	invoiceMoney: number;
	/*实际付款金额*/
	actualPayMoney: number;
}

export declare interface AT_MaterialPurchaseDetailsViewModel {
	/*物资编码*/
	materialCode: string;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*采购数量*/
	purchaseNumber: number;
	/*采购价*/
	purchasePrice: number;
	/*采购金额*/
	purchaseMoney: number;
	/*开票金额*/
	invoiceMoney: number;
	/*实际付款金额*/
	actualPayMoney: number;
	/*物资类型Id*/
	materialTypeId: number;
	/*物资类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*是否控制批号： 是， 否*/
	isBatch?: number;
	/*市场参考价*/
	marketPrice: number;
}

export declare interface AT_MaterialPurchaseModel {
	/*物资采购需求表ID(需求单转单传Id)*/
	materialNeedId?: number;
	/*业务类型：采购入库， 礼品赠送

1 = 采购入库

2 = 礼品赠送*/
	businessType: AT_MaterialPurchaseBusinessType;
	/*物资供应商编码*/
	materialSupplierCode: string;
	/*入库人*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*入库明细*/
	materialPurchaseDetailsList?: AT_MaterialPurchaseDetailsModel[];
}

export declare interface AT_MaterialPurchasePageModel {
	/*采购明细Id*/
	id: number;
	/*转单状态：未转，部分转单，已转

0 = 未转

1 = 部分转单

2 = 已转*/
	state?: AT_MaterialNeedState;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*物资供应商*/
	materialSupplierName?: string;
	/*制单时间*/
	addTime?: string;
	/*物资类型*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*采购数量*/
	purchaseNumber?: number;
	/*采购价*/
	purchasePrice?: number;
	/*采购金额*/
	purchaseMoney?: number;
	/*开票金额*/
	invoiceMoney?: number;
	/*市场参考价*/
	marketPrice: number;
	/*实际付款金额*/
	actualPayMoney?: number;
	/*入库人*/
	name?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_MaterialPurchasePageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialPurchasePageModel[];
	item2: number;
}

export declare interface AT_MaterialPurchaseQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*入库人*/
	name?: AT_QueryString;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*物资供应商*/
	materialSupplierName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
}

export declare interface AT_MaterialPurchaseViewModel {
	/*物资采购需求表ID(需求单转单传Id)*/
	materialNeedId?: number;
	/*业务类型：采购入库， 礼品赠送

1 = 采购入库

2 = 礼品赠送*/
	businessType: AT_MaterialPurchaseBusinessType;
	/*物资供应商编码*/
	materialSupplierCode: string;
	/*入库人*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*入库明细*/
	materialPurchaseDetailsList?: AT_MaterialPurchaseDetailsModel[];
	/*物资采购单号*/
	materialPurchaseCode?: string;
	/*物资供应商*/
	materialSupplierName?: string;
	/*入库人*/
	name?: string;
	/*部门*/
	depName?: string;
	/*供应商收款信息*/
	proceedsText?: string;
	/*核算部门*/
	bamsDepName?: string;
	/*入库明细*/
	materialPurchaseDetailsViewList?: AT_MaterialPurchaseDetailsViewModel[];
}

export declare interface AT_MaterialPurposeModel {
	id: number;
	/*状态*/
	state: number;
	/*用途名称*/
	purposeName: string;
	/*说明*/
	note: string;
}

export declare interface AT_MaterialPurposeNameModel {
	id: number;
	/*用途名称*/
	purposeName?: string;
}

export declare interface AT_MaterialPurposePageModel {
	/*自增ID*/
	id: number;
	/*状态*/
	state: number;
	/*用途名称*/
	purposeName?: string;
	/*说明*/
	note?: string;
}

export declare interface AT_MaterialPurposePageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialPurposePageModel[];
	item2: number;
}

export declare interface AT_MaterialPurposeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*用途名称*/
	purposeName?: AT_QueryString;
}

export declare interface AT_MaterialQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资类型*/
	materialTypeId?: AT_QueryList;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
}

export declare interface AT_MaterialReturnModel {
	/*发放单号*/
	materialGrantCode: string;
	/*物资申领单号*/
	materialApplyCode: string;
	/*物资发放明细ID*/
	materialGrantDetailsId: number;
	/*数量*/
	amount: number;
	/*说明*/
	note: string;
}

export declare interface AT_MaterialReturnPageModel {
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
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*数量*/
	amount: number;
	/*内部价*/
	insidePrice?: number;
	/*申领人*/
	applyName?: string;
	/*退回人*/
	returnName?: string;
	/*发放单号*/
	materialGrantCode?: string;
	/*退回单号*/
	materialReturnCode?: string;
	/*退回金额=数量*内部价*/
	money: number;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_MaterialReturnPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialReturnPageModel[];
	item2: number;
}

export declare interface AT_MaterialReturnQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*退回人*/
	returnName?: AT_QueryString;
	/*发放单号*/
	materialGrantCode?: AT_QueryString;
	/*退回单号*/
	materialReturnCode?: AT_QueryString;
	/*制单时间*/
	addTime?: AT_QueryDateTime;
}

export declare interface AT_MaterialReturnViewModel {
	/*发放单号*/
	materialGrantCode: string;
	/*物资申领单号*/
	materialApplyCode: string;
	/*物资发放明细ID*/
	materialGrantDetailsId: number;
	/*数量*/
	amount: number;
	/*说明*/
	note: string;
	/*退回单号*/
	materialReturnCode?: string;
	/*流程状态*/
	flowState: number;
	/*申领人*/
	name?: string;
	/*申领人部门*/
	dep?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*内部价*/
	insidePrice?: number;
	/*批号*/
	batchNo?: string;
	/*可退数量*/
	returnableAmount: number;
}

export declare interface AT_MaterialShoppingPageModel {
	/*物资编码*/
	materialCode?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*物资主图地址*/
	path?: string;
	/*市场参考价*/
	marketPrice: number;
	/*内部价*/
	insidePrice?: number;
	/*可用数量*/
	usableAmount?: number;
}

export declare interface AT_MaterialShoppingPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialShoppingPageModel[];
	item2: number;
}

export declare interface AT_MaterialShoppingQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资名称*/
	materialName?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
}

export declare interface AT_MaterialSimpleModel {
	/*物资编码*/
	materialCode?: string;
	/*物资名称*/
	materialName?: string;
	/*类型名称*/
	typeName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*是否控制批号： 是， 否*/
	isBatch?: number;
	/*市场参考价*/
	marketPrice?: number;
	/*可用数量*/
	usableAmount?: number;
	/*采购价*/
	purchasePrice?: number;
	/*内部价*/
	insidePrice?: number;
	/*结算价*/
	settlementPrice?: number;
}

export declare interface AT_MaterialStockBatchNoModel {
	/*库存Id*/
	id: number;
	/*批号*/
	batchNo?: string;
	/*效期*/
	expiryDate?: string;
	/*库存数量*/
	stockAmount?: number;
	/*库存价格（采购价）*/
	stockPrice?: number;
}

export enum AT_MaterialStockBusinessType {
	采购入库 = 1,
	采购退货 = 2,
	领用出库 = 3,
	领用退货 = 4,
	调拨出库 = 5,
	调拨入库 = 6,
	调拨退回出库 = 7,
	调拨退回入库 = 8,
	盘点入库 = 9,
	盘点出库 = 10,
}

export declare interface AT_MaterialStockInOutPageModel {
	/*业务类型

1 = 采购入库

2 = 采购退货

3 = 领用出库

4 = 领用退货

5 = 调拨出库

6 = 调拨入库

7 = 调拨退回出库

8 = 调拨退回入库

9 = 盘点入库

10 = 盘点出库*/
	businessType?: AT_MaterialStockBusinessType;
	/*业务类型

1 = 采购入库

2 = 采购退货

3 = 领用出库

4 = 领用退货

5 = 调拨出库

6 = 调拨入库

7 = 调拨退回出库

8 = 调拨退回入库

9 = 盘点入库

10 = 盘点出库*/
	readonly businessTypeText?: AT_MaterialStockBusinessType;
	/*制单单号：单据编号*/
	fromCode?: string;
	/*流程Id*/
	flowId?: number;
	/*添加时间(日期)*/
	addTime?: string;
	/*物资编码*/
	materialCode?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*批号*/
	batchNo?: string;
	/*数量*/
	amount?: number;
	/*单价*/
	price?: number;
	/*库存金额*/
	money?: number;
	/*操作人*/
	name?: string;
}

export declare interface AT_MaterialStockInOutPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialStockInOutPageModel[];
	item2: number;
}

export declare interface AT_MaterialStockInOutQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*业务类型*/
	businessType?: AT_QueryList;
	/*物资类型*/
	materialTypeId?: AT_QueryList;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*操作人*/
	name?: AT_QueryString;
	/*添加时间(日期)*/
	addTime?: AT_QueryDateTime;
	/*制单单号：单据编号*/
	fromCode?: AT_QueryString;
	/*批号*/
	batchNo?: AT_QueryString;
}

export declare interface AT_MaterialStockPageModel {
	/*物资编码*/
	materialCode?: string;
	/*类型名称*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*库存总数量*/
	sumStockAmount?: number;
}

export declare interface AT_MaterialStockPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialStockPageModel[];
	item2: number;
}

export declare interface AT_MaterialStockQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*物资类型*/
	materialTypeId?: AT_QueryList;
	/*物资名称*/
	materialName?: AT_QueryString;
	/*规格*/
	standard?: AT_QueryString;
	/*生产企业*/
	manufacturer?: AT_QueryString;
	/*库存总数量*/
	sumStockAmount?: AT_QueryInt;
}

export declare interface AT_MaterialSupplierModel {
	/*Id(新增不用管)*/
	id: number;
	/*供应商名称*/
	materialSupplierName: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*联系人名称*/
	contactName: string;
	/*联系人电话*/
	contactPhone: string;
	/*联系人地址*/
	contactAddress: string;
	/*开户行*/
	openBank: string;
	/*开户名*/
	openName: string;
	/*银行卡号*/
	openCard: string;
	/*可供物资编码*/
	materialCodes?: string[];
}

export declare interface AT_MaterialSupplierPageModel {
	/*Id*/
	id: number;
	/*供应商名称*/
	materialSupplierName?: string;
	/*联系人名称*/
	contactName?: string;
	/*联系人电话*/
	contactPhone?: string;
	/*联系人地址*/
	contactAddress?: string;
	/*开户行*/
	openBank?: string;
	/*开户名*/
	openName?: string;
	/*银行卡号*/
	openCard?: string;
}

export declare interface AT_MaterialSupplierPageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialSupplierPageModel[];
	item2: number;
}

export declare interface AT_MaterialSupplierQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*供应商名称*/
	materialSupplierName?: AT_QueryString;
	/*联系人名称*/
	contactName?: AT_QueryString;
}

export declare interface AT_MaterialSupplierSimpleModel {
	/*供应商编码*/
	materialSupplierCode?: string;
	/*供应商名称*/
	materialSupplierName?: string;
	/*联系人名称*/
	contactName?: string;
	/*联系人电话*/
	contactPhone?: string;
	/*联系地址*/
	contactAddress?: string;
	/*收款信息*/
	proceedsText?: string;
}

export declare interface AT_MaterialSupplierSupplyViewModel {
	/*物资编码*/
	materialCode?: string;
	/*物资类型*/
	typeName?: string;
	/*物资名称*/
	materialName?: string;
	/*规格*/
	standard?: string;
	/*包装*/
	package?: string;
	/*单位*/
	unit?: string;
	/*生产企业*/
	manufacturer?: string;
	/*末次采购价*/
	lastPrice?: number;
	/*末次采购日期*/
	lastDate?: string;
	/*供应商编码*/
	materialSupplierCode?: string;
	/*供应商名称*/
	materialSupplierName?: string;
	/*联系人名称*/
	contactName?: string;
	/*联系人电话*/
	contactPhone?: string;
	/*联系人地址*/
	contactAddress?: string;
}

export declare interface AT_MaterialSupplierViewModel {
	/*Id(新增不用管)*/
	id: number;
	/*供应商名称*/
	materialSupplierName: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*联系人名称*/
	contactName: string;
	/*联系人电话*/
	contactPhone: string;
	/*联系人地址*/
	contactAddress: string;
	/*开户行*/
	openBank: string;
	/*开户名*/
	openName: string;
	/*银行卡号*/
	openCard: string;
	/*可供物资编码*/
	materialCodes?: string[];
	/*供应商编码*/
	materialSupplierCode?: string;
	/*可供物资详情集合*/
	materialSuppRelationViewList?: AT_MaterialSupplierSupplyViewModel[];
}

export declare interface AT_MaterialTypeModel {
	/*Id(新增不用管)*/
	id: number;
	/*状态*/
	state: number;
	/*类型名称*/
	typeName: string;
	/*说明*/
	note: string;
}

export declare interface AT_MaterialTypeNameModel {
	/*Id*/
	id: number;
	/*类型名称*/
	typeName?: string;
}

export declare interface AT_MaterialTypePageModel {
	/*Id*/
	id: number;
	/*状态*/
	state: number;
	/*类型名称*/
	typeName?: string;
	/*说明*/
	note?: string;
}

export declare interface AT_MaterialTypePageModelIEnumerableInt32Tuple {
	item1?: AT_MaterialTypePageModel[];
	item2: number;
}

export declare interface AT_MaterialTypeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*类型名称*/
	typeName?: AT_QueryString;
}

export declare interface AT_MaterialViewModel {
	/*Id(新增不用管)*/
	id: number;
	/*物资类型Id*/
	materialTypeId: number;
	/*物资名称*/
	materialName: string;
	/*规格*/
	standard: string;
	/*包装*/
	package: string;
	/*单位*/
	unit: string;
	/*生产企业*/
	manufacturer: string;
	/*物资属性 特供 自有品牌 定制

1 = 特供

2 = 自有品牌

3 = 定制*/
	materialAttribute: AT_MaterialAttributeType;
	/*物资条形码*/
	materialBarCode?: string;
	/*市场参考价*/
	marketPrice: number;
	/*采购价*/
	purchasePrice: number;
	/*内部价*/
	insidePrice: number;
	/*结算价*/
	settlementPrice: number;
	/*是否共享  共享 不共享*/
	isShare: number;
	/*是否控制批号 是 否*/
	isBatch: number;
	/*供应商编码*/
	suppCodes?: string[];
	/*物资图样*/
	materialAttachmentList?: AT_MaterialAttachmentModel[];
	/*共享物资对码*/
	materialMatchList?: AT_MaterialMatchModel[];
	/*物资编码*/
	materialCode?: string;
	/*物资类型*/
	typeName?: string;
	/*供应商详情集合*/
	materialSupplierSupplyViewList?: AT_MaterialSupplierSupplyViewModel[];
	/*共享物资对码详情*/
	materialMatchViewModelList?: AT_MaterialMatchViewModel[];
}

export declare interface AT_MeetAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_MeetCancelModel {
	/*流程id*/
	flowId: number;
	/*取消原因*/
	cancelNote?: string;
}

export declare interface AT_MeetFollowModel {
	/*会议主表ID*/
	meetId: number;
	/*跟进时间*/
	followDate: string;
	/*跟进人*/
	followUser: string;
	/*跟进说明*/
	followNote: string;
}

export declare interface AT_MeetFollowViewModel {
	/*会议主表ID*/
	meetId: number;
	/*跟进时间*/
	followDate: string;
	/*跟进人*/
	followUser: string;
	/*跟进说明*/
	followNote: string;
	/*跟进人*/
	followUserName?: string;
}

export enum AT_MeetForm {
	内部会议 = 1,
	外部会议 = 2,
}

export declare interface AT_MeetModel {
	/*申请人：员工编码*/
	applyUser: string;
	/*申请人：员工编码*/
	applyUserName: string;
	/*部门编码*/
	depCode: string;
	/*会议形式：内部会议，外部会议

1 = 内部会议

2 = 外部会议*/
	meetForm: AT_MeetForm;
	/*会议类型：例会(周会，月会)，协调会，学习会，培训会，座谈会

1 = 例会周会月会

2 = 协调会

3 = 讨论会

4 = 学习会

5 = 培训会

6 = 座谈会*/
	meetType: AT_MeetType;
	/*会议主题*/
	title: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*会议地点*/
	meetRoomId: number;
	/*会议内容*/
	content: string;
	/*通知弹窗Key（会议详情PopupKey）*/
	popupKey?: string;
	/*会议参加人员*/
	meetUserList?: string[];
	/*会议附件*/
	meetAttachmentList?: AT_MeetAttachmentModel[];
}

export declare interface AT_MeetPageModel {
	/*会议id*/
	id: number;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*会议形式：内部会议，外部会议

1 = 内部会议

2 = 外部会议*/
	meetForm: AT_MeetForm;
	/*会议类型：例会(周会，月会)，协调会，学习会，培训会，座谈会

1 = 例会周会月会

2 = 协调会

3 = 讨论会

4 = 学习会

5 = 培训会

6 = 座谈会*/
	meetType: AT_MeetType;
	/*开始时间：必须大于当前时间，精细到分钟*/
	startTime?: string;
	/*结束时间：必须大于开始时间*/
	endTime?: string;
	/*会议地点*/
	meetRoom?: string;
	/*会议主题*/
	title?: string;
	/*参会人数*/
	numberOfPeople: number;
	/*会议状态：已取消（后期会扩展）

0 = 已取消*/
	state?: AT_MeetState;
	/*会议状态：已取消（后期会扩展）

0 = 已取消*/
	readonly stateText?: AT_MeetState;
	/*取消原因*/
	cancelNote?: string;
}

export declare interface AT_MeetPageModelIEnumerableInt32Tuple {
	item1?: AT_MeetPageModel[];
	item2: number;
}

export declare interface AT_MeetQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*会议形式*/
	meetForm?: AT_QueryList;
	/*会议类型*/
	meetType?: AT_QueryList;
	/*会议主题*/
	title?: AT_QueryString;
	/*会议室*/
	meetRoomId?: AT_QueryList;
}

export declare interface AT_MeetRoomModel {
	/*Id*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*会议室名称*/
	roomName: string;
	/*说明*/
	roomNote: string;
	/*颜色配置

1 = _3b7bff

2 = _6f65e8

3 = _0db2b2

4 = _de9f4c

5 = _efcc07

6 = _fc744b*/
	setColor?: AT_MeetRoomSetColorType;
	/*共享公司*/
	firmCodes?: string[];
}

export declare interface AT_MeetRoomPageModel {
	/*Id*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*会议室名称*/
	roomName?: string;
	/*说明*/
	roomNote?: string;
	/*所属企业*/
	firmName?: string;
	/*是否创建企业*/
	isCreate?: number;
}

export declare interface AT_MeetRoomPageModelIEnumerableInt32Tuple {
	item1?: AT_MeetRoomPageModel[];
	item2: number;
}

export declare interface AT_MeetRoomQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*会议室名称*/
	roomName?: AT_QueryString;
}

export enum AT_MeetRoomSetColorType {
	_3b7bff = 1,
	_6f65e8 = 2,
	_0db2b2 = 3,
	_de9f4c = 4,
	_efcc07 = 5,
	_fc744b = 6,
}

export declare interface AT_MeetScheduleViewModel {
	/*时间文本*/
	time: string;
	/*数据*/
	dataList?: AT_MeetSimpleModel[];
	/*是否和自己相关(0否，1是)*/
	isSelf: number;
}

export declare interface AT_MeetSimpleModel {
	/*会议id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*申请人编码*/
	applyUser?: string;
	/*申请人*/
	name?: string;
	/*会议主题*/
	title?: string;
	/*开始时间*/
	startTime?: string;
	/*结束时间*/
	endTime?: string;
	/*会议地点*/
	meetRoomId?: number;
	/*会议地点*/
	meetRoomText?: string;
	/*会议室颜色配置

1 = _3b7bff

2 = _6f65e8

3 = _0db2b2

4 = _de9f4c

5 = _efcc07

6 = _fc744b*/
	setColor?: AT_MeetRoomSetColorType;
	/*会议室颜色配置

1 = _3b7bff

2 = _6f65e8

3 = _0db2b2

4 = _de9f4c

5 = _efcc07

6 = _fc744b*/
	readonly setColorText?: AT_MeetRoomSetColorType;
	/*是否和自己相关(0否，1是)*/
	isSelf: number;
}

export enum AT_MeetState {
	已取消 = 0,
}

export enum AT_MeetType {
	例会周会月会 = 1,
	协调会 = 2,
	讨论会 = 3,
	学习会 = 4,
	培训会 = 5,
	座谈会 = 6,
}

export declare interface AT_MeetViewModel {
	/*申请人：员工编码*/
	applyUser: string;
	/*部门编码*/
	depCode: string;
	/*会议形式：内部会议，外部会议

1 = 内部会议

2 = 外部会议*/
	meetForm: AT_MeetForm;
	/*会议类型：例会(周会，月会)，协调会，学习会，培训会，座谈会

1 = 例会周会月会

2 = 协调会

3 = 讨论会

4 = 学习会

5 = 培训会

6 = 座谈会*/
	meetType: AT_MeetType;
	/*会议主题*/
	title: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*会议地点*/
	meetRoomId: number;
	/*会议内容*/
	content: string;
	/*通知弹窗Key（会议详情PopupKey）*/
	popupKey?: string;
	/*会议参加人员*/
	meetUserList?: string[];
	/*会议附件*/
	meetAttachmentList?: AT_MeetAttachmentModel[];
	/*Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*申请人*/
	applyUserName?: string;
	/*部门编码*/
	dep?: string;
	/*会议状态：已取消（后期会扩展）

0 = 已取消*/
	state?: AT_MeetState;
	/*取消原因*/
	cancelNote?: string;
	/*参加会议人员*/
	staffInfoList?: AT_StaffInfo[];
	/*会议跟进*/
	meetFollowList?: AT_MeetFollowViewModel[];
}

export declare interface AT_MeetViewRoomModel {
	/*Id*/
	id: number;
	/*状态：启用，停用*/
	state: number;
	/*会议室名称*/
	roomName: string;
	/*说明*/
	roomNote: string;
	/*颜色配置

1 = _3b7bff

2 = _6f65e8

3 = _0db2b2

4 = _de9f4c

5 = _efcc07

6 = _fc744b*/
	setColor?: AT_MeetRoomSetColorType;
	/*共享公司*/
	firmCodes?: string[];
	/*共享公司数据*/
	firmSimpleList?: AT_FirmSimpleModel[];
	/*颜色配置

1 = _3b7bff

2 = _6f65e8

3 = _0db2b2

4 = _de9f4c

5 = _efcc07

6 = _fc744b*/
	readonly setColorText?: AT_MeetRoomSetColorType;
}

export declare interface AT_MergeInterviewPlanModel {
	/*面试主表Id*/
	interviewId: number;
	/*面试安排*/
	interviewPlanModels?: AT_InterviewPlanModel[];
	/*面试附件*/
	interviewPlanAttachmentModels?: AT_InterviewPlanAttachmentModel[];
}

export declare interface AT_MergeSalaryPaymentMethodModel {
	/*薪资档案Id*/
	id: number;
	/*员工薪资明细*/
	salaryStaffDetails?: AT_SalaryStaffDetailsModel[];
	/*薪资发放方式*/
	salaryPaymentMethods?: AT_SalaryPaymentMethodModel[];
}

export declare interface AT_MergeUpdateAssetManageModel {
	/*固资管理编辑模型*/
	updateAssetManage?: AT_UpdateAssetManageModel;
	/*修改记录集合*/
	assetRecords?: AT_AssetRecordModel[];
}

export declare interface AT_NewEmployeeModel {
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	name?: string;
	/*图像*/
	profilePicture?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
}

export declare interface AT_NewEmployeePageModel {
	/*员工子编码：企业编码+员工编码*/
	barCode?: string;
	/*档案状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*档案状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*姓名*/
	name?: string;
	/*部门*/
	depCode?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postCode?: string;
	/*岗位*/
	postName?: string;
	/*开始实习日期*/
	fieldworkDate?: string;
	/*实习期限：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	internshipTerm?: AT_PeriodType;
	/*实习期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly internshipTermText?: AT_PeriodType;
	/*开始试用日期*/
	tryoutDate?: string;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm?: AT_PeriodType;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly tryoutTermText?: AT_PeriodType;
	/*转正日期*/
	officialDate?: string;
	/*带教责任人*/
	teachDutr?: string;
	/*人事责任人*/
	hrDutr?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
}

export declare interface AT_NewEmployeePageModelIEnumerableInt32Tuple {
	item1?: AT_NewEmployeePageModel[];
	item2: number;
}

export declare interface AT_NewEmployeeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*档案状态*/
	workStatus?: AT_QueryList;
	/*岗位*/
	postName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*员工姓名*/
	name?: AT_QueryString;
	/*带教责任人*/
	teachDutr?: AT_QueryString;
	/*人事责任人*/
	hrDutr?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
}

export declare interface AT_NewsletterModel {
	/*所属公司*/
	owner: string;
	/*使用人：员工编码*/
	user: string;
	/*短号*/
	cornet?: string;
	/*联系方式*/
	contactWay?: string;
	/*状态：停用，启用

0 = 停用

1 = 启用*/
	state: AT_NewsletterState;
	/*开卡日期*/
	openDate: string;
	/*开户人*/
	openUser: string;
	/*座机号码*/
	landline?: string;
	/*用途*/
	purpose?: string;
}

export declare interface AT_NewsletterPageModel {
	/*公用号id*/
	id: number;
	/*状态：停用，启用

0 = 停用

1 = 启用*/
	state: AT_NewsletterState;
	/*状态：停用，启用

0 = 停用

1 = 启用*/
	readonly stateText: AT_NewsletterState;
	/*所有人*/
	owner?: string;
	/*使用人*/
	userName?: string;
	/*短号*/
	cornet?: string;
	/*联系方式*/
	contactWay?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_NewsletterPageModelIEnumerableInt32Tuple {
	item1?: AT_NewsletterPageModel[];
	item2: number;
}

export declare interface AT_NewsletterQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*所有人*/
	owner?: AT_QueryString;
	/*使用人*/
	userName?: AT_QueryString;
	/*短号*/
	cornet?: AT_QueryString;
	/*状态：停用，启用*/
	state?: AT_QueryList;
}

export enum AT_NewsletterState {
	停用 = 0,
	启用 = 1,
}

export declare interface AT_NewsletterViewModel {
	/*所属公司*/
	owner: string;
	/*使用人：员工编码*/
	user: string;
	/*短号*/
	cornet?: string;
	/*联系方式*/
	contactWay?: string;
	/*状态：停用，启用

0 = 停用

1 = 启用*/
	state: AT_NewsletterState;
	/*开卡日期*/
	openDate: string;
	/*开户人*/
	openUser: string;
	/*座机号码*/
	landline?: string;
	/*用途*/
	purpose?: string;
	/*Id*/
	id: number;
	/*使用人*/
	userName?: string;
}

export declare interface AT_NoticeAttachmentModel {
	/*通知编码*/
	noticeCode?: string;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_NoticeContentModel {
	/*通知编码*/
	noticeCode?: string;
	/*内容*/
	content?: string;
}

export declare interface AT_NoticePageModel {
	/*自增ID*/
	id: number;
	/*通知编码 3080*/
	noticeCode?: string;
	/*状态 未发布 已发布*/
	state: number;
	/*申请人编码*/
	barCode?: string;
	/*申请人*/
	staffName?: string;
	/*发布人*/
	releaseUserName?: string;
	/*发布部门*/
	publishCorpCode?: string;
	/*发布部门文本*/
	publishCorpDepName?: string;
	/*发布时间*/
	releaseDate?: string;
	/*标题*/
	title?: string;
	/*是否可编辑 否 是*/
	isEdit?: number;
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
}

export declare interface AT_NoticePageModelIEnumerableInt32Tuple {
	item1?: AT_NoticePageModel[];
	item2: number;
}

export declare interface AT_NoticeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*状态*/
	state?: AT_QueryList;
	/*发布人*/
	releaseUserName?: AT_QueryString;
	/*发布部门*/
	publishCorpDepName?: AT_QueryString;
	/*发布时间*/
	publishTime?: AT_QueryDateTime;
	/*起始日期*/
	startTime?: AT_QueryDateTime;
	/*结束日期*/
	endTime?: AT_QueryDateTime;
	/*标题*/
	title?: AT_QueryString;
}

export declare interface AT_NoticesModel {
	/*通知编码 3080*/
	noticeCode?: string;
	/*状态 未发布 已发布*/
	state: number;
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*发布部门*/
	publishCorpCode: string;
	/*发布时间*/
	releaseDate?: string;
	/*标题*/
	title: string;
	/*是否可编辑 否 是*/
	isEdit?: number;
	/*弹出key(后台权限查找标识)*/
	popupKey?: string;
	/*通知人员*/
	noticeUsers?: string[];
	/*已读通知人员*/
	isReadNoticeUsers?: string[];
	/*通知附件*/
	noticeAttachments?: AT_NoticeAttachmentModel[];
	/*通知内容*/
	noticeContent: AT_NoticeContentModel;
}

export declare interface AT_NoticesViewModel {
	/*通知编码 3080*/
	noticeCode?: string;
	/*状态 未发布 已发布*/
	state: number;
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*发布部门*/
	publishCorpCode: string;
	/*发布时间*/
	releaseDate?: string;
	/*标题*/
	title: string;
	/*是否可编辑 否 是*/
	isEdit?: number;
	/*弹出key(后台权限查找标识)*/
	popupKey?: string;
	/*通知人员*/
	noticeUsers?: string[];
	/*已读通知人员*/
	isReadNoticeUsers?: string[];
	/*通知附件*/
	noticeAttachments?: AT_NoticeAttachmentModel[];
	/*通知内容*/
	noticeContent: AT_NoticeContentModel;
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*员工文本*/
	barName?: string;
	/*部门文本*/
	depName?: string;
	/*岗位文本*/
	postName?: string;
	/*发布部门文本*/
	publishCorpName?: string;
	/*通知人员文本*/
	noticeUserNames?: string[];
	/*已读通知人员文本*/
	isReadNoticeUserNames?: string[];
}

export enum AT_NowState {
	在校生 = 1,
	应届生 = 2,
	非应届生 = 3,
}

export declare interface AT_OilCardModel {
	/*副卡编码*/
	cardCode?: string;
	/*车牌号*/
	licensePlateNumber?: string;
	/*起点*/
	startPoint?: string;
	/*终点*/
	endPoint?: string;
	/*里程(公里数)*/
	mileage?: number;
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

export declare interface AT_OperatorModel {
	/*姓名*/
	name?: string;
	/*员工编码*/
	barCode?: string;
	/*员工编码*/
	employeeCode?: string;
	/*默认部门*/
	depCode?: string;
	/*默认岗位*/
	postCode?: string;
	/*个人头像；文件系统地址*/
	profilePicture?: string;
	/*开票公司*/
	invoiceCompany?: string;
	/*税号*/
	taxNumber?: string;
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
	/*路由id*/
	routeId: number;
	/*权限项值之和*/
	permission?: number;
	/*已拥有的权限详情*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
}

export enum AT_PageType {
	页面 = 1,
	弹窗 = 2,
}

export enum AT_PayBackMoneyFromType {
	美德基金申请 = 1,
	费用报销 = 2,
	薪资核算 = 3,
	退租 = 4,
	车辆保养申请 = 5,
	福利 = 6,
	储蓄卡充值 = 7,
	社保缴纳 = 8,
	发放预留薪资 = 9,
	房租申请 = 10,
	物资采购 = 11,
	车辆维修 = 12,
	车辆保险 = 13,
	副卡自充值申请 = 14,
	物资申领_自购 = 15,
	借支 = 16,
	借支回款 = 17,
	借支利息回款 = 18,
	车辆出租_押金 = 19,
	车辆出租_租金 = 20,
	车辆出租_其他 = 21,
	车辆归还 = 22,
	奖惩 = 23,
	资产采购 = 24,
	薪资_实发 = 25,
	薪资_个税 = 26,
	薪资_公积金 = 27,
	薪资_社保 = 28,
	物资申领_退回 = 29,
}

export declare interface AT_PayBackRecordModel {
	/*付回款编码：付款编码/回款编码*/
	moneyCode?: string;
	/*金额*/
	money?: number;
	/*账户信息*/
	accountInfo?: string;
	/*付回款操作时间*/
	handleTime?: string;
	/*回款银行*/
	backBank?: string;
	/*回款账号*/
	backCard?: string;
	/*回款说明*/
	backNote?: string;
	/*还款类型(借支)：本金，利息*/
	repaymentType?: string;
	/*财务系统付回款码*/
	fmsMoneyCode?: string;
}

export enum AT_PayMethodEnum {
	对私付款 = 1,
	对公付款 = 2,
}

export enum AT_PayState {
	待付款 = 0,
	部分付款 = 1,
	已付款 = 2,
}

export enum AT_PaybackPeriod {
	单次 = 1,
	月付 = 2,
	季付 = 3,
	半年付 = 4,
	年付 = 5,
}

export enum AT_PaymentMethodEnum {
	固定基数 = 1,
	实际薪资 = 2,
	固定金额 = 3,
}

export enum AT_PeriodType {
	一个月 = 1,
	二个月 = 2,
	三个月 = 3,
	六个月 = 4,
	九个月 = 5,
	十二个月 = 6,
}

export declare interface AT_PersonalIncomeTaxModel {
	/*自增ID*/
	id: number;
	/*等级*/
	level: number;
	/*全年应纳税所得额 以文字形式*/
	summary: string;
	/*区间上限*/
	sectionUpper: number;
	/*区间下限*/
	sectionLower: number;
	/*税率*/
	taxRate: number;
	/*速算扣除数*/
	fastCalcu: number;
}

export declare interface AT_PersonalIncomeTaxPageModel {
	/*自增ID*/
	id: number;
	/*等级*/
	level: number;
	/*全年应纳税所得额 以文字形式*/
	summary?: string;
	/*区间上限*/
	sectionUpper?: number;
	/*区间下限*/
	sectionLower?: number;
	/*税率*/
	taxRate: number;
	/*速算扣除数*/
	fastCalcu: number;
}

export declare interface AT_PersonalIncomeTaxPageModelIEnumerableInt32Tuple {
	item1?: AT_PersonalIncomeTaxPageModel[];
	item2: number;
}

export declare interface AT_PersonalIncomeTaxQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
}

export declare interface AT_PersonalModel {
	/*收货地址*/
	personalReceipts?: AT_PersonalReceiptModel[];
}

export declare interface AT_PersonalReceiptModel {
	/*收货人*/
	consignee: string;
	/*手机号码*/
	mobile: string;
	/*省级*/
	provinceId: number;
	/*市级*/
	cityId: number;
	/*区县*/
	areaId: number;
	/*详细地址*/
	address: string;
	/*备注*/
	note: string;
	/*默认地址：否，是*/
	isDefault: number;
}

export declare interface AT_PersonalReceiptPageModel {
	/*ID*/
	id: number;
	/*收货人*/
	consignee?: string;
	/*手机号码*/
	mobile?: string;
	/*所在地区*/
	locationText?: string;
	/*详细地址*/
	address?: string;
	/*备注*/
	note?: string;
	/*默认地址（0否1是）*/
	isDefault?: string;
}

export declare interface AT_PersonalReceiptPageModelIEnumerableInt32Tuple {
	item1?: AT_PersonalReceiptPageModel[];
	item2: number;
}

export declare interface AT_PersonalReceiptQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
}

export declare interface AT_PersonalReceiptSimpleModel {
	/*Id*/
	id: number;
	/*收货人*/
	consignee?: string;
	/*手机号码*/
	mobile?: string;
	/*所在地区*/
	locationText: string;
	/*详细地址*/
	address?: string;
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
	isFlow?: number;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
	/*弹窗路由id*/
	routeId: number;
	/*权限项值之和 (为空 则控件无权限配置)*/
	permission?: number;
	/*已拥有的权限详情 (为空 则控件无权限配置)*/
	authorizationInfos?: AT_AuthorizationInfoModel[];
}

export declare interface AT_PopupReadModel {
	/*员工编码*/
	barCode?: string;
	/*通知主表Ids*/
	popupIds?: number[];
}

export enum AT_PopupType {
	简历分享 = 1,
	确定入职 = 2,
	转人事档案 = 3,
	会议管理 = 4,
	通知管理 = 5,
	规章制度 = 6,
	生日通知 = 7,
	合同到期提醒 = 8,
	会议取消 = 9,
	车辆租赁 = 10,
	资产采购 = 11,
}

export declare interface AT_PopupViewModel {
	/*通知主表Id*/
	id: number;
	/*通知类型

1 = 简历分享

2 = 确定入职

3 = 转人事档案

4 = 会议管理

5 = 通知管理

6 = 规章制度

7 = 生日通知

8 = 合同到期提醒

9 = 会议取消

10 = 车辆租赁

11 = 资产采购*/
	type: AT_PopupType;
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
	/*简历类型的数据状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	resumeStatus: AT_ResumeStatus;
}

export declare interface AT_PositionModel {
	/*所属部门编码*/
	depCode: string;
	/*岗位名称*/
	postName: string;
	/*岗位描述*/
	notes?: string;
}

export declare interface AT_PositionPageModel {
	id: number;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
	/*部门*/
	depName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*岗位描述*/
	notes?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime: string;
	/*更新人*/
	updateUser?: string;
	/*更新时间*/
	updTime?: string;
}

export declare interface AT_PositionPageModelIEnumerableInt32Tuple {
	item1?: AT_PositionPageModel[];
	item2: number;
}

export declare interface AT_PositionQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*创建时间*/
	addTime?: AT_QueryDateTime;
	/*创建人*/
	addUser?: AT_QueryString;
	/*岗位名称*/
	postName?: AT_QueryString;
	/*岗位编码*/
	postCode?: AT_QueryString;
	/*部门名称*/
	depName?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*更新人*/
	updateUser?: AT_QueryString;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_PositionViewModel {
	/*所属部门编码*/
	depCode: string;
	/*岗位名称*/
	postName: string;
	/*岗位描述*/
	notes?: string;
	/*岗位编码*/
	postCode?: string;
	/*所属部门*/
	depName?: string;
	/*岗位id*/
	id: number;
	/*流程Id*/
	flowId?: number;
}

export declare interface AT_ProvidentFundModel {
	/*参保人：企业编码+员工主编码*/
	barCode?: string;
	/*部门*/
	depCode?: string;
	/*参保状态：未参保，已参保，已停保

0 = 已停保

1 = 已参保*/
	state?: AT_ProvidentFundStateEnum;
	/*参保公司*/
	csoCode?: string;
	/*参保项目：公积金*/
	project?: number;
	/*缴纳方式：固定基数、固定金额

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod?: AT_PaymentMethodEnum;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人比例*/
	personalScale?: number;
	/*个人缴纳*/
	personalPayment?: number;
	/*公司缴纳*/
	companyPayment?: number;
	/*公司比例*/
	companyScale?: number;
	/*参保日期*/
	startDate?: string;
}

export declare interface AT_ProvidentFundPageModel {
	/*自增ID*/
	id: number;
	/*参保人：企业编码+员工主编码*/
	barCode?: string;
	/*参保人*/
	barName?: string;
	/*部门*/
	depCode?: string;
	/*部门*/
	depName?: string;
	/*参保状态：未参保，已参保，已停保

0 = 已停保

1 = 已参保*/
	state?: AT_ProvidentFundStateEnum;
	/*参保状态

0 = 已停保

1 = 已参保*/
	readonly stateText?: AT_ProvidentFundStateEnum;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*参保公司*/
	csoCode?: string;
	/*参保公司*/
	csoName?: string;
	/*项目名称*/
	subjectName?: string;
	/*缴纳方式：固定基数、固定金额

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod?: AT_PaymentMethodEnum;
	/*缴纳方式

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	readonly paymentMethodText?: AT_PaymentMethodEnum;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人比例*/
	personalScale?: number;
	/*个人缴纳*/
	personalPayment?: number;
	/*公司缴纳*/
	companyPayment?: number;
	/*公司比例*/
	companyScale?: number;
	/*参保日期*/
	startDate?: string;
	/*公积金合计*/
	sumProvidentFund?: number;
	/*更新时间*/
	updTime?: string;
	/*更新人*/
	updUserName?: string;
}

export declare interface AT_ProvidentFundPageModelIEnumerableInt32Tuple {
	item1?: AT_ProvidentFundPageModel[];
	item2: number;
}

export declare interface AT_ProvidentFundQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*参保状态：未参保，已参保，已停保*/
	state?: AT_QueryList;
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*参保公司*/
	csoName?: AT_QueryString;
	/*查询金额*/
	queryMoney?: AT_QueryDecimal;
}

export enum AT_ProvidentFundStateEnum {
	已停保 = 0,
	已参保 = 1,
}

export declare interface AT_ProvidentFundViewModel {
	/*参保人：企业编码+员工主编码*/
	barCode?: string;
	/*部门*/
	depCode?: string;
	/*参保状态：未参保，已参保，已停保

0 = 已停保

1 = 已参保*/
	state?: AT_ProvidentFundStateEnum;
	/*参保公司*/
	csoCode?: string;
	/*参保项目：公积金*/
	project?: number;
	/*缴纳方式：固定基数、固定金额

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod?: AT_PaymentMethodEnum;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人比例*/
	personalScale?: number;
	/*个人缴纳*/
	personalPayment?: number;
	/*公司缴纳*/
	companyPayment?: number;
	/*公司比例*/
	companyScale?: number;
	/*参保日期*/
	startDate?: string;
	/*自增ID*/
	id: number;
	/*参保公司名称*/
	csoName?: string;
	/*姓名*/
	barName?: string;
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

export enum AT_ReasonForApplyingType {
	人才储备 = 1,
	离职补缺 = 2,
	调岗补缺 = 3,
	新增岗位 = 4,
}

export enum AT_RechargeType {
	标准_每月一次 = 1,
	灵活 = 2,
	自充值 = 3,
}

export declare interface AT_RecruitCommissionerModel {
	/*Id(编辑传)*/
	id: number;
	/*姓名*/
	barCode: string;
	/*说明*/
	notes?: string;
}

export declare interface AT_RecruitCommissionerPageModel {
	/*Id*/
	id: number;
	/*姓名*/
	barName?: string;
	/*说明*/
	notes?: string;
}

export declare interface AT_RecruitCommissionerPageModelIEnumerableInt32Tuple {
	item1?: AT_RecruitCommissionerPageModel[];
	item2: number;
}

export declare interface AT_RecruitCommissionerQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	barName?: AT_QueryString;
}

export declare interface AT_RecruitCommissionerViewModel {
	/*Id(编辑传)*/
	id: number;
	/*姓名*/
	barCode: string;
	/*说明*/
	notes?: string;
	/*姓名*/
	barName?: string;
}

export declare interface AT_RecruitModel {
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*招聘人数*/
	recruitNumber: number;
	/*初试面试官(员工编码)*/
	recruitInitialList?: string[];
	/*复试面试官(员工编码)*/
	recruitRepeatList?: string[];
	/*招聘岗位要求表*/
	recruitPostClaimModels?: AT_RecruitPostClaimModel[];
	/*时限要求*/
	deadline: string;
	/*申请类型：人才储备、离职补缺、调岗补缺、新增岗位

1 = 人才储备

2 = 离职补缺

3 = 调岗补缺

4 = 新增岗位*/
	applyType: AT_ReasonForApplyingType;
	/*是否需总经理审核：否，是*/
	isBossAudit?: number;
	/*申请原因*/
	applyReason: string;
	/*年龄要求*/
	ageRequire: string;
	/*性别要求(1男,2女,3不限)

1 = 男

2 = 女

3 = 不限*/
	sexRequire: AT_SexRequireType;
	/*学历要求

0 = 不限

1 = 大专以上

2 = 本科以上

3 = 硕士以上

4 = 博士以上*/
	educationRequire: AT_EducationRequireType;
	/*专业要求*/
	specialtyRequire: string;
	/*工作经验

1 = 不限

2 = 一到三年

3 = 三到五年

4 = 五到十年

5 = 十年以上

6 = 应届毕业生

7 = 在校实习生*/
	workExperience: AT_WorkExperienceType;
	/*薪酬限制*/
	recruitAstrict: string;
	/*优先条件*/
	priorityCondition: string;
	/*岗位职责*/
	postDuty: string;
	/*其他要求*/
	restsRequire?: string;
}

export declare interface AT_RecruitPostClaimModel {
	/*招聘需求ID*/
	recruitId: number;
	/*岗位要求*/
	postRequire?: string;
}

export enum AT_RecruitStatus {
	未开始 = 1,
	实施中 = 2,
	已完成 = 3,
	已停止 = 4,
}

export declare interface AT_RecruitViewModel {
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*招聘人数*/
	recruitNumber: number;
	/*初试面试官(员工编码)*/
	recruitInitialList?: string[];
	/*复试面试官(员工编码)*/
	recruitRepeatList?: string[];
	/*招聘岗位要求表*/
	recruitPostClaimModels?: AT_RecruitPostClaimModel[];
	/*时限要求*/
	deadline: string;
	/*申请类型：人才储备、离职补缺、调岗补缺、新增岗位

1 = 人才储备

2 = 离职补缺

3 = 调岗补缺

4 = 新增岗位*/
	applyType: AT_ReasonForApplyingType;
	/*是否需总经理审核：否，是*/
	isBossAudit?: number;
	/*申请原因*/
	applyReason: string;
	/*年龄要求*/
	ageRequire: string;
	/*性别要求(1男,2女,3不限)

1 = 男

2 = 女

3 = 不限*/
	sexRequire: AT_SexRequireType;
	/*学历要求

0 = 不限

1 = 大专以上

2 = 本科以上

3 = 硕士以上

4 = 博士以上*/
	educationRequire: AT_EducationRequireType;
	/*专业要求*/
	specialtyRequire: string;
	/*工作经验

1 = 不限

2 = 一到三年

3 = 三到五年

4 = 五到十年

5 = 十年以上

6 = 应届毕业生

7 = 在校实习生*/
	workExperience: AT_WorkExperienceType;
	/*薪酬限制*/
	recruitAstrict: string;
	/*优先条件*/
	priorityCondition: string;
	/*岗位职责*/
	postDuty: string;
	/*其他要求*/
	restsRequire?: string;
	/*id*/
	id: number;
	/*流程id*/
	flowId: number;
	/*部门*/
	depName?: string;
	/*岗位编码*/
	postName?: string;
	/*初试面试官*/
	recruitInitialNames?: string;
	/*复试面试官*/
	recruitRepeatNames?: string;
}

export declare interface AT_RecruitmentPageModel {
	/*自增id*/
	id: number;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*状态（0待实施，1实施中，2实施完成）

1 = 未开始

2 = 实施中

3 = 已完成

4 = 已停止*/
	status: AT_RecruitStatus;
	/*状态（0待实施，1实施中，2实施完成）

1 = 未开始

2 = 实施中

3 = 已完成

4 = 已停止*/
	readonly statusText: AT_RecruitStatus;
	/*部门名称*/
	depName?: string;
	/*招聘岗位名称*/
	postName?: string;
	/*招聘人数*/
	recruitNumber: number;
	/*已招聘人数*/
	alreadyNumber: number;
	/*性别要求(1男,2女,3不限)

1 = 男

2 = 女

3 = 不限*/
	sexRequire: AT_SexRequireType;
	/*年龄要求*/
	ageRequire?: string;
	/*薪酬限制*/
	recruitAstrict?: string;
	/*学历要求

0 = 不限

1 = 大专以上

2 = 本科以上

3 = 硕士以上

4 = 博士以上*/
	educationRequire: AT_EducationRequireType;
	/*专业要求*/
	specialtyRequire?: string;
	/*优先条件*/
	priorityCondition?: string;
	/*其他要求*/
	restsRequire?: string;
	/*工作经验

1 = 不限

2 = 一到三年

3 = 三到五年

4 = 五到十年

5 = 十年以上

6 = 应届毕业生

7 = 在校实习生*/
	workExperience: AT_WorkExperienceType;
	/*申请类型

1 = 人才储备

2 = 离职补缺

3 = 调岗补缺

4 = 新增岗位*/
	applyType: AT_ReasonForApplyingType;
	/*申请原因补充说明*/
	applyReason?: string;
	/*初试面试官*/
	recruitInitialNames?: string;
	/*复试面试官*/
	recruitRepeatNames?: string;
	/*招聘专员*/
	commissionerName?: string;
	/*时限要求*/
	deadline: string;
	/*启动招聘时间*/
	startDate?: string;
	/*招聘完成时间*/
	endDate?: string;
	/*申请人*/
	addUser?: string;
	/*申请时间*/
	addTime?: string;
	/*停止理由*/
	stopNotes?: string;
}

export declare interface AT_RecruitmentPageModelIEnumerableInt32Tuple {
	item1?: AT_RecruitmentPageModel[];
	item2: number;
}

export declare interface AT_RecruitmentQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*部门名称*/
	depName?: AT_QueryString;
	/*招聘岗位*/
	postName?: AT_QueryString;
	/*状态（1待实施，2实施中，3实施完成）*/
	status?: AT_QueryList;
	/*申请类型*/
	applyType?: AT_QueryList;
	/*时限要求*/
	deadline?: AT_QueryDateTime;
	/*启动招聘时间*/
	startDate?: AT_QueryDateTime;
	/*招聘完成时间*/
	endDate?: AT_QueryDateTime;
	/*申请时间*/
	addTime?: AT_QueryDateTime;
	/*招聘专员*/
	commissioner?: AT_QueryList;
}

export declare interface AT_RegulationAttachmentModel {
	/*制度编码*/
	regulationCode?: string;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_RegulationContentModel {
	/*制度编码*/
	regulationCode?: string;
	/*内容*/
	content?: string;
}

export declare interface AT_RegulationModel {
	/*制度编码 3080*/
	regulationCode?: string;
	/*状态 未发布 已发布*/
	state: number;
	/*是否公开 否 是*/
	isPublic?: number;
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*发布部门*/
	publishCorpCode?: string;
	/*发布日期*/
	publishDate?: string;
	/*标题*/
	title?: string;
	/*起始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*制度附件*/
	regulationAttachments?: AT_RegulationAttachmentModel[];
	/*制度人员*/
	regulationUsers?: AT_RegulationUserModel[];
	/*已读制度人员*/
	isReadRegulationUsers?: string[];
	/*制度内容*/
	regulationContent?: AT_RegulationContentModel;
}

export declare interface AT_RegulationPageModel {
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*状态 未发布 已发布*/
	state: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*员工名称*/
	staffName?: string;
	/*发布部门*/
	publishCorpDepName?: string;
	/*发布日期*/
	releaseDate?: string;
	/*发布人*/
	releaseUserName?: string;
	/*起始日期*/
	startDate: string;
	/*截止日期*/
	endDate: string;
	/*标题*/
	title?: string;
}

export declare interface AT_RegulationPageModelIEnumerableInt32Tuple {
	item1?: AT_RegulationPageModel[];
	item2: number;
}

export declare interface AT_RegulationQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*状态*/
	state?: AT_QueryList;
	/*发布人*/
	releaseUserName?: AT_QueryString;
	/*发布日期*/
	publishDate?: AT_QueryDateTime;
	/*起始日期*/
	startDate?: AT_QueryDateTime;
	/*结束日期*/
	endDate?: AT_QueryDateTime;
	/*制度标题*/
	title?: AT_QueryString;
	/*发布部门*/
	publishCorpDepName?: AT_QueryString;
}

export declare interface AT_RegulationSimpleModel {
	/*流程ID*/
	flowId: number;
	/*是否公开 否 是*/
	isPublic?: number;
	/*标题*/
	title?: string;
	/*发布日期*/
	releaseDate?: string;
}

export declare interface AT_RegulationUserModel {
	/*制度编码*/
	regulationCode?: string;
	/*员工编码*/
	barCode?: string;
}

export declare interface AT_RegulationViewModel {
	/*制度编码 3080*/
	regulationCode?: string;
	/*状态 未发布 已发布*/
	state: number;
	/*是否公开 否 是*/
	isPublic?: number;
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*发布部门*/
	publishCorpCode?: string;
	/*发布日期*/
	publishDate?: string;
	/*标题*/
	title?: string;
	/*起始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*制度附件*/
	regulationAttachments?: AT_RegulationAttachmentModel[];
	/*制度人员*/
	regulationUsers?: AT_RegulationUserModel[];
	/*已读制度人员*/
	isReadRegulationUsers?: string[];
	/*制度内容*/
	regulationContent?: AT_RegulationContentModel;
	/*自增ID*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*员工编码文本*/
	barName?: string;
	/*部门编码文本*/
	depName?: string;
	/*岗位编码文本*/
	postName?: string;
	/*发布部门文本*/
	publishCorpName?: string;
	/*制度人员文本*/
	regulationUserNames?: string[];
	/*已读制度人员文本*/
	isReadRegulationUserNames?: string[];
	/*发布日期*/
	releaseDate?: string;
}

export enum AT_RelationType {
	父亲 = 1,
	母亲 = 2,
	配偶 = 3,
	子女 = 4,
	其他 = 5,
}

export declare interface AT_RentApplyDetailsModel {
	/*类型：房租，押金，其他费用

1 = 房租

2 = 押金

3 = 其他费用*/
	type: AT_RentDetailsType;
	/*费用(房租单价)（租金），押金，其他费用)*/
	cost?: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*交费月数*/
	months?: number;
	/*申请金额*/
	applyMoney?: number;
	/*发票金额*/
	billMoney: number;
}

export declare interface AT_RentApplyModel {
	/*租房主表ID*/
	rentId: number;
	/*申请人：员工编码*/
	applyUser: string;
	/*申请人：员工编码*/
	applyUserName: string;
	/*申请人部门*/
	depCode: string;
	/*缴费日期*/
	payDate: string;
	/*收款信息*/
	receive: string;
	/*申请说明*/
	applyNote: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*房租明细*/
	rentApplyDetailsList?: AT_RentApplyDetailsModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
}

export declare interface AT_RentApplyRecordByUserModel {
	/*业务日期*/
	businessTime?: string;
	/*用途

1 = 实习生宿舍

2 = 办事处

3 = 办公地

4 = CSO

5 = 其他*/
	purpose: AT_RentPurpose;
	/*类别 1房租 2退租

1 = 在租

2 = 退租*/
	type: AT_RentState;
	/*交费方式

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*交费方式

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	readonly methodText: AT_RentMethod;
	/*费用金额*/
	cost?: number;
	/*交（退）费金额*/
	money?: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*经办人*/
	operator?: string;
}

export declare interface AT_RentApplyRecordPageModel {
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*业务日期*/
	businessTime?: string;
	/*申请人*/
	applyUser?: string;
	/*部门*/
	dep?: string;
	/*用途

1 = 实习生宿舍

2 = 办事处

3 = 办公地

4 = CSO

5 = 其他*/
	purpose: AT_RentPurpose;
	/*类别 1房租 2退租*/
	type: number;
	/*交费方式

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*费用金额*/
	cost?: number;
	/*交（退）费金额*/
	money?: number;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*经办人*/
	operator?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_RentApplyRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_RentApplyRecordPageModel[];
	item2: number;
}

export declare interface AT_RentApplyRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*业务日期*/
	businessTime?: AT_QueryDateTime;
	/*申请人*/
	applyUser?: AT_QueryString;
	/*部门*/
	dep?: AT_QueryString;
	/*用途*/
	purpose?: AT_QueryList;
	/*类别 1房租 2退租*/
	type?: AT_QueryList;
	/*经办人*/
	operator?: AT_QueryString;
	/*付款状态*/
	payState?: AT_QueryList;
}

export declare interface AT_RentApplyViewModel {
	/*租房主表ID*/
	rentId: number;
	/*申请人：员工编码*/
	applyUser: string;
	/*申请人部门*/
	depCode: string;
	/*缴费日期*/
	payDate: string;
	/*收款信息*/
	receive: string;
	/*申请说明*/
	applyNote: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*房租明细*/
	rentApplyDetailsList?: AT_RentApplyDetailsModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
	/*Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*申请人*/
	applyUserName?: string;
	/*申请人部门*/
	dep?: string;
	/*押金：单位（元）*/
	deposit: number;
	/*租金：单位（元/月）*/
	amount: number;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	readonly methodText: AT_RentMethod;
	/*其他费用*/
	otherCost?: number;
	/*押金状态

1 = 未付

2 = 已付

3 = 已退*/
	depositState?: AT_DepositState;
	/*核算部门*/
	bamsDepName?: string;
}

export declare interface AT_RentAttachmentModel {
	/*类型：租房主表，房东身份证，房产证，银行卡，租赁协议

1 = 其他

2 = 房租申请

3 = 退租申请*/
	fromType: AT_RentAttachmentType;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export enum AT_RentAttachmentType {
	其他 = 1,
	房租申请 = 2,
	退租申请 = 3,
}

export enum AT_RentDetailsType {
	房租 = 1,
	押金 = 2,
	其他费用 = 3,
}

export declare interface AT_RentHandleModel {
	/*Id*/
	id: number;
	/*租房主表ID*/
	rentId: number;
	/*经办人编码*/
	operator?: string;
	/*经办人名称*/
	operatorName?: string;
}

export enum AT_RentHouseType {
	一室 = 1,
	两室 = 2,
	三室 = 3,
	四室 = 4,
	五室及以上 = 5,
}

export enum AT_RentMethod {
	月交 = 1,
	季度交 = 2,
	半年交 = 3,
	年交 = 4,
}

export declare interface AT_RentModel {
	/*用途

1 = 实习生宿舍

2 = 办事处

3 = 办公地

4 = CSO

5 = 其他*/
	purpose: AT_RentPurpose;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*详细地址*/
	address: string;
	/*户型

1 = 一室

2 = 两室

3 = 三室

4 = 四室

5 = 五室及以上*/
	houseType: AT_RentHouseType;
	/*面积：单位（平方）*/
	acreage: number;
	/*押金：单位（元）*/
	deposit: number;
	/*租金：单位（元/月）*/
	amount: number;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*其他费用*/
	otherCost: number;
	/*其他费用说明*/
	otherNote?: string;
	/*房东*/
	landlord: string;
	/*联系方式*/
	contact: string;
	/*开户名*/
	openBank: string;
	/*开户行*/
	openName: string;
	/*收款账号*/
	openCard: string;
	/*经办人*/
	rentHandleList?: AT_RentHandleModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
}

export declare interface AT_RentOutDetailsModel {
	/*类型：房租，押金，其他费用

1 = 房租

2 = 押金

3 = 其他费用*/
	type: AT_RentDetailsType;
	/*退租金额*/
	applyMoney: number;
	/*发票金额*/
	billMoney: number;
}

export declare interface AT_RentOutModel {
	/*租房主表ID*/
	rentId: number;
	/*申请人：员工编码*/
	applyUser: string;
	/*申请人：员工编码*/
	applyUserName: string;
	/*申请人部门*/
	depCode: string;
	/*退租日期*/
	outDate: string;
	/*申请说明*/
	outNote: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*退租明细*/
	rentOutDetailsList?: AT_RentOutDetailsModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
}

export declare interface AT_RentOutViewModel {
	/*租房主表ID*/
	rentId: number;
	/*申请人：员工编码*/
	applyUser: string;
	/*申请人部门*/
	depCode: string;
	/*退租日期*/
	outDate: string;
	/*申请说明*/
	outNote: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*退租明细*/
	rentOutDetailsList?: AT_RentOutDetailsModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
	/*Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*申请人*/
	applyUserName?: string;
	/*申请人部门*/
	dep?: string;
	/*押金：单位（元）*/
	deposit: number;
	/*租金：单位（元/月）*/
	amount: number;
	/*核算部门：红阳部门编码*/
	bamsDepName?: string;
}

export declare interface AT_RentPageModel {
	/*Id*/
	id: number;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*租房状态

1 = 在租

2 = 退租*/
	state: AT_RentState;
	/*租房状态

1 = 在租

2 = 退租*/
	readonly stateText: AT_RentState;
	/*用途

1 = 实习生宿舍

2 = 办事处

3 = 办公地

4 = CSO

5 = 其他*/
	purpose: AT_RentPurpose;
	/*地区*/
	area?: string;
	/*详细地址*/
	address?: string;
	/*户型

1 = 一室

2 = 两室

3 = 三室

4 = 四室

5 = 五室及以上*/
	houseType: AT_RentHouseType;
	/*面积：单位（平方）*/
	acreage?: number;
	/*租金：单位（元/月）*/
	amount?: number;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	readonly methodText: AT_RentMethod;
	/*押金：单位（元）*/
	deposit?: number;
	/*押金状态

1 = 未付

2 = 已付

3 = 已退*/
	depositState: AT_DepositState;
	/*押金状态

1 = 未付

2 = 已付

3 = 已退*/
	readonly depositStateText: AT_DepositState;
	/*其他费用*/
	otherCost?: number;
	/*经办人*/
	operator?: string;
	/*新增人*/
	addUser?: string;
	/*房东*/
	landlord?: string;
	/*联系方式*/
	contact?: string;
	/*开户名*/
	openBank?: string;
	/*开户行*/
	openName?: string;
	/*收款账号*/
	openCard?: string;
	/*最新租赁开始日期*/
	rentDate?: string;
	/*最新退租日期*/
	rentOutDate?: string;
	/*最新缴费到期日*/
	rentPayDate?: string;
}

export declare interface AT_RentPageModelIEnumerableInt32Tuple {
	item1?: AT_RentPageModel[];
	item2: number;
}

export enum AT_RentPurpose {
	实习生宿舍 = 1,
	办事处 = 2,
	办公地 = 3,
	CSO = 4,
	其他 = 5,
}

export declare interface AT_RentQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*用途*/
	purpose?: AT_QueryList;
	/*地区*/
	area?: AT_QueryGiven;
	/*详细地址*/
	address?: AT_QueryString;
	/*户型*/
	houseType?: AT_QueryList;
	/*面积：单位（平方）*/
	acreage?: AT_QueryDecimal;
	/*租房状态*/
	state?: AT_QueryList;
	/*经办人*/
	operator?: AT_QueryString;
	/*押金状态*/
	depositState?: AT_QueryList;
}

export enum AT_RentState {
	在租 = 1,
	退租 = 2,
}

export declare interface AT_RentViewModel {
	/*用途

1 = 实习生宿舍

2 = 办事处

3 = 办公地

4 = CSO

5 = 其他*/
	purpose: AT_RentPurpose;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*详细地址*/
	address: string;
	/*户型

1 = 一室

2 = 两室

3 = 三室

4 = 四室

5 = 五室及以上*/
	houseType: AT_RentHouseType;
	/*面积：单位（平方）*/
	acreage: number;
	/*押金：单位（元）*/
	deposit: number;
	/*租金：单位（元/月）*/
	amount: number;
	/*缴费周期

1 = 月交

2 = 季度交

3 = 半年交

4 = 年交*/
	method: AT_RentMethod;
	/*其他费用*/
	otherCost: number;
	/*其他费用说明*/
	otherNote?: string;
	/*房东*/
	landlord: string;
	/*联系方式*/
	contact: string;
	/*开户名*/
	openBank: string;
	/*开户行*/
	openName: string;
	/*收款账号*/
	openCard: string;
	/*经办人*/
	rentHandleList?: AT_RentHandleModel[];
	/*附件*/
	rentAttachmentList?: AT_RentAttachmentModel[];
	/*租房Id*/
	id: number;
}

export enum AT_RepaymentMode {
	按还款日期 = 1,
	按月平均还款 = 2,
}

export declare interface AT_RepaymentRecordModel {
	/*借支单号*/
	borrowCode: string;
	/*还款类型  本金 利息

1 = 本金

2 = 利息*/
	repaymentType: AT_RepaymentType;
	/*还款金额*/
	repaymentMoney: number;
	/*摘要*/
	summary: string;
}

export declare interface AT_RepaymentRecordViewModel {
	/*借支单号*/
	borrowCode: string;
	/*还款类型  本金 利息

1 = 本金

2 = 利息*/
	repaymentType: AT_RepaymentType;
	/*还款金额*/
	repaymentMoney: number;
	/*摘要*/
	summary: string;
	/*添加人*/
	addUser?: string;
	/*添加时间*/
	addTime?: string;
}

export enum AT_RepaymentType {
	本金 = 1,
	利息 = 2,
}

export declare interface AT_ResignComplexModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*员工出入证：未发，否，是，丢失*/
	passCard: number;
	/*车辆通行证：未发，否，是，丢失*/
	transitCard: number;
	/*办公系统：未分，否，是*/
	officeSystem: number;
	/*固定资产【车辆、PC电脑、笔记本电脑、电话、手机号码、存储社保、钥匙等】：否，是，丢失，损坏*/
	fixedAssets: number;
	/*应赔偿*/
	payFor: number;
	/*离职面谈是否完成：否，是*/
	exitInterview: number;
	/*本月有效工作日共计*/
	weekday: number;
	/*薪资结算截止至*/
	salaryEndDate: string;
	/*社保关系转出：否，是，未转入*/
	socialOut: number;
	/*社保截止日期*/
	socialEndDate: string;
	/*医保关系转出：否，是，未转入*/
	medicalOut: number;
	/*医保截止日期*/
	medicalEndDate: string;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
}

export declare interface AT_ResignComplexViewModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*员工出入证：未发，否，是，丢失*/
	passCard: number;
	/*车辆通行证：未发，否，是，丢失*/
	transitCard: number;
	/*办公系统：未分，否，是*/
	officeSystem: number;
	/*固定资产【车辆、PC电脑、笔记本电脑、电话、手机号码、存储社保、钥匙等】：否，是，丢失，损坏*/
	fixedAssets: number;
	/*应赔偿*/
	payFor: number;
	/*离职面谈是否完成：否，是*/
	exitInterview: number;
	/*本月有效工作日共计*/
	weekday: number;
	/*薪资结算截止至*/
	salaryEndDate: string;
	/*社保关系转出：否，是，未转入*/
	socialOut: number;
	/*社保截止日期*/
	socialEndDate: string;
	/*医保关系转出：否，是，未转入*/
	medicalOut: number;
	/*医保截止日期*/
	medicalEndDate: string;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*员工编码*/
	barCode?: string;
	/*员工姓名*/
	barName?: string;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
}

export declare interface AT_ResignDepModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*已按公司要求进行工作交接：否，是*/
	isHandover: number;
	/*交接人*/
	joinUser: string;
	/*未完成说明*/
	noNote?: string;
	/*公司或部门相关文件/资料：未交，已交*/
	handFile: number;
	/*个人/部门担保欠款统计明细与原则说明：未交，已交*/
	handDebt: number;
	/*任职期间经手的财务单据/凭证/收据等：未交，已交*/
	handBill: number;
	/*未完成的工作以及相关处理意见和情况说明：未交，已交*/
	handJob: number;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
}

export declare interface AT_ResignDepViewModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*已按公司要求进行工作交接：否，是*/
	isHandover: number;
	/*交接人*/
	joinUser: string;
	/*未完成说明*/
	noNote?: string;
	/*公司或部门相关文件/资料：未交，已交*/
	handFile: number;
	/*个人/部门担保欠款统计明细与原则说明：未交，已交*/
	handDebt: number;
	/*任职期间经手的财务单据/凭证/收据等：未交，已交*/
	handBill: number;
	/*未完成的工作以及相关处理意见和情况说明：未交，已交*/
	handJob: number;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*员工编码*/
	barCode?: string;
	/*员工姓名*/
	barName?: string;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
}

export declare interface AT_ResignFinanceModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*因私借款计*/
	privateLoan: number;
	/*因公借款未报销计*/
	publicLoan: number;
	/*其他应扣款*/
	otherItem: string;
	/*其他应扣款合计*/
	otherLoan: number;
	/*个人担保欠款*/
	personalLoan: number;
	/*部门担保欠款*/
	depLoan: number;
	/*流程状态*/
	flowState: number;
}

export declare interface AT_ResignFinanceViewModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*因私借款计*/
	privateLoan: number;
	/*因公借款未报销计*/
	publicLoan: number;
	/*其他应扣款*/
	otherItem: string;
	/*其他应扣款合计*/
	otherLoan: number;
	/*个人担保欠款*/
	personalLoan: number;
	/*部门担保欠款*/
	depLoan: number;
	/*流程状态*/
	flowState: number;
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*员工编码*/
	barCode?: string;
	/*员工姓名*/
	barName?: string;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
}

export declare interface AT_ResignInfoModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*系统是否已注销：否，是*/
	isCancel: number;
	/*分配资产是否已归还：否，是*/
	isReturn: number;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
}

export declare interface AT_ResignInfoViewModel {
	/*离职主表ID*/
	resignId: number;
	/*离职申请人*/
	applyUserName: string;
	/*系统是否已注销：否，是*/
	isCancel: number;
	/*分配资产是否已归还：否，是*/
	isReturn: number;
	/*流程状态*/
	flowState: number;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
	/*Id*/
	id: number;
	/*流程ID*/
	flowId: number;
	/*员工编码*/
	barCode?: string;
	/*员工姓名*/
	barName?: string;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位编码*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
}

export declare interface AT_ResignModel {
	/*申请人*/
	applyUser: string;
	/*申请人*/
	applyUserName: string;
	/*离职日期*/
	resignDate: string;
	/*离职类型：辞职，辞退，开除，自动离职，合同期满*/
	resignType: number;
	/*离职描述*/
	resignNote?: string;
	/*离职弹窗KEY*/
	popupKey?: string;
}

export declare interface AT_ResignPageModel {
	/*自增ID*/
	id: number;
	/*申请人*/
	applyUser?: string;
	/*申请人名称*/
	applyUserName?: string;
	/*离职日期*/
	resignDate?: string;
	/*离职类型：辞职，辞退，开除，自动离职，合同期满*/
	resignType?: number;
	/*司龄*/
	workYear?: number;
	/*入职时间*/
	inductionDate?: string;
	/*部门Code*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*岗位Code*/
	postCode?: string;
	/*岗位名称*/
	postName?: string;
	/*流程ID*/
	flowId: number;
	/*信息交接流程ID*/
	resignInfoFlowId: number;
	/*部门交接流程ID*/
	resignDepFlowId: number;
	/*财务交接流程ID*/
	resignFinanceFlowId: number;
	/*综合交接流程ID*/
	resignComplexFlowId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*申请时间*/
	addTime?: string;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus?: AT_WorkStatus;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText?: AT_WorkStatus;
}

export declare interface AT_ResignPageModelIEnumerableInt32Tuple {
	item1?: AT_ResignPageModel[];
	item2: number;
}

export declare interface AT_ResignQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*部门Code*/
	depName?: AT_QueryString;
	/*岗位Code*/
	postName?: AT_QueryString;
	/*姓名*/
	applyUserName?: AT_QueryString;
	/*入职时间*/
	inductionDate?: AT_QueryDateTime;
	/*离职时间*/
	resignDate?: AT_QueryDateTime;
}

export declare interface AT_ResignViewModel {
	/*申请人*/
	applyUser: string;
	/*申请人*/
	applyUserName: string;
	/*离职日期*/
	resignDate: string;
	/*离职类型：辞职，辞退，开除，自动离职，合同期满*/
	resignType: number;
	/*离职描述*/
	resignNote?: string;
	/*离职弹窗KEY*/
	popupKey?: string;
	/*自增ID*/
	id: number;
	/*部门文本*/
	depName?: string;
	/*部门编码*/
	depCode?: string;
	/*岗位文本*/
	postName?: string;
	/*入职时间*/
	inductionDate?: string;
	/*交接*/
	handovers?: AT_HandoverModel[];
}

export declare interface AT_ResumeAttachmentModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_ResumeAttachmentSubmitModel {
	/*个人评价*/
	selfEvaluation?: string;
	/*荣誉*/
	honor?: string;
	/*附件*/
	resumeAttachment?: AT_ResumeAttachmentModel[];
}

export declare interface AT_ResumeAttachmentViewModel {
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
	/*Id*/
	id: number;
}

export declare interface AT_ResumeBasicInfoModel {
	/*姓名*/
	name: string;
	/*当前身份：在校生、应届生、非应届生

1 = 在校生

2 = 应届生

3 = 非应届生*/
	nowState: AT_NowState;
	/*照片*/
	picture?: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*出生日期*/
	dateOfBirth?: string;
	/*年龄*/
	age?: number;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*毕业院校*/
	school: string;
	/*专业*/
	specialty: string;
	/*政治面貌*/
	politics?: string;
	/*电话号码*/
	phone: string;
	/*邮箱*/
	email?: string;
	/*婚姻状况

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*职业状态

1 = 在职

2 = 离职

3 = 待业

4 = 其他*/
	jobState: AT_JobState;
	/*当前住居地*/
	residence?: string;
	/*家庭情况*/
	family?: string;
	/*其他*/
	rests?: string;
	/*简历渠道

1 = Boss直聘

2 = 智联招聘

3 = 前程无忧

4 = 猎聘

5 = 外部猎头

6 = 校招

7 = 内部推荐

8 = 高管引入

9 = 其它社交圈*/
	channel?: AT_ResumeChannelEnum;
}

export enum AT_ResumeChannelEnum {
	Boss直聘 = 1,
	智联招聘 = 2,
	前程无忧 = 3,
	猎聘 = 4,
	外部猎头 = 5,
	校招 = 6,
	内部推荐 = 7,
	高管引入 = 8,
	其它社交圈 = 9,
}

export declare interface AT_ResumeCheckModel {
	/*姓名*/
	name?: string;
	/*电话号码*/
	phone?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
}

export declare interface AT_ResumeFeedbackViewModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*是否面试

1 = 需面试

2 = 无需面试*/
	isFit: AT_IsInterviewStatus;
	/*说明描述*/
	description?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*是否明面试*/
	isFitName?: string;
}

export declare interface AT_ResumeHoldModel {
	/*简历ID*/
	resumeIds?: number[];
	/*分享的企业编码*/
	firmCodes?: string[];
}

export declare interface AT_ResumeInteractModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*记录*/
	recordDetails?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
}

export declare interface AT_ResumeModel {
	/*姓名*/
	name?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*出生日期*/
	dateOfBirth?: string;
	/*年龄*/
	age: number;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*政治面貌*/
	politics?: string;
	/*电话号码*/
	phone?: string;
	/*邮箱*/
	email?: string;
	/*婚姻状况

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*职业状态

1 = 在职

2 = 离职

3 = 待业

4 = 其他*/
	jobState?: AT_JobState;
	/*当前住居地*/
	residence?: string;
	/*家庭情况*/
	family?: string;
	/*其他*/
	rests?: string;
	/*简历渠道

1 = Boss直聘

2 = 智联招聘

3 = 前程无忧

4 = 猎聘

5 = 外部猎头

6 = 校招

7 = 内部推荐

8 = 高管引入

9 = 其它社交圈*/
	channel?: AT_ResumeChannelEnum;
	/*意向岗位*/
	applyPosition?: string;
	/*目前薪酬*/
	nowRemuneration?: string;
	/*期望薪酬*/
	expectRemuneration?: string;
	/*意向地点*/
	intentionAddress?: string;
	/*意向度*/
	intentionDegree?: string;
	/*照片*/
	picture?: string;
	/*个人评价*/
	selfEvaluation?: string;
	/*荣誉*/
	honor?: string;
	/*当前身份：在校生、应届生、非应届生*/
	nowState?: number;
	/*分享人集合*/
	resumeShareList?: AT_ResumeShareModel[];
	/*工作经历*/
	resumeWorks?: AT_ResumeWorkViewModel[];
	/*学习经历*/
	resumeStudys?: AT_ResumeStudyViewModel[];
	/*附件*/
	resumeAttachments?: AT_ResumeAttachmentViewModel[];
}

export declare interface AT_ResumePageModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*简历Id*/
	resumeId: number;
	/*状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	status?: AT_ResumeStatus;
	/*状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	readonly statusText?: AT_ResumeStatus;
	/*人才类型

1 = 黑名单

2 = 高潜力人才*/
	filterType?: AT_FilterType;
	/*人才类型

1 = 黑名单

2 = 高潜力人才*/
	readonly filterTypeText?: AT_FilterType;
	/*姓名*/
	name?: string;
	/*性别*/
	sex: number;
	/*年龄*/
	age: number;
	/*在职公司*/
	workUnit?: string;
	/*当前岗位*/
	duty?: string;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*联系方式*/
	phone?: string;
	/*创建人*/
	addUser?: string;
	/*创建时间*/
	addTime: string;
	/*更新人*/
	updateUser?: string;
	/*更新时间*/
	updTime?: string;
}

export declare interface AT_ResumePageModelIEnumerableInt32Tuple {
	item1?: AT_ResumePageModel[];
	item2: number;
}

export declare interface AT_ResumePurposeModel {
	/*意向岗位*/
	applyPosition?: string;
	/*期望薪酬*/
	hopeRemuneration?: string;
	/*意向地点*/
	intentionAddress?: string;
	/*意向度*/
	intentionDegree?: string;
}

export declare interface AT_ResumePurposeViewModel {
	/*意向岗位*/
	applyPosition?: string;
	/*期望薪酬*/
	hopeRemuneration?: string;
	/*意向地点*/
	intentionAddress?: string;
	/*意向度*/
	intentionDegree?: string;
	/*简历求职意向Id*/
	id: number;
	/*企业编码*/
	firmCode?: string;
	/*企业名称(还原用，传入不用管)*/
	firmName?: string;
}

export declare interface AT_ResumeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*毕业院校*/
	school?: AT_QueryString;
	/*在职公司*/
	workUnit?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*当前岗位*/
	duty?: AT_QueryString;
	/*专业*/
	specialty?: AT_QueryString;
	/*状态*/
	status?: AT_QueryList;
	/*人才类型*/
	filterType?: AT_QueryList;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
	/*更新人*/
	updateUser?: AT_QueryString;
}

export declare interface AT_ResumeShareModel {
	/*被分享人(员工编码)*/
	toUser?: string;
	/*被分享人(员工名称)*/
	toUserName?: string;
	/*是否已阅：否，是*/
	isRead?: number;
}

export enum AT_ResumeStatus {
	未开始 = 1,
	已筛选 = 2,
	无需面试 = 3,
	需面试 = 4,
	面试中 = 5,
	面试不通过 = 6,
	面试通过 = 7,
	拒录用 = 8,
	已录用 = 9,
	未入职 = 10,
	待入职 = 11,
	已入职 = 12,
	放弃面试 = 13,
	拒接offer = 14,
}

export declare interface AT_ResumeStudyModel {
	/*Id*/
	id: number;
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*学校*/
	school: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*专业*/
	specialty: string;
}

export declare interface AT_ResumeStudyViewModel {
	/*开始日期*/
	startDate: string;
	/*结束日期*/
	endDate: string;
	/*学校*/
	school: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*专业*/
	specialty: string;
	/*Id*/
	id: number;
}

export declare interface AT_ResumeSynthesizeModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*简历共享状态

1 = 未开始

2 = 已筛选

3 = 无需面试

4 = 需面试

5 = 面试中

6 = 面试不通过

7 = 面试通过

8 = 拒录用

9 = 已录用

10 = 未入职

11 = 待入职

12 = 已入职

13 = 放弃面试

14 = 拒接offer*/
	resumeHoldStatus?: AT_ResumeStatus;
	/*面试Id*/
	interviewId?: number;
	/*录用Id*/
	employId?: number;
	/*录用审批流程Id*/
	flowId?: number;
	/*入职Id*/
	inductionId?: number;
}

export declare interface AT_ResumeTalentNoteModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*人才类型

1 = 黑名单

2 = 高潜力人才*/
	talentType: AT_FilterType;
	/*说明描述*/
	description?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
}

export declare interface AT_ResumeTalentNoteViewModel {
	/*简历共享Id*/
	resumeHoldId: number;
	/*人才类型

1 = 黑名单

2 = 高潜力人才*/
	talentType: AT_FilterType;
	/*说明描述*/
	description?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
	/*人才类型*/
	talentTypeName?: string;
}

export declare interface AT_ResumeViewModel {
	/*姓名*/
	name?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*出生日期*/
	dateOfBirth?: string;
	/*年龄*/
	age: number;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*政治面貌*/
	politics?: string;
	/*电话号码*/
	phone?: string;
	/*邮箱*/
	email?: string;
	/*婚姻状况

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*职业状态

1 = 在职

2 = 离职

3 = 待业

4 = 其他*/
	jobState?: AT_JobState;
	/*当前住居地*/
	residence?: string;
	/*家庭情况*/
	family?: string;
	/*其他*/
	rests?: string;
	/*简历渠道

1 = Boss直聘

2 = 智联招聘

3 = 前程无忧

4 = 猎聘

5 = 外部猎头

6 = 校招

7 = 内部推荐

8 = 高管引入

9 = 其它社交圈*/
	channel?: AT_ResumeChannelEnum;
	/*意向岗位*/
	applyPosition?: string;
	/*目前薪酬*/
	nowRemuneration?: string;
	/*期望薪酬*/
	expectRemuneration?: string;
	/*意向地点*/
	intentionAddress?: string;
	/*意向度*/
	intentionDegree?: string;
	/*照片*/
	picture?: string;
	/*个人评价*/
	selfEvaluation?: string;
	/*荣誉*/
	honor?: string;
	/*当前身份：在校生、应届生、非应届生*/
	nowState?: number;
	/*分享人集合*/
	resumeShareList?: AT_ResumeShareModel[];
	/*工作经历*/
	resumeWorks?: AT_ResumeWorkViewModel[];
	/*学习经历*/
	resumeStudys?: AT_ResumeStudyViewModel[];
	/*附件*/
	resumeAttachments?: AT_ResumeAttachmentViewModel[];
	/*简历共享Id*/
	resumeHoldId: number;
	/*状态*/
	status: number;
	/*籍贯拼接*/
	nativePlaceStr?: string;
	/*创建时间*/
	addTime: string;
	/*更新人*/
	updUserName?: string;
	/*更新时间*/
	updTime: string;
	/*求职意向*/
	resumePurposes?: AT_ResumePurposeViewModel[];
}

export declare interface AT_ResumeWorkModel {
	/*Id*/
	id: number;
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*工作单位*/
	workUnit?: string;
	/*担任职务*/
	duty?: string;
	/*岗位薪资*/
	salary?: string;
	/*工作描述*/
	content?: string;
	/*离职原因*/
	resign?: string;
}

export declare interface AT_ResumeWorkViewModel {
	/*开始日期*/
	startDate?: string;
	/*结束日期*/
	endDate?: string;
	/*工作单位*/
	workUnit?: string;
	/*担任职务*/
	duty?: string;
	/*岗位薪资*/
	salary?: string;
	/*工作描述*/
	content?: string;
	/*离职原因*/
	resign?: string;
	/*Id*/
	id: number;
	/*工作年限*/
	serviceYear?: string;
}

export declare interface AT_RetrunResumeCheckModel {
	/*Id*/
	id: number;
	/*状态*/
	status: number;
}

export declare interface AT_ReturnMessage {
	/*是否成功*/
	isSucceed: boolean;
	/*提示消息*/
	message?: string;
}

export enum AT_ReturnState {
	未退回 = 0,
	部分退回 = 1,
	已退回 = 2,
}

export declare interface AT_RevertBatchUpdateAssetManageModel {
	/*固资管理Id*/
	id: number;
	/*状态：待分配，已分配，已报废，盘亏*/
	state?: number;
	/*是否已贴标：否，是*/
	isLabel?: number;
	/*使用人*/
	useUser?: string;
	/*使用部门*/
	depCode?: string;
	/*资产所属公司*/
	companyName?: string;
	/*发票类型：专票，普票*/
	invoiceType?: number;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
	/*大类*/
	bigName?: string;
	/*小类*/
	smallName?: string;
	/*固资名称*/
	categoryName?: string;
	/*资产编号：固资定义表类别编码+累计数*/
	assetNumber?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*存放地点*/
	savePlace?: string;
	/*购置日期*/
	buyDate?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_RewardDetailsModel {
	/*自增ID*/
	id: number;
	/*奖惩编码*/
	rewardCode?: string;
	/*通用编码：3080*/
	comCode?: string;
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*员工文本*/
	barName?: string;
	/*部门文本*/
	depName?: string;
	/*岗位文本*/
	postName?: string;
	/*奖惩金额*/
	rewardMoney: number;
	/*奖惩说明*/
	note: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*红阳部门名称（还原用，提交不用管）*/
	bamsDepName?: string;
	/*收款信息编码 来源 员工档案银行明细*/
	staffBankCode: string;
	/*收款信息文本 格式 开户名，开户行，账户*/
	staffBankText: string;
}

export declare interface AT_RewardModel {
	/*奖惩编码：3083*/
	rewardCode?: string;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*申请人岗位编码*/
	postCode: string;
	/*奖惩类型

1 = 个人

2 = 部门

3 = 团队*/
	rewardType: AT_RewardTypeEnum;
	/*奖惩科目ID*/
	subjectId: number;
	/*奖惩说明*/
	rewardNote: string;
	/*奖惩日期*/
	rewardDate: string;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*奖惩明细*/
	rewardDetails?: AT_RewardDetailsModel[];
}

export declare interface AT_RewardPageModel {
	/*Id*/
	id: number;
	/*奖惩编码：3083*/
	rewardCode?: string;
	/*姓名*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*奖惩科目*/
	subjectName?: string;
	/*奖惩金额*/
	rewardMoney?: number;
	/*奖惩说明*/
	note?: string;
	/*奖惩日期*/
	rewardDate: string;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*新增人*/
	addUser?: string;
	/*新增时间*/
	addTime: string;
	/*收款信息文本 格式 开户名，开户行，账户*/
	staffBankText?: string;
	/*业务核算部门*/
	bamsDepName?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
	/*奖惩类型

1 = 个人

2 = 部门

3 = 团队*/
	rewardType: AT_RewardTypeEnum;
}

export declare interface AT_RewardPageModelIEnumerableInt32Tuple {
	item1?: AT_RewardPageModel[];
	item2: number;
}

export declare interface AT_RewardQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*奖惩科目*/
	subjectId?: AT_QueryList;
	/*奖惩日期*/
	rewardDate?: AT_QueryDateTime;
}

export declare interface AT_RewardSubjectModel {
	/*自增ID*/
	id: number;
	/*奖惩类型 个人 部门*/
	rewardType: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName: string;
	/*奖惩人员占比*/
	rewardProportion: number;
	/*奖惩金额*/
	rewardMoney: number;
}

export declare interface AT_RewardSubjectPageModel {
	/*自增ID*/
	id: number;
	/*奖惩类型 个人 部门

1 = 个人

2 = 部门

3 = 团队*/
	rewardType: AT_RewardTypeEnum;
	/*奖惩类型文本值 个人 部门

1 = 个人

2 = 部门

3 = 团队*/
	readonly rewardTypeText: AT_RewardTypeEnum;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName?: string;
	/*奖惩人员占比*/
	rewardProportion: number;
	/*奖惩金额*/
	rewardMoney: number;
	/*更新人*/
	updUserName?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_RewardSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_RewardSubjectPageModel[];
	item2: number;
}

export declare interface AT_RewardSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	isEnable?: AT_QueryList;
	/*奖惩类型*/
	rewardType?: AT_QueryList;
	/*奖惩科目*/
	subjectName?: AT_QueryString;
}

export enum AT_RewardTypeEnum {
	个人 = 1,
	部门 = 2,
	团队 = 3,
}

export declare interface AT_RewardViewModel {
	/*奖惩编码：3083*/
	rewardCode?: string;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*申请人岗位编码*/
	postCode: string;
	/*奖惩类型

1 = 个人

2 = 部门

3 = 团队*/
	rewardType: AT_RewardTypeEnum;
	/*奖惩科目ID*/
	subjectId: number;
	/*奖惩说明*/
	rewardNote: string;
	/*奖惩日期*/
	rewardDate: string;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*奖惩明细*/
	rewardDetails?: AT_RewardDetailsModel[];
	/*自增ID*/
	id: number;
	/*申请人部门文本*/
	depName?: string;
	/*申请人岗位文本*/
	postName?: string;
	/*奖惩科目*/
	subjectName?: string;
}

export declare interface AT_RoleModel {
	/*角色名*/
	roleName?: string;
}

export declare interface AT_RoleUserViewModel {
	/*角色名*/
	roleName?: string;
	/*角色id*/
	id: number;
	/*员工*/
	staffs?: AT_StaffInfo[];
}

export declare interface AT_RoleViewModel {
	/*角色名*/
	roleName?: string;
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

3 = 导出

4 = 审核*/
	readonly authorizationType: AT_AuthorizationType;
}

export declare interface AT_RowToColumnPageModel {
	columns?: object;
	data?: object[];
	/*内容*/
	content?: string;
	/*总页数*/
	totalPage: number;
	/*条数*/
	pageCount: number;
	/*导出数据*/
	exportData?: any /*列头*/;
	treeList?: AT_TreeList;
}

export declare interface AT_SalaryConfirmListModel {
	/*薪资核算Id*/
	id: number;
	/*薪资核算发放方式Id*/
	salaryCalculateGrantId: number;
	/*员工编码*/
	barCode?: string;
	/*薪资核算FlowId*/
	flowId: number;
	/*月份*/
	paymentDays: number;
	/*姓名*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*应发薪资*/
	grantMoney?: number;
	/*实发薪资*/
	actualMoney?: number;
	/*发放形式

1 = 现金

2 = 公司*/
	grantWay: AT_GrantWayEnum;
	/*发放形式文本值

1 = 现金

2 = 公司*/
	readonly grantWayText: AT_GrantWayEnum;
	/*发放单位*/
	csoName?: string;
	/*实际收款人*/
	payee?: string;
	/*核算部门Code*/
	bamsDepCode?: string;
	/*核算部门*/
	bamsDepName?: string;
	/*缺勤天数*/
	absenceDays?: number;
	/*考勤扣款*/
	attendanceDeduction?: number;
	/*其他扣款*/
	otherDeductions?: number;
}

export declare interface AT_SalaryConfirmModel {
	salaryConfirmList?: AT_SalaryConfirmListModel[];
}

export declare interface AT_SalaryCustomDeductModel {
	/*薪资发放社保扣除项目Id*/
	id: number;
	/*社保类型

1 = 社保

2 = 公积金

3 = 其他*/
	insuranceType: AT_InsuranceTypeEnum;
	/*薪资发放Id*/
	salaryCustomGrantId: number;
	/*参保明细ID*/
	socialInsuranceDetailsId: number;
	/*社保项目名称*/
	subjectName?: string;
	/*个人缴纳*/
	personalPayment?: number;
	/*企业缴纳*/
	enterprisePayment?: number;
}

export declare interface AT_SalaryDeductDetailsModel {
	/*薪资扣除明细Id*/
	id?: number;
	/*扣除项目

1 = 入职

2 = 转试用

3 = 转正

4 = 离职

5 = 请假*/
	deductItem: AT_SalaryDeductItem;
	/*扣除金额*/
	deductMoney: number;
	/*扣除发放方式*/
	salaryCustomGrantId: number;
	/*项目类型：考勤，其他

1 = 考勤

2 = 其他*/
	itemType?: AT_SalaryDeductItemType;
	/*扣除发放方式(还原用)*/
	salaryCustomGrantText?: string;
	/*扣除天数*/
	deductDays?: number;
	/*说明*/
	notes?: string;
	/*状态*/
	state?: number;
}

export enum AT_SalaryDeductItem {
	入职 = 1,
	转试用 = 2,
	转正 = 3,
	离职 = 4,
	请假 = 5,
}

export enum AT_SalaryDeductItemType {
	考勤 = 1,
	其他 = 2,
}

export declare interface AT_SalaryDeductModel {
	/*Id*/
	id: number;
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*扣除月份*/
	deductMonth?: number;
	/*扣除月份*/
	deductMonthToString: string;
	/*薪资扣除明细*/
	salaryDeductDetails?: AT_SalaryDeductDetailsModel[];
}

export declare interface AT_SalaryDeductPageModel {
	/*ID*/
	id: number;
	/*明细Id*/
	salaryDeductDetailsId: number;
	/*确认状态

1 = 未确认

2 = 已确认*/
	state?: AT_SalaryDeductState;
	/*确认状态

1 = 未确认

2 = 已确认*/
	readonly stateText?: AT_SalaryDeductState;
	/*员工*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*扣除月份*/
	deductMonth?: number;
	/*扣除项目

1 = 入职

2 = 转试用

3 = 转正

4 = 离职

5 = 请假*/
	deductItem?: AT_SalaryDeductItem;
	/*扣除项目

1 = 入职

2 = 转试用

3 = 转正

4 = 离职

5 = 请假*/
	readonly deductItemText?: AT_SalaryDeductItem;
	/*扣除天数*/
	deductDays?: number;
	/*扣除金额*/
	deductMoney?: number;
	/*发放形式

1 = 现金

2 = 公司*/
	grantWay?: AT_GrantWayEnum;
	/*发放形式

1 = 现金

2 = 公司*/
	readonly grantWayText?: AT_GrantWayEnum;
	/*收款人*/
	payee?: string;
	/*扣除发放方式*/
	readonly salaryCustomGrantText?: string;
	/*扣除说明*/
	notes?: string;
	/*新增时间*/
	addTime?: string;
	/*新增人*/
	addUserName?: string;
}

export declare interface AT_SalaryDeductPageModelIEnumerableInt32Tuple {
	item1?: AT_SalaryDeductPageModel[];
	item2: number;
}

export declare interface AT_SalaryDeductQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*确认状态*/
	state?: AT_QueryList;
	/*姓名*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*月份*/
	deductMonth?: AT_QueryString;
	/*扣除项目*/
	deductItem?: AT_QueryList;
	/*新增时间*/
	addTime?: AT_QueryDateTime;
	/*扣除金额*/
	deductMoney?: AT_QueryDecimal;
}

export enum AT_SalaryDeductState {
	未确认 = 1,
	已确认 = 2,
}

export declare interface AT_SalaryDeductViewModel {
	/*Id*/
	id: number;
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*扣除月份*/
	deductMonth?: number;
	/*扣除月份*/
	deductMonthToString: string;
	/*薪资扣除明细*/
	salaryDeductDetails?: AT_SalaryDeductDetailsModel[];
	/*员工*/
	barName?: string;
	/*部门*/
	depName?: string;
}

export declare interface AT_SalaryFixedRecordPageModel {
	/*类型

1 = 自动

2 = 手动*/
	dataType: AT_DataTypeEnum;
	/*类型

1 = 自动

2 = 手动*/
	readonly dataTypeText: AT_DataTypeEnum;
	/*来源：入职，转试用，转正，定薪

1 = 入职

2 = 转试用

3 = 转正

4 = 定薪*/
	dataSource: AT_DataSourceEnum;
	/*来源：入职，转试用，转正，定薪

1 = 入职

2 = 转试用

3 = 转正

4 = 定薪*/
	readonly dataSourceText: AT_DataSourceEnum;
	/*姓名*/
	barName?: string;
	/*岗位*/
	postName?: string;
	/*部门*/
	depName?: string;
	/*薪资类型

1 = 月薪

2 = 年薪*/
	salaryType: AT_SalaryTypeEnum;
	/*薪资类型

1 = 月薪

2 = 年薪*/
	readonly salaryTypeText: AT_SalaryTypeEnum;
	/*年薪金额*/
	salaryYear?: number;
	/*月薪金额*/
	salaryMonth?: number;
	/*月发放比例*/
	grantScale?: number;
	/*月预留金额*/
	monthKeep?: number;
	/*月预留金额*/
	note?: string;
	/*更新人*/
	addUserName?: string;
	/*更新时间*/
	addTime?: string;
}

export declare interface AT_SalaryFixedRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_SalaryFixedRecordPageModel[];
	item2: number;
}

export declare interface AT_SalaryFixedRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*类型：自动，手动*/
	dataType?: AT_QueryList;
	/*来源：入职，转试用，转正，定薪*/
	dataSource?: AT_QueryList;
	/*姓名*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*薪资类型*/
	salaryType?: AT_QueryList;
	/*更新人*/
	addUserName?: AT_QueryString;
	/*更新时间*/
	addTime?: AT_QueryDateTime;
}

export declare interface AT_SalaryKeepDeductModel {
	/*员工子编码：企业编码+员工主编码*/
	barCode?: string;
	/*员工部门*/
	depCode?: string;
	/*员工岗位*/
	postCode?: string;
	/*总预留金额*/
	totalMoney?: number;
	/*说明*/
	notes?: string;
	/*本次扣除金额*/
	thisMoney?: number;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
}

export declare interface AT_SalaryKeepDeductViewModel {
	/*员工子编码：企业编码+员工主编码*/
	barCode?: string;
	/*员工部门*/
	depCode?: string;
	/*员工岗位*/
	postCode?: string;
	/*总预留金额*/
	totalMoney?: number;
	/*说明*/
	notes?: string;
	/*本次扣除金额*/
	thisMoney?: number;
	/*流程ID*/
	flowId: number;
	/*流程状态*/
	flowState: number;
	/*姓名*/
	name?: string;
	/*岗位*/
	postName?: string;
	/*部门*/
	depName?: string;
}

export declare interface AT_SalaryKeepGrantRecordModel {
	/*员工子编码：企业编码+员工主编码*/
	barCode?: string;
	/*核算部门*/
	bamsDepCode?: string;
	/*员工部门*/
	depCode?: string;
	/*员工岗位*/
	postCode?: string;
	/*收款信息*/
	bankInfo?: string;
	/*发放形式：公司，现金*/
	grantWay?: number;
	/*发放公司*/
	csoCode?: string;
	/*本次发放金额*/
	grantMoney?: number;
}

export declare interface AT_SalaryKeepRecordPageModel {
	/*员工编码*/
	barCode?: string;
	/*员工姓名*/
	barName?: string;
	/*员工部门*/
	depCode?: string;
	/*员工岗位*/
	postCode?: string;
	/*员工部门*/
	depName?: string;
	/*员工岗位*/
	postName?: string;
	/*总预留薪资*/
	sumKeepMoney?: number;
	/*首次预留时间*/
	fristKeepRecordTime?: string;
	/*最新发放时间*/
	newKeepGrantRecordTime?: string;
	/*核算部门Code*/
	bamsDepCode?: string;
	/*核算部门*/
	bamsDepName?: string;
}

export declare interface AT_SalaryKeepRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_SalaryKeepRecordPageModel[];
	item2: number;
}

export declare interface AT_SalaryKeepRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	barName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
}

export enum AT_SalaryKeepType {
	预留 = 1,
	发放 = 2,
	扣除 = 3,
}

export declare interface AT_SalaryPaymentMethodModel {
	/*Id*/
	id: number;
	/*发放公司  来源 服务公司*/
	csoCode?: string;
	/*发放公司  来源 服务公司*/
	csoName?: string;
	/*发放账套：CsoBankBook表账套编码字段*/
	bookCode?: string;
	/*发放账套名称*/
	bookName?: string;
	/*发放形式：现金，公司

1 = 现金

2 = 公司*/
	grantWay: AT_GrantWayEnum;
	/*发放形式：现金，公司

1 = 现金

2 = 公司*/
	readonly grantWayText: AT_GrantWayEnum;
	/*员工编码*/
	barCode?: string;
	/*员工*/
	barName?: string;
	/*收款银行*/
	bankName?: string;
	/*收款账户*/
	accountName?: string;
	/*员工收款编码*/
	comCode?: string;
	/*发放金额*/
	grantMoney: number;
	/*实发金额*/
	actualMoney: number;
	/*是否扣个税*/
	isDeductTax: number;
	/*是否本人*/
	isSelf: number;
	/*收款人*/
	payee: string;
	/*薪资明细：定薪薪资项目表ID，可以是多个(用于接收还原)*/
	salaryCustomSubjectIdList?: number[];
	/*薪资明细：定薪薪资项目表ID，可以是多个(用于转换成逗号隔开字符串存数据库,前端不用管)*/
	salaryCustomSubjectId?: string;
	/*薪资发放社保扣除项目*/
	salaryCustomDeducts?: AT_SalaryCustomDeductModel[];
}

export declare interface AT_SalaryRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*年月*/
	paymentDays?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*发放单位*/
	csoCode?: AT_QueryList;
	/*发放单位*/
	csoName?: AT_QueryString;
	/*实际发放人*/
	payee?: AT_QueryString;
	/*付款状态*/
	payState?: AT_QueryList;
	/*打印状态*/
	printState?: AT_QueryList;
	/*发放形式*/
	grantWay?: AT_QueryList;
	/*实发薪资*/
	actualMoney?: AT_QueryDecimal;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
	/*是否打印*/
	isExport?: boolean;
}

export declare interface AT_SalaryReserveDetailsModel {
	/*员工*/
	barName?: string;
	/*员工部门*/
	depName?: string;
	/*员工岗位*/
	postName?: string;
	/*时间*/
	addTime?: string;
	/*付款状态*/
	payStateText?: string;
	/*类型(预留发放)

1 = 预留

2 = 发放

3 = 扣除*/
	salaryKeepType: AT_SalaryKeepType;
	/*类型(预留发放)

1 = 预留

2 = 发放

3 = 扣除*/
	readonly salaryKeepTypeText: AT_SalaryKeepType;
	/*金额*/
	salaryMoney?: number;
	/*核算部门*/
	bamsDepName?: string;
}

export declare interface AT_SalaryReserveViewModel {
	/*员工*/
	barName?: string;
	/*员工部门*/
	depName?: string;
	/*员工岗位*/
	postName?: string;
	/*总预留薪资*/
	sumKeepMoney?: number;
	/*薪资预留发放明细*/
	salaryReserveDetails?: AT_SalaryReserveDetailsModel[];
}

export declare interface AT_SalarySocialInsuranceProvidentFundModel {
	/*社保/公积金Id*/
	id: number;
	/*参保公司*/
	csoName?: string;
	/*人员编码*/
	barCode?: string;
	/*个人缴纳*/
	personPayMoney?: number;
	/*公司缴纳*/
	companyPayMoney?: number;
	/*合计*/
	countMoney?: number;
}

export declare interface AT_SalaryStaffDetailsModel {
	/*薪资项目ID*/
	salarySubjectId: number;
	/*项目类型

1 = 应发

2 = 应扣*/
	subjectType: AT_SalarySubjectType;
	/*金额*/
	subjectMoney: number;
	/*薪资项目*/
	subjectName?: string;
}

export declare interface AT_SalaryStaffDetailsViewModel {
	/*薪资项目ID*/
	salarySubjectId: number;
	/*项目类型

1 = 应发

2 = 应扣*/
	subjectType: AT_SalarySubjectType;
	/*金额*/
	subjectMoney: number;
	/*薪资项目*/
	subjectName?: string;
	/*Id*/
	id: number;
}

export declare interface AT_SalaryStaffModel {
	/*状态

1 = 入职

2 = 实习转试用

3 = 实习转正

4 = 试用转正

5 = 岗位调动

6 = 已离职

7 = 已处理

8 = 停发*/
	state: AT_SalaryStaffState;
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*员工部门*/
	depCode: string;
	/*员工岗位*/
	postCode: string;
	/*说明*/
	note?: string;
	/*薪资类型：月薪，年薪

1 = 月薪

2 = 年薪*/
	salaryType?: AT_SalaryTypeEnum;
	/*月薪金额*/
	salaryMonth?: number;
	/*年薪金额*/
	salaryYear?: number;
	/*月发放比例：单位（%）*/
	grantScale?: number;
	/*月预留金额*/
	monthKeep?: number;
	/*总月预留金额*/
	sumMonthKeep?: number;
}

export declare interface AT_SalaryStaffQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*是否为薪资核算*/
	isVerify?: AT_QueryInt;
	/*核算日期*/
	paymentDays?: AT_QueryInt;
	/*部门*/
	depName?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*级别*/
	levelName?: AT_QueryString;
	/*月薪金额*/
	salaryMonth?: AT_QueryDecimal;
	/*月预留金额*/
	monthKeep?: AT_QueryDecimal;
	/*应发薪资*/
	sumSalaryMoneyAdd?: AT_QueryDecimal;
	/*应扣薪资*/
	sumSalaryMoneyCut?: AT_QueryDecimal;
	/*实发薪资*/
	wagesPayable?: AT_QueryDecimal;
	/*流程状态*/
	flowState?: AT_QueryList;
	/*薪资类型*/
	salaryType?: AT_QueryList;
	/*在职状态*/
	workStatus?: AT_QueryList;
}

export enum AT_SalaryStaffState {
	入职 = 1,
	实习转试用 = 2,
	实习转正 = 3,
	试用转正 = 4,
	岗位调动 = 5,
	已离职 = 6,
	已处理 = 7,
	停发 = 8,
}

export declare interface AT_SalaryStaffStateModel {
	/*流程Id*/
	flowId: number;
	/*状态

1 = 入职

2 = 实习转试用

3 = 实习转正

4 = 试用转正

5 = 岗位调动

6 = 已离职

7 = 已处理

8 = 停发*/
	state: AT_SalaryStaffState;
	/*说明*/
	note?: string;
}

export declare interface AT_SalaryStaffViewModel {
	/*状态

1 = 入职

2 = 实习转试用

3 = 实习转正

4 = 试用转正

5 = 岗位调动

6 = 已离职

7 = 已处理

8 = 停发*/
	state: AT_SalaryStaffState;
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*员工部门*/
	depCode: string;
	/*员工岗位*/
	postCode: string;
	/*说明*/
	note?: string;
	/*薪资类型：月薪，年薪

1 = 月薪

2 = 年薪*/
	salaryType?: AT_SalaryTypeEnum;
	/*月薪金额*/
	salaryMonth?: number;
	/*年薪金额*/
	salaryYear?: number;
	/*月发放比例：单位（%）*/
	grantScale?: number;
	/*月预留金额*/
	monthKeep?: number;
	/*总月预留金额*/
	sumMonthKeep?: number;
	/*Id*/
	id: number;
	/*预付款单编码*/
	calculateCode?: string;
	/*流程Id*/
	flowId: number;
	/*部门名称*/
	depName?: string;
	/*岗位名称*/
	postName?: string;
	/*薪资类型文本

1 = 月薪

2 = 年薪*/
	readonly salaryTypeText?: AT_SalaryTypeEnum;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus?: AT_WorkStatus;
	/*在职状态文本

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText?: AT_WorkStatus;
	/*入职时间*/
	inductionDate?: string;
	/*入职时间*/
	readonly inductionDateText?: string;
	/*试用时间*/
	tryoutDate?: string;
	/*试用时间*/
	readonly tryoutDateText?: string;
	/*转正时间*/
	formalDate?: string;
	/*试用时间*/
	readonly formalDateText?: string;
	/*离职时间*/
	resignDate?: string;
	/*离职时间*/
	readonly resignDateText?: string;
	/*录用审批流程Id*/
	employFlowId?: number;
	/*转试用申请流程Id*/
	internshipUpFlowId?: number;
	/*转正申请流程Id*/
	tryoutUpFlowId?: number;
	/*离职申请流程Id*/
	resignFlowId?: number;
	/*薪资发放方式*/
	salaryPaymentMethods?: AT_SalaryPaymentMethodModel[];
	/*员工薪资明细*/
	salaryStaffDetails?: AT_SalaryStaffDetailsModel[];
}

export declare interface AT_SalarySubjectModel {
	/*id*/
	id: number;
	/*项目类型 应发 应扣

1 = 应发

2 = 应扣*/
	subjectType: AT_SalarySubjectType;
	/*项目名称*/
	subjectName: string;
	/*说明*/
	note: string;
	/*顺序*/
	sort: number;
	/*打印列名称*/
	printName?: string;
	/*打印列顺序*/
	printOrder?: number;
}

export declare interface AT_SalarySubjectPageModel {
	/*id*/
	id: number;
	/*项目类型 应发 应扣

1 = 应发

2 = 应扣*/
	subjectType: AT_SalarySubjectType;
	/*项目类型文本 应发 应扣

1 = 应发

2 = 应扣*/
	readonly subjectTypeText: AT_SalarySubjectType;
	/*项目名称*/
	subjectName?: string;
	/*说明*/
	note?: string;
	/*顺序*/
	sort?: number;
	/*打印列名称*/
	printName?: string;
	/*打印列顺序*/
	printOrder?: number;
}

export declare interface AT_SalarySubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_SalarySubjectPageModel[];
	item2: number;
}

export declare interface AT_SalarySubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*类型 应发 应扣*/
	subjectType?: AT_QueryList;
	/*项目名称*/
	subjectName?: AT_QueryString;
}

export enum AT_SalarySubjectType {
	应发 = 1,
	应扣 = 2,
}

export enum AT_SalaryTypeEnum {
	月薪 = 1,
	年薪 = 2,
}

export declare interface AT_SalaryVerifyPageModel {
	/*薪资核算Id*/
	id: number;
	/*员工编码*/
	barCode?: string;
	/*薪资核算发放方式Id*/
	salaryCalculateGrantId: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState?: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*确认状态*/
	salaryState: number;
	/*月份*/
	paymentDays: number;
	/*姓名*/
	barName?: string;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*应发*/
	grantMoney?: number;
	/*实发*/
	actualMoney?: number;
	/*个人社保*/
	personalInsuranceMoney?: number;
	/*个人公积金*/
	personalHouseFundMoney?: number;
	/*企业公积金*/
	enterpriseHouseFundMoney?: number;
	/*个人其他*/
	personalOtherMoney?: number;
	/*发放方式

1 = 现金

2 = 公司*/
	grantWay: AT_GrantWayEnum;
	/*发放方式

1 = 现金

2 = 公司*/
	readonly grantWayText: AT_GrantWayEnum;
	/*发放单位*/
	csoName?: string;
	/*实际收款人*/
	payee?: string;
	/*个税*/
	personalIncomeMoney?: number;
	/*业务核算部门*/
	bamsDepName?: string;
	/*缺勤天数*/
	absenceDays?: number;
	/*考勤扣款*/
	attendanceDeduction?: number;
	/*其他扣款*/
	otherDeductions?: number;
}

export declare interface AT_SalaryVerifyPageModelIEnumerableInt32Tuple {
	item1?: AT_SalaryVerifyPageModel[];
	item2: number;
}

export declare interface AT_SalaryVerifyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*年月*/
	paymentDays?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*发放单位*/
	csoCode?: AT_QueryList;
	/*发放单位*/
	csoName?: AT_QueryString;
	/*实际发放人*/
	payee?: AT_QueryString;
	/*付款状态*/
	payState?: AT_QueryList;
	/*打印状态*/
	printState?: AT_QueryList;
	/*发放形式*/
	grantWay?: AT_QueryList;
	/*实发薪资*/
	actualMoney?: AT_QueryDecimal;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
	/*是否打印*/
	isExport?: boolean;
	/*薪资状态*/
	salaryState?: AT_QueryList;
}

export declare interface AT_SaveNoticeModel {
	/*通知Id*/
	id: number;
	/*通知附件*/
	noticeAttachments?: AT_NoticeAttachmentModel[];
	/*通知内容*/
	noticeContent: AT_NoticeContentModel;
	/*通知弹窗Key（通知管理详情PopupKey）*/
	popupKey?: string;
}

export declare interface AT_SaveRegulationModel {
	/*制度Id*/
	id: number;
	/*制度附件*/
	regulationAttachments?: AT_RegulationAttachmentModel[];
	/*制度内容*/
	regulationContent: AT_RegulationContentModel;
	/*通知弹窗Key（规章制度详情PopupKey）*/
	popupKey?: string;
}

export declare interface AT_ScheduleQueryModel {
	/*0全部，1个人*/
	type: number;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*员工编码*/
	barCode?: string;
}

export declare interface AT_SchemeInfoModel {
	/*体系名称*/
	schemeName?: string;
	/*体系编码*/
	schemeCode?: string;
}

export enum AT_SearchListType {
	包含 = 0,
	不包含 = 1,
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

export declare interface AT_SelfRechargeApplyPageModel {
	/*充值状态*/
	rechargeState: number;
	/*付款编码*/
	payCode?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*储值卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*充值月份：yyyy/MM*/
	rechargeMonth?: string;
	/*使用部门*/
	depName?: string;
	/*使用姓名*/
	staffName?: string;
	/*副卡卡号*/
	cardNo?: string;
	/*充值金额*/
	rechargeMoney?: string;
	/*扣款金额*/
	deductMoney?: number;
	/*申请日期*/
	addTime?: string;
	/*充值日期*/
	rechargeDate?: string;
	/*摘要*/
	summary?: string;
}

export declare interface AT_SelfRechargeApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_SelfRechargeApplyPageModel[];
	item2: number;
}

export declare interface AT_SelfRechargeApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*姓名*/
	staffName?: AT_QueryString;
	/*充值月份：yyyy/MM*/
	rechargeMonth?: AT_QueryDateTime;
	/*充值状态*/
	rechargeState?: AT_QueryInt;
	/*付款状态*/
	payState?: AT_QueryList;
}

export enum AT_SexRequireType {
	男 = 1,
	女 = 2,
	不限 = 3,
}

export enum AT_SexType {
	男 = 1,
	女 = 2,
}

export declare interface AT_SlaveCardBagModel {
	/*自增ID*/
	id: number;
	/*副卡编码 3082*/
	cardCode?: string;
	/*员工编码*/
	barCode?: string;
	/*员工名称*/
	barName?: string;
	/*部门编码*/
	depCode?: string;
	/*部门名称*/
	depName?: string;
	/*卡类型*/
	cardType: number;
	/*卡号*/
	cardNo: string;
	/*充值标准*/
	rechargeAmount?: number;
	/*备注*/
	note?: string;
	/*油卡信息*/
	oilCard?: AT_OilCardModel;
	/*注册车牌号*/
	regCarNumber?: string;
	/*持卡人*/
	cardholder?: string;
	/*关联主卡*/
	masterCardCode?: string;
	/*校验码*/
	checkCode: string;
	/*公司编码*/
	csoCode?: string;
	/*公司名称*/
	csoName?: string;
}

export declare interface AT_SlaveCardBagPageModel {
	/*序号*/
	number: number;
	/*自增ID*/
	id: number;
	/*副卡编码 3082*/
	cardCode?: string;
	/*状态

1 = 待使用

2 = 已使用

3 = 已作废*/
	state?: AT_SlaveCardBagState;
	/*状态文本

1 = 待使用

2 = 已使用

3 = 已作废*/
	readonly stateText?: AT_SlaveCardBagState;
	/*员工编码*/
	barCode?: string;
	/*使用人*/
	staffName?: string;
	/*部门编码*/
	depCode?: string;
	/*使用部门*/
	depName?: string;
	/*卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*卡号*/
	cardNo?: string;
	/*主卡卡号*/
	masterCardNo?: string;
	/*车牌号*/
	licensePlateNumber?: string;
	/*充值标准*/
	rechargeAmount: number;
	/*所属公司*/
	csoName?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_SlaveCardBagPageModelIEnumerableInt32Tuple {
	item1?: AT_SlaveCardBagPageModel[];
	item2: number;
}

export declare interface AT_SlaveCardBagQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*员工编码*/
	barName?: AT_QueryString;
	/*部门编码*/
	depName?: AT_QueryString;
	/*卡类型*/
	cardType?: AT_QueryList;
	/*卡号*/
	cardNo?: AT_QueryString;
	/*副卡状态*/
	state?: AT_QueryList;
	/*使用车牌*/
	licensePlateNumber?: AT_QueryString;
	/*所属公司*/
	csoCode?: AT_QueryList;
	/*充值标准*/
	rechargeAmount?: AT_QueryDecimal;
}

export enum AT_SlaveCardBagState {
	待使用 = 1,
	已使用 = 2,
	已作废 = 3,
}

export declare interface AT_SlaveCardRechargeApplyModel {
	/*副卡编码*/
	cardCode?: string;
	/*充值状态 未充值 已充值*/
	rechargeState: number;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*充值性质 标准 灵活

1 = 标准_每月一次

2 = 灵活

3 = 自充值*/
	rechargeType: AT_RechargeType;
	/*充值金额*/
	rechargeMoney: number;
	/*充值月份：yyyy/MM*/
	rechargeMonth: string;
	/*是否扣款：否，是*/
	isDeduct: number;
	/*扣款金额*/
	deductMoney: number;
	/*摘要*/
	summary: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*所属公司*/
	csoCode?: string;
}

export declare interface AT_SlaveCardRechargeApplyPageModel {
	/*自增ID*/
	id: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*充值状态*/
	rechargeState: number;
	/*充值状态*/
	readonly rechargeStateText?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*储值卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*储值卡类型文本值

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*充值性质 标准 灵活

1 = 标准_每月一次

2 = 灵活

3 = 自充值*/
	rechargeType: AT_RechargeType;
	/*充值月份：yyyy/MM*/
	rechargeMonth?: string;
	/*充值月份：yyyy/MM*/
	readonly rechargeMonthText?: string;
	/*卡号*/
	cardNo?: string;
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	staffName?: string;
	/*部门*/
	depName?: string;
	/*车牌号*/
	licensePlateNumber?: string;
	/*核算部门*/
	bamsDepName?: string;
	/*充值金额*/
	rechargeMoney?: number;
	/*申请日期*/
	addTime?: string;
	/*充值日期*/
	rechargeDate?: string;
	/*关联主卡*/
	masterCardNo?: string;
	/*所属公司*/
	csoName?: string;
	/*单号*/
	applyCode?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId: number;
	/*付款编码*/
	payCode?: string;
	/*注册车牌号*/
	regCarNumber?: string;
	/*持卡人*/
	cardholder?: string;
	/*校验码*/
	checkCode?: string;
	/*主卡编码*/
	masterCardCode?: string;
}

export declare interface AT_SlaveCardRechargeApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_SlaveCardRechargeApplyPageModel[];
	item2: number;
}

export declare interface AT_SlaveCardRechargeApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*储值卡类型*/
	cardType?: AT_QueryList;
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*卡号*/
	cardNo?: AT_QueryString;
	/*充值月份：yyyy/MM*/
	rechargeMonth?: AT_QueryDateTime;
	/*充值状态*/
	rechargeState?: AT_QueryList;
	/*充值性质*/
	rechargeType?: AT_QueryList;
	/*车牌号*/
	licensePlateNumber?: AT_QueryString;
	/*关联主卡*/
	masterCardNo?: AT_QueryString;
}

export declare interface AT_SlaveCardRechargeApplyViewModel {
	/*副卡编码*/
	cardCode?: string;
	/*充值状态 未充值 已充值*/
	rechargeState: number;
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*充值性质 标准 灵活

1 = 标准_每月一次

2 = 灵活

3 = 自充值*/
	rechargeType: AT_RechargeType;
	/*充值金额*/
	rechargeMoney: number;
	/*充值月份：yyyy/MM*/
	rechargeMonth: string;
	/*是否扣款：否，是*/
	isDeduct: number;
	/*扣款金额*/
	deductMoney: number;
	/*摘要*/
	summary: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*所属公司*/
	csoCode?: string;
	/*Id*/
	id: number;
	/*申请单编码 3076*/
	applyCode?: string;
	/*申请人部门文本*/
	depName?: string;
	/*充值性质文本*/
	rechargeTypeText?: string;
	/*卡类型

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	cardType: AT_CardTypeEnum;
	/*卡类型文本

1 = 油卡

2 = 餐卡

3 = 储值卡*/
	readonly cardTypeText: AT_CardTypeEnum;
	/*卡号*/
	cardNo?: string;
	/*车牌号*/
	licensePlateNumber?: string;
	/*申请时间*/
	addTime?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
	/*所属公司*/
	csoName?: string;
}

export declare interface AT_SlaveCardRechargeFinishModel {
	/*自增ID*/
	id: number;
	/*主卡编码*/
	masterCardCode: string;
	/*副卡充值申请单号*/
	applyCodes?: string[];
	/*充值人*/
	barCode: string;
	/*充值人部门编码*/
	depCode: string;
	/*充值日期*/
	rechargeDate: string;
}

export declare interface AT_SocialInsuranceDetailsModel {
	/*自增ID*/
	id: number;
	/*参保主表ID*/
	insuranceId: number;
	/*项目ID*/
	subjectId: number;
	/*项目类型*/
	insuranceType: number;
	/*项目文本*/
	subjectName?: string;
	/*缴纳方式 固定基数 实际薪资

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod: AT_PaymentMethodEnum;
	/*缴纳方式 固定基数 实际薪资*/
	paymentMethodText?: string;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人缴纳*/
	personalPayment?: number;
	/*公司缴纳*/
	companyPayment?: number;
	/*个人缴纳金额*/
	personalPaymentMoney?: number;
	/*公司缴纳金额*/
	companyPaymentMoney?: number;
	/*社保档案id集合(批量操作)*/
	ids?: number[];
}

export declare interface AT_SocialInsuranceModel {
	/*参保状态 在保 停保*/
	insuranceState: number;
	/*社保方案Id*/
	schemeId: number;
	/*参保人*/
	barCode: string;
	/*开始参保日期*/
	startTime: string;
	/*社保总额*/
	totalInsuranceMoney: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*企业社保金额*/
	enterpriseInsuranceMoney: number;
	/*个人社保金额*/
	personalInsuranceMoney: number;
	/*企业公积金金额*/
	enterpriseHouseFundMoney?: number;
	/*个人公积金金额*/
	personalHouseFundMoney?: number;
	/*企业其他金额*/
	enterpriseOtherMoney?: number;
	/*个人其他金额*/
	personalOtherMoney?: number;
	/*其他总额*/
	totalOtherMoney: number;
	/*合计*/
	totalMoney?: number;
	/*参保公司*/
	csoCode: string;
	/*是否修改*/
	isChange?: number;
	/*参保明细*/
	socialInsuranceDetails: AT_SocialInsuranceDetailsModel[];
}

export declare interface AT_SocialInsurancePageModel {
	/*自增ID*/
	id: number;
	/*参保状态 在保 停保*/
	insuranceState: number;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*参保人*/
	barName?: string;
	/*参保人部门*/
	depName?: string;
	/*开始参保日期*/
	startTime?: string;
	/*社保总额*/
	totalInsuranceMoney?: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*社保缴纳固定基数*/
	fixedRadix?: number;
	/*其他总额*/
	totalOtherMoney?: number;
	/*合计*/
	countMoney?: number;
	/*个人缴纳合计*/
	personalCountMoney?: number;
	/*企业缴纳合计*/
	enterpriseCountMoney?: number;
	/*参保公司*/
	csoName?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_SocialInsurancePageModelIEnumerableInt32Tuple {
	item1?: AT_SocialInsurancePageModel[];
	item2: number;
}

export declare interface AT_SocialInsurancePayModel {
	ids?: number[];
}

export declare interface AT_SocialInsurancePayQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*缴纳状态*/
	state?: AT_QueryList;
	/*所属月份*/
	settlementDays?: AT_QueryInt;
	/*姓名*/
	barName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*参保公司*/
	csoName?: AT_QueryString;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_SocialInsurancePayViewModel {
	socialInsurancePays?: AT_SocialInsurancePays[];
}

export declare interface AT_SocialInsurancePays {
	id: number;
	/*参保人*/
	barName?: string;
	/*参保人部门*/
	depName?: string;
	/*参保人岗位*/
	postName?: string;
	/*参保年月*/
	settlementDays: number;
	/*个人总额*/
	sumPerson?: number;
	/*公司总额*/
	sumEnterprise?: number;
	/*总额*/
	sumMoney?: number;
	/*参保公司*/
	csoCode?: string;
	/*参保公司*/
	csoName?: string;
	/*核算部门Code*/
	bamsDepCode?: string;
	/*核算部门*/
	bamsDepName?: string;
}

export declare interface AT_SocialInsuranceProvidentFundModel {
	/*定薪社保档案*/
	salarySocialInsurance?: AT_SalarySocialInsuranceProvidentFundModel;
	/*定薪公积金档案*/
	salaryProvidentFund?: AT_SalarySocialInsuranceProvidentFundModel;
}

export declare interface AT_SocialInsuranceQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*部门*/
	depName?: AT_QueryString;
	/*参保状态*/
	insuranceState?: AT_QueryList;
	/*姓名*/
	barName?: AT_QueryString;
	/*开始参保日期*/
	startTime?: AT_QueryDateTime;
	/*参保公司*/
	csoName?: AT_QueryString;
	/*住房公积金总额*/
	totalHouseFundMoney?: AT_QueryDecimal;
	/*社保缴纳固定基数*/
	fixedRadix?: AT_QueryDecimal;
	/*查询金额*/
	queryMoney?: AT_QueryDecimal;
}

export declare interface AT_SocialInsuranceRecordDetailsModel {
	/*自增ID*/
	id: number;
	/*参保记录表ID*/
	socialInsuranceRecordId: number;
	/*项目ID*/
	subjectId: number;
	/*项目名称*/
	subjectName?: string;
	/*缴纳方式 固定基数 实际薪资

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod: AT_PaymentMethodEnum;
	/*缴纳方式文本*/
	paymentMethodText?: string;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人缴纳*/
	personalPayment: number;
	/*个人缴纳金额*/
	personalPaymentMoney: number;
	/*公司缴纳*/
	companyPayment: number;
	/*公司缴纳金额*/
	companyPaymentMoney: number;
}

export declare interface AT_SocialInsuranceRecordPageModel {
	/*自增ID*/
	id: number;
	/*参保人部门*/
	depName?: string;
	/*参保人*/
	barName?: string;
	/*参保年月*/
	settlementDays: number;
	/*参保公司*/
	csoName?: string;
	/*社保总额*/
	totalInsuranceMoney?: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*其他总额*/
	totalOtherMoney?: number;
	/*合计金额*/
	totalMoney?: number;
	/*更新人*/
	updName?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_SocialInsuranceRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_SocialInsuranceRecordPageModel[];
	item2: number;
}

export declare interface AT_SocialInsuranceRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*参保年月*/
	settlementDays?: AT_QueryInt;
	/*参保公司*/
	csoCode?: AT_QueryString;
}

export declare interface AT_SocialInsuranceRecordViewModel {
	/*自增ID*/
	id: number;
	/*参保状态 在保 停保*/
	insuranceState: number;
	/*参保年月*/
	settlementDays: number;
	/*参保人*/
	barCode?: string;
	/*参保人部门编码*/
	depCode?: string;
	/*参保人部门*/
	depName?: string;
	/*开始参保日期*/
	startTime?: string;
	/*社保总额*/
	totalInsuranceMoney?: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*其他总额*/
	totalOtherMoney?: number;
	/*合计金额*/
	totalMoney?: number;
	/*参保公司Code*/
	csoCode?: string;
	/*参保公司Id*/
	csoId?: number;
	/*参保公司*/
	csoName?: string;
	/*参保人*/
	barName?: string;
	/*参保记录明细*/
	socialInsuranceRecordDetails?: AT_SocialInsuranceRecordDetailsModel[];
}

export declare interface AT_SocialInsuranceSchemeDetailsModel {
	/*自增ID*/
	id: number;
	/*方案ID*/
	schemeId: number;
	/*项目ID*/
	subjectId: number;
	/*项目文本*/
	subjectName?: string;
	/*缴纳方式 固定基数 实际薪资

1 = 固定基数

2 = 实际薪资

3 = 固定金额*/
	paymentMethod: AT_PaymentMethodEnum;
	/*缴纳方式 固定基数 实际薪资*/
	paymentMethodText?: string;
	/*固定基数*/
	fixedRadix?: number;
	/*最小基数*/
	minimumRadix?: number;
	/*最大基数*/
	maximumRadix?: number;
	/*个人缴纳*/
	personalPayment?: number;
	/*公司缴纳*/
	companyPayment?: number;
	/*个人缴纳金额*/
	personalPaymentMoney?: number;
	/*公司缴纳金额*/
	companyPaymentMoney?: number;
}

export declare interface AT_SocialInsuranceSchemeModel {
	/*方案名称*/
	schemeName: string;
	/*说明*/
	note: string;
	/*方案明细*/
	socialInsuranceSchemeDetails?: AT_SocialInsuranceSchemeDetailsModel[];
}

export declare interface AT_SocialInsuranceSchemePageModel {
	/*自增ID*/
	id: number;
	/*方案名称*/
	schemeName?: string;
	/*说明*/
	note?: string;
	/*项目名称*/
	subjectName?: string;
	/*顺序*/
	sort?: string;
}

export declare interface AT_SocialInsuranceSchemePageModelIEnumerableInt32Tuple {
	item1?: AT_SocialInsuranceSchemePageModel[];
	item2: number;
}

export declare interface AT_SocialInsuranceSchemeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*方案名称*/
	schemeName?: AT_QueryString;
}

export declare interface AT_SocialInsuranceSchemeViewModel {
	/*方案名称*/
	schemeName: string;
	/*说明*/
	note: string;
	/*方案明细*/
	socialInsuranceSchemeDetails?: AT_SocialInsuranceSchemeDetailsModel[];
	/*自增ID*/
	id: number;
}

export declare interface AT_SocialInsuranceSubjectModel {
	/*自增ID*/
	id: number;
	/*类型 社保 公积金 其他

1 = 社保

2 = 公积金

3 = 其他*/
	insuranceType: AT_InsuranceTypeEnum;
	/*项目名称*/
	subjectName: string;
	/*说明*/
	note: string;
	/*顺序*/
	sort: number;
	/*是否打印：否，是*/
	isPrint: number;
}

export declare interface AT_SocialInsuranceSubjectPageModel {
	/*自增ID*/
	id: number;
	/*类型 社保 公积金 其他

1 = 社保

2 = 公积金

3 = 其他*/
	insuranceType: AT_InsuranceTypeEnum;
	/*类型名称

1 = 社保

2 = 公积金

3 = 其他*/
	readonly insuranceTypeText: AT_InsuranceTypeEnum;
	/*是否打印：否，是*/
	isPrint?: number;
	/*项目名称*/
	subjectName?: string;
	/*说明*/
	note?: string;
	/*顺序*/
	sort?: number;
}

export declare interface AT_SocialInsuranceSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_SocialInsuranceSubjectPageModel[];
	item2: number;
}

export declare interface AT_SocialInsuranceSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*类型 社保 公积金 其他*/
	insuranceType?: AT_QueryList;
	/*项目名称*/
	subjectName?: AT_QueryString;
}

export declare interface AT_SocialInsuranceViewModel {
	/*参保状态 在保 停保*/
	insuranceState: number;
	/*社保方案Id*/
	schemeId: number;
	/*参保人*/
	barCode: string;
	/*开始参保日期*/
	startTime: string;
	/*社保总额*/
	totalInsuranceMoney: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*企业社保金额*/
	enterpriseInsuranceMoney: number;
	/*个人社保金额*/
	personalInsuranceMoney: number;
	/*企业公积金金额*/
	enterpriseHouseFundMoney?: number;
	/*个人公积金金额*/
	personalHouseFundMoney?: number;
	/*企业其他金额*/
	enterpriseOtherMoney?: number;
	/*个人其他金额*/
	personalOtherMoney?: number;
	/*其他总额*/
	totalOtherMoney: number;
	/*合计*/
	totalMoney?: number;
	/*参保公司*/
	csoCode: string;
	/*是否修改*/
	isChange?: number;
	/*参保明细*/
	socialInsuranceDetails: AT_SocialInsuranceDetailsModel[];
	/*自增ID*/
	id: number;
	/*参保人*/
	barName?: string;
	/*参保公司*/
	csoName?: string;
}

export declare interface AT_StaffBankModel {
	/*Id*/
	id: number;
	/*通用编码：3080*/
	comCode?: string;
	/*开户名名称*/
	openName: string;
	/*开户银行*/
	openBank: string;
	/*开户账号*/
	openCard: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_StaffChangePageModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode?: string;
	/*变动类型：入职、转试用、转正、转岗（调动管理-调动类型）、兼任（调动管理-调动类型）、晋升（级别调整-调整类型）、降职（级别调整-调整类型）、离职

1 = 入职

2 = 转试用

3 = 转正

4 = 转岗

5 = 兼任

6 = 晋升

7 = 降职

8 = 离职*/
	changeType?: AT_StaffChangeType;
	/*变动类型：入职、转试用、转正、转岗（调动管理-调动类型）、兼任（调动管理-调动类型）、晋升（级别调整-调整类型）、降职（级别调整-调整类型）、离职

1 = 入职

2 = 转试用

3 = 转正

4 = 转岗

5 = 兼任

6 = 晋升

7 = 降职

8 = 离职*/
	readonly changeTypeText?: AT_StaffChangeType;
	/*变动时间*/
	changeTime?: string;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	changeState?: AT_WorkStatus;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly changeStateText?: AT_WorkStatus;
	/*入职时间*/
	inductionTime?: string;
	/*试用时间*/
	tryoutTime?: string;
	/*所属部门*/
	depCode?: string;
	/*所属部门*/
	dep?: string;
	/*所属岗位*/
	postCode?: string;
	/*所属岗位*/
	post?: string;
	/*姓名*/
	fullName?: string;
	/*级别*/
	levelCode?: string;
	/*级别*/
	level?: string;
	/*联系方式*/
	contact?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education?: AT_EducationType;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	readonly educationText?: AT_EducationType;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey?: string;
	/*来源表KEY：来源表流程ID*/
	tableKey?: number;
}

export declare interface AT_StaffChangePageModelIEnumerableInt32Tuple {
	item1?: AT_StaffChangePageModel[];
	item2: number;
}

export declare interface AT_StaffChangeQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*变动类型*/
	changeType?: AT_QueryList;
	/*在职状态*/
	changeState?: AT_QueryList;
	/*入职时间*/
	inductionTime?: AT_QueryDateTime;
	/*试用时间*/
	tryoutTime?: AT_QueryDateTime;
	/*所属部门*/
	dep?: AT_QueryString;
	/*姓名*/
	fullName?: AT_QueryString;
}

export enum AT_StaffChangeType {
	入职 = 1,
	转试用 = 2,
	转正 = 3,
	转岗 = 4,
	兼任 = 5,
	晋升 = 6,
	降职 = 7,
	离职 = 8,
}

export declare interface AT_StaffDetailsModel {
	/*个人头像*/
	profilePicture?: string;
	/*姓名*/
	name: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*生日类型(农历，公历)

1 = 公历

2 = 农历*/
	birthdayType: AT_BirthdayType;
	/*出生日期*/
	dateOfBirth: string;
	/*身份证号*/
	idCard: string;
	/*身份证效期*/
	idCardValid?: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*民族*/
	nation: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*毕业院校*/
	school: string;
	/*专业*/
	specialty: string;
	/*婚姻状况

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*政治面貌*/
	politics: string;
	/*当前居住地*/
	residence?: string;
	/*电话号码*/
	phone: string;
	/*其他电话*/
	spareMobile?: string;
	/*短码*/
	shortCode?: string;
	/*Email*/
	email?: string;
	/*微信*/
	webChat?: string;
	/*QQ*/
	qq?: string;
	/*其他*/
	other?: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_StaffDetailsPageModel {
	/*员工子编码：企业编码+员工编码*/
	barCode?: string;
	/*档案状态(实习，试用，正式，挂职，离职，储备人才)

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*档案状态(实习，试用，正式，挂职，离职，储备人才)

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*姓名*/
	name?: string;
	/*部门*/
	depName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*岗位*/
	postName?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*电话号码*/
	phone?: string;
	/*其他电话*/
	spareMobile?: string;
	/*短码*/
	shortCode?: string;
	/*Email*/
	email?: string;
	/*微信*/
	webChat?: string;
	/*QQ*/
	qq?: string;
	/*年龄*/
	age?: number;
	/*政治面貌*/
	politics?: string;
	/*婚姻状态：未婚，已婚

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*婚姻状态：未婚，已婚

1 = 未婚

2 = 已婚*/
	readonly maritalText?: AT_MaritalStatus;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education?: AT_EducationType;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	readonly educationText?: AT_EducationType;
	/*毕业院校*/
	school?: string;
	/*专业*/
	specialty?: string;
	/*入职日期*/
	inductionDate?: string;
	/*实习日期*/
	fieldworkDate?: string;
	/*试用日期*/
	tryoutDate?: string;
	/*转正日期*/
	formalDate?: string;
	/*离职日期*/
	resignDate?: string;
	/*级别*/
	levelName?: string;
	/*服务公司名称（扣税单位）*/
	csoName?: string;
	/*其他*/
	other?: string;
}

export declare interface AT_StaffDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_StaffDetailsPageModel[];
	item2: number;
}

export declare interface AT_StaffDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*档案状态*/
	workStatus?: AT_QueryList;
	/*姓名*/
	name?: AT_QueryString;
	/*岗位*/
	postName?: AT_QueryString;
	/*部门*/
	depName?: AT_QueryString;
	/*性别*/
	sex?: AT_QueryList;
	/*电话号码*/
	phone?: AT_QueryString;
	/*其他电话*/
	spareMobile?: AT_QueryString;
	/*短码*/
	shortCode?: AT_QueryString;
	/*Email*/
	email?: AT_QueryString;
	/*微信*/
	webChat?: AT_QueryString;
	/*QQ*/
	qq?: AT_QueryString;
	/*年龄*/
	age?: AT_QueryInt;
	/*政治面貌*/
	politics?: AT_QueryString;
	/*婚姻状态：未婚，已婚*/
	marital?: AT_QueryList;
	/*学历*/
	education?: AT_QueryList;
	/*毕业院校*/
	school?: AT_QueryString;
	/*专业*/
	specialty?: AT_QueryString;
	/*其他*/
	other?: AT_QueryString;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*级别*/
	levelName?: AT_QueryString;
	/*入职日期*/
	inductionDate?: AT_QueryDateTime;
	/*服务公司名称（扣税单位）*/
	csoName?: AT_QueryList;
}

export declare interface AT_StaffDetailsTimeLogModel {
	/*类型

1 = 入职

2 = 实习

3 = 试用

4 = 转正

5 = 人员调动

6 = 级别调整

7 = 离职*/
	staffDetailsTimeLogType: AT_StaffDetailsTimeLogType;
	/*标题*/
	title?: string;
	/*时间*/
	time?: string;
	/*流程ID*/
	flowId?: number;
}

export enum AT_StaffDetailsTimeLogType {
	入职 = 1,
	实习 = 2,
	试用 = 3,
	转正 = 4,
	人员调动 = 5,
	级别调整 = 6,
	离职 = 7,
}

export declare interface AT_StaffDetailsViewModel {
	/*个人头像*/
	profilePicture?: string;
	/*姓名*/
	name: string;
	/*性别

1 = 男

2 = 女*/
	sex: AT_SexType;
	/*生日类型(农历，公历)

1 = 公历

2 = 农历*/
	birthdayType: AT_BirthdayType;
	/*出生日期*/
	dateOfBirth: string;
	/*身份证号*/
	idCard: string;
	/*身份证效期*/
	idCardValid?: string;
	/*省*/
	provinceId: number;
	/*市*/
	cityId: number;
	/*区县*/
	countyId: number;
	/*民族*/
	nation: string;
	/*学历

1 = 初中以下

2 = 高中或中专

3 = 大专

4 = 本科

5 = 硕士

6 = 博士及以上

7 = 其他*/
	education: AT_EducationType;
	/*毕业院校*/
	school: string;
	/*专业*/
	specialty: string;
	/*婚姻状况

1 = 未婚

2 = 已婚*/
	marital?: AT_MaritalStatus;
	/*政治面貌*/
	politics: string;
	/*当前居住地*/
	residence?: string;
	/*电话号码*/
	phone: string;
	/*其他电话*/
	spareMobile?: string;
	/*短码*/
	shortCode?: string;
	/*Email*/
	email?: string;
	/*微信*/
	webChat?: string;
	/*QQ*/
	qq?: string;
	/*其他*/
	other?: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
	/*是否享受福利*/
	isWelfare: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*核算部门*/
	bamsDepName?: string;
	/*员工编码*/
	employeeCode?: string;
	/*员工子编码*/
	barCode?: string;
	/*档案状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*级别*/
	levelCode?: string;
	/*级别*/
	levelName?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime?: string;
	/*年龄*/
	age: number;
	/*个人评价*/
	selfEvaluation?: string;
	/*荣誉*/
	honor?: string;
	/*入职日期*/
	inductionDate?: string;
	/*实习日期*/
	fieldworkDate?: string;
	/*试用日期*/
	tryoutDate?: string;
	/*转正日期*/
	formalDate?: string;
	/*离职日期*/
	resignDate?: string;
	/*录用审批表ID*/
	employId: number;
	/*服务公司*/
	csoCode?: string;
	/*服务公司*/
	csoName?: string;
	/*生日类型：农历，公历

1 = 公历

2 = 农历*/
	readonly birthdayTypeText: AT_BirthdayType;
	/*籍贯拼接*/
	nativePlaceStr?: string;
	/*转正管理状态：实习，试用，已转正

1 = 实习

2 = 试用

3 = 已转正

4 = 离职*/
	staffGrowState?: AT_StaffGrowState;
	/*部门岗位*/
	depPosts?: AT_DepPost[];
	/*家庭信息*/
	familyInfoList?: AT_EntryFamilyInfoModel[];
	/*银行卡*/
	staffBankList?: AT_StaffBankModel[];
	/*附件信息*/
	inductionAttachmentList?: AT_InductionAttachmentModel[];
	/*时间日志*/
	staffDetailsTimeLogList?: AT_StaffDetailsTimeLogModel[];
}

export declare interface AT_StaffGrowAttachmentModel {
	/*员工编码*/
	barCode?: string;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_StaffGrowDetailsListModel {
	/*带教明细数据*/
	teachingDetailsList?: AT_TeachingDetailsModel[];
	/*考核记录*/
	checkViewList?: AT_CheckViewModel[];
	/*面谈记录*/
	faceTalkViewList?: AT_FaceTalkViewModel[];
}

export declare interface AT_StaffGrowDetailsModel {
	/*部门*/
	depCode?: string;
	/*部门*/
	dep?: string;
	/*岗位*/
	postCode?: string;
	/*岗位*/
	post?: string;
	/*姓名*/
	name?: string;
	/*开始实习日期*/
	fieldworkDate?: string;
	/*实习期限：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	internshipTerm?: AT_PeriodType;
	/*实习期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly internshipTermText?: AT_PeriodType;
	/*开始试用日期*/
	tryoutDate?: string;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm?: AT_PeriodType;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly tryoutTermText?: AT_PeriodType;
	/*转正日期*/
	officialDate?: string;
	/*带教责任人*/
	dutyUser?: string;
	/*试用部门*/
	tryoutDepCode?: string;
	/*试用部门*/
	tryoutDep?: string;
	/*试用岗位*/
	tryoutPostCode?: string;
	/*试用岗位*/
	tryoutPost?: string;
	/*转正管理详情集合数据*/
	staffGrowDetailsList?: AT_StaffGrowDetailsListModel;
}

export declare interface AT_StaffGrowPageModel {
	/*Id*/
	id: number;
	/*员工编码*/
	barCode?: string;
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
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText?: AT_FlowListStateEnum;
	/*状态：实习，试用，已转正

1 = 实习

2 = 试用

3 = 已转正

4 = 离职*/
	state?: AT_StaffGrowState;
	/*状态：实习，试用，已转正

1 = 实习

2 = 试用

3 = 已转正

4 = 离职*/
	readonly stateText?: AT_StaffGrowState;
	/*部门Code*/
	depCode?: string;
	/*部门*/
	dep?: string;
	/*岗位Code*/
	postCode?: string;
	/*岗位*/
	post?: string;
	/*实习部门*/
	fieldworkDepCode?: string;
	/*实习部门*/
	fieldworkDep?: string;
	/*实习岗位*/
	fieldworkPostCode?: string;
	/*实习岗位*/
	fieldworkPost?: string;
	/*试用部门*/
	tryoutDepCode?: string;
	/*试用部门*/
	tryoutDep?: string;
	/*试用岗位*/
	tryoutPostCode?: string;
	/*试用岗位*/
	tryoutPost?: string;
	/*姓名*/
	name?: string;
	/*开始实习日期*/
	fieldworkDate?: string;
	/*实习期限：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	internshipTerm?: AT_PeriodType;
	/*实习期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly internshipTermText?: AT_PeriodType;
	/*开始试用日期*/
	tryoutDate?: string;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	tryoutTerm?: AT_PeriodType;
	/*试用期限：1个月，2个月，3个月，6个月；

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	readonly tryoutTermText?: AT_PeriodType;
	/*转正日期*/
	officialDate?: string;
	/*带教责任人*/
	dutyUser?: string;
	/*级别*/
	levelCode?: string;
	/*级别*/
	levelName?: string;
}

export declare interface AT_StaffGrowPageModelIEnumerableInt32Tuple {
	item1?: AT_StaffGrowPageModel[];
	item2: number;
}

export declare interface AT_StaffGrowQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态*/
	state?: AT_QueryList;
	/*实习部门*/
	fieldworkDep?: AT_QueryString;
	/*实习岗位*/
	fieldworkPost?: AT_QueryString;
	/*试用部门*/
	tryoutDep?: AT_QueryString;
	/*试用岗位*/
	tryoutPost?: AT_QueryString;
	/*员工姓名*/
	name?: AT_QueryString;
	/*带教责任人*/
	teachDuty?: AT_QueryString;
}

export enum AT_StaffGrowState {
	实习 = 1,
	试用 = 2,
	已转正 = 3,
	离职 = 4,
}

export declare interface AT_StaffHonorModel {
	/*员工编码*/
	barCode?: string;
	/*荣誉*/
	honor: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export declare interface AT_StaffInfo {
	/*姓名*/
	name?: string;
	/*员工编码*/
	barCode?: string;
	/*员工编码*/
	employeeCode?: string;
	/*工作状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*工作状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*是否置灰*/
	isGray?: number;
}

export declare interface AT_StaffInfoSimpleModel {
	/*姓名*/
	name?: string;
	/*员工编码*/
	barCode?: string;
	/*级别编码*/
	levelCode?: string;
	/*是否发福利*/
	isWelfare?: number;
	/*默认部门Code*/
	defaultDepCode?: string;
	/*默认部门*/
	defaultDepName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*默认岗位Code*/
	defaultPostCode?: string;
	/*默认岗位*/
	defaultPostName?: string;
	/*生日*/
	birthday?: string;
	/*性别

1 = 男

2 = 女*/
	sex?: AT_SexType;
	/*性别

1 = 男

2 = 女*/
	readonly sexText?: AT_SexType;
	/*业务核算部门*/
	bamsDepCode?: string;
	/*业务核算部门名称*/
	bamsDepName?: string;
}

export declare interface AT_StaffModifyRecordPageModel {
	/*自增ID*/
	id: number;
	/*姓名*/
	name?: string;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus?: AT_WorkStatus;
	/*在职状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workState?: AT_WorkStatus;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*修改内容*/
	content?: string;
	/*新增人*/
	addUser?: string;
	/*新增时间*/
	addTime?: string;
}

export declare interface AT_StaffModifyRecordPageModelIEnumerableInt32Tuple {
	item1?: AT_StaffModifyRecordPageModel[];
	item2: number;
}

export declare interface AT_StaffModifyRecordQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*修改时间*/
	addTime?: AT_QueryDateTime;
}

export declare interface AT_StaffPostIsDefaultModel {
	/*岗位ID*/
	id: number;
	/*岗位Code*/
	postCode?: string;
	/*所属岗位*/
	postName?: string;
	/*是否默认*/
	isDefault?: number;
}

export declare interface AT_StaffSelfEvaluationModel {
	/*员工编码*/
	barCode?: string;
	/*个人评价*/
	selfEvaluation: string;
	/*修改记录*/
	updateRecordModels?: AT_UpdateRecordModel[];
}

export enum AT_StockStateEnum {
	已入库 = 1,
	未入库 = 2,
}

export declare interface AT_StopRecruitModel {
	/*招聘需求Id*/
	recruitId: number;
	/*停止理由*/
	stopNotes?: string;
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
}

export declare interface AT_SysPageRouteTreeListModel {
	/*Id*/
	id: number;
	/*父级路由Id*/
	parentId: number;
	/*路由名*/
	name?: string;
	/*路由地址*/
	path?: string;
	/*路由标题*/
	title?: string;
	/*组件名*/
	component?: string;
	/*排序*/
	sort: number;
	/*子集*/
	childList?: AT_SysPageRouteTreeListModel[];
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
	isFlow?: number;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
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
	isFlow?: number;
	/*是否有数据通用权限*/
	isCommonAuthorization: number;
	/*弹窗路由id*/
	routeId: number;
}

export enum AT_TalkType {
	实习 = 1,
	试用 = 2,
	日常 = 3,
}

export declare interface AT_TaxCreditApplyModel {
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*部门编码*/
	depCode: string;
	/*抵扣年份*/
	taxCreditYear: number;
	/*个税抵扣明细*/
	taxCreditDetails?: AT_TaxCreditDetailsModel[];
	/*个税抵扣附件*/
	taxCreditAttachments?: AT_TaxCreditAttachmentModel[];
}

export declare interface AT_TaxCreditApplyPageModel {
	/*Id*/
	id: number;
	/*抵扣年份*/
	taxCreditYear: number;
	/*部门*/
	depName?: string;
	/*姓名*/
	barName?: string;
	/*扣除项目*/
	subjectName?: string;
	/*扣除金额*/
	taxCreditMoney?: string;
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
}

export declare interface AT_TaxCreditApplyPageModelIEnumerableInt32Tuple {
	item1?: AT_TaxCreditApplyPageModel[];
	item2: number;
}

export declare interface AT_TaxCreditApplyQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*抵扣年份*/
	taxCreditYear?: AT_QueryInt;
	/*扣除项目*/
	subjectId?: AT_QueryList;
}

export declare interface AT_TaxCreditApplyViewModel {
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*抵扣年份*/
	taxCreditYear: number;
	/*个税抵扣明细*/
	taxCreditDetails?: AT_TaxCreditDetailsModel[];
	/*个税抵扣附件*/
	taxCreditAttachments?: AT_TaxCreditAttachmentModel[];
	/*Id*/
	id: number;
	/*流程Id*/
	flowId: number;
	/*申请人文本*/
	barName?: string;
	/*申请人部门文本*/
	depName?: string;
}

export declare interface AT_TaxCreditAttachmentModel {
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
}

export declare interface AT_TaxCreditDetailsModel {
	/*个税抵税项目ID*/
	subjectId: number;
	/*个税抵税项目*/
	subjectName?: string;
	/*抵税金额*/
	taxCreditMoney: number;
}

export declare interface AT_TaxCreditSubjectModel {
	/*自增ID*/
	id: number;
	/*项目名称*/
	subjectName: string;
	/*说明*/
	note?: string;
	/*顺序*/
	sort: number;
}

export declare interface AT_TaxCreditSubjectPageModel {
	/*自增ID*/
	id: number;
	/*项目名称*/
	subjectName?: string;
	/*说明*/
	note?: string;
	/*顺序*/
	sort?: number;
}

export declare interface AT_TaxCreditSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_TaxCreditSubjectPageModel[];
	item2: number;
}

export declare interface AT_TaxCreditSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*项目名称*/
	subjectName?: AT_QueryString;
}

export declare interface AT_TeachTemplateModel {
	/*模板名称*/
	name: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*带教周期：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	period: AT_PeriodType;
	/*带教责任人：员工编码*/
	dutyUser: string;
	/*日志规则：日报，周报，月报

1 = 日报

2 = 周报

3 = 月报*/
	logRule: AT_LogRule;
	/*带教目标*/
	target: string;
	/*带教方案安排*/
	teachTemplatePlanList?: AT_TeachTemplatePlanModel[];
}

export declare interface AT_TeachTemplatePageModel {
	/*带教方案模板id*/
	id: number;
	/*模板名称*/
	name?: string;
	/*部门*/
	dep?: string;
	/*岗位*/
	post?: string;
	/*带教目标*/
	target?: string;
	/*更新人*/
	updUser?: string;
	/*更新时间*/
	updTime: string;
}

export declare interface AT_TeachTemplatePageModelIEnumerableInt32Tuple {
	item1?: AT_TeachTemplatePageModel[];
	item2: number;
}

export declare interface AT_TeachTemplatePlanAttachmenModel {
	/*带教方案模板带教安排表ID（还原用）*/
	teachTemplatePlanId: number;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_TeachTemplatePlanModel {
	/*Id(还原用)*/
	id: number;
	/*带教人*/
	teacher: string;
	/*带教人(数据还原用，传入的时候不用管)*/
	teacherName?: string;
	/*带教部门*/
	depCode: string;
	/*带教部门(数据还原用，传入的时候不用管)*/
	dep?: string;
	/*带教岗位*/
	postCode: string;
	/*带教岗位(数据还原用，传入的时候不用管)*/
	post?: string;
	/*带教内容*/
	content: string;
	/*考核方式*/
	method: string;
	/*达标要求*/
	demand: string;
	/*带教方案模板方案安排附件*/
	teachTemplatePlanAttachmentList?: AT_TeachTemplatePlanAttachmenModel[];
}

export declare interface AT_TeachTemplateQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*模板名称*/
	name?: AT_QueryString;
	/*部门*/
	dep?: AT_QueryString;
	/*岗位*/
	post?: AT_QueryString;
	/*更新人*/
	updUser?: AT_QueryString;
	/*更新时间*/
	updTime?: AT_QueryDateTime;
}

export declare interface AT_TeachTemplateViewModel {
	/*模板名称*/
	name: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*带教周期：1个月，2个月，3个月，6个月

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	period: AT_PeriodType;
	/*带教责任人：员工编码*/
	dutyUser: string;
	/*日志规则：日报，周报，月报

1 = 日报

2 = 周报

3 = 月报*/
	logRule: AT_LogRule;
	/*带教目标*/
	target: string;
	/*带教方案安排*/
	teachTemplatePlanList?: AT_TeachTemplatePlanModel[];
	/*Id*/
	id: number;
	/*部门*/
	dep?: string;
	/*岗位*/
	post?: string;
	/*带教责任人*/
	dutyUserName?: string;
}

export declare interface AT_TeachingDetailsAttachmentModel {
	/*带教明细表ID(还原用)*/
	teachingDetailsId: number;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export declare interface AT_TeachingDetailsModel {
	/*ID(还原用)*/
	id: number;
	/*带教人*/
	toTeachUser: string;
	/*带教人(数据还原用，传入的时候不用管)*/
	toTeachUserName?: string;
	/*带教部门*/
	toTeachDep: string;
	/*带教部门(数据还原用，传入的时候不用管)*/
	toTeachDepName?: string;
	/*带教岗位*/
	toTeachPost: string;
	/*带教岗位(数据还原用，传入的时候不用管)*/
	toTeachPostName?: string;
	/*计划开始日期*/
	planStartDate: string;
	/*计划结束日期*/
	planEndDate: string;
	/*带教内容*/
	content: string;
	/*考核方式*/
	method: string;
	/*达标要求*/
	demand: string;
	/*带教状态 (数据还原用，传入的时候不用管)

1 = 未开始

2 = 已开始

3 = 已结束*/
	state?: AT_TeachingDetailsState;
	/*带教状态 (数据还原用，传入的时候不用管)

1 = 未开始

2 = 已开始

3 = 已结束*/
	readonly stateText?: AT_TeachingDetailsState;
	/*带教明细附件*/
	teachingDetailsAttachmentList?: AT_TeachingDetailsAttachmentModel[];
}

export declare interface AT_TeachingDetailsPageModel {
	/*带教明细Id*/
	id: number;
	/*带教明细状态

1 = 未开始

2 = 已开始

3 = 已结束*/
	state?: AT_TeachingDetailsState;
	/*带教明细状态

1 = 未开始

2 = 已开始

3 = 已结束*/
	readonly stateText?: AT_TeachingDetailsState;
	/*类型

1 = 实习

2 = 试用

3 = 日常*/
	type?: AT_TeachingType;
	/*类型

1 = 实习

2 = 试用

3 = 日常*/
	readonly typeText?: AT_TeachingType;
	/*被带教人*/
	beTeachUserCode?: string;
	/*被带教人*/
	beTeachUser?: string;
	/*被带教人部门*/
	beTeachDepCode?: string;
	/*被带教人部门*/
	beTeachDep?: string;
	/*被带教人岗位*/
	beTeachPostCode?: string;
	/*被带教人岗位*/
	beTeachPost?: string;
	/*带教人*/
	toTeachUser?: string;
	/*带教部门*/
	toTeachDep?: string;
	/*带教岗位*/
	toTeachPost?: string;
	/*计划开始日期*/
	planStartDate: string;
	/*计划结束日期*/
	planEndDate: string;
	/*实际开始日期*/
	actualStartDate?: string;
	/*实际结束日期*/
	actualEndDate?: string;
	/*带教内容*/
	content?: string;
	/*考核方式*/
	method?: string;
	/*达标要求*/
	demand?: string;
}

export declare interface AT_TeachingDetailsPageModelIEnumerableInt32Tuple {
	item1?: AT_TeachingDetailsPageModel[];
	item2: number;
}

export declare interface AT_TeachingDetailsQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*带教状态*/
	state?: AT_QueryList;
	/*类型*/
	type?: AT_QueryList;
	/*被带教人*/
	beTeachUser?: AT_QueryString;
	/*被带教人部门*/
	beTeachDep?: AT_QueryString;
	/*被带教人岗位*/
	beTeachPost?: AT_QueryString;
	/*带教人*/
	toTeachUser?: AT_QueryString;
	/*带教部门*/
	toTeachDep?: AT_QueryString;
	/*带教岗位*/
	toTeachPost?: AT_QueryString;
	/*计划开始日期*/
	planStartDate?: AT_QueryDateTime;
	/*计划结束日期*/
	planEndDate?: AT_QueryDateTime;
	/*实际开始日期*/
	actualStartDate?: AT_QueryDateTime;
	/*实际结束日期*/
	actualEndDate?: AT_QueryDateTime;
}

export enum AT_TeachingDetailsState {
	未开始 = 1,
	已开始 = 2,
	已结束 = 3,
}

export declare interface AT_TeachingModel {
	/*带教类型：实习，试用，日常

1 = 实习

2 = 试用

3 = 日常*/
	type: AT_TeachingType;
	/*被带教人*/
	beTeachUser: string;
	/*被带教人部门*/
	beTeachDep: string;
	/*被带教人岗位*/
	beTeachPost: string;
	/*带教期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	teachTerm: AT_PeriodType;
	/*带教责任人*/
	teachDuty: string;
	/*人事责任人*/
	hrDuty: string;
	/*日志规则：日报，周报，月报

1 = 日报

2 = 周报

3 = 月报*/
	logRule: AT_LogRule;
	/*带教明细*/
	teachingDetailsList?: AT_TeachingDetailsModel[];
}

export declare interface AT_TeachingPageModel {
	/*自增ID*/
	id: number;
	/*类型

1 = 实习

2 = 试用

3 = 日常*/
	type?: AT_TeachingType;
	/*类型文本

1 = 实习

2 = 试用

3 = 日常*/
	readonly typeText?: AT_TeachingType;
	/*被带教人*/
	beTeachUser?: string;
	/*被带教人部门*/
	beTeachDep?: string;
	/*被带教人岗位*/
	beTeachPost?: string;
	/*带教期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	teachTerm?: AT_PeriodType;
	/*带教责任人*/
	teachDutyName?: string;
	/*人事责任人*/
	hrDutyName?: string;
	/*日志规则：日报，周报，月报

1 = 日报

2 = 周报

3 = 月报*/
	logRule?: AT_LogRule;
}

export declare interface AT_TeachingPageModelIEnumerableInt32Tuple {
	item1?: AT_TeachingPageModel[];
	item2: number;
}

export declare interface AT_TeachingQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*类型*/
	type?: AT_QueryList;
	/*被带教人*/
	beTeachUser?: AT_QueryString;
	/*部门*/
	beTeachDep?: AT_QueryString;
	/*岗位*/
	beTeachPost?: AT_QueryString;
}

export enum AT_TeachingType {
	实习 = 1,
	试用 = 2,
	日常 = 3,
}

export declare interface AT_TeachingViewModel {
	/*带教类型：实习，试用，日常

1 = 实习

2 = 试用

3 = 日常*/
	type: AT_TeachingType;
	/*被带教人*/
	beTeachUser: string;
	/*被带教人部门*/
	beTeachDep: string;
	/*被带教人岗位*/
	beTeachPost: string;
	/*带教期限

1 = 一个月

2 = 二个月

3 = 三个月

4 = 六个月

5 = 九个月

6 = 十二个月*/
	teachTerm: AT_PeriodType;
	/*带教责任人*/
	teachDuty: string;
	/*人事责任人*/
	hrDuty: string;
	/*日志规则：日报，周报，月报

1 = 日报

2 = 周报

3 = 月报*/
	logRule: AT_LogRule;
	/*带教明细*/
	teachingDetailsList?: AT_TeachingDetailsModel[];
	/*ID*/
	id: number;
	/*被带教人部门名称*/
	beTeachUserName?: string;
	/*被带教人部门名称*/
	beTeachDepName?: string;
	/*被带教人岗位名称*/
	beTeachPostName?: string;
	/*带教责任人*/
	teachDutyName?: string;
	/*人事责任人*/
	hrDutyName?: string;
	/*考核数据*/
	checkList?: AT_CheckViewModel[];
}

export declare interface AT_TimelineModel {
	/*自增ID*/
	id: number;
	/*简历共享Id*/
	resumeHoldId: number;
	/*简历Id*/
	resumeId: number;
	/*类型：前端根据类型弹出指定弹窗*/
	type?: AT_TimelineType;
	/*标题*/
	title?: string;
	/*副标题*/
	minorTitle?: string;
	/*key*/
	tableKey?: number;
	/*内容*/
	content?: string;
	/*时间*/
	time: string;
}

export enum AT_TimelineType {}

export declare interface AT_TotalMoneyModel {
	/*社保总额*/
	totalInsuranceMoney?: number;
	/*住房公积金总额*/
	totalHouseFundMoney?: number;
	/*企业社保金额*/
	enterpriseInsuranceMoney?: number;
	/*个人社保金额*/
	personalInsuranceMoney?: number;
	/*企业公积金金额*/
	enterpriseHouseFundMoney?: number;
	/*个人公积金金额*/
	personalHouseFundMoney?: number;
	/*企业其他金额*/
	enterpriseOtherMoney: number;
	/*个人其他金额*/
	personalOtherMoney: number;
	/*其他总额*/
	totalOtherMoney?: number;
	/*合计*/
	totalMoney?: number;
	/*参保明细*/
	socialInsuranceDetails?: AT_SocialInsuranceDetailsModel[];
}

export declare interface AT_TrademarkModel {
	/*商标样稿*/
	sample?: string;
	/*商标类别*/
	category?: string;
	/*注册号*/
	regNo?: string;
	/*申请日期*/
	applyDate?: string;
	/*注册日期*/
	regDate?: string;
	/*截止日期*/
	endDate?: string;
	/*注册人地址*/
	regAddress?: string;
	/*商品/服务*/
	goodService?: string;
	/*商标动态：无效，有效

0 = 无效

1 = 有效*/
	trend?: AT_TrademarkTrend;
	/*商标所有人*/
	owner?: string;
	/*备注*/
	note?: string;
}

export declare interface AT_TrademarkPageModel {
	/*自增ID*/
	id: number;
	/*商标样稿*/
	sample?: string;
	/*商标类别*/
	category?: string;
	/*注册号*/
	regNo?: string;
	/*申请日期*/
	applyDate?: string;
	/*注册日期*/
	regDate?: string;
	/*截止日期*/
	endDate?: string;
	/*注册人地址*/
	regAddress?: string;
	/*商品/服务*/
	goodService?: string;
	/*商标动态：无效，有效

0 = 无效

1 = 有效*/
	trend: AT_TrademarkTrend;
	/*商标动态

0 = 无效

1 = 有效*/
	readonly trendText: AT_TrademarkTrend;
	/*备注*/
	note?: string;
	/*商标所有人*/
	owner?: string;
}

export declare interface AT_TrademarkPageModelIEnumerableInt32Tuple {
	item1?: AT_TrademarkPageModel[];
	item2: number;
}

export declare interface AT_TrademarkQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*商标样稿*/
	sample?: AT_QueryString;
	/*商标类别*/
	category?: AT_QueryString;
	/*注册号*/
	regNo?: AT_QueryString;
	/*申请日期*/
	applyDate?: AT_QueryDateTime;
	/*注册日期*/
	regDate?: AT_QueryDateTime;
	/*截止日期*/
	endDate?: AT_QueryDateTime;
	/*商标动态：无效，有效*/
	trend?: AT_QueryList;
	/*商标所有人*/
	owner?: AT_QueryString;
	/*备注*/
	note?: AT_QueryString;
}

export enum AT_TrademarkTrend {
	无效 = 0,
	有效 = 1,
}

export declare interface AT_TrademarkViewModel {
	/*商标样稿*/
	sample?: string;
	/*商标类别*/
	category?: string;
	/*注册号*/
	regNo?: string;
	/*申请日期*/
	applyDate?: string;
	/*注册日期*/
	regDate?: string;
	/*截止日期*/
	endDate?: string;
	/*注册人地址*/
	regAddress?: string;
	/*商品/服务*/
	goodService?: string;
	/*商标动态：无效，有效

0 = 无效

1 = 有效*/
	trend?: AT_TrademarkTrend;
	/*商标所有人*/
	owner?: string;
	/*备注*/
	note?: string;
	/*自增id*/
	id: number;
}

export declare interface AT_TransferAttachmentModel {
	/*自增ID*/
	id: number;
	/*调动主表ID*/
	transferId: number;
	/*附件名称*/
	name?: string;
	/*附件地址*/
	path?: string;
	/*附件图标*/
	icon?: string;
	/*文件后缀*/
	ext?: string;
	/*企业编码*/
	firmCode?: string;
	/*有效性(0:无效；1:有效)*/
	valid: number;
}

export declare interface AT_TransferByBarCodeModel {
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	type: AT_TransferTypeEnum;
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	readonly typeText: AT_TransferTypeEnum;
	/*调出部门：部门编码*/
	fromDep?: string;
	/*调出部门：部门名称*/
	fromDepName?: string;
	/*调出岗位：岗位编码*/
	fromPost?: string;
	/*调出岗位：岗位名称*/
	fromPostName?: string;
	/*调入部门：部门编码*/
	toDep?: string;
	/*调入部门：部门名称*/
	toDepName?: string;
	/*调入岗位：岗位编码*/
	toPost?: string;
	/*调入岗位：岗位名称*/
	toPostName?: string;
	/*交接人：员工编码*/
	joinUser?: string;
	/*交接人：员工名称*/
	joinUserName?: string;
	/*生效日期*/
	moveDate: string;
}

export declare interface AT_TransferModel {
	/*调动人：员工编码*/
	transferUser: string;
	/*调动人：员工编码*/
	transferUserName: string;
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	type: AT_TransferTypeEnum;
	/*调出部门：部门编码*/
	fromDep?: string;
	/*调出岗位：岗位编码*/
	fromPost?: string;
	/*调入核算部门*/
	toBamsDepCode?: string;
	/*调入部门：部门编码*/
	toDep: string;
	/*调入岗位：岗位编码*/
	toPost: string;
	/*交接人：员工编码*/
	joinUser: string;
	/*交接说明*/
	joinNote: string;
	/*调动说明*/
	moveNote: string;
	/*生效日期*/
	moveDate: string;
	/*调动弹窗KEY*/
	popupKey?: string;
	/*调动附件*/
	transferAttachments?: AT_TransferAttachmentModel[];
}

export declare interface AT_TransferPageModel {
	/*Id*/
	id: number;
	/*流程状态

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	flowState: AT_FlowListStateEnum;
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*调动人：员工编码*/
	transferUser?: string;
	/*调动人：员工名称*/
	transferUserName?: string;
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	type: AT_TransferTypeEnum;
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	readonly typeText: AT_TransferTypeEnum;
	/*调出部门：部门编码*/
	fromDep?: string;
	/*调出部门：部门名称*/
	fromDepName?: string;
	/*调出岗位：岗位编码*/
	fromPost?: string;
	/*调出岗位：岗位名称*/
	fromPostName?: string;
	/*调入部门：部门编码*/
	toDep?: string;
	/*调入部门：部门名称*/
	toDepName?: string;
	/*调入岗位：岗位编码*/
	toPost?: string;
	/*调入岗位：岗位名称*/
	toPostName?: string;
	/*交接人：员工编码*/
	joinUser?: string;
	/*交接人：员工名称*/
	joinUserName?: string;
	/*交接说明*/
	joinNote?: string;
	/*调动说明*/
	moveNote?: string;
	/*生效日期*/
	moveDate: string;
	/*流程ID*/
	flowId: number;
	/*新增人*/
	addUserName?: string;
	/*新增时间*/
	addTime?: string;
}

export declare interface AT_TransferPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferPageModel[];
	item2: number;
}

export declare interface AT_TransferQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*调动人*/
	transferUserName?: AT_QueryString;
	/*调动类型*/
	type?: AT_QueryList;
	/*调出部门*/
	fromDep?: AT_QueryString;
	/*调出岗位*/
	fromPost?: AT_QueryString;
	/*调入部门*/
	toDep?: AT_QueryString;
	/*调入岗位*/
	toPost?: AT_QueryString;
	/*生效时间*/
	moveDate?: AT_QueryDateTime;
	/*交接人：员工名称*/
	joinUserName?: AT_QueryString;
	/*调动说明*/
	moveNote?: AT_QueryString;
}

export declare interface AT_TransferStaffModel {
	/*员工编码：企业编码+员工主编码*/
	barCode: string;
	/*调出企业：企业编码*/
	outFirmCode: string;
	/*调出级别*/
	outLevelCode?: string;
	/*调出部门*/
	outDepCode: string;
	/*调出岗位*/
	outPostCode: string;
	/*调入企业*/
	inFirmCode: string;
	/*调入部门*/
	inDepCode: string;
	/*调入岗位*/
	inPostCode: string;
	/*调入级别*/
	inLevelCode: string;
	/*调入入职时间*/
	inductionDate: string;
	/*调入是否享受福利：否，是*/
	isWelfare: number;
	/*调拨原因*/
	inNotes?: string;
}

export declare interface AT_TransferStaffPageModel {
	/*自增ID*/
	id: number;
	/*员工编码：企业编码+员工主编码*/
	barCode?: string;
	/*员工*/
	barName?: string;
	/*调出企业*/
	outFirmName?: string;
	/*调出级别*/
	outLevelName?: string;
	/*调出部门*/
	outDepName?: string;
	/*调出岗位*/
	outPostName?: string;
	/*调入企业*/
	inFirmName?: string;
	/*调入部门*/
	inDepName?: string;
	/*调入岗位*/
	inPostName?: string;
	/*调入级别*/
	inLevelName?: string;
	/*调入入职时间*/
	inductionDate?: string;
	/*调入是否享受福利：否，是*/
	isWelfare?: number;
	/*是否发放薪资：否，是*/
	isSalary?: number;
	/*调拨原因*/
	inNotes?: string;
	/*新增人*/
	addUserName?: string;
	/*新增时间*/
	addTime?: string;
}

export declare interface AT_TransferStaffPageModelIEnumerableInt32Tuple {
	item1?: AT_TransferStaffPageModel[];
	item2: number;
}

export declare interface AT_TransferStaffQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*员工编码*/
	barName?: AT_QueryString;
}

export declare interface AT_TransferStaffViewModel {
	/*员工编码：企业编码+员工主编码*/
	barCode: string;
	/*调出企业：企业编码*/
	outFirmCode: string;
	/*调出级别*/
	outLevelCode?: string;
	/*调出部门*/
	outDepCode: string;
	/*调出岗位*/
	outPostCode: string;
	/*调入企业*/
	inFirmCode: string;
	/*调入部门*/
	inDepCode: string;
	/*调入岗位*/
	inPostCode: string;
	/*调入级别*/
	inLevelCode: string;
	/*调入入职时间*/
	inductionDate: string;
	/*调入是否享受福利：否，是*/
	isWelfare: number;
	/*调拨原因*/
	inNotes?: string;
	/*姓名*/
	barName?: string;
	/*调出企业*/
	outFirmName?: string;
	/*调出级别*/
	outLevelName?: string;
	/*调出部门*/
	outDepName?: string;
	/*调出岗位*/
	outPostName?: string;
	/*调入企业*/
	inFirmName?: string;
	/*调入部门*/
	inDepName?: string;
	/*调入岗位*/
	inPostName?: string;
	/*调入级别*/
	inLevelName?: string;
}

export enum AT_TransferTypeEnum {
	转岗 = 1,
	兼任 = 2,
}

export declare interface AT_TransferViewModel {
	/*调动人：员工编码*/
	transferUser: string;
	/*调动类型：转岗，兼任

1 = 转岗

2 = 兼任*/
	type: AT_TransferTypeEnum;
	/*调出部门：部门编码*/
	fromDep?: string;
	/*调出岗位：岗位编码*/
	fromPost?: string;
	/*调入核算部门*/
	toBamsDepCode?: string;
	/*调入部门：部门编码*/
	toDep: string;
	/*调入岗位：岗位编码*/
	toPost: string;
	/*交接人：员工编码*/
	joinUser: string;
	/*交接说明*/
	joinNote: string;
	/*调动说明*/
	moveNote: string;
	/*生效日期*/
	moveDate: string;
	/*调动弹窗KEY*/
	popupKey?: string;
	/*调动附件*/
	transferAttachments?: AT_TransferAttachmentModel[];
	/*主键*/
	id: number;
	/*调动人文本*/
	transferUserName?: string;
	/*调出部门文本*/
	fromDepName?: string;
	/*调出岗位文本*/
	fromPostName?: string;
	/*调入部门文本*/
	toDepName?: string;
	/*调入岗位文本*/
	toPostName?: string;
	/*交接人文本*/
	joinUserName?: string;
}

export declare interface AT_TreeList {
	应发薪资?: string[];
	应扣薪资?: string[];
	个人社保?: string[];
	公司社保?: string[];
	个人公积金?: string[];
	公司公积金?: string[];
}

export declare interface AT_TryoutPostModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode?: string;
	/*试用部门*/
	tryoutDep?: string;
	/*试用岗位*/
	tryoutPost?: string;
}

export declare interface AT_TryoutUpModel {
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*级别编码*/
	levelCode: string;
	/*转正日期*/
	officialDate?: string;
	/*正式薪资*/
	officialSalary: number;
	/*薪资说明*/
	salaryNote: string;
	/*申请描述*/
	applyNote?: string;
	/*转正弹窗KEY*/
	popupKey?: string;
	/*转正附件*/
	staffGrowAttachmentModels?: AT_StaffGrowAttachmentModel[];
}

export declare interface AT_TryoutUpViewModel {
	/*员工编码*/
	barCode: string;
	/*员工编码*/
	barName: string;
	/*级别编码*/
	levelCode: string;
	/*转正日期*/
	officialDate?: string;
	/*正式薪资*/
	officialSalary: number;
	/*薪资说明*/
	salaryNote: string;
	/*申请描述*/
	applyNote?: string;
	/*转正弹窗KEY*/
	popupKey?: string;
	/*转正附件*/
	staffGrowAttachmentModels?: AT_StaffGrowAttachmentModel[];
	/*流程Id*/
	flowId: number;
	/*员工名称*/
	name?: string;
	/*部门Code*/
	depCode?: string;
	/*部门*/
	dep?: string;
	/*岗位Code*/
	postCode?: string;
	/*岗位*/
	post?: string;
	/*级别*/
	level?: string;
}

export enum AT_TurnStateEnum {
	已转 = 1,
	未转 = 2,
}

export declare interface AT_UnemployedModel {
	/*入职id*/
	id: number;
	/*未入职说明*/
	noNote?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey: string;
}

export declare interface AT_UpDateHomePageRollPicModel {
	homePageRollPicModelList?: AT_HomePageRollPicViewModel[];
}

export declare interface AT_UpdateAssetManageModel {
	/*固资管理Id*/
	id: number;
	/*固资台账明细ID*/
	assetLedgerDetailsId: number;
	/*固资台账ID*/
	assetLedgerId: number;
	/*固资定义ID*/
	assetDefineId: number;
	/*固资名称*/
	categoryName?: string;
	/*状态：待分配，已分配，已报废，盘亏

1 = 待分配

2 = 已分配

3 = 已报废

4 = 盘亏

5 = 已出租*/
	state: AT_AssetManageState;
	/*资产编号：固资定义表类别编码+累计数*/
	assetNumber?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*是否已贴标：否，是*/
	isLabel: number;
	/*存放地点*/
	savePlace?: string;
	/*资产所属公司*/
	assetCompanyId: number;
	/*资产所属公司*/
	companyName?: string;
	/*发票类型：专票，普票

1 = 专票

2 = 普票*/
	invoiceType?: AT_InvoiceType;
	/*开票日期*/
	invoiceDate?: string;
	/*发票号*/
	invoiceNo?: string;
	/*使用人*/
	useUser?: string;
	/*使用部门*/
	depCode?: string;
	/*使用人*/
	useUserName?: string;
	/*使用部门*/
	depCodeName?: string;
	/*购置人*/
	buyUserName?: string;
	/*购置日期*/
	buyDate?: string;
	/*不含税金额*/
	notIncludTaxMoney?: number;
	/*含税金额*/
	includTaxMoney?: number;
	/*累计折旧期间*/
	totalDepreciaMonth?: number;
	/*月折旧额*/
	monthDepreciaMoney?: number;
	/*使用年限*/
	useLife?: number;
	/*累计折旧金额*/
	totalDepreciaMoney?: number;
	/*净值*/
	netWorth?: number;
	/*保修期(年)*/
	warranty?: number;
	/*备注*/
	note?: string;
	/*发票抬头*/
	invoiceHeader?: string;
	/*供应商*/
	supplierName?: string;
	/*出租方编码*/
	assetLessorCode?: string;
	/*出租方（还原用）*/
	lessor?: string;
	/*出租负责人（还原用）*/
	lessorHead?: string;
}

export declare interface AT_UpdateCostInvoiceCompanyModel {
	/*员工唯一码：企业编码+员工主编码*/
	barCode?: string;
	/*开票公司*/
	invoiceCompany?: string;
	/*税号*/
	taxNumber?: string;
	/*弹窗KEY：前端根据KEY指定弹窗*/
	popupKey?: string;
}

export declare interface AT_UpdateDepSort {
	/*Id*/
	id: number;
	/*排序*/
	sort: number;
}

export declare interface AT_UpdateRecordModel {
	/*旧值*/
	oldValue?: string;
	/*新值*/
	newValue?: string;
	/*字段名称*/
	columnName?: string;
}

export declare interface AT_UserConfigModel {
	/*页面类型(1页面,2弹窗)*/
	pageType: number;
	/*页面标识key*/
	pageKey?: string;
	/*页面配置*/
	pageSetting?: string;
	/*操作类型*/
	optionType?: string;
}

export declare interface AT_UserConfigViewModel {
	/*页面类型(1页面,2弹窗)*/
	pageType: number;
	/*页面标识key*/
	pageKey?: string;
	/*页面配置*/
	pageSetting?: string;
	/*操作类型*/
	optionType?: string;
	/*Id*/
	id: number;
}

export declare interface AT_UserFirm {
	/*企业编码*/
	firmCode?: string;
	/*企业名称*/
	firmName?: string;
	/*企业简称*/
	firmNameAbb?: string;
	/*是否是企业管理员*/
	isFirmAdmini: number;
	/*是否是超级管理员*/
	isSuperAdmini: number;
}

export declare interface AT_UserPageModel {
	/*工作状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	workStatus: AT_WorkStatus;
	/*工作状态

1 = 实习

2 = 试用

3 = 正式

4 = 离职*/
	readonly workStatusText: AT_WorkStatus;
	/*部门类型*/
	depTypeName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*岗位*/
	postName?: string;
	/*岗位*/
	postCode?: string;
	/*级别*/
	levelName?: string;
	/*员工编码*/
	barCode?: string;
	/*姓名*/
	name?: string;
	/*手机号*/
	phone?: string;
	/*短码*/
	shortCode?: string;
	/*Email*/
	email?: string;
	/*QQ*/
	qq?: string;
	/*WebChat*/
	webChat?: string;
	/*默认部门Code*/
	isDefaultDepCode?: string;
	/*默认部门*/
	isDefaultDepName?: string;
}

export declare interface AT_UserPageModelIEnumerableInt32Tuple {
	item1?: AT_UserPageModel[];
	item2: number;
}

export declare interface AT_UserQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*岗位*/
	postName?: AT_QueryString;
	/*级别编码：2040*/
	levelCodes?: AT_QueryList;
	/*级别*/
	levelName?: AT_QueryString;
	/*姓名*/
	name?: AT_QueryString;
	/*工作状态*/
	workStatus?: AT_QueryList;
	/*一级部门*/
	oneDepName?: AT_QueryString;
	/*二级部门*/
	twoDepName?: AT_QueryString;
	/*三级部门*/
	threeDepName?: AT_QueryString;
	/*四级部门*/
	fourDepName?: AT_QueryString;
	/*部门及下级部门编码(后端数据处理)*/
	depCodes?: AT_QueryList;
}

export declare interface AT_VehicleApplyModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*车牌号*/
	carNumber?: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*起点*/
	startPoint: string;
	/*终点*/
	endPoint: string;
	/*司机*/
	driver: string;
	/*申请说明*/
	applyNote: string;
	/*流程ID*/
	flowId: number;
}

export declare interface AT_VehicleApplyViewModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*车牌号*/
	carNumber?: string;
	/*开始时间*/
	startTime: string;
	/*结束时间*/
	endTime: string;
	/*起点*/
	startPoint: string;
	/*终点*/
	endPoint: string;
	/*司机*/
	driver: string;
	/*申请说明*/
	applyNote: string;
	/*流程ID*/
	flowId: number;
	/*自增ID*/
	id: number;
}

export enum AT_VehicleAttachmentFromType {
	车辆保养 = 1,
	车辆维修 = 2,
	购买合同 = 3,
	机动车辆登记证书 = 4,
	行驶证 = 5,
	车辆停用 = 6,
	机动车商业保险保险单 = 7,
	机动车交通事故责任强制保险单 = 8,
	其他组合保险 = 9,
	车辆租赁 = 10,
}

export declare interface AT_VehicleAttachmentModel {
	/*类型

1 = 车辆保养

2 = 车辆维修

3 = 购买合同

4 = 机动车辆登记证书

5 = 行驶证

6 = 车辆停用

7 = 机动车商业保险保险单

8 = 机动车交通事故责任强制保险单

9 = 其他组合保险

10 = 车辆租赁*/
	fromType: AT_VehicleAttachmentFromType;
	/*主表ID(还原用)*/
	fromId: number;
	/*附件名称*/
	name: string;
	/*附件地址*/
	path: string;
	/*图标地址*/
	icon: string;
	/*文件后缀*/
	ext: string;
}

export enum AT_VehicleCarType {
	中巴车 = 1,
	小汽车 = 2,
	冷链车 = 3,
	货车 = 4,
}

export declare interface AT_VehicleHoldModel {
	/*车辆主表ID*/
	vehicleId?: number;
	/*企业编码*/
	firmCode?: string;
	/*是否创建企业：是，否*/
	isCreate: number;
	/*添加人*/
	addUser?: string;
}

export declare interface AT_VehicleInsuranceModel {
	/*自增ID（还原用）*/
	id: number;
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*保险公司*/
	company: string;
	/*生效日期*/
	validDate: string;
	/*到期日期*/
	expireDate: string;
	/*保险费用*/
	insuranceCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export declare interface AT_VehicleInsuranceViewModel {
	/*自增ID（还原用）*/
	id: number;
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*保险公司*/
	company: string;
	/*生效日期*/
	validDate: string;
	/*到期日期*/
	expireDate: string;
	/*保险费用*/
	insuranceCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
	/*车牌号*/
	carNumber?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
}

export declare interface AT_VehicleLeaseCostModel {
	/*车辆租赁Id*/
	vehicleLeaseId?: number;
	/*费用类型

1 = 押金

2 = 租金

3 = 其他*/
	type: AT_VehicleLeaseCostType;
	/*回款银行：CsoBankBook表账套编码*/
	bookCode: string;
	/*费用金额*/
	money: number;
	/*费用说明*/
	note: string;
}

export enum AT_VehicleLeaseCostType {
	押金 = 1,
	租金 = 2,
	其他 = 3,
}

export declare interface AT_VehicleLeaseListModel {
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
	/*租赁公司*/
	leaseCompany?: string;
	/*租金*/
	leaseMoney: number;
	/*押金*/
	leaseDeposit: number;
	/*回款周期：单次、月付、季付、半年付、年付

1 = 单次

2 = 月付

3 = 季付

4 = 半年付

5 = 年付*/
	paybackPeriod: AT_PaybackPeriod;
	/*新增人*/
	addUser?: string;
	/*新增时间*/
	addTime?: string;
	/*新增人部门*/
	depName?: string;
	/*归还日期*/
	returnDate?: string;
}

export declare interface AT_VehicleLeaseModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
	/*租赁公司*/
	leaseCompany: string;
	/*租金*/
	leaseMoney: number;
	/*押金*/
	leaseDeposit: number;
	/*回款银行：CsoBankBook表账套编码*/
	bookCode: string;
	/*回款周期：单次、月付、季付、半年付、年付

1 = 单次

2 = 月付

3 = 季付

4 = 半年付

5 = 年付*/
	paybackPeriod: AT_PaybackPeriod;
	/*申请说明*/
	note: string;
	/*通知弹窗Key（租赁详情PopupKey）*/
	popupKey?: string;
	/*抄送人*/
	vehicleLeaseCopys?: string[];
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export declare interface AT_VehicleLeaseMoneyBackModel {
	/*回款记录Id*/
	id: number;
	/*财务系统付回款码*/
	fmsMoneyCode?: string;
	/*回款状态

0 = 待回款

1 = 部分回款

2 = 全部回款*/
	backState?: AT_BackState;
	/*付回款操作时间*/
	handleTime?: string;
	/*制单类型

1 = 美德基金申请

2 = 费用报销

3 = 薪资核算

4 = 退租

5 = 车辆保养申请

6 = 福利

7 = 储蓄卡充值

8 = 社保缴纳

9 = 发放预留薪资

10 = 房租申请

11 = 物资采购

12 = 车辆维修

13 = 车辆保险

14 = 副卡自充值申请

15 = 物资申领_自购

16 = 借支

17 = 借支回款

18 = 借支利息回款

19 = 车辆出租_押金

20 = 车辆出租_租金

21 = 车辆出租_其他

22 = 车辆归还

23 = 奖惩

24 = 资产采购

25 = 薪资_实发

26 = 薪资_个税

27 = 薪资_公积金

28 = 薪资_社保

29 = 物资申领_退回*/
	fromType?: AT_PayBackMoneyFromType;
	/*回款银行*/
	backBank?: string;
	/*金额*/
	money?: number;
	/*回款说明*/
	backNote?: string;
	/*制单人*/
	addUser?: string;
	/*制单时间*/
	addTime?: string;
}

export declare interface AT_VehicleLeasePageModel {
	/*车辆表Id*/
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*出租中，已归还

1 = 出租中

2 = 已归还*/
	state?: AT_LeaseState;
	/*出租中，已归还

1 = 出租中

2 = 已归还*/
	readonly stateText?: AT_LeaseState;
	carNumber?: string;
	/*开始时间*/
	startDate?: string;
	/*结束时间*/
	endDate?: string;
	/*租赁公司*/
	leaseCompany?: string;
	/*租金*/
	leaseMoney?: number;
	/*押金*/
	leaseDeposit?: number;
	/*回款周期：单次、月付、季付、半年付、年付

1 = 单次

2 = 月付

3 = 季付

4 = 半年付

5 = 年付*/
	paybackPeriod?: AT_PaybackPeriod;
	/*新增人*/
	addUser?: string;
	/*新增时间*/
	addTime?: string;
	/*新增人部门*/
	depName?: string;
	/*归还日期*/
	returnDate?: string;
	/*申请说明*/
	note?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*车辆归还付款编码*/
	payCode?: string;
	/*租赁编码：3143*/
	leaseCode?: string;
}

export declare interface AT_VehicleLeasePageModelIEnumerableInt32Tuple {
	item1?: AT_VehicleLeasePageModel[];
	item2: number;
}

export declare interface AT_VehicleLeaseQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*车牌号*/
	carNumber?: AT_QueryString;
	/*租赁公司*/
	leaseCompany?: AT_QueryString;
	/*出租中，已归还*/
	state?: AT_QueryList;
}

export declare interface AT_VehicleLeaseReturnModel {
	/*车辆租赁ID*/
	vehicleLeaseId: number;
	/*归还日期*/
	returnDate: string;
	/*付款银行：CsoBankBook表账套编码*/
	bankCode: string;
	/*退款金额*/
	returnMoney: number;
	/*收款银行*/
	collectBank: string;
	/*收款账号*/
	collectAccount: string;
	/*归还说明*/
	note: string;
}

export enum AT_VehicleLeaseState {
	未出租 = 0,
	出租中 = 1,
}

export declare interface AT_VehicleLeaseViewModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*开始时间*/
	startDate: string;
	/*结束时间*/
	endDate: string;
	/*租赁公司*/
	leaseCompany: string;
	/*租金*/
	leaseMoney: number;
	/*押金*/
	leaseDeposit: number;
	/*回款银行：CsoBankBook表账套编码*/
	bookCode: string;
	/*回款周期：单次、月付、季付、半年付、年付

1 = 单次

2 = 月付

3 = 季付

4 = 半年付

5 = 年付*/
	paybackPeriod: AT_PaybackPeriod;
	/*申请说明*/
	note: string;
	/*通知弹窗Key（租赁详情PopupKey）*/
	popupKey?: string;
	/*抄送人*/
	vehicleLeaseCopys?: string[];
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
	/*自增ID*/
	id: number;
	/*租赁编码：3143*/
	leaseCode?: string;
	/*回款银行*/
	bookName?: string;
	/*车牌号*/
	carNumber?: string;
	/*抄送人*/
	vehicleLeaseCopyList?: AT_StaffInfo[];
}

export declare interface AT_VehicleModel {
	/*车牌号*/
	carNumber: string;
	/*车型：中巴车，小 汽车，冷链车，货车*/
	carType: number;
	/*厂牌型号*/
	carModel: string;
	/*车架号*/
	vin?: string;
	/*所有人*/
	owner?: string;
	/*购买日期*/
	buyDate?: string;
	/*上牌日期*/
	plateDate?: string;
	/*保险到期日*/
	insuranceDate?: string;
	/*ETC办理人*/
	etcHand?: string;
	/*ETC办理人联系方式*/
	etcContact?: string;
	/*ETC卡号*/
	etcNumber?: string;
	/*备注*/
	note?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export declare interface AT_VehiclePageModel {
	/*车辆共享表Id*/
	vehicleHoldId: number;
	/*车辆表Id*/
	id: number;
	/*状态：使用，停用*/
	state: number;
	/*公司*/
	firmName?: string;
	/*车牌号*/
	carNumber?: string;
	/*车型：中巴车，小 汽车，冷链车，货车

1 = 中巴车

2 = 小汽车

3 = 冷链车

4 = 货车*/
	carType: AT_VehicleCarType;
	/*车型文本

1 = 中巴车

2 = 小汽车

3 = 冷链车

4 = 货车*/
	readonly carTypeText: AT_VehicleCarType;
	/*厂牌型号*/
	carModel?: string;
	/*车架号*/
	vin?: string;
	/*所有人*/
	owner?: string;
	/*购买日期*/
	buyDate?: string;
	/*上牌日期*/
	plateDate?: string;
	/*保险到期日*/
	insuranceDate?: string;
	/*ETC办理人*/
	etcHand?: string;
	/*ETC办理人联系方式*/
	etcContact?: string;
	/*ETC卡号*/
	etcNumber?: string;
	/*备注*/
	note?: string;
	/*是否创建企业：是，否*/
	isCreate: number;
	/*出租状态：未出租，出租中

0 = 未出租

1 = 出租中*/
	leaseState?: AT_VehicleLeaseState;
	/*出租状态：未出租，出租中

0 = 未出租

1 = 出租中*/
	readonly leaseStateText?: AT_VehicleLeaseState;
	/*租赁编码：3143*/
	leaseCode?: string;
}

export declare interface AT_VehiclePageModelIEnumerableInt32Tuple {
	item1?: AT_VehiclePageModel[];
	item2: number;
}

export declare interface AT_VehicleQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态：使用，停用*/
	state?: AT_QueryList;
	/*车牌号*/
	carNumber?: AT_QueryString;
	/*车型：中巴车，小 汽车，冷链车，货车*/
	carType?: AT_QueryList;
	carModel?: AT_QueryString;
	/*车架号*/
	vin?: AT_QueryString;
	/*所有人*/
	owner?: AT_QueryString;
	/*购买日期*/
	buyDate?: AT_QueryDateTime;
	/*保险到期日*/
	insuranceDate?: AT_QueryDateTime;
	/*出租状态：未出租，出租中*/
	leaseState?: AT_QueryList;
}

export declare interface AT_VehicleRepairModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*维修日期*/
	repairDate: string;
	/*维修单位*/
	repairUnit: string;
	/*维修说明*/
	repairNote: string;
	/*维修费用*/
	repairCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*经办人*/
	operator: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export declare interface AT_VehicleRepairViewModel {
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*维修日期*/
	repairDate: string;
	/*维修单位*/
	repairUnit: string;
	/*维修说明*/
	repairNote: string;
	/*维修费用*/
	repairCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*经办人*/
	operator: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
	/*自增ID*/
	id: number;
	/*车牌号*/
	carNumber?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
}

export declare interface AT_VehicleUpkeepModel {
	/*自增ID（还原用）*/
	id: number;
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*保养日期*/
	upkeepDate: string;
	/*保养单位*/
	upkeepUnit: string;
	/*保养间隔里程*/
	intervalMileage: string;
	/*保养里程*/
	mileage: string;
	/*保养类别

1 = 大保养

2 = 小保养*/
	upkeepType: AT_VehicleUpkeepType;
	/*保养类别

1 = 大保养

2 = 小保养*/
	readonly upkeepTypeText: AT_VehicleUpkeepType;
	/*保养说明*/
	upkeepNote: string;
	/*保养费用*/
	upkeepCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*经办人*/
	operator: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
}

export enum AT_VehicleUpkeepType {
	大保养 = 1,
	小保养 = 2,
}

export declare interface AT_VehicleUpkeepViewModel {
	/*自增ID（还原用）*/
	id: number;
	/*车辆共享表ID*/
	vehicleHoldId: number;
	/*申请人*/
	applyUser: string;
	/*申请人文本*/
	applyUserName?: string;
	/*申请人部门*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*保养日期*/
	upkeepDate: string;
	/*保养单位*/
	upkeepUnit: string;
	/*保养间隔里程*/
	intervalMileage: string;
	/*保养里程*/
	mileage: string;
	/*保养类别

1 = 大保养

2 = 小保养*/
	upkeepType: AT_VehicleUpkeepType;
	/*保养类别

1 = 大保养

2 = 小保养*/
	readonly upkeepTypeText: AT_VehicleUpkeepType;
	/*保养说明*/
	upkeepNote: string;
	/*保养费用*/
	upkeepCost: number;
	/*开户名*/
	accountName: string;
	/*收款银行*/
	receiveBank: string;
	/*收款账号*/
	bankCard: string;
	/*经办人*/
	operator: string;
	/*流程ID*/
	flowId: number;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
	/*车牌号*/
	carNumber?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
}

export declare interface AT_VehicleViewModel {
	/*车牌号*/
	carNumber: string;
	/*车型：中巴车，小 汽车，冷链车，货车*/
	carType: number;
	/*厂牌型号*/
	carModel: string;
	/*车架号*/
	vin?: string;
	/*所有人*/
	owner?: string;
	/*购买日期*/
	buyDate?: string;
	/*上牌日期*/
	plateDate?: string;
	/*保险到期日*/
	insuranceDate?: string;
	/*ETC办理人*/
	etcHand?: string;
	/*ETC办理人联系方式*/
	etcContact?: string;
	/*ETC卡号*/
	etcNumber?: string;
	/*备注*/
	note?: string;
	/*附件信息*/
	vehicleAttachments?: AT_VehicleAttachmentModel[];
	/*自增ID*/
	id: number;
	/*状态：使用，停用*/
	state: number;
	/*使用记录*/
	vehicleApplys?: AT_VehicleApplyModel[];
	/*保险记录*/
	vehicleInsurances?: AT_VehicleInsuranceModel[];
	/*保养记录*/
	vehicleUpkeeps?: AT_VehicleUpkeepModel[];
	/*维修记录*/
	vehicleRepairs?: AT_VehicleRepairModel[];
	/*出租记录*/
	vehicleLeases?: AT_VehicleLeaseListModel[];
}

export declare interface AT_VirtueFundDetailsModel {
	/*申请人编码*/
	barCode: string;
	/*申请人文本*/
	barName?: string;
	/*申请人部门编码*/
	depCode: string;
	/*申请人部门文本*/
	depName?: string;
	/*申请人岗位编码*/
	postCode: string;
	/*申请人岗位文本*/
	postName?: string;
	/*联系人：员工家庭信息表ID*/
	inductionFamilyId: number;
	/*联系人：员工家庭信息表文本*/
	contactName?: string;
	/*联系方式*/
	contact?: string;
	/*收款信息： 员工家庭信息*/
	collectInfo: string;
	/*付款金额*/
	payMoney: number;
	/*生日类型：农历，公历*/
	birthdayType?: number;
	/*出生日期*/
	birthday?: string;
	/*生日日期*/
	thisBirthday?: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
}

export declare interface AT_VirtueFundModel {
	/*科目*/
	subjectId: number;
	/*是否批量 0 否 1 是*/
	isBatch: number;
	/*最迟付款日*/
	latestDate?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId: number;
	/*美德基金明细*/
	virtueFundDetails?: AT_VirtueFundDetailsModel[];
}

export declare interface AT_VirtueFundPageModel {
	/*Id*/
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*部门*/
	depName?: string;
	/*岗位*/
	postName?: string;
	/*人员code*/
	barCode?: string;
	/*姓名*/
	staffName?: string;
	/*收款信息*/
	collectInfo?: string;
	/*科目*/
	subjectName?: string;
	/*金额*/
	amount?: number;
	/*摘要*/
	summary?: string;
	/*联系人*/
	familyName?: string;
	/*联系方式*/
	contact?: string;
	/*最迟付款日*/
	latestDate?: string;
	/*更新时间*/
	updTime: string;
	/*单号*/
	virtueCode?: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
	/*核算部门Code*/
	bamsDepCode?: string;
	/*核算部门*/
	bamsDepName?: string;
}

export declare interface AT_VirtueFundPageModelIEnumerableInt32Tuple {
	item1?: AT_VirtueFundPageModel[];
	item2: number;
}

export declare interface AT_VirtueFundQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*部门名称*/
	depName?: AT_QueryString;
	/*岗位名称*/
	postName?: AT_QueryString;
	/*员工姓名*/
	staffName?: AT_QueryString;
	/*科目*/
	subjectName?: AT_QueryString;
	/*科目Id*/
	subjectId?: AT_QueryString;
	/*单号*/
	virtueCode?: AT_QueryString;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_VirtueFundViewModel {
	/*科目*/
	subjectId: number;
	/*是否批量 0 否 1 是*/
	isBatch: number;
	/*最迟付款日*/
	latestDate?: string;
	/*摘要*/
	summary?: string;
	/*流程ID*/
	flowId: number;
	/*美德基金明细*/
	virtueFundDetails?: AT_VirtueFundDetailsModel[];
	/*美德基金Id*/
	id: number;
	/*美德基金编码 3073*/
	virtueCode?: string;
}

export declare interface AT_VirtueSubjectModel {
	/*自增ID*/
	id: number;
	/*科目类型：生日，节日

1 = 生日

2 = 节日*/
	type: AT_VirtueSubjectTypeEnum;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName: string;
	/*金额*/
	amount: number;
	/*摘要*/
	content?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_VirtueSubjectPageModel {
	/*自增ID*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName?: string;
	/*类型

1 = 生日

2 = 节日*/
	type: AT_VirtueSubjectTypeEnum;
	/*类型文本

1 = 生日

2 = 节日*/
	readonly typeText: AT_VirtueSubjectTypeEnum;
	/*金额*/
	amount: number;
	/*摘要*/
	content?: string;
	/*排序*/
	sort?: number;
}

export declare interface AT_VirtueSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_VirtueSubjectPageModel[];
	item2: number;
}

export declare interface AT_VirtueSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态 是否启用 0 否 1 是*/
	isEnable?: AT_QueryList;
	/*科目*/
	subjectName?: AT_QueryString;
}

export enum AT_VirtueSubjectTypeEnum {
	生日 = 1,
	节日 = 2,
}

export declare interface AT_WarehousingDetailsModel {
	/*资产采购明细id*/
	assetPurchaseDetailsId: number;
	/*固资定义id*/
	assetDefineId: number;
	/*资产类型Id*/
	assetTypeId: number;
	/*资产类型*/
	assetTypeText?: string;
	/*资产名称*/
	categoryNameText?: string;
	/*规格型号*/
	specsModel?: string;
	/*单位*/
	unitName?: string;
	/*采购价*/
	purchasePrice?: number;
	/*数量*/
	purchaseAmount?: number;
	/*税率*/
	taxRate?: number;
	/*保修期(年)*/
	warranty?: number;
	/*使用年限*/
	useLife?: number;
}

export declare interface AT_WarehousingModel {
	/*入库时间*/
	buyDate: string;
	/*存放地点*/
	savePlace?: string;
	/*入库明细*/
	warehousingDetails?: AT_WarehousingDetailsModel[];
}

export declare interface AT_WelfareDetailsViewModel {
	/*员工编码*/
	barCode: string;
	/*部门编码*/
	depCode: string;
	/*岗位编码*/
	postCode: string;
	/*福利金额*/
	welfareMoney: number;
	/*福利说明*/
	note: string;
	/*核算部门：红阳部门*/
	bamsDepCode?: string;
	/*ID*/
	id: number;
	/*员工名称*/
	barName?: string;
	/*部门名称*/
	depName?: string;
	/*岗位名称*/
	postName?: string;
	/*一级部门*/
	oneDepName?: string;
	/*二级部门*/
	twoDepName?: string;
	/*三级部门*/
	threeDepName?: string;
	/*四级部门*/
	fourDepName?: string;
	/*核算部门：红阳部门名称*/
	bamsDepName?: string;
}

export declare interface AT_WelfareModel {
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*申请人岗位编码*/
	postCode: string;
	/*福利科目ID*/
	subjectId: number;
	/*福利金额*/
	welfareMoney: number;
	/*福利日期*/
	welfareDate?: string;
	/*福利说明*/
	note: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*福利明细*/
	welfareDetails?: AT_WelfareDetailsViewModel[];
}

export declare interface AT_WelfarePageModel {
	/*自增ID*/
	id: number;
	/*明细Id*/
	detailsId: number;
	/*申请人*/
	barName?: string;
	/*申请人部门*/
	depName?: string;
	/*申请人岗位*/
	postName?: string;
	/*福利科目*/
	subjectName?: string;
	/*业务核算部门*/
	bamsDepName?: string;
	/*福利金额*/
	welfareMoney?: number;
	/*制单日期*/
	welfareDate?: string;
	/*福利说明*/
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
	/*流程状态文本值

0 = 草稿

1 = 审核中

2 = 驳回

3 = 未决

4 = 已完成

-1 = 删除*/
	readonly flowStateText: AT_FlowListStateEnum;
	/*更新时间*/
	updTime: string;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	payState?: AT_PayState;
	/*付款状态

0 = 待付款

1 = 部分付款

2 = 已付款*/
	readonly payStateText?: AT_PayState;
	/*付款编码*/
	payCode?: string;
}

export declare interface AT_WelfarePageModelIEnumerableInt32Tuple {
	item1?: AT_WelfarePageModel[];
	item2: number;
}

export declare interface AT_WelfareQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*流程状态*/
	flowState?: AT_QueryList;
	/*福利日期*/
	welfareDate?: AT_QueryDateTime;
	/*部门*/
	depName?: AT_QueryString;
	/*姓名*/
	barName?: AT_QueryString;
	/*福利类型ID*/
	subjectId?: AT_QueryList;
	/*福利说明*/
	note?: AT_QueryString;
	/*业务核算部门*/
	bamsDepName?: AT_QueryString;
}

export declare interface AT_WelfareSubjectModel {
	/*自增ID*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName: string;
	/*福利金额*/
	welfareMoney: number;
	/*福利说明*/
	note: string;
}

export declare interface AT_WelfareSubjectPageModel {
	/*ID*/
	id: number;
	/*是否启用 0 否 1 是*/
	isEnable: number;
	/*科目名称*/
	subjectName?: string;
	/*福利金额*/
	welfareMoney: number;
	/*福利日期*/
	welfareDate: string;
	/*备注说明*/
	note?: string;
	/*更新人*/
	updUserName?: string;
	/*更新日期*/
	updTime: string;
}

export declare interface AT_WelfareSubjectPageModelIEnumerableInt32Tuple {
	item1?: AT_WelfareSubjectPageModel[];
	item2: number;
}

export declare interface AT_WelfareSubjectQueryModel {
	pageIndex: number;
	pageSize: number;
	sorts?: AT_QuerySorting[];
	/*状态 是否启用 0 否 1 是*/
	isEnable?: AT_QueryList;
	/*科目*/
	subjectName?: AT_QueryString;
}

export declare interface AT_WelfareViewModel {
	/*申请人*/
	barCode: string;
	/*申请人*/
	barName: string;
	/*申请人部门编码*/
	depCode: string;
	/*申请人岗位编码*/
	postCode: string;
	/*福利科目ID*/
	subjectId: number;
	/*福利金额*/
	welfareMoney: number;
	/*福利日期*/
	welfareDate?: string;
	/*福利说明*/
	note: string;
	/*核算部门：红阳部门编码*/
	bamsDepCode?: string;
	/*福利明细*/
	welfareDetails?: AT_WelfareDetailsViewModel[];
	/*自增ID*/
	id: number;
	/*福利编码 3084*/
	welfareCode?: string;
	/*流程ID*/
	flowId: number;
	/*付款状态：未付，已付*/
	payState?: number;
	/*申请人部门文本*/
	depName?: string;
	/*申请人岗位文本*/
	postName?: string;
}

export enum AT_WorkExperienceType {
	不限 = 1,
	一到三年 = 2,
	三到五年 = 3,
	五到十年 = 4,
	十年以上 = 5,
	应届毕业生 = 6,
	在校实习生 = 7,
}

export enum AT_WorkStatus {
	实习 = 1,
	试用 = 2,
	正式 = 3,
	离职 = 4,
}

export declare interface AT_ZeroClean {
	/*员工*/
	barCode?: string;
	/*年份*/
	year: number;
}
