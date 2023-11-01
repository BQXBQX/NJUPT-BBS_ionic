<template>
  <ion-content>
    <div ref="picRef" class="homePageContent">
      <div class="postItem" style="height: 30vh">item1</div>
      <div class="postItem" style="height: ">item2</div>
      <div class="postItem" style="height: 30vh">item3</div>
      <div class="postItem" style="height: 10vh">item4</div>
      <div class="postItem" style="height: 40vh">item5</div>
      <div class="postItem">item6</div>
      <div class="postItem">item7</div>
      <div class="postItem">item8</div>
      <div class="postItem">item9</div>
      <div class="postItem">item10</div>
      <div class="postItem">item11</div>
      <div class="postItem">item12</div>
      <div class="postItem">item13</div>
      <div class="postItem">item14</div>
      <div class="postItem">item15</div>
    </div>
  </ion-content>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { IonContent } from "@ionic/vue";
const picRef = ref(null);

const items = ref(null);

onMounted(() => {
  items.value = Array.from(picRef.value.children);
  setTimeout(waterFall, 0);
});

window.onresize = function () {
  waterFall();
};

function getClient() {
  return {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
}

function waterFall() {
  const pageWidth = getClient().width;
  const itemWidth = items.value[0].offsetWidth;
  // console.log(items.value[0].offsetWidth);

  const columns = parseInt(pageWidth / (itemWidth + 5));
  const picList = [];
  for (let i = 0; i < items.value.length; i++) {
    if (i < columns) {
      items.value[i].style.top = 0;
      items.value[i].style.left = (itemWidth + 5) * i + 5 + "px";
      picList.push(items.value[i].offsetHeight);
    } else {
      let minHeight = picList[0];
      let index = 0;
      for (let j = 0; j < picList.length; j++) {
        if (minHeight > picList[j]) {
          minHeight = picList[j];
          index = j;
        }
      }
      items.value[i].style.top = picList[index] + 5 + "px";
      items.value[i].style.left = items.value[index].offsetLeft + "px";
      picList[index] = picList[index] + items.value[i].offsetHeight + 5;
    }
  }
}
</script>
<style scoped>
.homePageContent {
  top: 0.5vh;
  position: absolute;
  height: 100%;
  width: 100%;
}
.postItem {
  box-sizing: border-box;
  border: 1px solid #ccc;
  position: absolute;
  width: calc(100% / 2 - 8px);
  height: 20vh;
}
</style>
