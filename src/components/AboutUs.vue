<template lang="html">
  <div class="about-us">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>windows系统想问你一个问题，卢大哥是不是很美？</span>
      <span slot="footer" class="dialog-footer">
        <div v-if="v">
          <el-button class="no" v-if="v" @click="v=false">是</el-button>
          <el-button type="primary" class="no" @click="p1">不是</el-button>
        </div>
        <div v-else>
          <el-button type="primary" class="no" @click="p1" >不是</el-button>
          <el-button   @click="v=true">是</el-button>
        </div>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose">
      <span>那就是卢大哥她很丑咯？</span>
      <span slot="footer" class="dialog-footer">
        <div v-if="v">
          <el-button class="no" v-if="v" @click="v=false">不是</el-button>
          <el-button type="primary" class="no" @click="p2">是</el-button>
        </div>
        <div v-else>
          <el-button type="primary" class="no" @click="p2" >是</el-button>
          <el-button   @click="v=true">不是</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
      return {
        v:true,
        dialogVisible: true,
        dialogVisible1:false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            // alert("怎么可以关了呢!");
            // done();
             this.$message.error('想关闭，没门');
          })
          .catch(_ => {});
      },
      p1 () {
        this.dialogVisible = false
        this.dialogVisible1= true
      },
      p2 () {
        this.dialogVisible1= false
        this.$alert("真是同道中人：我也认为卢大哥很丑，不仅我认为卢大哥很丑，ios系统也认为卢大哥很丑，还有linux,Android，他们都认为她很");
      },
      pp () {

    }
    }
  };
</script>

<style lang="scss">
.about-us{
  .no:hover{
    // transform: translateX(100px);
  }
}
</style>
