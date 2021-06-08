<template>
  <!-- <NotFound v-if="!doesExist" :path="name"/> -->
  <!-- redirect to * instead of having it embeded in the page -->
  <!-- Could make a specific not found for wineries and blog posts so that they can return to discovery -->
  <Wrapper contentID="winery-page" :contentName="this.kebabToSentence(this.$route.params.name)" :notFound="notFound">
    <Hero type="nohead" :containsImage="true" image="winery">
      <!-- <transition name="fade" mode="out-in"> -->
        <!-- <Preloader type="hero-h1" v-if="!winery" /> -->
        <h1>{{ winery.name }}</h1>
      <!-- </transition> -->
      <!-- <h1>Willow Winery</h1> -->
      <h2>Located in
        <!-- <content-loader v-if="!winery"
        :speed="2"
        :animate="true"
        :width="40"
        :height="5"
        primaryColor="hsl(211, 13%, 65%)"
        secondaryColor="hsl(210, 16%, 82%)"
        :style="{'margin-top': '1px', 'margin-bottom': '-1px', height: '1rem'}"
      >
        <rect x="0" y="0" rx="1" ry="1" width="40" height="5" />
      </content-loader> -->
      <transition name="fade" mode="out-in">
        <Preloader type="hero-h2" v-if="!winery" />
        <span v-else>{{ computedLocation }}</span>
      </transition>
      </h2>
    </Hero>
    <section id="content">
      <div class="about-container">
        <h1>Our Winery</h1>
        <div class="description">
          <transition name="fade" mode="out-in">
            <Preloader type="paragraph" v-if="!winery" />
            <p v-else>{{ winery.description }}</p>
          </transition>
        </div>
        <!-- <div class="info-cards">
          <div class="info-card">
            <div class="title">Address</div>
            <div class="content">{{ computedAddress }}</div>
          </div>
          <div class="info-card">
            <div class="title">Phone</div>
            <div class="content">{{ computedPhone }}</div>
          </div>
          <div class="info-card">
            <div class="title">Email</div>
            <div class="content">{{ winery.email }}</div>
          </div>
          <div class="info-card">
            <div class="title">Visit Website</div>
            <div class="content">{{ winery.website }}</div>
          </div>
        </div> -->
      <transition name="scale-up">
        <div class="media-container" v-if="winery && winery.images && winery.images.length > 0">
          <h1>Gallery</h1>
          <img :src="'https://winelier.com/new/uploads/' + winery.images[0].filename + '.jpg'" :alt="winery.images[0].alt" class="single" v-if="winery.images.length === 1">
          <carousel v-if="winery.images.length > 1">
            <slide class="image-gallery" :key="image.id" v-for="image in winery.images">
              <img :src="'https://winelier.com/new/uploads/' + winery.images[0].filename + '.jpg'" :alt="winery.images[0].alt">
            </slide>
            <template v-slot:prevButton>
              <Icon name="chevron-left" />
            </template>
            <template v-slot:nextButton>
              <Icon name="chevron-right" />
            </template>
          </carousel>
        </div>
      </transition>
      <!-- change the buttons to Icons and make them into overlay (create custom element copy code to accomplish this, slots for icon) -->
      <div class="contact-container">
        <h1>Our Info</h1>
        <div class="details-container">
          <div class="detail-card">
            <div class="title">Address</div>
            <div class="content">{{ winery ? computedAddress : '' }} <span class="no-wrap">{{ winery ? winery.postal : '' }}</span></div>
          </div>
          <div class="detail-card">
            <div class="title">Phone</div>
            <div class="content">{{ winery ? computedPhone : '' }}</div>
          </div>
          <div class="detail-card">
            <div class="title">Email</div>
            <div class="content">{{ winery ? winery.email : '' }}</div>
          </div>
          <div class="detail-card">
            <a class="title link" :href="winery ? winery.website : ''" target="_blank">Visit Website</a>
            <!-- <div class="content">{{ winery.website }}</div> -->
          </div>
          <div class="detail-card social">
            <a href="" class="button primary large">Facebook</a>
            <a href="" class="button primary large">Twitter</a>
            <a href="" class="button primary large">Instagram</a>
          </div>
        </div>
      </div>
      </div>
      <!-- https://images.unsplash.com/photo-1560785513-9747de85b33c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80 -->
      <!-- <pre>{{ winery }}</pre> -->
    </section>
  </Wrapper>
