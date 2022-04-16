<template>
  <div class="searchPage">
    <div class="searchPage__title">
      <h1 style="color: #fff">{{ this.searchValue }}</h1>
    </div>
    <div class="wrapper">
      <div class="searchPage__main">
        <trailerCard
          style="color: #fff"
          v-for="(trailer, i) in searchHandler"
          :key="i"
          :id="trailer.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TrailerCard from "@/components/TrailerCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "SearchPage",
  props: {},
  components: {
    TrailerCard,
  },
  data() {
    return {
      searchValue: this.$route.params.searchValue || null,
    };
  },
  computed: {
    ...mapGetters({ TRAILERS: "TRAILERS" }),
    searchHandler() {
      return this.TRAILERS.filter((trailer) => {
        return trailer.name
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    },
  },
  created() {
    this.$watch(
      () => this.$route.params.searchValue,
      () => {
        this.$router.go({
          name: "SearchPage",
          params: { searchValue: this.searchValue },
        });
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.searchPage {
  margin-top: 130px;
  height: 1200px;
  &__title {
    background-color: #000;
  }
  &__main {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
}
</style>