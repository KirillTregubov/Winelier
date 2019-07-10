<template>
  <body id="home">
    <transition name="fade">
      <div v-if="isLoading" id="loader">
        <div></div>
      </div>
    </transition>
    <Header></Header>
    <section id="hero" class="bg-image" v-lazy:background-image.container="getImage('hero', '')">
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
      <div class="content">
        <div class="input-group">
          <div class="input wide left">
            <div class="label">Winery</div>
            <div class="input">
              <input type="text" placeholder="A Winery in Canada">
              <Icon name="chevron-down" />
            </div>
          </div>
          <div class="input wide right">
            <div class="label">Where</div>
            <div class="input">
              <input type="text" placeholder="Ontario">
              <Icon name="chevron-down" />
            </div>
          </div>
        </div>
        <a class="button primary" href="">
          <Icon name="search" /> Search</a>
      </div>
    </section>
    <section id="content">
      <div class="province-container">
        <h2>Or browse by province</h2>
        <div class="list">
          <div class="list-item" :key="province.id" v-for="province in provinceArray">
            <a href="" class="button bg-image" v-lazy:background-image.container="getImage(province, 'province')">
            </a>
            <h2>{{ province }}</h2>
          </div>
        </div>
      </div>
      <div class="monthly-container">
        <h1>Wineries of the Month</h1>
        <div class="winery-list-horizontal">
          <div class="winery-card" :key="winery.id" v-for="winery in monthlyWineries">
            <div class="image-container bg-image" v-lazy:background-image.container="getImage(winery.image)">
            </div>
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
          <div class="image-container bg-image" v-lazy:background-image.container="getImage(featuredArticle.image)">
          </div>
          <div class="info-container">
            <div class="container">
              <Icon name="star" />
              <h3>Featured</h3>
            </div>
            <h1>{{ featuredArticle.title }}</h1>
            <h2>{{ featuredArticle.synopsis }}</h2>
            <!-- <div class="container">
              <Icon name="calendar-date" />
              <h3>{{ featuredArticle.date }}</h3>
            </div> -->
            <a href="" class="button secondary">
              <Icon name="book-open" />Read Article</a>
          </div>
        </div>
      </div>
      <div class="popular-container">
        <h1>Popular Wineries</h1>
        <div class="winery-list-vertical">
          <div class="winery-card" :key="winery.id" v-for="winery in popularWineries">
            <div class="image-container bg-image" v-lazy:background-image.container="getImage(winery.image)">
            </div>
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
      <div class="primary content">
        <div class="logo container">
          <img src="@/assets/img/logo.png" alt="Logo">
          <h2>Follow Us</h2>
          <div class="social">
            <a href="https://instagram.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" alt="Instagram logo">
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
              </svg>
            </a>
            <a href="https://facebook.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" alt="Facebook logo">
                <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"/>
              </svg>
            </a>
            <a href="https://twitter.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" alt="Twitter logo">
                <path style=" " d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z "/>
              </svg>
            </a>
          </div>
        </div>
        <div class="explore container">
          <div class="icon-title">
            <h1>Explore</h1>
            <Icon name="chevron-right" />
          </div>
          <h2>Wineries</h2>
          <h2>Events</h2>
          <h2>Shop</h2>
        </div>
        <div class="blog container">
          <div class="icon-title">
            <h1>Blog</h1>
            <Icon name="chevron-right" />
          </div>
          <h2>Latest Posts</h2>
          <h3><Icon name="book-open" /> {{featuredArticle.title}}</h3>
          <h3><Icon name="book-open" /> {{featuredArticle.shortenedTitle}}</h3>
        </div>
        <div class="links container">
          <h1>Quick Links</h1>
          <h2>Contact Us</h2>
          <h2>FAQs</h2>
          <h2>Sitemap</h2>
        </div>
        <div class="newsletter container">
          <h1>Newsletter</h1>
          <h2>Subscribe to our newsletter to be informed of popular wineries, new content, and exclusive promotions.</h2>
          <div class="input inline">
            <input type="text" placeholder="Email Address">
            <a href="" class="button primary">Submit</a>
          </div>
        </div>
      </div>
      <div class="secondary content">
        <div class="legal">
          © 2019 Winelier. All rights reserved. Privacy Policy and Terms of Use. Design by Kirill Tregubov.
        </div>
        <div class="back" v-scroll-to="'#home'">
          <Icon name="arrow-thick-up" />
          Back To Top
        </div>
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
      isLoading: true,
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
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: 'winery'
        }
      ],
      popularWineries: [
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Alberta' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'British Columbia' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Ontario' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Manitoba' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate Winery',
          address: { province: 'Quebec' },
          image: 'winery'
        }
      ],
      featuredArticle: {
        title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
        shortenedTitle: 'Fourth of July Fare',
        synopsis:
          "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
        date: 'Jun 21, 2019',
        image: 'blog'
      }
    }
  },
  methods: {
    printAddress (address) {
      return 'Street, ' + 'Town, ' + address.province
    },
    getImage (filename, type) {
      let images
      if (type === 'province') images = require.context('@/assets/img/provinces/', false, /\.jpg$/)
      else images = require.context('@/assets/img/', false, /\.jpg$/)
      filename = filename.replace(/ /g, '')
      return images('./' + filename + '.jpg')
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 100)
  },
  components: {
    Header,
    Icon
  }
}
</script>

