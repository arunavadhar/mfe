import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {    
   const vueApp = createApp(Dashboard);
   vueApp.mount(el);
}

if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#dashboard_dev_root');

    if(el)
        mount(el);
}
//change to trigger the git deployment workflow
export { mount }