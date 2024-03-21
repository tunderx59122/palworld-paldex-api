<template>
  <v-row no-gutters class="d-flex flex-row mx-4 pl-2">
    <v-col cols="12" class="d-flex flex-row px-4 pal-row justify-space-between align-center my-2" v-for="(pal, index) of pals" :key="index">
      <v-sheet class="pal-sheet">
        <img class="pal-img" :src="`${backBaseUrl}${pal.image}`" :alt="pal.name">
      </v-sheet>
      <p class="text-h5 text-uppercase font-weight-bold">{{ pal.name }}</p>
      <v-icon class="remove-icon" color="#3a3a3a" size="large" icon="mdi-minus" @click="emits('removePal', pal)"></v-icon>
    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted } from 'vue';
const backBaseUrl = import.meta.env.VITE_BACK_BASE_URL;

const props = defineProps({
  pals: Array
});

const emits = defineEmits(['removePal']);

onMounted(() => {
  console.log('pals:', props.pals);
});
</script>

<style lang="scss">
.pal-row {
  background-color: rgb(33, 34, 36);
  border: 0.3rem solid rgb(47, 54, 53);

  .pal-sheet {
    width: 100PX;
    margin: 0.5rem;
    border-radius: 50% !important;
    background-color: rgb(33, 34, 36);
    border: 0.3rem solid rgb(47, 54, 53);
    padding: 0.5rem;
  }

  .pal-img {
    width: 100%;
    border-radius: 50%;
  }

  .remove-icon {
    border-radius: 50%;
    background-color: white;
    margin-right: 0.5rem;
  }
}
</style>