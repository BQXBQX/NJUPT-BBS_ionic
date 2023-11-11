<template>
  <ion-page>
    <ion-menu content-id="main-content">
      <ion-content class="ion-padding">
        <ion-list lines="inset" style="margin-top: 5vh; margin-bottom: 1vh">
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="personAddOutline" size="large"></ion-icon>
              <span> 发现好友 </span>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-list lines="none">
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="timeOutline" size="large"></ion-icon>
              <span> 历史记录 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
              <span> 在线发帖 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="fileTrayOutline" size="large"></ion-icon>
              <span> 我的草稿 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="golfOutline" size="large"></ion-icon>
              <span> 社区公约 </span>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-list lines="none" class="menuBottom">
          <ion-item @click="router.push('/setting')">
            <ion-label
              class="ionLabel"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <ion-icon
                :icon="settingsOutline"
                size="large"
                class="menuBottomIcon"
              ></ion-icon>
              <span> 设置 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label
              class="ionLabel"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <ion-icon
                :icon="handLeftOutline"
                size="large"
                class="menuBottomIcon"
              ></ion-icon>
              <span> 反馈 </span>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>
            <div style="width: 100%; display: flex; justify-content: center">
              <ion-avatar style="height: 30px; width: 30px">
                <img
                  alt="Silhouette of a person's head"
                  src="https://docs-demo.ionic.io/assets/madison.jpg"
                />
              </ion-avatar>
            </div>
          </ion-title>
          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content
        :scrollY="isOuterActive"
        :fullscreen="true"
        ref="outerContent"
        :scrollEvents="true"
        @ionScroll="handleOuterScroll"
      >
        <ion-header collapse="condense" style="margin-top: 2vh">
          <ion-toolbar>
            <ion-title size="large">
              <div style="display: flex; gap: 5vw">
                <ion-avatar style="height: 70px; width: 70px">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://docs-demo.ionic.io/assets/madison.jpg"
                  />
                </ion-avatar>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    height: 70px;
                    align-items: flex-start;
                    justify-content: center;
                  "
                >
                  <span>BQXBQX</span>
                  <span style="font-size: 15px">ID:785412369</span>
                </div>
              </div>
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="PersonalProfileContainer">
          <span>点击这里，填写简介</span>
        </div>
        <div class="mineMessage">
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">52</span>
            <span class="mineMessageItemSpan">关注</span>
          </div>
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">71</span>
            <span class="mineMessageItemSpan">粉丝</span>
          </div>
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">564</span>
            <span class="mineMessageItemSpan">获赞和收藏</span>
          </div>
          <div class="mineMessageItem">
            <ion-button
              style="
                height: 4vh;
                --border-radius: 25px;
                --background: rgb(255, 255, 255, 0.3);
                min-height: 0;
              "
            >
              <span style="font-size: 14px">编辑资料</span></ion-button
            >
          </div>
          <div class="mineMessageItem">
            <ion-button
              style="
                height: 4vh;
                --border-radius: 25px;
                --background: rgb(255, 255, 255, 0.3);
                min-height: 0;
              "
              @click="router.push('/setting')"
            >
              <ion-icon :icon="settingsOutline" />
            </ion-button>
          </div>
        </div>
        <ion-item-divider ref="dividerRef" :sticky="true">
          <div class="mineNavContainer">
            <ion-segment
              style="width: 100%; background: rgb(10, 10, 10, 1)"
              :value="segment"
              @ionChange="onSegmentChange"
            >
              <ion-segment-button value="0">
                <span>笔记</span>
              </ion-segment-button>
              <ion-segment-button value="1">
                <span>收藏</span>
              </ion-segment-button>
              <ion-segment-button value="2">
                <span>点赞</span>
              </ion-segment-button>
            </ion-segment>
          </div>
        </ion-item-divider>
        <swiper class="mySwiper" @swiper="onSwiper">
          <swiper-slide>
            <ion-content
              class="innerContent"
              style="margin-top: 5px"
              :scrollY="isInnerActive"
              :fullscreen="true"
              ref="innerContent"
              :scrollEvents="true"
              @ionScroll="handleInnerScroll"
            >
              <new-water-fall
                ref="slideContentItem"
                :list="list"
                :waterfallBreakpoints="waterfallBreakpoints"
              ></new-water-fall>
            </ion-content>
          </swiper-slide>
          <swiper-slide>
            <ion-content>
              <div
                style="height: 1000px; width: 100%; background-color: aqua"
              ></div>
              <div
                style="height: 1000px; width: 100%; background-color: red"
              ></div>
            </ion-content>
          </swiper-slide>
          <swiper-slide>
            <ion-content> </ion-content>
          </swiper-slide>
        </swiper>
      </ion-content>
    </ion-page>
  </ion-page>
