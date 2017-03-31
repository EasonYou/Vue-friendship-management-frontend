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
			if(id === 'genderRatio') {
				this.$store.dispatch('getGenderRatio', {
					vue: this,
					id: id,
					options: charts.pie
				})
			}
			if(id === 'numberLine') {
				console.log('hhe')
				this.$store.dispatch('getNumberLine', {
					vue: this,
					id: id,
					options: charts.line
				})
			}
		},
		created () {
		},
		watch: {
			$route (to, from) {
				console.log(to, from)
				if(to.params.id === 'genderRatio') {
					this.$store.dispatch('getGenderRatio', {
						vue: this,
						id: to.params.id,
						options: charts.pie
					})
				}
				if(to.params.id === 'numberLine') {
					this.$store.dispatch('getNumberLine', {
						vue: this,
						id: to.params.id,
						options: charts.line
					})
				}
 			}
		}
	}
</script>
<style lang="scss">
	.chars-col {
		width: 100%;
		height: 100%;
		.charts {
			width: 100%;
			height: 90%;
			// margin: 100px;
		}
	}
</style>