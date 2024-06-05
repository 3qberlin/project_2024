<template>
  <NavView></NavView>
  <router-view></router-view>
  <main>
    <div class="mx-auto w-full">
    <section
      class="flex flex-col-reverse lg:flex-row content-center justify-center"
    >
      <div class="flex-1 lg:flex-[4] h-full my-auto lg:ms-20 xl:ms-44 px-10 lg:px-0">
          <h1 class="flex justify-center lg:justify-start flex-wrap">Hi！我是 Berlin</h1>
        <p class="fs-5 mt-6 text-primary-600 inline-flex justify-center lg:justify-start flex-wrap">
          <span class="inline-flex justify-center lg:justify-start mb-2 lg:mb-0 text-nowrap w-full lg:w-auto">具有 10 年經驗的</span>
          <span class="ms-2 relative inline-flex justify-center lg:justify-start z-20 text-nowrap"
            >資深 UI 設計師
            <img
              class="absolute bottom-0 -z-10"
              src="../assets/images/underline.png"
              alt="decoration_line"
            />
          </span>
          <span class="mx-2 lg:w-auto">兼</span>
          <span class="me-2 relative inline-flex justify-center lg:justify-start z-auto text-nowrap"
            >前端工程師
            <img
              class="absolute bottom-0 -z-10"
              src="../assets/images/underline.png"
              alt="decoration_line"
            />
          </span>
          <span class="inline-flex justify-center lg:justify-start mt-2 w-full text-wrap lg:text-nowrap text-center lg:text-start">
            技術雙修並行，熱衷於優化使用者的網頁體驗
          </span>
          <span class="fs-6 mt-4 text-primary-400 inline-flex justify-center lg:justify-start w-full text-wrap lg:text-nowrap  text-center lg:text-start">
            WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
          </span>
            <ul class="inline-flex justify-center lg:justify-start mt-6 lg:mt-15 text-primary-600 w-full">
              <li><a href="#"><i class="fa-brands fa-instagram text-3xl p-2"></i></a></li>
              <li class="ms-4"><a href="#"><i class="fa-brands fa-facebook text-3xl p-2"></i></a></li>
              <li class="ms-4"><a href="#"><i class="fa-brands fa-youtube text-3xl p-2"></i></a></li>
            </ul>
        </p>
      </div>
      <div class="flex-1 lg:flex-[7]">
        <img
          class="object-cover hidden md:block w-full"
          src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/hero-lg.png?raw=true"
          alt="bg-lg"
        />
        <img class="block md:hidden object-cover w-full" src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/hero-sm.png?raw=true" alt="bg-sm">
      </div>
    </section>
