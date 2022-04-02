<template>
  <view class="log">
    <view class="log-header">
      <view :class="itemIndex === 0 ? 'frist' : ''">2021-06-11 15:15:55</view>
      <view :class="itemIndex === 0 ? 'frist' : ''">黄河西</view>
    </view>
    <view class="log-main">
      <view class="log-main-title">
        <view class="log-main-title-name">
          <image src="../../../static/log-tilte.png" mode="" />
          <view>维修时间</view>
        </view>
        <view class="log-main-title-date"> 2021-12-02 修改为 </view>
      </view>
      <view class="log-main-list">
          <view class="log-main-list-tag">
              <image src="../../../static/log-new.png" mode="" />
              <!-- <image src="../../../static/log-old.png" mode="" /> -->
          </view>
        <view class="log-main-list-item">
          <view class="header">
            <view class="header-left">轮胎 - 225/45/R19</view>
            <view class="header-right">
              <view class="header-right-label">金额</view>
              <view class="header-right-price">￥ 500</view>
            </view>
          </view>
          <view class="tag-list">
            <view class="tag-list-item"> 数量 2 </view>
          </view>
        </view>
        <view class="log-main-list-item">
          <view class="header">
            <view class="header-left">轮胎 - 225/45/R19</view>
            <view class="header-right">
              <view class="header-right-label">金额</view>
              <view class="header-right-price">￥ 500</view>
            </view>
          </view>
          <view class="tag-list">
            <view class="tag-list-item"> 数量 2 </view>
          </view>
        </view>
        <view class="log-main-list-item">
          <view class="header">
            <view class="header-left">轮胎 - 225/45/R19</view>
            <view class="header-right">
              <view class="header-right-label">金额</view>
              <view class="header-right-price">￥ 500</view>
            </view>
          </view>
          <view class="tag-list">
            <view class="tag-list-item"> 数量 2 </view>
          </view>
        </view>
      </view>
      <view v-show="false" class="log-main-newtime"> 2022-01-22</view>
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
    itemIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.log {
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20rpx;
  padding: 24rpx 24rpx;
  margin-bottom: 32rpx;
  &-header {
    display: flex;
    justify-content: space-between;
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-bottom: 12rpx;
  }
  .frist {
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
  }
  &-main {
    width: 100%;
    min-height: 96rpx;
    background: #f7f7f7;
    border-radius: 4rpx;
    padding: 16rpx;
    box-sizing: border-box;
    &-title {
      padding-right: 4rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-name {
        display: flex;
        align-items: center;
        image {
          width: 32rpx;
          height: 32rpx;
          margin-right: 16rpx;
        }
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
      }
      &-date {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    &-newtime {
      display: flex;
      justify-content: flex-end;
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    &-list {
      width: 100%;
      background: #ffffff;
      border-radius: 8rpx;
      box-sizing: border-box;
      padding: 16rpx 8rpx 0 4rpx;
      position: relative;
      margin-top: 9rpx;
      &-item {
        width: 100%;
        box-sizing: border-box;
        padding: 3rpx 16rpx 29rpx 20rpx;
        border-bottom: 1rpx solid #ebebeb;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-left {
            font-size: 28rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #333333;
          }
          &-right {
            display: flex;
            align-items: center;
            margin-bottom: 16rpx;
            &-label {
              font-size: 20rpx;
              font-family: PingFang SC;
              font-weight: 400;
              color: #999999;
            }
            &-price {
              font-size: 32rpx;
              font-family: PingFang SC;
              font-weight: bold;
              color: #333333;
            }
          }
        }
        .tag-list {
          display: flex;
          align-items: center;
          .tag-list-item {
            width: 120rpx;
            height: 40rpx;
            background: #f7f7f7;
            border-radius: 5rpx;
            margin-right: 37rpx;
          }
        }
      }
      &-item:last-child {
        border-bottom: none;
      }
      &-tag{
          position: absolute;
          bottom: 0;
          right: 0;
          image{
              width: 52rpx;
              height: 52rpx;
          }
      }
    }
  }
}
</style>