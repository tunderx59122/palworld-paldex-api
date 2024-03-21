import { ref } from 'vue';
import { defineStore } from 'pinia';
import requestHandler from '../modules/requestHandler';

let requester = new requestHandler.Requester('/');

export const usePaldexStore = defineStore('paldex', () => {
  let loaded = ref(false);
  const paldex = ref([]);
  
  async function Pals() {
    paldex.value = await requester.get({ limit: -1 });
    loaded.value = true;
  }

  function getPals(){
    return paldex.value;
  }

  return { loaded, paldex, Pals, getPals };
});
