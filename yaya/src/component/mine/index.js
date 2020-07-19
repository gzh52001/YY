import React,{Component} from 'react'
// import Button from '@material-ui/core/Button';
// import '../style/main.scss'
import '../../style/mine.scss'
import {
    CreditCardOutlined,
    GiftOutlined,
    CommentOutlined,
    FileDoneOutlined
  } from '@ant-design/icons';
class Mine extends Component{
    chage=()=>{
            // console.log(this.props);
            this.props.history.push('/login')
            }
        caage=()=>{
                // console.log(this.props);
                this.props.history.push('/reg')
                }
    render(){
        
        return(
            <div className='mine'> 
            <div className='mynei'>
                <div className='my-head'> 
                <div className='my-shezhi'>
                    <span>设置</span>
                </div>
                <div className='my-shezhi2'>
                    <div className='touxiang'></div>
                    <span className='aii' onClick={this.chage}>登录 |</span>
                    <span className='aii2' onClick={this.caage}> 注册</span>
                </div>
                <div className='jifen'>
                    <div className='jifen-t'><span>0</span>收藏商品</div>
                    <div className='jifen-t'><span>0</span>浏览记录</div>
                    <div className='jifen-t'><span>0</span>优惠券</div>
                    <div className='jifen-t'><span>0</span>积分</div>
                </div>
               </div>

              <div className='dindan'>
                  <div className='dindan-tou'>
                      <span>我的订单</span>
                      <span className='s-l'>全部订单</span>
                  </div>
                  <div className='tubia'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div  className='tubia'>
                  <GiftOutlined className='tu' />
                      <span>待收货</span>
                  </div>
                  <div  className='tubia'>
                  <CommentOutlined className='tu' />
                      <span>待评价</span>
                  </div>
                  <div  className='tubia'>
                  <FileDoneOutlined className='tu' />
                      <span>已完成</span>
                  </div>
                  
              </div>
               <div className='qita'>
               <div className='dindan-tou'>
                      <span>其他订单</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
                  <div className='tubie'>
                  <CreditCardOutlined className='tu' />
                      <span>代付款</span>
                  </div>
              </div>
            </div>
            
            
          </div>
        )
    }
}
export default Mine