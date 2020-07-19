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
import '../style/main.scss'
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
           <Route  path="/sort-list/:id" component={SortList}/>分类-商品列表
           <Route  path="/FuzzyQuery" component={FuzzyQuery}/>{/* 模糊搜索 */}
           <Route  path="/notfount" component={()=>{
               return <div>404</div>
           }}/>

            <Redirect from='/' to='/home' exact/>
            <Redirect to='/notfount'/>
           </Switch>
          </div>
        )
    }
}
export default Math