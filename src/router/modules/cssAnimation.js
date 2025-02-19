/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout";

export default {
	path: "/cssAnimation",
	component: Layout,
	redirect: "/cssAnimation/shootingStar",
	alwaysShow: true, // will always show the root menu
	name: "css",
	meta: {
		title: "健康文书",
		icon: "article-ranking"
	},
	children: [
		{
			path: "/cssAnimation/videoMaskText",
			component: () => import("@/views/css-animation/painEstimateTable"),
			name: "painEstimateTable",
			meta: { title: "疼痛评估表", icon: "star" }
		},
		{
			path: "/cssAnimation/shootingStar",
			component: () => import("@/views/css-animation/table1.vue"),
			name: "shootingStar",
			meta: { title: "NICU危重病例评分", icon: "star" }
		},
		{
			path: "/cssAnimation/chartView",
			component: () => import("@/views/css-animation/chartView.vue"),
			name: "chartView",
			meta: { title: "体温表", icon: "star" }
		},
		{
			path: "/cssAnimation/downBtn",
			component: () => import("@/views/css-animation/downBtn.vue"),
			name: "downBtn",
			meta: { title: "新体温表", icon: "star" }
		},
	]
};