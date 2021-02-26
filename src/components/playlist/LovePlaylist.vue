<template>
  <div class="lovePlaylist">
    <el-table
      :data="lovePlay"
      stripe
      style="width: 100%"
      :cell-style="columnStyle"
      :row-class-name="tableRowClassName"
      @row-click="playMusicList"
    >
      <el-table-column type="index" :index="indexMethod" width="70">
      </el-table-column>
      <el-table-column prop="name" label="音乐标题" width="240">
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="140">
      </el-table-column>
      <el-table-column class="name" prop="al.name" label="专辑" width="220">
      </el-table-column>
      <el-table-column prop="dt" label="时长"> </el-table-column>
    </el-table>
    <audio :src="this.songurl" ref="audio"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      songurl: "",
    };
  },
  computed: {
    lovePlay() {
      return this.$store.getters.lovePlay;
    },
    curMusic() {
      return this.lovePlay[this.index];
    },
  },
  components: {},
  methods: {
    indexMethod(index) {
      // this.curIndex = index;
      index = index + 1;
      if (index < 10) {
        return "0" + index; // 这里后面不能再+1 会变成字符串拼接
      }
      return index;
    },
    //row,  每一行上的数据 ;       column, 每一列上的数据
    //rowIndex,  行数的下标从0开始 ;   columnIndex   列数下标从0开始
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1) {
        return "color:#d3d3d3;";
      }
    },
    // 把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    async playMusicList(row) {
      this.index = row.index;
      this.$store.commit("setIndex", row.index);
    },
  },
};
</script>

<style>
.lovePlaylist {
  padding: 28px 36px;
}
.el-table th,
.el-table tr {
  background-color: #2b2b2b;
}
/*表格斑马线背景颜色*/
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #2e2e2e;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  /*表格选中颜色*/
  background-color: #333333;
}
.el-table td,
.el-table th.is-leaf {
  /*表格内容样式*/
  border: none;
  color: #a0a0a0;
}
/* 去掉表格最底部边框 */
.el-table::before {
  z-index: inherit;
}
</style>
