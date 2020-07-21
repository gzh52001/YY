import React,{Component} from 'react'
import '../../style/DetailsPage.scss'
import appjson from '../../api/test'
import { Carousel } from 'antd';
// import appjson from '../../api/test'
class DetailsPage extends Component{
    state={
        list:[],
    }
   async componentWillMount(){
       const id =this.props.match.params.id
       try{
          let a=await appjson.getDetails(id) 
          console.log("456",a.data.data);
          this.setState({
              list:a.data.data,
          })
        //   console.log("123",this.state.list.bargain.price);
       }catch(err){
        console.log(err);
       }
       
    }
    chage = () => {
        // console.log(this.props);
        this.props.history.goBack();
    }
    render(){
        const {list}=this.state
        return(
            <div className='DetailsPage'>
            <div className='DetailsPage-count-1'>
            <Carousel autoplay>
            {
            list.pictures? list.pictures.map(item=>(
            <div key={item}>
               <h3><img src={item}/></h3>
            </div>
               )) :""
               
            }
              
            </Carousel>
          </div>


          <div className='DetailsPage-count-2'>
              <div onClick={this.chage}><img className='DetailsPage-count-2-left' src='data:image/png;base64,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'/></div>
             <div ><img className='DetailsPage-count-2-right' src='data:image/png;base64,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'/></div>
          </div>


          <div className='DetailsPage-count-3'>
            {/* <p className='DetailsPage-count-3-1'>￥4388</p> */}
        <p className='DetailsPage-count-3-1'>￥{list.price}</p>
        <p className='DetailsPage-count-3-2'>{list.profile}</p>
            <p className='DetailsPage-count-3-3'><span>{list.productName} {list.skuName} </span></p>
            <p className='DetailsPage-count-3-4'>
              {
                list.tags?list.tags.map(item=>(<span className='DetailsPage-count-3-4-1' key={item}>{item}</span>)):""
              }
              </p><br/>
            <ul className='DetailsPage-count-3-5'><li className='DetailsPage-count-3-5-1'>价格走势</li><li className='DetailsPage-count-3-5-1'>降价通知</li><li className='DetailsPage-count-3-5-1'>商品对比</li><li className='DetailsPage-count-3-5-1'>开箱展示</li></ul>
            <p className='DetailsPage-count-3-6'>温馨提示：活动版仅限云南省办理移动5G套餐客户购买</p>
          </div>

          <div className='DetailsPage-count-4'>
            <div className='DetailsPage-count-4-1'><span className='DetailsPage-count-4-1-span'>规格</span></div>
            <ul className='DetailsPage-count-4-2'>
              {
                list.params?list.params.map(item=>(<li className='DetailsPage-count-4-2-li' key={item.key}><p>{item.key}</p><p>{item.value}</p></li>)):''
              }
              
              {/* <li className='DetailsPage-count-4-2-li'><p>屏幕尺寸</p><p>6.1英寸</p></li>
              <li className='DetailsPage-count-4-2-li'><p>屏幕尺寸</p><p>6.1英寸</p></li>
              <li className='DetailsPage-count-4-2-li'><p>主屏分辨率</p><p>6.1英寸111111111</p></li>
              <li className='DetailsPage-count-4-2-li'><p>主屏分辨率</p><p>6.1英寸111111111</p></li>
              <li className='DetailsPage-count-4-2-li'><p>主屏分辨率</p><p>6.1英寸111111111</p></li>
              <li className='DetailsPage-count-4-2-li'><p>主屏分辨率</p><p>6.1英寸111111111</p></li>
              <li className='DetailsPage-count-4-2-li'><p>主屏分辨率</p><p>6.1英寸111111111</p></li> */}
              </ul>
          </div>
          <div className='DetailsPage-count-5'>
        <div className='DetailsPage-count-5-1'><i></i><br/><span>客服</span></div>
        <div className='DetailsPage-count-5-1'><i style={{backgroundImage : `url("//img2.ch999img.com/pic/topic/2019030810424913.png")`}}></i><br/><span>客服</span></div>
        <div className='DetailsPage-count-5-1'><i style={{backgroundImage : `url("//img2.ch999img.com/pic/topic/2019030810423645.png")`}}></i><br/><span>客服</span></div>
          <div className='DetailsPage-count-5-jiaRu'><span>加入购物车</span></div>
          <div className='DetailsPage-count-5-liJi'><span>立即购买</span></div>
          </div>
          </div>
        )
    }
}

export default DetailsPage