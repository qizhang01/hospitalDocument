/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/layout";

export default {
	path: "/vueUse",
	component: Layout,
	redirect: "/vueUse/elements",
	alwaysShow: true, // will always show the root menu
	name: "vueUse",
	meta: {
		title: "成品文书",
		icon: "personnel"
	},
	children: [
		{
			path: "/vueUse/elements",
			redirect: "/elements/useDraggable",
			name: "elements",
			meta: { title: "样例", icon: "example" },
			children: [
				{
					path: "/elements/useIntersectionObserver",
					component: () => import("@/views/timeChat/timeChat.vue"),
					name: "editor",
					meta: { title: "插入html", icon: "star" }
				}
			]
		},
	]
};