
<template>
  <div class="sub-Breeds">
    <h1>Check out breeds and sub-breeds</h1>
    <div id="subbreeds"/>
    <div class="subbreed">
      <Subbreed
        v-for="(value, key) in breedsWithSubBreed"
        :key="key"
        :name-overall-breed="key"
        :subbreeds="value"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Subbreed from '../components/Subbreed'
export default {
    name: 'Subbreeds',
    components: {
        Footer,
        Subbreed
    },
    data () {
        return {
            breedsWithSubBreed: {}
        }
    },
    created () {
        this.getBreedList()
    },
    methods: {
        /* --- fetch breeds all breeds --- */
        getBreedList () {
            fetch('https://dog.ceo/api/breeds/list/all')
                .then(response => response.json())
                .then(data => {
                    let allbreeds = data.message
                    for (let key in allbreeds) {
                        if (!allbreeds[key].length) {
                            delete allbreeds[key]
                        }
                    }
                    this.breedsWithSubBreed = allbreeds
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
