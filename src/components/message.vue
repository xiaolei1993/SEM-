<template>
	<!-- 用户信息 -->
	<div class="message">
		<ul class="form-list" id="form_list">
			<li class="liname">
				<input type="text" name="username" @focus="focusText('name')" @input="importText('name',$event.target.value)" @blur="blurText('name')" value="" placeholder="您的姓名" style="color: #333;" maxlength="4" class="user-name" id="idname"  :class="{'input-focus':nameFocus}">
				<span class="stars">*</span>
			</li>
			<li class="litel">
				<input type="tel" id="phone_num" @focus="focusText('phone')"  @input="importText('phone',$event.target.value)" @blur="blurText('phone')" name="phone" value="" placeholder="请填写您的手机号" style="color: #333;" maxlength="11" class="phone-num"  :class="{'input-focus':phoneFocus}">
				<span class="stars">*</span>
			</li>
			<li class="got-car font" @click="clickArea" id="select_region">
				<span class="caption">提车地区</span>
				<p class="area-show">
          <span id="province" v-show="notLocation == ''">{{locationInfo.provinceName}}</span><span id="city" class="city"  v-show="notLocation == ''">{{locationInfo.cityName}}</span>
					<span v-show="notLocation != ''" class="not-location">{{notLocation}}</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props:["nameFocus","phoneFocus",'locationInfo','notLocation'],
  	data () {
    	return {

    	}
  	},
  	methods: {
  		clickArea(){
        	this.$emit('clickArea')
  		},
      	focusText(type){
			this.$emit('focusText',type)
      	},
      	blurText(type){
			this.$emit('blurText',type)
      	},
		//输入输入框
		importText(type,value){
			this.$emit('importText',type,value)
		}
  	},
}
</script>

<style scoped lang="less">
	.message{
		padding-top: 15px;
		background: #fff;
		overflow: hidden;
	}
	.form-list{
		li{
			position: relative;
			padding: 0 15px;
			overflow: hidden;
		}
		.litel{
			margin-top: 15px;
		}
		.got-car{
			position: relative;
			padding: 0 15px 0 90px;
			height: 45px;
			line-height: 45px;
			margin-top: 15px;
			border-top: 1px solid #eee;
				&:after{
					position: absolute;
					right: 15px;
					top: 0;
					font-family: 'enquiry';
					content: "\53f3";
					font-size: 14px;
					color: #ddd;
				}
		}
	}

	.user-name{
		width: 100%;
		height: 48px;
		line-height: 16px;
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 16px 0 16px 30px;
		font-size: 16px;
		color: #999;
	}
	.phone-num{
		width: 100%;
		height: 48px;
		line-height: 16px;
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 16px 0 16px 30px;
		font-size: 16px;
		color: #999;
	}
  .input-focus{
    border-color:#f60;
  }
	.stars{
		position: absolute;
		top: 17px;
		left: 25px;
		font-size: 14px;
		color: #f60;
		vertical-align: middle;
	}
	.caption{
		position: absolute;
		top: 0;
		left: 0;
		width: 90px;
		text-align: center;
		font-size: 14px;
		color: #333;
		&:before{
			content: "*";
			color: #f60;
			vertical-align: middle;
			margin-right: 2px;
		}
	}
	.area-show{
		font-size: 14px;
		color: #333;
		.city{
			margin-left:10px;
		}
		.not-location{
			color:#f60;
		}
	}
</style>
