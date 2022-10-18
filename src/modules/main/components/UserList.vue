<script setup lang="ts">
import useUser from '../composables/useUser'
const { userStore } = useUser()
</script>

<template>
  <div>
    <h3>{{ userStore.totalUsers }} Usuários Cadastrados</h3>
    <v-list>
      <v-list-item v-for="user in userStore.users" :key="user.id">
        {{ user.email }}
      </v-list-item>
    </v-list>
  </div>
</template>
