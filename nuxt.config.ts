import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/seo',
    'nuxt-vitalizer',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Sora: [300, 400, 500, 600, 700], // Pesos que deseja usar
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
        htmlAttrs: {
            lang: 'pt-br',
        },
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
    }
  },
  eslint: {
    checker: true, // <---
  },
  vitalizer: {
    disablePrefetchLinks: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
    },
  },
  site: {
    url: 'https://cms-blog-lilac.vercel.app/',
    name: 'CMS BLOG'
  },
  image: {
    quality: 70, // Defina a qualidade das imagens (0 a 100)
  }
 
});