import VueRouter from 'vue-router';
import Vue from 'vue';
import componentRoutes from './components';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../components/AppHome.vue')
        },
        ...componentRoutes
    ]
});
