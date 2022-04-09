<template>
  <router-view />
</template>

<style lang="scss">
 @import '@/assets/css/common.scss';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    color: #555;
    line-height: 2;
  }

  #app {
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    position: relative;
    
  }
</style>
