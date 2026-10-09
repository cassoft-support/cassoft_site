<script setup lang="ts">
const menuOpen = ref(false)

useSeoMeta({
  title: 'Цифровые решения для бизнеса — CAS-soft',
  description: 'Настраиваем CRM, соединяем сервисы, автоматизируем процессы и создаём приложения под реальные задачи компании.'
})

const navigation = [
  { label: 'Услуги', href: '#services' },
  { label: 'Подход', href: '#approach' },
  { label: 'Продукты', href: '#products' },
  { label: 'Разработка', href: '#development' },
  { label: 'Контакты', href: '#contacts' }
]

const services = [
  { icon: 'i-lucide-panels-top-left', title: 'CRM и внедрение', description: 'Подбираем и настраиваем CRM под процессы, команду и цели бизнеса.' },
  { icon: 'i-lucide-scan-search', title: 'Аудит и оптимизация', description: 'Находим узкие места в данных, воронках и текущих рабочих сценариях.' },
  { icon: 'i-lucide-workflow', title: 'Автоматизация', description: 'Сокращаем повторяющиеся операции и настраиваем контроль исполнения.' },
  { icon: 'i-lucide-waypoints', title: 'Интеграции', description: 'Связываем CRM, сайты, телефонию, мессенджеры и другие сервисы.' },
  { icon: 'i-lucide-code-xml', title: 'Разработка', description: 'Создаём CRM, веб-сервисы, приложения и MVP под задачу.' },
  { icon: 'i-lucide-life-buoy', title: 'Поддержка и развитие', description: 'Помогаем адаптировать решение по мере изменения процессов.' }
]

const processStages = [
  { title: 'Задача бизнеса', icon: 'i-lucide-target' },
  { title: 'Анализ процессов', icon: 'i-lucide-search-check' },
  { title: 'Платформа и архитектура', icon: 'i-lucide-panels-top-left' },
  { title: 'Настройка и разработка', icon: 'i-lucide-code-xml' },
  { title: 'Рабочий процесс', icon: 'i-lucide-circle-check' }
]

const developmentStages = [
  'Разбор задачи',
  'Проектирование',
  'Прототип и оценка',
  'Разработка',
  'Интеграция и тестирование',
  'Запуск и поддержка'
]

const apps = [
  {
    title: 'BROKCI-PRO',
    description: 'Продукт для агентств недвижимости: работа с объектами, размещение объявлений и подбор для покупателей.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/94c/goq38nqjmvz7s4fqh8km7ohsspe9oxgu/250_250_1/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.brokci/',
    registry: 'https://reestr.digital.gov.ru/reestr/3263533/?sphrase_id=6071804'
  },
  {
    title: 'ЦИАН мессенджер',
    description: 'Интеграция чата ЦИАН с Битрикс24 для работы с обращениями и объектами.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/3ba/t3fw8bhnknlcicviei4zi8gunz6k8oyp/250_250_1/3261.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.cian_messager/'
  },
  {
    title: 'Распределение лидов и сделок',
    description: 'Распределение обращений с учётом эффективности сотрудников.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/af8/xvj5z36qkev680tf5uikgozguts018qf/250_250_1/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2%20(1).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.distribution/'
  }
]

function handleMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleMenuKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', handleMenuKeydown))
</script>

