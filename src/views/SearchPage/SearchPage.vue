<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="#"
            style="height: 52px"
          ></ion-back-button>
        </ion-buttons>
        <ion-searchbar style="padding: 4px 10px"></ion-searchbar>
        <ion-buttons slot="end" style="height: 52px; padding: 0 1vw 0 0">
          <ion-text color="primary" style="font-weight: 700">搜索</ion-text>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content> this is searchPage </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonText,
} from "@ionic/vue";
import {} from "ionicons/icons";
</script>

<style scoped></style>
