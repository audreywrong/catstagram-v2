<script setup>
import ProfileFeed from "../components/ProfileFeed.vue";
</script>

<template>
  <main>
    <ProfileFeed />
    <div class="phone-footer">
      <RouterLink to="/" class="home-cta">
        <img class="img-fluid" src="../components/icons/cat-solid.png" />
      </RouterLink>
    </div>
  </main>
</template>
