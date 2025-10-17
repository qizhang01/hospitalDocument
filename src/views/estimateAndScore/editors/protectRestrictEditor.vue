<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <div class="group">
            <span class="title">有无医嘱</span>
            <el-radio v-model="adviceRadio" label="1">有</el-radio>
            <el-radio v-model="adviceRadio" label="2">无</el-radio>
        </div>

        <div class="group">
            <span class="title">是否镇静</span>
            <el-radio v-model="silentRadio" label="1">是</el-radio>
            <el-radio v-model="silentRadio" label="2">否</el-radio>
        </div>

        <div class="group">
            <span class="title">约束原因</span>
            <el-checkbox-group v-model="restrictReasonList">
                <el-checkbox
                    v-for="(item,index) in restrictReason"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">意识</span>
            <el-checkbox-group v-model="consciousnessList">
                <el-checkbox
                    v-for="(item,index) in consciousness"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">部位</span>
            <el-checkbox-group v-model="positionList">
                <el-checkbox
                    v-for="(item,index) in position"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">松懈</span>
            <el-radio v-model="relexRadio" label="1">是</el-radio>
            <el-radio v-model="relexRadio" label="2">否</el-radio>
            <label>时间</label>
            <el-input
                size="small"
                placeholder="请输入内容"
                suffix-icon="el-icon-date"
                v-model="input1"
            ></el-input>
        </div>
        <div class="group">
            <span class="title">被动活动</span>
            <el-radio v-model="activityRadio" label="1">是</el-radio>
            <el-radio v-model="activityRadio" label="2">否</el-radio>
        </div>


        <span class="title">约束部位皮肤观察</span>
        <div class="group">
            <span class="title">颜色</span>
            <el-radio v-model="colorRadio" label="1">正</el-radio>
            <el-radio v-model="colorRadio" label="2">异</el-radio>
        </div>
        <div class="group">
            <span class="title">温度</span>
            <el-radio v-model="temperatureRadio" label="1">冷</el-radio>
            <el-radio v-model="temperatureRadio" label="2">热</el-radio>
        </div>
        <div class="group">
            <span class="title">损伤</span>
            <el-radio v-model="injureRadio" label="1">有</el-radio>
            <el-radio v-model="injureRadio" label="2">无</el-radio>
        </div>
        <div class="group">
            <span class="title">松紧度</span>
            <el-checkbox-group v-model="tightnessList">
                <el-checkbox
                    v-for="(item,index) in tightness"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">体位</span>
            <el-select v-model="bodyPostion" placeholder="请选择">
                <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </div>

        <div style=" display: flex; align-items: center;">
            <span>护士签名</span>
            <el-input v-modal="nurseLeader" placeholder="请输入内容" class="input"></el-input>
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
    import {restrictReason,consciousness, position, tightness} from '../options/protectRestrict'
    import {ref} from "vue";
    import {patientInfo} from '../data'

    const adviceRadio = ref()
    const silentRadio = ref()
    const activityRadio = ref()
    const restrictReasonList = ref([])
    const consciousnessList = ref([])
    const positionList = ref([])
    const tightnessList = ref([])
    const relexRadio = ref()
    const temperatureRadio = ref()
    const injureRadio = ref()
    const nurseLeader = ref('')

    const bodyPostion = ref()
    const input1 = ref()
</script>