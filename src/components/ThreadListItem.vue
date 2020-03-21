<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
          {{ thread.title }}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ user }}</a>, {{ thread.publishedAt }}.
      </p>
    </div>
    <div class="activity">
      <p class="replies-count">
        {{ repliesCount === 1 ? `${repliesCount} reply` : `${repliesCount} replies` }}
      </p>
      <img class="avatar-medium" :src="userAvatar" alt="">
      <!-- <div>
        <p class="text-xsmall">
          <a href="#">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import sourceData from '@/data';
export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    repliesCount() {
      return Object.keys(this.thread.posts).length - 1;
    },
    user() {
      return sourceData.users[this.thread.userId].name;
    },
    userAvatar() {
      return sourceData.users[this.thread.userId].avatar;
    }
  }
};
</script>

<style>
</style>

