import { createRouter, createWebHistory } from 'vue-router';
import FaqView from '../views/FaqView.vue';
import CadastroFaq from '../views/CadastroFaq.vue';
import CadastroAdmin from '../views/CadastroAdmin.vue';
import ChatBot from '../views/ChatBot.vue';
import Sobre from '../views/Sobre.vue';
import Tour from '../views/Tour.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/cadastrofaq',
      name: 'cadastro',
      component: CadastroFaq
    },
    {
      path: '/cadastroadmin',
      name: 'cadastroadmin',
      component: CadastroAdmin
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      component: ChatBot
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    },
  ]
});

export default router;
