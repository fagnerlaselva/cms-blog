<template>
  <div class="">
    <section class="pt-12 container max-w-custom mx-auto">
      <div v-if="category && filteredArticles.length > 0" class="">
        <h1 class="grid grid-cols-1 text-3xl font-bold mb-4 gap-6 p-4">{{ category.name }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="article in filteredArticles" :key="article.slug" class="p-4">
            <NuxtLink :to="'/post/' + article.slug" class="block">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-60 object-cover mb-6"
              />
              <h3 class="text-2xl mb-2 text-gray-900 font-extrabold">{{ article.title }}</h3>
              <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            </NuxtLink>
          </article>
        </div>
      </div>
      <div v-else>
        <p class="text-gray-600">Nenhum artigo encontrado para esta categoria.</p>
      </div>
    </section>
    <section class="w-full container max-w-custom mx-auto grid gap-6">
      <h2 class="grid grid-cols-1 text-3xl font-bold mb-4 gap-6 p-4 py-10">Últimos Artigos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="article in recentArticles" :key="article.id" class="p-4">
          <NuxtLink :to="'/post/' + article.slug">
            <img :src="article.image" :alt="article.title" class="w-full h-60 object-cover mb-6" />
            <h3 class="text-2xl mb-2 text-gray-900 font-extrabold">{{ article.title }}</h3>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
          </NuxtLink>
        </article>
      </div>
    </section>
    <section class="container max-w-custom mx-auto grid gap-6 p-4 py-12">
      <NuxtLink to="/" class="text-blue-600 hover:underline"> ← Voltar para a Home </NuxtLink>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { articles as allArticles, categories } from '@/utils/data.js'

const route = useRoute()
const slug = route.params.slug

const category = ref(null)
const filteredArticles = ref([])
const recentArticles = articles.slice(-3)
onMounted(() => {
  const categoryData = categories.find((cat) => cat.slug === slug)
  if (categoryData) {
    category.value = categoryData
    filteredArticles.value = allArticles.filter((article) =>
      article.categories.some((cat) => cat.slug === slug)
    )
  } else {
    console.error(`Categoria com slug ${slug} não encontrada`)
  }
})
</script>

<style scoped>
/* Adicione estilos específicos aqui se necessário */
</style>
