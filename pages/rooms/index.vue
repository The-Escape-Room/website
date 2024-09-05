<template>
    <div>
        <h1>Our Rooms</h1>

    </div>
</template>
<script lang="ts" setup>

const rooms = await useFetch('/api/rooms');
</script>