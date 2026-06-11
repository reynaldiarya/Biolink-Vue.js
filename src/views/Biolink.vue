<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8"
  >
    <img
      :src="profile.logo"
      class="w-32 h-32 rounded-full mb-6"
      alt="Avatar"
      loading="eager"
      fetchpriority="high"
    />
    <h1 class="text-3xl font-semibold mb-12 text-center">{{ profile.name }}</h1>
    <ul class="space-y-4 w-full max-w-xl">
      <li v-for="(link, index) in links" :key="index">
        <LinkButton v-if="link.slug" :to="link.slug" :icon="link.icon">
          {{ link.name }}
        </LinkButton>
        <LinkButton v-else-if="link.url" :url="link.url" :icon="link.icon">
          {{ link.name }}
        </LinkButton>
      </li>
    </ul>
    <p class="w-full text-center pt-12">{{ profile.footer }}</p>
  </div>
</template>

<script setup lang="ts">
import data from '@/collections/biolink.json';
import LinkButton from '@/components/LinkButton.vue';

const profile = data.profile;
const links = data.links;
</script>
