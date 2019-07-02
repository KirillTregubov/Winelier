<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <h1>Consumers</h1>
    <h3>Click on a user's row for options related to the specific user.</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Newsletter Status</th>
          <th>Date Created</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tr @contextmenu.prevent="$refs.menu.open" :key="user.id" v-for="user in users" @click.prevent.stop="$refs.menu.open">
        <td>{{ user.first_name }} {{user.last_name}}</td>
        <td>{{ user.email }}</td>
        <td><div class="badge" :class="subscribedClass(user.is_subscribed)">{{ computeSubscribed(user.is_subscribed) }}</div></td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.modified_at }}</td>
      </tr>
    </table>
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
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
import Api from '@/services/Api.js'

export default {
  name: 'consumers',
  data () {
    return {
      isMenuOpen: false,
      users: [{
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        created_at: '10/10/2000',
        modified_at: '10/10/2020',
        is_subscribed: true
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        created_at: '10/10/2000',
        modified_at: '10/10/2020',
        is_subscribed: false
      },
      {
        first_name: 'First',
        last_name: 'Last',
        email: 'first@email.com',
        created_at: '10/10/2000',
        modified_at: '10/10/2020',
        is_subscribed: 'removed'
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
    },
    getUsers () {
      Api.getUsers().then((response) => {
        if (response.data.status === 'success') {
          this.users = response.data.content
        } else {
          console.log(response.data.content)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    // this.getUsers()
  }
}
</script>

<style lang="scss">
div.badge {
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
