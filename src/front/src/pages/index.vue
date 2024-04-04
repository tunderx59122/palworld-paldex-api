<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="pal-global">
    <v-row justify="center">
      <v-col cols="3" class="paldex-side-column">
        <div class="box-background">
          <h2 class="text-uppercase mx-8 mt-8 mb-4">Vos pals</h2>
          <ListPalsMe :pals="teamPals" @removePal="(pal) => teamPals.splice(teamPals.indexOf(pal), 1)"/>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="box-background padding-middle">
          <h2 class="text-uppercase mb-4">Liste des Pals</h2>
          <ListPals :pals="paldex" @infoPal="(pal) => infoPal = pal" @addPal="(pal) => addPal(pal)"/>
        </div>
      </v-col>

      <v-col cols="3" class="paldex-side-column">
        <div class="box-background padding-middle">
          <h2 class="text-uppercase mb-4">Détails du pal</h2>
          <PalsDetails :pals="infoPal" @addPal="(pal) => addPal(pal)"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { usePaldexStore } from '@/store/paldex';
import ListPals from '@/components/ListPals.vue';
import ListPalsMe from '@/components/ListPalsMe.vue';
import PalsDetails from '@/components/PalsDetails.vue';

const paldexStore = usePaldexStore();
const paldex = ref([]);
const infoPal = ref(null)
const teamPals = ref([])

onMounted(async () => {
  await paldexStore.Pals();
  paldex.value = paldexStore.paldex.content;
});

const addPal = (pal) => {
  if (teamPals.value.length == 5) return;
  teamPals.value.push(pal);
}
</script>


<style>
  .paldex-center {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }

  .box-background {
    background-color: #00000080 !important;
    height: 96.5vh;
    overflow-y: scroll;
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