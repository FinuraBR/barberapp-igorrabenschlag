<template>
    <!-- TODO [CRITÉRIO 11 e 12]:
      Monte o formulário de cadastro com os campos:
        - clienteNome (text)
        - servico (text)
        - data (date)
        - hora (time)
        - barbeiro (text)
      Use v-model em cada campo para fazer o binding com os dados reativos.
      O botão de envio deve chamar a função "cadastrarAgendamento"
      https://getbootstrap.com/docs/5.3/forms/overview/#overview
      https://vuejs.org/guide/essentials/forms.html#basic-usage
    -->
</template>

<script setup lang="ts">

// Importar criarAgendamento do agendamentoService
// TODO [CRITÉRIO 3 e 11]:
// Crie um objeto reativo (ref) com os campos do formulário de cadastro



// TODO [CRITÉRIO 10]:
// Implemente a função "cadastrarAgendamento".
// Ela deve:
// 1. Chamar criarAgendamento() passando os dados do formulário
// 2. Adicionar o agendamento retornado pela API à lista local
// 3. Limpar os campos do formulário após o envio
// 4. Redirecionar para a lista de agendamentos
async function cadastrarAgendamento() {
  // Implemente aqui
}
</script>