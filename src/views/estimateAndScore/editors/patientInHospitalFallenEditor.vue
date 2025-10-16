<template>
	<div class="container">
            <header></header>
            <patient-descibe :patientInfo="patientInfo"></patient-descibe>
            <div class="group">
                <span class="title">跌倒低风险</span>
                <el-checkbox-group v-model="lowDangerList">
                    <el-checkbox
                        v-for="(item,index) in lowDanger"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="group">
                <span class="title">跌倒中风险</span>
                <el-checkbox-group v-model="middleDangerList">
                    <el-checkbox
                        v-for="(item,index) in middleDanger"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">跌倒高风险</span>
                <el-checkbox-group v-model="highDangerList">
                    <el-checkbox
                        v-for="(item,index) in highDanger"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">防范措施</span>
                <el-checkbox-group v-model="actionsList">
                    <el-checkbox
                        v-for="(item,index) in actions"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>

            <span>评估人签名: 张思婷</span>
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
    import {lowDanger, middleDanger, highDanger,actions} from '../options/patientInHospitalFallen'
    import patientDescibe from './components/patientDescribe.vue';
    import {ref} from "vue";
     import {patientInfo} from './data'

    const lowDangerList = ref([]);
    const middleDangerList = ref([]);
    const highDangerList = ref([])
    const actionsList = ref([])

    const nurseLeader = ref('')
    const nurseDepartment = ref('')
  
</script>