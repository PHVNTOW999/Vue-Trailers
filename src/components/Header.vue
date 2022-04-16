<template>
  <div class="header" id="header">
    <div class="wrapper">
      <div class="header__content">
        <div class="link">
          <router-link to="/Home"><h1>Home</h1></router-link>
        </div>
        <div class="link">
          <router-link @click="this.getRandomTrailer()" :to="RANDOM_TRAILER"
            ><h1>Random trailer</h1></router-link
          >
        </div>
        <div class="link">
          <router-link to="/AllGenres"><h1>Genres</h1></router-link>
        </div>
        <div class="link">
          <router-link to="/AllActors"><h1>Actors</h1></router-link>
        </div>
        <div class="link">
          <router-link to="/AllDirectors"><h1>Directors</h1></router-link>
        </div>
        <div class="search">
          <input
            v-model="this.$store.state.header.searchValue"
            @keyup.enter="this.pushSearchTrailer()"
            type="text"
          />
          <button @click="this.pushSearchTrailer()">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["SEARCH_VALUE", "RANDOM_TRAILER"]),
  },
  methods: {
    ...mapActions(["getRandomTrailer", "pushSearchTrailer"]),
  },
  mounted() {
    this.getRandomTrailer();

    // scroll func

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  top: 0px;
  width: 100%;
  height: 80px;
  position: fixed;
  transition: top 0.3s;
  background-color: #000;
  z-index: 1;
  &__content {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .link {
      a {
        color: #fff;
      }
      a:hover {
        color: rgb(40, 0, 140);
      }
      h1 {
        color: #fff;
        text-decoration: none;
      }
      h1:hover {
        color: rgb(40, 0, 140);
      }
    }
    .search {
      input {
        height: 28px;
        border-radius: 20px 0px 0px 20px;
        outline: none;
        color: #000;
      }
      button {
        height: 33px;
        border-radius: 0px 20px 20px 0px;
        color: #000;
      }
    }
  }
}
</style>
