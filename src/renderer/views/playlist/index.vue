<template>
  <div class="playlist">
    <el-carousel height="200px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <dl>
      <dt>
        <el-dropdown>
          <!-- <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span> -->
          <el-button round class="el-dropdown-link">
            全部歌单
            <i class="el-icon-arrow-right el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <div style="padding: 0 15px">Dropdown content</div>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="toolbar">
          <span v-for="item in ['华语', '流行', '民谣', '电子']" :key="item">{{ item }}</span>
        </div>
      </dt>
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
  .playlist {
    
  }
</style>
