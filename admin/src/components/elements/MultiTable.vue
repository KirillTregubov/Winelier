<template>
  <section class="table-page" @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <div class="top-bar">
      <slot name="header"></slot>
      <transition name="fade-delayed">
        <a class="button" @click="isCreateOverlayOpen = true" v-if="data.length !== 0"><Icon name="add-circle" />Create</a>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="!isLoading && data.length === 0" class="error-container" key="1">
        <h2>There are no {{ namePlural }}. Please create one below to continue.</h2>
        <a class="button primary" @click="isCreateOverlayOpen = true"><Icon name="add-circle" />Create</a>
        <VueSvg class="error-image" />
      </div>
      <div v-else-if="isLoading" class="inline-loader" key="2">
        <div></div>
      </div>
      <div v-else class="table-container" key="3">
        <h3>Click on {{ adjustedA(name) }} {{ name }}'s row for options related to the specific {{ name }}.</h3>
        <table>
          <thead>
            <tr>
              <th v-for="(column, index) in allColumns" :key="'colhead-' + index">{{ column.title }}</th>
            </tr>
          </thead>
          <tr v-for="rowData in data" :key="rowData.id" @contextmenu.prevent="$refs.menu.open($event, rowData)" @click.prevent.stop="$refs.menu.open($event, rowData)">
            <td v-for="(column, index) in allColumns" :key="rowData.id + '-' + index">
              <template v-if="!column.hasOwnProperty('type')">
                {{ rowData[column.data] }}
              </template>
              <template v-else-if="column.type === 'fullName'">
                {{ rowData.first_name }} {{ rowData.last_name }}
              </template>
              <template v-else-if="column.type === 'expandedName'">
                <div>{{ rowData.first_name }} {{ rowData.last_name }}</div>
                <div class="secondary">{{ rowData.type }}</div>
              </template>
              <template v-else-if="column.type === 'verification'">
                <div class="badge" :class="rowData.is_verified === '1' ? 'correct' : 'pending'">{{ rowData.is_verified === '1' ? 'Verified' : 'Pending' }}</div>
              </template>
              <template v-else-if="column.type === 'newsletter'">
                <div class="badge" :class="subscribedClass(rowData.is_subscribed)">{{ computeSubscribed(rowData.is_subscribed) }}</div>
              </template>
              <template v-else-if="column.type === 'wineryManaged'">
                WINERY HERE
              </template>
              <template v-else-if="column.type === 'articles'">
                ARTICLE HERE
              </template>
              <template v-else-if="column.type === 'date'">
                {{ getCreatedDate(rowData[column.data]) }}
              </template>
              <template v-else-if="column.type === 'timePassed'">
                {{ rowData[column.data] === null ? 'Never' : getModifiedDate(rowData[column.data]) }}
              </template>
            </td>
          </tr>
        </table>
        <div class="pagination" v-if="dataAmount > 7">
          <paginate
            v-model="page"
            :page-count="Math.ceil(dataAmount / 7)"
            :page-range="3"
            :click-handler="changePage"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :class="dataAmount === 0 ? 'hidden' : ''" />
        </div>

        <!-- <pre>{{ data }}</pre> -->
        <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
          <template slot-scope="child">
            <li>
              <a href="#" @click.prevent="onClick($event.target.innerText)">View Details</a>
            </li>
            <li>
              <a href="#" @click.prevent="startEdit(child.data)">Edit</a>
            </li>
            <li>
              <a href="#" @click.prevent="startDelete(child.data)">Delete</a>
            </li>
          </template>
        </vue-context>
        <Overlay overlayType="edit" dataType="user" :oldData="selectedUser" :isOpen="isEditOverlayOpen" @close="isEditOverlayOpen = false; getRows(currentPage)" />
      </div>
    </transition>

    <Overlay dataType="user" :isOpen="isCreateOverlayOpen" :userType="type === 'users' && name !== 'user' ? toTitleCase(name) : null" @close="isCreateOverlayOpen = false" @success="changePage($event, true)" />
  </section>
</template>

<script>
import Api from '@/services/Api.js'
import moment from 'moment'
import Overlay from '@/components/elements/Overlay.vue'
import Icon from '@/components/icons/Icon.vue'
import VueSvg from '@/components/elements/VueSvg.vue'

export default {
  name: 'multi-table',
  data () {
    return {
      isLoading: true,
      isMenuOpen: false,
      isCreateOverlayOpen: false,
      isEditOverlayOpen: false,
      page: 1,
      data: [],
      dataAmount: 0,
      paginate: ['data'],
      serverErrors: '',
      selectedUser: null
    }
  },
  computed: {
    currentPage () {
      return 7 * (this.page - 1)
    },
    allColumns () {
      return this.columns.concat([{ title: 'Created', type: 'date', data: 'created_at' }, { title: 'Modified', type: 'timePassed', data: 'modified_at' }])
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
    namePlural: {
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
    getCreatedDate (date) {
      return moment.utc(date).local().format('LL')
    },
    getModifiedDate (date) {
      return moment.utc(date).local().fromNow()
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
    changePage (data, created) {
      this.isLoading = true
      if (created) this.page = Math.ceil((Number(this.dataAmount) + 1) / 7)
      this.getRows(this.currentPage)
    },
    startEdit (data) {
      Api.startEdit({ table: this.type, id: data.id }).then((response) => {
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
    startDelete (data) {
      Api.startDelete({ table: this.type, id: data.id }).then((response) => {
        if (response.data.status === 'success') {
          this.isLoading = true
          if (this.data.length === 1 && this.page !== 1) this.page -= 1
          this.getRows(this.currentPage)
          alert('Delete success')
        } else if (response.data.status === 'editing') {
          alert('User is being edited, can\'t delete')
        } else {
          console.log(response)
        }
      })
    },
    getRows (index) {
      this.updateRowAmount()
      let obj = {
        table: this.type,
        index: index,
        amount: 7
      }
      if (this.type === 'users' && this.name !== 'user') obj.filter = "type = '" + this.name + "'"
      Api.getRows(obj).then((response) => {
        if (response.data.status === 'success') {
          this.data = JSON.parse(response.data.content)
          this.isLoading = false
        } else {
          console.log(response)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    updateRowAmount () {
      let obj = {
        table: this.type
      }
      if (this.type === 'users' && this.name !== 'user') obj.filter = "type = '" + this.name + "'"

      Api.getRowAmount(obj).then((response) => {
        if (response.data.status === 'success') {
          this.dataAmount = response.data.content
        } else {
          console.log(response)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    toTitleCase (phrase) {
      return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    adjustedA (name) {
      if (name.charAt(0) === 'a') return 'an'
      else return 'a'
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

<style lang="scss">
section.table-page {
  div.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--neutral600);
    }

    svg.error-image {
      padding: 1rem;
      width: 25rem;
    }
  }

  div.badge {
    margin: -0.25rem -0.5rem -0.2rem 0rem;

    &.correct {
      background-color: var(--green200);
      color: var(--green900);
    }

    &.pending {
      background-color: var(--yellow200);
      color: var(--yellow900);
    }
  }
}
</style>
