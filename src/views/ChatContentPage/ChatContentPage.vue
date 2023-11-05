<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>John</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="none" class="chatMessages">
        <ion-item v-for="item in messages" :key="item.id">
          <div
            :class="
              item.sender === 'Mine' ? 'chatMessageBar' : 'chatMessageOtherBar'
            "
          >
            <div
              :class="item.sender === 'Mine' ? 'chatAvatar' : 'otherChatAvatar'"
            >
              <ion-avatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
            </div>
            <div
              :class="
                item.sender === 'Mine' ? 'chatMessage' : 'otherChatMessage'
              "
            >
              <span>{{ item.content }}</span>
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer :translucent="true">
      <ion-toolbar>
        <div class="footerContainer">
          <div class="footerInputContainer">
            <ion-textarea
              placeholder="发消息..."
              class="footerInput"
            ></ion-textarea>
          </div>
          <label for="file-input" style="display: flex; align-items: center">
            <ion-icon
              :icon="addCircleOutline"
              style="height: 40px; width: 40px"
            ></ion-icon>
          </label>
          <input type="file" id="file-input" style="display: none" />
          <ion-button size="default" color="danger" style="height: 10px">
            发送
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  IonButton,
  IonTextarea,
  IonPage,
  IonFooter,
  IonButtons,
  IonBackButton,
  alertController,
  IonAvatar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonActionSheet,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonInput,
} from "@ionic/vue";
import { personCircle, addCircleOutline } from "ionicons/icons";

const messages = ref([
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! Hi John! How are you, i really want to fuck you now!",
    timestamp: "10:01 AM",
  },
]);
</script>

<style scoped>
.chatMessages {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-top: 2vh;
}
.footerContainer {
  display: flex;
  align-items: center;
}
.footerInputContainer {
  flex-grow: 1;
  background: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 4px;
  padding: 4px;
}
.footerInput {
  border-radius: 10px;
  margin: 4px;
  --padding-start: 3vw;
  --padding-end: 4vw;
  --padding-top: 0px;
  --padding-bottom: 0px;
}
.chatMessageBar {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 4vw;
}
.chatMessageOtherBar {
  display: flex;
  width: 100%;
  gap: 4vw;
}
.chatMessage {
  background-color: #3880ff;
  width: fit-content;
  height: fit-content;
  padding: 12px;
  font-size: 18px;
  border-radius: 15px;
}
.chatAvatar {
}
.otherChatMessage {
  background-color: #0b9c45;
  width: fit-content;
  height: fit-content;
  padding: 12px;
  font-size: 18px;
  border-radius: 15px;
}
</style>
