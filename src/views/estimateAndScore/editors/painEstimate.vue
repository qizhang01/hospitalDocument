<template>
	<div class="container">
            <header></header>
            <patient-descibe :patientInfo="patientInfo"></patient-descibe>
            <div class="group">
                <span class="title">评估工具</span>
                <el-checkbox-group v-model="estimateToolsList">
                    <el-checkbox
                        v-for="(item,index) in estimateTools"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="group">
                <span class="title">疼痛评分</span>
                <el-checkbox-group v-model="painScoreList">
                    <el-checkbox
                        v-for="(item,index) in painScore"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">疼痛强度</span>
                <el-checkbox-group v-model="painToughList">
                    <el-checkbox
                        v-for="(item,index) in painTough"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">疼痛部位</span>
                <el-checkbox-group v-model="painPositionList">
                    <el-checkbox
                        v-for="(item,index) in painPosition"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
                <div class="inline-block">
                    <span class="label">其他</span>
                    <el-input v-modal="otherPosition" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="group">
                <span class="title">疼痛性质</span>
                <el-checkbox-group v-model="painCharacterList">
                    <el-checkbox
                        v-for="(item,index) in painCharacter"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div style="margin-left: 100px; display: flex; align-items: center;">
                <span class="label">其他</span>
                <el-input v-modal="otherCharacter" placeholder="请输入内容" class="input"></el-input>
            </div>
            <div class="group">
                <span class="title">通知医生</span>
                <el-checkbox-group v-model="noticeDoctorList">
                    <el-checkbox
                        key="0"
                        label="是"
                    ></el-checkbox>
                    <el-checkbox
                        key="1"
                        label="否"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>


            <div class="group">
                <span class="title">护理措施</span>
                <el-checkbox-group v-model="nurseActionList">
                    <el-checkbox
                        v-for="(item,index) in nurseAction"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
        <span>签名: 张思婷</span>
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
    import {estimateTools, painScore, painTough, painPosition, painCharacter, nurseAction} from '../options/pain'
    import patientDescibe from './components/patientDescribeHeader.vue';
    import {ref} from "vue";
    import {patientInfo} from './data'
    
    const estimateToolsList = ref([]);
    const painScoreList = ref([]);
    const painToughList = ref([])
    const painPositionList = ref([])
    const painCharacterList = ref([])
    const nurseActionList = ref([])
    const noticeDoctorList = ref([])

    const otherPosition = ref('')
    const otherCharacter = ref('')
  
</script>