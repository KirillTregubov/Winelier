<template>
  <div class="featured-article">
    <div class="content">
      <div class="image-container bg-image" :style="computeImg(article.image)">
      <!-- <ImageLoader classes="image-container" :src="article.image" /> -->
      </div>
      <div class="info-container">
        <div class="container">
          <Icon name="star" />
          <h3>Featured</h3>
        </div>
        <h1>{{ article.title }}</h1>
        <h2>{{ article.synopsis }}</h2>
        <div class="container">
          <Icon name="calendar-date" />
          <h3>{{ article.date }}</h3>
        </div>
        <a href="" class="button secondary">
          <Icon name="book-open" />Read Article</a>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'
// import ImageLoader from '@/components/global/ImageLoader.vue'

export default {
  name: 'featured-article',
  props: {
    article: {
      type: Object,
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
div.featured-article div.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-md);
  overflow: hidden;

  @include tablet-landscape-up {
    flex-direction: row;
  }

  div.image-container {
    height: 12.5rem;
    width: 100%;

    @include tablet-landscape-up {
      width: 50%;
      height: auto;
    }

    // > div.image {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100%;
    width: 100%;
    // }
  }

  div.info-container {
    padding: 1.75rem;
    background-color: var(--yellow700);

    @include tablet-landscape-up {
      width: 50%;
    }

    h1 {
      line-height: 1.25;
      color: var(--yellow100);
    }

    h2 {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-weight: var(--font-semibold);
      color: var(--yellow200);
      font-size: var(--font-md);
    }

    div.container {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;

      svg {
        margin-right: 0.5rem;

        .primary {
          fill: var(--yellow900);
        }

        .secondary {
          fill: var(--yellow400);
        }
      }

      h3 {
        color: var(--yellow300);
        font-size: var(--font-base);
        font-weight: var(--font-semibold);
      }
    }
  }
}
</style>
