<template>
    <div class="container">
        <div shadow="hover" class="box-card">
            <h3 class="header">{{ patientInfo.bedNo }}</h3>
            <div class="row-center">
                <span>{{ patientInfo.name }}</span>
            </div>
            <div class="row-spacebetween">
                <span>{{ patientInfo.hospitalNo }}</span>
                <span>{{ patientInfo.gender }} | {{ patientInfo.age }}</span>
            </div>
            <div class="identify">
                <img :src="src1" class="icon"/>
                <img :src="src2" class="icon"/>
                <img :src="src3" class="icon"/>
                <img :src="src4" class="icon"/>
                <img :src="src5" class="icon"/>
                <img :src="src6" class="icon"/>
            </div>
        </div>
        <div class="hover-card">
            <patientInfoHoverCard :patient-info="patientInfo"></patientInfoHoverCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $success: #606266;
    $primary: #409eff;
    
    .container {
        position: relative;
        &:hover {
            .hover-card {
                display: block;
                width: 320px;
                padding: 8px;
            }
        }
        .hover-card {
            position: absolute;
            z-index: 1000;
            top: 0px;
            right: -326px;
            display: none;
            border: 1px solid $success;
            background-color: white;
            box-shadow: 1px 1px 8px $primary;
             border-radius: 6px;
            // height: 500px;
        }
    }
    .box-card {
        display: flex;
        flex-direction: column;
        z-index: 10;
        height: 7rem;
        border-radius: 6px;
        box-shadow: 1px 1px 8px $primary;
    }

    .header {
        color: $success;
        padding: 4px;
        width: 100%;
        text-align: center;
        background-color: #0066ec;
        height: 30px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .row-center{
        display: flex;
        justify-content: center;
    }
    .row-spacebetween{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .icon {
        width: 24px;
        height: 24px;
    }
    .identify {
        display: flex;
        margin-top: 8px;
        justify-content: center;
        img {
            margin-right: 8px;
        }
    }
</style>

<script setup>
import { defineProps, defineEmits, ref, watch, nextTick } from "vue";
import { getRoleList } from "@/api/api";
import patientInfoHoverCard from "./patientInfoHoverCard.vue";
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