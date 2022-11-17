<template>
  <div class="app-body">
    <div v-if="step === 1" class="feed">
      <catstagram-post
        v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)"
      >
      </catstagram-post>
    </div>
    <div v-if="step === 2">
      <div
        class="selected-image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
    <div v-if="step === 3">
      <div
        class="selected-image"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="caption-container">
        <textarea
          class="caption-input"
          placeholder="Meow meow caption meow..."
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import CatstagramPost from "./CatstagramPost.vue";

export default {
  name: "AppBody",
  props: {
    step: Number,
    posts: Array,
    image: String,
    value: String,
  },
  components: {
    "catstagram-post": CatstagramPost,
  },
};
</script>

<style lang="css" src="../assets/app-body.css">
// Styles from stylesheet
</style>
