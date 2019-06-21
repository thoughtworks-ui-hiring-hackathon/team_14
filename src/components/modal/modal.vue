<template>
    <div>
        <b-modal v-model="modalShow">Hello From Modal!</b-modal>
        </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { getMovieDetails } from '@/service/baseApi';

@Component({})
export default class Modal extends Vue {
    @Prop({ default: 0 })
    public movieID!: number;

    public modalShow: boolean = false;

    public mounted() {
        this.modalShow= true;
        console.log(this.movieID);   
        getMovieDetails(this.movieID)
            .then((res: any) => console.log(res));
    }
}
</script>

<style scoped lang="scss">

</style>

