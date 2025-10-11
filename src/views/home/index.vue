<template>
	<el-row :gutter="20" >
		<el-col :span="18">
			<el-container class="fdc" style="margin-top: 10px">
			</el-container>
		</el-col>
	</el-row>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';

$success: #67c23a;
$warning: #e6a23c;
$danger: #f56c6c;
$primary: #409eff;

.box-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;
  height: 10rem;

}
.c1 {
  box-shadow: 3px 3px 10px $success;
}


.fdc {
  display: flex;
  flex-direction: column;
}
.t1 {
  width: 1rem;
  color: $success;
}

</style>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
	initChart();
});

const initChart = () => {

};

</script>