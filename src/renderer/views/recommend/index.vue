<template>
  <div class="recommend">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <dl>
      <dt>个性推荐 ></dt>
      <dd class="card-list">
        <div class="card-list__item" v-for="o in 8" :key="o">
          <div class="cover">
            <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
          </div>
          <div class="label">经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>独家放送 ></dt>
      <dd class="card-list">
        <div class="card-list__item" v-for="o in 8" :key="o">
          <div class="cover">
            <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
          </div>
          <div class="label">经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>最新音乐 ></dt>
      <dd class="card-list">
        <div class="card-list__item" v-for="o in 8" :key="o">
          <div class="cover">
            <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
          </div>
          <div class="label">经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>推荐MV ></dt>
      <dd class="card-list">
        <div class="card-list__item" v-for="o in 8" :key="o">
          <div class="cover">
            <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
          </div>
          <div class="label">经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>主播电台 ></dt>
      <dd class="card-list">
        <div class="card-list__item" v-for="o in 8" :key="o">
          <div class="cover">
            <img src="http://p2.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg" class="image">
          </div>
          <div class="label">经典老歌 | 那些年</div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
  .recommend {
    
  }
</style>
