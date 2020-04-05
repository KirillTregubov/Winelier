<template>
  <div class="winery-list">
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
// import ImageLoader from '@/components/global/ImageLoader.vue'

export default {
  name: 'winery-list',
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
    Icon
    // ImageLoader
  }
}
</script>

<style lang="scss">
div.winery-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 399px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }

  @include tablet-portrait-up {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @include phone-only {
    a.winery-card {
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

  @include tablet-portrait-up {
    a.winery-card {
      display: flex;
      border-radius: var(--radius-subtle);
      background-color: var(--neutral050);
      box-shadow: var(--shadow-deep-sm);
      overflow: hidden;

      div.image-container {
        width: 40%;
      }
    }
  }
}
</style>
