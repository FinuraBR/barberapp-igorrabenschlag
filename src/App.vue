<template>
  <div>
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container">
        <span class="navbar-brand fw-bold">✂️ BarberApp</span>
      </div>
    </nav>

    <!-- O RouterView é responsável por renderizar a tela correspondente à rota atual -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>