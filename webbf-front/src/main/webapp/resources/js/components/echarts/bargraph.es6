import React from 'react'
import echarts from 'echarts'
import $ from 'jquery';          //jquery

export default class BarGraph extends React.Component{

  constructor(props) {
      super(props);
      this.initBargraph = this.initBargraph.bind(this)
  }
  initBargraph(){
    this.chartData = {};
    // this.chartData = [];
    $.ajax({
     async: false,
      type : "get",
      url : "addatas",
      data: {},
      datatype : 'json',
      success : function(data) {

		  this.chartData.emailList = data.emailList;
		  this.chartData.allianceList = data.allianceList;
		  this.chartData.vedioList = data.vedioList;
		  this.chartData.directList = data.directList;
		  this.chartData.searchList = data.searchList;
		  this.chartData.xTitleList = data.xTitleList;

      }.bind(this),
	  error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + ' ' + jqXHR.responseText);
	  }
    });

  }
  autoResize() {
    var bargraph = document.getElementById('bargraph-chart');
      bargraph.style.width = '100%';
      bargraph.style.height = '300px';
  }


  componentDidMount() {
      this.initBargraph();
    this.autoResize();
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('bargraph-chart'));
    // 绘制图表
    myChart.setOption({
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
                // data:[this.chartData.emailList,this.chartData.allianceList,this.chartData.vedioList,this.chartData.directList,this.chartData.searchList = data.searchList]
            }
        ]
    });
    window.onresize = function () {
        this.autoResize();
        myChart.resize();
    }.bind(this);
  }

    componentDidUpdate() {
        this.initBargraph();
        this.autoResize();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('bargraph-chart'));
        // 绘制图表
        myChart.setOption({
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                    // data:[this.chartData.emailList,this.chartData.allianceList,this.chartData.vedioList,this.chartData.directList,this.chartData.searchList = data.searchList]
                }
            ]
        });
        window.onresize = function () {
            this.autoResize();
            myChart.resize();
        }.bind(this);
    }




    render() {
    return (
			<div id = "bargraph-chart">
			</div>
    );
  }
}
