import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Dashboard from './components/Dashboard.vue';
import DataFile from './components/DataFile.vue'

const routes = [
  
   
 
  {
      path:'/',
      name:'Dashboard',
      component: Dashboard
  },
    {
        path:'/DataFile',
        name:'DataFile',
        component: DataFile
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
