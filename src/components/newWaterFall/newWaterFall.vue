<template>
  <Waterfall
    style="background: transparent"
    :list="list"
    :breakpoints="waterfallBreakpoints"
    :animationDelay="100"
    :delay="-1000"
    :gutter="8"
  >
    <template #item="{ item, url, index }">
      <div class="card" @click="router.push('/post')">
        <LazyImg :url="url" />
        <p class="cardText">this is title {{ index }}</p>
      </div>
    </template>
  </Waterfall>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import router from "../../router/index";

const props = defineProps({
  list: Array,
  waterfallBreakpoints: Object,
});
</script>

<style scoped>
.card {
  background: rgb(255, 255, 255, 0.05);
  border-radius: 15px;
}
.cardText {
  padding: 0 2vw 2vh 2vw;
}
</style>
