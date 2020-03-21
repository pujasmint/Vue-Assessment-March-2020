<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
    </div>

    <form class="post-content add-post" @submit.prevent="onSubmit">
        <textarea class="form-input" placeholder="Let it out and express yourself" v-model="postText"/>
        <input type="submit" value="Add">
        <input type="reset" value="Cancel">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    },
    threadId: {
      required: true,
      type: String
    }
  },
  computed: {
  },
  data() {
    return {
      postText: ''
    };
  },
  methods: {
    onSubmit: function() {
      if (this.postText.trim()) {
        this.$emit('post-added', {post: {
          'edited': {
            'at': new Date().getTime(),
            'by': this.user['.key'],
            'moderated': false
          },
          'publishedAt': new Date().getTime(),
          'text': this.postText,
          'threadId': this.threadId,
          'userId': this.user['.key'],
          '.key': new Date().getTime()
        }});
        this.postText = '';
      }
    }
  }
};
</script>

<style>

</style>
