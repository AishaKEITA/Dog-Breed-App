
<template>
  <div class="breeds">
    <h1>{{heading}}</h1>
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
      heading: 'Breeds'
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
