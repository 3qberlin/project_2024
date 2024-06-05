<template>
  <NavView />
  <div class="bg-FAFAFA">
    <div class="xl:container mx-auto">
      <div class="flex pt-10 lg:pt-20 px-8 lg:px-0">
        <div class="flex mx-auto flex-col lg:flex-row">
          <div>
            <img
              class="mx-auto"
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/quote-left.png?raw=true"
              alt="quote_left"
            />
          </div>
          <h4 class="font-normal mb-16 lg:mt-16 text-center lg:text-start leading-8 lg:leading-none h5 lg:fs-4">
            讓使用者在觀賞與使用的旅程中，<span
              class="w-full lg:w-auto inline-block"
              >發現<span class="relative inline-block lg:w-auto z-10"
                >設計的價值
                <img
                  class="absolute bottom-0 -z-10"
                  src="../assets/images/underline.png"
                  alt="decoration_line"
                />
              </span>
            </span>
            <p class="mt-2 lg:mt-4">
              而我在設計與開發的過程中，<span class="inline-block w-full lg:w-auto"
                >看見<span class="relative inline-block lg:w-auto z-10"
                  >自己的價值
                  <img
                    class="absolute bottom-0 -z-10"
                    src="../assets/images/underline.png"
                    alt="decoration_line"
                  />
                </span>
              </span>
            </p>
          </h4>
          <div class="self-end hidden lg:block">
            <img
              src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/quote-right.png?raw=true"
              alt="quote_right"
            />
          </div>
        </div>
      </div>
      <div class="flex mt-10 lg:mt-6">
        <div class="hidden lg:block w-1/4"></div>
        <ul class="w-full lg:w-1/2 flex flex-wrap lg:flex-nowrap px-20 lg:px-0">
          <li
            class="w-full lg:w-1/2 text-center text-primary-600 lg:pe-5 mb-5 lg:mb-0"
          >
            <h6>
              2<span class="relative inline-block pb-2"
                >B經
                <span class="absolute text-primary-400 left-0 bottom-0"
                  >____</span
                > </span
              >驗
            </h6>
            <p class="mt-2">內部監控系統、庫存系統、採購系統、行銷整合系統</p>
          </li>
          <li
            class="w-full lg:w-1/2 text-center text-primary-600 lg:ps-5 mb-20"
          >
            <h6>
              2<span class="relative inline-block pb-2"
                >C經
                <span class="absolute text-primary-400 left-0 bottom-0"
                  >____</span
                > </span
              >驗
            </h6>
            <p class="mt-2">
              跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
            </p>
          </li>
        </ul>
        <div class="hidden lg:block w-1/4"></div>
      </div>
    </div>
  </div>
  <ul
    class="xl:container mx-auto grid grid-col lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 gap-y-12 px-3 lg:px-0 mt-20 lg:mt-30"
  >
    <li>
      <a
        href="#"
        class="flex flex-wrap"
        data-bs-toggle="modal"
        data-bs-target="#work1"
      >
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image1.png?raw=true"
          alt="work1"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          星際旅行訂票平台
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          悠遊宇宙的夢想，從這裡開始實現
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">網頁設計</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          響應式設計
        </li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          Bootstrap
        </li>
      </ul>
    </li>
    <li>
      <a href="#" class="flex flex-wrap">
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image2.png?raw=true"
          alt="work2"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          理財App
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          連動帳戶與行動支付，讓 AI 提供您最好的理財建議
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">APP設計</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">iOS</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          React
        </li>
      </ul>
    </li>
    <li>
      <a href="#" class="flex flex-wrap">
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image3.png?raw=true"
          alt="work3"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          醫美診所官網
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          永保青春的秘密，從粹究開始
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">網頁設計</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          響應式設計
        </li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          ＷordPress
        </li>
      </ul>
    </li>
    <li>
      <a href="#" class="flex flex-wrap">
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image4.png?raw=true"
          alt="work4"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          美美美早餐店 POS 機 UI Design
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          訂單送單一目瞭然，自動報表分析好輕鬆
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">UI 設計</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          前端開發
        </li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">Wix</li>
      </ul>
    </li>
    <li>
      <a href="#" class="flex flex-wrap">
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image5.png?raw=true"
          alt="work5"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          電影院訂票系統
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          三步驟完成訂票，電腦手機都支援
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">前端開發</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          後端支援
        </li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">Vue</li>
      </ul>
    </li>
    <li>
      <a href="#" class="flex flex-wrap">
        <img
          class="object-cover rounded-md w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/work-image6.png?raw=true"
          alt="work6"
        />
        <h3 class="w-full mt-4 flex justify-center lg:justify-start">
          巧克巧克形象官網設計
        </h3>
        <p
          class="fs-6 mt-2 text-primary-500 w-full flex justify-center lg:justify-start"
        >
          三步驟完成訂票，電腦手機都支援
        </p>
      </a>
      <ul class="flex mt-4 lg:mt-7 justify-center lg:justify-start w-full">
        <li class="bg-primary-200 py-1 px-3 rounded-full">UI設計</li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          設計系統
        </li>
        <li class="bg-primary-200 py-1 px-3 rounded-full ms-2 lg:ms-4">
          網路電商
        </li>
      </ul>
    </li>
  </ul>
  <ul class="flex justify-center my-18 lg:my-18">
    <li>
      <a href="#" class="py-1 px-3 bg-primary-800 text-white rounded-md fs-5"
        >1</a
      >
    </li>
    <li class="ms-4">
      <a
        href="#"
        class="py-1 px-3 text-primary-700 rounded-md fs-5 hover:bg-primary-800 hover:text-white"
        >2</a
      >
    </li>
    <li class="ms-4 mb-8 lg:mb-0">
      <a
        href="#"
        class="py-1 px-3 text-primary-700 rounded-md fs-5 hover:bg-primary-800 hover:text-white"
        >3</a
      >
    </li>
  </ul>
  <FooterView />
  <ModalView />
</template>

<script>
import NavView from "../components/NavView.vue";
import FooterView from "../components/FooterView.vue";
import ModalView from "../views/ModalView.vue";

export default {
  components: {
    NavView,
    FooterView,
    ModalView,
  },
};
</script>

<style scope>
.bg-FAFAFA {
  background-color: #fafafa;
  width: 100%;
}
</style>
