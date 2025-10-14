<template>
	<div class="container">
        <el-form v-show="showSearch" :inline="true" :model="searchForm">
			<el-form-item label="时间范围" style="width: 308px; margin-left: 6px;">
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
            <el-form-item>
				<el-button
					v-auth="'/adminAuth/list'"
					type="primary"
					style="margin-left: -16px"
					@click="searchEvent"
				>
					打印
				</el-button>
			</el-form-item>
		</el-form>
            <el-table
				:data="[]"
                border
			>
				<el-table-column prop="no" label="病人序号" >
				</el-table-column>
				<el-table-column prop="bedNo" label="床号" >
				</el-table-column>
				<el-table-column prop="score" label="姓名" >
				</el-table-column>
				<el-table-column prop="strength" label="性别" >
				</el-table-column>
                <el-table-column prop="position" label="住院号" >
				</el-table-column>
				<el-table-column prop="character" label="年龄">
				</el-table-column>
				<el-table-column prop="level" label="护理级别" >
				</el-table-column>
				<el-table-column prop="nurse" label="巡视护士" >
				</el-table-column>
                <el-table-column prop="notes" label="备注" >
				</el-table-column>
			</el-table>
	</div>
</template>

<style lang="scss" scoped>
//   .container {
//     position: relative;
//     margin: 0 auto;
//     width: 99%;
//   }
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }
  const searchEvent = ()=>{

  }
  const showSearch = ref(true);

// 数据源
const searchForm = ref({
	date: "",
	page: 1,
	page_size: 20
});
</script>