<script>
  import TextInput from '@/components/Shared/TextInput.vue'

  export default {
    name: 'DobInput',
    components: {
      TextInput
    },
    props: {
      minAge: {
        type: String,
        default: 18
      },
      description: {
        type: String,
        default: null
      },
      error: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        required: false
      },
      feedback: {
        type: String,
        default: null
      }
    },
    data () {
      let values = { day: null, month: null, year: null }
      if (this.value) {
        const parsedValue = new Date(this.value)
        values = Object.assign(values, {
          day: parsedValue.getUTCDate().toString(),
          month: (parsedValue.getUTCMonth() + 1).toString(),
          year: parsedValue.getFullYear().toString()
        })
      }

      return {
        day: values.day,
        month: values.month,
        year: values.year
      }
    },
    methods: {
      handleSubmit () {
        this.$validator.validateAll()
      }
    },
    computed: {
      dob () {
        if (this.day && this.month && this.year) {
          const dob = new Date(Date.UTC(this.year, this.month - 1, this.day))
          return dob ? dob.toISOString() : undefined
        }
      },
      ageError () {
        if (this.dob) {
          const currentDate = Date.now()
          const dateOfBirth = new Date(this.dob)
          const ageDate = new Date(currentDate - dateOfBirth)
          ageDate.setDate(ageDate.getDate() - 1)
          const yearsDifference = Math.abs(ageDate.getUTCFullYear() - 1970)
          return yearsDifference < this.minAge
        } else {
          return null
        }
      }
    },
    watch: {
      // Read up about watch
      dob (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<template>  
  <div class="input input__dob" :class="{ 'error': ageError }">
    <p class="body--small input__description" v-if="description" :class="{ 'error': ageError }">{{ description }}</p>
    <div class="input__group">
      <text-input class="input__dob__day" name="day" type="number" v-model="day" placeholder="DD" :error="errors.has('day')" v-validate="'required|min_value:1|max_value:31'" maxlength="2"></text-input>
      <text-input class="input__dob__month" name="month" type="number" v-model="month" placeholder="MM" :error="errors.has('month')" v-validate="'required|min_value:1|max_value:12'" maxlength="2"></text-input>
      <text-input class="input__dob__year" name="year" type="number" v-model="year" placeholder="YYYY" v-validate="'required|min_value:1900|max_value:2020'" :error="errors.has('year')" maxlength="4"></text-input>
    </div>
    <p class="body--small input__feedback" v-if="feedback"><span>{{ feedback }}</span></p>
  </div>
</template>

<style lang="css">
  .input__dob .input__dob__day,
  .input__dob .input__dob__month {
    max-width: 65px;
    margin-right: 15px;
    margin-bottom: 0;
    padding: 0;
  }
  .input__dob .input__dob__year {
    max-width: 85px;
    margin-bottom: 0;
  }
  .input__dob .input__feedback {
    color: #fa476f;
  }
  .input__dob input[type=number]::-webkit-inner-spin-button,
  .input__dob input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

</style>
