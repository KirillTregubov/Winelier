<template>
  <div class="input-group">
    <label>{{ name }}</label>
    <textarea :value="value" :placeholder="placeholder" @input="change($event.target.value)" :class="value !== '' ? 'correct' : ''" />
    <h5 class="error" v-show="value.$error">Error</h5>
  </div>
</template>

<script>
export default {
  name: 'text-area-group',
  data () {
    return {
      value: ''
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    change (value) {
      this.$emit('edit', value)
      this.value = value
    }
  }
}
</script>

<style lang="scss">
textarea {
  min-height: 7.5rem;
  border: 1px solid var(--neutral300);
  background-color: var(--neutral200);
  box-shadow: var(--shadow);
  border-radius: var(--radius-subtle);
  padding: 0.5rem;
  width: 100%;
  outline: none;
  margin: 0 0 0.5rem 0;
  line-height: 1;
  transition: all ease 0.5s;
  font-size: var(--font-base);
  color: var(--neutral900);
  resize: none;

  &::placeholder {
    color: var(--neutral400);
    opacity: 1;
  }

  &:hover {
    background-color: var(--neutral100);
  }

  &.correct {
    color: var(--green900);
    border-color: var(--green500);
    background-color: var(--green100);

    &:hover {
      background-color: var(--green050);
    }
  }
}
</style>
