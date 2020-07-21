import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import '../style/footer.scss'
class Footer extends Component{
    state={
      list:[
          {
            label:'Recents', 
            value:'recents',
            icon:<HomeIcon />,
            path:'/'
          },
          {
            label:'Favorites', 
            value:'favorites',
            icon:<FlipToBackIcon />,
            path:'/sort'
          },
          {
            label:'Nearby', 
            value:'nearby',
            icon:<MessageIcon />,
            path:'/message'
          },
          {
            label:'Nearby', 
            value:'nearby',
            icon:<ShoppingCartIcon />,
            path:'/shopp'
          },
          {
            label:'Folder', 
            value:'folder',
            icon:<GroupIcon />,
            path:'/mine'
          },
      ]
    }
     
    handleChange = (e,path) => {
        console.log(this.props,path);
        this.props.history.push(path)
        
    }
    render(){
        return(
        <div className="footer">
            <div className='footer-count-1'>
    <BottomNavigation className='root' onChange={this.handleChange}>
        {
            this.state.list.map(item=>(
                <BottomNavigationAction key={item.path} label={item.label} value={item.path}  icon={item.icon} onChange={this.handleChange.bind(this,item.path)}/>
            ))
        }
      {/* <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
    </div>
            </div>
        )
    }
}
Footer=withRouter(Footer)
export default Footer