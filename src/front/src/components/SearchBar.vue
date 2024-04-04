<!-- SearchBar.vue -->
<template>
    <div>
      <input type="text" v-model="searchQuery" @input="$emit('filteredPals', searchQuery)" placeholder="Search...">
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
    input{
        margin: 0% 10% 5% 10%;
        height: 50px;
        width: 80%;
        font-size: xx-large;
        background-color: white;
        color: black;
    }

  </style>
  