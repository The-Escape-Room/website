<template>
  <div>
    <v-card
    class="mx-auto border"
    max-width="100%"
    color="secondary">
    <v-card-title class="text-center">
      <h1 class="text-xxl bold">Some of Our Rooms</h1>
    </v-card-title>
    <v-container fluid class="bg-primary-400">
      <v-row dense>
        <v-col
        v-for="room in props.rooms"
        :key="room.name"
        :cols="
          $vuetify.display.xs ? '12' : 
            $vuetify.display.sm ? '12' :
              $vuetify.display.md ? '6' :
                $vuetify.display.lg ? '3' :
                  $vuetify.display.xl ? '3' : '2'
        "
        >
        <v-hover>
          <template v-slot:default="{ isHovering, props}">
            <v-card
              v-bind="props"
              :elevation="isHovering ? '24' : '2'">
            <v-img :src="room.images[0]" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
              <v-card-title class="text-white" v-text="room.name"></v-card-title>
              <v-card-text v-text="room.description" class="text-secondary-500 "></v-card-text>
              <v-card-actions>
                <v-btn variant="outlined" color="secondary">Check Out Room</v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
          </template>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    rooms: {
      type: Array<{
        [key: string]: any;
      }>,
      required: true,
    }
  })
</script>

<style>

</style>