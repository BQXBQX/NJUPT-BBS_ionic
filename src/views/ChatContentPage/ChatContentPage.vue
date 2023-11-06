<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-back-button default-href="#" @click="backPage"></ion-back-button>
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
            <textarea
              placeholder="发消息..."
              class="footerInput"
              :autoGrow="true"
              v-model="inputMessage"
              ref="inputTextarea"
            ></textarea>
          </div>

          <label for="file-input" style="display: flex; align-items: center">
            <ion-icon
              :icon="addCircleOutline"
              style="height: 40px; width: 40px"
            ></ion-icon>
          </label>
          <input type="file" id="file-input" style="display: none" />
          <ion-button
            size="small"
            color="danger"
            style="--padding-top: 12px; --padding-bottom: 12px"
            @click="sendMessage"
          >
            发送
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, Ref, onMounted, watch } from "vue";
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
import router from "@/router";

const inputTextarea = ref();

const messages = ref([
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    timestamp: "10:01 AM",
  },
]);

const inputMessage: Ref<string> = ref("");

const idCount = ref(2);

onMounted(() => {
  const draft = localStorage.getItem("draft");
  console.log(draft);
  inputMessage.value = draft;
});

watch(inputMessage, () => {
  setTimeout(() => {
    const textarea = inputTextarea.value;
    console.log(textarea.scrollHeight);
    if (textarea) {
      textarea.style.height = "26px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, 0);
});

function sendMessage() {
  console.log(inputMessage.value);
  idCount.value++;
  console.log(idCount.value);

  messages.value.push({
    id: idCount.value,
    sender: "Mine",
    content: inputMessage.value,
    timestamp: "10:03AM",
  });
  inputMessage.value = "";
}

function backPage() {
  localStorage.setItem("draft", inputMessage.value);
  router.go(-1);
}
</script>

<style scoped>
.chatMessages {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
span {
  display: inline-block;
  word-break: break-all;
  white-space: pre-line;
}
.footerContainer {
  padding: 5px;
  gap: 4px;
  display: flex;
  align-items: flex-end;
  height: fit-content;
  align-content: center;
  flex-wrap: wrap;
}
.footerInputContainer {
  background: rgb(255, 255, 255, 0.1);
  flex-grow: 1;
  border-radius: 10px;
  padding: 4px;
  display: flex;
}
.footerInput {
  height: 26px;
  min-height: 26px;
  max-height: 86px;
  resize: none;
  background-color: transparent;
  margin: 4px;
  border: 0;
  width: 100%;
}
.footerInput:focus {
  outline: none;
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
