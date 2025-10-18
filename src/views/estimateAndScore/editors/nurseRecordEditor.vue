<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <span class="title">护理记录单</span>
        <div class="group">
            <span class="title">神志</span>
            <el-checkbox-group v-model="senseStatusList">
                <el-checkbox
                    v-for="(item,index) in senseStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">瞳孔观察</span>
            <span class="title">瞳孔对光反应</span>
            <div>
                左
                <el-select v-model="pupilToLightValue1" placeholder="请选择">
                    <el-option
                    v-for="item in pupilToLight"
                    :key="item"
                    :label="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
            </div>
            <div>
                右
                <el-select v-model="pupilToLightValue2" placeholder="请选择">
                    <el-option
                    v-for="item in pupilToLight"
                    :key="item"
                    :label="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
            </div>
        </div>

        <div class="group">
            <span class="title">护理级别</span>
            <el-select v-model="nurseLevelValue" placeholder="请选择">
                <el-option
                v-for="item in nurseLevel"
                :key="item"
                :label="item"
                :value="item"
                >
                </el-option>
            </el-select>
        </div>

        <div class="group">
            <span class="title">饮食</span>
            <el-select v-model="foodValue" placeholder="请选择">
                <el-option
                v-for="item in food"
                :key="item"
                :label="item"
                :value="item"
                >
                </el-option>
            </el-select>
        </div>
        <div class="group">
            <div>
                <span class="title">T</span>
                <el-input v-modal="tValue" placeholder="请输入内容" class="input"></el-input>
                <span class="title">/*C</span>
            </div>
            <div>
                <span class="title">P</span>
                <el-input v-modal="pValue" placeholder="请输入内容" class="input"></el-input>
                <span class="title">/分</span>
            </div>

            <div>
                <span class="title">R</span>
                <el-input v-modal="rValue" placeholder="请输入内容" class="input"></el-input>
                <span class="title">/*C</span>
            </div>

            <div>
                <span class="title">BP</span>
                <el-input v-modal="bpValue1" placeholder="请输入内容" class="input"></el-input>
                <span class="title">/</span>
                <el-input v-modal="bpValue2" placeholder="请输入内容" class="input"></el-input>
            </div>
        </div>
        
        <div class="group">
            <span class="title">疼痛评估</span>
            <el-input v-modal="painValue" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div class="group">
            <span class="title">静脉留置部位外露</span>
            <el-input v-modal="pulseExtendValue" placeholder="请输入内容" class="input"></el-input>
            <span class="title">cm</span>
        </div>
        <div class="group">
            <span class="title">胃管位于</span>
            <el-input v-modal="stomachePosition" placeholder="请输入内容" class="input"></el-input>
            <span class="title">cm</span>
        </div>        
        <div class="group">
            <span class="title">结量</span>
            <el-input v-modal="lastMount" placeholder="请输入内容" class="input"></el-input>
        </div>


        <div class="group">
            <span class="title">切口伤口渗出</span>
            <el-checkbox-group v-model="injureStatusList">
                <el-checkbox
                    v-for="(item,index) in injureStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">用氧及护理</span>
            <el-checkbox-group v-model="oxygenNurseList">
                <el-checkbox
                    v-for="(item,index) in oxygenNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">晨护/晚护</span>
            <el-checkbox-group v-model="morningNurseOrEveningNurseList">
                <el-checkbox
                    v-for="(item,index) in morningNurseOrEveningNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">导管安全措施</span>
            <el-checkbox-group v-model="pipeSecurityList">
                <el-checkbox
                    v-for="(item,index) in pipeSecurity"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">防压力性损伤护理</span>
            <el-checkbox-group v-model="pressureInjureNurseList">
                <el-checkbox
                    v-for="(item,index) in pressureInjureNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">防跌倒护理</span>
            <el-checkbox-group v-model="fallenNurseList">
                <el-checkbox
                    v-for="(item,index) in fallenNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>


        <div class="group">
            <span class="title">健康教育指导</span>
            <el-checkbox-group v-model="healthEducationList">
                <el-checkbox
                    v-for="(item,index) in healthEducation"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div style=" display: flex; align-items: center;">
            <span>输液量</span>
            <el-input v-modal="infusionMount" placeholder="请输入内容" class="input"></el-input>
            <span>ml</span>
        </div>

        <div class="textareaContainer">
            <div class="maintopic">治疗、护理、观察、效果评价</div>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
            </el-input>
        </div>

        <div style=" display: flex; align-items: center;">
            <span>签名</span>
            <el-input v-modal="responsibiltyPerson" placeholder="请输入内容" class="input"></el-input>
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
    import {senseStatus, pupilToLight, nurseLevel, food, injureStatus, oxygenNurse, morningNurseOrEveningNurse ,pipeSecurity,
        pressureInjureNurse ,fallenNurse, healthEducation} from '../options/nurseRecord'
    import {ref} from "vue";
    import {patientInfo} from '../data'
    
    const senseStatusList = ref([])
    const injureStatusList = ref([])
    const oxygenNurseList = ref([])

    const morningNurseOrEveningNurseList = ref([])
    const pipeSecurityList = ref([])
    const pressureInjureNurseList = ref([])


    const fallenNurseList = ref([])
    const healthEducationList  = ref([])


    const textarea = ref('')
    const infusionMount = ref('')
    const pupilToLightValue1 = ref('')
    const pupilToLightValue2 = ref('')
    const responsibiltyPerson = ref('')
    const nurseLevelValue = ref('')
    const foodValue = ref('')

    const tValue = ref('')
    const pValue = ref('')
    const rValue = ref('')
    const bpValue1 = ref('')
    const bpValue2 = ref('')
    const painValue = ref('')
    const pulseExtendValue = ref('')
    const stomachePosition = ref('')
    const lastMount = ref('')
</script>