<template>
  <Wrapper contentID="home">
    <Hero type="home">
      <h1><div class="pronounced">Explore</div> Canadian Wine with us</h1>
      <h2>There are over 800 licensed wineries in Canada. Discover something new today.</h2>
    </Hero>
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
      <div class="province-flags">
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
        <WineryStack :wineries="monthlyWineries" />
      </div>
      <div class="article-container">
        <FeaturedArticle :article="featuredArticle" />
      </div>
      <div class="popular-container">
        <h1>Popular Wineries</h1>
        <WineryList :wineries="popularWineries" />
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
  </Wrapper>
</template>

<script>
// import Api from '@/services/Api.js'
import Wrapper from '@/components/global/Wrapper.vue'
import Hero from '@/components/sections/Hero.vue'
import WineryStack from '@/components/sections/WineryStack.vue'
import WineryList from '@/components/sections/WineryList.vue'
import FeaturedArticle from '@/components/sections/FeaturedArticle.vue'
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
          name: 'Alton Farms Estate',
          address: { province: 'Alberta' },
          image: 'winery'
        },
        {
          name: 'Alton Farms Estate',
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
          name: 'Alton Farms Estate',
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
    computeImg (image, isProvince) {
      let url
      let img = image.replace(/ /g, '')
      if (isProvince === true) url = `url(${require(`@/assets/img/provinces/${img}.jpg`)})`
      else url = `url(${require(`@/assets/img/${img}.jpg`)})`
      return {
        backgroundImage: url
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.$emit('load')
    }, 500)
  },
  components: {
    Wrapper,
    Hero,
    WineryStack,
    WineryList,
    FeaturedArticle,
    Icon
  }
}
</script>

<style lang="scss">
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

section#search {
  margin-top: -5rem;
  background-color: var(--neutral050);
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep-lg);

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

div.province-flags {
  h2 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 780px) {
    div.list {
      overflow: auto;
      grid-template-columns: repeat(8, 8.5rem) !important;
    }
  }

  div.list {
    margin: -1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(8.5rem,1fr));
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
</style>