<style lang="scss">
.test {
  height: 100vh;
}

footer {
  padding: 5rem 1.5rem 3rem 1.5rem;
  background-color: var(--neutral900);
  color: var(--neutral050);

  @include tablet-landscape-up {
    padding: 5 4rem 3rem 4rem;
  }

  @include desktop-up {
    padding: 5 6rem 3rem 6rem;
  }

  > div.content {
    max-width: var(--max-width);
    margin: 0 auto;

    div.container {
      display: block;
    }
  }

  div.primary.content {
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--neutral800);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2.5rem;
    grid-column-gap: 3rem;
    padding-bottom: 3rem;

    @include big-desktop-up {
      display: flex;
      flex-wrap: wrap;

      > div.container {
        max-width: 200px;
      }

      > div.container:not(:last-child) {
        margin-right: 3.5rem;
      }
    }

    div.icon-title {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      > * {
        margin-bottom: 0;
      }

      svg {
        width: 1.5rem;
        margin-left: 0.25rem;

        .secondary {
          fill: var(--neutral100);
        }
      }
    }

    h1 {
      margin-bottom: calc(1rem + 4px);
      font-size: var(--font-lg);
      font-weight: var(--font-semibold);
    }

    h2 {
      margin-bottom: 0.75rem;
      font-size: var(--font-md);
      font-weight: var(--font-normal);
      color: var(--neutral200);
      line-height: 1.25;
    }

    h3 {
      margin-bottom: 0.25rem;
      font-size: var(--font-base);
      font-weight: var(--font-normal);
      color: var(--neutral300);
      line-height: 1.25;
    }

    div.logo.container {
      @include big-desktop-up {
        margin-right: auto;
      }

      img {
        width: 12.5rem;
      }

      h2 {
        margin-top: 1rem;
      }

      div.social {
        a {
          display: inline-block;
          width: 1.5rem;
          height: 1.5rem;

          &:not(:last-child) {
            margin-right: 0.5rem;
          }

          svg {
            width: 100%;
            height: 100%;
            fill: var(--neutral500);
          }
        }
      }
    }

    div.blog.container {
      max-width: 225px;

      h2 {
        margin-bottom: 0.5rem;
      }

      h3 {
        svg {
          width: 1rem;
          position: relative;
          top: 0.15rem;

          .primary {
            fill: var(--neutral400);
          }

          .secondary {
            fill: var(--neutral700);
          }
        }
      }
    }

    div.newsletter.container {
      max-width: 300px;
    }
  }

  div.secondary.content {
    color: var(--neutral300);

    @media (min-width: 900px) {
      display: flex;
      align-items: center;

      div.back {
        margin: 0 !important;
      }
    }

    :first-child {
      margin-right: auto;
    }

    div.back {
      display: inline-flex;
      align-items: center;
      margin: 1.5rem 0 0 0;
      padding-right: 0.25rem;
      // padding: 0.25rem 0.5rem;
      user-select: none;

      &:focus, &:hover {
        background-color: var(--neutral800);
        border-radius: var(--radius-subtle);

        svg {
          .primary {
            fill: var(--neutral600);
          }

          .secondary {
            fill: var(--neutral200);
          }
        }
      }

      svg {
        width: 1.5rem;
        margin-right: 0.5rem;

        .primary {
          fill: var(--neutral800);
        }

        .secondary {
          fill: var(--neutral200);
        }
      }
    }
  }
}

