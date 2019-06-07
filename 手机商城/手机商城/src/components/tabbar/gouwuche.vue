<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="container" v-for="(item,i) in list" :key="item._id">
            <!-- 选择按钮 -->
            <div class="left">
              <mt-switch v-model="$store.getters.getGoodsSelected[item._id]" @change="SeletedChanged(item._id,$store.getters.getGoodsSelected[item._id])"></mt-switch>
            </div>

            <div class="middle">
              <img :src="item.imgfirst">
            </div>

            <div class="right">
              <p class="top">{{item.tittle}}</p>
              <p class="bottom">
                <span>${{item.newprice}}</span>
                <!-- 计数器组件 -->
                <numbox
                  :id="item._id"
                  :count="$store.getters.getGoodsCount[item._id]"
                ></numbox>
                <del @click="removeGood(item._id,i)">删除</del>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <div class="content">
                <div class="left">
                    <p>总计(不含运费)</p>
                    <p>已勾选商品:<span>{{$store.getters.getGoodsCountAndPrice.count}}</span>件,总价:<span>${{$store.getters.getGoodsCountAndPrice.price}}</span></p>
                </div>
                <div class="right">
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入子组件
import numbox from "../subcomponent/gouwuche_numbox.vue";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getAll();
  },
  components: {
    numbox
  },
  methods: {
    getAll() {//获取所有数据
      this.$store.state.car.forEach(item => {
        this.$http
          .get("http://faguo.free.idcfengye.com/good/" + item.id)
          .then(res => res.json())
          .then(res => {
            this.list.push(res.data);
          });
      });
    },
    removeGood(id,i){//根据ID删除商品
       //删除当前页面中的good
       this.list.splice(i,1);

       //删除car中的good
       this.$store.commit("removeByid",id);
    },
    SeletedChanged(id,selected){//根据ID改变vuex中car的选中状态
        let obj = {
            id :id,
            selected:selected
        }

        //调用vuex中的方法,改变vuex的选中状态
        this.$store.commit("upDatedSelectedByid",obj);

        console.log("id=====>"+id)
        console.log("selected====>"+selected)
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    flex: 1;
  }
  .middle {
    flex: 1;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .right {
    flex: 3;
    .top {
      margin: 0;
      padding: 0;
      color: black;
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: red;
      }
      del {
        color: blue;
      }
    }
  }
}
.content{
    display:flex;
    justify-content: space-between;
    .left{
        flex:3;
        p{
            span{
               color:red;
               font-weight: bold;
               font-size: 18px;
            }
        }
    }
    .right{
    flex:1;
    }
}
</style>


