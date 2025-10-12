<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="疼痛评估记录单"></top-title>
        
            <el-table
				:data="[]"
                border
			>
				<el-table-column prop="time" label="日期时间" >
				</el-table-column>
				<el-table-column prop="way" label="评估工具" >
				</el-table-column>
				<el-table-column prop="score" label="疼痛评分" >
				</el-table-column>
				<el-table-column prop="strength" label="疼痛强度" >
				</el-table-column>
                <el-table-column prop="position" label="疼痛部位" >
				</el-table-column>
				<el-table-column prop="character" label="疼痛性质">
				</el-table-column>
				<el-table-column prop="type" label="疼痛类型" >
				</el-table-column>
				<el-table-column prop="doctor" label="通知医生" >
				</el-table-column>
                <el-table-column prop="action" label="护理措施" >
				</el-table-column>
				<el-table-column prop="sign" label="签名" >
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
  import topTitle from './components/topTitle.vue';
  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }
  
</script>