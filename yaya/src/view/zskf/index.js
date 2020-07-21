import React,{Component} from 'react'
import '../../style/message.scss'
import {
    LeftOutlined,
  } from '@ant-design/icons';
class Zskf extends Component{
    kfg=()=>{
            // console.log(this.props);
            this.props.history.push('/message')
            }
    render(){
        return(
            <div className='message'> 
             <div className='message-tou'>
                <div className='jt' onClick={this.kfg}><LeftOutlined /></div>
                <div className='kf'><p>我的专属客服</p></div>
             </div>
             <div className='kf-nei'>
                 <img className='im1' src='https://img2.yaya.cn/newstatic/1377/0143acdfd5ffeccd.png'></img>
                 <span className='kf-pan'>您还没有购买任何商品，暂无专属客服</span>
                 <div className='anniu' onClick={this.kfg}>咨询在线客服</div>
             </div>
            
            </div>
        )
    }
}
export default Zskf