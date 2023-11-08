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
        <ion-item v-for="(item, index) in messages" :key="item.id">
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
              @touchstart="startLongPress($event, index)"
              @touchend="endLongPress"
              ref="triggerButton"
              :class="
                item.sender === 'Mine' ? 'chatMessage' : 'otherChatMessage'
              "
            >
              <span>{{ item.content }}</span>
            </div>
          </div>
        </ion-item>
        <ion-popover
          :side="popoverPosition"
          alignment="center"
          :is-open="popoverOpen"
          :event="event"
          :class="popoverPosition === 'top' ? 'topPopover' : 'bottomPopover'"
          @didDismiss="popoverOpen = false"
        >
          <ion-content class="ion-padding">
            <ion-buttons>
              <div class="popoverIconContainer">
                <ion-icon
                  style="height: 20px; width: 20px"
                  :icon="copy"
                ></ion-icon>
                <ion-icon
                  style="height: 20px; width: 20px"
                  :icon="arrowRedo"
                ></ion-icon>
                <svg
                  style="height: 20px; width: 20px"
                  t="1699405568580"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="12754"
                  width="13"
                  height="13"
                >
                  <path
                    d="M64 432C64 299.4 171.4 192 304 192h16c35.4 0 64 28.6 64 64s-28.6 64-64 64h-16c-61.8 0-112 50.2-112 112v16h128c70.6 0 128 57.4 128 128v128c0 70.6-57.4 128-128 128H192c-70.6 0-128-57.4-128-128V432z m512 0c0-132.6 107.4-240 240-240h16c35.4 0 64 28.6 64 64s-28.6 64-64 64h-16c-61.8 0-112 50.2-112 112v16h128c70.6 0 128 57.4 128 128v128c0 70.6-57.4 128-128 128h-128c-70.6 0-128-57.4-128-128V432z"
                    p-id="12755"
                    fill="#ffffff"
                  ></path>
                </svg>
                <ion-icon
                  style="height: 20px; width: 20px"
                  :icon="trash"
                  @click="deleteMessageBar"
                ></ion-icon>
              </div>
            </ion-buttons>
          </ion-content>
        </ion-popover>
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
    <ion-alert
      :is-open="isOpen"
      header="Alert"
      sub-header="不能发送空白信息"
      :buttons="alertButtons"
      @didDismiss="setOpen(false)"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, Ref, onMounted, watch } from "vue";
import {
  IonAlert,
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
  IonPopover,
  IonActionSheet,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonInput,
} from "@ionic/vue";
import {
  personCircle,
  addCircleOutline,
  arrowRedo,
  copy,
  trash,
} from "ionicons/icons";
import router from "@/router";

const inputTextarea = ref();

const isOpen = ref(false);

const alertButtons = ["OK"];

const triggerButton: any = ref(null);

const popoverPosition = ref("top");

const messages = ref([
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      // "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
      "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
  { id: 1, sender: "John", content: "Hello!", timestamp: "10:00 AM" },
  {
    id: 2,
    sender: "Mine",
    content:
      "Hi John! How are you, i really want to fuck you now! \n Hi John! How are you, i really want to fuck you now!",
    // "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    timestamp: "10:01 AM",
  },
]);
const setOpen = (state: boolean) => {
  isOpen.value = state;
};
const inputMessage: Ref<string> = ref("");

const idCount = ref(2);

function deleteMessageBar() {
  console.log(messageBarIndex.value);
  const index = messageBarIndex.value;
  messages.value.splice(index, 1);
  popoverOpen.value = false;
}

onMounted(() => {
  const draft = localStorage.getItem("draft");
  console.log(draft);
  inputMessage.value = draft;
});

watch(inputMessage, () => {
  setTimeout(() => {
    const textarea = inputTextarea.value;
    // console.log(textarea.scrollHeight);
    if (textarea) {
      textarea.style.height = "26px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, 0);
});

const popoverOpen = ref(false);
const event: any = ref(null);

const messageBarIndex: Ref<number | undefined> = ref();

const longPressTimeout: any = ref(null);

const startLongPress = (e: Event, index: number) => {
  longPressTimeout.value = setTimeout(() => {
    popoverOpen.value = true;
    event.value = e;
    messageBarIndex.value = index;
    const { top } = triggerButton.value[index].getBoundingClientRect();
    console.log(top);
    if (top < 110) {
      popoverPosition.value = "bottom";
      console.log(top);
    } else {
      popoverPosition.value = "top";
    }
  }, 500);
};

const endLongPress = () => {
  clearTimeout(longPressTimeout.value);
  // propoverPosition.value = "top"
};

function isAllWhitespace(str: string) {
  return /^\s*$/.test(str);
}

function sendMessage() {
  console.log(isAllWhitespace(inputMessage.value));
  if (isAllWhitespace(inputMessage.value) === true) {
    setOpen(true);
    inputTextarea.value.focus();
  }
  if (isAllWhitespace(inputMessage.value) === false) {
    // console.log(inputMessage.value);
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
}

function backPage() {
  localStorage.setItem("draft", inputMessage.value);
  router.go(-1);
}
</script>

<style scoped>
ion-popover {
  --background: #3c3a3a;
  --backdrop-opacity: 0.6;
  --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
  --color: #3c3a3a;
  --width: fit-content !important;
}

.topPopover {
  --offset-y: -12px;
}

.bottomPopover {
  --offset-y: 12px;
}

ion-popover ion-content {
  --background: #3c3a3a;
}

ion-popover::part(backdrop) {
  background-color: rgb(255, 255, 255, 0.1);
}
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
.popoverIconContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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
  max-height: 82px;
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
  gap: 12px;
}
.chatMessageOtherBar {
  display: flex;
  width: 100%;
  gap: 12px;
}
.chatMessage {
  background-color: #3880ff;
  width: fit-content;
  height: fit-content;
  padding: 12px;
  font-size: 18px;
  border-radius: 15px;
  margin-left: 60px;
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
  margin-right: 60px;
}
</style>
