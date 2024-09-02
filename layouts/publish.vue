<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal">
        <el-menu-item>Publish</el-menu-item>
        <el-menu-item><el-link href="/publish/list">list</el-link></el-menu-item>
        <el-menu-item><el-link href="/publish/guide">guide</el-link></el-menu-item>
        <el-menu-item><el-link href="/publish/handover">handover</el-link></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.el-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: block;
  max-width: initial;
  height: auto;
  padding: 0;
  margin: 0;
  background: #ffffff;
  .el-menu--horizontal {
    .el-menu-item {
      border-bottom: none;
      &:nth-child(1) {
        height: var(--el-menu-item-height);
        margin-right: auto;
      }
    }
  }
}
.img-logo {
  width: 70px;
}
</style>
