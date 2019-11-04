<template>
  <v-content fluid>
    <Contacts/>
    <Map/>
    <ContactUs/>
  </v-content>
</template>
<script>
import Contacts from '../components/contacts'
import ContactUs from '../components/contactUs'
import Map from '../components/map'
export default {
  components: {
    Contacts,
    ContactUs,
    Map
  }
}
</script>
<style lang="scss" scoped>

</style>