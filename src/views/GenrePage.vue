<template>
  <div class="generPage">
    <div class="generPage__title">
      <h1>{{ name }} trailers</h1>
    </div>
    <div class="wrapper">
      <div class="generPage__main">
        <trailerCard
          class="trailerCard"
          v-for="(trailerID, i) in trailers"
          :key="i"
          :id="trailerID"
        >
          {{ trailers }}
        </trailerCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TrailerCard from "@/components/TrailerCard.vue";

export default {
  components: { TrailerCard },
  name: "GenerPage",
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      trailers: [],
      genre: [],
    };
  },
  computed: {
    ...mapGetters({ trailersAPI: "TRAILERS" }),
    ...mapGetters({ genresAPI: "GENRES" }),
  },
  created() {
    this.$watch(
      () => this.$route.params.name,
      (name) => {
        this.$router.go({ name: "GenerPage", params: { name: name } });
      }
    );
  },
  mounted() {
    setTimeout(() => {
      this.genre = this.genresAPI.filter((genreName) => {
        return genreName.name == this.name;
      });
      this.id = this.genre[0].id;
      this.trailers = this.genresAPI[this.genre[0].id].trailerList;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.generPage {
  margin-top: 130px;
  height: 1200px;
  &__title {
    background-color: #000;
  }
  &__main {
    margin-top: 50px;
    height: 100%;
    display: grid;
    grid-gap: 75px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>