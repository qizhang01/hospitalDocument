<template>
	<div class="table_wrap">
		<div style="padding-bottom: 6px;">
			<top :patientInfo="patientInfo"></top>
		</div>
		<table>
			<thead>
				<tr>
					<td rowspan="2">项目</td>
					<td rowspan="2">内容说明</td>
					<td rowspan="2" class="center_td">分值</td>
					<td colspan="7" class="center_td">评估日期和结果</td>
				</tr>
				<tr class="date_sign">
					<td >12-24</td>
					<td ></td>
					<td ></td>
					<td ></td>
					<td ></td>
					<td ></td>
					<td ></td>
				</tr>
			</thead>
			<table-line 
				:scoreStandardArr='scoreStandardArr1'
				column1Text="患者危险因素"
				:valArr="riskValArr1"
			></table-line>
			<table-line 
				:scoreStandardArr='scoreStandardArr2'
				column1Text="临床危险因素"
				:valArr="riskValArr2"
			></table-line>
			<table-line 
				:scoreStandardArr='scoreStandardArr3'
				column1Text="实验室检查"
				:valArr="riskValArr3"
			></table-line>
			<score-and-sign
				:lastScoreValArr = "lastScoreValArr"
				:lowRiskScoreValArr = "lowRiskScoreValArr"
				:highRiskScoreValArr="highRiskScoreValArr"
				:estimateSignerArr="estimateSignerArr"
				:chiefNurseSignerArr="chiefNurseSignerArr"
				:nursingDepartmentArr="nursingDepartmentArr"
			></score-and-sign>
		</table>
		<bottom></bottom>
	</div>
</template>

<style lang="scss" scoped>
  .table_wrap {
    position: relative;
    margin: 0 auto;
    width: 1200px;
  }
  table {
	border-collapse: collapse;
	width: 100%;
  }
  td {
	border: 1px solid #ccc;
	width: 12px;
	height: 16px;
	padding: 4px 0
}
.center_td {
	text-align: center;
}
.date_sign {
	td {
		width: 20px;
		text-align: center;
	}
}
</style>

<script setup>
    import tableLine from './riskEstimateComponent/tableLine.vue';
	import scoreAndSign from './riskEstimateComponent/scoreAndSign.vue';
	import bottom from './riskEstimateComponent/bottom.vue';
    import top from './riskEstimateComponent/top.vue';
	const patientInfo={
		name: '某患者',
		age: 35,
		department: '心肺科',
		gender: '男',
		bornDate: '1998-2-14',
		bedNo: 22,
		documentNo: 168-122
  	}
    const scoreStandardArr1 = [
		{text: '年龄>=20', val: 1},
		{text:'肥胖(体重指数>=3okg/m2)', val:2},
		{text: '近期创伤或外科手术', val:2},
		{text:'既往ETV病史(浅静脉血栓病史)', val:3},
		{text:'妊娠或产褥期', val: 3},{text:'卧床至少3天', val:3},{text:'正在进行激素替代治疗', val:1}]
	const riskValArr1 = [
        [1,0,0,0,0,0,0],
		[1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0]
	]
	const scoreStandardArr2 = [
		{text: '心力衰竭', val: 1},
		{text:'呼吸衰竭', val:2},
		{text: '心肌梗死', val:2},
		{text:'缺血性脑卒', val:3},
		{text:'急性感染', val: 3},
		{text:'肾病综合征', val:3},
		{text:'静脉曲张', val:1},
		{text:'血小板增多', val: 3},
		{text:'炎性肠病', val:3},
		{text:'恶性肿瘤活动期, 有局部和远部转移', val:1},
	]
	const riskValArr2 = [
        [1,0,0,0,0,0,0],
		[1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0]
	]

	const scoreStandardArr3 = [
		{text: '有静脉血栓形成倾向', val: 1},
		{text:'蛋白c, 蛋白s缺失', val:2},
		{text: '凝血酶, v因子缺失', val:2},
		{text:'抗心抗体综合征', val:3},
	]
	const riskValArr3 = [
        [1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
	]

	const lastScoreValArr = [3, '','','']
	const lowRiskScoreValArr = []

	const highRiskScoreValArr=[]
	const estimateSignerArr=[]
	const chiefNurseSignerArr=[]
	const nursingDepartmentArr=[]
</script>