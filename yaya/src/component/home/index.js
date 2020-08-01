import React,{Component} from 'react'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import { Input, Menu } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import '../../style/home.scss'
import appjson from '../../api/test'
// import appjson from '../../api/test'

import Recommend from '../../view/home-recommend'
import Recovery from '../../view/home-recovery'
import AfterService from '../../view/home-afterService'
import TopNews from '../../view/home-topNews'
class Home extends Component{
    state={
        current:'',
        list:[]
    }
   async componentWillMount(){
       
    //    console.log("111",this.props.history.location.pathname);
       let id=this.props.match.params.id
    //    console.log('123',id);
       if(!id){
          id=0
       }
       try{
            let a=await appjson.getHomePage(id)
            this.setState({
                list:a.data.data.label,
                current:a.data.data.label[0].id
            })
            this.props.history.push('/home/recommend/'+this.state.current)
            // console.log(a.data.data.label[0]);
       }catch(err){
           console.log(err);
       }
    }

    componentDidMount() {
        if (this.scroll) {
         this.scroll.addEventListener("scroll", e => {
           const { clientHeight, scrollHeight, scrollTop } = e.target;
           // const { clientHeight, scrollHeight, scrollTop } = this.scroll;
    
           const isBottom = scrollTop + clientHeight + 20 > scrollHeight;
           console.log(scrollTop, clientHeight, scrollHeight, isBottom);
         });
       }
     }
    handleClick = e => {
        // console.log('click ', e);
        this.setState({ current: e.key });
      };
    tiao=(id)=>{
        // console.log(id);
        // console.log("666",this.props);
        this.props.history.push('/home/'+id.b+'/'+id.a)
    }
    render(){
          const {current}=this.state
        return(
            <div className='home'>
            <div  className='home-count-1'>
                <div className='home-count-2'>
               <Input size="large" prefix={<SearchOutlined />} />
            </div>
            <div className='home-count-3'>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                {
                    this.state.list.map((item,idx)=>(
                         <Menu.Item key={item.id} onClick={this.tiao.bind(this,{a:item.id,b:item.tabKey})}>
                            {item.title}
                         </Menu.Item>
                    ))
                }
            </Menu>
            </div>
            </div>
            <div className='home-count-4'>
            <Switch>
            <Route  path="/home/recommend/:id" component={Recommend}/> {/* 推荐 */}
            <Route  path="/home/recovery/:id" component={Recovery}/>{/* 以旧换新 */}
            <Route  path="/home/afterService/:id" component={AfterService}/>{/* 手机快修 */}
            <Route  path="/home/topNews/:id" component={TopNews}/>{/* 查询 */}
            </Switch>
            </div>
            </div>
        )
    }
}
// Home=withRouter(Home)
export default Home