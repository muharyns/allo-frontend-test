<script>
import { mapState, mapActions } from "vuex";
import RocketCard from "@/components/RocketCard.vue";

export default {
  components: { RocketCard },
  data() {
    return { filter: "" };
  },
  computed: {
    ...mapState(["rockets", "loading", "error"]),
    filteredRockets() {
      return this.rockets.filter((r) =>
        r.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(["fetchRockets"]),
    fetchData() {
      this.fetchRockets();
    },
  },
  mounted() {
    this.fetchRockets();
  },
};
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
    <!-- Filter and Retry Button Section -->
    <div class="mb-6 flex flex-col md:flex-row gap-4">
      <input
        v-model="filter"
        placeholder="Filter rockets..."
        class="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="fetchData"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Filter
      </button>
    </div>

    <!-- Loading / Error States -->
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">
      Error loading rockets. 
      <button @click="fetchData" class="text-blue-600 underline">Retry</button>
    </div>

    <!-- Rocket Cards Section -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RocketCard v-for="rocket in filteredRockets" :key="rocket.id" :rocket="rocket" />
    </div>
  </div>
</template>

