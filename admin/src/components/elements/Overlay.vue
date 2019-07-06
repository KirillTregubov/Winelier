<template>
  <transition name="fade">
    <div id="overlay" v-if="isOpen">
      <form class="content">
        <div class="title">
          <h1>{{ capitalize(overlayType) }} {{ capitalize(dataType) }}</h1>
          <div class="close" @click="overlayType === 'create' ? close() : submit(true)">
            <Icon name="close-circle" size="1.6" />
            <h2>Close</h2>
          </div>
        </div>

        <template v-if="dataType === 'user'">
          <InputGroup v-model.trim="$v.firstName" name="First Name" placeholder="John" autocomplete="given-name" />
          <InputGroup v-model.trim="$v.lastName" name="Last Name" placeholder="Doe" autocomplete="family-name" />

          <InputGroup v-model.trim="$v.email" name="Email" placeholder="john@company.com" type="email" autocomplete="email" />
          <InputGroup v-model.trim="$v.phone" name="Phone" placeholder="(416) 123-1234" type="tel" autocomplete="tel" />

          <InputGroup v-model.trim="$v.password" :name="overlayType === 'edit' ? 'New Password' : 'Password'" :placeholder="overlayType === 'edit' ? 'New Password' : 'Password'" type="password" autocomplete="new-password" />
          <InputGroup v-model.trim="$v.repeatPassword" name="Repeat Password" :placeholder="overlayType === 'edit' ? 'New Password' : 'Password'" type="password" autocomplete="new-password" />
          <span class="container"><a class="inline" @click="generatePassword()">Generate secure password</a></span>

          <SelectGroup :value="type" name="User Type" placeholder="Select a type" :options="typeOptions" @select="type = $event" />
          <TextAreaGroup v-show="type === 'Blog Writer'" class="full-width" name="Description" placeholder="Description of Blog Writer" @edit="description = $event" />
        </template>
        <!-- <pre>{{ $v }}</pre> -->

        <a class="button" @click="submit()"><Icon name="check" />{{ capitalize(overlayType) }}</a>
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

export default {
  name: 'overlay',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      takenEmails: [],
      phone: '',
      password: '',
      repeatPassword: '',
      type: 'Consumer',
      description: '',
      typeOptions: ['Consumer', 'Winery Manager', 'Blog Writer', 'Admin']
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
      email,
      available (email) {
        return !this.takenEmails.includes(email)
      }
    },
    phone: {
      phone (phone) {
        return /^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(phone) || phone === ''
      }
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
      window.removeEventListener('beforeunload', this.safeQuit)
      setTimeout(() => {
        this.reset()
      }, 400)
    },
    reset () {
      this.$v.$reset()
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.takenEmails = []
      this.phone = ''
      this.password = ''
      this.repeatPassword = ''
      this.type = 'Consumer'
      this.description = ''
    },
    generatePassword () {
      this.password = Array(16).fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$').map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * (x.length + 1))]).join('')
      this.repeatPassword = this.password
      this.$v.password.$touch()
      this.$v.repeatPassword.$touch()
      alert('Generated password is ' + this.password)
    },
    safeQuit (event) {
      this.submit(true)
      event.returnValue = 'Your progress will not be saved. Continue using dashboard?'
    },
    submit (isClosing) {
      if (this.overlayType === 'create') {
        // show which inputs are invalid
        if (this.$v.$invalid) {
          this.$v.$touch()
        } else {
          // create new user
          let obj = {
            table: 'users',
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            phone: this.phone === '' ? null : this.phone,
            password: this.password,
            type: this.type,
            description: this.description === '' ? null : this.description
          }
          // submit
          Api.createRow(obj).then((response) => {
            if (response.data.status === 'success') {
              this.close()
              alert('User created successfully.')
            } else if (response.data.status === 'email') {
              this.takenEmails.push(this.email)
            } else {
              console.log(response)
            }
          })
        }
      } else if (this.overlayType === 'edit') {
        // create new values
        let obj
        if (isClosing) {
          obj = this.oldData
          obj.table = 'users'
        } else {
          obj = {
            table: 'users',
            id: this.oldData.id,
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            phone: this.phone === '' ? null : this.phone,
            password: this.password === '' ? null : this.password,
            type: this.type,
            description: this.description === '' ? null : this.description
          }
        }
        // submit
        Api.updateRow(obj).then((response) => {
          if (response.data.status === 'success') {
            this.close()
            alert('User updated successfully.')
          } else {
            console.log(response)
          }
        })
      }
    },
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  updated () {
    // insert existing user data
    if (this.isOpen && this.overlayType === 'edit' && this.oldData) {
      this.$v.$touch()
      this.firstName = this.oldData.first_name
      this.lastName = this.oldData.last_name
      this.email = this.oldData.email
      if (!this.oldData.phone) this.$v.phone.$reset()
      else this.phone = this.oldData.phone
      this.$v.password.$reset()
      this.$v.repeatPassword.$reset()
      this.type = this.oldData.type
      this.description = this.oldData.description === null ? '' : this.oldData.description
      // ensure data backup
      window.addEventListener('beforeunload', this.safeQuit)
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
