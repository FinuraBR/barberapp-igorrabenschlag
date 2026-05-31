import { createRouter, createWebHistory } from 'vue-router'

// TODO [CRITÉRIO 6]:
  // Defina a rota para a tela inicial (HomeView).
  // Caminho: '/'

  // TODO [CRITÉRIO 7]:
  // Defina a rota para a tela de detalhes (DetalhesView).
  // Caminho: '/agendamento/:id'
  // O ":id" é o parâmetro de rota que identifica qual agendamento será exibido.

  // TODO
  // Defina a rota para a tela de cadastro (CadastroView)
  // Caminho: '/cadastro'
// https://router.vuejs.org/guide/#Creating-the-router-instance

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

  ],
})

export default router
