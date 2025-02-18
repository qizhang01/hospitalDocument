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
          <p style="font-size: 20px; font-weight: bold">{{"info.originName" }}</p>
          <p style="font-size: 20px; font-weight: bold">体温单</p>
          <p style="position: relative; text-align: left">
            <span class="tbale-label">姓名：</span
            ><span
              style="display: inline-block; width: 50px; text-align: left"
              >{{ "info.name" }}</span
            >
            <span class="tbale-label">年龄：</span>
            <span
              style="display: inline-block; width: 35px; text-align: left"
              >{{ 15 }}</span
            >
            <span class="tbale-label">科室：</span>
            <span
              style="display: inline-block; width: 65px; text-align: left"
              >{{ "-" }}</span
            >
            <span class="tbale-label">性别：</span>
            <span
              style="display: inline-block; width: 35px; text-align: left"
              >{{ "info.sex" }}</span
            >
            <span class="tbale-label">出生日期：</span>
            <span
              style="display: inline-block; width: 160px; text-align: left"
              >{{  "-" }}</span
            >
            <span class="tbale-label">床号：</span>
            <span
              style="display: inline-block; width: 60px; text-align: left"
              >{{ "info.cwh" }}</span
            >
            <span class="tbale-label">健康档案号：</span>
            <span
              style="display: inline-block; width: 100px; text-align: left"
              >{{ "info.hospCode "}}</span
            >
          </p>
          <p>一,新生儿危重病例评分表 (首次评分入院后尽快完成),上次医生核定并记入其查房记录中, 危重患者每3天复查一次</p>
        </caption>
        <tbody>
        <tr>
          <td class="table-just" rowspan="2">
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
        <tr>
          <td rowspan="3"><p>1.心率</p><p>(次/min)</p></td>
          <td >&lt80 或 >180</td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
        </tr>
        <tr>
          <td >80-120 或 160-180</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
        </tr>
        <tr>
          <td >其余</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
        </tr>

        <tr>
          <td rowspan="3"><p>2.血压</p><p>收缩压</p><p>(mkg)</p></td>
          <td >&lt40 或 >100</td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
          <td >4</td>
          <td rowspan="3"></td>
        </tr>
        <tr>
          <td >40-50 或 90-100</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
          <td >6</td>
        </tr>
        <tr>
          <td >其余</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
          <td >10</td>
        </tr>
        <table-line :valArr="[4, 6, 10]" column1Text="呼吸 (次/min)" :scoreStandardTextArr="breatheRateArr"></table-line>
    </tbody>
      </table>
      <div class="legend">
        <span>标注：</span>
        <div class="legend-text">
          <div class="legend-item" style="color: blue">体温: x</div>
          <div class="legend-item">呼吸: ●</div>
          <div class="legend-item">物理降温： ○</div>
          <div class="legend-item" style="color: red">心率：○</div>
          <div class="legend-item" style="color: red">脉搏：●</div>
        </div>
        <div style="font-size: 20px; font-weight: bold">
          {{ `第周` }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import tableLine from './components/tableLine.vue'
    const heartRateText = ["<80 或 >180","80-120 或 160-180","其余"]
    const booldRateArr = ["&lt40 或 &rt100","40-50 或 90-100","其余"]
    const breatheRateArr = ["<20 或 >100","20-25 或 60-100","其余"]

    const handleSelectBreatheValue=()=>{
        
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
  </style>

  