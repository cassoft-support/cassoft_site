<script setup lang="ts">
import type { PublicationDetail } from '#shared/types/publication'

const route = useRoute()
const { data: publication, error } = await useFetch<PublicationDetail>(
  () => `/api/publications/${encodeURIComponent(String(route.params.slug))}`
)

if (error.value?.statusCode === 404) {
  throw createError({ statusCode: 404, statusMessage: 'Материал не найден' })
}

if (!publication.value && error.value) {
  throw createError({ statusCode: 503, statusMessage: 'Не удалось загрузить материал' })
}

if (publication.value) {
  useSeoMeta({
    title: `${publication.value.title} — CAS-soft`,
    description: publication.value.excerpt
  })
}

const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' })
</script>

<template>
  <main v-if="publication" class="min-h-screen bg-[#f5f6f2] text-[#18211f]">
    <header class="border-b border-[#18211f]/15">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <NuxtLink class="text-lg font-extrabold tracking-tight" to="/">CAS-soft</NuxtLink>
        <NuxtLink class="text-sm font-semibold" to="/blog">Все материалы</NuxtLink>
      </div>
    </header>

    <article class="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <NuxtLink class="text-sm font-semibold text-[#52634a]" to="/blog">← Новости и статьи</NuxtLink>
      <div class="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#68736e]">
        <span>{{ publication.category }}</span>
        <span>{{ dateFormatter.format(new Date(publication.publishedAt)) }}</span>
        <span v-if="publication.readingMinutes">{{ publication.readingMinutes }} мин чтения</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{{ publication.title }}</h1>
      <p class="mt-6 text-lg leading-8 text-[#68736e]">{{ publication.excerpt }}</p>
      <img v-if="publication.coverImage" :src="publication.coverImage" :alt="publication.title" class="mt-10 aspect-[16/9] w-full object-cover">
      <div class="mt-10 whitespace-pre-wrap text-base leading-8 text-[#303b36]">{{ publication.body }}</div>
      <aside class="mt-14 border-t border-[#18211f]/15 pt-8">
        <h2 class="text-2xl font-semibold tracking-tight">Нужна помощь с CRM или автоматизацией?</h2>
        <NuxtLink class="mt-5 inline-flex rounded bg-[#18211f] px-5 py-3 text-sm font-bold text-white" to="/#contact">Обсудить проект <span class="ml-2" aria-hidden="true">↗</span></NuxtLink>
      </aside>
    </article>
  </main>
</template>