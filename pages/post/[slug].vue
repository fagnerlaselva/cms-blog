<template>
	<article v-if="article" class="container mx-auto p-4 max-w-5xl">
		<header class="mb-8">
			<h1
				class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl sm:w-3/4 py-10 px-20 pb-10 flex items-center leading-loose"
			>
				{{ article.title }}
			</h1>
			<div v-if="author" class="mb-4 px-20">
				<div class="text-gray-600 flex">
					<img
						v-if="article.image"
						:src="article.image"
						:alt="article.title"
						class="h-16 rounded-full object-cover mb-4 flex-none w-16 mr-2"
					>
					<div class="flex-1 w-64">
						<NuxtLink
							:to="'/autores/' + author.slug"
							class="text-gray-900 font-bold sm:text-lg hover:underline"
						>
							{{ author.name }}
						</NuxtLink>
						<p class="text-gray-600">14 nov 2024 • 3 min de leitura</p>						
					</div>
				</div>
			</div>
		</header>
		<section class="mb-8" />
		<section class="mb-8 text-xl font-serif">
			<img
				v-if="article.image"
				:src="article.image"
				:alt="article.title"
				class="w-full h-100 object-cover my-4"
			>
			<p class="text-gray-800 py-3 px-20">We've always dreamed of Savee being more than just a place for saving
inspiration and getting inspired. We see it as a dynamic hub where creatives like
you can elevate your craft, refine your skills, and unleash your creativity to its
fullest potential.</p>
			<p class="text-gray-800 py-3 px-20">
				That's why we're thrilled to announce the launch of our very own marketplace,
featuring 15 brand-new After Effects templates designed to take your projects to
the next level.
			</p>
			<p class="text-gray-800 py-3 px-20">{{ article.content }}</p>
			
			<p class="text-gray-800 py-3 px-20" >Whether you're a seasoned professional or just starting out on your creative
				journey, our marketplace offers something for everyone. From stunning visual
				effects to captivating animations, each template is crafted with precision and
				creativity to help you bring your ideas to life in ways you never thought possible</p>
			<p class="text-gray-800 py-3 px-20">Here's what you can expect from our marketplace:</p>
			<ul>
				<li class="text-gray-800 py-3 px-20 pl-24">
					<strong>High-Quality Templates:</strong> Explore a diverse range of After Effects
					templates, meticulously crafted by our team of talented designers.
				</li>
				<li class="text-gray-800 py-3 px-20 pl-24">
					<strong>Versatile Options:</strong> Whether you're working on a video project,
					presentation, or social media content, our templates offer versatility to
					suit your needs.
				</li>
				<li class="text-gray-800 py-3 px-20 pl-24">
					<strong>Regular Updates:</strong> Stay ahead of the curve with regular updates and
					new additions to our growing collection of templates.
				</li>
			</ul>
			<p class="text-gray-800 py-3 px-20">Here's what you can expect from our marketplace:</p>
			<p class="text-gray-600 mt-20 px-20">
				<NuxtLink
					v-if="author"
					:to="'/autores/' + author.slug"
					class="text-gray-900 font-bold sm:text-lg hover:underline py-10"
				>
					{{ author.name }}
				</NuxtLink>
				{{ author?.bio }}
			</p>
		</section>
		 <!-- Seção de últimos artigos -->
		 <section class="w-full">
			<h2 class="grid grid-cols-1 text-3xl font-bold mb-4 gap-6 p-4">
				Últimos Artigos
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<article v-for="recentArticle in recentArticles" :key="recentArticle.id" class="p-4">
				<NuxtLink :to="'/post/' + recentArticle.slug">
					<img :src="recentArticle.image" :alt="recentArticle.title" class="w-full h-70 object-cover mb-6">
					<h3 class="text-2xl mb-2 text-gray-900 font-extrabold">{{ recentArticle.title }}</h3>
					<p class="text-gray-600 mb-4">{{ recentArticle.excerpt }}</p>
				</NuxtLink>
			</article>
		</div>

		</section>
		<footer class="py-3 px-20">
			<NuxtLink to="/" class="text-blue-600 hover:underline">
				← Voltar para a lista
			</NuxtLink>
			<NuxtLink
				v-if="article.category"
				:to="'/categorias/' + article.category.slug"
				class="text-blue-600 hover:underline"
			>
				Ver mais artigos em {{ article.category.name }}
			</NuxtLink>
		</footer>
	</article>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { articles, authors } from '@/utils/data.js';

const route = useRoute();
const slug = route.params.slug;

const article = articles.find((a) => a.slug === slug);
const author = article ? authors.find((a) => a.slug === article.authorSlug) : null;
const recentArticles = articles.slice(-3);
</script>
