<template>
  <div class="box">
    <article class="media">
      <div v-if="show.image" class="media-left">
        <figure class="image is-64x64">
          <img v-bind:src="imageURL" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ show.name }}</strong>
          </p>
        </div>
        <div v-if="show.summary" v-html="show.summary" class="content"></div>
      </div>
      <div class="media-right">
        <router-link
          v-bind:to="{ name: 'tv-show', params: { id: show.id } }"
          id="show.id"
          class="navbar-item"
        >
          <b-icon icon="eye" />
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "TvShowsListCard",
  props: ["show"],
  computed: {
    imageURL: {
      get() {
        return this.show.image.medium.replace("http", "https");
      }
    }
  }
};
</script>
