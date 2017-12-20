<template lang="html">
  <div class="news-detail">
    <iframe :src="url" width="1000" scrolling="no" id="frame" ref="abc"></iframe>
  </div>

</template>

<script>
export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    setIframeHeight(iframe) {
      if (iframe) {
        const iframeWin = iframe.contentWindow
                          || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
          setTimeout(() => {
            iframe.height = iframeWin.document.documentElement.scrollHeight
                            || iframeWin.document.body.scrollHeight;
          }, 200);
        }
      }
    },
  },
  mounted() {
    this.setIframeHeight(document.getElementById('frame'));
    this.url = this.$route.query.url;
  },
};
</script>

<style lang="scss">
.news-detail{
  width: 1000px;
  margin: 0 auto;
  #frame{
    border: none;
    // height: 3000px;
  }
}
</style>
