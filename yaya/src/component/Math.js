import React,{Component} from 'react'
// import Button from '@material-ui/core/Button';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './home'
import Sort from './sort'
import Message from './message'
import Mine from './mine'
import Shopp from './shopp'
import '../style/main.scss'
class Math extends Component{
    render(){
        return(
            <div className='main'> 
            <Switch>
           <Route  path="/home" component={Home}/>
           <Route  path="/sort" component={Sort}/>
            <Route  path="/message" component={Message}/>
           <Route  path="/shopp" component={Shopp}/>
           <Route  path="/mine" component={Mine}/>
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