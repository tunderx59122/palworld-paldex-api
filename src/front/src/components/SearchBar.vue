<!-- SearchBar.vue -->
<template>
    <div>
      <input type="text" v-model="searchQuery" @change="$emit('filteredPals', searchQuery)" placeholder="Search...">
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        searchQuery: '',
        // Simulated search results
        searchResults: []
      }
    },
  }
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  