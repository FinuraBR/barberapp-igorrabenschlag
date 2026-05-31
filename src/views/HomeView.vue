<template>
  <div class="container">
    <h2 class="mb-4">📅 Agendamentos do Dia</h2>

    <!-- TODO
        Criar um router link para ir para tela de cadastro
        https://router.vuejs.org/guide/#App-vue
    -->

    <!-- TODO [CRITÉRIO 4]:
      Use v-for para percorrer a lista de agendamentos e renderizar
      um componente AgendamentoCard para cada item.
      Não esqueça de passar o agendamento como prop e usar :key.
      https://vuejs.org/guide/essentials/list.html#v-for
      https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key
    -->

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AgendamentoCard from '../components/AgendamentoCard.vue'
import type Agendamento from '../interfaces/Agendamento'
import { listarAgendamentos, criarAgendamento } from '../services/agendamentoService'

// TODO [CRITÉRIO 3]:
// Crie uma variável reativa (ref) para armazenar a lista de agendamentos.


// TODO [CRITÉRIO 3 e 8]:
// Use onMounted para chamar a função que busca os agendamentos da API
// assim que a tela for carregada.
async function buscarAgendamentos() {
    
}

onMounted(buscarAgendamentos)
</script>