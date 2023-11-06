import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PartitionPage from "../views/ParititionPage/PartitionPage.vue";
import ChatPage from "../views/ChatPage/ChatPage.vue";
import MinePage from "../views/MinePage/MinePage.vue";
import showBottomTabs from "@/components/showBottomTabs.vue";
import PostPage from "../views/PostPage/PostPage.vue"
import SearchPage from "@/views/SearchPage/SearchPage.vue";
import SettingPage from "@/views/SettingPage/SettingPage.vue";
import ChatContentPage from "@/views/ChatContentPage/ChatContentPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path:"/post",
    name:"post",
    component: PostPage
  },
  {
    path:"/chatcontent",
    name:"chatContent",
    component: ChatContentPage
  },
  {
    path:"/setting",
    name:"setting",
    component: SettingPage
  },
  {
    path:"/search",
    name:"search",
    component: SearchPage
  },
  {
    path: "/",
    component: showBottomTabs,
    children: [
      {
        path: "",
        redirect: "/home",
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
