<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Cabeçalho ou Navbar -->
    <header class="container mx-auto p-7 py-8 flex justify-between items-center">
      <!-- Link para Home -->
      <div>
        <ul class="flex flex-wrap gap-4">
          <li>
            <NuxtLink
              to="/"
              alt="Home Page"
              aria-label="Ir para Home page"
              class="text-2xl text-gray-900 font-bold"
              style="width: 156px; height: 36px"
            >
              <NuxtPicture
                loading="lazy"
                placeholder-class="custom"
                src="/assets/img/logo-assysty24g.svg"
                alt="Logo Assisaty 24h"
                :width="156"
                :height="36"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Menu Hambúrguer -->
      <button class="block md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg
          class="w-8 h-8"
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

      <!-- Menu de navegação -->
      <nav
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="hidden md:flex md:flex-wrap gap-4"
      >
        <ul class="flex flex-col md:flex-row md:items-center">
          <li v-for="category in uniqueCategories" :key="category.slug" class="py-2 md:py-0">
            <NuxtLink :to="'/categorias/' + category.slug" class="hover:underline">
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

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
