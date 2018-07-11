/**
 * Created by levy on 2018/6/27.
 */
import request from 'axios';
request.default.baseURL = "http://116.62.145.100:8083/api";
// request.setResponseHeaders()
// http://localhost:8080/static/data/giftInfo.json
/**
 * 加
 * @param commit
 */
export const increment = ({commit})=>commit('Increment');


/**
 * 减
 * @param commit
 */
export const decrement = ({commit})=>commit('Decrement');

/**
 * 获取所有的礼物信息
 * @param commit
 * @param state
 * @returns {Promise.<TResult>}
 */
export const getGiftList = ({commit, state})=>{
  return request.get(request.default.baseURL+"/gifts/getAll").then((res)=>{
    if(res.status == 200){
      commit("GIFT_LIST",eval(res.data.data.data));
    }
  })
}

/**
 * 获取中奖者名单
 * @param commit
 * @param state
 * @returns {*}
 */
export const getPrizerList = ({commit, state})=>{
  return request.get(request.default.baseURL+"/stuff/getStuff").then((res)=>{
    console.log(res);
    if(res.status == 200){
      commit("PRIZER_LIST",eval(res.data.data.data));
    }
  })
}

