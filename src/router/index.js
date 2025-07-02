import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routerHistory = createWebHistory();

const routes = [
    {
        path: "/",
        name: "layout",
        component: () => import('@/layouts/defaultLayout.vue'),
        children: [
            { path: '', name: 'home', component: () => import('@/pages/HomePage.vue') },
            // { path: 'restaurant/:id/', name: 'Restaurant', component: () => import('@/pages/RestaurantPage.vue') },
            { path: 'product/:id/', name: 'ProductPage', component: () => import('@/pages/ProductPage.vue') },
            { path: '/:CatchAll(.*)', name: '404', component: () => import('@/pages/notFound.vue') }
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return { top: 0 }
        }

    }
  });

export default router;