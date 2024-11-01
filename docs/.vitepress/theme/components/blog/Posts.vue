<script setup lang="ts">
import { useData } from "vitepress";
import usePosts from "../../composables/usePosts";

const { allPosts: posts } = usePosts();

const { theme } = useData();
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="p-2 grid gap-6 lg:grid-cols-1">
      <div v-for="post of posts">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>
