<template>
  <div class="allActors">
    <div class="allActors__title">
      <h1>Actors</h1>
    </div>
    <div class="wrapper">
      <div class="main">
        <div @click="this.$router.push({
              name: 'ActorPage',
              params: { id: actor.id, name: actor.name },
            }) "
          v-for="(actor, i) in actors"
          :key="i"
          class="actor"
        >
          {{ actor.name }}
          <br />
          Trailers: {{ actor.trailerList.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AllActors",
  data() {
    return {
      actors: [],
    };
  },
  computed: {
    ...mapGetters({ actorsAPI: "ACTORS" }),
  },
  mounted() {
    setTimeout(() => {
      this.actors = this.actorsAPI;
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.allActors {
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
.actor {
  width: 180px;
  height: 120px;
  line-height: 50px;
  background-color: #000;
  transition-duration: 0.4s;
}
.actor:hover {
  background-color: #fff;
  transition-duration: 0.4s;
  color: #000;
  cursor: pointer;
}
</style>
