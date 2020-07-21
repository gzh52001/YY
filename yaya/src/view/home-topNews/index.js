import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class TopNews extends Component{
    render(){
        return(
            <div className='message'> 
            <Button variant="contained" color="primary">
            头条
          </Button>
          </div>
        )
    }
}
export default TopNews