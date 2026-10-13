<script setup lang="ts">
useSeoMeta({title:"Услуги по внедрению CRM | CRM без валидола — CAS-soft",description:"Берём сложную техническую работу на себя — от аудита и настройки до интеграций и поддержки."})
const cards = [{"title":"Аудит CRM","text":"Находим причины, по которым CRM не помогает бизнесу."},{"title":"Внедрение CRM","text":"Настраиваем воронки, карточки, роли и процессы."},{"title":"Автоматизация","text":"Убираем повторяющиеся операции и ручной контроль."},{"title":"Интеграции","text":"Связываем CRM с сайтом, телефонией, почтой и другими сервисами."},{"title":"Разработка","text":"Проектируем приложения и модули под ваши задачи."},{"title":"Обучение и поддержка","text":"Помогаем сотрудникам освоить систему и развиваем её после запуска."}]
</script>
<template>
  <div class="crm-site">
    <header class="v3-header"><div class="v3-container v3-header-inner"><NuxtLink class="v3-brand" to="/">CAS-soft</NuxtLink><nav class="v3-nav" aria-label="Навигация"><NuxtLink to="/">Главная</NuxtLink><NuxtLink to="/services">Услуги</NuxtLink><NuxtLink to="/platforms">Платформы</NuxtLink><NuxtLink to="/apps">Приложения</NuxtLink><NuxtLink to="/products/kub-x">КУБ-X</NuxtLink><NuxtLink to="/contacts">Контакты</NuxtLink></nav></div></header>
    <main style="max-width:1180px;margin:auto;padding:140px 24px 90px;min-height:70vh">
      <NuxtLink to="/" style="color:#2f80ff;text-decoration:none">← CRM без валидола</NuxtLink>
      <h1 style="font-size:clamp(36px,5vw,64px);line-height:1.12;margin:30px 0 20px">Услуги по внедрению CRM</h1>
      <p style="font-size:clamp(17px,2vw,21px);max-width:760px;line-height:1.6;color:#64748b">Берём сложную техническую работу на себя — от аудита и настройки до интеграций и поддержки.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px;margin:56px 0">
        <article v-for="card in cards" :key="card.title" style="padding:28px;border:1px solid #dce5ef;border-radius:20px;background:white"><h2 style="font-size:22px;margin:0 0 12px">{{card.title}}</h2><p style="color:#64748b;line-height:1.65;margin:0">{{card.text}}</p></article>
      </div>
      <NuxtLink to="/contacts" style="display:inline-flex;padding:16px 24px;background:#2f80ff;color:white;border-radius:12px;text-decoration:none;font-weight:700">Обсудить задачу →</NuxtLink>
      
    </main>
    <footer style="background:#07182a;color:white;padding:32px 24px;text-align:center">© {{new Date().getFullYear()}} CAS-soft · CRM без валидола</footer>
  </div>
</template>

<style>
.crm-site{min-height:100vh;background:#f6f9fc;color:#10243e;font-family:Manrope,Inter,Arial,sans-serif}.crm-site .v3-header{background:#fff;border-bottom:1px solid #dce5ef;position:sticky;top:0;z-index:30}.crm-site .v3-container{max-width:1180px;margin:auto;padding:0 24px}.crm-site .v3-header-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px}.crm-site .v3-brand{font-size:22px;font-weight:800;color:#10243e;text-decoration:none}.crm-site .v3-nav{display:flex;align-items:center;gap:22px;flex-wrap:wrap}.crm-site .v3-nav a{color:#10243e;font-size:14px;text-decoration:none}.crm-site .v3-nav a:hover{color:#2f80ff}@media(max-width:760px){.crm-site .v3-header-inner{align-items:flex-start;flex-direction:column;padding-top:16px;padding-bottom:16px}.crm-site .v3-nav{gap:10px 18px}.crm-site .v3-nav a{font-size:13px}}
</style>
