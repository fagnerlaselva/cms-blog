<template>
  <article class="container mx-auto p-4 max-w-4xl">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-4">{{ article?.title }}</h1>
      <div v-if="author" class="mb-4">
        <p class="text-gray-600">
          <span class="font-semibold">Autor:</span>
          <NuxtLink :to="'/autores/' + author?.slug" class="text-blue-600 hover:underline"> 
            {{ author.name }}
          </NuxtLink>
           
        </p>
        <p class="text-gray-600">
          <span class="font-semibold">Sobre o Autor:</span> {{ author.bio }}
        </p>
      </div>
      <img v-if="article?.image" :src="article.image" :alt="article.title" class="w-full h-100 object-cover mb-4">
    </header>
    
    <section class="mb-8">
      <p class="text-gray-800">{{ article?.content }}</p>
    </section>

    <footer>
      <NuxtLink to="/" class="text-blue-600 hover:underline">← Voltar para a lista</NuxtLink>
      <NuxtLink :to="'/categorias/' + article?.category.slug" class="text-blue-600 hover:underline">Ver mais artigos em {{ article?.category.name }}</NuxtLink>
      
    </footer>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { articles, authors } from '@/utils/data.js';

const route = useRoute();
const slug = route.params.slug;

const article = articles.find(a => a.slug === slug);
const author = authors.find(a => a.slug === article?.authorSlug);
</script>
