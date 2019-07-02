<template>
  <section @scroll="isMenuOpen ? $refs.menu.close() : ''">
    <h1>Featured</h1>
    <div class="container">
      <h2>Article</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Synopsis</th>
            <th>Author</th>
            <th>Date Created</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tr @contextmenu.prevent="$refs.menu.open($event, featuredArticle)" @click.prevent.stop="$refs.menu.open($event, featuredArticle)">
          <td class="condensed">{{ featuredArticle.title }}</td>
          <td class="condensed">{{ featuredArticle.synopsis }}</td>
          <td>{{ featuredArticle.author }}</td>
          <td>{{ featuredArticle.created_at }}</td>
          <td>{{ featuredArticle.modified_at }}</td>
        </tr>
      </table>
    </div>
    <div class="container">
      <div class="top-bar">
        <h2>Monthly Wineries</h2>
        <a class="button"><Icon name="add" />Add</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manager</th>
            <th>Tier</th>
            <th>Province</th>
            <th>Date Created</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tr  :key="winery.id" v-for="winery in monthlyWineries" @contextmenu.prevent="$refs.menu.open($event, winery)" @click.prevent.stop="$refs.menu.open($event, winery)">
          <td>{{ winery.name }}</td>
          <td><div class="badge" :class="[ winery.manager != null ? 'exists' : '']">{{ winery.manager != null ? winery.manager : 'None' }}</div></td>
          <td>{{ winery.tier }}</td>
          <td>{{ winery.address.province }}</td>
          <td>{{ winery.created_at }}</td>
          <td>{{ winery.modified_at }}</td>
        </tr>
      </table>
    </div>
    <div class="container">
      <div class="top-bar">
        <h2>Popular Wineries</h2>
        <a class="button"><Icon name="add" />Add</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manager</th>
            <th>Tier</th>
            <th>Province</th>
            <th>Date Created</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tr  :key="winery.id" v-for="winery in popularWineries" @contextmenu.prevent="$refs.menu.open($event, winery)" @click.prevent.stop="$refs.menu.open($event, winery)">
          <td>{{ winery.name }}</td>
          <td><div class="badge" :class="[ winery.manager != null ? 'exists' : '']">{{ winery.manager != null ? winery.manager : 'None' }}</div></td>
          <td>{{ winery.tier }}</td>
          <td>{{ winery.address.province }}</td>
          <td>{{ winery.created_at }}</td>
          <td>{{ winery.modified_at }}</td>
        </tr>
      </table>
    </div>
    <vue-context ref="menu" :close-on-click="true" @open="isMenuOpen = true" @close="isMenuOpen = false">
      <template slot-scope="child">
        <li>
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">View on site</a>
        </li>
        <li v-if="child.data && child.data.author">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">Edit Article</a>
        </li>
        <li v-else-if="child.data && (child.data.manager || child.data.manager == null)">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">Edit Winery</a>
        </li>
        <li v-if="child.data && child.data.author">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">View Writer</a>
        </li>
        <li v-else-if="child.data && (child.data.manager || child.data.manager == null)">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">{{ child.data && !child.data.manager ? 'Add' : 'View' }} Manager</a>
        </li>
        <li v-if="child.data && child.data.author">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">Replace</a>
        </li>
        <li v-else-if="child.data && (child.data.manager || child.data.manager == null)">
          <a href="#" @click.prevent="onClick($event.target.innerText, child.data)">Remove</a>
        </li>
        <li>
        </li>
      </template>
    </vue-context>
  </section>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'

export default {
  data () {
    return {
      isMenuOpen: false,
      monthlyWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          manager: null,
          tier: 'VIP',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          manager: 'John Detail',
          tier: 'VIP',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          manager: 'Alexander',
          tier: 'VIP',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          manager: null,
          tier: 'VIP',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        }
      ],
      popularWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          manager: null,
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          manager: 'James Smith',
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          manager: null,
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          manager: 'Erica Chow',
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Manitoba' },
          manager: 'Billy Ray',
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          manager: null,
          tier: 'Premium',
          created_at: 'Jun 21, 2019',
          modified_at: 'Jul 4, 2019'
        }
      ],
      featuredArticle: {
        title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
        synopsis:
          "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
        author: 'Billy Jones',
        created_at: 'Jun 21, 2019',
        modified_at: 'Jul 4, 2019'
      }
    }
  },
  methods: {
    onClick (text, data) {
      alert(`You clicked ${text}!`)
      console.log(data)
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
div.container:not(:last-child) {
  margin-bottom: 2rem;
}

div.badge {
  &.exists {
    background-color: var(--green200);
    color: var(--green900);
  }
}
</style>
