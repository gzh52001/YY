import React, {Component} from 'react';
import { Layout,Button } from 'antd';
import Dropdow from '../../components/Dropdown/index'
import CustomNav from '../../components/CustomNav'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import style from './admin.scss'
const { Header, Sider, Content } = Layout;
class Admin extends Component{
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <Layout className={style.wrapper}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
        <CustomNav></CustomNav>
        </Sider>
        <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
               
              <Button  type="link" onClick={this.toggle} style={{ marginBottom: 16,border:'none' }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      
                <div style={{float:"right",marginRight:40,width:100}}><Dropdow>   </Dropdow> </div>     
          </Header>
              <Content className={style.content}>
                {this.props.children}
          </Content>
        </Layout>
      </Layout>
        );
    }
  }
  export default Admin;
  