
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
        {
            path: "/doctorAdvice/adviceInfo",
            component: () => import("@/views/doctorAdvice/adviceInfo.vue"),
            name: "adviceInfo",
            meta: { title: "医嘱信息", icon: "role" }
        },
                {
            path: "/doctorAdvice/adviceInvolve",
            component: () => import("@/views/doctorAdvice/adviceInvolve.vue"),
            name: "adviceInvolve",
            meta: { title: "医嘱执行单", icon: "role" }
        },
                {
            path: "/doctorAdvice/infusionTour",
            component: () => import("@/views/doctorAdvice/infusionTour.vue"),
            name: "infusionTour",
            meta: { title: "输液巡视单", icon: "role" }
        },
    ]
};