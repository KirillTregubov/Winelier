<template>
  <footer id="footer">
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
        <h3><Icon name="book-open" /> {{articles[0].title}}</h3>
        <h3><Icon name="book-open" /> {{articles[1].title}}</h3>
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
        © 2019 Winelier. All rights reserved. Privacy Policy and Terms of Use.
      </div>
      <div class="back" v-scroll-to="'#home'">
        <Icon name="arrow-thick-up" />
        Back To Top
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'

export default {
  name: 'main-footer',
  data () {
    return {
      post: ''
    }
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.$emit('loaded')
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
#footer {
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 2.5rem;
    grid-column-gap: 1rem;
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
      order: 1;

      @include big-desktop-up {
        order: initial;
      }

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
      order: 2;

      @include big-desktop-up {
        order: initial;
      }
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
</style>
