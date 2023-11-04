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
      <ion-list lines="none" ref="itemList">
        <ion-item
          v-for="(item,index) in items"
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
        <!-- <ion-item-sliding v-for="(item,index) in items" :key="item.id">
          <ion-item style="height: 70px">
            <ion-label
              style="
                height: 70px;
                display: flex;
                align-items: center;
                margin: 0;
              "
            >
              Sliding Item with Start Icons
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="primary">
              <ion-icon :icon="caretUpCircle"></ion-icon>
              <span style="font-size: 13px; margin-right: 2px">置顶</span>
            </ion-item-option>
            <ion-item-option color="danger" @click="removeItem(index)">
              <ion-icon :icon="trash"></ion-icon>
              <span style="font-size: 13px; margin-right: 2px">删除</span>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding> -->
      </ion-list>
    </ion-content>

    <ion-action-sheet
      :is-open="isOpen"
      header="Actions"
      :buttons="actionSheetButtons"
      @didDismiss="setOpen(false)"
    ></ion-action-sheet>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonAvatar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonActionSheet,
  IonLabel,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
} from "@ionic/vue";
import {
  heart,
  person,
  chatbubbleEllipses,
  trash,
  caretUpCircle,
} from "ionicons/icons";

const itemList: any = ref(null);

const items = ref([
  { id: 1, label: "user 1" },
  { id: 2, label: "user 2" },
  { id: 3, label: "user 3" },
  { id: 4, label: "user 4" },
  { id: 5, label: "user 5" },
  { id: 6, label: "user 6" },
]);

const isOpen = ref(false);

const actionSheetButtons = [
  {
    text: "置顶聊天",
    handler: () => {
      //创建两个list，一个是置顶的list，一个是普通的list，找到置顶元素，删除普通位置的item，将元素添加到置顶的list中。
      console.log("执行置顶聊天操作");
    },
  },
  {
    text: "删除",
    role: "destructive",
    handler: () => {
      console.log("执行删除操作");
      const deleteIndex = localStorage.getItem('deleteIndex')
      removeItem(deleteIndex);
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

const startLongPress = (index:any) => {
  longPressTimeout.value = setTimeout(() => {
    localStorage.setItem('deleteIndex',index);
    setOpen(true);
  }, 500);
};

const endLongPress = () => {
  clearTimeout(longPressTimeout.value);
};

const setOpen = (state: boolean) => {
  isOpen.value = state;
  console.log(isOpen.value);
};



const removeItem = (index:any) => {
  items.value.splice(index, 1);
};

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
