<template>
	<div class="container">
            <header></header>
            <div class="topic">TPRBP</div>

            <div class="section">
                <div class="group">
                    <span class="title">体温(℃)</span>
                    <el-select v-model="temperatureType" placeholder="请选择">
                        <el-option
                            v-for="(item,index) in temperature"
                            :key="index"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                    <el-input v-modal="temperatureValue1" placeholder="请输入" class="input"></el-input>
                    <span style="margin: 0px 10px;">降温后</span>
                    <el-input v-modal="temperatureValue2" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">脉搏(次/分)</span>
                    <el-select v-model="pulseValue" placeholder="请选择">
                        <el-option
                            v-for="(item,index) in pulse"
                            :key="index"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="group">
                    <span class="title">呼吸(次/分)</span>
                    <el-select v-model="breatheWayValue" placeholder="请选择">
                        <el-option
                            v-for="(item,index) in breatheWay"
                            :key="index"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                    <el-input v-modal="breatheValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">血压(mmHg)</span>
                    <el-input v-modal="bloodPressureValue1" placeholder="请输入" class="input"></el-input>
                    <span>/</span>
                    <el-input v-modal="bloodPressureValue2" placeholder="请输入" class="input"></el-input>
                </div>

                <div class="group">
                    <span class="title">心率(次/分)</span>
                    <el-input v-modal="heartQuencyValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">疼痛评分(分)</span>
                    <el-input v-modal="painValue" placeholder="请输入" class="input"></el-input>
                    <span class="title">疼痛缓解</span>
                    <el-input v-modal="painEaseValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">脉象</span>
                    <el-select v-model="pulseConditionValue" placeholder="请选择">
                        <el-option
                            v-for="(item,index) in pulseCondition"
                            :key="index"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="group">
                    <span class="title">舌象</span>
                    <el-select v-model="tongueConditionValue" placeholder="请选择">
                        <el-option
                            v-for="(item,index) in tongueCondition"
                            :key="index"
                            :label="item"
                            :value="item"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="group">
                    <span class="title">起搏心率(次/分)</span>
                    <el-input v-modal="jumpHeartValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">体重(kg)</span>
                    <el-input v-modal="weightValue" placeholder="请输入" class="input"></el-input>
                </div>
            </div>


            <div class="topic">出入量</div>
            <div class="section">
                <div class="group">
                    <span class="title">大便(次)</span>
                    <el-input v-modal="stoolValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">小便(ml)</span>
                    <el-input v-modal="urinateValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">24H入量(ml)</span>
                    <el-input v-modal="in24HValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">24H出量(ml)</span>
                    <el-input v-modal="out24HValue" placeholder="请输入" class="input"></el-input>
                </div>
                <div class="group">
                    <span class="title">引流量(ml)</span>
                    <el-input v-modal="pipeValue" placeholder="请输入" class="input"></el-input>
                </div>
            </div>


            <div class="topic">其他</div>
            <div class="group">
                <span class="title">药物过敏1</span>
                <el-select v-model="allergyValue1" placeholder="请选择">
                    <el-option
                        v-for="(item,index) in allergy"
                        :key="index"
                        :label="item"
                        :value="item"
                    >
                    </el-option>
                </el-select>
            </div>

            <div class="group">
                <span class="title">药物过敏2</span>
                <el-select v-model="allergyValue2" placeholder="请选择">
                    <el-option
                        v-for="(item,index) in allergy"
                        :key="index"
                        :label="item"
                        :value="item"
                    >
                    </el-option>
                </el-select>
            </div>

            <div class="group">
                <span class="title">农历节气</span>
                <el-select v-model="climateValue" placeholder="请选择">
                    <el-option
                        v-for="(item,index) in climate"
                        :key="index"
                        :label="item"
                        :value="item"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="group">
                <span class="title">地高辛</span>
                <el-select v-model="diGaoXinValue" placeholder="请选择">
                    <el-option
                        v-for="(item,index) in diGaoXin"
                        :key="index"
                        :label="item"
                        :value="item"
                    >
                        <el-icon>
                            <!-- {{ index===0 ? <Top />: <bottom />  }} -->
                              <top />
                        </el-icon>
                        <!-- <svg-icon  class="" :icon="index===0 ? 'top' : 'hamburger-closed'"></svg-icon> -->
                        <!-- <i :class="index===0 ? 'el-icon-top':'el-icon-bottom'"></i> -->
                         <i class="el-icon-edit"></i>
                        <span  style="margin-left: 6px;">
                            {{ item }}
                        </span
                        >
                    </el-option>
                </el-select>
            </div>
            <div class="group">
                <span class="title">其他</span>
                <el-input v-modal="otherValue" placeholder="请输入" class="input"></el-input>
            </div>

            <div class="topic">病人事件</div>
            <div class="group">
                <span class="title">事件名称</span>
                <el-input v-modal="eventValue" placeholder="请输入" class="input"></el-input>
            </div>
            <i class="el-icon-edit"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <span></span>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    margin: 0 auto;
    width: 96%;
    .topic{
        font-size: large;
        font-weight: bolder;
    }
  }
  table {
	border-collapse: collapse;
	width: 80%;
  margin: 16px auto;
  }
  td {
	border: 1px solid #ccc;
	width: 12px;
	height: 16px;
	text-align: center;
}
.group {
    display: flex;
    align-items: center;
    .title {
        margin-right: 10px;
        // width: 100px;
    }
}
.input {
    width: 214px;
}
.section {
    display: flex;
    flex-wrap: wrap;
    .group {
        margin-left: 16px;
    }
}
</style>

<script setup>
    import {temperature, breatheWay, allergy, climate, pulse,pulseCondition,tongueCondition, diGaoXin} from '../options/batchInput'
    import {ref} from "vue";
    import { Top, Bottom } from '@element-plus/icons'

    const temperatureType = ref('')
    const temperatureValue1 = ref('')
    const temperatureValue2 = ref('')

    const pulseValue = ref('')
    const breatheWayValue = ref('')
    const breatheValue = ref('')

    const bloodPressureValue1 = ref('')
    const bloodPressureValue2 = ref('')
    const heartQuencyValue = ref('')
    const painValue = ref('')
    const painEaseValue = ref('')
    const pulseConditionValue = ref('')
    const tongueConditionValue = ref('')
    const jumpHeartValue = ref('')
    const weightValue = ref('')


    const stoolValue = ref('')
    const urinateValue = ref('')
    const in24HValue = ref('')
    const out24HValue = ref('')
    const pipeValue = ref('')

    const allergyValue1 = ref('')
    const allergyValue2 = ref('')
    const climateValue = ref('')
    const otherValue = ref('')
    const diGaoXinValue = ref('')

    const eventValue = ref('')

    // const icon = computed(() =>
    //     store.getters.sidebarOpened ? "hamburger-opened" : "hamburger-closed"
    // );
</script>