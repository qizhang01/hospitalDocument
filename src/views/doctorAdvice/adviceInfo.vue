<template>
	<div class="home-box">
		<el-card>
			<div>
                <el-tag  v-for=" data in mockData" :key="data.id" type="danger" >{{data.name}}</el-tag>
			</div>

		</el-card>
		<el-card>
            <el-table
				:data="[]"
                border
			>
				<el-table-column prop="time" label="组号" >
				</el-table-column>
				<el-table-column prop="way" label="名称" >
				</el-table-column>
				<el-table-column prop="score" label="规格" >
				</el-table-column>
				<el-table-column prop="strength" label="剂量" >
				</el-table-column>
                <el-table-column prop="position" label="剂量单位" >
				</el-table-column>
				<el-table-column prop="character" label="用法">
				</el-table-column>
				<el-table-column prop="type" label="频度" >
				</el-table-column>
				<el-table-column prop="doctor" label="开嘱医生" >
				</el-table-column>
                <el-table-column prop="action" label="起始时间" >
				</el-table-column>
				<el-table-column prop="sign" label="停止时间" >
				</el-table-column>
			</el-table>
            <div class="topic">药物执行明细</div>
            <el-table
				:data="[]"
                border
			>
				<el-table-column prop="time" label="执行时间状态" >
				</el-table-column>
				<el-table-column prop="way" label="医嘱" >
				</el-table-column>
				<el-table-column prop="score" label="用法" >
				</el-table-column>
				<el-table-column prop="strength" label="频度" >
				</el-table-column>
                <el-table-column prop="position" label="开始" >
				</el-table-column>
				<el-table-column prop="character" label="结束">
				</el-table-column>
				<el-table-column prop="type" label="计划执行时间" >
				</el-table-column>
				<el-table-column prop="doctor" label="状态" >
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

.topic {
    margin: 20px 0px 10px;
}
</style>

<script setup>
import RolesDialog from "./components/roles.vue";
import UploadExcel from "@/components/UploadExcel";
import patientCard from "./components/patientCard.vue";
import { ref, onMounted, watch } from "vue";
import { getAdmintorList, getRoleList } from "@/api/api";
import { useRouter } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import mockData, {useInfoArr} from './data'

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

const tableData = ref([]);
const total = ref(0);
const loading = ref(false);
const roleList = ref([]);

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
				tableData.value = data.obj;
				total.value = Number(data.page_info.total_items);
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
/**
 * 查看按钮点击事件
 */
const onShowClick = row => {
	router.push({
		path: "/account/detail",
		query: row
	});
};
/**
 * 删除按钮点击事件
 */
const onRemoveClick = row => {
	ElMessageBox.confirm(
		"确定要删除" + row.account + "吗",
		{ type: "warning" }
	).then(async() => {
		// await deleteUser(row._id)
		ElMessage.success("删除成功");
		// 重新渲染数据
		await getListData();
	});
};

/**
 * 查看角色的点击事件
 */
const selectUserId = ref("");
const roleDialogVisible = ref(false);
const onShowRoleClick = row => {
	// 真实环境应该获取用户id，但这里mock数据我们直接使用角色名字去匹配
	selectUserId.value = row.role_name;
	roleDialogVisible.value = true;
};

// 保证每次打开重新获取用户角色数据
watch(roleDialogVisible, val => {
	if (!val) selectUserId.value = "";
});

const searchEvent = () => {
	console.log(searchForm.value);
	searchForm.value.page = 1;
	getListData();
};

/** * 用户导入参数 */
const upload = ref({
	// 是否显示弹出层（用户导入）
	open: false,
	// 弹出层标题（用户导入）
	upLoadTitle: "账号导入"
});

/** 导入按钮操作 */
function handleImport() {
	upload.value.open = true;
}
/** 文件上传成功处理 */
const onSuccess = (response, file, fileList) => {
	upload.value.open = false;
	getListData();
};
const onDownTemplate = () => {
	ElMessage.error("演示模式");
};
</script>

<script>
    export default {
        name: "admin-list"
    };
</script>