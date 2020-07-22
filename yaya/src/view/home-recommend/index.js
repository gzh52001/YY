import React,{Component} from 'react'
import { Carousel } from 'antd';
import '../../style/recommend.scss'
import appjson from '../../api/test'
class Recommend extends Component{
    state={
        list:[]
    }
   async componentWillMount(){
        // console.log("recommend",this.props.match.params.id);
       const id=this.props.match.params.id
        try{
            let a=await appjson.getHomePage(id)
            this.setState({
                list:a.data.data.container.floor
            })
            // console.log(a.data.data.container.floor);
        }catch(err){
            console.log(err);
        }

    }
    render(){
        const {list}=this.state
        return(
            <div className='recommend'> 
           <div className="recommend-count-1">
           <Carousel autoplay>
               {
            list[0]?list[0].content.map(item=>(
            <div key={item.id}>
            <img src={item.imagePath}/>
            </div>
            
                   )):""
               }
 
        </Carousel>
           </div>
           <ul className="recommend-count-2">
               {
                list[1]?list[1].content.map(item=>(<li  className="recommend-count-2-1" key={item.id}><img src={item.imagePath}/></li>)):''  
               }
           </ul>
           <div className="recommend-count-3">
               <img className="recommend-count-3-1" src="https://img2.yaya.cn/newstatic/1380/01dc17e3606e22d3.png"/>
               <img className="recommend-count-3-1" src='https://img2.yaya.cn/newstatic/1382/01dc181128e0c0d0.png'/>
           </div>
           <div className='recommend-count-4'>
               <div className='recommend-count-4-1'><b>iPhone 6/6s/7专属推荐</b><div className='recommend-count-4-2'><span>更多</span> <i></i></div></div>
               <ul className='recommend-count-4-3'>
                   <li className='recommend-count-4-3-li'><img className='recommend-count-4-3-li-img' src='https://img2.yaya.cn/pic/product/440x440/20190429144118705.jpg.webp'/><p className='recommend-count-4-3-li-p'>自带苹果输出线</p></li>
                   <li className='recommend-count-4-3-li' style={{backgroundImage:'url("https://img2.yaya.cn/newstatic/1381/01dbf1df88523d05.png")'}}><img className='recommend-count-4-3-li-img' src='https://img2.yaya.cn/pic/product/440x440/2017051819474717.jpg.webp'/><p className='recommend-count-4-3-li-p'>苹果原装 品质之选</p></li>
                   <li className='recommend-count-4-3-li' style={{backgroundImage:'url("https://img2.yaya.cn/newstatic/1381/01dbf1e700a333e2.png")'}}><img className='recommend-count-4-3-li-img' src='https://img2.yaya.cn/pic/product/440x440/20190429153223330.jpg.webp'/><p className='recommend-count-4-3-li-p'>原装品质 佩戴舒适</p></li>
               </ul>
           </div>

           <div className='recommend-count-5'>
               <div className='recommend-count-5-1'><b>本机维修</b><div className='recommend-count-5-2'><span>更多机型</span> <i></i></div></div>
               <ul className='recommend-count-5-3'><li className='recommend-count-5-3-li'><p>视频故障</p><p style={{color:"red"}}>￥145</p></li><li className='recommend-count-5-3-li'><p>充电故障</p><p style={{color:"red"}}>￥99</p></li><li className='recommend-count-5-3-li'><p>容量升级</p><p style={{color:"red"}}>￥45</p></li><li className='recommend-count-5-3-li'><p>视频故障</p><p style={{color:"red"}}>￥145</p></li></ul>
           </div>
           
           <div className='recommend-count-6'>
               <img className='recommend-count-6-1' src='https://img2.ch999img.com/newstatic/1379/014a4bf6b75bbe8a.png.webp'/>
         <div  className='recommend-count-6-2'>
           <Carousel dotPosition='right' dots={false} autoplay>
               {
                   list[6]? list[6].content.map(item=>(
            <div className="recommend-count-6-2-div" key={item.id}>
            <span  className="recommend-count-6-2-span-1">{item.label}</span>
                   <span className="recommend-count-6-2-span-2">{item.title}</span>
            <img className="recommend-count-6-2-img"  src={item.picture}/>
          </div>
                   )):""
               }
          
        </Carousel>
           </div>
         </div>
            
        {/* <div className='recommend-count-7'>
            <div className='recommend-count-7-1' >精品推荐</div>
            <div className='recommend-count-7-2' style={{backgroundImage:'url("https://img2.yaya.cn/newstatic/1380/01dbf845c09cfea6.jpg")'}}><img className='recommend-count-7-2-img' src="https://img2.yaya.cn/pic/product/216x216/20200709160335491.jpg.webp"/></div>
               <ul  className='recommend-count-7-ul'>
                <li className='recommend-count-7-il'><img className='recommend-count-7-il-img' src="https://img2.yaya.cn/pic/product/216x216/20200423180917426.jpg.webp"/><p className="recommend-count-7-il-p">华为  荣耀 X10 Max 全网通5G版</p><p className="recommend-count-7-il-p" style={{color:"red",fontWeight:700}}>￥1234</p></li> 
               </ul>
        </div> */}
               {
                   list?list.map((item,idx)=>{
                    if(idx>6&&idx<11){
                   return  (
                    <div className='recommend-count-7' key={idx}>
                    <div className='recommend-count-7-1' >{item.content[0].title}</div>
                    <div className='recommend-count-7-2' style={{backgroundImage:`url(${item.content[0].imagePath})`}}><img className='recommend-count-7-2-img' src="https://img2.yaya.cn/pic/product/216x216/20200709160335491.jpg.webp"/></div>
                       <ul  className='recommend-count-7-ul'>
                          
                             {
                             item.content[0].product.map(item=>(
                             <li className='recommend-count-7-il' key={item.ppid}><img className='recommend-count-7-il-img' src={item.imagePath}/><p className="recommend-count-7-il-p">{item.title}</p><p className="recommend-count-7-il-p" style={{color:"red",fontWeight:700}}>￥{item.price}</p></li>   
                             ))}
                           
                        <li className='recommend-count-7-il'><img className='recommend-count-7-il-img' src="https://img2.yaya.cn/pic/product/216x216/20200423180917426.jpg.webp"/><p className="recommend-count-7-il-p">华为  荣耀 X10 Max 全网通5G版</p><p className="recommend-count-7-il-p" style={{color:"red",fontWeight:700}}>￥1234</p></li> 
                       </ul>
                </div>
                   )   
                    }
                   }):""
               }


               <div className='recommend-count-8'><img src="https://img2.yaya.cn/newstatic/1382/01dbf258f0ad9735.jpg.webp"/></div>
               <ul className='recommend-count-9'>
                   {
                       list[13]?list[13].content.map(item=>(
                        <li className='recommend-count-9-li' key={item.ppid}>
                        <img  className='recommend-count-9-img' src={item.imagePath}/>
                       <div>{item.title}</div>
                       <p>{item.sellingPoint}</p>
                       <span>￥{item.price}</span>
                    </li>
                       )):''
                   }
                   {/* <li className='recommend-count-9-li'>
                       <img  className='recommend-count-9-img' src="https://img2.yaya.cn/pic/product/440x440/20200706114202400.jpg.webp"/>
                       <div>Apple iPhone 11 全网通版</div>
                       <p>全新双摄系统取景</p>
                       <span>￥123456</span>
                   </li> */}
               </ul>
          </div>
        )
    }
}
export default Recommend