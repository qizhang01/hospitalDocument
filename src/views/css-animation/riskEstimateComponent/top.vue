<template>
    <p class="title">上海市松江区方塔中医医院</p>
    <p class="title">内科住院患者Pudua静脉血栓栓塞症风险评估表</p>
    <p style="position: relative;">
        <span class="tbale-label">姓名：</span
        ><span
            style="display: inline-block; width: 60px; text-align: left"
            >{{ patientInfo.name }}</span
        >
        <span class="tbale-label">年龄：</span>
        <span
            style="display: inline-block; width: 35px; text-align: left"
            >{{ patientInfo.age }}</span
        >
        <span class="tbale-label">科室：</span>
        <span
            style="display: inline-block; width: 65px; text-align: left"
            >{{ patientInfo.department }}</span
        >
        <span class="tbale-label">性别：</span>
        <span
            style="display: inline-block; width: 35px; text-align: left"
            >{{ patientInfo.gender }}</span
        >
        <span class="tbale-label">出生日期：</span>
        <span
            style="display: inline-block; width: 100px; text-align: left"
            >{{ patientInfo.bornDate }}</span
        >
        <span class="tbale-label">床号：</span>
        <span
            style="display: inline-block; width: 60px; text-align: left"
            >{{ patientInfo.bedNo }}</span
        >
    </p>
</template>

<script setup>
    import { defineProps } from "vue";

const props = defineProps({
    patientInfo: Object
})
</script>

<style lang="scss" scoped>
.title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}
</style>