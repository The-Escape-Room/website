<template>
  <div>
    <h1>Welcome to the homepage</h1>

    <div id="rooms">
      <div class="bg-white">
        <div class="mx-auto mx-w-2xl px-4 py-16 sm:px-6 lg:max-w-7zl lg:px-7">
          <h2 class="text-2xl font-bold-tracking-tight text-gray-900">Our Rooms</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div v-for="room in rooms.data.value" >
                <div class="aspect-h-1 aspect-w-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <img :src="room.images[0]" alt="" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                  <div class="relative p-5">
                    <div class="mt-400">
                      <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        <div class="p-2">
                          <h2>{{room.name}}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center mt-12">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const rooms = await useFetch('/api/rooms');
</script>
<style></style>
