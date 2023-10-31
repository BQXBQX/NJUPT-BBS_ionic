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
    <water-fall></water-fall>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
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
import waterFall from "../components/waterFall/waterFall.vue"

</script>
<style scoped>
</style>
