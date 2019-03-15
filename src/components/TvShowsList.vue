<template>
  <section class="section">
    <div class="container">
      <TvShowsListCard
        v-for="searchResult in searchResults()"
        v-bind:show="searchResult"
        v-bind:key="searchResult.id"
      />
    </div>
  </section>
</template>

<script>
import TvShowsListCard from "@/components/TvShowsListCard.vue";

export default {
  name: "TvShowsList",
  components: {
    TvShowsListCard
  },
  methods: {
    searchResults: function() {
      return this.$store.state.searchResults;
    }
  }
};
</script>
