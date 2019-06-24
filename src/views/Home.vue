<template>

  <body id="home">
    <Header></Header>
    <section id="hero">
      <div class="content">
        <div class="titles">
          <h1>
            <div class="pronounced">Explore</div> Canadian Wine with us
          </h1>
          <h2>There are over 800 licensed wineries in Canada. Discover something new today.</h2>
        </div>
      </div>
    </section>
    <div class="fade" aria-hidden="true"></div>
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
      <div class="province-container">
        <h2>Or browse by province</h2>
        <div class="list-container">
          <div class="list-item" :key="province.id" v-for="province in provinceArray">
            <a href="" class="button image"><img :src="getProvinceImg(province)" alt=""></a>
            <h2>{{ province }}</h2>
          </div>
        </div>
      </div>
      <div class="monthly-container">
        <h1>Wineries of the Month</h1>
        <div class="winery-list-horizontal">
          <div class="winery-card" :key="winery.id" v-for="winery in monthlyWineries">
            <div class="image-container" :style="{'background-image': 'url(' + winery.image + ')'}"></div>
            <div class="info-container">
              <div class="info-inner">
                <div class="container">
                  <div class="badge">Featured</div>
                  <div class="badge secondary">{{winery.address.province}}</div>
                </div>
                <h3>{{winery.name}}</h3>
                <div class="container">
                  <Icon name="location-pin" />
                  <h4>{{printAddress(winery.address)}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-container">
        <div class="featured-article">
          <div class="image-container" :style="{'background-image': 'url(' + featuredBlog.image + ')'}"></div>
          <div class="info-container">
            <div class="container">
              <Icon name="star" />
              <h3>Featured</h3>
            </div>
            <h1>{{ featuredBlog.title }}</h1>
            <h2>{{ featuredBlog.synopsis }}</h2>
            <!-- <div class="container">
              <Icon name="calendar-date" />
              <h3>{{ featuredBlog.date }}</h3>
            </div> -->
            <a href="" class="button primary">
              <Icon name="book-open" />Read Article</a>
          </div>
        </div>
      </div>
      <div class="popular-container">
        <h1>Wineries of the Month</h1>
        <div class="winery-list-vertical">
          <div class="winery-card" :key="winery.id" v-for="winery in popularWineries">
            <div class="image-container" :style="{'background-image': 'url(' + winery.image + ')'}"></div>
            <div class="info-container">
              <div class="info-inner">
                <div class="container">
                  <div class="badge">Featured</div>
                  <div class="badge secondary">{{winery.address.province}}</div>
                </div>
                <h3>{{winery.name}}</h3>
                <div class="container">
                  <Icon name="location-pin" />
                  <h4>{{printAddress(winery.address)}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="alert-container">
        <div class="inline-alert">
          <div class="container">
            <Icon name="important" />
            <h3>Important</h3>
          </div>
          <h1>Register Your Winery in Our Database</h1>
          <h2>If your winery is located in Canada and isn’t already on our site, please let us know by clicking the button below!</h2>
          <a href="" class="button primary">
            <Icon name="add-circle" />Register Now For Free</a>
        </div>
      </div>
    </section>
    <footer>
      <div class="main-content">

      </div>
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
      provinceArray: [
        'Ontario',
        'British Columbia',
        'Quebec',
        'Alberta',
        'Nova Scotia',
        'Saskatchewan',
        'New Brunswick',
        'Manitoba'
      ],
      monthlyWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: '/assets/img/winery.png'
        }
      ],
      popularWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Manitoba' },
          image: '/assets/img/winery.png'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: '/assets/img/winery.png'
        }
      ],
      featuredBlog: {
        title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
        synopsis:
          "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
        date: 'Jun 21, 2019',
        image: '/assets/img/blog.png'
      }
    }
  },
  methods: {
    printAddress (address) {
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
footer {
  padding: 2rem 6rem;
  background-color: var(--neutral900);
  color: var(--neutral050);
  // height: 200vh;

  div.main-content {
    display: grid;
    
  }
}

div.winery-card {
  div.image-container {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  div.info-container {
    position: relative;
    padding: 0 0.75rem;

    div.info-inner {
      padding: 1rem;

      > :not(:last-child) {
        margin-bottom: 1rem;
      }

      h3 {
        font-weight: var(--font-semibold);
        font-size: var(--font-lg);
      }

      div.container {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
          width: 1rem;

          .primary {
            fill: var(--neutral200);
          }

          .secondary {
            fill: var(--neutral400);
          }
        }

        h4 {
          font-weight: var(--font-normal);
          font-size: var(--font-sm);
          color: var(--neutral400);
        }
      }
    }
  }
}

div.winery-list-horizontal {
  display: flex;

  > div {
    flex-shrink: 1;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }

  div.winery-card {
    max-width: 20rem;
    display: inline-block;

    div.image-container {
      width: 100%;
      height: 15rem;
      border-radius: var(--radius-subtle);
      box-shadow: var(--shadow-deep-sm);
    }

    div.info-container {
      margin-top: -4rem;

      div.info-inner {
        border-radius: var(--radius-subtle);
        background-color: var(--neutral050);
        border: 1px solid var(--neutral100);
        box-shadow: var(--shadow-deep-sm);
      }
    }
  }
}

div.winery-list-vertical {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); // adjust this
  grid-gap: 1rem;

  div.winery-card {
    display: flex;
    border-radius: var(--radius-subtle);
    background-color: var(--neutral050);
    box-shadow: var(--shadow-deep-md);
    overflow: hidden;

    div.image-container {
      width: 40%;
    }
  }
}

div.featured-article {
  display: flex;
  width: 100%;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-md);
  overflow: hidden;

  div.image-container {
    width: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  div.info-container {
    width: 50%;
    padding: 1.75rem;
    background-color: var(--primary500);

    h1 {
      line-height: 1.25;
      color: var(--primary100);
    }

    h2 {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-weight: var(--font-semibold);
      color: var(--primary200);
      font-size: var(--font-md);
    }

    div.container {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;

      svg {
        margin-right: 0.5rem;

        .primary {
          fill: var(--primary800);
        }

        .secondary {
          fill: var(--primary300);
        }
      }

      h3 {
        color: var(--primary900);
        font-weight: var(--font-semibold);
      }
    }
  }
}

div.badge {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  border-radius: var(--radius-rounded);
  background-color: var(--primary200);
  color: var(--primary600);
  font-size: var(--font-xs);
  font-weight: var(--font-bold);
  letter-spacing: var(--letters-wide);
  line-height: 1;
  text-transform: uppercase;

  &.secondary {
    background-color: var(--yellow300);
    color: var(--yellow800);
  }
}

div.inline-alert {
  text-align: center;
  padding: 1.75rem;
  width: 100%;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-md);
  overflow: hidden;
  background-color: var(--primary500);

  h1 {
    line-height: 1.25;
    color: var(--primary100);
  }

  h2 {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-weight: var(--font-semibold);
    color: var(--primary200);
    font-size: var(--font-md);
  }

  div.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;

    svg {
      margin-right: 0.5rem;

      .primary {
        fill: var(--primary800);
      }

      .secondary {
        fill: var(--primary300);
      }
    }

    h3 {
      color: var(--primary900);
      font-weight: var(--font-semibold);
    }
  }
}

