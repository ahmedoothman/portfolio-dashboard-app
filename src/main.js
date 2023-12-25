import { createApp } from 'vue';
import store from './store/index.js';
// router
import router from './router.js';
// app
import App from './App.vue';
//primevue
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
// styles
import 'primevue/resources/themes/lara-light-blue/theme.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
