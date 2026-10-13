<template>
  <footer class="cs-site-footer"><div class="cs-site-footer__inner">
    <div><strong>CAS-soft</strong><p>CRM без валидола — внедрение, автоматизация, интеграции и разработка под ваши процессы.</p></div>
    <nav aria-label="Навигация в подвале"><NuxtLink to="/services">Услуги</NuxtLink><NuxtLink to="/platforms">Платформы</NuxtLink><NuxtLink to="/apps">Приложения</NuxtLink><NuxtLink to="/products/kub-x">КУБ-X</NuxtLink></nav>
    <div><strong>Контакты</strong><a href="mailto:info@cassoft.ru">info@cassoft.ru</a><NuxtLink to="/contacts">Обсудить проект</NuxtLink></div>
  </div><div class="cs-site-footer__bottom">© {{ new Date().getFullYear() }} CAS-soft</div></footer>
</template>
<style>
.cs-site-footer{background:#07182a;color:white;padding:56px 24px 24px}.cs-site-footer__inner{max-width:1280px;margin:auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px}.cs-site-footer__inner strong{font-size:20px}.cs-site-footer__inner p{max-width:420px;color:#a9bad0;line-height:1.7}.cs-site-footer nav,.cs-site-footer__inner>div:last-child{display:flex;flex-direction:column;align-items:flex-start;gap:12px}.cs-site-footer a{color:#e1eaf7;text-decoration:none}.cs-site-footer a:hover{color:#7ab0ff}.cs-site-footer__bottom{max-width:1280px;margin:44px auto 0;padding-top:20px;border-top:1px solid #ffffff26;color:#a9bad0;font-size:13px}@media(max-width:700px){.cs-site-footer__inner{grid-template-columns:1fr;gap:28px}}
</style>