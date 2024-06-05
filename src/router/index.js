import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/MainView.vue'),
    },
    {
        path: '/collections',
        name: 'Collections',
        component: () => import('../views/CollectionsView.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/ServicesView.vue')
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: () => import('../views/BlogsView.vue'),
        children: [{
            path: 'article1',
            name: 'article1',
            component: () => import('../views/BlogsContentView.vue'),
        }]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/ContactView.vue')
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/UploadView.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes,
})

export default router;