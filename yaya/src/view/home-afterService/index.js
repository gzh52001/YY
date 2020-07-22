import React,{Component} from 'react'
import { Carousel } from 'antd';
import appjson from '../../api/test'
import '../../style/afterService.scss'
class AfterService extends Component{
    state={
        list:[],
        content:[]
    }
    async componentWillMount(){
        // console.log("recovery",this.props.match.params.id);
       const id=this.props.match.params.id
        try{
            let a=await appjson.getHomePage(id)
            this.setState({
                list:a.data.data.container.floor,
                content:a.data.data.container.floor.map(item=>item.content)
            })
            console.log(a.data.data.container.floor);
            console.log('111',this.state.content);
        }catch(err){
            console.log(err);
        }

    }
    render(){
        const {list} =this.state
        const {content}=this.state
        return(
            <div className='afterService'> 
            <div className='afterService-count-1'>
            <Carousel autoplay>
               {
            content[0]?content[0].map(item=>(
            <div key={item.id}>
            <img src={item.imagePath}/>
            </div>
            
                   )):""
               }
        </Carousel>
            </div>
               
            <ul className="afterService-count-2">
               {
                content[1]?content[1].map(item=>(<li  className="afterService-count-2-1" key={item.id}><img src={item.imagePath}/></li>)):''  
               }
           </ul>

           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/768/36b489156de0f9.png.webp'/>
           </div>
           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/918/70fa7fb5a3e4ad.png.webp'/>
           </div>
           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/767/340597a5ea0292.png.webp'/>
           </div>
          
           <div className="afterService-count-4">
           {
                content[5]?content[5].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div>
           <div className="afterService-count-4">
           {
                content[6]?content[6].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div>
          
           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/767/34063e94ee081c.png.webp'/>
           </div>
           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/765/340654a87011c6.png.webp'/>
           </div>
          
           <div className="afterService-count-5">
           {
                content[9]?content[9].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div> 
          
           <div className="afterService-count-3">
               <img src='https://img2.yaya.cn/newstatic/766/3406646dfcebca.png.webp'/>
           </div>
          
          
           <div className="afterService-count-5"  style={{height:125}}>
           {
                content[11]?content[11].map(item=><img  key={item.id} src={item.imagePath}/>):''  
            }
           </div> 


           <div className="afterService-count-6"><span>没有了</span></div>
          
          
          </div>
        )
    }
}
export default AfterService