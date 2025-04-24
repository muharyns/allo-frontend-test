<script>
export default {
  props: ['rocket']
};
</script>
<template>
  <div
    class="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    @click="$router.push(`/rockets/${rocket.id}`)"
  >
    <img
      :src="rocket.flickr_images[0]"
      alt="Rocket Image"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ rocket.name }}</h3>
      <p class="text-sm text-gray-600 line-clamp-3">{{ rocket.description }}</p>
    </div>
  </div>
</template>


  
 