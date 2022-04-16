<template>
  <div class="main">
    <Header />
    <!-- Main Page is "Home.vue" -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
import TrailerPage from "./views/TrailerPage.vue";

import { mapActions } from "vuex"

// reg imgs

import img1 from "@/assets/trailersIMG/avengers-infinity-war/logo.jpg"
import img2 from "@/assets/trailersIMG/deadpool-2/logo.jpg"
import img3 from "@/assets/trailersIMG/django-unchained/logo.jpg"
import img4 from "@/assets/trailersIMG/harryPotterAndTheDeathlyHallowsPart-2/logo.jpg"
import img5 from "@/assets/trailersIMG/your-name/logo.jpg"
import img6 from "@/assets/trailersIMG/venom/logo.jpg"
import img7 from "@/assets/trailersIMG/venom-2/logo.jpg"
import img8 from "@/assets/trailersIMG/resident-evil/logo.jpg"

export default {
  components: {
    Header,
    Footer,
    Home,
    TrailerPage,
  },
  methods: {
    ...mapActions(["GET_GENRES_FROM_API", "GET_TRAILERS_FROM_API", "GET_ACTORS_FROM_API", "GET_DIRECTORS_FROM_API"])
  },
  mounted() {
    this.GET_TRAILERS_FROM_API()
    this.GET_GENRES_FROM_API()
    this.GET_ACTORS_FROM_API()
    this.GET_DIRECTORS_FROM_API()
  },
};
</script>

<style lang="scss">
* {
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 1200px;
}
</style>
