<template>
  <div class="container">

    <!-- TODO [CRITÉRIO 4]:
      Use v-if para exibir as informações do agendamento apenas quando ele
      tiver sido carregado (ou seja, quando a variável não for null).
      Exiba todos os campos: clienteNome, servico, data, hora, barbeiro e status.
      Adicione um botão "Voltar" que leva de volta para a rota '/'.
    -->

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type Agendamento from '../interfaces/Agendamento'
import { buscarAgendamentoPorId } from '../services/agendamentoService'

const route = useRoute()
const router = useRouter()

// TODO [CRITÉRIO 3]:
// Crie uma variável reativa (ref) para armazenar o agendamento carregado.
// O tipo deve ser "Agendamento"

// TODO [CRITÉRIO 3, 7 e 9]:
// Use onMounted para buscar o agendamento pelo ID da rota.
// O ID está disponível em: route.params.id
// Lembre-se de converter o ID para number (as number) antes de usar.
async function buscarAgendamento() {
  
}

onMounted(buscarAgendamento)
</script>