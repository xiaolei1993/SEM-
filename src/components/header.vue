<template>
    <!-- 头部 -->
	<div class="head" :class="{'black-head':color}">
		<div class="back" id="back" @click="goback" v-if="!hideBack">回</div>
		<div class="header-title" id="header_title">
			<h1>{{titleName}}</h1>
		</div>
	</div>
</template>

<script>
export default {
  props:['titleName','back','color','hideBack'],
  	data () {
    	return {

    	}
  	},
    methods:{
      goback(){
        this.$emit('goback',this.back)
      }
    }
}
</script>

<style scoped lang="less">
   .head{
	   	position: relative;
	   	height: 44px;
	   	line-height: 44px;
	   	background: #fff;
	   	text-align: center;
	   	padding: 0 42px;
	   	border-bottom: 1px solid #eee;
	   	overflow: hidden;
	   	&:before{
	   		content: "";
	   		position: absolute;
	   		top: 0;
	   		left: 42px;
	   		width: 10px;
	   		height: 44px;
	   		z-index: 2;
	   		border-left: 5px solid #fff;
	   		background: -webkit-gradient(linear,0 0,100% 0,from(#fff),to(rgba(255,255,255,0)));
	   		background: linear-gradient(-90deg,rgba(255,255,255,0) 0,#fff 100%);
	   	}
	   	&:after{
	   		content: "";
	   		position: absolute;
	   		top: 0;
	   		right: 42px;
	   		width: 10px;
	   		height: 44px;
	   		z-index: 2;
	   		border-right: 5px solid #fff;
	   		background: -webkit-gradient(linear,0 0,100% 0,from(#fff),to(rgba(255,255,255,0)));
	   		background: linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 100%);
	   	}
   }
   .back{
	   	position: absolute;
	   	top: 0;
	   	left: 0;
	   	width: 44px;
	   	height: 44px;
	   	font-size: 18px;
	   	color: #bbb;
	   	text-align: center;
	   	font-family: 'enquiry';
   }
   .black-head{
	    color:#fff;
	    border: #111;
	    background: #111;
	    overflow: hidden;
	     	&:before{
		        border-left: 5px solid #111;
		        background: -webkit-gradient(linear,0 0,100% 0,from(#111),to(rgba(0,0,0,0)));
		        background: linear-gradient(-90deg,rgba(0,0,0,0) 0,#111 100%);
	        }
	        &:after{
		        border-right: 5px solid #111;
		        background: -webkit-gradient(linear,0 0,100% 0,from(#111),to(rgba(0,0,0,0)));
		        background: linear-gradient(90deg,rgba(0,0,0,0) 0,#111 100%);
	        }
	       	h1{
	       		display: inline-block;
	       		width: auto;
		        color:#fff;
		        background-color:#111;
	       	}
	   	.header-title{
	   		width: auto;
			background: #111;
	   	}
   }
   .header-title{
	   	position: relative;
	   	height: 100%;
	   	overflow-x: auto;
	   	background: #fff;
	   	white-space: nowrap;
   	}
   	h1{
	   	height: 44px;
	   	font-size: 18px;
	   	color: #333;
	   	text-align: center;
	   	padding-left: 10px;
   }
</style>
