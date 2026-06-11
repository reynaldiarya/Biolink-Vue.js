<template>
  <div
    v-if="biolink"
    class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8"
  >
    <img
      :src="profile.logo"
      class="w-32 h-32 rounded-full mb-6"
      alt="Avatar"
      loading="eager"
      fetchpriority="high"
    />
    <h1 class="text-3xl font-semibold mb-12 text-center">{{ biolink.name }}</h1>
    <ul class="space-y-4 w-full max-w-xl">
      <li v-for="(link, index) in biolink.links" :key="index">
        <LinkButton :url="link.url" :icon="link.icon">
          {{ link.name }}
        </LinkButton>
      </li>
    </ul>
    <router-link to="/" class="text-sm text-gray-700 mt-6 hover:underline">
      ← Return to main page
    </router-link>
    <p class="w-full text-center pt-12">{{ profile.footer }}</p>
  </div>
  <div
    v-else
    class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4"
  >
    <h1 class="text-3xl font-semibold mb-6">Page Not Found</h1>
    <p class="mb-6">The link you are looking for does not exist.</p>
    <router-link
      to="/"
      class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
    >
      Return to main page
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/collections/biolink.json';
import LinkButton from '@/components/LinkButton.vue';

const route = useRoute();
const profile = data.profile;
const biolink = computed(() => {
  return data.links.find((item) => item.slug === route.params.slug);
});
</script>
