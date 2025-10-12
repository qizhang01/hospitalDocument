/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout";

export default {
	path: "/estimateAndScore",
	component: Layout,
	redirect: "/cssAnimation/firstRecord",
	alwaysShow: true, // will always show the root menu
	name: "estimateAndScore",
	meta: {
		title: "评估评分",
		icon: "article-ranking"
	},
	children: [
		{
			path: "/estimateAndScore/firstRecord",
			component: () => import("@/views/estimateAndScore/downBtn.vue"),
			name: "firstRecord",
			meta: { title: "首次护程表", icon: "star" }
		},
		{
			path: "/estimateAndScore/presureInjure",
			component: () => import("@/views/estimateAndScore/presureInjure"),
			name: "presureInjure",
			meta: { title: "住院患者压力性损伤危险因素评估表", icon: "star" }
		},

		{
			path: "/estimateAndScore/surgicalThrombus",
			component: () => import("@/views/estimateAndScore/externalPatientCaprini.vue"),
			name: "surgicalThrombus",
			meta: { title: "外科住院患者静脉血栓栓塞症风险评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/internalThrombus",
			component: () => import("@/views/estimateAndScore/internalPatientCaprini.vue"),
			name: "internalThrombus",
			meta: { title: "内科住院患者静脉血栓栓塞症风险评估表", icon: "star" }
		},

		{
			path: "/estimateAndScore/nurseRecord",
			component: () => import("@/views/estimateAndScore/nurseRecord.vue"),
			name: "nurseRecord",
			meta: { title: "护理记录单", icon: "star" }
		},
		{
			path: "/estimateAndScore/nurseLevelEstimate",
			component: () => import("@/views/estimateAndScore/nurseLevel.vue"),
			name: "nurseLevelEstimate",
			meta: { title: "护理分级评定表", icon: "star" }
		},
		
		{
			path: "/estimateAndScore/healthConduct",
			component: () => import("@/views/estimateAndScore/riskEstimateTable.vue"),
			name: "healthConduct",
			meta: { title: "健康指导表", icon: "star" }
		},
		{
			path: "/estimateAndScore/noPlanDeletePipe",
			component: () => import("@/views/estimateAndScore/noPlanDeletePipe.vue"),
			name: "noPlanDeletePipe",
			meta: { title: "住院患者非计划拔管危险因素评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/protectRestrict",
			component: () => import("@/views/estimateAndScore/protectRestrict.vue"),
			name: "protectRestrict",
			meta: { title: "保护性约束评估记录单", icon: "star" }
		},
		{
			path: "/estimateAndScore/painRecord",
			component: () => import("@/views/estimateAndScore/painRecord.vue"),
			name: "painRecord",
			meta: { title: "疼痛评估记录单", icon: "star" }
		},
		{
			path: "/estimateAndScore/riskEstimate",
			component: () => import("@/views/estimateAndScore/riskEstimateTable"),
			name: "riskEstimateTable",
			meta: { title: "住院病人风险评估表", icon: "star" }
		},

		{
			path: "/estimateAndScore/painNurse",
			component: () => import("@/views/estimateAndScore/painEstimateTable"),
			name: "painNurse",
			meta: { title: "疼痛护理记录", icon: "star" }
		},
		{
			path: "/estimateAndScore/criticalPatientNEWS",
			component: () => import("@/views/estimateAndScore/table1.vue"),
			name: "criticalPatientNEWS",
			meta: { title: "危重患者病情NEWS评估表", icon: "star" }
		},

		{
			path: "/estimateAndScore/marshWaterEstimate",
			component: () => import("@/views/estimateAndScore/riskEstimateTable"),
			name: "marshWaterEstimate",
			meta: { title: "洼田饮水评估表", icon: "star" }
		},
		
		{
			path: "/estimateAndScore/morseFallenEstimate",
			component: () => import("@/views/estimateAndScore/morseFallen"),
			name: "morseFallenEstimate",
			meta: { title: "Morse跌倒风险评估表", icon: "star" }
		},
		
		{
			path: "/estimateAndScore/fangTaEstimate1",
			component: () => import("@/views/estimateAndScore/riskEstimateTable"),
			name: "fangTaEstimate1",
			meta: { title: "方塔医院约束前评估1", icon: "star" }
		},
		
		{
			path: "/estimateAndScore/fangTaEstimate2",
			component: () => import("@/views/estimateAndScore/riskEstimateTable"),
			name: "fangTaEstimate2",
			meta: { title: "方塔医院约束前评估2", icon: "star" }
		},
		
		{
			path: "/estimateAndScore/patientInHospitalFallen",
			component: () => import("@/views/estimateAndScore/patientInHospitalFallen"),
			name: "patientInHospitalFallen",
			meta: { title: "住院患者跌倒风险评估表", icon: "star" }
		},

		{
			path: "/estimateAndScore/riskEstimate2",
			component: () => import("@/views/estimateAndScore/riskEstimateTable"),
			name: "riskEstimate2",
			meta: { title: "入院评估单(2)", icon: "star" }
		},

		{
			path: "/estimateAndScore/oldPatientMistakeBreathe",
			component: () => import("@/views/estimateAndScore/table1.vue"),
			name: "oldPatientMistakeBreathe",
			meta: { title: "11老年住院误吸风险评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/oldManIncorrectBreathe",
			component: () => import("@/views/estimateAndScore/oldManIncorrectBreathe.vue"),
			name: "oldManIncorrectBreathe",
			meta: { title: "老年住院误吸风险评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/halfCoughEstimate",
			component: () => import("@/views/estimateAndScore/halfCough.vue"),
			name: "halfCoughEstimate",
			meta: { title: "半定量咳嗽强度评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/fixedMarshWaterEstimate",
			component: () => import("@/views/estimateAndScore/fixedMarshWater"),
			name: "fixedMarshWaterEstimate",
			meta: { title: "改良洼田饮水实验评估表", icon: "star" }
		},
		{
			path: "/estimateAndScore/downBtn",
			component: () => import("@/views/estimateAndScore/downBtn.vue"),
			name: "downBtn",
			meta: { title: "新体温表", icon: "star" }
		},
	]
};