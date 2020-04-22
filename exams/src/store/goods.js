
const goods = {
    state: {
        //商品的列表数据
        goods_list: [],
    },
    //操作state的方法
    mutations:{
        //开始的时候设置池子，设置商品列表数据
        setData(state,payload){
            //设置数据
            state.goods_list = payload;
        },
        //点击商品中的加入购物车
        toCart(state,index){
            //console.log(index);
            state.goods_list[index].if_cart = true;
        },
        //数量自增
        incr(state,index){
            state.goods_list[index].count++;
        },
        //数量自增
        decr(state,index){
            var count = state.goods_list[index].count;
            if(count>1){
                state.goods_list[index].count--;
            }else{
                state.goods_list[index].if_cart = false;
            }
            
        },
        //删除购物车内容
        removeCart(state,index){
            //state.goods_list.splice(index,1);
            state.goods_list[index].if_cart = false;
            state.goods_list[index].count = 1;
        },

        //清空购物车
        clearCart(state){
            state.goods_list.map((item)=>{
                item.if_cart = false;
            })
        }

    },

    //类似于计算属性
    getters:{
        //计算总数量
        totalNums(state){
            let nums = 0;
            //循环所有的数据，还要进行数据的判断
            state.goods_list.forEach(item => {
                if(item.if_cart == true){
                    nums = item.count;
                }
            });

            return nums;
        },

        totalPrice(state){
            let amounts = 0;

            //循环所有的数据，进行判断
            state.goods_list.forEach(item => {
                if(item.if_cart == true){
                    amounts = item.count*item.price;
                }
            });

            return amounts.toFixed(2);
        },
        
    }
}

export default goods;