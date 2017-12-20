<template lang="html">
  <div class="news-detail">
    <iframe :src="url" width="1000" scrolling="no" id="frame"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  methods: {
    setIframeHeight(iframe) {
      if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
          iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
      }
    },
  },
  mounted() {
    this.setIframeHeight(document.getElementById('frame'))
    this.url = 'http://47.104.27.184' + this.$route.query.url
  },
}
</script>

<style lang="scss">
.news-detail{
  width: 1000px;
  margin: 0 auto;
  #frame{
    min-height: 800px;
    border: none;
  }
}
</style>
