import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { humbleScrollVuePlugin } from '../../src'

const app = createApp(App)

app.use(router)
app.use(humbleScrollVuePlugin, {
  repeat: true,
  mirror: true,
  offset: {
    bottom: -100
  }
})

app.mount('#app')
