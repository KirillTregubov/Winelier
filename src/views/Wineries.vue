<template>
  <Wrapper contentID="wineries">
    <Hero>
      <h1><div class="pronounced">Discover</div> Canadian Wineries</h1>
      <h2>Explore a selection of over 800 licensed wineries in Canada.</h2>
    </Hero>
    <section id="content">
      <!-- <div>
        <h2>Willow Springs Valley</h2>
        <router-link to="/winery/willow-springs-winery">Go to page</router-link>
      </div> -->
      <div class="ontario-container">
        <h1>Ontario Wineries</h1>
        <WineryStack :wineries="monthlyWineries" />
      </div>
      <div class="monthly-container">
        <h1>Wineries of the Month</h1>
        <WineryStack :wineries="monthlyWineries" />
      </div>
      <div class="popular-container">
        <h1>Popular Wineries</h1>
        <WineryList :wineries="popularWineries" />
      </div>
      <div class="britishcolumbia-container">
        <h1>British Columbia Wineries</h1>
        <WineryStack :wineries="monthlyWineries" />
      </div>
      <div class="alberta-container">
        <h1>Alberta Wineries</h1>
        <WineryStack :wineries="monthlyWineries" />
      </div>
      <div class="quebec-container">
        <h1>Quebec Wineries</h1>
        <WineryStack :wineries="monthlyWineries" />
      </div>
    </section>
  </Wrapper>
</template>

<script>
// import Api from '@/services/Api.js'
// import store from '@/store.js'
import Wrapper from '@/components/global/Wrapper.vue'
import Hero from '@/components/sections/Hero.vue'
import WineryStack from '@/components/sections/WineryStack.vue'
import WineryList from '@/components/sections/WineryList.vue'

export default {
  name: 'wineries',
  data () {
    return {
      // wineries: null,
      monthlyWineries: [
        {
          name: 'Willow Springs Winery',
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
          name: 'Alton Farms Estate',
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
      ]
    }
  },
  props: ['name'],
  methods: {
    printAddress (address) {
      return 'Street, ' + 'Town, ' + address.province
    }
  },
  beforeRouteEnter (to, from, next) {
    // Api.getMeta({}).then((response) => {
    //   response.data.url = to.fullPath
    //   store.dispatch('updateMeta', response.data)
    next()
    // })
  },
  created () {
    // Api.getRow({ table: 'wineries', name: this.kebabToSentence(this.$route.params.name) }).then((response) => {
    //   if (response.data.status === 'success') {
    //     this.winery = JSON.parse(response.data.content)
    //     this.doesExist = true
    //   } else {
    //     console.log('error')
    //   }
    this.$emit('load')
    // })
  },
  components: {
    Wrapper,
    Hero,
    WineryStack,
    WineryList
  }
}
</script>

<style lang="scss">
</style>
