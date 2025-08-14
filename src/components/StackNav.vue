<script setup lang="ts">
    import type { NavItem } from '../types/stacknavType';
    import { ref } from 'vue';
    import { Icon } from "@iconify/vue";

    const props = defineProps<{
        items: NavItem[];
    }>();

    const selectedNavItem = ref('todo');

</script>

<template>

    <nav class="flex items-center gap-5 md:justify-between transform transition-custom overflow-x-auto py-2 mb-3 md:mb-1 md:scrollbar-hidden text-nowrap">

        <div v-for="item in items" 
            :key="item.id" 
            @click="selectedNavItem = item.id"
            class="flex gap-1 items-center relative group transition-custom cursor-pointer"
            role="button"
            aria-label="item.label"
            >

            <Icon :icon="`lucide:${item.icon}`" />

            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
        </div>
    </nav>

</template>



