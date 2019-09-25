<template>
  <div class="artist">
    <div class="artist__filter">
      <el-container>
        <el-aside width="100">语种: </el-aside>
        <el-main>
          全部 | 华语 | 欧美 | 日本 | 韩国 | 其他
        </el-main>
      </el-container>
      <el-container>
        <el-aside width="100">分类: </el-aside>
        <el-main>
          全部 | 男歌手 | 女歌手 | 乐队组合
        </el-main>
      </el-container>
      <el-container>
        <el-aside width="100">筛选: </el-aside>
        <el-main>
          热门 | A | B | C | D
        </el-main>
      </el-container>
    </div>
    <div class="inline__items">
      <div>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div>歌手排行榜</div>
      </div>
      <div v-for="o in 24" :key="o">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div>林俊杰</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .artist__filter {
    .el-main {
      padding: 0;
    }
  }
</style>
