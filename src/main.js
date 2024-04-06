import { createApp } from 'vue';
import { createPinia } from 'pinia'; 
import router from './routes/router';
import App from "./App.vue"
import 'bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');

