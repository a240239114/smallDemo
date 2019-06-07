<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            v-for="item in list"
            :key="item._id"
            @click="getlistinfoByid(item._id)"
          >{{item.fenlei}}</a>
        </div>
      </div>
    </div>

    <!-- 图片区域 -->
    <ul>
      <li v-for="item in imagelist.image" :key="item._id">
        <router-link :to="'/shouye/photoinfo/'+imagelist._id">
          <img v-lazy="item.url">
          <div class="content">{{item.content}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//引入mui的js插件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      list: "",
      imagelist: ""
    };
  },
  created() {
    //页面加载就获取所有数据
    this.getlist();
    //页面以加载就全部这个类的内容显示出来
    this.getlistinfoByid("5c3c5285ea9b7b1424303aea");
  },
  mounted() {
    //初始化scroll插件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getlist() {
      this.$http
        .get("http://faguo.free.idcfengye.com/image")
        .then(res => res.json())
        .then(res => {
          this.list = res.data;
        });
    },
    getlistinfoByid(id) {
      this.$http
        .get("http://faguo.free.idcfengye.com/image/" + id)
        .then(res => res.json())
        .then(res => {
          this.imagelist = res.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  //提高谷歌流畅度
  touch-action: pan-y;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

ul {
  list-style-type: none;
  padding: 0 10px;
  li {
    position: relative;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px black;
    img {
      display: block;
      width: 100%;
      border-radius: 5px;
    }
    .content {
      width: 100%;
      overflow: hidden; //溢出内容隐藏
      text-overflow: ellipsis;
      //弹性盒子
      display: -webkit-box;
      //限制在一个块元素显示文本的行数
      -webkit-line-clamp: 3;
      //属性规定子元素应该被水平或垂直排列
      -webkit-box-orient: vertical;
      background-color: rgba(0, 0, 0, 0.4); //仅仅背景颜色是透明的
      color: white;
      font-size: 15px;
      position: absolute;
      bottom: 0px;
    }
  }
}
</style>

