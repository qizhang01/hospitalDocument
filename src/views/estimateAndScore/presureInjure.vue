<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="住院患者Braden压力性损伤危险因素评估表"></top-title>
        <table>
          <thead>
            <tr>
              <td >项目</td>
              <td colspan="4">感觉</td>
              <td colspan="4">潮湿</td>
              <td colspan="4">活动力</td>
              <td colspan="4">移动力</td>
              <td colspan="4">营养</td>
              <td colspan="3">摩檫力和剪切力</td>
              <td rowspan="3">总评分</td>
              <td rowspan="3">评估人签名</td>
              <td rowspan="3">检查者签名</td>
              <!-- <td rowspan="2" class="center_td">分值</td>
              <td colspan="7" class="center_td">评估日期和结果</td> -->
            </tr>
            <tr class="date_sign">
              <td class="vertical-text">病人情况</td>

              <td class="vertical-text">完全受限</td>
              <td class="vertical-text">非常受限</td>
              <td >轻度受限</td>
              <td >未受限</td>

              <td >持续潮湿</td>
              <td >潮湿</td>
              <td >有时潮湿</td>
              <td >很少潮湿</td>

              <td >长期卧床</td>
              <td >可以坐椅子</td>
              <td >偶尔行走</td>
              <td >经常行走</td>

              <td >完全无法移动</td>
              <td >严重受限</td>
              <td >轻度受限</td>
              <td >未受限</td>

              <td >非常差</td>
              <td >可能不足够</td>
              <td >足够</td>
              <td >非常好</td>

              <td >有问题</td>
              <td >有潜在问题</td>
              <td >无明显问题</td>
            </tr>
            <tr class="date_sign">
              <td >分值日期</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >1</td>
              <td >2</td>
              <td >3</td>                         
            </tr>
          </thead>
        </table>
        <el-dialog
            :model-value ="dialogVisible"
            title="新建(住院患者Braden压力性损伤危险因素评估表)"
            width="80%"
            :show-close = "false"
        >
			<pressureInjureEditor></pressureInjureEditor>
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
    import pressureInjureEditor from './editors/pressureInjureEditor.vue';
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