<template lang="html">
  <div class="application">
    <base-application-form>
  </base-application-form>
  </div>
</template>

<script>
import BaseApplicationForm from '@/components/common/BaseApplicationForm'
export default {
  components: {
    BaseApplicationForm
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';
.application{
  height: 463px;
  width: 399px;
  background: url(../../assets/img/application.png);

}
</style>
