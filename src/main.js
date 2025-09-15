import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


const app = createApp(App)
app.mount("#app")

AOS.init({ // Durasi animasi dalam milidetik
  easing: 'ease-in-out', // Jenis easing
  once: false, // Apakah animasi hanya terjadi sekali saat scroll ke bawah
})
