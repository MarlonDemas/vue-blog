import VueRouter from 'vue-router'
import App from '@/App';
import Home from '@/components/Home';
import AddBlog from '@/components/AddBlog';

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'app',
            component: App,
            redirect: '/home',
            children: [{
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/addBlog',
                    name: 'addBlog',
                    component: AddBlog
                }
            ]
        }

    ]
})