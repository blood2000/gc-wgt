<template>
  <view class="my-tabs">
    <view
      v-for="(item, index) in getModelData"
      :key="index"
      :class="{ 'tab-item': true, active: activeIndex == index }"
      @tap="tap(index)"
    >
      {{ item.label }}
    </view>
    <view
      class="slider"
      :style="{ left: 86 + activeIndex * 250 + 'rpx' }"
    ></view>
  </view>
</template>

<script>
export default {
  props: ["modelData", "initIndex"],
  data() {
    return {
      defaultInfo: {
        data: [{ label: "维修信息" }, { label: "进度" }, { label: "修改记录" }],
      },
      activeIndex: 0, //默认索引
    };
  },
  computed: {
    getModelData() {
      return this.modelData || this.defaultInfo.data;
    },
    formatBe() {
      return this.modelData
        ? this.modelData.length > 4
          ? true
          : false
        : false;
    },
  },
  methods: {
    tap(index) {
      if (index !== this.activeIndex) this.$emit("change", index);
      this.activeIndex = index;
    },
    /**
     * @name 初始化activeIndex
     */
    initActive() {
      this.activeIndex = this.initIndex || this.activeIndex;
    },
  },
  created() {
    this.initActive();
  },
};
</script>
<style lang='scss'>
.my-tabs {
  height: 88upx;
  font-size: 28upx;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  min-width: 100%;
  overflow-x: auto;
  position: relative;
  background: #fff;

  .tab-item {
    line-height: 48upx;
    padding: 20upx;
    min-width: 100upx;
    text-align: center;
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
  }
  .tab-item.active {
    position: relative;
    color: #3682ff;
  }
  //   .tab-item.active::after {
  //     content: "";
  //     position: absolute;
  //     bottom: 0;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     width: 100%;
  //     border-bottom: 4upx solid #3682ff;
  //     animation: test ease 1 1.5s;
  //   }
}
.slider {
  position: absolute;
  bottom: 0;
  left: 0rpx;
  transition: all 0.2s;
  width: 88rpx;
  height: 6rpx;
  background: #3a65ff;
}
</style>
