<template>
  <header id="header">
  <!-- <header id="header" :class="{isSticky: isSticky, sticky: sticky, hiding: hiding}"> -->
    <nav>
      <ul>
        <li class="left mobile"><a href=""><img class="logo" src="@/assets/img/logo.png" alt="Winelier Logo"></a></li>
        <li><a href="">Explore <Icon name="chevron-down" /></a></li>
        <!-- <li><a href="">Events</a></li> -->
        <li><a href="">Help <Icon name="chevron-down" /></a></li>
        <li><a href="">Blog <Icon name="chevron-down" /></a></li>
        <li><a href="">Shop <Icon name="chevron-down" /></a></li>
        <li class="login"><a href=""><Icon name="user-circle" class="left" />Log In</a></li>
        <li class="button"><a class="button" href="">Add Listing</a></li>
        <li class="toggle mobile" @click="isMobileExpanded = !isMobileExpanded"><Icon :name="toggleName" /></li>
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
      hiding: false,
      sticky: false,
      scrollPosition: 0,
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
  padding: 1rem 1rem;
  font-weight: var(--font-bold) !important;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--neutral100);
  z-index: 2;

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 2rem;

      &:not(.mobile) {
        display: none;
      }

      &.left {
        margin: 0 auto 0 0;
      }

      &.login {
        margin-left: 5rem;
      }

      // @include phone-only {
      //   &:not(.mobile) {
      //     display: none;
      //   }
      // }

      svg {
        width: 1.5rem;
      }

      a {
        display: flex;
        align-items: center;

        img.logo {
          width: 8rem;
        }

        svg {
          width: 1.5rem;

          &.left {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}

@keyframes slideDown {
    0% {
        opacity: 0.6;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0.6;
        transform: translateY(-100%);
    }
}
</style>
