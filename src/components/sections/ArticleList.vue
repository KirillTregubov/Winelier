<template>
  <div class="article-list">
    <router-link class="article-card" :key="article.id" v-for="article in articles" :to="computeUrl(article.shortenedTitle)">
      <div class="image-container bg-image" :style="computeImg(article.image)" />
      <!-- <ImageLoader classes="image-container" :src="article.image" /> -->
      <div class="info-container">
        <div class="info-inner">
          <!-- <div class="container">
            <div class="badge">Featured</div>
            <div class="badge secondary">{{article.address.province}}</div>
          </div> -->
          <h3>{{ article.title }}</h3>
          <p>{{ article.synopsis }}</p>
          <div class="container">
            <Icon name="calendar-date" />
            <h4>{{ article.date }}</h4>
            <!-- <h4>{{printAddress(article.address)}}</h4> -->
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
  name: 'article-list',
  props: {
    articles: {
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
div.article-list {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (max-width: 399px) {
    // grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }

  @include tablet-portrait-up {
    // grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  // @include phone-only {
  //   a.winery-card {
  //     width: 100%;

  //     div.image-container {
  //       width: 100%;
  //       height: 15rem;
  //       border-radius: var(--radius-subtle);
  //       box-shadow: var(--shadow-deep);
  //     }

  //     div.info-container {
  //       margin-top: -4rem;

  //       div.info-inner {
  //         border-radius: var(--radius-subtle);
  //         background-color: var(--neutral050);
  //         box-shadow: var(--shadow-deep-sm);
  //       }
  //     }
  //   }
  // }

  a.article-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    user-select: none;
    border-radius: var(--radius-subtle);
    background-color: var(--neutral050);
    box-shadow: var(--shadow-deep-sm);

    @include tablet-landscape-up {
      flex-direction: row;
    }

    div.image-container {
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      // width: 35%;
      height: 10rem;
      width: 100%;

      @include tablet-landscape-up {
        width: 35%;
        height: auto;
      }
    }

    div.info-container {
      width: 100%;
      position: relative;
      padding: 0 0.5rem;

      @include tablet-landscape-up {
        width: 65%;
      }

      div.info-inner {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.75rem;

        > :not(:last-child) {
          margin-bottom: 1rem;
        }

        h3 {
          font-weight: var(--font-semibold);
          font-size: var(--font-lg);
        }

        p {
          font-size: var(--font-md);
          color: var(--neutral600);
          line-height: 1.2;
        }

        div.container {
          display: flex;
          align-items: center;

          div.badge:first-child {
            margin-right: 0.5rem;
          }

          svg {
            margin-right: 0.5rem;
            width: 1.25rem;

            .primary {
              fill: var(--neutral200);
            }

            .secondary {
              fill: var(--neutral400);
            }
          }

          h4 {
            font-weight: var(--font-normal);
            font-size: var(--font-base);
            color: var(--neutral400);
          }
        }
      }
    }
  }
}
</style>
