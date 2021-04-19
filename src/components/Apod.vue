<template>
  <div>
    <h2 class="text-center mt-5 mb-5">
      Picture of the day: <strong>{{ pictureData.title }}</strong>
    </h2>
    <div class="flex justify-around p-5 bg-gray-900">
      <div class="w-2/3">
        <img :src="pictureData.hdurl" alt="picture" />
      </div>
      <div class="w-1/2 bg-white flex items-center p-5">
        <span>{{ pictureData.explanation }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import nasaApi from "../services/nasa/apod/nasaApi";

export default {
  name: "Apod",
  data() {
    return {
      pictureData: Object,
    };
  },
  mounted() {
    nasaApi.getPicture().then((response) => {
      this.pictureData = response.data;
      // console.log(response.data)
    });
  },
};
</script>

<style>
</style>