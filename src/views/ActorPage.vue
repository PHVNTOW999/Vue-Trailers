<template>
  <div class="actorPage">
    <div class="actorPage__title">
      <h1>{{ name }}</h1>
    </div>
    <div class="wrapper">
      <div class="actorPage__main">
        <trailerCard
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
  name: "ActorPage",
  data() {
    return {
      id: "",
      name: this.$route.params.name,
      trailers: [],
      actor: {},
    };
  },
  computed: {
    ...mapGetters({ actorsAPI: "ACTORS" }),
  },
  mounted() {
    setTimeout(() => {
      this.actor = this.actorsAPI.filter((actorName) => {
        return actorName.name == this.name;
      });
      this.trailers = this.actorsAPI[this.actor[0].id].trailerList;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.actorPage {
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