<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  // import FooterGuide from '@/components/FooterGuide/FooterGuide'
import {reqInfo} from './api'
  export default {

    async mounted () {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')
     const result = await reqInfo()
      console.log('result',result)
    },

    components: {//局部注册 只在APP组件使用
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