<template>
  <div class="v2-page">
    <header class="v2-header">
      <div class="v2-container v2-header-inner">
        <a class="v2-brand" href="#top" aria-label="CAS-soft, на главную">
          <span class="v2-brand-mark"><UIcon name="i-lucide-box" aria-hidden="true" /></span>
          <span>CAS-soft</span>
        </a>
        <nav class="v2-nav" :class="{ 'is-open': menuOpen }" aria-label="Главная навигация">
          <a v-for="item in navigation" :key="item.label" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
          <a class="v2-mobile-cta" href="#contacts" @click="menuOpen = false">Обсудить задачу <span aria-hidden="true">↗</span></a>
        </nav>
        <a class="v2-button v2-button-primary v2-header-cta" href="#contacts">Обсудить задачу <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
        <button class="v2-menu-toggle" type="button" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'" @click="menuOpen = !menuOpen">
          <UIcon :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" aria-hidden="true" />
        </button>
      </div>
    </header>

    <main id="top">
      <section class="v2-hero">
        <div class="v2-container v2-hero-grid">
          <div class="v2-hero-copy">
            <p class="v2-eyebrow">CRM · автоматизация · интеграции · разработка</p>
            <h1>Цифровые решения, которые <span>работают на ваш бизнес.</span></h1>
            <p class="v2-lead">Настраиваем CRM, соединяем сервисы, автоматизируем процессы и создаём приложения под реальные задачи компании.</p>
            <div class="v2-actions">
              <a class="v2-button v2-button-primary" href="#contacts">Обсудить задачу <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
              <a class="v2-button v2-button-secondary" href="#services">Посмотреть решения</a>
            </div>
            <ul class="v2-capabilities" aria-label="Направления работы">
              <li>CRM</li><li>Интеграции</li><li>Разработка</li><li>Собственные продукты</li>
            </ul>
          </div>

          <div class="v2-hero-visual" role="img" aria-label="Схема: задача бизнеса связывает CRM, сервисы и автоматизацию">
            <div class="v2-visual-header"><span class="v2-visual-status"><i /> Сценарий работы</span><span class="v2-visual-label">СХЕМА ПОДХОДА</span></div>
            <div class="v2-visual-map">
              <svg class="v2-visual-lines" viewBox="0 0 560 370" preserveAspectRatio="none" aria-hidden="true">
                <path d="M110 78 220 154M450 78 340 154M110 292l110-74M450 292l-110-74M280 185v-31M280 218v72" />
              </svg>
              <div class="v2-visual-node v2-visual-site"><UIcon name="i-lucide-globe" aria-hidden="true" /><span>Сайт и каналы</span></div>
              <div class="v2-visual-node v2-visual-phone"><UIcon name="i-lucide-phone" aria-hidden="true" /><span>Коммуникации</span></div>
              <div class="v2-visual-core"><span><UIcon name="i-lucide-target" aria-hidden="true" /></span><strong>Задача бизнеса</strong><small>в центре решения</small></div>
              <div class="v2-visual-node v2-visual-crm"><UIcon name="i-lucide-panels-top-left" aria-hidden="true" /><span>CRM и данные</span></div>
              <div class="v2-visual-node v2-visual-automation"><UIcon name="i-lucide-workflow" aria-hidden="true" /><span>Автоматизация</span></div>
              <div class="v2-visual-node v2-visual-result"><UIcon name="i-lucide-circle-check" aria-hidden="true" /><span>Рабочий процесс</span></div>
            </div>
            <p class="v2-visual-footnote">Схема показывает общий подход, а не интерфейс готового продукта.</p>
          </div>
        </div>
      </section>

      <section class="v2-proof" aria-label="Подтверждённые направления и продукты">
        <div class="v2-container v2-proof-inner">
          <p>Опыт в продуктах, интеграциях и автоматизации</p>
          <a href="https://www.bitrix24.ru/apps/partner/1808299/" target="_blank" rel="noopener noreferrer">Приложения в маркетплейсе Битрикс24</a>
          <a href="https://www.bitrix24.ru/apps/app/cassoft.brokci/" target="_blank" rel="noopener noreferrer">Продукт BROKCI-PRO</a>
          <a href="https://reestr.digital.gov.ru/reestr/3263533/?sphrase_id=6071804" target="_blank" rel="noopener noreferrer">Запись в Реестре российского ПО</a>
        </div>
      </section>

      <section id="services" class="v2-section v2-services">
        <div class="v2-container">
          <div class="v2-section-heading">
            <div><p class="v2-eyebrow">Чем можем помочь</p><h2>Не просто настраиваем CRM</h2></div>
            <p>Строим систему вокруг вашего бизнеса: соединяем инструменты, убираем ручные операции и создаём недостающий функционал.</p>
          </div>
          <div class="v2-service-grid">
            <article v-for="(service, index) in services" :key="service.title" class="v2-service-item">
              <span class="v2-service-number">0{{ index + 1 }}</span>
              <span class="v2-service-icon"><UIcon :name="service.icon" aria-hidden="true" /></span>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="approach" class="v2-section v2-approach">
        <div class="v2-container">
          <div class="v2-section-heading v2-approach-heading">
            <div><p class="v2-eyebrow">Сначала задача</p><h2>Решение начинается не с выбора CRM</h2></div>
            <p>У компаний разные процессы, бюджеты и требования. Сначала разбираемся в задаче, а затем подбираем подходящие технологии.</p>
          </div>
          <div class="v2-process-flow" aria-label="Этапы подбора решения">
            <template v-for="(stage, index) in processStages" :key="stage.title">
              <div class="v2-flow-step">
                <span class="v2-flow-icon"><UIcon :name="stage.icon" aria-hidden="true" /></span>
                <strong>{{ stage.title }}</strong>
              </div>
              <span v-if="index < processStages.length - 1" class="v2-flow-arrow" aria-hidden="true"><UIcon name="i-lucide-arrow-right" /></span>
            </template>
          </div>
          <div class="v2-platform-feature">
            <div class="v2-platform-logo"><UIcon name="i-lucide-panels-top-left" aria-hidden="true" /></div>
            <div><p class="v2-eyebrow">Подтверждённое направление</p><h3>Битрикс24</h3><p>Внедрение, настройка и разработка приложений. Конкретный объём работ и совместимость определяем по требованиям проекта.</p></div>
            <a href="https://cassoft.ru/" target="_blank" rel="noopener noreferrer" aria-label="Перейти на сайт CAS-soft о Битрикс24"><UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
          </div>
          <p class="v2-platform-note">Другие платформы оцениваем после проверки требований, API и ограничений доступа.</p>
        </div>
      </section>

      <section id="products" class="v2-section v2-products">
        <div class="v2-container">
          <div class="v2-section-heading">
            <div><p class="v2-eyebrow">Собственные продукты</p><h2>Приложения для конкретных задач</h2></div>
            <p>Показываем существующие решения для Битрикс24; сведения о совместимости относятся только к указанной платформе.</p>
          </div>
          <div class="v2-app-grid">
            <article v-for="app in apps" :key="app.title" class="v2-app-card">
              <div class="v2-app-top"><img :src="app.image" alt="" width="64" height="64" loading="lazy" decoding="async"><span>Битрикс24</span></div>
              <h3>{{ app.title }}</h3>
              <p>{{ app.description }}</p>
              <a class="v2-app-link" :href="app.href" target="_blank" rel="noopener noreferrer">Карточка приложения <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
              <a v-if="app.registry" class="v2-registry-link" :href="app.registry" target="_blank" rel="noopener noreferrer">В Реестре российского ПО</a>
            </article>
          </div>
          <a class="v2-text-link" href="https://www.bitrix24.ru/apps/partner/1808299/" target="_blank" rel="noopener noreferrer">Все приложения CAS-soft <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
        </div>
      </section>

      <section id="development" class="v2-development">
        <div class="v2-container v2-development-grid">
          <div class="v2-development-copy">
            <p class="v2-eyebrow">Индивидуальная разработка</p>
            <h2>Если готового решения нет — разработаем</h2>
            <p>Проектируем и создаём CRM, веб-приложения, интеграции и специализированные инструменты под ваши процессы.</p>
            <a class="v2-button v2-button-primary" href="#contacts">Обсудить разработку <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
          </div>
          <ol class="v2-development-steps">
            <li v-for="(stage, index) in developmentStages" :key="stage"><span>0{{ index + 1 }}</span><strong>{{ stage }}</strong><UIcon name="i-lucide-arrow-down-right" aria-hidden="true" /></li>
          </ol>
        </div>
      </section>

      <section class="v2-section v2-how">
        <div class="v2-container v2-how-grid">
          <div><p class="v2-eyebrow">Прозрачные этапы</p><h2>От первого разговора до развития решения</h2><p>Показываем, что делаем на каждом этапе, и передаём клиенту работающий результат.</p></div>
          <ol>
            <li><span>01</span><strong>Разбираемся в задаче</strong></li>
            <li><span>02</span><strong>Проектируем решение</strong></li>
            <li><span>03</span><strong>Настраиваем или разрабатываем</strong></li>
            <li><span>04</span><strong>Интегрируем и тестируем</strong></li>
            <li><span>05</span><strong>Запускаем и сопровождаем</strong></li>
          </ol>
        </div>
      </section>

      <section id="contacts" class="v2-contact">
        <div class="v2-container v2-contact-inner">
          <div><p class="v2-eyebrow">Следующий шаг</p><h2>Расскажите, что нужно улучшить в вашем бизнесе</h2><p>Поможем определить, что подойдёт: настройка CRM, интеграция, автоматизация или разработка.</p></div>
          <div class="v2-contact-actions">
            <a class="v2-button v2-button-light" href="mailto:info@cassoft.ru?subject=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%20%D0%B4%D0%BB%D1%8F%20CAS-soft">Написать на почту <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
            <a href="tel:+79330158058">+7 (933) 015-80-58</a>
            <a href="mailto:info@cassoft.ru">info@cassoft.ru</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="v2-footer">
      <div class="v2-container v2-footer-main">
        <div><a class="v2-brand" href="#top"><span class="v2-brand-mark"><UIcon name="i-lucide-box" aria-hidden="true" /></span><span>CAS-soft</span></a><p>CRM и автоматизация под процессы вашего бизнеса.</p></div>
        <div><strong>Услуги</strong><a href="#services">Внедрение CRM</a><a href="#services">Аудит и автоматизация</a><a href="#development">Разработка</a><a href="#services">Поддержка</a></div>
        <div><strong>Платформы</strong><a href="https://cassoft.ru/" target="_blank" rel="noopener noreferrer">Битрикс24</a><a href="#approach">Подбор решения</a></div>
        <div><strong>Компания</strong><a href="#products">Приложения</a><a href="#contacts">Контакты</a><a href="/blog">Блог</a></div>
      </div>
      <div class="v2-container v2-footer-bottom"><span>© {{ new Date().getFullYear() }} CAS-soft</span><span>Страница-концепция v2 · <a href="/">Перейти к текущей главной</a></span></div>
    </footer>
  </div>
