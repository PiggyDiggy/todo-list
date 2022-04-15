import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/todos",
    component: () => import("@/views/Todos.vue"),
    children: [
      {
        path: "/current",
        component: () => import("@/views/Current.vue"),
      },
      {
        path: "/completed",
        component: () => import("@/views/Completed.vue"),
      },
      {
        path: "/create",
        component: () => import("@/views/Create.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
