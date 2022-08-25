<script setup lang="ts">
import { ref } from 'vue'

const drawerActive = ref(false)
const toggleDrawer = () => {
  drawerActive.value = !drawerActive.value
}
</script>

<template>
  <v-app class="bg-indigo-lighten-4">
    <AppBar @toggle-drawer="toggleDrawer" />
    <AppNavigationDrawer :drawerActive="drawerActive" />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
