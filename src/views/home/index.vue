<template>
	<el-row :gutter="20" class="fdr">
		<el-col :span="18">
			<el-container class="fdc" style="margin-top: 10px">
				<el-row :gutter="20" class="fdr">
					<el-col :span="8">
						<el-card shadow="hover" class="box-card c1">
							<template #header>
								<h3 class="t1">Vue</h3>
							</template>
							<el-progress type="dashboard" :percentage="51.6" status="success">
								<template #default="{ percentage }">
									<span class="percentage-value t1">{{percentage}}%</span>
								</template>
							</el-progress>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" class="box-card c2">
							<template #header>
								<h3 class="t2">JavaScript</h3>
							</template>
							<el-progress type="dashboard" :percentage="40.7">
								<template #default="{ percentage }">
									<span class="percentage-value t2">{{percentage}}%</span>
								</template>
							</el-progress>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" class="box-card c3">
							<template #header>
								<h3 class="t3">HTML+CSS</h3>
							</template>
							<el-progress type="dashboard" :percentage="7.7" status="warning">
								<template #default="{ percentage }">
									<span class="percentage-value t3">{{percentage}}%</span>
								</template>
							</el-progress>
						</el-card>
					</el-col>
				</el-row>
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
.c2 {
  box-shadow: 3px 3px 10px;
  box-shadow: 3px 3px 10px $primary;
}
.c3 {
  box-shadow: 3px 3px 10px $warning;
}
.c4 {
  box-shadow: 3px 3px 10px #909399;
}
.c5 {
  box-shadow: 3px 3px 10px $danger;
}
.fdr {
  display: flex;
  flex-direction: row;
}
.fdc {
  display: flex;
  flex-direction: column;
}
.t1 {
  width: 1rem;
  color: $success;
}
.t2 {
  width: 1rem;
  color: $primary;

}
.t3 {
  width: 1rem;
  color: $warning;

}

</style>

<script setup>
import { ref, onMounted } from "vue";

const list = ref([
	"1、接口模块封装方案",
	"2、请求动作封装方案",
	"3、token 处理方案",
	"4、动态路由表处理方案",
	"5、动态菜单项处理方案",
	"6、动态面包屑处理方案",
	"7、历史打开页面TagsView 处理方案",
	"8、RBAC 的权限分控体系",
	"9、页面权限处理方案",
	"10、功能权限处理方案",
	"11、辅助库选择标准",
	"12、富文本编辑器处理方案",
	"13、keepAlive页面缓存处理方案",
	"14、多种企业级别组件的封装"

]);

onMounted(() => {
	initChart();
});

const initChart = () => {

};

</script>