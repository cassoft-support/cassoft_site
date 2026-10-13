<script setup lang="ts">
const form = reactive({
  name: '',
  company: '',
  contact: '',
  situation: '',
  details: ''
})

useSeoMeta({
  title: 'CRM без валидола — CAS-soft',
  description: 'Настроим CRM под процессы бизнеса, подключим интеграции, обучим команду и останемся рядом после запуска.'
})

const onboarding = [
  { title: 'Разберёмся', text: 'Изучим процессы, роли и точки, где сейчас теряются время и обращения.', icon: 'i-lucide-search-check' },
  { title: 'Настроим', text: 'Соберём понятные воронки, карточки, отчёты и рабочие сценарии.', icon: 'i-lucide-sliders-horizontal' },
  { title: 'Подстроим', text: 'Если возможностей системы не хватает, оценим интеграцию или разработку.', icon: 'i-lucide-workflow' },
  { title: 'Запустим', text: 'Проверим процессы, поможем с переносом данных и обучим команду.', icon: 'i-lucide-rocket' }
]

const services = [
  { title: 'Внедрение CRM', text: 'Подберём структуру системы под продажи, обслуживание и команду.', icon: 'i-lucide-panels-top-left' },
  { title: 'Аудит текущей CRM', text: 'Найдём, что мешает команде работать в системе, и определим приоритеты.', icon: 'i-lucide-scan-search' },
  { title: 'Автоматизация', text: 'Сократим повторяющиеся действия, настроим напоминания и контроль сроков.', icon: 'i-lucide-workflow' },
  { title: 'Интеграции', text: 'Свяжем CRM с сайтом, телефонией, мессенджерами и другими сервисами.', icon: 'i-lucide-waypoints' },
  { title: 'Миграция данных', text: 'Подготовим данные из таблиц или другой CRM к переносу и проверим структуру.', icon: 'i-lucide-database-zap' },
  { title: 'Доработка и разработка', text: 'Спроектируем недостающий модуль, приложение или отдельный сервис.', icon: 'i-lucide-code-xml' },
  { title: 'Обучение команды', text: 'Покажем сотрудникам рабочие сценарии на задачах их ролей.', icon: 'i-lucide-users-round' },
  { title: 'Поддержка', text: 'Поможем развивать настроенную систему по мере изменения процессов.', icon: 'i-lucide-life-buoy' }
]

const problems = [
  'Сотрудники продолжают вести учёт в таблицах и мессенджерах.',
  'Воронки и статусы не совпадают с реальным процессом продаж.',
  'Заявки и данные приходится переносить вручную.',
  'Руководителю сложно увидеть актуальную картину по команде.',
  'Изменения в CRM превращаются в отдельный технический проект.',
  'После запуска непонятно, к кому обратиться за помощью.'
]

const outcomes = [
  ['Нужную информацию приходится искать', 'Данные собраны в понятной структуре'],
  ['Каждый сотрудник ведёт учёт по-своему', 'У команды есть общий рабочий процесс'],
  ['Обращения теряются в почте и чатах', 'Заявки попадают в систему без ручного переноса'],
  ['О сроках и задачах легко забыть', 'Напоминания помогают контролировать работу'],
  ['Отчёты собирают вручную', 'Руководитель видит данные из процесса'],
  ['Любая доработка вызывает стресс', 'Есть понятный следующий шаг и поддержка']
]

const journey = [
  'Поговорим о задаче',
  'Разберём текущий процесс',
  'Спроектируем решение',
  'Настроим и проверим',
  'Обучим команду',
  'Останемся рядом'
]

const solutions = [
  { title: 'CRM уже есть, но не работает', text: 'Проверим текущие процессы и покажем, что можно упростить без полного перезапуска.', icon: 'i-lucide-stethoscope', link: '#contact-form', action: 'Проверить мою CRM' },
  { title: 'Не знаете, какую CRM выбрать', text: 'Начнём с задач команды и требований, а не с названия платформы.', icon: 'i-lucide-compass', link: '#platforms', action: 'Подобрать подходящий вариант' },
  { title: 'Нужна CRM с нуля', text: 'Поможем пройти путь от описания процессов до запуска и обучения сотрудников.', icon: 'i-lucide-panels-top-left', link: '#help', action: 'Обсудить внедрение' }
]

const products = [
  {
    title: 'BROKCI-PRO',
    audience: 'Для агентств недвижимости',
    problem: 'Работа с объектами и объявлениями',
    text: 'Приложение для работы с объектами недвижимости и подбора вариантов.',
    status: 'Доступно в маркетплейсе',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/94c/goq38nqjmvz7s4fqh8km7ohsspe9oxgu/250_250_1/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.brokci/'
  },
  {
    title: 'ЦИАН мессенджер',
    audience: 'Для команд недвижимости',
    problem: 'Обращения из чата ЦИАН',
    text: 'Интеграция чата ЦИАН с Битрикс24 для работы с обращениями.',
    status: 'Доступно в маркетплейсе',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/3ba/t3fw8bhnknlcicviei4zi8gunz6k8oyp/250_250_1/3261.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.cian_messager/'
  },
  {
    title: 'Распределение лидов и сделок',
    audience: 'Для отделов продаж',
    problem: 'Распределение входящих обращений',
    text: 'Приложение для распределения лидов и сделок с учётом эффективности сотрудников.',
    status: 'Доступно в маркетплейсе',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/af8/xvj5z36qkev680tf5uikgozguts018qf/250_250_1/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2%20(1).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.distribution/'
  }
]