div.winery-card {
  div.image-container {
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  div.info-container {
    position: relative;
    padding: 0 1rem;

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

        div.badge:first-child {
          margin-right: 0.5rem;
        }

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 399px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }

  div.winery-card {
    width: 100%;

    div.image-container {
      width: 100%;
      height: 15rem;
      border-radius: var(--radius-subtle);
      box-shadow: var(--shadow-deep);
    }

    div.info-container {
      margin-top: -4rem;

      div.info-inner {
        border-radius: var(--radius-subtle);
        background-color: var(--neutral050);
        box-shadow: var(--shadow-deep-sm);
      }
    }
  }
}

div.winery-list-vertical {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 399px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }

  @include tablet-portrait-up {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @include phone-only {
    div.winery-card {
      width: 100%;

      div.image-container {
        width: 100%;
        height: 15rem;
        border-radius: var(--radius-subtle);
        box-shadow: var(--shadow-deep);
      }

      div.info-container {
        margin-top: -4rem;

        div.info-inner {
          border-radius: var(--radius-subtle);
          background-color: var(--neutral050);
          box-shadow: var(--shadow-deep-sm);
        }
      }
    }
  }

  @include tablet-portrait-up {
    div.winery-card {
      display: flex;
      border-radius: var(--radius-subtle);
      background-color: var(--neutral050);
      box-shadow: var(--shadow-deep-sm);
      overflow: hidden;

      div.image-container {
        width: 40%;
      }
    }
  }
}

div.featured-article {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-md);
  overflow: hidden;

  @include tablet-landscape-up {
    flex-direction: row;
  }

  div.image-container {
    // display: none;
    width: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  div.info-container {
    padding: 1.75rem;
    background-color: var(--yellow700);

    @include tablet-landscape-up {
      width: 50%;
    }

    h1 {
      line-height: 1.25;
      color: var(--yellow100);
    }

    h2 {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-weight: var(--font-semibold);
      color: var(--yellow200);
      font-size: var(--font-md);
    }

    div.container {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;

      svg {
        margin-right: 0.5rem;

        .primary {
          fill: var(--yellow900);
        }

        .secondary {
          fill: var(--yellow400);
        }
      }

      h3 {
        color: var(--yellow300);
        font-weight: var(--font-semibold);
      }
    }
  }
}

div.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  border-radius: var(--radius-rounded);
  background-color: var(--primary200);
  color: var(--primary800);
  font-size: var(--font-xs);
  font-weight: var(--font-bold);
  letter-spacing: var(--letters-wide);
  line-height: 1;
  text-transform: uppercase;

  &.secondary {
    background-color: var(--yellow300);
    color: var(--yellow900);
  }
}

div.inline-alert {
  text-align: center;
  padding: 1.75rem;
  width: 100%;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-md);
  overflow: hidden;
  background-color: var(--primary700);

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
        fill: var(--primary900);
      }

      .secondary {
        fill: var(--primary300);
      }
    }

    h3 {
      color: var(--primary300);
      font-weight: var(--font-semibold);
    }
  }
}

