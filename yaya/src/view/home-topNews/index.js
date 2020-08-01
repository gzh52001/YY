import React,{Component} from 'react'
import { Carousel } from 'antd';
import appjson from '../../api/test'
import '../../style/topnews.scss'
class TopNews extends Component{
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
        const {content}=this.state
        return(
            <div className='TopNews'> 
                <div className='TopNews-count-1'>
                <Carousel autoplay>
               {
            content[0]?content[0].map(item=>(
            <div key={item.id}>
            <img src={item.imagePath}/>
            <div className="TopNews-count-1-div"><p><span>{item.title}</span></p></div>
            </div>
            
                   )):""
               }
        </Carousel>
                </div>


               <>
                {
            content[1]?content[1].map(item=>{
                     if(item.big==0){
                     return   (
                     <div  className='TopNews-count-2' key={item.id}> 
                        <img src={item.imagePath}/>
                        <div className='TopNews-count-2-div'>
                     <p>{item.title}</p>
                     <div><span>小丫</span><span style={{float:"right"}}>{item.pageView}阅读</span></div>
                     </div>
                        </div>
                        ) 
                     }else{
                    return (   
                        <div className='TopNews-count-1' key={item.id}>
                             <div >
                             <img src={item.imagePath}/>
                         <div className="TopNews-count-1-div"><p><span>{item.title}</span></p></div>
                         </div>
                        </div>
                          )
                     }
                   }):""
               }
               </>
          

              {/* <div  className='TopNews-count-2'> 
              <img src='https://img2.yaya.cn/newstatic/1935/01a9d812e53176f3.jpeg' />
              <p>魅族17系列正式发布，性能强拍照美！3699元起售</p>
              <div><span>小丫</span><span style={{float:"right"}}>36阅读</span></div>
              </div>  */}
               <div className="afterService-count-6"><span>没有了</span></div>
          </div>
          
        )
    }
}
export default TopNews