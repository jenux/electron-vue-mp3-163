<template>
  <div class="toplist">
    <dl>
      <dt>官方榜</dt>
      <dd>
        <el-container>
          <el-aside width="200px">
            飙升榜
          </el-aside>
          <el-main>
            <div class="rank-item" v-for="(item, index) in 5" :key="item">
              <i>{{ index + 1 }}</i>
              <div class="title">Title</div>
              <span>王培尔</span>
            </div>
          </el-main>
        </el-container>

        <el-container>
          <el-aside width="200px">
            新歌榜
          </el-aside>
          <el-main>
            <div class="rank-item" v-for="(item, index) in 5" :key="item">
              <i>{{ index + 1 }}</i>
              <div class="title">Title</div>
              <span>王培尔</span>
            </div>
          </el-main>
        </el-container>

        <el-container>
          <el-aside width="200px">
            原创榜
          </el-aside>
          <el-main>
            <div class="rank-item" v-for="(item, index) in 5" :key="item">
              <i>{{ index + 1 }}</i>
              <div class="title">Title</div>
              <span>王培尔</span>
            </div>
          </el-main>
        </el-container>
      </dd>

      <dt>全球榜</dt>
      <dd class="card-list">
        <div v-for="o in 8" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>新声榜</div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
  .rank-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px 8px 0;
    &:nth-child(odd) {
      background: #eee;
    }
    &:nth-child(-n+3) i {
      color: red;
    }
    i {
      font-style: normal;
      padding: 0 8px; 
    }
    div {
      flex: 1;
    }
  }
</style>
