import { createRouter, createWebHistory } from 'vue-router';

import MainApp from './components/MainApp.vue'
import SingleProject from './Pages/SingleProject.vue'
import ContactUs from './Pages/ContactUs.vue'
import NotFound from './Pages/NotFound.vue'


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
         {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
         },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});


export { router };