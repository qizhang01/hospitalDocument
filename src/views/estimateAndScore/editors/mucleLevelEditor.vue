<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>

        <span class="title">表现</span>
        <el-checkbox-group v-model="muscleLevelOptionsList">
            <el-checkbox
                v-for="(item,index) in muscleLevelOptions"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>
        <span>评定者: 张思婷</span>
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
    import { muscleLevelOptions } from '../options/muscleLevel';
    import {ref} from "vue";
    import {patientInfo} from '../data'
    const muscleLevelOptionsList = ref([])
</script>