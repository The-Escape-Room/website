<template>
    <div>

    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const room = (await useFetch('/api/room', {query: {
    name: route.params.name,
}})).data.value
</script>