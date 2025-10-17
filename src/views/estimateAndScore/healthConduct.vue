<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>

        <span class="title">入院宣教</span>
        <healthConductItem v-for="item in educationList" :point="item"></healthConductItem>
        <span class="title">疾病指导</span>
        <healthConductItem v-for="item in diseaseConductList" :point="item"></healthConductItem>
        <span class="title">护理指导</span>
        <healthConductItem v-for="item in nurseConductList" :point="item"></healthConductItem>

        <span class="title">护理指导</span>
        <healthConductItem v-for="item in medicineConductList" :point="item"></healthConductItem>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 20px;
    width: 96%;
    .topic{
        font-size: large;
        font-weight: bolder;
    }
  }

</style>

<script setup>
    import patientDescribeHeader from './editors/components/patientDescribeHeader.vue';
    import {ref} from "vue";
    import {patientInfo} from './data'
    import healthConductItem from './components/healthConductItem.vue'

    const educationList = ["1. 介绍自己、主管医生、护士长姓名","2. 介绍一日清、呼叫器使用方法","3. 介绍有关制度: 重点介绍患者安全知识"];
    const diseaseConductList = ["1. 介绍疾病的病因、诱发因素","2. 介绍疾病的预防措施"];
    const nurseConductList = ["1. 各阶段的休息、护理级别、饮食指导","2. 各类护理、治疗的告知","3. 各类风险评估及防范告知", "1. 各阶段的休息、护理级别、饮食指导(二)","2. 各类护理、治疗的告知(二)","3. 各类风险评估及防范告知(二)"];
    const medicineConductList = ["1. 告知患者按时正确用药","2. 特殊用药指导","特殊用药指导(二)", "3. 特殊用药指导内容","自定义1","自定义2"];
</script>