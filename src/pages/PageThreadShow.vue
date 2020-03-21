<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
    <AddPostItem :user="loggedInUser" :threadId="id" @post-added="addPost"/>
  </div>
</template>

<script>
import PostList from '&/PostList';
import AddPostItem from '&/AddPostItem';
import sourceData from '@/data';
export default {
  components: {
    PostList,
    AddPostItem
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      thread: sourceData.threads[this.id],
      loggedInUser: {
        'avatar': 'https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Ftunajoe?alt=media&token=dcc2eb1d-81a5-4e82-8774-bb97be7c3128',
        'name': 'Joey Williams',
        '.key': '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
      }
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
      setTimeout(() => window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      }));
    }
  }
};
</script>

<style>
</style>
