<template>
    <tr>
        <td class="score_td">总分</td>
        <td class="score_td" colspan="2"></td>
        <td class="score_td">{{ lastScoreValArr[0]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[1]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[2]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[3]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[4]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[5]??'' }}</td>
        <td class="score_td">{{ lastScoreValArr[6]??'' }}</td>
    </tr>

    <tr>
        <td class="score_td" rowspan="2">预防措施</td>
        <td class="score_td" colspan="2">低危&lt4</td>
        <td class="score_td">{{ lowRiskScoreValArr[0]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[1]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[2]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[3]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[4]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[5]??'' }}</td>
        <td class="score_td">{{ lowRiskScoreValArr[6]??'' }}</td>
    </tr>
    <tr>
        <td class="score_td" colspan="2">高危&rt4</td>
        <td class="score_td">{{ highRiskScoreValArr[0]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[1]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[2]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[3]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[4]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[5]??'' }}</td>
        <td class="score_td">{{ highRiskScoreValArr[6]??'' }}</td>
    </tr>

    <tr>
        <td class="score_td" colspan="3">评估者签名</td>
        <td class="score_td">{{ estimateSignerArr[0]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[1]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[2]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[3]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[4]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[5]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[6]??'' }}</td>
    </tr>
    <tr>
        <td class="score_td" colspan="3">护士长签名</td>
        <td class="score_td">{{ estimateSignerArr[0]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[1]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[2]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[3]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[4]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[5]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[6]??'' }}</td>
    </tr>
    <tr>
        <td class="score_td" colspan="3">护理部签名</td>
        <td class="score_td">{{ estimateSignerArr[0]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[1]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[2]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[3]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[4]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[5]??'' }}</td>
        <td class="score_td">{{ estimateSignerArr[6]??'' }}</td>
    </tr>
</template>

<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        lastScoreValArr: {
            type: Array,
            required: true
        },
        lowRiskScoreValArr: {
            type: Array,
            required: true
        },
        highRiskScoreValArr: {
            type: Array,
            required: true
        },
        estimateSignerArr: Array,
        chiefNurseSignerArr: Array,
        nursingDepartmentArr: Array
    });

    const handleColumnClick=(column, val)=>{
        props.handleClick(column, val)
    }
</script>

<style lang="scss" scoped>

td {
border: 1px solid #ccc;
width: 12px;
height: 16px;
padding: 4px 0
}

.fist_column_text {
white-space: normal
}
.score_td {
    text-align: center;
}
</style>