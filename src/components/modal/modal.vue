<template>
    <div>
        <b-modal v-model="modalShow" :title="movieDetails.original_title">
            <div>{{ movieDetails.overview }}</div>
        </b-modal>
        </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { getMovieDetails } from '@/service/baseApi';

@Component({})
export default class Modal extends Vue {
    @Prop({ default: 0 })
    public movieID!: number;

    public movieDetails: any = {};

    public modalShow: boolean = false;

    public mounted() {
        this.modalShow= true;
        console.log(this.movieID);   
        getMovieDetails(this.movieID)
            .then((res: any) => this.movieDetails = res);
    }
}
</script>

<style scoped lang="scss">

</style>

