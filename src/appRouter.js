import VueRouter from 'vue-router'
import App from '@/App';
import Home from '@/components/Home';

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})