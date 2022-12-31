import { createRouter, createWebHistory } from 'vue-router';
import Home from "/components/Home.vue";
import Page from "/components/Page.vue";
import Cover from "/components/Cover.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/cover",
        component: Cover
    },
    {
        path: "/page",
        children: [
            {
                path: ":number",
                component: Page
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
});

export default router