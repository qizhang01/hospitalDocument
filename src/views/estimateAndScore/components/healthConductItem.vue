<template>
    <div class="hover-container">
        <div class="title">{{ point }}</div>

        <div class="section">
            <div class="section-item">
                <label class="main-label">评估日期:</label>
                <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="section-item section-item-checkbox">
                <label class="main-label">对象</label>
                <el-checkbox-group v-model="checkList1">
                    <el-checkbox label="患者"></el-checkbox>
                    <el-checkbox label="家属"></el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="section-item">
                <label class="main-label">签名:</label>
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
            </div>
        </div>

        <div class="section">
            <div class="section-item">
                <label class="main-label">评价日期:</label>
                <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="section-item section-item-checkbox">
                <label class="main-label">复述</label>
                <el-checkbox-group v-model="checkList2">
                    <el-checkbox label="能"></el-checkbox>
                    <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="section-item">
                <label class="main-label">签名:</label>
                <el-input v-model="input2" placeholder="请输入内容"></el-input>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $success: #606266;
    $primary: #409eff;
    .section {
        display: flex;
        .section-item{
            display: flex;
            justify-content: start;
            align-items: center;
            margin: 0px 16px 6px 0px;
        }
    }
    .title {
        margin: 10px 0px;
    }
    .section-item-checkbox {
        width: 200px;
    }
</style>

<script setup>
    import {ref} from 'vue'
    const value1 = ref('')
    const checkList1 = ref([])
    const input1 = ref('')

    const value2 = ref('')
    const checkList2 = ref([])
    const input2 = ref('')

    const props = defineProps({
        point: {
            type: String,
            required: true
        },
    });
</script>