<template>
  <div v-if="show" class="tv-show">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ show.name }}
          </h1>
          <h2 class="subtitle">
            <span v-if="show.genres">
              {{ show.genres.join(", ") }}
            </span>
            <small>
              <b-icon icon="star-outline" size="is-small" />
              {{ show.rating.average }}
            </small>
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-html="show.summary" class="content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { fetchShow } from "@/utils/api.js";

export default {
  name: "tv-show",
  props: ["id"],
  data: function() {
    return {
      show: null
    };
  },
  mounted: async function() {
    const show =
      this.$store.getters.currentShow(this.id) || (await fetchShow(this.id));

    this.show = show;
  }
};
</script>
