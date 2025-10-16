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
        <!-- <operate-tools @handleCreate="handleCreate"></operate-tools> -->
        <el-dialog
          :model-value ="dialogVisible"
          title="新建(老年住院患者误吸风险评估表)"
          width="80%"
          :show-close = "false"
        >
          <oldManIncorrectBreatheCreate></oldManIncorrectBreatheCreate>
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
  import { computed } from 'vue'
  import oldManIncorrectBreatheCreate from './editors/oldManIncorrectBreatheCreate.vue';
  import { useStore } from "vuex";

  const store = useStore();
  const dialogVisible = computed(() =>
    store.getters.newCreateDialogOpened? true : false
  );

  // const dialogVisible =  store.getters.newCreateDialogOpened

  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }

  const closeCreate=()=>{
    store.commit("app/closeNewCreateDialogOpened");
  }
</script>