<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>

        <span class="title">患者危险因素</span>
        <el-checkbox-group v-model="score1OptionsList">
            <el-checkbox
                v-for="(item,index) in score1Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">临床危险因素</span>
        <el-checkbox-group v-model="score2OptionsList">
            <el-checkbox
                v-for="(item,index) in score2Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">实验室检查</span>
        <el-checkbox-group v-model="score3OptionsList">
            <el-checkbox
                v-for="(item,index) in score3Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <div style=" display: flex; align-items: center;">
            <span>总分</span>
            <el-input v-modal="totalMount" placeholder="请输入内容" class="input"></el-input>
        </div>

        <div style=" display: flex; align-items: center;">
            <span>评估者签名</span>
            <el-input v-modal="estimater" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>护士长签名</span>
            <el-input v-modal="nurseLeader" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span >护理部签名</span>
            <el-input v-modal="nurseDepartment" placeholder="请输入内容" class="input"></el-input>
        </div>
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
    import { score1Options,score2Options,score3Options } from '../options/internalPatientCaprini';
    import {ref} from "vue";
    import {patientInfo} from '../data'
    const score1OptionsList = ref([])
    const score2OptionsList = ref([])
    const score3OptionsList = ref([])


    const totalMount = ref()
    const estimater = ref('')
    const nurseLeader = ref('')
    const nurseDepartment= ref('')
</script>