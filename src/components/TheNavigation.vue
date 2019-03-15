<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">TvShows</router-link>

      <a
        role="button"
        v-bind:class="{ 'is-active': isActive }"
        class="navbar-burger burger"
        v-on:click="onBurgerClick"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div v-bind:class="{ 'is-active': isActive }" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "the-navigation",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    onBurgerClick: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: hsl(271, 100%, 71%);
}
</style>
