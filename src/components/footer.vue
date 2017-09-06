<template>
	<!-- 吸底 -->
	<footer class="m-footer-bar">
		<div class="hotline">购车热线 ：<a href="tel: 010-89192893"> 010-89176586 </a>(09:00-18:00)</div>
		<p class="copyright">卡车之家 &copy; 2017 <a href="https://m.360che.com/" style="color:#999">m.360che.com</a></p>
		<!-- 电话按钮 -->
		<a href="javascript:;" class="consult-btn" @click="consult">咨询</a>
	</footer>
</template>

<script>
export default {
  	data () {
    	return {
      		
    	}
  	},
  	methods:{
  		consult(){
  			ga('send', 'event', 'SEM询底价页', '咨询', '');
  			this.$nextTick(function(){
  				location.href = "tel:010-89176586";
  			})
  		}
  	},
}
</script>

<style scoped lang="less">
	.m-footer-bar{
		margin-top: 10px;
		background: #fff;
		padding: 15px 0 50px;
		margin-bottom: 50px;
		.hotline{
			height: 16px;
			line-height: 16px;
			font-size: 10px;
			color: #999;
			text-align: center;
			a{
				argin: 0 3px;
				font-size: 16px;
				color: #999;
				vertical-align: middle;
			}
		}
		.copyright{
			margin-top: 15px;
			font-size: 10px;
			line-height: 10px;
			color: #999;
			text-align: center;
		}
	}
	.consult-btn{
		position: fixed;
		right: 6px;
		bottom: 76px;
		z-index: 10;
		width: 48px;
		height: 22px;
		border-radius: 50%;
		font-size: 12px;
		color: #fff;
		text-align: center;
		padding-top: 26px;
		background: #FF6600;
		box-shadow: 0 2px 4px 0 rgba(255,102,0,0.30);
		&:before{
			position: absolute;
			top: 4px;
			left: 14px;
			content: "\7535";
			font-family: 'enquiry';
			font-size: 17px;
			color: #fff;
		}
	}
</style>