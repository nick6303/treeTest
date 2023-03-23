import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 使用繁體中文語言包
import locale from 'element-plus/lib/locale/lang/zh-tw'

import 'app-plugin/assets/fonts/icomoon/style.css'

import '@css/style.sass'

const app = createApp(App)

app.use(ElementPlus, { locale }).mount('#app')
