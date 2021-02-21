
<template>
  <div class="home">
    <v-app>
    <h1>{{welcomeMessage}}</h1>
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
      welcomeMessage: 'Welcome to the land of dogs'
    }
  }
}
</script>
<style scoped>
h1 {
font-size: 50px;
text-align: center;
color: #6d6875;
}
</style>
