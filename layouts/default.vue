<!-- layouts/default.vue -->
<template>
  <div>
    <!-- Cabeçalho ou Navbar -->
    <header class="container mx-auto p-4">
      <nav>
        <ul class="flex flex-wrap gap-4">
          <li v-for="category in categories" :key="category.slug">
            <NuxtLink
              :to="'/categorias/' + category.slug"
              class="hover:underline"
            >
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Conteúdo dinâmico -->
    <main class="container mx-auto">
      <NuxtPage />
    </main>

    <!-- Rodapé -->
    <footer class="">
      <div class="container mx-auto">
        <p>© 2024 CMS Blog. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Se precisar de alguma lógica específica, pode adicionar aqui
</script>
