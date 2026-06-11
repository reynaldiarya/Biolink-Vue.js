<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    v-bind="linkProps"
    class="flex items-center justify-center w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="mr-2" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  url?: string
  to?: string | object
  icon?: string
}>(), {
  url: '',
  to: '',
  icon: ''
})

const isExternal = computed(() => !!props.url)

const linkProps = computed(() => {
  if (isExternal.value) {
    return {
      href: props.url,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
  return {
    to: props.to
  }
})
</script>
