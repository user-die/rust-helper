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

createApp(App)
  .use(i18n)
  .use(createBootstrap({ plugins: { modalController: true } }))
  .use(router)
  .mount('#app')

// Есть ли сплеш
// Десктопное и мобильное приложение
// Максимально дешёвый рейд
// ger, franch, ch
// Фишки о сплеше и стенах
// Сортовка
// Милишные оружия
// Больше оружий
// Больше построек

// Калькулятор вывода переработчика ???
// Калькулятор ресурсов для постройки ?
// Калькулятор крафта
// калькулятор брони
