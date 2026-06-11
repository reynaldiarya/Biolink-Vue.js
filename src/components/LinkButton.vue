<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    v-bind="linkProps"
    class="flex items-center justify-center w-full text-center px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
    :class="!bgColor ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''"
    :style="bgColor ? { backgroundColor: bgColor, color: textColor || '#ffffff' } : {}"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="mr-2" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    url?: string;
    to?: string | object;
    icon?: string;
    bgColor?: string;
    textColor?: string;
  }>(),
  {
    url: '',
    to: '',
    icon: '',
    bgColor: '',
    textColor: '',
  }
);

const isExternal = computed(() => !!props.url);

const linkProps = computed(() => {
  if (isExternal.value) {
    return {
      href: props.url,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }
  return {
    to: props.to,
  };
});
</script>
