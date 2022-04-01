<!-- 筛选条件 -->
<template>
  <div class="content">
    <HeaderBar :title="title" @back="back"></HeaderBar>
    <div class="main">
      <div class="card-box">
        <div class="input-line">
          <div class="title32">提交日期</div>
          <div class="picker-box">
            <picker
              mode="date"
              :value="submitDate.startDate"
              :end="submitDate.endDate"
              @change="changeTime($event, 'submitDate', 0)"
            >
              <view class="picker-btn" v-if="submitDate.startDate">
                {{ submitDate.startDate }}
              </view>
              <view class="picker-btn" v-else> 开始时间 </view>
            </picker>
            <div class="date-link">-</div>
            <picker
              mode="date"
              :value="submitDate.endDate"
              :start="submitDate.startDate"
              @change="changeTime($event, 'submitDate', 1)"
            >
              <view class="picker-btn" v-if="submitDate.endDate">
                {{ submitDate.endDate }}
              </view>
              <view class="picker-btn" v-else> 结束时间 </view>
            </picker>
            <!-- <div class="date-icon"></div> -->
          </div>
        </div>
        <!-- 批准日期 -->
        <div class="input-line">
          <div class="title32">批准日期</div>
          <!-- <uni-datetime-picker v-model="approveDate" type="daterange" :clear-icon="false" @change="dateChange" /> -->
          <div class="picker-box">
            <picker
              mode="date"
              :value="approveDate.startDate"
              :end="approveDate.endDate"
              @change="changeTime($event, 'approveDate', 0)"
            >
              <view class="picker-btn" v-if="approveDate.startDate">
                {{ approveDate.startDate }}
              </view>
              <view class="picker-btn" v-else> 开始时间 </view>
            </picker>
            <div class="date-link">-</div>
            <picker
              mode="date"
              :value="approveDate.endDate"
              :start="approveDate.startDate"
              @change="changeTime($event, 'approveDate', 1)"
            >
              <view class="picker-btn" v-if="approveDate.endDate">
                {{ approveDate.endDate }}
              </view>
              <view class="picker-btn" v-else> 结束时间 </view>
            </picker>
            <!-- <div class="date-icon"></div> -->
          </div>
        </div>

        <!-- 报销日期 -->
        <div class="input-line">
          <div class="title32">报销日期</div>
          <div class="picker-box">
            <uni-calendar
              ref="reimburseDate"
              :date="reimburseDate.startDate"
              :insert="false"
              :range="true"
              @confirm="changeDate($event, 'reimburseDate')"
            />
            <div class="picker-btn" v-if="reimburseDate.startDate">
              {{ reimburseDate.startDate }}
            </div>
            <view class="picker-btn" v-else> 开始时间 </view>
            <div class="date-link">-</div>
            <div class="picker-btn" v-if="reimburseDate.endDate">
              {{ reimburseDate.endDate }}
            </div>
            <view class="picker-btn" v-else> 结束时间 </view>
            <div class="date-icon" @click="open"></div>
          </div>
        </div>

        <div class="input-line">
          <div class="title32">批注状态</div>
          <picker
            mode="selector"
            :range="annotateStatus"
            range-key="label"
            @change="change($event, 'annotate')"
          >
            <view class="picker-btn" v-if="annotateStatusIndex > -1">
              {{ annotateStatus[annotateStatusIndex].label }}
              <uni-icons
                type="forward"
                size="14"
                v-if="annotateStatusIndex === -1"
              ></uni-icons>
              <uni-icons
                type="clear"
                size="14"
                color="#666"
                v-else
                @click.native.stop="clearOption('annotate')"
              ></uni-icons>
            </view>
            <view class="picker-btn" v-else>
              请选择
              <uni-icons type="forward" size="14"></uni-icons>
            </view>
          </picker>
        </div>

        <div class="input-line">
          <div class="title32">报销状态</div>
          <picker
            mode="selector"
            :range="reimburseStatus"
            range-key="label"
            @change="change($event, 'reimburse')"
          >
            <view class="picker-btn" v-if="reimburseStatusIndex > -1">
              {{ reimburseStatus[reimburseStatusIndex].label }}
              <uni-icons
                type="forward"
                size="14"
                v-if="reimburseStatusIndex === -1"
              ></uni-icons>
              <uni-icons
                type="clear"
                size="14"
                color="#666"
                v-else
                @click.native.stop="clearOption('reimburse')"
              ></uni-icons>
            </view>
            <view class="picker-btn" v-else>
              请选择
              <uni-icons type="forward" size="14"></uni-icons>
            </view>
          </picker>
        </div>
        <div class="input-line">
          <div class="title32">是否已被删除</div>
          <picker
            mode="selector"
            :range="deleteStatus"
            range-key="label"
            @change="change($event, 'delete')"
          >
            <view class="picker-btn" v-if="deleteStatusIndex > -1">
              {{ deleteStatus[deleteStatusIndex].label }}
              <uni-icons
                type="forward"
                size="14"
                v-if="deleteStatusIndex === -1"
              ></uni-icons>
              <uni-icons
                type="clear"
                size="14"
                color="#666"
                v-else
                @click.native.stop="clearOption('delete')"
              ></uni-icons>
            </view>
            <view class="picker-btn" v-else>
              请选择
              <uni-icons type="forward" size="14"></uni-icons>
            </view>
          </picker>
        </div>
      </div>
      <div class="btn-box">
        <div class="btn btn-reset btn-mr" @click="reset">重置</div>
        <div class="btn btn-confirm" @click="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderBar from "../../components/HeaderBar.vue";
