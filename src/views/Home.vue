<template>
  <div
    class="home"
    :style="{ backgroundImage: 'url(' + require('@/assets/home/bg.png') + ')' }"
  >
    <div class="page_hd">怡养义乌—养老服务</div>
    <div class="page_bd">
      <div class="bd_left">
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">居家服务</div>
          <div class="flexbox">
            <div class="flexitem numBox">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">2943</div>
                <div class="info_name">今日工单（单）</div>
              </div>
            </div>
            <div class="flexitem echart-bt">
              <div id="orderInfo" class="echart-item"></div>
              <div class="oldInfo_box">
                <div class="oldInfo_box-percent">99.7%</div>
                <div class="oldInfo_box-name">工单完成率</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">居家康养</div>
          <div class="flexbox shequbox">
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">856个</div>
                <div class="info_name">康养人数</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">788人</div>
                <div class="info_name">在线人数</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">0次</div>
                <div class="info_name">今日预警</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">社区就餐</div>
          <div class="flexbox shequbox">
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">421个</div>
                <div class="info_name">照料中心</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">303个</div>
                <div class="info_name">就餐点</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">0人</div>
                <div class="info_name">今日就餐人数</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd_center">
        <div class="center-one">
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="" />
            </div>

            <div class="center-one_item_info">
              <div class="info_num">830504</div>
              <div class="info_name">总人口数（人）</div>
            </div>
          </div>
          <div class="center-one_line">
            <img :src="require('../assets/home/line.png')" alt="" />
          </div>
          <div class="center-one_item_center">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="" />
            </div>

            <div class="center-one_item_info">
              <div class="info_num">171531</div>
              <div class="info_name">老人总数（人）</div>
            </div>
          </div>
          <div class="center-one_line">
            <img :src="require('../assets/home/line.png')" alt="" />
          </div>
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="" />
            </div>

            <div class="center-one_item_info">
              <div class="info_num">20.7%</div>
              <div class="info_name">老人占比</div>
            </div>
          </div>
        </div>
        <div v-show="!isStreet" class="map_box">
          <img class="init" :src="require('../assets/map/init.png')" alt="" />
          <div class="ShangXi">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(0, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>上溪镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/上溪镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="FouTang">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(1, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>佛堂镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/佛堂镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="BeiYuan">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(2, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>北苑街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/北苑街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="HouZhai">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(3, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>后宅街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/后宅街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="ChengXi">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(4, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>城西街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/城西街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="DaChen">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(5, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>大陈镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/大陈镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="WenTing">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(6, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>文亭镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/文亭镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="JiangDong">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(7, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>江东街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/江东街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="NianSanLi">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(8, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>甘三里街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/甘三里街道（选中）.png')"
              alt=""
            />
          </div>

          <div class="FuTian">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(9, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>福田街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/福田街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="ChouCheng">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(10, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>稠城街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/稠城街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="ChouJiang">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(11, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>稠江街道</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/稠江街道（选中）.png')"
              alt=""
            />
          </div>
          <div class="SuXi">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(12, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>苏溪镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/苏溪镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="ChiAn">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toDetail(13, $event)"
            >
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>赤岸镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/赤岸镇（选中）.png')"
              alt=""
            />
          </div>
        </div>
        <div v-show="isStreet" class="street_map_box">
          <img class="street_init" :src="streetImg" alt="" />
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 521px; top: 491px"
          >
            南山社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 563px; top: 311px"
          >
            大元村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 601px; top: 223px"
          >
            石塔头村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 657px; top: 217px"
          >
            观音塘村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 654px; top: 185px"
          >
            白莲塘村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 657px; top: 158px"
          >
            船埠头村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 635px; top: 112px"
          >
            大湖头村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 591px; top: 121px"
          >
            下湾村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 609px; top: 169px"
          >
            平畴村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 571px; top: 175px"
          >
            新兴村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 572px; top: 209px"
          >
            后儿村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 553px; top: 228px"
          >
            南山坑村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 522px; top: 140px"
          >
            东苑社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 531px; top: 209px"
          >
            东新屋村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 509px; top: 222px"
          >
            青南村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 520px; top: 233px"
          >
            流赐社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 499px; top: 279px"
          >
            西塘村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 486px; top: 255px"
          >
            金星村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 480px; top: 153px"
          >
            商博社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 425px; top: 164px"
          >
            下王村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 399px; top: 216px"
          >
            东州社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 385px; top: 316px"
          >
            盘溪社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 336px; top: 211px"
          >
            五爱社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 332px; top: 254px"
          >
            鸡鸣山社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 265px; top: 266px"
          >
            临江社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 298px; top: 320px"
          >
            商苑社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 234px; top: 299px"
          >
            江南社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 259px; top: 355px"
          >
            南苑社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 207px; top: 337px"
          >
            下傅村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 220px; top: 386px"
          >
            黎明湖社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 263px; top: 442px"
          >
            张村村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 357px; top: 396px"
          >
            青岩傅村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 389px; top: 456px"
          >
            上麻车村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 325px; top: 488px"
          >
            下麻车村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 234px; top: 461px"
          >
            潘村村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 219px; top: 509px"
          >
            徐村村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 153px; top: 392px"
          >
            钓鱼矶社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 164px; top: 439px"
          >
            望湖社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 173px; top: 479px"
          >
            马村村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 155px; top: 518px"
          >
            毛店山脚村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 200px; top: 562px"
          >
            东上村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 120px; top: 514px"
          >
            后园村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 89px; top: 392px"
          >
            塔下洲社区
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 90px; top: 442px"
          >
            后房村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 51px; top: 450px"
          >
            毛店村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 68px; top: 481px"
          >
            西赵村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 53px; top: 497px"
          >
            红星村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 23px; top: 487px"
          >
            江南村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 18px; top: 525px"
          >
            永和村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 76px; top: 515px"
          >
            前流村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 66px; top: 538px"
          >
            后店村
          </div>
          <div
            class="street_name"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 125px; top: 540px"
          >
            许宅村
          </div>
        </div>
      </div>
      <div class="bd_right">
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">社区活动</div>
          <div class="flexbox shequbox">
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">655个</div>
                <div class="info_name">活动总数</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">13个</div>
                <div class="info_name">今日活动</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">78人</div>
                <div class="info_name">今日报名人数</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">老年大学</div>
          <div class="flexbox shequbox">
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">78个</div>
                <div class="info_name">大学数</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">2个</div>
                <div class="info_name">今年新增</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem shequ">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">899人</div>
                <div class="info_name">报名人数</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">机构养老</div>
          <div class="flexbox shequbox">
            <div class="flexitem jigou">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">15个</div>
                <div class="info_name">机构数</div>
              </div>
            </div>
            <div class="center-one_line">
              <img :src="require('../assets/home/line.png')" alt="" />
            </div>
            <div class="flexitem jigou">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="" />
              </div>
              <div class="center-one_item_info">
                <div class="info_num">801人</div>
                <div class="info_name">工作人员</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myDialog
      :show="show"
      :x="x"
      :y="y"
      :obj="dialogData"
      @hideModal="hideModal"
    ></myDialog>
  </div>
</template>

<script>
import * as echarts from "echarts";
import myDialog from "../components/dialog.vue";
export default {
  components: {
    myDialog,
  },
  data() {
    return {
      active: 0,
      isStreet: false,
      streetImg: require("../assets/jiangdong/江东街道.png"),
      streetInfo: [
        {
          街道名称: "上溪镇",
          男: "6429人",
          女: "6592人",
          "60-69周岁": "5964人",
          "70-79周岁": "4509人",
          "80-89周岁": "2094人",
          "90-98周岁": "436人",
          "99周岁以上": "18人",
          总人数: "13021人",
        },
        {
          街道名称: "佛堂镇",
        },
        {
          街道名称: "北苑街道",
        },
        {
          街道名称: "后宅街道",
        },
        {
          街道名称: "城西街道",
        },
        {
          街道名称: "大陈镇",
          男: "4512人",
          女: "4649人",
          "60-69周岁": "4534人",
          "70-79周岁": "2867人",
          "80-89周岁": "1405人",
          "90-98周岁": "337人",
          "99周岁以上": "18人",
          总人数: "9161人",
        },
        {
          街道名称: "文亭镇",
          男: "6671人",
          女: "6859人",
          "60-69周岁": "6001人",
          "70-79周岁": "4725人",
          "80-89周岁": "2262人",
          "90-98周岁": "513人",
          "99周岁以上": "29人",
          总人数: "13530人",
        },
        {
          街道名称: "江东街道",
          男: "7999人",
          女: "7820人",
          "60-69周岁": "7470人",
          "70-79周岁": "5273人",
          "80-89周岁": "2402人",
          "90-98周岁": "630人",
          "99周岁以上": "28人",
          总人数: "13887人",
        },
        {
          街道名称: "廿三里街道",
        },
        {
          街道名称: "福田街道",
          男: "6893人",
          女: "6994人",
          "60-69周岁": "8456人",
          "70-79周岁": "3216人",
          "80-89周岁": "1716人",
          "90-98周岁": "471人",
          "99周岁以上": "28人",
          总人数: "13887人",
        },
        {
          街道名称: "稠城街道",
          男: "5800人",
          女: "5507人",
          "60-69周岁": "5496人",
          "70-79周岁": "3413人",
          "80-89周岁": "1958人",
          "90-98周岁": "414人",
          "99周岁以上": "26人",
          总人数: "11307人",
        },
        {
          街道名称: "稠江街道",
        },
        {
          街道名称: "苏溪街道",
          男: "5646人",
          女: "5792人",
          "60-69周岁": "5520人",
          "70-79周岁": "3724人",
          "80-89周岁": "1759人",
          "90-98周岁": "400人",
          "99周岁以上": "34人",
          总人数: "11438人",
        },
        {
          街道名称: "赤岸街道",
          男: "4925人",
          女: "5049人",
          "60-69周岁": "4250人",
          "70-79周岁": "3628人",
          "80-89周岁": "1683人",
          "90-98周岁": "397人",
          "99周岁以上": "16人",
          总人数: "9974人",
        },
      ],
      oldcatenum: {
        zl: 121,
        jh: 689,
        ch: 425,
        th: 104,
      },
      organNum: 11,
      inOlders: 2193,
      allBeds: 4081,
      yyms: {
        mbmy: "13.3%",
        gbgy: "20.0%",
        gbmy: "66.7%",
      },
      center: [120.075679, 29.306296],
      position: [120.075679, 29.306296],
      zoom: 16,
      pitch: 45,
      rotation: 15,
      anchor: "center",
      mapStyle: "amap://styles/darkblue",
      show: false,
      x: "",
      y: "",
      dialogData: {},
    };
  },
  methods: {
    hideModal() {
      // 取消弹窗回调
      this.show = false;
    },
    showStreetInfo(e) {
      var name = e.currentTarget.innerText;
      this.streetImg = require("../assets/jiangdong/" + name + ".png");
    },
    streetImgInit() {
      this.streetImg = require("../assets/jiangdong/江东街道.png");
    },
    toDetail(index, event) {
      console.log(event.currentTarget);
      this.x = String(event.clientX / this.xScale + 10);
      this.y = String(event.clientY / this.yScale);
      this.dialogData = this.streetInfo[index];
      this.show = true;
    },
    toStreet(event) {
      console.log(event.currentTarget.children[1].innerText);
      var streetName = event.currentTarget.children[1].innerText;
      switch (streetName) {
        case "江东街道":
          this.isStreet = true;
          break;
        default:
          console.log("出错了");
      }
    },
    format() {
      return "";
    },
    showActive(index) {
      this.active = index;
    },
    drawLine() {
      // this.bedChartInit();
      // this.oldInfoPercent();
      this.orderInfo();
    },
    bedChartInit() {
      var res = {
        errorMsg: "",
        data: {
          total: 4001,
          useCount: 2159,
          vacantCount: 1842,
          nursingGrade: [
            { name: "失智三人间", vacantBedCount: 37, usingBedCount: 0 },
            { name: "五保", vacantBedCount: 0, usingBedCount: 0 },
            { name: "特护1", vacantBedCount: 0, usingBedCount: 0 },
            { name: "护理区", vacantBedCount: 0, usingBedCount: 0 },
            { name: "长护", vacantBedCount: 485, usingBedCount: 318 },
            { name: "照护", vacantBedCount: 213, usingBedCount: 167 },
            { name: "失智", vacantBedCount: 3, usingBedCount: 2 },
            { name: "中级", vacantBedCount: 12, usingBedCount: 11 },
            { name: "长护单人间", vacantBedCount: 10, usingBedCount: 6 },
            { name: "1200", vacantBedCount: 30, usingBedCount: 6 },
            { name: "护理", vacantBedCount: 1397, usingBedCount: 785 },
            { name: "护理型", vacantBedCount: 66, usingBedCount: 42 },
            { name: "长护双人间", vacantBedCount: 90, usingBedCount: 56 },
            { name: "二级", vacantBedCount: 0, usingBedCount: 0 },
            { name: "自理双人间", vacantBedCount: 0, usingBedCount: 0 },
            { name: "一级", vacantBedCount: 43, usingBedCount: 34 },
            { name: "长护三人间", vacantBedCount: 153, usingBedCount: 39 },
            { name: "800", vacantBedCount: 63, usingBedCount: 30 },
            { name: "特护2", vacantBedCount: 0, usingBedCount: 0 },
            { name: "失智单人间", vacantBedCount: 3, usingBedCount: 0 },
            { name: "高级", vacantBedCount: 91, usingBedCount: 79 },
            { name: "照护单人间", vacantBedCount: 3, usingBedCount: 2 },
            { name: "照护双人间", vacantBedCount: 24, usingBedCount: 9 },
            { name: "自理、护理", vacantBedCount: 133, usingBedCount: 99 },
            { name: "普通", vacantBedCount: 846, usingBedCount: 336 },
            { name: "自理单人间", vacantBedCount: 0, usingBedCount: 0 },
            { name: "自理", vacantBedCount: 299, usingBedCount: 138 },
          ],
        },
        success: true,
      };
      var bedData = res.data.nursingGrade;
      var xAxisName = [];
      var bedAllNum = [];
      var bedUseNum = [];
      bedData.forEach(function (item, index) {
        if (
          index == 4 ||
          index == 5 ||
          index == 6 ||
          index == 7 ||
          index == 8 ||
          index == 10
        ) {
          xAxisName.push(item.name);
          bedAllNum.push(item.vacantBedCount);
          bedUseNum.push(item.usingBedCount);
        }
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("bedChart"));
      // 绘制图表
      var option = {
        legend: {
          data: ["床位总数", "已住床位"],
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: xAxisName,
          axisLabel: {
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        series: [
          {
            name: "床位总数",
            type: "bar",
            data: bedAllNum,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#A82DFF",
                  },
                  {
                    offset: 1,
                    color: "#0072FF",
                  },
                ]),
              },
            },
          },
          {
            name: "已住床位",
            type: "bar",
            data: bedUseNum,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#02D5FF",
                  },
                  {
                    offset: 1,
                    color: "#0072FF",
                  },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);

      // this.$api.bedDistributed(function (res) {
      //   console.log(res)

      // })
    },
    oldInfoPercent() {
      let myChart = echarts.init(document.getElementById("oldInfoPercent"));
      console.log(myChart);
      var option = {
        legend: {
          orient: "vertical",
          left: "right",
          top: "center",
          align: "left",
          padding: [0, 80, 0, 0],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 16,
          },
          formatter: function (name) {
            var total = 0;
            for (var i = 0; i < option.series[0].data.length; i++) {
              total += option.series[0].data[i].value;
            }
            for (i = 0; i < option.series[0].data.length; i++) {
              // var dpercent =((option.series[0].data[i].value / total) * 100).toFixed(2) +
              //   "%";
              if (option.series[0].data[i].name === name) {
                //可以显示名称和值和百分比
                return name + " " + option.series[0].data[i].value + "人";
                //只显示名称和百分比
                // return name + ' ' + dpercent;
              }
            }
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "长者年龄比例",
            type: "pie",
            radius: ["35%", "70%"],
            center: ["35%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
            },
            label: {
              show: false,
              position: "center",
              formatter: "{b}\n{d}%",
            },

            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
                color: "#fff",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 120, name: "60-69岁" },
              { value: 409, name: "70-79岁" },
              { value: 1128, name: "80-89岁" },
              { value: 442, name: "90岁以上" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      var curIndex = 0;
      setInterval(function () {
        var dataLen = option.series[0].data.length;
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: curIndex,
        });
        curIndex = (curIndex + 1) % dataLen;
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: curIndex,
        });
      }, 1000);
    },
    orderInfo() {
      let myChart = echarts.init(document.getElementById("orderInfo"));
      var option = {
        color: [
          new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#F0FF00",
            },
            {
              offset: 0.9,
              color: "#00D2FF",
            },
          ]),
          "#064E8D",
        ],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "人护比",
            type: "pie",
            radius: ["60%", "70%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
            },
            label: {
              show: false,
              position: "center",
              formatter: "{b}\n{d}%",
            },

            emphasis: {
              label: {
                show: false,
                fontSize: "20",
                fontWeight: "bold",
                color: "#fff",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 2933, name: "完成工单" },
              { value: 10, name: "未完成工单" },
            ],
          },
        ],
      };
      myChart.setOption(option);

      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
    },

    mapInit() {},
  },
  mounted() {
    this.drawLine();
    this.mapInit();
    this.xScale = sessionStorage.getItem("xScale");
    this.yScale = sessionStorage.getItem("yScale");
  },
};
</script>
<style src="./Home.css" scoped></style>
