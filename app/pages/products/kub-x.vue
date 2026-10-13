<script setup lang="ts">
useSeoMeta({title:"КУБ-X — комплексное управление бизнесом | CRM без валидола — CAS-soft",description:"Разрабатываем модульную CRM-платформу для объединения разных бизнес-процессов в одном рабочем пространстве."})
const cards = [{"title":"Модульный подход","text":"Набор инструментов развивается вместе с задачами бизнеса."},{"title":"Единое пространство","text":"Продажи, задачи и процессы в общей рабочей среде."},{"title":"Гибкая архитектура","text":"Структуру и сценарии можно проектировать под конкретные процессы."},{"title":"Интеграции","text":"Внешние сервисы подключаются по поддерживаемым сценариям."}]
</script>
<template>
  <div class="crm-site">
    <header class="v3-header"><div class="v3-container v3-header-inner"><NuxtLink class="v3-brand" to="/">CAS-soft</NuxtLink><nav class="v3-nav" aria-label="Навигация"><NuxtLink to="/">Главная</NuxtLink><NuxtLink to="/services">Услуги</NuxtLink><NuxtLink to="/platforms">Платформы</NuxtLink><NuxtLink to="/apps">Приложения</NuxtLink><NuxtLink to="/products/kub-x">КУБ-X</NuxtLink><NuxtLink to="/contacts">Контакты</NuxtLink></nav></div></header>
    <main style="max-width:1180px;margin:auto;padding:140px 24px 90px;min-height:70vh">
      <NuxtLink to="/" style="color:#2f80ff;text-decoration:none">← CRM без валидола</NuxtLink>
      <h1 style="font-size:clamp(36px,5vw,64px);line-height:1.12;margin:30px 0 20px">КУБ-X — комплексное управление бизнесом</h1>
      <p style="font-size:clamp(17px,2vw,21px);max-width:760px;line-height:1.6;color:#64748b">Разрабатываем модульную CRM-платформу для объединения разных бизнес-процессов в одном рабочем пространстве.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px;margin:56px 0">
        <article v-for="card in cards" :key="card.title" style="padding:28px;border:1px solid #dce5ef;border-radius:20px;background:white"><h2 style="font-size:22px;margin:0 0 12px">{{card.title}}</h2><p style="color:#64748b;line-height:1.65;margin:0">{{card.text}}</p></article>
      </div>
      <NuxtLink to="/contacts" style="display:inline-flex;padding:16px 24px;background:#2f80ff;color:white;border-radius:12px;text-decoration:none;font-weight:700">Обсудить задачу →</NuxtLink>
      
    </main>
    <footer style="background:#07182a;color:white;padding:32px 24px;text-align:center">© {{new Date().getFullYear()}} CAS-soft · CRM без валидола</footer>
  </div>
</template>
