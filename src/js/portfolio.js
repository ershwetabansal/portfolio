import Vue from 'vue';
import VueRouter from 'vue-router'
import data from './data.js';

Vue.use(VueRouter);

import notFound from './components/404.vue';
import Skills from './components/skills.vue';
import About from './components/about.vue';
import Portfolio from './components/portfolio.vue';
import Contact from './components/contact.vue';

const router = new VueRouter({
    routes: [
        { path: '/', component: About },
        { path: '/about', component: About },
        { path: '/skills', component: Skills},
        { path: '/contact', component: Contact},
        { path: '/portfolio', component: Portfolio}
    ]
});

const app = new Vue({
    el: '#app',
    data : {
        data
    },
    router
});