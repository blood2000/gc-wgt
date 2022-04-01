const store = {
	state: {
		queryParams: {
      bigCreateTime: '',
      endCreateTime: '',
      bigApprovalTime: '',
      endApprovalTime: '',
      bigReimbursementTime: '',
      endReimbursementTime: '',
    }
	},
  mutations: {
    setQueryParams: (state, obj) => {
      state.queryParams = obj;
    }
  }
}
export default store;