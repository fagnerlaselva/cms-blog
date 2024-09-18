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
  ],
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
  
 
});