<template>
  <div class="container">
    <form method="post" @submit.prevent="submitUser()">
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="form.password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="firstname" class="form-label">First Name:</label>
        <input
          type="firstname"
          class="form-control"
          id="firstname"
          v-model="form.firstname"
          required
        />
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name:</label>
        <input
          type="lastname"
          class="form-control"
          id="lastname"
          v-model="form.lastname"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createProfile",
  data() {
    return {
      form: { email: "", password: "", firstname: "", lastname: "" },
    };
  },
  methods: {
    submitUser() {
      axios
        .post(
          "http://catstagram.lofty.codes/api/users/",
          {
            email: this.form.email,
            password: this.form.password,
            first_name: this.form.firstname,
            last_name: this.form.lastname,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function () {
          console.log("Successfully created a user!");
        })
        .catch(function () {
          console.log("Failed to create a user!");
        });
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.container {
  height: 650px;
}
</style>
