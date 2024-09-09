<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Cabeçalho ou Navbar -->
    <header class="container mx-auto p-4">
  <nav>
    <ul class="flex flex-wrap gap-4 p-4">
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
    <footer class="bg-black text-white">
      <div class="container mx-auto p-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black">
        <ul>
          <li>
            <strong class="text-gray-900 font-bold sm:text-lg  text-white ">Categorias</strong>
          </li>
          <li v-for="category in uniqueCategories" :key="category.slug" class="p-2 hover:underline">
          <NuxtLink
            :to="'/categorias/' + category.slug"
            class="hover:underline"
          >
            {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li>
          <strong class="text-gray-900 font-bold sm:text-lg  text-white ">Autores</strong>
        </li>
        <li v-for="author in uniqueAuthors" :key="author.name" class="p-2 hover:underline">
          <NuxtLink
            :to="'/autores/' + author.slug"
            class="hover:underline"
          >
            {{ author.name }} <!-- Aqui está o erro, deveria ser 'author.name' -->
          </NuxtLink>
        </li>
      </ul>
      </div>
      <div class="text-center py-10">
        <NuxtLink to="https://nuxtjs.org" target="_blank" class="hover:underline">© 2024 CMS Blog. Todos os direitos reservados.</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { categories, authors } from '@/utils/data.js'; // Ajuste o caminho conforme necessário

// Obtendo categorias únicas
const uniqueCategories = computed(() => {
  // Certifique-se de que 'categories' está definido e é uma lista
  const allCategories = categories || [];
  
  // Remove duplicatas e retorna categorias únicas
  const unique = new Map();
  allCategories.forEach(item => !unique.has(item.slug) && unique.set(item.slug, item));
  
  return [...unique.values()];
});

const uniqueAuthors = computed(() => {
  // Certifique-se de que 'authors' está definido e é uma lista
  const allAuthors = authors || [];

  // Remove duplicatas e retorna autores únicos
  const unique = new Map();
  allAuthors.forEach(author => {
    if (!unique.has(author.slug)) {
      unique.set(author.slug, author);
    }
  });

  return Array.from(unique.values());
});
</script>
