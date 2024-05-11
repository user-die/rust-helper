<template>
  <main>
    <footer>
      <div class="container mx-auto p-0 w-100">
        <Language></Language>
        <div class="row w-100 h-100 m-0 justify-content-center">
          <article
            class="h-100 py-1 t-sm-0 col-12 col-lg-8 text-black d-flex flex-column justify-content-around"
          >
            <section>
              <strong>
                <p class="fw-normal">
                  {{ t('project.about') }} <b class="fw-normal">{{ t('project.rust') }}</b>
                </p>
              </strong>
            </section>

            <section>
              <h5>{{ t('project.future') }}:</h5>
              <ul>
                <li>{{ t('project.more') }}</li>
                <li>{{ t('project.calc') }}</li>
                <li>{{ t('project.apps') }}</li>
              </ul>
            </section>

            <section>
              <p>
                {{ t('project.youcan') }}
                <a target="_blank" href="https://www.donationalerts.com/r/userdie">{{
                  t('project.link')
                }}</a>
              </p>
            </section>

            <section class="mb-4">
              <p class="mb-2">
                {{ t('project.findErrors') }}
              </p>

              <form @submit.prevent="onSubmit" class="d-flex flex-column">
                <div class="d-flex flex-column mb-2">
                  <label for="email">{{ t('project.Email') }}</label>
                  <input
                    class="form-control"
                    type="email"
                    v-model="email"
                    id="email"
                    placeholder="john@doe.com"
                    style="max-width: 500px"
                  />
                </div>
                <div class="d-flex flex-column mb-2">
                  <label for="message">{{ t('project.message') }}</label>
                  <textarea
                    class="form-control"
                    v-model="message"
                    id="message"
                    :placeholder="t('project.enterMessage')"
                  ></textarea>
                </div>
                <div class="formcarry-block text-center text-lg-start">
                  <button class="btn btn-danger" type="submit">{{ t('project.send') }}</button>
                </div>
                <div v-if="showNotification()" class="formcarry-block">
                  <div :class="`formcarry-message-block fc-${icon} active`">
                    <div class="fc-message-icon"></div>
                    <div class="text-danger">{{ errorMessage() }}</div>
                    <div class="fc-message-close" @click="resetStates()"></div>
                  </div>
                </div>
              </form>

              <p class="text-center mt-3 mt-sm-5 text-white mb-0">
                created by <a target="_blank" href="https://github.com/user-die">@userdie</a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

var MyFormcarryFormURL = 'https://formcarry.com/s/K-9UHEeerq3'

var { t } = useI18n({ useScope: 'global' })
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
* {
  margin: 0;
}

.container {
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  height: calc(100vh - 50px);
  align-items: center;
}
</style>