</template>

<style scoped>
.v2-page {
  --v2-blue: #2f80ff;
  --v2-blue-dark: #1769e8;
  --v2-blue-soft: #eaf3ff;
  --v2-ink: #10243e;
  --v2-muted: #64748b;
  --v2-line: #dce5ef;
  --v2-paper: #f6f9fc;
  color: var(--v2-ink);
  background: var(--v2-paper);
  font-family: Inter, "Avenir Next", sans-serif;
}

.v2-page *,
.v2-page *::before,
.v2-page *::after {
  box-sizing: border-box;
}

.v2-container {
  width: min(1280px, calc(100% - 64px));
  margin-inline: auto;
}

.v2-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid rgba(16, 36, 62, .08);
  background: rgba(255, 255, 255, .96);
}

.v2-header-inner {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.v2-brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 10px;
  color: var(--v2-ink);
  font-size: 19px;
  font-weight: 800;
  text-decoration: none;
}

.v2-brand-mark {
  display: grid;
  width: 34px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 8px;
  background: var(--v2-blue);
  color: #fff;
  font-size: 18px;
}

.v2-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.v2-nav a,
.v2-footer a {
  color: inherit;
  font-size: 13px;
  text-decoration: none;
  transition: color .18s ease;
}

.v2-nav a:hover,
.v2-footer a:hover {
  color: var(--v2-blue-dark);
}

