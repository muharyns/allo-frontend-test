<template>
  <div v-if="rocket" class="max-w-4xl mx-auto p-6 space-y-6 bg-white shadow-xl rounded-lg">
    <!-- Rocket Image -->
    <img :src="rocket.flickr_images[0]" alt="Rocket Image" class="w-full h-64 object-cover rounded-lg shadow" />
    
    <!-- Rocket Name -->
    <h1 class="text-4xl font-bold text-gray-800">{{ rocket.name }}</h1>
    
    <!-- Rocket Description -->
    <p class="text-lg text-gray-600">{{ rocket.description }}</p>

    <!-- Rocket Details -->
    <ul class="bg-gray-100 p-4 rounded-lg shadow space-y-2">
      <li><strong>Cost Per Launch:</strong> ${{ rocket.cost_per_launch.toLocaleString() }}</li>
      <li><strong>Country:</strong> {{ rocket.country }}</li>
      <li><strong>First Flight:</strong> {{ rocket.first_flight }}</li>
    </ul>
  </div>
</template>

  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getRocketById']),
      rocket() {
        return this.getRocketById(this.$route.params.id);
      }
    }
  };
  </script>