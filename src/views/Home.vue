<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getLatestMovies, getPopularMovies, getTrendingMovies} from '@/service/baseApi';

@Component({
  components: {}
})
export default class Home extends Vue {
  
  public latestMovies: any = [];
  public treandingMovies: any = [];
  public popularMovies: any = [];

  public created() {

    getLatestMovies()
      .then((res) => this.latestMovies = res);

    getTrendingMovies()
      .then((res) => this.treandingMovies = res);

    getPopularMovies()
      .then((res) => this.popularMovies = res);
  }
}
</script>
