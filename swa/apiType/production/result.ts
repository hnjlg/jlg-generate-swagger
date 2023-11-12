import axios from '@/axios/index'
export declare interface ResponseData<T>{content: T;message: string | void;status: number;}
export const postAccountResetPassword = (data:AT_ResetPasswordModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Account/ResetPassword`,data);
};
export const postAccountForgetPassword = (data:AT_ForgetPasswordModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Account/ForgetPassword`,data);
};
export const postAccountAddSubAccount = (data:AT_SubAccountModel,
) => {
	 return axios.post<ResponseData<number
>>(`/Account/AddSubAccount`,data);
};
export const postAccountGetSubAccountToPage = (data:AT_UserQueryModel,
) => {
	 return axios.post<ResponseData<AT_UserPageModelIEnumerableInt32Tuple
>>(`/Account/GetSubAccountToPage`,data);
};
export const getAccountSetSubAccountEnable = (account: string,
isEnable: number,
) => {
	 return axios.get<ResponseData<boolean
>>(`/Account/SetSubAccountEnable?${account?'account='+account:''}&${isEnable?'isEnable='+isEnable:''}`);
};
export const postAccountUpdateUserInfo = (data:AT_UserUpdateModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Account/UpdateUserInfo`,data);
};
export const postAccountUpdateSubUserInfo = (data:AT_UserUpdateModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Account/UpdateSubUserInfo`,data);
};
export const getAccountGetSubAccountReceiveListByUserCode = (userCode: string,
) => {
	 return axios.get<ResponseData<AT_UserReceiveViewModel[]
>>(`/Account/GetSubAccountReceiveListByUserCode?${userCode?'userCode='+userCode:''}`);
};
export const getAccountGetTeamInfoByUserCode = (childUserCode: string,
) => {
	 return axios.get<ResponseData<AT_TeamInfoViewModel
>>(`/Account/GetTeamInfoByUserCode?${childUserCode?'childUserCode='+childUserCode:''}`);
};
export const getAccountGetCurrentTeamInfo = () => {
	 return axios.get<ResponseData<AT_TeamInfoViewModel
>>(`/Account/GetCurrentTeamInfo`);
};
export const getAccountGetProxyProvinceEntityList = (childUserCode: string,
) => {
	 return axios.get<ResponseData<number[]
>>(`/Account/GetProxyProvinceEntityList?${childUserCode?'childUserCode='+childUserCode:''}`);
};
export const postAccountCheckUserReceive = (data:AT_UserReceiveUpdateModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Account/CheckUserReceive`,data);
};
export const postAccurateDeliveryAddAccurateDelivery = (data:AT_AccurateDeliveryRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/AccurateDelivery/AddAccurateDelivery`,data);
};
export const postAccurateDeliveryDeleteAccurateDelivery = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/AccurateDelivery/DeleteAccurateDelivery`,data);
};
export const postAccurateDeliveryGetAccurateDeliveryToPage = (data:AT_AccurateDeliveryQueryModel,
) => {
	 return axios.post<ResponseData<AT_AccurateDeliveryPageModelIEnumerableInt32Tuple
>>(`/AccurateDelivery/GetAccurateDeliveryToPage`,data);
};
export const postAccurateDeliveryAddPowerAttorney = (data:AT_PowerAttorneyRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/AccurateDelivery/AddPowerAttorney`,data);
};
export const postAccurateDeliveryDeletePowerAttorney = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/AccurateDelivery/DeletePowerAttorney`,data);
};
export const postAccurateDeliveryGetPowerAttorneyToPage = (data:AT_PowerAttorneyQueryModel,
) => {
	 return axios.post<ResponseData<AT_PowerAttorneyPageModelIEnumerableInt32Tuple
>>(`/AccurateDelivery/GetPowerAttorneyToPage`,data);
};
export const getAccurateDeliveryGetAccurateDeliveryAttachmentList = (accurateDeliveryDetailsId: number,
) => {
	 return axios.get<ResponseData<AT_AccurateDeliveryAttachmentViewModel[]
>>(`/AccurateDelivery/GetAccurateDeliveryAttachmentList?${accurateDeliveryDetailsId?'accurateDeliveryDetailsId='+accurateDeliveryDetailsId:''}`);
};
export const postBackMoneyGetApplyBackMoneyToPage = (data:AT_ApplyBackMoneyQueryModel,
) => {
	 return axios.post<ResponseData<AT_ApplyBackMoneyPageModelIEnumerableInt32Tuple
>>(`/BackMoney/GetApplyBackMoneyToPage`,data);
};
export const postBackMoneyConfirmApply = (data:AT_ConfirmApplyRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/BackMoney/ConfirmApply`,data);
};
export const postBackMoneyGetBackMoneyRecordToPage = (data:AT_BackMoneyRecordQueryModel,
) => {
	 return axios.post<ResponseData<AT_BackMoneyRecordPageModelIEnumerableInt32Tuple
>>(`/BackMoney/GetBackMoneyRecordToPage`,data);
};
export const postBankGetSubAccountToPage = (data:AT_BankQueryModel,
) => {
	 return axios.post<ResponseData<AT_BankPageModelIEnumerableInt32Tuple
>>(`/Bank/GetSubAccountToPage`,data);
};
export const getBankGetClientBankAttachmentByClientCode = (clientCode: string,
) => {
	 return axios.get<ResponseData<AT_AttachmentModel[]
>>(`/Bank/GetClientBankAttachmentByClientCode?${clientCode?'clientCode='+clientCode:''}`);
};
export const postBankDeleteBank = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/Bank/DeleteBank`,data);
};
export const postBankSetAccountFreeze = (data:AT_BankRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Bank/SetAccountFreeze`,data);
};
export const postBankSetAccountUnFreeze = (data:AT_BankRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Bank/SetAccountUnFreeze`,data);
};
export const postBankAddBankInfo = (data:AT_BankAddRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Bank/AddBankInfo`,data);
};
export const getCommonSearchComboBoxType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/SearchComboBoxType`);
};
export const getCommonSearchAllProvince = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/SearchAllProvince`);
};
export const getCommonSearchProvince = (searchText: string,
level: string,
pid: string='',
) => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/SearchProvince?${searchText?'searchText='+searchText:''}&${level?'level='+level:''}&${pid?'pid='+pid:''}`);
};
export const getCommonSearchAllCountyByCity = (cityId: number,
) => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/SearchAllCountyByCity?${cityId?'cityId='+cityId:''}`);
};
export const getCommonSearchAllCityByProvince = (provinceid: number,
isDistinguishCity: boolean,
) => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/SearchAllCityByProvince?${provinceid?'provinceid='+provinceid:''}&${isDistinguishCity?'isDistinguishCity='+isDistinguishCity:''}`);
};
export const getCommonGetCurrentUserInfo = () => {
	 return axios.get<ResponseData<AT_UserModel
>>(`/Common/GetCurrentUserInfo`);
};
export const getCommonSendCaptcha = (mobile: string,
) => {
	 return axios.get<ResponseData<boolean
>>(`/Common/SendCaptcha?${mobile?'mobile='+mobile:''}`);
};
export const getCommonGetBankComboBoxList = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetBankComboBoxList`);
};
export const getCommonGetBankAttachmentType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetBankAttachmentType`);
};
export const getCommonGetAccountStateType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetAccountStateType`);
};
export const getCommonGetSyncBulletinTypeComboBox = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetSyncBulletinTypeComboBox`);
};
export const getCommonSearchInvestmen = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_InvestmentViewModel[]
>>(`/Common/SearchInvestmen?${searchText?'searchText='+searchText:''}`);
};
export const getCommonSearchInventory = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_InvestmentViewModel[]
>>(`/Common/SearchInventory?${searchText?'searchText='+searchText:''}`);
};
export const getCommonGetIntentionList = (ProductCode: string,
ProvinceId: number,
) => {
	 return axios.get<ResponseData<AT_IntentionViewModel
>>(`/Common/GetIntentionList?${ProductCode?'ProductCode='+ProductCode:''}&${ProvinceId?'ProvinceId='+ProvinceId:''}`);
};
export const getCommonSearchCompany = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_CompanyViewModel[]
>>(`/Common/SearchCompany?${searchText?'searchText='+searchText:''}`);
};
export const getCommonGetMyDeliveryList = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_CompanyViewModel[]
>>(`/Common/GetMyDeliveryList?${searchText?'searchText='+searchText:''}`);
};
export const getCommonSearchMyDeliveryPriceCompany = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_CompanyViewModel[]
>>(`/Common/SearchMyDeliveryPriceCompany?${searchText?'searchText='+searchText:''}`);
};
export const getCommonGetSupplierList = () => {
	 return axios.get<ResponseData<AT_KeyValueStringViewModel
>>(`/Common/GetSupplierList`);
};
export const getCommonGetSyncCollectList = () => {
	 return axios.get<ResponseData<AT_CollectViewModel
>>(`/Common/GetSyncCollectList`);
};
export const getCommonGetEarnestPaymentStateList = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetEarnestPaymentStateList`);
};
export const getCommonGetUserReceiveList = () => {
	 return axios.get<ResponseData<AT_UserReceiveViewModel[]
>>(`/Common/GetUserReceiveList`);
};
export const getCommonGetContractStatusType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetContractStatusType`);
};
export const getCommonGetContractType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetContractType`);
};
export const getCommonGetEarnestTypeList = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetEarnestTypeList`);
};
export const getCommonGetMarketEarnestTypeList = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetMarketEarnestTypeList`);
};
export const getCommonGetDeliveryList = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_CompanyViewModel[]
>>(`/Common/GetDeliveryList?${searchText?'searchText='+searchText:''}`);
};
export const postCommonGetDeliveryToPage = (data:AT_DeliveryQueryModel,
) => {
	 return axios.post<ResponseData<AT_DeliveryPageModelIEnumerableInt32Tuple
>>(`/Common/GetDeliveryToPage`,data);
};
export const getCommonGetApplicationStatusType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetApplicationStatusType`);
};
export const getCommonGetCompanyList = () => {
	 return axios.get<ResponseData<AT_CompanyViewModel[]
>>(`/Common/GetCompanyList`);
};
export const getCommonGetPurchaseStateType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetPurchaseStateType`);
};
export const getCommonGetPurchaseOrderPaymentMode = () => {
	 return axios.get<ResponseData<AT_KeyValueIntDefaultViewModel
>>(`/Common/GetPurchaseOrderPaymentMode`);
};
export const getCommonGetPurchaseOrderStateType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetPurchaseOrderStateType`);
};
export const getCommonGetSysAuditStateType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetSysAuditStateType`);
};
export const getCommonGetInStockRejectState = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetInStockRejectState`);
};
export const getCommonGetInStockRejectBillingState = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetInStockRejectBillingState`);
};
export const getCommonGetInStockState = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetInStockState`);
};
export const getCommonGetReturnReasonType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntDefaultViewModel
>>(`/Common/GetReturnReasonType`);
};
export const getCommonGetFeedbackType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetFeedbackType`);
};
export const getCommonGetFeedbackStateMode = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetFeedbackStateMode`);
};
export const getCommonGetInvoiceStateMode = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetInvoiceStateMode`);
};
export const getCommonGetHospitalType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetHospitalType`);
};
export const getCommonGetProgressType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetProgressType`);
};
export const getCommonIsNeedCompleteInfo = () => {
	 return axios.get<ResponseData<boolean
>>(`/Common/IsNeedCompleteInfo`);
};
export const getCommonIsExistInventory = (userClientCode: string,
) => {
	 return axios.get<ResponseData<boolean
>>(`/Common/IsExistInventory?${userClientCode?'userClientCode='+userClientCode:''}`);
};
export const getCommonGetFirstPinyin = (chineseStr: string,
) => {
	 return axios.get<ResponseData<string
>>(`/Common/GetFirstPinyin?${chineseStr?'chineseStr='+chineseStr:''}`);
};
export const getCommonGetCompletionUnitType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetCompletionUnitType`);
};
export const getCommonGetVarietyDetailType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetVarietyDetailType`);
};
export const getCommonGetMarketToolkitType = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/GetMarketToolkitType`);
};
export const postCommonMultiplicationCalculation = (mainFactor: number,
factor: number,
) => {
	 return axios.post<ResponseData<number
>>(`/Common/MultiplicationCalculation?${mainFactor?'mainFactor='+mainFactor:''}&${factor?'factor='+factor:''}`);
};
export const getCommonGetSystemRole = () => {
	 return axios.get<ResponseData<AT_KeyValueIntDefaultViewModel
>>(`/Common/GetSystemRole`);
};
export const getCommonSearchDrugTerminal = (searchText: string,
) => {
	 return axios.get<ResponseData<AT_DrugTerminalSimpleModel[]
>>(`/Common/SearchDrugTerminal?${searchText?'searchText='+searchText:''}`);
};
export const getCommonEarnestUse = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/Common/EarnestUse`);
};
export const getCommonRefreshData = (table: string,
whereSql: string,
updateField: string,
) => {
	 return axios.get<ResponseData<boolean
>>(`/Common/RefreshData?${table?'table='+table:''}&${whereSql?'whereSql='+whereSql:''}&${updateField?'updateField='+updateField:''}`);
};
export const getCompanyGetCompanyReceiptListByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyReceiptViewModel[]
>>(`/Company/GetCompanyReceiptListByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getCompanyGetCompanyReceiptComboBoxByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_KeyValueStringDefaultViewModel
>>(`/Company/GetCompanyReceiptComboBoxByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getCompanyGetCompanyBankByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyBankViewModel
>>(`/Company/GetCompanyBankByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getCompanyGetCompanyBanksByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyBankViewModel[]
>>(`/Company/GetCompanyBanksByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getCompanyGetCompanyInvoiceByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyInvoiceViewModel
>>(`/Company/GetCompanyInvoiceByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getCompanyGetCompanyInvoicesByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyInvoiceViewModel[]
>>(`/Company/GetCompanyInvoicesByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const postContractAddSubContract = (data:AT_SubContractModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Contract/AddSubContract`,data);
};
export const postContractMailContract = (data:AT_MailContractModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Contract/MailContract`,data);
};
export const postContractGetSubContractToPage = (data:AT_ContractQueryModel,
) => {
	 return axios.post<ResponseData<AT_ContractPageModelIEnumerableInt32Tuple
>>(`/Contract/GetSubContractToPage`,data);
};
export const getContractGetContractDetailsByCode = (contractCode: string,
) => {
	 return axios.get<ResponseData<AT_ContractDetailsViewModel[]
>>(`/Contract/GetContractDetailsByCode?${contractCode?'contractCode='+contractCode:''}`);
};
export const postDeliveryAddDeliveryPrice = (data:AT_DeliveryPriceModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/AddDeliveryPrice`,data);
};
export const postDeliveryEditDeliveryPrice = (data:AT_DeliveryPriceModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/EditDeliveryPrice`,data);
};
export const getDeliveryGetDeliveryPriceById = (id: number,
) => {
	 return axios.get<ResponseData<AT_DeliveryPriceViewModel
>>(`/Delivery/GetDeliveryPriceById?${id?'id='+id:''}`);
};
export const getDeliveryGetDeliveryPriceByCode = (deliveryCode: string,
productCode: string,
) => {
	 return axios.get<ResponseData<AT_DeliveryPriceViewModel
>>(`/Delivery/GetDeliveryPriceByCode?${deliveryCode?'deliveryCode='+deliveryCode:''}&${productCode?'productCode='+productCode:''}`);
};
export const postDeliveryGetDeliveryPriceToPage = (data:AT_DeliveryPriceQueryModel,
) => {
	 return axios.post<ResponseData<AT_DeliveryPricePageModelIEnumerableInt32Tuple
>>(`/Delivery/GetDeliveryPriceToPage`,data);
};
export const postDeliveryAddDelivery = (data:AT_DeliveryModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/AddDelivery`,data);
};
export const postDeliveryUpdateDelivery = (deliveryId: number,
data:AT_DeliveryModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/UpdateDelivery?${deliveryId?'deliveryId='+deliveryId:''}`,data);
};
export const postDeliveryGetDeliveryClientToPage = (data:AT_DeliveryClientQueryModel,
) => {
	 return axios.post<ResponseData<AT_DeliveryClientPageModelIEnumerableInt32Tuple
>>(`/Delivery/GetDeliveryClientToPage`,data);
};
export const postDeliveryAddDeliveryClient = (data:AT_DeliveryClientRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/AddDeliveryClient`,data);
};
export const getDeliveryGetPurchasInfoByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_PurchasInfoViewModel
>>(`/Delivery/GetPurchasInfoByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getDeliveryGetCompanyReceiptListByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyReceiptViewModel[]
>>(`/Delivery/GetCompanyReceiptListByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getDeliveryGetCompanyBankListByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyBankViewModel[]
>>(`/Delivery/GetCompanyBankListByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const getDeliveryGetCompanyInvoiceListByCode = (companyCode: string,
) => {
	 return axios.get<ResponseData<AT_CompanyInvoiceViewModel[]
>>(`/Delivery/GetCompanyInvoiceListByCode?${companyCode?'companyCode='+companyCode:''}`);
};
export const postDeliveryDeleteDeliveryClient = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/DeleteDeliveryClient`,data);
};
export const postDeliveryDeleteDeliveryPrice = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/Delivery/DeleteDeliveryPrice`,data);
};
export const postDownstreamAuthorizationDispatchPageAuthorizationToUser = (data:AT_DispatchAuthorizationToUserModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/DownstreamAuthorization/DispatchPageAuthorizationToUser`,data);
};
export const postDownstreamAuthorizationDispatchPopupAuthorizationToUser = (data:AT_DispatchAuthorizationToUserModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/DownstreamAuthorization/DispatchPopupAuthorizationToUser`,data);
};
export const getDownstreamAuthorizationGetAllDownstreamPageAuthorization = () => {
	 return axios.get<ResponseData<AT_AuthorizationViewModel[]
>>(`/DownstreamAuthorization/GetAllDownstreamPageAuthorization`);
};
export const getDownstreamAuthorizationGetAllDownstreamPopupAuthorization = () => {
	 return axios.get<ResponseData<AT_AuthorizationViewModel[]
>>(`/DownstreamAuthorization/GetAllDownstreamPopupAuthorization`);
};
export const getDownstreamAuthorizationGetCurrentUserPageRoute = () => {
	 return axios.get<ResponseData<AT_SysPageRouteViewModel[]
>>(`/DownstreamAuthorization/GetCurrentUserPageRoute`);
};
export const getDownstreamAuthorizationGetUserPageAuthorization = (userId: number,
) => {
	 return axios.get<ResponseData<AT_PageAuthorizationViewModel[]
>>(`/DownstreamAuthorization/GetUserPageAuthorization?${userId?'userId='+userId:''}`);
};
export const getDownstreamAuthorizationGetUserPopupAuthorization = (userId: number,
) => {
	 return axios.get<ResponseData<AT_PopupAuthorizationViewModel[]
>>(`/DownstreamAuthorization/GetUserPopupAuthorization?${userId?'userId='+userId:''}`);
};
export const getDownstreamAuthorizationGetCurrentUserPageAuthorizationByRouteKey = (routeKey: string,
) => {
	 return axios.get<ResponseData<AT_PageAuthorizationViewModel
>>(`/DownstreamAuthorization/GetCurrentUserPageAuthorizationByRouteKey?${routeKey?'routeKey='+routeKey:''}`);
};
export const getDownstreamAuthorizationGetCurrentUserPopupAuthorizationByPopupkey = (popupkey: string,
) => {
	 return axios.get<ResponseData<AT_PopupAuthorizationViewModel
>>(`/DownstreamAuthorization/GetCurrentUserPopupAuthorizationByPopupkey?${popupkey?'popupkey='+popupkey:''}`);
};
export const getDownstreamAuthorizationGetAllDownstreamPopup = () => {
	 return axios.get<ResponseData<AT_SysPopupRouteViewModel[]
>>(`/DownstreamAuthorization/GetAllDownstreamPopup`);
};
export const getDownstreamAuthorizationGetAllDownstreamPage = () => {
	 return axios.get<ResponseData<AT_SysPageRouteViewModel[]
>>(`/DownstreamAuthorization/GetAllDownstreamPage`);
};
export const postEarnestAddMarketEarnest = (data:AT_EarnestRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Earnest/AddMarketEarnest`,data);
};
export const postEarnestAddLoanEarnest = (data:AT_LoanEarnestRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Earnest/AddLoanEarnest`,data);
};
export const postEarnestGetMarketEarnestToPage = (data:AT_EarnestQueryModel,
) => {
	 return axios.post<ResponseData<AT_EarnestPageModelIEnumerableInt32Tuple
>>(`/Earnest/GetMarketEarnestToPage`,data);
};
export const postEarnestGetLoanEarnestToPage = (data:AT_EarnestQueryModel,
) => {
	 return axios.post<ResponseData<AT_EarnestPageModelIEnumerableInt32Tuple
>>(`/Earnest/GetLoanEarnestToPage`,data);
};
export const getEarnestGetEarnestDetailById = (detailId: number,
) => {
	 return axios.get<ResponseData<AT_MarketEarnestViewModel
>>(`/Earnest/GetEarnestDetailById?${detailId?'detailId='+detailId:''}`);
};
export const getEarnestGetEarnestRefundList = (detailId: number,
) => {
	 return axios.get<ResponseData<AT_EarnestRefundRecordViewModel[]
>>(`/Earnest/GetEarnestRefundList?${detailId?'detailId='+detailId:''}`);
};
export const postEarnestEarnestRefundApplication = (data:AT_EarnestRefundRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Earnest/EarnestRefundApplication`,data);
};
export const getEarnestGetRefundAmount = (detailId: number,
) => {
	 return axios.get<ResponseData<number
>>(`/Earnest/GetRefundAmount?${detailId?'detailId='+detailId:''}`);
};
export const getEarnestGetMoneyBackAttachmentById = (detailId: number,
) => {
	 return axios.get<ResponseData<AT_AttachmentModel[]
>>(`/Earnest/GetMoneyBackAttachmentById?${detailId?'detailId='+detailId:''}`);
};
export const postEarnestDeleteEarnest = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/Earnest/DeleteEarnest`,data);
};
export const postFeedbackAddFeedback = (data:AT_FeedbackRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Feedback/AddFeedback`,data);
};
export const postFeedbackGetFeedbackToPage = (data:AT_FeedbackQueryModel,
) => {
	 return axios.post<ResponseData<AT_FeedbackPageModelIEnumerableInt32Tuple
>>(`/Feedback/GetFeedbackToPage`,data);
};
export const postFirstCampAddFirstCampCompany = (data:AT_FirstCampCompanyRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/FirstCamp/AddFirstCampCompany`,data);
};
export const postFirstCampGetFirstCampCompanyToPage = (data:AT_FirstCampCompanyQueryModel,
) => {
	 return axios.post<ResponseData<AT_FirstCampCompanyPageModelIEnumerableInt32Tuple
>>(`/FirstCamp/GetFirstCampCompanyToPage`,data);
};
export const getFirstCampGetFirstCampCompanyById = (id: number,
) => {
	 return axios.get<ResponseData<AT_FirstCampCompanyViewModel
>>(`/FirstCamp/GetFirstCampCompanyById?${id?'id='+id:''}`);
};
export const postFirstCampAddFirstCampVariety = (data:AT_FirstCampVarietyRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/FirstCamp/AddFirstCampVariety`,data);
};
export const postFirstCampGetFirstCampVarietyToPage = (data:AT_FirstCampVarietyQueryModel,
) => {
	 return axios.post<ResponseData<AT_FirstCampVarietyPageModelIEnumerableInt32Tuple
>>(`/FirstCamp/GetFirstCampVarietyToPage`,data);
};
export const postHomeGetMessageNoticeList = () => {
	 return axios.post<ResponseData<AT_MessageNoticeViewModel[]
>>(`/Home/GetMessageNoticeList`);
};
export const getHomeGetGoodsSaleProgressList = (year: string,
) => {
	 return axios.get<ResponseData<AT_GoodsSaleProgressViewModel[]
>>(`/Home/GetGoodsSaleProgressList?${year?'year='+year:''}`);
};
export const getHomeGetDeliverySaleList = (year: string,
) => {
	 return axios.get<ResponseData<AT_DeliverySaleViewModel[]
>>(`/Home/GetDeliverySaleList?${year?'year='+year:''}`);
};
export const postHomeAddQuickMenu = (data:AT_QuickMenuRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Home/AddQuickMenu`,data);
};
export const postHomeGetQuickMenuList = () => {
	 return axios.post<ResponseData<AT_SysPageRouteViewModel[]
>>(`/Home/GetQuickMenuList`);
};
export const postHomeHeadImgUpload = (data:AT_HeadImgUploadModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Home/HeadImgUpload`,data);
};
export const postHomeGetHeadImg = () => {
	 return axios.post<ResponseData<AT_HeadImgUploadModel
>>(`/Home/GetHeadImg`);
};
export const postInStockGetInStockToPage = (data:AT_InStockQueryModel,
) => {
	 return axios.post<ResponseData<AT_InStockPageModelIEnumerableInt32Tuple
>>(`/InStock/GetInStockToPage`,data);
};
export const postInStockInStockReject = (data:AT_InStockRejectRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/InStock/InStockReject`,data);
};
export const postInStockGetInStockRejectToPage = (data:AT_InStockRejectQueryModel,
) => {
	 return axios.post<ResponseData<AT_InStockRejectPageModelIEnumerableInt32Tuple
>>(`/InStock/GetInStockRejectToPage`,data);
};
export const postInStockInStockRecord = (data:AT_InStockRecordRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/InStock/InStockRecord`,data);
};
export const postInStockGetInStockRecordToPage = (data:AT_InStockRecordQueryModel,
) => {
	 return axios.post<ResponseData<AT_InStockRecordPageModelIEnumerableInt32Tuple
>>(`/InStock/GetInStockRecordToPage`,data);
};
export const postInventoryGetInventoryToPage = (data:AT_SyncInventoryQueryModel,
) => {
	 return axios.post<ResponseData<AT_InventoryPageModelIEnumerableInt32Tuple
>>(`/Inventory/GetInventoryToPage`,data);
};
export const postInventoryGetInventoryListToPage = (data:AT_SyncInventoryQueryModel,
) => {
	 return axios.post<ResponseData<AT_InventoryPageModelIEnumerableInt32Tuple
>>(`/Inventory/GetInventoryListToPage`,data);
};
export const postInvestmentGetInvestmentToPage = (data:AT_InvestmentQueryModel,
) => {
	 return axios.post<ResponseData<AT_InvestmentPageModelIEnumerableInt32Tuple
>>(`/Investment/GetInvestmentToPage`,data);
};
export const postInvestmentGetAgentInvestmentToPage = (data:AT_InvestmentQueryModel,
) => {
	 return axios.post<ResponseData<AT_InvestmentPageModelIEnumerableInt32Tuple
>>(`/Investment/GetAgentInvestmentToPage`,data);
};
export const postInvestmentAddAgencyIntention = (data:AT_AgencyIntentionRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Investment/AddAgencyIntention`,data);
};
export const postInvoiceGetInvoiceToPage = (data:AT_InvoiceQueryModel,
) => {
	 return axios.post<ResponseData<AT_InvoicePageModelIEnumerableInt32Tuple
>>(`/Invoice/GetInvoiceToPage`,data);
};
export const postInvoiceConfirmInvoice = (data:AT_ConfirmInvoiceRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/Invoice/ConfirmInvoice`,data);
};
export const getMarketToolkitGetMarketToolkitAttachmentByProCode = (productCode: string,
) => {
	 return axios.get<ResponseData<AT_MarketToolkitAttachmentModel[]
>>(`/MarketToolkit/GetMarketToolkitAttachmentByProCode?${productCode?'productCode='+productCode:''}`);
};
export const postProductFlowtoGetProductFlowToPage = (data:AT_ProductFlowQueryModel,
) => {
	 return axios.post<ResponseData<AT_ProductFlowPageModelIEnumerableInt32Tuple
>>(`/ProductFlowto/GetProductFlowToPage`,data);
};
export const postProductFlowtoImportProductFlow = (data:object,
) => {
	 return axios.post<ResponseData<boolean
>>(`/ProductFlowto/ImportProductFlow`,data);
};
export const postProductFlowtoDeleteProductFlow = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/ProductFlowto/DeleteProductFlow`,data);
};
export const getProductFlowtoGetAffirmState = () => {
	 return axios.get<ResponseData<AT_KeyValueIntViewModel
>>(`/ProductFlowto/GetAffirmState`);
};
export const postPurchasePlanAddPurchasePlan = (data:AT_PurchasePlanRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/PurchasePlan/AddPurchasePlan`,data);
};
export const postPurchasePlanGetPurchasePlanToPage = (data:AT_PurchasePlanQueryModel,
) => {
	 return axios.post<ResponseData<AT_PurchasePlanPageModelIEnumerableInt32Tuple
>>(`/PurchasePlan/GetPurchasePlanToPage`,data);
};
export const postPurchasePlanGetPurchasePlanTurnOrderDetails = (data:number[],
) => {
	 return axios.post<ResponseData<AT_PurchasePlanTurnPurchaseModel
>>(`/PurchasePlan/GetPurchasePlanTurnOrderDetails`,data);
};
export const postPurchasePlanPurchasePlanTurnPurchaseOrder = (data:AT_PurchasePlanTurnPurchaseModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/PurchasePlan/PurchasePlanTurnPurchaseOrder`,data);
};
export const postPurchasePlanGetPurchaseOrderToPage = (data:AT_PurchaseOrderQueryModel,
) => {
	 return axios.post<ResponseData<AT_PurchaseOrderPageModelIEnumerableInt32Tuple
>>(`/PurchasePlan/GetPurchaseOrderToPage`,data);
};
export const getPurchasePlanGetPurchasePlanAttachmentsById = (id: number,
) => {
	 return axios.get<ResponseData<AT_AttachmentModel[]
>>(`/PurchasePlan/GetPurchasePlanAttachmentsById?${id?'id='+id:''}`);
};
export const getPurchasePlanGetPurchaseOrderAttachmentsById = (id: number,
) => {
	 return axios.get<ResponseData<AT_AttachmentModel[]
>>(`/PurchasePlan/GetPurchaseOrderAttachmentsById?${id?'id='+id:''}`);
};
export const postPurchasePlanDeletePurchasePlanDetailsById = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/PurchasePlan/DeletePurchasePlanDetailsById`,data);
};
export const postPurchasePlanInvalidPurchasePlanDetailsById = (data:number[],
) => {
	 return axios.post<ResponseData<boolean
>>(`/PurchasePlan/InvalidPurchasePlanDetailsById`,data);
};
export const getPurchasePlanGetPurchaseOrderById = (id: number,
) => {
	 return axios.get<ResponseData<AT_PurchaseOrderViewModel
>>(`/PurchasePlan/GetPurchaseOrderById?${id?'id='+id:''}`);
};
export const postPurchasePlanGetAvailableContractList = (data:AT_AvailableContractRequestModel,
) => {
	 return axios.post<ResponseData<AT_AvailableContractViewModel[]
>>(`/PurchasePlan/GetAvailableContractList`,data);
};
export const postReturnGoodsAddReturnGoods = (data:AT_ReturnGoodsRequestModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/ReturnGoods/AddReturnGoods`,data);
};
export const postReturnGoodsGetInStockRecordDetail = (data:AT_CanReturnGoodsQueryModel,
) => {
	 return axios.post<ResponseData<AT_InStockRecordViewModel[]
>>(`/ReturnGoods/GetInStockRecordDetail`,data);
};
export const postReturnGoodsGetReturnGoodsToPage = (data:AT_ReturnGoodsQueryModel,
) => {
	 return axios.post<ResponseData<AT_ReturnGoodsPageModelIEnumerableInt32Tuple
>>(`/ReturnGoods/GetReturnGoodsToPage`,data);
};
export const postSyncBulletinGetSyncBulletinToPage = (data:AT_SyncBulletinQueryModel,
) => {
	 return axios.post<ResponseData<AT_BulletinPageModelIEnumerableInt32Tuple
>>(`/SyncBulletin/GetSyncBulletinToPage`,data);
};
export const getSyncBulletinBulletinRead = (bulletinId: number,
) => {
	 return axios.get<ResponseData<boolean
>>(`/SyncBulletin/BulletinRead?${bulletinId?'bulletinId='+bulletinId:''}`);
};
export const getSyncBulletinBulletinUnReadCount = () => {
	 return axios.get<ResponseData<number
>>(`/SyncBulletin/BulletinUnReadCount`);
};
export const postSysAuthorizationDispatchDownstreamPageAuthorization = (data:AT_DispatchAuthorizationModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysAuthorization/DispatchDownstreamPageAuthorization`,data);
};
export const postSysAuthorizationDispatchDownstreamPopupAuthorization = (data:AT_DispatchAuthorizationModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysAuthorization/DispatchDownstreamPopupAuthorization`,data);
};
export const getSysAuthorizationGetDownstreamPageAuthorization = (roleId: number,
) => {
	 return axios.get<ResponseData<AT_PageAuthorizationViewModel[]
>>(`/SysAuthorization/GetDownstreamPageAuthorization?${roleId?'roleId='+roleId:''}`);
};
export const getSysAuthorizationGetDownstreamPopupAuthorization = (roleId: number,
) => {
	 return axios.get<ResponseData<AT_PopupAuthorizationViewModel[]
>>(`/SysAuthorization/GetDownstreamPopupAuthorization?${roleId?'roleId='+roleId:''}`);
};
export const getSysAuthorizationGetAllPageAuthorization = () => {
	 return axios.get<ResponseData<AT_AuthorizationViewModel[]
>>(`/SysAuthorization/GetAllPageAuthorization`);
};
export const getSysAuthorizationGetAllPopupAuthorization = () => {
	 return axios.get<ResponseData<AT_AuthorizationViewModel[]
>>(`/SysAuthorization/GetAllPopupAuthorization`);
};
export const postSysComboBoxAddComboBox = (data:AT_ComboBoxModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysComboBox/AddComboBox`,data);
};
export const postSysComboBoxRemoveComboBox = (comboBoxId: number,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysComboBox/RemoveComboBox?${comboBoxId?'comboBoxId='+comboBoxId:''}`);
};
export const postSysComboBoxUpdateComboBox = (comboBoxId: number,
data:AT_ComboBoxModel,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysComboBox/UpdateComboBox?${comboBoxId?'comboBoxId='+comboBoxId:''}`,data);
};
export const getSysComboBoxGetComboBoxById = (comboBoxId: number,
) => {
	 return axios.get<ResponseData<AT_ComboBoxViewModel
>>(`/SysComboBox/GetComboBoxById?${comboBoxId?'comboBoxId='+comboBoxId:''}`);
};
export const postSysComboBoxGetComboBoxToPage = (data:AT_ComboBoxQueryModel,
) => {
	 return axios.post<ResponseData<AT_ComboBoxPageModelIEnumerableInt32Tuple
>>(`/SysComboBox/GetComboBoxToPage`,data);
};
export const postSysRouteAddPageRoute = (data:AT_SysPageRouteModel,
) => {
	 return axios.post<ResponseData<AT_SysPageRouteViewModel
>>(`/SysRoute/AddPageRoute`,data);
};
export const postSysRouteUpdatePageRoute = (pageRouteId: number,
data:AT_SysPageRouteModel,
) => {
	 return axios.post<ResponseData<AT_SysPageRouteViewModel
>>(`/SysRoute/UpdatePageRoute?${pageRouteId?'pageRouteId='+pageRouteId:''}`,data);
};
export const postSysRouteRemovePageRoute = (pageRoutId: number,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysRoute/RemovePageRoute?${pageRoutId?'pageRoutId='+pageRoutId:''}`);
};
export const getSysRouteGetSysPageRouteById = (pageRoutId: number,
) => {
	 return axios.get<ResponseData<AT_SysPageRouteViewModel
>>(`/SysRoute/GetSysPageRouteById?${pageRoutId?'pageRoutId='+pageRoutId:''}`);
};
export const postSysRouteAddPopupRoute = (data:AT_SysPopupRouteModel,
) => {
	 return axios.post<ResponseData<AT_SysPopupRouteViewModel
>>(`/SysRoute/AddPopupRoute`,data);
};
export const postSysRouteUpdatePopupRoute = (popupRoutId: number,
data:AT_SysPopupRouteModel,
) => {
	 return axios.post<ResponseData<AT_SysPopupRouteViewModel
>>(`/SysRoute/UpdatePopupRoute?${popupRoutId?'popupRoutId='+popupRoutId:''}`,data);
};
export const postSysRouteRemovePopupRoute = (popupRoutId: number,
) => {
	 return axios.post<ResponseData<boolean
>>(`/SysRoute/RemovePopupRoute?${popupRoutId?'popupRoutId='+popupRoutId:''}`);
};
export const getSysRouteGetSysPopupRouteById = (popupRoutId: number,
) => {
	 return axios.get<ResponseData<AT_SysPopupRouteViewModel
>>(`/SysRoute/GetSysPopupRouteById?${popupRoutId?'popupRoutId='+popupRoutId:''}`);
};
export const getSysRouteGetAllSysPopup = () => {
	 return axios.get<ResponseData<AT_SysPopupRouteViewModel[]
>>(`/SysRoute/GetAllSysPopup`);
};
export const getSysRouteGetAllSysPage = () => {
	 return axios.get<ResponseData<AT_SysPageRouteViewModel[]
>>(`/SysRoute/GetAllSysPage`);
};
export enum AT_AccountStateType	{
	正常 = 0,
	冻结 = 1,
};

