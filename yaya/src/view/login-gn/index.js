import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../style/login.scss'
import userApi from "../../api/login.js";
class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
   onFinish = async values => {
    let { username, password } =values;
    let result = await userApi.login({username,password});
    console.log(result.data);
    console.log(username,password);
    if(result.data.flag){
      this.props.history.push('/mine')
      localStorage.setItem('xiaomi-username',username);
    }else{
      console.log('密码错误')
    }
  };
  render () {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
    >
      <div className='zhts'>账号</div>
      <Form.Item
      className='zhk'
        name="username"
        rules={[
          {
            required: true,
            message: '请输入你的账号!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
      </Form.Item>
      <div className='zhts'>密码</div>
      <Form.Item
      className='mmk'
        name="password"
        rules={[
          {
            required: true,
            message: '请输入你的密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>

      <Form.Item className='oo'>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
}
NormalLoginForm=withRouter(NormalLoginForm)
export default NormalLoginForm