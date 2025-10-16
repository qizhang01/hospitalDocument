<template>
    <div class="container">
        <section>
            <span class="label">科室</span>
            <el-input :model-value="patientInfo.department" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <span class="label">床号</span>
            <el-input :model-value="patientInfo.bedNo" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <span class="label">姓名</span>
            <el-input :model-value="patientInfo.name" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <span class="label">住院号</span>
            <el-input :model-value="patientInfo.hospitalNo" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <span class="label">入院日期</span>
            <el-input :model-value="patientInfo.inHospitalDate" placeholder="请输入内容"></el-input>
        </section>

        <section>
            <span class="label">诊断</span>
            <el-input :model-value="patientInfo.disease" placeholder="请输入内容"></el-input>
        </section>
    </div>

</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        margin: 0px;
        section {
            display: flex;
            align-items: center;
            margin-right: 16px;
            .label{
                width: 60px;
            }
        }
    }
</style>

<script setup>
import {ref} from "vue"

// const department = ref(this.patientInfo.department)
// const bedNo = ref(this.patientInfo.bedNo)
// const name = ref(this.patientInfo.name)
// const hospitalNo = ref(this.patientInfo.hospitalNo)
// const disease = ref(this.patientInfo.disease)

const props = defineProps({
    patientInfo: Object,
})
</script>