export declare interface AT_AccurateDeliveryAttachmentViewModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
	/*主键Id*/
	id:number;
};

export declare interface AT_AccurateDeliveryPageModel	{
	/*主键Id*/
	id:number;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*地区*/
	areaName?:string;
	/*医院类型：基层；县级以上；不区分

1 = 基层

2 = 县级以上

3 = 不区分*/
	hospitalType:AT_HospitalType;
	/*终端名称*/
	terminalName?:string;
	/*产品编码：来自可采清单*/
	productCode?:string;
	/*备注*/
	remark?:string;
	/*配送企业*/
	deliveryName?:string;
	/*审核状态：审核中，已审核，驳回

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	auditState:AT_AuditState;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_AccurateDeliveryPageModelIEnumerableInt32Tuple	{
	item1?:AT_AccurateDeliveryPageModel[];
	item2:number;
};

export declare interface AT_AccurateDeliveryQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*审核状态*/
	auditState?:number;
	/*地区*/
	city?:number;
	/*医院类型*/
	hospitalType?:number;
	/*配送公司*/
	deliveryName?:string;
	/*终端名称*/
	terminalName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*详细包装规格*/
	wholePackage?:string;
	/*详细包装规格*/
	manufacturer?:string;
};

export declare interface AT_AccurateDeliveryRequestDetailsModel	{
	/*城市*/
	cityId?:number;
	/*终端名称*/
	terminalName?:string;
	/*配送企业名称：页面上文本框自己输*/
	deliveryName?:string;
	/*备注*/
	remark?:string;
	/*终端*/
	drugTerminalIds?:number[];
};

