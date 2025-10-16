<template>
    <div class="hover-container">
        <div class="section">
            <div class="section-item">
                <label class="main-label">床号:</label>
                <span>{{ patientInfo.bedNo }}</span>
            </div>
            <div>
                <label class="main-label">住院号:</label>
                <span>{{ patientInfo.hospitalNo }}</span>
            </div>
        </div>

        <div class="section">
            <div class="section-item">
                <label class="main-label">姓名:</label>
                <span>{{ patientInfo.name }}</span>
            </div>
            <div>
                <label class="main-label">性别:</label>
                <span>{{ patientInfo.gender }}</span>
            </div>
        </div>

        <div>
            <label class="main-label">年龄:</label>
            <span>{{ patientInfo.age + '岁' }}</span>
        </div>


        <div>
            <label class="main-label">身份证号:</label>
            <span>{{ patientInfo.identityId }}</span>
        </div>
        <div>
            <label class="main-label">联系电话:</label>
            <span>{{ patientInfo.tel }}</span>
        </div>
        <div>
            <label class="main-label">入院时间:</label>
            <span>{{ patientInfo.inHospitalDate }}</span>
        </div>
        <div>
            <label class="main-label">诊断:</label>
            <span>{{ patientInfo.disease }}</span>
        </div>
        <div>
            <label class="main-label">主治医生:</label>
            <span>{{ patientInfo.doctor }}</span>
        </div>

        <div>
            <label class="main-label">饮食:</label>
            <span>{{ patientInfo.food }}</span>
        </div>
        <div>
            <label class="main-label">护理级别:</label>
            <span>{{ patientInfo.nurseLevel }}</span>
        </div>
        <div>
            <label style="color: red;" class="main-label">过敏史:</label>
            <span>{{ patientInfo.allergy }}</span>
        </div>
        <div>
            <label class="main-label">医保类型:</label>
            <span>{{ patientInfo.healthCareType }}</span>
        </div>
        <div>
            <label class="main-label">预交款:</label>
            <span>{{ patientInfo.prepay }}</span>
        </div>

        <div>
            <label class="main-label">费用合计:</label>
            <span>{{ patientInfo.totalAmount }}</span>
        </div>
        <div>
            <label class="main-label">自付费用:</label>
            <span>{{ patientInfo.selfAmount }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $success: #606266;
    $primary: #409eff;
    
    .section {
        display: flex;
        width: 100%;
        .section-item {
            margin-right: 40px;
        }
    }
    .hover-container {
        >div{
            margin-bottom: 10px;
        }
    }
</style>

<script setup>

    const props = defineProps({
        patientInfo: {
            type: Object,
            required: true
        },
    });
</script>