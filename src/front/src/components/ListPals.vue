<template>
  <v-sheet
    class="d-flex align-content-space-around flex-wrap box-middle no-background"
    min-height="200"
  >
    <v-sheet
      v-for="(pal, index) in pals" :key="index" class="pal-items" @click="getInfoPal(pal)"
    >
      <img class="pal-img" :src="`${backBaseUrl}${pal.image}`" alt="Pal Image">
    </v-sheet>
  </v-sheet>
</template>

<script setup>
import { onMounted } from 'vue';
const backBaseUrl = import.meta.env.VITE_BACK_BASE_URL;

const props = defineProps({
  pals: Array
});

const emits = defineEmits('infoPal');

onMounted(() => {
  console.log('pals:', props.pals);
});

function getInfoPal(pal) {
  emits('infoPal', pal);
}
</script>

<style lang="scss">
  .box-middle {
    justify-content: space-between;
    
    .pal-items {
      cursor: pointer;
      margin: 0.5rem;
      border-radius: 50% !important;
      background-color: rgb(33, 34, 36);
      border: 0.3rem solid rgb(47, 54, 53);
      padding: 0.5rem;

      &:hover {
        filter: brightness(80%);
      }
      
      .pal-img {
        width: 9rem;
        height: 9rem;
        border-radius: 50%;

      }
    }
  }

</style>