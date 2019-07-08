<template>
  <Table type="users" name="winery manager" namePlural="winery managers" :columns="options">
    <template v-slot:header>
      <h1>Winery Managers</h1>
    </template>
  </Table>
  <!-- <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <h1>Winery Managers</h1>
    <h3>Click on a user's row for options related to the specific user.</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Winery Managed</th>
          <th>Date Created</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tr @contextmenu.prevent="$refs.menu.open" :key="user.id" v-for="user in users" @click.prevent.stop="$refs.menu.open">
        <td>{{ user.first_name }} {{user.last_name}}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.winery_managed }}</td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.modified_at }}</td>
      </tr>
    </table>
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">View Winery</a>
      </li>
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">Edit</a>
      </li>
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">Delete</a>
      </li>
    </vue-context>
  </section> -->
</template>

<script>
import Table from '@/components/elements/SingleTable.vue'

export default {
  name: 'managers',
  data () {
    return {
      options: [{ title: 'Name', type: 'fullName' }, { title: 'Email', data: 'email' }, { title: 'Managing', type: 'wineryManaged' }]
    }
  },
  components: {
    Table
  }
}
</script>
