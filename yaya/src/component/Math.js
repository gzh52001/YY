import React,{Component} from 'react'
// import Button from '@material-ui/core/Button';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './home'
import Sort from './sort'
import Message from './message'
import Mine from './mine'
import Shopp from './shopp'
import SortList from '../view/sort-list'
import FuzzyQuery from '../view/FuzzyQuery'
import SearchList from '../view/search-list'
import DetailsPage from '../view/DetailsPage'
import '../style/main.scss'
import Login from './login'
import Reg from './reg'
import Zskf from '../view/zskf'
class Math extends Component{
    render(){
        return(
            <div className='main'> 
            <Switch>
           <Route  path="/home" component={Home}/> {/* 首页 */}
           <Route  path="/sort" component={Sort}/>{/* 分类 */}
           <Route  path="/message" component={Message}/>{/* 消息 */}
           <Route  path="/shopp" component={Shopp}/>{/* 购物车 */}
           <Route  path="/mine" component={Mine}/>{/* 我的 */}
           <Route  path="/sort-list/:id" component={SortList}/>{/*分类-商品列表*/}
           <Route  path="/FuzzyQuery" component={FuzzyQuery}/>{/* 模糊搜索 */}
           <Route  path="/search-list/:id" component={SearchList}/>{/*模糊搜索-商品列表*/}
           <Route  path="/DetailsPage/:id" component={DetailsPage}/>{/* 详情页 */}
           <Route  path="/login" component={Login}/>
           <Route  path="/reg" component={Reg}/>
           <Route  path="/zskf" component={Zskf}/>
           <Route  path="/notfount" component={()=>{
               return <div>404</div>
           }}/>

            <Redirect from='/' to='/home/recommend' exact/>
            {/* <Redirect from='/home' to='/home/recommend/:id' exact/> */}
            <Redirect to='/notfount'/>
           </Switch>
          </div>
        )
    }
}
export default Math