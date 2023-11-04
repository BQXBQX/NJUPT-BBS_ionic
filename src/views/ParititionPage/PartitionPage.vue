<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>分区</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="none">
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="trophyOutline"></ion-icon>
            <span>竞赛寻人</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="easelOutline"></ion-icon>
            <span>失物招领</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="carOutline"></ion-icon>
            <span>共享拼车</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="storefrontOutline"></ion-icon>
            <span>好店推荐</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="footballOutline"></ion-icon>
            <span>体育咨询</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="easelOutline"></ion-icon>
            <span>老师推荐</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="ribbonOutline"></ion-icon>
            <span>学习咨询</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="accessibilityOutline"></ion-icon>
            <span>捞人区</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="cardOutline"></ion-icon>
            <span>交易区 </span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="bandageOutline"></ion-icon>
            <span>生病寻医</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="musicalNoteOutline"></ion-icon>
            <span>音乐交流</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="fitnessOutline"></ion-icon>
            <span>表白寻人</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="imageOutline"></ion-icon>
            <span>美景分享</span>
          </div>
        </ion-item>
        <ion-item>
          <div class="ionItem">
            <ion-icon size="large" :icon="listOutline"></ion-icon>
            <span>其他 </span>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import {
  search,
  trophyOutline,
  easelOutline,
  carOutline,
  storefrontOutline,
  footballOutline,
  musicalNoteOutline,
  fitnessOutline,
  imageOutline,
  cardOutline,
  accessibilityOutline,
  bandageOutline,
  ribbonOutline,
  listOutline,
} from "ionicons/icons";
</script>

<style scoped>
.ionItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  margin: 2.5vw;
  gap: 1.5vw;
}
ion-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2vw;
}
ion-icon {
  background: rgb(255, 255, 255, 0.3);
  height: 40px;
  width: 40px;
  border-radius: 20px;
  padding: 5px;
}
ion-item{
  width: 32vw;
}
</style>
