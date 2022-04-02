<!-- 维修记录组件 -->
<template>
  <div class="card-box" @click="jumpToDeatail">
    <div class="card-header" :class="'status' + cardData.repairStatus">
      <div class="card-header-title">
        <div class="card-header-title-left">
          <div class="status-bg" :class="'status-bg' + cardData.repairStatus">
            {{ repairStatusOptions[cardData.repairStatus] }}
          </div>
          <div class="title32">{{ cardData.vehicleNumber }}</div>
        </div>
        <div :class="'status-title' + cardData.repairStatus">
          维修时间: {{ repairDate }}
        </div>
      </div>
      <div class="card-header-sub">提交时间: {{ cardData.createTime }}</div>
    </div>
    <div class="card-main">
      <div class="card-main-floor1">
        <div class="card-main-floor1-left">维修原因</div>
        <div class="double-text-overflow card-main-floor1-right">
          {{ cardData.repairRemark }}
        </div>
      </div>
      <div class="card-main-floor2">
        <div class="card-main-floor2-line">
          <div class="card-main-floor2-line-left">
            <div class="card-pointer" :class="'approve-status' + status"></div>
            <div class="title24">
              {{ approveStatusOptions[status] }}
            </div>
            <div>{{ cardData.manufactorContacts }}</div>
          </div>
          <div class="card-main-floor2-line-right">
            <div class="title20" v-if="status !== 4">维修费用</div>
            <div class="title20" v-else>报销费用</div>
            <div class="card-money" v-if="status !== 4">￥{{ cardData.repairAmount }}</div>
            <div class="card-money" v-else>￥{{ cardData.reimbursementAmount }}</div>
          </div>
        </div>
        <div class="title20 card-main-date" v-if="status !== 0">
          {{ cardData.approvalTime }}
        </div>
        

        <!-- <div class="card-main-floor2-item" v-if="status === 4">
          <div class="card-main-floor2-line">
            <div class="card-main-floor2-line-left">
              <div
                class="card-pointer"
                :class="'approve-status' + status"
              ></div>
              <div class="title24">
                {{ approveStatusOptions[status] }}
              </div>
              <div>{{ cardData.manufactorContacts }}</div>
            </div>
            <div class="card-main-floor2-line-right">
              <div class="title20">
                报销费用
              </div>
              <div class="card-money">￥{{ cardData.repairAmount }}</div>
            </div>
          </div>
          <div class="title20 card-main-date">{{ cardData.approvalTime || today }}</div>
        </div> -->
      </div>
      <div class="card-main-btn-box" v-show="status !== 4">
        <!-- 等待批准 -->
        <div class="card-main-btn" v-if="status === 0" @click.stop="changeStatus(3)">
          <div class="btn-refuse card-main-btn-icon"></div>
          <div>拒绝</div>
        </div>
        <div class="card-main-btn" v-if="status === 0" @click.stop="changeStatus(4)">
          <div class="btn-agree card-main-btn-icon"></div>
          <div>批准</div>
        </div>
        <!-- 已批准 -->
        <div class="card-main-btn" v-if="status === 3" @click.stop="changeStatus(5)">
          <div class="btn-reimburse card-main-btn-icon"></div>
          <div>报销</div>
        </div>
        <!-- 取消 -->
        <div class="card-main-btn" v-if="status === 1 || status === 2" @click.stop="deleteRecord">
          <div class="btn-delete card-main-btn-icon"></div>
          <div>删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from "../../../utils/format.js";
