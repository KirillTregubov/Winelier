<template>
  <Table type="users" name="consumer" namePlural="consumers" :columns="options">
    <template v-slot:header>
      <h1>Consumers</h1>
    </template>
  </Table>
</template>

<script>
import Table from '@/components/elements/SingleTable.vue'

export default {
  name: 'consumers',
  data () {
    return {
      options: [{ title: 'Name', type: 'fullName' }, { title: 'Email', data: 'email' }, { title: 'Newsletter', type: 'newsletter' }]
    }
  },
  components: {
    Table
  }
}
</script>
