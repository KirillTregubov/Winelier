<template>
  <div id="home">
    <Header></Header>
    <section id="hero" class="bg-image" :style="computeImg('hero')">
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
            <a href="" class="button bg-image" :style="computeImg(province, true)">
            </a>
            <h2>{{ province }}</h2>
          </div>
        </div>
      </div>
      <div class="monthly-container">
        <h1>Wineries of the Month</h1>
        <div class="winery-list-horizontal">
          <div class="winery-card" :key="winery.id" v-for="winery in monthlyWineries">
            <div class="image-container bg-image" :style="computeImg(winery.image)">
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
          <div class="image-container bg-image" :style="computeImg(featuredArticle.image)">
          </div>
          <div class="info-container">
            <div class="container">
              <Icon name="star" />
              <h3>Featured</h3>
            </div>
            <h1>{{ featuredArticle.title }}</h1>
            <h2>{{ featuredArticle.synopsis }}</h2>
            <div class="container">
              <Icon name="calendar-date" />
              <h3>{{ featuredArticle.date }}</h3>
            </div>
            <a href="" class="button secondary">
              <Icon name="book-open" />Read Article</a>
          </div>
        </div>
      </div>
      <div class="popular-container">
        <h1>Popular Wineries</h1>
        <div class="winery-list-vertical">
          <div class="winery-card" :key="winery.id" v-for="winery in popularWineries">
            <div class="image-container bg-image" :style="computeImg(winery.image)">
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
    <Footer :articles="latestArticles" />
  </div>
</template>

<script>
// import Api from '@/services/Api.js'
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
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
      },
      latestArticles: [
        {
          title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
          shortenedTitle: 'Fourth of July Fare',
          synopsis: "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
          date: 'Jun 21, 2019',
          image: 'blog'
        },
        {
          title: 'Fourth of July Fare: Slow-Cooked Ribs and Stone Fruit Salad',
          shortenedTitle: 'Fourth of July Fare',
          synopsis:
            "At the Butcher's Table, chef Morgan Mueller embraces summer with beef ribs and prosciutto-topped peaches; we pick 18 Syrahs and sparklers to pair",
          date: 'Jun 21, 2019',
          image: 'blog'
        }
      ]
    }
  },
  methods: {
    computeImg (image, isProvince) {
      let url
      let img = image.replace(/ /g, '')
      if (isProvince === true) url = `url(${require(`@/assets/img/provinces/${img}.jpg`)})`
      else url = `url(${require(`@/assets/img/${img}.jpg`)})`
      return {
        backgroundImage: url
      }
    },
    printAddress (address) {
      return 'Street, ' + 'Town, ' + address.province
    }
  },
  mounted () {
    setTimeout(() => {
      this.$emit('load')
    }, 500)
  },
  components: {
    Header,
    Footer,
    Icon
  }
}
</script>

<style lang="scss">
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
    transition: background 1.5s ease;
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
