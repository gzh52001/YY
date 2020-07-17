import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
// import '../style/main.scss'
class Sort extends Component{
    render(){
        return(
            <div className='sort'> 
            <Button variant="contained" color="primary">
            分类
          </Button>
          </div>
        )
    }
}
export default Sort