<template>
  <v-app-bar color="primary-darken-4" :elevation="2" class="absolute">
    <template v-slot:prepend v-if="$vuetify.display.smAndDown">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      (LOGO)
      [NAME]
    </v-app-bar-title>
    <div v-if="$vuetify.display.mdAndUp" v-for="route in routes">
      <v-btn variant="text" class="mx-2" color="secondary" :to="route.route">{{ route.title }}</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <v-btn>Schedule</v-btn>
  </v-app-bar>
  <br>
  <br>
  <br>
  <v-navigation-drawer
  v-model="drawer"
  temporary
  color="primary-darken-3">
  <v-list v-for="route in routes">
    <v-list-item>
      <v-btn variant="text" color="secondary" :to="route.route">{{ route.title }}</v-btn>
    </v-list-item>
  </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
let drawer = useState('drawer', () => false);

let routes = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Our Rooms",
    route: "/rooms",
  },
  {
    title: 'Events',
    route: '',
  },
  {
    title: 'Contact',
    route: '',
  }
];

</script>