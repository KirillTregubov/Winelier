<template>
  <NotFound v-if="!doesExist" :path="name"/>
  <!-- Could make a specific not found for wineries and blog posts so that they can return to discovery -->
  <Wrapper contentID="blog-article" v-else>
    <h1>{{ winery.name }}</h1>
  </Wrapper>
</template>

<script>
import Api from '@/services/Api.js'
import Wrapper from '@/components/global/Wrapper.vue'
import NotFound from '@/views/NotFound.vue'

export default {
  name: 'blog-article',
  data () {
    return {
      doesExist: false,
      winery: null
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
  created () {
    Api.getRow({ table: 'wineries', name: this.kebabToSentence(this.$route.params.name) }).then((response) => {
      if (response.data.status === 'success') {
        this.winery = JSON.parse(response.data.content)
        this.doesExist = true
      } else {
        console.log('error')
      }
      this.$emit('load')
    })
  },
  components: {
    Wrapper,
    NotFound
  }
}
</script>
