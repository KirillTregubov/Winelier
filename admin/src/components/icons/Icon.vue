<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" :class="name" width="1rem">
    <Add v-if="name === 'add'" />
    <AddCircle v-else-if="name === 'add-circle'" />
    <ArrowThickUp v-else-if="name === 'arrow-thick-up'" />
    <BookOpen v-else-if="name === 'book-open'" />
    <CalendarDate v-else-if="name === 'calendar-date'" />
    <ChevronDown v-else-if="name === 'chevron-down'" />
    <ChevronRight v-else-if="name === 'chevron-right'" />
    <Dashboard v-else-if="name === 'dashboard'" />
    <Important v-else-if="name === 'important'" />
    <LocationPin v-else-if="name === 'location-pin'" />
    <Search v-else-if="name === 'search'" />
    <ShoppingBag v-else-if="name === 'shopping-bag'" />
    <Star v-else-if="name === 'star'" />
    <UserCircle v-else-if="name === 'user-circle'" />
    <UserGroup v-else-if="name === 'user-group'" />
  </svg>
</template>

<script>
import Add from '@/components/icons/add.vue'
import AddCircle from '@/components/icons/add-circle.vue'
import ArrowThickUp from '@/components/icons/arrow-thick-up.vue'
import BookOpen from '@/components/icons/book-open.vue'
import CalendarDate from '@/components/icons/calendar-date.vue'
import ChevronDown from '@/components/icons/chevron-down.vue'
import ChevronRight from '@/components/icons/chevron-right.vue'
import Dashboard from '@/components/icons/dashboard.vue'
import Important from '@/components/icons/important.vue'
import LocationPin from '@/components/icons/location-pin.vue'
import Search from '@/components/icons/search.vue'
import ShoppingBag from '@/components/icons/shopping-bag.vue'
import Star from '@/components/icons/star.vue'
import UserCircle from '@/components/icons/user-circle.vue'
import UserGroup from '@/components/icons/user-group.vue'

export default {
  name: 'vue-svg',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    Add,
    AddCircle,
    ArrowThickUp,
    BookOpen,
    CalendarDate,
    ChevronDown,
    ChevronRight,
    Dashboard,
    Important,
    LocationPin,
    Search,
    ShoppingBag,
    Star,
    UserCircle,
    UserGroup
  }
}
</script>

<style lang="scss">
svg {
  .primary {
    fill: var(--white);
  }

  .secondary {
    fill: var(--black);
  }
}
</style>
