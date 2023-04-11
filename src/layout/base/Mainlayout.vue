<template lang="pug">
.HelloWorld
  .scrollBox(ref="scrollBox" @mousemove="mousemove")
    .content(ref="content" :style="{left: `-${left}px`}")
      canvas(ref="canvas")
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
import { TimelineMax, Linear, Sine, TweenLite } from 'gsap'

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
    const canvas = ref(null)
    const canvasWidth = ref(0)
    const canvasHeight = ref(0)
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
        let left, top
        if (item.parentNode.classList.contains('box')) {
          left = item.offsetLeft + item.parentNode.offsetLeft
          top = item.offsetTop + item.parentNode.offsetTop
        } else {
          left =
            item.offsetLeft +
            item.parentNode.offsetLeft +
            item.parentNode.parentNode.offsetLeft
          top =
            item.offsetTop +
            item.parentNode.offsetTop +
            item.parentNode.parentNode.offsetTop
        }
        temps.push({
          x: left + width / 2,
          y: top + height / 2,
          name: item.dataset.name,
          target: item.dataset.target,
          rate: item.dataset.rate ?? 50,
        })
      })
      createCanvas(temps)
    }

    let particles = []

    const createCanvas = (temps) => {
      canvas.value.width = content.value.offsetWidth
      canvas.value.height = content.value.offsetHeight
      const ctx = canvas.value.getContext('2d')
      for (const item of temps) {
        const target = temps.find((val) => val.name === item.target)
        if (target) {
          ctx.beginPath()
          ctx.moveTo(item.x, item.y)
          ctx.lineTo(target.x, target.y)
          ctx.strokeStyle = '#fff'
          ctx.background = '#fff'
          ctx.stroke()
          for (let i = 0; i < item.rate * 2; i++) {
            particles.push(
              new Particle([
                { x: item.x, y: item.y },
                { x: target.x, y: target.y },
              ])
            )
          }
        }
      }
      function render() {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

        for (let particle of particles) {
          particle.draw(ctx)
        }
      }
      TweenLite.ticker.addEventListener('tick', render)
    }

    function random(min, max) {
      if (max == null) {
        max = min
        min = 0
      }
      if (min > max) {
        var tmp = min
        min = max
        max = tmp
      }
      return min + (max - min) * Math.random()
    }

    function randomInt(min, max) {
      if (max == null) {
        max = min
        min = 0
      }
      if (min > max) {
        var tmp = min
        min = max
        max = tmp
      }
      return Math.floor(min + (max - min + 1) * Math.random())
    }

    class Particle {
      constructor(positions) {
        this.x = positions[0].x
        this.y = positions[0].y

        this.width = randomInt(2, 3)
        this.height = this.width
        this.halfWidth = this.width / 2
        this.halfHeight = this.height / 2

        this.offset = randomInt(1, 3)
        this.scale = 1
        this.rotation = 0
        this.alpha = random(0.5, 1)
        this.fillStyle = 'rgb(255, 255, 255)'

        const duration1 = random(3, 5)
        const duration2 = random(1, 6)
        const minScale = random(0.3, 0.5)

        this.pathAnimation = new TimelineMax({ repeat: -1 })
        for (let i = 0; i < positions.length - 1; i++) {
          this.pathAnimation.to(this, duration1, {
            x: positions[i + 1].x,
            y: positions[i + 1].y,
            ease: Linear.easeNone,
          })
        }

        this.rotationAnimation = new TimelineMax({ repeat: -1 }).to(
          this,
          duration2,
          { rotation: Math.PI * 2, ease: Linear.easeNone }
        )

        this.scaleAnimation = new TimelineMax({ repeat: -1, yoyo: true }).to(
          this,
          duration2 / 2,
          { scale: minScale, ease: Sine.easeInOut }
        )

        this.pathAnimation.time(random(this.pathAnimation.duration()))
        this.rotationAnimation.time(random(this.rotationAnimation.duration()))
        this.scaleAnimation.time(this.rotationAnimation.time())
      }

      draw(ctx) {
        const x = this.x + Math.cos(this.rotation) * this.offset
        const y = this.y + Math.sin(this.rotation) * this.offset

        ctx.save()
        ctx.translate(x, y)
        ctx.scale(this.scale, this.scale)
        ctx.fillStyle = this.fillStyle
        ctx.globalAlpha = this.alpha
        ctx.fillRect(-this.halfWidth, -this.halfHeight, this.width, this.height)
        ctx.restore()
      }
    }

    onMounted(() => {
      setTimeout(() => {
        getAllFigure()
      }, 100)
    })

    return {
      mousemove,
      content,
      scrollBox,
      left,
      canvas,
      canvasWidth,
      canvasHeight,
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
  background-color: #000
  .scrollBox
    width: 95%
    height: 90%
    // border: 1px solid #ccc
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
        z-index: 0
        pointer-events: none
      .box
        height: 100%
        +flex-center
        flex-direction: column
        padding: 0 50px
        position: relative
        .row
          position: relative
        figure
          padding: 30px 10px
          +flex-center
          cursor: pointer
          position: relative
          figcaption
            max-width: 160px
            text-align: center
            padding: 10px
            color: #fff
          img
            transition: all .4s ease
            min-width: 90px
          &:hover
            img
              filter: invert(80%)
            &.off img
              filter: grayscale(100%)
</style>