// Отправка заявок будет подключена к API при запуске проекта.
// До настройки endpoint форма работает только как интерфейс.
const requestNotice = ref('')
function submitRequest() {
  requestNotice.value = 'Форма пока работает в демонстрационном режиме. Заявка не отправлена. Для связи используйте контакты ниже.'
}

</script>

<template>
  <div class="v3-page">
    <CSHeader />
    <main id="top">
      <section class="v3-hero">
        <div class="v3-container v3-hero-grid">
          <div class="v3-hero-copy">
            <p class="v3-eyebrow">CRM · автоматизация · интеграции · разработка</p>
            <h1>CRM <span>без валидола</span></h1>
            <p class="v3-lead">Настроим систему под реальные процессы вашего бизнеса. Вам не придётся месяцами разбираться в CRM и бороться с ней в одиночку.</p>
            <p class="v3-hero-subcopy">Вы рассказываете, как работает команда. Мы превращаем это в понятный рабочий процесс.</p>
            <div class="v3-actions">
              <a class="v3-button v3-button-primary" href="#contact-form">Настроить CRM без боли <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
              <a class="v3-button v3-button-secondary" href="#solutions">Разобраться с моей CRM</a>
            </div>
            <ul class="v3-capabilities" aria-label="Направления работы">
              <li>Внедрение и настройка</li><li>Автоматизация</li><li>Интеграции</li><li>Разработка</li>
            </ul>
          </div>
          <div class="v3-cockpit" role="img" aria-label="Схема CRM: заявки, этапы продаж и автоматические действия собраны в понятной панели">
            <div class="v3-cockpit-top"><span><i /> Пилот включён</span><span>ПАНЕЛЬ РАБОЧЕГО ПРОЦЕССА</span></div>
            <div class="v3-cockpit-stats"><div><small>Входящие заявки</small><strong>В одном месте</strong><span><UIcon name="i-lucide-inbox" aria-hidden="true" /></span></div><div><small>Следующий шаг</small><strong>Понятен команде</strong><span><UIcon name="i-lucide-route" aria-hidden="true" /></span></div><div><small>Рутинные действия</small><strong>Автоматизированы</strong><span><UIcon name="i-lucide-workflow" aria-hidden="true" /></span></div></div>
            <div class="v3-cockpit-route"><span>БИЗНЕС</span><i /><strong>CAS-soft — пилот</strong><i /><span>НАСТРОЕННАЯ CRM</span></div>
            <p>Иллюстрация подхода, не интерфейс готового продукта.</p>
          </div>
        </div>
      </section>

      <section id="help" class="v3-section v3-problem">
        <div class="v3-container">
          <div class="v3-section-heading"><div><p class="v3-eyebrow">Знакомая ситуация?</p><h2>CRM сама себя не настроит</h2></div><p>Вы хотели навести порядок, а получили ещё один проект: настройки, данные, интеграции и обучение команды.</p></div>
          <div class="v3-problem-grid"><ul><li v-for="problem in problems" :key="problem"><UIcon name="i-lucide-circle-alert" aria-hidden="true" />{{ problem }}</li></ul><div class="v3-problem-note"><span>Наша задача</span><strong>Не просто подключить CRM, а довести её до рабочего состояния.</strong><a href="#contact-form">Найти, что мешает <UIcon name="i-lucide-arrow-right" aria-hidden="true" /></a></div></div>
        </div>
      </section>

      <section class="v3-section v3-takeover">
        <div class="v3-container">
          <div class="v3-section-heading"><div><p class="v3-eyebrow">Мы берём внедрение на себя</p><h2>Вам не нужно становиться специалистом по CRM</h2></div><p>Разберёмся в работе бизнеса, спроектируем модель и настроим систему, которой команда сможет пользоваться каждый день.</p></div>
          <div class="v3-onboarding-grid"><article v-for="(item, index) in onboarding" :key="item.title"><span class="v3-card-index">0{{ index + 1 }}</span><span class="v3-icon"><UIcon :name="item.icon" aria-hidden="true" /></span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
        </div>
      </section>

      <section class="v3-pilot">
        <div class="v3-container v3-pilot-inner"><div><p class="v3-eyebrow">Ваш бизнес задаёт маршрут</p><h2>CRM — это самолёт. Важно, кто за штурвалом</h2><p>Система может быть сложной, но её сложность не должна становиться вашей проблемой. Мы знаем маршрут и помогаем команде спокойно добраться до цели.</p><strong>Вам не нужно изучать приборную панель. Вам нужно спокойно лететь.</strong></div><div class="v3-flight-map" aria-label="Бизнес задаёт маршрут, CAS-soft настраивает CRM для понятной работы команды"><div><span>01</span><strong>Маршрут</strong><small>цели и процессы бизнеса</small></div><div class="v3-flight-center"><span><UIcon name="i-lucide-navigation" aria-hidden="true" /></span><strong>Пилот</strong><small>CAS-soft</small></div><div><span>03</span><strong>Пункт назначения</strong><small>понятная работа команды</small></div></div></div>
      </section>

      <section id="services" class="v3-section v3-services">
        <div class="v3-container"><div class="v3-section-heading"><div><p class="v3-eyebrow">От настройки до поддержки</p><h2>Настроим всё, что нужно для работы</h2></div><p>Объясняем пользу каждого шага простым языком. Если достаточно настройки, не предлагаем лишнюю разработку.</p></div><div class="v3-service-grid"><article v-for="(service, index) in services" :key="service.title"><span class="v3-service-count">0{{ index + 1 }}</span><span class="v3-icon"><UIcon :name="service.icon" aria-hidden="true" /></span><h3>{{ service.title }}</h3><p>{{ service.text }}</p></article></div></div>
      </section>

      <section class="v3-section v3-outcomes">
        <div class="v3-container"><div class="v3-section-heading"><div><p class="v3-eyebrow">Работа не заканчивается запуском</p><h2>Не оставляем вас один на один с CRM</h2></div><p>Важно не просто включить систему, а сделать её частью ежедневной работы компании.</p></div><div class="v3-outcome-table"><div class="v3-outcome-head"><span>До работы с CAS-soft</span><span>После настройки</span></div><div v-for="(row, index) in outcomes" :key="row[0]" class="v3-outcome-row"><span><i>−</i>{{ row[0] }}</span><span><i>+</i>{{ row[1] }}</span></div></div></div>
      </section>

      <section class="v3-section v3-journey">
        <div class="v3-container v3-journey-grid"><div><p class="v3-eyebrow">Понятные этапы</p><h2>От «у нас всё сложно» до «наконец-то работает»</h2><p>Согласуем план, покажем результат каждого этапа и поможем команде перейти на новый процесс.</p></div><ol><li v-for="(step, index) in journey" :key="step"><span>0{{ index + 1 }}</span><strong>{{ step }}</strong><UIcon name="i-lucide-arrow-down-right" aria-hidden="true" /></li></ol></div>
      </section>

      <section id="solutions" class="v3-section v3-solutions">
        <div class="v3-container"><div class="v3-section-heading"><div><p class="v3-eyebrow">С чего начнём?</p><h2>Решение под вашу ситуацию</h2></div><p>CRM уже есть, только выбираете систему или хотите запустить всё с нуля? Начнём с того, что происходит сейчас.</p></div><div class="v3-solution-grid"><article v-for="solution in solutions" :key="solution.title"><span class="v3-icon"><UIcon :name="solution.icon" aria-hidden="true" /></span><h3>{{ solution.title }}</h3><p>{{ solution.text }}</p><a :href="solution.link">{{ solution.action }} <UIcon name="i-lucide-arrow-right" aria-hidden="true" /></a></article></div></div>
      </section>

      <section id="platforms" class="v3-section v3-platforms">
        <div class="v3-container v3-platform-inner"><div><p class="v3-eyebrow">Сначала процессы, потом платформа</p><h2>Не заставляем бизнес подстраиваться под CRM</h2><p>Подбираем подход под требования команды. Если хватает стандартной настройки — не предлагаем лишнюю разработку. Если система ограничивает процесс — оцениваем интеграцию или отдельное решение.</p></div><div class="v3-platform-confirmed"><span class="v3-icon"><UIcon name="i-lucide-panels-top-left" aria-hidden="true" /></span><div><small>Подтверждённое направление</small><strong>Битрикс24</strong><p>Внедрение, настройка и приложения в маркетплейсе.</p></div><a href="https://cassoft.ru/" target="_blank" rel="noopener noreferrer" aria-label="Сайт CAS-soft о Битрикс24"><UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a></div><p class="v3-platform-note">Другие платформы показываем только после подтверждения предложения и компетенций.</p></div>
      </section>

      <section class="v3-development">
        <div class="v3-container v3-development-inner"><div><p class="v3-eyebrow">Нестандартная задача</p><h2>Если CRM не умеет — разработаем</h2><p>Не все задачи решаются настройками. Спроектируем нужный модуль, интеграцию, веб-сервис или приложение и подключим к рабочему процессу.</p><a class="v3-button v3-button-primary" href="#contact-form">Обсудить нестандартную задачу <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a></div><div class="v3-dev-visual"><div><span><UIcon name="i-lucide-panels-top-left" aria-hidden="true" /></span><strong>CRM</strong></div><UIcon class="v3-dev-link" name="i-lucide-arrow-right" aria-hidden="true" /><div><span><UIcon name="i-lucide-code-xml" aria-hidden="true" /></span><strong>Нужная функция</strong></div><UIcon class="v3-dev-link" name="i-lucide-arrow-right" aria-hidden="true" /><div><span><UIcon name="i-lucide-circle-check" aria-hidden="true" /></span><strong>Рабочий процесс</strong></div></div></div>
      </section>

      <section id="products" class="v3-section v3-products">
        <div class="v3-container"><div class="v3-section-heading"><div><p class="v3-eyebrow">Продукты и приложения</p><h2>Какую задачу решает продукт?</h2></div><p>Существующие приложения CAS-soft для Битрикс24. Их статус и платформа указаны для каждой карточки.</p></div><div class="v3-product-grid"><article v-for="product in products" :key="product.title" class="v3-product-card"><div class="v3-product-top"><img :src="product.image" alt="" width="58" height="58" loading="lazy" decoding="async"><span>{{ product.status }}</span></div><small>{{ product.audience }}</small><h3>{{ product.title }}</h3><p>{{ product.text }}</p><dl><div><dt>Задача</dt><dd>{{ product.problem }}</dd></div><div><dt>Платформа</dt><dd>Битрикс24</dd></div></dl><a :href="product.href" target="_blank" rel="noopener noreferrer">Открыть приложение <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a></article></div><a class="v3-all-products" href="https://www.bitrix24.ru/apps/partner/1808299/" target="_blank" rel="noopener noreferrer">Все приложения CAS-soft <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a></div>
      </section>

      <section class="v3-section v3-cases">
        <div class="v3-container v3-cases-inner"><div><p class="v3-eyebrow">Результаты работы</p><h2>Что изменилось после внедрения</h2></div><div><p>Публикуем кейсы только с согласованными данными и подтверждёнными результатами. Материалы для этого раздела пока не предоставлены.</p><a href="#contact-form">Обсудить вашу задачу <UIcon name="i-lucide-arrow-right" aria-hidden="true" /></a></div></div>
      </section>

      <section id="contacts" class="v3-contact">
        <div class="v3-container v3-contact-grid"><div class="v3-contact-copy"><p class="v3-eyebrow">Первый шаг — понять ситуацию</p><h2>Хотите CRM без валидола?</h2><p>Расскажите, что сейчас не работает, что выбираете или какую систему хотите запустить. Поможем определить следующий шаг.</p><div class="v3-contact-details"><a href="mailto:info@cassoft.ru">info@cassoft.ru</a><a href="tel:+79330158058">+7 (933) 015-80-58</a></div></div><form id="contact-form" class="v3-form" @submit.prevent="submitRequest"><h3>Получить план действий</h3><div class="v3-form-row"><label>Имя<input v-model="form.name" name="name" autocomplete="name" required></label><label>Компания <span>необязательно</span><input v-model="form.company" name="company" autocomplete="organization"></label></div><label>Телефон или email<input v-model="form.contact" name="contact" autocomplete="email" required></label><label>Что сейчас происходит<textarea v-model="form.details" name="details" rows="3" required></textarea></label><label>Ваша ситуация<select v-model="form.situation" name="situation"><option value="">Пока не знаю, нужна консультация</option><option>CRM уже есть, но не работает</option><option>Выбираем CRM</option><option>Нужна настройка с нуля</option><option>Нужна интеграция</option><option>Нужна доработка или разработка</option></select></label><button class="v3-button v3-button-primary" type="submit">Получить план действий <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></button><p v-if="requestNotice" role="status" aria-live="polite">{{ requestNotice }}</p></form></div>
      </section>
    </main>

    <CSFooter />
  </div>
