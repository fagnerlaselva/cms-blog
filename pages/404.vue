<template>
  <div class="columns-1 justify-center h-screen p-4">
    <!-- Seção de mensagem 404 -->
    <div class="text-center mb-8">
      <h1 class="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-4">
        Oops! A página que você está procurando não foi encontrada.
      </p>
      <NuxtLink
        to="/"
        class="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
      >
        Voltar para a página inicial
      </NuxtLink>
    </div>

    <!-- Seção de últimos artigos -->
    <section class="w-full">
      <h2 class="text-4xl font-bold text-gray-800 mb-4 text-left">
        Últimos Artigos
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="article in recentArticles"
          :key="article.id"
          class="p-4"
        >
          <h3 class="text-xl font-semibold mb-2">
            <NuxtLink
              :to="'/post/' + article.slug"
              class="text-gray-800 hover:text-blue-600 hover:underline"
            >
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-48 object-cover mb-4"
              />
              {{ article.title }}
            </NuxtLink>
          </h3>
          <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { articles } from '@/utils/data.js';

// Pegando os 3 últimos artigos
const recentArticles = articles.slice(-3);
</script>

<style scoped>
/* Estilos adicionais, se necessários */
</style>
