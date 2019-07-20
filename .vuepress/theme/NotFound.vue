<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <img src="./blank_canvas.svg" id="notfoundavater" />
      <br />
      Page Not Found. You better <router-link to="/">Go Home</router-link>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.theme-container
  position relative
  background #eaf1f1
  height 100vh
.content__default
  margin 0
  position absolute
  top 50%
  left 50%
  margin-right -50%
  transform translate(-50%, -50%)
  h1
    text-align center
#notfoundavater
  width 250px
</style>
