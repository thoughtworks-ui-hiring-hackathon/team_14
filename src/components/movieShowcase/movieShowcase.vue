<template>
    <div class="container">
        <h3 class="header">{{ title }}</h3>
        <carousel :movieList="movieList"></carousel>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Carousel from '@/components/carousel/carousel.vue';

@Component({
    components: {
        Carousel,
  },
})
export default class MovieShowcase extends Vue {
    @Prop({ default: '' })
    public title!: string;

    @Prop({ default: [] })
    public movieList!: any[];

}
</script>

<style scoped lang="scss">
    .container {
        margin: 1rem 0;
        text-align: left
    }
</style>
