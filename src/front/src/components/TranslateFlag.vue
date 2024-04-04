<template>
  <img :src="'/' + locale + '.png'" class="flag" alt="Français" @click="toggleLocale"/>
</template>

<script>
  export default {
    computed: {
      locale() {
        return this.$root.$i18n.locale;
      }
    },
    methods: {
      toggleLocale() {
        this.$root.$i18n.locale = this.locale == "en" ? "fr" : "en";
      }
    }
  }
</script>

<style lang="scss">
  .flag {
    position: fixed;
    left: 0.5rem;
    top: 0.5rem;
    width: 2.75rem;
    height: 2rem;
    cursor: pointer;
  }
</style>