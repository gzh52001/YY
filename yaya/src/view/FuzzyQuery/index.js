import React from 'react';
import { Input, Menu } from 'antd';
import { SearchOutlined, LeftOutlined, UnorderedListOutlined ,RightOutlined} from '@ant-design/icons';
import '../../style/FuzzyQuery.scss'
import appjson from '../../api/test'

class FuzzyQuery extends React.Component {
    constructor() {
        super()
        this.seach = this.seach.bind(this)
        this.state = {
            list: [],
            place: [],
            timer:"",

        }
    }
    componentDidMount() {
        // this.place()
        console.log(111); 
    }
    componentWillMount() {
        console.log(this.props);
        
       


    }
    //模糊查询
    async seach(id) {
        let data = await appjson.searchForm(id)
        this.setState({
            list: data.data.data
        })

    }
//     async place() {
//         let data = await appjson.searchPlaceholder()
//         let num = 0
//         let placeLength = data.data.data.searchHints.length
//         let place = data.data.data.searchHints
//    this.state.timer= setInterval(() => {
//             num++
//             if (num === placeLength) {
//               num = 0  
//             }
//             console.log(place[num]);
//             this.setState({
//            place: place[num]
//           })
//         }, 4000)
//         this.setState({
//             place: place[num]
//            })
//     }

    //返回上一层
    chage = () => {
        // console.log(this.props);
        this.props.history.push('/sort')
    }
    huancun=(item)=>{
    //    this.setState({bb:item})
        let aa=[]
        let it=[]
        it=JSON.parse(localStorage.getItem("list")) 
        if(it){
        it.map((itr)=>{
             if(itr!=item){
                it.push(item) 
            }
           localStorage.setItem("list",JSON.stringify(it) )
        }
           
        )
            
      
        }else{
            aa.push(item)
            localStorage.setItem("list", JSON.stringify(aa))
        }

    }
    render() {
        let { list,place } = this.state
        return (
            <div className='FuzzyQuery'>
                <div className='FuzzyQuery-count-1'>
                    <div onClick={this.chage}><LeftOutlined className='FuzzyQuery-count-1-1' /></div>
                   <Input size="large" placeholder={place?place:'华为D'} prefix={<SearchOutlined />} onChange={
                        (e) => {
                            this.seach(e.target.value)
                        }
                    } />
                    <UnorderedListOutlined className='FuzzyQuery-count-1-2' />
                </div>
                <div className='FuzzyQuery-count-2'>
                    <ul>
                    {list.map((item, index) => {
                        return (
                            <li key={index} onClick={()=>{
                                clearInterval(this.state.timer)
                              this.huancun(item.name)
                                this.props.history.push('/search-list/'+item.productId+'&'+item.name)
                            }}><i><SearchOutlined /></i><span>{item.name}</span><i className='FuzzyQuery-count-2-i'><RightOutlined /></i></li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default FuzzyQuery