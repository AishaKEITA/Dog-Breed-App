
<template>
<div class="SideMenuButton">
  <v-btn class="ml-5" text @click="changePath">
    {{menuText}}
  </v-btn>
  </div>

</template>

<script>

export default {
    name: 'SideMenuButton',
    props: ['menuText', 'path'],
    data () {
        return {

        }
    },
    methods: {
        changePath () {
            this.$router.push(this.$props.path)
        }
    }
}
</script>

<style scoped>
</style>
