<template>

  <div v-if="props.pals" class="py-2 text-subtitle-1">
    <v-row no-gutters>
      <v-col cols="9">
          <span class="text-primary">{{ t("PalDetails.name") }}</span>{{ props.pals.name }}<br>
          <span class="text-primary">{{ t("PalDetails.size") }}</span>{{ props.pals.size }}<br>
          <span class="text-primary">{{ t("PalDetails.rarity") }}</span>{{ props.pals.rarity }}<br>
          <span class="text-primary">{{ t("PalDetails.price") }}</span>{{ props.pals.price }}G<br>
          <span class="text-primary">{{ t("PalDetails.wiki") }}</span><a :href="props.pals.wiki" target="_blank">{{ t("PalDetails.link") }}</a><br>
      </v-col>
      <v-col>
        <img :src="backBaseUrl + props.pals.image" width="100%"/>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.types") }}</span>
        <ul class="pl-6">
          <li v-for="types in props.pals.types" :key="types">
            {{ types }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.description") }}</span>{{ props.pals.description }}<br>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.drops") }}</span>
        <ul class="pl-6">
          <li v-for="drop in props.pals.drops" :key="drop">
            {{ drop }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.statstravail") }}</span>
        <ul class="pl-6">
          <li v-for="stat in props.pals.suitability" :key="stat">
            {{ stat.type }} - {{ stat.level }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.stats") }}</span><br>
        <div class="px-4">
          <span class="text-primary">{{ t("PalDetails.defense") }}</span>{{ props.pals.stats.defense }}<br>
          <span class="text-primary">{{ t("PalDetails.life") }}</span>{{ props.pals.stats.hp }}<br>
          <span class="text-primary">{{ t("PalDetails.stamina") }}</span>{{ props.pals.stats.stamina }}<br>
          <span class="text-primary">{{ t("PalDetails.support") }}</span>{{ props.pals.stats.support }}<br>
          <span class="text-primary">{{ t("PalDetails.food") }}</span>{{ props.pals.stats.food }}<br>
          <span class="text-primary">{{ t("PalDetails.attack") }}</span><br>
          <div class="px-4">
            <span class="text-primary">{{ t("PalDetails.melee") }}</span>{{ props.pals.stats.attack.melee }}<br>
            <span class="text-primary">{{ t("PalDetails.distance") }}</span>{{ props.pals.stats.attack.ranged }}<br>
          </div>
          <span class="text-primary">{{ t("PalDetails.speed") }}</span><br>
          <div class="px-4">
            <span class="text-primary">{{ t("PalDetails.mounted") }}</span>{{ props.pals.stats.speed.ride }}<br>
            <span class="text-primary">{{ t("PalDetails.run") }}</span>{{ props.pals.stats.speed.run }}<br>
            <span class="text-primary">{{ t("PalDetails.walk") }}</span>{{ props.pals.stats.speed.walk }}<br>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="text-primary">{{ t("PalDetails.skills") }}</span>

        <v-card class="mx-n7 my-2">
          <v-tabs density="compact" fixed="true" slim v-model="tab" bg-color="primary">
            <v-tab v-for="skill in props.pals.skills" :key="skill" :value="skill.level" class="text-body-2">{{ skill.name }}</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item v-for="skill in props.pals.skills" :key="skill" :value="skill.level">
                <span class="text-primary">{{ t("PalDetails.level") }}</span>{{ skill.level }}<br>
                <span class="text-primary">{{ t("PalDetails.name") }}</span>{{ skill.name }}<br>
                <span class="text-primary">{{ t("PalDetails.type") }}</span>{{ skill.type }}<br>
                <span class="text-primary">{{ t("PalDetails.power") }}</span>{{ skill.power }}<br>
                <span class="text-primary">{{ t("PalDetails.cooldown") }}</span>{{ skill.cooldown }}<br>
                <span class="text-primary">{{ t("PalDetails.description") }}</span>{{ skill.description }}<br>
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
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const backBaseUrl = import.meta.env.VITE_BACK_BASE_URL;
const tab = ref(null);

const props = defineProps({
  pals: Object
});

</script>

