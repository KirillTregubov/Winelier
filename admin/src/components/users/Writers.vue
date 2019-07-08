<template>
  <Table type="users" name="blog writer" namePlural="blog writers" :columns="options">
    <template v-slot:header>
      <h1>Blog Writers</h1>
    </template>
  </Table>
</template>

<script>
import Table from '@/components/elements/SingleTable.vue'

export default {
  name: 'writers',
  data () {
    return {
      options: [{ title: 'Name', type: 'fullName' }, { title: 'Email', data: 'email' }, { title: 'Articles Written', type: 'articles' }]
    }
  },
  components: {
    Table
  }
}
</script>

<style lang="scss">

</style>
