<template>
	<v-app>
		<transition name="fade" mode="out-in">
			<v-main :key="$route.path">
				<router-view />
			</v-main>
		</transition>
	</v-app>
</template>
<style>
	.theme--light.v-application {
		background-color: #ffdbdb;
		background-image: url("~assets/bg.svg");
		background-attachment: fixed;
		background-size: 300px;
		box-shadow: inset 100vw 100vw rgba(255, 255, 255, 0.95);
	}
	.v-application
		.white.white.white.white.white.white.white.white.white.white.white {
		background: transparent !important;
	}
</style>
<script> 
export default {
	name: "App",
	data: () => ({}),
	destroyed() { },
	created() { },
	methods: {},
};
</script>