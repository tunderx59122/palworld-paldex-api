<template>
  <p v-for="(pal, index) in pals" :key="index">
    {{ pal }}
  </p>
  
  <!--
  <v-sheet
    class="d-flex align-content-space-around flex-wrap box-middle no-background"
    min-height="200"
  >
    <v-sheet
      v-for="(pal, index) in pals" :key="index" class="pal-items"
    >
      <p>{{ pal.name }}</p>
    </v-sheet>
  </v-sheet>-->
</template>

<script setup>
import { onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  pals: Object
});

onMounted(() => {
  console.log('pals:', props.pals);
});
</script>

<style lang="scss">
  // .box-middle {
  //   padding: 2rem;

  //   .pal-items {
  //     margin: 0.5rem;
  //     border-radius: 50% !important;
  //     background-color: rgb(33, 34, 36);
  //     border: 0.3rem solid rgb(47, 54, 53);
  //     padding: 0.5rem;
      
  //     .pal-img {
  //       width: 9rem;
  //       height: 9rem;
  //       border-radius: 50%;

  //     }
  //   }
  // }

</style>