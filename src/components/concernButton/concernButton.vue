<template>
  <div class="concernButtonContainer" v-if="isActiveConcern === false">
    <ion-button id="open-loading" @click="concernAction">
      <span class="concernSpan"> 关注 Ta </span>
    </ion-button>
  </div>
  <div class="concernButtonAlreadyContainer" v-if="isActiveConcern === true">
    <ion-button id="Cancel-open-loading" @click="concernCancelAction">
      <span class="concernAlreadySpan">已关注</span>
    </ion-button>
  </div>
  <ion-loading
    :isOpen="isOpen"
    class="custom-loading"
    message="关注中..."
  ></ion-loading>
  <ion-loading
    :isOpen="isCancelOpen"
    class="custom-loading"
    message="取消关注中..."
  ></ion-loading>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonButton, IonLoading } from "@ionic/vue";
import {} from "ionicons/icons";

const isOpen = ref(false);
const isCancelOpen = ref(false);

const isActiveConcern = ref(false);

async function concernAction() {
  isOpen.value = true;
  //使用await执行请求函数，实行异步操作，操作完成后，设置为关注
  setTimeout(() => {
    isOpen.value = false;
    isActiveConcern.value = true;
  }, 2000);
}

async function concernCancelAction() {
  console.log(isOpen.value);

  isCancelOpen.value = true;
  //使用await执行请求函数，实行异步操作，操作完成后，设置为关注
  setTimeout(() => {
    isCancelOpen.value = false;
    isActiveConcern.value = false;
    console.log(isOpen.value);

  }, 2000);
}
</script>

<style scoped>
ion-button {
  width:55px;
}
.concernAlreadySpan {
  color: rgb(255, 255, 255, 0.3);
}
.concernButtonAlreadyContainer {
  background-color: transparent;
  border: 1.5px solid rgb(255, 255, 255, 0.3);
  border-radius: 15px;
  font-weight: 1000;
  margin-right: 4px;
}
.concernButtonContainer {
  margin-right: 4px;
  background-color: transparent;
  border: 1.5px solid #428cff;
  border-radius: 15px;
  font-weight: 1000;
}
ion-loading.custom-loading {
  --background: #e3edff;
  --spinner-color: #1c6dff;
  color: #1c6dff;
}

span {
  font-size: 12px;
}
</style>
