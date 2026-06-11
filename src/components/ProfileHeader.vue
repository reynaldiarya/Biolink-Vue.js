<template>
  <div class="flex flex-col items-center w-full mb-10">
    <img
      :src="profile.logo"
      class="w-32 h-32 rounded-full mb-6 shadow-md"
      alt="Profile Picture"
      loading="eager"
      fetchpriority="high"
    />
    <h1 class="text-3xl font-semibold mb-2 text-center">
      {{ profile.name }}
      <font-awesome-layers
        v-if="profile.verified"
        class="fa-fw text-blue-500 text-2xl align-middle ml-1"
      >
        <font-awesome-icon icon="fa-solid fa-certificate" />
        <font-awesome-icon
          icon="fa-solid fa-check"
          transform="shrink-6"
          class="text-white text-sm"
        />
      </font-awesome-layers>
    </h1>
    <p v-if="profile.bio" class="text-gray-600 text-center">
      {{ profile.bio }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProfileData } from '@/types';

defineProps<{
  profile: ProfileData;
}>();
</script>
