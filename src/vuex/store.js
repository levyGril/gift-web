/**
 * Created by levy on 2018/6/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);
//定义初始化的state
let state = {
    count:0,
    gifts:[],
    prizers:[],
};

// 定义mutations
const mutations = {
    INCREMENT:(state)=>++state.count,
    DECREMENT:(state)=>--state.count,
    GIFT_LIST:(state,gifts)=>{
      state.gifts = gifts
    },
    PRIZER_LIST:(state,prizers)=>{
      state.prizers = prizers;
   }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});

