<template>
  <div class="album">
    <el-tabs v-model="tabs.selected">
      <el-tab-pane label="新歌速递" name="first"></el-tab-pane>
      <el-tab-pane label="新碟上架" name="second"></el-tab-pane>
    </el-tabs>
    <div class="filter">
      <el-container>
        <el-aside width="100">全部: </el-aside>
        <el-main>
          华语 | 欧美 | 日本 | 韩国 | 其他
        </el-main>
      </el-container>
    </div>

    <el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title"
        labe="title">
      </el-table-column>
      <el-table-column
        prop="artist"
        width="100">
      </el-table-column>
      <el-table-column
        prop="album"
        width="100">
      </el-table-column>
      <el-table-column
        prop="duration"
        width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  const tableData = Array(20).fill({
    title: '这么久没见',
    artist: ['薛之谦'],
    album: '尘',
    duration: '04:55'
  })

  const userData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  export default {
    name: 'Album',
    data () {
      return {
        tabs: {
          selected: 'first'
        },
        tableData,
        userData
      }
    }
  }
</script>