.v2-button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background .18s ease, border-color .18s ease, color .18s ease;
}

.v2-button svg {
  width: 17px;
  height: 17px;
}

.v2-button-primary {
  background: var(--v2-blue);
  color: #fff;
}

.v2-button-primary:hover {
  background: var(--v2-blue-dark);
}

.v2-button-secondary {
  border-color: #bdd3ef;
  background: #fff;
  color: var(--v2-ink);
}

.v2-button-secondary:hover {
  border-color: var(--v2-blue);
  color: var(--v2-blue-dark);
}

.v2-menu-toggle,
.v2-mobile-cta {
  display: none;
}

.v2-hero {
  padding: 100px 0 88px;
  background: radial-gradient(ellipse at 82% 45%, rgba(234, 243, 255, .9), transparent 40%), #fff;
}

.v2-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
  align-items: center;
  gap: 52px;
}

.v2-eyebrow {
  margin: 0;
  color: #4f729d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.v2-hero h1 {
  max-width: 650px;
  margin: 20px 0 20px;
  font-family: Manrope, Inter, sans-serif;
  font-size: 60px;
  font-weight: 750;
  line-height: 1.06;
}

.v2-hero h1 span {
  color: var(--v2-blue);
}

.v2-lead {
  max-width: 550px;
  margin: 0;
  color: #526b88;
  font-size: 17px;
  line-height: 1.65;
}

