<template>
	<aside class="select-city">
		<div class="sidebar-container">
			<header>
				<span>回</span>
				<h4>北京</h4>
			</header>
			<ul class="location-model">
				<li>北京</li>
				<li>上海</li>
			</ul>
		</div>	
	</aside>
</template>

<script>
export default {
  	data () {
    	return {
	      	
    	}
  	},
}	
</script>

<style scoped lang="less">
	.select-city{
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		padding-left: 75px;
		-webkit-box-sizing: border-box;
    	box-sizing: border-box;
    	z-index: 12;
    	-webkit-transition: transform .3s ease-out;
    	transition: transform .3s ease-out;
    	box-shadow: -2px 2px 2px 2px #d6d6d6;
    	&.visible{
	    	-webkit-transform: translate3d(-100%,0,0);
	    	transform: translate3d(-100%,0,0);
    	}
    	.sidebar-container{
    		position: relative;
    		height: 100%;
    		overflow: auto;
    		background: #fff;
    		-webkit-overflow-scrolling: touch;
    		z-index: 15;
    		header{
    			position: relative;
    			height: 44px;
    			line-height: 44px;
    			text-align: center;
    			font-size: 18px;
    			border-bottom: 1px solid #eee;
    			background: #fff;
    			span{
    				position: absolute;
    				left: 0;
    				top: 0;
    				width: 44px;
    				height: 44px;
    				color: #999;
    				font-size: 14px;
					font-family: 'enquiry';
    			}
    			h4{
    				font-size: 18px;
    				color: #000;

    			}
    		}
    		.location-model{
    			padding: 0 15px;
    			background: #fff;
    			li{
    				height: 44px;
    				line-height: 44px;
    				border-bottom: 1px solid #eee;
    				&:last-child{
    					border: none;
    				}
    			}
    		}
    	}
	}
</style>