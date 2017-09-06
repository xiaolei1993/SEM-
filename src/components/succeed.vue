<template>
	<!-- 询价成功 -->
	<div class="success">
		<div class="success-text">
			<p>
				恭喜您, 询价成功~
				<span>稍后会有经销商与您联系</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
  	data () {
    	return {
      		msg: ''
    	}
  	}
}	
</script>


<style scoped lang="less">
	.success{
		padding: 26px 15px;
		background: #fff;
	}
	.success-text{
		position: relative;
		width: 134px;
		margin: 0 auto;
		padding-left: 58px;
		p{
			line-height: 16px;
			font-size: 16px;
			color: #f60;
			font-weight: bold;
			&::before{
				font-family: 'enquiry';
				content: "\5bf9";
				position: absolute;
				top: 0;
				left: 0;
				width: 40px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				border-radius: 50%;
				border: 1px solid #f60;
			}
			span{
				display: block;
				line-height: 12px;
				font-size: 12px;
				color: #666;
				margin-top: 12px;
				font-weight: normal;
			}
		}
	}
</style>