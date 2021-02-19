<template>
  <div id="sideBar">
 <section>
      <aside>
      <SideMenuButton
        v-for="button in menuButtons"
        v-bind:key="button.menuText"
        :menuText="button.menuText"
        :path="button.path"
      />
    </aside>
   </section>
  </div>
</template>
<script>
import SideMenuButton from './SideMenuButton'
export default {
  name: 'SideMenu',
  components: {
    SideMenuButton
  },
  data () {
    return {
      menuButtons: [
        {
          path: '/',
          menuText: 'Home'
        },
        {
          path: '/Breeds',
          menuText: 'Breeds'
        },

        {
          path: '/SubBreeds',
          menuText: 'SubBreeds'
        }
      ]
    }
  }
}
</script>
<style scoped>
aside {
  background-color: #f1faee;
  height: 100vh;
}
</style>
