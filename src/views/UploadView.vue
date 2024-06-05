<template>
  <div>
    <div v-if="data">
      <ul v-for="(item, index) in data" :key="index" class="grid grid-col-1 lg:grid-cols-2 lg:gap-4 gap-8 mt-8 lg:mt-1">
        <li class="flex flex-col">
          <img :src="item.images" :alt="item.text"/>
          <p class="text-primary-600 text-center mt-2">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <button @click="writeData">Write Data</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { db } from "../db.js";
import { ref as dbRef, onValue, set } from "firebase/database";

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

    const writeData = () => {
      const productInfo = [
        {
          images:
            "https://github.com/hexschool/2024-camp/blob/main/src/assets/images/vision-pro.png?raw=true",
          text: "Vision Pro",
        },
        {
          images:
            "https://github.com/hexschool/2024-camp/blob/main/src/assets/images/oculus-rift.png?raw=true",
          text: "Oculus Rift",
        },
        {
          images:
            "https://github.com/hexschool/2024-camp/blob/main/src/assets/images/htc-vive.png?raw=true",
          text: "HTC Vive",
        },
        {
          images:
            "https://github.com/hexschool/2024-camp/blob/main/src/assets/images/playstation-vr.png?raw=true",
          text: "Playstation VR",
        },
      ];
      const dataRef = dbRef(db, "temp/productInfo");
      set(dataRef, productInfo)
        .then(() => {
          console.log("Data written successfully!");
        })
        .catch((error) => {
          console.error("Error writing data:", error);
        });
    };

    return {
      data,
      writeData,
    };
  },
};
</script>
