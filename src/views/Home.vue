<template>
  <div class="home">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Start searching your favorites tv shows
          </h1>

          <h2 class="subtitle">
            then track your progress, schedule your watchings and more!
          </h2>

          <TheShowSearch />
        </div>
      </div>
    </section>

    <TvShowsList />
  </div>
</template>

<script>
import TheShowSearch from "@/components/TheShowSearch.vue";
import TvShowsList from "@/components/TvShowsList.vue";

export default {
  name: "home",
  components: {
    TheShowSearch,
    TvShowsList
  }
};
</script>
