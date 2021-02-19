
<template>
  <div class="home">
    <h1>welcome to the home</h1>
     <Breeds />
  </div>
</template>

<script>
import Breeds from '../views/Breeds'
export default {
  name: 'Home',
  components: {
    Breeds
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
