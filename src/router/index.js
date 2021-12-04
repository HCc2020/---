import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CareNursing",
    name: "CareNursing",
    component: () => import('../views/CareNursing.vue'),
  },
  {
    path: "/CommunityPension",
    name: "CommunityPension",
    component: () => import('../views/CommunityPension.vue'),
  },
  {
    path: "/HomeCare",
    name: "HomeCare",
    component: () => import('../views/HomeCare.vue'),
  },
  {
    path: "/InstitutionalPension",
    name: "InstitutionalPension",
    component: () => import('../views/InstitutionalPension.vue'),
  },
  {
    path: "/KangyangMap",
    name: "KangyangMap",
    component: () => import('../views/KangyangMap.vue'),
  },
  {
    path: "/OperationSupervision",
    name: "OperationSupervision",
    component: () => import('../views/OperationSupervision.vue'),
  },
  {
    path: "/organizedSystem",
    name: "organizedSystem",
    component: () => import('../views/organizedSystem.vue'),
  },
  {
    path: "/PensionEvaluation",
    name: "PensionEvaluation",
    component: () => import('../views/PensionEvaluation.vue'),
  },
  {
    path: "/PensionInfo",
    name: "PensionInfo",
    component: () => import('../views/PensionInfo.vue'),
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;