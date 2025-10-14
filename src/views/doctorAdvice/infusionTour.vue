<template>
	<div class="home-box">
		<el-card>
			<div>
                <el-tag  v-for=" data in mockData" :key="data.id" type="danger" >{{data.name}}</el-tag>
			</div>
		</el-card>
        <el-card>
			<el-table
				:data="tableData"
				stripe 
				:span-method="objectSpanMethod"
                border
			>
				<el-table-column prop="bedNo" label="床位" >
				</el-table-column>
				<el-table-column prop="name" label="姓名" >
				</el-table-column>
				<el-table-column  label="医嘱" >
					<template #default="{ row }">
						<div v-for="(item, index) in row.drugInfoList" :key="index">{{ item? item.drugName: '' }}</div>
					</template>
				</el-table-column>
				<el-table-column prop="strength" label="数量" >
				</el-table-column>
                <el-table-column prop="frequency" label="频度" >
				</el-table-column>
				<el-table-column prop="flowType" label="流程类型">
				</el-table-column>
				<el-table-column prop="speed" label="滴速" >
				</el-table-column>
				<el-table-column prop="involver" label="执行人" >
				</el-table-column>
                <el-table-column prop="recordTime" label="记录时间" >
				</el-table-column>
				<el-table-column prop="notes" label="备注" >
				</el-table-column>
			</el-table>
		</el-card>
		<!--角色组件-->
		<roles-dialog
			v-model="roleDialogVisible"
			:user-id="selectUserId"
			@updateRole="getListData"
		>
		</roles-dialog>

		<!-- 用户导入对话框 -->
		<!-- <UploadExcel
			v-model="upload.open"
			:title="upload.upLoadTitle"
			:url="switchServerUrl()+ '/public/uploadFile'"
			@onSuccess="onSuccess"
			@onDownTemplate="onDownTemplate"
		>
		</UploadExcel> -->
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
  ::v-deep .avatar {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

}
.patient-card-container{
	display: flex;
	margin-top: 16px;
}
.single-patient-card{
	margin-right: 10px;
}
</style>

<script setup>
import RolesDialog from "./components/roles.vue";
import UploadExcel from "@/components/UploadExcel";

import { ref, onMounted, watch } from "vue";
import { getAdmintorList, getRoleList } from "@/api/api";
import { useRouter } from "vue-router";
import mockData from './data'
import {flapArray,useInfoArr } from './util'

const {newList, cobineMap} = flapArray(useInfoArr)

const tableData = ref(
	newList
)

const router = useRouter();

const showSearch = ref(true);

// 数据源
const searchForm = ref({
	id: 0,
	account: "",
	role: "",
	date: "",
	page: 1,
	page_size: 20
});

const total = ref(0);
const loading = ref(false);
const roleList = ref([]);
const selectUserId = ref("");
const roleDialogVisible = ref(false);

const objectSpanMethod=({ row, column, rowIndex, columnIndex })=> {
	if (columnIndex === 0 || columnIndex === 1 ||columnIndex === 2 ) {
		if (cobineMap.get(rowIndex)) {
			return {
				rowspan: cobineMap.get(rowIndex),
				colspan: 1,
			}
		} else {
			return {
				rowspan: 0,
				colspan: 0,
			}
		}
	}
}

onMounted(() => {
	getListData();
	getRoleData();
});

/**
 * 获取账号列表
 */
const getListData = async() => {
	loading.value = true;
	await getAdmintorList(searchForm.value)
		.then(data => {
			setTimeout(() => {
				// tableData.value = data.obj;
				// total.value = Number(data.page_info.total_items);
				loading.value = false;
			}, 1000);
		})
		.catch(() => {
			loading.value = false;
		});
};

/**
 * 获取角色列表
 */
const getRoleData = async() => {
	await getRoleList()
		.then(data => {
			roleList.value = data.obj;
		})
		.catch(() => {

		});
};

// 保证每次打开重新获取用户角色数据
watch(roleDialogVisible, val => {
	if (!val) selectUserId.value = "";
});
</script>

<script>
    export default {
        name: "admin-list"
    };
</script>