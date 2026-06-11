<template>
  <footer class="w-full text-center pt-12 text-gray-600">
    <p>{{ text }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
