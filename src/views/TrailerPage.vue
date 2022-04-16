<template>
  <div class="wrapper">
    <div class="trailerPage">
      <div class="trailerPage__logo">
        <img :src="logo" alt="" />
      </div>
      <div class="trailerPage__name">
        <h1>{{ name }}</h1>
      </div>
      <div class="trailerPage__desc">
        <h2>Description</h2>
        <p>{{ desc }}</p>
      </div>
      <div class="trailerPage__genres">
        <h2>Genres</h2>
        <div class="wrap">
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
      <div class="trailerPage__actors">
        <h2>Actors</h2>
        <div class="wrap">
          <p href="#" v-for="(actor, i) in actors" :key="i">
            <router-link
              :to="{
                name: 'ActorPage',
                params: { id: actor.id, name: actor.name },
              }"
              >{{ actor.name }}</router-link
            >
          </p>
        </div>
      </div>
      <div class="trailerPage__directors">
        <h2>Directors</h2>
        <div class="wrap">
          <p href="#" v-for="(director, i) in directors" :key="i">
            <router-link
              :to="{
                name: 'DirectorPage',
                params: { id: director.id, name: director.name },
              }"
              >{{ director.name }}</router-link
            >
          </p>
        </div>
      </div>
      <div class="trailerPage__video">
        <iframe
          :src="videoPath"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TrailePage",
  props: [],
  data() {
    return {
      id: this.$route.params.id,
      name: "undefined",
      desc: "undefined",
      genres: [],
      genresID: [],
      actors: [],
      actorsID: [],
      directors: [],
      logo: "undefined",
      videoPath: "undefined",
    };
  },
  computed: {
    ...mapGetters({ trailersAPI: "TRAILERS" }),
    ...mapGetters({ genresAPI: "GENRES" }),
    ...mapGetters({ actorsAPI: "ACTORS" }),
    ...mapGetters({ directorsAPI: "DIRECTORS" }),
  },
  mounted() {
    setTimeout(() => {
      this.name = this.trailersAPI[this.id].name;
      this.desc = this.trailersAPI[this.id].desc;
      this.genresID = this.trailersAPI[this.id].genresID;
      this.actorsID = this.trailersAPI[this.id].actorsID;
      this.directorsID = this.trailersAPI[this.id].directorsID;
      this.logo = this.trailersAPI[this.id].logo;
      this.videoPath = this.trailersAPI[this.id].videoPath;

      this.genresID.reduce((i, genre) => {
        return this.genres.push(this.genresAPI[genre]);
      }, 0);

      this.actorsID.reduce((i, actor) => {
        return this.actors.push(this.actorsAPI[actor]);
      }, 0);

      this.directorsID.reduce((i, director) => {
        return this.directors.push(this.directorsAPI[director]);
      }, 0);
    }, 1500);
  },
  created() {
    this.$watch(
      () => this.$route.params.id,
      (id) => {
        setTimeout(() => {
          this.$router.go({ name: "TrailePage", params: { id: id } });
        }, 0);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.trailerPage {
  display: grid;
  grid-template-columns: 400px 800px;
  grid-template-rows: 80px 300px 86px 86px 86px 500px;
  margin-top: 130px;
  height: 1200px;
  color: #fff;
  p {
    text-align: center;
  }
  &__logo {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 5;
    width: 360px;
    height: 640px;
    float: left;
    img {
      max-width: 360px;
      max-height: 640px;
      width: 360px;
      height: 640px;
    }
  }
  &__name {
    grid-column-start: 2;
    grid-row-start: 1;
    width: 800px;
    height: 80px;
    line-height: 80px;
    float: right;
    h1 {
      text-align: center;
    }
  }
  &__desc {
    grid-column-start: 2;
    grid-row-start: 2;
    width: 800px;
    height: 300px;
    float: right;
    p {
      text-align: center;
    }
  }
  &__genres {
    grid-column-start: 2;
    grid-row-start: 3;
    width: 100%;
    height: 86px;
    float: right;
    h2 {
      margin-top: 10px;
    }
    p {
      margin: 10px 10px 0 10px;
    }
  }
  &__actors {
    grid-column-start: 2;
    grid-row-start: 4;
    width: 100%;
    height: 50px;
    h2 {
      margin-top: 10px;
    }
    p {
      margin: 10px 10px 0 10px;
    }
  }
  &__directors {
    grid-column-start: 2;
    grid-row-start: 5;
    width: 100%;
    height: 50px;
    h2 {
      margin-top: 10px;
    }
    p {
      margin: 10px 10px 0 10px;
    }
  }
  &__video {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 6;
    grid-row-gap: 50px;
    margin-top: 100px;
    width: 100%;
    height: 400px;
    float: right;
    iframe {
      margin: 0 auto;
      width: 800px;
      height: 400px;
    }
  }
}
h2 {
  margin: 0;
}
.wrap {
  display: flex;
  justify-content: center;
}
</style>