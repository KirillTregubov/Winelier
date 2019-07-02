<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <h1>Blog Writers</h1>
    <h3>Click on a user's row for options related to the specific user.</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Articles Written</th>
          <th>Date Created</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tr @contextmenu.prevent="$refs.menu.open" :key="user.id" v-for="user in users" @click.prevent.stop="$refs.menu.open">
        <td>{{ user.first_name }} {{user.last_name}}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.articles_written }}</td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.modified_at }}</td>
      </tr>
    </table>
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">View Articles</a>
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
      isMenuOpen: false,
      users: [{
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        articles_written: 4,
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        articles_written: 2,
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        articles_written: 7,
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
