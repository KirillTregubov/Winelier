<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" :class="name" width="1rem">
    <ChevronDown v-if="name === 'chevron-down'" />
    <LocationPin v-if="name === 'location-pin'" />
    <Search v-else-if="name === 'search'" />
    <UserCircle v-else-if="name === 'user-circle'" />
  </svg>
</template>

<script>
import ChevronDown from '@/components/icons/chevron-down.vue'
import LocationPin from '@/components/icons/location-pin.vue'
import Search from '@/components/icons/search.vue'
import UserCircle from '@/components/icons/user-circle.vue'

export default {
  name: 'vue-svg',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    ChevronDown,
    LocationPin,
    Search,
    UserCircle
  }
}
</script>

<style lang="scss">
.primary {
  fill: var(--white);
}

.secondary {
  fill: var(--black);
}
</style>
