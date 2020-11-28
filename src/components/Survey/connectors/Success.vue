<script>
import ThvButton from '@/components/Shared/Button'

export default {
  name: 'Success',
  mounted () {
    this.$store.dispatch('progress/updateProgress', this.$options.name)
  },
  components: {
    ThvButton
  },
  methods: {
    submit () {
      this.$router.push('/name')
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
      <div class="align-center">
        <img src='../../../assets/images/thrivaling.png' height='150px' width="150px" alt=''>
        <div class="spacer sp__top--xs text"></div>
        <h1>All done!</h1>
        <div class="spacer sp__bottom--xs"></div>
        <p>Thank you for completing the survey. The following results have been submitted:</p>
        <div class="spacer sp__bottom--sm"></div>
        <div class="results">
          <div>
            <dl>
              <dt>Name</dt>
              <dd>{{ this.$store.getters["survey/getName"] }}</dd>
              <dt>Goals</dt>
              <dd>{{ this.$store.getters["survey/getFormattedGoals"] }}</dd>
              <dt>Diet</dt>
              <dd>{{ this.$store.getters["survey/getDiet"] }}</dd>
              <dt>DOB</dt>
              <dd>{{ this.$store.getters["survey/getFormattedDob"] }}</dd>
            </dl>
          </div>
          <div class="cell auto align-center">
            <thv-button element="button" size="large" @click="submit" >Start over</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
.results {
  box-shadow: 0px 6px 20px 0 rgb(61, 66, 80, 0.18);
  padding: 10px 30px 30px 30px;
}
dl {
  text-align: left;
}
dt {
  line-height: 21px;
  font-size: 14px;
  color: #99A2BF;
}
dd {
  margin: 0;
  padding-bottom: 20px;
  line-height: 24px;
  font-size: 16px;
}

</style>
