<template>
	<!-- 焦点图 -->
	<div class="price-list swiper-container clear-float swiper-container-horizontal" id="pic_list">
		<ul class="swiper-wrapper"  v-for="ele in imgList.list">
			<li class="swiper-slide"  v-for="res in ele.imgList" >
				<router-link to="/picture">
          			<img :src="res.url" :alt="res.alt">
					<span></span>
				</router-link>
			</li>
		</ul>
		<div class="swiper-pagination swiper-pagination-fraction">
			<span class="swiper-pagination-current">1</span>
			/
			<span class="swiper-pagination-total"></span>
		</div>
	</div>
</template>

<script>
export default {
  props:['imgList'],
  	data () {
    	return {
      		msg: ''
    	}
  	},
  	mounted(){
	    // 焦点图
		let swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationType: 'fraction',
	        autoplay: 3000,
	        loop:true,
	    });
  	}
}
</script>

<style scoped lang="less">
	.price-list{
		position: relative;
		width: 100%;
		overflow: hidden;
		z-index: 10;
		background: #fff;
	}
	.swiper-wrapper{
		width: 10000%;
		overflow: hidden;
	}
	.swiper-slide{
		position: relative;
		float: left;
		width: 1%;
		a{
			display: block;
		}
		span{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 50px;
			background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 0,rgba(0, 0, 0, .7));
			background-image: -webkit-linear-gradient(to bottom,rgba(255, 255, 255, 0) 0,rgba(0, 0, 0, .7));
		}
	}
	.swiper-pagination{
		position: absolute;
		right: 15px;
		bottom: 15px;
		text-align: center;
		z-index: 10;
		color: #fff;
	}
	.swiper-pagination-current{
		font-size: 16px;
	}
	.swiper-pagination-total{
		font-size: 12px;
	}
</style>
