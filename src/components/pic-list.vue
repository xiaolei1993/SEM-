<template>
	<!-- 焦点图 -->
	<div class="picture-list" id="picture_list">
      <ul class="swiper-wrapper" v-for="ele in imgList.list"> <!---->
        <li class="swiper-slide" v-for="res in ele.imgList" >
          <figure><img :src="res.url" :alt="res.alt"></figure>
        </li>
      </ul>
      <div class="swiper-pagination swiper-pagination-fraction">
        <span class="swiper-pagination-current">1</span>
        /
        <span class="swiper-pagination-total"></span>
      </div>
	</div>
</template>

<script type="text/babel">
export default {
  props:['imgList'],
  	data () {
    	return {
      		msg: ''
    	}
  	},
    created(){
      console.log(this.imgList)
    },
  	mounted(){
	    // 焦点图
      let swiper = new Swiper('#picture_list', {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
      });
  	}
}
</script>

<style scoped lang="less">
	.picture-list{
		position: relative;
		width: 100%;
		overflow: hidden;
		z-index: 100;
		background: #28292e;
		margin-top: 125px;
		ul{
			width: 10000%;
			overflow: hidden;
			li{
				position: relative;
				float: left;
				width: 1%;
			}
		}
		.swiper-pagination{
			text-align: center;
			color: #fff;
			margin-top: 10px;
		}
		.swiper-pagination-current{
			font-size: 16px;
		}
		.swiper-pagination-total{
			font-size: 12px;
		}
	}
</style>
