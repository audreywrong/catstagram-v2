<template>
  <div class="wrapper text-center my-3">
    <img class="img-fluid single-image mb-5" :src="domain + image" />
    <div class="form mb-3">
      <form>
        <div class="form-group">
          <label class="comment-label">Leave a comment:</label>
          <input
            type="text"
            class="ms-1"
            v-model.trim="reply"
            placeholder="Catty comments only..."
            maxlength="250"
            required
          />
          <button class="btn py-1 ms-1" @click.prevent="submitComment">
            Comment
          </button>
        </div>
      </form>
    </div>
    <div v-for="inf in info" :key="inf.text">
      <p class="mb-0">{{ inf.text }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "singleImage",
  data() {
    const route = useRoute();

    return {
      domain: "http://catstagram.lofty.codes/media/",
      image: route.params.image,
      pk: route.params.pk,
      reply: "",
      info: [],
    };
  },
  mounted() {
    let catstagramComments = axios
      .get("http://catstagram.lofty.codes/api/posts/" + this.pk)
      .then((response) => (this.info = response.data.comments));
    console.log(catstagramComments);
    console.log(this.info);
  },
  methods: {
    submitComment: function () {
      console.log(this.reply);
      if (this.reply != "") {
        axios
          .post(
            "http://catstagram.lofty.codes/api/comments/",
            { text: this.reply, entry: this.pk },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function () {
            console.log("Successfully posted comment!");
            window.location.reload();
          })
          .catch(function () {
            console.log("Failed to post comment!");
          });

        this.reply = "";
      }
    },
  },
  computed: {
    computedComments() {
      if (typeof this.comments === "string") {
        return JSON.parse(this.comments);
      } else {
        return this.comments;
      }
    },
  },
};
</script>

<style>
.single-image {
  width: 450px;
  height: 450px;
}

.wrapper {
  height: 650px;
  overflow-y: scroll;
}

.comment-label {
  font-weight: bold;
}

.btn {
  background-color: #209cee;
  color: #fff;
}
</style>
