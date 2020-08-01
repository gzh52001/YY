import React, { Component } from 'react'
import { UserOutlined, ExclamationCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'
import quest from '../../api/test'
import {connect} from 'react-redux';
import '../../style/shop.scss'

class Shopp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,   // 购物车管理开关状态
            logstate: false, // 登录状态
            allsel:false,    //全选状态
            goodsList: [],   // 渲染商品列表
            goods: [
            //     {
            //     id: 44353,
            //     name: "华为 P40 （ANA-AN00）全网通5G版 亮黑色 8GB+128GB 标准版",
            //     selgoods:false, //单个商品选中状态
            //     num: 1,
            //     price: 4488,
            //     img: "https://img2.yaya.cn/pic/product/440x440/20200524222618174.jpg"
            // }, {
            //     id: 45220,
            //     name: "华为 nova 7 SE 全网通5G版 绮境森林 8GB+128GB 标准版",
            //     selgoods:false,
            //     num: 1,
            //     price: 2399,
            //     img: "https://img2.yaya.cn/pic/product/440x440/20200527103849223.jpg"
            // }, {
            //     id: 41727,
            //     name: "华为 Mate 30 （TAS-AN00）全网通5G版 亮黑色 8GB+128GB ",
            //     selgoods:false,
            //     num: 1,
            //     price: 4199,
            //     img: "https://img2.yaya.cn/pic/product/440x440/20200602144857340.jpg"
            // }, {
            //     id: 41402,
            //     name: "Apple iPhone 11 （A2223）全网通版 白色 64GB ",
            //     selgoods:false,
            //     num: 1,
            //     price: 4699,
            //     img: "https://img2.yaya.cn/pic/product/440x440/20200706114206280.jpg"
            // }
        ]
        }
    }
    componentWillMount(){
         console.log(this.props);
         this.setState({
             goods:this.props.goodslist.map(item=>(
                 {
                    id:item.goods_id,
                    name:item.goods_name,
                    img:item.goods_image,
                    price:item.goods_price,
                    num:item.goods_qty,
                    selgoods:item.selgoods, 
                 }
             ))
         })
    }
    async componentDidMount() { // 发送请求，请求数据
       
        try {
            const glists = await quest.getHotSale()
            
            // console.log(glists)
            this.setState({
                goodsList: glists.data.data.recommend.list
            })
            console.log('data=', this.state.goodsList)
        } catch (err) {
            console.log(err)
        }
    }

    change = () => {
        this.setState({
            status: !this.state.status
        })
    }
    login = () => {
        const { history } = this.props
        history.push('/login')
    }

    addCart = () => {
        console.log('添加成功')
    }

    addNum = (id) => {
        const countGoods=this.props.goodslist.filter(item=>item.goods_id==id)[0]
        if(countGoods.goods_qty>=10){
            countGoods.goods_qty=10
        }else{
            countGoods.goods_qty=countGoods.goods_qty+1
        }
        this.props.dispatch({
            type:"change_qty",
            goods_id:id,
            goods_qty:countGoods.goods_qty,  
        })
        this.setState({
            goods:this.props.goodslist.map(item=>(
                {
                   id:item.goods_id,
                   name:item.goods_name,
                   img:item.goods_image,
                   price:item.goods_price,
                   num:item.goods_qty,
                   selgoods:item.selgoods, 
                }
            ))
        })
    }

    subNum = (id) => {
        console.log('减掉了一件商品')
        const countGoods=this.props.goodslist.filter(item=>item.goods_id==id)[0]
        if(countGoods.goods_qty<=1){
            countGoods.goods_qty=1
        }else{
            countGoods.goods_qty=countGoods.goods_qty-1
        }
        this.props.dispatch({
            type:"change_qty",
            goods_id:id,
            goods_qty:countGoods.goods_qty,  
        })
        this.setState({
            goods:this.props.goodslist.map(item=>(
                {
                   id:item.goods_id,
                   name:item.goods_name,
                   img:item.goods_image,
                   price:item.goods_price,
                   num:item.goods_qty,
                   selgoods:item.selgoods, 
                }
            ))
        })


    }

    sel = (id,e) => {
        // console.log(id,e.target.checked)
        this.props.dispatch({
            type:"change_selgoods",
            goods_id:id,
            selgoods:e.target.checked,  
        })
        this.setState({
            // goods:this.props.goodslist.map(item=>(
            //     {
            //        id:item.goods_id,
            //        name:item.goods_name,
            //        img:item.goods_image,
            //        price:item.goods_price,
            //        num:item.goods_qty,
            //        selgoods:item.selgoods, 
            //     }
            // )),
            allsel:this.props.goodslist.every(item=>item.selgoods)
        })
 
    }

    allselect = (e) => {
        console.log(e.target.checked);
        this.props.dispatch({
            type:"change_selgoods_all",
            selgoods:e.target.checked,  
        })     
        this.setState({
            goods:this.props.goodslist.map(item=>(
                {
                   id:item.goods_id,
                   name:item.goods_name,
                   img:item.goods_image,
                   price:item.goods_price,
                   num:item.goods_qty,
                   selgoods:item.selgoods, 
                }
            )),
            allsel:e.target.checked,
        })
    }
    tiaoZ=(id)=>{
        this.props.history.push('/DetailsPage/'+id)
    }

    shanChu=()=>{
        this.props.dispatch({
            type:"remove_from_cart",
        })
        // setTimeout 
        this.setState({
            goods:this.props.goodslist.map(item=>(
                {               
                   id:item.goods_id,
                   name:item.goods_name,
                   img:item.goods_image,
                   price:item.goods_price,
                   num:item.goods_qty,
                   selgoods:item.selgoods, 
                }
            )),
        })
    }

    render() {
        // console.log(this.props)
        // const {goods} = this.state.goodsList
        console.log('3123123',this.state.goods);
        return (
            <div className='shopp'>
                <div className="header">
                    <div className="title">
                        <span>购物车</span>
                    </div>
                    <div className="control">
                        <Link to="#"
                            onClick={this.change}
                        >
                            {this.state.status ? '管理' : '完成'}
                        </Link>
                        <i
                            onClick={this.login}
                        >
                            <UserOutlined />
                        </i>
                    </div>
                </div>
                <div className="cart">
                    {!this.logstate ? <div className="tips">
                        <span>
                            <ExclamationCircleOutlined />
                            登录后可同步电脑与手机购物车中的商品
                            </span>
                        <span>
                            <Link
                                to="/login">
                                登录
                        </Link>
                        </span>
                    </div>
                        :
                        ''
                    }
                    <div className="itemlist">
                        {this.state.goods.length===0 ?
                            // 购物车没有商品数据
                            <div className="not">
                                <span>
                                    <ShoppingCartOutlined style={{ fontSize: "40px", opacity: ".1" }} />
                                </span>
                                <p>
                                    购物车里什么都没有,快去买点什么吧~
                                </p>
                                <Link to="/">去逛逛</Link>
                            </div>
                            :
                            // 购物车有商品数据
                            <>
                                {this.state.goods.map((item,idx) =>
                                    <div className="has" key={item.id}>
                                        <input type="checkbox" onChange={this.sel.bind(this,item.id)} 
                                        // checked={item.selgoods}
                                        defaultChecked={true}
                                         />
                                        <div className="pc">
                                            <img src={item.img} />
                                        </div>
                                        <div className="msg">
                                            <p style={{ lineHeight: "16px" }}>
                                                {item.name}
                                            </p>
                                            <h4 style={{ color: "red" }}>￥{item.price}</h4>
                                            <div className="num">
                                                <b onClick={this.subNum.bind(this, item.id)}>－</b>
                                                <span>{item.num}</span>
                                                <b onClick={this.addNum.bind(this, item.id)}>＋</b>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        }
                    </div>

                    <div className="pic" >
                        {/* 热卖图片区域 */}
                        <img src="https://img2.yaya.cn/newstatic/1380/013d0b998f2b883a.png.webp" />
                    </div>
                    {/* 热卖商品列表 */}
                    <div className='goodslist'>
                        <ul>
                            {
                                this.state.goodsList.map(item => <li key={item.productId}>
                                    <div className="items" onClick={this.tiaoZ.bind(this,item.sku[0].ppid)}>
                                        <Link to="#">
                                            <img src={item.sku[0].imagePath} />
                                        </Link>
                                        <p>
                                            {item.name}
                                        </p>
                                        <div className="price">
                                            <span style={{ color: 'red' }}>￥{item.sku[0].price}</span>
                                            <i>
                                                <ShoppingCartOutlined style={{ fontSize: "16px" }} />
                                            </i>
                                        </div>
                                    </div>
                                </li>
                                )}
                        </ul>



                    </div>

                </div>
                <div className="total">
                    {this.state.status ? <div className="computed">
                        <p>
                            合计：
                                <span>￥{this.props.totalPrice}</span>
                            <a href="#/shopp">去结算</a>
                        </p>
                    </div>
                        :
                        <div className="delete">
                            <div className="con">
                                <input type="checkbox" id="all" onChange={this.allselect} checked={this.state.allsel} />
                                <label htmlFor="all">全选</label>
                            </div>

                            <span>
                                共{this.props.totalQty}件商品
                            </span>

                            <a href="#/shopp" onClick={this.shanChu}>删除所选</a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

Shopp = withRouter(Shopp)
Shopp=connect(({goodslist})=>({
    goodslist,
        // 计算总价格 prev:返回值   prev+item.goods_price*item.goods_qty :之前加上当前价格                  初始值为0
    totalPrice:goodslist.reduce((prev,item,idx,arr)=>prev+item.goods_price*item.goods_qty,0),
    totalQty:goodslist.reduce((prev,item,idx,arr)=>prev+item.goods_qty,0),
}))(Shopp)
export default Shopp