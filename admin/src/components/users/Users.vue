<template>
  <Table type="users" name="user" namePlural="users" :columns="options">
    <template v-slot:header>
      <h1>All Users</h1>
    </template>
  </Table>
</template>

<script>
import Table from '@/components/elements/SingleTable.vue'

export default {
  name: 'users',
  data () {
    return {
      options: [{ title: 'Name', type: 'expandedName' }, { title: 'Email', data: 'email' }, { title: 'Status', type: 'verification' }]
    }
  },
  components: {
    Table
  }
}
</script>
