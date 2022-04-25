import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '@/page/HomeIndex.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
    {
        path : '/stx-vue/',
        name : 'Home',
        component : HomeIndex
    }, {
        path : '/stx-vue/company',
        name : 'Company',
        component : HomeIndex

    }, {
        path : '/stx-vue/bussiness',
        name : 'Bussiness',
        component : HomeIndex

    }, {
        path : '/stx-vue/cb',
        name : 'Cb',
        component : HomeIndex

    }, {
        path : '/stx-vue/ad',
        name : 'Cb',
        component : HomeIndex

    }, {
        path : '/stx-vue/cs',
        name : 'CS',
        component : HomeIndex

    }, {
        path : '/stx-vue/job',
        name : 'Job',
        component : HomeIndex

    }]
});

export default router;