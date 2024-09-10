<template>
  <div class="container mx-auto">
    <!-- Seção de Assinatura -->
    <section>
      <div class="pt-32 pb-32 items-center flex flex-col">
        <div class="mt-6 text-center sm:w-3/4">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Aumente sua produtividade: Dicas para desenvolvedores eficientes
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            Assine para receber conteúdos exclusivos na sua caixa de entrada gratuitamente!
          </p>
        </div>
        <div class="flex justify-center mt-12">
          <div class="w-full">
            <div
              class="flex w-full flex-col items-center sm:flex-row overflow-hidden rounded-lg"
              style="background-color: rgb(249, 250, 251); border: 2px solid rgb(0, 0, 0);"
            >
              <div class="flex w-full items-center" style="background-color: rgb(249, 250, 251);">
                <input
                  autocomplete="email"
                  required
                  class="wt-button-font p-5 z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg"
                  placeholder="Coloque seu e-mail"
                  type="email"
                  name="email"
                  style="font-family: Roboto; color: rgb(17, 24, 39);"
                >
              </div>
              <input
                class="cursor-pointer px-5 py-5 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg rounded-none sm:rounded-lg-r"
                type="submit"
                value="Assinar"
                style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: Roboto;"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Seção de Artigos -->
    <section class="pt-12">
      <div class="grid gap-6">
        <!-- Primeiro card: Imagem à esquerda e texto à direita -->
        <article
          v-for="(article, index) in articles" :key="article.id" 
          :class="{
            'md:grid md:grid-cols-1 md:gap-8 lg:col-span-3': index === 0,  /* Layout de 2 colunas para o primeiro card */
            
          }" 
          class="p-4"
        >
          <NuxtLink :to="'/post/' + article.slug" class="block">
            <div :class="index === 0 ? 'md:flex' : ''">
              <!-- Imagem -->
              <img
                :src="article.image" :alt="article.title" 
                :class="index === 0 ? 'md:w-2/3 w-full h-auto object-cover text-5xl' : 'w-full h-70 object-cover mb-6 '" 
              >
              <!-- Texto ao lado direito do card no primeiro card, abaixo nos outros -->
              <div :class="index === 0 ? 'md:w-1/2 flex flex-col justify-start p-5 md:pl-6 mt-4 md:mt-0' : ' text-gray-900'">
                <h3 :class="index === 0 ? 'text-5xl font-extrabold  tracking-tight' : 'text-2xl mb-2 text-gray-900 font-extrabold'">{{ article.title }}</h3>
                <p :class="index === 0 ? 'text-1xl py-5' : 'text-gray-600 mb-4 text-gray-900'">{{ article.excerpt }}</p>
                <date class="text-gray-400 text-1xl">Set 10, 2024 - Leitura de 3 min.</date>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>

  </div>
</template>

<script setup>
import { articles } from '@/utils/data.js';
</script>
