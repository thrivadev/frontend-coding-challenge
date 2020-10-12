<script>
  import Logomark from '@/assets/images/logos/logomark.svg'
  import SurveyProgress from '@/components/Survey/connectors/SurveyProgress'

  export default {
    name: 'PageHeader',
    components: {
      SurveyProgress
    },
    computed: {
      logoSrc () {
        return Logomark
      }
    }
  }
</script>

<template>  
  <header class="header">
    <div class="header__container"><a class="header__logo header__logo--logomark" href="/"><img :src="logoSrc"/></a>
      <survey-progress></survey-progress>
    </div>
  </header>
</template>

<style lang="css">
  .header {
    width: 100%;
    background: #fff;
    z-index: 100;
    max-width: 1680px;
  }
  .header .header__container {
    max-width: 1680px;
    background-color: #fff;
    margin: auto;
    padding: 0 20px;
    position: relative;
    height: 62px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7f1;
    z-index: 100;
  }
  @media (min-width: 768px) {
    .header .header__container {
      padding: 0 30px;
      border-bottom: none;
    }
  }
  .header .header__container .header__logo {
    height: 30px;
  }
  .header .header__container .header__logo img {
    height: 100%;
  }
  .header .header__container .header__logo--full {
    display: none;
  }
  @media (min-width: 768px) {
    .header {
      position: fixed;
      top: 0;
      border-bottom: 1px solid #e5e7f1;
    }
  }

</style>
