import React, { Component } from 'react';
// import './user.sass'
import {Card,Table,Button,Modal,Input,notification,Spin,Popconfirm,message}from 'antd'
import adminapi from '../../api/admin'
import { PlusOutlined ,LockOutlined,UserOutlined} from '@ant-design/icons'; 


class Admins extends Component {
  state = {
      dataSource:[],
      visible:false,
      spinning:false,
      columns:[
        {
          title: 'id', //显示
          dataIndex: 'id',//数据索引字段
          key: 'id', //key值 
        },
        {
          title: '账号',
          dataIndex: 'username',
          key: 'username',
        },
        {
            title: '操作',
            key: 'action',
            render:(record)=>{
              return(
                  <div>
                       <Popconfirm
                         title="确认删除此管理员吗？"
                         onConfirm={()=>{
                                this.del(record.id)
                                console.log(record.id);
                         }}
                         onCancel={()=>{
                             message.error("取消删除")
                         }}
                        >  
                         <Button type='danger' size='small' >删除</Button>
                  </Popconfirm>
                  </div>
              )
            }
          },
      ]
}
del=async(id)=>{
   console.log(id)
   let result =await adminapi.del(id)
   console.log(result);
   this.refreshList()
   if(result.data.flag){return false}
  //  console.log(result);
  //  this.refreshList()
}
handleOk=async()=>{
    let username = this.refs.us.state.value
    let password = this.refs.ps.state.value
   
    let result =await adminapi.add({username,password})
    // if(result.data.flag){return notification.success({description:'用户添加成功，恭喜你',message:'成功',duration:1})}
    // notification.error({description:'用户添加失败，请重试',message:'错误',duration:2})
    this.setState({visible:false})
    this.refreshList()
}
handleCancel=()=>{   
   this.setState({visible:false})
}
  //刷新列表页面
  refreshList=async()=>{
      this.setState({spinning:true})
    let result =await adminapi.List()
      this.setState({dataSource:result.data.data.p,spinning:false})
      console.log(result);
  }
  发起请求渲染界面
  async componentDidMount(){
      this.refreshList()
  }
    render() {
        let {dataSource,visible,spinning,columns}= this.state
        return (
            <div className="admins">
               <Card title='管理员列表'>
               <Button type="primary" icon={<PlusOutlined />}
               onClick={()=>{
                  this.setState({visible:true})
               }}>添加</Button>
               <Spin tip="Loading..." spinning={spinning}>
                <Table dataSource={dataSource} columns={columns} rowKey='id' />
               </Spin>
               </Card>
               <Modal
                 title="管理员添加"
                 visible={visible}
                 onOk={this.handleOk}
                 onCancel={this.handleCancel} 
                   
              >
              
               <Input
                placeholder="username"
                ref='us' 
                prefix={<UserOutlined className="site-form-item-icon" />}
                maxLength={9} minLength={3}
                />
            
               
               <br/>
               <br/>
               <Input placeholder="password" ref='ps' 
               prefix={<LockOutlined className="site-form-item-icon" />}
               maxLength='9' minLength='4'
               />
        </Modal>
            </div>
        );
    }
}

export default Admins;