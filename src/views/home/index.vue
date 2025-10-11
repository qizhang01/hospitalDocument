<template>
	<div>
		<el-row :gutter="20" >
			<el-col :span="18">
				<el-container class="fdc" style="margin-top: 10px">
					<el-col :span="5" v-for="patientInfo in patientInfoArr" :key="patientInfo.id">
						<PatientInfoCard :patient-info="patientInfo"></PatientInfoCard>
					</el-col>
				</el-container>
			</el-col>
		</el-row>
		<Bottom class="footer"></Bottom>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';

.fdc {
  display: flex;
}
.footer {
   position: absolute;
   bottom: 2px;
   left:0px;
   width: 100%;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import Bottom from "./components/bottom.vue"
import PatientInfoCard from "./components/patientInfoCard.vue";
import { patientInfoArr } from "./data";
onMounted(() => {
	initChart();
});

const initChart = () => {

};

</script>