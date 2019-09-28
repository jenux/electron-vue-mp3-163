<template>
  <div class="top-bar">
    <el-input 
      size="mini"
      prefix-icon="el-icon-search"
      placeholder="搜索"></el-input>
    <i class="el-icon-setting"></i>
    <i class="el-icon-message"></i>
    <i class="el-icon-copy-document"></i>
  </div>
</template>

<script>
export default {
  name: 'top-bar'
}
</script>

<style lang="scss">
  @import '@/styles/var';

  .top-bar {
    display: flex;
    align-items: center;
    [class^=el-icon-] {
      color: $font_reverse_color;
      margin-left: 10px;
    }
  }
</style>
