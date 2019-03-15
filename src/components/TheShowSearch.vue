<template>
  <form @submit.prevent="onSubmit">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          type="text"
          class="input is-large"
          placeholder="Ex. Mr. Robot"
          autofocus="true"
          v-model="searchTerm"
        />
      </div>

      <div class="control">
        <button
          type="submit"
          class="button is-dark is-large"
          v-bind:class="{ 'is-loading': isLoading }"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { search } from "@/utils/api.js";

export default {
  name: "TheShowSearch",
  data: function() {
    return {
      searchTerm: "",
      isLoading: false
    };
  },
  methods: {
    onSubmit: async function() {
      this.isLoading = true;
      const searchResults = await search(this.searchTerm);
      this.isLoading = false;

      this.$store.commit("replaceSearchResults", searchResults);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
