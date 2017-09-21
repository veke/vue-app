import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import List from './components/List.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/:page?', component: List }
    ]
});

new Vue({
    mode: 'history',
    router,
    render: createElement => createElement(App)
}).$mount('#app');
