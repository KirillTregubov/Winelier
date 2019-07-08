<template>
  <Table type="users" name="admin" namePlural="admins" :columns="options">
    <template v-slot:header>
      <h1>Admins</h1>
    </template>
  </Table>
</template>

<script>
import Table from '@/components/elements/SingleTable.vue'

export default {
  name: 'managers',
  data () {
    return {
      options: [{ title: 'Name', type: 'fullName' }, { title: 'Email', data: 'email' }]
    }
  },
  components: {
    Table
  }
}
</script>

<style lang="scss">

</style>
