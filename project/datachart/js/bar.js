// 使用
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('bar'));

        option = {
            backgroundColor : 'rgb(255,255,255)',
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            xAxis : [
                {
                    name : "月(时间)",
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    name : "AQI(空气质量)",
                    splitNumber : 3,
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'AQI',
                    type:'bar',
                    barWidth: 20,
                    data:[100, 130, 140, 120, 115, 176, 135, 162, 255, 100, 110, 120],
                    itemStyle : {
                        normal: {
                            color : 'rgb(64,159,232)',
                            barBorderRadius : 5
                        },
                        emphasis: {
                            color : 'rgb(64,159,232)',
                            barBorderRadius : 5
                        }
                    },
                    // lineStyle : {
                    //     color: ['#ccc'],
                    //     width: 1,
                    //     type: 'dotted'
                    // },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);