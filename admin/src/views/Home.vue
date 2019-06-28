<template>
  <body id="home">
    <nav class="sidebar">
      <ul>
        <li><router-link to="/dashboard/" exact>
          <Icon name="dashboard" />
          Dashboard
        </router-link></li>
        <li class="title">Main</li>
        <li><router-link to="/dashboard/users">
          <Icon name="user-group" />
          Users
        </router-link></li>
        <li><a>
          <Icon name="star" />
          Featured
        </a></li>
        <li class="title">Content</li>
        <li><a>
          <Icon name="location-pin" />
          Wineries
        </a></li>
        <li><a>
          <Icon name="calendar-date" />
          Events
        </a></li>
        <li><a>
          <Icon name="book-open" />
          Blog
        </a></li>
        <li class="title">Store</li>
        <li><a>
          <Icon name="shopping-bag" />
          Shop (WIP)
        </a></li>
      </ul>
    </nav>
    <router-view />
  </body>
</template>

<script>
import Api from '@/services/Api.js'
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'home',
  data () {
    return {
      users: '',
      serverErrors: ''
    }
  },
  methods: {
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
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  height: 100vh;
}

nav.sidebar {
  background-color: var(--neutral800);
  color: var(--neutral050);
  user-select: none;

  ul {
    padding: 3rem 3rem 2rem 2rem;

    li {
      font-size: var(--font-base);
      padding-bottom: 1rem;

      &.title {
        padding-top: 1.75rem;
        padding-bottom: 1.25rem;
        color: var(--neutral300);
        font-size: var(--font-sm);
        font-weight: var(--font-semibold);
        letter-spacing: 0.05rem;
        text-transform: uppercase;
      }

      a {
        display: flex;
        align-items: center;

        &:hover {
          color: var(--primary300) !important;

          svg {
            .primary {
              fill: var(--primary300) !important;
            }

            .secondary {
              fill: var(--primary050) !important;
            }
          }
        }

        &.router-link-active {
          color: var(--primary200);

          svg {
            .primary {
              fill: var(--primary300);
            }

            .secondary {
              fill: var(--primary050);
            }
          }
        }

        svg {
          width: 1.25rem;
          margin-right: 0.5rem;

          .primary {
            fill: var(--neutral400);
          }

          .secondary {
            fill: var(--neutral050);
          }
        }
      }
    }
  }
}

section {
  display: inline-block;
  flex: 1;
}
</style>
