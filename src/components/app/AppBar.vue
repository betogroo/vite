<script setup lang="ts">
defineEmits(['toggle-drawer'])
</script>
<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-app-bar-title>Vue Vite Project</v-app-bar-title>
    <v-btn icon>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>
  </v-app-bar>
</template>
