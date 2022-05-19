import { createRouter, createWebHistory } from "vue-router";
import MapEntry from "@/views/MapEntry.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MapEntry",
      component: MapEntry,
    },
  ],
});

export default router;
