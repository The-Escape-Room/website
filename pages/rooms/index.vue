<template>
  <div>
    <HomeRoomCards :rooms="rooms"></HomeRoomCards>
  </div>
</template>

<script lang="ts" setup>
const rooms = (await useFetch('/api/rooms')).data.value;
</script>

<style>

</style>