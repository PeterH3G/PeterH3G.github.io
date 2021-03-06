import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PortalVue from 'portal-vue'
import "./tailwind.css";

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PortalVue)
app.mount("#app")
