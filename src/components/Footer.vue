
<template>
  <div class="footer">
  <v-app>
      <v-container>
    <v-row>
      <v-col col="12">
        <v-footer app color="1d3557" padless class="font-weight-medium">
          <v-col class="text-center" cols="12">
            <strong>&copy; Aisha Keita</strong>
             {{ new Date().getFullYear() }}
          </v-col>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {}
    }
}
</script>
<style scoped>
strong {
  color: #1d3557
}
</style>
