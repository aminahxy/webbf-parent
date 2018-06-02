import React from 'react'
import echarts from 'echarts'
import $ from 'jquery';          //jquery

export default class PieGraph2 extends React.Component{

  constructor(props) {
      super(props);
      this.initPiegraph2 = this.initPiegraph2.bind(this)
  }
  initPiegraph2(){
    this.chartData = {};
      var name=this.props.name;
      // alert(name);
      console.log(name);
    $.ajax({
     async: false,
      type : "get",
        // url : "addatas",
         url: "addatas2/"+name,
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
    var piegraph = document.getElementById('piegraph-chart2');
      piegraph.style.width = '100%';
      piegraph.style.height = '300px';
  }


  componentDidMount() {
      this.initPiegraph2();
    this.autoResize();
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('piegraph-chart2'));
    // 绘制图表
    myChart.setOption({
        // title: {
        //     text: '1小时访问来源堆积图'
        // },
        tooltip : {
             // trigger: 'axis'
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series : [
            {
                name:'访问来源',
                 type:'pie',
                // type:['pie','funnel'],
                radius: ['100%', '0%'],
                // radius: ['100%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:this.chartData.emailList, name:'直接访问'},
                    {value:this.chartData.allianceList, name:'邮件营销'},
                    {value:this.chartData.vedioList, name:'联盟广告'},
                    {value:this.chartData.searchList, name:'视频广告'},
                    {value:this.chartData.directList, name:'搜索引擎'}
                    // {value:200, name:'直接访问'},
                    // {value:500, name:'邮件营销'},
                    // {value:23, name:'联盟广告'},
                    // {value:80, name:'视频广告'},
                    // {value:92, name:'搜索引擎'}
                ]

            }

        ]
    });
    window.onresize = function () {
        this.autoResize();
        myChart.resize();
    }.bind(this);
  }
    componentDidUpdate() {
        this.initPiegraph2();
        this.autoResize();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('piegraph-chart2'));
        // 绘制图表
        myChart.setOption({
            // title: {
            //     text: '1小时访问来源堆积图'
            // },
            tooltip : {
                // trigger: 'axis'
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    // type:['pie','funnel'],
                    radius: ['100%', '0%'],
                    // radius: ['100%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:this.chartData.emailList, name:'直接访问'},
                        {value:this.chartData.allianceList, name:'邮件营销'},
                        {value:this.chartData.vedioList, name:'联盟广告'},
                        {value:this.chartData.searchList, name:'视频广告'},
                        {value:this.chartData.directList, name:'搜索引擎'}
                        // {value:200, name:'直接访问'},
                        // {value:500, name:'邮件营销'},
                        // {value:23, name:'联盟广告'},
                        // {value:80, name:'视频广告'},
                        // {value:92, name:'搜索引擎'}
                    ]

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
			<div id = "piegraph-chart2">
			</div>
    );
  }
}
