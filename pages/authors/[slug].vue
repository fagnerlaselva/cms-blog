<template>
  <div class="container mx-auto p-4">
    <article class="max-w-2xl mx-auto">
      <header class="mb-8">
        <h1 class="text-3xl font-bold mb-4">{{ author?.name }}</h1>
        <p class="text-gray-600 mb-4">{{ author?.bio }}</p>
      </header>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Artigos por {{ author?.name }}</h2>
        <ul class="list-disc pl-5">
          <li v-for="article in author.articles" :key="article.id">
            <NuxtLink
              :to="'/post/' + article.slug"
              class="text-blue-600 hover:underline"
            >
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </section>

      <footer>
        <NuxtLink to="/authors" class="text-blue-600 hover:underline">
          ← Voltar para a lista de autores
        </NuxtLink>
      </footer>
    </article>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { authors, articles } from '@/utils/data.js'; // Importando dados fictícios

const route = useRoute();
const slug = route.params.slug;

const author = authors.find(a => a.slug === slug);
author.articles = articles.filter(a => a.authorSlug === slug); // Filtra artigos do autor
</script>
