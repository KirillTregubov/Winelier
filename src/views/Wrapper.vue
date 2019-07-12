<template>
  <div>
    <Header></Header>
    <slot />
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
  components: {
    Header,
    Footer
  }
}
</script>