export default {
  data() {
    return {
      repairStatusOptions: ["维修中", "已维修"],
      approveStatusOptions: [
        "等待批准",
        "维修申请已取消",
        "拒绝",
        "已批准",
        "已报销",
      ],
      today: "",
    };
  },

  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },

  components: {},

  computed: {
    jumpToDeatail(){
      uni.navigateTo({
         url: '/pages/detail/index?code='+this.cardData.code
      });
    },
    repairDate() {
      if (this.cardData.repairEndDate) {
        return (
          format.dateFormat(
            new Date(this.cardData.repairStartDate),
            "{m}-{d}"
          ) +
          "至" +
          format.dateFormat(new Date(this.cardData.repairEndDate), "{m}-{d}")
        );
      }
      return format.dateFormat(
        new Date(this.cardData.repairStartDate),
        "{m}-{d}"
      );
    },
    status() {
      return this.cardData.status - 1;
    },
  },

  mounted() {
    this.today = format.dateFormat(new Date());
  },

  methods: {
    changeStatus(next) {
      let params = {
        status: this.cardData.status,
        repairRemark: this.cardData.repairRemark,
        id: this.cardData.id,
        vehicleNumber: this.cardData.vehicleNumber,
        repairAmount: this.cardData.repairAmount,
        nextStatus: next,
      }
      this.$emit('changeStatus', params);
    },
    deleteRecord() {

      this.$emit('deleteRecord');
    },
  },
};
</script>
<style lang='scss' scoped>
.card-header {
  position: relative;
  box-sizing: border-box;
  padding: 20rpx 24rpx 40rpx;
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10rpx;
    &-left {
      display: flex;
      align-items: center;
    }
  }
  &-sub {
    color: #999;
    font-size: 24rpx;
  }
}

.card-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20rpx;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
}

.status0 {
  background: #fff7f0;
}

.status1 {
  background: #eff3ff;
}

.status-title0 {
  font-size: 24rpx;
  font-weight: bold;
  color: #fc872b;
}

.status-title1 {
  font-size: 24rpx;
  font-weight: bold;
  color: #3a65ff;
}

.status-bg {
  padding: 0 10rpx;
  margin-right: 10rpx;
  height: 34rpx;
  line-height: 34rpx;
  text-align: center;
  color: #fff;
  font-size: 20rpx;
  font-weight: bold;
  border-radius: 4rpx;
}

.status-bg0 {
  background: #fc872b;
}
.status-bg1 {
  background: #3a65ff;
}

.card-main {
  padding: 0 24rpx;
  &-floor1 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20rpx;
    &-left {
      margin-right: 20rpx;
      font-size: 24rpx;
      color: #999;
    }
    &-right {
      flex: 1;
      font-size: 28rpx;
      color: #333;
    }
  }
  &-floor2 {
    padding: 18rpx;
    margin-bottom: 20rpx;
    background: #fafafa;
    border-radius: 8rpx;
    &-item {
      padding: 18rpx 0;
    }
    &-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-left {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: #333;
        > div {
          margin-right: 10rpx;
        }
      }
      &-right {
        display: flex;
        align-items: center;
      }
    }
  }
  &-date {
    padding-left: 18rpx;
  }
  &-btn-box {
    margin: 0 -24rpx;
    border-top: 1rpx solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-btn {
    box-sizing: border-box;
    height: 70rpx;
    width: 50%;
    border-right: 1rpx solid #ebebeb;
    font-size: 28rpx;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      width: 34rpx;
      height: 34rpx;
      margin-right: 6rpx;
    }
  }
  &-btn:last-child {
    border-right: none;
  }
}

.card-money {
  font-size: 32rpx;
  font-weight: bold;
  color: #f34e3d;
  margin-left: 10rpx;
}

.card-pointer {
  width: 8rpx;
  height: 8rpx;
  border-radius: 50%;
}

.approve-status0 {
  background: #fc872b;
}
.approve-status1 {
  background: #1db963;
}
.approve-status2 {
  background: #3a65ff;
}
.approve-status3 {
  background: #e55e50;
}

.btn-refuse {
  background: url("../../../static/btn-refuse.png") no-repeat center;
  background-size: 100% 100%;
}
.btn-agree {
  background: url("../../../static/btn-agree.png") no-repeat center;
  background-size: 100% 100%;
}
.btn-reimburse {
  background: url("../../../static/btn-reimburse.png") no-repeat center;
  background-size: 100% 100%;
}
.btn-delete {
  background: url("../../../static/btn-delete.png") no-repeat center;
  background-size: 100% 100%;
}
</style>