export default defineNuxtConfig({
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],
    fonts: {
        providers: {
            adobe: false,
            bunny: false,
            fontshare: false,
            fontsource: false,
            google: false,
            googleicons: false,
            npm: false
        }
    },
    devtools: { enabled: true },
    runtimeConfig: {
        databaseUrl: ''
    },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            title: 'CAS-soft — CRM и автоматизация под ваш бизнес',
            meta: [
                {
                    name: 'description',
                    content:
                        'Внедряем CRM, автоматизируем процессы, интегрируем сервисы и разрабатываем решения под задачи бизнеса.'
                },
                { name: 'theme-color', content: '#f5f6f2' }
            ]
        }
    },
    compatibilityDate: '2025-07-15'
})