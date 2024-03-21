<template>

  <div v-if="props.pals" class="py-2 text-subtitle-1">
    <v-row no-gutters>
      <v-col cols="9">
          <span class="text-primary">Nom: </span>{{ props.pals.name }}<br>
          <span class="text-primary">Taille: </span>{{ props.pals.size }}<br>
          <span class="text-primary">Rareté: </span>{{ props.pals.rarity }}<br>
          <span class="text-primary">Prix: </span>{{ props.pals.price }}G<br>
          <span class="text-primary">Wiki: </span><a :href="props.pals.wiki" target="_blank">Lien</a><br>
      </v-col>
      <v-col>
        <img :src="backBaseUrl + props.pals.image" width="100%"/>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Types: </span>
        <ul class="pl-6">
          <li v-for="types in props.pals.types" :key="types">
            {{ types }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Description: </span>{{ props.pals.description }}<br>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Drops: </span>
        <ul class="pl-6">
          <li v-for="drop in props.pals.drops" :key="drop">
            {{ drop }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Stats travail: </span>
        <ul class="pl-6">
          <li v-for="stat in props.pals.suitability" :key="stat">
            {{ stat.type }} - {{ stat.level }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Stats: </span><br>
        <div class="px-4">
          <span class="text-primary">Défence: </span>{{ props.pals.stats.defense }}<br>
          <span class="text-primary">Vie: </span>{{ props.pals.stats.hp }}<br>
          <span class="text-primary">Stamina: </span>{{ props.pals.stats.stamina }}<br>
          <span class="text-primary">Support: </span>{{ props.pals.stats.support }}<br>
          <span class="text-primary">Nourriture: </span>{{ props.pals.stats.food }}<br>
          <span class="text-primary">Attaque: </span><br>
          <div class="px-4">
            <span class="text-primary">Melee: </span>{{ props.pals.stats.attack.melee }}<br>
            <span class="text-primary">Distance: </span>{{ props.pals.stats.attack.ranged }}<br>
          </div>
          <span class="text-primary">Vitesse: </span><br>
          <div class="px-4">
            <span class="text-primary">Monté: </span>{{ props.pals.stats.speed.ride }}<br>
            <span class="text-primary">Courir: </span>{{ props.pals.stats.speed.run }}<br>
            <span class="text-primary">Marche: </span>{{ props.pals.stats.speed.walk }}<br>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">Skills: </span>

        <v-card class="mx-n7 my-2">
          <v-tabs density="compact" fixed="true" slim v-model="tab" bg-color="primary">
            <v-tab v-for="skill in props.pals.skills" :key="skill" :value="skill.level" class="text-body-2">{{ skill.name }}</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item v-for="skill in props.pals.skills" :key="skill" :value="skill.level">
                <span class="text-primary">Niveau: </span>{{ skill.level }}<br>
                <span class="text-primary">Nom: </span>{{ skill.name }}<br>
                <span class="text-primary">Type: </span>{{ skill.type }}<br>
                <span class="text-primary">Puissance: </span>{{ skill.power }}<br>
                <span class="text-primary">Cooldown: </span>{{ skill.cooldown }}<br>
                <span class="text-primary">Description: </span>{{ skill.description }}<br>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </div>
  
</template>

<script setup>
import { defineProps, ref } from 'vue';

const backBaseUrl = import.meta.env.VITE_BACK_BASE_URL;
const tab = ref(null);

const props = defineProps({
  pals: Object
});

</script>

