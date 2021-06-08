<template>
  <body>
    <transition name="fade">
      <Loader v-if="isLoading" />
    </transition>
    <router-view v-show="!isLoading" @load="load()" />
  </body>
</template>

<script>
import Loader from '@/components/global/Loader.vue'

export default {
  computed: {
    isLoading () {
      return this.$store.getters.loadingStatus
    }
  },
  methods: {
    load () {
      this.$store.commit('endLoading')
    }
  },
  components: {
    Loader
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Proxima';
  font-weight: 400;
  src: url('assets/fonts/ProximaNova-Regular.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 600;
  src: url('assets/fonts/ProximaNova-Semibold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 700;
  src: url('assets/fonts/ProximaNova-Bold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 900;
  src: url('assets/fonts/ProximaNova-Black.woff') format('woff');
  font-display: swap;
}

// Mixins
@mixin redPrimary {
  --primary050: hsl(360, 100%, 97%);
  --primary100: hsl(360, 82%, 89%);
  --primary200: hsl(360, 77%, 78%);
  --primary300: hsl(360, 71%, 66%);
  --primary400: hsl(360, 64%, 55%);
  --primary500: hsl(360, 67%, 44%);
  --primary600: hsl(360, 72%, 38%);
  --primary700: hsl(360, 79%, 32%);
  --primary800: hsl(360, 85%, 25%);
  --primary900: hsl(360, 92%, 20%);
}
@mixin yellowVividSupporting {
  --yellow050: hsl(49, 100%, 96%);
  --yellow100: hsl(48, 100%, 88%);
  --yellow200: hsl(48, 95%, 76%);
  --yellow300: hsl(48, 94%, 68%);
  --yellow400: hsl(44, 92%, 63%);
  --yellow500: hsl(42, 87%, 55%);
  --yellow600: hsl(36, 77%, 49%);
  --yellow700: hsl(29, 80%, 44%);
  --yellow800: hsl(22, 82%, 39%);
  --yellow900: hsl(15, 86%, 30%);
}
@mixin coolNeutral {
  --neutral050: hsl(0, 100%, 100%);//hsl(216, 33%, 97%);
  --neutral100: hsl(214, 15%, 91%);
  --neutral200: hsl(210, 16%, 82%);
  --neutral300: hsl(211, 13%, 65%);
  --neutral400: hsl(211, 10%, 53%);
  --neutral500: hsl(211, 12%, 43%);
  --neutral600: hsl(209, 14%, 37%);
  --neutral700: hsl(209, 18%, 30%);
  --neutral800: hsl(209, 20%, 25%);
  --neutral900: hsl(210, 24%, 16%);
}

/* Variables */
:root {
  // Colours
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 100%, 100%);
  @include redPrimary;
  @include yellowVividSupporting;
  @include coolNeutral;
  // --bg-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23149199' fill-opacity='0.2'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  // Typography
  --font-stack: "Proxima", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-normal: 400;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
  --font-xs: 0.6rem;
  --font-sm: 0.9rem;
  --font-base: 1rem;
  --font-md: 1.05rem;
  --font-lg: 1.25rem;
  --font-xl: 2rem;
  --font-2xl: 3rem;
  --letters-spread: 0.025rem;
  --letters-wide: 0.05rem;
  // Borders and Shadows
  --radius-subtle: 0.25rem;
  --radius-rounded: 0.5rem;
  --radius-round: 50%;
  --shadow-inset: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  --shadow-sm: 0 4px 6px hsla(0, 0%, 0%, 0.1);
  --shadow-md: 0 5px 15px hsla(0, 0%, 0%, 0.2);
  --shadow-lg: 0 10px 24px hsla(0, 0%, 0%, 0.2);
  --shadow-xl: 0 15px 35px hsla(0, 0%, 0%, 0.2);
  --shadow-deep: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-deep-sm: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-deep-md: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-deep-lg: 0 15px 25px rgba(0, 0, 0, 0.15),
    0 5px 10px rgba(0, 0, 0, 0.05);
  --shadow-deep-xl: 0 20px 40px rgba(0, 0, 0, 0.2);

  // Sizing
  --max-width: 1200px;

  // Set Defaults
  color: var(--neutral900);
  background-color: var(--neutral050);
}

@include tablet-portrait-up {
  :root {
    --font-xs: 0.65rem;
    --font-sm: 0.8rem;
    --font-base: 1rem;
    --font-md: 1.1rem;
    --font-lg: 1.3rem;
    --font-xl: 2rem;
    --font-2xl: 4rem;
  }
}

@include desktop-up {
  :root {
    --font-md: 1.15rem;
    --font-lg: 1.4rem;
  }
}

@media (max-width: 700px), (max-height: 700px) {
  :root {
    --font-2xl: 2.35rem;
  }
}

body, input {
  font-family: var(--font-stack);
}

// Webkit browsers only
@media screen and (-webkit-min-device-pixel-ratio:0) {
  body {
    overscroll-behavior: none;
  }
}

body {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

body * {
  box-sizing: border-box;
}

body section:not(#hero) {
  box-sizing: content-box;
}

section#content {
  padding-top: 2.5rem;

  h1 {
    user-select: none;
  }

  > div:not(:last-child) {
    margin-bottom: 3.5rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.scale-up-enter-active, .scale-up-leave-active {
  // transition: opacity 0.5s;
  // transition-delay: 0.2s;
  animation: scale-up-ver-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay: 0.25s;
}

.scale-up-enter, .scale-up-leave-to {
  opacity: 0;
}

@keyframes scale-up-ver-center {
  0% {
            transform: scaleY(0.4);
            opacity: 0;
  }
  100% {
            transform: scaleY(1);
            opacity: 100;
  }
}

// .slide-down-enter-active {
//   animation: slide-down 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
// }

// .slide-down-leave-active {
//   animation: slide-up 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
// }

// @keyframes slide-down {
//   0% {
//     transform: translateY(-20px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// @keyframes slide-up {
//   0% {
//     transform: translateY(0);
//     opacity: 1;
//   }
//   100% {
//     transform: translateY(-20px);
//     opacity: 0;
//   }
// }

h1 {
  margin-bottom: 1rem;
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

a.button {
  margin: 0.5rem 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  // box-shadow: var(--shadow-deep-sm);
  border-radius: var(--radius-subtle);
  background-color: var(--neutral050);
  color: var(--neutral900);
  font-size: var(--font-base);
  font-weight: var(--font-semibold);
  letter-spacing: var(--letters-spread);
  text-decoration: none;
  text-align: center;
  user-select: none;
  transition: opacity 0.2s ease; // color etc?

  &:focus, &:hover {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    // transform: translateY(2px);
    // transform: scale(0.98);
  }

  &.large {
    display: flex;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  &.bg-image {
    background-color: var(--neutral100);
    padding: 0;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  &.primary {
    background-color: var(--primary500);
    color: var(--primary100);

    &:focus, &:hover {
      // background-color: var(--neutral800);
    }

    svg {
      .primary {
        fill: var(--primary300);
      }
      .secondary {
        fill: var(--primary900);
      }
    }
  }

  &.secondary {
    background-color: var(--yellow600);
    color: var(--yellow100);

    &:focus, &:hover {
      // background-color: var(--neutral800);
    }

    svg {
      .primary {
        fill: var(--yellow400);
      }
      .secondary {
        fill: var(--yellow800);
      }
    }
  }

  svg {
    margin-right: 0.5rem;
    width: 1.25rem;
    position: relative;
    z-index: 0;

    .primary {
      fill: var(--neutral500);
    }
    .secondary {
      fill: var(--neutral100);
    }
  }

  .title {
    font-size: var(--font-md);
    font-weight: var(--font-bold);
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

a.winery-card {
  user-select: none;

  div.image-container {
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  div.info-container {
    width: 100%;
    position: relative;
    padding: 0 1rem;

    div.info-inner {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
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
</style>
