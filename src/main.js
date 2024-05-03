import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createBootstrap from 'bootstrap-vue-next'
import { languages } from './i18n'
import { createI18n } from 'vue-i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

var localStorageLang = sessionStorage.getItem('lang')

var i18n = createI18n({
  legacy: false,
  locale: localStorageLang || window.navigator.language.slice(0, 2),
  fallbackLocale: 'en',
  messages: Object.assign(languages)
})

createApp(App).use(i18n).use(createBootstrap).use(router).mount('#app')

// en , sp, ru, ch
// Десктопное и мобильное приложение

// Максимально дешёвый рейд
// Сортовка
// Милишные оружия
// Больше оружий
// Больше построек
// калькулятор брони
