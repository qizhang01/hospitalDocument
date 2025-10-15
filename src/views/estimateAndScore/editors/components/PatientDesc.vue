<template>
    <div>
        <span class="tbale-label">科室</span>
        <el-input v-model="department" placeholder="请输入内容"></el-input>

        <span class="tbale-label">床号</span>
        <el-input v-model="bedNo" placeholder="请输入内容"></el-input>

        <span class="tbale-label">姓名</span>
        <el-input v-model="name" placeholder="请输入内容"></el-input>

        <span class="tbale-label">住院号</span>
        <el-input v-model="hospitalNo" placeholder="请输入内容"></el-input>

        <span class="tbale-label">诊断</span>
        <el-input v-model="disease" placeholder="请输入内容"></el-input>
    </div>

</template>

<style lang="scss" scoped>

</style>

<script setup>
import {ref} from "vue"

const department = ref('')
const bedNo = ref('')
const name = ref('')
const hospitalNo = ref('')
const disease = ref('')

const props = defineProps({
    patientInfo: Object,
    tableName: String
})
</script>