import React,{Component} from 'react'
import '../../style/message.scss'
import {
    LeftOutlined,
    WarningOutlined,
    SketchOutlined
  } from '@ant-design/icons';
class Message extends Component{
    componentWillMount(){
        const a=localStorage.getItem('xiaomi-username')
        if(!a){
            alert("跳转到登录页")
            this.props.history.push('/login')
        }
    }
    caa=()=>{
            // console.log(this.props);
            this.props.history.push('/zskf')
            }
    render(){
        return(
            <div className='message'> 
            <div className='message-tou'>
                <div className='jt'><LeftOutlined /></div>
                <div className='mes-p'><p>消息中心</p></div>
                <div className='mes2'><WarningOutlined className='mt-1'/>投诉</div>
                <div className='mes3' onClick={this.caa}><SketchOutlined className='mt-1'/>专属客服</div>
            </div>
            <div className='ltnr'>
                <div className='ltnr-t'>
                    <div className='ltnr-toux'><img src='https://img2.ch999img.com/pic/clientimg/app_servicer1.3.png.webp'></img></div>
                    <div className='p'><span className='l'>在线客服</span><span className='r'>07/17</span></div>
                    <span className='p-d'>在线为您提供售前，售后咨询答疑</span>
                </div>
            </div>
            <div className='ltnr2'>
                <div className='ltnr-t'>
                    <div className='ltnr-toux'><img src='https://img2.yaya.cn/newstatic/1934/01b7e9a6ba7d2efc.png.webp'></img></div>
                    <div className='p'><span className='l'>丫丫头条</span><span className='r'>07/09</span></div>
                    <span className='p-d'>iQOO Z1x正式发布！120Hz/5000mAh电池，1598元起</span>
                </div>
            </div>
          </div>
        )
    }
}
export default Message