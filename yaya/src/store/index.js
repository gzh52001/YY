import {createStore} from 'redux'


//初始状态
const initState={
    goodslist:[],
    totalPrice:0,
    step:0
}

//reducer 纯函数 用于指定state修改逻辑（state数据唯一修改方式），它接受当前state和acton，并根据state和acton的值来返回新的state
//指定state的修改逻辑:创建一个新的并返回（覆盖旧数据）
function reducer(state=initState,action){
    // console.log("333",state.goodslist);
    switch(action.type){
//添加商品
case 'add_to_cart':
    //返回一个新的state，这个state会自动覆盖store中的旧数据
    return{
        //先保存原来的数据
        ...state,
                 //新数据 ，原来的购物车数据
        goodslist:[action.goods,...state.goodslist]

    }
//删除商品
case 'remove_from_cart':
    return{
        //先保存原来的数据
        ...state,
                 //新数据 ，原来的购物车数据
        goodslist:state.goodslist.filter(item=>item.goods_id!=action.goods_id)
    }
//修改商品
case 'change_qty':
    return{
        //先保存原来的数据
        ...state,
                 //新数据 ，原来的购物车数据
        goodslist:state.goodslist.map(item=>{
            if(item.goods_id===action.goods_id){
                item.goods_qty=action.goods_qty
            }
            return item
        })
    }
//清空商品
case 'clear_cart':
    
    return{
        goodslist:[]

    }

default:
    return state
 }   
}
const store=createStore(reducer)
export default store