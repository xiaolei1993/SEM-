<template>
	<div class="success">
		<title-name :titleName="titleName"  @goback="goback"></title-name>
		<succeed></succeed>
		<recommend v-if="restsAttention.length > 0" :restsAttention="restsAttention"></recommend>
	</div>
</template>

<script>
import titleName from '../components/header.vue'
import succeed from '../components/succeed.vue'
import recommend from '../components/recommend.vue'
import router from '../router'

export default {
	data () {
		return {
			//标题名称
			titleName:'',
			//推荐列表数据
      		restsAttention:[],
      		id:'23732',
		}
	},
	methods:{
		goback(type){
	      	if(type == 'closeLocation'){
	        	this.locationShow = false;
	      	}else{
	        	router.go(-1)
	    }
    },
},
  	created(){
		if(productId){
			this.id = productId
		}
		//请求标题和车型信息
		$.get('https://dealer-api.360che.com/ProductAPI/getproduct_param.aspx?isSem=1&id='+ this.id,(ele) => {
	      	if(ele.info == 'ok'){
	        //标题
	        	this.titleName = ele.data[this.id].proName;
	      	}
    	},'json');

		//请求其他关注数据
	    $.get('https://dealer-api.360che.com/ProductAPI/getproduct_compete.aspx?productId=21190',(ele) => {
	      	if(ele.info == 'ok'){
				this.restsAttention = ele.data;
	      	}
	    },'json')
  	},
	components:{
		titleName,
		succeed,
		recommend,
	}
}
</script>

<style scoped lang="less">

</style>
