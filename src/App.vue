<template>
	<div id="app">
	    <router-view></router-view>
	</div>
</template>

<script>
import router from './router'
import Tool from './common/Tools'
export default {
   	name: 'app',
   	router,
   	created(){
   		router.push('/home')
   	}
}
</script>

<style scoped>

</style>
