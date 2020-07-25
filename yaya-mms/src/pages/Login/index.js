import React, { Component } from 'react';
import userApi from "../../api/login";
import './login.scss'
import ReactCanvasNest from 'react-canvas-nest'
import { Form, Input, Button, Checkbox,message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
  class Login extends Component {
  
    constructor(props) {
      super(props);
      this.state = {};
    }  
      onFinish = async values => {
        let { username, password } = values 
        let result = await userApi.login({ username, password })
        if(result.data.flag ){
          console.log(result.data);
          // 登录成功获取token并保存到localstorage
          localStorage.setItem('token',result.data.data.token)
          localStorage.setItem('user',username)
          message.success('登录成功，将跳转首页',3,()=>{
            
            this.props.history.push('/admin/manage')
          })
        }else{
          message.error('用户名密码错误')
        }
      };
    
     onFinishFailed = errorInfo => {
      message.error('errorInfo')
      };
    
    render () {
      return (
        <div className="login-box">
          <ReactCanvasNest className='canvasNest' config={{ pointColor: '255 ,255, 0', count: '120', lineColor: "0,0,0" }} style = {{ zIndex: 1 }}/>
            <Form
               style = {{ zIndex: 99}}
            className="login-form"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      // onFinishFailed={this.onFinishFailed}
    >
      <Form.Item  className="login-u"
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入名字!' }, {max:9,message:"用户名最长9位"},
        {min:2,message:"用户名最少2位"}]}
            >        
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>  
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        className="login-p"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>

      <Form.Item {...tailLayout} className="login-j" name="remember" valuePropName="checked"
      >
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout} className="login-d">
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
            </Form>
    </div>

      );
    }
  
  }

export default Login
  