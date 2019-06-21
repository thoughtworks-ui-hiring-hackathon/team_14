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
    <modal v-if="showModal" :movieID="movieID"></modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getLatestMovies,
  getPopularMovies,
  getTrendingMovies,
  getMovieGenres,
} from '@/service/baseApi';
import MovieShowcase from '@/components/movieShowcase/movieShowcase.vue';
import { IMG_URL } from '@/service/constants';
import EventBus from '@/eventBus';
import Modal from '@/components/modal/modal.vue';

@Component({
  components: {
    'movie-showcase': MovieShowcase,
    Modal,
  },
})
export default class Home extends Vue {

  public latestMovies: any = [];
  public trendingMovies: any = [];
  public popularMovies: any = [];
  public movieGenres: any[] = [];
  public showModal: boolean = false;
  public movieID: number = -1;

  public mounted() {
    EventBus.$on('show-movie-detail',(movieID : number)=>{
          this.movieID = movieID;
          this.showModal = true;
    });
    
    Promise.all([getLatestMovies(), getTrendingMovies(), getPopularMovies(), getMovieGenres()])
      .then((res) => {
        this.latestMovies = res[0].results;
        this.trendingMovies = res[1].results;
        this.popularMovies = res[2].results;
        this.movieGenres = res[3].genres;
        this.modifyMovies(this.latestMovies);
        this.modifyMovies(this.popularMovies);
        this.modifyMovies(this.trendingMovies);
      });
  }

  public modifyMovies(list: any) {
    list.map((x: any) => {
      const genres: any = [];
      x.genre_ids.forEach((id: any) => {
        const genreName = this.movieGenres.find((g: any) => g.id === id).name;
        genres.push(genreName);
      });
      x.imgSrc = `${IMG_URL}${x.poster_path}`;
      x.genres = genres.join(',');
    });
  }
}
</script>

<style scoped lang="scss">
    .section {
      display: flex;
        margin: 2rem 0;
    }
</style>

