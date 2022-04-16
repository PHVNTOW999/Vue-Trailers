<template>
  <router-link :to="{ name: 'TrailerPage', params: { id: this.id } }">
    <div class="trailerCard">
      <div class="trailerCard__cover">
        <img :src="logo" alt />
      </div>
      <div class="trailerCard__desc">
        <div class="trailerCard__desc__btn">
          <img src="@/assets/IMG/play-button.png" alt />
        </div>
        <div class="trailerCard__desc__name">
          <h1>{{ name }}</h1>
        </div>
        <div class="trailerCard__desc__geners">
          <p href="#" v-for="(genre, i) in genres" :key="i">
            <router-link
              :to="{
                name: 'GenrePage',
                params: { id: genre.id, name: genre.name },
              }"
              >{{ genre.name }}</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import compBG from "../assets/compBG.jpg";

import { mapGetters } from "vuex";

export default {
  name: "trailerCard",
  props: ["id"],
  data() {
    return {
      name: "loading...",
      genres: [],
      genresID: [],
      logo: compBG,
    };
  },
  computed: {
    ...mapGetters({ trailersAPI: "TRAILERS" }),
    ...mapGetters({ genresAPI: "GENRES" }),
  },
  mounted() {
    setTimeout(() => {
      this.name = this.trailersAPI[this.id].name;
      this.genresID = this.trailersAPI[this.id].genresID;
      this.logo = this.trailersAPI[this.id].logo;
    }, 1000);
    setTimeout(() => {
      this.genresID.reduce((i, genre) => {
        return this.genres.push(this.genresAPI[genre]);
      }, 0);
    }, 1200);
  },
};
</script>

<style lang="scss" scoped>
.trailerCard {
  display: block;
  max-width: 180px;
  max-height: 640px;
  width: 180px;
  height: 320px;
  cursor: pointer;
  &__cover {
    max-width: 180px;
    max-height: 320px;
    img {
      display: block;
      max-width: 180px;
      max-height: 320px;
      width: 180px;
      height: 320px;
      filter: none;
    }
  }
  .trailerCard__cover {
    img {
      filter: none;
    }
  }
  .trailerCard__desc {
    display: none;
  }
}
.trailerCard:hover {
  .trailerCard__cover {
    img {
      filter: grayscale(1);
    }
  }
  .trailerCard__desc {
    display: block;
    position: relative;
    width: 180px;
    height: 320px;
    bottom: 320px;
    &__btn {
      img {
        margin-top: 120px;
        filter: invert(1);
      }
    }
    &__name {
      text-align: center;
      h1 {
        font-size: 20px;
      }
    }
    &__geners {
      margin: 0;
      max-width: 180px;
      p {
        margin: 0;
        font-size: 15px;
      }
    }
  }
}
</style>
