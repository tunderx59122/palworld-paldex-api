<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row justify="center">
      <!-- Pour les ajouts de pals -->
      <v-col cols="2" class="paldex-side-column"></v-col>

      <!-- Ici c'est pour la liste des pals -->
      <v-col cols="8">
        <div class="pal-items">
          <ListPals :pals="palsData" />
        </div>
      </v-col>

      <!-- Les infos des pals -->
      <v-col cols="2" class="paldex-side-column"></v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue';
import { usePaldexStore } from '@/store/paldex';
import ListPals from '@/components/ListPals.vue';

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
    justify-content: center;
    height: 100%;
  }

  .box-background {
    background-color: #00000080;
  }

</style>