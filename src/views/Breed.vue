
<template>
  <div class="breedbtn">
    <v-btn
      class="white--text"
      color="#264653"
      width="200px"
      @click="breedClickHandler()"
    >
      {{ name }}
    </v-btn>
    <div class="breedImage" v-if="showbreedImage">
      <img :src="breedImage" height="300" width="auto" />
      <div>
        <v-btn
          class="white--text"
          color="#fcbf49"
          width="200px"
          @click="getNewImage()"
        >
          {{ newImageText }}
        </v-btn>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
    name: 'Breed',
    props: {
        name: {
            type: String,
            required: true
        },
        overallbreed: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            breedImage: '',
            showbreedImage: false,
            needFetch: true,
            newImageText: 'New image'
        }
    },
    methods: {
    /* --- fetch breeds by image --- */
        getNewImage () {
            let fetchURL
            if (this.overallbreed) {
                fetchURL = `https://dog.ceo/api/breed/${this.overallbreed}/${this.name}/images/random`
            } else {
                fetchURL = `https://dog.ceo/api/breed/${this.name}/images/random`
            }
            fetch(fetchURL)
                .then(response => response.json())
                .then(data => {
                    this.breedImage = data.message
                })
        },
        /* --- handle click of getting breed image--- */
        breedClickHandler () {
            if (this.needFetch) {
                this.getNewImage()
                this.needFetch = false
            }
            this.showbreedImage = !this.showbreedImage
        }
    }
}
</script>
<style scoped>
.breedImage {
  display: block;
}
</style>
