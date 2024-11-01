<script setup lang="ts">
import { useData } from "vitepress";
import type { Post } from "../../composables/posts.data";
import useAuthors from "../../composables/useAuthors";
import PostIcon from "./PostIcon.vue";
import PostAuthor from "./PostAuthor.vue";

const props = defineProps<{
  post: Post;
}>();
const { site } = useData();
const { findByName } = useAuthors();
const author = findByName(props.post.author);
</script>

<template>
  <div>
    <h2>
      <a :href="`${site.base}blog${post.href}`">{{ post.title }}</a>
    </h2>
    <!-- <p class="mb-5 font-light" v-html="post.excerpt" /> -->
    <div class="flex">
      <strong>{{ post.date.string }}</strong
      ><i>&nbsp;{{ author ? "by" : "&nbsp;" }}&nbsp;</i
      ><PostAuthor :author="author" />
    </div>
  </div>
</template>

<style scoped>
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
</style>
