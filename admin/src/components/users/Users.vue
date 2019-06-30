<template>
  <section>
    <h1>All Users</h1>
    <h3>Click on a user's row for options related to the specific user.</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date Created</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tr :key="user.id" v-for="user in users" @contextmenu.prevent="$refs.menu.open" @click.prevent.stop="$refs.menu.open">
        <td>
          <div>{{ user.first_name }} {{user.last_name}}</div>
          <div class="secondary">{{ user.type }}</div>
        </td>
        <td>{{ user.email }}</td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.modified_at }}</td>
      </tr>
    </table>
    <vue-context ref="menu" :close-on-click="true">
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">View Details</a>
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
// import Api from '@/services/Api.js'

export default {
  name: 'consumers',
  data () {
    return {
      users: [{
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        type: 'Consumer',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        type: 'Winery Manager',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        type: 'Blog Writer',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        type: 'Admin',
        created_at: '10/10/2000',
        modified_at: '10/10/2020'
      }],
      serverErrors: ''
    }
  },
  methods: {
    onClick (text) {
      alert(`You clicked ${text}!`)
    },
    subscribedClass (isSubscribed) {
      if (!isSubscribed) return 'not-subscribed'
      else if (isSubscribed === 'removed') return 'unsubscribed'
      else return 'subscribed'
    },
    computeSubscribed (isSubscribed) {
      if (!isSubscribed) return 'Not Subscribed'
      else if (isSubscribed === 'removed') return 'Unsubscribed'
      else return 'Subscribed'
    }
  }
}
</script>

<style lang="scss">
div.badge {
  margin: -0.25rem -0.5rem -0.2rem -0.5rem;

  &.subscribed {
    background-color: var(--green200);
    color: var(--green900);
  }

  &.unsubscribed {
    background-color: var(--yellow200);
    color: var(--yellow900);
  }
}
</style>
