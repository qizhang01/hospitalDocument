<template>
	<div class="home-box">
		<el-form v-show="showSearch" :inline="true" :model="searchForm">
			<el-form-item label="日期">
				    <el-date-picker v-model="searchForm.date" type="date" placeholder="选择日期">
    				</el-date-picker>
			</el-form-item>
			<el-form-item label="时段" prop="timePeriod">
				<el-input-number v-model="searchForm.timePeriod" controls-position="right" :min="0" />
			</el-form-item>
			<el-form-item>
				<el-button
					v-auth="'/adminAuth/getRoleList'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					导出exxel
				</el-button>
			</el-form-item>
			<el-form-item>
				<el-button
					v-auth="'/adminAuth/getRoleList'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					保存
				</el-button>
			</el-form-item>
			<el-form-item>
				<el-button
					v-auth="'/adminAuth/getRoleList'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					打印
				</el-button>
			</el-form-item>
		</el-form>
		<el-card>
			<el-table
				v-loading="loading"
				:data="tableData"
				element-loading-text="加载中..."
				border
				:row-style="{height: '40px'}"
			>
				<el-table-column prop="isFull" label="满页" width="60">
				</el-table-column>
				<el-table-column prop="calendar" label="节气" width="60">
				</el-table-column>

				<el-table-column prop="bedNo" label="床号" width="80">
					<template #default="{ row }">
						
					</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>

				<el-table-column prop="temperatureType" label="体温类型" width="90">
				</el-table-column>

			    <el-table-column prop="temperatureNumber" label="体温(*C)">
				</el-table-column>
								
				<el-table-column prop="pulse" label="脉搏(次/分)" width="100">
				</el-table-column>
								
				<el-table-column prop="breathe" label="呼吸(次/分)" width="100">
				</el-table-column>
								
				<el-table-column prop="stool" label="大便(次)">
				</el-table-column>

				<el-table-column prop="bloodPressure" label="血压(mmHg)" width="110">
				</el-table-column>
				<el-table-column prop="other" label="其他" width="60">
				</el-table-column>
				<el-table-column prop="pulseCondition" label="脉象" width="60">
				</el-table-column>
				<el-table-column prop="calendar" label="舌象" width="60">
				</el-table-column>


				<el-table-column prop="weight" label="体重(kg)">
				</el-table-column>

			    <el-table-column prop="heartRate" label="心率(次/分)" width="100">
				</el-table-column>
								
				<el-table-column prop="painScore" label="疼痛评分" width="90">
				</el-table-column>
								
				<el-table-column prop="urinate" label="小便(ml)">
				</el-table-column>
								
				<el-table-column prop="24HIn" label="24H入量(ml)" width="110">
				</el-table-column>

				<el-table-column prop="24HOut" label="24H出量(ml)" width="110">
				</el-table-column>
				<el-table-column prop="drainage" label="引流量(ml)" width="100">
				</el-table-column>
				<el-table-column prop="drugAllergy1" label="药物过敏1" width="110">
				</el-table-column>
				<el-table-column prop="drugAllergy2" label="药物过敏2" width="110">
				</el-table-column>
				<!-- <el-table-column prop="address" label="操作" min-width="160">
					<template #default="{ row }">
						<el-button
							v-auth="'/adminAuth/setting'"
							type="primary"
							size="small"
							@click="handleEdit(row)"
						>
							配置权限
						</el-button>
					</template>
				</el-table-column> -->
			</el-table>
		</el-card>
	</div>
</template>

<style lang="scss" scoped>
.home-box {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }
  ::v-deep .el-tag {
    margin-right: 6px;
  }
  .pagination {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }

}
</style>

<script setup>

import { ref, onMounted } from "vue";
import { getRoleList } from "@/api/api";
import { ElMessage } from "element-plus";

const showSearch = ref(true);

onMounted(() => {
	getListData();
});

// 数据源
const searchForm = ref({
	timePeriod: "",
	name: "",
	date: "",
	page: 1,
	page_size: 10
});

const tableData = ref([]);
const total = ref(0);
const loading = ref(false);
/**
 * 获取角色列表
 */
const getListData = async() => {
	loading.value = true;

	await getRoleList(searchForm.value)
		.then(data => {
			setTimeout(() => {
				tableData.value =[{},{},{},{},{},{},{},{}];
				loading.value = false;
			}, 1000);
		})
		.catch(() => {
			loading.value = false;
		});
};

/**
 * 分配权限
 */
const handleEdit = row => {

};

</script>
<script>
export default {
	name: "get-role-list"
};
</script>