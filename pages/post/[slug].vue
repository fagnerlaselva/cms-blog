<template>
  <div class="">
    <article v-if="article" class="container mx-auto p-4 max-w-5xl">
      <header class="mb-8">
        <h1
          class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:w-3/4 px-4 sm:px-20 pb-10 flex items-center box-decoration-slice"
        >
          {{ article.title }}
        </h1>
        <div v-if="author" class="mb-4 px-4 sm:px-20">
          <div class="text-gray-600 flex">
            <img
              v-if="author.image"
              :src="author.image"
              :alt="author.name"
              class="h-14 w-14 rounded-full mb-4 flex-none mr-2"
            />
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

      <section class="text-xl font-serif tracking-wide text-gray-900">
        <figure class="my-6 sm:my-12">
          <NuxtPicture
            v-if="article.image"
            loading="lazy"
            format="webp"
            width="1000"
            height="578"
            quality="70"
            :src="article.image"
            :alt="article.title"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1000px"
            :srcset="[
              { src: article.image, width: 400 },
              { src: article.image, width: 800 },
              { src: article.image, width: 1000 }
            ]"
            class="w-full sm:w-1/2 lg:w-[1200px] h-auto object-cover"
            placeholder-class="custom"
          />
        </figure>
        <p class="py-4 px-4 sm:px-20">
          We've always dreamed of Savee being more than just a place for saving inspiration and
          getting inspired. We see it as a dynamic hub where creatives like you can elevate your
          craft, refine your skills, and unleash your creativity to its fullest potential.
        </p>
        <p class="py-4 px-4 sm:px-20">
          That's why we're thrilled to announce the launch of our very own marketplace, featuring 15
          brand-new After Effects templates designed to take your projects to the next level.
        </p>
        <p class="py-4 px-4 sm:px-20">{{ article.content }}</p>

        <p class="py-4 px-4 sm:px-20">
          Whether you're a seasoned professional or just starting out on your creative journey, our
          marketplace offers something for everyone. From stunning visual effects to captivating
          animations, each template is crafted with precision and creativity to help you bring your
          ideas to life in ways you never thought possible
        </p>
        <figure class="my-6 sm:my-12">
          <NuxtPicture
            v-if="article.image"
            loading="lazy"
            format="webp"
            width="1000"
            height="578"
            quality="70"
            :src="article.image"
            :alt="article.title"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1000px"
            :srcset="[
              { src: article.image, width: 400 },
              { src: article.image, width: 800 },
              { src: article.image, width: 1000 }
            ]"
            class="w-full sm:w-1/2 lg:w-[1200px] h-auto object-cover"
            placeholder-class="custom"
          />
          <figcaption
            class="mb-4"
            style="
              color: rgba(0, 0, 0, 0.5);
              font-size: 0.9rem;
              line-height: 1.4em;
              padding: 1.5rem 1.5rem 0;
              text-align: center;
            "
          >
            <span class="text-gray-600 text-sm" style="white-space: pre-wrap">
              {{ article.title }}
            </span>
          </figcaption>
        </figure>
        <h2 class="text-gray-900 py-3 px-4 sm:px-20">
          Here's what you can expect from our marketplace:
        </h2>
        <ul>
          <li class="text-gray-800 py-2 sm:px-20 pl-8 sm:pl-24">
            <strong>High-Quality Templates:</strong> Explore a diverse range of After Effects
            templates, meticulously crafted by our team of talented designers.
          </li>
          <li class="text-gray-800 py-2 px-4 sm:px-20 pl-8 sm:pl-24">
            <strong>Versatile Options:</strong> Whether you're working on a video project,
            presentation, or social media content, our templates offer versatility to suit your
            needs.
          </li>
          <li class="text-gray-800 py-2 px-4 sm:px-20 pl-8 sm:pl-24">
            <strong>Regular Updates:</strong> Stay ahead of the curve with regular updates and new
            additions to our growing collection of templates.
          </li>
        </ul>
        <p class="text-gray-800 py-4 px-4 sm:px-20">
          Here's what you can expect from our marketplace:
        </p>
        <!-- <div class="video-container py-4">
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
        </div> -->

        <p class="text-gray-800 py-4 px-4 sm:px-20">
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
    <section>
      <div class="flex h-full justify-center items-center dark:bg-gray-800 my-6 sm:my-12">
        <div class="px-4">
          <div
            class="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700"
          >
            <div class="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
              <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-200">
                Assine nossa Newsletter
              </h3>
              <p class="text-gray-800">
                Para receber notificações por e-mail quando lançarmos novos produtos ou publicarmos
                novos artigos
              </p>
            </div>
            <div class="w-full px-1 flex-0 md:w-auto lg:w-1/2">
              <form novalidate="">
                <input type="hidden" name="tags" value="earlyaccess" />
                <div class="flex flex-col sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Insira seu endereço de e-mail"
                    class="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  <button
                    type="submit"
                    class="w-full px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-gray-900"
                  >
                    Inscrever-se
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <h2 class="grid grid-cols-1 text-3xl font-bold mb-4 gap-6 p-4">Últimos Artigos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="recentArticle in recentArticles" :key="recentArticle.id" class="p-4">
          <NuxtLink :to="'/post/' + recentArticle.slug">
            <NuxtPicture
              loading="lazy"
              format="webp"
              :src="recentArticle.image"
              :alt="recentArticle.title"
              sizes="(max-width: 370px) 100vw, (max-width: 370px) 50vw, 370px"
              width="600"
              height="300"
              quality="70"
              class="w-full h-60 object-cover my-4"
            />
            <h2 class="text-2xl mb-2 mt-4 text-gray-900 font-extrabold">
              {{ recentArticle.title }}
            </h2>
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
        article.value.description || 'Este é meu site incrível, deixe-me contar tudo sobre ele.',
      ogDescription:
        article.value.description || 'Este é meu site incrível, deixe-me contar tudo sobre ele.',
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
picture img,
picture source {
  margin: auto !important;
}
</style>
