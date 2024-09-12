<template>
    <v-carousel
      height="600"
      :show-arrows="false"
      cycle
      hide-delimiter-background
      color="dark"
    >
    <div v-for="image in images">
      <v-carousel-item :src="image" cover></v-carousel-item>
    </div>
    </v-carousel>
</template>

<script lang="ts" setup>
  const images: string[] = [
    "https://www.raisingedmonton.com/wp-content/uploads/2020/04/escape-rooms.jpg",
    "https://cdn-0.studybreaks.com/wp-content/uploads/2018/06/play_escapology.jpg",
    "https://blogmedia.evbstatic.com/wp-content/uploads/rally-legacy/2019/01/14204125/escape-room.jpg",
    "https://www.ssesgauntlet.org/wp-content/uploads/2017/03/IMG_6528.jpg",
  ];
</script>

<style>

</style>