export default {
  data() {
    return {
      title: "筛选",
      reimburseStatus: [
        { label: "未报销", value: 0 },
        { label: "已报销", value: 1 },
      ],
      reimburseStatusIndex: -1,
      annotateStatus: [
        { label: "未批注", value: 0 },
        { label: "已批注", value: 1 },
      ],
      annotateStatusIndex: -1,
      deleteStatus: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
      deleteStatusIndex: -1,
      submitDate: {
        startDate: "",
        endDate: "",
      },
      approveDate: {
        startDate: "",
        endDate: "",
      },
      reimburseDate: {
        startDate: "",
        endDate: "",
      },
    };
  },

  components: { HeaderBar },

  computed: {
    ...mapState({
      headerInfo: (state) => state.native.headerInfo,
      queryParams: (state) => state.repair.queryParams,
    }),
  },

  onLoad() {
    // this.$store.commit("setVehicleMsg", vehicleInfo);
    this.submitDate = {startDate: this.queryParams.bigCreateTime, endDate: this.queryParams.endCreateTime};
    this.reimburseDate = {startDate: this.queryParams.bigReimbursementTime, endDate: this.queryParams.endReimbursementTime};
    this.approveDate = {startDate: this.queryParams.bigApprovalTime, endDate: this.queryParams.endApprovalTime};
    console.log(this.queryParams)
  },

  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
    change(e, type) {
      let that = this;
      const handleStatus = {
        reimburse: () => {
          this.reimburseStatusIndex = e.detail.value * 1;
        },
        annotate: () => {
          this.annotateStatusIndex = e.detail.value * 1;
        },
        delete: () => {
          this.deleteStatusIndex = e.detail.value * 1;
        },
      };
      handleStatus[type]();
    },
    clearOption(type) {
      const handleClear = {
        reimburse: () => {
          this.reimburseStatusIndex = -1;
        },
        annotate: () => {
          this.annotateStatusIndex = -1;
        },
        delete: () => {
          this.deleteStatusIndex = -1;
        },
      };
      handleClear[type]();
    },
    changeTime(e, type, mode) {
      //mode: 0-startDate, 1-endDate
      const handleDate = {
        submitDate: () => {
          if (mode === 0) {
            this.submitDate.startDate = e.detail.value;
          } else {
            this.submitDate.endDate = e.detail.value;
          }
        },
        approveDate: () => {
          if (mode === 0) {
            this.approveDate.startDate = e.detail.value;
          } else {
            this.approveDate.endDate = e.detail.value;
          }
        },
        reimburseDate: () => {
          if (mode === 0) {
            this.reimburseDate.startDate = e.detail.value;
          } else {
            this.reimburseDate.endDate = e.detail.value;
          }
        },
      };
      handleDate[type]();
    },
    changeDate(e, type) {
      console.log(e);
      //reimburseDate
      let startDate = "";
      let endDate = "";
      const dateRange = e.range.data;
      if (dateRange.length > 0) {
        startDate = dateRange[0];
        endDate = dateRange[dateRange.length - 1];
      } else {
        startDate = e.fulldate;
        endDate = e.fulldate;
      }
      console.log(startDate, endDate);
      this[type].startDate = startDate;
      this[type].endDate = endDate;
    },
    open() {
      this.$refs.reimburseDate.open();
    },
    //重置
    reset() {
      this.submitDate = { startDate: "", endDate: "" };
      this.approveDate = { startDate: "", endDate: "" };
      this.reimburseDate = { startDate: "", endDate: "" };
      this.reimburseStatusIndex = -1;
      this.annotateStatusIndex = -1;
      this.deleteStatusIndex = -1;
    },
    //确定
    submit() {
      let queryParams = {
        bigCreateTime: this.submitDate.startDate,
        endCreateTime: this.submitDate.endDate,
        bigApprovalTime: this.approveDate.startDate,
        endApprovalTime: this.approveDate.endDate,
        bigReimbursementTime: this.reimburseDate.startDate,
        endReimbursementTime: this.reimburseDate.endDate,
      };
      this.$store.commit("setQueryParams", queryParams);
      this.back();
    },
  },
};
</script>
<style lang='scss' scoped>
.main {
  padding: 40rpx 0 150rpx;
}

.card-box {
  padding: 24rpx;
}

.picker-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date-link {
  padding: 0 10rpx;
}

.date-icon {
  width: 34rpx;
  height: 34rpx;
  margin-left: 10rpx;
  background: url("../../static/date.png") no-repeat center;
  background-size: 100%;
}
</style>