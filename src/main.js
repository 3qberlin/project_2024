import './assets/style/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';


const app = createApp(App);

router.afterEach(() => {
    window.scrollTo(0, 0);
});

app.use(router);
app.mount('#app');
// createApp(App).mount('#app')
