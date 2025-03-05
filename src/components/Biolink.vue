<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 class="text-4xl font-semibold mb-12">Your Name</h1>
        <ul class="space-y-4">
            <li v-for="(link, index) in links" :key="index">
                <a :href="link.url" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-96 h-12 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition duration-300 animate__animated animate__fadeIn">
                    <font-awesome-icon :icon="link.icon" class="mr-1" /> {{ link.name }}
                </a>
            </li>
        </ul>
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