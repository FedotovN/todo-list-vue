import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from '@/components/UI'

const app = createApp(App)

for(let key in UI){
    app.component(key, UI[key])
}

app.use(store).use(router).mount('#app')
