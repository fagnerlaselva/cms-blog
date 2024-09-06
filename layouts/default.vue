<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Cabeçalho ou Navbar -->
    <header class="container mx-auto p-4">
  <nav>
    <ul class="flex flex-wrap gap-4">
      <!-- Link para Home -->
      <li>
        <NuxtLink to="/" class="hover:underline">
          Home
        </NuxtLink>
      </li>

      <!-- Listagem de Categorias -->
      <li v-for="category in uniqueCategories" :key="category.slug">
        <NuxtLink
          :to="'/categorias/' + category.slug"
          class="hover:underline"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</header>

    <!-- Conteúdo dinâmico -->
    <main class="container mx-auto">
      <NuxtPage />
    </main>

    <!-- Rodapé -->
    <footer class="container mx-auto p-4">
      <div class="">
        <p>© 2024 CMS Blog. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { categories } from '@/utils/data.js'; // Ajuste o caminho conforme necessário

// Obtendo categorias únicas
const uniqueCategories = computed(() => {
  // Certifique-se de que 'categories' está definido e é uma lista
  const allCategories = categories || [];
  
  // Remove duplicatas e retorna categorias únicas
  const unique = new Map();
  allCategories.forEach(item => !unique.has(item.slug) && unique.set(item.slug, item));
  
  return [...unique.values()];
});
</script>
