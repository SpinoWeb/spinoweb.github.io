<script setup lang="ts">
import { useData } from "vitepress";
import usePosts from "../../composables/usePosts";

const { allPosts: posts } = usePosts();

const { theme } = useData();
</script>

<template>
  <div class="mx-auto max-w-screen-xl lg:py-0 lg:px-16">
    <div class="p-2 grid gap-3 lg:grid-cols-2">
      <div v-for="post of posts" class="m-0 p-0 content-center">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>
