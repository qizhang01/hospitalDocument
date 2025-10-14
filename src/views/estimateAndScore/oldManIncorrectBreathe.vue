<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="老年住院患者误吸风险评估表"></top-title>
        <table>
          <thead>
            <tr>
              <td rowspan="2">项目</td>
              <td rowspan="2">患者风险清单</td>
              <td colspan="10">评估日期和结果</td>
            </tr>
            <tr class="date_sign">
              <td class="vertical-text">2025-09-02</td>
              <td class="vertical-text"></td>
              <td class="vertical-text"></td>
              <td class="vertical-text">333</td>
            </tr>
          </thead>
        </table>
        <operate-tools @handleCreate="handleCreate"></operate-tools>
        <el-dialog
          v-model="dialogVisible"
          title="新增"
          width="80%"
        >
          <oldManIncorrectBreatheCreate></oldManIncorrectBreatheCreate>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">
                Confirm
              </el-button>
            </div>
          </template>
        </el-dialog>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 auto;
    width: 96%;
    height: 100%;
  }
  table {
	border-collapse: collapse;
	width: 80%;
  margin: 16px auto;
  }
  td {
	border: 1px solid #ccc;
	width: 12px;
	height: 16px;
	text-align: center;
}

</style>

<script setup>
  import topTitle from './components/topTitle.vue';
  import operateTools from './components/operateTools.vue';
  import { ref } from 'vue'
  import oldManIncorrectBreatheCreate from './editors/oldManIncorrectBreatheCreate.vue';
  const dialogVisible = ref(false)
  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }

  const handleCreate=()=>{
    dialogVisible.value=true
  }
  
</script>