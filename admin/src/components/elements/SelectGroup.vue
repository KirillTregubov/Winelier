<template>
  <div class="select-group">
    <label>{{ name }}</label>
    <select :value="value" :class="{correct: value !== '', error: error === true}" @change="change($event.target.value)" >
      <option disabled value="">{{ placeholder }}</option>
      <option :value="option" v-for="option in options" :key="option.id">{{ option }}</option>
    </select>
    <h5 class="error" v-show="error">Type is required.</h5>
  </div>
</template>

<script>
export default {
  name: 'select-group',
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change (value) {
      this.$emit('select', value)
    }
  }
}
</script>

<style lang="scss">
select {
  height: 2.5rem;
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
  color: var(--neutral500);

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

  &.error {
    color: var(--primary900);
    border-color: var(--primary300);
    background-color: var(--primary100);

    &:hover {
      background-color: var(--primary050);
    }
  }

  option {
    font-size: var(--font-base);
  }
}
</style>
