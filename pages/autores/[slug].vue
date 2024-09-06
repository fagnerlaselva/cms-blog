<template>
  <div class="container mx-auto p-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Artigos de {{ author?.name }}</h1>
    </header>
    <section>
      <div v-if="filteredArticles.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class=""
          >
            <NuxtLink :to="'/post/' + article.slug" class="text-gray-800">
              <img
                v-if="article.image"
                :src="article.image"
                :alt="article.title"
                class="w-full h-70 object-cover mb-6"
              />
              <h3 class="text-2xl font-semibold mb-2">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            </NuxtLink>
          </article>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-600">Não há artigos para este autor.</p>
      </div>
    </section>
    <footer class="mt-8">
      <NuxtLink to="/" class="text-blue-600 hover:underline">
        ← Voltar para a lista
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { articles, authors } from '@/utils/data.js';

const route = useRoute();
const authorSlug = route.params.slug;

// Encontrando o autor com base no slug da rota
const author = authors.find((a) => a.slug === authorSlug);

// Filtrando artigos do autor correspondente
const filteredArticles = articles.filter((a) => a.authorSlug === authorSlug);
</script>
