<template>
    <div class="content">
      <p style="font-size: 16px; font-weight: bold; text-align: center;">疼痛强度(视觉模拟评分法)</p>
      <div style="position: relative; text-align: center">
        <img :src="src" alt="" style="height: 300px;" >
      </div>
    </div>

</template>

<style lang="scss" scoped>
.content {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}
</style>

<script setup>
   const src = "/static/assets/painType.png"
</script>