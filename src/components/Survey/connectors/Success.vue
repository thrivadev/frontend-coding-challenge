<script>
  export default {
    name: 'Success',
    mounted () {
      this.$store.dispatch('progress/updateProgress', this.$options.name)
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<template>
  
</template>

<style lang='css'>

</style>
