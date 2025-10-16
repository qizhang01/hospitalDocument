<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="住院患者跌倒风险评估表"></top-title>
        <h3 class="topic">临床判定法</h3>
        <table>
          <thead>
            <tr>
              <td rowspan="2">跌倒风险等级</td>
              <td rowspan="2">患者情况</td>
              <td colspan="10">评估日期和结果</td>
            </tr>
            <tr class="date_sign">
              <td class="vertical-text">333</td>
              <td class="vertical-text"></td>
              <td class="vertical-text"></td>
              <td class="vertical-text">333</td>
            </tr>
          </thead>
        </table>
      	<el-dialog
            :model-value ="dialogVisible"
            title="新建(住院患者跌倒风险评估表)"
            width="80%"
            :show-close = "false"
        >
			<patientInHospitalFallenEditor></patientInHospitalFallenEditor>
			<template #footer>
				<div class="dialog-footer">
				<el-button @click="closeCreate">Cancel</el-button>
				<el-button type="primary" @click="closeCreate">
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
.topic {
    width: 100%;
    text-align: center;
}

</style>

<script setup>
  import topTitle from './components/topTitle.vue';
  import patientInHospitalFallenEditor from './editors/patientInHospitalFallenEditor.vue';
  import { computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore();
  const dialogVisible = computed(() =>
    store.getters.newCreateDialogOpened? true: false
  );

  const closeCreate=()=>{
    store.commit("app/closeNewCreateDialogOpened");
  }
  
  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }
  
  const handleSelectPainType=(index, item)=>{

  }
  const handleSelectSymptomType=(index, item)=>{

  }
</script>