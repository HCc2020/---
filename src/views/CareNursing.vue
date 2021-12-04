<template>
  <div class="home" :style="{backgroundImage:'url('+require('@/assets/home/bg.png')+')'}">
    <div class="page_hd">
      怡养义乌—智慧康养
    </div>
    <div class="page_bd">
      <div class="bd_left">
        <div class="left-one" :style="{backgroundImage:'url('+require('@/assets/home/left-one.png')+')'}">
          <div class="card_title">
            长者数据
          </div>
          <div class="oldInfo">
            <div class="info_top">
              <div class="info_item">
                <div class="percentInfo">
                  <div class="percentNum">9.1%</div>
                </div>
                <div class="info_content">
                  <div class="info_title">自理老人</div>
                  <div class="info_num">{{oldcatenum.zl}}<span class="tip">人</span></div>
                </div>
              </div>
              <div class="info_item">
                <div class="percentInfo2 bg2">
                  <div class="percentNum">51.5%</div>
                </div>
                <div class="info_content">
                  <div class="info_title">介护老人</div>
                  <div class="info_num">{{oldcatenum.jh}}<span class="tip">人</span></div>
                </div>
              </div>
            </div>
            <div class="info_bottom">
              <div class="info_item">
                <div class="percentInfo3 bg3">
                  <div class="percentNum">31.7%</div>
                </div>
                <div class="info_content">
                  <div class="info_title">长护老人</div>
                  <div class="info_num">{{oldcatenum.ch}}<span class="tip">人</span></div>
                </div>
              </div>
              <div class="info_item">
                <div class="percentInfo4 bg4">
                  <div class="percentNum">7.8%</div>
                </div>
                <div class="info_content">
                  <div class="info_title">特护老人</div>
                  <div class="info_num">{{oldcatenum.th}}<span class="tip">人</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left-two" :style="{backgroundImage:'url('+require('@/assets/home/left-two.png')+')'}">
          <div class="card_title">
            床位数据
          </div>
          <div class="echart-box">
            <div id="bedChart" class="echart-item"></div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="bd_center">
        <div class="navTo">详情进入</div>
        <div class="center-one">
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="">
            </div>

            <div class="center-one_item_info">
              <div class="info_num">{{organNum}}</div>
              <div class="info_name">机构数（家）</div>
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
              <div class="info_num">{{inOlders}}</div>
              <div class="info_name">总入住老人数（人）</div>
            </div>
          </div>
          <div class="center-one_line"><img :src="require('../assets/home/line.png')" alt=""></div>
          <div class="center-one_item">
            <div class="center-one_item_img">
              <img :src="require('../assets/home/jg.png')" alt="">
            </div>

            <div class="center-one_item_info">
              <div class="info_num">{{allBeds}}</div>
              <div class="info_name">总床位数（张）</div>
            </div>
          </div>
        </div>
        <div class="center-two" :style="{backgroundImage:'url('+require('@/assets/home/center-two.png')+')'}">
          <div class="organ_name organ1">
            怡乐新村
          </div>
          <div class="organ_name organ2">
            城西养老
          </div>
          <div class="organ_name organ3">
            赤岸镇养老
          </div>
          <div class="organ_name organ4">
            上溪镇养老
          </div>
          <div class="organ_name organ5">
            康乐园
          </div>
          <div class="organ_name organ6">
            稠江养老
          </div>
        </div>
      </div>
      <div class="bd_right">
        <div class="right-one" :style="{backgroundImage:'url('+require('@/assets/home/right-one.png')+')'}">
          <div class="card_title">
            长者年龄比例
          </div>
          <div class="echart-box">
            <div id="oldInfoPercent" class="echart-item"></div>
          </div>
        </div>
        <div class="right-two" :style="{backgroundImage:'url('+require('@/assets/home/right-two.png')+')'}">
          <div class="card_title">
            运营模式
          </div>
          <div class="right-two_info" :style="{backgroundImage:'url('+require('@/assets/home/sj.png')+')'}">
            <div class="info1">
              <span class="info_title1">民办民营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{yyms.mbmy}}</span>
            </div>
            <div class="info2">
              <span class="info_title1">公办民营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{yyms.gbmy}}</span>
            </div>
            <div class="info3">
              <span class="info_title1">公办公营</span>
              <span class="info_title2">占比</span>
              <span class="info_percent">{{yyms.gbgy}}</span>
            </div>
          </div>
        </div>
        <div class="right-three" :style="{backgroundImage:'url('+require('@/assets/home/right-three.png')+')'}">
          <div class="card_title">
            人员信息
          </div>
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
                    <el-progress :percentage="70" :format="format"></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">182</div>
                <div class="item_ft">
                  <div class="name">护士</div>
                  <div class="percent">
                    <el-progress :percentage="60" :format="format"></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">63</div>
                <div class="item_ft">
                  <div class="name">后勤人员</div>
                  <div class="percent">
                    <el-progress :percentage="38" :format="format"></el-progress>
                  </div>
                </div>
              </div>
              <div class="oldInfo_right-item">
                <div class="num">46</div>
                <div class="item_ft">
                  <div class="name">管理人员</div>
                  <div class="percent">
                    <el-progress :percentage="32" :format="format"></el-progress>
                  </div>
                </div>
              </div>
            </div>
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
        }
      }
    },
    methods: {
      format(percentage) {
        return '';
      },
      showActive(index) {
        this.active = index;
      },
      drawLine() {
        this.bedChartInit();
        this.oldInfoPercent();
        this.oldInfo();
      },
      bedChartInit() {
        var res = { "errorMsg": "", "data": { "total": 4001, "useCount": 2159, "vacantCount": 1842, "nursingGrade": [{ "name": "失智三人间", "vacantBedCount": 37, "usingBedCount": 0 }, { "name": "五保", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "特护1", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "护理区", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "长护", "vacantBedCount": 485, "usingBedCount": 318 }, { "name": "照护", "vacantBedCount": 213, "usingBedCount": 167 }, { "name": "失智", "vacantBedCount": 3, "usingBedCount": 2 }, { "name": "中级", "vacantBedCount": 12, "usingBedCount": 11 }, { "name": "长护单人间", "vacantBedCount": 10, "usingBedCount": 6 }, { "name": "1200", "vacantBedCount": 30, "usingBedCount": 6 }, { "name": "护理", "vacantBedCount": 1397, "usingBedCount": 785 }, { "name": "护理型", "vacantBedCount": 66, "usingBedCount": 42 }, { "name": "长护双人间", "vacantBedCount": 90, "usingBedCount": 56 }, { "name": "二级", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "自理双人间", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "一级", "vacantBedCount": 43, "usingBedCount": 34 }, { "name": "长护三人间", "vacantBedCount": 153, "usingBedCount": 39 }, { "name": "800", "vacantBedCount": 63, "usingBedCount": 30 }, { "name": "特护2", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "失智单人间", "vacantBedCount": 3, "usingBedCount": 0 }, { "name": "高级", "vacantBedCount": 91, "usingBedCount": 79 }, { "name": "照护单人间", "vacantBedCount": 3, "usingBedCount": 2 }, { "name": "照护双人间", "vacantBedCount": 24, "usingBedCount": 9 }, { "name": "自理、护理", "vacantBedCount": 133, "usingBedCount": 99 }, { "name": "普通", "vacantBedCount": 846, "usingBedCount": 336 }, { "name": "自理单人间", "vacantBedCount": 0, "usingBedCount": 0 }, { "name": "自理", "vacantBedCount": 299, "usingBedCount": 138 }] }, "success": true }
        var bedData = res.data.nursingGrade;
        var xAxisName = [];
        var bedAllNum = [];
        var bedUseNum = [];
        bedData.forEach(function (item, index) {
          if (index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 10) {
            xAxisName.push(item.name)
            bedAllNum.push(item.vacantBedCount)
            bedUseNum.push(item.usingBedCount)
          }

        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('bedChart'))
        // 绘制图表
        var option = {
          legend: {
            data: ['床位总数', '已住床位'],
            textStyle: {
              color: "#fff"
            }
          },
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
              name: '床位总数',
              type: 'bar',
              data: bedAllNum,
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
            },
            {
              name: '已住床位',
              type: 'bar',
              data: bedUseNum,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#02D5FF'
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
                  return name + ' ' + option.series[0].data[i].value + '人';
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
              name: '长者年龄比例',
              type: 'pie',
              radius: ['35%', '70%'],
              center: ['35%', '50%'],
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
                { value: 120, name: '60-69岁' },
                { value: 409, name: '70-79岁' },
                { value: 1128, name: '80-89岁' },
                { value: 442, name: '90岁以上' },
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
      oldInfo() {
        let myChart = echarts.init(document.getElementById('oldInfo'));
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
              radius: ['53%', '70%'],
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
                { value: 409, name: '老人数' },
                { value: 120, name: '工作人员人数' },
              ]
            }
          ]
        };
        myChart.setOption(option);

        myChart.dispatchAction({
          type: 'highlight', seriesIndex: 0, dataIndex: 0
        });
      },



    },
    mounted() {
      this.drawLine();
    }
  };
</script>
<style scoped>
  /* @import './common.css'; */
</style>