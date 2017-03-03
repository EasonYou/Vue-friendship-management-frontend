<template>
	<el-col :span="21" class="home-col">
		<div id="cont">
			<ul>
				<li v-for="list in userLists">{{list}}></li>
			</ul>
			<el-button @click="logout">dengchu</el-button>
		</div>
	</el-col>
</template>
<script>
	import FSMenu from '../components/FSMenu'
	import echarts from 'echarts'
	export default {
		components: {
			FSMenu
		},
		computed: {
			userLists () {
				return this.$store.getters.userLists
			}
		},
		methods: {
			logout () {
				this.$store.dispatch('logout', this)
			}
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
		height: 200%;
	}
}
</style>