</template>

<script>
// import Api from '@/services/Api.js'
import Wrapper from '@/components/global/Wrapper.vue'
import Icon from '@/components/icons/Icon.vue'
import Hero from '@/components/sections/Hero.vue'
// import { ContentLoader } from 'vue-content-loader';
import Preloader from '@/components/global/Preloader.vue'

export default {
  name: 'winery-page',
  data () {
    return {
      notFound: false,
      winery: null
    }
  },
  computed: {
    computedAddress () {
      return this.winery.street_address + ', ' + this.winery.town + ', ' + this.winery.province + ', ' + this.winery.country
    },
    computedLocation () {
      return this.winery.province + ', ' + this.winery.country
    },
    computedPhone () {
      var match = this.winery.phone.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        var intlCode = (match[1] ? '+1 ' : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
      }
      return null
    }
  },
  props: ['name'],
  methods: {
    computeImg (image) {
      let img = image.replace(/ /g, '')
      return {
        backgroundImage: `url(${require(`@/assets/img/${img}.jpg`)})`
      }
    },
    computeImgSrc (image) {
      let img = image.replace(/ /g, '')
      return `${require(`@/assets/img/${img}.jpg`)}`
    },
    kebabToSentence (string) {
      string = string.replace(/-/g, ' ').toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase())
      })
      return string.join(' ')
    }
  },
  created () {
    this.$emit('load')
    this.winery = {
      'id': '1',
      'manager_id': null,
      'tier': 'Regular',
      'name': 'Willow Springs Winery',
      'email': 'info@willowspringswinery.ca',
      'phone': '19056429463',
      'website': 'http://willowspringswinery.com/',
      'description': 'Willow Springs Winery, situated atop the geographical treasure known as the Oak Ridges Moraine complete with the renowned 11-acres Testa Vineyard, is a wine and event destination not to be missed. Among all the wineries with vineyards in York Region, Willow Springs is the first winery to receive VQA Ontario certification. The winery utilizes excellent growing and soil conditions to produce truly outstanding quality wines. It provides a beautiful backdrop for all family, corporate and group functions. The Testa pavilion, with its breathtaking views of the vineyard, is the perfect setting for all occasions. From simple picnic lunches in the vineyard to lavish weddings in the beautiful pavilion.',
      'street_address': '5572 Bethesda Road',
      'town': 'Stouffville',
      'province': 'Ontario',
      'country': 'Canada',
      'postal': 'L4A 7X3',
      'created_at': '2019-07-11 23:47:44',
      'modified_at': '2019-08-14 12:50:05'
    }
    /*
    Api.getRow({ table: 'wineries', name: this.kebabToSentence(this.$route.params.name) }).then((response) => {
      console.log(response.data)
      if (response.data.status === 'success') {
        setTimeout(() => {
          this.winery = JSON.parse(response.data.content)
          this.winery.images = JSON.parse(response.data.images)
        }, 1000)
        // this.winery.images = JSON.parse('[{"filename":"5d5d9d14bb5da","alt":"image"}]')//response.data.images)
      } else {
        console.log('error')
        // this.notFound = true
      }
      // this.$emit('load')
    })
    */
  },
  components: {
    Wrapper,
    Hero,
    // NotFound,
    Preloader,
    // ImageLoader,
    Icon
    // Carousel,
    // Slide
  }
}
</script>

<style lang="scss">
div.about-container {
  > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  p {
    font-size: var(--font-md);
    line-height: 1.2;
  }
}

