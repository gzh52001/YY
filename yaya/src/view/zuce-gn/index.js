import React,{Component} from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../style/reg.scss'
import userApi from "../../api/login.js";
class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
   onFinish = async values => {
       try{
           let { username, password } =values;
    let result = await userApi.checkname({username,password});
    console.log(result.data);
    if(result.data.flag==true){
        let result = await userApi.reg({username,password});
        // this.$md5(this.password);
        console.log('注册成功');
        // this.$router.push("/denglu");
      }else{
        console.log('用户已存在');
      }
       }catch (err){

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
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
}
export default NormalLoginForm