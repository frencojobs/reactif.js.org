<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero" />

      <p class="description">
        {{ data.tagline || $description || "..." }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <Content custom />
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </div>
    <div class="footer">
      Copyright © 2018 <a href="https://twitter.com/frencojobs">Frenco Jobs</a>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  padding 0 2rem 0
  max-width 960px
  margin 0
  position absolute
  top 50%
  left 50%
  margin-right -50%
  transform translate(-50%, -50%)
  .hero
    text-align center
    img
      max-width 50%
      display block
      margin 3rem auto 1.5rem
      user-select none
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  div[class*="language-"]
    width fit-content
    margin auto !important
    padding 0 !important
    pre
      padding 0.5em
  .footer
    padding 2.5rem
    text-align center
    color lighten($textColor, 25%)
@media (max-width: $MQMobile)
  .home
    .hero
      img
        max-width 90%
        margin 2rem auto 1.2rem
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-width 90%
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
</style>