div.input-container {
  padding: 1rem;
  border-radius: var(--radius-subtle);
  background-color: var(--neutral100);

  div.label {
    font-size: var(--font-lg);
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

section:not(#hero) {
  padding: 2rem 6rem;
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

section#content {
  padding-top: 2.5rem;

  > div:not(:last-child) {
    margin-bottom: 5rem;
  }

  > div {
    z-index: 1;
  }
}

div.fade {
  width: 100%;
  z-index: 0;
  margin-top: -25vh;
  height: 25vh;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    var(--neutral050)
  );
}

section#search {
  position: relative;
  margin-top: -4.5rem;
  background-color: var(--neutral050);
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-lg);
}

section#hero {
  height: calc(100vh - 7.5rem);
  background: url('/assets/img/herocrop.png') no-repeat center 20%;
  background-size: 100vw 100vh;
  background-size: cover;
  // text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.2);

  > div.content {
    padding-top: 3rem;
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
      color: var(--neutral600);
      font-size: var(--font-md);
      font-weight: var(--font-semibold);
    }
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

div.province-container {
  h2 {
    margin-bottom: 0.5rem;
  }

  div.list-container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      calc((var(--max-width) - 7rem) / 8)
    );
    grid-gap: 1rem;

    div.list-item {
      text-align: center;

      a.button.image {
        width: calc((var(--max-width) - 7rem) / 8);
        height: 4rem;
        box-shadow: var(--shadow-deep-sm);
      }

      h2 {
        color: var(--neutral900);
        margin: 0;
      }
    }
  }
}
</style>
