<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" :class="name" width="1rem">
    <!-- <ArrowThickUp v-if="name === 'arrow-thick-up'" />
    <Collection v-else-if="name === 'collection'" />
    <DocumentNotes v-else-if="name === 'document-notes'" /> -->
    <ChevronDown v-if="name === 'chevron-down'" />
    <UserCircle v-else-if="name === 'user-circle'" />
  </svg>
</template>

<script>
import ChevronDown from '@/components/icons/chevron-down.vue'
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