<template>
  <section>
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
    <vue-context ref="menu" :close-on-click="true">
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
  </section>
</template>

<script>
export default {
  name: 'managers',
  data () {
    return {
      users: [{
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        winery_managed: 'Lacey Estates',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        winery_managed: 'Averill Creek Vineyard',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        winery_managed: 'Domaine Desduc',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      }],
      serverErrors: ''
    }
  },
  methods: {
    onClick (text) {
      alert(`You clicked ${text}!`)
    }
  }
}
</script>

<style lang="scss">

</style>
