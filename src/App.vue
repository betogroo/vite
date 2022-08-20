<script setup lang="ts"></script>

<template>
  <v-app class="bg-indigo-lighten-4">
    <div class="text-center">
      <router-link :to="{ name: 'HomeView' }">Home</router-link> |
      <router-link :to="{ name: 'AboutView' }">About</router-link>
    </div>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
