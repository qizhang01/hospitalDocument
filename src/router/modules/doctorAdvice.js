
import Layout from "@/layout";

export default {
    path: "/doctorAdvice",
    component: Layout,
    redirect: "/doctorAdvice/index",
    alwaysShow: true, // will always show the root menu
    name: "doctorAdvice",
    meta: {
        title: "医嘱信息",
        icon: "permission"
    },
    children: [
        {
            path: "/doctorAdvice/index",
            component: () => import("@/views/doctorAdvice/index.vue"),
            name: "index",
            meta: { title: "药物医嘱拆分", icon: "role" }
        },
    ]
};