div.input.wide {
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

div.input.inline {
  background-color: var(--neutral800);
  border-radius: var(--radius-subtle);
  display: flex;
  align-items: center;
  overflow: hidden;

  input {
    padding: 0.5rem;
    flex: 1;
    width: 0;
    color: var(--neutral200);
  }

  a.button {
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem;
    background-color: var(--primary400);
    border-radius: 0;
  }
}

input:not([type='submit']):not([type='file']) {
  margin: 0;
  padding: 0;
  border: none;
  outline: 0;
  background-color: transparent;
  color: var(--neutral050);
  font-size: var(--font-base);

  &::placeholder {
    color: var(--neutral400);
    font-size: var(--font-base);
    opacity: 1;
  }
}

section {
  padding: 2rem 1.5rem;
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;

  @include tablet-landscape-up {
    padding: 2rem 4rem;
  }

  @include desktop-up {
    padding: 2rem 6rem;
  }
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

section#content {
  padding-top: 2.5rem;

  > div:not(:last-child) {
    margin-bottom: 4rem;
  }

  > div {
    z-index: 1;
  }
}

div.fade {
  position: absolute;
  width: 100%;
  margin-top: -25vh;
  height: 25vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0,0,0,0),
    var(--neutral050)
  );
}

section#search {
  margin-top: -4.5rem;
  background-color: var(--neutral050);
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-lg);

  margin-top: -5rem;

  @include tablet-portrait-only {
    margin-top: -8.5rem;
  }

  @include tablet-landscape-up {
    margin-top: -5.5rem;
  }

  div.content {
    display: flex;
    flex-direction: column;
    width: 100%;

    div.input-group {
      flex: 1;

      @include phone-only {
        > :not(:first-child) {
          margin-top: 1rem;
        }
      }

      @include tablet-portrait-up {
        display: flex;
      }
    }

    @include tablet-portrait-only {
      // display: block;
    }

    @include tablet-landscape-up {
      flex-direction: row;
    }

    div.input.wide:first-child {
      flex: 1.75;
    }

    div.input.wide:nth-child(2) {
      flex: 1;
    }

    div.input.wide {
      flex: 1;
      border-radius: var(--radius-subtle);

      @include tablet-portrait-up {
        border-radius: 0;

        &.left {
          border-right: 1px solid var(--neutral300);
          border-top-left-radius: var(--radius-subtle);
          border-bottom-left-radius: var(--radius-subtle);
        }

        &.right {
          border-top-right-radius: var(--radius-subtle);
          border-bottom-right-radius: var(--radius-subtle);
        }
      }
    }

    a.button {
      margin: 0;
      margin-top: 1rem;
      padding: 0.75rem 2rem;

      @include tablet-landscape-up {
        margin: 0 0 0 2rem;
      }
    }
  }
}

.bg-image {
  background-color: var(--neutral100);

  &[lazy=loaded] {
    transition: opacity 0.7s ease;
  }
}

section#hero {
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20%;

  > div.content {
    padding: 0 1.5rem;
    padding-top: 2vh;
    max-width: var(--max-width);
    margin: 0 auto;
    box-sizing: content-box;

    @include tablet-portrait-up {
      padding-top: 5vh;
    }

    @include tablet-landscape-up {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    @include desktop-up {
      padding-left: 6rem;
      padding-right: 6rem;
    }

    // @include big-desktop-up {
    //   padding-left: 0;
    //   padding-right: 0;
    // }

    h1 {
      font-size: var(--font-2xl);
      font-weight: var(--font-base);

      .pronounced {
        font-weight: var(--font-black);
      }

      @include tiny-height-only {
        font-size: var(--font-xl);
      }
    }

    h2 {
      color: var(--neutral600);
      font-size: var(--font-md);
      font-weight: var(--font-semibold);

      @include tiny-height-only {
        font-size: var(--font-sm);
      }
    }
  }
}

div.province-container {
  h2 {
    margin-bottom: 0.5rem;
  }

  div.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
    grid-gap: 1rem;

    div.list-item {
      text-align: center;

      a.button.bg-image {
        width: 100%;
        padding-top: 50%;
        box-shadow: var(--shadow-deep-sm);
      }

      h2 {
        color: var(--neutral900);
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
