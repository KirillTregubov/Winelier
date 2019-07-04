<template>
  <div class="input-group">
    <label>{{ name }}</label>
    <input :type="type" v-model.trim="value.$model" :class="status" :placeholder="placeholder" :autocomplete="autocomplete" />
    <h5 class="error" v-show="value.$error">{{ error }}</h5>
  </div>
</template>

<script>
export default {
  name: 'input-group',
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    }
  },
  computed: {
    status () {
      let obj = {
        error: this.value.$error,
        correct: this.value.$dirty && !this.value.$error
      }
      if (!this.value.$invalid && this.value.$model !== '') obj.correct = true
      else if (this.value.$dirty && this.value.$model === '') {
        obj.correct = true
        obj.error = false
      }
      return obj
    },
    error () {
      if (this.value.required === false) return this.name + ' is required.'
      else if (this.value.minLength === false) return this.name + ' must have at least ' + this.value.$params.minLength.min + ' letters.'
      else if (this.value.email === false) return 'Must be a valid email.'
      else if (this.value.phone === false && this.value.$model !== '') return 'Must be a valid phone number.'
      else if (this.value.sameAsPassword === false) return 'Passwords must match.'
      else return ''
    }
  }
}
</script>

<style lang="scss">
input {
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
  color: var(--neutral900);

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

  &.error {
    color: var(--primary900);
    border-color: var(--primary300);
    background-color: var(--primary100);

    &::placeholder {
      color: var(--primary400);
      opacity: 1;
    }

    &:hover {
      background-color: var(--primary050);
    }
  }
}
</style>