export declare interface AT_AccurateDeliveryRequestModel	{
	/*省份*/
	provinceId?:number;
	/*医院类型：基层；县级以上；不区分*/
	hospitalType?:number;
	/*产品编码：来自可采清单*/
	productCode?:string;
	/*点配申请详情*/
	details?:AT_AccurateDeliveryRequestDetailsModel[];
};

export declare interface AT_AgencyIntentionAttachmentViewModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
	/*代理意向书主表ID*/
	agencyIntentionId:number;
};

export declare interface AT_AgencyIntentionRequestModel	{
	/*产品编码：招商产品ID*/
	productCode?:string;
	/*生产企业：企业编码*/
	companyName?:string;
	/*愿意缴纳保证金额*/
	margin?:number;
	/*预计年度完成量*/
	completion?:number;
	/*完成量单位*/
	completionUnit?:string;
	/*首批提货数量单位*/
	pickupVolumeUnit?:string;
	/*首批提货数量*/
	pickupVolume?:number;
	/*其他描述*/
	otherDescription?:string;
	/*备注*/
	remark?:string;
	/*团队信息Id*/
	teamInfoID:number;
	/*中标省份*/
	provinceId:number;
	/*团队信息*/
	teamInfo?:AT_TeamInfoRequestModel;
	/*附件列表*/
	attachments?:AT_AgencyIntentionAttachmentViewModel[];
};

export enum AT_ApplicationStatusType	{
	未邮寄 = 0,
	部分邮寄 = 1,
	已邮寄 = 2,
};

export enum AT_ApplictionState	{
	未申请 = 0,
	已申请 = 1,
};

export declare interface AT_ApplyBackMoneyPageModel	{
	/*自增ID*/
	id:number;
	/*单据日期*/
	billDate?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*供应商*/
	supplierName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*出库数量*/
	outAmount?:number;
};

export declare interface AT_ApplyBackMoneyPageModelIEnumerableInt32Tuple	{
	item1?:AT_ApplyBackMoneyPageModel[];
	item2:number;
};

export declare interface AT_ApplyBackMoneyQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*单据日期*/
	billDate?:string[];
	/*生产企业*/
	manufacturer?:string;
	/*供应商*/
	supplierName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
};

export declare interface AT_AttachmentModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
};

export enum AT_AuditState	{
	待审 = 0,
	已审 = 1,
	驳回 = 2,
	未决 = 3,
	无效 = 4,
};

