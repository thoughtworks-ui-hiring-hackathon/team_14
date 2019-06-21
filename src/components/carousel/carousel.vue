<template>
  <div class="container">
      <div class="" v-for="(movie, index ) in movieList" :key="index">
          <card :title="movie.title"></card>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Card from '@/components/card/card.vue';

@Component({
    components: {
        Card,
    },
})
export default class Carousel extends Vue {
    @Prop({ default: [] })
    public movieList!: any[];
}
</script>

<style scoped lang="scss">

</style>
