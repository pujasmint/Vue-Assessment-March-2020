<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.header">Not found</h1>
    <p :class="$style.text__large">Oops, we couldn't find what you're looking for. Why don't you 
      <router-link :to="{name: 'Home'}">try the Home page</router-link> 
    instead?</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style module>
.centered {
  text-align: center;
}
.header {
  font-size: 100px;
}
.text__large {
  font-size: 50px;
  font-weight: 100;
}
</style>


