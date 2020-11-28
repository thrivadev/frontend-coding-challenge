<script>
  import ThvButton from '@/components/Shared/Button'
  import DobInput from '@/components/Shared/DobInput'

  const ConvertMonthToStartAtZero = (month) => (parseInt(month) - 1).toString()

  export default {
    name: 'Dob',
    components: {
      DobInput,
      ThvButton
    },
    mounted () {
      this.$store.dispatch('progress/updateProgress', this.$options.name)
    },
    computed: {
      disableNext () {
        let under18 = this.$refs.DobInput && this.$refs.DobInput.ageError
        return this.dob === '' || this.errors.items.length > 0 || under18 === true
      },
      feedback () {
        if (this.$refs.DobInput && this.$refs.DobInput.ageError) {
          return 'You must be over 18'
        }
        return this.errors.items.length > 0 ? this.errors.items[0].msg : ''
      }
    },
    methods: {
      submit () {
        this.$refs.DobInput.handleSubmit()
        // Is using refs good practice here
        const date = new Date(
          this.$refs.DobInput.$data.year,
          ConvertMonthToStartAtZero(this.$refs.DobInput.$data.month),
          this.$refs.DobInput.$data.day
        )
        this.$validator.reset()
        this.$validator.validate().then(result => {
          if (result && !this.feedback) {
            this.$store.dispatch('survey/saveDob', date.toISOString())
            this.$store.dispatch('survey/sendToApi')
              .then(response => {
                this.$router.push('/success')
              })
              .catch((error) => {
                // Should display to user any errors they could fix, e.g. invalid name
                console.error(error.response.data.error)
              })
          }
        })
      },
      back () {
        this.$router.push('/diet')
      }
    }
  }
</script>

<template>  
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__dob align-center">
        <h1>How old are you?</h1>
        <div class="spacer sp__top--sm"></div>
        <p class="body--large question-description">This helps us recommend the best test for you. We know it's a bit forward but our lips are sealed!</p>
        <div class="spacer sp__top--sm"></div>
        <dob-input class="align-center survey-input" ref="DobInput" v-validate="'required'" data-vv-value-path="dob" name="dob" :error="errors.has('dob')" minAge="18" :feedback="feedback" @keyup.enter="submit" label=""></dob-input>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit" :disabled='disableNext'>Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
  .survey-questions__dob .input__dob .input__group .input__dob__day,
  .survey-questions__dob .input__dob .input__group .input__dob__month,
  .survey-questions__dob .input__dob .input__group .input__dob__year {
    max-width: 300px;
  }
  .survey-questions__dob .input__feedback {
    text-align: left;
  }

</style>
