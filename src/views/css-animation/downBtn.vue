<template>
  <div id="my_dataviz" style="width: 980px"></div>
</template>

<script>
import { init } from './temperature-chart/line'
import data from './temperature-chart/datas'
export default {
  props: {
    value: Object
  },
  data () {
    return {}
  },
  mounted () {
    init(data)
    setTimeout(() => {
      this.$emit('done')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>