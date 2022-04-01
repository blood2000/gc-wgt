const store = {
	state: {
		isAndroid: false,
		isiOS: false,
		headerInfo: {
			"Authorization": "7572c712-a25b-49a3-945c-95d1e498e3f9-1c3646219beb4c7b978b4600965b2c9f",
			"App-Type": "1",
			"App-Code": "625d02d3efbd4823962651f387cdc3d5",
			"Terminal-Type": "app",
			"App-Version": "1.0.0",
			"Produce-Code": "1c3646219beb4c7b978b4600965b2c9f",
		},
		statusBarHeight: 0,
	
	},
	getters: {
		headerInfo: state => state.headerInfo,
	},
	mutations: {
	
		getLoginInfo: (state, val) => {
			state.headerInfo = {
				...val
			};
		},
		getStatusBarHeight: (state, val) => {
			state.statusBarHeight = val || 0;
		}
		
	},
	actions: {
		getLoginInfoAction: ({
			commit
		}, val) => {
			commit('getLoginInfo', val)
		},
		getStatusBarHeightAction: ({
			commit
		}, val) => {
			commit('getStatusBarHeight', val)
		}
	}
}
export default store
