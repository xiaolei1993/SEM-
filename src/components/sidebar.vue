<template>
	<!-- 城市侧边栏 -->
	<aside class="select-location" id="select_location">
		<div class="">
			<title-name back="closeLocation" @goback="goback" titleName="选地区"></title-name>
			<div class="hot-location">
				<header>定位/常用</header>
				<ul class="clearfix">
					<li v-for="ele in hotLocation"><span @click="selectHotLocation(ele)">{{ele.cityName}}</span></li>
				</ul>
			</div>

			<div class="brands-model" id="location_model">
				<div id="A">
					<ul>
						<li v-for="ele in provinceList" @click='getCity(ele.name,ele.id)' :class="{'selected': ele.name == locationInfo.provinceName}">{{ele.name}}</li>
					</ul>
				</div>
			</div>
		</div>

		<aside class="select-city" :class="{'visible':cityShow}">
			<div class="sidebar-container">
				<header>
					<span @click='backCity'>回</span>
					<h4>{{locationInfo.provinceName}}</h4>
				</header>
				<ul class="location-model">
					<li v-for="ele in cityData" @click="selectCity(ele.name,ele.id)" :class="{'selected':locationInfo.cityName == ele.name}">{{ele.name}}</li>
				</ul>
			</div>
		</aside>
	</aside>
</template>

<script>
import titleName from '../components/header.vue'
export default {
    props:['provinceList'],
  	data () {
    	return {
			// 地区信息
			locationInfo:{
				provinceName:'',
				provinceId:'',
				cityName:'',
				cityId:'',
			},
			//常用地区列表
			hotLocation:[],
			//城市列表
			cityData:[],
			//是否显示城市列表
			cityShow:false,
    	}
  	},
    methods:{
		//返回
      	goback(type){
        	this.$emit('goback',type)
      	},
		//点击省份获取城市
		getCity(provinceName,provinceId){
			//存储本地数据
			this.locationInfo.provinceName = provinceName;
			this.locationInfo.provinceId = provinceId;
			this.locationInfo.cityName = '';
			this.locationInfo.cityId = '';
			$.get('https://dealer-api.360che.com/Dealer/getCityList.aspx?provincesn=' + provinceId,(ele) => {
				this.cityData = ele;
				this.cityShow = true;
				this.$emit('getCity',this.locationInfo)
			},'json')

			localStorage.setItem('selectLocation',JSON.stringify(this.locationInfo))
		},
		//取消选择城市
		backCity(){
			this.cityShow = false;
		},
		//选择城市
		selectCity(cityName,cityId){
			this.locationInfo.cityName = cityName;
			this.locationInfo.cityId = cityId;
			//关闭选择城市列表
			this.cityShow = false;
			//关闭选择地区列表弹层
			this.goback('closeLocation');
			//把值传递给父组件
			this.$emit('selectCity',this.locationInfo)
			localStorage.setItem('selectLocation',JSON.stringify(this.locationInfo))

			//保存常用地理位置
			let hotLocation = localStorage.getItem('hotLocation');
			if(hotLocation){
				let data = JSON.parse(hotLocation);
				let ishave = true;
				data.forEach((res,index) => {
					if(res.cityName == cityName && ishave){
							ishave = false;
					}
				});
				if(ishave){
					if(data.length > 5){
						data.splice(1,1)
					}
					data.push(this.locationInfo);

					localStorage.setItem('hotLocation',JSON.stringify(data))
				}
			}else{
				let hotLocation = [];
				hotLocation.push(this.locationInfo);
				localStorage.setItem('hotLocation',JSON.stringify(hotLocation))
			}
		},
		//选择常用地理位置定位
		selectHotLocation(ele){
			this.locationInfo = ele;
			//关闭选择地区列表弹层
			this.goback('closeLocation');
			//把值传递给父组件
			this.$emit('selectHotLocation',this.locationInfo)
			localStorage.setItem('selectLocation',JSON.stringify(this.locationInfo))
		}
    },
	created(){
		//获取常用地区列表
		let hotLocation = localStorage.getItem('hotLocation');
		if(hotLocation){
			this.hotLocation = JSON.parse(hotLocation);
		}
	},
  	components:{
  		titleName,
  	}
}
</script>

<style scoped lang="less">
	.select-location{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: #f5f5f5;
		-webkit-overflow-scrolling: touch;
		z-index: 12;
	}
	.hot-location > header,.brands-model header{
		height: 30px;
		line-height: 30px;
		padding: 0 15px;
		color: #999;
		font-size: 12px;
	}
	.hot-location{
		margin-bottom: 20px;
		ul{
			overflow: hidden;
			padding: 10px;
			background: #fff;
			li{
				float: left;width: 33.3%;
				span{
					display: block;
					height: 30px;
					line-height: 30px;
					margin: 5px;
					color: #333;
					font-size: 14px;
					text-align: center;
					border: 1px solid #ddd;
					border-radius: 4px;
					padding: 0 15px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
	.brands-model{
		position: relative;
		ul{
			padding: 0 15px;
			background: #fff;
			li{
				height: 44px;
				line-height: 44px;
				border-bottom: 1px solid #eee;
				font-size: 16px;
				color: #333;
				&:last-child{
					border: none;
				}
			}
			.selected{
				color: #f60;
			}
		}
	}
	.select-city{
		position: fixed;
		top: 0;
		left:75px;
		right: 0;
		height: 100%;
		overflow: hidden;
		z-index: 15;
		-webkit-transform: translate3d(100%,0,0);
		transform: translate3d(100%,0,0);
		-webkit-box-sizing: border-box;
    	box-sizing: border-box;
    	-webkit-transition: transform .3s ease-out;
    	transition: transform .3s ease-out;
    	box-shadow: -2px 2px 2px 2px #d6d6d6;
    	&.visible{
	    	-webkit-transform: translate3d(0,0,0);
	    	transform: translate3d(0,0,0);
    	}
    	.sidebar-container{
    		position: relative;
    		height: 100%;
    		overflow: auto;
    		background: #fff;
    		-webkit-overflow-scrolling: touch;
				box-shadow: -2px 2px 2px 2px #d6d6d6;
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
    				font-size: 18px;
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
						&.selected{
							color:#f60;
						}
    			}
    		}
    	}
	}
</style>
