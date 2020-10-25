import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/foo',
            component: () => import('./pages/Foo.vue')
        }
    ]
});
