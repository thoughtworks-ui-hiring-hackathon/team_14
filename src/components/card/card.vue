<template>
  <div class="movie">
    <div class="movie-img"></div>
    <div class="movie-details">
      
      <div class="col-md-6">
          <label for="">Movie Name</label>
      </div>

      <div class="col-md-6">
          
      </div>
      <div class="col-md-12 movie-category">
          <span>Action Adventure</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {

  @Prop({ default: '' })
  public imgSrc!: string;



}
</script>

<style scoped>
.movie{
  width:280px;
  height: 300px;
  border: 1px solid lightgray;
  margin-top:100px;
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
</style>
