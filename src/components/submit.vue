<template>
	<!-- 吸底按钮 -->
	<div class="submit" @click="commitData">
		<router-link to="/success">
			<p>询底价</p>
			<span>{{priceNumber > 10 ? '已有' + priceNumber + '人询价' : '已有10人+询价'}}</span>
		</router-link>
	</div>
</template>

<script>
export default {
	props:['priceNumber'],
  	data () {
    	return {
      		
    	}
  	},
	methods:{
		commitData(){
			this.$emit('commitData')
		}
	}
}
</script>

<style scoped lang="less">
	.submit{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 35px;
		background: #3388ff;
		text-align: center;
		padding: 7px 0;
		z-index: 10;
		p{
			line-height: 18px;
			font-size: 18px;
			color: #fff;
		}
		span{
			display: block;
			line-height: 12px;
			font-size: 12px;
			color: #fff;
			opacity: .7;
			margin-top: 5px;
		}
	}
</style>
