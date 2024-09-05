<template>
  <v-card
  class="mx-auto"
  color="surface-variant"
  :image="props.room.images[0]"
  max-width="600"
  height="300"
  :subtitle="props.room.description"
  :title="props.room.name">
  <template v-slot:actions>
    <v-btn
    append-icon="mdi-chevron-right"
    color="gray-lighten-2"
    text="Check Out Room"
    variant="outlined"
    block
    :to="`/rooms/${props.room.name}`"></v-btn>
  </template>
  </v-card>
  <!-- <div class="">
    <a :href="`/rooms/${props.room.name}`">
      <div class="relative w-[350px] rounded inline-block border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 bg-secondary-500 hover:bg-primary-600">
        <img :src="props.room.images[0]" alt="">
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-primary-600 opacity-70">
            <h3 class="text-xl text-secondary-100 font-bold">{{ props.room.name }}</h3>
            <p class="mt-2 text-sm text-secondary-100">{{ props.room.description }}</p>
        </div>
      </div>
    </a>
  </div> -->
</template>

<script lang="ts" setup>
  const props = defineProps({
    room: {
      type: Object,
      required: true,
    }
  })
</script>

<style>

</style>