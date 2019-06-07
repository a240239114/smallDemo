import Vue from 'vue'

// //导入头部组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

// //导入按钮
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);

//导入路由
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//导入vuex
import Vuex from 'vuex'
//安装vuex
Vue.use(Vuex)

//从本地提取数据
let car = JSON.parse(localStorage.getItem('car')||'[]')

//创建实例
let store = new Vuex.Store({
    state:{//调用方法 this.$store.state.***
       car:car
    },
    mutations:{//调用方法 this.$store.commit("方法名",参数)
       addTocar(state,goods){//将数据保存到car中
          let flag = false

          //如果有该商品,直接增加数字
          state.car.some(item=>{
              if(item.id==goods.id){
                  item.count += parseInt(goods.count);
                  flag =  true;
                  return true;
              }
          })        
         
          //若没有该商品,直接加入购物车
          if(!flag){state.car.push(goods)}

          //数据持久化
          localStorage.setItem('car',JSON.stringify(state.car))
       },
       upDatedByid(state,obj){//根据ID更新单个商品的数量

          state.car.some(item=>{//单等于用于赋值,双等于用于比较
              if(item.id == obj.id){
                item.count = parseInt(obj.count);
                return true;
              }
          })

          //修改完商品储存到本地
          localStorage.setItem('car',JSON.stringify(state.car))
       },
       removeByid(state,id){//根据ID删除商品
            state.car.some((item,index)=>{
                if(item.id == id){
                    state.car.splice(index,1);
                }
            })

            //数据持久化
            localStorage.setItem('car',JSON.stringify(state.car));
       },
       upDatedSelectedByid(state,obj){//根据ID更新单个商品的选中状态
          state.car.some(item=>{
              if(item.id==obj.id){
                  item.selected = obj.selected;
              }
          })

          //数据持久化
          localStorage.setItem('car',JSON.stringify(state.car));
       }
    },
    getters:{//调用方法 this.$store.getters.***
        getAllCount(state){//计算所有商品的总数
            let count =0;
            state.car.forEach(item=>{
                count+=parseInt(item.count);
            })
            return count;
        },
        getGoodsCount(state){//商品的id作为键,数量作为值放到一个对象中
           let o = {};
           state.car.forEach(item=>{
               o[item.id]=parseInt(item.count);
           })
           return o;
        },
        getGoodsSelected(state){//商品的id作为键,选中状态作为值放到对象中
           let o ={};
           state.car.forEach(item=>{
               o[item.id] = item.selected;
           })
           return o;
        },
        getGoodsCountAndPrice(state){//根据商品的选中状态获取商品的总数和总价格
            let o ={
                count:0,
                price:0
            };
            state.car.forEach(item=>{
                if(item.selected){
                   o.count +=item.count;//商品的数量
                   o.price +=item.count*item.price;//商品的总价格 
                }
            })

            return o ;
        }
    }
})

//定义全局的时间格式化插件
import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})

//配置全局的请求根路径
// Vue.http.options.root = 'http://192.168.31.93:3000';
Vue.http.options.emulateJSON = true;

//导入mui样式,和拓展图标
import './lib/mui/css/mui.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// //导入轮播图组件
// import { Swipe, SwipeItem } from 'mint-ui';
// //注册轮播图组件
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//完全导入mint-ui
import MintUI from 'mint-ui';
Vue.use(MintUI)
import "mint-ui/lib/style.css"

//安装图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//导入app组件
import app from './App.vue'

//导入路由
import router from './router'

let vm = new Vue({
    el:'#app',
    //渲染
    render:c=>c(app),
    router,
    store
})