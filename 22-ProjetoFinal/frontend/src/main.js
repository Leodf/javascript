import 'font-awesome/css/font-awesome.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/router'

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIGRlIEZhdmVyaSIsImVtYWlsIjoiZmF2ZXJfaUBob3RtYWlsLmNvbSIsImFkbWluIjoidHJ1ZSIsImlhdCI6MTY2NDQ4NTY1NSwiZXhwIjoxNjY0NzQ0ODU1fQ.qhPoJ5-nao9svBQShe3MgvYXTW5tCsmueFHgGy0Jco4'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
