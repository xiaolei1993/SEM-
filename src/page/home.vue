<template>
	<div class="home">
		<title-name :titleName="titleName" @goback="goback" hideBack="hideBack"></title-name>
		<swiper v-if="imgList.ok" :imgList="imgList"></swiper>
		<message ref="scrolltop" @clickArea="clickArea" @focusText="focusText" @blurText="blurText" @importText="importText" :nameFocus="nameFocus" :phoneFocus="phoneFocus" :locationInfo="locationInfo" :notLocation="notLocation"></message>
		<parameter :parameterData="parameterData"></parameter>
		<footer-bar></footer-bar>
		<!-- 吸底按钮 -->
		<div class="submit" @click="commitData">
			<p>询底价</p>
			<span>{{priceNumber > 10 ? '已有' + priceNumber + '人询价' : '已有10人+询价'}}</span>
		</div>
		<sidebar v-show="locationShow" :provinceList="provinceList" @goback="goback" @getCity="getCity" @selectCity="selectCity" @selectHotLocation="selectHotLocation"></sidebar>
		<prompt v-show="promptShow" :promptText="promptText" @closeBtn="closeBtn"></prompt>
	</div>
</template>

<script type="text/babel">
import titleName from '../components/header.vue'
import swiper from '../components/swiper.vue'
import message from '../components/message.vue'
import parameter from '../components/parameter.vue'
import footerBar from '../components/footer.vue'
import submit from '../components/submit.vue'
import sidebar from '../components/sidebar.vue'
import prompt from '../components/prompt.vue'
import router from '../router'

