<template>
  <Table type="users" name="user" :columns="options">
    <template v-slot:header>
      <h1>All Users</h1>
    </template>
  </Table>
</template>

<script>
import Table from '@/components/elements/Table.vue'

export default {
  name: 'users',
  data () {
    return {
      options: [{title: 'Name', type: 'compact'}, {title: 'Email', data:'email'}, {title: 'Status', type: 'badge'}]
    }
  },
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
