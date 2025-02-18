<template>
    <iframe class="iframe" :src="src"></iframe>
</template>

<script>
export default {
  setup () {
    const src='/static/assets/timeChat.html'
    return {
      src
    }
  }
}
</script>

<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

</style>
