<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end"> concern </ion-buttons>
        <ion-buttons slot="end">
          <ion-icon
            :icon="shareOutline"
            size="large"
            color="primary"
            style="height: 27.2px"
          >
          </ion-icon>
        </ion-buttons>

        <ion-avatar
          slot="secondary"
          style="margin: 0 0 0 3vw; display: flex; align-items: center"
        >
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            style="height: 40px; width: 40px"
          />
        </ion-avatar>
        <ion-label>BQXBQX</ion-label>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <swiper :pagination="true" :modules="[Pagination]" class="mySwiper">
        <swiper-slide>
          <div>
            <ion-img
              src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <ion-img
              src="https://th.bing.com/th/id/OIP.Mo8NNJVIw_LUxHQ3B5Ky6AHaHa?pid=ImgDet&rs=1"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <ion-img
              src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <ion-img
              src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
          </div>
        </swiper-slide>
      </swiper>
      <div class="postText">
        <div class="postTextTitle">
          <h4>This is the post title</h4>
        </div>
        <div class="postTextContent">
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
          <span> This is the post content</span>
        </div>
        <div class="postTextBottom">
          <span style="font-size: 12px; color: gray; font-weight: 700"
            >10-20 3:25</span
          >
        </div>
      </div>
      <div
        ref="dividerRef"
        style="display: flex; width: 100vw; justify-content: center"
      >
        <div
          class="divider"
          style="background: rgb(255, 255, 255, 0.5); width: 94vw; height: 1px"
        ></div>
      </div>
      <div class="postComment">
        <span class="postCommentTotal">共43条评论</span>
        <ion-list>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item> <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
          <ion-item>item </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <div class="footerComment">
          <svg
            t="1698846128348"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8443"
            width="200"
            height="200"
            style="
              height: 40px;
              width: 80px;
              background: rgb(255, 255, 255, 0.1);
              border-radius: 20px 0 0 20px;
              padding: 8px;
            "
          >
            <path
              d="M832 896H192a48 48 0 0 1 0-96h640a48 48 0 0 1 0 96zM783.68 389.44l-30.4 30.4-45.12-45.12-90.56-90.56-45.44-45.44 30.4-30.4a128 128 0 0 1 181.12 181.12zM707.84 465.28l-263.68 263.68a32 32 0 0 1-18.24 8.96l-158.4 22.72a19.68 19.68 0 0 1-4.48 0.32 33.664 33.664 0 0 1-22.72-9.28 33.056 33.056 0 0 1-8.96-27.2l22.72-158.4a32 32 0 0 1 8.96-18.24l263.68-263.68z"
              p-id="8444"
              fill="#8a8a8a"
            ></path>
          </svg>
          <ion-input
            color="medium"
            placeholder="说点什么..."
            style="height: 40px; font-size: 13px"
          ></ion-input>
          <div class="footerItem">
            <ion-icon
              :icon="heartOutline"
              size="large"
              class="footerIcon"
            ></ion-icon>
            <span>53</span>
          </div>
          <div class="footerItem">
            <ion-icon
              :icon="starOutline"
              size="large"
              class="footerIcon"
            ></ion-icon>
            <span>75</span>
          </div>
          <div class="footerItem">
            <ion-icon
              class="footerIcon"
              :icon="chatbubbleEllipsesOutline"
              size="large"
              @click="clickSlider"
            ></ion-icon>
            <span>57</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonAvatar,
  IonItem,
  IonLabel,
  IonContent,
  IonIcon,
  IonFooter,
  IonImg,
  IonInput,
  IonList,
} from "@ionic/vue";
import {
  shareOutline,
  starOutline,
  chatbubbleEllipsesOutline,
  thumbsUpOutline,
  heartOutline,
} from "ionicons/icons";

import router from "@/router";

const dividerRef = <any>ref(null);

function clickSlider() {
  dividerRef.value.scrollIntoView({ behavior: "smooth" });
}
</script>
<style>
.mySwiper {
  width: 100%;
}
.swiper-wrapper {
  display: flex;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: brown;
}
.postTextBottom {
  margin-top: 3vh;
}
.postText {
  padding: 4vw;
}
.footerComment {
  display: flex;
}
.native-input.sc-ion-input-ios {
  height: 40px;
  background: rgb(255, 255, 255, 0.1);
  border-radius: 0 20px 20px 0;
}
.footerComment {
  display: flex;
  align-items: center;
}
.native-wrapper {
  display: flex;
  align-items: center;
}
.postComment {
  margin: 4vw;
}
.postCommentTotal {
  font-size: 14px;
  color: rgb(255, 255, 255, 0.4);
}
.footerItem {
  display: flex;
  align-items: center;
  margin: 1vw;
  gap: 1vw;
}
.footerIcon {
  height: 25px;
  width: 25px;
}
</style>
