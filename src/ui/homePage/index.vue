<template lang="pug">
  el-container.container
    side
    el-container
      el-header.headerMenu
        el-dropdown
          i(class="el-icon-setting").marginRight
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item 查看
            el-dropdown-item 新增
            el-dropdown-item 删除
        span 王小虎
      el-main
        router-view
</template>
<script>
import Side from './side.vue'

export default {
  components: {
    Side
  },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  computed: {

  },
  methods: {},
  mounted: function () {
  }
};
</script>
<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .container {
    height: 500px;
    border: 1px solid #eee;
    .aside {
      background-color: rgb(238, 241, 246);
    }
  }
  .headerMen {
    text-align: right; font-size: 12px;
    .marginRight{
      margin-right: 15px;
    }
  }

</style>
