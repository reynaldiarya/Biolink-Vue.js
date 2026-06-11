<template>
  <main
    v-if="biolink"
    class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8 relative overflow-hidden"
  >
    <img
      :src="profile.logo"
      class="w-32 h-32 rounded-full mb-6 shadow-md"
      alt="Profile Picture"
      loading="eager"
      fetchpriority="high"
    />

    <h1 class="text-3xl font-semibold mb-12 text-center">
      {{ biolink.name }}
    </h1>

    <ul class="space-y-4 w-full max-w-xl">
      <li v-for="(link, index) in biolink.links" :key="index">
        <MediaEmbed
          v-if="
            link.youtubeId ||
            link.spotifyUrl ||
            link.soundcloudUrl ||
            link.tiktokId ||
            link.instagramId
          "
          :link="link"
        />
        <LinkButton
          v-else
          :url="link.url"
          :icon="link.icon"
          :bgColor="link.bgColor"
          :textColor="link.textColor"
        >
          {{ link.name }}
        </LinkButton>
      </li>
    </ul>

    <router-link to="/" class="text-sm text-gray-600 mt-6 hover:underline flex items-center">
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="mr-2 text-xs" /> Return to main page
    </router-link>

    <ProfileFooter :text="profile.footer" />
  </main>
  <main
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
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/collections/biolink.json';
import LinkButton from '@/components/LinkButton.vue';
import MediaEmbed from '@/components/MediaEmbed.vue';
import ProfileFooter from '@/components/ProfileFooter.vue';
import type { ProfileData, BiolinkItem } from '@/types';

const route = useRoute();
const profile = data.profile as ProfileData;

const biolink = computed(() => {
  return (data.links as BiolinkItem[]).find((item) => item.slug === route.params.slug);
});

const updateTitle = () => {
  if (biolink.value) {
    document.title = `${biolink.value.name} - ${profile.name}`;
  } else {
    document.title = 'Page Not Found';
  }
};

onMounted(updateTitle);
watch(biolink, updateTitle);
</script>
