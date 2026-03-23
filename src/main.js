import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// יצירת האפליקציה והוספת הנתב
const app = createApp(App)
app.use(router)
app.mount('#app')
