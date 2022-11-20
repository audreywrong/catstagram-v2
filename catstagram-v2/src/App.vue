<template>
  <div id="app">
    <div class="app-phone card">
      <div class="text-center mt-2">
        <img class="card-img-top" src="./components/icons/Catstagram.png" />
        <a class="cancel-cta" v-if="step === 2 || step === 3" @click="goToHome"
          >Cancel</a
        >
        <a class="next-cta" v-if="step === 2" @click="submitFile"> Post </a>
      </div>
      <div class="text-center mb-5" v-if="step === 2">
        <img
          class="img-fluid preview-image"
          v-bind:src="imagePreview"
          v-show="showPreview"
        />
      </div>
      <RouterView v-if="step === 1" />
      <div class="phone-footer">
        <RouterLink to="/" class="home-cta">
          <img class="img-fluid" src="./components/icons/cat-solid.png" />
        </RouterLink>
        <RouterLink to="/createuser">
          <img
            class="img-fluid"
            style="width: 20px; margin-left: 40px"
            src="./components/icons/cat-solid.png"
          />
        </RouterLink>
        <div class="upload-cta">
          <input
            type="file"
            name="file"
            id="file"
            ref="file"
            class="inputfile"
            accept="image/*"
            @change="handleFileUpload()"
            :disabled="step !== 1"
          />
          <label for="file"><i class="fa fa-plus-square fa-lg"></i></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProfileFeed from "./components/ProfileFeed.vue";

export default {
  name: "App",
  data() {
    return {
      step: 1,
      file: "",
      showPreview: false,
      imagePreview: "",
      name: "",
    };
  },
  methods: {
    submitFile() {
      /* Initialize the form data */
      let formData = new FormData();

      /* Add the form data we need to submit */
      formData.append("name", this.name);
      formData.append("image", this.file);

      /* Make the request to the POST /single-file URL */
      axios
        .post("http://catstagram.lofty.codes/api/posts/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
          window.location.reload();
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    /* Handles a change on the file upload*/
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.name = "username";
      this.step = 2;
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          /*
          Fire the readAsDataURL method which will read the file in and
          upon completion fire a 'load' event which we will listen to and
          display the image in the preview.
        */
          reader.readAsDataURL(this.file);
        }
      }

      console.log(this.file);
      console.log(this.step);
    },
    sharePost() {
      const post = {
        postImage: this.image,
        likes: 0,
        caption: this.caption,
      };
      this.info.unshift(post);
      this.goToHome();
      console.log(this.caption);
    },
    goToHome() {
      this.file = "";
      this.step = 1;
    },
  },
  components: {
    "profile-feed": ProfileFeed,
  },
};
</script>

<style lang="css" src="./assets/main.css"></style>
