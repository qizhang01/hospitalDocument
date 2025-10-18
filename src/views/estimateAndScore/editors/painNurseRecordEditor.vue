<template>
	<div class="container">
        <header></header>
        <patientDescribeHeader :patientInfo="patientInfo"></patientDescribeHeader>
        <div class="group">
            <span class="title">疼痛情况</span>
            <el-checkbox-group v-model="painConditionList">
                <el-checkbox
                    v-for="(item,index) in painCondition"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">疼痛部门</span>
            <div style="margin-right: 10px;">
                <el-input
                    size="small"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="input1"
                >
                </el-input>
            </div>
            <div style="margin-right: 10px;">
                <el-input
                    size="small"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="input2"
                >
                </el-input>
            </div>
            <div style="margin-right: 10px;">
                <el-input
                    size="small"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="input3"
                >
                </el-input>
            </div>
            <div style="margin-right: 10px;">
                <el-input
                    size="small"
                    placeholder="请输入内容"
                    suffix-icon="el-icon-date"
                    v-model="input4"
                >
                </el-input>
            </div>
        </div>


        <div class="group">
            <span class="title">疼痛性质</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="group">
            <span >过去24小时内NRS评分最高时</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="group">
            <span >过去24小时内NRS评分最低时</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </div>

        <div class="group">
            <span class="title">现在NRS评分</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
        </div>

         
        <div class="group">
            <span class="title">疼痛治疗史</span>
            <el-checkbox-group v-model="painHistoryList">
                <el-checkbox
                    v-for="(item,index) in painHistory"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span class="title">评估</span>
            <div>
                <label>日期和时间</label>
                <el-date-picker v-model="estimateTime" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div>
                <label>部位</label>
                <el-date-picker v-model="estimateTime" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div>
                <label>活动情况</label>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in []"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div>
                <label>疼痛评分</label>
                <el-date-picker v-model="estimateTime" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
            </div>
        </div>


        <div class="group">
            <span class="title">护理措施</span>
            <el-checkbox-group v-model="actionsList">
                <el-checkbox
                    v-for="(item,index) in actions"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="group">
            <span >使用止痛药/PCA治疗</span>

        </div>

        <div class="group">
            <el-checkbox v-model="isRejected" label="拒绝治疗"></el-checkbox>
        </div>

        <div class="group">
            <span class="title">不良反应</span>
            <el-checkbox-group v-model="badReactList">
                <el-checkbox
                    v-for="(item,index) in badReact"
                    :key="index"
                    :label="item"
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>病情观察及措施</span>
            <el-input v-modal="nurseLeader" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span>护士签名</span>
            <el-input v-modal="nurseLeader" placeholder="请输入内容" class="input"></el-input>
        </div>
        <div style=" display: flex; align-items: center;">
            <span >审核者</span>
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
    import {painCondition,painHistory, actions, badReact} from '../options/painNurseRecord'
    import {ref} from "vue";
    import {patientInfo} from '../data'

    const painConditionList = ref([])
    const painHistoryList = ref([])
    const actionsList = ref([])
    const badReactList = ref([])
    
    const input1 = ref('')
    const input2 = ref('')
    const input3 = ref('')
    const input4 = ref('')
    const isRejected = ref(false)

    const estimateTime = ref([])
</script>