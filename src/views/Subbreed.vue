
<template>
  <div class="subbreedbtn">
    <v-btn
      color="red"
      width="200px"
    >
      {{ nameOverallBreed }}
    </v-btn>
        <Breed
         v-for="(item, index) in subbreeds"
        :key="index"
        :name="item"
        :overallbreed="nameOverallBreed"
        />

  </div>
</template>
<script>
import Breed from './Breed'
export default {
    name: 'Subbreed',
    components: {
        Breed
    },
    props: {
        nameOverallBreed: {
            type: String,
            required: true
        },
        subbreeds: {
            type: Array,
            required: true
        }
    },
    data () {
        return {

        }
    },
    methods: {
    }
}
</script>
<style scoped>

</style>
