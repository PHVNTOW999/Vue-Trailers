<template>
  <div class="allGenres">
    <div class="allGenres__title">
      <h1>Genres</h1>
    </div>
    <div class="wrapper">
      <div class="main">
        <div
          @click="this.$router.push({ name: 'GenrePage', params: { name: genre.name } })"
          v-for="(genre, i) in genres"
          :key="i"
          class="genre"
        >
          {{ genre.name }}
          <br />
          Trailers: {{ genre.trailerList.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "AllGenres",
  data() {
    return {
      genres: []
    };
  },
  computed: {
    ...mapGetters({ genresAPI: "GENRES" })
  },
  mounted() {
    setTimeout(() => {
      this.genres = this.genresAPI
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.allGenres {
  margin-top: 130px;
  height: 1300px;
  &__title {
    background-color: #000;
  }
}
.main {
  margin-top: 50px;
  height: 100%;
  display: grid;
  grid-gap: 75px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.genre {
  width: 180px;
  height: 120px;
  line-height: 50px;
  background-color: #000;
  transition-duration: 0.4s;
}
.genre:hover {
  background-color: #fff;
  transition-duration: 0.4s;
  color: #000;
  cursor: pointer;
}
</style>