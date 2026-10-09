<script setup lang="ts">
import type { PublicationSummary } from '#shared/types/publication'

useSeoMeta({
  title: 'Новости и статьи — CAS-soft',
  description: 'Материалы CAS-soft о CRM, автоматизации, интеграциях и разработке.'
})

const { data: publications, status, error } = await useFetch<PublicationSummary[]>('/api/publications')
const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' })
</script>

<template>
  <main class="min-h-screen bg-[#f5f6f2] text-[#18211f]">
    <header class="border-b border-[#18211f]/15">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <NuxtLink class="text-lg font-extrabold tracking-tight" to="/">CAS-soft</NuxtLink>
        <NuxtLink class="text-sm font-semibold" to="/#contact">Обсудить проект <span aria-hidden="true">↗</span></NuxtLink>
      </div>
    </header>

    <section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p class="text-xs font-extrabold uppercase tracking-widest text-[#65745d]">База знаний CAS-soft</p>
      <h1 class="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Новости и статьи</h1>
      <p class="mt-5 max-w-2xl text-base leading-7 text-[#68736e]">Практические материалы о CRM, автоматизации процессов, интеграциях и разработке.</p>

      <div v-if="status === 'pending'" class="mt-12 text-sm text-[#68736e]" role="status">Загружаем публикации…</div>
      <p v-else-if="error" class="mt-12 text-sm text-[#68736e]" role="alert">Не удалось загрузить публикации. Попробуйте позже.</p>
      <p v-else-if="!publications?.length" class="mt-12 border-t border-[#18211f]/15 pt-6 text-sm text-[#68736e]">Новые материалы скоро появятся.</p>

      <div v-else class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="publication in publications" :key="publication.id" class="flex min-h-72 flex-col border border-[#18211f]/15 bg-white/60 p-6">
          <div class="flex items-center justify-between gap-3 text-xs font-semibold text-[#68736e]">
            <span>{{ publication.category }}</span>
            <span>{{ dateFormatter.format(new Date(publication.publishedAt)) }}</span>
          </div>
          <img v-if="publication.coverImage" :src="publication.coverImage" :alt="publication.title" class="mt-5 aspect-[16/9] w-full object-cover">
          <h2 class="mt-6 text-xl font-semibold leading-snug tracking-tight">
            <NuxtLink :to="`/blog/${publication.slug}`" class="hover:underline">{{ publication.title }}</NuxtLink>
          </h2>
          <p class="mt-3 flex-1 text-sm leading-6 text-[#68736e]">{{ publication.excerpt }}</p>
          <NuxtLink :to="`/blog/${publication.slug}`" class="mt-6 inline-flex items-center gap-2 text-sm font-bold">Читать <span aria-hidden="true">→</span></NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>