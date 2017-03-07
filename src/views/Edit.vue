<template>
	<el-col :span="21" class="home-col">
		{{ userDetail }}
	</el-col>
</template>
<script>
	export default {
	computed: {
		userDetail () {
			return this.$store.getters.userDetail
		}
	},
	created() {
		let id = this.$route.params.id
		this.$store.dispatch('edit', {
			vue: this,
			id: id
		})
	}
}
</script>