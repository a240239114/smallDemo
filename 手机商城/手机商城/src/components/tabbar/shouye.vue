<template>
  <div>
    <!-- 顶部轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://img1.imgtn.bdimg.com/it/u=1115357166,2293257721&fm=200&gp=0.jpg" alt>
      </mt-swipe-item>

      <mt-swipe-item>
        <img src="http://img5.imgtn.bdimg.com/it/u=1337274994,3955259507&fm=200&gp=0.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img5.imgtn.bdimg.com/it/u=1647239210,4180702867&fm=26&gp=0.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 中间九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shouye/newslist">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3310541916,1427699803&fm=26&gp=0.jpg" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shouye/photo">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3734855139,2832252489&fm=200&gp=0.jpg" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shouye/good">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3356223060,4286790310&fm=26&gp=0.jpg" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=320965492,2979505807&fm=26&gp=0.jpg" alt>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435951197,1207385731&fm=26&gp=0.jpg" alt>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3402960175,567243280&fm=26&gp=0.jpg" alt>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 轮播图区域
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: aqua;
    }
    &:nth-child(3) {
      background-color: antiquewhite;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

//六宫格区域
.mui-grid-view.mui-grid-9 {
  background-color: white;
  img {
    width: 60px;
  }
  border: none;
  .mui-table-view-cell {
    border: none;
    .mui-media-body {
      font-size: 12px;
    }
  }
}
</style>



