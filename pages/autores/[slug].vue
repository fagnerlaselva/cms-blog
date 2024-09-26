<template>
  <div class="">
    <section class="container p-4 pt-12">
      <NuxtPicture
        loading="lazy"
        format="webp"
        :src="author.image"
        :alt="author.title"
        quality="70"
        class="w-20 h-20 object-cover m-4 rounded-full"
      />
      <h1 class="grid grid-cols-1 text-3xl font-bold gap-6 p-4">{{ author.name }}</h1>
      <p class="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-6 p-4">
        {{ author?.bio }}
      </p>
      <div v-if="filteredArticles.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="article in filteredArticles" :key="article.id" class="p-4 text-gray-900">
            <NuxtLink :to="'/post/' + article.slug" class="text-gray-800">
              <NuxtPicture
                v-if="article.image"
                loading="lazy"
                format="webp"
                :src="article.image"
                :alt="article.title"
                class="w-full h-60 object-cover mb-6"
                sizes="(max-width: 480px) 100vw, (max-width: 480px) 50vw, 480px"
                width="480"
                height="270"
                quality="70"
              />
              <h2 class="text-2xl mb-2 text-gray-900 font-extrabold">
                {{ article.title }}
              </h2>
              <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            </NuxtLink>
          </article>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-600">Não há artigos para este autor.</p>
      </div>
    </section>
    <section class="container p-4 py-12">
      <NuxtLink to="/" class="text-blue-600 hover:underline"> ← Voltar para a Home </NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { articles, authors } from '@/utils/data.js'

const route = useRoute()
const authorSlug = route.params.slug

// Encontrando o autor com base no slug da rota
const author = authors.find((a) => a.slug === authorSlug)

// Filtrando artigos do autor correspondente
const filteredArticles = articles.filter((a) => a.authorSlug === authorSlug)
</script>
