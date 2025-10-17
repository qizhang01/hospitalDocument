<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>

        <span class="title">洼田饮水试验(WST)</span>
        <span>分级</span>
        <el-checkbox-group v-model="optionsList">
            <el-checkbox
                v-for="(item,index) in options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>
        <span>护士签名: 张思婷</span>
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
    import patientDescribeHeader from './components/patientDescribeHeader.vue';
    import { options } from '../options/fixedMarshWater';
    import {ref} from "vue";
    import {patientInfo} from '../data'
    const optionsList = ref([])
</script>