export declare interface AT_AuthorizationInfoModel	{
	/*页面路由id*/
	sysRouteId:number;
	/*权限key*/
	authoriztionKey:number;
	/*权限名*/
	authoriztionName:string;
	/*权限关联弹窗*/
	popupKey?:string;
	/*权限项值(指定的值，可为空)*/
	authorizationItemValues?:string[];
	/*权限类型（1，数据，2按钮）

1 = 数据

2 = 按钮*/
	authorizationType:AT_AuthorizationType;
};

export declare interface AT_AuthorizationItemModel	{
	authorizationItemValues?:AT_KeyValue[];
	authoriztionKey:number;
	authoriztionName?:string;
};

export enum AT_AuthorizationType	{
	数据 = 1,
	按钮 = 2,
};

export declare interface AT_AuthorizationViewModel	{
	/*页面路由id*/
	routeId:number;
	/*路由唯一key*/
	routeKey?:string;
	/*特殊权限项（前后端自定义权限项）*/
	authorizationItems?:AT_RouteAuthorizationItemModel[];
	/*通用数据权限*/
	commonAuthorizationItems?:AT_AuthorizationItemModel[];
};

export declare interface AT_AvailableContractRequestModel	{
	/*供应商编码*/
	supplierCode?:string;
	/*配送公司编码*/
	deliveryCode?:string;
	/*合同价格*/
	contractPrice?:number;
	/*产品编码*/
	productCode?:string;
	/*订单数量*/
	orderAmount?:number;
};

export declare interface AT_AvailableContractViewModel	{
	/*合同编号*/
	contractNumber?:string;
	/*合同编码*/
	contractCode?:string;
	/*合同明细编码*/
	contractDetailsCode?:string;
	/*合同开始时间*/
	startDate?:string;
	readonly startDateText?:string;
	/*合同结束时间*/
	endDate?:string;
	readonly endDateText?:string;
	/*合同价格*/
	contractPrice?:number;
	/*合同总数量*/
	contractAmount?:number;
	/*可用合同数量*/
	availableContractAmount?:number;
	/*本次合同数量*/
	currentContractAmount?:number;
};

export enum AT_BackMoneyBackState	{
	未回款 = 0,
	已回款 = 1,
};

export declare interface AT_BackMoneyRecordPageModel	{
	/*回款状态：未回款；已回款

0 = 未回款

1 = 已回款*/
	backState:AT_BackMoneyBackState;
	/*回款时间*/
	backTime?:string;
	/*配送企业编码*/
	deliveryName?:string;
	/*回款账号*/
	backAccount?:string;
	/*回款金额*/
	backMoney?:number;
	/*摘要*/
	summary?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*生产企业*/
	manufacturer?:string;
	/*供应商编码*/
	supplierName?:string;
	/*退货数量*/
	returnAmount?:number;
	/*退货单单号：退货编码*/
	returnCode?:string;
};

export declare interface AT_BackMoneyRecordPageModelIEnumerableInt32Tuple	{
	item1?:AT_BackMoneyRecordPageModel[];
	item2:number;
};

export declare interface AT_BackMoneyRecordQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*回款时间*/
	backTime?:string[];
	/*生产企业*/
	manufacturer?:string;
	/*供应商*/
	supplierName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
};

export declare interface AT_BankAddRequestModel	{
	/*用户编码*/
	clientCode?:string;
	/*开户银行：建设银行，农业银行*/
	bankName:string;
	/*开户支行*/
	bankBranch?:string;
	/*开户名*/
	accountName:string;
	/*开户名简称：开户名首拼*/
	accountAbb:string;
	/*银行卡号*/
	bankCard?:string;
	/*身份证附件列表*/
	idCardAttachments?:AT_AttachmentModel[];
	/*银行卡号附件列表*/
	bankCardAttachments?:AT_AttachmentModel[];
	/*委托书附件列表*/
	commissionAttachments?:AT_AttachmentModel[];
	/*授权人身份证附件列表*/
	authorizerIdCardAttachments?:AT_AttachmentModel[];
};

export declare interface AT_BankPageModel	{
	/*自增ID*/
	id:number;
	/*账户编码*/
	bankCode?:string;
	/*（账户状态）是否冻结：否，是

0 = 正常

1 = 冻结*/
	accountState:AT_AccountStateType;
	/*开户银行：建设银行，农业银行*/
	bankName?:string;
	/*开户名*/
	accountName?:string;
	/*开户名缩写*/
	accountAbb?:string;
	/*备案状态：备案中，已备案*/
	isFiling?:number;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_BankPageModelIEnumerableInt32Tuple	{
	item1?:AT_BankPageModel[];
	item2:number;
};

export declare interface AT_BankQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*银行卡号*/
	bankCard?:string;
	/*账户编码*/
	bankCode?:string;
	/*开户名*/
	accountName?:string;
	/*开户银行：建设银行，农业银行*/
	bankName?:number;
	/*账户状态 是否冻结：否，是*/
	accountState?:number;
	/*账户状态 是否冻结：否，是*/
	accountAbb?:string;
};

export declare interface AT_BankRequestModel	{
	/*主键Id*/
	id:number;
	/*银行账户编码*/
	bankCode?:string;
	/*冻结/解冻原因*/
	reason:string;
};

export declare interface AT_BulletinPageModel	{
	/*主键*/
	id:number;
	/*类型：通知公告，货源公告*/
	type?:string;
	/*是否已读*/
	isRead?:string;
	/*标题*/
	title?:string;
	/*内容*/
	content?:string;
	/*内容简视：去掉HTML标签保存前100字符以内*/
	contentAbb?:string;
	/*时间*/
	time?:string;
};

export declare interface AT_BulletinPageModelIEnumerableInt32Tuple	{
	item1?:AT_BulletinPageModel[];
	item2:number;
};

export declare interface AT_CanReturnGoodsQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司编码*/
	deliveryCode?:string;
	/*供应商编码*/
	supplierCode?:string;
};

export declare interface AT_CollectViewModel	{
	/*主键Id*/
	id:number;
	/*收款公司*/
	collectCompany?:string;
	/*收款账户*/
	collectAccount?:string;
	/*收款公司编码*/
	companyCode?:string;
	/*银行卡编码*/
	bankCardCode?:string;
};

export declare interface AT_ComboBoxModel	{
	/*Id*/
	id?:number;
	/*下拉类型

1 = 企业属性

2 = 公示公告类型

3 = 开户银行*/
	type:AT_ComboBoxType;
	/*数值名称*/
	valueName?:string;
	/*序号*/
	sort:number;
	/*是否默认值*/
	isDefaultValue:number;
};

export declare interface AT_ComboBoxPageModel	{
	id:number;
	/*下拉类型

1 = 企业属性

2 = 公示公告类型

3 = 开户银行*/
	readonly typeText:AT_ComboBoxType;
	/*下拉类型

1 = 企业属性

2 = 公示公告类型

3 = 开户银行*/
	type:AT_ComboBoxType;
	/*名称*/
	valueName?:string;
	/*序号*/
	sort:number;
	/*是否默认值*/
	isDefaultValue:number;
};

export declare interface AT_ComboBoxPageModelIEnumerableInt32Tuple	{
	item1?:AT_ComboBoxPageModel[];
	item2:number;
};

export declare interface AT_ComboBoxQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*下拉类型编码*/
	type?:number;
	/*下拉框名称*/
	valueName?:string;
};

export enum AT_ComboBoxType	{
	企业属性 = 1,
	公示公告类型 = 2,
	开户银行 = 3,
};

export declare interface AT_ComboBoxViewModel	{
	/*id*/
	id:number;
	/*下拉类型

1 = 企业属性

2 = 公示公告类型

3 = 开户银行*/
	type:AT_ComboBoxType;
	/*数值名称*/
	valueName?:string;
	/*序号*/
	sort:number;
	/*是否默认值*/
	isDefaultValue:number;
};

export declare interface AT_CompanyBankRequestModel	{
	/*通用编码*/
	comCode?:string;
	/*开户行*/
	bankName?:string;
	/*开户名*/
	accountName?:string;
	/*账号*/
	bankCard?:string;
};

export declare interface AT_CompanyBankViewModel	{
	/*开户行*/
	bankName?:string;
	/*开户名*/
	accountName?:string;
	/*账号*/
	bankCard?:string;
};

export declare interface AT_CompanyInvoiceRequestModel	{
	/*通用编码*/
	comCode?:string;
	/*开户行*/
	bankName?:string;
	/*开户名*/
	accountName?:string;
	/*账号*/
	bankCard?:string;
	/*税号：纳税识别号*/
	taxNumber?:string;
};

export declare interface AT_CompanyInvoiceViewModel	{
	/*开户行*/
	bankName?:string;
	/*开户名*/
	accountName?:string;
	/*账号*/
	bankCard?:string;
	/*税号：纳税识别号*/
	taxNumber?:string;
};

export declare interface AT_CompanyReceiptViewModel	{
	/*收货人*/
	receiver?:string;
	/*收货电话*/
	mobile?:string;
	/*收货地址*/
	address?:string;
	/*通用编码*/
	comCode?:string;
	/*收货委托书开始时间*/
	receiptStartDate?:string;
	/*收货委托书结束时间*/
	receiptEndDate?:string;
	/*是否默认收件地址*/
	isDefault?:number;
	/*省份Id*/
	provinceId?:number;
	/*省份名称*/
	provinceName?:string;
	/*城市Id*/
	cityId?:number;
	/*城市名称*/
	cityName?:string;
};

export declare interface AT_CompanyViewModel	{
	/*企业编码*/
	companyCode?:string;
	/*企业名称*/
	companyName?:string;
	/*采购委托人*/
	entrust?:string;
	/*采购委托开始时间*/
	entrustStartDate?:string;
	/*采购委托结束时间*/
	entrustEndDate?:string;
	/*统一社会信用代码*/
	creditCode?:string;
	/*省份*/
	provinceId:number;
	/*区域*/
	cityId:number;
	/*注册地址*/
	address?:string;
};

export declare interface AT_ConfirmApplyRequestModel	{
	/*回款待申请列表Id*/
	ids?:number[];
};

export declare interface AT_ConfirmInvoiceRequestModel	{
	/*发票Id集合*/
	ids?:number[];
};

export declare interface AT_Contract	{
	/*自增ID*/
	id:number;
	/*主账号Code*/
	mainClientCode?:string;
	/*子账号Code*/
	childClientCode?:string;
	/*合同编码：2050*/
	contractCode?:string;
	/*已申请；待回收；已回收；驳回；作废*/
	contractStatus?:number;
	/*合同类型：年度合同，批次合同*/
	contractType?:number;
	/*供应商：企业编码；来自可采清单*/
	supplierCode?:string;
	/*配送企业：企业编码*/
	deliveryCode?:string;
	/*合同开始时间*/
	startDate?:string;
	/*合同结束时间*/
	endDate?:string;
	/*邮寄时间*/
	mailingTime?:string;
	/*快速公司*/
	courierCompany?:string;
	/*快递单号*/
	trackingNumber?:string;
	/*通用编码*/
	comCode?:string;
	/*收件地址*/
	receivingInfo?:string;
	/*有效性(0:无效；1:有效)*/
	valid:number;
	/*系统标识*/
	sysCode?:string;
	/*来源UUID*/
	fromUuid?:string;
};

export declare interface AT_ContractDetails	{
	/*自增ID*/
	id:number;
	/*产品编码：来自可采清单，根据供应商筛选*/
	productCode?:string;
	/*合同数量*/
	contractAmount?:number;
	/*合同价格*/
	contractPrice?:number;
	/*合同金额*/
	contractMoney?:number;
	/*合同编码*/
	contractCode?:string;
	/*有效性(0:无效；1:有效)*/
	valid:number;
	/*系统标识*/
	sysCode?:string;
	/*来源UUID*/
	fromUuid?:string;
};

export declare interface AT_ContractDetailsViewModel	{
	/*自增ID*/
	id:number;
	/*产品编码：来自可采清单，根据供应商筛选*/
	productCode?:string;
	/*合同数量*/
	contractAmount?:number;
	/*合同价格*/
	contractPrice?:number;
	/*合同金额*/
	contractMoney?:number;
	/*合同编码*/
	contractCode?:string;
	/*有效性(0:无效；1:有效)*/
	valid:number;
	/*系统标识*/
	sysCode?:string;
	/*来源UUID*/
	fromUuid?:string;
	/*通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
};

export declare interface AT_ContractPageModel	{
	/*自增ID*/
	id:number;
	/*主账号Code*/
	mainClientCode?:string;
	/*子账号Code*/
	childClientCode?:string;
	/*合同编码：2050*/
	contractCode?:string;
	/*已申请；待回收；已回收；驳回；作废

0 = 已申请

1 = 已签订

2 = 待回寄

3 = 已回寄

4 = 已存档

5 = 已驳回

6 = 已作废*/
	contractStatus:AT_ContractStatusType;
	/*合同类型：年度合同，批次合同

1 = 年度合同

2 = 批次合同*/
	contractType:AT_ContractType;
	/*供应商：企业编码；来自可采清单*/
	supplierCode?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*配送企业：企业编码*/
	deliveryCode?:string;
	/*配送企业：企业名称*/
	deliveryName?:string;
	/*合同开始时间*/
	startDate?:string;
	/*合同结束时间*/
	endDate?:string;
	/*快递信息：营销系统邮寄信息*/
	expressInfo?:string;
	/*邮寄时间*/
	mailingTime?:string;
	/*签订时间*/
	signDate?:string;
	/*快速公司*/
	courierCompany?:string;
	/*快递单号*/
	trackingNumber?:string;
	/*有效性(0:无效；1:有效)*/
	valid:number;
	/*系统标识*/
	sysCode?:string;
	/*来源UUID*/
	fromUuid?:string;
	/*通用名*/
	drugName?:string;
	/*剂型*/
	dosageForm?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*规格*/
	standard?:string;
	/*件装*/
	wholePackage?:string;
	/*生产企业*/
	manufacturer?:string;
	/*产品编码：来自可采清单，根据供应商筛选*/
	productCode?:string;
	/*合同数量*/
	contractAmount?:number;
	/*合同价格*/
	contractPrice?:number;
	/*合同金额*/
	contractMoney?:number;
	/*合同编号*/
	contractNumber?:string;
	time?:string;
	/*通用编码*/
	comCode?:string;
	/*收件地址*/
	receivingInfo?:string;
};

