<template>
	<div class="home-box">
		<el-form v-show="showSearch" :inline="true" :model="searchForm">
			<el-form-item label="操作时间" style="width: 308px;">
				<el-date-picker
					v-model="searchForm.date"
					value-format="YYYY-MM-DD"
					type="daterange"
					range-separator="-"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				></el-date-picker>
			</el-form-item>

			<el-form-item>
				<el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					查询
				</el-button>
			</el-form-item>
		</el-form>

		<el-card>
			<div>
                <el-tag  v-for=" data in mockData" :key="data.id" type="danger" >{{data.name}}</el-tag>
			</div>
			<div class="patient-card-container">
                <patientCard v-for="userInfo in useInfoArr" :key="userInfo.id" :patientInfo="userInfo" class="single-patient-card" ></patientCard>
			</div>
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