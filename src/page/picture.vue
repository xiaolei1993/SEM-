<template>
	<div class="picture">
		<title-name :titleName="titleName" @goback="goback" :color="color"></title-name>
		<pic-list v-if="imgList.ok" :imgList="imgList"></pic-list>
	</div>
</template>

<script type="text/babel">
import titleName from '../components/header.vue'
import picList from '../components/pic-list.vue'
import router from '../router'
export default {
	data () {
		return {
            titleName: '',
            color:'black',
            imgList:{},
	   }
    },
    methods:{
        goback(){
            router.go(-1)
        }
    },
    created(){
        $.get('https://dealer-api.360che.com/ProductAPI/getproduct_img.aspx?productid=' + productId,(ele) => {
            if (ele.info == 'ok') {
                //标题
                this.titleName = ele.h1;
                //图片列表
                this.imgList = ele.data;
                this.imgList.ok = true;
            }
        },'json')
    },
	components:{
		titleName,
		picList,
	}
}
</script>

<style scoped lang="less">
	.picture{
		height: 100%;
		background: #28292E;
	}
</style>
