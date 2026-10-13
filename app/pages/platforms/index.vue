<script setup lang="ts">
useSeoMeta({title:"Платформы CRM | CRM без валидола — CAS-soft",description:"Не навязываем одну систему: подбираем подход под задачи, команду и существующие процессы."})
const cards = [{"title":"Битрикс24","text":"Настройка, автоматизация и расширение возможностей."},{"title":"amoCRM","text":"Воронки продаж, интеграции и автоматизация."},{"title":"Решения экосистемы Сбера","text":"Рассматриваем применимость и возможности интеграции."},{"title":"КУБ-X","text":"Собственная модульная CRM-платформа CAS-soft."},{"title":"Другие системы","text":"Оценим возможность доработки и подключения."}]
</script>
<template>
  <div class="crm-site">
    <CSHeader />
    <main style="max-width:1180px;margin:auto;padding:140px 24px 90px;min-height:70vh">
      <NuxtLink to="/" style="color:#2f80ff;text-decoration:none">← CRM без валидола</NuxtLink>
      <h1 style="font-size:clamp(36px,5vw,64px);line-height:1.12;margin:30px 0 20px">Платформы CRM</h1>
      <p style="font-size:clamp(17px,2vw,21px);max-width:760px;line-height:1.6;color:#64748b">Не навязываем одну систему: подбираем подход под задачи, команду и существующие процессы.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px;margin:56px 0">
        <article v-for="card in cards" :key="card.title" style="padding:28px;border:1px solid #dce5ef;border-radius:20px;background:white"><h2 style="font-size:22px;margin:0 0 12px">{{card.title}}</h2><p style="color:#64748b;line-height:1.65;margin:0">{{card.text}}</p></article>
      </div>
      <NuxtLink to="/contacts" style="display:inline-flex;padding:16px 24px;background:#2f80ff;color:white;border-radius:12px;text-decoration:none;font-weight:700">Обсудить задачу →</NuxtLink>
      
    </main>
    <CSFooter />
  </div>
</template>

