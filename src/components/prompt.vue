<template>
	<aside class="dialog">
		<div class="prompt">
			<p>{{promptText}}</p>
			<span class="know" @click="closeBtn">我知道了</span>
		</div>
	</aside>
</template>

<script>
export default {
	props:['promptText'],
  	data () {
    	return {

    	}
  	},
  	methods:{
  		closeBtn(){
  			this.$emit('closeBtn')
  		}
  	}
}	
</script>

<style scoped lang="less">
	.dialog{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 20;
		.prompt{
			position: absolute;
			top: 50%;
			left: 50%;
			width: 250px;
			height: 122px;
			margin: -61px 0 0 -125px;
			background: #fff;
			border-radius: 5px;
			text-align: center;
			p{
				height: 78px;
				line-height: 78px;
				font-size: 18px;
				border-bottom: 1px solid #eee;
			}
			span{
				display: block;
				height: 44px;
				line-height: 44px;
				font-size: 18px;
				color: #f60;
			}
		}
	}
</style>