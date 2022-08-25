<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  drawerActive: boolean
}
const props = withDefaults(defineProps<Props>(), {
  drawerActive: true
})
const drawerActive = ref(false)
watch(
  () => props.drawerActive,
  () => {
    drawerActive.value = !drawerActive.value
  }
)
</script>
<template>
  <v-navigation-drawer app v-model="drawerActive"></v-navigation-drawer>
</template>
