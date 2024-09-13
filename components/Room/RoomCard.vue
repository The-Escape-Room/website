<template>
  <div>
    <v-card color="primary-darken-4">
      <v-card-title class="text-white">
        <v-img :src="room.images[0]" cover height="300" class="justify-center">
          <v-card class="justify-center mx-auto my-10 pb-3" :elevation="5"color="primary-darken-4" width="500" >
            <v-card-title class="text-center text-secondary-500">
              {{room.name}}
            </v-card-title>
            <v-card-subtitle class="text-center text-gray-900">
              <v-row>
                <v-col>
                  Up to {{ room.amount_of_players }} players
                </v-col>
                <v-col>
                  {{ room.difficulty }} / 10 Difficulty
                </v-col>
                <v-col>
                  {{room.time_to_beat_in_minutes}} Minutes
                </v-col>
              </v-row>
            </v-card-subtitle>
          </v-card>
        </v-img>
      </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <v-card color="secondary" :elevation="10">
              <v-card-title>Description</v-card-title>
              <v-card-text>{{ room.description }}</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card :elevation="6">
              <div class="youtube" v-if="room.trailer !== ''">
              <lite-youtube :videoId="room.trailer"></lite-youtube>
            </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  room: {
    type: Object,
    required: true
  }
})
</script>

<style>

</style>