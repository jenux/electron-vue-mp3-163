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
    <div class="card-list">
      <div class="card-list__item artist-item">
        <!-- <div class="cover"
          v-lazy-container="{ selector: 'img'}">
          <img 
            :data-src="item.coverImgUrl" 
            :data-loading="'/static/images/default_avatar.jpg'"
            class="cover" />
          <div class="creator">
            <i class="el-icon-user" />
            {{ item.creator.nickname }}
          </div>
          <div class="count">
            <i class="el-icon-caret-right" />
            {{ item.playCount }}
          </div>
        </div> -->
        <div class="cover">
          <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
        </div>
        <div class="label">歌手排行榜</div>
      </div>
      <div v-for="o in 24" :key="o"
        class="card-list__item artist-item"> 
        <div class="cover"
          v-lazy-container="{ selector: 'img'}">
          <img 
            data-src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" 
            :data-loading="'/static/images/default_avatar.jpg'"
            class="cover">
        </div>
        <div class="label">林俊杰</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .artist {
    
  }
</style>
