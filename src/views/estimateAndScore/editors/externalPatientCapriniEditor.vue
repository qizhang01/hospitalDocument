<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>

        <span class="title">每项1分</span>
        <el-checkbox-group v-model="score1OptionsList">
            <el-checkbox
                v-for="(item,index) in score1Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">每项2分</span>
        <el-checkbox-group v-model="score2OptionsList">
            <el-checkbox
                v-for="(item,index) in score2Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">每项3分</span>
        <el-checkbox-group v-model="score3OptionsList">
            <el-checkbox
                v-for="(item,index) in score3Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">每项5分</span>
        <el-checkbox-group v-model="score5OptionsList">
            <el-checkbox
                v-for="(item,index) in score5Options"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

        <span class="title">护理措施</span>
        <el-checkbox-group v-model="nurseActionsList">
            <el-checkbox
                v-for="(item,index) in nurseActions"
                :key="index"
                :label="item"
            ></el-checkbox>
        </el-checkbox-group>

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
    import { score1Options,score2Options,score3Options,score5Options, nurseActions } from '../options/externalPatientCaprini';
    import {ref} from "vue";
    import {patientInfo} from '../data'
    const score1OptionsList = ref([])
    const score2OptionsList = ref([])
    const score3OptionsList = ref([])
    const score5OptionsList = ref([])
    const nurseActionsList = ref([])

    const estimater = ref('')
    const nurseLeader = ref('')
    const nurseDepartment= ref('')
</script>