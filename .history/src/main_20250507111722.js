// src/main.js
import { createApp } from 'vue'
import App        from './App.vue'
import { router } from './router'
import './style.css'         // your reset / base styles
import './assets/main.css'   // ← this must point at the file above

createApp(App)
  .use(router)
  .mount('#app')
