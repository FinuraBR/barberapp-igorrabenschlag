<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> { agendamento.clienteNome }</h5>
    <p class="card-text">{agendamento.servico}<br>{agendamento.data}<br>{agendamento.hora}<br>{agendamento.barbeiro}</p>
    <a href="/agendamento/:id" class="card-link">Ver detalhes</a>

  </div>
</div>
  <!-- TODO [CRITÉRIO 4 e 12]:
    Monte o card do agendamento usando Bootstrap.
    Exiba: clienteNome, servico, data, hora e barbeiro.
    Use v-if para exibir o badge de status com cores diferentes:
      - confirmado → badge verde (bg-success)
      - pendente   → badge amarelo (bg-warning)
      - cancelado  → badge vermelho (bg-danger)
    Adicione um botão "Ver detalhes" que navega para /agendamento/:id
    https://getbootstrap.com/docs/5.3/components/card/#titles-text-and-links
    https://router.vuejs.org/guide/#App-vue
  -->
</template>

<script setup lang="ts">
import type Agendamento from '../interfaces/Agendamento'
import { useRouter } from 'vue-router'


const props = defineProps<{
  agendamento: Agendamento
}>()
//// TODO [CRITÉRIO 5]:
// Declare a prop "agendamento" do tipo Agendamento.
// Ela será passada pelo componente pai (HomeView) para este componente.

const router = useRouter()

// TODO [CRITÉRIO 6 e 7]:
// Implemente a função "verDetalhes" que navega para a rota /agendamento/:id
// usando o id do agendamento recebido via prop.
function verDetalhes() {
  // Implemente aqui
}
</script>