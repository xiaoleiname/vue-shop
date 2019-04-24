<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  // import FooterGuide from '@/components/FooterGuide/FooterGuide'
  export default {
    components: {//局部注册 只在APP组件使用
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
