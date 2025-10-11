<template>
    <div shadow="hover" class="bottom-card">
        <span class="item">所有(16)</span>
        <span class="item">特级护理(0)</span>
        <span class="item">一级护理(0)</span>
        <span class="item">二级护理(9)</span>
        <span class="item">三级护理(7)</span>
        <div class="item">
            <img :src="src6">
            <span>新病人(2)</span>
        </div>
        <div class="item">
            <img :src="src2">
            <span>过敏史(2)</span>
        </div>
        <div class="item">
            <img :src="src4">
            <span>新医嘱(2)</span>
        </div>
        <div class="item">
            <img :src="src5">
            <span>手术病人(0)</span>
        </div>        
        <div class="item">
            <img :src="src1">
            <span>欠费(2)</span>
        </div>
        <div class="item">
            <img :src="src3">
            <span>完成(2)</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$primary: #409eff;
.bottom-card{
    width: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    box-shadow: 1px 1px 2px $primary;
    padding-left: 10px;
}
.item {
    display: flex;
    align-items: center;
    margin-right: 10px;
}
img {
    width: 26px;
    height: 26px;
    margin-right: 8px;
}
</style>

<script setup>
import { defineProps, defineEmits, ref, watch, nextTick } from "vue";
import { getRoleList } from "@/api/api";
const src1 = "/static/assets/noMoney.png"
const src2 = "/static/assets/allergy.png"
const src3 = "/static/assets/finish.png"
const src4 = "/static/assets/notes.png"
const src5 = "/static/assets/operation.png"
const src6 = "/static/assets/newPatient.png"

const props = defineProps({
	patientInfo: {
		type: Object,
		required: true
	},
});
</script>