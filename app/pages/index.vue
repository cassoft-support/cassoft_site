<script setup lang="ts">
const menuOpen = ref(false)
const activeSolution = ref('Продажи')

const navigation = [
  { label: 'Услуги', href: '#services' },
  { label: 'Продукты', href: '#products' },
  { label: 'Платформы', href: '#platforms' },
  { label: 'Решения', href: '#solutions' },
  { label: 'Блог', href: '/blog' },
  { label: 'Компания', href: '#about' }
]

const services = [
  { number: '01', icon: 'i-lucide-panels-top-left', title: 'Внедрение CRM', text: 'Настраиваем систему под ваши процессы, воронки и команды.' },
  { number: '02', icon: 'i-lucide-workflow', title: 'Автоматизация', text: 'Роботы, триггеры, бизнес-процессы и уведомления.' },
  { number: '03', icon: 'i-lucide-code-xml', title: 'Разработка приложений', text: 'Создаём собственные решения и дорабатываем готовые.' },
  { number: '04', icon: 'i-lucide-waypoints', title: 'Интеграции', text: 'Соединяем CRM с вашими сервисами и системами.' },
  { number: '05', icon: 'i-lucide-life-buoy', title: 'Поддержка и развитие', text: 'Помогаем развивать решение после запуска.' }
]

const processSteps = [
  { number: '01', title: 'Разбираемся в задаче', note: 'Изучаем процессы, ограничения и ожидаемый результат' },
  { number: '02', title: 'Предлагаем подход', note: 'Выбираем платформу, архитектуру и объём работ' },
  { number: '03', title: 'Реализуем', note: 'Настраиваем, разрабатываем и интегрируем решение' },
  { number: '04', title: 'Запускаем и развиваем', note: 'Проверяем результат, обучаем команду и поддерживаем систему' }
]

const platforms = [
  { icon: 'i-lucide-box', title: 'КУБ-X', description: 'Собственная CRM-платформа CAS-soft для настройки бизнес-процессов.' },
  { icon: 'i-lucide-grid-2x2', title: 'Bitrix24', description: 'Внедрение, настройка и развитие.' },
  { icon: 'i-lucide-chart-no-axes-combined', title: 'amoCRM', description: 'Настройка CRM-продаж и интеграции.' },
  { icon: 'i-lucide-landmark', title: 'Сбер', description: 'Решения экосистемы и интеграционные сценарии.' },
  { icon: 'i-lucide-network', title: 'Другие системы', description: 'Оценим технические возможности.' }
]

const automationSteps = [
  { icon: 'i-lucide-user-round', title: 'Заявка', description: 'Поступление обращения' },
  { icon: 'i-lucide-shield-check', title: 'Проверка', description: 'Сбор и проверка данных' },
  { icon: 'i-lucide-user-round-cog', title: 'Менеджер', description: 'Назначение ответственного' },
  { icon: 'i-lucide-list-checks', title: 'Задача', description: 'Создание задания' },
  { icon: 'i-lucide-chart-no-axes-column-increasing', title: 'Контроль', description: 'Статус и аналитика' }
]

const integrationNodes = [
  { icon: 'i-lucide-globe', title: 'Сайт', position: 'integration-node--site' },
  { icon: 'i-lucide-phone', title: 'Телефония', position: 'integration-node--phone' },
  { icon: 'i-lucide-mail', title: 'Почта', position: 'integration-node--mail' },
  { icon: 'i-lucide-message-circle', title: 'Мессенджеры', position: 'integration-node--messengers' },
  { icon: 'i-lucide-box', title: 'Внешняя система', position: 'integration-node--system' },
  { icon: 'i-lucide-braces', title: 'API', position: 'integration-node--api' }
]

const productModules = [
  { icon: 'i-lucide-users-round', title: 'CRM', position: 'feature-module--crm' },
  { icon: 'i-lucide-workflow', title: 'Автоматизация', position: 'feature-module--automation' },
  { icon: 'i-lucide-waypoints', title: 'Интеграции', position: 'feature-module--integrations' },
  { icon: 'i-lucide-puzzle', title: 'Приложения', position: 'feature-module--apps' }
]

