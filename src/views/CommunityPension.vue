<template>
  <div
    class="home"
    :style="{ backgroundImage: 'url(' + require('@/assets/home/bg.png') + ')' }"
  >
    <div class="page_hd">怡养义乌—社区就餐</div>
    <div class="page_bd">
      <div class="bd_left">
        <div
          class="scroll_box"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/left-one.png') + ')',
          }"
        >
          <div class="card_title">实时就餐信息</div>
          <div class="scrollbox">
            <div class="vueBox">
              <div class="marquee">
                <li class="li_hd">
                  <span>姓名</span>
                  <!-- <span>街道</span> -->
                  <span>就餐点</span>
                  <span style="width: 5%; flex: auto">就餐时间</span>
                </li>
                <div class="marquee_box">
                  <ul class="marquee_list" :class="{ marquee_top: animate }">
                    <li
                      v-for="(item, index) in marqueeList"
                      :key="index"
                      :style="{
                        display: 'flex',
                        'justify-content': 'space-between',
                        'align-items': 'center',
                      }"
                      @click="toDetail(index, $event)"
                    >
                      <span>{{ item.edgeName }}</span>
                      <!-- <span class=""> {{item.street}}</span> -->
                      <span class="overSL"> {{ item.deviceNodeId }}</span>
                      <span class="havWidth"
                        >{{ item.snapTime.split("T")[0] }}
                        {{ item.snapTime.split("T")[1] }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd_center">
        <div class="navTo" @click="toPage()">详情进入</div>
        <div class="center-one">
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="" />
            </div>
            <div class="center-one_item_info">
              <div class="info_num">29366</div>
              <div class="info_name">可就餐老人数</div>
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
              <div class="info_num">7072</div>
              <div class="info_name">本月就餐人数</div>
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
              <div class="info_num">0</div>
              <div class="info_name">今日就餐人数</div>
            </div>
          </div>
        </div>
        <!-- <div class="map_box">
          <img class="init" :src="require('../assets/map/init.png')" alt="">
          <div class="ShangXi">
            <div class="address_name" @click="toCamera(0,$event)">
              <img :src="require('../assets/map/point.png')" alt="">
              <div>上溪镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/上溪镇（选中）.png')" alt="">
          </div>
          <div class="FouTang">
            <div class="address_name" @click="toCamera(1,$event)">
              <img :src="require('../assets/map/point.png')" alt="">
              <div>佛堂镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/佛堂镇（选中）.png')" alt="">
          </div>
          <div class="BeiYuan">
            <div class="address_name" @click="toCamera(2,$event)">
              <img :src="require('../assets/map/point.png')" alt="">
              <div>北苑街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/北苑街道（选中）.png')" alt="">
          </div>
          <div class="HouZhai">
            <div class="address_name" @click="toCamera(3,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>后宅街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/后宅街道（选中）.png')" alt="">
          </div>
          <div class="ChengXi">
            <div class="address_name" @click="toCamera(4,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>城西街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/城西街道（选中）.png')" alt="">
          </div>
          <div class="DaChen">
            <div class="address_name" @click="toCamera(5,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>大陈镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/大陈镇（选中）.png')" alt="">
          </div>
          <div class="WenTing">
            <div class="address_name" @click="toCamera(6,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>文亭镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/文亭镇（选中）.png')" alt="">
          </div>
          <div class="JiangDong">
            <div class="address_name" @click="toCamera(7,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>江东街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/江东街道（选中）.png')" alt="">
          </div>
          <div class="NianSanLi">
            <div class="address_name" @click="toCamera(8,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>甘三里街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/甘三里街道（选中）.png')" alt="">
          </div>

          <div class="FuTian">
            <div class="address_name" @click="toCamera(9,$event)"><img :src="require('../assets/map/point.png')" alt="">
              <div>福田街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/福田街道（选中）.png')" alt="">
          </div>
          <div class="ChouCheng">
            <div class="address_name" @click="toCamera(10,$event)"><img :src="require('../assets/map/point.png')"
                alt="">
              <div>稠城街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/稠城街道（选中）.png')" alt="">
          </div>
          <div class="ChouJiang">
            <div class="address_name" @click="toCamera(11,$event)"><img :src="require('../assets/map/point.png')"
                alt="">
              <div>稠江街道</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/稠江街道（选中）.png')" alt="">
          </div>

          <div class="SuXi">
            <div class="address_name" @click="toCamera(12,$event)"><img :src="require('../assets/map/point.png')"
                alt="">
              <div>苏溪镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/苏溪镇（选中）.png')" alt="">
          </div>
          <div class="ChiAn">
            <div class="address_name" @click="toCamera(13,$event)"><img :src="require('../assets/map/point.png')"
                alt="">
              <div>赤岸镇</div>
            </div>
            <img class="address_img" style="opacity:0;" :src="require('../assets/map/赤岸镇（选中）.png')" alt="">
          </div>
        </div> -->
        <div v-show="!isStreet" class="map_box">
          <img class="init" :src="require('../assets/map/init.png')" alt="" />
          <div class="ShangXi">
            <div
              class="address_name"
              @click="toStreet($event)"
              @mouseleave="hideModal"
              @mouseover="toCamera(0, $event)"
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
              @mouseover="toCamera(1, $event)"
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
              @mouseover="toCamera(2, $event)"
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
              @mouseover="toCamera(3, $event)"
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
              @mouseover="toCamera(4, $event)"
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
              @mouseover="toCamera(5, $event)"
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
              @mouseover="toCamera(6, $event)"
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
              @mouseover="toCamera(7, $event)"
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
              @mouseover="toCamera(8, $event)"
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
              @mouseover="toCamera(9, $event)"
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
              @mouseover="toCamera(10, $event)"
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
              @mouseover="toCamera(11, $event)"
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
              @mouseover="toCamera(12, $event)"
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
              @mouseover="toCamera(13, $event)"
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
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 521px; top: 491px"
          >
            南山社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 563px; top: 311px"
          >
            大元村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 601px; top: 223px"
          >
            石塔头村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 657px; top: 217px"
          >
            观音塘村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 654px; top: 185px"
          >
            白莲塘村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 657px; top: 158px"
          >
            船埠头村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 635px; top: 112px"
          >
            大湖头村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 591px; top: 121px"
          >
            下湾村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 609px; top: 169px"
          >
            平畴村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 571px; top: 175px"
          >
            新兴村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 572px; top: 209px"
          >
            后儿村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 553px; top: 228px"
          >
            南山坑村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 522px; top: 140px"
          >
            东苑社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 531px; top: 209px"
          >
            东新屋村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 509px; top: 222px"
          >
            青南村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 520px; top: 233px"
          >
            流赐社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 499px; top: 279px"
          >
            西塘村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 486px; top: 255px"
          >
            金星村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 480px; top: 153px"
          >
            商博社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 425px; top: 164px"
          >
            下王村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 399px; top: 216px"
          >
            东州社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 385px; top: 316px"
          >
            盘溪社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 336px; top: 211px"
          >
            五爱社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 332px; top: 254px"
          >
            鸡鸣山社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 265px; top: 266px"
          >
            临江社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 298px; top: 320px"
          >
            商苑社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 234px; top: 299px"
          >
            江南社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 259px; top: 355px"
          >
            南苑社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 207px; top: 337px"
          >
            下傅村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 220px; top: 386px"
          >
            黎明湖社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 263px; top: 442px"
          >
            张村村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 357px; top: 396px"
          >
            青岩傅村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 389px; top: 456px"
          >
            上麻车村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 325px; top: 488px"
          >
            下麻车村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 234px; top: 461px"
          >
            潘村村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 219px; top: 509px"
          >
            徐村村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 153px; top: 392px"
          >
            钓鱼矶社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 164px; top: 439px"
          >
            望湖社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 173px; top: 479px"
          >
            马村村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 155px; top: 518px"
          >
            毛店山脚村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 200px; top: 562px"
          >
            东上村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 120px; top: 514px"
          >
            后园村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 89px; top: 392px"
          >
            塔下洲社区
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 90px; top: 442px"
          >
            后房村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 51px; top: 450px"
          >
            毛店村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 68px; top: 481px"
          >
            西赵村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 53px; top: 497px"
          >
            红星村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 23px; top: 487px"
          >
            江南村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 18px; top: 525px"
          >
            永和村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 76px; top: 515px"
          >
            前流村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
            @mouseleave="streetImgInit()"
            @mouseover="showStreetInfo($event)"
            style="left: 66px; top: 538px"
          >
            后店村
          </div>
          <div
            class="street_name"
            @click="toStreetDetail($event)"
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
          <div class="card_title">本月每日就餐人数对比</div>
          <div class="echart-box">
            <div id="EatOldsContrast" class="echart-item"></div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">各镇街就餐人数</div>
          <div class="echart-box">
            <div id="StreetEatNumber" class="echart-item"></div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">各就餐点满意度对比</div>
          <div class="echart-box">
            <div id="DiningpointSatisfactionContrast" class="echart-item"></div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">最受老人喜欢的菜排名</div>
          <div class="echart-box">
            <div id="FavoriteDishRank" class="echart-item"></div>
          </div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">各镇街补贴资金数据</div>
          <div class="echart-box">
            <div id="subsidiesInfo" class="echart-item"></div>
          </div>
        </div>
      </div>
    </div>
    <myDialog
      :show="show"
      :x="x"
      :y="y"
      :obj="dialogData"
      :type="dialogType"
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
      isStreet: false,
      streetImg: require("../assets/jiangdong/江东街道.png"),
      center: [120.075679, 29.306296],
      position: [120.075679, 29.306296],
      zoom: 16,
      pitch: 45,
      rotation: 15,
      anchor: "center",
      mapStyle: "amap://styles/darkblue",
      active: 0,
      oldcatenum: {
        zl: 121,
        jh: 689,
        ch: 425,
        th: 104,
      },
      organNum: 15,
      inOlders: 2288,
      allBeds: 3990,
      yyms: {
        mbmy: "13.3%",
        gbgy: "20.0%",
        gbmy: "66.7%",
      },
      animate: false,
      marqueeList: [],
      show: false,
      x: "",
      y: "",
      dialogType: "",
      dialogData: {},
      streetInfo: [
        {
          街道名称: "上溪镇",
        },
        {
          街道名称: "佛堂镇",
        },
        {
          街道名称: "北苑街道",
          cameraAddress: [
            {
              name: "柳二居家养老餐盘摆放处",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001316157947@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "柳二居家养老厨房",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001310306901@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "柳二居家养老用餐区",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001313253015@005@001@003%240/substream/1.m3u8",
            },
          ],
        },
        {
          街道名称: "后宅街道",
        },
        {
          街道名称: "城西街道",
        },
        {
          街道名称: "大陈镇",
        },
        {
          街道名称: "义亭镇",
          cameraAddress: [
            {
              name: "缸窑村居家养老中心",
              address:
                "http://39.173.75.10:10026/hls2/7E0B453F565B624892B07637AFC0F1FF.m3u8",
            },
          ],
        },
        {
          街道名称: "江东街道",
          cameraAddress: [
            {
              name: "鸡鸣山居家养老餐盘摆放处",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001314143920@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "鸡鸣山居家养老厨房",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001318504521@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "鸡鸣山居家养老用餐区",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001315775536@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "西谷居家养老厨房",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001311170234@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "西谷居家养老餐盘摆放处",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001313917809@005@001@003%240/substream/1.m3u8",
            },
            {
              name: "西谷居家养老用餐区",
              address:
                "http://112.12.16.229:7086/live/cameraid/33078201001318410745@005@001@003%240/substream/1.m3u8",
            },
          ],
        },
        {
          街道名称: "廿三里街道",
        },
        {
          街道名称: "福田街道",
        },
        {
          街道名称: "稠城街道",
        },
        {
          街道名称: "稠江街道",
        },
        {
          街道名称: "苏溪街道",
        },
        {
          街道名称: "赤岸街道",
        },
      ],
    };
  },
  methods: {
    showStreetInfo(e) {
      var name = e.currentTarget.innerText;
      this.streetImg = require("../assets/jiangdong/" + name + ".png");
    },
    streetImgInit() {
      this.streetImg = require("../assets/jiangdong/江东街道.png");
    },
    toStreetDetail(event) {
      this.x = String(event.clientX / this.xScale + 10);
      this.y = String(event.clientY / this.yScale + 10);
      this.dialogType = "食堂摄像地址";
      var streetName = event.currentTarget.innerText;
      switch (streetName) {
        case "鸡鸣山社区":
          this.dialogData = {
            cameraAddress: [
              {
                name: "鸡鸣山居家养老餐盘摆放处",
                address:
                  "http://112.12.16.229:7086/live/cameraid/33078201001314143920@005@001@003%240/substream/1.m3u8",
              },
              {
                name: "鸡鸣山居家养老厨房",
                address:
                  "http://112.12.16.229:7086/live/cameraid/33078201001318504521@005@001@003%240/substream/1.m3u8",
              },
              {
                name: "鸡鸣山居家养老用餐区",
                address:
                  "http://112.12.16.229:7086/live/cameraid/33078201001315775536@005@001@003%240/substream/1.m3u8",
              },
            ],
          };
          break;
        default:
          console.log("出错了");
      }

      this.show = true;
    },
    hideModal() {
      // 取消弹窗回调
      this.show = false;
    },
    toDetail(index, event) {
      console.log(event.currentTarget);
      this.x = String(event.clientX / this.xScale + 10);
      this.y = String(event.clientY / this.yScale + 10);
      var obj = this.marqueeList[index];
      this.dialogType = "人脸";
      this.dialogData = {
        人脸: obj.imageUrl,
      };
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
    toCamera(index, event) {
      console.log(event.currentTarget);
      this.x = String(event.clientX / this.xScale + 10);
      this.y = String(event.clientY / this.yScale);
      var obj = this.streetInfo[index];
      this.dialogType = "食堂摄像地址";
      this.dialogData = obj;
      this.show = true;
    },
    toPage() {
      window.open(
        "http://101.66.252.21:1003/carecentrality/admin-autologin.html?code=eyJ1c2VyTmFtZSI6InpsengiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9"
      );
    },
    showMarquee: function () {
      this.animate = true;
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);
    },
    format(percentage) {
      return "";
    },
    getEatInfo() {
      var that = this;
      that.$axios
        .get("http://47.96.104.248:5555/Canteen/GetRealTimeRecords")
        .then(function (res) {
          console.log(res);
          that.marqueeList = res.data.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    showActive(index) {
      this.active = index;
    },
    drawLine() {
      this.EatOldsContrast();
      this.StreetEatNumber();
      this.DiningpointSatisfactionContrast();
      this.FavoriteDishRank();
      this.subsidiesInfo()
    },
    subsidiesInfo() {
      var res = {
        errorMsg: "",
        data: [
          {
            name: "后宅街道",
            serviceTimes: 989,
          },
          {
            name: "义亭镇",
            serviceTimes: 808,
          },
          {
            name: "城西街道",
            serviceTimes: 724,
          },
          {
            name: "佛堂镇",
            serviceTimes: 652,
          },
          {
            name: "江东街道",
            serviceTimes: 642,
          },
          {
            name: "稠江街道",
            serviceTimes: 552,
          },
        ],
        success: true,
      };
      var data = res.data;
      var xAxisName = [];
      var needNum = [];
      data.forEach(function (item, index) {
        xAxisName.push(item.name);
        needNum.push(item.serviceTimes);
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("subsidiesInfo"));
      // 绘制图表
      var option = {
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
            interval: 0, //强制文字产生间隔
            // rotate: 45,     //文字逆时针旋转45°
            textStyle: {
              //文字样式
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Microsoft YaHei",
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
            name: "资金补贴额度",
            type: "bar",
            barWidth: "30%",
            data: needNum,
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
        ],
      };
      myChart.setOption(option);
    },
    EatOldsContrast() {
      var res = [
        {
          value: "548",
          content: "1",
          x: "福田",
          y: "548",
        },
        {
          value: "1066",
          content: "2",
          x: "上溪",
          y: "2742",
        },
        {
          value: "877",
          content: "3",
          x: "稠江",
          y: "3290",
        },
        {
          value: "566",
          content: "4",
          x: "大陈",
          y: "1644",
        },
        {
          value: "709",
          content: "5",
          x: "廿三里",
          y: "2192",
        },
        {
          value: "867",
          content: "6",
          x: "稠城",
          y: "3838",
        },
        {
          value: "855",
          content: "7",
          x: "城西",
          y: "1726",
        },
        {
          value: "794",
          content: "8",
          x: "苏溪",
          y: "2356",
        },
        {
          value: "655",
          content: "9",
          x: "赤岸",
          y: "2088",
        },
        {
          value: "788",
          content: "10",
          x: "义亭",
          y: "2165",
        },
        {
          value: "877",
          content: "11",
          x: "江东",
          y: "1564",
        },
        {
          value: "1108",
          content: "12",
          x: "北苑",
          y: "1108",
        },
        {
          value: "1088",
          content: "13",
          x: "后宅",
          y: "3068",
        },
        {
          value: "999",
          content: "14",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "709",
          content: "15",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "766",
          content: "16",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "399",
          content: "17",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "666",
          content: "18",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "555",
          content: "19",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "777",
          content: "20",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "713",
          content: "21",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "913",
          content: "22",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "713",
          content: "23",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "379",
          content: "24",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "458",
          content: "25",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "678",
          content: "26",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "567",
          content: "27",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "708",
          content: "28",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "1213",
          content: "29",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "1412",
          content: "30",
          x: "佛堂",
          y: "1996",
        },
      ];

      var xAxisName = [];
      var personNum = [];
      res.forEach(function (item, index) {
        xAxisName.push(item.content);
        personNum.push(item.value);
      });
      let myChart = echarts.init(document.getElementById("EatOldsContrast"));
      var option = {
        xAxis: {
          type: "category",
          data: xAxisName,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: personNum,
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    },
    StreetEatNumber() {
      var res = {
        errorMsg: "",
        data: [
          {
            name: "后宅街道",
            serviceTimes: 989,
          },
          {
            name: "义亭镇",
            serviceTimes: 808,
          },
          {
            name: "城西街道",
            serviceTimes: 724,
          },
          {
            name: "佛堂镇",
            serviceTimes: 652,
          },
          {
            name: "江东街道",
            serviceTimes: 642,
          },
          {
            name: "稠江街道",
            serviceTimes: 552,
          },
        ],
        success: true,
      };
      var data = res.data;
      var xAxisName = [];
      var needNum = [];
      data.forEach(function (item, index) {
        xAxisName.push(item.name);
        needNum.push(item.serviceTimes);
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("StreetEatNumber"));
      // 绘制图表
      var option = {
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
            interval: 0, //强制文字产生间隔
            // rotate: 45,     //文字逆时针旋转45°
            textStyle: {
              //文字样式
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Microsoft YaHei",
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
            name: "服务需求数量",
            type: "bar",
            barWidth: "30%",
            data: needNum,
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
        ],
      };
      myChart.setOption(option);
    },
    DiningpointSatisfactionContrast() {
      var res = [
        {
          value: "548",
          content: "1",
          x: "福田",
          y: "548",
        },
        {
          value: "1066",
          content: "2",
          x: "上溪",
          y: "2742",
        },
        {
          value: "877",
          content: "3",
          x: "稠江",
          y: "3290",
        },
        {
          value: "566",
          content: "4",
          x: "大陈",
          y: "1644",
        },
        {
          value: "709",
          content: "5",
          x: "廿三里",
          y: "2192",
        },
        {
          value: "867",
          content: "6",
          x: "稠城",
          y: "3838",
        },
        {
          value: "855",
          content: "7",
          x: "城西",
          y: "1726",
        },
        {
          value: "794",
          content: "8",
          x: "苏溪",
          y: "2356",
        },
        {
          value: "655",
          content: "9",
          x: "赤岸",
          y: "2088",
        },
        {
          value: "788",
          content: "10",
          x: "义亭",
          y: "2165",
        },
        {
          value: "877",
          content: "11",
          x: "江东",
          y: "1564",
        },
        {
          value: "1108",
          content: "12",
          x: "北苑",
          y: "1108",
        },
        {
          value: "1088",
          content: "13",
          x: "后宅",
          y: "3068",
        },
        {
          value: "999",
          content: "14",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "709",
          content: "15",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "766",
          content: "16",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "399",
          content: "17",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "666",
          content: "18",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "555",
          content: "19",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "777",
          content: "20",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "713",
          content: "21",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "913",
          content: "22",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "713",
          content: "23",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "379",
          content: "24",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "458",
          content: "25",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "678",
          content: "26",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "567",
          content: "27",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "708",
          content: "28",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "1213",
          content: "29",
          x: "佛堂",
          y: "1996",
        },
        {
          value: "1412",
          content: "30",
          x: "佛堂",
          y: "1996",
        },
      ];
      var xAxisName = [];
      var personNum = [];
      res.forEach(function (item, index) {
        xAxisName.push(item.x);
        personNum.push(item.value);
      });
      let myChart = echarts.init(
        document.getElementById("DiningpointSatisfactionContrast")
      );
      var option = {
        xAxis: {
          type: "category",
          data: xAxisName,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: personNum,
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    },
    FavoriteDishRank() {
      var res = {
        errorMsg: "",
        data: [
          {
            name: "红烧排骨",
            serviceTimes: 989,
          },
          {
            name: "肉饼蒸蛋",
            serviceTimes: 808,
          },
          {
            name: "水煮鱼",
            serviceTimes: 724,
          },
          {
            name: "虾仁炒蛋",
            serviceTimes: 652,
          },
          {
            name: "番茄炒蛋",
            serviceTimes: 642,
          },
          {
            name: "葫芦丝瓜",
            serviceTimes: 552,
          },
          {
            name: "生炒鸡块",
            serviceTimes: 498,
          },
          {
            name: "鲜笋鸭肉",
            serviceTimes: 432,
          },
          {
            name: "油爆河虾",
            serviceTimes: 399,
          },
          {
            name: "东坡焖肉",
            serviceTimes: 375,
          },
        ],
        success: true,
      };
      var data = res.data;
      var xAxisName = [];
      var needNum = [];
      data.forEach(function (item, index) {
        xAxisName.push(item.name);
        needNum.push(item.serviceTimes);
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("FavoriteDishRank"));
      // 绘制图表
      var option = {
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
            interval: 0, //强制文字产生间隔
            rotate: 45, //文字逆时针旋转45°
            textStyle: {
              //文字样式
              color: "#ffffff",
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
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
            name: "服务需求数量",
            type: "bar",
            barWidth: "30%",
            data: needNum,
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
        ],
      };
      myChart.setOption(option);
    },
  },
  created: function () {
    setInterval(this.showMarquee, 2000);
  },
  mounted() {
    this.drawLine();
    this.xScale = sessionStorage.getItem("xScale");
    this.yScale = sessionStorage.getItem("yScale");
    this.getEatInfo();
  },
};
</script>
<style src="./CommunityPersion.css" scoped>
</style>