export declare interface AT_ContractPageModelIEnumerableInt32Tuple	{
	item1?:AT_ContractPageModel[];
	item2:number;
};

export declare interface AT_ContractQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送企业*/
	deliveryName?:string;
	/*供应商*/
	supplierName?:string;
	/*通用名*/
	drugName?:string;
	/*生产企业*/
	manufacturer?:string;
	/*合同状态*/
	contractStatus?:number;
};

export enum AT_ContractStatusType	{
	已申请 = 0,
	已签订 = 1,
	待回寄 = 2,
	已回寄 = 3,
	已存档 = 4,
	已驳回 = 5,
	已作废 = 6,
};

export enum AT_ContractType	{
	年度合同 = 1,
	批次合同 = 2,
};

export enum AT_DatabaseType	{
	SqlServer = 0,
	Oracle = 1,
	MySql = 2,
};

export declare interface AT_DeliveryClientPageModel	{
	/*自增ID*/
	id:number;
	/*状态：审核中，已审核，驳回

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	state:AT_AuditState;
	/*供应商：企业名称*/
	supplierName?:string;
	/*配送公司名称*/
	deliveryName?:string;
	/*采购委托人*/
	entrust?:string;
	/*采购委托开始时间*/
	entrustStartDate?:string;
	/*采购委托结束时间*/
	entrustEndDate?:string;
	/*配送公司编码：企业编码；2046*/
	deliveryCode?:string;
	/*供应商编码*/
	supplierCode?:string;
	/*备注*/
	note?:string;
	/*省份*/
	provinceId:number;
	/*地区*/
	cityId:number;
	/*注册地址*/
	address?:string;
	/*统一社会信用代码*/
	creditCode?:string;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_DeliveryClientPageModelIEnumerableInt32Tuple	{
	item1?:AT_DeliveryClientPageModel[];
	item2:number;
};

export declare interface AT_DeliveryClientQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*状态*/
	state?:number;
	/*采购委托人*/
	entrust?:string;
};

export declare interface AT_DeliveryClientRequestModel	{
	/*配送企业编码*/
	deliveryCode:string;
	/*供应商：企业编码*/
	supplierCode?:string;
	/*备注*/
	remark?:string;
};

export declare interface AT_DeliveryModel	{
	/*配送公司名称*/
	deliveryName:string;
	/*配送公司：企业编码*/
	deliveryCode?:string;
	/*供应商：企业编码*/
	supplierCode:string;
	/*采购委托人*/
	entrust:string;
	/*采购委托开始时间*/
	entrustStartDate:string;
	/*采购委托结束时间*/
	entrustEndDate:string;
	/*备注*/
	remark?:string;
	/*所属省份*/
	provinceId:number;
	/*所属区域*/
	cityId:number;
	/*注册地址*/
	address:string;
	/*统一社会信用代码*/
	creditCode:string;
	/*收货信息*/
	deliveryReceipts?:AT_DeliveryReceiptModel[];
	/*企业开票信息列表*/
	companyInvoices?:AT_CompanyInvoiceRequestModel[];
	/*基本账户信息列表*/
	companyBanks?:AT_CompanyBankRequestModel[];
};

export declare interface AT_DeliveryPageModel	{
	/*自增ID*/
	id:number;
	/*状态：审核中，已审核，驳回

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	state:AT_AuditState;
	/*配送公司名称*/
	deliveryName?:string;
	/*所属省份*/
	provinceName?:string;
	/*所属区域*/
	cityName?:string;
	/*统一社会信用代码*/
	creditCode?:string;
	/*配送公司编码：企业编码；2046*/
	deliveryCode?:string;
	/*供应商编码*/
	supplierCode?:string;
	/*所属省份*/
	provinceId?:number;
	/*所属区域*/
	cityId?:number;
	/*注册地址*/
	address?:string;
	/*采购委托人*/
	entrust?:string;
	/*采购委托开始时间*/
	entrustStartDate?:string;
	/*采购委托结束时间*/
	entrustEndDate?:string;
	/*备注*/
	remark?:string;
};

export declare interface AT_DeliveryPageModelIEnumerableInt32Tuple	{
	item1?:AT_DeliveryPageModel[];
	item2:number;
};

export declare interface AT_DeliveryPriceModel	{
	/*主键Id*/
	id?:number;
	/*产品编码*/
	productCode?:string;
	/*配送公司编码*/
	deliveryCode?:string;
	/*开票价格*/
	billingPrice?:number;
	/*备注*/
	remark?:string;
};

export declare interface AT_DeliveryPricePageModel	{
	id:number;
	/*审核状态

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	auditState:AT_AuditState;
	/*供应商*/
	supplierName?:string;
	/*配送公司*/
	deliveryName?:string;
	/*开票价格*/
	billingPrice?:number;
	/*通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*配送公司编码：企业编码；2046*/
	deliveryCode?:string;
	/*备注*/
	note?:string;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?:string;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_DeliveryPricePageModelIEnumerableInt32Tuple	{
	item1?:AT_DeliveryPricePageModel[];
	item2:number;
};

export declare interface AT_DeliveryPriceQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*供应商*/
	supplierName?:string;
	/*配送公司*/
	deliveryName?:string;
	/*通用名*/
	drugName?:string;
};

export declare interface AT_DeliveryPriceViewModel	{
	/*主键Id*/
	id?:number;
	/*产品编码*/
	productCode?:string;
	/*配送公司编码*/
	deliveryCode?:string;
	/*开票价格*/
	billingPrice?:number;
	/*备注*/
	remark?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*注册剂型*/
	dosageForm?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturerName?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*供应商*/
	supplierName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*配送商业政策Id：来源营销系统*/
	cooperationDeliveryId?:number;
};

export declare interface AT_DeliveryQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*采购委托人*/
	entrust?:string;
};

export declare interface AT_DeliveryReceiptModel	{
	/*通用编码*/
	comCode?:string;
	/*收货人*/
	receiver?:string;
	/*收货电话*/
	mobile?:string;
	/*省份*/
	provinceId?:number;
	/*市区*/
	cityId?:number;
	/*收货地址*/
	address?:string;
	/*收货委托书开始时间*/
	receiptStartDate?:string;
	/*收货委托书结束时间*/
	receiptEndDate?:string;
	/*是否默认收件地址*/
	isDefault?:number;
};

export declare interface AT_DeliverySaleViewModel	{
	/*配送企业名称*/
	deliveryName?:string;
	/*配送企业编码*/
	deliveryCode?:string;
	/*销售额*/
	saleAmount:number;
};

export declare interface AT_DispatchAuthorizationModel	{
	/*角色Id*/
	roleId:number;
	/*页面路由*/
	sysRouteIds?:number[];
	/*分配权限值*/
	authorizationInfos?:AT_AuthorizationInfoModel[];
};

export declare interface AT_DispatchAuthorizationToUserModel	{
	/*角色Id*/
	roleId:number;
	/*页面路由*/
	sysRouteIds?:number[];
	/*分配权限值*/
	authorizationInfos?:AT_AuthorizationInfoModel[];
	/*用户id*/
	userId:number;
};

export declare interface AT_DrugTerminalSimpleModel	{
	/*自增ID*/
	id?:number;
	/*医疗机构名称*/
	organName?:string;
};

export declare interface AT_DynamicParameters	{
	removeUnused:boolean;
	readonly parameterNames?:string[];
};

export declare interface AT_EarnestAttachmentRequestModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
};

export declare interface AT_EarnestDetailsRequestModel	{
	/*产品编码：来自招商目录，根据意向代理省份筛选*/
	productCode?:string;
	/*付款金额*/
	paymentAmount:number;
	/*保证金用途*/
	earnestUse?:number;
	/*附件列表*/
	attachments?:AT_EarnestAttachmentRequestModel[];
};

export declare interface AT_EarnestPageModel	{
	/*自增ID*/
	id:number;
	/*付款状态(待认款；已认款；申请退款；部分退款；已退款)

0 = 待认款

1 = 已认款

2 = 申请退款

3 = 部分退款

4 = 已退款*/
	state:AT_EarnestPaymentState;
	/*审核状态*/
	auditState?:number;
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType:AT_EarnestType;
	/*付款公司*/
	paymentCompany?:string;
	/*付款账号*/
	paymentAccount?:string;
	/*收款公司*/
	collectCompany?:string;
	/*收款账号*/
	collectAccount?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业：企业名称*/
	manufacturer?:string;
	/*付款时间*/
	paymentTime?:string;
	/*付款金额*/
	paymentAmount?:number;
	/*退款金额*/
	refundAmount?:number;
	/*退款时间*/
	refundTime?:string;
	/*备注*/
	remark?:string;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_EarnestPageModelIEnumerableInt32Tuple	{
	item1?:AT_EarnestPageModel[];
	item2:number;
};

export enum AT_EarnestPaymentState	{
	待认款 = 0,
	已认款 = 1,
	申请退款 = 2,
	部分退款 = 3,
	已退款 = 4,
};

export declare interface AT_EarnestQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*生产企业：企业名称*/
	manufacturer?:string;
	/*付款公司*/
	paymentCompany?:string;
	/*付款状态(待认款；已认款；申请退款；部分退款；已退款)*/
	state?:number;
};

export declare interface AT_EarnestRefundRecordViewModel	{
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType:AT_EarnestType;
	/*付款公司*/
	paymentCompany?:string;
	/*付款账号*/
	paymentAccount?:string;
	/*收款公司*/
	collectCompany?:string;
	/*收款账号*/
	collectAccount?:string;
	/*付款金额*/
	paymentAmount?:number;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*注册剂型*/
	dosageForm?:string;
	/*注册规格*/
	standard?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*退款金额*/
	refundAmount?:number;
	/*退款原因*/
	refundNote?:string;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse:AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText:AT_EarnestUse;
};

export declare interface AT_EarnestRefundRequestModel	{
	/*保证金明细主键Id*/
	detailId:number;
	/*退款金额*/
	refundAmount?:number;
	/*退款原因*/
	refundNote?:string;
};

export declare interface AT_EarnestRequestModel	{
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)*/
	earnestType:number;
	/*付款公司*/
	paymentCompany:string;
	/*付款账号*/
	paymentAccount:string;
	/*付款时间*/
	paymentTime?:string;
	/*付款总金额*/
	paymentAmount:number;
	/*收款公司*/
	collectCompany:string;
	/*收款账号*/
	collectAccount:string;
	/*收款公司编码*/
	companyCode?:string;
	/*银行卡编码*/
	bankCardCode?:string;
	/*备注*/
	note?:string;
	/*保证金详情列表*/
	earnestDetails?:AT_EarnestDetailsRequestModel[];
};

export enum AT_EarnestType	{
	单次货款保证金 = 1,
	长期货款保证金 = 2,
	市场保证金 = 3,
	招标保证金 = 4,
};

export enum AT_EarnestUse	{
	开发保证金 = 1,
	上量保证金 = 2,
	招标保证金 = 3,
	医保保证金 = 4,
};

export declare interface AT_Feedback	{
	/*上报类型：不良反应反馈；抽检反馈*/
	type?:number;
	/*产品编码*/
	productCode:string;
	/*配送企业编码*/
	deliveryCode?:string;
	/*批号*/
	batchNo?:string;
	/*备注*/
	note?:string;
};

export declare interface AT_FeedbackBad	{
	/*终端医院*/
	hospital?:string;
	/*症状*/
	symptom?:string;
	/*客户需求*/
	demand?:string;
	/*联系人*/
	contact?:string;
	/*手机号码*/
	mobile?:string;
};

export declare interface AT_FeedbackCheck	{
	/*被抽检单位*/
	checkUnit?:string;
	/*单位名称*/
	unitName?:string;
	/*检验机构*/
	agency?:string;
	/*联系人*/
	contact?:string;
	/*手机号码*/
	mobile?:string;
};

export declare interface AT_FeedbackPageModel	{
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*处理状态：已处理；未处理；已知晓

1 = 未处理

2 = 已知晓

3 = 已处理*/
	state:AT_FeedbackStateMode;
	/*上报类型：不良反应反馈；抽检反馈

1 = 不良反应反馈

2 = 抽检反馈*/
	type:AT_FeedbackType;
	/*批号*/
	batchNo?:string;
	/*反馈时间*/
	feedbackTime?:string;
	/*配送公司：企业名称*/
	deliveryName?:string;
	time?:string;
};

export declare interface AT_FeedbackPageModelIEnumerableInt32Tuple	{
	item1?:AT_FeedbackPageModel[];
	item2:number;
};

export declare interface AT_FeedbackQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*处理状态：已处理；未处理；已知晓*/
	state?:number;
	/*上报类型：不良反应反馈；抽检反馈*/
	type?:number;
};

export declare interface AT_FeedbackRequestModel	{
	/*质量管理主表*/
	feedback?:AT_Feedback;
	/*不良反馈*/
	feedbackbad?:AT_FeedbackBad;
	/*抽检反馈*/
	feedbackcheck?:AT_FeedbackCheck;
	/*质量管理（附件集合）*/
	attachments?:AT_PurchaseFeedbackAttachmentRequestModel[];
};

export enum AT_FeedbackStateMode	{
	未处理 = 1,
	已知晓 = 2,
	已处理 = 3,
};

export enum AT_FeedbackType	{
	不良反应反馈 = 1,
	抽检反馈 = 2,
};

