<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    }
  }
</script>

<template>  
  <div class="progress-bar-container">
  <progress-bar :currentStep='this.$store.getters["progress/getCurrentStep"]'  :totalSteps='(this.$store.getters["progress/getAllSteps"].length -1)'></progress-bar>
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }

</style>
