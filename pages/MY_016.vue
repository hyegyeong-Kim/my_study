<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const breakpoints = {
  375: {
    itemsToShow: 2,
    snapAlign: "start",
    wrapAround: true
  },
  451: {
    itemsToShow: 3,
    snapAlign: "start",
    wrapAround: true
  },
  521: {
    itemsToShow: 4,
    snapAlign: "start",
    wrapAround: true
  }
};

const profileData = [
  { id: 1, image: "/_nuxt/assets/images/sample/sample_01.jpg" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
  { id: 6, image: "" },
  { id: 7, image: "" },
  { id: 8, image: "" },
  { id: 9, image: "" },
  { id: 10, image: "" }
];
</script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">프로필 변경</h2>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <div class="choice-wrap">
            <label for="service01" class="label">
              <input id="service01" type="radio" name="service" checked />
              <span class="title">mySUNI</span>
            </label>
            <label for="service02" class="label">
              <input id="service02" type="radio" name="service" />
              <span class="title">mySUNI</span>
            </label>
            <label for="service03" class="label">
              <input id="service03" type="radio" name="service" />
              <span class="title">mySUNI ON</span>
            </label>
            <label for="service04" class="label">
              <input id="service04" type="radio" name="service" />
              <span class="title">이천 포럼</span>
            </label>
            <label for="service05" class="label">
              <input id="service05" type="radio" name="service" />
              <span class="title">울산 포럼</span>
            </label>
          </div>
        </article>

        <article>
          <div class="profile-wrap">
            <div class="main-image">
              <span class="image">
                <img src="@/assets/images/sample/sample_01.jpg" alt="" />
              </span>
              <label for="attachFile" class="label">
                <input id="attachFile" type="file" />
              </label>
            </div>

            <Carousel :breakpoints="breakpoints">
              <Slide v-for="item in profileData" :key="item">
                <button type="button" class="thumb-image">
                  <img v-if="item.image" :src="item.image" alt="" />
                </button>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </article>

        <article>
          <div class="border-wrap">
            <strong class="title">닉네임</strong>
            <CInputs :id="'nickname'" :type="'text'" :placeholder="'닉네임을 입력하세요.'" :label="'닉네임'" :value="''" :disabled="false" :readonly="false" />
          </div>
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'원래대로'" />
          <CButtons class="big gray" :title="'저장'" disabled />
          <CButtons class="big point" :title="'저장'" />
        </div>
      </form>
    </div>
  </div>
</template>
