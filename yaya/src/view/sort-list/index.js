import React from 'react';
import { Input, Menu } from 'antd';
import { SearchOutlined, LeftOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../../style/sort-list.scss'
import appjson from '../../api/test'
class SortList extends React.Component {
    constructor() {
        super()
        this.state = {
            list:[],

        }
    }
    componentDidMount() {
        // this.place()

    }
   async componentWillMount() {
       console.log(this.props);
     const id=this.props.match.params.id
        try{
            let a=await appjson.getlist(id)
           
            this.setState({
                list:a.data.data.product.list
            })
             console.log(this.state.list);
        }catch(err){
            console.log(err);
        }


    }

    //返回上一层
    chage = () => {
        // console.log(this.props);
        this.props.history.goBack();
    }
    render() {
        const { SubMenu } = Menu;
        return (
            <div className='sortList'>
                <div className='sortList-count-1'>
                    <div onClick={this.chage}><LeftOutlined className='sortList-count-1-1' /></div>
                    <Input size="large" placeholder='华为' prefix={<SearchOutlined />} />
                    <UnorderedListOutlined className='sortList-count-1-2' />
                </div>
            <div className='sortList-count-2'>
            <Menu onClick={this.handleClick}
            //  selectedKeys={[current]}
             mode="horizontal">
       <SubMenu title="综合">
            <Menu.Item key="setting:1">升序</Menu.Item>
            <Menu.Item key="setting:2">降序</Menu.Item>
        </SubMenu>
        <SubMenu title="价格">
            <Menu.Item key="setting:3">升序</Menu.Item>
            <Menu.Item key="setting:4">降序</Menu.Item>
        </SubMenu>
        <SubMenu title="最新上架">
            <Menu.Item key="setting:5">升序</Menu.Item>
            <Menu.Item key="setting:6">降序</Menu.Item>
        </SubMenu>
        <SubMenu title="筛选">
            <Menu.Item key="setting:7">升序</Menu.Item>
            <Menu.Item key="setting:8">降序</Menu.Item>
        </SubMenu>
      </Menu>
            </div>
        <div className='sortList-count-3'>
            <ul className='sortList-count-3-ul'>
                {
                this.state.list.map((item,idx)=>(
                <li className='sortList-count-3-li' key={item.imagePath}>
                  <img src={item.imagePath} />
                  <div className='sortList-count-3-right'>
                      <p className='sortList-count-3-right-1'>{item.name}</p>
                <ul className='sortList-count-3-right-2'>{item.tag.map(item=>(<li key={item}>{item}</li>))}</ul>
                      <span className='sortList-count-3-right-3'>￥{item.price}</span>
                <div className='sortList-count-3-right-4'><span className='sortList-count-3-right-4-span'>{item.commentCount}条评论</span><span>{item.praiseRate?item.praiseRate+'好评':''}</span></div>
                        <span className='sortList-count-3-right-5'>{item.rank.text}</span>
                <div className='sortList-count-3-right-6'><div>{item.bargain.price?"优品¥"+item.bargain.price:''}</div><div>{item.secondHand.price?'良品'+item.secondHand.price:""}</div></div>
                  </div>
                 </li> 
                    ))
                }
                 {/* <li className='sortList-count-3-li'>
                  <img src="https://img2.yaya.cn/pic/product/440x440/20200524222618174.jpg.webp" />
                  <div className='sortList-count-3-right'>
                      <p className='sortList-count-3-right-1'>华为 P40 全网通5G版 亮黑色 8GB+128GB 标准版 </p>
                      <ul className='sortList-count-3-right-2'><li>面部识别解锁</li><li>面部识别解锁</li><li>面部识别解锁</li></ul>
                      <span className='sortList-count-3-right-3'>￥4999</span>
                      <div className='sortList-count-3-right-4'><span className='sortList-count-3-right-4-span'>33条评论</span><span>100%好评</span></div>
                      <span className='sortList-count-3-right-5'>手机单品当日销量第5名</span>
                      <div className='sortList-count-3-right-6'><div>优品¥4199</div><div>优品¥4199</div></div>
                  </div>
                 </li> */}
            </ul>
        </div>
            </div>
        )
    }
}
export default SortList