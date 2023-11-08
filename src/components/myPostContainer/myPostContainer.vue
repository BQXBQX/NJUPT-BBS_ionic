<template>
  <ion-list>
    <ion-item-divider ref="dividerRef" :sticky="true">
      <div class="mineNavContainer">
        <ion-segment
          style="width: 100%; background: rgb(10, 10, 10, 1)"
          value="document"
        >
          <ion-segment-button value="document">
            <span>笔记</span>
          </ion-segment-button>
          <ion-segment-button value="bookmarks">
            <span>收藏</span>
          </ion-segment-button>
          <ion-segment-button value="star">
            <span>点赞</span>
          </ion-segment-button>
        </ion-segment>
      </div>
    </ion-item-divider>
    <swiper class="mySwiper">
      <swiper-slide>
        <new-water-fall
          :list="list"
          :waterfallBreakpoints="waterfallBreakpoints"
        ></new-water-fall>
      </swiper-slide>
      <swiper-slide>
        <new-water-fall
          :list="list"
          :waterfallBreakpoints="waterfallBreakpoints"
        ></new-water-fall>
      </swiper-slide>
      <swiper-slide>
        <new-water-fall
          :list="list"
          :waterfallBreakpoints="waterfallBreakpoints"
        ></new-water-fall>
      </swiper-slide>
    </swiper>
  </ion-list>
</template>

<script setup lang="ts">
import { ref } from "vue";
import newWaterFall from "../newWaterFall/newWaterFall.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import {
  IonPage,
  IonList,
  IonItemDivider,
  IonSegment,
  IonSegmentButton,
  IonIcon,
} from "@ionic/vue";
import {
  documentOutline,
  bookmarksOutline,
  starOutline,
  search,
} from "ionicons/icons";
const waterfallBreakpoints = ref({
  800: {
    rowPerView: 2,
  },
});
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
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.427teaJRmIkEP1pvgrtV_gHaLH?pid=ImgDet&rs=1",
  },
]);
</script>

<style scoped>
span {
  font-weight: 1000;
}
ion-item-divider {
  --ion-color-step-100: rgb(10, 10, 10, 1);
  border-radius: 12px 12px 0 0;
}
ion-segment {
  height: 30px;
}
.mineNavContainer {
  height: 30px;
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
ion-item-divider {
  --padding-top: 0.8vh;
  --padding-start: 25vw;
  --padding-bottom: 0.8vh;
}
.navButtons {
  display: flex;
}
.swiper {
  height: fit-content;
  width: 100%;
}
ion-content {
  height: 1000px;
}
ion-segment-button.ios {
  --color: #428cff;
  --color-checked: #fff;
  --border-radius: 20vw;
}
ion-segment-button {
  --indicator-color: #428cff;
}
</style>
