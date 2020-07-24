import React, { Fragment, Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd'
import admin from '../../api/admin'
import banner from '../../api/banner'
import user from '../../api/user'
import good from '../../api/goods'
class Manage extends Component {
    constructor() {
        super();
        this.state = {
            
            option :{
                backgroundColor: "#38445E",
                grid: {
                    left: '12%',
                    top: '5%',
                    bottom: '12%',
                    right: '8%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    data: ['商品总数', '用户总数', '管理员总数'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999',
                            fontSize: 12
                        }
                    }
                },
                yAxis: [{
                    splitNumber: 2,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: 'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 0.5,
                            type: 'dashed'
                        }
                    }
                }
                ],
                series: [{
                    name: 'hill',
                    type: 'pictorialBar',
                    barCategoryGap: '0%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    label: {
                        show: true,
                        position: 'top',
                        distance: 15,
                        color: '#DB5E6A',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                                }
                                ],
                                global: false //  缺省为  false
                            }
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    data: [2, 2, 2, 18,2],
                    z: 10
                }]
            }
        }
    }
    // com () {
    //  this.getNumber()
    // }
     
    componentWillMount=async ()=>{ 
        let { option } = JSON.parse(JSON.stringify(this.state))
        // let bannerlist = await banner.bannerNum()
        // let bannern=bannerlist.count
        // let goods = await good.goodsNum()
        // let goo=goods.count
        let dataw = await admin.List()
        let num=dataw.data.data.p.length
        let userList = await user.List()
        let usernum=userList.data.data.p.length
         option.series[0].data =[ 1,usernum, num]
         this.setState({option})
    }
   
    render () {
        
        let { option}=this.state
        
        return (
            <Fragment>
                <Card title="数据统计" >
                    <ReactEcharts option={option}></ReactEcharts>
                </Card>
              
            </Fragment>
        );
    }
}

export default Manage;