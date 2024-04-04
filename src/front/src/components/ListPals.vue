<template>
  <SearchBar @filteredPals="searchPals" />
  <v-sheet
    class="d-flex align-content-space-around flex-wrap box-middle no-background"
    min-height="200"
  >
  <p v-if="filteredPalsList.length == 0" >No Pal found !</p>
    <v-sheet
      v-for="(pal, index) in filteredPalsList" :key="index" class="pal-items"
    >
    
      <v-icon class="add-icon" color="#3a3a3a" size="large" icon="mdi-plus" @click="emits('addPal', pal)"></v-icon>
      <img class="pal-img" :src="`${backBaseUrl}${pal.image}`" alt="Pal Image" @click="emits('infoPal', pal)">
    </v-sheet>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import { computed } from 'vue';

const backBaseUrl = import.meta.env.VITE_BACK_BASE_URL;

const props = defineProps({
  pals: Array
});

const searchResult = ref("")

const emits = defineEmits(['infoPal', 'addPal']);

function searchPals(value) {
  searchResult.value = value;
}

const filteredPalsList = computed(() => {
  return props.pals.filter(item => item.name.includes(searchResult.value))
})
</script>

<style lang="scss">
  .box-middle {
    justify-content: space-between;
    
    .pal-items {
      position: relative;
      margin: 0.5rem;
      border-radius: 50% !important;
      background-color: rgb(33, 34, 36);
      border: 0.3rem solid rgb(47, 54, 53);
      padding: 0.5rem;
      
      .pal-img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          filter: brightness(80%);
        }
      }

      .add-icon {
        z-index: 100;
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }

  p{
    font-size: xx-large;
  }

</style>