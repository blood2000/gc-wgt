const apiUrl = {
  getRepairList: '/fmsapp/repair/repairRecord/v1/repairRecordList',
  updateStatus: '/fmsapp/repair/repairRecord/v1/updateStatus',
  reviewerDel: () => `/fmsapp/repair/repairRecord/v1/reviewerDel/${id}`,
  getRepairRecordDetails: '/fmsapp/repair/repairRecord/v1/getRepairRecordDetails',//获取维保厂家详情
  repairRecordBackupsList: '/fmsapp/repair/repairRecord/v1/repairRecordBackupsList'//获取维修管理备份列表
};
export default { ...apiUrl }