<template>
  <div class="card-body d-flex flex-wrap mb-5">
    <div class="mx-1 my-1" v-for="inf in info">
      <RouterLink
        :to="{
          name: 'singleImage',
          params: {
            image: inf.image,
            pk: inf.pk,
          },
        }"
        ><img
          class="img-fluid grid-img"
          :src="domain + inf.image"
          @error="hideImg"
      /></RouterLink>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileFeed",
  props: {
    posts: Array,
    image: String,
    value: String,
  },
  data() {
    return {
      info: [],
      domain: "http://catstagram.lofty.codes/media/",
    };
  },
  methods: {
    hideImg(event) {
      event.target.parentElement.style.display = "none";
    },
  },
  mounted() {
    let catImageResponse = axios
      .get("http://catstagram.lofty.codes/api/posts/")
      .then((response) => (this.info = response.data));
    console.log(catImageResponse);
    console.log(this.info);
  },
};
</script>
