<template>
  <div class="container">
    <!-- 头部区域   -->
    <div class="header">
      <p class="top">{{list1.biaoti}}</p>
      <p class="bottom">
        <span class="left">发表时间:2018-12-15 12:25:14</span>
        <span class="right">点击次数:{{list1.click}}</span>
      </p>
    </div>

    <!-- 中间缩略图 -->
    <div class="main">
        <div class="top" v-for="item in list" :key="item.url">
          <img :src="item.url">
        </div>

        <div class="bottom">
          {{list1.content}}
        </div>
    </div>

    <!-- 评论子组件 -->
    <comment></comment>
  </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponent/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      list1: "",
      list: []
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$http
        .get("http://faguo.free.idcfengye.com/image/" + this.id)
        .then(res => res.json())
        .then(res => {
          this.list1 = res.data.image[0];
          this.list = res.data.image[0].infoimg;
        });
    },

  },
  components:{
    comment
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  padding: 0 5px;
  .header {
    border-bottom: 1px solid gray;
    .top {
      text-align: center;
      color: red;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .top{
      display: inline;
      width: 49%;
      img{
        width: 100%;
        height: 180px;
        border-radius: 5px;
      }
    }
    .bottom{
      background-color: aquamarine;
      border-bottom: 1px solid gray;
    }
  }
}
</style>
