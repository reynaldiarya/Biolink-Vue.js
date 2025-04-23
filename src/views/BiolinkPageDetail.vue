<template>
  <div class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8">
    <img src="/assets/images/logo.png" class="w-32 h-32 rounded-full mb-6" alt="Avatar" loading="eager"
      fetchpriority="high">
    <h1 class="text-3xl font-semibold mb-12 text-center">Your Name</h1>
    <ul class="space-y-4 w-full max-w-xl">
      <li v-for="(link, index) in biolink.links" :key="index">
        <a :href="link.url" rel="noopener noreferrer"
          class="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
          <font-awesome-icon :icon="link.icon" class="mr-2" /> {{ link.name }}
        </a>
      </li>
    </ul>
    <router-link to="/" class="text-sm text-gray-600 mt-6 hover:underline">
      ← Return to main page
    </router-link>
    <p class="fixed bottom-0 w-full text-center pb-4">Made with ♥ in Tulungagung</p>
  </div>
</template>

<script>
import data from '@/collections/biolink.json'

export default {
  name: 'BiolinkPageDetail',
  data() {
    return {
      biolink: null
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.biolink = data.find(item => item.slug === slug)
  }
}
</script>