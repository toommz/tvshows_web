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
export default {
  name: "TheShowSearch",
  computed: {
    isLoading: {
      get() {
        return this.$store.state.isLoading;
      }
    },
    searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },
      set(value) {
        this.$store.commit("updateSearchTerm", value);
      }
    }
  },
  methods: {
    onSubmit: function() {
      this.$store.dispatch("onSearchShowSubmit");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
