<template>
  <Language></Language>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8 text-black">
        <h5></h5>
        <p>Проект создан в целях упростить вашу подготовку и ход рейда в Rust.</p>

        <h5>Что будет в будещем:</h5>
        <ul>
          <li>больше конструкций и оружий</li>
          <li>расчёт максимально дешёвого рейда</li>
          <li>Мобильное и десктопное приложение</li>
        </ul>

        <p class="my-4">
          Вы можете поучавствовать в развитии проекта, предложив свои идеи для нововведений или
          поддержав проект материально
          <a target="_blank" href="https://www.donationalerts.com/r/userdie">по ссылке</a>
        </p>

        <p class="mb-2">
          Нашли ошибку? Хотите предложить идею? Хотите похвалить автора? Заполните форму ниже !
        </p>

        <form @submit.prevent="onSubmit">
          <div class="d-flex flex-column mb-2">
            <label for="email">Email для обратной связи</label>
            <input
              type="email"
              v-model="email"
              id="email"
              placeholder="john@doe.com"
              style="width: 500px"
            />
          </div>
          <div class="d-flex flex-column mb-2">
            <label for="message">Сообщение</label>
            <textarea v-model="message" id="message" placeholder="Enter your message..."></textarea>
          </div>
          <div class="formcarry-block">
            <button type="submit">Send</button>
          </div>
          <div v-if="showNotification()" class="formcarry-block">
            <div :class="`formcarry-message-block fc-${icon} active`">
              <div class="fc-message-icon"></div>
              <div class="fc-message-content">{{ errorMessage() }}</div>
              <div class="fc-message-close" @click="resetStates()"></div>
            </div>
          </div>
        </form>

        <p class="text-center mt-5 text-white">
          created by <a target="_blank" href="https://github.com/user-die">@userdie</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
var MyFormcarryFormURL = 'https://formcarry.com/s/K-9UHEeerq3'

var name = ref('')
var email = ref('')
var message = ref('')
var error = ref('')
var submitted = ref(false)

var resetStates = () => {
  submitted.value = false
  error.value = ''
}

var resetForm = () => {
  name.value = ''
  email.value = ''
  message.value = ''
}

var onSubmit = async () => {
  resetStates()

  var formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)

  try {
    var response = await fetch(MyFormcarryFormURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })

    var data = await response.json()

    if (data.code === 200) {
      submitted.value = true
      resetForm()
    } else if (data.code === 422) {
      error.value = data.message
    } else {
      error.value = data.message
    }
  } catch (err) {
    error.value = err.message ? err.message : err
  }
}

var showNotification = () => submitted.value || error.value
var icon = () => (error.value ? 'error' : 'success')
var errorMessage = () =>
  error.value ? error.value : `Thanks for reaching out!, we'll get back to you soon.`
</script>

<style scoped>
.container {
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  height: calc(100vh - 30px);
  align-items: center;
}
</style>
