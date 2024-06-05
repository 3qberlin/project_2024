<template>
  <section class="pt-20 lg:pt-30 xl:container mx-auto">
    <h2 class="text-center hidden lg:block">
      <span class="inline-block relative px-30"
        >精選文章
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
    </h2>
    <h4 class="text-center mt-10 lg:mt-30 block lg:hidden">
      <span class="inline-block relative px-20"
        >精選文章
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
    </h4>
    <div class="wrap px-3 lg:px-0">
      <swiper
        :modules="modules"
        :slidesPerView="1"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 24,
            pagination: { enabled: true },
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }"
        :pagination="{
          clickable: true,
          enabled: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mt-10 lg:mt-20"
      >
        <swiper-slide class="pb-10">
          <a href="#">
            <div class="flex justify-center w-full flex-wrap">
              <img
                class="rounded-sm w-full"
                src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image1.png?raw=true"
                alt="article-1"
              />
              <h5 class="mt-4 w-full">
                Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
              </h5>
              <div
                class="flex justify-between content-center w-full mt-4 lg:mt-5"
              >
                <p class="py-1 px-3 bg-primary-200 rounded-full">UI/UX 新知</p>
                <p class="self-center">2024/02/10</p>
              </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <div class="flex justify-center w-full flex-wrap">
              <img
                class="rounded-sm w-full"
                src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image2.png?raw=true"
                alt="article-2"
              />
              <h5 class="mt-4">
                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
              </h5>
              <div
                class="flex justify-between content-center w-full mt-4 lg:mt-5"
              >
                <p class="py-1 px-3 bg-primary-200 rounded-full">UI/UX 新知</p>
                <p class="self-center">2024/02/10</p>
              </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="#">
            <div class="flex justify-center w-full flex-wrap">
              <img
                class="rounded-sm w-full"
                src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/article-image3.png?raw=true"
                alt="article-3"
              />
              <h5 class="mt-4">
                給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
              </h5>
              <div
                class="flex justify-between content-center w-full mt-4 lg:mt-5"
              >
                <p class="py-1 px-3 bg-primary-200 rounded-full">UI/UX 新知</p>
                <p class="self-center">2024/02/10</p>
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-center mb-20">
      <button
        type="button"
        class="fs-6-bold mt-6 py-1 lg:mt-10 bg-primary-900 rounded-md text-white block md:hidden"
      >
        <div class="flex py-2 lg:py-4 px-4 lg:px-8">
          <span class="inline-block fs-6-bold lg:fs-5-bold">更多文章</span>
          <span class="material-symbols-rounded ms-2 inline-block my-auto">
            arrow_forward
          </span>
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
