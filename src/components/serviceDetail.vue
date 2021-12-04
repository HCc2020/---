<template>
  <div class="dialog" v-show="show">
    <div class="dialog_title">服务详情
        <div class="dialog_delete" @click="hideModal">
            <img :src="require('../assets/delete.png')" alt="">
        </div>
    </div>
    <div class="dialog_body">
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务日期:</div>
          <div class="info_num">
            {{ service.serviceDate }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">预约服务时间:</div>
          <div class="info_num">
            {{ service.beginTime }}- {{ service.endTime }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务对象:</div>
          <div class="info_num">
            {{ service.name }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">身份证:</div>
          <div class="info_num">
            {{ service.idCard }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">电话:</div>
          <div class="info_num">
            {{ service.phone }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">地址:</div>
          <div class="info_num">
            {{ service.address }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务地址:</div>
          <div class="info_num">
            {{ service.serviceAddress }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">服务时长:</div>
          <div class="info_num">
            {{ service.totalHours }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">经度:</div>
          <div class="info_num">
            {{ service.beginLatitude }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">纬度:</div>
          <div class="info_num">
            {{ service.beginLongitude }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务性质:</div>
          <div class="info_num">
            {{ service.serviceNature }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">服务清单:</div>
          <div class="info_num">
            {{ service.serviceList[0] }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务人员:</div>
          <div class="info_num">
            {{ service.spName }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">结算方式:</div>
          <div class="info_num">
            按时
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">支付方式:</div>
          <div class="info_num">
            自费
          </div>
        </div>
        <div class="flex_item info_box"></div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">服务内容:</div>
          <div class="info_num">
            {{ service.serviceList[0] }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">备注:</div>
          <div class="info_num">
           
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">创建时间:</div>
          <div class="info_num">
            {{ service.createTime  }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">接单时间:</div>
          <div class="info_num">
            {{ service.orderTakingTime  }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">开始时间:</div>
          <div class="info_num">
            {{ service.workingBegin  }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">开始地点:</div>
          <div class="info_num">
            经度:{{ service.beginLongitude  }} 纬度:{{ service.beginLatitude   }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">完成时间:</div>
          <div class="info_num">
            {{ service.workingFinish  }}
          </div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">完成地点:</div>
          <div class="info_num">
            经度:{{ service.finishLongitude   }} 纬度:{{ service.finishLatitude    }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">实际用时:</div>
          <div class="info_num">{{ service.totalHours  }}小时</div>
        </div>
        <div class="flex_item info_box">
          <div class="info_name">状态:</div>
          <div class="info_num">
            {{ service.state }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex_item info_box">
          <div class="info_name">工作照片:</div>
          <div class="info_num">
            <img v-for="(item,index) in service.workingImages" :key='index' :src="'http://47.96.104.248:6001'+item" alt="" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "serviceDetail",
  props: {
    id: {
      type: Number,
      default: 1,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      service: {},
      serviceId: this.id,
    };
  },
  watch: {
    id: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      this.serviceId = newVal;
      this.getServiceInfo();
    },
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    getServiceInfo() {
      var that = this;
      console.log(that.serviceId);
      that
        .$axios({
          methods: "get",
          url:
            "http://47.96.104.248:5555/HomeService/GetServicePlanDetail?servicePlanId=" +
            that.serviceId,
          headers: {
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENhcmQiOiIiLCJuYW1lIjoibGcwMDEiLCJwaG9uZSI6IiIsImxvZ2luVGltZSI6IjIwMjEtMTAtMzBUMjE6MTI6MjQuNTk5NTQ1MSswODowMCIsInVzZXJUeXBlIjoyfQ.2WofRuRll3mTcXhphF_oiN8ovRayCNb9FKOorN6kRbM",
          },
        })
        .then(function (res) {
          console.log(res);
          that.service = res.data.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.dialog {
  position: absolute;
  min-width: 800px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 1008;
  min-height: 800px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #eee;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog_title {
  padding: 16px;
  color: #fff;
  height: 32px;
  line-height: 32px;
  background-color: rgb(194, 222, 247);
}

.dialog_body {
  padding: 16px;
}

.dialog_delete {
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 1009;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.dialog_delete img {
  height: 100%;
  width: 100%;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex_item {
    flex: 1;
}
.info_box {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.info_name {
    width: 100px;
}
.info_num {
    flex: 1;
    padding-left: 8px;
}
.info_num img {
    width: 40px;
    height: 40px;
}
</style>