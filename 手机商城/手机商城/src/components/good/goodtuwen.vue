<template>
    <div class="containner">
         <div class="head">{{list.tittle}}</div>
         <div>
             <img :src="list.imginfo" alt="">
             <img :src="list.content" alt="">
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            list:""
        }
    },
    created() {
        this.getAlllist();
    },
    methods: {
        async getAlllist(){
             let res = await this.$http.get('http://faguo.free.idcfengye.com/good/'+this.id).then(res=>res.json());
             this.list = res.data;
        }
    }
}
</script>

<style lang="less" scoped>
.containner{
    padding: 0px 5px;
    .head{
        text-align: center;
        color:red;
        border-bottom:1px solid gray;
    }
    img{
        width:100%;
    }
}

</style>

