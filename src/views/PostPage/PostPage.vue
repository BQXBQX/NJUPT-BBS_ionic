<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="padding: 5px 0">
        <ion-buttons slot="start">
          <ion-button @click="$router.go(-1)" style="padding: 0px">
            <ion-icon :icon="chevronBackOutline" size="default"> </ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <concern-button> </concern-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="shareOutline" size="large" color="primary">
            </ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-avatar
          slot="secondary"
          style="margin: 0 0 0 3px; display: flex; align-items: center"
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
          <div class="sliderImgContainer">
            <img
              src="https://th.bing.com/th/id/OIP.qbKCUgXPfUFa2cEADaV5xgHadV?pid=ImgDet&rs=1"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sliderImgContainer">
            <img
              src="https://th.bing.com/th/id/OIP.Mo8NNJVIw_LUxHQ3B5Ky6AHaHa?pid=ImgDet&rs=1"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sliderImgContainer">
            <img
              src="https://th.bing.com/th/id/OIP.pZHL7DCDmur3fga82E-J-gHaNK?pid=ImgDet&rs=1"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sliderImgContainer">
            <img
              src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            />
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
          style="background: rgb(255, 255, 255, 0.1); width: 94vw; height: 1px"
        ></div>
      </div>
      <div class="postComment">
        <span class="postCommentTotal">共43条评论</span>
        <div
          lines="none"
          style="
            margin-top: 2vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2vh;
            width: 100%;
          "
        >
          <div
            class="firstItem"
            style="margin-bottom: 10px"
            v-for="item in commentRef"
            :key="item.id"
          >
            <div class="userAvatarContainer">
              <ion-avatar style="height: 40px; width: 40px">
                <img
                  alt="Silhouette of a person's head"
                  :src="item.userAvatar"
                />
              </ion-avatar>
            </div>
            <div class="RightContainer">
              <div class="firstUserCommentContainer">
                <div class="spanContainer">
                  <span style="color: rgb(255, 255, 255, 0.5); font-size: 14px">
                    {{ item.userName }}
                  </span>
                  <span style="font-size: 16px; margin-top: 2px">
                    {{ item.commentMessage }}
                  </span>
                  <span style="color: rgb(255, 255, 255, 0.5); font-size: 14px">
                    {{ item.timestamp }}
                  </span>
                </div>
                <div class="userGoodContainer">
                  <ion-icon
                    :icon="heartOutline"
                    size="default"
                    style="
                      color: rgb(255, 255, 255, 0.3);
                      height: 20px;
                      width: 20px;
                    "
                  >
                  </ion-icon>
                  <span style="color: rgb(255, 255, 255, 0.3); font-size: 12px"
                    >1300</span
                  >
                </div>
              </div>

              <div
                style="
                  margin-top: 1.2vh;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  gap: 0.8vh;
                "
              >
                <div
                  class="secondItem"
                  v-for="secondItem in item.commentInside"
                  :key="secondItem.id"
                >
                  <div class="userAvatarContainer">
                    <ion-avatar style="height: 25px; width: 25px">
                      <img
                        alt="Silhouette of a person's head"
                        :src="secondItem.userAvatar"
                      />
                    </ion-avatar>
                  </div>
                  <div class="RightContainer">
                    <div class="firstUserCommentContainer">
                      <div class="spanContainer">
                        <span
                          style="
                            color: rgb(255, 255, 255, 0.5);
                            font-size: 14px;
                          "
                        >
                          {{ secondItem.userName }}
                        </span>
                        <span style="font-size: 16px; margin-top: 5px">
                          {{ secondItem.commentMessage }}
                        </span>
                        <span
                          style="
                            color: rgb(255, 255, 255, 0.5);
                            font-size: 14px;
                          "
                        >
                          {{ secondItem.timestamp }}
                        </span>
                      </div>
                      <div class="userGoodContainer">
                        <ion-icon
                          :icon="heartOutline"
                          size="default"
                          style="
                            color: rgb(255, 255, 255, 0.3);
                            height: 20px;
                            width: 20px;
                          "
                        >
                        </ion-icon>
                        <span
                          style="
                            color: rgb(255, 255, 255, 0.3);
                            font-size: 12px;
                          "
                          >1300</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                  height: 1px;
                  width: 100%;
                  background-color: rgb(255, 255, 255, 0.1);
                  margin-top: 2vh;
                "
              ></div>
            </div>
          </div>
        </div>
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
              height: 44px;
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
            style="
              height: 40px;
              font-size: 13px;
              background: rgb(255, 255, 255, 0.1);
              border-radius: 0 20px 20px 0;
            "
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

import concernButton from "../../components/concernButton/concernButton.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

import {
  IonButton,
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
  chevronBackOutline,
} from "ionicons/icons";

import router from "@/router";

const commentRef = ref([
  {
    id: 2,
    userAvatar:
      "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",
    userName: "bqx",
    commentMessage:
      "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
    timestamp: "2023.12.11 10:01 AM",
    commentInside: [
      {
        id: 1,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQXBQX",
        commentMessage:
          "这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "",
      },
      {
        id: 2,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQX",
        commentMessage: "hello BQXBQX!",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "BQXBQX",
      },
    ],
  },
  {
    id: 2,
    userAvatar:
      "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",
    userName: "bqx",
    commentMessage: "hello world! I really want to fuck you!!!",
    timestamp: "2023.12.11 10:01 AM",
    commentInside: [
      {
        id: 1,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQXBQX",
        commentMessage: "HI world! cool😎",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "",
      },
      {
        id: 2,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQX",
        commentMessage: "hello BQXBQX!",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "BQXBQX",
      },
    ],
  },
  {
    id: 2,
    userAvatar:
      "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",
    userName: "bqx",
    commentMessage: "hello world! I really want to fuck you!!!",
    timestamp: "2023.12.11 10:01 AM",
    commentInside: [
      {
        id: 1,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQXBQX",
        commentMessage: "HI world! cool😎",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "",
      },
      {
        id: 2,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQX",
        commentMessage: "hello BQXBQX!",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "BQXBQX",
      },
    ],
  },
  {
    id: 2,
    userAvatar:
      "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

    userName: "bqx",
    commentMessage: "hello world!",
    timestamp: "2023.12.11 10:01 AM",
    commentInside: [
      {
        id: 1,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQXBQX",
        commentMessage: "HI world!",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "",
      },
      {
        id: 2,
        userAvatar:
          "https://th.bing.com/th/id/OIP.JiBJSDs7Nq9RvnLJhPvobQHaLH?pid=ImgDet&w=800&h=1200&rs=1",

        userName: "BQX",
        commentMessage: "hello BQXBQX!",
        timestamp: "2023.12.11 10:01 AM",
        toUserName: "BQXBQX",
      },
    ],
  },
]);

const dividerRef = <any>ref(null);

function clickSlider() {
  dividerRef.value.scrollIntoView({ behavior: "smooth" });
}
</script>
<style scoped>
.firstUserCommentContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.spanContainer {
  display: flex;
  flex-direction: column;
}
.userGoodContainer {
  display: flex;
  margin-left: 2vw;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}
ion-item {
  --padding-start: 0;
  --padding-top: 1vh;
  align-items: flex-start;
}
.firstItem {
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: flex-start;
}
.RightContainer {
  flex-grow: 1;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.sliderImgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-height: 50vh;
}
.secondItem {
  display: flex;
}
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
.userAvatarContainer {
  display: flex;
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
input {
  height: 40px;
}
</style>
