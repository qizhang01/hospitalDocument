<template>
        <div>
          <p style="font-size: 14px; font-weight: bold; text-align: center;">上海市松江区方塔中医医院</p>
          <p style="font-size: 20px; font-weight: bold; text-align: center;">{{ tableName }}</p>
          <p style="position: relative; text-align: center">
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
        </div>

</template>

<style lang="scss" scoped>

</style>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    patientInfo: Object,
    tableName: String
})
</script>