<template>
  <div>
    <section
      class="sm: rounded-2xl relative bg-[url(https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp)] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      />

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:py-56 lg:flex lg:items-left lg:px-8"
      >
        <div class="max-w-2xl">
          <h1 class="text-4xl font-medium sm:text-6xl text-white">
            <strong class="font-medium" style="color: #bae7f3">Assistência 24h</strong>
            onde quer que você esteja.
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Por apenas R$ 44,90 mensais, leve a segurança com você para qualquer lugar. Seja em
            casa, no trabalho ou durante uma viagem, você está protegido!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              style="background-color: #bae7f3; color: #010e78"
              class="block text-2xl w-full rounded-2xl px-12 py-3 font-bold shadow focus:outline-none focus:ring sm:w-auto"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-12">
      <div class="flex flex-wrap items-center w-full md:flex-row-reverse">
        <!-- Slider de Cards -->
        <div class="w-full md:w-2/3">
          <!-- Wrapper do slider -->
          <div
            class="overflow-hidden"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div
              ref="slider"
              class="flex transition-transform duration-200 ease-in-out p-4"
              :style="{ transform: `translateX(${currentPosition}px)` }"
            >
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="min-w-[300px] bg-white p-0 shadow-lg rounded-xl m-2"
              >
                <NuxtImg
                  src="https://cms-blog-lilac.vercel.app/_vercel/image?url=%2Fassets%2Fimg%2FFeatures-Designed-4.webp&w=1024&q=70"
                  class="rounded-t-xl"
                />
                <div class="p-4">
                  <span>Assistência veicular</span>
                  <h2 class="text-xl/relaxed font-bold mb-2">
                    Socorro Mecânico card {{ index + 1 }}
                  </h2>
                  <p class="text-sm">
                    Caso o seu carro tenha sofrido algum dano, mandaremos até você um profissional
                    credenciado para fazer um reparo paliativo do veículo. {{ card.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full md:w-1/3">
          <!-- Texto explicativo -->
          <div class="p-4">
            <h2 class="text-5xl leading-snug font-medium">
              Conheça os serviços de assistências emergenciais
            </h2>
            <p class="text-lg pt-10 sm:pr-40">
              Não importa onde você esteja, nós estamos com você 24h por dia!
            </p>
          </div>
          <!-- Botões de navegação -->
          <div class="relative flex justify-normal mt-4 px-4 mr-4">
            <button
              class="inline-block rounded-full p-4 font-extrabold border-2 mr-3"
              style="background: #deeffe; color: #020f83; border-color: #020f83"
              @click="prev"
            >
              <svg
                class="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button
              class="inline-block rounded-full p-4 font-extrabold border-2"
              style="background: #deeffe; color: #020f83; border-color: #020f83"
              @click="next"
            >
              <svg
                class="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-12">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2">
        <div class="min-h-32 rounded-lg p-4">
          <h2 class="text-5xl leading-tight font-medium">
            Assistência veicular e residencial, vinculada a você!
          </h2>
          <p class="text-lg py-6 font-medium">
            Atendemos seus assinantes em todo território nacional e não está vinculado ao seu
            endereço. Nossos clientes são atendidos em casa de férias, de campo, de praia ou em
            qualquer lugar.
          </p>
          <div>
            <a
              class="rounded-full inline-block border text-2xl border-indigo-600 bg-indigo-600 px-12 py-2 font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              ASSINE AGORA!
            </a>
          </div>
        </div>
        <div class="min-h-32 rounded-lg p-8">imagem</div>
      </div>
    </section>

    <section class="pt-12">
      <h2 class="text-5xl font-medium text-center pb-10">
        Profissionais capacitados, garantindo o suporte que você merece na hora que mais precisa.
      </h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2">
        <div class="min-h-32 rounded-lg bg-gray-200 p-8">
          <h3 class="text-2xl font-medium pb-4">Respondemos em até uma hora</h3>
          <p>
            Após entrar em contato através do nosso 0800 e abrir um chamado, nossos clientes são
            atendidos o mais rápido possível. Buscamos realizar todos os chamados em até uma hora.
          </p>
        </div>
        <div class="min-h-32 rounded-lg bg-gray-200 p-8">
          <h3 class="text-2xl font-medium pb-4">Respondemos em até uma hora</h3>
          <p>
            Após entrar em contato através do nosso 0800 e abrir um chamado, nossos clientes são
            atendidos o mais rápido possível. Buscamos realizar todos os chamados em até uma hora.
          </p>
        </div>
        <div class="min-h-32 rounded-lg bg-gray-200 p-8">
          <h3 class="text-2xl font-medium pb-4">Respondemos em até uma hora</h3>
          <p>
            Após entrar em contato através do nosso 0800 e abrir um chamado, nossos clientes são
            atendidos o mais rápido possível. Buscamos realizar todos os chamados em até uma hora.
          </p>
        </div>
        <div class="min-h-32 rounded-lg bg-gray-200 p-8">
          <h3 class="text-2xl font-medium pb-4">Respondemos em até uma hora</h3>
          <p>
            Após entrar em contato através do nosso 0800 e abrir um chamado, nossos clientes são
            atendidos o mais rápido possível. Buscamos realizar todos os chamados em até uma hora.
          </p>
        </div>
      </div>
    </section>
    <section class="pt-12">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="min-h-32 rounded-lg p-4">
          <h2 class="text-5xl font-medium">Ficou com alguma dúvida?</h2>
          <p class="py-6 text-sm">
            Separamos algumas dúvidas comuns, mas caso essas não te ajudem, entre em contato com
            nosso time pelos canais de contato abaixo. Estamos prontos para te ajudar!
          </p>
          <p class="pb-4">
            Dúvidas? Fale conosco <br />
            contato@assisty24h.com.br
          </p>
          <div class="pb-4">
            <div class="block">Assisty</div>
            08007177747
          </div>
        </div>
        <div class="min-h-32 rounded-lg p-8 lg:col-span-2">
          <div class="space-y-4">
            <details class="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900"
              >
                <h2 class="py-4 text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>
                <svg
                  class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
                culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
                officiis explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900"
              >
                <h2 class="py-4 text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
                culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
                officiis explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900"
              >
                <h2 class="py-4 text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
                culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
                officiis explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900"
              >
                <h2 class="py-4 text-lg font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <svg
                  class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
                culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
                officiis explicabo consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado do slider
const slider = ref(null)
const currentPosition = ref(0)
const cardWidth = 320 // Largura do card + margem
const visibleCards = 3 // Número de cards visíveis
const totalCards = 10 // Total de cards
const startTouchX = ref(0)
const endTouchX = ref(0)
const touchMoveDistance = ref(0)

// Lista de cards (simulada)
const cards = Array.from({ length: totalCards }, (_, index) => ({
  content: `Conteúdo do Card ${index + 1}`
}))

// Lógica para mover o slider
const maxPosition = ref(-(totalCards - visibleCards) * cardWidth)

const prev = () => {
  if (currentPosition.value < 0) {
    currentPosition.value += cardWidth
  }
}

const next = () => {
  if (currentPosition.value > maxPosition.value) {
    currentPosition.value -= cardWidth
  }
}

// Eventos de toque para o slider (touchstart, touchmove, touchend)
const handleTouchStart = (event) => {
  startTouchX.value = event.touches[0].clientX
}

const handleTouchMove = (event) => {
  endTouchX.value = event.touches[0].clientX
  touchMoveDistance.value = startTouchX.value - endTouchX.value
}

const handleTouchEnd = () => {
  const threshold = 50 // Distância mínima para considerar o swipe
  if (touchMoveDistance.value > threshold) {
    next() // Swipe para a esquerda, move para o próximo
  } else if (touchMoveDistance.value < -threshold) {
    prev() // Swipe para a direita, move para o anterior
  }
  // Reseta os valores
  startTouchX.value = 0
  endTouchX.value = 0
  touchMoveDistance.value = 0
}
</script>

<style scoped>
/* Aqui você pode adicionar estilos personalizados, se necessário */
</style>
