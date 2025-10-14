<template>
	<div class="container">
        <top-title :patientInfo="patientInfo" tableName="首次护程单"></top-title>
        <div class="textareaContainer">
            <div class="maintopic">一.主要病情</div>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
            </el-input>
        </div>
        <div class="topic">二. 辩证分析:</div>
        <div class="group">
            <span class="title">1.病因：外感六淫</span>
            <el-checkbox-group v-model="trouble_6List">
                <el-checkbox
                    v-for="(item,index) in trouble_6"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">内情七伤</span>
            <el-checkbox-group v-model="emotion_7List">
                <el-checkbox
                    v-for="(item,index) in emotion_7"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">宜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;忌</span>
            <el-checkbox-group v-model="correctActionList">
                <el-checkbox
                    v-for="(item,index) in correctAction"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">外&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伤</span>
            <el-checkbox-group v-model="externalInjureList">
                <el-checkbox
                    v-for="(item,index) in externalInjure"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他</span>
            <el-checkbox-group v-model="otherDiseaseList">
                <el-checkbox
                    v-for="(item,index) in otherDisease"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">2.病位: 五&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;脏</span>
            <el-checkbox-group v-model="body_5List">
                <el-checkbox
                    v-for="(item,index) in body_5"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">六&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;腑</span>
            <el-checkbox-group v-model="body_6List">
                <el-checkbox
                    v-for="(item,index) in body_6"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">齐恒之腑</span>
            <el-checkbox-group v-model="body_otherList">
                <el-checkbox
                    v-for="(item,index) in body_other"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>


        <div class="topic">三. 施护要点:</div>
        <div class="group">
            <span class="title1">1.生活起居</span>
            <el-checkbox-group v-model="lifeHabitList">
                <el-checkbox
                    v-for="(item,index) in lifeHabit"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">2.情志调护</span>
            <el-checkbox-group v-model="emotionNurseList">
                <el-checkbox
                    v-for="(item,index) in emotionNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">3.饮食调护</span>
            <el-checkbox-group v-model="dietNurseList">
                <el-checkbox
                    v-for="(item,index) in dietNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">4.服药调护</span>
            <el-checkbox-group v-model="drugNurseList">
                <el-checkbox
                    v-for="(item,index) in drugNurse"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">5.病情观察</span>
            <el-checkbox-group v-model="observe_diseaseList">
                <el-checkbox
                    v-for="(item,index) in observe_disease"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">6.疼痛观察</span>
            <el-checkbox-group v-model="observe_painList">
                <el-checkbox
                    v-for="(item,index) in observe_pain"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">6.肤色观察</span>
            <el-checkbox-group v-model="observe_skinList">
                <el-checkbox
                    v-for="(item,index) in observe_skin"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">8.健康教育</span>
            <el-checkbox-group v-model="observe_educationList">
                <el-checkbox
                    v-for="(item,index) in observe_education"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title1">9.其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他</span>
            <el-checkbox-group v-model="observe_otherList">
                <el-checkbox
                    v-for="(item,index) in observe_other"
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
    import {trouble_6, emotion_7,correctAction, externalInjure,otherDisease, 
        body_5, body_6, body_other, 
        lifeHabit, nurseLevel,emotionNurse,dietNurse,
        drugNurse,observe_disease,
        observe_pain,observe_skin,observe_education,observe_other
    } from "./options/firstRecord"
    import {ref} from "vue"
    const textarea = ref("")
    const trouble_6List = ref([])
    const emotion_7List = ref([])
    const correctActionList = ref([])
    const externalInjureList = ref([])
    const otherDiseaseList = ref([])

    const body_5List = ref([])
    const body_6List = ref([])
    const body_otherList = ref([])

    const lifeHabitList = ref([])
    const nurseLevelList = ref([])
    const emotionNurseList = ref([])
    const dietNurseList = ref([])

    const drugNurseList = ref([])
    const observe_diseaseList = ref([])

    const observe_painList = ref([])
    const observe_skinList = ref([])
    const observe_educationList = ref([])
    const observe_otherList = ref([])

    const patientInfo={
        name: '某患者',
        age: 35,
        department: '心肺科',
        gender: '男',
        bornDate: '1998-2-14',
        bedNo: 22,
        documentNo: 168-122
    }
  
</script>