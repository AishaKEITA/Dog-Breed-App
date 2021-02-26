<template>
  <div id="sideBar">
    <section>
      <aside>
        <SideMenuButton
          v-for="button in menuButtons"
          :key="button.menuText"
          :menu-text="button.menuText"
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
                    path: '/breeds',
                    menuText: 'Breeds'
                },

                {
                    path: '/subbreeds',
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
