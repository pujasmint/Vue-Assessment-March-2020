<template>
  <div class="col-full">
    <h1>Welcome to The Forum!</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import ThreadList from '&/ThreadList';
import sourceData from '@/data';
console.log(sourceData);

export default {
  name: 'Home',
  components: {
    ThreadList
  },
  data() {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>

<style scoped>

</style>
