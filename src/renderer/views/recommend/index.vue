<template>
  <div class="recommend">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <dl>
      <dt>个性推荐 ></dt>
      <dd class="inline__items">
        <div v-for="o in 8" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>个性推荐 ></dt>
      <dd class="inline__items">
        <div v-for="o in 8" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>经典老歌 | 那些年</div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
  .recommend {
    
  }
</style>
