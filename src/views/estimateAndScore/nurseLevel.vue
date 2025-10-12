<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="住院患者护理分级评估表"></top-title>
        <table>
          <thead>
            <tr>
              <td colspan="3" class="first-cell">Barthel指数评定量表(B1)</td>
              <td colspan="10">评估日期</td>
            </tr>
            <tr class="date_sign">
                <td >项目</td>
                <td >内容说明</td>
                <td >分值</td>
                <td >10-02 12:35</td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
            </tr>
          </thead>
      </table>
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
.first-cell {
    width: 45%;
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
  
</script>