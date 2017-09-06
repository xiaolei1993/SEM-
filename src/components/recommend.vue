<template>
	<!-- 推荐列表 -->
	<div class="recommend">
		<header class="clearfix">
			询问此车型的人还在关注
			<span @click='exchange'>换一批</span>
		</header>
		<ul class="recommend-list" v-if="restsAttention.length > 0">
			<li v-for="ele in restsAttention[index]">
				<router-link :to="ele.url">
					<figure><img :src="ele.img" alt=""></figure>
					<figcaption>{{ele.F_ProductName}}</figcaption>
					<span>{{ele.F_WeekClickCount}} <em>成功询价</em></span>
				</router-link>
				<span class="ask-price" :class="{'succeed':ele.OnPirce}" @click.stop="onPrice(ele)">{{ele.OnPirce ? '询价成功' : '一键询价'}}</span>
			</li>
		</ul>
		<a href="https://product.m.360che.com/price/c1_s63_b0_s0.html" class="more">查看更多车型</a>
	</div>
</template>

<script>
export default {
	props:['restsAttention'],
  	data () {
    	return {
			//换一批时候的下标
      		index:0,
    	}
  	},
		methods:{
			//点击一键询价
			onPrice(ele){
				if(ele.OnPirce){
					return ;
				}
				$.get('https://dealer-api.360che.com/ProductAPI/getproduct_param.aspx?id=' + ele.F_SubCategoryId,(res) => {
					if(res.info == 'ok'){
						// ele.OnPirce = true;
						this.$set(ele,'OnPirce',true)
					}
				},'json')
			},
			//点击换一批
			exchange(){
				this.index++;
				if(this.index == this.restsAttention.length){
					this.index = 0;
				}
			}
		}
}
</script>

<style scoped lang="less">
	.recommend{
		background: #fff;
		overflow: hidden;
		header{
			height: 30px;
			line-height: 30px;
			font-size: 12px;
			color: #999;
			background: #f5f5f5;
			overflow: hidden;
			padding: 0 15px;
			span{
				float: right;
				color: #f60;
				&:before{
					font-family: 'enquiry';
					content: "\9009";
					font-size: 13px;
					margin-right: 5px;
				}
			}
		}
		.more{
			display: block;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			color: #999;
			&:after{
				font-family: 'enquiry';
				content: "\53f3";
				font-size: 12px;
				margin-left: 6px;
			}
		}
	}
	.recommend-list{
		overflow: hidden;
		li{
			position: relative;
			border-bottom: 1px solid #eee;
			a{
				display: block;
				padding: 12px 15px 15px 105px;
			}
			figure{
				position: absolute;
				left: 15px;
				top: 15px;
				width: 75px;
				height: 50px;
				img{
					width: 75px;
					height: 50px;
				}
			}
			figcaption{
				height: 36px;
				line-height: 18px;
				font-size: 12px;
				color: #333;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			span{
				display: block;
				line-height: 12px;
				font-size: 12px;
				color: #f60;
				margin-top: 5px;
				em{
					color: #333;
				}
			}
			.ask-price{
				position: absolute;
				right: 15px;
				bottom: 12px;
				width: 60px;
				height: 22px;
				line-height: 22px;
				margin: 0;
				text-align: center;
				font-size: 12px;
				color: #fff;
				border-radius: 3px;
				background: #3388ff;
				&.succeed{
					background: #eee;
					color: #808080;
				}
			}
		}
	}
</style>