export declare interface AT_FirstCampCompanyPageModel	{
	/*自增ID*/
	id:number;
	/*申请状态：未邮寄，已邮寄

0 = 未邮寄

1 = 部分邮寄

2 = 已邮寄*/
	applicationStatus:AT_ApplicationStatusType;
	/*供应商：企业编码；来自可采清单*/
	supplierCode?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*资料明细*/
	details?:string;
	/*申请数量*/
	numApplications?:number;
	/*申请日期*/
	dateApplication?:string;
	/*备注*/
	remark?:string;
	/*供应商邮寄信息*/
	supplierInformation?:string;
	/*邮寄数量*/
	mailingQuantity?:number;
	/*收件信息*/
	receivingInfo?:string;
};

export declare interface AT_FirstCampCompanyPageModelIEnumerableInt32Tuple	{
	item1?:AT_FirstCampCompanyPageModel[];
	item2:number;
};

export declare interface AT_FirstCampCompanyQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*供应商：企业名称*/
	supplierName?:string;
	/*申请状态：未邮寄，已邮寄*/
	applicationStatus?:number;
	/*申请日期*/
	dateApplication?:string[];
};

export declare interface AT_FirstCampCompanyRequestModel	{
	/*供应商：企业编码；来自可采清单*/
	supplierCode:string;
	/*资料明细*/
	details:string;
	/*申请数量*/
	numApplications:number;
	/*申请日期*/
	dateApplication?:string;
	/*收件信息*/
	receivingInfo?:string;
	/*备注*/
	remark?:string;
	/*首营配送商业*/
	firstCampDeliveries?:AT_FirstCampDeliveryModel[];
};

export declare interface AT_FirstCampCompanyViewModel	{
	/*自增ID*/
	id:number;
	/*供应商：企业编码；来自可采清单*/
	supplierCode?:string;
	/*供应商*/
	supplierName?:string;
	/*资料明细*/
	details?:string;
	/*申请数量*/
	numApplications?:number;
	/*申请日期*/
	dateApplication?:string;
	/*收件信息*/
	receivingInfo?:string;
	/*备注*/
	remark?:string;
	/*首营配送商业*/
	firstCampDeliveries?:AT_FirstCampDeliveryModel[];
};

export declare interface AT_FirstCampDeliveryModel	{
	/*自增ID，新增时为空*/
	id?:number;
	/*配送商业名称*/
	deliveryName?:string;
};

export declare interface AT_FirstCampVarietyPageModel	{
	/*自增ID*/
	id:number;
	/*申请状态：未邮寄，已邮寄

0 = 未邮寄

1 = 部分邮寄

2 = 已邮寄*/
	applicationStatus:AT_ApplicationStatusType;
	/*产品编码*/
	productCode?:string;
	/*资料明细*/
	details?:string;
	/*申请数量*/
	numApplications?:number;
	/*申请日期*/
	dateApplication?:string;
	/*备注*/
	remark?:string;
	/*供应商邮寄信息*/
	supplierInformation?:string;
	/*收件信息*/
	receivingInfo?:string;
	/*邮寄数量*/
	mailingQuantity?:number;
	/*产品名*/
	drugName?:string;
	/*剂型*/
	dosageForm?:string;
	/*规格*/
	standard?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*生产企业*/
	manufacturer?:string;
};

export declare interface AT_FirstCampVarietyPageModelIEnumerableInt32Tuple	{
	item1?:AT_FirstCampVarietyPageModel[];
	item2:number;
};

export declare interface AT_FirstCampVarietyQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*通用名*/
	drugName?:string;
	/*申请状态：未邮寄，已邮寄*/
	applicationStatus?:number;
	/*生产企业*/
	manufacturer?:string;
};

export declare interface AT_FirstCampVarietyRequestModel	{
	/*产品编码*/
	productCode:string;
	/*资料明细*/
	details:string;
	/*申请数量*/
	numApplications:number;
	/*申请日期*/
	dateApplication?:string;
	/*收件信息*/
	receivingInfo?:string;
	/*备注*/
	remark?:string;
	/*首营配送商业*/
	firstCampDeliveries?:AT_FirstCampDeliveryModel[];
};

export declare interface AT_ForgetPasswordModel	{
	/*手机号码*/
	account?:string;
	/*验证码*/
	verificationCode:string;
	/*密码*/
	password:string;
	/*确认密码*/
	confirmPassword:string;
};

export declare interface AT_GoodsSaleProgressViewModel	{
	/*产品编码*/
	productCode?:string;
	/*产品名称*/
	drugName?:string;
	/*任务量*/
	contractAmount:number;
	/*实际入库量*/
	intoAmount:number;
};

export declare interface AT_HeadImgUploadModel	{
	/*原头像（地址）*/
	headImg?:string;
	/*缩略图（地址）*/
	headAbb?:string;
};

export enum AT_HospitalType	{
	基层 = 1,
	县级以上 = 2,
	不区分 = 3,
};

export declare interface AT_InStockPageModel	{
	/*主键*/
	id:number;
	/*状态

3 = 已发货*/
	state:AT_InStockState;
	/*订单时间*/
	purchaseTime?:string;
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	/*配送公司*/
	deliveryName?:string;
	/*供应商编码*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*订单数量*/
	quantityOrder:number;
	/*待入库数量=订单数量-已入库数量-拒绝数量*/
	prepareIntoAmount?:number;
	/*批号*/
	batchNo?:string;
	/*发货时间*/
	sendTime?:string;
	/*发货地点*/
	sendPlace?:string;
	/*发货方式*/
	sendMode?:string;
	/*发货物流*/
	logistic?:string;
	/*物流电话*/
	phone?:string;
	/*入库数量*/
	intoAmount?:number;
	time?:string;
	/*送达方式文本*/
	carryMode?:string;
	/*物流单号*/
	logisticsNo?:string;
};

export declare interface AT_InStockPageModelIEnumerableInt32Tuple	{
	item1?:AT_InStockPageModel[];
	item2:number;
};

export declare interface AT_InStockQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*订单编码：采购订单编码*/
	state?:string;
	/*订单时间*/
	purchaseTime?:string[];
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	/*配送公司*/
	deliveryName?:string;
	/*供应商*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage?:number;
	/*生产企业*/
	manufacturer?:string;
	/*订单数量*/
	quantityOrder?:number;
	/*待入库数量*/
	prepareIntoAmount?:number;
	/*批号*/
	batchNo?:string;
	/*发货时间*/
	sendTime?:string[];
};

export declare interface AT_InStockRecord	{
	/*待入库记录主键Id*/
	inStockId:number;
	/*入库数量*/
	intoAmount:number;
	/*是否完成入库：否，是*/
	isFinish?:number;
};

export declare interface AT_InStockRecordPageModel	{
	/*发票状态

0 = 未开票

1 = 已开票

2 = 已邮寄

3 = 随货同行

4 = 已收票*/
	invoiceState:AT_InvoiceState;
	/*入库时间*/
	inStockTime:string;
	/*配送公司*/
	deliveryName?:string;
	/*供应商编码*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*批号*/
	batchNo?:string;
	/*入库数量*/
	intoAmount?:number;
	/*入库件数*/
	intoPackage?:number;
	/*拒收数量*/
	rejectAmount?:number;
	/*拒收件数*/
	rejectPackage?:number;
	/*拒收原因*/
	rejectNote?:string;
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	/*产品编码*/
	productCode?:string;
	/*配送公司编码*/
	deliveryCode?:string;
};

export declare interface AT_InStockRecordPageModelIEnumerableInt32Tuple	{
	item1?:AT_InStockRecordPageModel[];
	item2:number;
};

export declare interface AT_InStockRecordQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*发票状态*/
	invoiceState?:number;
	/*入库时间*/
	inStockTime?:string[];
	/*配送公司*/
	deliveryName?:string;
	/*供应商*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage?:number;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*批号*/
	batchNo?:string;
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	/*订单数量*/
	intoAmount?:number;
};

export declare interface AT_InStockRecordRequestModel	{
	/*入库记录集合*/
	inStockRecords?:AT_InStockRecord[];
};

export declare interface AT_InStockRecordViewModel	{
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*入库数量*/
	intoAmount?:number;
	/*已退货数量*/
	hasReturnAmount?:string;
	/*退货数量(前端输入)*/
	returnAmount?:string;
	/*开票价格*/
	invoicePrice?:number;
	/*退货金额(自动计算 输入的数量*价格)*/
	returnMoney?:number;
	/*可退货金额*/
	allowReturnAmount?:number;
	/*批号*/
	batchNo?:string;
	/*订单编码：来自入库管理*/
	purchaseCode?:string;
	/*产品编码：来自入库管理*/
	productCode?:string;
	/*销售编码：来自入库管理*/
	saleCode?:string;
};

export declare interface AT_InStockRejectPageModel	{
	/*货物状态

0 = 退回未收到

1 = 退回已收到

2 = 已补货*/
	state:AT_InStockRejectState;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*批号*/
	batchNo?:string;
	/*拒收数量*/
	rejectAmount?:number;
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	time?:string;
	/*拒收原因*/
	rejectNote?:string;
};

export declare interface AT_InStockRejectPageModelIEnumerableInt32Tuple	{
	item1?:AT_InStockRejectPageModel[];
	item2:number;
};

export declare interface AT_InStockRejectQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*订单编码：采购订单编码*/
	purchaseCode?:string;
	/*批号*/
	batchNo?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*货物状态*/
	state?:number;
};

export declare interface AT_InStockRejectRequestModel	{
	/*待入库表ID*/
	inStockId:number;
	/*拒收数量*/
	rejectAmount?:number;
	/*拒收原因*/
	rejectNote?:string;
	/*是否完成入库：否，是*/
	isFinish?:number;
	/*入库附件列表*/
	attachments?:AT_AttachmentModel[];
};

export enum AT_InStockRejectState	{
	退回未收到 = 0,
	退回已收到 = 1,
	已补货 = 2,
};

export enum AT_InStockState	{
	已发货 = 3,
};

export declare interface AT_IntentionViewModel	{
	/*愿意缴纳保证金额*/
	margin?:number;
	/*预计年度完成量*/
	completion?:number;
	/*完成量单位：支，盒，袋*/
	completionUnit?:string;
	/*首批提货数量*/
	pickupVolume?:number;
	/*首批提货数量单位*/
	pickupVolumeUnit?:string;
	/*其他描述*/
	otherDescription?:string;
	/*备注*/
	note?:string;
	/*审核状态：审核中，已审核，驳回*/
	auditState?:number;
	/*附件*/
	attachments?:AT_AgencyIntentionAttachmentViewModel[];
};

export declare interface AT_InventoryPageModel	{
	/*自增ID*/
	id:number;
	/*产品编码*/
	productCode?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*注册剂型*/
	dosageForm?:string;
	/*注册规格*/
	standard?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*制剂特点*/
	features?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*上市许可持有人：企业编码*/
	holder?:string;
	/*件装*/
	wholePackage:number;
	/*供应商：企业编码*/
	supplier?:string;
	/*中标价格*/
	packagePrice:number;
	/*包装单位*/
	packageUnit?:string;
	/*中标省份(地区表)*/
	provinceName?:string;
	/*开票价*/
	billingPrice?:number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?:string;
	time?:string;
};

export declare interface AT_InventoryPageModelIEnumerableInt32Tuple	{
	item1?:AT_InventoryPageModel[];
	item2:number;
};

export declare interface AT_InvestmentPageModel	{
	/*自增ID*/
	id:number;
	/*产品编码*/
	productCode?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*制剂特点*/
	features?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*上市许可持有人：企业编码*/
	holder?:string;
	/*件装*/
	wholePackage:number;
	/*中标价格*/
	packagePrice:number;
	/*中标省份(地区表)*/
	provinceName?:string;
	/*中标省份编码(地区表)*/
	provinceId:number;
	/*最小制剂单位计价单位*/
	minPreparationPricingUnit?:string;
	/*包装单位*/
	packageUnit?:string;
	/*医保属性：甲类，乙类，非医保*/
	medicare?:string;
	/*基药属性：基药，非基药*/
	essential?:string;
	/*产品特点*/
	feature?:string;
	/*申请状态

0 = 未申请

1 = 已申请*/
	applictionState:AT_ApplictionState;
	/*时间*/
	time?:string;
};

export declare interface AT_InvestmentPageModelIEnumerableInt32Tuple	{
	item1?:AT_InvestmentPageModel[];
	item2:number;
};

export declare interface AT_InvestmentQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*上市许可持有人：企业编码*/
	holder?:string;
};

export declare interface AT_InvestmentViewModel	{
	/*产品编码*/
	productCode?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*注册剂型*/
	dosageForm?:string;
	/*注册规格*/
	standard?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*制剂特点*/
	features?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*生产企业*/
	manufacturerName?:string;
	/*上市许可持有人：企业编码*/
	holder?:string;
	/*上市许可持有人*/
	holderName?:string;
	/*供应商：企业编码*/
	supplier?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*中标价*/
	packagePrice?:number;
	/*中标省份*/
	provinceId?:number;
	/*是否带量*/
	isBring?:boolean;
	/*开票价格*/
	invoicePrice?:number;
};

export declare interface AT_InvoicePageModel	{
	/*自增ID*/
	id:number;
	/*状态：未开票；已开票；已邮寄；随货同行；已收票

0 = 未开票

1 = 已开票

2 = 已邮寄

3 = 随货同行

4 = 已收票*/
	invoiceState:AT_InvoiceState;
	/*开票时间*/
	invoiceTime?:string;
	/*税票号*/
	taxNo?:string;
	/*税票金额*/
	taxMoney?:number;
	/*快递公司*/
	express?:string;
	/*快递单号*/
	expressNo?:string;
	/*邮寄时间*/
	mailDate?:string;
	/*收件人*/
	recipient?:string;
	/*收件地址*/
	address?:string;
	/*单据来源：采购订单； 采购退货单*/
	source?:string;
	/*订单单号：订单编码*/
	orderCode?:string;
	/*订单日期：订单提交时间*/
	orderDate?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*件装*/
	wholePackage:number;
	/*供应商*/
	supplierName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*开票价格*/
	invoicePrice?:number;
	/*订单数量*/
	orderAmount?:number;
};

export declare interface AT_InvoicePageModelIEnumerableInt32Tuple	{
	item1?:AT_InvoicePageModel[];
	item2:number;
};

