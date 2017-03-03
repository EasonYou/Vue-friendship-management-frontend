<template>
	<el-col :span="21" class="home-col">
		<div id="cont"></div>
	</el-col>
</template>
<script>
	import FSMenu from '../components/FSMenu'
	import echarts from 'echarts'
	export default {
		components: {
			FSMenu
		},
        created () {
            this.$store.dispatch('getUserLists', this)
        },
		mounted () {
		}
	}
</script>
<style lang="scss">
.home-col {
	#cont {
		width: 100%;
		height: 100%;
	}
}
</style>