import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PartitionPage from "../views/ParititionPage/PartitionPage.vue"
import ChatPage from "../views/ChatPage/ChatPage.vue"
import MinePage from "../views/MinePage/MinePage.vue"
import showBottomTabs from "@/components/showBottomTabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: showBottomTabs,
    children:[
      {
        path: '',
        redirect: '/home',
      },
      {
        path: "/home",
        name: "home",
        component: HomePage,
      },
      {
        path: "/partition",
        name: "partition",
        component: PartitionPage,

      },
      {
        path: "/chat",
        name: "chat",
        component: ChatPage,

      },
      {
        path: "/mine",
        name: "mine",
        component: MinePage,

      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
