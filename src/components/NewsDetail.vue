<template lang="html">
  <div class="news-detail">
    <iframe :src="url" width="1000" height="1000"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  mounted() {
    console.log(this.$route.params.url)
    this.url = 'http://47.104.27.184' + this.$route.params.url
  },
}
</script>

<style lang="scss">
.news-detail{
  width: 1000px;
  margin: 0 auto;
}
</style>
