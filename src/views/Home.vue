
<template>
  <div class="home">
    <v-app>
      <h1>{{ welcomeMessage }}</h1>
   <v-btn color="#264653" class="text-xs-center" @click="getRandomImage()">{{ randomImageButton }}</v-btn>
   <img v-bind:src='randomImage'/>
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
      welcomeMessage: 'Welcome to the land of dogs',
      randomImageButton: 'Click random Imagae',
      randomImage: ''
    }
  },

  /* --- simple fetch of the api --- */
  created () {

  },

  methods: {
    /* --- fetch random image --- */
    getAllBreedList () {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => console.log(data))
    },
    getRandomImage () {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          this.randomImage = data.message
          console.log(this.randomImage)
        })
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
.home {
  height: auto
}
</style>
