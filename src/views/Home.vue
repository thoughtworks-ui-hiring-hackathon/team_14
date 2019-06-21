<template>
  <div class="home">
    <section class="section">
      <movie-showcase title="Latest" :movieList="latestMovies"></movie-showcase>
    </section>
    <section class="section">
      <movie-showcase title="Trending" :movieList="trendingMovies"></movie-showcase>
    </section>
    <section class="section">
      <movie-showcase title="Most Watched" :movieList="popularMovies"></movie-showcase>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getLatestMovies, getPopularMovies, getTrendingMovies} from '@/service/baseApi';
import MovieShowcase from '@/components/movieShowcase/movieShowcase.vue';

@Component({
  components: {
    'movie-showcase': MovieShowcase,
  },
})
export default class Home extends Vue {

  public latestMovies: any = [];
  public trendingMovies: any = [];
  public popularMovies: any = [];

  public created() {

    getLatestMovies()
      .then((res) => this.latestMovies = res.results);

    getTrendingMovies()
      .then((res) => this.trendingMovies = res.results);

    getPopularMovies()
      .then((res) => this.popularMovies = res.results);
  }
}
</script>

<style scoped lang="scss">
    .section {
        margin: 2rem 0;
    }
</style>