export declare interface AT_InvoiceQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*开票时间*/
	invoiceTime?:string[];
	/*税票号*/
	taxNo?:string;
	/*税票金额*/
	taxMoney?:number;
	/*状态：未开票；已开票；已邮寄；随货同行；已收票*/
	invoiceState?:number;
	/*订单单号：订单编码*/
	orderCode?:string;
	/*订单日期：订单提交时间*/
	orderDate?:string[];
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*生产企业*/
	manufacturer?:string;
	/*供应商编码*/
	supplierName?:string;
	/*配送企业编码*/
	deliveryName?:string;
	/*订单数量*/
	orderAmount?:number;
};

export enum AT_InvoiceState	{
	未开票 = 0,
	已开票 = 1,
	已邮寄 = 2,
	随货同行 = 3,
	已收票 = 4,
};

export enum AT_IsAffirmState	{
	未确认 = 0,
	确认有效 = 1,
	确认无效 = 2,
};

export declare interface AT_KeyValue	{
	value?:string;
	text?:string;
};

export declare interface AT_KeyValueIntDefaultViewModel	{
	/*是否默认*/
	defaultValue:number;
	/*字符串值下拉框选项集*/
	selectOptions?:AT_KeyValueIntModel[];
};

export declare interface AT_KeyValueIntModel	{
	/*值*/
	value:number;
	/*文本*/
	text?:string;
};

export declare interface AT_KeyValueIntViewModel	{
	/*字符串值下拉框选项集*/
	selectOptions?:AT_KeyValueIntModel[];
};

export declare interface AT_KeyValueStringDefaultViewModel	{
	/*是否默认*/
	defaultValue?:string;
	/*字符串值下拉框选项集*/
	selectOptions?:AT_KeyValueStringModel[];
};

export declare interface AT_KeyValueStringModel	{
	/*值*/
	value?:string;
	/*文本*/
	text?:string;
};

export declare interface AT_KeyValueStringViewModel	{
	/*字符串值下拉框选项集*/
	selectOptions?:AT_KeyValueStringModel[];
};

export declare interface AT_LoanEarnestRequestModel	{
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)*/
	earnestType:number;
	/*付款公司*/
	paymentCompany:string;
	/*付款账号*/
	paymentAccount:string;
	/*付款时间*/
	paymentTime?:string;
	/*付款总金额*/
	paymentAmount:number;
	/*收款公司*/
	collectCompany:string;
	/*收款账号*/
	collectAccount:string;
	/*收款公司编码*/
	companyCode?:string;
	/*银行卡编码*/
	bankCardCode?:string;
	/*备注*/
	note?:string;
	/*保证金详情列表*/
	earnestDetails?:AT_EarnestDetailsRequestModel[];
	/*贷款保证金--配送企业集合*/
	deliveryCodes?:string[];
};

export declare interface AT_MailContractModel	{
	/*合同编码：2050*/
	contractCode:string;
	/*邮寄时间*/
	mailingTime?:string;
	/*快递公司*/
	courierCompany?:string;
	/*快递单号*/
	trackingNumber?:string;
};

export declare interface AT_MarketEarnestViewModel	{
	/*自增ID*/
	id:number;
	/*保证金类型(市场保证金；单次货款保证金；长期货款保证金；招标保证金)

1 = 单次货款保证金

2 = 长期货款保证金

3 = 市场保证金

4 = 招标保证金*/
	earnestType:AT_EarnestType;
	/*付款公司*/
	paymentCompany?:string;
	/*付款账号*/
	paymentAccount?:string;
	/*收款公司*/
	collectCompany?:string;
	/*收款账号*/
	collectAccount?:string;
	/*付款金额*/
	paymentAmount?:number;
	/*付款时间*/
	paymentTime?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*注册剂型*/
	dosageForm?:string;
	/*注册规格*/
	standard?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	earnestUse:AT_EarnestUse;
	/*保证金用途

1 = 开发保证金

2 = 上量保证金

3 = 招标保证金

4 = 医保保证金*/
	readonly earnestUseText:AT_EarnestUse;
};

export declare interface AT_MarketToolkitAttachmentModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
	/*自增ID*/
	id:number;
	/*产品编码*/
	productCode?:string;
	/*附件类型： 推广要点，说明书，彩页... 等等*/
	type?:number;
};

export declare interface AT_MessageNoticeViewModel	{
	/*Id*/
	id:number;
	/*消息类型*/
	type?:string;
	/*是否已读*/
	isRead?:string;
	/*消息内容概要*/
	contentAbb?:string;
	/*消息内容*/
	content?:string;
	/*消息标题*/
	title?:string;
	/*时间*/
	time?:string;
};

export enum AT_MoneyBackState	{
	未回款 = 0,
	部分回款 = 1,
	已回款 = 2,
};

export enum AT_OrderStateType	{
	未发货 = 1,
	已发货 = 2,
	部分发货 = 3,
};

export declare interface AT_PageAuthorizationViewModel	{
	/*路由名*/
	name?:string;
	/*路由地址*/
	path?:string;
	/*父级路由Id*/
	parentId:number;
	/*排序*/
	sort?:number;
	/*前端路由附加信息*/
	meta?:AT_SysPageRouteMetaModel;
	/*组件名*/
	component?:string;
	/*是否是tab*/
	isTab:number;
	/*重定向路由地址*/
	redirectUrl?:string;
	/*路由id*/
	routeId:number;
	/*权限项值之和*/
	permission?:number;
	/*已拥有的权限详情*/
	authorizationInfos?:AT_AuthorizationInfoModel[];
};

export declare interface AT_PopupAuthorizationViewModel	{
	/*弹窗路由名*/
	name?:string;
	/*弹窗路由地址*/
	path?:string;
	/*弹窗路由标题*/
	title?:string;
	/*弹窗路由排序*/
	sort?:number;
	/*弹窗路由组件名*/
	component?:string;
	/*弹窗key*/
	popupKey?:string;
	/*弹窗路由id*/
	routeId:number;
	/*权限项值之和 (为空 则控件无权限配置)*/
	permission?:number;
	/*已拥有的权限详情 (为空 则控件无权限配置)*/
	authorizationInfos?:AT_AuthorizationInfoModel[];
};

export declare interface AT_PowerAttorneyPageModel	{
	/*主键*/
	id:number;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*中标价*/
	packagePrice?:number;
	/*区域*/
	areaName?:string;
	/*配送企业*/
	deliveryName?:string;
	/*终端名称*/
	terminalName?:string;
	/*开始时间*/
	startDate?:string;
	/*结束时间*/
	endDate?:string;
	/*申请时间*/
	applyDate?:string;
	/*备注*/
	note?:string;
	/*审核状态：审核中，已审核，驳回

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	auditState:AT_AuditState;
	/*办理进度

1 = 已申请

2 = 已办理

3 = 已邮寄

4 = 已作废*/
	progress:AT_ProgressType;
	time?:string;
	/*是否已转*/
	isTransfer?:number;
};

export declare interface AT_PowerAttorneyPageModelIEnumerableInt32Tuple	{
	item1?:AT_PowerAttorneyPageModel[];
	item2:number;
};

export declare interface AT_PowerAttorneyQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*审核状态*/
	auditState?:number;
	/*办理进度*/
	progress?:number;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*配送公司*/
	deliveryName?:string;
	/*生产企业*/
	manufacturer?:string;
	/*办理进度*/
	areaName?:number;
	/*医院名称*/
	terminalName?:string;
};

export declare interface AT_PowerAttorneyRequestModel	{
	/*产品编码：来自可采清单*/
	productCode?:string;
	/*配送企业名称：页面上文本框输入*/
	deliveryName?:string;
	/*省份*/
	provinceId?:number;
	/*城市*/
	cityId?:number;
	/*终端名称*/
	terminalName?:string;
	/*中标价*/
	packagePrice?:number;
	/*开始时间*/
	startDate?:string;
	/*结束时间*/
	endDate?:string;
	/*备注*/
	note?:string;
	/*新增配送委托书（附件集合）*/
	attachments?:AT_AttachmentModel[];
};

export declare interface AT_ProductFlowPageModel	{
	/*主键Id*/
	id:number;
	/*通用名：Excel*/
	excelProductName?:string;
	/*详细包装规格：Excel*/
	excelPackageStandard?:string;
	/*生产企业：Excel*/
	excelManufacturer?:string;
	/*配送公司*/
	deliveryName?:string;
	/*终端名称*/
	terminalName?:string;
	/*批号*/
	batchNo?:string;
	/*数量*/
	amount?:number;
	/*销售时间*/
	saleTime?:string;
	/*文件路径：上传得Excel文件*/
	excelPath?:string;
	/*确认状态

0 = 未确认

1 = 确认有效

2 = 确认无效*/
	isAffirm:AT_IsAffirmState;
	/*确认状态

0 = 未确认

1 = 确认有效

2 = 确认无效*/
	readonly isAffirmText:AT_IsAffirmState;
};

export declare interface AT_ProductFlowPageModelIEnumerableInt32Tuple	{
	item1?:AT_ProductFlowPageModel[];
	item2:number;
};

export declare interface AT_ProductFlowQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*通用名：Excel*/
	excelProductName?:string;
	/*详细包装规格：Excel*/
	excelPackageStandard?:string;
	/*生产企业：Excel*/
	excelManufacturer?:string;
	/*配送公司*/
	deliveryName?:string;
	/*终端名称*/
	terminalName?:string;
	/*批号*/
	batchNo?:string;
	/*销售时间*/
	saleTime?:string[];
	/*确认状态*/
	isAffirm?:number;
};

export enum AT_ProgressType	{
	已申请 = 1,
	已办理 = 2,
	已邮寄 = 3,
	已作废 = 4,
};

export declare interface AT_PurchasInfoViewModel	{
	/*采购委托人*/
	entrust?:string;
	/*采购委托开始时间*/
	entrustStartDate?:string;
	/*采购委托结束时间*/
	entrustEndDate?:string;
};

export declare interface AT_PurchaseFeedbackAttachmentRequestModel	{
	/*附件名称*/
	name?:string;
	/*附件地址*/
	path?:string;
	/*附件图标*/
	icon?:string;
	/*附件后缀*/
	ext?:string;
	/*附件类型：不良反应反馈，抽检反馈*/
	type?:number;
};

export declare interface AT_PurchaseOrderPageModel	{
	/*主键*/
	id:number;
	/*采购订单主表Id*/
	purchaseOrderId?:number;
	/*申请发货时间*/
	orderDateTime?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*供应商：企业编码*/
	supplierCode?:string;
	/*配送公司：企业名称*/
	deliveryName?:string;
	/*配送公司：企业编码*/
	deliveryCode?:string;
	/*订单数量*/
	quantityOrder?:number;
	/*开票价*/
	openFare2?:number;
	/*订单金额*/
	orderMoney?:number;
	/*审核状态

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	auditState:AT_AuditState;
	/*回款状态

0 = 未回款

1 = 部分回款

2 = 已回款*/
	backState:AT_MoneyBackState;
	/*订单状态

1 = 未发货

2 = 已发货

3 = 部分发货*/
	state:AT_OrderStateType;
};

export declare interface AT_PurchaseOrderPageModelIEnumerableInt32Tuple	{
	item1?:AT_PurchaseOrderPageModel[];
	item2:number;
};

export enum AT_PurchaseOrderPaymentMode	{
	预付货款 = 1,
	货款保证金 = 2,
	授信发货 = 3,
};

export declare interface AT_PurchaseOrderQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*供应商*/
	supplierName?:string;
	/*审核状态*/
	auditState?:number;
	/*订单状态*/
	state?:number;
};

export declare interface AT_PurchaseOrderViewModel	{
	/*采购订单主表Id*/
	purchaseOrderId:number;
	/*供应商编码*/
	supplierCode?:string;
	/*供应商名称*/
	supplierName?:string;
	/*配送公司*/
	deliveryCode?:string;
	/*配送公司*/
	deliveryName?:string;
	/*付款模式

1 = 预付货款

2 = 货款保证金

3 = 授信发货*/
	paymentMode:AT_PurchaseOrderPaymentMode;
	/*付款模式

1 = 预付货款

2 = 货款保证金

3 = 授信发货*/
	paymentModeText:AT_PurchaseOrderPaymentMode;
	/*付款时间*/
	paymentTime?:string;
	/*付款时间*/
	readonly paymentTimeDisPlay?:string;
	/*备注*/
	note?:string;
	/*通用编码*/
	comCode?:string;
	/*收件信息*/
	receiptInfo?:string;
	/*开票信息*/
	invoicesInfo?:AT_CompanyInvoiceViewModel[];
	/*产品明细*/
	purchaseProducts?:AT_PurchasePlanProductModel[];
	/*付款信息（附件集合）*/
	attachments?:AT_AttachmentModel[];
	/*省份*/
	provinceId?:number;
	/*省份*/
	provinceName?:string;
	/*城市*/
	cityId?:number;
	/*城市*/
	cityName?:string;
};

export declare interface AT_PurchasePlanDetailsRequestModel	{
	/*配送公司编码*/
	deliveryCode?:string;
	/*计划数量*/
	numberPlans?:number;
	/*开票价*/
	openFare:number;
	/*付款单据列表*/
	attachments?:AT_AttachmentModel[];
};

export declare interface AT_PurchasePlanPageModel	{
	/*主键*/
	id:number;
	/*状态： 是否转采购订单

0 = 未转采购订单

1 = 已转采购订单

99 = 已作废*/
	isPurchase:AT_PurchasePlanState;
	/*计划时间*/
	planDateTime?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*供应商：企业编码*/
	supplierCode?:string;
	/*配送公司：企业名称*/
	deliveryName?:string;
	/*配送公司：企业编码*/
	deliveryCode?:string;
	/*计划数量*/
	numberPlans?:number;
	/*开票价*/
	openFare?:number;
};

export declare interface AT_PurchasePlanPageModelIEnumerableInt32Tuple	{
	item1?:AT_PurchasePlanPageModel[];
	item2:number;
};

