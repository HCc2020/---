<template>
  <div
    class="dialog"
    :class="{ camera_dialog: isCamera }"
    v-show="show"
    :style="{
      left: x + 'px',
      top: y + 'px',
    }"
  >
    <div v-if="type !== '机构'" class="dialog_title">详细信息</div>
    <div v-else class="dialog_title">
      <div class="organ_name">{{ obj.name }}</div>
    </div>
    <ul v-if="type == '人脸'" class="dialog_info rl_info">
      <li v-for="(item, key, index) of obj" :key="index">
        <div class="renlian">
          <img :src="item" alt="" />
        </div>
      </li>
    </ul>
    <ul v-if="type == '食堂摄像地址'" class="dialog_info camera_info">
      <li v-for="(item, index) of obj.cameraAddress" :key="index">
        <div class="">
          <div class="camera">
            <div class="camera_name">监控名称:</div>
            <div class="camera_address">
              <a style="word-wrap: break-word" :href="item.address">{{
                item.name
              }}</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul v-if="type == ''" class="dialog_info">
      <li v-for="(item, key, index) of obj" :key="index">
        {{ key }}:{{ item }}
      </li>
    </ul>
    <ul v-if="type == '机构'" class="dialog_info" style="width: 400px">
      <!-- <div class="organ_name">{{obj.name}}</div> -->
      <div class="organ_info">
        <div class="info_item"><span>入住人数：</span>{{ obj.inBed }}</div>
        <div class="info_item">
          <span>可用床位：</span>{{ obj.allBed - obj.inBed }}
        </div>
        <div class="info_item">
          <span>入住率：</span
          >{{ ((obj.inBed / obj.allBed) * 100).toFixed(2) }}%
        </div>
      </div>
      <div class="organ_info">
        <div class="info_item"><span>地址：</span>{{ obj.address }}</div>
      </div>
      <div class="organ_info">
        <div class="info_item"><span>联系电话：</span>{{ obj.phone }}</div>
      </div>
      <div class="organ_info">
        <div class="info_item_border" @click="toPage(obj.url.ZhaoHuFuWu)">
          <span>照护服务</span>
        </div>
        <div class="info_item_border" @click="toPage(obj.url.ZhaoHuAnQuan)">
          <span>照护安全</span>
        </div>
        <div class="info_item_border" @click="toPage(obj.url.XiaoFangAnQuan)">
          <span>消防安全</span>
        </div>
      </div>
      <div class="organ_info">
        <div class="info_item_border" @click="toPage(obj.url.GongGongAnQuan)">
          <span>公共安全</span>
        </div>
        <div class="info_item_border" @click="toPage(obj.url.YangGuangChuFang)">
          <span>阳光厨房</span>
        </div>
        <div class="info_item_border" @click="toPage(obj.url.ZhiHuiYunGuan)">
          <span>智慧运管</span>
        </div>
      </div>
    </ul>
    <div class="dialog_delete" @click="hideModal">
      <img :src="require('../assets/delete.png')" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "dialog",
  props: {
    x: {
      type: String,
      default: "0",
    },
    y: {
      type: String,
      default: "0",
    },
    show: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
      default: {},
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isCamera: false,
    };
  },

  mounted() {
    if (this.type == "食堂摄像地址") {
      this.isCamera = true;
    }
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    toPage(url) {
      console.log(url);
      window.open(url);
    },
  },
};
</script>

<style>
.dialog {
  position: absolute;
  min-width: 200px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 1009;
  min-height: 200px;
  overflow: hidden;
  
}

.camera_dialog {
  max-width: 500px;
  max-height: 300px;
}

.dialog_title {
  padding: 8px;
  color: #fff;
  height: 32px;
  line-height: 32px;
  /* height: 52px; */
  background: linear-gradient(92deg, #0825b7, #01b4ff);
}

.dialog_info {
  padding: 16px;
  color: #fff;
  list-style: none;background: #06076B;
border: 1px solid rgba(55, 85, 218, 0.3);
}

.camera_info {
  max-height: 170px;
  overflow-y: auto;
  overflow-x: hidden;
}

.rl_info {
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

.renlian {
  display: flex;
}

.rl_img {
  flex: 1;
  margin-left: 4px;
}

.camera {
  display: flex;
}

.camera_address {
  flex: 1;
  max-width: 375px;
}

.camera_name {
  min-width: 75px;
}
.organ_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.organ_info .info_item {
  flex: 1;
  padding: 8px 0;
}
.organ_name {
  text-align: center;
  color: #0096ff;
  background: -webkit-linear-gradient(
    92deg,
    #0072ff 0%,
    #00eaff 48.8525390625%,
    #01aaff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.info_item_border {
  padding: 8px 0;
  width: 100px;
  border: 1px solid #fff;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
}
</style>