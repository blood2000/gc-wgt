<template>
  <view class="plan">
    <view class="plan-item">
      <view class="left">
        <image src="../../../static/ok.png" mode="" />
        <view class="left-line"></view>
      </view>
      <view class="right">
        <view class="right-header">
          <view class="right-header-status">已报销</view>
          <view class="right-header-date">2021-06-06 13:12:12</view>
        </view>
        <view style="min-height: 104rpx">
          <view class="right-name">张大炮 (管理员)</view>
          <view class="right-price">
            <view class="right-price-label">报销金额</view>
            <view>4555元</view>
          </view>
        </view>
      </view>
    </view>
    <view class="plan-item">
      <view class="left">
        <image src="../../../static/error.png" mode="" />
        <view class="left-line"></view>
      </view>
      <view class="right">
        <view class="right-header">
          <view class="right-header-status">已报销</view>
          <view class="right-header-date">2021-06-06 13:12:12</view>
        </view>
        <view style="min-height: 104rpx">
          <view class="right-name">张大炮 (管理员)</view>
          <view class="right-price">
            <view class="right-price-label">报销金额</view>
            <view>4555元</view>
          </view>
        </view>
      </view>
    </view>
    <view class="plan-item">
      <view class="left">
        <image src="../../../static/wait.png" mode="" />
      </view>
      <view class="right">
        <view class="right-header">
          <view class="right-header-status">已报销</view>
          <view class="right-header-date">2021-06-06 13:12:12</view>
        </view>
        <view style="min-height: 104rpx">
          <view class="right-name">张大炮 (管理员)</view>
          <view class="right-price">
            <view class="right-price-label">报销金额</view>
            <view>4555元</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.plan {
  width: 686rpx;
  background: #ffffff;
  border-radius: 20rpx;
  box-sizing: border-box;
  padding: 51rpx 34rpx;
  margin-bottom: 30rpx;
}
.plan-item {
  display: flex;
  margin-bottom: 17rpx;
}
.left {
  width: 32rpx;
  margin-right: 24rpx;
  display: flex;
  flex-direction: column;

  image {
    width: 32rpx;
    height: 32rpx;
    margin-bottom: 18rpx;
  }
  &-line {
    flex: 1;
    border-left: 10rpx dotted #b2b7cb;
    position: relative;
    left: 10rpx;
  }
}
.right {
  font-size: 24rpx;
  font-family: PingFang SC;
  font-weight: 400;
  color: #333333;
  .right-header {
    display: flex;
    align-items: center;
    margin-bottom: 4rpx;
    &-status {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #3a65ff;
      margin-right: 12rpx;
    }
    &-date {
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #999999;
    }
  }
  &-name {
    margin-bottom: 8rpx;
  }
  &-price {
    display: flex;
    &-label {
      margin-right: 24rpx;
    }
  }
}
</style>