<template>
  <div class="directorPage">
    <div class="directorPage__title">
      <h1>{{ name }}</h1>
    </div>
    <div class="wrapper">
      <div class="directorPage__main">
        <trailerCard
          v-for="(trailerID, i) in trailers"
          :key="i"
          :id="trailerID"
          >{{ trailers }}</trailerCard
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TrailerCard from "@/components/TrailerCard.vue";

export default {
  components: { TrailerCard },
  name: "DirectorPage",
  data() {
    return {
      id: "",
      name: this.$route.params.name,
      trailers: [],
      director: {},
    };
  },
  computed: {
    ...mapGetters({ directorsAPI: "DIRECTORS" }),
  },
  mounted() {
    setTimeout(() => {
      this.director = this.directorsAPI.filter((directorName) => {
        return directorName.name == this.name;
      });
      this.trailers = this.directorsAPI[this.director[0].id].trailerList;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.directorPage {
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
