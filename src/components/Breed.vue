
<template>
  <div class="breedbtn">
    <v-btn
      class="grey"
      color="#264653"
      width="200px"
      @click="breedClickHandler()"
    >
      <span v-if="subbreed">
        {{ subbreed }}
      </span>
      <span v-else>
        {{ breed }}
      </span>
    </v-btn>
    <div
      v-if="showbreedImage"
      class="breedImage">
      <img
        :src="breedImage"
        height="300"
        width="auto" >
      <div>
        <v-btn
          class="white--text"
          color="#f4a261"
          width="200px"
          @click="getNewImage()"
        >
          {{ newImageText }}
        </v-btn>
      </div>
    </div>
    <br >
  </div>
</template>
<script>
export default {
    name: 'Breed',
    props: {
        breed: {
            type: String,
            required: true
        },
        subbreed: {
            type: String,
            required: false,
            default: ''
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
            if (this.subbreed) {
                fetchURL = `https://dog.ceo/api/breed/${this.breed}/${this.subbreed}/images/random`
            } else {
                fetchURL = `https://dog.ceo/api/breed/${this.breed}/images/random`
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
