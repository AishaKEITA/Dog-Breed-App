
<template>
  <div class="breeds">
    <h1>{{heading}}</h1>
     <v-btn color="#264653" class="ma-2"
        outlined @click="getAllBreedList()">{{ breedListButton }}</v-btn>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'Breeds',
  components: {
    Footer
  },
  data () {
    return {
      heading: 'Breeds',
      breedListButton: 'Click breeds'
    }
  },
  methods: {
    /* --- fetch breeds --- */
    getAllBreedList () {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => console.log(data))
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
