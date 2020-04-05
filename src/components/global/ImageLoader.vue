<template>
  <!-- <img :src="imageSrc" alt="img"> -->
  <div class="main" :class="classes">
    <Preloader />
    <transition name="fade-long">
      <!-- <div key="bg" :class="classes" class="bg-image" v-show="!this.imageSrc"></div> -->
      <div class="image" :style="{'background-image': 'url(' + this.imageSrc + ')'}"></div>
    </transition>
  </div>
</template>

<script>
import Preloader from '@/components/global/Preloader.vue'

export default {
  name: 'image-loader',
  data () {
    return {
      imageSrc: null
    }
  },
  computed: {
    computedSrc () {
      if (this.origin === 'local') {
        let img = this.src.replace(/ /g, '')
        return `${require(`@/assets/img/${img}.jpg`)}`
      } else if (this.origin === 'upload') return 'https://winelier.com/new/uploads/' + this.src + '.jpg';
      else if (this.origin === 'foreign') return this.src;
      else return ''
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    origin: {
      type: String,
      default: 'local'
    },
    src: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: ''
    }
  },
  mounted () {
    let that = this
    let img = new Image()
    img.src = this.computedSrc
    img.onload = function () {
      that.imageSrc = that.computedSrc
    }

    img.src = this.computedSrc
  },
  components: {
    Preloader
  }
}
</script>

<style lang="scss">
// img {
//   // width: 100%;
//   height: 20rem;
// }

div.main {
  height: unset !important;
}

.bg-image {
  background-color: var(--neutral100);
  // transition: background 1.5s ease;
}

.fade-long-enter-active, .fade-long-leave-active {
  transition: opacity 2s;
}

.fade-long-enter, .fade-long-leave {
  opacity: 0;
}
</style>
