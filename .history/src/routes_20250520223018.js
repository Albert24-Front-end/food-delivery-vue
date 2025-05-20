import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/notFound.vue";
import Item from "./pages/_ItemAlias.vue";
import DefaultLayout from "./layouts/defaultLayout.vue";

const routerHistory = createWebHashHistory();

const routes = [
    {
        path: "/",
        name: "layout",
        component: DefaultLayout,
        children: [
            { path: '', name: "home", component: HomePage },
            { path: '/:itemAlias', name: "itemAlias", component: Item },
            { path: '/:CatchAll(.*)', name: "404", component: NotFound }
          ]
    },
    // {
    //     path: "/",
    //     name: "home",
    //     component: HomePage,
    // },
    // {
    //     path: "/:itemAlias",
    //     name: "itemAlias",
    //     component: Item,
    // },
    // {
    //     path: "/:CatchAll(.*)",
    //     name: "404",
    //     component: NotFound,
    // },
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