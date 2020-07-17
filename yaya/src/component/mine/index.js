import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class Mine extends Component{
    render(){
        return(
            <div className='mine'> 
            <Button variant="contained" color="primary">
            我的
          </Button>
          </div>
        )
    }
}
export default Mine