<script setup lang="ts">
import { useData } from "vitepress";
import usePosts from "../../composables/usePosts";
import useAuthors from "../../composables/useAuthors";

const { site } = useData();

const { currentPost: post, path } = usePosts();
const { findByName } = useAuthors();
const author = findByName(post.value.author);
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between items-center mb-1 text-gray-500">
        <PostAuthor :author="author" />
        <span class="text-sm">{{ post.date.string }}</span>
      </div>
      <h3
        class="mb-2 mt-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
      >
        <span>{{ post.title }}</span>
      </h3>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.vp-doc h1,
h2,
h3,
hr {
  margin: 12px 0 0 0;
}
</style>
