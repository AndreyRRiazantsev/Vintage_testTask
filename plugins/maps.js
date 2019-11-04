import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA9PItMOysFle07HQV-GjdkiKobEcrIhb0',
    v: 'weekly',
    libraries: 'places' // Only if you need Autocomplete
  }
})
