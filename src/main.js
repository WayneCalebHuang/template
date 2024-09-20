import '@/assets/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'sweetalert2/dist/sweetalert2.min.css';
// icon library
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiPersonCircle, IoCheckmarkCircleSharp, IoChevronDownCircle } from 'oh-vue-icons/icons';

addIcons(BiPersonCircle, IoCheckmarkCircleSharp, IoChevronDownCircle);

const app = createApp(App);
const pinia = createPinia();

app.component('v-icon', OhVueIcon).use(router).use(pinia);

app.mount('#app');
