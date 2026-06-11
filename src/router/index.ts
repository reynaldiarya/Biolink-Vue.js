import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Biolink from '@/views/Biolink.vue'
import BiolinkPageDetail from '@/views/BiolinkPageDetail.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Biolink',
        component: Biolink
    },
    {
        path: '/:slug',
        name: 'BiolinkPageDetail',
        component: BiolinkPageDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
