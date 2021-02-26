
<template>
  <div class="breeds">
    <h1>{{ welcomeMessage }}</h1>
    <div id="breeds">
      <Breed
        v-for="(breedName, index) in breedNames"
        :key="index"
        :breed="breedName"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Breed from '../components/Breed'
export default {
    name: 'Breeds',
    components: {
        Footer,
        Breed
    },
    data () {
        return {
            heading: 'Breeds',
            breedListButton: 'Click breeds',
            breedData: '',
            breedNames: [],
            welcomeMessage: 'Check out all the breeds'
        }
    },
    created () {
        this.getAllBreedList()
    },
    methods: {
    /* --- fetch breeds all breeds --- */
        getAllBreedList () {
            const temporaryBreedNames = []
            fetch('https://dog.ceo/api/breeds/list/all')
                .then(response => response.json())
                .then(data => {
                    this.breedData = data.message
                    for (let breed in this.breedData) {
                        temporaryBreedNames.push(breed)
                    }
                    this.breedNames = temporaryBreedNames
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
</style>
