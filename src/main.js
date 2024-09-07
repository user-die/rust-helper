import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

/*
var localStorageLang = sessionStorage.getItem("lang");


import { languages } from "./i18n";
import { createI18n } from "vue-i18n";
var i18n = createI18n({
  legacy: false,
  locale: localStorageLang || window.navigator.language.slice(0, 2),
  fallbackLocale: "en",
  messages: Object.assign(languages),
});
*/
createApp(App).use(createPinia()).mount("#app");

// Есть ли сплеш
// Максимально дешёвый рейд
// ger, franch, ch
// Фишки о сплеше и стенах
// Сортовка
// Милишные оружия
// Больше оружий
// Больше построек

// Растения
// Калькулятор вывода переработчика ???
// Калькулятор ресурсов для постройки ?
// Калькулятор крафта
// калькулятор брони
// РТшки