export default {
	data () {
		return {
			//提交询底价最终数据
			priceData:{
				// 姓名
				relname:'',
				tel:'',
				//省份id
				provincesn:'',
				citysn:'',
			},

			// 地区信息
			locationInfo:{
				provinceName:'',
				provinceId:'',
				cityName:'',
				cityId:'',
			},
			notLocation:'请选择提车地区',

		    id:'23732',
		    titleName:'',
		    parameterData:[],
		    provinceList:[],
		    locationShow:false,
		    imgList:{},
			priceNumber:'',

			// 姓名和电话输入框状态和内容
			nameFocus:false,
			phoneFocus:false,

			//显示手机号码不正确
			promptShow:false,
			promptText:''
		}
	},
methods:{
    goback(type){
      	if(type == 'closeLocation'){
        	this.locationShow = false;
      	}else{
        	router.go(-1)
      	}
    },
    //显示地区弹层
    clickArea(){
      	this.locationShow = true;
    },
	focusText(type){
		if(type == 'name'){
			this.nameFocus = true;
		}else{
			this.phoneFocus = true
		}
	},
	blurText(type){
		if(type == 'name'){
			this.nameFocus = false;
		}else{
			this.phoneFocus = false;
		}
	},
	// 输入框输入
	importText(type,value){
		if(type == 'name'){
			this.priceData.relname = value;
		}else if(type == 'phone'){
			this.priceData.tel = value;
		}

	},
	closeBtn(){
		this.promptShow = false;
	},
		//点击省份，获取城市
		getCity(locationInfo){
			//给最终数据赋值
			this.notLocation = ''
			this.priceData.provincesn = locationInfo.provinceId;
			this.priceData.citysn = '';
			//存储省份名字和id
			this.locationInfo = locationInfo
			this.notLocation = '请选择提车地区'
		},
		//点击城市，选择城市
		selectCity(locationInfo){
			//给最终数据赋值
			this.priceData.provincesn = locationInfo.provinceId;
			this.priceData.citysn = locationInfo.cityId;
			//存储省份名字和id
			this.locationInfo = locationInfo
			this.notLocation = ''
		},
		//点击热门城市
		selectHotLocation(locationInfo){
			//给最终数据赋值
			this.provincesn = locationInfo.provinceId;
			this.citysn = locationInfo.cityId;
			//存储省份名字和id
			this.locationInfo = locationInfo
		},
		scrollTop(){
			let app = document.querySelector('#app');
			app.scrollTop = this.$refs.scrolltop.$el.getBoundingClientRect().top
		},
		//最终提交询底价线索
		commitData(){
			this.scrollTop();
			//如果姓名为空
			if(this.priceData.relname == ''){
				this.promptShow = true;
				this.promptText = '请输入您的姓名'
				this.nameFocus = true;
				ga('send', 'event', 'SEM询底价页', '询底价失败', '请输入您的姓名');
				return ;
			}
			//如果手机号为空 ||格式	不正确
			// 判断手机号码格式
			let phone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if(!phone.test(this.priceData.tel)){
				this.promptShow = true;
				this.promptText = '请输正确的手机号码'
				this.phoneFocus = true;
				ga('send', 'event', 'SEM询底价页', '询底价失败', '请输入正确的手机号');
				return ;
			}

			if(this.priceData.provincesn == '' || this.priceData.citysn == ''){
				this.notLocation = '请选择提车地区'
				this.promptShow = true,
				this.promptText = '请选择提车地区'
				ga('send', 'event', 'SEM询底价页', '询底价失败', '请选择地区');
				return ;
			}
			$.get('https://dealer-api.360che.com/Dealer/submitDealerClues.aspx?accountid=0&relname='+ this.priceData.relname +'&tel='+ this.priceData.tel +'&categoryid=1&subcategoryid=63&brandid=1139&seriesid=6624&truckid=' + this.id + '&truckname=' + this.titleName + '&provincesn='+ this.priceData.provincesn +'&citysn='+ this.priceData.citysn +'&townsn=&ip=&isold=1&remark=&buycount=1&clueresource=5',(ele) => {
				if(ele.isok == '1'){
					this.$router.push('/success');
					ga('send', 'event', '完成询底价', 'SEM询底价', '');
				}else{
					ga('send', 'event', 'SEM询底价页', '询底价失败', '报错信息');
					alert(ele.result)
				}
			},'json')
		}
},
created(){
	if(productId){
		this.id = productId
	}

	//查看是否有缓存选择当前地区，如果有，读取本地选择信息
	let locationInfo = localStorage.getItem('selectLocation');
	if(locationInfo){
		this.locationInfo = JSON.parse(locationInfo)
		//给最终数据赋值地区信息
		this.priceData.provincesn = this.locationInfo.provinceId;
		this.priceData.citysn = this.locationInfo.cityId;
		this.notLocation = ''
	}

	//获取配置数据
    $.get('https://dealer-api.360che.com/ProductAPI/getproduct_param.aspx?isSem=1&id='+ this.id,(ele) => {
    	
      	if(ele.info == 'ok'){
        //配置数据
        	this.titleName = ele.data[this.id].proName;
        	this.parameterData = ele.data[this.id].params;
        	console.log(this.parameterData)
      	}
    },'json');

	//获取省份
    $.get('https://dealer-api.360che.com/Dealer/getProvinceList.aspx',(ele) => {
        this.provinceList = ele;
    },'json');

	//获取图片列表信息
    $.get('https://dealer-api.360che.com/ProductAPI/getproduct_img.aspx?productid=' + this.id,(ele) => {
	    if(ele.info == 'ok'){
	        this.imgList = ele.data;
	        this.imgList.ok = true;
	        console.log(ele.data)
    	}
    },'json')

		//获取询底价数量
	$.get('https://dealer-api.360che.com/Dealer/getProductCluesCount.aspx?productid=' + this.id,(ele) => {
		 //标题
		if(ele.CluesCount > 10){
			this.priceNumber = ele.CluesCount;
		}
	},'json')
  	},
	components:{
		titleName,
		swiper,
		message,
		parameter,
		footerBar,
		submit,
		sidebar,
		prompt,
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
