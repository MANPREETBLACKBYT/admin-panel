import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Dashboard from './components/Dashboard.vue';
import DataFile from './components/DataFile.vue';
import FirstPage from './components/FirstPage.vue';
import Profile from './components/Profile.vue';
import BasicTable from './components/BasicTable.vue';
import Icon from './components/Icon.vue';
import GoogleMap from './components/GoogleMap.vue';
import BlankPage from './components/BlankPage.vue';
import LastPage from './components/LastPage.vue';
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
    },
    {
      path:'/FirstPage',
      name:'FirstPage',
      component: FirstPage
    },
    {
      path:'/Profile',
      name:'Profile',
      component:Profile
    },
    {
      path:'/BasicTable',
      name:'BasicTable',
      component: BasicTable
    },
    {
      path:'/Icon',
      name:'Icon',
      component:Icon
    },
    {
      path:'/GoogleMap',
      name:'GoogleMap',
      component:GoogleMap
    },
    {
      path:'/BlankPage',
      name:'BlankPage',
      component:BlankPage
    },
    {
      path:'/LastPage',
      name:'LastPage',
      component : LastPage
    }
  
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
