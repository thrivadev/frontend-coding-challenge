
<script>
  import PageHeader from '@/components/Shared/PageHeader'

  export default {
    name: 'MinimalLayout',
    components: {
      PageHeader
    }
  }
</script>

<template>  
  <div class="wrapper wrapper--minimal">
    <page-header :funnelName="$route.meta.funnelName"></page-header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  body {
    background-color: #eff4f7;
  }
  .wrapper.wrapper--minimal {
    position: relative;
    margin: auto;
    max-width: 1680px;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    background-color: #f7f9fb;
    z-index: 0;
    box-shadow: 0 1px 4px 0 rgba(61,66,80,0.18);
  }
  .wrapper.wrapper--minimal .content {
    padding-top: 20px;
    height: 100%;
  }
  @media (min-width: 768px) {
    .wrapper.wrapper--minimal .content {
      padding-top: 82px;
    }
  }
</style>
