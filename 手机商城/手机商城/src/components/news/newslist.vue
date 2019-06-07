<template>
  <div>
    <ul>
        <li v-for="item in newslist" :key="item._id">
          //route-link要是在li之外,会出现BUG,而且不能通过路由传递ID
          <router-link :to="'/shouye/newsinfo/'+item._id">

          <div class="left">
            <img :src="item.img_url1">
          </div>

          <div class="middle">
            <span>{{item.tittle}}</span>
            <p>发表时间:{{item.add_time}}</p>
          </div>

          <div class="right">
            <span>点击{{item.click}}次</span>
          </div>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  //数据区域
  data() {
    return {
      newslist: [] //新闻列表
    };
  },
  //数据未加载的钩子函数
  created() {
    this.getNewslist();
  },
  //组件内部的方法
  methods: {
    getNewslist() {
      this.$http
        .get("http://faguo.free.idcfengye.com/newslist")
        .then(res => res.json())
        .then(res => {
          this.newslist = res.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
ul {
  a {
    padding: 10px 20px;
    border-bottom: 1px solid gray;
    display: flex;
    height: 70px;
    .left {
      img {
        border-radius: 20px;
        height: 40px;
        width: 40px;
      }
    }

    .middle {
      margin-left: 20px;
      font-size: 12px;
      font-weight: bold;
      flex: 1;
      color:red;
      p {
        color: blue;
      }
    }

    .right {
      line-height: 40px;
      color: blue;
      font-size: 15px;
    }
  }
}
</style>







