<script setup lang="ts">
const open = ref(false)
const links = [
  { label: 'Главная', to: '/' },
  { label: 'Услуги', to: '/services' },
  { label: 'Платформы', to: '/platforms' },
  { label: 'Приложения', to: '/apps' },
  { label: 'КУБ-X', to: '/products/kub-x' },
  { label: 'Контакты', to: '/contacts' }
]
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>
<template>
  <header class="cs-site-header">
    <div class="cs-site-header__inner">
      <NuxtLink to="/" class="cs-site-brand" aria-label="CAS-soft — на главную"><span class="cs-site-brand__mark">CS</span><span>CAS-soft</span></NuxtLink>
      <button type="button" class="cs-site-menu" :aria-expanded="open" aria-controls="cs-site-navigation" @click="open = !open">{{ open ? 'Закрыть' : 'Меню' }}</button>
      <nav id="cs-site-navigation" class="cs-site-nav" :class="{ 'cs-site-nav--open': open }" aria-label="Основная навигация">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="route.path === link.to ? 'page' : undefined">{{ link.label }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>
<style>
.cs-site-header{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.97);border-bottom:1px solid #dce5ef;backdrop-filter:blur(12px)}
.cs-site-header__inner{max-width:1280px;margin:auto;padding:0 24px;min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.cs-site-brand{display:flex;align-items:center;gap:10px;color:#10243e;font-size:20px;font-weight:800;text-decoration:none;white-space:nowrap}
.cs-site-brand__mark{background:#2f80ff;color:#fff;border-radius:10px;padding:9px 7px;font-size:12px}
.cs-site-nav{display:flex;gap:22px;align-items:center}.cs-site-nav a{font-size:14px;font-weight:650;color:#10243e;text-decoration:none}.cs-site-nav a:hover,.cs-site-nav a[aria-current=page]{color:#1769e8}
.cs-site-menu{display:none;border:1px solid #dce5ef;background:white;padding:10px 14px;border-radius:10px;font:inherit}
@media(max-width:900px){.cs-site-menu{display:block}.cs-site-nav{display:none;position:absolute;top:100%;left:0;right:0;padding:16px 24px 24px;background:#fff;border-bottom:1px solid #dce5ef;flex-direction:column;align-items:stretch;gap:0;box-shadow:0 18px 24px #10243e14}.cs-site-nav--open{display:flex}.cs-site-nav a{padding:12px 4px}}
</style>