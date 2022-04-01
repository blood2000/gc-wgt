<!-- 状态修改弹窗 -->
<template>
  <div class="modal">
    <div class="modal-box">
      <div class="title32 modal-title">{{ title }}</div>
      <div class="modal-line">
        <div class="title32">{{ modalData.vehicleNumber }}</div>
        <div>
          <span class="title28">维修</span>
          <span class="rmb-icon">￥</span>
          <span class="modal-price">{{ modalData.repairAmount }} </span>
        </div>
      </div>
      <!-- 批准操作 -->
      <div class="modal-content" v-if="modalData.nextStatus === 4">
        <div class="modal-content-title">维修原因:</div>
        <div class="modal-textarea-box">
          <textarea
            class="modal-remark"
            maxlength="255"
            v-model="modalData.repairRemark"
            :disabled="true"
          />
        </div>
      </div>
      <!-- 拒绝操作 -->
      <div class="modal-content" v-if="modalData.nextStatus === 3">
        <div class="modal-content-title">拒绝原因:</div>
        <div class="modal-textarea-box">
          <textarea
            class="modal-remark"
            maxlength="255"
            v-model="refuseRemark"
            placeholder="请输入"
          />
        </div>
      </div>
      <!-- 报销操作 -->
      <div class="modal-input-line" v-if="modalData.nextStatus === 5">
        <div class="modal-input-item">报销金额</div>
        <input
          type="number"
          class="modal-input"
          v-model="reimbursementAmount"
          @input="filterInput"
        />
      </div>

      <div class="modal-btn-box">
        <div class="modal-btn modal-btn-cancel" @click="closeModal">取消</div>
        <div class="modal-btn modal-btn-confirm" @click="confirmModal">
          确认
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uniRequest from "../../../config/request";
import formFilter from "../../../utils/filter";
export default {
  data() {
    return {
      refuseRemark: "",
      reimbursementAmount: "",
      temPrice: '',
    };
  },

  components: {},

  computed: {
    ...mapState({
      headerInfo: (state) => state.native.headerInfo,
    }),
    title() {
      if (this.modalData.nextStatus === 4) {
        return "批准";
      } else if (this.modalData.nextStatus === 3) {
        return "拒绝";
      } else if (this.modalData.nextStatus === 5) {
        return "报销";
      }
    },
  },

  props: {
    modalData: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log("mouted");
    console.log(this.modalData);
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    confirmModal() {
      let data = {};
      //批准
      if (this.modalData.nextStatus === 4) {
        data = {
          id: this.modalData.id,
          status: 4,
        };
      }
      //拒绝
      if (this.modalData.nextStatus === 3) {
        if (this.refuseRemark === "") {
          uni.showModal({
            title: "提示",
            content: "请输入拒绝原因",
            showCancel: false,
          });
          return;
        }
        data = {
          id: this.modalData.id,
          refuseRemark: this.refuseRemark,
          status: 3,
        };
      }
      //报销
      if (this.modalData.nextStatus === 5) {
        if (!this.reimbursementAmount) {
          uni.showModal({
            title: "提示",
            content: "请输入报销金额",
            showCancel: false,
          });
          return;
        }
        data = {
          id: this.modalData.id,
          reimbursementAmount: this.reimbursementAmount * 1,
          status: 5,
        };
      }
      console.log('提交数据', data);
      // return;
      const config = {
        url: "updateStatus",
        method: "PUT",
        header: this.headerInfo,
        data: data,
      };
      uniRequest(config).then((res) => {
        console.log("状态变更", res);
        uni.showModal({
          title: "提示",
          content: res.msg,
          showCancel: false,
          success: (e) => {
            if (e.confirm) {
              //点击确认
              this.$emit("refreshList");
              // this.closeModal();
            }
          },
        });
      });
    },
    //数值输入
    filterInput(e) {
      setTimeout(() => {
        let value = e.detail.value;
        if (value != "" && formFilter.priceFilter(value)) {
          this.temPrice = value;
        } else {
          if (value != "") {
            this.reimbursementAmount = this.temPrice;
          }
        }
      }, 0);
    },
  },
};
</script>
<style lang='scss' scoped>
.modal-box {
  box-sizing: border-box;
  padding: 30rpx;
  width: 86%;
  background: #fff;
  border: 1px solid #707070;
  border-radius: 10px;
}

.modal-title {
  text-align: center;
}

.modal-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 0;
}

.modal-price {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.rmb-icon {
  padding-left: 10rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
}

.modal-content {
  box-sizing: border-box;
  padding: 20rpx;
  height: 204rpx;
  background: #f8f9fc;
  border: 1rpx solid #d0d3dc;
  opacity: 1;
  border-radius: 13rpx;
  overflow-y: auto;
  &-title {
    color: #a4a6ae;
    font-size: 28rpx;
    height: 40rpx;
  }
}

.modal-textarea-box {
  color: #a4a6ae;
  height: 120rpx;
}

.modal-remark {
  box-sizing: border-box;
  padding: 0;
  height: 100%;
  font-size: 26rpx;
  width: 100%;
  color: #a4a6ae;
}

.modal-btn-box {
  padding: 30rpx 20rpx 10rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .modal-btn {
    width: 216rpx;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    border-radius: 10rpx;
    font-size: 32rpx;
    font-weight: bold;
  }

  .modal-btn-confirm {
    background: #3a65ff;
    color: #fff;
  }

  .modal-btn-cancel {
    background: #f3f8fc;
    color: #516b7f;
  }
}

.modal-input-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rpx 0;
}

.modal-input-item {
  font-size: 32rpx;
  color: #999;
}

.modal-input {
  box-sizing: border-box;
  height: 64rpx;
  background: #f5f5f5;
  border: 1rpx solid #e7e7e7;
  border-radius: 8rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  min-width: 130rpx;
  max-width: 200rpx;
  padding: 0 10rpx;
  text-align: right;
}
</style>