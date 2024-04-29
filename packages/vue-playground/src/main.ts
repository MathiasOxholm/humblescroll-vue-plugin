import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { humbleScrollVuePlugin } from 'humblescroll-vue'
import 'humblescroll-vue/dist/style.css'


const app = createApp(App)

app.use(router)
app.use(humbleScrollVuePlugin)

app.mount('#app')
