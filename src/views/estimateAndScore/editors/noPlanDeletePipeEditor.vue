<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <span class="title"></span>
        <div class="group">
            <span class="title">I 类导管</span>
            <el-checkbox-group v-model="pipe1OptionsList">
                <el-checkbox
                    v-for="(item,index) in pipe1Options"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">II 类导管</span>
            <el-checkbox-group v-model="pipe2OptionsList">
                <el-checkbox
                    v-for="(item,index) in pipe2Options"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">III 类导管</span>
            <el-checkbox-group v-model="pipe3OptionsList">
                <el-checkbox
                    v-for="(item,index) in pipe3Options"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">意识</span>
            <el-checkbox-group v-model="senseOptionsList">
                <el-checkbox
                    v-for="(item,index) in senseOptions"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">其他</span>
            <el-checkbox-group v-model="otherOptionsList">
                <el-checkbox
                    v-for="(item,index) in otherOptions"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div style=" display: flex; align-items: center;">
            <span>总分</span>
            <el-input v-modal="score" placeholder="请输入内容" class="input"></el-input>
        </div>

        <div class="group">
            <span class="title">防范措施</span>
            <el-checkbox-group v-model="methodList">
                <el-checkbox
                    v-for="(item,index) in method"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
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
        <span>护理部签名</span>
        <el-input v-modal="nurseDepartment" placeholder="请输入内容" class="input"></el-input>
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
    import {senseOptions, method, pipe1Options,pipe2Options,pipe3Options,otherOptions} from '../options/noPlanDeletePipe'
    import {ref} from "vue";
    import {patientInfo} from '../data'

    const pipe1OptionsList = ref([])
    const pipe2OptionsList = ref([])
    const pipe3OptionsList = ref([])
    const senseOptionsList = ref([])
    const otherOptionsList = ref([])
    const methodList = ref([])

    const score = ref('')
    const estimater = ref('')
    const nurseLeader = ref('')
    const nurseDepartment = ref('')
</script>