<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>聊天</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="cardContainer">
        <div class="cardItem">
          <ion-icon
            :icon="heart"
            size="small"
            style="
              height: 10vw;
              width: 10vw;
              background: rgb(235, 68, 90, 0.2);
              border-radius: 15px;
              padding: 7px;
            "
            color="danger"
          >
          </ion-icon>
          <span>赞与收藏</span>
        </div>
        <div class="cardItem">
          <ion-icon
            :icon="person"
            size="small"
            style="
              height: 10vw;
              width: 10vw;
              background: rgb(61, 194, 255, 0.2);
              border-radius: 15px;
              padding: 7px;
            "
            color="primary"
          >
          </ion-icon>
          <span>新增关注</span>
        </div>
        <div class="cardItem">
          <ion-icon
            :icon="chatbubbleEllipses"
            size="small"
            style="
              height: 10vw;
              width: 10vw;
              background: rgb(45, 211, 111, 0.2);
              border-radius: 15px;
              padding: 7px;
            "
            color="success"
          >
          </ion-icon>
          <span>评论和@</span>
        </div>
      </div>
      <ion-list lines="none">
        <ion-item
          v-for="(item, index) in upItems"
          :key="item.id"
          @touchstart="startLongPressCancelUp(index)"
          @touchend="endLongPress"
          @click="router.push('/chatcontent')"
          ><ion-avatar>
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
          <span>{{ item.label }}</span>
          <ion-badge slot="end" color="danger">22</ion-badge>
        </ion-item>
      </ion-list>
      <ion-list lines="none" ref="itemList">
        <ion-item
          v-for="(item, index) in items"
          :key="item.id"
          @touchstart="startLongPress(index)"
          @touchend="endLongPress"
          ><ion-avatar>
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
          <span>{{ item.label }}</span>
          <ion-badge slot="end">22</ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-action-sheet
      :is-open="isOpen"
      header="Actions"
      :buttons="actionSheetButtons"
      @didDismiss="setOpen(false)"
    ></ion-action-sheet>
    <ion-action-sheet
      :is-open="isCancelUpOpen"
      header="Actions"
      :buttons="actionSheetCancelUpButtons"
      @didDismiss="setCancelUpOpen(false)"
    ></ion-action-sheet>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
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
} from "@ionic/vue";
import { heart, person, chatbubbleEllipses } from "ionicons/icons";
import router from "@/router";

const itemList: any = ref(null);

const items = ref([
  { id: 1, label: "user 1" },
  { id: 2, label: "user 2" },
  { id: 3, label: "user 3" },
  { id: 4, label: "user 4" },
  { id: 5, label: "user 5" },
  { id: 6, label: "user 6" },
]);

const upItems = ref([{ id: 1, label: "important user 1" }]);

const isOpen = ref(false);
const isCancelUpOpen = ref(false);


const actionSheetButtons = [
  {
    text: "置顶聊天",
    handler: () => {
      // removeItem(deleteIndex);
      const upItemIndex = localStorage.getItem("index");
      console.log(upItemIndex);
      //创建两个list，一个是置顶的list，一个是普通的list，找到置顶元素，删除普通位置的item，将元素添加到置顶的list中。
      upItem(upItemIndex)
      console.log("执行置顶聊天操作");
    },
  },
  {
    text: "删除",
    role: "destructive",
    handler: () => {
      console.log("执行删除操作");
      presentAlert();
      // const deleteIndex = localStorage.getItem('deleteIndex')
      // removeItem(deleteIndex);
    },
  },
  {
    text: "取消",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];

const actionSheetCancelUpButtons = [
  {
    text: "取消置顶聊天",
    handler: () => {
      // removeItem(deleteIndex);
      const upItemIndex = localStorage.getItem("index");
      console.log(upItemIndex);
      CancelUpItem(upItemIndex)
      console.log("执行取消置顶聊天操作");
    },
  },
  {
    text: "取消",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];

const longPressTimeout: any = ref(null);

const startLongPress = (index: any) => {
  longPressTimeout.value = setTimeout(() => {
    localStorage.setItem("index", index);
    setOpen(true);
  }, 500);
};

const startLongPressCancelUp = (index: any) => {
  longPressTimeout.value = setTimeout(() => {
    localStorage.setItem("index", index);
    setCancelUpOpen(true);
  }, 500);
};


const endLongPress = () => {
  clearTimeout(longPressTimeout.value);
};

const presentAlert = async () => {
  const alert = await alertController.create({
    header: "Warning",
    subHeader: "确定删除吗？",
    message: "删除后所有的聊天记录将被清除",
    buttons: [
      {
        text: "取消",
        role: "cancel",
        handler: () => {
          console.log("取消删除");
        },
      },
      {
        text: "确定",
        role: "confirm",
        handler: () => {
          console.log("确定删除");
          const deleteIndex = localStorage.getItem("index");
          removeItem(deleteIndex);
        },
      },
    ],
  });

  await alert.present();
};


const setOpen = (state: boolean) => {
  isOpen.value = state;
  console.log(isOpen.value);
};

const setCancelUpOpen = (state: boolean) => {
  isCancelUpOpen.value = state;
  console.log(isOpen.value);
};

const removeItem = (index: any) => {
  items.value.splice(index, 1);
};

const upItem = (index:any)=>{
  upItems.value.push(items.value[index])
  items.value.splice(index,1);
}

const CancelUpItem = (index:any)=>{
  items.value.push(upItems.value[index]);
  upItems.value.splice(index,1);
}

const handleRefresh = (event: CustomEvent) => {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};
</script>

<style scoped>
.cardItem {
  /* background-color: rgb(255, 255, 255, 0.3); */
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vh;
}
.cardContainer {
  margin: 1vh 0;
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
span {
  font-weight: 700;
}
ion-avatar {
  margin-right: 2vw;
}
</style>
