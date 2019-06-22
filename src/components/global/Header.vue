<template>
  <header id="header">
    <nav>
      <ul>
        <li class="left"><a href=""><img class="logo" src="@/assets/img/logo.png" alt="Winelier Logo"></a></li>
        <li><a href="">Explore <Icon name="chevron-down" /></a></li>
        <!-- <li><a href="">Events</a></li> -->
        <li><a href="">Help <Icon name="chevron-down" /></a></li>
        <li><a href="">Blog <Icon name="chevron-down" /></a></li>
        <li><a href="">Shop <Icon name="chevron-down" /></a></li>
        <li class="login"><a href=""><Icon name="user-circle" class="left" />Log In</a></li>
        <li class="button"><a class="button" href="">Add Listing</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Icon from "@/components/icons/Icon.vue";

export default {
  name: "main-header",
  components: {
    Icon
  }
}
</script>

<style lang="scss">
img.logo {
  width: 8rem;
  // object-fit: cover;
}

svg {
  width: 1.5rem;
  
  &.left {
    margin-right: 0.5rem;
  }
}

#header {
  position: sticky;
  top: 0;
  padding: 2rem 5rem;
  font-weight: var(--font-bold) !important;
}

ul {
  display: flex;
  align-items: center;

  li {
    margin-left: 2rem;
    
    &.left {
      margin: 0 auto 0 0;
    }

    &.login {
      margin-left: 5rem;
    }

    a {
      display: flex;
      align-items: center;
    }
  }
}

</style>
