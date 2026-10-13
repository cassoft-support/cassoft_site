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
            title: 'CRM без валидола — CAS-soft',
            meta: [
                {
                    name: 'description',
                    content:
                        'Внедрение и настройка CRM без лишних нервов. Автоматизация, интеграции и разработка CAS-soft.'
                },
                { name: 'theme-color', content: '#f6f9fc' }
            ]
        }
    },
    compatibilityDate: '2025-07-15'
})