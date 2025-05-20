import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/notFound.vue";
import Item from "./pages/_ItemAlias.vue";

const routerHistory = createWebHashHistory();

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/:itemAlias",
        name: "itemAlias",
        component: Item,
    },
    {
        path: "/:PathMatch(.*)*",
        name: "404",
        component: NotFound,
    },
    // {
    //     path: "/:PathMatch(.*)*",
    //     component: NotFound,
    // },
];

const router = createRouter({
    history: routerHistory,
    routes,
});

export default router;