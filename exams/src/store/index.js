//1. 引入vue的对象
import Vue from 'vue'

//2. 引入vueX的对象
import Vuex from 'Vuex';

//引入
import goods from './goods'

//使用vueX
Vue.use(Vuex);

//4. 导出vuex的实例化对象
const  store = new Vuex.Store({
    //state属性 存储数据的
    state:{
        show:false,
        car:{},
    },
    //操作state方法
    mutations:{
        shows(state,payload){
            console.log(payload)
            state.car=payload
            state.show=!state.show
        },
        hides(state){
            state.show=!state.show
        },
        // 数量加
        ads(state){
            state.car.num++
        },
        // 数量减
        cuts(state){
            state.car.num--;
            if(state.car.num<1){
                state.car.num=1
                return
            }
        }
    },

    //计算属性的值
    getters:{
       
    },
    //actions做一些异步操作 它主要直接操作mutaions
    actions:{
      
    },

    //加入模块
    modules:{
        goods,
    }
});

export default store;