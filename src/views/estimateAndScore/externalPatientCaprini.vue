<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="外科住院患者Caprini静脉血栓栓塞症评估表"></top-title>
        <table>
          <thead>
            <tr>
              <td rowspan="2">项目</td>
              <td rowspan="2">内容说明</td>
              <td rowspan="2">评估分值</td>
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
            title="新建(外科住院患者Caprini静脉血栓栓塞症评估表)"
            width="80%"
            :show-close = "false"
        >
			<externalPatientCapriniEditor></externalPatientCapriniEditor>
			<template #footer>
				<div class="dialog-footer">
				<el-button @click="closeCreate">取消</el-button>
				<el-button type="primary" @click="closeCreate">
					确定
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

</style>

<script setup>
    import topTitle from './components/topTitle.vue';
    import { computed } from 'vue'
    import { useStore } from "vuex";
    import externalPatientCapriniEditor from './editors/externalPatientCapriniEditor.vue';
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