.v2-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 27px;
}

.v2-capabilities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.v2-capabilities li {
  padding: 6px 9px;
  border: 1px solid #e1e9f2;
  border-radius: 5px;
  background: rgba(255, 255, 255, .72);
  color: #58708e;
  font-size: 11px;
  font-weight: 650;
}

.v2-hero-visual {
  min-width: 0;
  padding: 20px 21px 13px;
  border: 1px solid #dce6f1;
  border-radius: 12px;
  background: rgba(255, 255, 255, .88);
  box-shadow: 0 22px 56px rgba(32, 75, 125, .1);
}

.v2-visual-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e8eef5;
}

.v2-visual-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--v2-ink);
  font-size: 13px;
  font-weight: 750;
}

.v2-visual-status i {
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #20a77a;
}

.v2-visual-label {
  color: #788ba2;
  font-size: 9px;
  font-weight: 750;
}

.v2-visual-map {
  position: relative;
  display: grid;
  min-height: 350px;
  grid-template-columns: 1fr 1.15fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 10px;
  padding: 10px 4px;
}

.v2-visual-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.v2-visual-lines path {
  fill: none;
  stroke: #b9cee6;
  stroke-dasharray: 4 7;
  stroke-width: 2;
}

.v2-visual-node,
.v2-visual-core {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
  padding: 10px 12px;
  border: 1px solid #dce5ef;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 5px 14px rgba(25, 57, 96, .06);
}

.v2-visual-node svg {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  color: #357fd5;
}

.v2-visual-node span {
  color: #29415e;
  font-size: 11px;
  font-weight: 700;
}

.v2-visual-site { grid-column: 1; grid-row: 1; }
.v2-visual-phone { grid-column: 3; grid-row: 1; }
.v2-visual-core { grid-column: 2; grid-row: 2; }
.v2-visual-crm { grid-column: 1; grid-row: 3; }
.v2-visual-automation { grid-column: 3; grid-row: 3; }
.v2-visual-result { grid-column: 2; grid-row: 3; transform: translateY(38px); }

.v2-visual-core {
  flex-direction: column;
  justify-content: center;
  width: 164px;
  min-height: 124px;
  border-color: #a9c9f3;
  background: linear-gradient(145deg, #fff, #eef5ff);
}

.v2-visual-core>span {
  display: grid;
  width: 40px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 10px;
  background: var(--v2-blue-soft);
  color: var(--v2-blue);
  font-size: 20px;
}

.v2-visual-core strong { font-size: 12px; }
.v2-visual-core small { color: var(--v2-muted); font-size: 10px; }

.v2-visual-footnote {
  margin: 0;
  color: #7d8ea2;
  font-size: 10px;
  text-align: right;
}

.v2-proof {
  border-block: 1px solid var(--v2-line);
  background: #fff;
}

.v2-proof-inner {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.v2-proof-inner p {
  max-width: 190px;
  margin: 0;
  color: var(--v2-muted);
  font-size: 12px;
  line-height: 1.5;
}

.v2-proof-inner a {
  color: #3d5d7f;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.v2-section {
  padding-block: 96px;
}

.v2-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 36px;
  margin-bottom: 34px;
}

.v2-section-heading h2,
.v2-approach h2,
.v2-development h2,
.v2-how h2,
.v2-contact h2 {
  max-width: 690px;
  margin: 12px 0 0;
  font-family: Manrope, Inter, sans-serif;
  font-size: 42px;
  font-weight: 720;
  line-height: 1.12;
}

.v2-section-heading>p {
  max-width: 450px;
  margin: 0;
  color: var(--v2-muted);
  font-size: 14px;
  line-height: 1.65;
}

.v2-services { background: var(--v2-paper); }

.v2-service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--v2-line);
  border-left: 1px solid var(--v2-line);
}

.v2-service-item {
  position: relative;
  min-height: 225px;
  padding: 25px;
  border-right: 1px solid var(--v2-line);
  border-bottom: 1px solid var(--v2-line);
  background: rgba(255, 255, 255, .65);
  transition: background .18s ease;
}

