import 'font-awesome/css/font-awesome.css'
import 'vue3-easy-data-table/dist/style.css';
import './config/msgs'

import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/router'
// import Toaster from '@meforma/vue-toaster'
import {Tabs, Tab} from 'vue3-tabs-component'
import Vue3EasyDataTable from 'vue3-easy-data-table'

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIGRlIEZhdmVyaSIsImVtYWlsIjoiZmF2ZXJfaUBob3RtYWlsLmNvbSIsImFkbWluIjoidHJ1ZSIsImlhdCI6MTY2ODY5OTEwNCwiZXhwIjoxNjY4OTU4MzA0fQ.pjtCCkCdq6cmPFPU8l_DEZyb3AXbmb4y-mXhbQHNZpk'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('tabsVue', Tabs)
app.component('tabVue', Tab)
app.component('EasyDataTable', Vue3EasyDataTable)
// app.use(Toaster, { iconPack: 'fontawesome'})
app.mount('#app')
