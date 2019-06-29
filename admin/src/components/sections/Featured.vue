<template>
  <section>
    <h1>Featured</h1>
  </section>
</template>

<script>
export default {
  data () {
    return {
      monthlyWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: 'winery'
        }
      ],
      popularWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Manitoba' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: 'winery'
        }
      ],
      featuredArticle: {
        title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
        synopsis:
          "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
        image: 'blog',
        created_at: 'Jun 21, 2019'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
