import { createRouter, createWebHistory } from 'vue-router';

import MainApp from './components/MainApp.vue'
import SingleProject from './Pages/SingleProject.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainApp
        },
        {
            path: '/blog/:slug',
            name: 'single-Project',
            component: SingleProject
         },
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "not-found",
        //     component: NotFound
        // }
    ]
});


export { router };