<template>
  <Wrapper id="wineries">
    <h1> Wineries Discover Page </h1>
  </Wrapper>
</template>

<script>
import Api from '@/services/Api.js'
import store from '@/store.js'
import Wrapper from '@/components/global/Wrapper.vue'

export default {
  name: 'wineries',
  data () {
    return {
      wineries: null
    }
  },
  props: ['name'],
  methods: {
    kebabToSentence (string) {
      string = string.replace(/-/g, ' ').toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase())
      })
      return string.join(' ')
    }
  },
  beforeRouteEnter (to, from, next) {
    Api.getMeta({}).then((response) => {
      response.data.url = to.fullPath
      store.dispatch('updateMeta', response.data)
      next()
    })
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
    Wrapper
  }
}
</script>
