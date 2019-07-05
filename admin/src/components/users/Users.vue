<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <div class="top-bar heading">
      <h1>All Users</h1>
      <a class="button" @click="isCreateOverlayOpen = true"><Icon name="add-circle" />Create</a>
    </div>
    <div class="pagination">
      <paginate
        v-model="page"
        :page-count="Math.ceil(userAmount / 7)"
        :page-range="3"
        :click-handler="changePage"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :class="userAmount === 0 ? 'hidden' : ''" />
    </div>
    <h3>Click on a user's row for options related to the specific user.</h3>
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
      <tr :key="user.id" v-for="user in users" @contextmenu.prevent="$refs.menu.open($event, user)" @click.prevent.stop="$refs.menu.open($event, user)">
        <td>
          <div>{{ user.first_name }} {{user.last_name}}</div>
          <div class="secondary">{{ user.type }}</div>
        </td>
        <td>{{ user.email }}</td>
        <td><div class="badge" :class="user.is_verified === '1' ? 'correct' : 'pending'">{{ user.is_verified === '1' ? 'Verified' : 'Pending' }}</div></td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.modified_at === null ? 'Never' : user.modified_at }}</td>
      </tr>
    </table>

    <!-- <pre>{{ users }}</pre> -->
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
      <template slot-scope="child">
        <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">View Details</a>
        </li>
        <li>
          <a href="#" @click.prevent="edit(child)">Edit</a>
        </li>
        <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">Delete</a>
        </li>
      </template>
    </vue-context>
    <Overlay dataType="user" :isOpen="isCreateOverlayOpen" @close="isCreateOverlayOpen = false; getUsers(currentPage)" />
    <Overlay overlayType="edit" dataType="user" :oldData="selectedUser" :isOpen="isEditOverlayOpen" @close="isEditOverlayOpen = false; getUsers(currentPage)" />
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
      page: 1,
      users: [],
      userAmount: 0,
      paginate: ['users'],
      serverErrors: '',
      selectedUser: null
    }
  },
  computed: {
    currentPage () {
      return 7 * (this.page - 1)
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
    changePage () {
      this.isLoading = true
      this.getUsers(this.currentPage)
    },
    edit (child) {
      Api.startEdit({ table: 'users', id: child.data.id }).then((response) => {
        if (response.data.status === 'success') {
          this.selectedUser = JSON.parse(response.data.content)
          this.isEditOverlayOpen = true
        } else if (response.data.status === 'editing') {
          alert('User is being edited')
        } else {
          console.log(response)
        }
      })
    },
    getUsers (index) {
      Api.getUsers({ index: index, amount: 7 }).then((response) => {
        if (response.data.status === 'success') {
          this.users = JSON.parse(response.data.content)
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
    Api.getUserAmount().then((response) => {
      this.userAmount = response.data.content
    }).catch((error) => {
      console.log(error)
    })
    this.getUsers(0)
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
