<template>
  <div class="w-full rounded-md overflow-hidden shadow-md bg-white">
    <!-- YouTube -->
    <div v-if="link.youtubeId" class="w-full aspect-video">
      <iframe
        class="w-full h-full"
        :src="`https://www.youtube.com/embed/${link.youtubeId}`"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
        "
        allowfullscreen
      ></iframe>
    </div>

    <!-- Spotify -->
    <div v-else-if="link.spotifyUrl" class="w-full h-[152px]">
      <iframe
        class="rounded-xl"
        :src="spotifyEmbedUrl"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    <!-- SoundCloud -->
    <div v-else-if="link.soundcloudUrl" class="w-full h-[166px]">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        :src="`https://w.soundcloud.com/player/?url=${encodeURIComponent(link.soundcloudUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`"
      ></iframe>
    </div>

    <!-- TikTok -->
    <div v-else-if="link.tiktokId" class="w-full h-[740px]">
      <iframe
        class="w-full h-full"
        :src="`https://www.tiktok.com/embed/v2/${link.tiktokId}`"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
        "
        allowfullscreen
      ></iframe>
    </div>

    <!-- Instagram -->
    <div v-else-if="link.instagramId" class="w-full h-[520px]">
      <iframe
        class="w-full h-full"
        :src="`https://www.instagram.com/p/${link.instagramId}/embed/`"
        frameborder="0"
        scrolling="no"
        allowtransparency="true"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BiolinkItem } from '@/types';

const props = defineProps<{
  link: BiolinkItem;
}>();

const spotifyEmbedUrl = computed(() => {
  if (!props.link.spotifyUrl) return '';
  return props.link.spotifyUrl.replace('open.spotify.com/', 'open.spotify.com/embed/');
});
</script>
