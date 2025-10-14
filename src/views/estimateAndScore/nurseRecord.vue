<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="护理记录单"></top-title>
        <table>
          <thead>
            <tr>
                <td rowspan="3">日期时间</td>
                <td rowspan="3">护理级别</td>
                <td rowspan="3">饮食</td>
                <td rowspan="3">神志</td>
                <td colspan="2">瞳孔cm</td>
                <td rowspan="3">T*C</td>
                <td rowspan="3">P 次/分</td>
                <td rowspan="3">R 次/分</td>
                <td rowspan="3">BP mmHG</td>
                <td rowspan="3">疼痛评估/分</td>
                <td colspan="4">导管等评估/视察</td>
                <td rowspan="3">用氧及护理</td>
                <td rowspan="3">晨护/晚护</td>
                <td rowspan="3">导管安全措施</td>
                <td rowspan="3">防压力性损伤护理</td>
                <td rowspan="3">防跌倒护理</td>
                <td rowspan="3">健康教育指导</td>
                <td rowspan="3">输液量 ml</td>
                <td rowspan="3" class="wide-cell">治疗, 视察, 护理效果评价</td>
                <td rowspan="3">通知医生</td>
                <td rowspan="3">护士签名</td>
            </tr>
            <tr class="date_sign">
                <td colspan="2">对光反应</td>

                <td rowspan="2">切口伤口渗出</td>
                <td rowspan="2">静脉留置部位外露cm</td>
                <td rowspan="2">胃管位于/cm</td>
                <td rowspan="2"></td>
            </tr>
            <tr class="date_sign">
                   <td>左</td>  
                   <td>右</td>  
            </tr>
          </thead>
      </table>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 auto;
    width: 99%;
  }
  table {
	border-collapse: collapse;
	width: 100%;
  margin: 16px auto;
  }
  td {
	border: 1px solid #ccc;
	width: 12px;
	height: 16px;
	text-align: center;
    padding: 0px 4px;
}
.wide-cell {
    width: 80px;
}

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
  
  const handleSelectPainType=(index, item)=>{

  }
  const handleSelectSymptomType=(index, item)=>{

  }
</script>