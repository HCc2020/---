<template>
  <div
    class="home"
    :style="{ backgroundImage: 'url(' + require('@/assets/home/bg.png') + ')' }"
  >
    <div class="page_hd">怡养义乌—机构养老</div>
    <div class="page_bd">
      <div class="bd_left">
        <div
          class="right-one"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-one.png') + ')',
          }"
        >
          <div class="card_title">入住老人数据</div>
          <div class="echart-box">
            <div id="oldInfoPercent" class="echart-item"></div>
          </div>
        </div>
        <div
          class="right-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">机构运营模式</div>
          <div
            class="right-two_info"
            :style="{
              backgroundImage: 'url(' + require('@/assets/home/sj.png') + ')',
            }"
          >
            <div class="info1">
              <span class="info_title1">民办民营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{ yyms.mbmy }}</span>
            </div>
            <div class="info2">
              <span class="info_title1">公办民营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{ yyms.gbmy }}</span>
            </div>
            <div class="info3">
              <span class="info_title1">公办公营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{ yyms.gbgy }}</span>
            </div>
          </div>
        </div>
        <div
          class="right-three"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-three.png') + ')',
          }"
        >
          <div class="card_title">机构人员数据</div>
          <div class="echart-box">
            <div id="oldInfo" class="echart-item"></div>
            <div class="oldInfo_box">
              <div class="oldInfo_box-percent">65.12%</div>
              <div class="oldInfo_box-name">人护比</div>
            </div>
            <div class="oldInfo_right">
              <div class="oldInfo_right-item">
                <div class="num">246</div>
                <div class="item_ft">
                  <div class="name">护理员</div>
                  <div class="percent">
                    <el-progress
                      :percentage="70"
                      :format="format"
                    ></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">182</div>
                <div class="item_ft">
                  <div class="name">护士</div>
                  <div class="percent">
                    <el-progress
                      :percentage="60"
                      :format="format"
                    ></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">63</div>
                <div class="item_ft">
                  <div class="name">后勤人员</div>
                  <div class="percent">
                    <el-progress
                      :percentage="38"
                      :format="format"
                    ></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">46</div>
                <div class="item_ft">
                  <div class="name">管理人员</div>
                  <div class="percent">
                    <el-progress
                      :percentage="32"
                      :format="format"
                    ></el-progress>
                  </div>
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
              <div class="info_num">{{ organNum }}</div>
              <div class="info_name">机构数（家）</div>
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
              <div class="info_num">{{ inOlders }}</div>
              <div class="info_name">总入住老人数（人）</div>
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
              <div class="info_num">{{ allBeds }}</div>
              <div class="info_name">总床位数（张）</div>
            </div>
          </div>
        </div>
        <div class="map_box">
          <img class="init" :src="require('../assets/map/init.png')" alt="" />
          <div class="ShangXi">
            <div class="address_name" @click="toDetail(0, $event)">
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
            <div class="address_name" @click="toDetail(1, $event)">
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
            <div class="address_name" @click="toDetail(2, $event)">
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
            <div class="address_name" @click="toDetail(3, $event)">
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
            <div class="address_name" @click="toDetail(4, $event)">
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
            <div class="address_name" @click="toDetail(5, $event)">
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
            <div class="address_name" @click="toDetail(6, $event)">
              <img :src="require('../assets/map/point.png')" alt="" />
              <div>义亭镇</div>
            </div>
            <img
              class="address_img"
              style="opacity: 0"
              :src="require('../assets/map/文亭镇（选中）.png')"
              alt=""
            />
          </div>
          <div class="JiangDong">
            <div class="address_name" @click="toDetail(7, $event)">
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
            <div class="address_name" @click="toDetail(8, $event)">
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
            <div class="address_name" @click="toDetail(9, $event)">
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
            <div class="address_name" @click="toDetail(10, $event)">
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
            <div class="address_name" @click="toDetail(11, $event)">
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
            <div class="address_name" @click="toDetail(12, $event)">
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
            <div class="address_name" @click="toDetail(13, $event)">
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
      </div>
      <div class="bd_right">
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">机构收费数据</div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">照护服务</div>
          <div class="echart-box"></div>
          <div></div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">亲属互动</div>
          <div class="echart-box"></div>
          <div></div>
        </div>
        <div
          class="left-two"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/home/right-two.png') + ')',
          }"
        >
          <div class="card_title">补贴资金数据</div>
          <div class="echart-box">
            <div id="moneyData" class="echart-item" style="margin-top:-42px"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <myDialog
      :show="show"
      :x="x"
      :y="y"
      :obj="dialogData"
      :type="type"
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
      show: false,
      x: "",
      y: "",
      dialogData: {},
      type: "",
    };
  },
  methods: {
    hideModal() {
      // 取消弹窗回调
      this.show = false;
    },
    toDetail(index, event) {
      var streetName = event.currentTarget.children[1].innerText;
      this.x = String(event.clientX / this.xScale + 10);
      this.y = String(event.clientY / this.yScale);
      this.type = "机构";
      console.log(111);
      switch (streetName) {
        case "稠江街道":
          this.dialogData = {
            name: "义乌市稠江街道养老服务中心",
            address: "稠江街道江湾镇前街88号",
            phone: "0579 - 85031699",
            inBed: 107,
            allBed: 320,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImNqeWwiLCJwd2QiOiJEMjQyNkY4MzE2OTgzOURBMUJGMjk2NEU4MzE2Qjk2OSJ9",
              ZhaoHuAnQuan:
                "http://www.yfcarecloud.com/cas/login?service=http://www.yfcarecloud.com/ecs-up-ws/cas",
              XiaoFangAnQuan: "http://www.51safe.org/",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "http://47.96.104.248:7000/#/",
            },
          };
          this.show = true;
          break;
        case "后宅街道":
          this.dialogData = {
            name: "义乌市康乐园养老服务中心",
            address: "义乌市后宅街道湖门太坞里",
            phone: "0579 - 85932691",
            inBed: 257,
            allBed: 314,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImtseSIsInB3ZCI6IjQyOTdGNDRCMTM5NTUyMzUyNDVCMjQ5NzM5OUQ3QTkzIn0=",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "城西街道":
          this.dialogData = {
            name: "义乌市城西养老服务中心",
            address: "香山北路与西站大道交叉路口北侧",
            phone: "0579 - 85317178",
            inBed: 132,
            allBed: 147,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImN4eWwiLCJwd2QiOiJDN0U1MDJDMkJEQ0VBMEEyN0FBMEQ2REJBNDU2QzY1NyJ9",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "赤岸镇":
          this.dialogData = {
            name: "义乌市赤岸镇养老服务中心",
            address: "赤岸镇义武公路旁（水岸家园对面）",
            phone: "15268694146",
            inBed: 155,
            allBed: 323,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImNhenlsIiwicHdkIjoiOTg2RDZFOUNENjM5NDNEODk0NEFFNzk0NzBFMzdGQUQifQ==",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "怡乐新村":
          this.dialogData = {
            name: "义乌市怡乐新村养老服务中心",
            address: "义乌市宾王路C77号（西城路与宾王路交叉口）",
            phone: "0579 - 89926667",
            inBed: 1038,
            allBed: 2125,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6InlseGN5bCIsInB3ZCI6IjI5NUIxNDRDMDAxNzBCMkY1REVGQ0Y1MDVENkVDQkNGIn0=",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "上溪镇":
          this.dialogData = {
            name: "义乌市上溪镇养老服务中心",
            address: "义乌市上溪镇百安南街266号（春晗中学对面）",
            phone: "0579 - 85678181",
            inBed: 212,
            allBed: 347,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6InN4enlsIiwicHdkIjoiNDI5N0Y0NEIxMzk1NTIzNTI0NUIyNDk3Mzk5RDdBOTMifQ==",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "鸿佰洲":
          this.dialogData = {
            name: "义乌市鸿佰洲养老服务中心",
            address: "义乌市苏溪镇蒋宅东街268号",
            phone: "0579-89900999",
            inBed: 143,
            allBed: 223,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImhienlsIiwicHdkIjoiNDI5N0Y0NEIxMzk1NTIzNTI0NUIyNDk3Mzk5RDdBOTMifQ==",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "大陈镇":
          this.dialogData = {
            name: "义乌市朝霞养老服务中心",
            address: "大陈一村后田畈10幢1号",
            phone: 13575947088,
            inBed: 37,
            allBed: 66,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6Inp4eWwiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "北苑街道":
          this.dialogData = {
            name: "义乌市北苑街道养老服务中心",
            address: "义乌市北苑街道前洪村敬老院",
            phone: 85993663,
            inBed: 38,
            allBed: 93,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImJ5eWwiLCJwd2QiOiJGQjkzNENFMThCMjM2MEYxRTg1NDk3Q0Y3NDVFREZCMiJ9",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "廿三里街道":
          this.dialogData = {
            name: "义乌市廿三里养老服务中心",
            address: "义乌市永泰路199号",
            phone: 17280930116,
            inBed: 33,
            allBed: 43,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6Im5zbCIsInB3ZCI6IjE1M0Y3OTMxQTlBNkM0MTBCOTBDNTU1MzMyMDYzNjM5In0=",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "义亭街道":
          this.dialogData = {
            name: "义乌市义亭街道养老服务中心",
            address: "义乌市义亭街道",
            phone: "/",
            inBed: 0,
            allBed: 0,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6Inl0eWwiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;
        case "佛堂镇":
          this.dialogData = {
            name: "义乌市佛堂镇养老服务中心",
            address: "义乌市佛堂镇东山村158号",
            phone: 18267070556,
            inBed: 63,
            allBed: 80,
            url: {
              ZhaoHuFuWu:
                "http://101.66.252.21:1004/autologin.html?code=eyJ1c2VyTmFtZSI6ImZ0eWwiLCJwd2QiOiI0Mjk3RjQ0QjEzOTU1MjM1MjQ1QjI0OTczOTlEN0E5MyJ9",
              ZhaoHuAnQuan: "",
              XiaoFangAnQuan: "",
              GongGongAnQuan: "",
              YangGuangChuFang: "",
              ZhiHuiYunGuan: "",
            },
          };
          this.show = true;
          break;

        default:
          this.show = false;
          console.log("出错了");
      }
    },
    toPage() {
      window.open(
        "http://www.yfcarecloud.com/cas/login?service=http://www.yfcarecloud.com/ecs-up-ws/cas&account=13605804976&rrr19950303="
      );
    },
    format(percentage) {
      return "";
    },
    showActive(index) {
      this.active = index;
    },
    drawLine() {
      this.oldInfo();
      this.moneyData();
      this.oldInfoPercent();
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
              var dpercent =
                ((option.series[0].data[i].value / total) * 100).toFixed(2) +
                "%";
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
    oldInfo() {
      let myChart = echarts.init(document.getElementById("oldInfo"));
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
            radius: ["53%", "70%"],
            center: ["25%", "50%"],
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
              { value: 409, name: "老人数" },
              { value: 120, name: "工作人员人数" },
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
    moneyData() {
      var data = [
        {
          name: "长护补贴",
          serviceTimes: 7958,
        },
        {
          name: "残疾补贴",
          serviceTimes: 2100,
        },
        {
          name: "民政补贴",
          serviceTimes: 12300,
        },
        {
          name: "运营补贴",
          serviceTimes: 4000,
        },
      ];
      var xAxisName = [];
      var needNum = [];
      data.forEach(function (item, index) {
        xAxisName.push(item.name);
        needNum.push(item.serviceTimes);
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("moneyData"));
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
            // rotate: 45, //文字逆时针旋转45°
            textStyle: {
              //文字样式
              color: "#ffffff",
              fontSize: 14,
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
    toPageZH(e) {
      var action = e;
      switch (action) {
        case "照护安全":
          window.open(
            "http://www.yfcarecloud.com/cas/login?service=http://www.yfcarecloud.com/ecs-up-ws/cas&account=13605804976&rrr19950303="
          );
          break;
        default:
          console.log("出错了");
      }
    },
  },
  mounted() {
    this.drawLine();
    this.xScale = sessionStorage.getItem("xScale");
    this.yScale = sessionStorage.getItem("yScale");
  },
};
</script>
<style src="./InstitutionalPension.css" scoped></style>
