<template>
  <NavView />

  <h2 class="text-center mt-10 lg:mt-30 hidden lg:block">
    <span class="inline-block relative px-30"
      >關於我
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
      >關於我
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
  <div class="mx-auto bg-primary-200">
    <div
      class="xl:container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-20 mt-10 lg:mt-30"
    >
      <div
        class="lg:col-span-4 h1 flex justify-center align-items-center my-20 lg:my-40"
      >
        WHO AM I ？
      </div>
      <div
        class="bg-primary-600 lg:rounded-md h-full lg:col-span-8 h2 flex justify-center align-items-center text-white"
      >
        THAT'S A GOOD QUESTION！
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script>
import NavView from "../components/NavView.vue";
import FooterView from "../components/FooterView.vue";

export default {
  components: {
    NavView,
    FooterView,
  },
};
</script>
