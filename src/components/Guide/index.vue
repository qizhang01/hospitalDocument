<template>
	<div>
		<el-tooltip content="新建文书">
			<svg-icon id="guide-start" icon="guide" @click="onClick" />
		</el-tooltip>
	</div>
</template>

<style scoped></style>

<script setup>
	import { onMounted } from "vue";
	import { useStore } from "vuex";

	const store = useStore();

	onMounted(() => {
	});

	const onClick = () => {
		store.commit("app/openNewCreateDialogOpened");
	};
</script>