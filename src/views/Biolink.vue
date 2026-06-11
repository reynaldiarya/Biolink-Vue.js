<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8 relative overflow-hidden"
  >
    <ProfileHeader :profile="profile" />

    <ul class="space-y-4 w-full max-w-xl">
      <li v-for="(link, index) in links" :key="index">
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
          v-else-if="link.slug"
          :to="link.slug"
          :icon="link.icon"
          :bgColor="link.bgColor"
          :textColor="link.textColor"
        >
          {{ link.name }}
        </LinkButton>
        <LinkButton
          v-else-if="link.url"
          :url="link.url"
          :icon="link.icon"
          :bgColor="link.bgColor"
          :textColor="link.textColor"
        >
          {{ link.name }}
        </LinkButton>
      </li>
    </ul>

    <ProfileFooter :text="profile.footer" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import data from '@/collections/biolink.json';
import LinkButton from '@/components/LinkButton.vue';
import MediaEmbed from '@/components/MediaEmbed.vue';
import ProfileHeader from '@/components/ProfileHeader.vue';
import ProfileFooter from '@/components/ProfileFooter.vue';
import type { ProfileData, BiolinkItem } from '@/types';

const profile = data.profile as ProfileData;
const links = data.links as BiolinkItem[];

onMounted(() => {
  document.title = profile.name;
});
</script>
