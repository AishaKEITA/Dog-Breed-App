
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
    <div class="breedImage" v-if="showbreedImages">
      <img :src="breedImages[imageIndex]" height="300" width="auto" />
      <div>
        <v-btn
          class="white--text"
          color="#fcbf49"
          width="200px"
          @click="incrementIndex()"
        >
          {{ newImageText }}
        </v-btn>
      </div>
    </div>
    <br />
      <div class="subbreedsImage">
    </div>
  </div>
</template>
<script>
export default {
    name: 'Breed',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            breedImages: [],
            imageIndex: 0,
            showbreedImages: false,
            needFetch: true,
            newImageText: 'New image'
        }
    },
    methods: {
    /* --- fetch breeds by image --- */
        getBreedImages () {
            fetch(`https://dog.ceo/api/breed/${this.name}/images`)
                .then(response => response.json())
                .then(data => {
                    this.breedImages = data.message.slice(0, 8)
                })
            console.log(this.breedImages)
        },
        /* --- handle click of getting breed image--- */
        breedClickHandler () {
            if (this.needFetch) {
                this.getBreedImages()
                this.needFetch = false
            }
            this.showbreedImages = !this.showbreedImages
        },
        /* --- handle increment for each click --- */
        incrementIndex () {
            this.imageIndex++
            if (this.imageIndex >= this.breedImages.length) {
                this.imageIndex = 0
            }
        }
    }
}
</script>
<style scoped>
.breedImage {
  display: block;
}
</style>
