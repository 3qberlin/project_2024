<template>
  <NavView />
  <div class="xl:container mx-auto" v-if="title">
    <h2 class="text-center mt-10 lg:mt-30 hidden lg:block">
      <span class="inline-block relative px-30"
        >部落格
        <img
          class="absolute top-4 left-0"
          src="../assets/images/left_line.png"
          alt="left_line"
        />
        <img
          class="absolute top-4 right-0"
          src="../assets/images/right_line.png"
          alt="right_line"
        />
      </span>
      <p class="text-center text-primary-500 fs-6 mt-6">
        不定期分享技術文章
      </p>
    </h2>
    <h4 class="text-center mt-10 lg:mt-30 block lg:hidden">
      <span class="inline-block relative px-20"
        >部落格
        <img
          class="absolute top-3 left-0"
          src="../assets/images/left_line_short.png"
          alt="left_line"
        />
        <img
          class="absolute top-3 right-0"
          src="../assets/images/right_line_short.png"
          alt="right_line"
        />
      </span>
      <p class="text-center text-primary-500 fs-6 mt-4">
        不定期分享技術文章
      </p>
    </h4>
  </div>
    <ul class="flex lg:hidden overflow-scroll text-nowrap text-primary-600 sticky top-16 z-30 bg-white">
        <li class="ms-3">
          <a href="#" class="inline-block text-primary-800 border-b-2 border-primary-800 mt-5 mb-6">全部文章</a>
        </li>
        <li class="ms-8">
          <a href="#" class="inline-block mt-5 mb-6">UI/UX 新知</a>
        </li>
        <li class="ms-8">
          <a href="#" class="inline-block mt-5 mb-6">數位產品設計</a>
        </li>
        <li class="ms-8">
          <a href="#" class="inline-block mt-5 mb-6">平面設計</a>
        </li>
        <li class="ms-8 me-3">
          <a href="#" class="inline-block mt-5 mb-6">前端開發</a>
        </li>
      </ul>
  <ul
    class="xl:container mx-auto flex lg:flex-row flex-col-reverse gap-6 mt-10 lg:mt-20 mb-20 lg:mb-30"
  >
    <li class="flex-1 lg:flex-[9]">
      <div v-if="status">
        <Article1 />
      </div>
      <ul v-else class="px-8 lg:px-0 flex flex-col gap-y-10 lg:gap-y-16 ">
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3" @click.prevent="toggleArticle">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image1.png?raw=true"
              alt="article1"
            />
          </a>
          <div class="flex flex-col  w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >UI/UX 新知</span
              >
            </div>
            <a href="#" @click.prevent="toggleArticle">
              <h5 class="mt-4">
                Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
              </h5>
              <p class="mt-3 lg:mt-4">
                Vision Pro 終於在 2024 年 2 月正式開賣，距離正式發表的 2023 年 6
                月，已有半年時間。
                這半年間，各種質疑聲不斷冒出，例如「太貴了，這是做給投資家看的產品，不能真的大量生產」、「續航力明顯不足，電池太重，不利於隨身攜帶使用」、「隔絕現實世界，會更加深世代或人際關係的隔閡」。
              </p>
            </a>
          </div>
        </li>
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image2.png?raw=true"
              alt="article2"
            />
          </a>
          <div class="flex flex-col w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >UI/UX 新知</span
              >
            </div>
            <a href="#">
              <h5 class="mt-4">
                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
              </h5>
              <p class="mt-3 lg:mt-4">
                <p>
                  延續上一篇針對 Dev Mode 介紹
                </p>
                <p>
                  這一篇要說的就是最複雜的「右側面板」啦！
                </p>
                右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右側面板也可以顯示 Comment，但需要先在左側面板上方點擊 對話 icon，才可以在右側面板看到所有留言紀錄。
              </p>
            </a>
          </div>
        </li>
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image3.png?raw=true"
              alt="article3"
            />
          </a>
          <div class="flex flex-col  w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >UI/UX 新知</span
              >
            </div>
            <a href="#">
              <h5 class="mt-4">
                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
              </h5>
              <p class="mt-3 lg:mt-4">
                <p>
                  身為工程師，除了精進開發技術、學習新框架、看更多的範例、刷更多的題，為了與其他團隊成員有效合作，也需要學習使用其他協作軟體，例如 Trello, Notion。 而如果是要跟設計師合作，目前最主要的就是使用 Figma了！
                </p>
                <p>
                  Figma 是現在最主流的 UIUX 設計軟體，自從開創了「協作功能」之後，幾乎就是把 Adobe XD 和 Sketch 遠遠甩在後頭！
                </p>
              </p>
            </a>
          </div>
        </li>
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image4.png?raw=true"
              alt="article4"
            />
          </a>
          <div class="flex flex-col  w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >數位產品設計</span
              >
            </div>
            <a href="#">
              <h5 class="mt-4">
                虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
              </h5>
              <p class="mt-3 lg:mt-4">
                在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。
              </p>
            </a>
          </div>
        </li>
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image5.png?raw=true"
              alt="article5"
            />
          </a>
          <div class="flex flex-col  w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >數位產品設計</span
              >
            </div>
            <a href="#">
              <h5 class="mt-4">
                想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！
              </h5>
              <p class="mt-3 lg:mt-4">
                <p>
                  一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主要功能、參考資料，然後交給設計師參考、發想、研究、使用。
                </p>
                <p>
                  有些產品的目標受眾很明確，譬如一個比價 App，受眾目標的特徵可能有：年齡層廣、會使用線上購物、手機使用時間長。 但可以比價的東西實在太多了，若五花八門的商品都要拉進去，設計上需要建立非常多的目錄階層、制定非常多種的產品詳細頁面版型等等。...
                </p>
              </p>
            </a>
          </div>
        </li>
        <li class="flex flex-col lg:flex-row gap-4">
          <a href="#" class="w-full lg:w-1/3">
            <img
              class="rounded-md mx-auto object-cover h-full"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image6.png?raw=true"
              alt="article6"
            />
          </a>
          <div class="flex flex-col  w-full lg:w-2/3">
            <div
              class="flex justify-between lg:justify-start text-primary-600 content-center"
            >
              <span class="my-auto">2024/02/10</span>
              <span
                class="py-1 px-3 bg-primary-200 rounded-xl ms-4 inline-block"
                >前端開發</span
              >
            </div>
            <a href="#">
              <h5 class="mt-4">
                React vs. Vue，哪種前端框架比較好用？從三大面向談起
              </h5>
              <p class="mt-3 lg:mt-4">
                在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端框架之一。然而，對於開發人員來說，選擇適合自己的框架可能是一個具有挑戰性的決定。本文將從三個主要面向探討React和Vue：開發效率、性能和生態系統。通過深入比較和分析這些方面，我們將試圖回答一個關鍵問題：React和Vue中哪種前端框架更加適用？這將有助於開發人員更好地理解兩者之間的優勢和劣勢，並在實際應用中做出明智...
              </p>
            </a>
          </div>
        </li>
      </ul>
    </li>
    <li class="flex-1 lg:flex-[3] bg-FAFAFA pt-20">
      <ul class="lg:flex flex-col gap-y-8 ms-20 hidden">
        <li>
          <a href="#" class="inline-block fs-5-bold border-b-2 border-primary-800">全部文章</a>
        </li>
        <li>
          <a href="#" class="inline-block fs-5 text-primary-600">UI/UX 新知</a>
        </li>
        <li>
          <a href="#" class="inline-block fs-5 text-primary-600">數位產品設計</a>
        </li>
        <li>
          <a href="#" class="inline-block fs-5 text-primary-600">平面設計</a>
        </li>
        <li>
          <a href="#" class="inline-block fs-5 text-primary-600">前端開發</a>
        </li>
      </ul>
    </li>
  </ul>

  <FooterView />
</template>

<script>
import NavView from "../components/NavView.vue";
import FooterView from "../components/FooterView.vue";
import Article1 from "../views/BlogsContentView.vue";
import { ref } from "vue";

export default {
  components: {
    NavView,
    FooterView,
    Article1,
  },
  setup() {
    const status = ref(false);
    const title = ref(true);
    function toggleArticle() {
      status.value = !status.value;
      title.value = !status.value;
    }
    return {
      status,
      toggleArticle,
      title,
    };
  },
};
</script>
