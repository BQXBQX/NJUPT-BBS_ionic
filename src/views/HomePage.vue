<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon :icon="addCircleOutline" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>
          <div
            style="
              display: flex;
              justify-content: space-around;
              align-items: center;
            "
          >
            <span>关注</span>
            <span>发现</span>
            <span>最新</span>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <Waterfall
        style="background: transparent"
        :list="list"
        :breakpoints="waterfallBreakpoints"
        :animationDelay="100"
        v-cloak
      >
        <template #item="{ item, url, index }">
          <div class="card">
            <LazyImg :url="url" />
            <p class="text">这是具体内容 {{ index }}</p>
          </div>
        </template>
      </Waterfall>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonContent,
} from "@ionic/vue";
import { searchOutline, addCircleOutline } from "ionicons/icons";
// import waterFall from "../components/waterFall/waterFall.vue"
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";

const list = ref([
  {
    src: "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.fmxjTlk4DBYSndlbVAijUwAAAA?pid=ImgDet&w=400&h=400&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.Za3YUaveix0Rq5cRsMdyMwHaNK?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.NFzL26srIgdtBhDlZdzRpAHaLH?pid=ImgDet&w=1200&h=1800&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/R.160cc2e61974726b7cf9cc7fdfe0ac25?rik=VsqzLjCbX%2fbl%2bw&riu=http%3a%2f%2fvault.snh48.today%2fking-include%2fuploads%2f2019%2f07%2f005yqakfgy1g55fq3lltjj32yo4g0npj-687932.jpg&ehk=DaBrt6F9HVhbR3URkjQCKxbn4SFsef4525VWR2Wcxrg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
]);

const waterfallBreakpoints = ref({
  800: {
    rowPerView: 2,
  },
});
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
