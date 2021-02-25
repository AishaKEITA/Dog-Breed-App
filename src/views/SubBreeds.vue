
<template>
  <div class="sub-Breeds">
    <h1>Check out breeds and sub-breeds</h1>
      <div id="subbreeds">
      <Breed
        v-for="(breedName, index) in breedNames"
        :key="index"
        :name="breedName"
      />
    </div>

      <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Breed from './Breed'
export default {
    name: 'SubBreeds',
    components: {
        Footer,
        Breed
    },
    data () {
        return {
            breedData: '',
            breedNames: []
        }
    },
    created () {
        this.getBreedList()
    },
    methods: {
        /* --- fetch breeds all breeds --- */
        getBreedList () {
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
