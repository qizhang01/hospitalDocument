<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <span class="title">病人情况</span>
        <div class="group">
            <span class="title">感觉</span>
            <el-checkbox-group v-model="senseList">
                <el-checkbox
                    v-for="(item,index) in sense"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">潮湿</span>
            <el-checkbox-group v-model="dampList">
                <el-checkbox
                    v-for="(item,index) in damp"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">活动力</span>
            <el-checkbox-group v-model="activityList">
                <el-checkbox
                    v-for="(item,index) in activity"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">移动力</span>
            <el-checkbox-group v-model="moveList">
                <el-checkbox
                    v-for="(item,index) in move"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">营养</span>
            <el-checkbox-group v-model="nutritionList">
                <el-checkbox
                    v-for="(item,index) in nutrition"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">摩檫力和剪切力</span>
            <el-checkbox-group v-model="cutePowerList">
                <el-checkbox
                    v-for="(item,index) in cutePower"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>总分</span>
            <el-input v-modal="totalScore" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>评估者签名</span>
            <el-input v-modal="estimater" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span >检查者签名</span>
            <el-input v-modal="nurseDepartment" placeholder="请输入内容" class="input"></el-input>
        </div>
	</div>
</template>

<style lang="scss" scoped>
    .container {
        position: relative;
        // margin: 0;
        width: 96%;
        .topic{
            font-size: large;
            font-weight: bolder;
        }
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
    .group {
        display: flex;
        align-items: center;
        .title {
            margin-right: 10px;
            width: 100px;
        }
    }
    .inline-block {
        margin-left: 16px;
        display: flex;
        align-items: center;
    }
    .label {
        width: 44px;
    }
    .input {
        width: 300px;
    }
</style>


<script setup>
    import patientDescribeHeader from './components/patientDescribeHeader.vue';
    import {cutePower, sense, activity, move, nutrition,damp } from '../options/pressureInjure'
    import {ref} from "vue";
    import {patientInfo} from '../data'

    const senseList = ref([])
    const dampList = ref([])
    const activityList = ref([])
    const moveList = ref([])
    const nutritionList = ref([])
    const cutePowerList = ref([])
    
    const totalScore = ref('')
    const estimater = ref('')
    const nurseDepartment = ref('')
    
</script>