</div>
    <section>
      <h2 class="text-center mt-10 lg:mt-30 hidden lg:block">
        <span class="inline-block relative px-30">作品介紹
        <img class="absolute top-4 left-0" src="../assets/images/left_line.png" alt="left_line">
        <img class="absolute top-4 right-0" src="../assets/images/right_line.png" alt="right_line">
      </span>
      </h2>
      <h4 class="text-center mt-10 lg:mt-30 block lg:hidden">
        <span class="inline-block relative px-20">作品介紹
        <img class="absolute top-3 left-0" src="../assets/images/left_line_short.png" alt="left_line">
        <img class="absolute top-3 right-0" src="../assets/images/right_line_short.png" alt="right_line">
      </span>
      </h4>
      <div class="bg-homepage-work1 bg-work mt-10 lg:mt-20">
        <div class="xl:container mx-auto h-full">
          <div class="flex h-full pt-20 gap-x-14 flex-col lg:flex-row justify-center content-center">
            <div class="w-full lg:w-3/5  align-bottom mt-auto">
          <img class="object-cover" src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work1.png?raw=true" alt="work1-1">
        </div>
          <div class="w-full lg:w-2/5 my-auto hidden lg:flex">
            <div class="card backdrop-blur-sm bg-white/10 w-full rounded-3xl pb-12">
              <div class="px-6 lg:px-10 pt-6 lg:pt-20 w-full fs-3 flex flex-wrap text-primary-50 justify-center lg:justify-start">
                <h3>星際旅行訂票平台</h3>
                <p class="fs-6 mt-2 w-full">
                  悠遊宇宙的夢想，從這裡開始實現
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 mb-10 flex-wrap">
                <li class="rounded-full bg-white py-1 px-3">網頁設計</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">響應式設計</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">Bootstrap</li>
              </ul>
              <hr class="border-slate-300 border-t w-full">
              <div class="mx-auto mt-10 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        <div class="block lg:hidden w-full rounded-3xl pb-12">
              <div class="px-2 lg:px-10 pt-6 lg:pt-20 w-full fs-3 flex flex-wrap justify-center  text-center">
                <h3 class="w-full">星際旅行訂票平台</h3>
                <p class="fs-6 mt-2 text-primary-600 w-full">
                  悠遊宇宙的夢想，從這裡開始實現
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 w-full justify-center">
                <li class="rounded-full py-1 px-3 bg-primary-200">網頁設計</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">響應式設計</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">Bootstrap</li>
              </ul>
              <div class="mx-auto mt-7 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
    </section>
    <section class="bg-homepage-work2">
      <div class="xl:container mx-auto h-full flex gap-6">
        <div class="w-full lg:w-1/2 hidden lg:block">
          <div class="w-full h-full my-auto flex bg-homepage-work2-shadow">
          <div class="w-5/6 card backdrop-blur-sm bg-white/10  rounded-3xl pb-12 my-auto">
              <div class="px-6 lg:px-10 pt-6 lg:pt-20 fs-3 flex flex-wrap text-primary-50 justify-center lg:justify-start">
                <h3>理財APP</h3>
                <p class="fs-6 mt-2 w-full">
                  連動帳戶與行動支付，讓 AI 提供您最好的理財建議
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 mb-10 flex-wrap">
                <li class="rounded-full bg-white py-1 px-3 backdrop-opacity-100">APP設計</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">iOS</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">React</li>
              </ul>
              <hr class="border-slate-300 border-t w-full">
              <div class="mx-auto mt-10 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <img class="object-cover invisible" src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work1.png?raw=true" alt="work1-1">
        </div>
      </div>
    </section>
    <div class="block lg:hidden w-full rounded-3xl pb-12">
              <div class="px-6 lg:px-10 pt-6 lg:pt-20 w-full fs-3 flex flex-wrap justify-center  text-center">
                <h3 class="w-full">理財APP</h3>
                <p class="fs-6 mt-2 text-primary-600 w-full">
                  連動帳戶與行動支付，讓 AI 提供您最好的理財建議
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 w-full justify-center">
                <li class="rounded-full py-1 px-3 bg-primary-200">APP設計</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">iOS</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">React</li>
              </ul>
              <div class="mx-auto mt-7 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
          <div class="bg-homepage-work3 bg-work">
            <div class="bg-homepage-work2-shadow">
        <div class="xl:container mx-auto h-full">
          <div class="flex h-full gap-x-14 flex-col lg:flex-row justify-center content-center">
            <div class="w-full lg:w-3/5 my-auto">
          <img class="object-cover" src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work3.png?raw=true" alt="work3-1">
        </div>
          <div class="w-full lg:w-2/5 lg:py-36 hidden lg:flex">
            <div class="card backdrop-blur-sm bg-white/10 w-full rounded-3xl pb-12">
              <div class="px-6 lg:px-10 pt-6 lg:pt-20 w-full fs-3 flex flex-wrap text-primary-50 justify-center lg:justify-start">
                <h3>醫美診所官網</h3>
                <p class="fs-6 mt-2 w-full">
                  永保青春的秘密，從粹究開始
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 mb-10 flex-wrap">
                <li class="rounded-full bg-white py-1 px-3">網頁設計</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">響應式設計</li>
                <li class="rounded-full bg-white py-1 px-3 ms-2 lg:ms-4">ＷordPress</li>
              </ul>
              <hr class="border-slate-300 border-t w-full">
              <div class="mx-auto mt-10 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        </div>
        <div class="block lg:hidden w-full rounded-3xl pb-12">
              <div class="px-2 lg:px-10 pt-6 lg:pt-20 w-full fs-3 flex flex-wrap justify-center  text-center">
                <h3 class="w-full">醫美診所官網</h3>
                <p class="fs-6 mt-2 text-primary-600 w-full">
                  永保青春的秘密，從粹究開始
                </p>
                <ul class="fs-6 flex mt-6 text-primary-700 w-full justify-center">
                <li class="rounded-full py-1 px-3 bg-primary-200">網頁設計</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">響應式設計</li>
                <li class="rounded-full py-1 px-3 ms-2 lg:ms-4 bg-primary-200">ＷordPress</li>
              </ul>
              <div class="mx-auto mt-7 bg-primary-900 rounded-md">
                <button type="button" class="fs-6-bold py-1 lg:py-4 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">完整介紹</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </div>
            </div>
            <section class="bg-services pt-20 lg:pt-30 pb-20 lg:pb-30">
      <h2 class="text-center hidden lg:block">
        <span class="inline-block relative px-30">服務項目
        <img class="absolute top-4 left-0" src="../assets/images/left_line.png" alt="left_line">
        <img class="absolute top-4 right-0" src="../assets/images/right_line.png" alt="right_line">
      </span>
      </h2>
      <h4 class="text-center mt-10 lg:mt-30 block lg:hidden">
        <span class="inline-block relative px-20">服務項目
        <img class="absolute top-3 left-0" src="../assets/images/left_line_short.png" alt="left_line">
        <img class="absolute top-3 right-0" src="../assets/images/right_line_short.png" alt="right_line">
      </span>
      </h4>
      <ul class="xl:container mx-auto flex text-primary-50 gap-6 flex-wrap px-8 lg:px-0 mt-10 lg:mt-20 justify-center">
        <li class="bg-services-item flex rounded-lg w-full lg:w-1/5 content-center justify-center flex-wrap bg-work-item">
          <img class="mt-10 lg:mt-20 object-cover" src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/service-item-visual.svg" alt="visual">
