<template>
  <div class="container mx-auto">
    <section class="">
      <div class="pt-32 pb-32 items-center flex flex-col">
        <div class="mt-6 text-center sm:w-3/4">
          <h1
            class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            Aumente sua produtividade: Dicas para desenvolvedores eficientes
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            Assine para receber conteúdos exclusivos na sua caixa de entrada
            gratuitamente!
          </p>
        </div>
        <div class="flex justify-center mt-12">
          <div class="w-full">
            <div
              class="flex w-full flex-col items-center sm:flex-row overflow-hidden rounded-lg"
              style="
                background-color: rgb(249, 250, 251);
                border: 2px solid rgb(0, 0, 0);
              "
            >
              <div
                class="flex w-full items-center"
                style="background-color: rgb(249, 250, 251)"
              >
                <input
                  autocomplete="email"
                  required=""
                  class="wt-button-font p-5 z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg"
                  placeholder="Coloque seu e-mail"
                  type="email"
                  name="email"
                  style="font-family: Roboto; color: rgb(17, 24, 39)"
                />
              </div>
              <input
                class="cursor-pointer px-5 py-5 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg rounded-none sm:rounded-lg-r"
                type="submit"
                value="Assinar"
                style="
                  background-color: rgb(0, 0, 0);
                  color: rgb(255, 255, 255);
                  font-family: Roboto;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="article in articles" :key="article.id" class="p-4">
          <NuxtLink :to="'/post/' + article.slug" class="">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-70 object-cover mb-6"
            />
            <h3 class="text-2xl mb-2 text-gray-900 font-extrabold">
              {{ article.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { articles, categories } from '@/utils/data.js';
</script>
