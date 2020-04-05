<template>
  <header id="header">
    <nav>
      <ul>
        <li class="left title mobile"><router-link to="/">
          <!-- <img class="logo" src="@/assets/img/logo.png" alt="Winelier Logo"> -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path fill="url(#paint0_linear)" d="M49.998 100c8.847 0 12.382-1.006 12.382-1.006C65 98.275 65 95.185 65 95.185V62.43c0-12.713-4.034-20.04-4.034-20.04-5.237-9.985-6.087-21.117-6.087-21.117l-.496-14.295c0-.934.638-1.222.638-1.222V2.524l-.639-.43V1.086C53.465-.135 50 .005 50 .005s-3.464-.14-4.384 1.082v1.006l-.636.431v3.232s.636.288.636 1.222l-.495 14.295s-.85 11.133-6.087 21.117c0 0-4.033 7.327-4.033 20.04v32.755s0 3.09 2.619 3.809c-.001 0 3.534 1.006 12.379 1.006z"/>
            <g style="mix-blend-mode:overlay">
              <path fill="#ffffff" d="M54.767 63h-3.094l-1.717-7.106L48.239 63h-3.094l-3.247-11.339h3.281l1.717 7.565 1.938-7.565h2.244l1.938 7.565 1.7-7.565h3.298L54.767 63z"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="35" x2="65.404" y2="99.5" gradientUnits="userSpaceOnUse">
                <stop offset=".521" stop-color="#A71B1B"/>
                <stop offset="1" stop-color="#E66B6B"/>
              </linearGradient>
            </defs>
          </svg>
          <h1>Winelier</h1>
        </router-link></li>
        <li class="toggle mobile" @click="isMobileExpanded = !isMobileExpanded"><Icon :name="toggleName" /></li>
        <transition name="slide-down">
          <ul v-show="isMobileExpanded">
            <li><router-link to="/wineries">Wineries</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <!-- <li><a href="">Events</a></li> -->
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
  user-select: none;

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

        &.title {
          a {
            align-items: baseline;
          }
          svg {
            width: 2rem;
          }
          h1 {
            margin-bottom: 0;
          }
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