<p class="w-full mt-6 text-center mb-10 lg:mb-20 fs-4-bold lg:fs-3">平面設計</p>
        </li>
        <li class="bg-services-item flex rounded-lg w-full lg:w-1/5 content-center justify-center flex-wrap bg-work-item">
          <img class="mt-10 lg:mt-20" src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/service-item-ui.svg" alt="ui">
<p class="w-full mt-6 text-center mb-10 lg:mb-20 fs-4-bold lg:fs-3">UI 設計</p>
        </li>
        <li class="bg-services-item flex rounded-lg w-full lg:w-1/5 content-center justify-center flex-wrap bg-work-item">
          <img class="mt-10 lg:mt-20" src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/service-item-html%26css.svg" alt="html-css">
<p class="w-full mt-6 text-center mb-10 lg:mb-20 fs-4-bold lg:fs-3">切版服務</p>
        </li>
        <li class="bg-services-item flex rounded-lg w-full lg:w-1/5 content-center justify-center flex-wrap bg-work-item">
          <img class="mt-10 lg:mt-20" src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/service-item-front-end.svg" alt="coding">
<p class="w-full mt-6 text-center mb-10 lg:mb-20 fs-4-bold lg:fs-3">前端開發</p>
        </li>
      </ul>
      <div class="text-center mt-10 lg:mt-20">
<h3 class="fs-5 lg:fs-3">想要合作或瞭解更多？</h3>

                <button type="button" class="fs-6-bold mt-6 py-1 lg:py-4 lg:mt-10 bg-primary-900 rounded-md text-white">
                  <div class="flex py-2 lg:py-4 px-4 lg:px-8">
                  <span class="inline-block fs-6-bold lg:fs-5-bold">詳細內容與合作流程</span>
                  <span class="material-symbols-rounded ms-2 inline-block my-auto">
arrow_forward
</span>
</div>
                </button>
              </div>
            </section>
            <SwiperView></SwiperView>
          </main>
  <FooterView></FooterView>
</template>

<script>
import NavView from "../components/NavView.vue";
import FooterView from "../components/FooterView.vue";
import SwiperView from "../components/SwiperView.vue";
export default {
  components: {
    NavView,
    FooterView,
    SwiperView,
  },
};
</script>
