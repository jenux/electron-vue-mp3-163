<template>
  <div class="radio">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    
    <nav>
      <ul>
        <li v-for="item in ['排行榜', '创作|翻唱', '3D|电子', '商业财经', '人文历史']" :key="item">
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <p>{{ item }}</p>
        </li>
      </ul>
    </nav>

    <dl>
      <dt>电台个性推荐 ></dt>
      <dd class="card-list">
        <div v-for="o in 5" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>创作|翻唱 ></dt>
      <dd class="card-list">
        <div v-for="o in 5" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>经典老歌 | 那些年</div>
        </div>
      </dd>

      <dt>3D|电子 ></dt>
      <dd class="card-list">
        <div v-for="o in 5" :key="o">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div>经典老歌 | 那些年</div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
  .radio {
    nav {
      ul {
        display: flex;
        justify-content: space-around;
      }
      li {
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        text-align: center;
      }
    }
    .inline__items {
      & > * {
        width: calc((100% - 64px) / 5);
        height: calc((100% - 64px) / 5);
        margin: 8px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
        &:nth-child(2n+1) {
          margin-left: 0
        }
        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
</style>
