<template>
  <div class="app">
    <v-app>
      <Header />
      <section>
        <div class="container">
          <SideMenu />
          <v-main>
            <router-view/>
          </v-main>
        </div>
      </section>
    </v-app>
  </div>
</template>
<script>
import Header from './components/Header'
import SideMenu from './components/SideMenu'

export default {
    name: 'App',
    components: {
        Header,
        SideMenu
    },
    data () {
        return {}
    }
}
</script>
<style scoped>
section > div {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
}
section {
  max-width: 100%;
  height: auto;
}
</style>
