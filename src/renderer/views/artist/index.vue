<template>
  <div class="artist">
    <div class="artist__filter">
      <dl class="tags">
        <dt>语种:</dt>
        <dd>
          全部 | 华语 | 欧美 | 日本 | 韩国 | 其他
        </dd>
      </dl>
      <dl class="tags">
        <dt>分类:</dt>
        <dd>
          全部 | 男歌手 | 女歌手 | 乐队组合
        </dd>
      </dl>
      <dl class="tags">
        <dt>筛选:</dt>
        <dd>
          热门 | A | B | C | D
        </dd>
      </dl>
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
  .artist {
    
  }
</style>
