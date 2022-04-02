<!-- 维修管理 -->
<template>
  <view class="content">
    <HeaderBar :title="title" @back="back"></HeaderBar>
    <div class="header-div">
      <div class="search-box">
        <div class="search-input-box">
          <input
            class="search-input"
            placeholder="请输入车牌号"
            confirm-type="search"
            @confirm="query"
            type="text"
            v-model="searchKey"
          />
        </div>
        <div class="search-funnel-box" @click="toFilterCondition">
          <div class="funnel-icon"></div>
          <div class="funnel-text">筛选</div>
          <div class="funnel-corner">
            <div class="funnel-corner-text">{{ repairData.length }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <z-paging
        ref="paging"
        v-model="repairData"
        @query="getData"
        :fixed="false"
        :loading-more-enabled="false"
        :hide-empty-view="true"
        :auto="false"
        :show-loading-more-no-more-line="false"
        :hide-loading-more-when-no-more-and-inside-of-paging="true"
      >
        <div v-if="noData" class="no-data">暂无记录</div>
        <block v-for="(item, index) in repairData" :key="index">
          <repair-card
            :cardData="item"
            @changeStatus="changeStatus"
            @deleteRecord="deleteRecord"
          ></repair-card>
        </block>
      </z-paging>
    </div>
    <status-modal
      v-if="showModal"
      :modalData="modalData"
      @closeModal="closeModal"
      @refreshList="refreshList"
    ></status-modal>
  </view>
</template>

<script>
import { mapState } from "vuex";
import ZPagingMixin from "@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin";
import uniRequest from "../../config/request.js";
import HeaderBar from "../../components/HeaderBar.vue";
import RepairCard from "./components/RepairCard.vue";
import StatusModal from "./components/StatusModal.vue";
// import format from "../../utils/format.js";
export default {
  mixins: [ZPagingMixin], // 使用mixin
  data() {
    return {
      title: "维修管理",
      searchKey: "",
      pageNum: 1,
      pageSize: 10,
      repairData: [],
      noData: false,
      showModal: false,
      modalData: null,
    };
  },
  components: { HeaderBar, RepairCard, StatusModal },
  computed: {
    ...mapState({
      headerInfo: (state) => state.native.headerInfo,
      queryParams: (state) => state.repair.queryParams,
    }),
  },
  onLoad() {
    console.log(this.queryParams);
    this.$store.commit("setQueryParams", {
      bigCreateTime: "",
      endCreateTime: "",
      bigApprovalTime: "",
      endApprovalTime: "",
      bigReimbursementTime: "",
      endReimbursementTime: "",
    });
  },
  onShow() {
    this.getData();
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },

    getData(pageNum, pageSize) {
      console.log(pageNum, pageSize);
      this.noData = false;
      this.pageNum = pageNum || 1;
      const config = {
        url: "getRepairList",
        header: this.headerInfo,
        querys: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          vehicleNumber: this.searchKey,
          ...this.queryParams,
        },
      };
      // let data = {
      //   pageNum: this.pageNum,
      //   pageSize: this.pageSize,
      //   keyWord: this.searchKey,
      // };
      // console.log(data)
      uniRequest(config).then((res) => {
        console.log("维修管理列表", res);
        this.$refs.paging.complete(res.data);
        this.noData = res.data.length === 0;
      });
      // setTimeout(() => {
      //   this.$refs.paging.complete(mockData);
      // }, 1000);
    },
    query() {
      this.getData();
    },
    //筛选条件
    toFilterCondition() {
      uni.navigateTo({
        url: "./filterCondition",
      });
    },
    //修改状态
    changeStatus(params) {
      console.log("状态数据", params);
      this.showModal = true;
      this.modalData = params;
    },
    //删除
    deleteRecord(id) {
      console.log("当前id");
    },
    closeModal() {
      this.showModal = false;
    },
		//刷新页面并关闭弹窗
		refreshList() {
			this.showModal = false;
			this.$refs.paging.reload();
		},
  },
};
</script>

<style  scoped>
</style>
