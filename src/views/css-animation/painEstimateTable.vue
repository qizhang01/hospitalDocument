<template>
	<div class="container">
        <top-title :patientInfo="patientInfo"></top-title>
        <top-content></top-content>
        <single-line-pain-type topic="疼痛性质" :typeArr="painTypeArr" :handleSelect="handleSelectPainType" :selectedValArr="selectedPainTypeValArr"></single-line-pain-type>
        <single-line-pain-type topic="症状性质" :typeArr="symptomTypeArr" :handleSelect="handleSelectSymptomType" :selectedValArr="selectedSymptomTypeValArr"></single-line-pain-type>
        <pain-sketch></pain-sketch>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 auto;
    width: 900px;
  }
</style>

<script setup>
  import singleLinePainType from './painEstimateComponent/singleLinePainType';
  import topTitle from './painEstimateComponent/topTitle.vue';
  import painSketch from './painEstimateComponent/painSketch.vue';
  import topContent from './painEstimateComponent/topContent.vue';

  const painTypeArr = ['刀割通','酸胀痛','闷胀痛','撕扯痛','压榨痛','牵拉痛','灼热痛','针刺痛','电击痛','切割痛','爆裂痛','其他']
  const symptomTypeArr = ['恶心','呕吐','便秘','腹泻','瘙痒','口干','眩晕','麻木','抑郁','焦虑','爆裂痛','其他']
  const selectedPainTypeValArr = ['刀割通','酸胀痛','撕扯痛','压榨痛']
  const selectedSymptomTypeValArr = ['恶心','便秘','腹泻','瘙痒']
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