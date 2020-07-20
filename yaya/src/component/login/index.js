import React,{Component} from 'react'
import '../../style/login.scss'
import NormalLoginForm from '../../view/login-gn'
import {
    LeftOutlined,
    EllipsisOutlined
  } from '@ant-design/icons';

class Login extends Component{
    
    chagod=()=>{
            // console.log(this.props);
            this.props.history.push('/mine')
            }
    render(){
        return(
            <div className='login'> 
            <div className='lo-tou'>
                <div className='jt' onClick={this.chagod}><LeftOutlined /></div>
                <div className='jit-p'><p>登录</p></div>
                <div className='jt2'><EllipsisOutlined /></div>
            </div>
            <div className='zhmm'>
                账号密码登录
            </div>
            <NormalLoginForm></NormalLoginForm>
          </div>
        )
    }
}
export default Login