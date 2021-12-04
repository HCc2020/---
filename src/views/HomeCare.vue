<template>
  <div class="home" :style="{backgroundImage:'url('+require('@/assets/home/bg.png')+')'}">
    <div class="navTo" @click="toPage()">详情进入</div>
    <div class="page_hd">
      怡养义乌—居家服务
    </div>
    <div class="page_bd">
      <div class="bd_left">
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            基础数据
          </div>
          <div class="flexbox">
            <div class="flexitem numBox">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="">
              </div>
              <div class="center-one_item_info">
                <div class="info_num">3007</div>
                <div class="info_name">服务对象（人）</div>
              </div>
            </div>
            <div class="flexitem numBox">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="">
              </div>
              <div class="center-one_item_info">
                <div class="info_num">90</div>
                <div class="info_name">服务人员（人）</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            预约工单比例
          </div>
          <div class="echart-box">
            <div id="AppointOrderProportion" class="echart-item"></div>
            <div class="satisfaction-box">
              <div class="oldInfo_box-percent">87.52%</div>
              <div class="oldInfo_box-name">预约比例</div>
            </div>
            <div class="oldInfo_right">
              <div class="oldInfo_right-item">
                <div class="num">87.52%</div>
                <div class="item_ft">
                  <div class="name">预约工单</div>
                  <div class="percent">
                    <el-progress :percentage="95" :format="format"></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">12.48%</div>
                <div class="item_ft">
                  <div class="name">其他工单</div>
                  <div class="percent">
                    <el-progress :percentage="5" :format="format"></el-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            每日工单对比
          </div>
          <div class="flexbox">
            <div class="flexitem numBox">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="">
              </div>
              <div class="center-one_item_info">
                <div class="info_num">2943</div>
                <div class="info_name">今日工单（单）</div>
              </div>
            </div>
            <div class="flexitem numBox">
              <div class="center-one_item_img">
                <img :src="require('../assets/home/jg.png')" alt="">
              </div>
              <div class="center-one_item_info">
                <div class="info_num">2898</div>
                <div class="info_name">昨日工单（单）</div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            服务项目
          </div>
          <div class="echart-box">
            <div id="serviceProRank" class="echart-item"></div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            满意度
          </div>
          <div class="echart-box">
            <div id="Satisfaction" class="echart-item"></div>
            <div class="satisfaction-box">
              <div class="oldInfo_box-percent">95.12%</div>
              <div class="oldInfo_box-name">满意度</div>
            </div>
            <div class="oldInfo_right">
              <div class="oldInfo_right-item">
                <div class="num">95.12%</div>
                <div class="item_ft">
                  <div class="name">满意</div>
                  <div class="percent">
                    <el-progress :percentage="95" :format="format"></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">4.88%</div>
                <div class="item_ft">
                  <div class="name">不满意</div>
                  <div class="percent">
                    <el-progress :percentage="5" :format="format"></el-progress>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="bd_center">

        <div class="center-one">
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="">
            </div>

            <div class="center-one_item_info">
              <div class="info_num">323</div>
              <div class="info_name">今日服务（人）</div>
            </div>
          </div>
          <div class="center-one_line">
            <img :src="require('../assets/home/line.png')" alt="">
          </div>
          <div class="center-one_item_center">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="">
            </div>

            <div class="center-one_item_info ">
              <div class="info_num">32</div>
              <div class="info_name">今日服务人员（人）</div>
            </div>
          </div>
          <div class="center-one_line"><img :src="require('../assets/home/line.png')" alt=""></div>
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="">
            </div>

            <div class="center-one_item_info">
              <div class="info_num">2943</div>
              <div class="info_name">今日工单（单）</div>
            </div>
          </div>
        </div>
        <div class="center-two">
          <div class="scrollbox">
            <div class="vueBox">
              <div class="marquee">
                <li class="li_hd">
                  <span>姓名</span>
                  <!-- <span>年龄</span> -->
                  <span style="width: 5%;flex: auto;">街道</span>
                  <!-- <span>社区</span> -->
                  <span>服务内容</span>
                  <span>服务时长</span>
                  <span>服务状态</span>
                  <span>服务企业</span>
                </li>
                <div class="marquee_box">

                  <ul class="marquee_list" :class="{marquee_top:animate}">
                    <li v-for="(item, index) in marqueeList" :key="index"
                      :style="{ display: 'flex', 'justify-content': 'space-between',  'align-items': 'center'}">
                      <span>{{item.name}}</span>
                      <!-- <span>{{item.age}}</span> -->
                      <span style="width: 5%;flex: auto;"> {{item.address}}</span>
                      <!-- <span>{{item.community}}</span> -->
                      <span class="overSL"> {{item.serviceItemText}}</span>
                      <span>{{item.serviceDuration}}</span>
                      <span>已完成</span>
                      <span class="overSL">{{item.serviceOrganizationName}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd_right">
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            服务组织排名
          </div>
          <div class="echart-box">
            <div id="OrganizationRank" class="echart-item"></div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            服务组织满意度排名
          </div>
          <div class="echart-box">
            <div id="SatisfactionRank" class="echart-item"></div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            各镇街服务对象对比
          </div>
          <div class="echart-box">
            <div id="ServiceContrast" class="echart-item"></div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            各镇街满意度对比
          </div>
          <div class="echart-box">
            <div id="StreetSatisfactionContrast" class="echart-item"></div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            居家服务需求
          </div>
          <div class="echart-box">
            <div id="ServiceProjectDdemand" class="echart-item"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    data() {
      return {
        center: [120.075679, 29.306296],
        position: [120.075679, 29.306296],
        zoom: 16,
        pitch: 45,
        rotation: 15,
        anchor: 'center',
        mapStyle: "amap://styles/darkblue",
        active: 0,
        oldcatenum: {
          zl: 121,
          jh: 689,
          ch: 425,
          th: 104
        },
        organNum: 15,
        inOlders: 2288,
        allBeds: 3990,
        yyms: {
          mbmy: '13.3%',
          gbgy: '20.0%',
          gbmy: '66.7%'
        },
        animate: false,
        marqueeList: []
      }
    },
    methods: {
      toPage() {
        window.open('http://47.96.104.248:7001/#/')
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
        return '';
      },
      showActive(index) {
        this.active = index;
      },
      drawLine() {
        this.AppointOrderProportion()
        this.Satisfaction()


        this.OrganizationRank();
        this.SatisfactionRank();
        this.ServiceContrast()
        this.StreetSatisfactionContrast()
        this.ServiceProjectDdemand()
        this.serviceProRank()
      },
      serviceProRank(){
var res = {
          "errorMsg": "",
          "data": [
            {
              "name": "洗发",
              "serviceTimes": 99
            },
            {
              "name": "容貌整洁",
              "serviceTimes": 80
            },
            {
              "name": "足部清洁",
              "serviceTimes": 72
            },
            {
              "name": "理发",
              "serviceTimes": 65
            },
            {
              "name": "其他",
              "serviceTimes": 64
            }],
          "success": true
        }
        var data = res.data;
        var xAxisName = [];
        var needNum = [];
        data.forEach(function (item, index) {
          xAxisName.push(item.name)
          needNum.push(item.serviceTimes)
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('serviceProRank'))
        // 绘制图表
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',

            data: xAxisName,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              interval: 0,    //强制文字产生间隔
              // rotate: 45,     //文字逆时针旋转45°
              textStyle: {    //文字样式
                color: '#ffffff',
                fontSize: 16,
                fontFamily: 'Microsoft YaHei'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          series: [
            {
              name: '服务需求数量',
              type: 'bar',
              barWidth: '30%',
              data: needNum,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#A82DFF'
                  }, {
                    offset: 1,
                    color: '#0072FF'
                  }]),
                }
              },
            }
          ]
        };
        myChart.setOption(option);
      },
      OrganizationRank() {
        var res = {
          "errorMsg": "",
          "data": [
            {
              "name": "唯乐为老",
              "serviceTimes": 99
            },
            {
              "name": "义乌普亲",
              "serviceTimes": 80
            },
            {
              "name": "康乐园",
              "serviceTimes": 72
            },
            {
              "name": "怡乐新村",
              "serviceTimes": 65
            },
            {
              "name": "城西养老\n中心",
              "serviceTimes": 64
            },
            {
              "name": "茗山家护",
              "serviceTimes": 55
            }],
          "success": true
        }
        var data = res.data;
        var xAxisName = [];
        var needNum = [];
        data.forEach(function (item, index) {
          xAxisName.push(item.name)
          needNum.push(item.serviceTimes)
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('OrganizationRank'))
        // 绘制图表
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',

            data: xAxisName,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              interval: 0,    //强制文字产生间隔
              // rotate: 45,     //文字逆时针旋转45°
              textStyle: {    //文字样式
                color: '#ffffff',
                fontSize: 16,
                fontFamily: 'Microsoft YaHei'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          series: [
            {
              name: '服务需求数量',
              type: 'bar',
              barWidth: '30%',
              data: needNum,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#A82DFF'
                  }, {
                    offset: 1,
                    color: '#0072FF'
                  }]),
                }
              },
            }
          ]
        };
        myChart.setOption(option);

        // this.$api.bedDistributed(function (res) {
        //   console.log(res)

        // })

      },
      SatisfactionRank() {
        var res = {
          "errorMsg": "",
          "data": [
            {
              "name": "唯乐为老",
              "serviceTimes": 99
            },
            {
              "name": "义乌普亲",
              "serviceTimes": 80
            },
            {
              "name": "康乐园",
              "serviceTimes": 72
            },
            {
              "name": "怡乐新村",
              "serviceTimes": 65
            },
            {
              "name": "城西养老\n中心",
              "serviceTimes": 64
            },
            {
              "name": "茗山家护",
              "serviceTimes": 55
            }],
          "success": true
        }
        var data = res.data;
        var xAxisName = [];
        var needNum = [];
        data.forEach(function (item, index) {
          xAxisName.push(item.name)
          needNum.push(item.serviceTimes)
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('SatisfactionRank'))
        // 绘制图表
        var option = {

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',

            data: xAxisName,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              interval: 0,    //强制文字产生间隔
              // rotate: 45,     //文字逆时针旋转45°
              textStyle: {    //文字样式
                color: '#ffffff',
                fontSize: 16,
                fontFamily: 'Microsoft YaHei'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          series: [
            {
              name: '服务需求数量',
              type: 'bar',
              barWidth: '30%',
              data: needNum,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#A82DFF'
                  }, {
                    offset: 1,
                    color: '#0072FF'
                  }]),
                }
              },
            }
          ]
        };
        myChart.setOption(option);

        // this.$api.bedDistributed(function (res) {
        //   console.log(res)

        // })

      },
      ServiceContrast() {
        let myChart = echarts.init(document.getElementById('ServiceContrast'));
        var option = {
          xAxis: {
            type: 'category',
            data: ["后宅街道", "义亭镇", "城西街道", "佛堂镇", "江东街道", "稠江街道"],
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };
        myChart.setOption(option);

      },
      StreetSatisfactionContrast() {
        let myChart = echarts.init(document.getElementById('StreetSatisfactionContrast'));
        var option = {
          xAxis: {
            type: 'category',
            data: ["后宅街道", "义亭镇", "城西街道", "佛堂镇", "江东街道", "稠江街道"],
          },
          yAxis: {
            type: 'value',
            max: 150
          },
          series: [
            {
              data: [78, 91, 86, 85, 92, 95, 94],
              type: 'line'
            }
          ]
        };
        myChart.setOption(option);
      },
      ServiceProjectDdemand() {
        var data = [
          {
            "name": "容貌整洁",
            "serviceTimes": 7958,
            "x": "容貌整洁",
            "y": 7958
          },
          {
            "name": "洗发",
            "serviceTimes": 14868,
            "x": "洗发",
            "y": 14868
          },
          {
            "name": "指/趾甲护理",
            "serviceTimes": 15794,
            "x": "指/趾甲护理",
            "y": 15794
          },
          {
            "name": "足部清洁",
            "serviceTimes": 12776,
            "x": "足部清洁",
            "y": 12776
          },
          {
            "name": "沐浴（冬季）",
            "serviceTimes": 506,
            "x": "沐浴（冬季）",
            "y": 506
          },
          {
            "name": "其他",
            "serviceTimes": 7851,
            "x": "其他",
            "y": 7851
          },
          {
            "name": "陪同就医",
            "serviceTimes": 10,
            "x": "陪同就医",
            "y": 10
          },
          {
            "name": "安全指导",
            "serviceTimes": 5,
            "x": "安全指导",
            "y": 5
          },
          {
            "name": "运动和营养指导",
            "serviceTimes": 4,
            "x": "运动和营养指导",
            "y": 4
          },
          {
            "name": "室内清洁",
            "serviceTimes": 12543,
            "x": "室内清洁",
            "y": 12543
          },
          {
            "name": "陪聊沟通",
            "serviceTimes": 678,
            "x": "陪聊沟通",
            "y": 678
          },
          {
            "name": "起居照料/衣物清洁/室内清洁/制作老年餐",
            "serviceTimes": 13095,
            "x": "起居照料/衣物清洁/室内清洁/制作老年餐",
            "y": 13095
          },
          {
            "name": "血压/血糖测量",
            "serviceTimes": 2970,
            "x": "血压/血糖测量",
            "y": 2970
          },
          {
            "name": "助餐",
            "serviceTimes": 201,
            "x": "助餐",
            "y": 201
          },
          {
            "name": "代缴代购",
            "serviceTimes": 192,
            "x": "代缴代购",
            "y": 192
          },
          {
            "name": "理发",
            "serviceTimes": 14849,
            "x": "理发",
            "y": 14849
          },
          {
            "name": "沐浴（夏季）",
            "serviceTimes": 1852,
            "x": "沐浴（夏季）",
            "y": 1852
          }
        ];
        var xAxisName = [];
        var needNum = [];
        data.forEach(function (item, index) {
          xAxisName.push(item.name)
          needNum.push(item.serviceTimes)
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('ServiceProjectDdemand'))
        // 绘制图表
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: xAxisName,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              interval: 0,    //强制文字产生间隔
              rotate: 45,     //文字逆时针旋转45°
              textStyle: {    //文字样式
                color: '#ffffff',
                fontSize: 8,
                fontFamily: 'Microsoft YaHei'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          series: [
            {
              name: '服务需求数量',
              type: 'bar',
              barWidth: '30%',
              data: needNum,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#A82DFF'
                  }, {
                    offset: 1,
                    color: '#0072FF'
                  }]),
                }
              },
            }
          ]
        };
        myChart.setOption(option);
      },
      oldInfoPercent() {
        let myChart = echarts.init(document.getElementById('oldInfoPercent'));
        console.log(myChart)
        var option = {
          legend: {
            orient: 'vertical',
            left: 'right',
            top: 'center',
            align: 'left',
            padding: [0, 80, 0, 0],
            textStyle: {//图例文字的样式
              color: '#fff',
              fontSize: 16
            },
            formatter: function (name) {
              var total = 0;
              for (var i = 0; i < option.series[0].data.length; i++) {
                total += option.series[0].data[i].value;
              }
              for (i = 0; i < option.series[0].data.length; i++) {
                var dpercent = (option.series[0].data[i].value / total * 100).toFixed(2) + '%';
                if (option.series[0].data[i].name === name) {
                  //可以显示名称和值和百分比
                  return name + ' ' + option.series[0].data[i].value + '单';
                  //只显示名称和百分比
                  // return name + ' ' + dpercent;
                }
              }
            }
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: '服务商当月服务次数对比',
              type: 'pie',
              radius: ['50%', '80%'],
              center: ['25%', '50%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 4,
              },
              label: {
                show: false,
                position: 'center',
                formatter: '{b}\n{d}%',

              },

              emphasis: {
                label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold',
                  color: '#fff'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 120, name: '唯乐为老' },
                { value: 409, name: '义乌普亲' },
                { value: 1128, name: '康乐园' },
                { value: 442, name: '怡乐新村' },
                { value: 567, name: '城西养老中心' },
                { value: 385, name: '茗山家护' },
              ]
            }
          ]
        };
        myChart.setOption(option);
        var curIndex = 0;
        setInterval(function () {
          var dataLen = option.series[0].data.length;
          myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
          curIndex = (curIndex + 1) % dataLen
          myChart.dispatchAction({
            type: 'highlight', seriesIndex: 0, dataIndex: curIndex
          });
        }, 1000);

      },
      Satisfaction() {
        let myChart = echarts.init(document.getElementById('Satisfaction'));
        var option = {
          color: [new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
            offset: 0,
            color: '#F0FF00'
          },
          {
            offset: 0.9,
            color: '#00D2FF'
          }]),
            '#064E8D'
          ],
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: '人护比',
              type: 'pie',
              radius: ['40%', '43%'],
              center: ['25%', '58%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 4,
              },
              label: {
                show: false,
                position: 'center',
                formatter: '{b}\n{d}%',
              },

              emphasis: {
                label: {
                  show: false,
                  fontSize: '20',
                  fontWeight: 'bold',
                  color: '#fff'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 2943, name: '服务对象' },
                { value: 88, name: '服务人员' },
              ]
            }
          ]
        };
        myChart.setOption(option);

        myChart.dispatchAction({
          type: 'highlight', seriesIndex: 0, dataIndex: 0
        });
      },
      AppointOrderProportion() {
        let myChart = echarts.init(document.getElementById('AppointOrderProportion'));
        var option = {
          color: [new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
            offset: 0,
            color: '#F0FF00'
          },
          {
            offset: 0.9,
            color: '#00D2FF'
          }]),
            '#064E8D'
          ],
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: '人护比',
              type: 'pie',
              radius: ['40%', '43%'],
              center: ['25%', '58%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 4,
              },
              label: {
                show: false,
                position: 'center',
                formatter: '{b}\n{d}%',
              },

              emphasis: {
                label: {
                  show: false,
                  fontSize: '20',
                  fontWeight: 'bold',
                  color: '#fff'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 2943, name: '服务对象' },
                { value: 400, name: '服务人员' },
              ]
            }
          ]
        };
        myChart.setOption(option);

        myChart.dispatchAction({
          type: 'highlight', seriesIndex: 0, dataIndex: 0
        });
      },
      getOrderInfo() {
        var that = this;
        var obj = {
          "name": "",
          "ErrorType": 0,
          "state": 3,
          "serviceOrganizationId": 0,
          "serviceTypeId": 0,
          "beginDate": "",
          "endDate": "",
          "pageIndex": 0,
          "pageSize": 30
        };
        that.$axios.post('http://47.96.104.248:5555/HomeService/AllOrderServiceQuery', obj,
          {
            headers: {
              'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENhcmQiOiIiLCJuYW1lIjoibGcwMDEiLCJwaG9uZSI6IiIsImxvZ2luVGltZSI6IjIwMjEtMTAtMzBUMjE6MTI6MjQuNTk5NTQ1MSswODowMCIsInVzZXJUeXBlIjoyfQ.2WofRuRll3mTcXhphF_oiN8ovRayCNb9FKOorN6kRbM'
            }
          }).then(function (res) {
            console.log(res)
            that.marqueeList = res.data.data;
          }).catch(function (err) {
            console.log(err)
          });
      },


    },
    created: function () {
      setInterval(this.showMarquee, 2000);
    },
    mounted() {
      this.drawLine();
      this.getOrderInfo()
    }
  };
</script>
<style src="./HomeCare.css" scoped> </style>