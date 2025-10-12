<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="保护性约束评估记录单"></top-title>
        <table>
          <thead>
            <tr>
              <td rowspan="3">日期时间</td>
              <td colspan="2">有无医嘱</td>
              <td colspan="2">是否镇静</td>
              <td rowspan="3">约束原因</td>
              <td rowspan="3">意识</td>
              <td rowspan="3">部位</td>
              <td colspan="2">松懈</td>
              <td colspan="2">被动活动</td>
              <td colspan="6" class="wide-cell">约束部位皮肤观察</td>
              <td rowspan="3">松紧度</td>
              <td rowspan="3">体位</td>
              <td rowspan="3">签名</td>
            </tr>
            <tr class="date_sign">
              <td rowspan="2">有</td>
              <td rowspan="2">无</td>
              <td rowspan="2">是</td>
              <td rowspan="2">否</td>
              <td rowspan="2">是</td>
              <td rowspan="2">否</td>
              <td rowspan="2">是</td>
              <td rowspan="2">否</td>
              <td colspan="2">颜色</td>
              <td colspan="2">温度</td>
              <td colspan="2">损伤</td>
            </tr>
            <tr class="date_sign">
                   <td>正</td>  
                   <td>异</td>  
                   <td>冷</td>  
                   <td>热</td>  
                   <td>有</td>  
                   <td>无</td>  
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
// .wide-cell {
//     width: 80px;
// }

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