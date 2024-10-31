<template>
  <div class="container mx-auto">
    <!-- Seção de Assinatura -->
    <section class="place-content-center min-h-96">
      <div class="grid grid-rows gap-4 place-content-center min-h-full">
        <div class="mt-6 text-center max-w-5xl p-4">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Aumente sua produtividade: Dicas para desenvolvedores eficientes
          </h1>
          <!-- <p class="mt-6 text-xl text-gray-500">
            Assine para receber conteúdos exclusivos na sua caixa de entrada gratuitamente!
          </p> -->
        </div>
        <div class="flex flex-col justify-center p-4" style="">
          <div class="flex flex-col items-center">
            <div
              class="flex w-full flex-col sm:flex-row overflow-hidden rounded-lg sm:t-center"
              style="
                background-color: rgb(249, 250, 251);
                border: 2px solid rgb(0, 0, 0);
                max-width: 600px;
              "
            >
              <div class="flex w-full items-center" style="background-color: rgb(249, 250, 251)">
                <input
                  autocomplete="email"
                  required
                  class="wt-button-font p-5 z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg text-center"
                  placeholder="Coloque seu e-mail"
                  type="email"
                  name="email"
                  style="font-family: Roboto; color: rgb(17, 24, 39); min-height: 50px"
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
                  min-height: 50px;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Artigos -->
    <section class="pt-12">
      <div class="container mx-auto max-w-custom grid gap-6">
        <!-- Primeiro card: Imagem à esquerda e texto à direita -->
        <article
          v-for="(article, index) in articles"
          :key="article.id"
          :class="{
            'md:grid md:grid-cols-1 lg:col-span-3':
              index === 0 /* Layout de 2 colunas para o primeiro card */
          }"
          class="p-4"
        >
          <NuxtLink :to="'/post/' + article.slug" class="block">
            <div :class="index === 0 ? 'lg:flex lg:gap-5 md:gap-4 xl:gap-8' : ''">
              <!-- <img
                :src="article.image"
                :alt="article.title"
                :class="
                  index === 0
                    ? 'md:w-3/3 lg:w-2/3 h-60 object-cover gap-10 mb-6 lg:mb-2'
                    : 'w-full h-60 object-cover mb-4'
                "
              /> -->

              <img
                format="avif,webp"
                :src="article.image"
                :alt="article.title"
                sizes="(max-width: 370px) 100vw, (max-width: 370px) 50vw, 370px"
                width="600"
                height="300"
                quality="70"
                :class="
                  index === 0
                    ? 'md:w-3/3 lg:w-2/3 h-auto object-cover gap-10 mb-6 lg:mb-2'
                    : 'w-full h-70 object-cover mb-4'
                "
              />
              <!-- Texto ao lado direito do card no primeiro card, abaixo nos outros -->
              <div
                :class="
                  index === 0 ? 'lg:w-2/2 flex flex-col justify-start md:mt-0' : ' text-gray-900'
                "
              >
                <h2
                  :class="
                    index === 0
                      ? 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:py-6 font-extrabold '
                      : 'text-2xl mb-2 text-gray-900 font-extrabold tracking-wide'
                  "
                >
                  {{ article.title }}
                </h2>
                <p :class="index === 0 ? 'text-1xl py-5' : 'text-gray-600 mb-4 text-gray-900'">
                  {{ article.excerpt }}
                </p>
                <div class="text-gray-600 text-sm">Set 10, 2024 - Leitura de 3 min.</div>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { articles } from '@/utils/data.js'
</script>
