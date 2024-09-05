<template>
  <div>

    <SlideShow />
    <v-card class="text-center">
      <v-card-title>Some Text Right here</v-card-title>
    </v-card>
    <HomeRooms :rooms="rooms.data.value"/>
    <v-card>
      <v-card-title>
        This section will not be on the website.
      </v-card-title>
      <v-card-subtitle>
        This is just for progress of the website
      </v-card-subtitle>
    </v-card>
    <div>
      <v-alert variant="tonal" type="info" title="Colors">
        Plan on having a more defined Color Scheme. Currently using a good variants of Eggplant Purple.
        However the Goldenrod Yellow only looks good on the lighter scale. Will need to lighten up the darker side to get more yellow than brown/red
      </v-alert>
      <v-alert variant="tonal" type="success" title="Navbar" text="Improved the navbar to behave correctly on all sizes of devices!"></v-alert>
      <v-alert variant="tonal" type="warning" title="Navbar Links" text="Only the Home, Our Rooms and The rooms links work"></v-alert>
      <v-alert variant="tonal" type="success" title="Home Page Room Cards">
        Improved the cards to have more interaction when hovering over the cards.
        <br>
        Also made the grid to respect device sizing
      </v-alert>
      <v-alert variant="tonal" type="error" title="Event Page">
        Have not started yet!
      </v-alert>
      <v-alert variant="tonal" type="error" title="Contact Page">
        Have not started yet!
      </v-alert>
      <v-alert variant="tonal" type="error" title="Scheduling Page">
        This will probably direct to a third party site to handle booking
      </v-alert>
    </div>
    <v-footer>Footer Here</v-footer>
  </div>
</template>

<script lang="ts" setup>
const rooms = await useFetch('/api/rooms');
</script>
<style></style>
