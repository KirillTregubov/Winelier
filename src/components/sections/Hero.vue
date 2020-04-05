<template>
  <section id="hero" :class="{'home': type === 'home', 'nohead': type === 'nohead', 'image': containsImage}" :style="type === 'home' ? computeImg('hero') : ''">
    <div class="content">
      <slot />
    </div>
    <div class="image" :style="computeImg(image)" v-if="containsImage"/>
  </section>
</template>

<script>
export default {
  name: 'hero',
  props: {
    type: {
      type: String
    },
    containsImage: {
      type: Boolean
    },
    image: {
      type: String
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
  }
}
</script>

<style lang="scss">
section#hero {
  overflow: hidden;
  position: relative;
  background-color: var(--neutral100);
  max-width: 100%;
  margin: 0;
  padding: 0;
  padding-bottom: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20%;

  @include tablet-portrait-up {
    padding-bottom: 5rem;
  }

  &.home {
    height: 90vh;

    // > div.content {
    //   h1 {
    //     @media (max-width: 700px), (max-height: 700px) {
    //       font-size: var(--font-xl);
    //     }
    //   }

    //   h2 {
    //     @media (max-width: 850px), (max-height: 650px) {
    //       font-size: var(--font-sm);
    //     }
    //   }
    // }
  }

  &.nohead {
    padding-top: 1rem;
  }

  &.image {
    > div.content {
      h1 {
        color: var(--neutral100);
      }

      h2 {
        color: var(--neutral300);
      }
    }
  }

  > div.image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 20%;
    // filter: blur(10px) grayscale(80%);
    // transform: scale(1.02);
    filter: saturate(60%) contrast(80%);
    background-color: var(--neutral600);
    background-blend-mode: multiply;
  }

  > div.content {
    position: relative;
    z-index: 1;
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

      // @media (max-width: 700px), (max-height: 700px) {
      //   font-size: var(--font-xl);
      // }

      .pronounced {
        font-weight: var(--font-black);
      }
    }

    h2 {
      color: var(--neutral600);
      font-size: var(--font-md);
      font-weight: var(--font-semibold);

      @media (max-width: 850px), (max-height: 650px) {
        font-size: var(--font-base);
      }
    }
  }
}
</style>
