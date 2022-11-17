<template>
  <div class="catstagram-post">
    <div class="header level">
      <div class="level-left">
        <!-- <div>
          <img class="profile-img img-fluid" :src="post.userImage" /><span
            class="username"
            >{{ post.username }}</span
          >
        </div> -->
      </div>
    </div>
    <div
      class="image-container"
      :style="{ backgroundImage: 'url(' + image.image + ')' }"
      @dblclick="like"
    ></div>
    <div class="content">
      <div class="heart">
        <!-- <i
          class="far fa-heart fa-lg"
          :class="{ fas: this.post.hasBeenLiked }"
          @click="like"
        ></i> -->
      </div>
      <!-- <p class="likes d-flex justify-content-start">{{ post.likes }} likes</p>
      <p class="caption">
        <span>{{ post.username }} </span>{{ post.caption }}
      </p> -->
      <div class="form mb-3">
        <!-- <form>
          <div class="form-group">
            <label class="comment-label">Leave a comment</label>
            <input
              type="text"
              v-model.trim="reply"
              placeholder="Catty comments only..."
              maxlength="250"
              required
            />
            <button class="btn py-1" @click.prevent="submitComment">
              Comment
            </button>
          </div>
        </form> -->
      </div>
      <!-- <div v-for="comment in post.comments" :key="post.comments">
        <p>{{ comment }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CatstagramPost",
  props: {
    image: Object,
  },
  data() {
    return {
      reply: "",
    };
  },
  methods: {
    // like() {
    //   this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
    //   this.post.hasBeenLiked = !this.post.hasBeenLiked;
    // },
    // submitComment: function () {
    //   console.log(this.reply);
    //   if (this.reply != "") {
    //     // this.$emit("comment-entry", this.reply);
    //     // this.reply = "";
    //     this.post.comments.push(this.reply);
    //   }
    // },
  },
};
</script>

<style lang="scss" src="../assets/catstagram-posts.css">
// Styles from stylesheet
</style>
