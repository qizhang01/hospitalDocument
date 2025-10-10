/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout";

export default {
	path: "/statistics",
	component: Layout,
	redirect: "/statistics/elements",
	alwaysShow: true, // will always show the root menu
	name: "statistics",
	meta: {
		title: "查看统计",
		icon: "personnel"
	},
	children: [
		{
			path: "/statistics/nurseCheck",
			component: () => import("@/views/statistics/nurseCheck.vue"),
			name: "nurseCheck",
			meta: {
				title: "护理巡视情况", icon: "article-ranking"
			}
		},
		{
			path: "/statistics/patientOutOfHospital",
			component: () => import("@/views/statistics/patientOutOfHospital.vue"),
			name: "patientOutOfHospital",
			meta: {
				title: "出院病人查询", icon: "article-create"
			}
		}

	]
	// children: [
	// 	{
	// 		path: "/vueUse/elements",
	// 		redirect: "/elements/useDraggable",
	// 		name: "elements",
	// 		meta: { title: "样例", icon: "example" },
	// 		children: [
	// 			{
	// 				path: "/elements/useIntersectionObserver",
	// 				component: () => import("@/views/timeChat/timeChat.vue"),
	// 				name: "editor",
	// 				meta: { title: "插入html", icon: "star" }
	// 			}
	// 		]
	// 	},
	// ]
};