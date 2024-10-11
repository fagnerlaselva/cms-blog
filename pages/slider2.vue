<template>
  <div>
    <section
      class="container mx-auto sm:rounded-2xl relative bg-[url(https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp)] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      />

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:py-48 lg:flex lg:items-left lg:px-8"
      >
        <div class="max-w-2xl">
          <span
            class="inline-flex items-center justify-center rounded-full bg-blue-700 px-2.5 py-0.5 mb-8 bg-opacity-[0.45]"
          >
            <p class="whitespace-nowrap text-sm p-2 text-white">
              Somos uma assistência, não um seguro! 😊
            </p>
          </span>
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
              class="block text-1xl w-full rounded-2xl px-12 py-3 font-bold shadow focus:outline-none focus:ring sm:w-auto"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </div>
      <div class="absolute lg:inset-x-24 bottom-0 p-4" style="display: none !important">
        <div
          class="relative flex items-center justify-between gap-4 rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg"
        >
          <p class="text-sm font-medium">
            Love Alpine JS?
            <a href="#" class="inline-block underline">Check out this new course!</a>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 mt-12">
      <div
        class="mx-auto max-w-[1580px] px-4 py-12 sm:px-6 lg:me-8 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24"
      >
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div class="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conheça os serviços de assistências emergenciais
            </h2>

            <p class="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
              placeat harum porro optio fugit a culpa sunt id!
            </p>
            <div class="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                ref="keenSliderPreviousDesktop"
                aria-label="Previous slide"
                class="rounded-full border transition hover:text-white p-3"
                style="background: #deeffe; color: #020f83; border-color: #020f83"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                ref="keenSliderNextDesktop"
                aria-label="Next slide"
                class="rounded-full border transition hover:text-white p-3"
                style="background: #deeffe; color: #020f83; border-color: #020f83"
              >
                <svg
                  class="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref="keenSlider" class="keen-slider">
              <div class="keen-slider__slide bg-white rounded-t-xl">
                <NuxtImg
                  src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
                  class="rounded-t-xl"
                />
                <div class="p-4">
                  <span>Assistência veicular</span>
                  <h2 class="text-xl/relaxed font-bold mb-2">Socorro Mecânico card</h2>
                  <p class="text-sm">
                    Caso o seu carro tenha sofrido algum dano, mandaremos até você um profissional
                    credenciado para fazer um reparo paliativo do veículo.
                  </p>
                </div>
              </div>
              <div class="keen-slider__slide">
                <NuxtImg
                  src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
                  class="rounded-t-xl"
                />
                <div class="p-4">
                  <span>Assistência veicular</span>
                  <h2 class="text-xl/relaxed font-bold mb-2">Socorro Mecânico card</h2>
                  <p class="text-sm">
                    Caso o seu carro tenha sofrido algum dano, mandaremos até você um profissional
                    credenciado para fazer um reparo paliativo do veículo.
                  </p>
                </div>
              </div>
              <div class="keen-slider__slide">
                <NuxtImg
                  src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
                  class="rounded-t-xl"
                />
                <div class="p-4">
                  <span>Assistência veicular</span>
                  <h2 class="text-xl/relaxed font-bold mb-2">Socorro Mecânico card</h2>
                  <p class="text-sm">
                    Caso o seu carro tenha sofrido algum dano, mandaremos até você um profissional
                    credenciado para fazer um reparo paliativo do veículo.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                ref="keenSliderPrevious"
                aria-label="Previous slide"
                class="rounded-full border p-3 transition"
                style="background: #deeffe; color: #020f83; border-color: #020f83"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                ref="keenSliderNext"
                aria-label="Next slide"
                class="rounded-full border p-3 transition"
                style="background: #deeffe; color: #020f83; border-color: #020f83"
              >
                <svg
                  class="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import KeenSlider from 'keen-slider'

export default {
  setup() {
    const keenSlider = ref(null)
    const keenSliderPrevious = ref(null)
    const keenSliderNext = ref(null)
    const keenSliderPreviousDesktop = ref(null)
    const keenSliderNextDesktop = ref(null)

    onMounted(() => {
      const slider = new KeenSlider(keenSlider.value, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 3,
              spacing: 32
            }
          }
        }
      })

      keenSliderPrevious.value.addEventListener('click', () => slider.prev())
      keenSliderNext.value.addEventListener('click', () => slider.next())
      keenSliderPreviousDesktop.value.addEventListener('click', () => slider.prev())
      keenSliderNextDesktop.value.addEventListener('click', () => slider.next())
    })

    return {
      keenSlider,
      keenSliderPrevious,
      keenSliderNext,
      keenSliderPreviousDesktop,
      keenSliderNextDesktop
    }
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css';
</style>
