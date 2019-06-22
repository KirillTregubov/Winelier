<template>

  <body id="home">
    <Header></Header>
    <section id="hero">
      <div class="container">
        <h1>Explore <span class="pronounced">Canadian Wine</span> with us.</h1>
        <h2>There are over 800 licensed wineries in Canada. Discover something new today.</h2>
      </div>
      <div class="search">
        <div class="input left">
          <div class="label">Winery</div>
          <div class="main">
            <input type="text" placeholder="A Winery in Canada">
            <Icon name="chevron-down" />
          </div>
        </div>
        <div class="input right">
          <div class="label">Where</div>
          <div class="main">
            <input type="text" placeholder="Ontario">
            <Icon name="chevron-down" />
          </div>
        </div>
        <a class="button primary" href="">Search</a>
      </div>
      <h2>Or browse by province</h2>
    </section>
  </body>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Icon from "@/components/icons/Icon.vue";

export default {
  name: 'home',
  components: {
    Header,
    Icon
  }
}
</script>

<style lang="scss">
.input {
  padding: 1rem;
  border-radius: var(--radius-subtle);
  background-color: var(--neutral050);

  .label {
    font-size: var(--font-base);
    font-weight: var(--font-bold);
    margin-bottom: 0.5rem;
  }

  input {
    font-size: var(--font-sm);
  }

  .main {
    display: flex;
    align-items: center;

    svg {
      margin-left: auto;
    }
  }
}
input:not([type='submit']):not([type='file']) {
  margin: 0;
  border: none;
  outline: 0;
  background-color: transparent;
}

section {
  .container {
    padding-bottom: 2rem;
  }
}

section#hero {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    margin-bottom: 1.5rem;
    font-size: var(--font-2xl);
    font-weight: var(--font-base);

    .pronounced {
      font-weight: var(--font-bold);
    }
  }

  h2 {
    color: var(--neutral400);
    font-size: var(--font-md);
    font-weight: var(--font-semibold);
  }

  .search {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;

    .input {
      flex-grow: 1;
      border-radius: 0;
      border-right: 1px solid var(--neutral200);

      &.right {
        border-right: none;
        border-top-right-radius: var(--radius-subtle);
        border-bottom-right-radius: var(--radius-subtle);
      }
    }

    a.button {
      margin-left: 2rem;
    }
  }
}
</style>