</template>

<style scoped>
.v3-page {
  --v3-blue: #2f80ff;
  --v3-blue-dark: #1769e8;
  --v3-blue-soft: #eaf3ff;
  --v3-ink: #10243e;
  --v3-muted: #64748b;
  --v3-line: #dce5ef;
  --v3-paper: #f6f9fc;
  color: var(--v3-ink);
  background: var(--v3-paper);
  font-family: Inter, "Avenir Next", sans-serif;
}

.v3-page *, .v3-page *::before, .v3-page *::after { box-sizing: border-box; }
.v3-container { width: min(1280px, calc(100% - 64px)); margin-inline: auto; }
.v3-header { position: sticky; z-index: 20; top: 0; border-bottom: 1px solid rgba(16, 36, 62, .08); background: rgba(255, 255, 255, .96); }
.v3-header-inner { display: flex; min-height: 76px; align-items: center; justify-content: space-between; gap: 24px; }
.v3-brand { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 10px; color: var(--v3-ink); font-size: 19px; font-weight: 800; text-decoration: none; }
.v3-brand-mark { display: grid; width: 34px; aspect-ratio: 1; place-items: center; border-radius: 8px; background: var(--v3-blue); color: #fff; font-size: 18px; }
.v3-nav { display: flex; align-items: center; gap: 23px; }
.v3-nav a, .v3-footer a { color: inherit; font-size: 13px; text-decoration: none; transition: color .18s ease; }
.v3-nav a:hover, .v3-footer a:hover { color: var(--v3-blue-dark); }
.v3-button { display: inline-flex; min-height: 48px; align-items: center; justify-content: center; gap: 10px; padding: 0 18px; border: 1px solid transparent; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; transition: background .18s ease, border-color .18s ease, color .18s ease; }
.v3-button svg { width: 17px; height: 17px; }
.v3-button-primary { background: var(--v3-blue); color: #fff; }
.v3-button-primary:hover { background: var(--v3-blue-dark); }
.v3-button-secondary { border-color: #bdd3ef; background: #fff; color: var(--v3-ink); }
.v3-button-secondary:hover { border-color: var(--v3-blue); color: var(--v3-blue-dark); }
.v3-menu-toggle, .v3-mobile-cta { display: none; }
.v3-hero { padding: 94px 0 82px; background: radial-gradient(ellipse at 82% 45%, rgba(234, 243, 255, .9), transparent 40%), #fff; }
.v3-hero-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); align-items: center; gap: 54px; }
.v3-eyebrow { margin: 0; color: #4f729d; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.v3-hero h1, .v3-section h2, .v3-pilot h2, .v3-platforms h2, .v3-development h2, .v3-contact h2 { font-family: Manrope, Inter, sans-serif; font-weight: 750; line-height: 1.08; }
.v3-hero h1 { max-width: 610px; margin: 20px 0; font-size: 68px; }
.v3-hero h1 span { color: var(--v3-blue); }
.v3-lead { max-width: 560px; margin: 0; color: #526b88; font-size: 18px; line-height: 1.6; }
.v3-hero-subcopy { max-width: 520px; margin: 13px 0 0; color: #526b88; font-size: 14px; line-height: 1.6; }
.v3-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.v3-capabilities { display: flex; flex-wrap: wrap; gap: 8px; margin: 23px 0 0; padding: 0; list-style: none; }
.v3-capabilities li { padding: 6px 9px; border: 1px solid #e1e9f2; border-radius: 5px; background: rgba(255,255,255,.75); color: #58708e; font-size: 11px; font-weight: 650; }
.v3-cockpit { min-width: 0; padding: 21px; border: 1px solid #dce6f1; border-radius: 12px; background: rgba(255,255,255,.9); box-shadow: 0 22px 56px rgba(32,75,125,.1); }
.v3-cockpit-top { display: flex; justify-content: space-between; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid #e8eef5; color: #788ba2; font-size: 9px; font-weight: 750; }
.v3-cockpit-top span:first-child { display: inline-flex; align-items: center; gap: 8px; color: var(--v3-ink); font-size: 13px; }
.v3-cockpit-top i { width: 8px; aspect-ratio: 1; border-radius: 50%; background: #20a77a; }
.v3-cockpit-stats { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; padding: 28px 0; }
.v3-cockpit-stats>div { display: grid; min-height: 126px; align-content: space-between; gap: 12px; padding: 13px; border: 1px solid #e1e9f2; border-radius: 8px; background: #fbfdff; }
.v3-cockpit-stats small { color: var(--v3-muted); font-size: 10px; }
.v3-cockpit-stats strong { font-size: 12px; line-height: 1.35; }
.v3-cockpit-stats span { display: grid; width: 32px; aspect-ratio: 1; place-items: center; border-radius: 7px; background: var(--v3-blue-soft); color: var(--v3-blue); }
.v3-cockpit-route { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 16px; border-radius: 8px; background: #eef5ff; color: #4f729d; font-size: 9px; font-weight: 800; }
.v3-cockpit-route i { height: 1px; flex: 1; background: #9ebde4; }
.v3-cockpit-route strong { color: #1b68bd; font-size: 11px; text-align: center; }
.v3-cockpit>p { margin: 13px 0 0; color: #7d8ea2; font-size: 10px; text-align: right; }
.v3-section { padding-block: 88px; }
.v3-section-heading { display: flex; align-items: end; justify-content: space-between; gap: 36px; margin-bottom: 34px; }
.v3-section h2, .v3-pilot h2, .v3-platforms h2, .v3-development h2, .v3-contact h2 { max-width: 700px; margin: 12px 0 0; font-size: 42px; }
.v3-section-heading>p { max-width: 450px; margin: 0; color: var(--v3-muted); font-size: 14px; line-height: 1.65; }
.v3-problem { background: #fff; }
.v3-problem-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 40px; align-items: stretch; }
.v3-problem-grid ul { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; margin: 0; padding: 0; list-style: none; }
.v3-problem-grid li { display: flex; align-items: start; gap: 11px; padding: 16px 0; border-bottom: 1px solid var(--v3-line); color: #3e5875; font-size: 13px; line-height: 1.5; }
.v3-problem-grid li svg { flex: 0 0 auto; margin-top: 1px; color: #d28338; }
.v3-problem-note { display: grid; align-content: center; gap: 15px; padding: 27px; border-radius: 10px; background: #102b49; color: #fff; }
.v3-problem-note>span { color: #9fc4ff; font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.v3-problem-note strong { font-family: Manrope, Inter, sans-serif; font-size: 23px; line-height: 1.28; }
.v3-problem-note a, .v3-solution-grid a, .v3-cases a { display: inline-flex; align-items: center; gap: 8px; color: #8ebcff; font-size: 12px; font-weight: 750; text-decoration: none; }
.v3-takeover { background: var(--v3-paper); }
.v3-onboarding-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--v3-line); border-left: 1px solid var(--v3-line); }
.v3-onboarding-grid article { position: relative; min-height: 220px; padding: 24px; border-right: 1px solid var(--v3-line); border-bottom: 1px solid var(--v3-line); background: rgba(255,255,255,.7); }
.v3-card-index, .v3-service-count { position: absolute; top: 22px; right: 22px; color: #8193a8; font-size: 10px; font-weight: 750; }
.v3-icon { display: grid; width: 42px; aspect-ratio: 1; place-items: center; border-radius: 8px; background: var(--v3-blue-soft); color: #2879e8; font-size: 20px; }
.v3-onboarding-grid h3, .v3-service-grid h3, .v3-solution-grid h3 { margin: 17px 0 8px; font-size: 17px; }
.v3-onboarding-grid p, .v3-service-grid p, .v3-solution-grid p { margin: 0; color: var(--v3-muted); font-size: 12px; line-height: 1.6; }
.v3-pilot { padding-block: 78px; background: #07182a; color: #f5f8fc; }
.v3-pilot-inner { display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 68px; }
.v3-pilot .v3-eyebrow, .v3-development .v3-eyebrow { color: #9fc4ff; }
.v3-pilot h2 { font-size: 39px; }
.v3-pilot-inner>div:first-child>p:not(.v3-eyebrow) { max-width: 580px; margin: 18px 0; color: #c3d0df; font-size: 14px; line-height: 1.7; }
.v3-pilot-inner>div:first-child>strong { color: #b8d3fa; font-size: 13px; }
.v3-flight-map { display: grid; grid-template-columns: 1fr 104px 1fr; align-items: center; gap: 12px; }
.v3-flight-map>div { display: grid; min-height: 132px; align-content: center; gap: 8px; padding: 16px; border: 1px solid rgba(220,235,255,.2); border-radius: 9px; background: rgba(255,255,255,.04); }
.v3-flight-map>div>span { color: #8fbaff; font-size: 11px; }
.v3-flight-map strong { font-size: 13px; }
.v3-flight-map small { color: #aebfd1; font-size: 10px; line-height: 1.4; }
.v3-flight-center { justify-items: center; text-align: center; }
.v3-flight-center>span { display: grid; width: 42px; aspect-ratio: 1; place-items: center; border-radius: 50%; background: #153d69; color: #9fc4ff; font-size: 20px; }
.v3-services { background: #fff; }
.v3-service-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--v3-line); border-left: 1px solid var(--v3-line); }
.v3-service-grid article { position: relative; min-height: 205px; padding: 22px; border-right: 1px solid var(--v3-line); border-bottom: 1px solid var(--v3-line); background: #fff; }
.v3-service-grid h3 { font-size: 15px; }
.v3-service-grid p { font-size: 11px; }
.v3-outcomes { background: var(--v3-paper); }
.v3-outcome-table { border: 1px solid var(--v3-line); border-radius: 9px; overflow: hidden; background: #fff; }
.v3-outcome-head, .v3-outcome-row { display: grid; grid-template-columns: 1fr 1fr; }
.v3-outcome-head { background: #eaf3ff; color: #385d86; font-size: 11px; font-weight: 800; }
.v3-outcome-head span, .v3-outcome-row>span { padding: 13px 18px; }
.v3-outcome-row { border-top: 1px solid #e8edf4; color: #586e86; font-size: 12px; line-height: 1.5; }
.v3-outcome-row>span+span { border-left: 1px solid #e8edf4; color: #294d73; }
.v3-outcome-row i { display: inline-grid; width: 20px; aspect-ratio: 1; place-items: center; margin-right: 9px; border-radius: 50%; background: #eef1f5; color: #728399; font-style: normal; font-weight: 800; }
.v3-outcome-row>span+span i { background: #e5f5ee; color: #16805e; }
.v3-journey { background: #fff; }
.v3-journey-grid { display: grid; grid-template-columns: .9fr 1.1fr; align-items: start; gap: 76px; }
.v3-journey-grid>div>p:last-child { max-width: 440px; color: var(--v3-muted); font-size: 14px; line-height: 1.65; }
.v3-journey ol { margin: 0; padding: 0; border-top: 1px solid var(--v3-line); list-style: none; }
.v3-journey li { display: grid; grid-template-columns: 42px 1fr 22px; align-items: center; gap: 12px; min-height: 58px; border-bottom: 1px solid var(--v3-line); }
.v3-journey li span { color: var(--v3-blue); font-size: 11px; font-weight: 800; }
.v3-journey li strong { font-size: 13px; font-weight: 650; }
.v3-journey li svg { color: #83a6d0; }
.v3-solutions { background: var(--v3-paper); }
.v3-solution-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 15px; }
.v3-solution-grid article { display: flex; min-height: 250px; flex-direction: column; align-items: start; padding: 23px; border: 1px solid var(--v3-line); border-radius: 9px; background: #fff; }
.v3-solution-grid h3 { font-size: 17px; line-height: 1.35; }
.v3-solution-grid p { margin-bottom: 19px; }
.v3-solution-grid a { margin-top: auto; color: #176dca; }
.v3-platforms { background: #fff; }
.v3-platform-inner { display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 22px 56px; }
.v3-platforms h2 { font-size: 38px; }
.v3-platform-inner>div:first-child>p:last-child { max-width: 590px; color: var(--v3-muted); font-size: 13px; line-height: 1.7; }
.v3-platform-confirmed { display: grid; grid-template-columns: 48px 1fr 34px; align-items: center; gap: 15px; padding: 20px; border: 1px solid var(--v3-line); border-radius: 9px; background: var(--v3-paper); }
.v3-platform-confirmed>.v3-icon { width: 46px; }
.v3-platform-confirmed>div { display: grid; gap: 4px; }
.v3-platform-confirmed small { color: #4f729d; font-size: 9px; font-weight: 800; text-transform: uppercase; }
.v3-platform-confirmed strong { font-size: 16px; }
.v3-platform-confirmed p { margin: 0; color: var(--v3-muted); font-size: 10px; line-height: 1.5; }
.v3-platform-confirmed>a { display: grid; width: 32px; aspect-ratio: 1; place-items: center; border: 1px solid #cfdeee; border-radius: 7px; color: var(--v3-blue); }
.v3-platform-note { grid-column: 2; margin: -10px 0 0; color: #788ba2; font-size: 10px; line-height: 1.5; }
.v3-development { padding-block: 78px; background: #102b49; color: #f5f8fc; }
.v3-development-inner { display: grid; grid-template-columns: .8fr 1.2fr; align-items: center; gap: 60px; }
.v3-development h2 { font-size: 40px; }
.v3-development-inner>div:first-child>p:not(.v3-eyebrow) { margin: 18px 0 24px; color: #c3d0df; font-size: 14px; line-height: 1.7; }
.v3-dev-visual { display: grid; grid-template-columns: 1fr 24px 1fr 24px 1fr; align-items: center; gap: 9px; }
.v3-dev-visual>div { display: grid; min-height: 135px; align-content: center; justify-items: center; gap: 12px; padding: 12px; border: 1px solid rgba(220,235,255,.2); border-radius: 8px; background: rgba(255,255,255,.04); text-align: center; }
.v3-dev-visual>div>span { display: grid; width: 42px; aspect-ratio: 1; place-items: center; border-radius: 9px; background: #173b63; color: #9fc4ff; font-size: 20px; }
.v3-dev-visual strong { font-size: 11px; }
.v3-dev-link { color: #8fbaff; }
.v3-products { background: var(--v3-paper); }
.v3-product-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 15px; }
.v3-product-card { display: flex; min-width: 0; min-height: 360px; flex-direction: column; gap: 10px; padding: 19px; border: 1px solid var(--v3-line); border-radius: 9px; background: #fff; }
.v3-product-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.v3-product-top img { width: 52px; height: 52px; border: 1px solid #e7edf5; border-radius: 8px; object-fit: contain; }
.v3-product-top span { padding: 5px 7px; border-radius: 4px; background: #e5f5ee; color: #16724f; font-size: 9px; font-weight: 750; }
.v3-product-card>small { margin-top: 7px; color: #4f729d; font-size: 10px; font-weight: 700; }
.v3-product-card h3 { margin: 0; font-size: 16px; line-height: 1.35; }
.v3-product-card>p { margin: 0; color: var(--v3-muted); font-size: 11px; line-height: 1.55; }
.v3-product-card dl { display: grid; gap: 7px; margin: 2px 0 0; }
.v3-product-card dl div { display: grid; grid-template-columns: 65px 1fr; gap: 7px; }
.v3-product-card dt { color: #7b8ea3; font-size: 9px; }
.v3-product-card dd { margin: 0; color: #3e5875; font-size: 10px; }
.v3-product-card>a, .v3-all-products { display: inline-flex; align-items: center; justify-content: space-between; gap: 8px; color: #176dca; font-size: 11px; font-weight: 750; text-decoration: none; }
.v3-product-card>a { margin-top: auto; padding-top: 12px; border-top: 1px solid #e8edf4; }
.v3-all-products { justify-content: start; margin-top: 22px; font-size: 12px; }
.v3-cases { background: #fff; }
.v3-cases-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 55px; }
.v3-cases-inner>div:last-child { padding: 22px; border-left: 2px solid #b9d4f5; }
.v3-cases-inner>div:last-child p { margin: 0 0 13px; color: var(--v3-muted); font-size: 12px; line-height: 1.6; }
.v3-cases a { color: #176dca; }
.v3-contact { padding-block: 76px; background: #eaf3ff; }
.v3-contact-grid { display: grid; grid-template-columns: .9fr 1.1fr; align-items: start; gap: 60px; }
.v3-contact h2 { font-size: 42px; }
.v3-contact-copy>p:not(.v3-eyebrow) { max-width: 520px; color: #526b88; font-size: 14px; line-height: 1.65; }
.v3-contact-details { display: grid; gap: 10px; margin-top: 25px; }
.v3-contact-details a { color: #345675; font-size: 13px; text-decoration: none; }
.v3-form { display: grid; gap: 14px; padding: 24px; border: 1px solid #d2e2f5; border-radius: 9px; background: #fff; }
.v3-form h3 { margin: 0 0 2px; font-size: 18px; }
.v3-form label { display: grid; gap: 6px; color: #405a76; font-size: 11px; font-weight: 700; }
.v3-form label>span { display: inline; color: #8a9aac; font-size: 9px; font-weight: 500; }
.v3-form input, .v3-form textarea, .v3-form select { width: 100%; min-height: 42px; padding: 10px 11px; border: 1px solid #d8e2ed; border-radius: 6px; background: #fff; color: var(--v3-ink); font: inherit; font-size: 12px; }
.v3-form textarea { min-height: 88px; resize: vertical; }
.v3-form input:focus, .v3-form textarea:focus, .v3-form select:focus { border-color: var(--v3-blue); outline: 2px solid rgba(47,128,255,.18); }
.v3-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.v3-form button { justify-self: start; margin-top: 3px; cursor: pointer; }
.v3-footer { padding: 40px 0 17px; background: #091d32; color: #f1f6fc; }
.v3-footer-main { display: grid; grid-template-columns: 1.35fr repeat(3,1fr); gap: 30px; padding-bottom: 30px; }
.v3-footer-main>div { display: grid; align-content: start; justify-items: start; gap: 11px; }
.v3-footer-main>div:first-child { display: block; }
.v3-footer-main>div:first-child p { max-width: 250px; margin: 13px 0 0; color: #aebfd1; font-size: 11px; line-height: 1.6; }
.v3-footer-main strong { margin-bottom: 3px; font-size: 11px; }
.v3-footer a { color: #b7c7d8; font-size: 11px; }
.v3-footer-bottom { display: flex; justify-content: space-between; gap: 18px; padding-top: 16px; border-top: 1px solid rgba(230,240,250,.16); color: #aebfd1; font-size: 9px; }
.v3-footer-bottom a { font-size: inherit; }
.v3-page a:focus-visible, .v3-page button:focus-visible { outline: 3px solid #7cb4ff; outline-offset: 3px; }

@media (max-width: 1100px) {
  .v3-container { width: min(100% - 48px, 920px); }
  .v3-hero-grid { grid-template-columns: 1fr; gap: 34px; }
  .v3-hero-copy { max-width: 760px; }
  .v3-cockpit { width: min(100%,760px); justify-self: center; }
  .v3-onboarding-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .v3-service-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .v3-pilot-inner, .v3-journey-grid, .v3-development-inner, .v3-contact-grid { gap: 38px; }
}

@media (max-width: 760px) {
  .v3-container { width: calc(100% - 36px); }
  .v3-header-inner { min-height: 68px; gap: 12px; }
  .v3-header-cta { display: none; }
  .v3-menu-toggle { display: grid; width: 42px; aspect-ratio: 1; place-items: center; border: 1px solid var(--v3-line); border-radius: 7px; background: transparent; color: var(--v3-ink); font-size: 19px; }
  .v3-nav { position: absolute; top: 68px; right: 0; left: 0; display: none; align-items: stretch; gap: 0; padding: 10px 18px 18px; border-bottom: 1px solid var(--v3-line); background: #fff; }
  .v3-nav.is-open { display: grid; }
  .v3-nav a { padding: 12px 3px; border-bottom: 1px solid #e9eef4; }
  .v3-nav .v3-mobile-cta { display: block; margin-top: 10px; padding: 13px 16px; border: 0; border-radius: 6px; background: var(--v3-blue); color: #fff; text-align: center; }
  .v3-hero { padding: 59px 0 52px; }
  .v3-hero h1 { margin: 17px 0; font-size: 48px; }
  .v3-lead { font-size: 15px; }
  .v3-hero-subcopy { font-size: 13px; }
  .v3-actions { gap: 8px; }
  .v3-button { min-height: 46px; padding-inline: 14px; font-size: 12px; }
  .v3-cockpit { padding: 15px 12px; }
  .v3-cockpit-top { font-size: 8px; }
  .v3-cockpit-top span:first-child { font-size: 11px; }
  .v3-cockpit-stats { gap: 6px; padding: 18px 0; }
  .v3-cockpit-stats>div { min-height: 112px; gap: 8px; padding: 9px 7px; }
  .v3-cockpit-stats small { font-size: 9px; }
  .v3-cockpit-stats strong { font-size: 10px; }
  .v3-cockpit-route { gap: 7px; padding: 12px 9px; font-size: 8px; }
  .v3-cockpit-route strong { font-size: 9px; }
  .v3-section { padding-block: 64px; }
  .v3-section-heading { display: block; margin-bottom: 25px; }
  .v3-section h2, .v3-pilot h2, .v3-platforms h2, .v3-development h2, .v3-contact h2 { font-size: 32px; }
  .v3-section-heading>p { margin-top: 12px; font-size: 13px; }
  .v3-problem-grid, .v3-pilot-inner, .v3-journey-grid, .v3-platform-inner, .v3-development-inner, .v3-cases-inner, .v3-contact-grid { grid-template-columns: 1fr; gap: 26px; }
  .v3-problem-grid ul { grid-template-columns: 1fr; }
  .v3-problem-grid li { padding: 12px 0; font-size: 12px; }
  .v3-problem-note { padding: 21px; }
  .v3-problem-note strong { font-size: 20px; }
  .v3-onboarding-grid { grid-template-columns: 1fr; }
  .v3-onboarding-grid article { min-height: 0; padding: 19px; }
  .v3-pilot { padding-block: 60px; }
  .v3-pilot h2, .v3-development h2 { font-size: 32px; }
  .v3-pilot-inner>div:first-child>p:not(.v3-eyebrow) { font-size: 13px; }
  .v3-flight-map { grid-template-columns: 1fr 72px 1fr; gap: 7px; }
  .v3-flight-map>div { min-height: 115px; padding: 10px 8px; }
  .v3-flight-map strong { font-size: 11px; }
  .v3-flight-map small { font-size: 9px; }
  .v3-service-grid { grid-template-columns: 1fr; }
  .v3-service-grid article { min-height: 0; padding: 19px; }
  .v3-outcome-head span, .v3-outcome-row>span { padding: 11px 9px; }
  .v3-outcome-head { font-size: 9px; }
  .v3-outcome-row { font-size: 10px; }
  .v3-outcome-row i { width: 17px; margin-right: 5px; }
  .v3-journey-grid>div>p:last-child { font-size: 13px; }
  .v3-solution-grid, .v3-product-grid { grid-template-columns: 1fr; }
  .v3-solution-grid article { min-height: 0; padding: 19px; }
  .v3-platforms h2 { font-size: 32px; }
  .v3-platform-inner>div:first-child>p:last-child { font-size: 12px; }
  .v3-platform-note { grid-column: 1; margin: -17px 0 0; }
  .v3-development { padding-block: 60px; }
  .v3-development-inner>div:first-child>p:not(.v3-eyebrow) { font-size: 13px; }
  .v3-dev-visual { grid-template-columns: 1fr 18px 1fr; gap: 6px; }
  .v3-dev-visual>div:last-child { grid-column: 1 / -1; min-height: 90px; }
  .v3-dev-visual>.v3-dev-link:nth-of-type(4) { display: none; }
  .v3-dev-visual>div { min-height: 110px; padding: 8px; }
  .v3-dev-visual strong { font-size: 10px; }
  .v3-product-card { min-height: 0; }
  .v3-cases-inner { gap: 15px; }
  .v3-cases-inner>div:last-child { padding: 5px 0 5px 16px; }
  .v3-contact { padding-block: 58px; }
  .v3-contact h2 { font-size: 34px; }
  .v3-contact-copy>p:not(.v3-eyebrow) { font-size: 13px; }
  .v3-form { gap: 12px; padding: 17px; }
  .v3-form-row { grid-template-columns: 1fr; }
  .v3-form button { width: 100%; }
  .v3-footer-main { grid-template-columns: 1fr 1fr; gap: 26px 15px; }
  .v3-footer-main>div:first-child { grid-column: 1 / -1; }
  .v3-footer-bottom { flex-direction: column; gap: 8px; }
}

@media (max-width: 380px) {
  .v3-container { width: calc(100% - 32px); }
  .v3-hero h1 { font-size: 42px; }
  .v3-actions { align-items: stretch; flex-direction: column; }
  .v3-actions .v3-button { width: 100%; }
  .v3-cockpit-route { font-size: 7px; }
  .v3-cockpit-route strong { font-size: 8px; }
  .v3-flight-map { grid-template-columns: 1fr 62px 1fr; }
  .v3-flight-map>div { padding-inline: 6px; }
  .v3-contact h2 { font-size: 30px; }
}

@media (prefers-reduced-motion: reduce) {
  .v3-page *, .v3-page *::before, .v3-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
</style>
