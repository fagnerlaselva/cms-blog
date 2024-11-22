<template>
  <div>
    <!-- Cabeçalho ou Navbar -->

    <div class="w-full bg-white">
      <header
        :class="[
          'p-4 py-2 flex justify-between items-center transition-transform duration-500 ease-in-out sh',
          { '-translate-y-full': !showHeader }
        ]"
        class="fixed w-full z-20 top-0 bg-white"
      >
        <div class="container mx-auto max-w-custom">
          <nav class="flex flex-wrap items-center justify-between p-0 py-2">
            <!-- Logo e Título -->
            <NuxtLink
              to="/slider2"
              class="flex items-center space-x-3 font-black text-2xl rtl:space-x-reverse"
            >
              Logo
            </NuxtLink>

            <!-- Botão de Menu (Hambúrguer) -->
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                class="text-gray-900 hover:text-white bg-white border border-gray-200 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center"
              >
                Assine agora
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-400"
                @click="toggleMenu"
              >
                <span class="sr-only">Abrir menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <!-- Menu de Navegação -->
            <div
              id="navbar-sticky"
              :class="{ hidden: !isMenuOpen }"
              class="items-center justify-between w-full md:flex md:w-auto md:order-1"
            >
              <ul
                class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
              >
                <li class="py-2 px-2">
                  <NuxtLink
                    to="/"
                    aria-current="page"
                    alt="Home Page"
                    aria-label="Ir para Home page"
                    class="text-1xl text-gray-900 hover:underline"
                  >
                    Blog
                  </NuxtLink>
                </li>
                <li v-for="category in uniqueCategories" :key="category.slug" class="py-2 px-2">
                  <NuxtLink
                    :to="'/categorias/' + category.slug"
                    class="text-1xl text-gray-900 hover:underline"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>

    <!-- Conteúdo dinâmico -->
    <main class="pt-20">
      <NuxtPage />
    </main>

    <!-- Rodapé -->
    <footer class="bg-black text-white">
      <div
        class="container mx-auto max-w-custom p-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black"
      >
        <ul>
          <li>
            <strong class="font-bold sm:text-lg text-white">Assisty 24h</strong>
          </li>
          <li class="py-2 hover:underline">
            <NuxtLink to="/sobre" class="p-2 hover:underline">Sobre a Assisty 24</NuxtLink>
          </li>
          <li class="py-2 hover:underline">
            <NuxtLink to="/" class="p-2 hover:underline">Home</NuxtLink>
          </li>
          <li class="py-2 hover:underline">
            <NuxtLink to="/" class="p-2 hover:underline">Home</NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <strong class="font-bold sm:text-lg text-white">Blog</strong>
          </li>
          <li v-for="category in uniqueCategories" :key="category.slug" class="p-2 hover:underline">
            <NuxtLink :to="'/categorias/' + category.slug" class="hover:underline">
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <strong class="font-bold sm:text-lg text-white">Autores</strong>
          </li>
          <li v-for="author in uniqueAuthors" :key="author.name" class="py-2 hover:underline">
            <NuxtLink :to="'/autores/' + author.slug" class="hover:underline">
              {{ author.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="text-center py-10">
        <NuxtLink to="https://nuxtjs.org" target="_blank" class="hover:underline">
          © 2024 CMS Blog. Todos os direitos reservados.
        </NuxtLink>
      </div>
    </footer>

    <div
      class="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white"
    >
      <NuxtLink
        to="/newsletter"
        target="_blank"
        rel="noreferrer"
        class="text-sm font-medium hover:opacity-75"
      >
        Ei! Inscreve-sa na nossa newsletter 👋
      </NuxtLink>

      <button class="rounded bg-white/20 p-1 hover:bg-white/10">
        <span class="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { categories, authors } from '@/utils/data.js' // Ajuste o caminho conforme necessário

// Estado do menu hambúrguer
const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Estado para exibir/esconder o cabeçalho
const showHeader = ref(true)
let lastScrollY = 0

// Função para detectar direção do scroll
function handleScroll() {
  const currentScrollY = window.scrollY
  showHeader.value = currentScrollY <= lastScrollY || currentScrollY <= 0
  lastScrollY = currentScrollY
}

// Adiciona o evento de scroll ao carregar o componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Obtendo categorias únicas
const uniqueCategories = computed(() => {
  const allCategories = categories || []
  const unique = new Map()
  allCategories.forEach((item) => !unique.has(item.slug) && unique.set(item.slug, item))
  return [...unique.values()]
})

// Obtendo autores únicos
const uniqueAuthors = computed(() => {
  const allAuthors = authors || []
  const unique = new Map()
  allAuthors.forEach((author) => {
    if (!unique.has(author.slug)) {
      unique.set(author.slug, author)
    }
  })
  return Array.from(unique.values())
})
</script>

<style scoped>
/* Transição suave para o cabeçalho */
header {
  transition: transform 0.5s ease-in-out;
}
</style>
