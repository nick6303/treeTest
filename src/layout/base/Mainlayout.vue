<template lang="pug">
.HelloWorld
  .scrollBox(ref="scrollBox" @mousemove="mousemove")
    .content(ref="content" :style="{left: `-${left}px`}")
      canvas
      Provider
      WCG
      WAF
      VPN
      Checker
      OaNetwork
      Protection
</template>

<script>
import { onMounted, ref } from 'vue'
import Provider from '@v/pages/provider'
import WCG from '@v/pages/WCG'
import WAF from '@v/pages/WAF'
import VPN from '@v/pages/VPN'
import Checker from '@v/pages/checker'
import OaNetwork from '@v/pages/OaNetwork'
import Protection from '@v/pages/protection'

export default {
  name: 'HelloWorld',
  components: {
    Provider,
    WCG,
    WAF,
    VPN,
    Checker,
    OaNetwork,
    Protection,
  },
  props: {
    msg: String,
  },
  setup() {
    const scrollBox = ref(null)
    const content = ref(null)
    const left = ref(0)
    const mousemove = (evt) => {
      const x = evt.clientX
      const boxLeft = scrollBox.value.getBoundingClientRect().left
      const boxWidth = scrollBox.value.offsetWidth
      const point = x - boxLeft
      const contentWidth = content.value.offsetWidth

      const radio = point / boxWidth
      const overflow = contentWidth - boxWidth
      // scrollBox.value.scrollTo(overflow * radio, scrollBox.value.scrollTop)
      left.value = overflow * radio
    }

    const getAllFigure = () => {
      const figures = document.querySelectorAll('figure')
      const temps = []
      figures.forEach((item) => {
        const width = item.offsetWidth
        const height = item.offsetHeight
        const left = item.offsetLeft + item.parentNode.offsetLeft
        const top = item.offsetTop + item.parentNode.offsetTop
        temps.push({ width, height, left, top })
      })
      console.log(temps)
    }

    onMounted(() => {
      getAllFigure()
    })

    return {
      mousemove,
      content,
      scrollBox,
      left,
    }
  },
}
</script>
<style lang="sass">
.el-popper
  pointer-events: none
.HelloWorld
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  .scrollBox
    width: 95%
    height: 90%
    border: 1px solid #ccc
    overflow: hidden
    position: relative
    .content
      position: absolute
      top: 0
      left: 0
      height: 100%
      display: flex
      padding: 0 50px
      transition: 0s ease 0s
      canvas
        position: absolute
        top: 0
        left: 0
        +size(100%,100%)
      .box
        height: 100%
        +flex-center
        flex-direction: column
        padding: 0 50px
        figure
          padding: 10px
          +flex-center
          cursor: pointer
          margin: 20px 0
          position: relative

          figcaption
            max-width: 160px
            text-align: center
            margin: 10px
          img
            transition: all .4s ease
            min-width: 90px
          &:hover
            img
              filter: invert(80%)
            &.off img
              filter: grayscale(100%)
</style>
