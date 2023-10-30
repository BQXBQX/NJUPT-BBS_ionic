<template>
  <ion-page>
    <ion-menu content-id="main-content">
      <ion-content class="ion-padding">
        <ion-list lines="inset" style="margin-top: 5vh; margin-bottom: 1vh">
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="personAddOutline" size="large"></ion-icon>
              <span> 发现好友 </span>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-list lines="none">
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="timeOutline" size="large"></ion-icon>
              <span> 历史记录 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="addCircleOutline" size="large"></ion-icon>
              <span> 在线发帖 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="fileTrayOutline" size="large"></ion-icon>
              <span> 我的草稿 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label class="ionLabel">
              <ion-icon :icon="golfOutline" size="large"></ion-icon>
              <span> 社区公约 </span>
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-list lines="none" class="menuBottom">
          <ion-item>
            <ion-label
              class="ionLabel"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <ion-icon
                :icon="settingsOutline"
                size="large"
                class="menuBottomIcon"
              ></ion-icon>
              <span> 设置 </span>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label
              class="ionLabel"
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <ion-icon
                :icon="handLeftOutline"
                size="large"
                class="menuBottomIcon"
              ></ion-icon>
              <span> 反馈 </span>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>
            <div style="width: 100%; display: flex; justify-content: center">
              <ion-avatar style="height: 30px; width: 30px">
                <img
                  alt="Silhouette of a person's head"
                  src="https://docs-demo.ionic.io/assets/madison.jpg"
                />
              </ion-avatar>
            </div>
          </ion-title>
          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">
              <div style="display: flex; gap: 5vw">
                <ion-avatar style="height: 70px; width: 70px">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://docs-demo.ionic.io/assets/madison.jpg"
                  />
                </ion-avatar>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    height: 70px;
                    align-items: flex-start;
                    justify-content: center;
                  "
                >
                  <span>BQXBQX</span>
                  <span style="font-size: 15px">ID:785412369</span>
                </div>
              </div>
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="mineMessage">
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">52</span>
            <span class="mineMessageItemSpan">关注</span>
          </div>
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">71</span>
            <span class="mineMessageItemSpan">粉丝</span>
          </div>
          <div class="mineMessageItem">
            <span class="mineMessageItemSpan">564</span>
            <span class="mineMessageItemSpan">获赞和收藏</span>
          </div>
          <div class="mineMessageItem">
            <ion-button
              style="
                height: 4vh;
                --border-radius: 25px;
                --background: rgb(255, 255, 255, 0.3);
                min-height: 0;
              "
            >
              <span style="font-size: 14px">编辑资料</span></ion-button
            >
          </div>
          <div class="mineMessageItem">
            <ion-button
              style="
                height: 4vh;
                --border-radius: 25px;
                --background: rgb(255, 255, 255, 0.3);
                min-height: 0;
              "
            >
              <ion-icon :icon="settingsOutline" />
            </ion-button>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonMenu,
  IonButtons,
  IonLabel,
} from "@ionic/vue";
import {
  settingsOutline,
  shareOutline,
  personAddOutline,
  fileTrayOutline,
  timeOutline,
  addCircleOutline,
  golfOutline,
  handLeftOutline,
} from "ionicons/icons";
</script>

<style scoped>
.mineMessage {
  margin: 2vh 4vw;
  display: flex;
  gap: 4vw;
  justify-content: space-between;
}

.menuBottomIcon {
  background: rgb(255, 255, 255, 0.3);
  height: 30px;
  width: 30px;
  padding: 7px;
  border-radius: 15px;
}
.mineMessageItem {
  gap: 0.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mineMessageItemSpan {
  font-size: 12px;
}

.ionLabel {
  display: flex;
  align-items: center;
  gap: 2vw;
}

.menuBottom {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 88%;
  justify-content: space-evenly;
  margin-bottom: 2vh;
}
</style>
