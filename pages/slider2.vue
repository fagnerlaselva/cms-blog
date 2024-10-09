<template>
  <section class="bg-gray-50">
    <div
      class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't just take our word for it...
          </h2>

          <p class="mt-4 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
            placeat harum porro optio fugit a culpa sunt id!
          </p>

          <div class="hidden lg:mt-8 lg:flex lg:gap-4">
            <button
              ref="keenSliderPreviousDesktop"
              aria-label="Previous slide"
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
            <div class="keen-slider__slide">
              <NuxtImg
                src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
              />
              <!-- Slide Content -->teste
            </div>
            <div class="keen-slider__slide">
              <NuxtImg
                src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
              />
            </div>
            <div class="keen-slider__slide">
              <NuxtImg
                src="https://nfsvpaoqkxppakxh.public.blob.vercel-storage.com/assisty24-blog/banner-assisty24h-new-nFSUObqPthiDmI0ElbKPkqmwBQykMO.webp"
              />
            </div>
          </div>

          <div class="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              ref="keenSliderPrevious"
              aria-label="Previous slide"
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              class="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              perView: 1.5,
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
