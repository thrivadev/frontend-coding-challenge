<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

// Move to helper and reuse in goals
  const getSelectedDiet = (diet) => {
    return Object.fromEntries(
      Object.entries(diet).filter(([key, value]) => value.selected === true)
    )
  }

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No',
            value: 'no',
            selected: false
          },
          coeliac: {
            name: 'Coeliac',
            value: 'coeliac',
            selected: false
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat',
            value: 'lowCarbHighFat',
            selected: false
          },
          paleo: {
            name: 'Paleo',
            value: 'paleo',
            selected: false
          },
          pescatarian: {
            name: 'Pescatarian',
            value: 'pescatarian',
            selected: false
          },
          plantBased: {
            name: 'Plant-based',
            value: 'plantBased',
            selected: false
          },
          other: {
            name: 'Other',
            value: 'other',
            selected: false
          }
        }
      }
    },
    mounted () {
      this.$store.dispatch('progress/updateProgress', this.$options.name)
    },
    methods: {
      selectDiet (value, text) {
        Object.entries(this.diets).forEach(([key, value]) => {
          this.diets[value.value].selected = value.name === text
        })
      },
      submit () {
        const selectedDiet = getSelectedDiet(this.diets)
  
        this.$store.dispatch('survey/saveDiet', selectedDiet)
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button @click="selectDiet" v-for="(diet, key) in diets" :key="key" :text="diet.name" :value="diet.value" :selected="diet.selected" ></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
