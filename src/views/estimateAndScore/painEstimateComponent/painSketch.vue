<template>
    <div class="content">
        <p>疾病诊断:</p>
        <div style="display: flex;">
            <div class="left-content">
                <div class="topic-line">
                    <div class="pain-area">疼痛区号</div>
                    <div class="pain-percent">
                        占体表面积百分比
                    </div>
                </div>
                <div class="topic-line">
                    <div class="pain-area">
                        <div
                            v-for="(item, index) in painTextArr"
                            :key="index "
                            class = 'item-text'
                            :style="index%2==0?'color: #d15f13':''"
                        >
                        {{ item }}
                        </div>
                    </div>
                    <div class="pain-percent">
                        <div
                            v-for="(item, index) in painPercentArr"
                            :key="index "
                            class = 'item-text'
                            :style="index%2==0?'color: #d15f13':''"
                        >
                        {{ item }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <img :src="src" alt="" style="height: 300px;" >
            </div>
        </div>
        <p>+加号表示障碍部位</p>
        <p>一、根据患者的评估制度结合我科的实际情况，对每个门诊及住院患者应进行相应的评估，全面把握患者的现状和诊疗服务的要求，为制定适宜于患者的诊疗方案提供依据和支持。</p>
        <p>二、患者评估的重点范围：住院患者评估、治疗前评估、疼痛评估、危重病人评估、住院患者再评估、治疗前评估、出院前评估及出院后随访评估等。</p>
        <p>三、病人评估资料是供临床科室直接负责患者诊疗、护理工作、为制定诊疗方案和会诊、讨论提供支持，注意患者隐私保护，病人评估记录文件进入住院病历。</p>
        <p>四、医院有患者评估操作与程序，包括有评估项目、评估人及评估内容、标准、时限要求、记录文件格式等。</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const src = "/static/assets/painDesc.png"
const painTextArr =['25, 25, 29','4,5,16','3,8,9,10,12,15,16','1,2,21,22,23,24,25','6,7,8,10','38,39','14,15','19,20,22','34,35','17,18,21']
const painPercentArr = [0.5, 1.0, 1.5, 1.75, 2.00, 2.50, 3.00, 3.5, 3.75, 4.5]
const props = defineProps({
    valArr: {
        type: Array,
        required: false
    }
});
</script>

<style lang="scss" scoped>
.content {
    border: 1px solid black;
}
.topic-line {
    display: flex;
    border: 1px solid black;
}
.pain-area {
    width: 200px;
    padding: 6px;
    border-right: 1px solid black;
}
.pain-percent {
    width: 200px;
}
.topic {
    width: 110px;
    height: 100%;
}
.left-content,
.right-content { 
    width: 50%;
    text-align: center;
}

.item-text {
    margin-bottom: 6px;
}
</style>