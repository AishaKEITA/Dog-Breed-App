
<template>
  <div class="home">
    <v-app>
    <h1>welcome to the home</h1>
    <Footer />
  </v-app>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
