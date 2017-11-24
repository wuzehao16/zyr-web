<template lang="html">
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
  class="base-application-form-sucess"
  >
    <span>这是一段信息</span>

  </el-dialog>
</template>

<script>
export default {
  props:['dialogVisible'],
  methods: {
    handleClose () {
      this.$emit('dialog-close',false)
    }
  }
}
</script>

<style lang="scss">
.base-application-form-sucess{
  background: url(../../assets/img/apply_success.png) center no-repeat;
  .el-dialog{
    display: none;
  }
}
</style>
