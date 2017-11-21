<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'
export default {
  name: 'app',
  components: {
    PageFooter: PageFooter,
    PageHeader: PageHeader
  }
}
</script>

<style lang="scss">
@import 'assets/scss/common.scss';

#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bg-color;
  font-size: 14px;
}
</style>
