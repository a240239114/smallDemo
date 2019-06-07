//导入路由
import VueRouter from 'vue-router'

//导入首页子组件
import shouye from './components/tabbar/shouye.vue'
import huiyuan from './components/tabbar/huiyuan.vue'
import gouwuche from './components/tabbar/gouwuche.vue'
import shousuo from './components/tabbar/shousuo.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodlist from './components/good/goodslist.vue'
import goodinfo from './components/good/goodsinfo.vue'
import goodtuwen from './components/good/goodtuwen.vue'
import goodcomment from './components/subcomponent/comment.vue'


//配置路由
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/shouye'},
        {path:'/shouye',component:shouye},
        {path:'/huiyuan',component:huiyuan},
        {path:'/gouwuche',component:gouwuche},
        {path:'/shousuo',component:shousuo},
        {path:'/shouye/newslist',component:newslist},
        {path:'/shouye/newsinfo/:id',component:newsinfo},
        {path:'/shouye/photo',component:photolist},
        {path:'/shouye/photoinfo/:id',component:photoinfo},
        {path:'/shouye/good',component:goodlist},
        {path:'/shouye/goodinfo/:id',component:goodinfo},
        {path:'/shouye/goodtuwen/:id',component:goodtuwen},
        {path:'/shouye/comment',component:goodcomment}
    ],
    linkActiveClass:'mui-active' //把默认高亮的类换掉,默认的类叫router-link-active
})

//将路由导出去
export default router;
