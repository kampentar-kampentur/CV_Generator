import Vue from 'vue'
import router from '@/router'
import intRoutes from '@/router/routes'
import App from './App.vue'
import store from './store'
import './assets/style/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faTimes, faCamera, faPlusCircle, faPooStorm, faFeatherAlt, faBriefcase, faUser, faFileDownload, faCogs, faLanguage, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUser, faAddressCard, faTimes, faCamera, faPlusCircle, faPooStorm, faFeatherAlt, faBriefcase, faFileDownload, faCogs, faLanguage, faUniversity)
Vue.component('font-awesome-icon', FontAwesomeIcon)

intRoutes()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