export declare interface AT_PurchasePlanProductModel	{
	/*采购计划单id*/
	planDetailsId:number;
	/*通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*生产企业*/
	manufacturer?:string;
	/*可用合同数量*/
	contractNum?:number;
	/*最低发货件数*/
	lowestAmount?:number;
	/*订单数量(默认带计划数量)*/
	quantityOrder?:number;
	/*件装*/
	wholePackage?:number;
	/*开票价*/
	openFare?:number;
	/*产品编码*/
	productCode?:string;
	/*应付金额*/
	mustAmount:number;
	/*已付金额*/
	paidAmount:number;
	/*合作编码*/
	cooperationCode?:string;
	/*配送商业政策Id：来源营销系统*/
	cooperationDeliveryId?:number;
	/*合同消耗明细*/
	contractPurchaseRecords?:AT_AvailableContractViewModel[];
};

export declare interface AT_PurchasePlanQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*供应商*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*状态： 是否转采购订单*/
	isPurchase?:number;
};

export declare interface AT_PurchasePlanRequestModel	{
	/*产品编码：选择可采清单中的*/
	productCode?:string;
	/*件装*/
	wholePackage?:number;
	/*备注*/
	note?:string;
	/*采购计划详细列表*/
	purchasePlanDetails?:AT_PurchasePlanDetailsRequestModel[];
};

export enum AT_PurchasePlanState	{
	未转采购订单 = 0,
	已转采购订单 = 1,
	已作废 = 99,
};

export declare interface AT_PurchasePlanTurnPurchaseModel	{
	/*供应商：企业编码*/
	supplierCode?:string;
	/*供应商：企业编码*/
	supplierName?:string;
	/*配送公司：企业编码*/
	deliveryCode?:string;
	/*配送公司名称*/
	deliveryName?:string;
	/*付款模式(预付货款,货款保证金)

1 = 预付货款

2 = 货款保证金

3 = 授信发货*/
	paymentMode:AT_PurchaseOrderPaymentMode;
	/*付款时间*/
	paymentTime:string;
	/*收货信息*/
	receiptInfo?:string;
	/*企业收货信息通用编码*/
	comCode?:string;
	/*开票信息*/
	invoicesInfo?:AT_CompanyInvoiceViewModel[];
	/*产品明细*/
	purchaseProducts?:AT_PurchasePlanProductModel[];
	/*付款信息（附件集合）*/
	attachments?:AT_AttachmentModel[];
	/*备注*/
	note?:string;
	/*省份*/
	provinceId?:number;
	/*省份*/
	provinceName?:string;
	/*城市*/
	cityId?:number;
	/*城市*/
	cityName?:string;
};

export declare interface AT_QuerySorting	{
	name?:string;
	order?:string;
};

export declare interface AT_QuickMenuRequestModel	{
	/*页面路由Ids*/
	pageIds?:number[];
};

export declare interface AT_ResetPasswordModel	{
	/*手机号码*/
	account?:string;
	/*原密码*/
	oldPassword:string;
	/*密码*/
	password:string;
	/*确认密码*/
	confirmPassword:string;
};

export declare interface AT_ReturnGoodsDetailsRequestModel	{
	/*订单编码：来自入库管理*/
	purchaseCode?:string;
	/*产品编码：来自入库管理*/
	productCode?:string;
	/*销售编码：来自入库管理*/
	saleCode?:string;
	/*入库数量*/
	intoAmount?:number;
	/*退货数量*/
	returnAmount?:number;
	/*开票价格*/
	invoicePrice?:number;
	/*退货金额*/
	returnMoney?:number;
	/*批号*/
	batchNo?:string;
	/*件装*/
	wholePackage?:number;
};

export declare interface AT_ReturnGoodsPageModel	{
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*详细包装规格*/
	packageStandard?:string;
	/*件装*/
	wholePackage:number;
	/*生产企业*/
	manufacturer?:string;
	/*供应商：企业名称*/
	supplierName?:string;
	/*供应商：企业编码*/
	supplierCode?:string;
	/*配送公司：企业名称*/
	deliveryName?:string;
	/*配送公司：企业编码*/
	deliveryCode?:string;
	/*退货编码*/
	returnCode?:string;
	/*退货原因(质量问题；其它问题)

1 = 质量问题

2 = 其它问题*/
	returnReason:AT_ReturnReasonType;
	/*回款账号*/
	backAccount?:string;
	/*审核状态：审核中，已审核，驳回

0 = 待审

1 = 已审

2 = 驳回

3 = 未决

4 = 无效*/
	auditState:AT_AuditState;
	/*驳回原因*/
	rejectReason?:string;
	/*入库数量*/
	intoAmount?:number;
	/*退货数量*/
	returnAmount?:number;
	/*开票价格*/
	invoicePrice?:number;
	/*退货金额*/
	returnMoney?:number;
	/*制单时间*/
	updTime?:string;
	/*批号*/
	batchNo?:string;
};

export declare interface AT_ReturnGoodsPageModelIEnumerableInt32Tuple	{
	item1?:AT_ReturnGoodsPageModel[];
	item2:number;
};

export declare interface AT_ReturnGoodsQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*配送公司*/
	deliveryName?:string;
	/*供应商*/
	supplierName?:string;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*生产企业*/
	manufacturer?:string;
	/*详细包装*/
	packageStandard?:string;
	/*审核状态*/
	auditState?:number;
	/*回款账户*/
	backAccount?:string;
	/*批号*/
	batchNo?:string;
};

export declare interface AT_ReturnGoodsRequestModel	{
	/*退货原因(质量问题；其它问题)*/
	returnReason?:number;
	/*供应商编码*/
	supplierCode?:string;
	/*配送企业编码*/
	deliveryCode?:string;
	/*回款账号*/
	backAccount?:string;
	/*退货详细列表*/
	returnGoodsDetails?:AT_ReturnGoodsDetailsRequestModel[];
};

export enum AT_ReturnReasonType	{
	质量问题 = 1,
	其它问题 = 2,
};

export declare interface AT_RouteAuthorizationItemModel	{
	authorizationItemValues?:AT_KeyValue[];
	authoriztionKey:number;
	authoriztionName?:string;
	/*

1 = 数据

2 = 按钮*/
	readonly authorizationType:AT_AuthorizationType;
	popupKey?:string;
};

export declare interface AT_SubAccountModel	{
	hashPassword?:string;
	/*姓名*/
	name:string;
	/*手机号码*/
	mobile:string;
	/*密码*/
	password:string;
};

export declare interface AT_SubContractModel	{
	/*合同对象*/
	contract?:AT_Contract;
	/*合同明细List*/
	contractdetail?:AT_ContractDetails[];
};

export declare interface AT_SyncBulletinQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*类型：通知公告，货源公告*/
	type?:number;
	/*标题*/
	title?:string;
	/*内容*/
	contentAbb?:string;
	/*时间*/
	time?:string[];
};

export declare interface AT_SyncInventoryQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*注册药品名称：注册通用名*/
	drugName?:string;
	/*生产企业：企业编码*/
	manufacturer?:string;
	/*供应商：企业编码*/
	supplier?:string;
	/*配送企业：企业编码*/
	deliveryCode?:string;
};

export declare interface AT_SysPageRouteMetaModel	{
	/*是否显示父级菜单*/
	showParent?:number;
	/*是否在菜单栏中显示*/
	showLink?:number;
	/*图标*/
	icon?:string;
	/*路由title*/
	title?:string;
};

export declare interface AT_SysPageRouteModel	{
	/*路由名*/
	name?:string;
	/*路由地址*/
	path?:string;
	/*父级路由Id*/
	parentId:number;
	/*排序*/
	sort?:number;
	/*前端路由附加信息*/
	meta?:AT_SysPageRouteMetaModel;
	/*组件名*/
	component?:string;
	/*是否是tab*/
	isTab:number;
	/*重定向路由地址*/
	redirectUrl?:string;
};

export declare interface AT_SysPageRouteViewModel	{
	/*路由名*/
	name?:string;
	/*路由地址*/
	path?:string;
	/*父级路由Id*/
	parentId:number;
	/*排序*/
	sort?:number;
	/*前端路由附加信息*/
	meta?:AT_SysPageRouteMetaModel;
	/*组件名*/
	component?:string;
	/*是否是tab*/
	isTab:number;
	/*重定向路由地址*/
	redirectUrl?:string;
	/*路由id*/
	routeId:number;
};

export declare interface AT_SysPopupRouteModel	{
	/*弹窗路由名*/
	name?:string;
	/*弹窗路由地址*/
	path?:string;
	/*弹窗路由标题*/
	title?:string;
	/*弹窗路由排序*/
	sort?:number;
	/*弹窗路由组件名*/
	component?:string;
	/*弹窗key*/
	popupKey?:string;
};

export declare interface AT_SysPopupRouteViewModel	{
	/*弹窗路由名*/
	name?:string;
	/*弹窗路由地址*/
	path?:string;
	/*弹窗路由标题*/
	title?:string;
	/*弹窗路由排序*/
	sort?:number;
	/*弹窗路由组件名*/
	component?:string;
	/*弹窗key*/
	popupKey?:string;
	/*弹窗路由id*/
	routeId:number;
};

export declare interface AT_TeamInfoRequestModel	{
	/*自增ID*/
	id:number;
	/*法人代表*/
	legal?:string;
	/*法人联系方式*/
	legalPhone?:string;
	/*招商团队实际控制人*/
	teamPerson?:string;
	/*招商团队实际控制人联系方式*/
	conperPhone?:string;
	/*招商团队人员规模*/
	staffSize?:number;
	/*招商团队组织架构*/
	organization?:string;
	/*政府事务*/
	govAffairs?:string;
	/*推广品种*/
	hisPromotedVarieties?:string;
	/*建议合作配送企业*/
	cooperativePSBusiness?:string;
	/*备注*/
	remark?:string;
};

export declare interface AT_TeamInfoUpdateModel	{
	/*主键ID*/
	id:number;
	/*主账户：用户主表ID*/
	mainClientCode?:string;
	/*子账户：用户主表ID*/
	childClientCode?:string;
	/*法人代表*/
	legal?:string;
	/*法人联系方式*/
	legalPhone?:string;
	/*招商团队实际控制人*/
	teamPerson?:string;
	/*招商团队实际控制人联系方式*/
	conperPhone?:string;
	/*招商团队人员规模*/
	staffSize?:number;
	/*招商团队组织架构*/
	organization?:string;
	/*政府事务*/
	govAffairs?:string;
	/*推广品种*/
	hisPromotedVarieties?:string;
	/*建议合作配送企业*/
	cooperativePSBusiness?:string;
	/*备注*/
	remark?:string;
};

export declare interface AT_TeamInfoViewModel	{
	/*自增ID*/
	id:number;
	/*法人代表*/
	legal?:string;
	/*法人联系方式*/
	legalPhone?:string;
	/*招商团队实际控制人*/
	teamPerson?:string;
	/*招商团队实际控制人联系方式*/
	conperPhone?:string;
	/*招商团队人员规模*/
	staffSize?:number;
	/*招商团队组织架构*/
	organization?:string;
	/*政府事务*/
	govAffairs?:string;
	/*推广品种*/
	hisPromotedVarieties?:string;
	/*建议合作配送企业*/
	cooperativePSBusiness?:string;
	/*备注*/
	remark?:string;
};

export declare interface AT_UserModel	{
	/*账号*/
	account?:string;
	/*手机号码*/
	mobile?:string;
	/*姓名*/
	name?:string;
	/*用户id*/
	userId:number;
	/*企业名称*/
	companyName?:string;
	/*企业名称*/
	provinceId?:number;
	/*客户编码*/
	clientCode?:string;
	/*主账号客户编码*/
	parent?:string;
};

export declare interface AT_UserPageModel	{
	/*主键*/
	id:number;
	/*客户编码*/
	clientCode?:string;
	/*姓名*/
	name?:string;
	/*手机号码*/
	mobile?:string;
	/*上级用户：主账号为NULL*/
	parent?:string;
	/*公司名称*/
	companyName?:string;
	/*地区区号Id*/
	provinceId?:number;
	/*地区*/
	provinceName?:string;
	/*是否启用：否，是*/
	isEnable:number;
};

export declare interface AT_UserPageModelIEnumerableInt32Tuple	{
	item1?:AT_UserPageModel[];
	item2:number;
};

export declare interface AT_UserQueryModel	{
	pageIndex:number;
	pageSize:number;
	sorts?:AT_QuerySorting[];
	/*

0 = SqlServer

1 = Oracle

2 = MySql*/
	readonly baseType:AT_DatabaseType;
	sql?:string;
	sort?:string;
	parameters?:AT_DynamicParameters;
	/*姓名*/
	name?:string;
	/*手机号码*/
	mobile?:string;
	/*医药公司名称*/
	companyName?:string;
	/*状态*/
	isEnable?:number;
	/*省份地区Id*/
	provinceId?:number;
};

export declare interface AT_UserReceiveUpdateModel	{
	/*主键Id*/
	id:number;
	/*通用编码*/
	comCode?:string;
	/*收件人*/
	addressee:string;
	/*收件电话*/
	phone:string;
	/*收件地址*/
	address:string;
	/*是否默认：否，是*/
	isDefault?:number;
};

export declare interface AT_UserReceiveViewModel	{
	/*通用编码*/
	comCode?:string;
	/*收件人*/
	addressee?:string;
	/*收件电话*/
	phone?:string;
	/*收件地址*/
	address?:string;
	/*是否默认：否，是*/
	isDefault?:number;
};

export declare interface AT_UserUpdateModel	{
	/*用户编码*/
	userCode?:string;
	/*姓名*/
	name:string;
	/*手机号码*/
	mobile:string;
	/*医药公司名称*/
	companyName?:string;
	/*地区区号Id*/
	provinceId?:number;
	/*用户收件信息列表*/
	userReceives?:AT_UserReceiveUpdateModel[];
	/*用户团队信息*/
	teamInfo?:AT_TeamInfoUpdateModel;
	/*意向代理省份Id*/
	provinces?:number[];
};

