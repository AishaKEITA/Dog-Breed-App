
<template>
  <div class="home">
    <v-app>
      <h1>{{ welcomeMessage }}</h1>
      <div v-if="randomImage" class="image">
        <img v-bind:src="randomImage" height="300" width="auto" />
      </div>
      <div class="homebtn">
        <v-btn
          color="#264653"
          class="white--text"
          width="200px"
          @click="getRandomImage()"
          >{{ randomImageButton }}</v-btn
        >
      </div>
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
            randomImageButton: 'Click random imagae',
            randomImage: '',
            displayRandomImage: []
        }
    },

    /* --- simple fetch of the api --- */
    created () {
        this.getRandomImage()
    },

    methods: {
    /* --- fetch lisst of all breeds --- */
        getAllBreedList () {
            fetch('https://dog.ceo/api/breeds/list/all')
                .then(response => response.json())
                .then(data => console.log(data))
        },

        /* --- fetch random image --- */
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
  height: auto;
}
.image {
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homebtn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 5%;
}
</style>
