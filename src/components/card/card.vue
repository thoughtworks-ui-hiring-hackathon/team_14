<template>
  <div class="movie" @click="showMovieDetails">
    <div class="movie-img">
      <img :src="imgSrc" @click="$bvModal.show('bv-modal-example')">
    </div>
    <div class="movie-details">
      <div class="row">
        <div class="col-md-6">
            <label for="">{{ title }}</label>
        </div>
        <div class="col-md-6">
            <!-- <font-awesome-icon icon="heart" /> -->
        </div>
       </div> 
      <div class="col-md-12 movie-category">
          <span>{{ genres }}</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import EventBus from '../../eventBus';

@Component({})
export default class Card extends Vue {

  @Prop({ default: '' })
  public imgSrc!: string;

  @Prop({ default: '' })
  public title!: string;

  @Prop({ default: '' })
  public genres!: string;

  @Prop({ default: 0 })
  public movieID!: number;

  public showMovieDetails(){
    EventBus.$emit('show-movie-detail',this.movieID);
  }

  public destroy(){
    EventBus.$off('show-movie-detail');
  }

}
</script>

<style scoped>
.movie{
  width:280px;
  height: 300px;
  border: 1px solid lightgray;
  margin-top:100px;
  float: left;
  margin-right: 50px;
}
.movie-img{
  height: 50%;
  background-color: lightgray;
}
.movie-details{
  margin: 20px 0 0 0 ;
}
.movie-details label{
      font-size: 17px;
    font-weight: 700;
}
.movie-category{
  text-align: left;
  padding: 0 20px;
}
.movie-category span{
  color: grey;
  font-size: 12px;
}
.movie-img img {
  width: 100%;
  height: 100%;

}
</style>
