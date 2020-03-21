<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '&/PostList';
import sourceData from '@/data';
export default {
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      thread: sourceData.threads[this.id]
    };
  },
  computed: {
    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']));
    }
  },
  // hint
  methods: {
    addPost({post}) {
      const postId = post['.key'];
      // Adds new post to sourceData object
      this.$set(sourceData.posts, postId, post);
      // Adds new post to thread.posts
      this.$set(this.thread.posts, postId, postId);
      // Increments number of user posts on submit
      this.$set(sourceData.users[post.userId].posts, postId, postId);
    }
  }
};
</script>

<style>
</style>
