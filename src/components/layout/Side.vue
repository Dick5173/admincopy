<template lang="pug">
  div.side-content
    div.appMsg
      div
        div
          img.img-cover.head-image(v-lazy="currentTenant.head_img")
        div.box
          div.nick-name.single-line {{ currentTenant.nick_name }}
    el-menu(mode="vertical", :default-active="$route.path" router)
      template(v-for!="menuItem in menus")
        el-submenu(:index="menuItem.name" v-if!="menuItem.isGroup", v-show="showSubmenu(menuItem)")
          template(slot="title") {{ menuItem.title }}
          template(v-for!="childItem in menuItem.items")
            el-menu-item(:index!="fullPath(menuItem, childItem)", v-show="showMenu(childItem)") {{ childItem.meta.title }}
        el-menu-item(v-else :index="menuItem.path", v-show="showMenu(menuItem)") {{ menuItem.meta.title }}
</template>

<script>
import { mapGetters } from 'vuex'
// import { getRolesInterNames, canUseRolesNames } from 'src/service/auth/index'

export default {
  computed: {
    menus () {
      const menus = []
      const homeRoute = this.$router.options.routes.find((item) => {
        return item.meta.menu === true
      })
      if (homeRoute) {
        let currentGroup = null
        for (let item of homeRoute.children) {
          if (!item.meta || !item.meta.showInSide) {
            continue
          }
          const currentGroupName = currentGroup ? currentGroup.name : null
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
    ...mapGetters(['currentTenant'])
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
  }
}
</script>

<style lang="scss">
  .side-content {
    background-color: #ffffff;
  }
  .appMsg {
    padding-top: 20px;
    background-color: #fff;
    width: $side-width - 10;
    text-align: center;
    padding-bottom: 25px;

    .head-image {
      width: 50px;
      height: 50px;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;
    }

    .box {
      top: 25px;
      left: 70px;
      display: inline-block;
      width: 100px;
      height: 60px;

      .nick-name {
        padding-left: 5px;
        padding-right: 5px;
        color: #303133;
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
      }
    }
  }
</style>

