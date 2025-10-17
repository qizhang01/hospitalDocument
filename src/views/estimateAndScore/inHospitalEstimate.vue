<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="入院评估单"></top-title>
        <div class="group">
            <span class="title">入院方式</span>
            <el-checkbox-group v-model="inHospitalWayList">
                <el-checkbox
                    v-for="(item,index) in inHospitalWay"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">资料来源</span>
            <el-checkbox-group v-model="originInfoList">
                <el-checkbox
                    v-for="(item,index) in originInfo"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">过&nbsp;&nbsp;&nbsp;敏&nbsp;&nbsp;&nbsp;史</span>
            <el-checkbox-group v-model="allergyList">
                <el-checkbox
                    v-for="(item,index) in allergy"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">抽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;烟</span>
            <el-checkbox-group v-model="smokeList">
                <el-checkbox
                    v-for="(item,index) in allergy"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">喝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酒</span>
            <el-checkbox-group v-model="drinkList">
                <el-checkbox
                    v-for="(item,index) in allergy"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">文化程度</span>
            <el-checkbox-group v-model="educationList">
                <el-checkbox
                    v-for="(item,index) in education"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">联&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;人</span>
            <el-checkbox-group v-model="relationPersonList">
                <el-checkbox
                    v-for="(item,index) in relationPerson"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">对疾病了解</span>
            <el-checkbox-group v-model="isLearningOfDiseaseList">
                <el-checkbox
                    v-for="(item,index) in isLearningOfDisease"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">希望家人/朋友</span>
            <el-checkbox-group v-model="beObserveList">
                <el-checkbox
                    v-for="(item,index) in beObserve"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title1">宗教信仰</span>
            <el-checkbox-group v-model="religionList">
                <el-checkbox
                    v-for="(item,index) in allergy"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">意外事件对患者的影响</span>
            <el-checkbox-group v-model="accidentEffectList">
                <el-checkbox
                    v-for="(item,index) in allergy"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">费用来源</span>
            <el-checkbox-group v-model="payWayList">
                <el-checkbox
                    v-for="(item,index) in payWay"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">特殊人群</span>
            <el-checkbox-group v-model="specialPersonList">
                <el-checkbox
                    v-for="(item,index) in specialPerson"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">意识</span>
            <el-checkbox-group v-model="consciousnessList">
                <el-checkbox
                    v-for="(item,index) in consciousness"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">视力</span>
            <el-checkbox-group v-model="visionStatusList">
                <el-checkbox
                    v-for="(item,index) in visionStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>




        <div class="group">
            <span class="title1">听力</span>
            <el-checkbox-group v-model="listenStatusList">
                <el-checkbox
                    v-for="(item,index) in status"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">牙齿</span>
            <el-checkbox-group v-model="toothStatusList">
                <el-checkbox
                    v-for="(item,index) in toothStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">皮肤</span>
            <el-checkbox-group v-model="skinStatusList">
                <el-checkbox
                    v-for="(item,index) in skinStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">排便</span>
            <el-checkbox-group v-model="stoolStatusList">
                <el-checkbox
                    v-for="(item,index) in stoolStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">排尿</span>
            <el-checkbox-group v-model="urinateStatusList">
                <el-checkbox
                    v-for="(item,index) in urinateStatus"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
	</div>
</template>

<style lang="scss" scoped>
    .container {
        position: relative;
        margin: 0 auto;
        width: 96%;
        .topic{
            font-size: large;
            font-weight: bolder;
        }
        .maintopic{
            font-weight: bolder;
            width: 140px;
        }
    }
    .textareaContainer{
        display: flex;
        width: 800px;
    }
    .group {
        display: flex;
        align-items: center;
        .title {
            margin-right: 10px;
            width: 140px;
            text-align: right;
        }
        .title1 {
            margin-right: 10px;
            width: 100px;
            text-align: right;
        }
    }
</style>

<script setup>
    import topTitle from './components/topTitle.vue';
    import {inHospitalWay,originInfo,allergy,education,relationPerson, isLearningOfDisease, beObserve,
        payWay,specialPerson, consciousness, visionStatus, status, toothStatus, skinStatus, stoolStatus,
        urinateStatus
    } from "./options/inHospital"
    import {patientInfo} from './data'
    import {ref} from "vue"

    const inHospitalWayList = ref([])
    const originInfoList = ref([])
    const allergyList = ref([])
    const smokeList = ref([])
    const drinkList = ref([])

    const educationList = ref([])
    const relationPersonList = ref([])
    const beObserveList = ref([])

    const accidentEffectList = ref([])
    const religionList = ref([])
    const payWayList = ref([])
    const specialPersonList = ref([])
    const isLearningOfDiseaseList = ref([])
    const consciousnessList = ref([])
    const visionStatusList = ref([])

    const listenStatusList = ref([])
    const toothStatusList = ref([])
    const skinStatusList = ref([])
    const stoolStatusList = ref([])
    const urinateStatusList = ref([])
  
</script>