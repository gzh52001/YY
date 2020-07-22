
import React, { Fragment, Component } from 'react'
import { Menu, Dropdown,Avatar  } from 'antd';
import {withRouter} from 'react-router-dom'
import { DownOutlined, UserOutlined, BankOutlined, RollbackOutlined } from '@ant-design/icons';
class dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      menu : (
        <Menu>
            <Menu.Item >
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              简体中文
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          繁体中文
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              英语
            </a>
          </Menu.Item>
        </Menu>
      ),
     
        };
  }
  componentDidMount () { 
    let name = localStorage.getItem('user')
    this.setState({name})
  }
  render () {
    let {menu}=this.state
        return (
            <Fragment>
              <Dropdown overlay={<Menu>
        <Menu.Item>
            <a>
            <UserOutlined /> 欢迎: {this.state.name} 
          </a>
              </Menu.Item>
        <Menu.Item>
            <a  onClick={() => { 
             this.props.history.replace('/admin/manage')
            }}>
            <BankOutlined /> 首页
                </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank"  onClick={() => { 
                  localStorage.removeItem("token")
                  this.props.history.replace('/login/')  
            }}>
            <RollbackOutlined /> 退出
                </a>
        </Menu.Item>
            </Menu>}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar icon={<UserOutlined />} />
                    </a>         
                </Dropdown>  
                &nbsp;
                &nbsp;
                &nbsp;
                <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              语言 <DownOutlined />
            </a>
            </Dropdown>
                </Fragment>
        );
    }
}

export default withRouter(dropdown)