const marketplaceApps = [
  {
    title: 'BROKCI-PRO (Городской брокер)',
    description: 'Управление объектами недвижимости, размещение на рекламных площадках и подбор объектов для покупателей.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/94c/goq38nqjmvz7s4fqh8km7ohsspe9oxgu/250_250_1/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.brokci/',
    registry: 'https://reestr.digital.gov.ru/reestr/3263533/?sphrase_id=6071804'
  },
  {
    title: 'Закрытие пропущенных звонков',
    description: 'Приложение для работы с пропущенными звонками.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/162/0jchsgwscrtdr0hxrupq00ukw7njgjzo/250_250_1/%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20(650-650).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.calls_controller/'
  },
  {
    title: 'Смена ответственного',
    description: 'Автоматическая смена ответственного по заданным правилам.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/177/hqzs0q1r6yrjnanekgmjmxfwgppg4b6p/250_250_1/%D1%81%D0%BC%D0%B5%D0%BD%D0%B0%20%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.change_assigned/'
  },
  {
    title: 'BROKCI — Городской брокер',
    description: 'Отраслевая CRM для агентств недвижимости: продажи, юридические процессы, ипотека и работа с агентами.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/0d2/250_250_1/%D0%B1%D1%80%D0%BE%D0%BA%D1%81%D0%B8_w%20(650x650).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.otr_resh/'
  },
  {
    title: 'ЦИАН мессенджер',
    description: 'Интеграция чата ЦИАН с Битрикс24 и подбор похожих объектов в диалоге.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/3ba/t3fw8bhnknlcicviei4zi8gunz6k8oyp/250_250_1/3261.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.cian_messager/'
  },
  {
    title: 'ДомКлик мессенджер',
    description: 'Интеграция чата ДомКлик с Битрикс24 и подбор похожих объектов в диалоге.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/fda/z2zvkxnbwr11rbji1s3aalee1o2mdv67/250_250_1/domclick650.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.domclick_messager/'
  },
  {
    title: 'Распределение лидов и сделок',
    description: 'Распределение лидов и сделок с учётом эффективности сотрудников.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/af8/xvj5z36qkev680tf5uikgozguts018qf/250_250_1/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2%20(1).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.distribution/'
  },
  {
    title: 'Структура Холдинга',
    description: 'Структура компаний и проверка контрагента при создании.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/116/ost3k7q1hs8lun10us66v3iu5c6p6uf0/250_250_1/ChatGPT%20Image%2022%20%D1%81%D0%B5%D0%BD%D1%82.%202026%20%D0%B3.,%2016_11_43%20(1).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.holding/'
  },
  {
    title: 'Сканы документов',
    description: 'Работа со сканами документов в лидах, сделках, контактах и компаниях.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/43a/odvldqbf0b9r8o9qsonopbh5hknvcm0y/250_250_1/%D1%81%D0%BA%D0%B0%D0%BD%D1%8B.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.scan_doc/'
  },
  {
    title: 'Умная проверка номеров',
    description: 'Инструмент для повышения эффективности коммуникации с клиентом.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/94b/78jva8qjej1c113z13ard26km0ok8ptv/250_250_1/2025-08-18_09-52-49.png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.check_phone/'
  },
  {
    title: 'Добавление изображений в поле Сделки',
    description: 'Добавление файлов изображений в поле сделки.',
    image: 'https://util.1c-bitrix.ru/upload/resize_cache/bx24vendor/3e5/250_250_1/%D0%B1%D1%80%D0%BE%D0%BA%D1%81%D0%B8_w%20(650x650).png',
    href: 'https://www.bitrix24.ru/apps/app/cassoft.fayly_dlya_oblaka/'
  }
]

const solutions = [
  { title: 'Продажи', description: 'Воронка, коммуникации и понятный контроль каждого этапа сделки.', flow: ['Лиды', 'Сделки', 'Коммуникации', 'Оплата'] },
  { title: 'Маркетинг', description: 'Связываем источники обращений с сегментами и результатами кампаний.', flow: ['Реклама', 'Лиды', 'Сегменты', 'Аналитика'] },
  { title: 'Сервис', description: 'Помогаем команде быстрее принимать обращения и доводить их до результата.', flow: ['Обращение', 'Заявка', 'Исполнитель', 'Решение'] },
  { title: 'Проекты', description: 'Собираем задачи, команду и сроки в прозрачный рабочий процесс.', flow: ['Задачи', 'Команда', 'Контроль', 'Результат'] },
  { title: 'Аналитика', description: 'Объединяем данные в отчёты, которые помогают принимать решения.', flow: ['Данные', 'Отчёты', 'KPI', 'Решения'] }
]

const selectedSolution = computed(() => solutions.find((solution) => solution.title === activeSolution.value) ?? solutions[0]!)

function handleMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleMenuKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', handleMenuKeydown))
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="CAS-soft, на главную">
          <span class="brand-mark"><UIcon name="i-lucide-box" /></span><span>CAS-soft</span>
        </a>
        <nav class="desktop-nav" :class="{ 'is-open': menuOpen }" aria-label="Главная навигация">
          <a v-for="item in navigation" :key="item.label" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
          <a class="mobile-cta" href="#contact" @click="menuOpen = false">Обсудить проект <span aria-hidden="true">↗</span></a>
        </nav>
        <UButton class="hidden! md:inline-flex! nav-project-button" color="neutral" variant="solid" to="#contact" trailing-icon="i-lucide-arrow-up-right">
          Обсудить проект
        </UButton>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'" @click="menuOpen = !menuOpen">
          <UIcon :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" />
        </button>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <div class="eyebrow">Интеграция · автоматизация · разработка</div>
            <h1>Автоматизируем бизнес. Разрабатываем решения. <span>Соединяем системы.</span></h1>
            <p class="hero-copy">Внедряем и настраиваем CRM, автоматизируем процессы, интегрируем сервисы и создаём собственные приложения — под реальные задачи бизнеса.</p>
            <div class="hero-actions">
              <UButton class="blue-button" color="neutral" size="lg" to="#contact" trailing-icon="i-lucide-arrow-up-right">Обсудить проект</UButton>
              <UButton class="blue-outline-button" color="neutral" variant="outline" size="lg" to="#products">Наши продукты</UButton>
            </div>
          </div>

          <div class="dashboard-wrap" role="img" aria-label="Демонстрационный CRM-интерфейс с боковой навигацией, воронкой продаж, задачами и автоматизацией">
            <div class="dashboard">
              <aside class="crm-sidebar">
                <div class="crm-logo"><span class="crm-logo-mark"><UIcon name="i-lucide-box" /></span>КУБ-X</div>
                <nav aria-label="Демонстрационное меню CRM">
                  <span class="is-active"><UIcon name="i-lucide-layout-dashboard" />Обзор</span>
                  <span><UIcon name="i-lucide-kanban" />Сделки</span>
                  <span><UIcon name="i-lucide-users-round" />Клиенты</span>
                  <span><UIcon name="i-lucide-check-square" />Задачи</span>
                  <span><UIcon name="i-lucide-workflow" />Процессы</span>
                  <span><UIcon name="i-lucide-chart-no-axes-column-increasing" />Аналитика</span>
                  <span><UIcon name="i-lucide-settings-2" />Настройки</span>
                </nav>
              </aside>
              <div class="crm-workspace">
                <div class="dash-top"><span>Воронка продаж</span><span class="demo-label">ДЕМО-ИНТЕРФЕЙС</span></div>
                <div class="dash-main">
                  <div class="dash-panel pipeline-panel">
                    <div class="dash-label"><span>Этапы сделок</span><span>Этот месяц⌄</span></div>
                    <div class="pipeline-list">
                      <div><span>Новые лиды</span><i style="--stage-width: 100%" /></div>
                      <div><span>Квалификация</span><i style="--stage-width: 76%" /></div>
                      <div><span>Предложение</span><i style="--stage-width: 57%" /></div>
                      <div><span>Переговоры</span><i style="--stage-width: 38%" /></div>
                      <div><span>Успешно</span><i style="--stage-width: 24%" /></div>
                    </div>
                  </div>
                  <div class="dash-panel tasks-panel">
                    <div class="dash-label"><span>Задачи</span><UIcon name="i-lucide-search" /></div>
                    <div class="task-list">
                      <div><UIcon name="i-lucide-circle-check" /><span>Связаться с клиентом<small>Сегодня, 10:00</small></span></div>
                      <div><UIcon name="i-lucide-circle-check" /><span>Подготовить предложение<small>Сегодня, 14:00</small></span></div>
                      <div><UIcon name="i-lucide-circle" /><span>Согласовать договор<small>Завтра, 11:00</small></span></div>
                    </div>
                  </div>
                </div>
                <div class="crm-automation"><span><UIcon name="i-lucide-zap" /></span><b>Автоматизация</b><i>Новый лид → назначение → задача → уведомление</i></div>
              </div>
            </div>
            <div class="floating-note"><span class="status-dot" />CRM · процессы · интеграции</div>
            <div class="integration-float"><b>Интеграции</b><span><i>✈</i><i>↗</i><i>✉</i><i>API</i></span></div>
          </div>
        </div>
      </section>

      <section id="platforms" class="platform-strip" aria-label="Платформы и системы">
        <div class="container">
          <div class="platform-heading"><div><div class="eyebrow">Платформы и интеграции</div><h2>Работаем с вашей CRM — или помогаем выбрать подходящую</h2></div><p>Подбираем решение под процессы, команду и задачи бизнеса. Если у вас уже есть система, поможем развить её; если нет — оценим варианты.</p></div>
          <div class="platform-list">
            <article v-for="platform in platforms" :key="platform.title" class="platform-item">
              <span class="platform-icon"><UIcon :name="platform.icon" aria-hidden="true" /></span>
              <div><h3>{{ platform.title }}</h3><p>{{ platform.description }}</p></div>
            </article>
          </div>
        </div>
      </section>

      <section id="services" class="section">
        <div class="container">
          <div class="services-heading">
            <div><div class="eyebrow">Чем помогаем</div><h2 class="section-title">Полный цикл решений для вашего бизнеса</h2></div>
            <p class="section-copy">От анализа процессов до поддержки и развития. Мы не просто настраиваем систему — мы помогаем выстроить работающую цифровую среду.</p>
          </div>
          <div class="service-grid">
            <article v-for="service in services" :key="service.number" class="service-card">
              <div class="service-number">{{ service.number }}</div>
              <div class="service-icon"><UIcon :name="service.icon" /></div>
              <h3>{{ service.title }}</h3><p>{{ service.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="process-section section">
        <div class="container process-layout">
          <div><div class="eyebrow">От задачи до результата</div><h2 class="section-title">От задачи к работающему решению</h2><p class="section-copy">Погружаемся в процессы, выбираем подход и сопровождаем решение после запуска.</p></div>
          <div class="process-list">
            <div v-for="step in processSteps" :key="step.number" class="process-row"><span>{{ step.number }}</span><strong>{{ step.title }}</strong><small>{{ step.note }}</small></div>
          </div>
        </div>
      </section>

      <section id="solutions" class="solutions-section section">
        <div class="container">
          <div class="eyebrow">Система под ваш бизнес</div><h2 class="section-title">Вокруг каждого бизнеса — своя CRM</h2>
          <div class="solution-tabs" role="tablist" aria-label="Направления решений">
            <button v-for="solution in solutions" :key="solution.title" type="button" role="tab" :aria-selected="activeSolution === solution.title" @click="activeSolution = solution.title">{{ solution.title }}</button>
          </div>
          <div class="solution-display" role="tabpanel">
            <div><div class="eyebrow">Решение для направления</div><h3>{{ selectedSolution.title }}</h3><p>{{ selectedSolution.description }}</p></div>
            <div class="flowline"><template v-for="(stage, index) in selectedSolution.flow" :key="stage"><span>{{ stage }}</span><b v-if="index < selectedSolution.flow.length - 1" aria-hidden="true">→</b></template></div>
          </div>
        </div>
      </section>

      <section class="automation-section section">
        <div class="container automation-band">
          <div><div class="eyebrow">Меньше ручной работы</div><h2 class="section-title">CRM должна делать работу сама</h2><p class="section-copy">Настраиваем логику, которая помогает команде не забывать важное и быстрее двигать задачи к результату.</p></div>
          <div class="automation-visual">
            <div class="automation-steps" aria-label="Пример автоматизированного процесса">
              <div v-for="(step, index) in automationSteps" :key="step.title" class="automation-step" :class="{ 'automation-step-last': index === automationSteps.length - 1 }">
                <span class="automation-icon"><UIcon :name="step.icon" aria-hidden="true" /></span>
                <strong>{{ step.title }}</strong>
                <span class="automation-step-description">{{ step.description }}</span>
              </div>
            </div>
            <p class="automation-caption">Пример сценария; состав и логика настраиваются под задачу.</p>
          </div>
        </div>
      </section>

      <section class="integration-section section">
        <div class="container integration-layout">
          <div class="integration-copy">
            <div class="eyebrow">Интеграции</div>
            <h2 class="section-title">Связываем рабочие системы</h2>
            <p class="section-copy">Объединяем CRM с сайтами, телефонией, почтой и другими сервисами в рамках требований проекта.</p>
            <p class="integration-note">Схема иллюстрирует подход. Возможность интеграции зависит от платформы и доступных API.</p>
          </div>
          <div class="integration-map" aria-label="Пример схемы связей CRM с внешними системами">
            <svg class="integration-connections" viewBox="0 0 760 270" preserveAspectRatio="none" aria-hidden="true">
              <path d="M150 45 334 126M150 135h184M150 225l184-81M610 45 426 126M610 135H426M610 225 426 144" />
            </svg>
            <div class="integration-hub"><span><UIcon name="i-lucide-box" aria-hidden="true" /></span><strong>CRM</strong></div>
            <div v-for="node in integrationNodes" :key="node.title" class="integration-node" :class="node.position">
              <span class="integration-node-icon"><UIcon :name="node.icon" aria-hidden="true" /></span>
              <strong>{{ node.title }}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="product-feature section">
        <div class="container">
          <div class="eyebrow">Собственный продукт</div><h2 class="section-title">КУБ-X — CRM, которую можно адаптировать под ваш бизнес</h2><p class="section-copy">Собственная CRM-платформа CAS-soft. Концепция КУБ-X — объединять разные бизнес-процессы в одной настраиваемой системе.</p>
          <div class="product-feature-visual" aria-label="Концептуальная схема модулей CRM-платформы КУБ-X">
            <svg class="product-connections" viewBox="0 0 900 390" preserveAspectRatio="none" aria-hidden="true">
              <path d="M130 82 365 165M770 82 535 165M130 308l235-83M770 308l-235-83" />
            </svg>
            <div class="feature-core"><span class="feature-cube"><UIcon name="i-lucide-box" aria-hidden="true" /></span><strong>КУБ-X</strong><span>CRM-платформа</span></div>
            <div v-for="module in productModules" :key="module.title" class="feature-module" :class="module.position">
              <span><UIcon :name="module.icon" aria-hidden="true" /></span><strong>{{ module.title }}</strong>
            </div>
          </div>
          <UButton class="blue-button" color="neutral" size="lg" to="#contact" trailing-icon="i-lucide-arrow-up-right">Обсудить КУБ-X</UButton>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="development-cta"><div><div class="eyebrow">Разработка под задачу</div><h3>Создаём решения для задач бизнеса</h3><p>Проектируем и разрабатываем приложения, интеграции и программные решения для CRM и корпоративных систем.</p></div><UButton color="neutral" size="lg" to="#contact" trailing-icon="i-lucide-arrow-up-right">Обсудить разработку</UButton></div>
        </div>
      </section>

      <section id="applications" class="applications-section section">
        <div class="container">
          <div class="applications-heading">
            <div>
              <div class="eyebrow">Маркетплейс Битрикс24</div>
              <h2 class="section-title">Наши приложения</h2>
            </div>
            <div class="applications-intro">
              <p>Приложения CAS-soft для Битрикс24. Откройте карточку, чтобы посмотреть описание и условия в маркетплейсе.</p>
              <a class="applications-catalog-link" href="https://www.bitrix24.ru/apps/partner/1808299/" target="_blank" rel="noopener noreferrer">Все приложения CAS-soft <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
            </div>
          </div>
          <div class="applications-grid">
            <article v-for="app in marketplaceApps" :key="app.title" class="application-card">
              <div class="application-card-top">
                <img class="application-icon" :src="app.image" alt="" width="64" height="64" loading="lazy" decoding="async">
                <span class="application-platform">Битрикс24</span>
              </div>
              <div class="application-card-content">
                <h3>{{ app.title }}</h3>
                <p>{{ app.description }}</p>
                <a v-if="app.registry" class="application-registry-link" :href="app.registry" target="_blank" rel="noopener noreferrer">В Реестре российского ПО</a>
              </div>
              <a class="application-card-link" :href="app.href" target="_blank" rel="noopener noreferrer">Открыть в маркетплейсе <UIcon name="i-lucide-arrow-up-right" aria-hidden="true" /></a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="final-cta">
        <div class="container"><div class="eyebrow">Начнём с разговора</div><h2 class="section-title">Есть задача по автоматизации бизнеса?</h2><p class="section-copy">Расскажите, что хотите изменить или автоматизировать. Обсудим задачу и предложим следующий шаг.</p><UButton color="neutral" size="xl" trailing-icon="i-lucide-arrow-up-right" to="#contact">Обсудить проект</UButton></div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container"><div class="footer-main">
        <div class="footer-brand"><a class="brand" href="#top"><span class="brand-mark"><UIcon name="i-lucide-box" /></span><span>CAS-soft</span></a><p>CRM, автоматизация и разработка под задачи вашего бизнеса.</p></div>
        <div class="footer-col"><strong>Услуги</strong><a href="#services">Внедрение CRM</a><a href="#services">Автоматизация</a><a href="#services">Интеграции</a><a href="#services">Разработка</a></div>
        <div class="footer-col"><strong>Решения</strong><a href="#solutions">Продажи</a><a href="#solutions">Маркетинг</a><a href="#solutions">Сервис</a><a href="#products">КУБ-X</a></div>
        <div class="footer-col"><strong>Компания</strong><a href="#about">О компании</a><a href="/blog">Блог</a><a href="#contact">Контакты</a></div>
      </div><div class="footer-bottom"><span>© 2026 CAS-soft</span><span>Информация и кейсы на сайте будут дополнены подтверждёнными данными компании.</span></div></div>
    </footer>
  </div>
</template>