<template>
  <div>
    <Header></Header>
    <div :id="contentID">
      <slot />
    </div>
    <Footer :articles="latestArticles" />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  data () {
    return {
      latestArticles: [
        {
          title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
          shortenedTitle: 'Fourth of July Fare',
          synopsis: "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
          date: 'Jun 21, 2019',
          image: 'blog'
        },
        {
          title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
          shortenedTitle: 'Fourth of July Fare',
          synopsis:
            "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
          date: 'Jun 21, 2019',
          image: 'blog'
        }
      ]
    }
  },
  props: {
    contentID: {
      type: String,
      default: ''
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
section {
  padding: 2rem 1.5rem;
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;

  @include tablet-landscape-up {
    padding: 2rem 4rem;
  }

  @include desktop-up {
    padding: 2rem 6rem;
  }
}
</style>
