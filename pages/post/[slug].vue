<template>
  <article class="container mx-auto p-4 max-w-5xl">
    <header class="mb-8">
      <h1
        class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl sm:w-3/4 py-10 px-20 pb-10 flex items-center leading-loose"
      >
        {{ article?.title }}
      </h1>
      <div v-if="author" class="mb-4 px-20">
        <div class="text-gray-600 flex">
          <img
            v-if="article?.image"
            :src="article.image"
            :alt="article.title"
            class="w-16 h-16 rounded-full object-cover mb-4 flex-none w-16 mr-2"
          />
          <div class="flex-1 w-64">
            <NuxtLink
              :to="'/autores/' + author?.slug"
              class="text-gray-900 font-bold sm:text-lg hover:underline"
            >
              {{ author.name }}
            </NuxtLink>
            <p class="text-gray-600">14 nov 2024 • 3 min de leitura</p>
          </div>
        </div>
      </div>
    </header>
    <section class="mb-8"></section>
    <section class="mb-8 text-xl font-serif">
      <p class="text-gray-800 py-3 px-20">{{ article?.content }}</p>
      <p class="text-gray-800 py-3 px-20">
        We've always dreamed of Savee being more than just a place for saving
        inspiration and getting inspired. We see it as a dynamic hub where
        creatives like you can elevate your craft, refine your skills, and
        unleash your creativity to its fullest potential.
      </p>
      <img
        v-if="article?.image"
        :src="article.image"
        :alt="article.title"
        class="w-full h-100 object-cover my-4"
      />
      <p class="text-gray-800 py-3 px-20">
        We've always dreamed of Savee being more than just a place for saving
        inspiration and getting inspired. We see it as a dynamic hub where
        creatives like you can elevate your craft, refine your skills, and
        unleash your creativity to its fullest potential.
      </p>

      <p class="text-gray-800 py-3 px-20">
        We've always dreamed of Savee being more than just a place for saving
        inspiration and getting inspired. We see it as a dynamic hub where
        creatives like you can elevate your craft, refine your skills, and
        unleash your creativity to its fullest potential.
      </p>

      <p class="text-gray-600 mt-20 px-20">
        <NuxtLink
          :to="'/autores/' + author?.slug"
          class="text-gray-900 font-bold sm:text-lg hover:underline py-10"
        >
          {{ author.name }}
        </NuxtLink>

        {{ author.bio }}
      </p>
    </section>

    <footer class="py-3 px-20">
      <NuxtLink to="/" class="text-blue-600 hover:underline"
        >← Voltar para a lista</NuxtLink
      >
      <NuxtLink
        :to="'/categorias/' + article?.category.slug"
        class="text-blue-600 hover:underline"
        >Ver mais artigos em {{ article?.category.name }}</NuxtLink
      >
    </footer>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { articles, authors } from '@/utils/data.js';

const route = useRoute();
const slug = route.params.slug;

const article = articles.find((a) => a.slug === slug);
const author = authors.find((a) => a.slug === article?.authorSlug);
</script>
