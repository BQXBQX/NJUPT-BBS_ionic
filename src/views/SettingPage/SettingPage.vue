<template>
  <ion-page ref="rectangleRef">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>deltaX: {{ touchEvent.deltaX }}</p>
      <p>deltaY: {{ touchEvent.deltaY }}</p>
      <ion-card>
        <ion-list>
          <ion-item>
            <ion-label>Pokémon Yellow</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Mega Man X</ion-label>
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonTextarea,
} from "@ionic/vue";

const rectangleRef = ref();

const touchEvent = ref({
  deltaX: 0,
  deltaY: 0,
});

let startX = 0;
let startY = 0;

onMounted(() => {
  const rectangleElement = rectangleRef.value.$el;

  rectangleElement.addEventListener("touchstart", handleTouchStart);
  rectangleElement.addEventListener("touchmove", handleTouchMove);
});

function handleTouchStart(event: any) {
  const touch = event.touches[0];
  console.log(touch);
  startX = touch.clientX;
  startY = touch.clientY;
}

function handleTouchMove(event: any) {
  const touch = event.touches[0];
  const currentX = touch.clientX;
  const currentY = touch.clientY;

  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  touchEvent.value.deltaX = deltaX;
  touchEvent.value.deltaY = deltaY;
}
</script>

<style scoped></style>
