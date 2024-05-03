import { createApp } from 'vue';
import store from './store/index.js';
// router
import router from './router.js';
// app
import App from './App.vue';
//primevue
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';
// styles
import 'primevue/resources/themes/lara-light-blue/theme.css';
// spinner
import SpinnerSmall from './components/ui/SpinnerSmall.vue';
import SpinnerBig from './components/ui/SpinnerBig.vue';
import NoContentFound from './components/ui/NoContentFound.vue';
import PagesWrapper from './components/wrappers/PagesWrapper.vue';
import AuthWrapper from './components/wrappers/AuthWrapper.vue';
import ButtonSmall from './components/ui/ButtonSmall.vue';
const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
// directives
app.directive('ripple', Ripple);
// global components
app.component('SpinnerSmall', SpinnerSmall);
app.component('SpinnerBig', SpinnerBig);
app.component('NoContentFound', NoContentFound);
app.component('PagesWrapper', PagesWrapper);
app.component('AuthWrapper', AuthWrapper);
app.component('ButtonSmall', ButtonSmall);
app.mount('#app');
