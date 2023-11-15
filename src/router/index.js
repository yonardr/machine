import { createRouter, createWebHistory } from 'vue-router'
import Start from "@/components/Start.vue";
import Menu from "@/components/Menu.vue";
import Score from "@/components/Score.vue";

const routes = [
    {
        name: 'main',
        path: '/',
        component: Start
    },
    {
        name: 'menu',
        path: '/menu',
        component: Menu
    },
    {
        name: 'score',
        path: '/score',
        component: Score
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                left: 0,
                top: 120,
                behavior: 'smooth'
            }
        }
    }
})
export default router