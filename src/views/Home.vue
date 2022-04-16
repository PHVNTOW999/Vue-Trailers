<template>
  <div class="home">
    <div class="home__block">
      <div class="home__block__title"><h1>News</h1></div>
      <div class="wrapper">
        <div class="home__block__content">
          <trailerCard id="3" />
          <trailerCard id="1" />
          <trailerCard id="0" />
          <trailerCard id="5" />
          <trailerCard id="7" />
        </div>
      </div>
    </div>
    <div class="home__block">
      <div class="home__block__title"><h1>Soon In Out</h1></div>
      <div class="wrapper">
        <div class="home__block__content">
          <trailerCard id="3" />
          <trailerCard id="0" />
          <trailerCard id="2" />
          <trailerCard id="1" />
          <trailerCard id="4" />
        </div>
      </div>
    </div>
    <div class="home__block">
      <div class="home__block__title"><h1>Old But Gold</h1></div>
      <div class="wrapper">
        <div class="home__block__content">
          <trailerCard id="4" />
          <trailerCard id="5" />
          <trailerCard id="3" />
          <trailerCard id="7" />
          <trailerCard id="6" />
        </div>
      </div>
    </div>
    <div class="home__block">
      <div class="home__block__title"><h1>Popular</h1></div>
      <div class="wrapper">
        <div class="home__block__content">
          <trailerCard id="0" />
          <trailerCard id="3" />
          <trailerCard id="6" />
          <trailerCard id="2" />
          <trailerCard id="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src=
import TrailerCard from "@/components/TrailerCard.vue";

export default {
  name: "Home",
  components: {
    TrailerCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 130px;
  &__block {
    margin: 50px 0 50px 0;
    height: 400px;
    background-color: #000;
    &__title {
      color: #fff;
    } 
    &__content {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>