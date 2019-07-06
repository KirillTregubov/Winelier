<template>
  <section class="table-page" @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <div class="top-bar">
      <slot name="header"></slot>
      <a class="button" @click="isCreateOverlayOpen = true" v-if="users.length !== 0"><Icon name="add-circle" />Create</a>
    </div>
    <transition name="fade" mode="out-in">
    <div v-if="!isLoading && users.length === 0" class="error-container" key="1">
      <h2>There are no {{ users }}. Please create one below to continue.</h2>
      <a class="button primary" @click="isCreateOverlayOpen = true"><Icon name="add-circle" />Create</a>
      <VueSvg class="error-image" />
    </div>
    <div v-else-if="isLoading" class="inline-loader" key="2">
      <div></div>
    </div>
    <div v-else class="table-container" key="3">
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
      <h3>Click on a {{ name }}'s row for options related to the specific {{ name }}.</h3>
      <table>
        <thead>
          <tr>
            <th v-for="(column, index) in allColumns" :key="'colhead-' + index">{{ column.title }}</th>
          </tr>
        </thead>
        <tr v-for="(rowData, index) in users" :key="'data-' + index" @contextmenu.prevent="$refs.menu.open($event, user)" @click.prevent.stop="$refs.menu.open($event, user)">
          <td v-for="(column, columnIndex) in allColumns" :key="'colcont-' + columnIndex">
            <template v-if="!column.hasOwnProperty('type')">
              {{ rowData[column.data] }}
            </template>
            <template v-else-if="column.type === 'compact'">
              <div>{{ rowData.first_name }} {{ rowData.last_name }}</div>
              <div class="secondary">{{ rowData.type }}</div>
            </template>
          </td>
          <!-- <td>{{ user.email }}</td>
          <td><div class="badge" :class="user.is_verified === '1' ? 'correct' : 'pending'">{{ user.is_verified === '1' ? 'Verified' : 'Pending' }}</div></td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.modified_at === null ? 'Never' : user.modified_at }}</td> -->
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
      <Overlay overlayType="edit" dataType="user" :oldData="selectedUser" :isOpen="isEditOverlayOpen" @close="isEditOverlayOpen = false; getRows(currentPage)" />
    </div>
    </transition>

    <Overlay dataType="user" :isOpen="isCreateOverlayOpen" @close="isCreateOverlayOpen = false; getRows(currentPage)" />
  </section>
</template>

<script>
import Api from '@/services/Api.js'
import Overlay from '@/components/elements/Overlay.vue'
import Icon from '@/components/icons/Icon.vue'
import VueSvg from '@/components/elements/VueSvg.vue'

export default {
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
    },
    allColumns () {
      return this.columns.concat([{ title: 'Created', type: 'date' }, { title: 'Modified', type: 'date'} ])
    },
    data () {
      return this.users
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    columns: {
      type: Array,
      required: true
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
      this.getRows(this.currentPage)
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
    getRows (index) {
      this.updateRowAmount()
      Api.getRows({ table: 'users', index: index, amount: 7 }).then((response) => {
        if (response.data.status === 'success') {
          this.users = JSON.parse(response.data.content)
          this.isLoading = false
        } else {
          console.log(response)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    updateRowAmount () {
      Api.getRowAmount({ table: 'users' }).then((response) => {
        this.userAmount = response.data.content
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    this.getRows(0)
  },
  components: {
    Overlay,
    Icon,
    VueSvg
  }
}
</script>

<style>

</style>
