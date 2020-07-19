import React,{Component} from 'react'
import { Input ,Menu,Form} from 'antd';
import { SearchOutlined ,LeftOutlined,UnorderedListOutlined} from '@ant-design/icons';
import appjson from '../../api/test'
import '../../style/sort.scss'

const FormItem = Form.Item;
class Sort extends Component{
    state={
        //接口数据
        list:[],
        listLeft:[],
        listRight:[]

    }
   async componentDidMount(){
        try{
        const a= await appjson.getapp()
          this.setState({
              //分类接口所有数据
            list:a.data.data,
            //分类左边数据
            listLeft:a.data.data.map(item=>item.title),
            //分类的右边数据 加个[]便于循环渲染
            listRight:[a.data.data[0]]
          }) 
         console.log(this.state.list);
        }catch(err){
            console.log(err);
        }
        
        
    }
    //返回首页
    chage=()=>{
    // console.log(this.props);
    this.props.history.push('/home')
    }
    handleClick=(e)=>{
        //e.key：点击列表切换的key值
        console.log(e.key);
        const {list,listRight}=this.state
        this.setState({
            //把list中的下标[key-1]放入listRight
            listRight:[list[e.key-1]]
        })
       
    }
    coll=(e)=>{
        e=e[0]
        console.log(e);
         this.props.history.push('/sort-list/'+e)
    }
    sousuo=()=>{
        this.props.history.push('/FuzzyQuery')
    }
    render(){
        const {listRight}=this.state
        // const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return(
    <div className='sort'> 
        <div className='sort-count-1'>
            <div onClick={this.chage}><LeftOutlined className='sort-count-1-1'/></div>
            <div onClick={this.sousuo}><Input size="large"  prefix={<SearchOutlined/>} /></div>
            <UnorderedListOutlined className='sort-count-1-2'/>
             </div>
        <div className='sort-count-2'>
             <Menu className='sort-count-2-left'
        onClick={this.handleClick}
        inlineIndent='16'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {
            this.state.listLeft.map((item,idx)=>{
                return <Menu.Item key={idx+1}>{item}</Menu.Item>
            })
        }
      </Menu>
            <div className='sort-count-2-right'>
                {
                    listRight.map((item,idex)=>(
                        <div key={idex}>
                            <img src={item.picture} />
                                {
                                    item.children.map((i,m)=>(
                                        <ul key={m}>
                                        <h4>{i.title}</h4>
                                            {
                                                i.children.map((s,o)=>(
                                                    <li key={s.coll} onClick={this.coll.bind(this,s.coll.split('/')[4].split('.'))}>
                            <img src={s.picture} />
                                                        <span>{s.title}</span>
                                                    </li>
                                                                      )) 
                                            }
                                         </ul> 
                                                             ))     
                                }
               
                        </div>
                                                ))
                }
             {/* <img src="https://img2.yaya.cn/newstatic/1528/01ac69e87611ebce.jpg" />
                <ul>
                     <h4>精彩继续</h4>
                    <li>
                        <img src="https://img2.yaya.cn/newstatic/1381,018b0ce9d2311630.png" />
                        <span>华为</span>
                    </li>
                </ul>  */}

            </div>
            </div>
          </div>
        )
    }
}
export default Sort