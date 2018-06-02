import React from 'react'
import echarts from 'echarts'
// import Welcom from './welcom.es6';
import $ from 'jquery';          //jquery

// export default class AreaStack2 extends React.Component{
export default class AreaStack2 extends React.Component {

    constructor(props) {
        super(props);
        this.initPie = this.initPie.bind(this)
    }
        // this.option = this.props;
        // alert(this.option);
    initPie() {
        this.chartData2 = {};
        var name=this.props.name;
        // alert(name);
        console.log(name);
        $.ajax({
            async: false,
            type: "get",
            url: "addatas2/"+name,
            data: {},
            datatype: 'json',
            success: function (data) {

                this.chartData2.emailList = data.emailList;
                this.chartData2.allianceList = data.allianceList;
                this.chartData2.vedioList = data.vedioList;
                this.chartData2.directList = data.directList;
                this.chartData2.searchList = data.searchList;
                this.chartData2.xTitleList = data.xTitleList;

            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status + ' ' + jqXHR.responseText);
            }
        });
    }

        autoResize()
        {
            var areastack = document.getElementById('areastack-chart2');
            areastack.style.width = '100%';
            areastack.style.height = '500px';
        }



    componentDidMount() {
        this.initPie();
        this.autoResize();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('areastack-chart2'));
        // 绘制图表
        myChart.setOption({
            // title: {
            //     text: '1小时访问来源堆积图'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: this.chartData2.xTitleList
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.emailList
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.allianceList
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.vedioList
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.directList
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data: this.chartData2.searchList
                }
            ]
        });
        window.onresize = function () {
            this.autoResize();
            myChart.resize();
        }.bind(this);
    }
    componentDidUpdate() {
        this.initPie();
        this.autoResize();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('areastack-chart2'));
        // 绘制图表
        myChart.setOption({
            // title: {
            //     text: '1小时访问来源堆积图'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: this.chartData2.xTitleList
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.emailList
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.allianceList
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.vedioList
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: this.chartData2.directList
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data: this.chartData2.searchList
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
            <div id="areastack-chart2">
            </div>
        );
    }
}
