<template>
  <transition name="overlay">
    <div id="overlay" v-show="isOpen">
      <form class="content">
        <div class="title">
          <h1>{{ capitalize(overlayType) }} {{ capitalize(dataType) }}</h1>
          <div class="close" @click="close()">
            <Icon name="close-circle" size="1.6" />
            <h2>Close</h2>
          </div>
        </div>
        <InputGroup v-model.trim="$v.firstName" name="First Name" placeholder="John" autocomplete="given-name" />
        <InputGroup v-model.trim="$v.lastName" name="Last Name" placeholder="Doe" autocomplete="family-name" />

        <InputGroup v-model.trim="$v.email" name="Email" placeholder="john@company.com" type="email" autocomplete="email" />
        <InputGroup v-model.trim="$v.phone" name="Phone" placeholder="(416) 123-1234" type="tel" autocomplete="tel" />

        <InputGroup v-model.trim="$v.password" name="Password" placeholder="Password" type="password" autocomplete="new-password" />
        <InputGroup v-model.trim="$v.repeatPassword" name="Repeat Password" placeholder="Password" type="password" autocomplete="new-password" />
        <span class="container"><a class="inline" @click="generatePassword()">Generate secure password</a></span>
        <!-- <pre>{{ $v.password }} {{ $v.repeatPassword }}</pre> -->

        <SelectGroup :value="type" name="User Type" placeholder="Select a type" :options="typeOptions" :error="computeTypeError" @select="type = $event" />
        <TextAreaGroup v-show="type === 'Blog Writer'" class="full-width" name="Description" placeholder="Description of Blog Writer" @edit="description = $event" />

        <a class="button" @click="submit()"><Icon name="add-circle" />Create</a>
      </form>
    </div>
  </transition>
</template>

<script>
import Api from '@/services/Api.js'
import Icon from '@/components/icons/Icon.vue'
import InputGroup from '@/components/elements/InputGroup.vue'
import SelectGroup from '@/components/elements/SelectGroup.vue'
import TextAreaGroup from '@/components/elements/TextAreaGroup.vue'
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
const isPhone = (value) => /^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(value)

export default {
  name: 'overlay',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      type: '',
      typeOptions: ['Consumer', 'Winery Manager', 'Blog Writer', 'Admin'],
      typeError: false,
      description: ''
    }
  },
  computed: {
    computeTypeError () {
      return this.typeError && !this.type
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      phone: isPhone
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  props: {
    overlayType: {
      type: String,
      default: 'create'
    },
    dataType: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    oldData: {
      type: Object,
      default: null
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    generatePassword () {
      this.password = Array(16).fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$').map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * (x.length + 1))]).join('')
      this.repeatPassword = this.password
    },
    submit () {
      if (this.overlayType === 'create') {
        console.log('create')
      } else if (this.overlayType === 'edit') {
        console.log('edit')
        let obj = {
          id: this.oldData.id,
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          phone: this.phone === '' ? null : this.phone,
          // password have to provide a replace option
          type: this.type,
          description: this.description === '' ? null : this.description
        }
        console.log(obj)
        Api.editUser(obj).then((response) => {
          if (response.data.status === 'success') {
            console.log(response)
          } else {
            console.log(response)
          }
        })
      }

      this.close()
    }
  },
  updated () {
    if (this.isOpen && this.overlayType === 'edit') {
      if (this.oldData) {
        this.firstName = this.oldData.first_name
        this.lastName = this.oldData.last_name
        this.email = this.oldData.email
        this.phone = this.oldData.phone === null ? '' : this.oldData.phone
        this.type = this.oldData.type
        this.description = this.oldData.description === null ? '' : this.oldData.description
      } else throw new Error('Error loading edit overlay!')
    }
  },
  components: {
    Icon,
    InputGroup,
    SelectGroup,
    TextAreaGroup
  }
}
</script>

<style lang="scss">
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.5s
}

.overlay-enter,
.overlay-leave-to {
  opacity: 0
}

#overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--neutral900);
    opacity: 0.6;
  }

  form.content {
    padding: 1.5rem;
    border-radius: var(--radius-subtle);
    z-index: 2;
    background-color: var(--neutral050);
    box-shadow: var(--shadow-deep-sm);
    width: 40vw;
    max-width: 600px;
    max-height: 85vh;
    overflow: auto;
    // animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    .title {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 2rem;

      div.close {
        display: flex;
        align-items: center;
        padding: 0.3rem 0.5rem;
        border-radius: var(--radius-subtle);
        user-select: none;

        &:hover {
          background-color: var(--neutral200);
          box-shadow: var(--shadow-inset);

          svg {
            .primary {
              fill: var(--neutral300);
            }

            .secondary {
              fill: var(--neutral900);
            }
          }
        }

        svg {
          width: 1.15rem;
          margin: 0 0.25rem 0 0;

          .primary {
            fill: var(--neutral200);
          }

          .secondary {
            fill: var(--neutral800);
          }
        }

        h2 {
          margin: 0;
          color: var(--neutral700);
          font-size: var(--font-md);
          font-weight: var(--font-bold);
        }
      }

      h1 {
        margin: 0;
      }
    }

    div.input-group:not(.full-width) {
      display: inline-block;
      width: calc(50% - 0.5rem);
      margin-bottom: 0.25rem;
      vertical-align: top;

      &:not(:nth-child(-1n+3)) {
        margin-top: 0.5rem;
      }

      &:nth-of-type(even) {
        margin-right: 0.5rem;
      }
    }

    div.select-group {
      margin-bottom: 0.25rem;
    }

    span.container {
      display: block;
      margin-bottom: 0.75rem;
    }
  }

  a.button {
    margin-top: 1rem;
    width: 100%;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: inherit;
  }
}
</style>
