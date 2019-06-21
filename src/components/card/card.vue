<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">{{}}</p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
}
</script>

<style scoped lang="scss">

</style>
