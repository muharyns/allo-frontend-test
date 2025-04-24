<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Navbar -->
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Rocket List</h1>
        <nav>
          <router-link to="/" class="text-white hover:underline">Home</router-link>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-600 text-white p-4 mt-6">
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 Rocket Space. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
