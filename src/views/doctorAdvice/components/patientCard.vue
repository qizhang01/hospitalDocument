<template>
		<el-card class="patient-card">
			<div class="header">
				<div class="inline">
					<span>床号 {{ patientInfo.bedNo }}</span>
				</div>
				<div class="inline">
					<span>姓名: {{ patientInfo.name }}</span>
				</div>
				<div class="inline">
					<span>性别 {{ patientInfo.gender }}</span>
				</div>
				<div class="inline">
					<span>年龄 {{ patientInfo.age }}</span>
				</div>
				<div class="inline">
					<span>频次 {{ patientInfo.frequency }}</span>
				</div>
				<div class="inline">
					<span>住院号 {{ patientInfo.hospitalNo }}</span>
				</div>
            </div>
            <el-table
				:data="patientInfo.drugInfoList"
			>
				<el-table-column prop="name" label="药名" width="160">
				</el-table-column>
				<el-table-column prop="number" label="数量" width="60">
				</el-table-column>
				<el-table-column prop="dose" label="剂量" width="80">
				</el-table-column>
				<el-table-column prop="usage" label="用法" width="60">
				</el-table-column>
			</el-table>

			<div class="bottom">
				<div class="inline">
					<span>医生嘱托:</span>
				</div>
				<div class="inline">
					<span>备注:</span>
				</div>
				<div class="inline">
					<span>执行者:</span>
				</div>
            </div>
		</el-card>
</template>

<style lang="scss" scoped>
.patient-card {
	width: 400px;
	.header {
		display: flex;
		flex-wrap: wrap;
		.inline {
			margin-right: 8px;
		}
	}
	.bottom {
		display: flex;
	    justify-content: space-between;
		font-size: smaller;
		margin-top: 8px;
	}
}
</style>

<script setup>
import { defineProps, defineEmits, ref, watch, nextTick } from "vue";
import { getRoleList } from "@/api/api";

const props = defineProps({
	patientInfo: {
		type: Object,
		required: true
	},
});
</script>