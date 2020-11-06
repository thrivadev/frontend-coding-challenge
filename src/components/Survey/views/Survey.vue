<script>
  export default {
    name: 'Survey'
  }
</script>

<template>
  <div class="survey-questions">
    <div class="grid-container">
      <div class="grid-x grid-x-margin">
        <div class="cell small-12 medium-6 medium-offset-3">
          <div class="survey-introduction" v-if="$route.name === 'index'">
            <h1>👋 Welcome to the Thriva front-end coding challenge</h1><br/><br/>
            <p>Instructions for the challenge can be found in the Instructions folder.</p>
            <p>You can find stage one of the survey
              <router-link to="/name">here</router-link>.
            </p>
            <p>Good luck!</p>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="css">
  .survey-questions {
    padding: 60px 0 100px;
  }
  .survey-questions .question-description {
    font-weight: 400;
  }
  .survey-questions p.max-limit-reached {
    color: #fa476f;
  }
  .survey-questions .survey-input input {
    height: 60px;
  }
  .survey-questions .survey-input .input__dob,
  .survey-questions .survey-input .input__group {
    justify-content: space-between;
  }
  .survey-questions .survey-input .input__dob .input__dob__year,
  .survey-questions .survey-input .input__group .input__dob__year {
    max-width: 300px;
  }
  .survey-questions .align-center {
    text-align: center;
  }
  .survey-questions .align-right {
    text-align: right;
  }
  .survey-questions .button-container {
    margin-top: 30px;
  }
  .survey-questions button.button {
    max-width: 200px;
    width: 100%;
  }
  .survey-questions .back-button-container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .survey-questions .back-button-container .back-button {
    outline: 0;
    font-size: 14px;
    color: #3d4250;
    display: flex;
    cursor: pointer;
  }
  .survey-questions .back-button-container .back-button:before {
    content: url("/images/icons/chevron-16-grey.svg");
    transform: rotate(180deg);
    height: 14px;
    width: 14px;
    margin-top: 3px;
    margin-right: 5px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
