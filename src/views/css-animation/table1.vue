<template>
    <div class="table_wrap">
      <!-- <div
        :key="'comKey' + comKey"
        class="container"
        :style="{
          marginTop: marginTop + 'px'
        }"
      >
        <svg width="100%" height="100%"></svg>
      </div> -->
      <table class="temperatureChart">
        <caption>
          <p style="font-size: 20px; font-weight: bold">NICU危重病例评分</p>
          <hr style="margin: 6px 0; color: black;">
          <p style="position: relative; text-align: left">
            <span class="tbale-label">姓名：</span
            ><span
              style="display: inline-block; width: 50px; text-align: left"
              >{{ patientInfo.name }}</span
            >
            <span class="tbale-label">年龄：</span>
            <span
              style="display: inline-block; width: 35px; text-align: left"
              >{{ patientInfo.age }}</span
            >
            <span class="tbale-label">科室：</span>
            <span
              style="display: inline-block; width: 65px; text-align: left"
              >{{ patientInfo.department }}</span
            >
            <span class="tbale-label">性别：</span>
            <span
              style="display: inline-block; width: 35px; text-align: left"
              >{{ patientInfo.gender }}</span
            >
            <span class="tbale-label">出生日期：</span>
            <span
              style="display: inline-block; width: 160px; text-align: left"
              >{{ patientInfo.bornDate }}</span
            >
            <span class="tbale-label">床号：</span>
            <span
              style="display: inline-block; width: 60px; text-align: left"
              >{{ patientInfo.bedNo }}</span
            >
            <span class="tbale-label">健康档案号：</span>
            <span
              style="display: inline-block; width: 100px; text-align: left"
              >{{ patientInfo.documentNo}}</span
            >
          </p>
          <p style="font-size: 14px; font-weight: bold">一,新生儿危重病例评分表 (首次评分入院后尽快完成),上次医生核定并记入其查房记录中, 危重患者每3天复查一次</p>
        </caption>
        <tbody>
        <tr>
          <td class="first_column" rowspan="2">
            检查项目
          </td>
          <td rowspan="2">评分标准</td>
          <td colspan="2">入院   月   日</td>
          <td colspan="2">病情一  月  日</td>
          <td colspan="2">病情二  月  日</td>
          <td colspan="2">出院  月  日</td>
        </tr>
        <tr>
          <td >分值</td>
          <td >测定值</td>
          <td >分值</td>
          <td >测定值</td>
          <td >分值</td>
          <td >测定值</td>
          <td >分值</td>
          <td >测定值</td>
        </tr>
        <table-line :valArr="heartRateValArr" column1Text="1.心率 (次/min)" :scoreStandardTextArr="heartRateItemArr"  :handleClick="handleSelectHeartValue"></table-line>
        <table-line :valArr="bloodRateValArr" column1Text="2.血压收缩压 (mkg)" :scoreStandardTextArr="bloodRateItemArr"  :handleClick="handleSelectBooldValue"></table-line>
        <table-line :valArr="breatheRateValArr" column1Text="3.呼吸 (次/min)" :scoreStandardTextArr="breatheRateItemArr"  :handleClick="handleSelectBreatheValue"></table-line>
        <table-line :valArr="redCellRateValArr" column1Text="10.红细胞压积比" :scoreStandardTextArr="redCellRateItemArr"  :handleClick="handleSelectRedCellValue"></table-line>
        <table-line :valArr="stomachRateValArr" column1Text="11.胃肠表现" :scoreStandardTextArr="stomachRateItemArr"  :handleClick="handleSelectStomachValue"></table-line>

        <tr ><td colspan="10"><span class="sign">评分者签名</span></td></tr>
        <tr><td colspan="10"><span class="sign">上级医师签名</span></td></tr>
      </tbody>
      </table>
      <bottom-legend></bottom-legend>
    </div>
  </template>
  
  <script setup>
  import tableLine from './components/tableLine.vue'
  import bottomLegend from './components/bottomLegend.vue';
  import { ref, watch } from "vue";
  const patientInfo={
    name: '某患者',
    age: 35,
    department: '心肺科',
    gender: '男',
    bornDate: '1998-2-14',
    bedNo: 22,
    documentNo: 168-122
  }
    const heartRateItemArr = ["<80 或 >180","80-120 或 160-180","其余"]
    const bloodRateItemArr = ["&lt40 或 &rt100","40-50 或 90-100","其余"]
    const breatheRateItemArr = ["<20 或 >100","20-25 或 60-100","其余"]
    const redCellRateItemArr = ["<0.2",'0.2-0.4', '其余']
    const stomachRateItemArr = ['腹胀并消化道出血','腹胀或消化道出血', '其余']
    
    const heartRateValArr = ref([])
    const bloodRateValArr = ref([])
    const breatheRateValArr = ref([])
    const redCellRateValArr = ref([])
    const stomachRateValArr = ref([])

    const handleSelectHeartValue = (col, val)=>{

  }
    const handleSelectBooldValue = (col, val)=>{

    }
    const handleSelectBreatheValue=(col, val)=>{
      const orginValArr = [...breatheRateValArr.value]
      orginValArr[col-1] = val
      breatheRateValArr.value = orginValArr
    }
    
    const handleSelectRedCellValue = (col, val)=>{}

    const handleSelectStomachValue = (col, val)=>{

    }
  </script>
  
  <style lang="scss" scoped>

  table {
    font-weight: normal;
    border-collapse: collapse;
    font-size: 12px;
    text-align: center;
    width: 100%;
    table-layout: fixed;
    border: 2px #2f4f4f solid;
  }
  td {
  border: 1px solid #ccc;
  width: 12px;
  height: 16px;
  padding: 4px 0
}
  .table_wrap {
    position: relative;
    margin: 0 auto;
    width: 1000px;
  }
  .legend {
    display: flex;
    .legend-text {
      display: flex;
    }
    .legend-item {
      margin-right: 20px;
    }
  }
  .first_column {
    width: 5px;
  }
  .sign {
    position: relative;
    right: 200px;
  }
  </style>

  