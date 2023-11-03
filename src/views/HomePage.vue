<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button  @click="router.push('/search')">
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon :icon="addCircleOutline" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>
          <ion-segment :value="segment" @ionChange="onSegmentChange">
            <ion-segment-button value="0"> 最新</ion-segment-button>
            <ion-segment-button value="1"> 推荐</ion-segment-button>
            <ion-segment-button value="2"> 最新</ion-segment-button>
          </ion-segment>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <swiper class="swiper-container" @swiper="onSwiper" :initialSlide="1">
        <swiper-slide>
          <ion-content>
            <Waterfall
              style="background: transparent"
              :list="list"
              :breakpoints="waterfallBreakpoints"
              :animationDelay="100"
              :delay="-1000"
              :gutter="8"
            >
              <template #item="{ item, url, index }">
                <div class="card">
                  <LazyImg :url="url" />
                  <p class="cardText">this is title {{ index }}</p>
                </div>
              </template>
            </Waterfall>
          </ion-content>
        </swiper-slide>
        <swiper-slide>
          <ion-content
            :scrollEvents="true"
            ref="contentRef"
            @ionScroll="handleScroll"
          >
            <div class="anchorFront"></div>
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
            <div ref="anchorEnd"></div>
          </ion-content>
        </swiper-slide>
        <swiper-slide>
          <ion-content ref="contentRef">
            <Waterfall
              style="background: transparent"
              :list="list"
              :breakpoints="waterfallBreakpoints"
              :animationDelay="100"
              :delay="-1000"
              :gutter="8"
            >
              <template #item="{ item, url, index }">
                <div class="card">
                  <LazyImg :url="url" />
                  <p class="cardText">this is title {{ index }}</p>
                </div>
              </template>
            </Waterfall>
          </ion-content>
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { SwiperSlide, Swiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import { Ref, onMounted, ref, watch, onBeforeUnmount } from "vue";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";
import { searchOutline, addCircleOutline } from "ionicons/icons";
// import waterFall from "../components/waterFall/waterFall.vue"
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import { throttle } from "lodash";
import router from "@/router";

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

const waterfallBreakpoints = ref({
  800: {
    rowPerView: 2,
  },
});

const swiperRef: any = ref();

const activeIndex = ref(1);

const segment: any = ref("1");

const anchorEnd: any = ref(null);
const anchorEndPosition: Ref<number> = ref(0);
const contentRef: any = ref();

const newUrlStore: Ref<Array> = ref([]);

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  swiper.on("slideChange", function (event: any) {
    activeIndex.value = event.activeIndex;
  });
};

// watch()
let scrollPosition = 0;

const handleScroll = throttle(async (event) => {
  const contentElement = contentRef.value.$el;
  if (contentElement) {
    const positionThresholdFetchDate = anchorEndPosition.value - 1000; // 触发位置的阈值
    const positionThresholdRender = anchorEndPosition.value - 500;
    if (event.detail.scrollTop > scrollPosition) {
      scrollPosition = event.detail.scrollTop;
      // console.log("store",scrollPosition);
    }
    // console.log((scrollPosition > positionThresholdFetchDate) && (event.detail.scrollTop >= scrollPosition));

    if (
      scrollPosition > positionThresholdFetchDate &&
      event.detail.scrollTop >= scrollPosition
    ) {
      fetch("https://picsum.photos/200")
        .then((response) => {
          if (!response.ok) {
            throw new Error("请求失败");
          }
          return response; // 获取二进制数据
        })
        .then((response) => {
          // 在这里处理获取到的数据
          newUrlStore.value.push({ src: response.url });
          //写入图片下载的逻辑
          console.log("fetch");
          if (scrollPosition > positionThresholdRender) {
            list.value = list.value.concat(newUrlStore.value);
            newUrlStore.value = [];
            console.log("render");
          }
        })
        .catch((error) => {
          console.error("发生错误", error);
          // 在这里处理错误
        });
    }
  }
}, 200);

watch(activeIndex, () => {
  segment.value = activeIndex.value.toString();
});

function onSegmentChange(event: any) {
  const segmentIndex: any = event.detail.value;
  swiperRef.value.slideTo(segmentIndex);
}

onMounted(async () => {
  setTimeout(() => {
    anchorEndPosition.value = anchorEnd.value.offsetTop;
    console.log(anchorEndPosition.value);
  }, 250);
});
</script>
<style scoped>
.swiper {
  height: 100%;
}
.card {
  background: rgb(255, 255, 255, 0.05);
  border-radius: 15px;
}
.cardText {
  padding: 0 2vw 2vh 2vw;
}
.lazy__box {
  border-radius: 15px 15px 0 0;
}
.anchor {
  background-color: aqua;
  width: 100%;
}
</style>
