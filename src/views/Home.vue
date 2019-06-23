<template>

  <body id="home">
    <Header></Header>
    <section id="hero">
      <div class="content">
        <div class="titles">
          <h1><div class="pronounced">Explore</div> Canadian Wine with us</h1>
          <h2>There are over 800 licensed wineries in Canada. Discover something new today.</h2>
        </div>
      </div>
      <div class="fade" aria-hidden="true"></div>
    </section>
    <section id="search">
      <div class="search-container">
        <div class="input-container left">
          <div class="label">Winery</div>
          <div class="input">
            <input type="text" placeholder="A Winery in Canada">
            <Icon name="chevron-down" />
          </div>
        </div>
        <div class="input-container right">
          <div class="label">Where</div>
          <div class="input">
            <input type="text" placeholder="Ontario">
            <Icon name="chevron-down" />
          </div>
        </div>
        <a class="button primary" href="">
        <Icon name="search" /> Search</a>
      </div>
    </section>
    <section id="content">
      <div class="category-container">
          <h2>Or browse by province</h2>
          <div class="list-container">
            <div class="list-item" :key="province.id" v-for="province in provinceArray">
              <a href="" class="button image"><img :src="getProvinceImg(province)" alt=""></a>
              <h2>{{ province }}</h2>
            </div>
          </div>
        </div>
      <div class="title container">
        <h1>Wineries of the Month</h1>
        <div class="winery-list-horizontal">
          <div class="winery-card" :key="winery.id" v-for="winery in wineriesOfTheMonth">
            <div class="image-container">
              <img src="@/assets/img/winery.png" alt="Winery Image">
            </div>
            <div class="info-container">
              <div class="info-inner">
                <div class="top-bar">
                  <div class="badge">Featured</div>
                  <div class="badge secondary">{{winery.address.province}}</div>
                </div>
                <h3>{{winery.name}}</h3>
                <div class="bottom-bar">
                  <Icon name="location-pin" /> {{printAddress(winery.address)}}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <footer>
      Footer
    </footer>
  </body>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'home',
  data () {
    return {
      provinceArray: ['Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Nova Scotia', 'Saskatchewan', 'New Brunswick', 'Manitoba'],
      wineriesOfTheMonth: [{ name: 'Alton Farms Estate Winery', address: { province: 'Ontario' } },
        { name: 'Alton Farms Estate Winery', address: { province: 'Alberta' } },
        { name: 'Alton Farms Estate Winery', address: { province: 'Ontario' } },
        {name: 'Alton Farms Estate Winery', address: { province: 'Quebec' } }]
    }
  },
  methods: {
    printAddress(address) {
      return 'Street, ' + 'Town, ' + address.province
    },
    getProvinceImg (province) {
      var images = require.context('@/assets/img/provinces/', false, /\.png$/)
      return images('./' + province + '.png')
    }
  },
  components: {
    Header,
    Icon
  }
}
</script>

<style lang="scss">
div.winery-card {
  max-width: 20rem;
  display: inline-block;
  margin: 1rem;

  div.image-container {
    max-width: inherit;

    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
      border-radius: var(--radius-subtle);
    }
  }

  div.info-container {
    position: relative;
    margin-top: -4rem;
    padding: 0 1rem;

    div.info-inner {
      border-radius: var(--radius-subtle);
      background-color: var(--neutral100);
      padding: 1rem;

      > :not(:last-child) {
        margin-bottom: 1rem;
      }

      div.top-bar {
        display: flex;
        align-items: center;
      }

      div.bottom-bar {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
        }
      }

      div.badge {
        display: inline-block;
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem 0.2rem 0.5rem;
        font-size: var(--font-sm);
        font-weight: var(--font-bold);
        letter-spacing: 0.05rem;
        line-height: 1;
        border-radius: var(--radius-rounded);
        text-transform: uppercase;
        background-color: var(--primary200);
        color: var(--primary600);

        &.secondary {
          background-color: var(--yellow300);
          color: var(--yellow800);
        }
      }
    }
  }
}

div.input-container {
  padding: 1rem;
  border-radius: var(--radius-subtle);
  background-color: var(--neutral100);

  div.label {
    font-size: var(--font-md);
    font-weight: var(--font-bold);
    margin-bottom: 0.25rem;
  }

  input {
    font-size: var(--font-base);
  }

  div.input {
    display: flex;
    align-items: center;

    input {
      flex: 1;
    }

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
  color: var(--neutral900);

  &::placeholder {
    color: var(--neutral400);
    opacity: 1;
  }
}

footer {
  padding: 2rem 6rem;
  // height: 200vh;
}

section {
  padding: 2rem 6rem;
  max-width: var(--max-width);
  margin: 0 auto;

  .container {
    padding-bottom: 5rem;
  }

  .container-distinct {
    padding-bottom: 3.5rem;
  }

  :last-child {
    padding-bottom: 0;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

section#content {
  > div:not(:last-child) {
    margin-bottom: 3rem;
  }

  div.winery-list-horizontal {
    display: flex;

    > div {
      flex-shrink: 1;
      margin: 0;

      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }
}

section#search {
  margin-top: -4.5rem;
  background-color: var(--neutral050);
  border-radius: var(--radius-rounded);
  position: relative;
}

section#hero {
  max-width: 100%;
  margin: -7.5rem 0 0 0;
  padding: 0;
  height: 100vh;
  // position: relative;
  background: url('/assets/img/herocrop.png') no-repeat center top;
  background-size: 100vw 100vh;
  background-size: cover;
  // text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.2);
  
  > div.content {
    padding: 7.5rem 0 0 0;
    max-width: var(--max-width);
    margin: 0 auto;

    h1 {
      font-size: var(--font-2xl);
      font-weight: var(--font-base);

      .pronounced {
        font-weight: var(--font-black);
      }
    }

    h2 {
      color: var(--neutral900);
      font-size: var(--font-md);
      font-weight: var(--font-semibold);
    }
  }

  div.fade {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25vh;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0), var(--neutral050));
  }
}

div.search-container {
  display: flex;
  width: 100%;

  div.input-container:first-child {
    flex: 1.75;
  }

  div.input-container:nth-child(2) {
    flex: 1;
  }

  div.input-container {
    flex: 1;
    border-radius: 0;
    border-right: 1px solid var(--neutral300);

    &.left {
      border-top-left-radius: var(--radius-subtle);
      border-bottom-left-radius: var(--radius-subtle);
    }

    &.right {
      border-right: none;
      border-top-right-radius: var(--radius-subtle);
      border-bottom-right-radius: var(--radius-subtle);
    }
  }

  a.button {
    margin: 0 0 0 2rem;
    padding: 0.75rem 2rem;
  }
}

div.category-container {

  h2 {
    margin-bottom: 1rem;
  }

  div.list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc((var(--max-width) - 7rem) / 8));
    grid-gap: 1rem;

    div.list-item {
      text-align: center;

      a.button.image {
        width: calc((var(--max-width) - 7rem) / 8);
        height: 4rem;
      }

      h2 {
        color: var(--neutral900);
        margin: 0;
      }
    }
  }
}
</style>
