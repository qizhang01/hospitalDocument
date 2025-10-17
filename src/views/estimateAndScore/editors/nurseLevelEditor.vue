<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <span class="title">Barthel指数评定量表</span>
        <div class="group">
            <span class="title">进食</span>
            <el-checkbox-group v-model="foodList">
                <el-checkbox
                    v-for="(item,index) in food"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">洗澡</span>
            <el-checkbox-group v-model="bathList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions1"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">修饰</span>
            <el-checkbox-group v-model="decorationList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions1"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">穿脱衣</span>
            <el-checkbox-group v-model="clothesList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions2"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">控制大便</span>
            <el-checkbox-group v-model="stoolList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions2"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">控制小便</span>
            <el-checkbox-group v-model="urinateList">
                <el-checkbox
                    v-for="(item,index) in urinate"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>


        <div class="group">
            <span class="title">如厕</span>
            <el-checkbox-group v-model="toiletList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions2"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">床椅转移</span>
            <el-checkbox-group v-model="tableMoveList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions3"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">平地行走</span>
            <el-checkbox-group v-model="walkList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions3"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">上下楼梯</span>
            <el-checkbox-group v-model="upstairsList">
                <el-checkbox
                    v-for="(item,index) in sharedOptions2"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <span class="title">总分: 155</span>
        <div class="group">
            <span class="title">自理能力等级</span>
            <el-checkbox-group v-model="selfAbilityrList">
                <el-checkbox
                    v-for="(item,index) in selfAbility"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">病情等级</span>
            <el-checkbox-group v-model="diseaseLevelList">
                <el-checkbox
                    v-for="(item,index) in diseaseLevel"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="group">
            <span class="title">护理等级</span>
            <el-checkbox-group v-model="nurseLevelList">
                <el-checkbox
                    v-for="(item,index) in nurseLevel"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>责任人签字</span>
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
    import {sharedOptions1, sharedOptions2, sharedOptions3,selfAbility,diseaseLevel,nurseLevel, food, urinate} from '../options/nurseLevel'
    import {ref} from "vue";
    import {patientInfo} from '../data'

    const foodList = ref([])
    const bathList = ref([])
    const decorationList = ref([])
    const clothesList = ref([])
    const stoolList = ref([])
    const urinateList = ref([])
    const toiletList  = ref([])
    const nurseLevelList = ref([])
    const tableMoveList = ref([])
    const walkList = ref([])
    const upstairsList = ref([])
    const selfAbilityrList = ref([])
    const diseaseLevelList = ref([])

    const responsibiltyPerson = ref('')
</script>