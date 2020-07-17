import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import '../../style/home.scss'
class Home extends Component{
    render(){
        return(
            <div className='home'>
            <div className='home-count-1'>
            <Button variant="contained" color="primary">
            首页
          </Button>
          </div>
          </div>
        )
    }
}
export default Home