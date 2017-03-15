<template>
	<div class="chars-col slide el-col el-col-21">
		<div class="charts"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	import charts from '../charts'
	export default {
		computed: {
			genderRatio () {
				return this.$store.getters.genderRatio
			}
		},
		mounted () {
			let id = this.$route.params.id
			this.$store.dispatch('getGenderRatio', {
				vue: this,
				id: id,
				options: charts.pie
			})
		},
		created () {
		}
	}
</script>
<style lang="scss">
	.chars-col {
		width: 100%;
		height: 100%;
		.charts {
			width: 100%;
			height: 100%;
		}
	}
</style>