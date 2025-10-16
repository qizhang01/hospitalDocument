<template>
	<div class="container">
            <header></header>
            <div class="topic">评估项目</div>

            <div class="group">
                <span class="title">高危人群</span>
                <el-checkbox-group v-model="highDangerList">
                    <el-checkbox
                        v-for="(item,index) in highDanger"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>

            <div>其他人群</div>
            <div class="group">
                <span class="title">A吞咽障碍</span>
                <el-checkbox-group v-model="swallowObstacleList">
                    <el-checkbox
                        v-for="(item,index) in swallowObstacle"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">C胃食管反流</span>
                <el-checkbox-group v-model="stomachObstacleList">
                    <el-checkbox
                        v-for="(item,index) in stomachObstacle"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">D口腔问题</span>
                <el-checkbox-group v-model="mouseObstacleList">
                    <el-checkbox
                        v-for="(item,index) in mouseObstacle"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">E不良进食</span>
                <el-checkbox-group v-model="dietObstacleList">
                    <el-checkbox
                        v-for="(item,index) in dietObstacle"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">F治疗相关因素</span>
                <el-checkbox-group v-model="treatmentRelationList">
                    <el-checkbox
                        v-for="(item,index) in treatmentRelation"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="topic">防范措施</div>
            <div class="group">
                <span class="title">A吞咽障碍</span>
                <el-checkbox-group v-model="swallowObstacleSuggestList">
                    <el-checkbox
                        v-for="(item,index) in swallowObstacleSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">B咳嗽能力减弱</span>
                <el-checkbox-group v-model="coughObstacleSuggestList">
                    <el-checkbox
                        v-for="(item,index) in coughObstacleSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">C胃食管反流</span>
                <el-checkbox-group v-model="stomachObstacleSuggestList">
                    <el-checkbox
                        v-for="(item,index) in stomachObstacleSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">D口腔问题</span>
                <el-checkbox-group v-model="mouseObstacleSuggestList">
                    <el-checkbox
                        v-for="(item,index) in mouseObstacleSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">E不良进食</span>
                <el-checkbox-group v-model="dietObstacleSuggestList">
                    <el-checkbox
                        v-for="(item,index) in dietObstacleSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="group">
                <span class="title">F治疗相关因素</span>
                <el-checkbox-group v-model="treatmentRelationSuggestList">
                    <el-checkbox
                        v-for="(item,index) in treatmentRelationSuggest"
                        :key="index"
                        :label="item"
                    ></el-checkbox>
                </el-checkbox-group>
            </div>
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
        width: 100px;
    }
}
</style>

<script setup>
    import {highDanger, swallowObstacle, stomachObstacle, mouseObstacle, dietObstacle, treatmentRelation, swallowObstacleSuggest,
         coughObstacleSuggest, stomachObstacleSuggest, mouseObstacleSuggest, dietObstacleSuggest,treatmentRelationSuggest} from '../options/oldPersonIncorrectBreathe'
    import {ref} from "vue";
    const highDangerList = ref([]);
    const swallowObstacleList = ref([]);
    const stomachObstacleList = ref([])
    const mouseObstacleList = ref([])
    const dietObstacleList = ref([])
    const treatmentRelationList = ref([])
    const swallowObstacleSuggestList = ref([])
    const coughObstacleSuggestList = ref([])
    const stomachObstacleSuggestList = ref([])
    const mouseObstacleSuggestList = ref([])
    const dietObstacleSuggestList = ref([])
    const treatmentRelationSuggestList = ref([])
  
</script>