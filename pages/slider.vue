<template>
  <div class="container mx-auto">
    <!-- Seção de Assinatura -->
    <!-- Seção de Artigos -->
    <section class="pt-12">
      <div class="flex flex-wrap items-center w-full">
        <!-- Slider de Cards -->
        <div class="relative w-full md:w-1/3 p-4">
          <!-- Texto explicativo -->
          <div>
            <h2>Conheça os serviços de assistências emergenciais</h2>
            <p>Não importa onde você esteja, nós estamos com você 24h por dia!</p>
          </div>

          <!-- Botões de navegação -->
          <div class="relative flex justify-between mt-4">
            <button
              class="p-2 rounded-full h-14 w-14"
              style="background: #deeffe; color: #020f83"
              @click="prev"
            >
              &lt;
            </button>
            <button
              class="p-2 rounded-full h-14 w-14"
              style="background: #deeffe; color: #020f83"
              @click="next"
            >
              &gt;
            </button>
          </div>
        </div>

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
              class="flex space-x-3 transition-transform duration-300 ease-in-out p-4"
              :style="{ transform: `translateX(${currentPosition}px)` }"
            >
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="min-w-[300px] bg-white p-0 shadow-lg rounded-xl"
              >
                <NuxtImg
                  src="https://cms-blog-lilac.vercel.app/_vercel/image?url=%2Fassets%2Fimg%2FFeatures-Designed-4.webp&w=1024&q=70"
                  class="rounded-t-xl"
                />
                <div class="p-4">
                  <span>Assitência veicular</span>
                  <h2 class="text-xl font-bold mb-2">Socorro Mecânico card {{ index + 1 }}</h2>
                  <p>
                    Caso o seu carro tenha sofrido algum dano, mandaremos até você um profissional
                    credenciado para fazer um reparo paliativo do veículo. {{ card.content }}
                  </p>
                </div>
              </div>
            </div>
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
