<template>
  <section id="notFound">
    <h1 v-if="path">'{{ path }}' doesn't exist</h1>
    <h1 class="title" v-else>Oops! Looks like you tried to go somewhere that doesn't exist...</h1>
    <div class="buttons">
      <router-link class="button" to="/">Go Home</router-link>
      <!-- <a class="button" @click="goBack()">Go Back</a> -->
    </div>
    <!-- <VueSVG name="page-not-found" size="0.4"/> -->
  </section>
</template>

<script>
export default {
  name: 'not-found',
  props: {
    path: {
      type: String,
      default: null
    }
  },
  created () {
    this.$emit('load')
  }
}
</script>

<style>
#notFound {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
