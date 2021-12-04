<template>
  <div id="app" :style="{'--yScale': yScale,'--xScale': xScale}">
    <div class="myTime">{{theTime}}</div>
    <router-view />
    <div class="page_ft">
      <div class="button_box">
        <div class="button_card" @mouseenter="showActive(1)" @mouseleave="hideActive()" @click="toPageFun('居家服务')">
          <img v-show="active !== 1 &&selectActive!==1" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 1 ||selectActive==1" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">居家服务</div>
        </div>
        <div class="button_card" @mouseenter="showActive(2)" @mouseleave="hideActive()" @click="toPageFun('居家康养')">
          <img v-show="active !== 2 &&selectActive!==2" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 2||selectActive==2" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">居家康养</div>
        </div>

        <div class="button_card" @mouseenter="showActive(3)" @mouseleave="hideActive()" @click="toPageFun('社区就餐')">
          <img v-show="active !== 3 &&selectActive!==3" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 3 ||selectActive==3" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">社区就餐</div>
        </div>
        <div class="button_card" @mouseenter="showActive(4)" @mouseleave="hideActive()" @click="toPageFun('社区活动')">
          <img v-show="active !== 4 &&selectActive!==4" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 4 ||selectActive==4" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">社区活动</div>
        </div>
        <div class="button_card" @mouseenter="showActive(5)" @mouseleave="hideActive()" @click="toPageFun('老年大学')">
          <img v-show="active !== 5 &&selectActive!==5" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 5 ||selectActive==5" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">老年大学</div>
        </div>
        <div class="button_card" @mouseenter="showActive(6)" @mouseleave="hideActive()" @click="toPageFun('机构养老')">
          <img v-show="active !== 6 &&selectActive!==6" :src="require('@/assets/home/noselect.png')">
          <img v-show="active === 6 ||selectActive==6" class="hide_tab" :src="require('@/assets/home/select.png')">
          <div class="ft_item-name">机构养老</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        xScale: 1,
        yScale: 1,
        active: 0,
        selectActive: 0,
        theTime: '2020-10-27 23:17:44'
      };
    },
    methods: {
      setScale() {
        let wh = window.innerHeight / 1080;
        let ww = window.innerWidth / 1920;
        this.xScale = ww;
        this.yScale = wh;
        sessionStorage.setItem('xScale', ww);
        sessionStorage.setItem('yScale', wh);
      },
      showActive(index) {
        this.active = index;
      },
      getTime() {
        var date = new Date();
        date.toLocaleString(); //获取日期与时间
        this.theTime = date.toLocaleString();
      },
      hideActive() {
        if (this.selectActive == 0) {
          this.active = 0;
        } else {
          this.active = this.selectActive;
        }
      },
      toPageFun(e) {
        var action = e;
        switch (action) {
          case '居家服务':
            this.selectActive = 1;
            this.$router.push('HomeCare')
            // window.open('http://47.96.104.248:7001/#/')
            break;
          case '居家康养':
            window.open('http://47.96.104.248:7001/#/home')
            break;
          case '社区就餐':
            this.selectActive = 3;
            this.$router.push('CommunityPension')
            // window.open('http://101.66.252.21:1003/carecentrality/admin-autologin.html?code=eyJ1c2VyTmFtZSI6InpsengiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9')
            break;
          case '社区活动':
            this.$alert('暂无配置', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            // window.open('http://101.66.252.21:1003/carecentrality/admin-autologin.html?code=eyJ1c2VyTmFtZSI6InpsengiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9')
            break;
          case '老年大学':
            this.$alert('暂无配置', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            break;
          case '机构养老':
            this.selectActive = 6;
            this.$router.push('InstitutionalPension')
            // window.open('http://101.66.252.21:1004/admin-autologin.html?code=eyJ1c2VyTmFtZSI6InlsamciLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9')
            break;


          default:
            console.log('出错了')
        }
      }
    },
    mounted() {
      var that = this;
      that.setScale();
      setInterval(function () {
        that.getTime()
      }, 1000)
      // window.addEventListener("resize", this.debounce(this.setScale, 100));
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  html {
    overflow-x: hidden;
    overflow-y: visible;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  #app {
    width: 1920px;
    height: 1080px;
    transform: scale(var(--xScale), var(--yScale));
    transform-origin: left top;
    background-size: 100% 100%;
  }

  .myTime {
    position: absolute;
    left: 20px;
    top: 35px;
    z-index: 1008;
    color: #fff;
  }

  .button_box {
    margin: 0 23%;
    display: flex;
    height: 100%;
  }

  .button_card {
    flex: 1;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;
  }

  .ft_item-name {
    position: absolute;
    left: 35%;
    bottom: 26%;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #1EE3F3;
    z-index: 999;
  }

  .button_card img {
    position: absolute;
    left: 0;
    bottom: 0;
  }


  .page_ft {
    height: 6.65%;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>