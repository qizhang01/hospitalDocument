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
			path: "/cssAnimation/shootingStar",
			component: () => import("@/views/css-animation/print.vue"),
			name: "shootingStar",
			meta: { title: "d3开发中", icon: "star" }
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