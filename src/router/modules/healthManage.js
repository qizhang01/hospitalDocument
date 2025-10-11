/** When your routing table is too long, you can split it into small modules**/

import layout from "@/layout";

export default {
	path: "/manage",
	component: layout,
	redirect: "/manage/batchInput",
	alwaysShow: true, // will always show the root menu
	name: "manage",
	meta: {
		title: "体征管理",
		icon: "article"
	},
	children: [
		{
			path: "/manage/batchInput",
			component: () => import("@/views/manage/batchInput.vue"),
			name: "batchInput",
			meta: {
				title: "体征批量录入", icon: "article-ranking"
			}
		},
		{
			path: "/manage/temperature",
			component: () => import("@/views/manage/temperature.vue"),
			name: "temperature",
			meta: {
				title: "体温单", icon: "article-ranking"
			}
		},
	]
};