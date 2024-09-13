<template>
  <div>
    <RoomCard :room="room"></RoomCard>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const room = (await useFetch('/api/room', {
  query: { name: route.params.name}
})).data.value;
</script>

<style>

</style>