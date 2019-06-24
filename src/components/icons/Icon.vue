<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" :class="name" width="1rem">
    <Add v-if="name === 'add'" />
    <AddCircle v-else-if="name === 'add-circle'" />
    <BookOpen v-else-if="name === 'book-open'" />
    <CalendarDate v-else-if="name === 'calendar-date'" />
    <ChevronDown v-else-if="name === 'chevron-down'" />
    <Important v-else-if="name === 'important'" />
    <LocationPin v-else-if="name === 'location-pin'" />
    <Search v-else-if="name === 'search'" />
    <Star v-else-if="name === 'star'" />
    <UserCircle v-else-if="name === 'user-circle'" />
  </svg>
</template>

<script>
import Add from '@/components/icons/add.vue'
import AddCircle from '@/components/icons/add-circle.vue'
import BookOpen from '@/components/icons/book-open.vue'
import CalendarDate from '@/components/icons/calendar-date.vue'
import ChevronDown from '@/components/icons/chevron-down.vue'
import Important from '@/components/icons/important.vue'
import LocationPin from '@/components/icons/location-pin.vue'
import Search from '@/components/icons/search.vue'
import Star from '@/components/icons/star.vue'
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
    Add,
    AddCircle,
    BookOpen,
    CalendarDate,
    ChevronDown,
    Important,
    LocationPin,
    Search,
    Star,
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