div.media-container {
  img {
    width: 100%;
    height: 100%;
    // display: block;
    // width: 100%;
    object-fit: cover;
    object-position: center;

    &.single {
      height: 35rem;
      border-radius: var(--radius-subtle);
      box-shadow: var(--shadow);
    }
  }
}

.VueCarousel {
  &-wrapper {
    height: 35rem;
    border-radius: var(--radius-subtle);
    box-shadow: var(--shadow);

    div.VueCarousel-slide {
      height: 35rem;
      // height: 100% !important;
    }
  }

  &-dot-container {
    padding: 0 0.25rem;
    background-color: var(--neutral050);
    margin: 0.25rem 0 !important;
    border-radius: var(--radius-subtle);
    // border-top-left-radius: var(--radius-subtle);
    // border-top-right-radius: var(--radius-subtle);
    > button {
      margin-top: 0 !important;
    }
  }

  &-dot {
    background-color: var(--neutral200);
    &--active {
      background-color: var(--neutral500);
    }
  }

  &-navigation-button {
    svg {
      width: 2.25rem;
    }

    .secondary {
      fill: var(--neutral050);
    }

    &:active, &:hover {
      .secondary {
        fill: var(--neutral300);
      }
    }
  }

  button {
    user-select: none;
    outline: none !important;
    // background: transparent !important;
  }

}

div.details-container {
  display: grid;
  // grid-template-columns: repeat(2, minmax(10rem, 1fr)) 10rem;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  grid-column-gap: 1.5rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-subtle);
  box-shadow: var(--shadow-deep);
  overflow: hidden;

  @include tablet-portrait-up {
    grid-template-columns: 1.5fr 1.15fr;
    grid-template-rows: repeat(2, minmax(2rem, 1fr));
  }

  @include tablet-landscape-up {
    grid-template-columns: 1.5fr 1.15fr 12rem;
    grid-template-rows: repeat(2, minmax(2rem, 1fr));
  }

  > div.detail-card {
    &.social {
      @include tablet-portrait-only {
        grid-row: 3;
        grid-column: 1 / span 2;
        display: flex;

        > a.button:not(:last-child) {
          margin-right: 1rem;
        }
      }

      @include tablet-landscape-up {
        grid-column: 3;
        grid-row: 1 / span 2;

        a.button {
          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .title {
      user-select: none;
      color: var(--neutral400);
      font-size: var(--font-base);
      font-weight: var(--font-semibold);
      letter-spacing: var(--letters-wide);
      line-height: 1;
      text-transform: uppercase;

      &.link {
        color: var(--primary300);
      }
    }

    div.content {
      margin-top: 0.25rem;
      color: var(--neutral700);
      font-size: var(--font-base);
      line-height: 1;

      span.no-wrap {
        white-space: nowrap;
      }
    }

    a.button {
      font-size: var(--font-sm);
      padding: 0.6rem 0;
    }
  }
}

div.info-cards {
  display: flex;
  margin: -1rem;
  padding: 1rem;
  padding-bottom: 0;
  flex-wrap: wrap;

  > :not(:last-child) {
    margin-right: 1.5rem;
  }

  > div.info-card {
    margin-bottom: 1rem;
  }

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  // grid-gap: 1rem;

  // @media (min-width: 400px) {
  //   grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  // }

  // @media (min-width: 900px) {
  //   margin: -1rem;
  //   padding: 1rem;
  //   overflow: auto;
  //   grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)) !important;
  // }

  > div.info-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.25rem;
    border-radius: var(--radius-subtle);
    // background-color: var(--neutral100);
    box-shadow: var(--shadow-deep);
    overflow: hidden;
    height: 0%;

    div.title {
      color: var(--neutral400);
      font-size: var(--font-base);
      font-weight: var(--font-semibold);
      letter-spacing: var(--letters-wide);
      line-height: 1;
      text-transform: uppercase;
    }

    div.content {
      margin-top: 0.25rem;
      color: var(--neutral700);
      font-size: var(--font-base);
      line-height: 1;
    }
  }
}

pre {
  white-space: pre-wrap;
}
</style>
