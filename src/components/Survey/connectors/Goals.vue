<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'
  import { getSelectedItems } from '../../../helpers/helpers'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy',
            value: 'improveEnergy',
            selected: false
          },
          improveFitness: {
            name: 'Fitness',
            value: 'improveFitness',
            selected: false
          },
          improveLongTermHealth: {
            name: 'Long-term health',
            value: 'improveLongTermHealth',
            selected: false
          },
          improveMood: {
            name: 'Mood',
            value: 'improveMood',
            selected: false
          },
          improveSleep: {
            name: 'Sleep',
            value: 'improveSleep',
            selected: false
          },
          improveWeight: {
            name: 'Weight',
            value: 'improveWeight',
            selected: false
          }
        }
      }
    },
    mounted () {
      this.$store.dispatch('progress/updateProgress', this.$options.name)
    },
    methods: {
      toggleGoal (value, text) {
        if (this.goals[value].name === text) {
          this.goals[value].selected = this.goals[value].selected
            ? !this.goals[value].selected
            : Object.keys(getSelectedItems(this.goals)).length < 4
              ? !this.goals[value].selected
              : this.goals[value].selected
        }
      },
      submit () {
        const selectedGoals = getSelectedItems(this.goals)
  
        this.$store.dispatch('survey/saveGoals', selectedGoals)
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ this.$store.getters["survey/getName"] }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button @click="toggleGoal" v-for="(goal, key) in goals" :key="key" :text="goal.name" :value="goal.value" :selected="goal.selected" ></check-button>
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