</template>

<script setup lang="ts">
import myPostContainer from "../../components/myPostContainer/myPostContainer.vue";
import { ref, onMounted, nextTick } from "vue";
import {
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonMenu,
  IonButtons,
  IonLabel,
  IonItemDivider,
  IonModal,
  IonInput,
} from "@ionic/vue";
import {
  settingsOutline,
  shareOutline,
  personAddOutline,
  fileTrayOutline,
  timeOutline,
  addCircleOutline,
  golfOutline,
  handLeftOutline,
  documentOutline,
  bookmarksOutline,
  starOutline,
  search,
  logoHackernews,
} from "ionicons/icons";
import router from "@/router";

const dividerRef: any = ref(null);
import newWaterFall from "@/components/newWaterFall/newWaterFall.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
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
const list1 = ref([
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
const segment = ref("0");
const swiperRef: any = ref(null);
const activeIndex = ref(null);

function onSegmentChange(event: any) {
  const segmentIndex: any = event.detail.value;
  // console.log(segmentIndex);
  swiperRef.value.slideTo(segmentIndex);
}

onMounted(() => {
  console.log(window.innerHeight);
  const innerHeight = window.innerHeight - 50 - 44 - 55;
  console.log(innerHeight);
  innerContent.value.$el.style.height = innerHeight + "px";
  console.log(window.innerWidth);
  const segmentPaddingStart = (window.innerWidth - 210) / 2;
  console.log(segmentPaddingStart);
  console.log(dividerRef.value.$el);
  dividerRef.value.$el.style.setProperty(
    "--padding-start",
    segmentPaddingStart + 'px'
  );
});

const slideContentItem = ref();
const outerContent = ref();
const innerContent = ref();
const isInnerActive = ref(false);
const isOuterActive = ref(true);

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  swiper.params.loop = true;
  console.log(swiper.params);
  swiperRef.value.update();
};

function handleInnerScroll() {
  // console.log(slideContentItem.value.$el);
  const top = slideContentItem.value.$el.getBoundingClientRect().top;
  console.log(top);
  setTimeout(() => {
    if (top > 93) {
      isOuterActive.value = true;
      isInnerActive.value = false;
      console.log(isInnerActive.value);
      console.log("hello");
    }
  }, 0);
}

function handleOuterScroll() {
  const top = dividerRef.value.$el.getBoundingClientRect().top;
  console.log(top);
  if (top === 44) {
    // console.log("hello");
    isInnerActive.value = true;
    isOuterActive.value = false;
  }
}
</script>

<style scoped>
.PersonalProfileContainer {
  margin: 2vh 4vw;
}
.mineMessage {
  height: 44px;
  margin: 2vh 4vw;
  display: flex;
  gap: 4vw;
  justify-content: space-between;
}

.menuBottomIcon {
  background: rgb(255, 255, 255, 0.3);
  height: 30px;
  width: 30px;
  padding: 7px;
  border-radius: 15px;
}
.mineMessageItem {
  gap: 0.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mineMessageItemSpan {
  font-size: 12px;
}

.ionLabel {
  display: flex;
  align-items: center;
  gap: 2vw;
}

.menuBottom {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 88%;
  justify-content: space-evenly;
  margin-bottom: 2vh;
}
span {
  font-weight: 700;
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
  width: 210px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
ion-item-divider {
  --padding-top: 0.8vh;
  --padding-bottom: 0.8vh;
  height: 50px;
}
.navButtons {
  display: flex;
}
.swiper {
  height: fit-content;
  width: 100%;
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
