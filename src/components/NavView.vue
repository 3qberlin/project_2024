<template>
  <div class="bg-white sticky top-0 z-50">
    <nav
      class="hidden lg:flex justify-between content-center xl:container mx-auto"
    >
      <div class="logo py-3 lg:py-7 hidden lg:block">
        <router-link to="/">
          <img
            src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/logo.svg"
            alt="logo"
          />
        </router-link>
      </div>
      <ul class="flex py-8 justify-center content-center my-auto">
        <li class="relative">
          <router-link to="/" class="font-semibold relative">
            首頁
            <span
              class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
          </router-link>
        </li>
        <li class="relative lg:ml-10">
          <router-link to="collections" class="font-semibold relative"
            >作品集
            <span
              class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
          </router-link>
        </li>
        <li class="relative lg:ml-10">
          <router-link to="services" class="font-semibold relative">
            服務項目
            <span
              class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
          </router-link>
        </li>
        <li class="relative lg:ml-10">
          <router-link to="blogs" class="font-semibold relative">
            部落格
            <span
              class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
          </router-link>
        </li>
        <li class="relative lg:ml-10">
          <router-link to="contact" class="font-semibold relative">
            聯絡我
            <span
              class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
            <span
              class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
            >
            </span>
          </router-link>
        </li>
      </ul>
      <div></div>
    </nav>
  </div>
  <div class="block lg:hidden sticky top-0 z-50 bg-white">
    <div class="xl:container mx-auto">
      <div class="logo py-3 lg:py-7 absolute left-0 top-0 hidden lg:block">
        <router-link to="/">
          <img
            src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/logo.svg"
            alt="logo"
          />
        </router-link>
      </div>
      <div
        class="flex lg:hidden content-between py-4 border-b-2 border-gray-200"
      >
        <router-link to="/">
          <img
            src="https://raw.githubusercontent.com/hexschool/2024-camp/50f102c3d67a1e39aa4028e5c5105411ce2c3394/src/assets/images/logo.svg"
            alt="logo"
          />
        </router-link>
        <a href="#" class="ms-auto" @click.prevent="changeMenu">
          <span class="material-symbols-rounded text-40px">
            {{ menuStatus }}
          </span>
        </a>
      </div>
      <nav
        ref="nav"
        :class="{ block: active, hidden: !active }"
        class="relative lg:hidden z-40"
      >
        <ul
          class="flex flex-col py-8 justify-center content-center absolute top-0 left-0 w-full bg-primary-50 z-50"
        >
          <li class="relative mx-auto">
            <router-link to="/" class="font-semibold relative">
              首頁
              <span
                class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
            </router-link>
          </li>
          <li class="relative mx-auto mt-6">
            <router-link to="/collections" class="font-semibold relative">
              作品集
              <span
                class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
            </router-link>
          </li>
          <li class="relative mx-auto mt-6">
            <router-link to="/services" class="font-semibold relative">
              服務項目
              <span
                class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
            </router-link>
          </li>
          <li class="relative mx-auto mt-6">
            <router-link to="/blogs" class="font-semibold relative">
              部落格
              <span
                class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
            </router-link>
          </li>
          <li class="relative mx-auto mt-6">
            <router-link to="/contact" class="font-semibold relative">
              聯絡我
              <span
                class="absolute border-l-2 w-full top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-r-2 w-2 bottom-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 right-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 left-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-t-2 w-2 top-0 right-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-b-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
              <span
                class="absolute border-l-2 w-2 left-0 bottom-0 h-2 border-gray-400 hidden"
              >
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuStatus = ref("menu");
    const nav = ref(null);
    const active = ref(false);

    function changeMenu() {
      if (menuStatus.value === "menu") {
        menuStatus.value = "close";
        active.value = true;
      } else {
        menuStatus.value = "menu";
        active.value = false;
      }
    }
    return {
      menuStatus,
      changeMenu,
      nav,
      active,
    };
  },
};
</script>

<style scope>
nav a {
  padding: 4px 8px;
}

nav ul li:hover span {
  display: block;
  border-radius: 1px;
}
</style>
