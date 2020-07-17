import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class Shopp extends Component{
    render(){
        return(
            <div className='shopp'> 
            <Button variant="contained" color="primary">
            购物车
          </Button>
          </div>
        )
    }
}
export default Shopp