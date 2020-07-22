import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Manage from './pages/manage/index'
import BannerList from './pages/banner/bannerList'
import BannerAdd from './pages/banner/bannerAdd'
import Aminds from './pages/Administior'
import BannerUp from './pages/banner/bannerUpdata'
import kindLind from './pages/kind/kindList'
import GoodsList from './pages/Goods/goodsList'
import GoodsAdd from './pages/Goods/goodsAdd'
import User from './pages/User/index'
import './App.scss'
class App extends Component{
  render(){
    return(
      <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
              <Route path='/admin/manage' component={Manage}></Route>
              <Route path='/admin/bannerList' component={BannerList}></Route>
              <Route path='/admin/bannerAdd' component={BannerAdd}></Route>
              <Route path='/admin/administior' component={Aminds}></Route>
              <Route path='/admin/user' component={User}></Route>
              <Route path='/admin/bannerUpdata/:id' component={BannerUp}></Route>
              <Route path='/admin/kind' component={kindLind}></Route>
              <Route path='/admin/goodsList' component={GoodsList}></Route>
              <Route path='/admin/goodsAdd' component={GoodsAdd}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    );
  }
}
export default App;
  