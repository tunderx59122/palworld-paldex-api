<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="pal-global">
    <v-row justify="center">
      <v-col cols="2" class="paldex-side-column">
        <div class="box-background padding-middle">
          <h2>Vos pals</h2>
          <ListPalsMe :pals="palsData" />
        </div>
      </v-col>

      <v-col cols="8">
        <div class="box-background padding-middle">
          <h2>Les pals</h2>
          <ListPals :pals="palsData" />
        </div>
      </v-col>

      <v-col cols="2" class="paldex-side-column">
        <div class="box-background padding-middle">
          <h2>Détails du pal</h2>
          <PalsDetails :pals="palsData" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue';
import { usePaldexStore } from '@/store/paldex';
import ListPals from '@/components/ListPals.vue';
import ListPalsMe from '@/components/ListPalsMe.vue';
import PalsDetails from '@/components/PalsDetails.vue';

const paldexStore = usePaldexStore();
const paldex = ref([]);

onMounted(async () => {
  await paldexStore.Pals();
  paldex.value = paldexStore.paldex.content;
});

const palsData = computed(() => paldex.value);
</script>


<style>
  .paldex-center {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }

  .box-background {
    background-color: #00000080 !important;
  }

  .no-background {
    background-color: transparent !important;
  }
  
  .padding-middle {
    padding: 2rem;
  }

  .pal-global {
    max-width: 100% !important;
  }

</style>