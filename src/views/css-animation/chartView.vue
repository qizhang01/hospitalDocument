<template>
  <div class="hello">
    <Graphics v-if="value" :value="value"></Graphics>
    <h1 v-else>模拟接口请求数据中</h1>
  </div>
</template>

<script>
import Graphics from './temperature/graphics'
import dataModel from './data'
let PRINT_ID = 0
export default {
  name: 'HelloWorld',
  components: {
    Graphics
  },

  setup () {
    let value = dataModel
      // setTimeout(() => {
      //   value = dataModel
      // }, 1000)
    return {value}
  },
}
</script>
