<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Cabeçalho ou Navbar -->
    <header class="container mx-auto p-7 py-8 flex justify-between items-center">
      <nav class="bg-white fixed w-full z-20 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <!-- Logo e Título -->
          <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <NuxtPicture
              loading="lazy"
              placeholder-class="custom"
              src="/assets/img/logo-assysty24g.svg"
              alt="Logo Assisaty 24h"
              :width="124"
              :height="29"
            />
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
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
            >
              <li class="py-2 px-2">
                <NuxtLink
                  to="/"
                  aria-current="page"
                  alt="Home Page"
                  aria-label="Ir para Home page"
                  class="text-1xl text-gray-900 hover:underline"
                  >Home</NuxtLink
                >
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
        </div>
      </nav>

      <!-- Menu Hambúrguer -->
      <button class="block md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Ícone de busca -->
      <div class="hidden md:block">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>

    <!-- Conteúdo dinâmico -->
    <main class="container mx-auto">
      <NuxtPage />
    </main>

    <!-- Rodapé -->
    <footer class="bg-black text-white">
      <div
        class="container mx-auto p-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black"
      >
        <ul>
          <li>
            <strong class="font-bold sm:text-lg text-white">Assisty 24h</strong>
          </li>
          <li class="py-2 hover:underline">
            <NuxtLink to="/" class="p-2 hover:underline">Home</NuxtLink>
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
              <!-- Aqui está o erro, deveria ser 'author.name' -->
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="text-center py-10">
        <NuxtLink to="https://nuxtjs.org" target="_blank" class="hover:underline"
          >© 2024 CMS Blog. Todos os direitos reservados.</NuxtLink
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { categories, authors } from '@/utils/data.js' // Ajuste o caminho conforme necessário

const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Obtendo categorias únicas
const uniqueCategories = computed(() => {
  // Certifique-se de que 'categories' está definido e é uma lista
  const allCategories = categories || []

  // Remove duplicatas e retorna categorias únicas
  const unique = new Map()
  allCategories.forEach((item) => !unique.has(item.slug) && unique.set(item.slug, item))

  return [...unique.values()]
})

const uniqueAuthors = computed(() => {
  // Certifique-se de que 'authors' está definido e é uma lista
  const allAuthors = authors || []

  // Remove duplicatas e retorna autores únicos
  const unique = new Map()
  allAuthors.forEach((author) => {
    if (!unique.has(author.slug)) {
      unique.set(author.slug, author)
    }
  })

  return Array.from(unique.values())
})
</script>
