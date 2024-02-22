<template>
  <v-app>
    <v-main class="background">
      <router-view class="px-4 py-4"/>
    </v-main>
  </v-app>
</template>

<script setup>

</script>

<style>
.background {
  background: url('/background.jpg');
  background-size: cover;
}
</style>