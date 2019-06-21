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
import {getLatestMovies, 
  getPopularMovies, 
  getTrendingMovies, 
  getMovieGenres
} from '@/service/baseApi';
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
  public movieGenres: any[] = [];

  public mounted() {

    Promise.all([getLatestMovies(), getTrendingMovies(), getPopularMovies(), getMovieGenres()])
      .then((res) => {
        this.latestMovies = res[0].results;
        this.trendingMovies = res[1].results;
        this.popularMovies = res[2].results;
        this.movieGenres = res[3].genres;
        this.modifyMovies(this.latestMovies);
        this.modifyMovies(this.popularMovies);
        this.modifyMovies(this.trendingMovies);
        // this.modifyTrendingMovies();
        // this.modifyPopularMovies();
      });

    // getLatestMovies()
    //   .then((res) => this.latestMovies = res.results);

    // getTrendingMovies()
    //   .then((res) => this.trendingMovies = res.results);

    // getPopularMovies()
    //   .then((res) => this.popularMovies = res.results);
  }

  public modifyMovies(list: any) {
    list.map((x: any) => {
      const genres: any = [];
      x.genre_ids.forEach((id: any) => {
        const genreName = this.movieGenres.find((g: any) => g.id === id).name;
        genres.push(genreName);
      });
      x.genres = genres.join(',');
    });
  }
}
</script>

<style scoped lang="scss">
    .section {
        margin: 2rem 0;
    }
</style>

