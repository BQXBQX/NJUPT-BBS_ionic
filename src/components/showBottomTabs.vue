<template>
  <ion-page>
    <ion-tabs>
      
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home" />
          <!-- <ion-label>首页</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="partition" href="/partition">
          <ion-icon :icon="gridOutline"></ion-icon>
          <!-- <ion-label>分区</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/chat">
          <ion-icon :icon="chatboxEllipsesOutline" />
          <!-- <ion-label>聊天</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="mine" href="/mine">
          <ion-icon :icon="personOutline" />
          <!-- <ion-label>我的</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import {
  home,
  keypad,
  chatboxEllipsesOutline,
  personOutline,
  gridOutline
} from "ionicons/icons";


</script>
<style scoped>
ion-icon{
  height: 25px;
  width: 25px;
}
</style>
