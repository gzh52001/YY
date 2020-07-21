import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class Recovery extends Component{
    render(){
        return(
            <div className='message'> 
            <Button variant="contained" color="primary">
            以旧换新
          </Button>
          </div>
        )
    }
}
export default Recovery