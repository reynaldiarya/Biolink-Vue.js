<template>
    <div class="min-h-screen flex flex-col items-center justify-center font-display bg-gray-100 px-4 pt-16 pb-8">
        <img src="/assets/images/logo.png" class="w-32 h-32 rounded-full mb-6" alt="Avatar" loading="eager"
            fetchpriority="high">
        <h1 class="text-3xl font-semibold mb-12 text-center">Your Name</h1>
        <ul class="space-y-4 w-full max-w-xl">
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.slug" rel="noopener noreferrer"
                    class="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
        <p class="fixed bottom-0 w-full text-center pb-4">Made with ♥ in Tulungagung</p>
    </div>
</template>


<script>
import biolink from '@/collections/biolink.json'; export default {
    data() {
        return {
            links: biolink,
        };
    },
};
</script>