<template>
  <router-view/>
</template>

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
@mixin limeGreenSupporting {
  --green050: hsl(83, 88%, 94%);
  --green100: hsl(84, 77%, 86%);
  --green200: hsl(83, 68%, 74%);
  --green300: hsl(83, 63%, 61%);
  --green400: hsl(83, 55%, 52%);
  --green500: hsl(83, 64%, 42%);
  --green600: hsl(83, 70%, 34%);
  --green700: hsl(83, 74%, 27%);
  --green800: hsl(81, 78%, 21%);
  --green900: hsl(81, 86%, 14%);
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
  @include limeGreenSupporting;
  @include coolNeutral;
  // --bg-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23149199' fill-opacity='0.2'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  // Typography
  --font-stack: "Proxima", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-normal: 400;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
  --font-xs: 0.70rem;
  --font-sm: 0.8rem;
  --font-base: 1rem;
  --font-md: 1.15rem;
  --font-lg: 1.25rem;
  --letters-spread: 0.025rem;
  --letters-wide: 0.05rem;
  // --font-lg: 1.5rem;
  --font-xl: 2rem;
  --font-2xl: 5rem;
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

body, input {
  font-family: var(--font-stack);
}

body * {
  box-sizing: border-box;
}

body > section:not(#hero) {
  box-sizing: content-box;
}

h1 {
  margin-bottom: 1.75rem;
  color: var(--neutral900);
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
}

h3 {
  margin-bottom: 0.75rem;
  color: var(--neutral500);
  font-size: var(--font-base);
  font-weight: var(--font-semibold);
}

table {
  box-sizing: content-box;
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--radius-rounded);
  box-shadow: var(--shadow-deep);
  overflow: hidden;

  thead {
    font-size: 0.8rem;
    text-transform: uppercase;
    background-color: var(--primary100);

    tr {
      border: none;

      &:hover {
        background-color: initial;
      }

      th {
        color: var(--primary700);
        font-weight: var(--font-semibold);
        font-size: var(--font-sm);
        letter-spacing: 0.05rem;
      }
    }
  }

  tr {
    &:not(:first-of-type) {
      border-top: 1px solid var(--neutral100);
    }

    &:hover {
      background-color: var(--neutral100);
    }

    td {
      font-weight: var(--font-semibold);
      font-size: var(--font-base);

      div.secondary {
        margin-top: 0.5rem;
        color: var(--neutral500);
        font-size: var(--font-sm);
        font-weight: var(--font-normal);
      }
    }

    td,
    th {
      padding: 1.25rem 2rem;
      text-align: left;
      vertical-align: middle;
    }
  }
}

div.badge {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  border-radius: var(--radius-rounded);
  background-color: var(--primary100);
  color: var(--primary700);
  font-size: var(--font-xs);
  font-weight: var(--font-bold);
  letter-spacing: var(--letters-wide);
  line-height: 1;
  text-transform: uppercase;
}
</style>
