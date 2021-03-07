<template>
	<v-app>
		<v-app-bar color="white" flat>
			<v-toolbar-title color="primary">請支援貼圖</v-toolbar-title>
			<v-spacer></v-spacer>
			<a
				class="wr-btn"
				target="_blank"
				href="https://github.com/gnehs/tg-message-sticker"
				style="min-width: initial"
			>GitHub</a>
		</v-app-bar>

		<transition name="fade" mode="out-in">
			<v-main :key="$route.path">
				<router-view />
			</v-main>
		</transition>
	</v-app>
</template>
<script>
import Vue from "vue";
export default {
	name: "App",
	data: () => ({}),
	destroyed() { },
	created() { },
	methods: {},
};
</script>