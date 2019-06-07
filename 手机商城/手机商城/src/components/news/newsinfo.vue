<template>
  <div>
    <!-- 新闻头部 -->
    <header>
      <p class="top">{{list.tittle}}</p>
      <p class="bottom">
        <span>发表时间:{{list.add_time}}</span>
        <span>点击次数:{{list.click}}</span>
      </p>
    </header>

    <!-- 内容部分 -->
    <div class="content">
        <img :src="list.img_url2">
        <p>{{list.zhaiyao}}</p>
    </div>
     
    <!-- 评论子组件,把id传递给子组件-->
    <comment :parentMsg="id"></comment>

  </div>
</template>

<script>
//引入评论子组件
import comment from '../subcomponent/comment.vue'

export default {
    data(){
        return{
           //将newslist通过路由传递的参数赋值给id
           id:this.$route.params.id,
           list:""
        }
    },
    created(){
       this.getMessage();
    },
    mounted() {
    },
    methods:{
        getMessage(){
            this.$http.get("http://faguo.free.idcfengye.com/newslist/"+this.id)
                      .then(res=>res.json())
                      .then(res=>{
                          this.list = res.data
                      })
        }
    },
    components:{
        comment
    }
};
</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
div {
  padding: 5px;
  header {
    .top {
      text-align: center;
      color: red;
      font-size: 18px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      color: blue;
    }
    border-bottom: 1px solid gray;
  }

  .content{
      img{
         display:block;
         width: 100%;
         border-radius: 5px;
      }
      border-bottom:1px solid gray;
  }
}
</style>