.v2-service-item:hover { background: #fff; }

.v2-service-number {
  position: absolute;
  top: 24px;
  right: 24px;
  color: #8193a8;
  font-size: 11px;
  font-weight: 750;
}

.v2-service-icon {
  display: grid;
  width: 42px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 8px;
  background: var(--v2-blue-soft);
  color: #2879e8;
  font-size: 20px;
}

.v2-service-item h3 {
  margin: 19px 0 8px;
  font-size: 18px;
  line-height: 1.3;
}

.v2-service-item p {
  max-width: 320px;
  margin: 0;
  color: var(--v2-muted);
  font-size: 13px;
  line-height: 1.6;
}

.v2-approach { background: #fff; }

.v2-approach-heading { margin-bottom: 38px; }

.v2-process-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 14px;
  padding: 24px;
  border: 1px solid var(--v2-line);
  border-radius: 10px;
  background: #fbfdff;
}

.v2-flow-step {
  display: grid;
  justify-items: center;
  gap: 12px;
  min-width: 0;
  text-align: center;
}

.v2-flow-icon {
  display: grid;
  width: 52px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  background: var(--v2-blue-soft);
  color: #2879e8;
  font-size: 21px;
}

.v2-flow-step strong {
  max-width: 150px;
  font-size: 12px;
  line-height: 1.4;
}

.v2-flow-arrow { color: #83a6d0; font-size: 17px; }

.v2-platform-feature {
  display: grid;
  grid-template-columns: 58px 1fr 40px;
  align-items: center;
  gap: 20px;
  margin-top: 26px;
  padding: 24px;
  border: 1px solid var(--v2-line);
  border-radius: 10px;
  background: var(--v2-paper);
}

.v2-platform-logo {
  display: grid;
  width: 54px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 10px;
  background: #e6f2ff;
  color: #1c78d5;
  font-size: 23px;
}

.v2-platform-feature .v2-eyebrow { font-size: 9px; }
.v2-platform-feature h3 { margin: 4px 0; font-size: 18px; }
.v2-platform-feature p:not(.v2-eyebrow) { max-width: 780px; margin: 0; color: var(--v2-muted); font-size: 12px; line-height: 1.55; }

.v2-platform-feature>a {
  display: grid;
  width: 38px;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid #cfdeee;
  border-radius: 7px;
  color: var(--v2-blue);
  font-size: 18px;
}

.v2-platform-note { margin: 12px 0 0; color: #788ba2; font-size: 11px; }

.v2-products { background: var(--v2-paper); }

.v2-app-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.v2-app-card {
  display: flex;
  min-width: 0;
  min-height: 292px;
  flex-direction: column;
  gap: 13px;
  padding: 20px;
  border: 1px solid var(--v2-line);
  border-radius: 10px;
  background: #fff;
}

.v2-app-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.v2-app-top img { width: 54px; height: 54px; border: 1px solid #e7edf5; border-radius: 8px; object-fit: contain; }
.v2-app-top span { padding: 5px 8px; border-radius: 4px; background: var(--v2-blue-soft); color: #3d6caa; font-size: 10px; font-weight: 700; }
.v2-app-card h3 { margin: 2px 0 0; font-size: 17px; line-height: 1.35; }
.v2-app-card p { margin: 0; color: var(--v2-muted); font-size: 12px; line-height: 1.6; }

.v2-app-link,
.v2-registry-link,
.v2-text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
}

.v2-app-link { justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px solid #e8edf4; color: #176dca; font-size: 12px; font-weight: 750; }
.v2-app-link svg, .v2-text-link svg { width: 15px; height: 15px; }
.v2-registry-link { color: #16805e; font-size: 10px; font-weight: 700; }
.v2-text-link { margin-top: 24px; color: #176dca; font-size: 13px; font-weight: 750; }

.v2-development {
  padding-block: 84px;
  background: #07182a;
  color: #f5f8fc;
}

.v2-development-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  align-items: center;
  gap: 72px;
}

.v2-development .v2-eyebrow { color: #9fc4ff; }
.v2-development h2 { max-width: 560px; margin-top: 14px; }
.v2-development-copy>p:not(.v2-eyebrow) { max-width: 510px; margin: 17px 0 24px; color: #c3d0df; font-size: 15px; line-height: 1.65; }

.v2-development-steps {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(220, 235, 255, .2);
  list-style: none;
}

.v2-development-steps li {
  display: grid;
  grid-template-columns: 36px 1fr 22px;
  align-items: center;
  gap: 12px;
  min-height: 54px;
  border-bottom: 1px solid rgba(220, 235, 255, .2);
}

.v2-development-steps li>span { color: #8fbaff; font-size: 10px; font-weight: 750; }
.v2-development-steps strong { font-size: 13px; font-weight: 650; }
.v2-development-steps svg { color: #8fbaff; font-size: 16px; }

.v2-how { background: #fff; }

.v2-how-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: start;
  gap: 76px;
}

.v2-how h2 { font-size: 38px; }
.v2-how-grid>div>p:last-child { max-width: 420px; color: var(--v2-muted); font-size: 14px; line-height: 1.65; }

.v2-how ol {
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--v2-line);
  list-style: none;
}

.v2-how li { display: grid; grid-template-columns: 42px 1fr; align-items: center; gap: 14px; min-height: 61px; border-bottom: 1px solid var(--v2-line); }
.v2-how li span { color: var(--v2-blue); font-size: 11px; font-weight: 800; }
.v2-how li strong { font-size: 14px; font-weight: 650; }

.v2-contact {
  padding-block: 76px;
  background: #eaf3ff;
}

.v2-contact-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 44px;
}

.v2-contact h2 { max-width: 700px; font-size: 40px; }
.v2-contact-inner>div:first-child>p:last-child { max-width: 570px; margin: 14px 0 0; color: #526b88; font-size: 14px; line-height: 1.6; }
.v2-contact-actions { display: grid; flex: 0 0 auto; justify-items: start; gap: 12px; }
.v2-contact-actions>a:not(.v2-button) { color: #345675; font-size: 13px; text-decoration: none; }
.v2-button-light { background: #102b49; color: #fff; }
.v2-button-light:hover { background: #174576; }

.v2-footer { padding: 42px 0 18px; background: #091d32; color: #f1f6fc; }

.v2-footer-main {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 34px;
  padding-bottom: 34px;
}

.v2-footer-main>div { display: grid; align-content: start; justify-items: start; gap: 11px; }
.v2-footer-main>div:first-child { display: block; }
.v2-footer-main>div:first-child p { max-width: 260px; margin: 14px 0 0; color: #aebfd1; font-size: 12px; line-height: 1.6; }
.v2-footer-main strong { margin-bottom: 3px; font-size: 12px; }
.v2-footer a { color: #b7c7d8; font-size: 12px; }

.v2-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 17px;
  border-top: 1px solid rgba(230, 240, 250, .16);
  color: #aebfd1;
  font-size: 10px;
}

.v2-footer-bottom a { font-size: inherit; }

.v2-page a:focus-visible,
.v2-page button:focus-visible {
  outline: 3px solid #7cb4ff;
  outline-offset: 3px;
}

@media (max-width: 1100px) {
  .v2-container { width: min(100% - 48px, 920px); }
  .v2-hero-grid { grid-template-columns: 1fr; gap: 36px; }
  .v2-hero-copy { max-width: 760px; }
  .v2-hero-visual { width: min(100%, 760px); justify-self: center; }
  .v2-proof-inner { flex-wrap: wrap; justify-content: flex-start; padding-block: 18px; }
  .v2-proof-inner p { width: 100%; max-width: none; }
  .v2-section-heading { align-items: start; }
  .v2-development-grid, .v2-how-grid { gap: 40px; }
}

@media (max-width: 760px) {
  .v2-container { width: calc(100% - 36px); }
  .v2-header-inner { min-height: 68px; gap: 12px; }
  .v2-header-cta { display: none; }
  .v2-menu-toggle { display: grid; width: 42px; aspect-ratio: 1; place-items: center; border: 1px solid var(--v2-line); border-radius: 7px; background: transparent; color: var(--v2-ink); font-size: 19px; }
  .v2-nav { position: absolute; top: 68px; right: 0; left: 0; display: none; align-items: stretch; gap: 0; padding: 10px 18px 18px; border-bottom: 1px solid var(--v2-line); background: #fff; }
  .v2-nav.is-open { display: grid; }
  .v2-nav a { padding: 12px 3px; border-bottom: 1px solid #e9eef4; }
  .v2-nav .v2-mobile-cta { display: block; margin-top: 10px; padding: 13px 16px; border: 0; border-radius: 6px; background: var(--v2-blue); color: #fff; text-align: center; }
  .v2-hero { padding: 62px 0 54px; }
  .v2-hero-grid { gap: 30px; }
  .v2-hero h1 { margin: 17px 0; font-size: 40px; }
  .v2-lead { font-size: 15px; }
  .v2-actions { gap: 8px; }
  .v2-button { min-height: 46px; padding-inline: 14px; font-size: 13px; }
  .v2-capabilities { margin-top: 18px; }
  .v2-hero-visual { padding: 15px 12px 11px; }
  .v2-visual-map { min-height: 310px; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-rows: 1fr 1.15fr 1fr 1fr; gap: 9px; }
  .v2-visual-lines { display: none; }
  .v2-visual-node { gap: 6px; padding: 9px 7px; }
  .v2-visual-node span { font-size: 10px; }
  .v2-visual-site { grid-column: 1; grid-row: 1; }
  .v2-visual-phone { grid-column: 2; grid-row: 1; }
  .v2-visual-core { grid-column: 1 / -1; grid-row: 2; width: min(100%, 190px); min-height: 100px; }
  .v2-visual-crm { grid-column: 1; grid-row: 3; }
  .v2-visual-automation { grid-column: 2; grid-row: 3; }
  .v2-visual-result { grid-column: 1 / -1; grid-row: 4; transform: none; }
  .v2-visual-footnote { font-size: 9px; text-align: left; }
  .v2-proof-inner { display: grid; grid-template-columns: 1fr; gap: 12px; padding-block: 20px; }
  .v2-proof-inner p { margin: 0 0 3px; }
  .v2-section { padding-block: 68px; }
  .v2-section-heading { display: block; margin-bottom: 25px; }
  .v2-section-heading h2, .v2-approach h2, .v2-development h2, .v2-how h2, .v2-contact h2 { font-size: 32px; }
  .v2-section-heading>p { margin-top: 13px; font-size: 13px; }
  .v2-service-grid { grid-template-columns: 1fr; }
  .v2-service-item { min-height: 0; padding: 20px; }
  .v2-service-item h3 { margin-top: 14px; font-size: 17px; }
  .v2-service-item p { font-size: 13px; }
  .v2-process-flow { grid-template-columns: 1fr; gap: 8px; padding: 17px; }
  .v2-flow-step { grid-template-columns: 42px 1fr; justify-items: start; align-items: center; gap: 12px; text-align: left; }
  .v2-flow-icon { width: 40px; font-size: 18px; }
  .v2-flow-step strong { max-width: none; font-size: 12px; }
  .v2-flow-arrow { display: none; }
  .v2-platform-feature { grid-template-columns: 42px 1fr 30px; gap: 12px; padding: 16px 12px; }
  .v2-platform-logo { width: 40px; font-size: 18px; }
  .v2-platform-feature h3 { font-size: 16px; }
  .v2-platform-feature p:not(.v2-eyebrow) { font-size: 11px; }
  .v2-platform-note { font-size: 10px; line-height: 1.5; }
  .v2-app-grid { grid-template-columns: 1fr; gap: 12px; }
  .v2-app-card { min-height: 0; padding: 16px; }
  .v2-development { padding-block: 64px; }
  .v2-development-grid, .v2-how-grid { grid-template-columns: 1fr; gap: 30px; }
  .v2-development-copy>p:not(.v2-eyebrow) { font-size: 14px; }
  .v2-development-steps li { min-height: 50px; }
  .v2-how-grid>div>p:last-child { font-size: 13px; }
  .v2-contact { padding-block: 58px; }
  .v2-contact-inner { display: grid; gap: 25px; }
  .v2-contact h2 { font-size: 34px; }
  .v2-contact-inner>div:first-child>p:last-child { font-size: 13px; }
  .v2-footer-main { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
  .v2-footer-main>div:first-child { grid-column: 1 / -1; }
  .v2-footer-bottom { flex-direction: column; gap: 8px; }
}

@media (max-width: 380px) {
  .v2-container { width: calc(100% - 32px); }
  .v2-hero h1 { font-size: 36px; }
  .v2-actions { align-items: stretch; flex-direction: column; }
  .v2-actions .v2-button { width: 100%; }
  .v2-visual-node span { font-size: 9px; }
  .v2-contact h2 { font-size: 30px; }
}

@media (prefers-reduced-motion: reduce) {
  .v2-page *, .v2-page *::before, .v2-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
</style>