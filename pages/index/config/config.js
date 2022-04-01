const repairData = [{
    repairStatus: 0,
    licenseNumber: '闽A123123',
    createTime: '2021-8-8 12:12',
    reason: '2021年1月10日，学校车辆沪DA8391在出车过程中出现发动机抖动严重',
    approveStatus: 0,
    approveList: [{
      approveStatus: 0,
      pay: 500,
    }],
    startDate: '8月2日',
    endDate: null,
  },
  {
    repairStatus: 1,
    licenseNumber: '闽A123455',
    createTime: '2021-8-8 12:12',
    reason: '2021年1月10日，学校车辆沪DA8391在出车过程中出现发动机抖动严重',
    approveStatus: 1,
    approveList: [{
      approveStatus: 1,
      approveDate: '2021-06-06 13:12:12',
      userName: '辛弃疾',
      pay: 500,
    }],
    startDate: '8月2日',
    endDate: '8月6日'
  },
  {
    repairStatus: 1,
    licenseNumber: '闽A123123',
    createTime: '2021-8-8 12:12',
    reason: '2021年1月10日，学校车辆沪DA8391在出车过程中出现发动机抖动严重',
    approveStatus: 2,
    approveList: [{
        approveStatus: 1,
        approveDate: '2021-06-06 13:12:12',
        userName: '辛弃疾',
        pay: 500,
      },
      {
        approveStatus: 2,
        approveDate: '2021-06-06 13:12:12',
        userName: '辛弃疾',
        pay: 500,
      }
    ],
    startDate: '8月2日',
    endDate: '8月6日'
  },
  {
    repairStatus: 1,
    licenseNumber: '闽A123123',
    createTime: '2021-8-8 12:12',
    reason: '2021年1月10日，学校车辆沪DA8391在出车过程中出现发动机抖动严重',
    approveStatus: 3,
    approveList: [{
      approveStatus: 3,
      pay: null,
    }],
    startDate: '8月2日',
    endDate: '8月6日'
  },
];
export default repairData;