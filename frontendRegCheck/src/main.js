import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import Toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from './router'


const pinia = createPinia()

createApp(App).use(Quasar, quasarUserOptions).use(pinia).use(router).use(Toast).mount('#app')
