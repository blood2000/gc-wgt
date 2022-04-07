<template>
  <view class="info">
    <view class="info-top">
      <view class="info-top-title">
        <view class="info-top-title-name">关联运单</view>
        <view class="info-top-title-search">查看</view>
      </view>
      <view class="info-top-content">
        <view class="info-top-content-title">煤炭</view>
        <view class="info-top-content-add">
          <view class="icon">起</view>
          <view class="adderss">郑州开合区质朴大厦</view>
        </view>
        <view class="info-top-content-add">
          <view class="icon end">终</view>
          <view class="adderss">福州台江国脉时代广场</view>
        </view>
      </view>
    </view>
    <view class="info-center">
      <view class="info-center-header">
        <image src="../../../static/xiu.png" mode="" />
        <view class="info-center-header-label">维修单号</view>
        <view>35566545484855555</view>
      </view>
      <view class="info-center-content">
        <view class="info-center-content-item">
          <view class="label">车牌号</view>
          <view class="value">闽A13456</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修状态</view>
          <view class="value">已维修</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修开始日期</view>
          <view class="value">2022-02-11</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修结束日期</view>
          <view class="value">2022-02-12</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修原因</view>
          <view class="value">车胎爆了</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修费用(元)</view>
          <view class="value">1340</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">维修厂家</view>
          <view class="value">路边莫喽洗的厂子</view>
        </view>
        <view class="info-center-content-item">
          <view class="label">联系人</view>
          <view class="value">小炮子</view>
        </view>
        <view class="info-center-content-item mb40">
          <view class="label">联系电话</view>
          <view class="value">15556665555</view>
        </view>
        <view class="divider"></view>
        <view class="xiu">
          <view class="xiu-title">
            <image src="../../../static/peijian.png" mode="" />
            <view class="xiu-title-value">维修配件</view>
          </view>
          <view class="xiu-info">
            <view class="xiu-info-left">轮胎 - 225/45/R19</view>
            <view class="xiu-info-right">
              <view class="xiu-info-right-label">金额</view>
              <view class="xiu-info-right-price">￥ 500</view>
            </view></view
          >
        </view>
        <view class="divider"></view>
        <view class="xiu">
          <view class="xiu-title">
            <image src="../../../static/time.png" mode="" />
            <view class="xiu-title-value">工时项目</view>
          </view>
          <view class="xiu-info">
            <view class="xiu-info-left">人工费</view>
            <view class="xiu-info-right">
              <view class="xiu-info-right-label">金额</view>
              <view class="xiu-info-right-price">￥ 500</view>
            </view></view
          >
        </view>
        <view class="divider"></view>
        <view class="xiu">
          <view class="imageList">
            <view class="imageList-item"></view>
            <view class="imageList-item"></view>
            <view class="imageList-item"></view>
          </view>
          <view class="remark">
            <view class="remark-label">备注</view>
            <view class="remark-value double-text-overflow">
              车子有问题好几年了车子有问题好
              几年了车子有问题好几年了车子有问题好几年了车子有问题好
              几年了车子有问题好几年了
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.info {
  overflow-y: auto;
}
.info-top {
  width: 686rpx;
  height: 280rpx;
  background: #ffffff;
  box-shadow: 0rpx 3rpx 6rpx #d3d6e1;
  border-radius: 20rpx;
  margin-bottom: 26rpx;
  box-sizing: border-box;
  padding: 26rpx 30rpx 26rpx 24rpx;
  &-title {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 14rpx;
    &-name {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    &-name::before {
      content: " ";
      position: absolute;
      left: -24rpx;
      top: 4rpx;
      width: 8rpx;
      height: 34rpx;
      background: #3a65ff;
      border-radius: 4rpx;
    }
    &-search {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #3a65ff;
    }
  }
  &-content {
    width: 632rpx;
    height: 171rpx;
    background: #f7f8fc;
    border: 1rpx solid #dce0ea;
    border-radius: 12rpx;
    padding: 13rpx 0 16rpx 28rpx;
    box-sizing: border-box;
    &-title {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-bottom: 11rpx;
    }
    &-add {
      display: flex;
      align-items: center;
      margin-bottom: 15rpx;
      .icon {
        width: 32rpx;
        height: 32rpx;
        background: #3a65ff;
        border-radius: 6rpx;
        margin-right: 16rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
      .adderss {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      .end {
        background: #ffb739;
      }
    }
  }
}
.info-center {
  width: 686rpx;
  background: linear-gradient(271deg, #e0e7fc 0%, #f6f8ff 100%);
  border-radius: 20rpx;
  padding-top: 22rpx;
  &-header {
    margin-left: 20rpx;
    display: flex;
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #3a65ff;
    margin-bottom: 20rpx;
    image {
      width: 31rpx;
      height: 37rpx;
      margin-right: 7rpx;
    }
    &-label {
      margin-right: 30rpx;
    }
  }
  &-content {
    width: 100%;
    background: #ffffff;
    border-radius: 11rpx;
    padding-top: 36rpx;
    padding-bottom: 40rpx;
    box-sizing: border-box;
    &-item {
      width: 100%;
      padding-left: 38rpx;
      padding-right: 54rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      .label {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
      }
      .value {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
      }
    }
    .xiu {
      padding-left: 24rpx;
      padding-right: 44rpx;
      margin-bottom: 36rpx;
      width: 100%;
      box-sizing: border-box;
      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 16rpx;
        image {
          width: 34rpx;
          height: 34rpx;
          margin-right: 11rpx;
        }
        &-value {
          font-size: 32rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #3a65ff;
        }
      }
      &-info {
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
    }
    .imageList {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 36rpx;
      &-item {
        width: 200rpx;
        height: 144rpx;
        background: #f7f7f7;
        border-radius: 4rpx;
        margin-right: 10rpx;
        margin-bottom: 19rpx;
        background: pink;
      }
      &-item:nth-child(3n) {
        margin-right: 0;
      }
    }
    .remark {
      display: flex;
      &-label {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #8c93aa;
        margin-right: 125rpx;
      }
      &-value {
        flex: 1;
      }
    }
  }
}
.mb40 {
  margin-bottom: 40rpx;
}
.divider {
  width: 100%;
  border-bottom: 1rpx dotted #cccccc;
  position: relative;
  margin: 23rpx 0;
}
.divider::before {
  content: " ";
  position: absolute;
  top: -8rpx;
  left: -8rpx;
  width: 16rpx;
  height: 16rpx;
  background: #f3f3f3;
  border-radius: 50%;
}
.divider::after {
  content: " ";
  position: absolute;
  top: -8rpx;
  right: -8rpx;
  width: 16rpx;
  height: 16rpx;
  background: #f3f3f3;
  border-radius: 50%;
}
</style>