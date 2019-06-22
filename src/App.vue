<template>
    <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: 'Proxima';
  font-weight: 400;
  src: url('/fonts/ProximaNova-Regular.woff') format('woff');
}
@font-face {
  font-family: 'Proxima';
  font-weight: 600;
  src: url('/fonts/ProximaNova-Semibold.woff') format('woff');
}
@font-face {
  font-family: 'Proxima';
  font-weight: 700;
  src: url('/fonts/ProximaNova-Bold.woff') format('woff');
}
@font-face {
  font-family: 'Proxima';
  font-weight: 900;
  src: url('/fonts/ProximaNova-Black.woff') format('woff');
}
/*@font-face {
  font-family: 'Proxima';
  font-weight: 600;
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
@font-face {
  font-family: 'Proxima';
  font-weight: 700;
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
@font-face {
  font-family: 'Proxima';
  font-weight: 800;
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}*/

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
  --font-sm: 0.85rem;
  --font-base: 1rem;
  --font-md: 1.125rem;
  --font-lg: 1.5rem;
  --font-xl: 2rem;
  --font-2xl: 4.5rem;
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
  // Set Defaults
  color: var(--neutral900);
  background-color: var(--neutral100);
}

body {
  font-family: var(--font-stack);
}

body div > * {
  box-sizing: border-box;
}

a.button {
  margin: 0.5rem 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  // box-shadow: var(--shadow-deep-sm);
  background-color: var(--primary300);
  color: var(--neutral050);
  font-weight: var(--font-semibold);
  text-decoration: none;
  border-radius: var(--radius-subtle);
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  user-select: none;
  transition: all 0.2s ease;

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

  // &.primary {
  //   background-color: var(--neutral900);
  //   color: var(--neutral050);
  //   &:focus, &:hover {
  //     background-color: var(--neutral800);
  //   }
  // }

  svg {
    margin-right: 0.25rem;
    width: 1.25rem;
    position: relative;
    z-index: 0;
    .primary {
      fill: var(--neutral900);
    }
    .secondary {
      fill: var(--neutral700);
    }
  }

  .title {
    font-size: var(--font-md);
    font-weight: var(--font-bold);
  }
}
</style>
