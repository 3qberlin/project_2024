<template>
  <div class="flex flex-col px-3 lg:px-0">
    <ul class="flex justify-between lg:justify-start text-primary-500">
      <li class="">數位產品設計</li>
      <li class="ms-2 hidden lg:block">/</li>
      <li class="ms-2">2023/09/20 發佈</li>
    </ul>
    <h2 class="text-center mt-10 hidden lg:block">
      虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
    </h2>
    <h4 class="text-center mt-4 block lg:hidden">
      虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
    </h4>
    <small class="mt-6 fs-4 text-center hidden lg:block"
      >- 探索虛擬實境技術的現狀與前景 -</small
    >
    <small class="mt-4 text-center block lg:hidden"
      >- 探索虛擬實境技術的現狀與前景 -</small
    >
    <article class="mt-6 lg:mt-16">
      <p class="text-primary-700">
        在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。
      </p>
      <h4 class="mt-10 hidden lg:block">大眾看法</h4>
      <h5 class="mt-8 block lg:hidden">大眾看法</h5>
      <p class="mt-6 text-primary-700">
        虛擬實境技術近年來受到越來越多人的關注和接受。人們對VR技術的潛力持樂觀態度，認為它能夠提供全新的體驗和娛樂方式，並在教育、訓練等領域中有著廣泛的應用前景。然而，也有一些人擔心虛擬實境技術的成熟度和可靠性，對其潛在風險抱有顧慮。
      </p>
      <h4 class="mt-10 hidden lg:block">現行產品</h4>
      <h5 class="mt-8 block lg:hidden">現行產品</h5>
      <p class="mt-6 text-primary-700">
        目前市面上有許多虛擬實境產品，如Vision Pro、Oculus Rift、HTC
        Vive、PlayStation
        VR等。這些產品在硬件性能、軟件支持和使用者體驗等方面存在差異，而介面設計是影響使用者體驗的重要因素之一。不同的介面設計可以影響使用者的操作方式、感知真實度以及沈浸感。
      </p>
    </article>
    <div v-if="data">
      <ul class="grid grid-col-1 lg:grid-cols-2 lg:gap-4 gap-8 mt-8 lg:mt-2">
        <li v-for="(item, index) in data" :key="index" class="flex flex-col">
          <img :src="item.images" :alt="item.text" />
          <p class="text-primary-600 text-center mt-2">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <article class="mt-8 lg:mt-10">
      <h4 class="mt-10 hidden lg:block">技術創新</h4>
      <h5 class="mt-8 block lg:hidden">技術創新</h5>
      <p class="mt-6 text-primary-700">
        隨著硬件技術的不斷進步，VR設備的性能和功能也在不斷提升。高解析度的顯示器、感應器、追蹤技術等創新技術的應用，使得虛擬實境的感知和互動性能夠更加真實和流暢。然而，技術創新也帶來了一些挑戰，例如圖像質量、感知延遲等問題仍然存在，需要進一步解決。
      </p>
      <p>
        技術瓶頸：儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
      </p>
      <h4 class="mt-10 hidden lg:block">技術瓶頸</h4>
      <h5 class="mt-8 block lg:hidden">技術瓶頸</h5>
      <p class="mt-6 text-primary-700">
        儘管虛擬實境技術取得了巨大進步，但仍然存在一些技術瓶頸需要克服。例如，許多使用者報告在使用VR設備時出現眩暈和不適感，這與感知延遲和畫面模糊等問題有關。此外，虛擬實境的內容和應用也需要更多的創新和豐富，以滿足不同使用者的需求。
      </p>
      <h4 class="mt-10 hidden lg:block">未來展望</h4>
      <h5 class="mt-8 block lg:hidden">未來展望</h5>
      <p class="mt-6 text-primary-700">
        未來，虛擬實境技術將繼續向前發展。我們可以期待更加先進的硬件設備和更加豐富多彩的虛擬內容。同時，介面設計也將繼續演進，以提供更加直觀和便捷的操作方式，進一步增強使用者的沈浸感和參與感。總的來說，虛擬實境技術的未來是充滿希望和潛力的，我們期待著看到它在各個領域中的廣泛應用和發展。
      </p>
      <p class="text-primary-700 mt-8 lg:mt-10">Noel 主筆</p>
    </article>
  </div>
  <div class="my-10 lg:my-20 border-t-2 border-primary-400 px-3 lg:px-0">
    <h3 class="mt-20 hidden lg:block">相關文章</h3>
    <h4 class="mt-10 block lg:hidden text-center">相關文章</h4>
    <ul
      class="grid grid-cols-1 lg:grid-cols-2 mt-8 lg:mt-10 gap-x-6 gap-y-10 lg:gay-y-0"
    >
      <li>
        <a href="#">
          <img
            class="rounded-lg w-full object-cover"
            src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image1.png?raw=true"
            alt="article1"
          />
        </a>
        <div class="flex flex-col-reverse lg:flex-col">
          <h5 class="mt-4">
            <a href="#"
              >Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</a
            >
          </h5>
          <div class="flex justify-between mt-4">
            <span class="my-auto">2024/02/10</span>
            <span class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
              >UI/UX 新知</span
            >
          </div>
        </div>
      </li>
      <li>
        <a href="#">
          <img
            class="rounded-lg w-full object-cover"
            src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image7.png?raw=true"
            alt="article7"
          />
        </a>
        <div class="flex flex-col-reverse lg:flex-col">
          <h5 class="mt-4">
            <a href="#">Vision Pro 來了！UIUX 設計師的未來在哪裡？</a>
          </h5>
          <div class="flex justify-between mt-4">
            <span class="my-auto">2024/02/10</span>
            <span class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
              >UI/UX 新知</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { db } from "../db.js";
import { ref as dbRef, onValue } from "firebase/database";
export default {
  setup() {
    const data = ref(null);

    onMounted(() => {
      const dataRef = dbRef(db, "temp/productInfo");
      onValue(
        dataRef,
        (snapshot) => {
          if (snapshot.exists()) {
            data.value = Object.values(snapshot.val());
            console.log("Document data:", snapshot.val());
          } else {
            console.log("No such document!");
          }
        },
        (error) => {
          console.error("Error getting document:", error);
        }
      );
    });

    return {
      data,
    };
  },
};
</script>
