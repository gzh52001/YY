import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class Message extends Component{
    render(){
        return(
            <div className='message'> 
            <Button variant="contained" color="primary">
            消息
          </Button>
          </div>
        )
    }
}
export default Message