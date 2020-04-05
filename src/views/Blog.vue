<template>
  <Wrapper contentID="blog">
    <Hero>
      <h1><div class="pronounced">Read</div> Our Blog</h1>
      <h2>Explore articles about the best of Canadian wine written by our staff.</h2>
    </Hero>
    <section id="content">
      <FeaturedArticle :article="featuredArticle" />
      <div class="articles-container">
        <h1>Recent Articles</h1>
        <ArticleList :articles="articles"/>
      </div>
    </section>
  </Wrapper>
</template>

<script>
// import Api from '@/services/Api.js'
// import store from '@/store.js'
import Wrapper from '@/components/global/Wrapper.vue'
import Hero from '@/components/sections/Hero.vue'
import FeaturedArticle from '@/components/sections/FeaturedArticle.vue'
import ArticleList from '@/components/sections/ArticleList.vue'

export default {
  name: 'blog',
  data () {
    return {
      articles: [
        {
          title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
          shortenedTitle: 'Fourth of July Fare',
          synopsis:
            "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
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
      ],
      featuredArticle: {
        title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
        shortenedTitle: 'Fourth of July Fare',
        synopsis:
          "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
        date: 'Jun 21, 2019',
        image: 'blog'
      }
    }
  },
  props: ['name'],
  methods: {
    printAddress (address) {
      return 'Street, ' + 'Town, ' + address.province
    }
  },
  created () {
    this.$emit('load')
  },
  components: {
    Wrapper,
    Hero,
    FeaturedArticle,
    ArticleList
  }
}
</script>

<style lang="scss">
</style>
