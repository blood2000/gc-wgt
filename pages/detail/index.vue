<template>
  <view class="content">
    <HeaderBar :title="title" @back="back"></HeaderBar>
    <Tab :initIndex="tabIndex" @change="change" />
    <view class="main">
         <Info :item="item" v-if="tabIndex === 0" />
      <!-- <block v-for="(item, index) in lists" :key="index"> -->
       
        <Plan :item="item" v-if="tabIndex === 1" />
        <Log :item="item" :itemIndex="index" v-if="tabIndex === 2" />
      <!-- </block> -->
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import HeaderBar from "../../components/HeaderBar.vue";
import Tab from "../../components/stzhang-tab/stzhang-tab.vue";
import Plan from "./component/plan.vue";
import Log from "./component/log.vue";
import Info from "./component/info.vue";
import uniRequest from "../../config/request.js";

export default {
  components: { HeaderBar, Tab, Plan, Log, Info },
  data() {
    return {
      title: "维修详情",
      tabIndex: 0,
      lists: [],
      code: null,
      noData: false,
    };
  },
  computed: {
    ...mapState({
      headerInfo: (state) => state.native.headerInfo,
      queryParams: (state) => state.repair.queryParams,
    }),
  },
  onLoad(option) {
    console.log("option", option);
    if (!option || !option.code) return;
    this.code = option.code;
    this.getList()
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
    change(e) {
      console.log("e", e);
      this.tabIndex = e;
    },
    getList() {
      const config = {
        url: "getRepairList",
        header: this.headerInfo, //还没和原生传值
        querys: {
          code: this.code,
        },
      };
      uniRequest(config).then((res) => {
        console.log("修改详情数据 res", res);
        this.lists = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  padding: 34rpx 32rpx;
  overflow: auto;
}
</style>