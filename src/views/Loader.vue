<template>
  <div id="loader">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style lang="scss">
div#loader {
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--neutral100);

  > div {
    display: block;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--primary500);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: spinner 1.2s linear infinite;
  }
}
@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
