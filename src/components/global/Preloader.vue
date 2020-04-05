<template>
  <content-loader
    :speed="2"
    :animate="true"
    :width="computedWidth"
    :height="computedHeight"
    :primaryColor="computedPrimaryColor"
    :secondaryColor="computedSecondaryColor"
    :class="type"
  >
  <!-- hsl(214, 15%, 91%) hsl(211, 13%, 65%) hsl(210, 16%, 82%)-->
    <template v-if="type === 'paragraph'">
      <rect x="0" y="0" :rx="0.5*0.10" :ry="0.5*0.10" :width="computedWidth" :height="0.5" />
      <rect x="0" y="0.75" :rx="0.5*0.10" :ry="0.5*0.10" :width="computedWidth" :height="0.5" />
      <rect x="0" y="1.5" :rx="0.5*0.10" :ry="0.5*0.10" :width="computedWidth" :height="0.5" />
      <rect x="0" y="2.25" :rx="0.5*0.10" :ry="0.5*0.10" :width="computedWidth" :height="0.5" />
      <rect x="0" y="3" :rx="0.5*0.10" :ry="0.5*0.10" :width="computedWidth * 0.40" :height="0.5" />
    </template>
    <!-- <rect v-if="type === 'paragraph'" x="0" y="0.1" :rx="computedHeight*0.10" :ry="computedHeight*0.10" :width="computedWidth" :height="computedHeight / 4" />
    <rect v-if="type === 'paragraph'" x="0" y="0.3" :rx="computedHeight*0.10" :ry="computedHeight*0.10" :width="computedWidth" :height="computedHeight / 4" /> -->
    <rect v-else-if="type === 'base'" x="0" y="0" width="100%" height="100%" />
    <rect v-else x="0" y="0" :rx="computedHeight*0.10" :ry="computedHeight*0.10" :width="computedWidth" :height="computedHeight" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'preloader',
  computed: {
    computedWidth () {
      if (this.type === 'base') return 1
      else if (this.type === 'hero-h1') return 35
      else if (this.type === 'hero-h2') return 40
      else if (this.type === 'paragraph') return 40
      else return 0
    },
    computedHeight () {
      if (this.type === 'base') return 2
      else if (this.type === 'hero-h1') return 5
      else if (this.type === 'hero-h2') return 5
      else if (this.type === 'paragraph') return 3.75
      else return 0
    },
    computedColor () {
      if (this.type === 'base') return 'light'
      else if (this.type === 'hero-h1') return 'light'
      else if (this.type === 'hero-h2') return 'light-gray'
      else if (this.type === 'paragraph') return 'dark-gray'
      else return ''
    },
    computedPrimaryColor () {
      if (this.computedColor === 'light') return 'hsl(214, 15%, 91%)'
      else if (this.computedColor === 'light-gray') return 'hsl(211, 13%, 65%)'
      else if (this.computedColor === 'dark-gray') return 'hsl(209, 18%, 30%)'
      else if (this.computedColor === 'black') return 'hsl(210, 24%, 16%)'
      else return ''
    },
    computedSecondaryColor () {
      if (this.computedColor === 'light') return 'hsl(0, 100%, 100%)'
      else if (this.computedColor === 'light-gray') return 'hsl(210, 16%, 82%)'
      else if (this.computedColor === 'dark-gray') return 'hsl(209, 14%, 37%)'
      else if (this.computedColor === 'black') return 'hsl(209, 20%, 25%)'
      else return ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'base'
    }
  },
  components: {
    ContentLoader
  }
}
</script>

<style lang="scss">
.hero-h1 {
  // margin-top: -5px;
  margin-bottom: 1rem;
  height: 2rem;

  @include tablet-portrait-up {
    height: 3.65rem;
  }
}

.hero-h2 {
  margin-top: 1px;
  margin-bottom: -1px;
  height: 1rem;
}

.paragraph {
  // height: 4rem;
}
</style>
