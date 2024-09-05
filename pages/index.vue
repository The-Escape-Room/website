<template>
  <div>

    <SlideShow />
    <v-card>
      <v-card-title>Some Text Right here</v-card-title>
    </v-card>
    <div class="bg-secondary-200 border rounded-lg">
      <h1 class="mt-6 text-xl text-center pb-3">Some of our Rooms</h1>
      <h1 class="text-center">Prettify This area to make it more interesting than it being a bland color</h1>
      <div class="grid xl:grid-cols-4 xl:gap-2 md:grid-cols-2 md:gap-2 pl-10">
        <div v-for="room in rooms.data.value" class="">
          <RoomCard :room="room" class=""/>
        </div>
      </div>
    </div>
    <v-footer>Footer Here</v-footer>
  </div>
</template>

<script lang="ts" setup>
const rooms = await useFetch('/api/rooms');
</script>
<style></style>
