<template>
  <Simple id="winery-page">
    content
  </Simple>
</template>

<script>
import Simple from '@/views/Simple.vue'
import Api from '@/services/Api.js'

export default {
  name: 'winery-page',
  components: {
    Simple
  },
  beforeRouteEnter (to, from, next) {
    Api.getMeta({}).then((response) => {
      console.log(response.data)
      document.title = response.data.title

      Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
      let metaTags = JSON.parse(response.data.tags)
      metaTags.map(tagDef => {
        const tag = document.createElement('meta')
        Object.keys(tagDef).forEach(key => {
          tag.setAttribute(key, tagDef[key])
        })
        tag.setAttribute('data-vue-router-controlled', '')
        return tag
      }).forEach(tag => document.head.appendChild(tag))

      next()
      // // Find the closest route with a title
      // const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
      // // Find the nearest route element with meta tags.
      // const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
      // // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
      // // If a route with a title was found, set the document (page) title to that value.
      // if (nearestWithTitle) document.title = nearestWithTitle.meta.title
      // // Remove any stale meta tags from the document using the key attribute we set below.
      // Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
      // Skip rendering meta tags if there are none.
      // if (!nearestWithMeta) return next()
      // nearestWithMeta.meta.metaTags.map(tagDef => {
      //   const tag = document.createElement('meta')
      //   Object.keys(tagDef).forEach(key => {
      //     tag.setAttribute(key, tagDef[key])
      //   })
      //   tag.setAttribute('data-vue-router-controlled', '')
      //   return tag
      // }).forEach(tag => document.head.appendChild(tag))

      // next()
    })
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  mounted () {
    setTimeout(() => {
      this.$emit('load')
    }, 100)
  }
}
</script>
