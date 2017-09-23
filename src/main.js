import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import List from './components/List.vue';
import Item from './components/Item.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/:page?/:details?',
            components: {
                default: List,
                details: Item
            }
        }
    ]
});

new Vue({
    router,
    render: createElement => createElement(App)
}).$mount('#app');
