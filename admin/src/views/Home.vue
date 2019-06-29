<template>
  <body id="home">
    <nav class="sidebar">
      <ul>
        <li><router-link :to="{ name: 'dashboard' }" exact replace>
          <Icon name="dashboard" />
          Dashboard
        </router-link></li>
        <li class="title">Main</li>
        <li :class="{ 'dropdown-active': dropdown.users }">
          <div class="link">
            <router-link :to="{ name: 'users' }" replace>
              <Icon name="user-group" />
              Users
            </router-link>
            <div class="dropdown-button" @click="dropdown.users = !dropdown.users">
              <Icon :name="dropdown.users ? 'chevron-up' : 'chevron-down' "/>
            </div>
          </div>
          <ul :class="{ active: dropdown.users }">
            <li><router-link :to="{ name: 'consumers' }" replace>Consumers</router-link></li>
            <li><router-link :to="{ name: 'managers' }" replace>Winery Managers</router-link></li>
            <li><router-link :to="{ name: 'writers' }" replace>Blog Writers</router-link></li>
            <li><router-link :to="{ name: 'admins' }" replace>Admins</router-link></li>
          </ul>
        </li>
        <li><router-link :to="{ name: 'featured' }" exact replace>
          <Icon name="star" />
          Featured
        </router-link></li>
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
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'home',
  data () {
    return {
      dropdown: { users: false }
    }
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
    padding: 2rem;

    li {
      font-size: var(--font-base);
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      width: 11rem;

      &.title {
        margin-top: 1.25rem;
        margin-bottom: 0.25rem;
        color: var(--neutral300);
        font-size: var(--font-sm);
        font-weight: var(--font-semibold);
        letter-spacing: 0.05rem;
        text-transform: uppercase;
      }

      &.dropdown-active {
        background-color: var(--neutral700);
        border-radius: var(--radius-subtle);
      }

      > div.link {
        display: flex;
        align-items: center;
      }

      a {
        display: flex;
        align-items: center;

        &:hover {
          color: var(--primary300) !important;

          svg {
            .primary {
              fill: var(--primary300);
            }

            .secondary {
              fill: var(--primary050);
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

      .dropdown-button {
        margin-left: auto;

        svg {
          width: 1.25rem;

          .primary {
            fill: var(--neutral400);
          }

          .secondary {
            fill: var(--neutral050);
          }
        }

        &:hover {
          svg {
            .secondary {
              fill: var(--primary300);
            }
          }
        }
      }

      ul {
        padding: 1rem 0 0 0.75rem;
        display: none;

        &.active {
          display: block;
        }

        a {
          width: auto;
        }
      }
    }
  }
}

section {
  display: inline-block;
  flex: 1;
  margin: 2rem;
}
</style>
