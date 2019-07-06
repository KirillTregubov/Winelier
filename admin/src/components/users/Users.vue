<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <div class="top-bar heading">
      <h1>All Users</h1>
      <!-- <a class="button" @click="isCreateOverlayOpen = true" v-if="users.length !== 0"><Icon name="add-circle" />Create</a> -->
    </div>
    <Table>
    </Table>
  </section>
</template>

<script>
import Table from '@/components/elements/Table.vue'
// import Api from '@/services/Api.js'
// import Overlay from '@/components/elements/Overlay.vue'
// import Icon from '@/components/icons/Icon.vue'
// import VueSvg from '@/components/elements/VueSvg.vue'

export default {
  name: 'users',
  components: {
    Table
  }
}
</script>

<style lang="scss">
h3 {
  transition: opacity 0.5s;

  &.hidden {
    opacity: 0;
  }
}

div.error-container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--neutral600);
  }

  svg.error-image {
    padding: 1rem;
    width: 25rem;
  }
}

div.badge {
  margin: -0.25rem -0.5rem -0.2rem -0.5rem;

  &.correct {
    background-color: var(--green200);
    color: var(--green900);
  }

  &.pending {
    background-color: var(--yellow200);
    color: var(--yellow900);
  }
}
</style>
