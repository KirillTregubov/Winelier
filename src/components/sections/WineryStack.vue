<template>
  <div class="winery-stack">
    <router-link class="winery-card" :key="winery.id" v-for="winery in wineries" :to="computeUrl(winery.name)">
      <div class="image-container bg-image" :style="computeImg(winery.image)" />
      <!-- <ImageLoader classes="image-container" :src="winery.image" /> -->
      <div class="info-container">
        <div class="info-inner">
          <div class="container">
            <div class="badge">Featured</div>
            <div class="badge secondary">{{winery.address.province}}</div>
          </div>
          <h3>{{winery.name}}</h3>
          <div class="container">
            <Icon name="location-pin" />
            <h4>{{printAddress(winery.address)}}</h4>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'
import ImageLoader from '@/components/global/ImageLoader.vue'

export default {
  name: 'winery-stack',
  props: {
    wineries: {
      type: Array,
      required: true
    }
  },
  methods: {
    computeImg (image) {
      let img = image.replace(/ /g, '')
      return {
        backgroundImage: `url(${require(`@/assets/img/${img}.jpg`)})`
      }
    },
    printAddress (address) {
      return 'Street, ' + 'Town, ' + address.province
    },
    computeUrl (name) {
      return '/winery/' + name.replace(/\s+/g, '-').toLowerCase()
    }
  },
  components: {
    Icon,
    ImageLoader
  }
}
</script>

<style lang="scss">
div.winery-stack{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 1rem;

  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }

  @media (min-width: 900px) {
    margin: -1rem;
    padding: 1rem;
    overflow: auto;
    grid-template-columns: repeat(4, 18rem) !important;
  }

  a.winery-card {
    display: block;
    width: 100%;

    div.image-container {
      width: 100%;
      height: 15rem;
      border-radius: var(--radius-subtle);
      box-shadow: var(--shadow-deep);
    }

    div.info-container {
      margin-top: -4rem;

      div.info-inner {
        border-radius: var(--radius-subtle);
        background-color: var(--neutral050);
        box-shadow: var(--shadow-deep-sm);
      }
    }
  }
}
</style>
