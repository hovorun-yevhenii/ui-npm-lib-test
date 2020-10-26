import VueRouter from 'vue-router';
import Vue from 'vue';
import componentRoutes from './components';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/AppHome.vue')
        },
        {
            path: '/colors',
            name: 'colors',
            component: () => import('../components/AppColors.vue')
        },
        {
            path: '/components',
            name: 'components',
            component: () => import('../components/ComponentWrapper.vue'),
            children: componentRoutes
        }
    ]
});
