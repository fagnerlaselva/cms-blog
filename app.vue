<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Aumente sua produtividade: Dicas para desenvolvedores eficientes',
  ogTitle: 'Aumente sua produtividade: Dicas para desenvolvedores eficientes',
  description:
    'Como elevar sua produtividade ao próximo nível no mundo do desenvolvimento web veja mais',
  ogDescription:
    'Como elevar sua produtividade ao próximo nível no mundo do desenvolvimento web veja mais',
  ogImage: 'https://inspire.savee.it/content/images/size/w2000/2024/03/v8-1.gif',
  twitterCard: 'summary_large_image'
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.4rem);
}
</style>
