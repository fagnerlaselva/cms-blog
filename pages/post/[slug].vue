<template>
  <div class="">
    <article v-if="article" class="container mx-auto p-4 max-w-5xl">
      <header class="mb-8">
        <h1
          class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl sm:w-3/4 py-10 px-20 pb-10 flex items-center leading-loose box-decoration-slice"
        >
          {{ article.title }}
        </h1>
        <div v-if="author" class="mb-4 px-20">
          <div class="text-gray-600 flex">
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              class="h-16 rounded-full object-cover mb-4 flex-none w-16 mr-2"
            >
            <div class="flex-1 w-64">
              <NuxtLink
                :to="'/autores/' + author.slug"
                class="text-gray-900 font-bold sm:text-lg hover:underline"
              >
                {{ author.name }}
              </NuxtLink>
              <p class="text-gray-600">14 nov 2024 • 3 min de leitura</p>
            </div>
          </div>
        </div>
      </header>

      <section class="mb-8 text-xl font-serif tracking-wide text-gray-900">
        <img
          v-if="article.image"
          :src="article.image"
          :alt="article.title"
          class="w-full h-100 object-cover my-4"
        >
        <p
          class="py-3 px-20 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
        >
          We've always dreamed of Savee being more than just a place for saving inspiration and
          getting inspired. We see it as a dynamic hub where creatives like you can elevate your
          craft, refine your skills, and unleash your creativity to its fullest potential.
        </p>
        <p class="py-3 px-20">
          That's why we're thrilled to announce the launch of our very own marketplace, featuring 15
          brand-new After Effects templates designed to take your projects to the next level.
        </p>
        <p class="py-3 px-20">{{ article.content }}</p>

        <p class="py-3 px-20">
          Whether you're a seasoned professional or just starting out on your creative journey, our
          marketplace offers something for everyone. From stunning visual effects to captivating
          animations, each template is crafted with precision and creativity to help you bring your
          ideas to life in ways you never thought possible
        </p>
        <p class="text-gray-800 py-3 px-20">Here's what you can expect from our marketplace:</p>
        <ul>
          <li class="text-gray-800 py-4 px-20 pl-24">
            <strong>High-Quality Templates:</strong> Explore a diverse range of After Effects
            templates, meticulously crafted by our team of talented designers.
          </li>
          <li class="text-gray-800 py-4 px-20 pl-24">
            <strong>Versatile Options:</strong> Whether you're working on a video project,
            presentation, or social media content, our templates offer versatility to suit your
            needs.
          </li>
          <li class="text-gray-800 py-4 px-20 pl-24">
            <strong>Regular Updates:</strong> Stay ahead of the curve with regular updates and new
            additions to our growing collection of templates.
          </li>
        </ul>
        <p class="text-gray-800 py-4 px-20">Here's what you can expect from our marketplace:</p>
        <div class="video-container py-4">
          <div class="relative overflow-hidden" style="padding-top: 56.25%">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/HwDciaUCF98?modestbranding=1"
              title="DELL INSPIRON 3530 // É o novo🥇REI DO CUSTO BENEFÍCIO BARATO? vem ver os UPGRADES!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
        <p class="text-gray-800 py-4 px-20">
          Whether you're a seasoned professional or just starting out on your creative journey, our
          marketplace offers something for everyone. From stunning visual effects to captivating
          animations, each template is crafted with precision and creativity to help you bring your
          ideas to life in ways you never thought possible
        </p>
      </section>
      <!-- Seção de últimos artigos -->
    </article>
    <!-- <section>
		<p class="text-gray-600 mt-20 px-20">
				<NuxtLink
					v-if="author"
					:to="'/autores/' + author.slug"
					class="text-gray-900 font-bold sm:text-lg hover:underline py-10"
				>
					{{ author.name }}
				</NuxtLink>
				{{ author?.bio }}
			</p>
	</section> -->
    <section class="w-full">
      <h2 class="grid grid-cols-1 text-3xl font-bold mb-4 gap-6 p-4">Últimos Artigos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="recentArticle in recentArticles" :key="recentArticle.id" class="p-4">
          <NuxtLink :to="'/post/' + recentArticle.slug">
            <img
              :src="recentArticle.image"
              :alt="recentArticle.title"
              class="w-full h-60 object-cover mb-6"
            >
            <h3 class="text-2xl mb-2 text-gray-900 font-extrabold">{{ recentArticle.title }}</h3>
            <p class="text-gray-600 mb-4">{{ recentArticle.excerpt }}</p>
          </NuxtLink>
        </article>
      </div>
    </section>
    <section class="container p-4 py-12">
      <NuxtLink to="/" class="text-blue-600 hover:underline"> ← Voltar para a Home </NuxtLink>
    </section>
    <footer class="p-2">
      <NuxtLink
        v-if="article.category"
        :to="'/categorias/' + article.category.slug"
        class="text-blue-600 hover:underline"
      >
        Ver mais artigos em {{ article.category.name }}
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { articles, authors } from '@/utils/data.js'
import { ref, watchEffect } from 'vue'

// Obtendo a rota e o slug do artigo
const route = useRoute()
const slug = route.params.slug

// Definindo referências reativas para o artigo, autor e artigos recentes
const article = ref(null)
const author = ref(null)
const recentArticles = ref([])

// Carregar os dados do artigo com base no slug da URL
article.value = articles.find((a) => a.slug === slug)
author.value = article.value ? authors.find((a) => a.slug === article.value.authorSlug) : null
recentArticles.value = articles.slice(-3)

// Monitorar quando o `article` é carregado para definir as meta tags
watchEffect(() => {
  if (article.value) {
    useSeoMeta({
      title: article.value.title,
      ogTitle: article.value.title,
      description:
        article.value.description || 'This is my amazing site, let me tell you all about it.',
      ogDescription:
        article.value.description || 'This is my amazing site, let me tell you all about it.',
      ogImage: article.value.image || 'https://example.com/image.png',
      twitterCard: 'summary_large_image'
    })
  }
})
</script>
<style scoped>
.video-container {
  max-width: 100%;
}
</style>
