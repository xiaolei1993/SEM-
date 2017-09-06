<template>
	<!-- 参数配置 -->
	<div class="configure">
		<header>
			<h2>参数配置</h2>
		</header>
		<!-- 导航 -->
		<nav class="compare-nav" id="compare_nav">
			<div class="inner" id="inner">
				<span v-for="(ele,index) in parameterData" v-if="ele.list.length > 0" :class="{select:index == selectedNumber}" @click="selectOption(index)"><em>{{ele.F_ParameterTypeName}}</em></span>
			</div>
		</nav>

		<div class="config-info">
			<ul v-for="(ele,index) in parameterData" v-if="ele.list.length > 0" v-show="index == selectedNumber">
				<li v-for="res in ele.list">
					<span>{{res.F_ParameterName}}</span>
					{{res.value + res.unit}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  props:['parameterData'],
  	data () {
    	return {
      		selectedNumber:0,
    	}
  	},
  	methods:{
	    selectOption(index){
	    	this.selectedNumber = index
	    	switch (index) {
	    		case 1:
	    		ga('send', 'event', 'SEM询底价页', '发动机', '');
	    		break;
	    		case 3:
	    		ga('send', 'event', 'SEM询底价页', '驾驶室参数', '');
	    		break;
	    		case 4:
	    		ga('send', 'event', 'SEM询底价页', '变速箱', '');
	    		break;
	    		case 5:
	    		ga('send', 'event', 'SEM询底价页', '轮胎', '');
	    		break;
	    		case 6:
	    		ga('send', 'event', 'SEM询底价页', '油箱', '');
	    		break;
	    		case 7:
	    		ga('send', 'event', 'SEM询底价页', '底盘', '');
	    		break;
	    	}
	    }
  	},
}
</script>

<style scoped lang="less">
	.configure{
		margin-top: 10px;
		background: #fff;
	}
	header{
		position: relative;
		height: 40px;
		line-height: 40px;
		padding: 0 15px;
		&:before{
			content: " ";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			border-top: 1px solid #e5e5e5;
			color: #e5e5e5;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(.5);transform: scaleY(.5);
		}
		h2{
			font-size: 16px;
			color: #333;
			font-weight: bold;
		}
	}
	.compare-nav{
		position: relative;
		height: 44px;
		line-height: 44px;
		overflow: hidden;
		padding: 0 15px;
	    ::-webkit-scrollbar{
	      display:none;
	    }
		&:before{
			position: absolute;
			top: 0;
			left: 0;
			content: "";
			width: 15px;
			height: 44px;
			z-index: 2;
			border-left: 5px solid #fff;
		    background: -webkit-gradient(linear,0 0,100% 0,from(#fff),to(rgba(255,255,255,0)));
		    background: linear-gradient(-90deg,rgba(255,255,255,0) 0,#fff 100%);
		}
		&:after{
			position: absolute;
			top: 0;
			right: 0;
			content: "";
			width: 15px;
			height: 44px;
			z-index: 2;
			border-right: 5px solid #fff;
		    background: -webkit-gradient(linear,0 0,100% 0,from(rgba(255,255,255,0)),to(#fff));
		    background: linear-gradient(-90deg,#fff 0,rgba(255,255,255,0) 100%);
		}
		.inner{
			overflow-x: auto;
			overflow-y: hidden;
			white-space: nowrap;
			z-index: 1;
			span{
				display: inline-block;
				font-size: 14px;
				color: #333;
				margin-right: 25px;
				&:last-child{
					margin: 0;
				}
			}
			.select{
				color: #3388ff;
				em{
					display: inline-block;
					height: 42px;
					border-bottom: 2px solid #3388ff;
				}
			}
		}
	}
	.config-info{
		background: #fff;
		border-top: 1px solid #e5e5e5;
		li{
			position: relative;
			line-height: 20px;
			border-bottom: 1px solid #e5e5e5;
			padding: 10px 0 10px 100px;
			font-size: 14px;
			color: #333;
			span{
				position: absolute;
				top: 0px;
				left: 0;
				width: 85px;
				height: 100%;
				line-height: 40px;
				text-align: center;
				background: #f9f9f9;
				font-size: 14px;
				color: #333;
				border-right: 1px solid #e5e5e5;
			}
		}
	}
</style>
