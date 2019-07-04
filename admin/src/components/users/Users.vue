<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <div class="top-bar heading">
      <h1>All Users</h1>
      <a class="button" @click="isCreateOverlayOpen = true"><Icon name="add-circle" />Create</a>
    </div>
    <h3>Click on a user's row for options related to the specific user.</h3>
    <paginate ref="paginator" name="users" :list="users" :per="7" tag="div">
      <div class="inline-loader" v-show="isLoading">
        <div></div>
      </div>
      <table v-show="!isLoading">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tr :key="user.id" v-for="user in paginated('users')" @contextmenu.prevent="$refs.menu.open($event, user)" @click.prevent.stop="$refs.menu.open($event, user)">
          <td>
            <div>{{ user.first_name }} {{user.last_name}}</div>
            <div class="secondary">{{ user.type }}</div>
          </td>
          <td>{{ user.email }}</td>
          <td><div class="badge" :class="user.is_verified === '1' ? 'correct' : 'pending'">{{ user.is_verified === '1' ? 'Verified' : 'Verifying' }}</div></td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.modified_at === null ? 'Never' : user.modified_at }}</td>
        </tr>
      </table>
    </paginate>

    <paginate-links for="users" :simple="{ prev: 'Back', next: 'Next' }" @change="changePage"></paginate-links>
    <span v-if="$refs.paginator">
  Viewing {{$refs.paginator.pageItem}} results
</span>
    <pre>{{ users }}</pre>
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
      <template slot-scope="child">
        <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">View Details</a>
        </li>
        <li>
          <a href="#" @click.prevent="isEditOverlayOpen = true; selectedUser = child.data">Edit</a>
        </li>
        <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">Delete</a>
        </li>
      </template>
    </vue-context>

    <Overlay dataType="user" :isOpen="isCreateOverlayOpen" @close="isCreateOverlayOpen = false; getUsers()" />
    <Overlay overlayType="edit" dataType="user" :oldData="selectedUser" :isOpen="isEditOverlayOpen" @close="isEditOverlayOpen = false; getUsers()" />
  </section>
</template>

<script>
import Api from '@/services/Api.js'
import Overlay from '@/components/elements/Overlay.vue'
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'users',
  data () {
    return {
      isLoading: true,
      isMenuOpen: false,
      isCreateOverlayOpen: false,
      isEditOverlayOpen: false,
      users: [],
      paginate: ['users'],
      serverErrors: '',
      selectedUser: null
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
    changePage (toPage, fromPage) {
      if (toPage > fromPage && this.users.length < 8 * toPage - 2) {
        this.isLoading = true
        this.getUsers(8 * (toPage - 1), 8 * toPage - 1)
      }
    },
    getUsers (start, end) {
      Api.getUsers({ start_limit: start, end_limit: end }).then((response) => {
        if (response.data.status === 'success') {
          this.users = this.users.concat(JSON.parse(response.data.content))
          this.isLoading = false
        } else {
          console.log(response)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    this.getUsers(0, 8)
  },
  components: {
    Overlay,
    Icon
  }
}
</script>

<style lang="scss">
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
