import React,{Component} from 'react'
import { Carousel } from 'antd';
import appjson from '../../api/test'
import '../../style/recovery.scss'
class Recovery extends Component{
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
            <div className='recovery'> 
            <div className='recovery-count-1'>
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

            <ul className="recovery-count-2">
               {
                content[1]?content[1].map(item=>(<li  className="recovery-count-2-1" key={item.id}><img src={item.imagePath}/></li>)):''  
               }
           </ul>

           <div className="recovery-count-3">
           {
                content[2]?content[2].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div> 
           
           <div className="recovery-count-4">
           {
                content[3]?content[3].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div>
           <div className="recovery-count-4">
           {
                content[4]?content[4].map(item=><img  key={item.id} src={item.imagePath}/>):''  
               }
           </div>

           <div className="recovery-count-5">
               <img src='https://img2.yaya.cn/newstatic/766/2b5c122e5bb22f.png.webp'/>
           </div>

           <ul className="recovery-count-2" style={{margin:0}}>
               {
                content[6]?content[6].map(item=>(<li  className="recovery-count-2-1" key={item.id}><img src={item.imagePath}/></li>)):''  
               }
           </ul>
           <ul className="recovery-count-2" style={{margin:0}}>
               {
                content[7]?content[7].map(item=>(<li  className="recovery-count-2-1" key={item.id}><img src={item.imagePath}/></li>)):''  
               }
           </ul>
           
           <div className="recovery-count-5">
               <img src='https://img2.yaya.cn/newstatic/766/2b5c122e5bb22f.png.webp'/>
           </div>
           
           <ul className="recovery-count-6">
               {/* <li>
                   <img src='https://img.zlf.co/pic/product/440x440/20170607101315624.jpg.webp'/>
                   <div className="recovery-count-6-div">
                    <div>苹果 17年 15寸 MacBook Pro</div>
                    <p>预估回收价</p>
                    <span>￥678</span>
                   </div>
               </li> */}
               {
                 content[9]?content[9].map(item=>(<li key={item.id}>
                    <img src={item.imagePath}/>
                    <div className="recovery-count-6-div">
                    <div>{item.title}</div>
                    <p>{item.hint}</p>
                    <span>￥{item.price}</span>
                    </div>
                </li>)):''    
               }
           </ul>

           <div className="recovery-count-5">
               <img src='https://img2.yaya.cn/newstatic/768/2b5c1bc2b2d9ff.png.webp'/>
           </div>

           <div className="recovery-count-3"  style={{height:125}}>
           {
                content[12]?content[12].map(item=><img  key={item.id} src={item.imagePath}/>):''  
            }
           </div> 


           <div className="recovery-count-7"><span>没有了</span></div>
          </div> 
        )
    }
}
export default Recovery