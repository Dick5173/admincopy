<template lang="pug">
    el-aside.aside
      el-menu(mode="vertical", :default-active="$route.path" router)
        template(v-for!="menuItem in menus")
          el-submenu(:index="menuItem.name" v-if!="menuItem.isGroup", v-show="showSubmenu(menuItem)")
            template(slot="title") {{ menuItem.title }}
            template(v-for!="childItem in menuItem.items")
              el-menu-item(:index!="fullPath(menuItem, childItem)", v-show="showMenu(childItem)") {{ childItem.meta.title }}
          el-menu-item(v-else :index="menuItem.path", v-show="showMenu(menuItem)") {{ menuItem.meta.title }}
</template>
<script>
export default {
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
    menus () {
      const menus = []
      const homeRoute = this.$router.options.routes.find((item) => {
        return item.meta.menu === true
      })
      if (homeRoute) {
        let currentGroup = null
        for (let item of homeRoute.children) {
          // console.log('!item.meta', !item.meta)
          // console.log('!item.meta.showInSide', !item.meta.showInSide)
          if (!item.meta || !item.meta.showInSide) {
            continue
          }
          const currentGroupName = currentGroup ? currentGroup.name : null
          // console.log('!item.meta.group', !item.meta.group)
          // console.log(currentGroupName)
          if (!item.meta.group && currentGroupName) {
            currentGroup = null
          } else {
            if (item.meta.group && item.meta.group !== currentGroupName) {
              currentGroup = homeRoute.meta.groups.find(groupItem => {
                return groupItem.name === item.meta.group
              })
              currentGroup.items = []
              currentGroup.isGroup = true
              menus.push(currentGroup)
            }
          }
          if (!currentGroup) {
            menus.push(item)
          } else {
            currentGroup.items.push(item)
          }
        }
      }
      return menus
    },
  },
  methods: {
    showSubmenu (item) {
      // if (this.isSuper) {
      //   return true
      // }
      // const interNames = getRolesInterNames(this.sysRoles, this.allRoles)
      // const canUseInterNames = canUseRolesNames(interNames, item.items)
      // return canUseInterNames.length > 0
      return true
    },
    showMenu (item) {
      // if (this.isSuper) {
      //   return true
      // }
      // const interNames = getRolesInterNames(this.sysRoles, this.allRoles)
      // let index = this.R.findIndex(name => name === item.meta.title)(interNames)
      // return index !== -1
      return true
    },
    fullPath (menuItem, childItem) {
      return `${menuItem.path}${childItem.path}`
    }
  },
  mounted: function () {
    // console.log(this.$router.options.routes[0])
    // console.log(this.menus)
  }
};
</script>
<style scoped lang="scss">
  .el-aside {
    color: #333;
  }
</style>
