import React,{Component} from 'react'
import '../../style/reg.scss'
import NormalLoginForm from '../../view/zuce-gn'
import {
    LeftOutlined,
    EllipsisOutlined
  } from '@ant-design/icons';

class Reg extends Component{
    chagoood=()=>{
            // console.log(this.props);
            this.props.history.push('/login')
            }
    render(){
        return(
            <div className='reg'> 
            <div className='lo-tou'>
                <div className='jt' onClick={this.chagoood}><LeftOutlined /></div>
                <div className='jit-p'><p>用户注册</p></div>
                <div className='jt2'><EllipsisOutlined /></div>
            </div>
            <div className='fk'><NormalLoginForm></NormalLoginForm></div>
          </div>
        )
    }
}
export default Reg