<template>
  <!-- work1 Modal -->
  <div
    class="modal fade"
    id="work1"
    tabindex="-1"
    aria-labelledby="work1Modal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body border-0 flex px-14 flex-wrap">
          <h3 class="w-full text-center">星際旅行訂票平台</h3>
          <p class="mt-2 w-full text-center text-primary-500">
            悠遊宇宙的夢想，從這裡開始實現
          </p>
          <ul class="flex flex-col lg:flex-row gap-x-12 mt-10">
            <li class="flex-1 lg:flex-[7] content-center">
              <p>STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。</p>
              <p>
                主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
              </p>
            </li>
            <li
              class="flex-1 lg:flex-[5] content-center mt-4 lg:mt-0 text-primary-600 border-l-2 hidden lg:block"
            >
              <p class="w-full ms-6">
                設計原則：宇宙旅行、深色背景、強烈視覺效果
              </p>
              <p class="w-full mt-2 ms-6">
                開發方式：Bootstrap、Javascript、RWD
              </p>
            </li>
            <li
              class="flex-1 lg:flex-[5] content-center mt-4 lg:mt-0 text-primary-600 border-t block lg:hidden text-center"
            >
              <p class="w-full mt-6">設計原則</p>
              <p class="w-full">宇宙旅行、深色背景、強烈視覺效果</p>
              <p class="w-full mt-6">開發方式</p>
              <p class="w-full">Bootstrap、Javascript、RWD</p>
            </li>
          </ul>
          <ul class="flex flex-wrap w-full my-10 lg:my-20">
            <li class="flex justify-center w-full flex-wrap">
              <img
                class="rounded-lg"
                src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/modal-image1.png?raw=true"
                alt="modal-1"
              />
              <h4 class="mt-6 w-full text-center">主視覺</h4>
              <p class="mt-4 text-primary-500 w-full text-center">
                可直接設定日期、起迄星球、張數，快速查詢可購買的票券。
              </p>
            </li>
            <li class="flex justify-center w-full flex-wrap mt-14">
              <img
                class="rounded-lg"
                src="https://github.com/hexschool/2024-camp/blob/main/src/assets/images/modal-image2.png?raw=true"
                alt="modal-2"
              />
              <h4 class="mt-6 w-full text-center">推薦查詢</h4>
              <p class="mt-4 text-primary-500 w-full text-center">
                給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
