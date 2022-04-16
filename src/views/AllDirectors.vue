<template>
  <div class="allDirectors">
    <div class="allDirectors__title">
      <h1>Directors</h1>
    </div>
    <div class="wrapper">
      <div class="main">
        <div
          @click="this.$router.push({ name: 'DirectorPage', params: { id: director.id, name: director.name } })"
          v-for="(director, i) in directors"
          :key="i"
          class="director"
        >
          {{ director.name }}
          <br />
          Trailers {{ director.trailerList.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "AllDirectors",
  data() {
    return {
      directors: []
    };
  },
  computed: {
    ...mapGetters({ directorsAPI: "DIRECTORS" })
  },
  mounted() {
    setTimeout(() => {
      this.directors = this.directorsAPI
    }, 1500);
  },
};
</script>

<style lang="scss" scoped>
.allDirectors {
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
.director {
  width: 180px;
  height: 120px;
  line-height: 50px;
  background-color: #000;
  transition-duration: 0.4s;
}
.director:hover {
  background-color: #fff;
  transition-duration: 0.4s;
  color: #000;
  cursor: pointer;
}
</style>