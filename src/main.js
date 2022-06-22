import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faGlobe, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBicycle, faBookOpen, faGamepad, faMicrophone, faFilm, faPen, faPersonSwimming } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faGithub, faGlobe, faLinkedinIn, faMapMarker, faPhone)
library.add(faBicycle)
library.add(faBookOpen, faFilm)
library.add(faGamepad)
library.add(faMicrophone)
library.add(faPen)
library.add(faPersonSwimming)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')
