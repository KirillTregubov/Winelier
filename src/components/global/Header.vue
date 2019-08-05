<template>
  <header id="header">
    <nav>
      <ul>
        <li class="left mobile"><router-link to="/"><img class="logo" src="@/assets/img/logo.png" alt="Winelier Logo"></router-link></li>
        <li class="toggle mobile" @click="isMobileExpanded = !isMobileExpanded"><Icon :name="toggleName" /></li>
        <transition name="slide-down">
          <ul v-show="isMobileExpanded">
            <li><a href="">Wineries</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
            <!-- <li><a href="">Shop <Icon name="chevron-down" /></a></li> -->
            <li class="login"><a href=""><Icon name="user-circle" class="left" />Log In</a></li>
            <li class="button"><a class="button" href="">Add Listing</a></li>
          </ul>
        </transition>
      </ul>
    </nav>
  </header>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'main-header',
  data () {
    return {
      isMobileExpanded: false
    }
  },
  computed: {
    toggleName () {
      return this.isMobileExpanded ? 'close' : 'menu'
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
#header {
  font-weight: var(--font-bold) !important;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--neutral100);
  font-size: var(--font-base);

  nav {
    padding: 1rem 1rem;

    @include tablet-portrait-only {
      padding-bottom: 0.5rem;

      @include tiny-height-only {
        padding-top: 0.5rem;
      }
    }

    @include tablet-landscape-up {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    ul:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      @include tablet-portrait-only {
        flex-wrap: wrap;
      }

      li {
        margin-left: 1rem;

        &.left {
          margin: 0 auto 0 0;
        }

        svg {
          width: 1.5rem;
        }

        @include tablet-portrait-only {
          @include tiny-height-only {
            &.mobile {
              display: none;
            }
          }
        }

        @include tablet-portrait-up {
          &.toggle {
            display: none;
          }
        }

        @include tablet-portrait-only {
          &.left {
            margin: 0 !important;
          }
        }

        @include tablet-landscape-up {
          margin-left: 3rem;

          &.login {
            margin-left: 5rem;
          }

          &.button {
            margin-left: 2rem;
          }
        }
      }

      ul {
        position: absolute;
        top: 0;
        width: 100%;
        margin-top: 5rem;
        padding-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--neutral100);

        @include tablet-portrait-only {
          @include tiny-height-only {
            padding-top: 0 !important;
          }
        }

        @include tablet-portrait-up {
          position: initial;
          flex: none;
          display: flex !important;
          margin: 0;
          padding: 0;
          flex-direction: row;
          justify-content: center;
        }

        @include tablet-portrait-only {
          padding-top: 0.5rem;
        }

        @include tablet-landscape-up {
          justify-content: flex-end;
          width: auto;
        }

        li {
          padding: 0.5rem 0;

          &.button {
            // padding-bottom: 1rem;
            a.button {
              margin: 0;
            }
          }
        }
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    img.logo {
      height: 3rem;
    }

    svg {
      width: 1.5rem;

      &.left {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
